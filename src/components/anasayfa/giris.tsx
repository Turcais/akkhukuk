import { Nisan } from "@/components/brand/nisan";
import { Bordur, KemerCercevesi, Oruntu } from "@/components/brand/motif";
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
        data-yazdirma="gizle"
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

        {/* Mihrap nişi — mühür, kemerin içine oturur */}
        <div className="relative hidden justify-self-center lg:block">
          <div className="relative h-[25rem] w-[17.5rem]">
            <div className="kemer absolute inset-0 overflow-hidden bg-koyu-zemin-ust/70 backdrop-blur-sm">
              <Oruntu className="text-altin opacity-[0.09]" />
              <div className="relative flex h-full flex-col items-center justify-center gap-7 px-8 pt-10">
                <Nisan className="h-32 w-24 text-altin-parlak" harfSinifi="text-[1.25rem] font-medium text-white" />

                <div className="text-center">
                  <p className="font-display text-[1.12rem] leading-snug text-white">
                    Hukuk ve
                    <br />
                    Danışmanlık
                  </p>
                  <span className="mx-auto mt-4 block h-px w-12 bg-altin/60" aria-hidden="true" />
                  <p className="mt-4 text-[0.66rem] uppercase tracking-[0.24em] text-altin-parlak/80">Ankara</p>
                </div>
              </div>
            </div>

            <KemerCercevesi className="text-altin/55" />

            {/* Nişin oturduğu altın eşik */}
            <span
              className="absolute inset-x-[-1.25rem] bottom-[-0.75rem] h-px bg-gradient-to-r from-transparent via-altin/60 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </Kapsayici>

      {/* Koyu açılıştan kâğıt zemine geçişi belirleyen su yolu şeridi */}
      <Bordur className="relative text-altin/70" />
    </section>
  );
}
