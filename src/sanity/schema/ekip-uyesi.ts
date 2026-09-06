import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Buroda calisan avukat ve hukukcular.
 * Yeni bir meslektas eklemek icin bu bolumden yeni kayit acmak yeterlidir.
 */
export const ekipUyesi = defineType({
  name: "ekipUyesi",
  title: "Ekip Üyesi",
  type: "document",
  groups: [
    { name: "kimlik", title: "Kimlik", default: true },
    { name: "ozgecmis", title: "Özgeçmiş" },
    { name: "iletisim", title: "İletişim" },
  ],
  fields: [
    defineField({
      name: "ad",
      title: "Ad soyad",
      type: "string",
      group: "kimlik",
      description: "Unvanla birlikte yazın. Örnek: Av. Ali Kaan KILIÇOĞLU",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "unvan",
      title: "Görev / unvan",
      type: "string",
      group: "kimlik",
      description: "Örnek: Kurucu Avukat, Avukat, Stajyer Avukat.",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "slug",
      title: "Adres (slug)",
      type: "slug",
      group: "kimlik",
      options: { source: "ad", maxLength: 96 },
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "sira",
      title: "Sıra",
      type: "number",
      group: "kimlik",
      initialValue: 10,
      description: "Küçük sayı önce gösterilir.",
    }),
    defineField({
      name: "aktif",
      title: "Sitede görünsün",
      type: "boolean",
      group: "kimlik",
      initialValue: true,
      description: "Kapatıldığında profil siteden kaldırılır, kayıt silinmez.",
    }),
    defineField({
      name: "gorsel",
      title: "Fotoğraf",
      type: "image",
      group: "kimlik",
      options: { hotspot: true },
      description: "Dikey, sade zeminli portre önerilir. Boş bırakılırsa baş harfler gösterilir.",
      fields: [defineField({ name: "alt", title: "Görsel açıklaması", type: "string" })],
    }),
    defineField({
      name: "kisaTanitim",
      title: "Kısa tanıtım",
      type: "text",
      rows: 2,
      group: "kimlik",
      description: "Ekip kartında görünen tek cümle.",
      validation: (kural) => kural.max(220),
    }),

    defineField({
      name: "biyografi",
      title: "Biyografi",
      type: "array",
      group: "ozgecmis",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Paragraf", value: "normal" }],
          lists: [{ title: "Madde", value: "bullet" }],
          marks: { decorators: [{ title: "Kalın", value: "strong" }, { title: "İtalik", value: "em" }] },
        }),
      ],
    }),
    defineField({
      name: "uzmanlikAlanlari",
      title: "Uzmanlık alanları",
      type: "array",
      group: "ozgecmis",
      of: [defineArrayMember({ type: "reference", to: [{ type: "calismaAlani" }] })],
      description: "Çalışma alanları bölümünden seçilir; profil sayfasında bağlantı olarak görünür.",
    }),
    defineField({
      name: "davaTurleri",
      title: "Baktığı dava ve iş türleri",
      type: "array",
      group: "ozgecmis",
      of: [defineArrayMember({ type: "string" })],
      description:
        "Uzmanlık alanlarından daha ayrıntılı, serbest yazılan liste. Örnek: İşe iade davaları, Trafik kazası tazminatı, Vakıf senedi değişikliği. Ziyaretçinin kendi meselesini burada birebir bulması amaçlanır.",
    }),
    defineField({
      name: "egitim",
      title: "Eğitim",
      type: "array",
      group: "ozgecmis",
      of: [defineArrayMember({ type: "string" })],
      description: "Her satır ayrı bir madde. Örnek: Lisans — Hukuk Fakültesi, Ankara Üniversitesi (2015)",
    }),
    defineField({
      name: "uyelikler",
      title: "Baro ve üyelikler",
      type: "array",
      group: "ozgecmis",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "sertifikalar",
      title: "Sertifika ve eğitimler",
      type: "array",
      group: "ozgecmis",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "diller",
      title: "Yabancı diller",
      type: "array",
      group: "ozgecmis",
      of: [defineArrayMember({ type: "string" })],
    }),

    defineField({
      name: "eposta",
      title: "E-posta",
      type: "string",
      group: "iletisim",
      validation: (kural) => kural.email().error("Geçerli bir e-posta adresi girin."),
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn adresi",
      type: "url",
      group: "iletisim",
    }),
  ],
  orderings: [{ title: "Sıraya göre", name: "siraArtan", by: [{ field: "sira", direction: "asc" }] }],
  preview: { select: { title: "ad", subtitle: "unvan", media: "gorsel" } },
});
