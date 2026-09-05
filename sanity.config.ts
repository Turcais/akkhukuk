import { defineConfig } from "sanity";
import { structureTool, type StructureBuilder } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { semaTipleri } from "@/sanity/schema";

/**
 * AKK Hukuk yonetim paneli. Siteye /studio adresinde gomulu calisir.
 *
 * "Site Ayarlari" tek kayitlik bir belgedir; listede degil, dogrudan
 * duzenleme ekrani olarak acilir.
 */

const tekKayitlar = new Set(["siteAyarlari"]);

function yapi(S: StructureBuilder) {
  return S.list()
    .title("AKK Hukuk")
    .items([
      S.listItem()
        .title("Site Ayarları")
        .id("siteAyarlari")
        .child(S.document().schemaType("siteAyarlari").documentId("siteAyarlari")),

      S.listItem()
        .title("Sayfa Metinleri")
        .schemaType("sayfaMetni")
        .child(S.documentTypeList("sayfaMetni").title("Sayfa Metinleri")),

      S.divider(),

      S.listItem()
        .title("Çalışma Alanları")
        .schemaType("calismaAlani")
        .child(
          S.documentTypeList("calismaAlani")
            .title("Çalışma Alanları")
            .defaultOrdering([{ field: "sira", direction: "asc" }]),
        ),

      S.listItem()
        .title("Ekip")
        .schemaType("ekipUyesi")
        .child(
          S.documentTypeList("ekipUyesi")
            .title("Ekip")
            .defaultOrdering([{ field: "sira", direction: "asc" }]),
        ),

      S.divider(),

      S.listItem()
        .title("Yayınlar")
        .schemaType("yazi")
        .child(
          S.documentTypeList("yazi")
            .title("Yayınlar")
            .defaultOrdering([{ field: "yayinTarihi", direction: "desc" }]),
        ),

      S.listItem()
        .title("Kategoriler")
        .schemaType("kategori")
        .child(S.documentTypeList("kategori").title("Kategoriler")),

      S.listItem()
        .title("Sıkça Sorulan Sorular")
        .schemaType("sikSorulan")
        .child(
          S.documentTypeList("sikSorulan")
            .title("Sıkça Sorulan Sorular")
            .defaultOrdering([{ field: "sira", direction: "asc" }]),
        ),

      S.divider(),

      S.listItem()
        .title("Kurumsal Metinler")
        .schemaType("kurumsalMetin")
        .child(S.documentTypeList("kurumsalMetin").title("Kurumsal Metinler")),

      S.listItem()
        .title("Gelen Mesajlar")
        .schemaType("iletisimMesaji")
        .child(
          S.documentTypeList("iletisimMesaji")
            .title("Gelen Mesajlar")
            .defaultOrdering([{ field: "gelisTarihi", direction: "desc" }]),
        ),
    ]);
}

export default defineConfig({
  name: "akkhukuk",
  title: "AKK Hukuk — Yönetim Paneli",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: semaTipleri,
    /* Tek kayitlik belgeler "yeni olustur" menusunde gorunmesin */
    templates: (sablonlar) => sablonlar.filter(({ schemaType }) => !tekKayitlar.has(schemaType)),
  },
  document: {
    actions: (eylemler, baglam) =>
      tekKayitlar.has(baglam.schemaType)
        ? eylemler.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : eylemler,
  },
  plugins: [structureTool({ structure: yapi }), visionTool({ defaultApiVersion: apiVersion })],
});
