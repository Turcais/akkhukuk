import { cn } from "@/lib/utils";

/**
 * Nisan — buronun mühür işareti.
 *
 * Osmanli sanatindaki "semse" (madalyon) formundan turetilmis sivri oval
 * bir cerceve ve icindeki ince ic hat. Harfler SVG icine gomulmez; ustune
 * HTML olarak yerlestirilir ki gercek baslik yazi tipiyle render edilsin.
 */
export function Nisan({
  harfler = "AKK",
  className,
  cerceveRengi = "currentColor",
  harfSinifi,
}: {
  harfler?: string;
  className?: string;
  cerceveRengi?: string;
  harfSinifi?: string;
}) {
  return (
    <span className={cn("relative inline-flex shrink-0 items-center justify-center", className)}>
      <svg viewBox="0 0 48 64" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
        <path
          d="M24 1.5C34.2 9.8 44.5 20.2 44.5 32S34.2 54.2 24 62.5C13.8 54.2 3.5 43.8 3.5 32S13.8 9.8 24 1.5Z"
          stroke={cerceveRengi}
          strokeWidth="1.25"
        />
        <path
          d="M24 6.5C32.4 13.4 40 21.9 40 32S32.4 50.6 24 57.5C15.6 50.6 8 42.1 8 32S15.6 13.4 24 6.5Z"
          stroke={cerceveRengi}
          strokeWidth="0.6"
          opacity="0.55"
        />
      </svg>
      <span
        className={cn(
          "relative font-display leading-none tracking-[0.06em]",
          harfSinifi ?? "text-[0.6rem]",
        )}
      >
        {harfler}
      </span>
    </span>
  );
}
