import type { Metadata } from "next";
import { Motif } from "@/components/brand/motif";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Cagri } from "@/components/anasayfa/cagri";
import { YolVerisi } from "@/components/yapisal-veri";
import { Bolum } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa, hakkimizdaSayfasi } from "@/lib/icerik";
import { sayfaMetniGetir, sec } from "@/lib/veri";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const panel = await sayfaMetniGetir("hakkimizda");
  return {
    title: sec(panel.baslik, hakkimizdaSayfasi.baslik),
    description: sec(panel.seoAciklama, hakkimizdaSayfasi.girisMetni),
    alternates: { canonical: "/hakkimizda" },
  };
}

export default async function Hakkimizda() {
  const [ayarlar, panel] = await Promise.all([ayarlariGetir(), sayfaMetniGetir("hakkimizda")]);

  const bolumler = sec(
    panel.maddeler?.map((madde) => ({ baslik: madde.baslik ?? "", paragraflar: [madde.metin ?? ""] })),
    hakkimizdaSayfasi.bolumler,
  );

  return (
    <>
      <SayfaBasligi
        ustBaslik={sec(panel.ustBaslik, hakkimizdaSayfasi.ustBaslik)}
        baslik={sec(panel.baslik, hakkimizdaSayfasi.baslik)}
        aciklama={sec(panel.altBaslik, hakkimizdaSayfasi.girisMetni)}
        yolIzi={[{ ad: "Hakkımızda", adres: "/hakkimizda" }]}
      />
      <YolVerisi basamaklar={[{ ad: "Hakkımızda", adres: "/hakkimizda" }]} />

      <Bolum className="doku-kagit">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Motif className="max-w-[9rem]" />
            <p className="mt-8 font-display text-[1.35rem] leading-snug text-murekkep">
              {ayarlar.buroAdi}
            </p>
            <p className="mt-3 text-[0.9rem] text-metin-soluk">{ayarlar.baro}</p>
            <p className="mt-1 text-[0.9rem] text-metin-soluk">{ayarlar.adresTekSatir}</p>
          </div>

          <div className="olcu">
            {bolumler.map((bolum) => (
              <div key={bolum.baslik} className="mt-14 first:mt-0">
                <h2 className="text-[1.55rem]">
                  <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
                  <span className="mt-4 block">{bolum.baslik}</span>
                </h2>
                {bolum.paragraflar.map((paragraf) => (
                  <p key={paragraf.slice(0, 24)} className="mt-5 leading-[1.8] text-metin">
                    {paragraf}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Bolum>

      <Bolum className="border-y border-cizgi bg-kagit-koyu/40">
        <p className="ustbaslik">Değerlerimiz</p>
        <div className="mt-10 grid gap-px border border-cizgi bg-cizgi sm:grid-cols-2 lg:grid-cols-4">
          {hakkimizdaSayfasi.degerler.map((deger, sira) => (
            <div key={deger.baslik} className="h-full bg-kagit p-7">
              <span className="font-display text-[2.2rem] leading-none text-altin/40">
                {String(sira + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[1.1rem]">{deger.baslik}</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-metin-soluk">{deger.metin}</p>
            </div>
          ))}
        </div>
      </Bolum>

      <Cagri
        baslik={anaSayfa.cagri.baslik}
        metin={anaSayfa.cagri.metin}
        butonMetni={anaSayfa.cagri.butonMetni}
        telefon={ayarlar.telefon}
        telefonHref={ayarlar.telefonHref}
      />
    </>
  );
}
