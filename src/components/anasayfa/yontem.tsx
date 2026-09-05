import { Bolum, BolumBasligi } from "@/components/ui/bolum";

/** Ilk gorusmeden dosyanin kapanisina kadar dort adim. */
export function Yontem({
  ustBaslik,
  baslik,
  adimlar,
}: {
  ustBaslik: string;
  baslik: string;
  adimlar: { etiket: string; baslik: string; metin: string }[];
}) {
  return (
    <Bolum>
      <BolumBasligi ustBaslik={ustBaslik} baslik={baslik} ortali />

      <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {adimlar.map((adim) => (
          <li key={adim.baslik} className="relative pt-8">
            <span className="absolute inset-x-0 top-0 h-px bg-cizgi-koyu" aria-hidden="true" />
            <span className="absolute left-0 top-0 h-px w-10 bg-kirmizi" aria-hidden="true" />
            <span className="font-display text-[2.6rem] leading-none text-altin/45">{adim.etiket}</span>
            <h3 className="mt-5 text-[1.12rem]">{adim.baslik}</h3>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-metin-soluk">{adim.metin}</p>
          </li>
        ))}
      </ol>
    </Bolum>
  );
}
