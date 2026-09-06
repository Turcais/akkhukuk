import { sanityFetch } from "@/sanity/client";
import { siteAyarlariSorgusu } from "@/sanity/queries";
import { site } from "./site";

/**
 * Site ayarlari: once yonetim panelinden, kayit yoksa buradaki
 * varsayilanlardan okunur. Panelde bos birakilan her alan da varsayilana
 * duser; boylece paneli kismi doldurmak guvenlidir.
 *
 * NOT: Asagidaki iletisim bilgileri yer tutucudur. Yayina almadan once
 * yonetim panelindeki "Site Ayarlari" bolumunden gercek bilgilerle
 * degistirilmelidir. Bkz. docs/yayin-oncesi-kontrol-listesi.md
 */

export const varsayilanIletisim = {
  eposta: "info@akkhukuk.com.tr",
  telefon: "+90 (312) 000 00 00",
  whatsapp: "905000000000",
  whatsappMesaji: "Merhaba, hukuki bir konuda görüşme talep etmek istiyorum.",
  adresSatirlari: ["Çankaya", "Ankara"],
  haritaSorgusu: "Çankaya, Ankara",
  calismaSaatleri: "Pazartesi – Cuma · 09.00 – 18.00",
} as const;

export type SosyalBaglanti = { platform: string; adres: string };

type PanelAyarlari = {
  buroAdi?: string;
  slogan?: string;
  footerMetni?: string;
  seoAciklama?: string;
  eposta?: string;
  telefon?: string;
  whatsapp?: string;
  whatsappMesaji?: string;
  adresSatirlari?: string[];
  haritaSorgusu?: string;
  calismaSaatleri?: string;
  baro?: string;
  sicilNo?: string;
  sosyal?: SosyalBaglanti[];
  logo?: { asset?: { _ref: string }; alt?: string };
};

export type Ayarlar = {
  buroAdi: string;
  /**
   * Telefon ve WhatsApp gercek deger mi?
   *
   * Yer tutucu numara gosterilmez: uydurma bir numara, siteyi eksik degil
   * sahte gosterir. Panelden gercek numara girildigi anda ilgili baglantilar
   * kendiliginden gorunur hale gelir.
   */
  telefonVar: boolean;
  whatsappVar: boolean;
  slogan: string;
  footerMetni: string;
  seoAciklama: string;
  eposta: string;
  telefon: string;
  telefonHref: string;
  whatsappHref: string;
  adresSatirlari: string[];
  adresTekSatir: string;
  haritaSorgusu: string;
  calismaSaatleri: string;
  baro: string;
  sicilNo: string;
  sosyal: SosyalBaglanti[];
  logo?: { asset?: { _ref: string }; alt?: string };
};

/** Bos string panelde silinmis alan demektir; varsayilana duser. */
const sec = (deger: string | undefined, varsayilan: string) => deger?.trim() || varsayilan;

export async function ayarlariGetir(): Promise<Ayarlar> {
  const panel = await sanityFetch<PanelAyarlari | null>(siteAyarlariSorgusu, {}, null, {
    tags: ["siteAyarlari"],
  });

  const telefon = sec(panel?.telefon, varsayilanIletisim.telefon);
  const whatsapp = sec(panel?.whatsapp, varsayilanIletisim.whatsapp);
  const whatsappMesaji = sec(panel?.whatsappMesaji, varsayilanIletisim.whatsappMesaji);
  const adresSatirlari = panel?.adresSatirlari?.filter(Boolean).length
    ? panel.adresSatirlari.filter(Boolean)
    : [...varsayilanIletisim.adresSatirlari];

  const telefonVar = telefon !== varsayilanIletisim.telefon;
  const whatsappVar = whatsapp !== varsayilanIletisim.whatsapp;

  return {
    buroAdi: sec(panel?.buroAdi, site.name),
    telefonVar,
    whatsappVar,
    slogan: sec(panel?.slogan, site.tagline),
    footerMetni: sec(
      panel?.footerMetni,
      "Ankara'da faaliyet gösteren avukatlık ve hukuki danışmanlık bürosu. Şirketler, vakıflar ve dernekler ile gerçek kişilere hukuki destek sunuyoruz.",
    ),
    seoAciklama: sec(panel?.seoAciklama, site.description),
    eposta: sec(panel?.eposta, varsayilanIletisim.eposta),
    telefon,
    telefonHref: `tel:${telefon.replace(/[^\d+]/g, "")}`,
    whatsappHref: `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMesaji)}`,
    adresSatirlari,
    adresTekSatir: adresSatirlari.join(", "),
    haritaSorgusu: sec(panel?.haritaSorgusu, varsayilanIletisim.haritaSorgusu),
    calismaSaatleri: sec(panel?.calismaSaatleri, varsayilanIletisim.calismaSaatleri),
    baro: sec(panel?.baro, site.bar),
    sicilNo: sec(panel?.sicilNo, ""),
    sosyal: panel?.sosyal?.filter((baglanti) => baglanti?.adres) ?? [],
    logo: panel?.logo?.asset ? panel.logo : undefined,
  };
}
