import type { MetadataRoute } from "next";
import { seoVerisi } from "@/lib/seo";
import { site, yasalMenu } from "@/lib/site";

export const revalidate = 3600;

/**
 * Site haritasi.
 *
 * Sabit sayfalar ile panelden gelen tum icerik adresleri tek listede
 * toplanir. lastModified degerleri uydurulmaz: yazilar icin gercek yayin
 * tarihi kullanilir, geri kalanlar icin derleme zamani. Yanlis bir
 * lastModified, arama motorunun sonraki taramalarda bu alani tumden
 * yok saymasina yol acar.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { alanlar, ekip, yazilar } = await seoVerisi();
  const simdi = new Date();

  /* En yeni yazinin tarihi, yayin listelerinin gercek guncelleme zamanidir. */
  const sonYazi = yazilar[0]?.yayinTarihi ? new Date(yazilar[0].yayinTarihi) : simdi;

  const sabit: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: sonYazi, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/calisma-alanlarimiz`, lastModified: simdi, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/ekibimiz`, lastModified: simdi, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/yayinlar`, lastModified: sonYazi, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/hakkimizda`, lastModified: simdi, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/iletisim`, lastModified: simdi, changeFrequency: "yearly", priority: 0.7 },
    {
      url: `${site.url}/sikca-sorulan-sorular`,
      lastModified: simdi,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [
    ...sabit,
    ...alanlar.map((alan) => ({
      url: `${site.url}/calisma-alanlarimiz/${alan.slug}`,
      lastModified: simdi,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...ekip.map((uye) => ({
      url: `${site.url}/ekibimiz/${uye.slug}`,
      lastModified: simdi,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...yazilar.map((yazi) => ({
      url: `${site.url}/yayinlar/${yazi.slug}`,
      lastModified: new Date(yazi.yayinTarihi),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...yasalMenu.map((oge) => ({
      url: `${site.url}${oge.adres}`,
      lastModified: simdi,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
