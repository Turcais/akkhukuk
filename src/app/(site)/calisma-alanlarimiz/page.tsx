import type { Metadata } from "next";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { AlanKarti } from "@/components/anasayfa/alanlar";
import { Cagri } from "@/components/anasayfa/cagri";
import { YolVerisi } from "@/components/yapisal-veri";
import { Bolum, IzgaraDolgusu } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa } from "@/lib/icerik";
import { calismaAlanlariGetir, sayfaMetniGetir, sec } from "@/lib/veri";

export const revalidate = 300;

const varsayilan = {
  ustBaslik: "Çalışma Alanlarımız",
  baslik: "Hangi konuda destek arıyorsunuz?",
  aciklama:
    "Her alan için ne yaptığımızı, kimler için yaptığımızı ve en sık sorulan soruların yanıtlarını ayrı ayrı yazdık. Aradığınız konuyu bulamazsanız bize doğrudan yazabilirsiniz.",
};

export async function generateMetadata(): Promise<Metadata> {
  const panel = await sayfaMetniGetir("alanlar-sayfa");
  return {
    title: "Çalışma Alanlarımız",
    description: sec(panel.seoAciklama, varsayilan.aciklama),
    alternates: { canonical: "/calisma-alanlarimiz" },
  };
}

export default async function CalismaAlanlari() {
  const [ayarlar, alanlar, panel] = await Promise.all([
    ayarlariGetir(),
    calismaAlanlariGetir(),
    sayfaMetniGetir("alanlar-sayfa"),
  ]);

  const yolIzi = [{ ad: "Çalışma Alanlarımız", adres: "/calisma-alanlarimiz" }];

  return (
    <>
      <SayfaBasligi
        ustBaslik={sec(panel.ustBaslik, varsayilan.ustBaslik)}
        baslik={sec(panel.baslik, varsayilan.baslik)}
        aciklama={sec(panel.altBaslik, varsayilan.aciklama)}
        yolIzi={yolIzi}
      />
      <YolVerisi basamaklar={yolIzi} />

      <Bolum>
        <div className="grid gap-px border border-cizgi bg-cizgi sm:grid-cols-2 lg:grid-cols-3">
          {alanlar.map((alan, sira) => (
            <AlanKarti key={alan.slug} alan={alan} sira={sira + 1} />
          ))}
          <IzgaraDolgusu adet={alanlar.length} />
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
