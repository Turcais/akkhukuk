import Link from "next/link";
import type { ReactNode } from "react";
import { Bordur, Oruntu } from "@/components/brand/motif";
import { Kapsayici } from "@/components/ui/bolum";

/**
 * Ic sayfalarin ust bandi: yol izi, ustbaslik, baslik ve giris metni.
 * Koyu zemin ve altin oruntu, sitenin her ic sayfasinda ayni cerceveyi kurar.
 */
export function SayfaBasligi({
  ustBaslik,
  baslik,
  aciklama,
  yolIzi = [],
  yan,
}: {
  ustBaslik?: string;
  baslik: string;
  aciklama?: string;
  yolIzi?: { ad: string; adres: string }[];
  yan?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-koyu-zemin">
      <Oruntu className="text-altin opacity-[0.06]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60rem 24rem at 15% 0%, rgba(158,27,50,0.35), transparent 65%), radial-gradient(40rem 20rem at 90% 100%, rgba(168,135,60,0.16), transparent 70%)",
        }}
        aria-hidden="true"
        data-yazdirma="gizle"
      />

      <Kapsayici className="relative py-16 sm:py-20">
        {yolIzi.length > 0 ? (
          <nav aria-label="Sayfa yolu" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 text-[0.78rem] text-white/45">
              <li>
                {/* Yol izi geriye doğrudur; yaprak ters yöne çevrilir. */}
                <Link href="/" transitionTypes={["geri"]} className="transition-colors hover:text-white/80">
                  Ana Sayfa
                </Link>
              </li>
              {yolIzi.map((basamak, sira) => (
                <li key={basamak.adres} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-altin/50">
                    /
                  </span>
                  {sira === yolIzi.length - 1 ? (
                    <span className="text-white/70">{basamak.ad}</span>
                  ) : (
                    <Link
                      href={basamak.adres}
                      transitionTypes={["geri"]}
                      className="transition-colors hover:text-white/80"
                    >
                      {basamak.ad}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {ustBaslik ? (
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-altin-parlak">
                {ustBaslik}
              </p>
            ) : null}
            <h1 className="mt-4 text-[2.1rem] text-white sm:text-[2.9rem]">{baslik}</h1>
            {aciklama ? <p className="mt-6 text-[1.02rem] leading-relaxed text-white/65">{aciklama}</p> : null}
          </div>
          {yan ? <div className="shrink-0">{yan}</div> : null}
        </div>
      </Kapsayici>

      {/* Koyu başlık bandından kâğıt zemine geçiş */}
      <Bordur className="relative text-altin/70" />
    </div>
  );
}
