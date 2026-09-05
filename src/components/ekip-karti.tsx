import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Nisan } from "@/components/brand/nisan";
import { monogram } from "@/lib/ekip";
import { gorselAdresi } from "@/sanity/client";
import type { EkipOzeti } from "@/lib/veri";

/**
 * Ekip karti. Fotograf yuklenmemisse buronun muhur formunda bir monogram
 * gosterilir; boylece fotografi olmayan bir profil de kimliksiz gorunmez.
 */
export function EkipKarti({ uye }: { uye: EkipOzeti }) {
  const portre = uye.gorsel ? gorselAdresi(uye.gorsel, 640, 800) : null;

  return (
    <Link
      href={`/ekibimiz/${uye.slug}`}
      className="group flex h-full flex-col bg-kagit transition-colors duration-300 hover:bg-yuzey"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-koyu-zemin">
        {portre ? (
          <Image
            src={portre}
            alt={uye.gorsel?.alt || uye.ad}
            fill
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Nisan
              className="h-40 w-30 text-altin/50"
              harfSinifi="font-display text-[1.6rem] text-white/85"
              harfler={monogram(uye.ad)}
            />
          </div>
        )}
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-altin/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-altin-metin">{uye.unvan}</p>
        <h3 className="mt-3 text-[1.2rem] leading-snug">{uye.ad}</h3>
        {uye.kisaTanitim ? (
          <p className="mt-3 text-[0.9rem] leading-relaxed text-metin-soluk">{uye.kisaTanitim}</p>
        ) : null}

        {uye.uzmanlikAlanlari.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {uye.uzmanlikAlanlari.slice(0, 3).map((alan) => (
              <li
                key={alan.slug}
                className="border border-cizgi px-2.5 py-1 text-[0.72rem] tracking-wide text-metin-soluk"
              >
                {alan.kisaBaslik ?? alan.baslik}
              </li>
            ))}
          </ul>
        ) : null}

        <span className="mt-6 inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-kirmizi">
          Özgeçmiş
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
