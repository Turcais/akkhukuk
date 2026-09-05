import { defineField, defineType } from "sanity";

/** Yayin kategorileri. */
export const kategori = defineType({
  name: "kategori",
  title: "Kategori",
  type: "document",
  fields: [
    defineField({
      name: "baslik",
      title: "Başlık",
      type: "string",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "slug",
      title: "Adres (slug)",
      type: "slug",
      options: { source: "baslik", maxLength: 96 },
      validation: (kural) => kural.required(),
    }),
  ],
  preview: { select: { title: "baslik" } },
});
