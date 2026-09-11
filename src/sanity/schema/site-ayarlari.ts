import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Tek kayitlik ayar belgesi: buronun kimlik ve iletisim bilgileri.
 * Sitede logo, footer, iletisim sayfasi ve yapisal veriler buradan beslenir.
 */
export const siteAyarlari = defineType({
  name: "siteAyarlari",
  title: "Site Ayarları",
  type: "document",
  groups: [
    { name: "kimlik", title: "Kimlik", default: true },
    { name: "iletisim", title: "İletişim" },
    { name: "sosyal", title: "Sosyal Medya" },
    { name: "seo", title: "Arama Motoru" },
  ],
  fields: [
    defineField({
      name: "buroAdi",
      title: "Büro adı",
      type: "string",
      group: "kimlik",
      initialValue: "AKK Hukuk ve Danışmanlık",
      validation: (kural) => kural.required(),
    }),
    defineField({
      name: "slogan",
      title: "Slogan",
      type: "string",
      group: "kimlik",
      description: "Logonun yanında ve sekme başlığında görünür. Sonuç vaadi içermemelidir.",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "kimlik",
      options: { hotspot: true },
      description: "Boş bırakılırsa sitedeki yazılı logo kullanılır. Tercihen şeffaf zeminli PNG veya SVG.",
      fields: [defineField({ name: "alt", title: "Görsel açıklaması", type: "string" })],
    }),
    defineField({
      name: "footerMetni",
      title: "Alt bilgi açıklaması",
      type: "text",
      rows: 3,
      group: "kimlik",
    }),
    defineField({
      name: "baro",
      title: "Bağlı olunan baro",
      type: "string",
      group: "kimlik",
      initialValue: "Ankara 2 No'lu Barosu",
    }),
    defineField({
      name: "sicilNo",
      title: "Baro sicil numarası",
      type: "string",
      group: "kimlik",
      description: "İsteğe bağlı. Girildiğinde alt bilgide gösterilir.",
    }),

    defineField({
      name: "eposta",
      title: "E-posta",
      type: "string",
      group: "iletisim",
      validation: (kural) => kural.email().error("Geçerli bir e-posta adresi girin."),
    }),
    defineField({
      name: "telefon",
      title: "Telefon",
      type: "string",
      group: "iletisim",
      description: "Görünen biçim. Örnek: +90 (312) 123 45 67",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp numarası",
      type: "string",
      group: "iletisim",
      description: "Yalnızca rakam, ülke koduyla birlikte. Örnek: 905321234567",
    }),
    defineField({
      name: "whatsappMesaji",
      title: "WhatsApp hazır mesajı",
      type: "string",
      group: "iletisim",
    }),
    defineField({
      name: "adresSatirlari",
      title: "Adres",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      group: "iletisim",
      description: "Her satır ayrı bir madde olarak girilir.",
    }),
    defineField({
      name: "adresSokak",
      title: "Adres — tek satır (yapısal veri)",
      type: "string",
      group: "iletisim",
      description: "Mahalle, cadde, bina ve kat/daire tek satırda. Arama motorlarına bu biçimde bildirilir.",
    }),
    defineField({
      name: "postaKodu",
      title: "Posta kodu",
      type: "string",
      group: "iletisim",
      description: "Yapısal veride kullanılır (örn. 06520).",
    }),
    defineField({
      name: "ilce",
      title: "İlçe",
      type: "string",
      group: "iletisim",
      description: "Yapısal veride kullanılır (örn. Çankaya).",
    }),
    defineField({
      name: "il",
      title: "İl",
      type: "string",
      group: "iletisim",
      description: "Yapısal veride kullanılır (örn. Ankara).",
    }),
    defineField({
      name: "haritaSorgusu",
      title: "Harita araması",
      type: "string",
      group: "iletisim",
      description: "İletişim sayfasındaki haritada aranacak adres metni.",
    }),
    defineField({
      name: "calismaSaatleri",
      title: "Çalışma saatleri",
      type: "string",
      group: "iletisim",
    }),

    defineField({
      name: "sosyal",
      title: "Sosyal medya hesapları",
      type: "array",
      group: "sosyal",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "X (Twitter)", value: "x" },
                  { title: "Instagram", value: "instagram" },
                  { title: "YouTube", value: "youtube" },
                ],
              },
              validation: (kural) => kural.required(),
            }),
            defineField({
              name: "adres",
              title: "Bağlantı adresi",
              type: "url",
              validation: (kural) => kural.required(),
            }),
          ],
          preview: { select: { title: "platform", subtitle: "adres" } },
        }),
      ],
    }),

    defineField({
      name: "seoAciklama",
      title: "Arama motoru açıklaması",
      type: "text",
      rows: 3,
      group: "seo",
      description: "Google sonuçlarında görünen açıklama. 150–160 karakter idealdir.",
      validation: (kural) => kural.max(200).warning("160 karakteri aşan açıklamalar kısaltılarak gösterilir."),
    }),
  ],
  preview: { prepare: () => ({ title: "Site Ayarları" }) },
});
