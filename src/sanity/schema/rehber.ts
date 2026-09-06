import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Rehberler — muvekkilin islemini kolaylastiran pratik anlatimlar.
 * Yayinlardan farki: guncel bir konuyu degil, tekrar eden bir islemi anlatir.
 */
export const rehber = defineType({
  name: "rehber",
  title: "Rehber",
  type: "document",
  fields: [
    defineField({
      name: "baslik",
      title: "Başlık",
      type: "string",
      description: "Soru biçiminde yazmak arama sonuçlarında avantaj sağlar. Örnek: Vekâletname nasıl çıkarılır?",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "slug",
      title: "Adres (slug)",
      type: "slug",
      options: { source: "baslik", maxLength: 96 },
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "ozet",
      title: "Özet",
      type: "text",
      rows: 2,
      validation: (kural) => kural.required().max(280),
    }),
    defineField({
      name: "sira",
      title: "Sıra",
      type: "number",
      initialValue: 10,
    }),
    defineField({
      name: "guncelleme",
      title: "Son güncelleme",
      type: "date",
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
    defineField({
      name: "govde",
      title: "Rehber metni",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Paragraf", value: "normal" },
            { title: "Ara başlık", value: "h2" },
            { title: "Vurgu kutusu", value: "blockquote" },
          ],
          lists: [
            { title: "Madde", value: "bullet" },
            { title: "Numaralı", value: "number" },
          ],
          marks: { decorators: [{ title: "Kalın", value: "strong" }, { title: "İtalik", value: "em" }] },
        }),
      ],
    }),
    defineField({
      name: "seoAciklama",
      title: "Arama motoru açıklaması",
      type: "text",
      rows: 3,
      validation: (kural) => kural.max(200).warning("160 karakteri aşan açıklamalar kısaltılır."),
    }),
  ],
  orderings: [{ title: "Sıraya göre", name: "siraArtan", by: [{ field: "sira", direction: "asc" }] }],
  preview: { select: { title: "baslik", subtitle: "ozet" } },
});
