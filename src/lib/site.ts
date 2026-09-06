/**
 * Butonun degismeyen kimlik bilgileri.
 *
 * Buradaki degerler yalnizca yedektir: yonetim paneli (Sanity) kurulur
 * kurulmaz "Site Ayarlari" belgesindeki degerler bunlarin yerine gecer.
 * Bkz. src/lib/settings.ts
 */

export const site = {
  /** Yayin adresi. Vercel'de NEXT_PUBLIC_SITE_URL olarak tanimlayin. */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.akkhukuk.com.tr",
  name: "AKK Hukuk ve Danışmanlık",
  shortName: "AKK Hukuk",
  legalName: "AKK Hukuk ve Danışmanlık",
  tagline: "Avukatlık ve Hukuki Danışmanlık",
  description:
    "AKK Hukuk ve Danışmanlık; şirketler, vakıflar ve dernekler başta olmak üzere gerçek ve tüzel kişilere ticaret hukuku, sözleşmeler, iş hukuku, gayrimenkul, icra-iflas ve idare hukuku alanlarında avukatlık ve sürekli hukuki danışmanlık hizmeti sunar.",
  lang: "tr",
  locale: "tr_TR",
  city: "Ankara",
  bar: "Ankara 2 No'lu Barosu",
} as const;

/** Ust menu. "kisa" yalnizca dar ust menude, "baslik" her yerde kullanilir. */
export const anaMenu = [
  { baslik: "Hakkımızda", kisa: "Hakkımızda", adres: "/hakkimizda" },
  { baslik: "Çalışma Alanlarımız", kisa: "Çalışma Alanları", adres: "/calisma-alanlarimiz" },
  { baslik: "Ekibimiz", kisa: "Ekibimiz", adres: "/ekibimiz" },
  { baslik: "Yayınlar", kisa: "Yayınlar", adres: "/yayinlar" },
  { baslik: "Rehberler", kisa: "Rehberler", adres: "/rehberler" },
  { baslik: "Sıkça Sorulan Sorular", kisa: "S.S.S.", adres: "/sikca-sorulan-sorular" },
  { baslik: "İletişim", kisa: "İletişim", adres: "/iletisim" },
] as const;

/** Alt bilgideki kurumsal metin baglantilari. */
/** Alt bilgide menunun sonuna eklenen yardimci baglantilar. */
export const yardimciMenu = [{ baslik: "Sitede ara", adres: "/arama" }] as const;

export const yasalMenu = [
  { baslik: "Yasal Uyarı", adres: "/yasal-uyari" },
  { baslik: "KVKK Aydınlatma Metni", adres: "/kvkk-aydinlatma-metni" },
  { baslik: "Gizlilik Politikası", adres: "/gizlilik-politikasi" },
  { baslik: "Çerez Politikası", adres: "/cerez-politikasi" },
] as const;
