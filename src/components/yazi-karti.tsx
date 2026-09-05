import Image from "next/image";
import Link from "next/link";
import { gorselAdresi } from "@/sanity/client";
import { tarihYaz } from "@/lib/utils";
import type { YaziOzeti } from "@/lib/veri";

/** Yayin listelerinde kullanilan kart. */
export function YaziKarti({ yazi, oncelikli = false }: { yazi: YaziOzeti; oncelikli?: boolean }) {
  const kapak = yazi.kapak ? gorselAdresi(yazi.kapak, 900, 560) : null;
  const kategori = yazi.kategoriler[0]?.baslik;

  return (
    <article className="group flex h-full flex-col bg-kagit transition-colors duration-300 hover:bg-yuzey">
      <Link href={`/yayinlar/${yazi.slug}`} className="flex h-full flex-col">
        {kapak ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-cizgi bg-kagit-koyu">
            <Image
              src={kapak}
              alt={yazi.kapak?.alt || yazi.baslik}
              fill
              sizes="(min-width: 1024px) 22rem, 90vw"
              priority={oncelikli}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          /* Kapak yoksa gorsel alani hic olusturulmaz; kart tipografik kalir. */
          <span className="mx-6 mt-7 block h-px w-10 bg-altin" aria-hidden="true" />
        )}

        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.16em] text-altin-metin">
            {kategori ? <span>{kategori}</span> : null}
            {kategori ? <span className="h-px w-4 bg-cizgi-koyu" aria-hidden="true" /> : null}
            <time dateTime={yazi.yayinTarihi} className="text-metin-silik">
              {tarihYaz(yazi.yayinTarihi)}
            </time>
          </p>

          <h3 className="mt-4 text-[1.2rem] leading-snug transition-colors duration-300 group-hover:text-kirmizi">
            {yazi.baslik}
          </h3>
          <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-metin-soluk">{yazi.ozet}</p>

          {yazi.yazar ? <p className="mt-6 text-[0.8rem] text-metin-silik">{yazi.yazar.ad}</p> : null}
        </div>
      </Link>
    </article>
  );
}
