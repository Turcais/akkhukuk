import { ViewTransition } from "react";

/**
 * Sayfa gecisi — "yaprak".
 *
 * Neden template.tsx? Yerlesim (layout) gezinmeler arasinda korunur;
 * icindeki bir <ViewTransition> hicbir zaman gecis tetiklemez. Sablon ise
 * her gezinmede yeni bir anahtarla baglanir — gecisin calisabilecegi tek
 * yer burasi.
 *
 * Tek bir <div> sart: birden cok kardes verildiginde React her birine ayri
 * bir gecis adi verir ve sayfa tek yaprak gibi degil, parca parca doner.
 *
 * Acik bir "name" verilmez: ayni adi tasiyan eski ve yeni eleman eslesip
 * bicim degistirme (morph) davranisina gecer, cikis animasyonu hic
 * calismaz. Burada istenen, giden sayfanin kalkip gitmesidir.
 *
 * Gecis tarayicinin View Transitions API'si uzerinden yurur: DOM
 * gizlenmez, yalnizca anlik goruntu canlandirilir. Tarama motorlari,
 * ekran okuyucular ve yazdirma ciktisi bundan hic etkilenmez.
 */
export default function SayfaSablonu({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{ geri: "yaprak-geri", default: "yaprak" }}
      exit={{ geri: "yaprak-geri", default: "yaprak" }}
      default="none"
    >
      <div>{children}</div>
    </ViewTransition>
  );
}
