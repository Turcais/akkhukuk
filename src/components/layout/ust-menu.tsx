"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ButonBaglanti } from "@/components/ui/buton";
import { Kapsayici } from "@/components/ui/bolum";
import { anaMenu } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { SanityGorsel } from "@/sanity/client";

type Alan = { slug: string; kisaBaslik: string };

/**
 * Ust menu. Iki kattan olusur: ince iletisim seridi ve ana gezinme.
 * Sayfa kaydirildiginda serit gizlenir, ana gezinme yapisir.
 */
export function UstMenu({
  buroAdi,
  slogan,
  logo,
  telefon,
  telefonHref,
  eposta,
  alanlar,
}: {
  buroAdi: string;
  slogan: string;
  logo?: SanityGorsel;
  telefon: string;
  telefonHref: string;
  eposta: string;
  alanlar: Alan[];
}) {
  const yol = usePathname();
  const [kaydirildi, setKaydirildi] = useState(false);

  /* Acik menuler, acildiklari yol ile birlikte tutulur. Adres degistiginde
     karsilastirma tutmaz ve menu kendiliginden kapanir; kapatmak icin
     ayrica bir effect'e gerek kalmaz. */
  const [menuYolu, setMenuYolu] = useState<string | null>(null);
  const [alanYolu, setAlanYolu] = useState<string | null>(null);
  const acik = menuYolu === yol;
  const alanlarAcik = alanYolu === yol;

  useEffect(() => {
    const dinle = () => setKaydirildi(window.scrollY > 24);
    dinle();
    window.addEventListener("scroll", dinle, { passive: true });
    return () => window.removeEventListener("scroll", dinle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = acik ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [acik]);

  const aktifMi = (adres: string) => yol === adres || yol.startsWith(`${adres}/`);

  return (
    <header className="sticky top-0 z-50">
      {/* Iletisim seridi */}
      <div
        className={cn(
          "hidden overflow-hidden bg-koyu-zemin text-[0.78rem] text-white/70 transition-[max-height,opacity] duration-300 md:block",
          kaydirildi ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <Kapsayici className="flex items-center justify-between py-2.5">
          <span className="tracking-[0.14em] text-altin-parlak/90 uppercase text-[0.66rem]">
            Avukatlık ve Hukuki Danışmanlık · Ankara
          </span>
          <div className="flex items-center gap-6">
            <a href={telefonHref} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              {telefon}
            </a>
            <a href={`mailto:${eposta}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              {eposta}
            </a>
          </div>
        </Kapsayici>
      </div>

      {/* Ana gezinme */}
      <div
        className={cn(
          "border-b bg-kagit/95 backdrop-blur transition-shadow duration-300",
          kaydirildi ? "border-cizgi shadow-[0_1px_20px_-12px_rgba(23,19,15,0.4)]" : "border-transparent",
        )}
      >
        <Kapsayici className="flex items-center justify-between gap-6 py-3.5">
          <Logo buroAdi={buroAdi} slogan={slogan} gorsel={logo} />

          <nav aria-label="Ana menü" className="hidden items-center gap-1 lg:flex">
            {anaMenu.map((oge) =>
              oge.adres === "/calisma-alanlarimiz" ? (
                <div
                  key={oge.adres}
                  className="relative"
                  onMouseEnter={() => setAlanYolu(yol)}
                  onMouseLeave={() => setAlanYolu(null)}
                >
                  <Link
                    href={oge.adres}
                    aria-expanded={alanlarAcik}
                    data-aktif={aktifMi(oge.adres)}
                    className={cn(
                      "menu-baglantisi inline-flex items-center gap-1.5 whitespace-nowrap px-2.5 py-2.5 text-[0.86rem] transition-colors",
                      aktifMi(oge.adres) ? "text-kirmizi" : "text-metin hover:text-kirmizi",
                    )}
                  >
                    {oge.kisa}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform", alanlarAcik && "rotate-180")}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </Link>
                  {alanlarAcik ? (
                    <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-2">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1 border border-cizgi bg-yuzey p-4 shadow-yukselti">
                        {alanlar.map((alan) => (
                          <Link
                            key={alan.slug}
                            href={`/calisma-alanlarimiz/${alan.slug}`}
                            className="border-l border-transparent py-2 pl-3 text-[0.85rem] text-metin transition-colors hover:border-altin hover:text-kirmizi"
                          >
                            {alan.kisaBaslik}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={oge.adres}
                  href={oge.adres}
                  className={cn(
                    "menu-baglantisi whitespace-nowrap px-2.5 py-2.5 text-[0.86rem] transition-colors",
                    aktifMi(oge.adres) ? "text-kirmizi" : "text-metin hover:text-kirmizi",
                  )}
                  data-aktif={aktifMi(oge.adres)}
                >
                  {oge.kisa}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <ButonBaglanti href="/iletisim" className="hidden md:inline-flex">
              Görüşme talep edin
            </ButonBaglanti>
            <button
              type="button"
              onClick={() => setMenuYolu(acik ? null : yol)}
              aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={acik}
              className="inline-flex h-11 w-11 items-center justify-center border border-cizgi-koyu text-murekkep lg:hidden"
            >
              {acik ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </Kapsayici>
      </div>

      {/* Mobil menu */}
      {acik ? (
        <div className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto border-t border-cizgi bg-kagit lg:hidden">
          <Kapsayici className="py-6">
            <nav aria-label="Mobil menü" className="flex flex-col">
              {anaMenu.map((oge) => (
                <Link
                  key={oge.adres}
                  href={oge.adres}
                  className={cn(
                    "border-b border-cizgi py-4 font-display text-[1.15rem]",
                    aktifMi(oge.adres) ? "text-kirmizi" : "text-murekkep",
                  )}
                >
                  {oge.baslik}
                </Link>
              ))}
            </nav>

            <p className="ustbaslik mt-8">Çalışma Alanları</p>
            <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2">
              {alanlar.map((alan) => (
                <Link
                  key={alan.slug}
                  href={`/calisma-alanlarimiz/${alan.slug}`}
                  className="py-2 text-[0.9rem] text-metin-soluk"
                >
                  {alan.kisaBaslik}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-cizgi pt-6">
              <a href={telefonHref} className="inline-flex items-center gap-2 text-metin">
                <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {telefon}
              </a>
              <a href={`mailto:${eposta}`} className="inline-flex items-center gap-2 text-metin">
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {eposta}
              </a>
              <ButonBaglanti href="/iletisim" className="mt-2 w-full">
                Görüşme talep edin
              </ButonBaglanti>
            </div>
          </Kapsayici>
        </div>
      ) : null}
    </header>
  );
}
