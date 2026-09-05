import type { PortableTextBlock } from "@portabletext/react";
import { sanityFetch, type SanityGorsel } from "@/sanity/client";
import {
  calismaAlaniSluglariSorgusu,
  calismaAlaniSorgusu,
  calismaAlanlariSorgusu,
  ekipSluglariSorgusu,
  ekipSorgusu,
  ekipUyesiSorgusu,
  kurumsalMetinSorgusu,
  sayfaMetniSorgusu,
  sikSorulanlarSorgusu,
  yaziSluglariSorgusu,
  yaziSorgusu,
  yazilarSorgusu,
} from "@/sanity/queries";
import { calismaAlanlari as yerelAlanlar, type CalismaAlani } from "./calisma-alanlari";
import { ekip as yerelEkip } from "./ekip";
import { sikSorulanlar as yerelSorular, type SikSorulanSoru } from "./icerik";
import { yasalMetinler, type MetinBlogu } from "./yasal-metinler";
import { yazilar as yerelYazilar, type YaziBlogu } from "./yazilar";

/**
 * Icerik erisim katmani.
 *
 * Her fonksiyon once yonetim panelini sorar, kayit yoksa koddaki yerel
 * icerige duser. Boylece site CMS kurulmadan da eksiksiz calisir ve
 * panel gecici olarak erisilemez oldugunda ayakta kalir.
 */

/** Uzun metinler ya panelden (portable text) ya da yerel bloklardan gelir. */
export type Govde<T> = { kaynak: "panel"; bloklar: PortableTextBlock[] } | { kaynak: "yerel"; bloklar: T[] };

/* ───────────────────────── Sayfa metinleri ───────────────────────── */

export type SayfaMetni = {
  ustBaslik?: string;
  baslik?: string;
  altBaslik?: string;
  paragraflar?: string[];
  maddeler?: { baslik?: string; metin?: string; etiket?: string }[];
  birinciButonMetni?: string;
  birinciButonAdresi?: string;
  ikinciButonMetni?: string;
  ikinciButonAdresi?: string;
  gorsel?: SanityGorsel;
  seoAciklama?: string;
};

/** Panelde doldurulmus alanlari varsayilanin uzerine yazar. */
export async function sayfaMetniGetir(anahtar: string): Promise<SayfaMetni> {
  const kayit = await sanityFetch<SayfaMetni | null>(sayfaMetniSorgusu, { anahtar }, null, {
    tags: ["sayfaMetni", `sayfaMetni:${anahtar}`],
  });
  return kayit ?? {};
}

/** Panelden gelen deger bos ise varsayilani dondurur. */
export function sec<T>(panel: T | undefined | null, varsayilan: T): T {
  if (panel === undefined || panel === null) return varsayilan;
  if (typeof panel === "string" && panel.trim() === "") return varsayilan;
  if (Array.isArray(panel) && panel.length === 0) return varsayilan;
  return panel;
}

/* ───────────────────────── Çalışma alanları ───────────────────────── */

export type AlanOzeti = {
  slug: string;
  baslik: string;
  kisaBaslik: string;
  ikon: string;
  ozet: string;
};

export async function calismaAlanlariGetir(): Promise<AlanOzeti[]> {
  const yerel: AlanOzeti[] = yerelAlanlar.map(({ slug, baslik, kisaBaslik, ikon, ozet }) => ({
    slug,
    baslik,
    kisaBaslik,
    ikon,
    ozet,
  }));

  const panel = await sanityFetch<AlanOzeti[]>(calismaAlanlariSorgusu, {}, [], { tags: ["calismaAlani"] });
  if (panel.length === 0) return yerel;

  return panel.map((alan) => ({ ...alan, kisaBaslik: alan.kisaBaslik || alan.baslik }));
}

export async function calismaAlaniGetir(slug: string): Promise<CalismaAlani | null> {
  const panel = await sanityFetch<CalismaAlani | null>(calismaAlaniSorgusu, { slug }, null, {
    tags: ["calismaAlani", `calismaAlani:${slug}`],
  });
  if (panel) {
    return {
      ...panel,
      kisaBaslik: panel.kisaBaslik || panel.baslik,
      hizmetler: panel.hizmetler ?? [],
      kimlerIcin: panel.kimlerIcin ?? [],
      sorular: panel.sorular ?? [],
    };
  }
  return yerelAlanlar.find((alan) => alan.slug === slug) ?? null;
}

export async function calismaAlanSluglari(): Promise<string[]> {
  const panel = await sanityFetch<string[]>(calismaAlaniSluglariSorgusu, {}, [], { tags: ["calismaAlani"] });
  return panel.length > 0 ? panel : yerelAlanlar.map((alan) => alan.slug);
}

/* ───────────────────────── Ekip ───────────────────────── */

export type EkipOzeti = {
  slug: string;
  ad: string;
  unvan: string;
  kisaTanitim: string;
  gorsel?: SanityGorsel;
  uzmanlikAlanlari: { slug: string; baslik: string; kisaBaslik?: string }[];
};

export type EkipProfili = EkipOzeti & {
  biyografi: Govde<string>;
  egitim: string[];
  uyelikler: string[];
  sertifikalar: string[];
  diller: string[];
  eposta?: string;
  linkedin?: string;
};

type PanelEkipOzeti = Omit<EkipOzeti, "uzmanlikAlanlari"> & {
  uzmanlikAlanlari?: { slug: string; baslik: string; kisaBaslik?: string }[];
};

function yerelEkipOzeti(uye: (typeof yerelEkip)[number]): EkipOzeti {
  return {
    slug: uye.slug,
    ad: uye.ad,
    unvan: uye.unvan,
    kisaTanitim: uye.kisaTanitim,
    uzmanlikAlanlari: uye.uzmanlikAlanlari
      .map((alanSlug) => yerelAlanlar.find((alan) => alan.slug === alanSlug))
      .filter((alan): alan is CalismaAlani => Boolean(alan))
      .map((alan) => ({ slug: alan.slug, baslik: alan.baslik, kisaBaslik: alan.kisaBaslik })),
  };
}

export async function ekipGetir(): Promise<EkipOzeti[]> {
  const panel = await sanityFetch<PanelEkipOzeti[]>(ekipSorgusu, {}, [], { tags: ["ekipUyesi"] });
  if (panel.length === 0) return yerelEkip.map(yerelEkipOzeti);
  return panel.map((uye) => ({ ...uye, uzmanlikAlanlari: uye.uzmanlikAlanlari ?? [] }));
}

type PanelEkipProfili = PanelEkipOzeti & {
  biyografi?: PortableTextBlock[];
  egitim?: string[];
  uyelikler?: string[];
  sertifikalar?: string[];
  diller?: string[];
  eposta?: string;
  linkedin?: string;
};

export async function ekipUyesiGetir(slug: string): Promise<EkipProfili | null> {
  const panel = await sanityFetch<PanelEkipProfili | null>(ekipUyesiSorgusu, { slug }, null, {
    tags: ["ekipUyesi", `ekipUyesi:${slug}`],
  });

  if (panel) {
    return {
      ...panel,
      uzmanlikAlanlari: panel.uzmanlikAlanlari ?? [],
      biyografi: { kaynak: "panel", bloklar: panel.biyografi ?? [] },
      egitim: panel.egitim ?? [],
      uyelikler: panel.uyelikler ?? [],
      sertifikalar: panel.sertifikalar ?? [],
      diller: panel.diller ?? [],
    };
  }

  const uye = yerelEkip.find((kayit) => kayit.slug === slug);
  if (!uye) return null;

  return {
    ...yerelEkipOzeti(uye),
    biyografi: { kaynak: "yerel", bloklar: uye.biyografi },
    egitim: uye.egitim,
    uyelikler: uye.uyelikler,
    sertifikalar: [],
    diller: uye.diller,
    eposta: uye.eposta,
    linkedin: uye.linkedin,
  };
}

export async function ekipSluglari(): Promise<string[]> {
  const panel = await sanityFetch<string[]>(ekipSluglariSorgusu, {}, [], { tags: ["ekipUyesi"] });
  return panel.length > 0 ? panel : yerelEkip.map((uye) => uye.slug);
}

/* ───────────────────────── Yayınlar ───────────────────────── */

export type YaziOzeti = {
  slug: string;
  baslik: string;
  ozet: string;
  yayinTarihi: string;
  kapak?: SanityGorsel;
  oneCikan?: boolean;
  yazar?: { slug: string; ad: string };
  kategoriler: { baslik: string; slug?: string }[];
};

export type YaziDetayi = YaziOzeti & {
  seoAciklama?: string;
  kisaCevap?: string;
  kaynaklar?: { baslik: string; adres?: string }[];
  govde: Govde<YaziBlogu>;
  ilgiliAlan?: { slug: string; baslik: string };
};

function yerelYaziOzeti(yazi: (typeof yerelYazilar)[number]): YaziOzeti {
  const yazar = yerelEkip.find((uye) => uye.slug === yazi.yazarSlug);
  return {
    slug: yazi.slug,
    baslik: yazi.baslik,
    ozet: yazi.ozet,
    yayinTarihi: yazi.tarih,
    kategoriler: [{ baslik: yazi.kategori }],
    yazar: yazar ? { slug: yazar.slug, ad: yazar.ad } : undefined,
  };
}

export async function yazilarGetir(): Promise<YaziOzeti[]> {
  const panel = await sanityFetch<(Omit<YaziOzeti, "kategoriler"> & { kategoriler?: YaziOzeti["kategoriler"] })[]>(
    yazilarSorgusu,
    {},
    [],
    { tags: ["yazi"] },
  );
  if (panel.length === 0) {
    return [...yerelYazilar]
      .sort((a, b) => b.tarih.localeCompare(a.tarih))
      .map(yerelYaziOzeti);
  }
  return panel.map((yazi) => ({ ...yazi, kategoriler: yazi.kategoriler ?? [] }));
}

export async function yaziGetir(slug: string): Promise<YaziDetayi | null> {
  const panel = await sanityFetch<
    (Omit<YaziDetayi, "govde" | "kategoriler"> & {
      govde?: PortableTextBlock[];
      kategoriler?: YaziOzeti["kategoriler"];
    }) | null
  >(yaziSorgusu, { slug }, null, { tags: ["yazi", `yazi:${slug}`] });

  if (panel) {
    return {
      ...panel,
      kategoriler: panel.kategoriler ?? [],
      govde: { kaynak: "panel", bloklar: panel.govde ?? [] },
    };
  }

  const yazi = yerelYazilar.find((kayit) => kayit.slug === slug);
  if (!yazi) return null;

  return {
    ...yerelYaziOzeti(yazi),
    kisaCevap: yazi.kisaCevap,
    kaynaklar: yazi.kaynaklar,
    govde: { kaynak: "yerel", bloklar: yazi.govde },
  };
}

export async function yaziSluglari(): Promise<string[]> {
  const panel = await sanityFetch<string[]>(yaziSluglariSorgusu, {}, [], { tags: ["yazi"] });
  return panel.length > 0 ? panel : yerelYazilar.map((yazi) => yazi.slug);
}

/* ───────────────────────── Sıkça sorulanlar ───────────────────────── */

export async function sikSorulanlariGetir(): Promise<SikSorulanSoru[]> {
  const panel = await sanityFetch<SikSorulanSoru[]>(sikSorulanlarSorgusu, {}, [], { tags: ["sikSorulan"] });
  return panel.length > 0 ? panel : yerelSorular;
}

/* ───────────────────────── Kurumsal metinler ───────────────────────── */

export type KurumsalMetin = {
  baslik: string;
  ozet: string;
  guncelleme: string;
  govde: Govde<MetinBlogu>;
};

export async function kurumsalMetinGetir(anahtar: string): Promise<KurumsalMetin | null> {
  const panel = await sanityFetch<{
    baslik: string;
    ozet?: string;
    guncelleme?: string;
    govde?: PortableTextBlock[];
  } | null>(kurumsalMetinSorgusu, { anahtar }, null, { tags: ["kurumsalMetin", `kurumsalMetin:${anahtar}`] });

  if (panel?.govde?.length) {
    return {
      baslik: panel.baslik,
      ozet: panel.ozet ?? "",
      guncelleme: panel.guncelleme ?? "",
      govde: { kaynak: "panel", bloklar: panel.govde },
    };
  }

  const yerel = yasalMetinler.find((metin) => metin.slug === anahtar);
  if (!yerel) return null;

  return {
    baslik: yerel.baslik,
    ozet: yerel.ozet,
    guncelleme: yerel.guncelleme,
    govde: { kaynak: "yerel", bloklar: yerel.govde },
  };
}
