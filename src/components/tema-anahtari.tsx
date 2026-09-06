"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/**
 * Tema anahtari.
 *
 * Simgeler markanin dilinden secildi: gunduz icin sekiz kollu sems,
 * gece icin hilal. Sunucuda hangi temanin etkin oldugu bilinemedigi icin
 * bilesen baglanana kadar bos ama ayni olcude bir kutu cizer; boylece
 * yerlesim oynamaz.
 */

function Sems({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M12 1.8v3M12 19.2v3M22.2 12h-3M4.8 12h-3M19.2 4.8l-2.1 2.1M6.9 17.1l-2.1 2.1M19.2 19.2l-2.1-2.1M6.9 6.9 4.8 4.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Hilal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20.4 14.7A8.7 8.7 0 0 1 9.3 3.6a8.7 8.7 0 1 0 11.1 11.1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TemaAnahtari({ className }: { className?: string }) {
  const { setTheme } = useTheme();

  /* Hangi simgenin gorunecegi CSS ile secilir. Bunun nedeni sunucuda
     temanin bilinmemesi: bir "baglandi" durumu tutup ilk boyada bos kutu
     cizmek yerine, iki simge de basilir ve .karanlik sinifi hangisinin
     gorunecegini belirler. Sinif, next-themes'in satir ici betigi
     tarafindan ilk boyadan once eklenir; titreme olmaz. */
  return (
    <button
      type="button"
      onClick={() =>
        setTheme(document.documentElement.classList.contains("karanlik") ? "light" : "dark")
      }
      aria-label="Temayı değiştir"
      title="Aydınlık / karanlık tema"
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center border border-cizgi-koyu text-metin transition-colors hover:border-altin hover:text-altin-metin",
        className,
      )}
    >
      <Hilal className="h-[1.15rem] w-[1.15rem] dark:hidden" />
      <Sems className="hidden h-[1.15rem] w-[1.15rem] dark:block" />
    </button>
  );
}
