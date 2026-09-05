import { Nisan } from "@/components/brand/nisan";
import { Oruntu } from "@/components/brand/motif";
import { ButonBaglanti } from "@/components/ui/buton";
import { Kapsayici } from "@/components/ui/bolum";

/**
 * Acilis bolumu.
 *
 * Osmanli kitabe duzeninden alinan bir kurgu: koyu zemin, altin cerceve
 * icinde muhur ve saga hizali metin bloku. Stok fotograf kullanilmaz;
 * hiyerarsi tamamen tipografi ve cizgiyle kurulur.
 */
export function Giris({
  ustBaslik,
  baslik,
  altBaslik,
  birinciButon,
  ikinciButon,
  baro,
}: {
  ustBaslik: string;
  baslik: string;
  altBaslik: string;
  birinciButon: { metin: string; adres: string };
  ikinciButon: { metin: string; adres: string };
  baro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-koyu-zemin">
      <Oruntu className="text-altin opacity-[0.07]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(70rem 34rem at 12% 6%, rgba(158,27,50,0.42), transparent 62%), radial-gradient(46rem 26rem at 92% 92%, rgba(168,135,60,0.18), transparent 68%)",
        }}
        aria-hidden="true"
      />

      <Kapsayici className="relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:py-32">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-altin-parlak">{ustBaslik}</p>

          <h1 className="mt-7 text-[2.6rem] leading-[1.08] text-white sm:text-[3.6rem] lg:text-[4rem]">{baslik}</h1>

          <div className="mt-8 flex items-start gap-5">
            <span className="mt-3 hidden h-px w-14 shrink-0 bg-altin/70 sm:block" aria-hidden="true" />
            <p className="max-w-xl text-[1.05rem] leading-[1.75] text-white/70">{altBaslik}</p>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            <ButonBaglanti href={birinciButon.adres} boyut="genis">
              {birinciButon.metin}
            </ButonBaglanti>
            <ButonBaglanti href={ikinciButon.adres} gorunum="altin" boyut="genis">
              {ikinciButon.metin}
            </ButonBaglanti>
          </div>

          <p className="mt-10 text-[0.8rem] tracking-wide text-white/40">
            {baro} · Avukatlık Kanunu ve TBB Reklam Yasağı Yönetmeliği çerçevesinde bilgilendirme
          </p>
        </div>

        {/* Mühür panosu */}
        <div className="relative hidden justify-self-center lg:block">
          <div className="cerceve-altin relative flex h-[22rem] w-[17rem] flex-col items-center justify-center gap-8 bg-koyu-zemin-ust/60 px-8 py-10 backdrop-blur-sm">
            <span className="absolute left-3 top-3 h-6 w-6 border-l border-t border-altin/45" aria-hidden="true" />
            <span className="absolute right-3 top-3 h-6 w-6 border-r border-t border-altin/45" aria-hidden="true" />
            <span className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-altin/45" aria-hidden="true" />
            <span className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-altin/45" aria-hidden="true" />

            <Nisan
              className="h-32 w-24 text-altin-parlak"
              harfSinifi="text-[1.25rem] font-medium text-white"
            />

            <div className="text-center">
              <p className="font-display text-[1.1rem] leading-snug text-white">
                Hukuk ve
                <br />
                Danışmanlık
              </p>
              <span className="mx-auto mt-4 block h-px w-12 bg-altin/60" aria-hidden="true" />
              <p className="mt-4 text-[0.66rem] uppercase tracking-[0.24em] text-altin-parlak/80">Ankara</p>
            </div>
          </div>
        </div>
      </Kapsayici>
    </section>
  );
}
