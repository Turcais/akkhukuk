import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Tarayici kurallari.
 *
 * Arama motorlarinin yaninda yapay zeka tarayicilarina da acik izin
 * verilir. Bunlar varsayilan olarak zaten "*" kuralina girer; ayri ayri
 * yazilmasinin nedeni niyetin acik olmasidir: bu icerigin yapay zeka
 * cevaplarinda kaynak gosterilerek kullanilmasini istiyoruz. Bir tarayici
 * ileride kapatilmak istenirse degistirilecek yer de burasidir.
 */

/** Cevap ureten ve icerik toplayan bilinen tarayicilar. */
const yapayZekaTarayicilari = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
  "cohere-ai",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  const yasak = ["/studio", "/studio/"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: yasak },
      { userAgent: ["Googlebot", "Bingbot", "YandexBot", "Applebot"], allow: "/", disallow: yasak },
      { userAgent: yapayZekaTarayicilari, allow: "/", disallow: yasak },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
