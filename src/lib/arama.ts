import { calismaAlaniGetir } from "./veri";
import { calismaAlanlariGetir, ekipGetir, rehberleriGetir, sikSorulanlariGetir, yazilarGetir } from "./veri";
import { yasalMenu } from "./site";

/**
 * Site ici arama.
 *
 * Dizin sunucuda uretilir, tarayiciya tek dosya halinde iner ve arama
 * orada yapilir: yazarken bekleme olmaz, sunucuya istek gitmez. Site
 * birkac yuz kayittan olusuyor; bu olcekte harici bir arama servisi
 * kurmak fayda degil bagimlilik uretir.
 */

export type AramaKaydi = {
  tur: "alan" | "yazi" | "rehber" | "soru" | "kisi" | "sayfa";
  baslik: string;
  ozet: string;
  adres: string;
  /** Baslikta gecmeyen ama aranabilmesi gereken terimler */
  terimler: string;
};

const turEtiketleri: Record<AramaKaydi["tur"], string> = {
  alan: "Çalışma alanı",
  yazi: "Yayın",
  rehber: "Rehber",
  soru: "Sık sorulan soru",
  kisi: "Ekip",
  sayfa: "Sayfa",
};

export function turEtiketi(tur: AramaKaydi["tur"]) {
  return turEtiketleri[tur];
}

/**
 * Turkce metni karsilastirmaya hazirlar.
 *
 * "Sözleşme" yazan bir baslik, "sozlesme" diye arayan kullaniciya da
 * bulunmalidir; klavye duzeni ve acele yazim yuzunden aksanlar cogu zaman
 * girilmez. Kucuk harfe cevirme Turkce yerel ayariyla yapilir, yoksa
 * "İ" harfi "i̇" olur ve eslesme kacar.
 */
const harfler: Record<string, string> = {
  ı: "i", ş: "s", ğ: "g", ü: "u", ö: "o", ç: "c",
  â: "a", î: "i", û: "u", "'": "", "’": "",
};

export function sadelestir(metin: string) {
  return metin
    .toLocaleLowerCase("tr")
    .replace(/[ışğüöçâîû'’]/g, (h) => harfler[h] ?? h)
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Site genelindeki aranabilir icerigi tek listede toplar. */
export async function aramaDizini(): Promise<AramaKaydi[]> {
  const [alanlar, ekip, yazilar, sorular, rehberler] = await Promise.all([
    calismaAlanlariGetir(),
    ekipGetir(),
    yazilarGetir(),
    sikSorulanlariGetir(),
    rehberleriGetir(),
  ]);

  const alanDetaylari = await Promise.all(alanlar.map((alan) => calismaAlaniGetir(alan.slug)));

  const kayitlar: AramaKaydi[] = [];

  for (const alan of alanDetaylari) {
    if (!alan) continue;
    kayitlar.push({
      tur: "alan",
      baslik: alan.baslik,
      ozet: alan.ozet,
      adres: `/calisma-alanlarimiz/${alan.slug}`,
      /* Hizmet maddeleri ve sorular da aranabilir olmali: kullanici
         "muris muvazaasi" diye arayip alan sayfasina ulasabilmeli. */
      terimler: [alan.giris, ...alan.hizmetler, ...alan.kimlerIcin, ...alan.sorular.map((s) => s.soru)]
        .filter(Boolean)
        .join(" "),
    });

    for (const soru of alan.sorular) {
      kayitlar.push({
        tur: "soru",
        baslik: soru.soru,
        ozet: soru.cevap,
        adres: `/calisma-alanlarimiz/${alan.slug}`,
        terimler: alan.baslik,
      });
    }
  }

  for (const uye of ekip) {
    kayitlar.push({
      tur: "kisi",
      baslik: uye.ad,
      ozet: uye.kisaTanitim,
      adres: `/ekibimiz/${uye.slug}`,
      terimler: [uye.unvan, ...uye.uzmanlikAlanlari.map((alan) => alan.baslik)].join(" "),
    });
  }

  for (const yazi of yazilar) {
    kayitlar.push({
      tur: "yazi",
      baslik: yazi.baslik,
      ozet: yazi.ozet,
      adres: `/yayinlar/${yazi.slug}`,
      terimler: yazi.kategoriler.map((k) => k.baslik).join(" "),
    });
  }

  for (const rehber of rehberler) {
    kayitlar.push({
      tur: "rehber",
      baslik: rehber.baslik,
      ozet: rehber.ozet,
      adres: `/rehberler/${rehber.slug}`,
      terimler: "vekaletname noter belge hazirlik gorusme",
    });
  }

  for (const soru of sorular) {
    kayitlar.push({
      tur: "soru",
      baslik: soru.soru,
      ozet: soru.cevap,
      adres: "/sikca-sorulan-sorular",
      terimler: soru.kategori,
    });
  }

  const sabitSayfalar = [
    { baslik: "Hakkımızda", ozet: "Büro, çalışma yaklaşımı ve gizlilik.", adres: "/hakkimizda" },
    { baslik: "İletişim", ozet: "Görüşme talebi, adres ve çalışma saatleri.", adres: "/iletisim" },
    ...yasalMenu.map((oge) => ({ baslik: oge.baslik, ozet: "Kurumsal metin.", adres: oge.adres })),
  ];

  for (const sayfa of sabitSayfalar) {
    kayitlar.push({ tur: "sayfa", ...sayfa, terimler: "" });
  }

  return kayitlar;
}

/**
 * Kayitlari sorguya gore puanlar.
 *
 * Puanlama basit tutuldu ve bilincli olarak baslik lehine egilimli:
 * "bosanma" arayan biri once bosanmayla ilgili alanin kendisini gormeli,
 * bosanmadan soz eden bir yaziyi degil.
 */
export function ara(kayitlar: AramaKaydi[], sorgu: string) {
  const kelimeler = sadelestir(sorgu).split(" ").filter((k) => k.length > 1);
  if (kelimeler.length === 0) return [];

  const siralanmis = kayitlar
    .map((kayit) => {
      const baslik = sadelestir(kayit.baslik);
      const ozet = sadelestir(kayit.ozet);
      const terimler = sadelestir(kayit.terimler);

      let puan = 0;
      for (const kelime of kelimeler) {
        if (baslik.startsWith(kelime)) puan += 12;
        else if (baslik.includes(kelime)) puan += 8;
        if (ozet.includes(kelime)) puan += 3;
        if (terimler.includes(kelime)) puan += 2;
      }

      /* Tum kelimeler eslesmiyorsa sonuc gosterilmez; tek kelimesi tutan
         yuzlerce kaydi listelemek aramayi ise yaramaz hale getirir. */
      const tumu = kelimeler.every(
        (kelime) => baslik.includes(kelime) || ozet.includes(kelime) || terimler.includes(kelime),
      );
      return tumu ? { kayit, puan } : null;
    })
    .filter((s): s is { kayit: AramaKaydi; puan: number } => s !== null)
    .sort((a, b) => b.puan - a.puan);

  return siralanmis.map((s) => s.kayit);
}
