import { Motif } from "@/components/brand/motif";
import { Bolum } from "@/components/ui/bolum";

/** Buro tanitimi: solda sabit baslik ve metin, sagda calisma ilkeleri. */
export function Tanitim({
  ustBaslik,
  baslik,
  paragraflar,
  maddeler,
}: {
  ustBaslik: string;
  baslik: string;
  paragraflar: string[];
  maddeler: { baslik: string; metin: string }[];
}) {
  return (
    <Bolum className="doku-kagit">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-4">
            <span className="font-display text-[1.05rem] leading-none text-altin">01</span>
            <span className="h-px w-9 bg-cizgi-koyu" aria-hidden="true" />
            <p className="ustbaslik">{ustBaslik}</p>
          </div>
          <h2 className="mt-5 text-[2rem] leading-[1.1] sm:text-[2.6rem]">{baslik}</h2>
          <Motif className="mt-8 max-w-[9rem]" />
          <div className="mt-8 space-y-5 text-metin-soluk">
            {paragraflar.map((paragraf) => (
              <p key={paragraf.slice(0, 24)} className="leading-[1.8]">
                {paragraf}
              </p>
            ))}
          </div>
        </div>

        {/* Kutu izgarasi degil, cizgiyle ayrilmis liste. Ilk madde daha
            buyuk punto alir; dort esit kutu, dort esit onemde ilke oldugu
            izlenimi veriyordu. */}
        <ol className="border-t border-cizgi">
          {maddeler.map((madde, sira) => (
            <li key={madde.baslik} className="border-b border-cizgi py-7">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[0.95rem] leading-none text-altin/70">
                  {String(sira + 1).padStart(2, "0")}
                </span>
                <h3 className={sira === 0 ? "text-[1.4rem] leading-snug" : "text-[1.12rem] leading-snug"}>
                  {madde.baslik}
                </h3>
              </div>
              <p
                className={
                  sira === 0
                    ? "mt-4 pl-9 text-[1rem] leading-relaxed text-metin"
                    : "mt-3 pl-9 text-[0.93rem] leading-relaxed text-metin-soluk"
                }
              >
                {madde.metin}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Bolum>
  );
}
