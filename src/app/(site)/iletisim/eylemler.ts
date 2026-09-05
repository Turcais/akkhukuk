"use server";

import { Resend } from "resend";
import { z } from "zod";
import { writeClient } from "@/sanity/client";
import { varsayilanIletisim } from "@/lib/ayarlar";
import { site } from "@/lib/site";

/**
 * Iletisim formu sunucu eylemi.
 *
 * Mesaj iki kanaldan iletilir: yonetim paneline kayit ve bildirim e-postasi.
 * Biri calistigi surece mesaj kaybolmaz.
 */

const sema = z.object({
  adSoyad: z.string().trim().min(2, "Lütfen adınızı ve soyadınızı yazın.").max(120),
  eposta: z.email("Geçerli bir e-posta adresi yazın.").max(200),
  telefon: z.string().trim().max(40).optional(),
  konu: z.string().trim().max(160).optional(),
  mesaj: z
    .string()
    .trim()
    .min(20, "Lütfen konunuzu birkaç cümleyle özetleyin (en az 20 karakter).")
    .max(4000, "Mesajınız çok uzun. Ayrıntıları görüşmede konuşalım."),
  onay: z.literal("evet", { message: "Devam etmek için aydınlatma metnini onaylamanız gerekir." }),
  /* Bot tuzagi: gorunmez alan. Doldurulmussa istek sessizce yutulur. */
  adres: z.string().max(0).optional(),
});

export type FormDurumu = {
  durum: "bos" | "basarili" | "hata";
  mesaj?: string;
  alanHatalari?: Partial<Record<"adSoyad" | "eposta" | "telefon" | "konu" | "mesaj" | "onay", string>>;
};

type Veri = z.infer<typeof sema>;

async function paneleKaydet(veri: Veri) {
  if (!writeClient) return false;
  await writeClient.create({
    _type: "iletisimMesaji",
    adSoyad: veri.adSoyad,
    eposta: veri.eposta,
    telefon: veri.telefon || undefined,
    konu: veri.konu || undefined,
    mesaj: veri.mesaj,
    gelisTarihi: new Date().toISOString(),
  });
  return true;
}

async function bildirimGonder(veri: Veri) {
  const anahtar = process.env.RESEND_API_KEY;
  if (!anahtar) return false;

  const resend = new Resend(anahtar);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? `${site.shortName} <onboarding@resend.dev>`,
    to: process.env.CONTACT_TO ?? varsayilanIletisim.eposta,
    replyTo: veri.eposta,
    subject: veri.konu?.trim()
      ? `[Site] ${veri.konu}`
      : `[Site] ${veri.adSoyad} — yeni başvuru`,
    text: [
      `Ad Soyad: ${veri.adSoyad}`,
      `E-posta: ${veri.eposta}`,
      veri.telefon?.trim() ? `Telefon: ${veri.telefon}` : null,
      veri.konu?.trim() ? `Konu: ${veri.konu}` : null,
      "",
      veri.mesaj,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) throw new Error(error.message);
  return true;
}

export async function mesajGonder(_onceki: FormDurumu, form: FormData): Promise<FormDurumu> {
  const cozum = sema.safeParse({
    adSoyad: form.get("adSoyad"),
    eposta: form.get("eposta"),
    telefon: form.get("telefon"),
    konu: form.get("konu"),
    mesaj: form.get("mesaj"),
    onay: form.get("onay"),
    adres: form.get("adres"),
  });

  if (!cozum.success) {
    const alanHatalari: FormDurumu["alanHatalari"] = {};
    for (const sorun of cozum.error.issues) {
      const alan = sorun.path[0];
      if (alan === "adres") {
        /* Bot yakalandi: hata gostermeden basarili gibi don. */
        return { durum: "basarili", mesaj: "Başvurunuz alındı." };
      }
      if (typeof alan === "string" && !(alan in alanHatalari)) {
        alanHatalari[alan as keyof typeof alanHatalari] = sorun.message;
      }
    }
    return { durum: "hata", mesaj: "Lütfen işaretli alanları düzeltin.", alanHatalari };
  }

  const [kayit, posta] = await Promise.allSettled([
    paneleKaydet(cozum.data),
    bildirimGonder(cozum.data),
  ]);

  const kayitTamam = kayit.status === "fulfilled" && kayit.value;
  const postaTamam = posta.status === "fulfilled" && posta.value;

  if (kayit.status === "rejected") console.error("[iletisim] Panele kayıt başarısız:", kayit.reason);
  if (posta.status === "rejected") console.error("[iletisim] E-posta gönderilemedi:", posta.reason);

  if (!kayitTamam && !postaTamam) {
    return {
      durum: "hata",
      mesaj: "Başvurunuz şu anda iletilemedi. Lütfen doğrudan e-posta ya da telefonla ulaşın.",
    };
  }

  return {
    durum: "basarili",
    mesaj: "Başvurunuz bize ulaştı. Mesai saatleri içinde size dönüş yapacağız.",
  };
}
