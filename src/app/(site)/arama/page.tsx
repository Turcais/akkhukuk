import type { Metadata } from "next";
import { Suspense } from "react";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Bolum } from "@/components/ui/bolum";
import { AramaKutusu } from "./arama-kutusu";

export const metadata: Metadata = {
  title: "Arama",
  description: "Çalışma alanları, yayınlar ve sık sorulan sorular içinde arama yapın.",
  alternates: { canonical: "/arama" },
  /* Arama sonucu sayfalari arama motorlarinda indekslenmemeli. */
  robots: { index: false, follow: true },
};

export default function Arama() {
  return (
    <>
      <SayfaBasligi
        ustBaslik="Arama"
        baslik="Ne arıyorsunuz?"
        aciklama="Çalışma alanları, yayınlar, sık sorulan sorular ve ekip sayfaları tek alandan aranır."
        yolIzi={[{ ad: "Arama", adres: "/arama" }]}
      />

      <Bolum className="doku-kagit">
        <div className="mx-auto max-w-3xl">
          <Suspense fallback={<p className="text-metin-silik">Yükleniyor…</p>}>
            <AramaKutusu />
          </Suspense>
        </div>
      </Bolum>
    </>
  );
}
