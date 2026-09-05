import { defineField, defineType } from "sanity";

/** Sikca sorulan sorular sayfasindaki kayitlar. */
export const sikSorulan = defineType({
  name: "sikSorulan",
  title: "Sıkça Sorulan Soru",
  type: "document",
  fields: [
    defineField({
      name: "soru",
      title: "Soru",
      type: "string",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "cevap",
      title: "Cevap",
      type: "text",
      rows: 6,
      description: "Sonuç taahhüdü içermeyen, açık ve sade bir dille yazın.",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "kategori",
      title: "Başlık grubu",
      type: "string",
      options: {
        list: [
          { title: "Çalışma Usulü", value: "Çalışma Usulü" },
          { title: "Vekâlet", value: "Vekâlet" },
          { title: "Süreç", value: "Süreç" },
          { title: "Kurumsal", value: "Kurumsal" },
          { title: "Gizlilik", value: "Gizlilik" },
        ],
      },
      initialValue: "Çalışma Usulü",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "sira",
      title: "Sıra",
      type: "number",
      initialValue: 10,
    }),
  ],
  orderings: [{ title: "Sıraya göre", name: "siraArtan", by: [{ field: "sira", direction: "asc" }] }],
  preview: { select: { title: "soru", subtitle: "kategori" } },
});
