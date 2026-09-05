import type { Metadata } from "next";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Cagri } from "@/components/anasayfa/cagri";
import { EkipKarti } from "@/components/ekip-karti";
import { YolVerisi } from "@/components/yapisal-veri";
import { Bolum, IzgaraDolgusu } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa } from "@/lib/icerik";
import { ekipGetir, sayfaMetniGetir, sec } from "@/lib/veri";

export const revalidate = 300;

const varsayilan = {
  ustBaslik: "Ekibimiz",
  baslik: "Dosyanızı kim yürütüyor?",
  aciklama:
    "Büromuzda her dosyanın sorumlu avukatı bellidir. Aşağıdaki profillerde meslektaşlarımızın özgeçmişlerine, çalışma alanlarına ve iletişim bilgilerine ulaşabilirsiniz.",
};

export async function generateMetadata(): Promise<Metadata> {
  const panel = await sayfaMetniGetir("ekip-sayfa");
  return {
    title: "Ekibimiz",
    description: sec(panel.seoAciklama, varsayilan.aciklama),
    alternates: { canonical: "/ekibimiz" },
  };
}

export default async function Ekibimiz() {
  const [ayarlar, ekip, panel] = await Promise.all([ayarlariGetir(), ekipGetir(), sayfaMetniGetir("ekip-sayfa")]);
  const yolIzi = [{ ad: "Ekibimiz", adres: "/ekibimiz" }];

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
          {ekip.map((uye) => (
            <EkipKarti key={uye.slug} uye={uye} />
          ))}
          <IzgaraDolgusu adet={ekip.length} />
        </div>

        <p className="mt-10 max-w-2xl text-[0.88rem] leading-relaxed text-metin-silik">
          Büromuzda görev alan avukatların tamamı bağlı bulundukları baroya kayıtlıdır. Ekip bilgileri yönetim
          panelinden güncellenir; yeni katılan meslektaşlar bu sayfada yer alır.
        </p>
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
