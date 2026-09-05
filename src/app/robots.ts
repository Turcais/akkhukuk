import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Yonetim paneli aramaya kapali; site geneli acik. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/studio", "/studio/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
