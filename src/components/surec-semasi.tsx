import { Bordur } from "@/components/brand/motif";

/**
 * Surec semasi.
 *
 * Adimlar dikey bir altin hat uzerinde, her biri baklava bicimli bir
 * dugumle isaretlenerek dizilir. Sureler taahhut degil tipik seyirdir;
 * bu ayrim semanin altinda ayrica yazilir.
 */
export function SurecSemasi({
  baslik,
  adimlar,
}: {
  baslik: string;
  adimlar: { baslik: string; metin: string; sure?: string }[];
}) {
  if (adimlar.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-[1.5rem]">
        <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
        <span className="mt-4 block">{baslik}</span>
      </h2>

      <ol className="relative mt-9">
        {/* Adimlari birbirine baglayan dikey hat */}
        <span
          className="absolute left-[0.4375rem] top-2 bottom-8 w-px bg-gradient-to-b from-altin/60 via-altin/35 to-transparent"
          aria-hidden="true"
        />

        {adimlar.map((adim, sira) => (
          <li key={adim.baslik} className="relative pb-9 pl-10 last:pb-0">
            {/* Baklava dugumu */}
            <span
              className="absolute left-0 top-1.5 h-[0.9rem] w-[0.9rem] rotate-45 border border-altin bg-kagit"
              aria-hidden="true"
            />
            <span
              className="absolute left-[0.28rem] top-[0.47rem] h-[0.35rem] w-[0.35rem] rotate-45 bg-kirmizi"
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-display text-[0.95rem] text-altin">
                {String(sira + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.08rem]">{adim.baslik}</h3>
              {adim.sure ? (
                <span className="border border-cizgi px-2.5 py-0.5 text-[0.72rem] tracking-wide text-metin-silik">
                  {adim.sure}
                </span>
              ) : null}
            </div>

            <p className="mt-2.5 text-[0.93rem] leading-relaxed text-metin-soluk">{adim.metin}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 border-y border-cizgi py-4">
        <Bordur className="text-altin/45" />
      </div>
      <p className="mt-4 text-[0.82rem] leading-relaxed text-metin-silik">
        Süreler tipik seyri gösterir; taahhüt değildir. Mahkeme ve idarelerin iş yükü, karşı tarafın tutumu ve
        dosyanın kapsamı takvimi değiştirir. Somut durumunuz için gerçekçi takvimi ilk değerlendirmede yazılı
        olarak paylaşırız.
      </p>
    </section>
  );
}
