import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Sayfa genisligi tek yerden yonetilir. */
export function Kapsayici({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

/** Dikey ritmi tek yerden yoneten bolum sarmalayicisi. */
export function Bolum({
  className,
  kapsayiciSinifi,
  id,
  children,
}: {
  className?: string;
  kapsayiciSinifi?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <Kapsayici className={kapsayiciSinifi}>{children}</Kapsayici>
    </section>
  );
}

/** Ustbaslik + baslik + aciklama uclusu. */
export function BolumBasligi({
  ustBaslik,
  baslik,
  aciklama,
  ortali = false,
  className,
}: {
  ustBaslik?: string;
  baslik: string;
  aciklama?: string;
  ortali?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", ortali && "mx-auto text-center", className)}>
      {ustBaslik ? <p className="ustbaslik">{ustBaslik}</p> : null}
      <h2 className="mt-4 text-[1.9rem] sm:text-[2.4rem]">{baslik}</h2>
      {aciklama ? <p className="mt-5 text-metin-soluk">{aciklama}</p> : null}
    </div>
  );
}

/**
 * Izgara dolgusu.
 *
 * Kart izgaralarinda hucreler arasi cizgiler, kapsayicinin arka planinin
 * 1px bosluklardan gorunmesiyle elde edilir. Son satir eksik kaldiginda bos
 * hucreler bu cizgi rengiyle boyanmis gorunur; bu dolgular o bosluklari
 * sayfanin kagit rengiyle kapatir. Kirilim basina gereken dolgu sayisi
 * farkli oldugu icin gorunurluk sinifla ayarlanir.
 */
export function IzgaraDolgusu({ adet, sutun = 3 }: { adet: number; sutun?: 2 | 3 }) {
  const genisDolgu = (sutun - (adet % sutun)) % sutun;
  const darDolgu = (2 - (adet % 2)) % 2;
  const toplam = Math.max(genisDolgu, darDolgu);
  if (toplam === 0) return null;

  return (
    <>
      {Array.from({ length: toplam }, (_, sira) => (
        <div
          key={`dolgu-${sira}`}
          aria-hidden="true"
          className={cn(
            "hidden bg-kagit",
            sira < darDolgu && "sm:block",
            sutun === 3 && (sira < genisDolgu ? "lg:block" : "lg:hidden"),
          )}
        />
      ))}
    </>
  );
}
