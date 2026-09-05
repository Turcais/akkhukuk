import { Motif } from "@/components/brand/motif";
import { Bolum, IzgaraDolgusu } from "@/components/ui/bolum";

/** Buro tanitimi: solda sabit baslik, sagda ilkeler. */
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
          <p className="ustbaslik">{ustBaslik}</p>
          <h2 className="mt-4 text-[2rem] sm:text-[2.5rem]">{baslik}</h2>
          <Motif className="mt-8 max-w-[9rem]" />
          <div className="mt-8 space-y-5 text-metin-soluk">
            {paragraflar.map((paragraf) => (
              <p key={paragraf.slice(0, 24)} className="leading-[1.8]">
                {paragraf}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-px bg-cizgi sm:grid-cols-2">
          {maddeler.map((madde) => (
            <div key={madde.baslik} className="h-full bg-kagit p-7 transition-colors duration-300 hover:bg-yuzey">
              <span className="block h-px w-8 bg-altin" aria-hidden="true" />
              <h3 className="mt-5 text-[1.12rem]">{madde.baslik}</h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-metin-soluk">{madde.metin}</p>
            </div>
          ))}
          <IzgaraDolgusu adet={maddeler.length} sutun={2} />
        </div>
      </div>
    </Bolum>
  );
}
