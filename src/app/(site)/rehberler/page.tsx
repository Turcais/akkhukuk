import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Cagri } from "@/components/anasayfa/cagri";
import { ListeVerisi, YolVerisi } from "@/components/yapisal-veri";
import { Bolum } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa } from "@/lib/icerik";
import { rehberleriGetir } from "@/lib/veri";

export const revalidate = 300;

const aciklama =
  "Vekâletname, belge hazırlığı ve süreç adımları gibi tekrar eden işleri adım adım anlattığımız pratik rehberler. Hukuki görüş değil, işinizi kolaylaştıran yol tarifleri.";

export const metadata: Metadata = {
  title: "Rehberler",
  description: aciklama,
  alternates: { canonical: "/rehberler" },
};

export default async function Rehberler() {
  const [ayarlar, rehberler] = await Promise.all([ayarlariGetir(), rehberleriGetir()]);
  const yolIzi = [{ ad: "Rehberler", adres: "/rehberler" }];

  return (
    <>
      <SayfaBasligi
        ustBaslik="Rehberler"
        baslik="Nasıl yapılır?"
        aciklama={aciklama}
        yolIzi={yolIzi}
      />
      <YolVerisi basamaklar={yolIzi} />
      <ListeVerisi
        ad="Rehberler"
        ogeler={rehberler.map((rehber) => ({
          ad: rehber.baslik,
          adres: `/rehberler/${rehber.slug}`,
          aciklama: rehber.ozet,
        }))}
      />

      <Bolum className="doku-kagit">
        <ol className="border-t border-cizgi">
          {rehberler.map((rehber, sira) => (
            <li key={rehber.slug}>
              <Link
                href={`/rehberler/${rehber.slug}`}
                className="group relative grid grid-cols-[2.25rem_1fr] items-baseline gap-x-6 gap-y-2 border-b border-cizgi py-7 transition-colors duration-300 hover:bg-yuzey lg:grid-cols-[3rem_minmax(0,24rem)_1fr_1.5rem] lg:gap-x-8"
              >
                <span
                  className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-altin transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="font-display text-[1.05rem] leading-none text-altin/70 transition-colors duration-300 group-hover:text-kirmizi">
                  {String(sira + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[1.18rem] leading-snug transition-colors duration-300 group-hover:text-kirmizi sm:text-[1.3rem]">
                  {rehber.baslik}
                </h2>
                <p className="col-start-2 text-[0.9rem] leading-relaxed text-metin-soluk lg:col-start-3">
                  {rehber.ozet}
                </p>
                <ArrowRight
                  className="col-start-2 hidden h-4 w-4 self-center text-cizgi-koyu transition-all duration-300 group-hover:translate-x-1 group-hover:text-kirmizi lg:col-start-4 lg:block"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ol>
      </Bolum>

      <Cagri
        baslik={anaSayfa.cagri.baslik}
        metin={anaSayfa.cagri.metin}
        butonMetni={anaSayfa.cagri.butonMetni}
        telefon={ayarlar.telefon}
        telefonHref={ayarlar.telefonHref}
        telefonVar={ayarlar.telefonVar}
      />
    </>
  );
}
