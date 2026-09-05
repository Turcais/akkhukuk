import { calismaAlanlariGetir, ekipGetir, yazilarGetir } from "./veri";
import { ayarlariGetir } from "./ayarlar";
import { site, yasalMenu } from "./site";

/**
 * Makine tarafindan okunan ciktilar icin ortak veri toplayici.
 *
 * Ayni icerik uc ayri tuketiciye gider: arama motoru (sitemap.xml),
 * okuyucu ve haber toplayicilar (rss.xml) ve dil modelleri (llms.txt).
 * Uc ciktinin da ayni kaynaktan beslenmesi, birinin guncellenip
 * digerinin unutulmasini imkansiz kilar.
 */
export async function seoVerisi() {
  const [ayarlar, alanlar, ekip, yazilar] = await Promise.all([
    ayarlariGetir(),
    calismaAlanlariGetir(),
    ekipGetir(),
    yazilarGetir(),
  ]);
  return { ayarlar, alanlar, ekip, yazilar };
}

/** XML metin dugumlerini guvenli hale getirir. */
export function xmlKacis(metin: string) {
  return metin
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function tamAdres(yol: string) {
  return `${site.url}${yol}`;
}

/** Kurumsal metin sayfalarinin adresleri. */
export const kurumsalAdresler = yasalMenu.map((oge) => oge.adres);
