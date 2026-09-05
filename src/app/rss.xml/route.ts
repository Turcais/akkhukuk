import { seoVerisi, tamAdres, xmlKacis } from "@/lib/seo";
import { site } from "@/lib/site";

export const revalidate = 3600;

/**
 * Yayinlarin RSS akisi.
 *
 * Hukuk yayinlarini takip eden meslektaslar, haber toplayicilar ve
 * icerik tarayicilari icin. Ayrica arama motorlarina yeni yazinin
 * yayimlandigini sitemap'ten bagimsiz olarak da bildirir.
 */
export async function GET() {
  const { ayarlar, yazilar } = await seoVerisi();
  const guncelleme = yazilar[0]?.yayinTarihi ?? new Date().toISOString();

  const maddeler = yazilar
    .map((yazi) => {
      const adres = tamAdres(`/yayinlar/${yazi.slug}`);
      const kategori = yazi.kategoriler[0]?.baslik;
      return `    <item>
      <title>${xmlKacis(yazi.baslik)}</title>
      <link>${adres}</link>
      <guid isPermaLink="true">${adres}</guid>
      <description>${xmlKacis(yazi.ozet)}</description>
      <pubDate>${new Date(yazi.yayinTarihi).toUTCString()}</pubDate>
      ${yazi.yazar ? `<dc:creator>${xmlKacis(yazi.yazar.ad)}</dc:creator>` : ""}
      ${kategori ? `<category>${xmlKacis(kategori)}</category>` : ""}
    </item>`;
    })
    .join("\n");

  const govde = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlKacis(ayarlar.buroAdi)} — Yayınlar</title>
    <link>${tamAdres("/yayinlar")}</link>
    <atom:link href="${tamAdres("/rss.xml")}" rel="self" type="application/rss+xml" />
    <description>${xmlKacis(ayarlar.seoAciklama)}</description>
    <language>${site.lang}-TR</language>
    <copyright>© ${new Date().getFullYear()} ${xmlKacis(ayarlar.buroAdi)}</copyright>
    <lastBuildDate>${new Date(guncelleme).toUTCString()}</lastBuildDate>
${maddeler}
  </channel>
</rss>`;

  return new Response(govde, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
