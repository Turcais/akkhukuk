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

/**
 * Bolum basligi.
 *
 * Duzen bir kitabe satirindan turetilir: solda bolum numarasi, ardindan
 * altin cetvel, sonra ustbaslik. Numara sayfayi bir cilt gibi okutur ve
 * hangi bolumde olundugunu tek bakista soyler.
 */
export function BolumBasligi({
  sira,
  ustBaslik,
  baslik,
  aciklama,
  ortali = false,
  koyu = false,
  className,
}: {
  sira?: string;
  ustBaslik?: string;
  baslik: string;
  aciklama?: string;
  ortali?: boolean;
  koyu?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", ortali && "mx-auto text-center", className)}>
      {ustBaslik ? (
        <div className={cn("flex items-center gap-4", ortali && "justify-center")}>
          {sira ? (
            <>
              <span
                className={cn(
                  "font-display text-[1.05rem] leading-none",
                  koyu ? "text-altin-parlak" : "text-altin",
                )}
              >
                {sira}
              </span>
              <span
                className={cn("h-px w-9", koyu ? "bg-altin/45" : "bg-cizgi-koyu")}
                aria-hidden="true"
              />
            </>
          ) : null}
          <p className={cn("ustbaslik", koyu && "text-altin-parlak")}>{ustBaslik}</p>
        </div>
      ) : null}
      <h2
        className={cn(
          "mt-5 text-[2rem] leading-[1.1] sm:text-[2.6rem]",
          koyu && "text-white",
        )}
      >
        {baslik}
      </h2>
      {aciklama ? (
        <p className={cn("mt-5 leading-[1.75]", koyu ? "text-white/65" : "text-metin-soluk")}>{aciklama}</p>
      ) : null}
    </div>
  );
}

/**
 * Cetvel — sayfanin iki yanindan gecen ince altin hat.
 *
 * Tezhipli sayfalarda metni cevreleyen cetvel cizgilerinin karsiligidir.
 * Genis ekranlarda beliren, kose isaretleriyle kapanan bir kenar cercevesi
 * kurar; dar ekranlarda hic cizilmez.
 */
export function Cetvel() {
  const kose = "absolute h-3.5 w-3.5 border-altin/25";
  return (
    <div
      aria-hidden="true"
      data-yazdirma="gizle"
      className="pointer-events-none fixed inset-y-6 left-10 right-10 z-0 hidden border-x border-altin/[0.14] min-[1440px]:block"
    >
      <span className={cn(kose, "-left-px -top-px border-l border-t")} />
      <span className={cn(kose, "-right-px -top-px border-r border-t")} />
      <span className={cn(kose, "-bottom-px -left-px border-b border-l")} />
      <span className={cn(kose, "-bottom-px -right-px border-b border-r")} />
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
