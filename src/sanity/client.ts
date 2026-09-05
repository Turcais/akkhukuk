import { createClient, type SanityClient } from "next-sanity";
import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";
import { apiVersion, canWriteToSanity, dataset, isSanityConfigured, projectId, writeToken } from "./env";

/** Okuma istemcisi — CMS kurulu degilse null. */
export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

/** Yazma istemcisi — yalnizca sunucu tarafinda kullanilir. */
export const writeClient: SanityClient | null = canWriteToSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: writeToken,
    })
  : null;

/**
 * Guvenli sorgu: CMS kurulu degilse veya sorgu hata verirse yedek icerigi
 * dondurur. Site hicbir kosulda beyaz ekrana dusmez.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T,
  options: { revalidate?: number; tags?: string[] } = {},
): Promise<T> {
  if (!client) return fallback;

  try {
    const result = await client.fetch<T>(query, params, {
      next: { revalidate: options.revalidate ?? 300, tags: options.tags },
    });
    return result ?? fallback;
  } catch (cause) {
    console.error("[sanity] Sorgu başarısız, yerel içeriğe düşüldü:", cause);
    return fallback;
  }
}

const builder = client ? imageUrlBuilder(client) : null;

/** Sanity gorseli icin optimize edilmis URL uretir. */
export function urlForImage(source: SanityImageSource) {
  return builder?.image(source);
}

/** Gorsel alanini next/image icin hazir hale getirir. */
export type SanityGorsel = {
  asset?: { _ref?: string };
  alt?: string;
  hotspot?: unknown;
};

export function gorselAdresi(gorsel: SanityGorsel | null | undefined, genislik: number, yukseklik?: number) {
  if (!gorsel?.asset?._ref) return null;
  const url = urlForImage(gorsel as SanityImageSource);
  if (!url) return null;
  const olculu = yukseklik ? url.width(genislik).height(yukseklik).fit("crop") : url.width(genislik);
  return olculu.auto("format").quality(82).url();
}
