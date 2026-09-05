import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Bolum, BolumBasligi, IzgaraDolgusu } from "@/components/ui/bolum";
import { AlanIkonu } from "@/components/ui/alan-ikonu";
import { ButonBaglanti } from "@/components/ui/buton";
import type { AlanOzeti } from "@/lib/veri";

/** Calisma alani kartlari — hem ana sayfada hem alanlar sayfasinda kullanilir. */
export function AlanKarti({ alan }: { alan: AlanOzeti }) {
  return (
    <Link
      href={`/calisma-alanlarimiz/${alan.slug}`}
      className="group relative flex h-full flex-col bg-kagit p-7 transition-colors duration-300 hover:bg-yuzey"
    >
      <span
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-kirmizi transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <span className="inline-flex h-11 w-11 items-center justify-center border border-cizgi-koyu text-kirmizi transition-colors duration-300 group-hover:border-altin group-hover:text-altin-metin">
        <AlanIkonu ad={alan.ikon} />
      </span>

      <h3 className="mt-6 text-[1.15rem] leading-snug">{alan.baslik}</h3>
      <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-metin-soluk">{alan.ozet}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-kirmizi">
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
        <BolumBasligi ustBaslik={ustBaslik} baslik={baslik} aciklama={aciklama} />
        {tumunuGoster ? (
          <ButonBaglanti href="/calisma-alanlarimiz" gorunum="cizgili" className="shrink-0">
            Tüm alanlar
          </ButonBaglanti>
        ) : null}
      </div>

      <div className="mt-14 grid gap-px border border-cizgi bg-cizgi sm:grid-cols-2 lg:grid-cols-3">
        {alanlar.map((alan) => (
          <AlanKarti key={alan.slug} alan={alan} />
        ))}
        <IzgaraDolgusu adet={alanlar.length} />
      </div>
    </Bolum>
  );
}
