"use client";

import { site } from "@/lib/site";

/**
 * Kok yerlesim kurulamadiginda calisan son siniri.
 *
 * Bu dosya kok yerlesimin yerine gecer: kendi html/body etiketlerini
 * kurar, globals.css yuklenmez ve metadata disari aktarilamaz. Bu yuzden
 * renkler, yazi tipleri ve baslik burada elle tanimlanir; disaridan hicbir
 * veri cekilmez ki hatanin kaynagi ne olursa olsun sayfa cizilebilsin.
 */
export default function KokCokme({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang={site.lang}>
      <body>
        <title>{`Sayfa görüntülenemiyor — ${site.shortName}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        {/* globals.css bu sinira ulasmadigi icin olcum stil dosyada degil burada. */}
        <style>{`
          :root {
            color-scheme: light dark;
            --kagit: #fbf8f3;
            --murekkep: #17130f;
            --metin: #574c42;
            --cizgi: #e7dfd1;
            --kirmizi: #9e1b32;
            --dolgu: #9e1b32;
            --altin: #a8873c;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --kagit: #16110d;
              --murekkep: #f4ece0;
              --metin: #bdae9d;
              --cizgi: #35291f;
              /* Koyu zeminde okunabilen kirmizi metin icin acilir; dugme
                 dolgusu ayri kalir, beyaz yazi acik kirmizide okunmaz. */
              --kirmizi: #dd6376;
              --dolgu: #a81f38;
              --altin: #d0af69;
            }
          }
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3rem 1.25rem;
            background: var(--kagit);
            color: var(--metin);
            font-family: ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          .kutu { max-width: 34rem; text-align: center; }
          .ustbaslik {
            margin: 0;
            font-size: 0.72rem;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--altin);
          }
          .cizgi {
            width: 3.5rem;
            height: 1px;
            margin: 1.5rem auto;
            background: linear-gradient(to right, transparent, var(--altin), transparent);
          }
          h1 {
            margin: 0;
            font-family: ui-serif, "Bodoni Moda", Georgia, "Times New Roman", serif;
            font-weight: 500;
            font-size: clamp(1.6rem, 4vw, 2.2rem);
            line-height: 1.25;
            color: var(--murekkep);
          }
          p { margin: 1.25rem 0 0; line-height: 1.7; }
          .dugmeler {
            margin-top: 2.25rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.9rem;
            justify-content: center;
          }
          .dugme {
            display: inline-flex;
            align-items: center;
            padding: 0.8rem 1.6rem;
            font: inherit;
            font-size: 0.9rem;
            letter-spacing: 0.02em;
            text-decoration: none;
            border: 1px solid transparent;
            border-radius: 0;
            cursor: pointer;
          }
          .dolu { background: var(--dolgu); color: #fff; }
          .cizgili { background: transparent; border-color: var(--cizgi); color: var(--murekkep); }
          .kayit { margin-top: 2.5rem; font-size: 0.78rem; opacity: 0.75; }
          code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
        `}</style>

        <div className="kutu">
          <p className="ustbaslik">{site.name}</p>
          <div className="cizgi" />
          <h1>Sayfa şu anda görüntülenemiyor</h1>
          <p>
            Beklenmeyen bir teknik aksaklık oluştu. Sayfayı yeniden yüklemeyi deneyebilir,
            sorun sürerse bize doğrudan yazabilirsiniz.
          </p>
          <div className="dugmeler">
            <button type="button" className="dugme dolu" onClick={() => retry()}>
              Tekrar dene
            </button>
            <a className="dugme cizgili" href="/iletisim">
              Bize yazın
            </a>
          </div>
          {error.digest ? (
            <p className="kayit">
              Bize yazarken şu kaydı iletirseniz sorunu daha hızlı buluruz:{" "}
              <code>{error.digest}</code>
            </p>
          ) : null}
        </div>
      </body>
    </html>
  );
}
