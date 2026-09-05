import { cn } from "@/lib/utils";

/**
 * Bolum ayraci motifi — dort yapraklı hatayi cekirdegi ve iki yana uzanan
 * ince altin cizgiler. Yalnizca susleme amaclidir, ekran okuyucudan gizlenir.
 */
export function Motif({ className }: { className?: string }) {
  return (
    <div className={cn("ayrac", className)} aria-hidden="true">
      <svg viewBox="0 0 40 16" className="h-4 w-10" fill="none">
        <path
          d="M20 2c2.6 2.6 5.2 4.2 5.2 6s-2.6 3.4-5.2 6c-2.6-2.6-5.2-4.2-5.2-6s2.6-3.4 5.2-6Z"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path d="M13 8h-6M33 8h-6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="20" cy="8" r="1.1" fill="currentColor" />
      </svg>
    </div>
  );
}

/**
 * Genis zeminlerde cok dusuk opaklikta kullanilan geometrik oruntu.
 * Sekiz kollu yildiz (mühr-ü Süleyman turevi) ve baklava agi.
 */
export function Oruntu({ className }: { className?: string }) {
  return (
    <svg className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} aria-hidden="true">
      <defs>
        <pattern id="akk-oruntu" width="72" height="72" patternUnits="userSpaceOnUse">
          <path
            d="M36 6 44 18 58 18 50 30 58 42 44 42 36 54 28 42 14 42 22 30 14 18 28 18Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <path d="M0 36h14M58 36h14M36 0v6M36 54v18" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#akk-oruntu)" />
    </svg>
  );
}
