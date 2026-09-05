import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Sabit sayfalarin ve ana sayfa bolumlerinin metinleri.
 *
 * Her kayit bir "anahtar" ile siteye baglanir; anahtar degistirilmemelidir.
 * Bos birakilan her alan koddaki varsayilan metne duser.
 */
export const sayfaMetni = defineType({
  name: "sayfaMetni",
  title: "Sayfa Metni",
  type: "document",
  fields: [
    defineField({
      name: "anahtar",
      title: "Anahtar",
      type: "string",
      readOnly: ({ value }) => Boolean(value),
      description: "Metnin siteye bağlandığı kimliktir; oluşturduktan sonra değiştirilmez.",
      options: {
        list: [
          { title: "Ana sayfa — üst bölüm", value: "anasayfa-hero" },
          { title: "Ana sayfa — güven şeridi", value: "anasayfa-guven" },
          { title: "Ana sayfa — büro tanıtımı", value: "anasayfa-tanitim" },
          { title: "Ana sayfa — levha (tek cümlelik ilke)", value: "anasayfa-levha" },
          { title: "Ana sayfa — çalışma alanları başlığı", value: "anasayfa-alanlar" },
          { title: "Ana sayfa — çalışma yöntemi", value: "anasayfa-yontem" },
          { title: "Ana sayfa — ekip başlığı", value: "anasayfa-ekip" },
          { title: "Ana sayfa — yayınlar başlığı", value: "anasayfa-yayinlar" },
          { title: "Ana sayfa — kapanış çağrısı", value: "anasayfa-cagri" },
          { title: "Hakkımızda", value: "hakkimizda" },
          { title: "Çalışma alanları — sayfa başı", value: "alanlar-sayfa" },
          { title: "Ekibimiz — sayfa başı", value: "ekip-sayfa" },
          { title: "Yayınlar — sayfa başı", value: "yayinlar-sayfa" },
          { title: "Sıkça sorulan sorular — sayfa başı", value: "sss-sayfa" },
          { title: "İletişim — sayfa başı", value: "iletisim-sayfa" },
        ],
      },
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "ustBaslik",
      title: "Üst başlık",
      type: "string",
      description: "Başlığın üstünde küçük harflerle görünen etiket.",
    }),
    defineField({
      name: "baslik",
      title: "Başlık",
      type: "string",
    }),
    defineField({
      name: "altBaslik",
      title: "Alt başlık / açıklama",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "paragraflar",
      title: "Paragraflar",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 5 })],
      description: "Uzun metin bölümleri için. Her madde bir paragraftır.",
    }),
    defineField({
      name: "maddeler",
      title: "Maddeler",
      type: "array",
      description: "Başlıklı madde listesi (özellikler, adımlar, değerler).",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "baslik", title: "Başlık", type: "string" }),
            defineField({ name: "metin", title: "Metin", type: "text", rows: 3 }),
            defineField({
              name: "etiket",
              title: "Numara / etiket",
              type: "string",
              description: "İsteğe bağlı. Örnek: 01",
            }),
          ],
          preview: { select: { title: "baslik", subtitle: "metin" } },
        }),
      ],
    }),
    defineField({
      name: "birinciButonMetni",
      title: "Birinci buton metni",
      type: "string",
    }),
    defineField({
      name: "birinciButonAdresi",
      title: "Birinci buton adresi",
      type: "string",
      description: "Site içi adres. Örnek: /iletisim",
    }),
    defineField({
      name: "ikinciButonMetni",
      title: "İkinci buton metni",
      type: "string",
    }),
    defineField({
      name: "ikinciButonAdresi",
      title: "İkinci buton adresi",
      type: "string",
    }),
    defineField({
      name: "gorsel",
      title: "Görsel",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Görsel açıklaması", type: "string" })],
    }),
    defineField({
      name: "seoAciklama",
      title: "Arama motoru açıklaması",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { anahtar: "anahtar", baslik: "baslik" },
    prepare: ({ anahtar, baslik }) => ({ title: anahtar ?? "Sayfa metni", subtitle: baslik }),
  },
});
