import Link from "next/link";
import Image from "next/image";
import { gorselAdresi, type SanityGorsel } from "@/sanity/client";
import { cn } from "@/lib/utils";
import { Nisan } from "./nisan";

/**
 * Yazili logo. Yonetim panelinden gorsel yuklendiginde onun yerine
 * o gorsel kullanilir; yuklenmediginde nisan + kelime isareti gosterilir.
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
  const gorselUrl = gorsel ? gorselAdresi(gorsel, 480) : null;

  return (
    <Link
      href="/"
      aria-label={`${buroAdi} — ana sayfa`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      {gorselUrl ? (
        <Image
          src={gorselUrl}
          alt={gorsel?.alt || buroAdi}
          width={240}
          height={64}
          className="h-11 w-auto"
          priority
        />
      ) : (
        <>
          <Nisan
            className={cn("h-11 w-8", koyuZemin ? "text-altin-parlak" : "text-kirmizi")}
            harfSinifi="text-[0.62rem] font-semibold"
          />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-[1.3rem] leading-[1.15] tracking-tight",
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
