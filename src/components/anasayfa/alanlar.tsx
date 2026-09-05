import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Oruntu } from "@/components/brand/motif";
import { Bolum, BolumBasligi, IzgaraDolgusu } from "@/components/ui/bolum";
import { AlanIkonu } from "@/components/ui/alan-ikonu";
import { ButonBaglanti } from "@/components/ui/buton";
import type { AlanOzeti } from "@/lib/veri";

/**
 * Calisma alani karti.
 *
 * Duzen bir fihrist maddesinden turetilir: solda sira numarasi, sagda
 * konunun simgesi, altta baslik ve tek cumlelik ozet. Uzerine gelindiginde
 * girih oruntusu cok hafif belirir — kart bir cini karoya donusur.
 */
export function AlanKarti({ alan, sira }: { alan: AlanOzeti; sira?: number }) {
  return (
    <Link
      href={`/calisma-alanlarimiz/${alan.slug}`}
      className="group relative flex h-full flex-col overflow-hidden bg-kagit p-7 transition-colors duration-300 hover:bg-yuzey"
    >
      <Oruntu className="text-altin opacity-0 transition-opacity duration-500 group-hover:opacity-[0.055]" />
      <span
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-kirmizi transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4">
        {sira !== undefined ? (
          <span className="font-display text-[1.75rem] leading-none text-altin/40 transition-colors duration-300 group-hover:text-altin/70">
            {String(sira).padStart(2, "0")}
          </span>
        ) : (
          <span />
        )}
        <span className="inline-flex h-10 w-10 items-center justify-center border border-cizgi-koyu text-kirmizi transition-colors duration-300 group-hover:border-altin group-hover:text-altin-metin">
          <AlanIkonu ad={alan.ikon} />
        </span>
      </div>

      <h3 className="relative mt-7 text-[1.18rem] leading-snug">{alan.baslik}</h3>
      <span className="relative mt-4 block h-px w-8 bg-altin/50" aria-hidden="true" />
      <p className="relative mt-4 flex-1 text-[0.9rem] leading-relaxed text-metin-soluk">{alan.ozet}</p>

      <span className="relative mt-6 inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-kirmizi">
        İncele
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export function Alanlar({
  ustBaslik,
  baslik,
  aciklama,
  alanlar,
  tumunuGoster = true,
}: {
  ustBaslik: string;
  baslik: string;
  aciklama: string;
  alanlar: AlanOzeti[];
  tumunuGoster?: boolean;
}) {
  return (
    <Bolum className="border-y border-cizgi bg-kagit-koyu/40">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <BolumBasligi sira="02" ustBaslik={ustBaslik} baslik={baslik} aciklama={aciklama} />
        {tumunuGoster ? (
          <ButonBaglanti href="/calisma-alanlarimiz" gorunum="cizgili" className="shrink-0">
            Tüm alanlar
          </ButonBaglanti>
        ) : null}
      </div>

      <div className="mt-14 grid gap-px border border-cizgi bg-cizgi sm:grid-cols-2 lg:grid-cols-3">
        {alanlar.map((alan, sira) => (
          <AlanKarti key={alan.slug} alan={alan} sira={sira + 1} />
        ))}
        <IzgaraDolgusu adet={alanlar.length} />
      </div>
    </Bolum>
  );
}
