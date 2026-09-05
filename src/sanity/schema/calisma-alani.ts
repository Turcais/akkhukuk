import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Bir hukuk / danismanlik alani.
 * Ana sayfadaki kartlar ve /calisma-alanlarimiz sayfalari buradan uretilir.
 */
export const calismaAlani = defineType({
  name: "calismaAlani",
  title: "Çalışma Alanı",
  type: "document",
  groups: [
    { name: "icerik", title: "İçerik", default: true },
    { name: "sorular", title: "Sık Sorulanlar" },
    { name: "seo", title: "Arama Motoru" },
  ],
  fields: [
    defineField({
      name: "baslik",
      title: "Başlık",
      type: "string",
      group: "icerik",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "kisaBaslik",
      title: "Kısa başlık",
      type: "string",
      group: "icerik",
      description: "Menü ve kartlarda kullanılır. Boş bırakılırsa başlık kullanılır.",
    }),
    defineField({
      name: "slug",
      title: "Adres (slug)",
      type: "slug",
      group: "icerik",
      options: { source: "baslik", maxLength: 96 },
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "sira",
      title: "Sıra",
      type: "number",
      group: "icerik",
      description: "Küçük sayı önce gösterilir.",
      initialValue: 10,
    }),
    defineField({
      name: "ikon",
      title: "Simge",
      type: "string",
      group: "icerik",
      options: {
        list: [
          { title: "Bina — şirketler", value: "bina" },
          { title: "Kurum — vakıf ve dernek", value: "kurum" },
          { title: "Sözleşme", value: "sozlesme" },
          { title: "Çalışan — iş hukuku", value: "calisan" },
          { title: "İnşaat", value: "insaat" },
          { title: "Tahsilat", value: "tahsilat" },
          { title: "Aile", value: "aile" },
          { title: "Adalet — ceza", value: "adalet" },
          { title: "Devlet — idare", value: "devlet" },
          { title: "Kalkan — veri koruma", value: "kalkan" },
          { title: "Marka", value: "marka" },
          { title: "Danışmanlık", value: "danismanlik" },
        ],
      },
      initialValue: "sozlesme",
    }),
    defineField({
      name: "ozet",
      title: "Özet",
      type: "text",
      rows: 2,
      group: "icerik",
      description: "Kartın altında görünen tek cümle.",
      validation: (kural) => kural.required().max(220),
    }),
    defineField({
      name: "giris",
      title: "Giriş paragrafı",
      type: "text",
      rows: 6,
      group: "icerik",
      description: "Alan sayfasının açılış metni. Sonuç taahhüdü ve üstünlük iddiası içermemelidir.",
    }),
    defineField({
      name: "hizmetler",
      title: "Bu alanda ne yapıyoruz?",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      group: "icerik",
    }),
    defineField({
      name: "kimlerIcin",
      title: "Kimler için?",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      group: "icerik",
    }),
    defineField({
      name: "sorular",
      title: "Sık sorulan sorular",
      type: "array",
      group: "sorular",
      description: "Bu sorular sayfada ve arama motoru sonuçlarında görünür.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "soru", title: "Soru", type: "string", validation: (k) => k.required() }),
            defineField({ name: "cevap", title: "Cevap", type: "text", rows: 4, validation: (k) => k.required() }),
          ],
          preview: { select: { title: "soru" } },
        }),
      ],
    }),
    defineField({
      name: "seoAciklama",
      title: "Arama motoru açıklaması",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (kural) => kural.max(200).warning("160 karakteri aşan açıklamalar kısaltılır."),
    }),
  ],
  orderings: [{ title: "Sıraya göre", name: "siraArtan", by: [{ field: "sira", direction: "asc" }] }],
  preview: { select: { title: "baslik", subtitle: "ozet" } },
});
