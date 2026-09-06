import { Kapsayici } from "@/components/ui/bolum";

/** Acilisin hemen altinda duran, dogrulanabilir bilgilerden olusan serit. */
export function GuvenSeridi({ maddeler }: { maddeler: { baslik: string; metin: string }[] }) {
  return (
    <div className="border-b border-cizgi bg-kagit-koyu/50">
      <Kapsayici>
        <dl className="grid divide-y divide-cizgi sm:grid-cols-3 sm:divide-y-0">
          {maddeler.map((madde, sira) => (
            <div key={madde.baslik} className="relative py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              {/* Sutunlari ayiran altin hat — soluk uclu, kitabe bolmesi gibi */}
              {sira > 0 ? (
                <span
                  className="absolute inset-y-4 left-0 hidden w-px bg-gradient-to-b from-transparent via-cizgi-koyu to-transparent sm:block"
                  aria-hidden="true"
                />
              ) : null}
              <dt className="font-display text-[1.2rem] leading-snug text-murekkep">{madde.baslik}</dt>
              <dd className="mt-2.5 text-[0.84rem] leading-relaxed text-metin-soluk">{madde.metin}</dd>
            </div>
          ))}
        </dl>
      </Kapsayici>
    </div>
  );
}
