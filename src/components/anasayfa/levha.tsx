import { Kosebent, Motif, Oruntu } from "@/components/brand/motif";
import { Kapsayici } from "@/components/ui/bolum";

/**
 * Levha.
 *
 * Hat levhalarinin duzeninden gelir: cerceve, ortada tek bir cumle, altta
 * kucuk bir kunye. Sayfanin ortasinda okuru durduran tek cumlelik bir
 * duraktir; buronun bakisini iddia etmeden, bir tespitle anlatir.
 */
export function Levha({ soz, kunye }: { soz: string; kunye: string }) {
  return (
    <section className="relative overflow-hidden border-y border-cizgi bg-kagit-koyu/30">
      <Oruntu className="text-altin opacity-[0.05]" />

      <Kapsayici className="relative py-20 sm:py-24">
        <div className="relative mx-auto max-w-3xl px-8 py-10 text-center sm:px-14 sm:py-12">
          <Kosebent className="text-altin/50" />

          <Motif className="mx-auto max-w-[10rem] text-altin/80" />

          <p className="mt-9 font-display text-[1.5rem] leading-[1.45] text-murekkep sm:text-[1.95rem]">
            {soz}
          </p>

          <span className="mx-auto mt-9 block h-px w-14 bg-altin/60" aria-hidden="true" />
          <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-altin-metin">
            {kunye}
          </p>
        </div>
      </Kapsayici>
    </section>
  );
}
