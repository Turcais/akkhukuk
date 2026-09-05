import { defineArrayMember, defineField, defineType } from "sanity";

/** Bilgilendirme yazilari (blog). */
export const yazi = defineType({
  name: "yazi",
  title: "Yayın",
  type: "document",
  groups: [
    { name: "icerik", title: "İçerik", default: true },
    { name: "kunye", title: "Künye" },
    { name: "seo", title: "Arama Motoru" },
  ],
  fields: [
    defineField({
      name: "baslik",
      title: "Başlık",
      type: "string",
      group: "icerik",
      validation: (kural) => kural.required().max(120),
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
      name: "ozet",
      title: "Özet",
      type: "text",
      rows: 3,
      group: "icerik",
      description: "Listelerde ve paylaşımlarda görünen giriş metni.",
      validation: (kural) => kural.required().max(300),
    }),
    defineField({
      name: "kapak",
      title: "Kapak görseli",
      type: "image",
      group: "icerik",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Görsel açıklaması", type: "string" })],
    }),
    defineField({
      name: "govde",
      title: "Yazı",
      type: "array",
      group: "icerik",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Paragraf", value: "normal" },
            { title: "Ara başlık", value: "h2" },
            { title: "Alt başlık", value: "h3" },
            { title: "Alıntı", value: "blockquote" },
          ],
          lists: [
            { title: "Madde", value: "bullet" },
            { title: "Numaralı", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Kalın", value: "strong" },
              { title: "İtalik", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                title: "Bağlantı",
                type: "object",
                fields: [
                  defineField({ name: "href", title: "Adres", type: "url", validation: (k) => k.required() }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Görsel açıklaması", type: "string" })],
        }),
      ],
    }),

    defineField({
      name: "yazar",
      title: "Yazar",
      type: "reference",
      group: "kunye",
      to: [{ type: "ekipUyesi" }],
    }),
    defineField({
      name: "kategoriler",
      title: "Kategoriler",
      type: "array",
      group: "kunye",
      of: [defineArrayMember({ type: "reference", to: [{ type: "kategori" }] })],
    }),
    defineField({
      name: "ilgiliAlan",
      title: "İlgili çalışma alanı",
      type: "reference",
      group: "kunye",
      to: [{ type: "calismaAlani" }],
      description: "Seçilirse yazı, o alanın sayfasında da listelenir.",
    }),
    defineField({
      name: "yayinTarihi",
      title: "Yayın tarihi",
      type: "datetime",
      group: "kunye",
      initialValue: () => new Date().toISOString(),
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "oneCikan",
      title: "Ana sayfada öne çıkar",
      type: "boolean",
      group: "kunye",
      initialValue: false,
    }),

    defineField({
      name: "seoAciklama",
      title: "Arama motoru açıklaması",
      type: "text",
      rows: 3,
      group: "seo",
      description: "Boş bırakılırsa özet kullanılır.",
      validation: (kural) => kural.max(200).warning("160 karakteri aşan açıklamalar kısaltılır."),
    }),
  ],
  orderings: [{ title: "En yeni", name: "yeniOnce", by: [{ field: "yayinTarihi", direction: "desc" }] }],
  preview: { select: { title: "baslik", subtitle: "ozet", media: "kapak" } },
});
