import type { SchemaTypeDefinition } from "sanity";

import { calismaAlani } from "./calisma-alani";
import { ekipUyesi } from "./ekip-uyesi";
import { iletisimMesaji } from "./iletisim-mesaji";
import { kategori } from "./kategori";
import { kurumsalMetin } from "./kurumsal-metin";
import { rehber } from "./rehber";
import { sayfaMetni } from "./sayfa-metni";
import { sikSorulan } from "./sik-sorulan";
import { siteAyarlari } from "./site-ayarlari";
import { yazi } from "./yazi";

export const semaTipleri: SchemaTypeDefinition[] = [
  siteAyarlari,
  sayfaMetni,
  calismaAlani,
  ekipUyesi,
  yazi,
  kategori,
  sikSorulan,
  rehber,
  kurumsalMetin,
  iletisimMesaji,
];
