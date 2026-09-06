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
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <p className="ustbaslik">Çalışma ilkelerimiz</p>
            <Motif className="mt-7 max-w-[8rem]" />
          </div>

          <ol className="border-t border-cizgi">
            {hakkimizdaSayfasi.ilkeler.map((ilke, sira) => (
              <li key={ilke.slice(0, 20)} className="flex gap-6 border-b border-cizgi py-7 sm:gap-8">
                <span className="shrink-0 font-display text-[1.6rem] leading-none text-altin/45">
                  {String(sira + 1).padStart(2, "0")}
                </span>
                <p className="text-[1.02rem] leading-[1.75] text-metin">{ilke}</p>
              </li>
            ))}
          </ol>
        </div>
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
