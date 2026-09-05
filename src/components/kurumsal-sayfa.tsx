import { notFound } from "next/navigation";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Metin } from "@/components/metin";
import { YolVerisi } from "@/components/yapisal-veri";
import { Bolum } from "@/components/ui/bolum";
import { kurumsalMetinGetir } from "@/lib/veri";
import { tarihYaz } from "@/lib/utils";

/** Yasal uyari, KVKK, gizlilik ve cerez sayfalarinin ortak govdesi. */
export async function KurumsalSayfa({ anahtar }: { anahtar: string }) {
  const metin = await kurumsalMetinGetir(anahtar);
  if (!metin) notFound();

  const yolIzi = [{ ad: metin.baslik, adres: `/${anahtar}` }];

  return (
    <>
      <SayfaBasligi ustBaslik="Kurumsal" baslik={metin.baslik} aciklama={metin.ozet} yolIzi={yolIzi} />
      <YolVerisi basamaklar={yolIzi} />

      <Bolum className="doku-kagit">
        <div className="olcu">
          {metin.guncelleme ? (
            <p className="text-[0.82rem] uppercase tracking-[0.14em] text-metin-silik">
              Son güncelleme: {tarihYaz(metin.guncelleme)}
            </p>
          ) : null}
          <div className="mt-8">
            <Metin govde={metin.govde} />
          </div>
        </div>
      </Bolum>
    </>
  );
}
