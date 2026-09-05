import { defineArrayMember, defineField, defineType } from "sanity";

/** Yasal uyari, KVKK aydinlatma metni, gizlilik ve cerez politikasi. */
export const kurumsalMetin = defineType({
  name: "kurumsalMetin",
  title: "Kurumsal Metin",
  type: "document",
  fields: [
    defineField({
      name: "baslik",
      title: "Başlık",
      type: "string",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "anahtar",
      title: "Sayfa",
      type: "string",
      readOnly: ({ value }) => Boolean(value),
      options: {
        list: [
          { title: "Yasal Uyarı", value: "yasal-uyari" },
          { title: "KVKK Aydınlatma Metni", value: "kvkk-aydinlatma-metni" },
          { title: "Gizlilik Politikası", value: "gizlilik-politikasi" },
          { title: "Çerez Politikası", value: "cerez-politikasi" },
        ],
      },
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "ozet",
      title: "Özet",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "guncelleme",
      title: "Son güncelleme",
      type: "date",
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
    defineField({
      name: "govde",
      title: "Metin",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Paragraf", value: "normal" },
            { title: "Ara başlık", value: "h2" },
          ],
          lists: [{ title: "Madde", value: "bullet" }],
          marks: { decorators: [{ title: "Kalın", value: "strong" }, { title: "İtalik", value: "em" }] },
        }),
      ],
    }),
  ],
  preview: { select: { title: "baslik", subtitle: "anahtar" } },
});
