import { Kapsayici } from "@/components/ui/bolum";

/** Acilisin hemen altinda duran, dogrulanabilir bilgilerden olusan serit. */
export function GuvenSeridi({ maddeler }: { maddeler: { baslik: string; metin: string }[] }) {
  return (
    <div className="border-b border-cizgi bg-kagit-koyu/60">
      <Kapsayici>
        <dl className="grid divide-y divide-cizgi sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {maddeler.map((madde) => (
            <div key={madde.baslik} className="px-0 py-7 lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <dt className="font-display text-[1.12rem] leading-snug text-murekkep">{madde.baslik}</dt>
              <dd className="mt-2 text-[0.85rem] text-metin-soluk">{madde.metin}</dd>
            </div>
          ))}
        </dl>
      </Kapsayici>
    </div>
  );
}
