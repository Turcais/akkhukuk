import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail } from "lucide-react";
import { KemerCercevesi } from "@/components/brand/motif";
import { Nisan } from "@/components/brand/nisan";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Cagri } from "@/components/anasayfa/cagri";
import { Paragraflar } from "@/components/metin";
import { LinkedInIkonu } from "@/components/brand/sosyal-ikonlar";
import { AvukatVerisi, YolVerisi } from "@/components/yapisal-veri";
import { Bolum } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { monogram } from "@/lib/ekip";
import { anaSayfa } from "@/lib/icerik";
import { ekipSluglari, ekipUyesiGetir } from "@/lib/veri";
import { gorselAdresi } from "@/sanity/client";

export const revalidate = 300;

export async function generateStaticParams() {
  const sluglar = await ekipSluglari();
  return sluglar.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const uye = await ekipUyesiGetir(slug);
  if (!uye) return {};

  return {
    title: uye.ad,
    description: uye.kisaTanitim || `${uye.ad} — ${uye.unvan}`,
    alternates: { canonical: `/ekibimiz/${uye.slug}` },
  };
}

/** Ozgecmis listelerini ayni bicimde basan yardimci. */
function Liste({ baslik, maddeler }: { baslik: string; maddeler: string[] }) {
  if (maddeler.length === 0) return null;
  return (
    <div className="border-t border-cizgi pt-6">
      <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-altin-metin">{baslik}</h2>
      <ul className="mt-4 space-y-2.5">
        {maddeler.map((madde) => (
          <li key={madde} className="text-[0.92rem] leading-relaxed text-metin-soluk">
            {madde}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function EkipUyesiSayfasi({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [uye, ayarlar] = await Promise.all([ekipUyesiGetir(slug), ayarlariGetir()]);

  if (!uye) notFound();

  const portre = uye.gorsel ? gorselAdresi(uye.gorsel, 720, 900) : null;
  const yolIzi = [
    { ad: "Ekibimiz", adres: "/ekibimiz" },
    { ad: uye.ad, adres: `/ekibimiz/${uye.slug}` },
  ];

  return (
    <>
      <SayfaBasligi ustBaslik={uye.unvan} baslik={uye.ad} aciklama={uye.kisaTanitim} yolIzi={yolIzi} />
      <YolVerisi basamaklar={yolIzi} />
      <AvukatVerisi
        ad={uye.ad}
        unvan={uye.unvan}
        aciklama={uye.kisaTanitim}
        adres={`/ekibimiz/${uye.slug}`}
        buroAdi={ayarlar.buroAdi}
        gorsel={portre}
        uzmanliklar={uye.uzmanlikAlanlari.map((alan) => alan.baslik)}
        baglantilar={[uye.linkedin].filter((adres): adres is string => Boolean(adres))}
        diller={uye.diller}
      />

      <Bolum className="doku-kagit">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative aspect-[4/5]">
              <div className="kemer absolute inset-[7px] overflow-hidden bg-koyu-zemin">
                {portre ? (
                  <Image
                    src={portre}
                    alt={uye.gorsel?.alt || uye.ad}
                    fill
                    sizes="(min-width: 1024px) 24rem, 90vw"
                    priority
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center pt-12">
                    <Nisan
                      className="h-44 w-33 text-altin/45"
                      harfSinifi="font-display text-[1.9rem] text-white/85"
                      harfler={monogram(uye.ad)}
                    />
                  </div>
                )}
              </div>
              <KemerCercevesi className="text-altin/65" />
            </div>

            <div className="mt-8 space-y-6">
              <Liste baslik="Eğitim" maddeler={uye.egitim} />
              <Liste baslik="Baro ve üyelikler" maddeler={uye.uyelikler} />
              <Liste baslik="Sertifika ve eğitimler" maddeler={uye.sertifikalar} />
              <Liste baslik="Yabancı diller" maddeler={uye.diller} />

              {uye.eposta || uye.linkedin ? (
                <div className="border-t border-cizgi pt-6">
                  <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-altin-metin">
                    İletişim
                  </h2>
                  <div className="mt-4 flex flex-col gap-3 text-[0.92rem]">
                    {uye.eposta ? (
                      <a href={`mailto:${uye.eposta}`} className="inline-flex items-center gap-2 text-metin hover:text-kirmizi">
                        <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                        {uye.eposta}
                      </a>
                    ) : null}
                    {uye.linkedin ? (
                      <a
                        href={uye.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-metin hover:text-kirmizi"
                      >
                        <LinkedInIkonu className="h-4 w-4" />
                        LinkedIn
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </aside>

          <div>
            <div className="olcu">
              <h2 className="text-[1.5rem]">
                <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
                <span className="mt-4 block">Özgeçmiş</span>
              </h2>
              <div className="mt-6">
                <Paragraflar govde={uye.biyografi} />
              </div>
            </div>

            {uye.davaTurleri.length > 0 ? (
              <div className="mt-14">
                <h2 className="text-[1.5rem]">
                  <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
                  <span className="mt-4 block">Baktığı dava ve iş türleri</span>
                </h2>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {uye.davaTurleri.map((tur) => (
                    <li
                      key={tur}
                      className="relative pl-6 text-[0.94rem] leading-relaxed text-metin before:absolute before:left-0 before:top-[0.72em] before:h-1.5 before:w-1.5 before:rotate-45 before:bg-altin"
                    >
                      {tur}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {uye.uzmanlikAlanlari.length > 0 ? (
              <div className="mt-14">
                <h2 className="text-[1.5rem]">
                  <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
                  <span className="mt-4 block">Çalışma alanları</span>
                </h2>
                <ul className="mt-6 grid gap-px border border-cizgi bg-cizgi sm:grid-cols-2">
                  {uye.uzmanlikAlanlari.map((alan) => (
                    <li key={alan.slug}>
                      <Link
                        href={`/calisma-alanlarimiz/${alan.slug}`}
                        className="block bg-kagit p-5 text-[0.95rem] text-metin transition-colors hover:bg-yuzey hover:text-kirmizi"
                      >
                        {alan.baslik}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Bolum>

      <Cagri
        baslik={anaSayfa.cagri.baslik}
        metin={anaSayfa.cagri.metin}
        butonMetni={anaSayfa.cagri.butonMetni}
        telefon={ayarlar.telefon}
        telefonHref={ayarlar.telefonHref}
        telefonVar={ayarlar.telefonVar}
      />
    </>
  );
}
