import { groq } from "next-sanity";

/** Tek kayitlik site ayarlari. */
export const siteAyarlariSorgusu = groq`
  *[_type == "siteAyarlari"][0] {
    buroAdi, slogan, footerMetni, seoAciklama, baro, sicilNo,
    eposta, telefon, whatsapp, whatsappMesaji,
    adresSatirlari, postaKodu, ilce, il, haritaSorgusu, calismaSaatleri,
    logo, sosyal[]{ platform, adres }
  }
`;

/** Anahtara gore sabit sayfa metni. */
export const sayfaMetniSorgusu = groq`
  *[_type == "sayfaMetni" && anahtar == $anahtar][0] {
    ustBaslik, baslik, altBaslik, paragraflar,
    maddeler[]{ baslik, metin, etiket },
    birinciButonMetni, birinciButonAdresi,
    ikinciButonMetni, ikinciButonAdresi,
    gorsel, seoAciklama
  }
`;

/** Tum calisma alanlari — liste icin hafif alanlar. */
export const calismaAlanlariSorgusu = groq`
  *[_type == "calismaAlani" && defined(slug.current)] | order(sira asc, baslik asc) {
    "slug": slug.current, baslik, kisaBaslik, ikon, ozet
  }
`;

/** Tek calisma alani — tum icerik. */
export const calismaAlaniSorgusu = groq`
  *[_type == "calismaAlani" && slug.current == $slug][0] {
    "slug": slug.current, baslik, kisaBaslik, ikon, ozet, giris,
    hizmetler, kimlerIcin, seoAciklama, surecBasligi,
    surec[]{ baslik, metin, sure },
    sorular[]{ soru, cevap }
  }
`;

export const calismaAlaniSluglariSorgusu = groq`
  *[_type == "calismaAlani" && defined(slug.current)].slug.current
`;

/** Ekip listesi. */
export const ekipSorgusu = groq`
  *[_type == "ekipUyesi" && aktif != false && defined(slug.current)] | order(sira asc, ad asc) {
    "slug": slug.current, ad, unvan, kisaTanitim, gorsel,
    "uzmanlikAlanlari": uzmanlikAlanlari[]->{ "slug": slug.current, baslik, kisaBaslik }
  }
`;

/** Tek ekip uyesi — ozgecmis dahil. */
export const ekipUyesiSorgusu = groq`
  *[_type == "ekipUyesi" && slug.current == $slug][0] {
    "slug": slug.current, ad, unvan, kisaTanitim, gorsel, biyografi,
    davaTurleri, egitim, uyelikler, sertifikalar, diller, eposta, linkedin,
    "uzmanlikAlanlari": uzmanlikAlanlari[]->{ "slug": slug.current, baslik, kisaBaslik }
  }
`;

export const ekipSluglariSorgusu = groq`
  *[_type == "ekipUyesi" && aktif != false && defined(slug.current)].slug.current
`;

/** Yayin listesi — govde haric. */
export const yazilarSorgusu = groq`
  *[_type == "yazi" && defined(slug.current)] | order(yayinTarihi desc) {
    "slug": slug.current, baslik, ozet, yayinTarihi, kapak, oneCikan,
    "yazar": yazar->{ "slug": slug.current, ad },
    "kategoriler": kategoriler[]->{ baslik, "slug": slug.current }
  }
`;

/** Tek yayin — govde dahil. */
export const yaziSorgusu = groq`
  *[_type == "yazi" && slug.current == $slug][0] {
    "slug": slug.current, baslik, ozet, kisaCevap, seoAciklama, yayinTarihi, kapak, govde,
    kaynaklar[]{ baslik, adres },
    "yazar": yazar->{ "slug": slug.current, ad, unvan, gorsel },
    "kategoriler": kategoriler[]->{ baslik, "slug": slug.current },
    "ilgiliAlan": ilgiliAlan->{ "slug": slug.current, baslik }
  }
`;

export const yaziSluglariSorgusu = groq`
  *[_type == "yazi" && defined(slug.current)].slug.current
`;

/** Sikca sorulan sorular. */
export const sikSorulanlarSorgusu = groq`
  *[_type == "sikSorulan"] | order(sira asc) { soru, cevap, kategori }
`;

/** Kurumsal metin (yasal uyari, KVKK vb.). */
export const kurumsalMetinSorgusu = groq`
  *[_type == "kurumsalMetin" && anahtar == $anahtar][0] {
    baslik, ozet, guncelleme, govde
  }
`;

/** Rehber listesi. */
export const rehberlerSorgusu = groq`
  *[_type == "rehber" && defined(slug.current)] | order(sira asc, baslik asc) {
    "slug": slug.current, baslik, ozet, guncelleme
  }
`;

/** Tek rehber. */
export const rehberSorgusu = groq`
  *[_type == "rehber" && slug.current == $slug][0] {
    "slug": slug.current, baslik, ozet, guncelleme, govde, seoAciklama
  }
`;

export const rehberSluglariSorgusu = groq`
  *[_type == "rehber" && defined(slug.current)].slug.current
`;
