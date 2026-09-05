import type { Metadata } from "next";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Cagri } from "@/components/anasayfa/cagri";
import { SoruVerisi, YolVerisi } from "@/components/yapisal-veri";
import { Bolum } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa, sorulariGrupla } from "@/lib/icerik";
import { sayfaMetniGetir, sec, sikSorulanlariGetir } from "@/lib/veri";

export const revalidate = 300;

const varsayilan = {
  ustBaslik: "Sıkça Sorulan Sorular",
  baslik: "Merak edilenler",
  aciklama:
    "Büromuza en sık yöneltilen soruları başlıklar hâlinde topladık. Aradığınız yanıtı bulamazsanız doğrudan bize yazabilirsiniz.",
};

export async function generateMetadata(): Promise<Metadata> {
  const panel = await sayfaMetniGetir("sss-sayfa");
  return {
    title: "Sıkça Sorulan Sorular",
    description: sec(panel.seoAciklama, varsayilan.aciklama),
    alternates: { canonical: "/sikca-sorulan-sorular" },
  };
}

export default async function SikcaSorulanSorular() {
  const [ayarlar, sorular, panel] = await Promise.all([
    ayarlariGetir(),
    sikSorulanlariGetir(),
    sayfaMetniGetir("sss-sayfa"),
  ]);

  const gruplar = sorulariGrupla(sorular);
  const yolIzi = [{ ad: "Sıkça Sorulan Sorular", adres: "/sikca-sorulan-sorular" }];

  return (
    <>
      <SayfaBasligi
        ustBaslik={sec(panel.ustBaslik, varsayilan.ustBaslik)}
        baslik={sec(panel.baslik, varsayilan.baslik)}
        aciklama={sec(panel.altBaslik, varsayilan.aciklama)}
        yolIzi={yolIzi}
      />
      <YolVerisi basamaklar={yolIzi} />
      <SoruVerisi sorular={sorular.map(({ soru, cevap }) => ({ soru, cevap }))} />

      <Bolum className="doku-kagit">
        <div className="space-y-16">
          {gruplar.map((grup) => (
            <section key={grup.kategori}>
              <h2 className="text-[1.5rem]">
                <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
                <span className="mt-4 block">{grup.kategori}</span>
              </h2>

              <div className="mt-7 divide-y divide-cizgi border-y border-cizgi">
                {grup.liste.map((kayit) => (
                  <details key={kayit.soru} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.02rem] font-medium text-murekkep marker:hidden">
                      <span>{kayit.soru}</span>
                      <span
                        className="mt-1.5 h-3 w-3 shrink-0 rotate-45 border-b-2 border-r-2 border-kirmizi transition-transform duration-300 group-open:rotate-[225deg]"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="olcu mt-4 leading-[1.8] text-metin-soluk">{kayit.cevap}</p>
                  </details>
                ))}
              </div>
            </section>
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
