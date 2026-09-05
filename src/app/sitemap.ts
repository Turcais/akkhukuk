import type { MetadataRoute } from "next";
import { site, yasalMenu } from "@/lib/site";
import { calismaAlanSluglari, ekipSluglari, yaziSluglari } from "@/lib/veri";

export const revalidate = 3600;

/**
 * Site haritasi. Sabit sayfalar ile panelden gelen tum icerik adresleri
 * tek listede toplanir; Google'in hicbir sayfayi kacirmamasi hedeflenir.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [alanlar, ekip, yazilar] = await Promise.all([
    calismaAlanSluglari(),
    ekipSluglari(),
    yaziSluglari(),
  ]);

  const simdi = new Date();

  const sabit: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/hakkimizda`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/calisma-alanlarimiz`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/ekibimiz`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/yayinlar`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/sikca-sorulan-sorular`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/iletisim`, changeFrequency: "yearly", priority: 0.7 },
  ];

  return [
    ...sabit.map((kayit) => ({ ...kayit, lastModified: simdi })),
    ...alanlar.map((slug) => ({
      url: `${site.url}/calisma-alanlarimiz/${slug}`,
      lastModified: simdi,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...ekip.map((slug) => ({
      url: `${site.url}/ekibimiz/${slug}`,
      lastModified: simdi,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...yazilar.map((slug) => ({
      url: `${site.url}/yayinlar/${slug}`,
      lastModified: simdi,
      changeFrequency: "monthly" as const,
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
