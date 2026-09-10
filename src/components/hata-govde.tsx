"use client";

import Link from "next/link";
import { Motif } from "@/components/brand/motif";
import { Buton, ButonBaglanti } from "@/components/ui/buton";
import { Kapsayici } from "@/components/ui/bolum";

/**
 * Hata sinirlarinin ortak govdesi.
 *
 * Ziyaretciye yigin izi degil ne yapabilecegini gosterir; teknik iz
 * yalnizca Next'in urettigi digest olarak, destek icin kunye halinde
 * durur. Hem (site) grubundaki hem de kok hata sinirinda kullanilir.
 */
export function HataGovde({
  hata,
  tekrarDene,
  kabuksuz = false,
}: {
  hata: Error & { digest?: string };
  tekrarDene: () => void;
  /** Ust menu ve alt bilgi olmadan gosteriliyorsa gezinme baglantisi eklenir. */
  kabuksuz?: boolean;
}) {
  return (
    <div className="doku-kagit">
      <Kapsayici className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="ustbaslik text-altin-metin">Beklenmeyen durum</p>
        <Motif className="mt-6 w-40" />
        <h1 className="mt-8 text-[2rem] sm:text-[2.4rem]">Sayfa şu anda görüntülenemiyor</h1>
        <p className="mt-5 max-w-lg leading-relaxed text-metin-soluk">
          Teknik bir aksaklık oluştu; sayfayı yeniden yüklemek çoğu zaman yeterli oluyor.
          Sorun sürerse bize doğrudan yazabilirsiniz, en kısa sürede dönüş yapalım.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Buton type="button" onClick={() => tekrarDene()}>
            Tekrar dene
          </Buton>
          <ButonBaglanti href="/iletisim" gorunum="cizgili">
            Bize yazın
          </ButonBaglanti>
          {kabuksuz ? (
            <ButonBaglanti href="/" gorunum="sade">
              Ana sayfaya dön
            </ButonBaglanti>
          ) : null}
        </div>

        {hata.digest ? (
          <p className="mt-12 text-[0.78rem] tracking-wide text-metin-soluk/70">
            Bize yazarken şu kaydı iletirseniz sorunu daha hızlı buluruz:{" "}
            <code className="font-mono text-metin-soluk">{hata.digest}</code>
          </p>
        ) : null}

        <p className="mt-4 text-[0.82rem] text-metin-soluk">
          Dilerseniz{" "}
          <Link href="/sikca-sorulan-sorular" className="text-kirmizi underline underline-offset-4">
            sıkça sorulan sorular
          </Link>{" "}
          bölümüne göz atabilirsiniz.
        </p>
      </Kapsayici>
    </div>
  );
}
