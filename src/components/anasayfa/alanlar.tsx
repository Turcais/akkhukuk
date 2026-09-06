import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Bolum, BolumBasligi } from "@/components/ui/bolum";
import { AlanIkonu } from "@/components/ui/alan-ikonu";
import { ButonBaglanti } from "@/components/ui/buton";
import { cn } from "@/lib/utils";
import type { AlanOzeti } from "@/lib/veri";

/**
 * Calisma alanlari fihristi.
 *
 * Kart izgarasi degil, liste. Sebebi bicimsel degil: on iki esit kart,
 * on iki esit agirlikta konu oldugu izlenimi verir ve okur hicbirine
 * tutunamaz. Kitap fihristi gibi satir satir dizildiginde goz basliklarda
 * asagi iner, ilgilendigi satirda durur. Bir yan fayda: satir duzeni
 * alan sayisi degistiginde bozulmaz — on ikinci alan eklendiginde bos
 * hucre acilmaz.
 */
export function AlanSatiri({ alan, sira }: { alan: AlanOzeti; sira: number }) {
  return (
    <li>
      <Link
        href={`/calisma-alanlarimiz/${alan.slug}`}
        className="group relative grid grid-cols-[2.25rem_1fr] items-baseline gap-x-6 gap-y-2 border-b border-cizgi py-6 transition-colors duration-300 hover:bg-yuzey sm:py-7 lg:grid-cols-[3rem_minmax(0,21rem)_1fr_1.5rem] lg:gap-x-8"
      >
        {/* Satirin altinda soldan cizilen altin hat */}
        <span
          className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-altin transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden="true"
        />

        <span className="font-display text-[1.05rem] leading-none text-altin/70 transition-colors duration-300 group-hover:text-kirmizi">
          {String(sira).padStart(2, "0")}
        </span>

        <h3 className="flex items-baseline gap-3 text-[1.15rem] leading-snug transition-colors duration-300 group-hover:text-kirmizi sm:text-[1.28rem]">
          <AlanIkonu
            ad={alan.ikon}
            className="h-[1.05rem] w-[1.05rem] shrink-0 translate-y-[0.15rem] text-altin-metin/70 transition-colors duration-300 group-hover:text-kirmizi"
          />
          {alan.baslik}
        </h3>

        <p className="col-start-2 text-[0.9rem] leading-relaxed text-metin-soluk lg:col-start-3">{alan.ozet}</p>

        <ArrowRight
          className="col-start-2 hidden h-4 w-4 self-center text-cizgi-koyu transition-all duration-300 group-hover:translate-x-1 group-hover:text-kirmizi lg:col-start-4 lg:block"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}

export function AlanFihristi({ alanlar, className }: { alanlar: AlanOzeti[]; className?: string }) {
  return (
    <ol className={cn("border-t border-cizgi", className)}>
      {alanlar.map((alan, sira) => (
        <AlanSatiri key={alan.slug} alan={alan} sira={sira + 1} />
      ))}
    </ol>
  );
}

export function Alanlar({
  ustBaslik,
  baslik,
  aciklama,
  alanlar,
}: {
  ustBaslik: string;
  baslik: string;
  aciklama: string;
  alanlar: AlanOzeti[];
}) {
  return (
    <Bolum className="border-y border-cizgi bg-kagit-koyu/40">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <BolumBasligi sira="02" ustBaslik={ustBaslik} baslik={baslik} aciklama={aciklama} />
        <ButonBaglanti href="/calisma-alanlarimiz" gorunum="cizgili" className="shrink-0">
          Tüm alanlar
        </ButonBaglanti>
      </div>

      <AlanFihristi alanlar={alanlar} className="mt-14" />
    </Bolum>
  );
}
