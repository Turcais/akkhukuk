import Link from "next/link";
import Image from "next/image";
import { gorselAdresi, type SanityGorsel } from "@/sanity/client";
import { cn } from "@/lib/utils";
import markaIsareti from "../../../public/marka/akk-logo.svg";

/**
 * Buro logosu ve kelime isareti.
 *
 * Isaret, buronun kendi kurumsal logosudur (sekiz kollu yildiz, cift
 * basli kartal ve AKK kelime isareti). Kaynak CorelDRAW cizimi vektor
 * oldugu icin SVG olarak tasinir: her olcude keskin kalir ve tek dosya
 * hem acik hem koyu zeminde calisir. Altin ic hat bunun icin secildi;
 * ozgun beyaz hat koyu zeminde yildizin govdesini yutuyordu.
 *
 * Yonetim panelinden logo yuklendiginde o gorsel bunun yerine gecer.
 */
export function Logo({
  buroAdi,
  slogan,
  gorsel,
  koyuZemin = false,
  className,
}: {
  buroAdi: string;
  slogan?: string;
  gorsel?: SanityGorsel;
  koyuZemin?: boolean;
  className?: string;
}) {
  const panelLogosu = gorsel ? gorselAdresi(gorsel, 480) : null;

  return (
    <Link
      href="/"
      transitionTypes={["geri"]}
      aria-label={`${buroAdi} — ana sayfa`}
      className={cn("group inline-flex items-center gap-3 sm:gap-4", className)}
    >
      {panelLogosu ? (
        /* Panelden yuklenen logo tek basina durur: yuklenen gorsel cogu
           zaman buro adini da icerir, yaninda kelime isareti tekrar olur. */
        <Image
          src={panelLogosu}
          alt={gorsel?.alt || buroAdi}
          width={280}
          height={72}
          className="h-11 w-auto sm:h-13"
          priority
        />
      ) : (
        <>
          <Image
            src={markaIsareti}
            alt=""
            aria-hidden="true"
            className="h-12 w-auto shrink-0 transition-transform duration-500 group-hover:scale-[1.04] sm:h-13"
            priority
          />
          {/* Dar ekranda kelime isareti uc satira kiriliyor; isaretin
              icinde zaten AKK var, ad ise baglantinin aria-label'inda. */}
          <span className="hidden flex-col leading-none sm:flex">
            <span
              className={cn(
                "font-display text-[1.18rem] leading-[1.15] tracking-tight sm:text-[1.3rem]",
                koyuZemin ? "text-white" : "text-murekkep",
              )}
            >
              {buroAdi}
            </span>
            {slogan ? (
              <span
                className={cn(
                  "mt-1.5 hidden whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.18em] sm:block",
                  koyuZemin ? "text-altin-parlak" : "text-altin-metin",
                )}
              >
                {slogan}
              </span>
            ) : null}
          </span>
        </>
      )}
    </Link>
  );
}
