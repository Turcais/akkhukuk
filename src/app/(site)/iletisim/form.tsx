"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, TriangleAlert } from "lucide-react";
import { Buton } from "@/components/ui/buton";
import { cn } from "@/lib/utils";
import { mesajGonder, type FormDurumu } from "./eylemler";

const baslangic: FormDurumu = { durum: "bos" };

const alanSinifi =
  "w-full border border-cizgi-koyu bg-yuzey px-4 py-3 text-[0.95rem] text-murekkep outline-none transition-colors placeholder:text-metin-silik focus:border-kirmizi";

function Etiket({ htmlFor, children, zorunlu }: { htmlFor: string; children: string; zorunlu?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[0.8rem] font-medium tracking-wide text-metin">
      {children}
      {zorunlu ? <span className="ml-1 text-kirmizi">*</span> : null}
    </label>
  );
}

function Hata({ mesaj }: { mesaj?: string }) {
  if (!mesaj) return null;
  return <p className="mt-2 text-[0.82rem] text-kirmizi">{mesaj}</p>;
}

function GonderButonu() {
  const { pending } = useFormStatus();
  return (
    <Buton type="submit" boyut="genis" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Gönderiliyor…" : "Başvuruyu gönder"}
    </Buton>
  );
}

/** Iletisim formu. Sunucu eylemiyle calisir; JavaScript kapaliyken de gonderilir. */
export function IletisimFormu() {
  const [durum, eylem] = useActionState(mesajGonder, baslangic);
  const hatalar = durum.alanHatalari ?? {};

  if (durum.durum === "basarili") {
    return (
      <div className="border border-cizgi bg-yuzey p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-10 w-10 text-kirmizi" strokeWidth={1.2} aria-hidden="true" />
        <h2 className="mt-6 text-[1.4rem]">Başvurunuz alındı</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-metin-soluk">{durum.mesaj}</p>
        <p className="mx-auto mt-6 max-w-md text-[0.85rem] leading-relaxed text-metin-silik">
          Bu başvuru avukat-müvekkil ilişkisi kurmaz. Vekâlet ilişkisi, yazılı avukatlık sözleşmesi ve vekâletname
          ile doğar.
        </p>
      </div>
    );
  }

  return (
    <form action={eylem} noValidate className="border border-cizgi bg-yuzey p-7 sm:p-9">
      {durum.durum === "hata" && durum.mesaj ? (
        <p className="mb-7 flex items-start gap-3 border border-kirmizi/30 bg-kirmizi-yumusak px-4 py-3 text-[0.88rem] text-kirmizi-koyu">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.6} aria-hidden="true" />
          {durum.mesaj}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Etiket htmlFor="adSoyad" zorunlu>
            Ad Soyad
          </Etiket>
          <input
            id="adSoyad"
            name="adSoyad"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(hatalar.adSoyad)}
            className={cn(alanSinifi, hatalar.adSoyad && "border-kirmizi")}
          />
          <Hata mesaj={hatalar.adSoyad} />
        </div>

        <div>
          <Etiket htmlFor="eposta" zorunlu>
            E-posta
          </Etiket>
          <input
            id="eposta"
            name="eposta"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(hatalar.eposta)}
            className={cn(alanSinifi, hatalar.eposta && "border-kirmizi")}
          />
          <Hata mesaj={hatalar.eposta} />
        </div>

        <div>
          <Etiket htmlFor="telefon">Telefon</Etiket>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            placeholder="İsteğe bağlı"
            className={alanSinifi}
          />
          <Hata mesaj={hatalar.telefon} />
        </div>

        <div>
          <Etiket htmlFor="konu">Konu</Etiket>
          <input
            id="konu"
            name="konu"
            type="text"
            placeholder="Örnek: Şirket ortaklık sözleşmesi"
            className={alanSinifi}
          />
          <Hata mesaj={hatalar.konu} />
        </div>
      </div>

      <div className="mt-6">
        <Etiket htmlFor="mesaj" zorunlu>
          Konunuz
        </Etiket>
        <textarea
          id="mesaj"
          name="mesaj"
          rows={7}
          required
          aria-invalid={Boolean(hatalar.mesaj)}
          placeholder="Meselenizi kısaca özetleyin. Bu aşamada ayrıntılı belge ve bilgi paylaşmanıza gerek yoktur."
          className={cn(alanSinifi, "resize-y", hatalar.mesaj && "border-kirmizi")}
        />
        <Hata mesaj={hatalar.mesaj} />
      </div>

      {/* Bot tuzagi — ekran okuyuculardan ve gozden gizli */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="adres">Adres</label>
        <input id="adres" name="adres" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 flex items-start gap-3">
        <input
          id="onay"
          name="onay"
          type="checkbox"
          value="evet"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--kirmizi)]"
          aria-invalid={Boolean(hatalar.onay)}
        />
        <label htmlFor="onay" className="text-[0.85rem] leading-relaxed text-metin-soluk">
          <Link href="/kvkk-aydinlatma-metni" className="text-kirmizi underline underline-offset-4">
            KVKK Aydınlatma Metni
          </Link>
          &apos;ni okudum; kişisel verilerimin başvurumun değerlendirilmesi amacıyla işlenmesini kabul ediyorum.
        </label>
      </div>
      <Hata mesaj={hatalar.onay} />

      <div className="mt-8">
        <GonderButonu />
      </div>

      <p className="mt-6 text-[0.8rem] leading-relaxed text-metin-silik">
        Bu formun doldurulması avukat-müvekkil ilişkisi kurmaz. Lütfen bu aşamada gizli belge ve dosya ayrıntısı
        paylaşmayınız.
      </p>
    </form>
  );
}
