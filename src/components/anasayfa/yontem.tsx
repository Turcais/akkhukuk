import { Bordur, Oruntu } from "@/components/brand/motif";
import { BolumBasligi, Kapsayici } from "@/components/ui/bolum";

/**
 * Calisma yontemi — ilk gorusmeden dosyanin kapanisina dort adim.
 *
 * Sayfanin ortasinda bilincli bir koyu bant. Acik zeminde kesintisiz akan
 * bolumler arasinda nefes acar ve okuru "burasi surecin anlatildigi yer"
 * diye durdurur. Adimlar dikey altin hatlarla ayrilir; numaralar kitabe
 * rakamlari gibi buyuk ve icleri bos durur.
 */
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
    <section className="relative overflow-hidden bg-koyu-zemin">
      <Oruntu className="text-altin opacity-[0.06]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(56rem 26rem at 50% -10%, rgba(158,27,50,0.32), transparent 68%)",
        }}
        aria-hidden="true"
        data-yazdirma="gizle"
      />

      <Bordur className="relative text-altin/70" ters />

      <Kapsayici className="relative pb-24 pt-16 sm:pb-28 sm:pt-20">
        <BolumBasligi sira="03" ustBaslik={ustBaslik} baslik={baslik} ortali koyu />

        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
          {adimlar.map((adim, sira) => (
            <li
              key={adim.baslik}
              className="relative lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              {/* Adimlari ayiran dikey altin hat — ilkinin solunda cizilmez */}
              {sira > 0 ? (
                <span
                  className="absolute inset-y-2 left-0 hidden w-px bg-gradient-to-b from-transparent via-altin/30 to-transparent lg:block"
                  aria-hidden="true"
                />
              ) : null}

              <span className="block font-display text-[3.2rem] leading-none text-transparent [-webkit-text-stroke:1px_var(--altin)]">
                {adim.etiket}
              </span>
              <h3 className="mt-6 text-[1.15rem] text-white">{adim.baslik}</h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-white/60">{adim.metin}</p>
            </li>
          ))}
        </ol>
      </Kapsayici>

      <Bordur className="relative text-altin/70" />
    </section>
  );
}
