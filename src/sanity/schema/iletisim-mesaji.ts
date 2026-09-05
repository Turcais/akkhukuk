import { defineField, defineType } from "sanity";

/**
 * Iletisim formundan gelen mesajlar.
 * Panelde yalnizca okunur; sunucu tarafindan olusturulur.
 */
export const iletisimMesaji = defineType({
  name: "iletisimMesaji",
  title: "Gelen Mesaj",
  type: "document",
  readOnly: true,
  fields: [
    defineField({ name: "adSoyad", title: "Ad soyad", type: "string" }),
    defineField({ name: "eposta", title: "E-posta", type: "string" }),
    defineField({ name: "telefon", title: "Telefon", type: "string" }),
    defineField({ name: "konu", title: "Konu", type: "string" }),
    defineField({ name: "mesaj", title: "Mesaj", type: "text", rows: 8 }),
    defineField({ name: "gelisTarihi", title: "Geliş tarihi", type: "datetime" }),
  ],
  orderings: [{ title: "En yeni", name: "yeniOnce", by: [{ field: "gelisTarihi", direction: "desc" }] }],
  preview: {
    select: { title: "adSoyad", subtitle: "konu", tarih: "gelisTarihi" },
    prepare: ({ title, subtitle, tarih }) => ({
      title: title ?? "İsimsiz",
      subtitle: [subtitle, tarih ? new Date(tarih).toLocaleDateString("tr-TR") : null].filter(Boolean).join(" · "),
    }),
  },
});
