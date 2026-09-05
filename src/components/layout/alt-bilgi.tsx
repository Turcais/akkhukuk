import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Oruntu } from "@/components/brand/motif";
import { sosyalIkonlar } from "@/components/brand/sosyal-ikonlar";
import { Kapsayici } from "@/components/ui/bolum";
import type { Ayarlar } from "@/lib/ayarlar";
import { anaMenu, yasalMenu } from "@/lib/site";

type Alan = { slug: string; kisaBaslik: string };

export function AltBilgi({ ayarlar, alanlar }: { ayarlar: Ayarlar; alanlar: Alan[] }) {
  const yil = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-koyu-zemin text-white/70">
      <Oruntu className="text-white opacity-[0.035]" />

      <Kapsayici className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo buroAdi={ayarlar.buroAdi} slogan={ayarlar.slogan} gorsel={ayarlar.logo} koyuZemin />
            <p className="mt-6 max-w-xs text-[0.9rem] leading-relaxed text-white/60">{ayarlar.footerMetni}</p>
            {ayarlar.sosyal.length > 0 ? (
              <div className="mt-7 flex items-center gap-3">
                {ayarlar.sosyal.map((hesap) => {
                  const bilgi = sosyalIkonlar[hesap.platform as keyof typeof sosyalIkonlar];
                  if (!bilgi) return null;
                  const { Ikon, etiket } = bilgi;
                  return (
                    <a
                      key={hesap.platform}
                      href={hesap.adres}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={etiket}
                      className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-altin/60 hover:text-altin-parlak"
                    >
                      <Ikon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          <nav aria-label="Alt menü">
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-altin-parlak">Menü</h2>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              {anaMenu.map((oge) => (
                <li key={oge.adres}>
                  <Link href={oge.adres} className="text-white/65 transition-colors hover:text-white">
                    {oge.baslik}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Çalışma alanları">
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-altin-parlak">
              Çalışma Alanları
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              {alanlar.slice(0, 8).map((alan) => (
                <li key={alan.slug}>
                  <Link
                    href={`/calisma-alanlarimiz/${alan.slug}`}
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    {alan.kisaBaslik}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/calisma-alanlarimiz" className="text-altin-parlak/90 transition-colors hover:text-altin-parlak">
                  Tüm alanlar →
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-altin-parlak">İletişim</h2>
            <ul className="mt-5 space-y-4 text-[0.9rem]">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-altin/70" strokeWidth={1.5} aria-hidden="true" />
                <address className="not-italic text-white/65">
                  {ayarlar.adresSatirlari.map((satir) => (
                    <span key={satir} className="block">
                      {satir}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-altin/70" strokeWidth={1.5} aria-hidden="true" />
                <a href={ayarlar.telefonHref} className="text-white/65 transition-colors hover:text-white">
                  {ayarlar.telefon}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-altin/70" strokeWidth={1.5} aria-hidden="true" />
                <a href={`mailto:${ayarlar.eposta}`} className="text-white/65 transition-colors hover:text-white">
                  {ayarlar.eposta}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 text-altin/70" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-white/65">{ayarlar.calismaSaatleri}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-8 text-[0.78rem] leading-relaxed text-white/45">
          Bu internet sitesinde yer alan bilgiler genel bilgilendirme amaçlıdır; hukuki görüş veya tavsiye niteliği
          taşımaz. Sitenin ziyaret edilmesi ya da form doldurulması avukat-müvekkil ilişkisi kurmaz. 1136 sayılı
          Avukatlık Kanunu ve Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği uyarınca hazırlanmıştır.
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.8rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {yil} {ayarlar.buroAdi}
            {ayarlar.sicilNo ? ` · Baro Sicil No: ${ayarlar.sicilNo}` : ""} · {ayarlar.baro}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {yasalMenu.map((oge) => (
              <li key={oge.adres}>
                <Link href={oge.adres} className="transition-colors hover:text-white/80">
                  {oge.baslik}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Kapsayici>
    </footer>
  );
}
