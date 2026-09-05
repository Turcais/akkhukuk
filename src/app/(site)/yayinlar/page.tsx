import type { Metadata } from "next";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Cagri } from "@/components/anasayfa/cagri";
import { YaziKarti } from "@/components/yazi-karti";
import { YolVerisi } from "@/components/yapisal-veri";
import { Bolum, IzgaraDolgusu } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa } from "@/lib/icerik";
import { sayfaMetniGetir, sec, yazilarGetir } from "@/lib/veri";

export const revalidate = 300;

const varsayilan = {
  ustBaslik: "Yayınlar",
  baslik: "Hukuki bilgilendirme yazıları",
  aciklama:
    "Sık karşılaştığımız soruları ve mevzuattaki değişiklikleri, dosya sırlarına girmeden ve genel bilgilendirme sınırları içinde yazıyoruz. Yazılar hukuki görüş niteliği taşımaz.",
};

export async function generateMetadata(): Promise<Metadata> {
  const panel = await sayfaMetniGetir("yayinlar-sayfa");
  return {
    title: "Yayınlar",
    description: sec(panel.seoAciklama, varsayilan.aciklama),
    alternates: { canonical: "/yayinlar" },
  };
}

export default async function Yayinlar() {
  const [ayarlar, yazilar, panel] = await Promise.all([
    ayarlariGetir(),
    yazilarGetir(),
    sayfaMetniGetir("yayinlar-sayfa"),
  ]);
  const yolIzi = [{ ad: "Yayınlar", adres: "/yayinlar" }];

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
        {yazilar.length === 0 ? (
          <p className="text-metin-soluk">Henüz yayımlanmış bir yazı bulunmuyor.</p>
        ) : (
          <div className="grid gap-px border border-cizgi bg-cizgi sm:grid-cols-2 lg:grid-cols-3">
            {yazilar.map((yazi, sira) => (
              <YaziKarti key={yazi.slug} yazi={yazi} oncelikli={sira < 3} />
            ))}
            <IzgaraDolgusu adet={yazilar.length} />
          </div>
        )}
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
