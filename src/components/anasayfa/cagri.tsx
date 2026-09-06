import { Bordur, Motif, Oruntu } from "@/components/brand/motif";
import { ButonBaglanti } from "@/components/ui/buton";
import { Kapsayici } from "@/components/ui/bolum";

/** Sayfa sonundaki kapanis cagrisi. */
export function Cagri({
  baslik,
  metin,
  butonMetni,
  telefon,
  telefonHref,
  telefonVar,
}: {
  baslik: string;
  metin: string;
  butonMetni: string;
  telefon: string;
  telefonHref: string;
  telefonVar: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-koyu-zemin" data-yazdirma="gizle">
      <Oruntu className="text-altin opacity-[0.06]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(48rem 22rem at 50% 0%, rgba(158,27,50,0.4), transparent 68%)",
        }}
        aria-hidden="true"
        data-yazdirma="gizle"
      />

      <Bordur className="relative text-altin/70" ters />

      <Kapsayici className="relative pb-20 pt-16 text-center sm:pb-24 sm:pt-20">
        <Motif className="mx-auto max-w-[12rem] text-altin/70" />
        <h2 className="mt-8 text-[2rem] text-white sm:text-[2.6rem]">{baslik}</h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/65">{metin}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButonBaglanti href="/iletisim" boyut="genis">
            {butonMetni}
          </ButonBaglanti>
          {telefonVar ? (
            <a
              href={telefonHref}
              className="inline-flex items-center justify-center border border-altin/50 px-8 py-4 text-[0.95rem] font-medium tracking-wide text-altin-parlak transition-colors hover:bg-altin/10"
            >
              {telefon}
            </a>
          ) : null}
        </div>
      </Kapsayici>
    </section>
  );
}
