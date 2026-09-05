import { cn } from "@/lib/utils";

/**
 * Osmanli bezeme dagarciginndan turetilmis sus unsurlari.
 *
 * Hepsi tek renkte (currentColor) cizilir, hicbiri gorsel dosyasi
 * gerektirmez ve tumu aria-hidden'dir. Kural: motif hicbir zaman metnin
 * okunabilirligini dusurmez; islevi ritim, cerceve ve derinliktir.
 */

/* ─────────────────── Ayrac ─────────────────── */

/**
 * Bolum ayraci — ortada sivri kemer siluetli hatayi cekirdegi,
 * iki yana uzanan ince altin cizgiler.
 */
export function Motif({ className }: { className?: string }) {
  return (
    <div className={cn("ayrac", className)} aria-hidden="true">
      <svg viewBox="0 0 56 18" className="h-[18px] w-14" fill="none">
        {/* sivri oval cekirdek */}
        <path
          d="M28 2.5c3.4 3.2 6.2 5.2 6.2 6.5s-2.8 3.3-6.2 6.5c-3.4-3.2-6.2-5.2-6.2-6.5s2.8-3.3 6.2-6.5Z"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <circle cx="28" cy="9" r="1.15" fill="currentColor" />
        {/* iki yana acilan rumi kivrimlari */}
        <path
          d="M20 9c-2.6 0-3.6-1.9-5.4-1.9S11.8 9 9.4 9M36 9c2.6 0 3.6-1.9 5.4-1.9S44.2 9 46.6 9"
          stroke="currentColor"
          strokeWidth="0.85"
          strokeLinecap="round"
        />
        <path d="M6.6 9H3M53 9h-3.6" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ─────────────────── Bordur (zencerek) ─────────────────── */

/**
 * Zencerek bordur — birbirini kesen iki dalga ve kesisme noktalarindaki
 * baklavalar. Osmanli mimarisinde iki yuzey arasindaki gecisi belirleyen
 * "su yolu" seridinin sadelestirilmis hali.
 *
 * Koyu ve acik bolumlerin bulustugu her yere konur; sitede gecisler
 * boylece kesilmis degil, cerceveye alinmis gorunur.
 */
export function Bordur({ className, ters = false }: { className?: string; ters?: boolean }) {
  return (
    <div
      className={cn("pointer-events-none relative h-6 w-full overflow-hidden", ters && "rotate-180", className)}
      aria-hidden="true"
    >
      <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 480 24">
        <defs>
          <pattern id="akk-zencerek" width="48" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M0 7C12 7 12 17 24 17S36 7 48 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              opacity="0.55"
            />
            <path
              d="M0 17C12 17 12 7 24 7S36 17 48 17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              opacity="0.55"
            />
            <path d="M12 12l2.4 2.4L12 16.8 9.6 14.4 12 12Z" fill="currentColor" opacity="0.75" />
            <path d="M36 12l2.4 2.4L36 16.8l-2.4-2.4L36 12Z" fill="currentColor" opacity="0.75" />
          </pattern>
        </defs>
        <rect width="480" height="24" fill="url(#akk-zencerek)" />
      </svg>
    </div>
  );
}

/* ─────────────────── Girih oruntusu ─────────────────── */

/**
 * Sekiz kollu yildiz (mühr-ü Süleyman) ve baklava agindan olusan girih.
 * Genis koyu zeminlerde cok dusuk opaklikta, yalnizca doku olarak.
 */
export function Oruntu({ className }: { className?: string }) {
  return (
    <svg className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} aria-hidden="true">
      <defs>
        <pattern id="akk-girih" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* ust uste binen iki kare: sekiz kollu yildiz */}
          <rect x="24" y="24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <rect
            x="24"
            y="24"
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            transform="rotate(45 40 40)"
          />
          {/* yildizi kenarlara baglayan cizgiler */}
          <path
            d="M40 0v17M40 63v17M0 40h17M63 40h80"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.7"
          />
          {/* kose baklavalari — dosemenin surekliligi icin */}
          <path
            d="M0 0l6 6-6 6-6-6 6-6ZM80 0l6 6-6 6-6-6 6-6ZM0 80l6 6-6 6-6-6 6-6ZM80 80l6 6-6 6-6-6 6-6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#akk-girih)" />
    </svg>
  );
}

/* ─────────────────── Mihrap kemeri ─────────────────── */

/** Kemer yolunun birim uzaydaki tanimi; hem kirpma hem cerceve ayni yolu kullanir. */
export const KEMER_YOLU =
  "M0,1 L0,0.46 C0.015,0.25 0.235,0.055 0.5,0 C0.765,0.055 0.985,0.25 1,0.46 L1,1 Z";

/**
 * Belgede bir kez cizilen kirpma tanimi. Kutu oranina gore olceklendigi
 * icin (objectBoundingBox) her boyuttaki gorsele uyar.
 */
export function KemerTanimi() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <clipPath id="akk-kemer" clipPathUnits="objectBoundingBox">
          <path d={KEMER_YOLU} />
        </clipPath>
      </defs>
    </svg>
  );
}

/** Kemerin altin ic hattini gorselin uzerine cizer. */
export function KemerCercevesi({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={KEMER_YOLU}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ─────────────────── Kosebent ─────────────────── */

/**
 * Kutularin dort kosesine oturan cerceve parcalari. Osmanli cilt ve
 * kitabe duzeninde kose bezemesinin (kosebent) sadelestirilmis karsiligi.
 */
export function Kosebent({ className }: { className?: string }) {
  const kose = "absolute h-4 w-4 border-current";
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute inset-2", className)}>
      <span className={cn(kose, "left-0 top-0 border-l border-t")} />
      <span className={cn(kose, "right-0 top-0 border-r border-t")} />
      <span className={cn(kose, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(kose, "bottom-0 right-0 border-b border-r")} />
    </span>
  );
}
