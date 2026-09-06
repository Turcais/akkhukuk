"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { ara, turEtiketi, type AramaKaydi } from "@/lib/arama";
import { cn } from "@/lib/utils";

/**
 * Arama alani ve sonuclari.
 *
 * Dizin bir kez indirilir, sonrasinda her tus vurusunda sonuc aninda
 * guncellenir. Adres cubugundaki ?q= degeri sonuclarla birlikte
 * guncellenir; boylece bir arama baglantisi paylasilabilir ve tarayicinin
 * geri tusu beklendigi gibi calisir.
 */
export function AramaKutusu() {
  const yonlendirici = useRouter();
  const parametreler = useSearchParams();
  const ilkSorgu = parametreler.get("q") ?? "";

  const [sorgu, setSorgu] = useState(ilkSorgu);
  const [dizin, setDizin] = useState<AramaKaydi[] | null>(null);
  const alan = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let iptal = false;
    fetch("/arama-verisi.json")
      .then((y) => y.json())
      .then((veri: AramaKaydi[]) => {
        if (!iptal) setDizin(veri);
      })
      .catch(() => {
        if (!iptal) setDizin([]);
      });
    return () => {
      iptal = true;
    };
  }, []);

  /* Adres cubugu yazmayi geciktirmeden, ayri bir zamanlayiciyla guncellenir. */
  useEffect(() => {
    const zamanlayici = setTimeout(() => {
      const yeni = sorgu.trim() ? `/arama?q=${encodeURIComponent(sorgu.trim())}` : "/arama";
      yonlendirici.replace(yeni, { scroll: false });
    }, 350);
    return () => clearTimeout(zamanlayici);
  }, [sorgu, yonlendirici]);

  const sonuclar = useMemo(() => (dizin ? ara(dizin, sorgu) : []), [dizin, sorgu]);
  const aranıyor = sorgu.trim().length > 1;

  return (
    <div>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-metin-silik"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <label htmlFor="arama" className="sr-only">
          Sitede ara
        </label>
        <input
          id="arama"
          ref={alan}
          type="search"
          autoFocus
          value={sorgu}
          onChange={(olay) => setSorgu(olay.target.value)}
          placeholder="Örnek: işe iade, vakıf kuruluşu, kira tespiti"
          className="w-full border border-cizgi-koyu bg-yuzey py-5 pl-14 pr-14 font-display text-[1.15rem] text-murekkep outline-none transition-colors placeholder:font-sans placeholder:text-[0.95rem] placeholder:text-metin-silik focus:border-kirmizi"
        />
        {sorgu ? (
          <button
            type="button"
            onClick={() => {
              setSorgu("");
              alan.current?.focus();
            }}
            aria-label="Aramayı temizle"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 text-metin-silik transition-colors hover:text-kirmizi"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        ) : null}
      </div>

      <div className="mt-10" aria-live="polite">
        {!aranıyor ? (
          <p className="text-metin-soluk">
            Çalışma alanları, yayınlar, sık sorulan sorular ve ekip sayfaları içinde arama yapar.
          </p>
        ) : dizin === null ? (
          <p className="text-metin-silik">Aranıyor…</p>
        ) : sonuclar.length === 0 ? (
          <div>
            <p className="text-metin">
              <span className="font-display text-[1.15rem]">“{sorgu}”</span> için sonuç bulunamadı.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-metin-soluk">
              Aradığınız konu sitede yazılı olmayabilir. Meselenizi kısaca yazarsanız doğru kapıyı birlikte
              buluruz —{" "}
              <Link href="/iletisim" className="text-kirmizi underline decoration-altin/60 underline-offset-4">
                bize ulaşın
              </Link>
              .
            </p>
          </div>
        ) : (
          <>
            <p className="ustbaslik">{sonuclar.length} sonuç</p>
            <ol className="mt-6 border-t border-cizgi">
              {sonuclar.slice(0, 40).map((kayit, sira) => (
                <li key={`${kayit.adres}-${sira}`}>
                  <Link
                    href={kayit.adres}
                    className="group grid gap-x-8 gap-y-2 border-b border-cizgi py-6 transition-colors hover:bg-yuzey sm:grid-cols-[9rem_1fr]"
                  >
                    <span
                      className={cn(
                        "text-[0.68rem] font-semibold uppercase tracking-[0.16em]",
                        kayit.tur === "alan" ? "text-kirmizi" : "text-altin-metin",
                      )}
                    >
                      {turEtiketi(kayit.tur)}
                    </span>
                    <div>
                      <h2 className="font-display text-[1.12rem] leading-snug text-murekkep transition-colors group-hover:text-kirmizi">
                        {kayit.baslik}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-[0.9rem] leading-relaxed text-metin-soluk">
                        {kayit.ozet}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}
