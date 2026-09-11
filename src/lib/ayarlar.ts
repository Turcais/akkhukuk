import { sanityFetch } from "@/sanity/client";
import { siteAyarlariSorgusu } from "@/sanity/queries";
import { site } from "./site";

/**
 * Site ayarlari: once yonetim panelinden, kayit yoksa buradaki
 * varsayilanlardan okunur. Panelde bos birakilan her alan da varsayilana
 * duser; boylece paneli kismi doldurmak guvenlidir.
 *
 * Buradaki iletisim bilgileri buronun bildirdigi gercek bilgilerdir.
 * Panelden degistirilebilir; bkz. docs/yayin-oncesi-kontrol-listesi.md
 */

/**
 * Yer tutucu degerler.
 *
 * Bir numara bunlardan biriyse sitede hic gosterilmez: uydurma bir
 * numara siteyi eksik degil sahte gosterir. Karsilastirma varsayilana
 * degil bu listeye bakar; varsayilanlar gercek degerlere donunce
 * "varsayilandan farkli mi" olcusu her numarayi yer tutucu sayardi.
 */
export const yerTutucu = {
  telefon: "+90 (312) 000 00 00",
  whatsapp: "905000000000",
} as const;

export const varsayilanIletisim = {
  eposta: "info@akkhukuk.com.tr",
  telefon: "+90 552 532 06 06",
  whatsapp: "905525320606",
  whatsappMesaji: "Merhaba, hukuki bir konuda görüşme talep etmek istiyorum.",
  adresSatirlari: [
    "Ehlibeyt Mah. Ceyhun Atuf Kansu Cad. No: 109",
    "Kat: 2 No: 3",
    "06520 Çankaya / Ankara",
  ],
  haritaSorgusu: "Ehlibeyt Mah. Ceyhun Atuf Kansu Cad. No:109, 06520 Çankaya/Ankara",
  /* Yapisal veri adresi parcali ister. Gorunen satirlar yalnizca sunum
     icindir; sokak, ilce, il ve posta kodu ayri tutulur ki satirlarin
     bicimi degistiginde yapisal veri sessizce bozulmasin. */
  adresSokak: "Ehlibeyt Mah. Ceyhun Atuf Kansu Cad. No: 109 Kat: 2 No: 3",
  postaKodu: "06520",
  ilce: "Çankaya",
  il: "Ankara",
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
  adresSokak?: string;
  postaKodu?: string;
  ilce?: string;
  il?: string;
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
  adresSokak: string;
  postaKodu: string;
  ilce: string;
  il: string;
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

  const telefonVar = telefon !== yerTutucu.telefon;
  const whatsappVar = whatsapp !== yerTutucu.whatsapp;

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
    adresSokak: sec(panel?.adresSokak, varsayilanIletisim.adresSokak),
    postaKodu: sec(panel?.postaKodu, varsayilanIletisim.postaKodu),
    ilce: sec(panel?.ilce, varsayilanIletisim.ilce),
    il: sec(panel?.il, varsayilanIletisim.il),
    calismaSaatleri: sec(panel?.calismaSaatleri, varsayilanIletisim.calismaSaatleri),
    baro: sec(panel?.baro, site.bar),
    sicilNo: sec(panel?.sicilNo, ""),
    sosyal: panel?.sosyal?.filter((baglanti) => baglanti?.adres) ?? [],
    logo: panel?.logo?.asset ? panel.logo : undefined,
  };
}
