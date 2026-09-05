import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Cagri } from "@/components/anasayfa/cagri";
import { Metin } from "@/components/metin";
import { YaziKarti } from "@/components/yazi-karti";
import { YaziVerisi, YolVerisi } from "@/components/yapisal-veri";
import { Bolum, Kapsayici } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa } from "@/lib/icerik";
import { tarihYaz } from "@/lib/utils";
import { yaziGetir, yaziSluglari, yazilarGetir } from "@/lib/veri";
import { gorselAdresi } from "@/sanity/client";

export const revalidate = 300;

export async function generateStaticParams() {
  const sluglar = await yaziSluglari();
  return sluglar.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const yazi = await yaziGetir(slug);
  if (!yazi) return {};

  const aciklama = yazi.seoAciklama || yazi.ozet;
  return {
    title: yazi.baslik,
    description: aciklama,
    alternates: { canonical: `/yayinlar/${yazi.slug}` },
    openGraph: {
      type: "article",
      title: yazi.baslik,
      description: aciklama,
      url: `/yayinlar/${yazi.slug}`,
      publishedTime: yazi.yayinTarihi,
      authors: yazi.yazar ? [yazi.yazar.ad] : undefined,
    },
  };
}

export default async function YaziSayfasi({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [yazi, ayarlar, tumYazilar] = await Promise.all([yaziGetir(slug), ayarlariGetir(), yazilarGetir()]);

  if (!yazi) notFound();

  const kapak = yazi.kapak ? gorselAdresi(yazi.kapak, 1600, 900) : null;
  const digerYazilar = tumYazilar.filter((oge) => oge.slug !== yazi.slug).slice(0, 3);
  const yolIzi = [
    { ad: "Yayınlar", adres: "/yayinlar" },
    { ad: yazi.baslik, adres: `/yayinlar/${yazi.slug}` },
  ];

  return (
    <>
      <SayfaBasligi
        ustBaslik={[yazi.kategoriler[0]?.baslik, tarihYaz(yazi.yayinTarihi)].filter(Boolean).join(" · ")}
        baslik={yazi.baslik}
        aciklama={yazi.ozet}
        yolIzi={yolIzi}
      />
      <YolVerisi basamaklar={yolIzi} />
      <YaziVerisi
        baslik={yazi.baslik}
        aciklama={yazi.seoAciklama || yazi.ozet}
        adres={`/yayinlar/${yazi.slug}`}
        tarih={yazi.yayinTarihi}
        yazar={yazi.yazar?.ad}
        buroAdi={ayarlar.buroAdi}
        gorsel={kapak}
      />

      <article>
        <Bolum className="doku-kagit">
          {kapak ? (
            <Image
              src={kapak}
              alt={yazi.kapak?.alt || yazi.baslik}
              width={1600}
              height={900}
              priority
              className="mb-14 h-auto w-full border border-cizgi"
            />
          ) : null}

          <div className="olcu">
            <Metin govde={yazi.govde} />
          </div>

          <div className="olcu mt-14 border-t border-cizgi pt-8">
            {yazi.yazar ? (
              <p className="text-[0.9rem] text-metin-soluk">
                <span className="text-metin-silik">Yazan: </span>
                <Link href={`/ekibimiz/${yazi.yazar.slug}`} className="text-kirmizi hover:underline">
                  {yazi.yazar.ad}
                </Link>
                <span className="text-metin-silik"> · {tarihYaz(yazi.yayinTarihi)}</span>
              </p>
            ) : null}

            <p className="mt-6 text-[0.85rem] leading-relaxed text-metin-silik">
              Bu yazı genel bilgilendirme amacı taşır; somut bir olaya ilişkin hukuki görüş veya tavsiye niteliğinde
              değildir. Yazının okunması avukat-müvekkil ilişkisi kurmaz. Mevzuat ve içtihat değişebileceğinden,
              yayım tarihini dikkate alınız.
            </p>

            {yazi.ilgiliAlan ? (
              <p className="mt-6 text-[0.9rem]">
                İlgili çalışma alanı:{" "}
                <Link
                  href={`/calisma-alanlarimiz/${yazi.ilgiliAlan.slug}`}
                  className="text-kirmizi hover:underline"
                >
                  {yazi.ilgiliAlan.baslik}
                </Link>
              </p>
            ) : null}

            <Link
              href="/yayinlar"
              className="mt-8 inline-flex items-center gap-2 text-[0.85rem] font-medium uppercase tracking-[0.14em] text-kirmizi"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              Tüm yazılar
            </Link>
          </div>
        </Bolum>
      </article>

      {digerYazilar.length > 0 ? (
        <div className="border-t border-cizgi bg-kagit-koyu/40 py-16 sm:py-20">
          <Kapsayici>
            <p className="ustbaslik">Diğer yazılar</p>
            <div className="mt-8 grid gap-px border border-cizgi bg-cizgi lg:grid-cols-3">
              {digerYazilar.map((diger) => (
                <YaziKarti key={diger.slug} yazi={diger} />
              ))}
            </div>
          </Kapsayici>
        </div>
      ) : null}

      <Cagri
        baslik={anaSayfa.cagri.baslik}
        metin={anaSayfa.cagri.metin}
        butonMetni={anaSayfa.cagri.butonMetni}
        telefon={ayarlar.telefon}
        telefonHref={ayarlar.telefonHref}
      />
    </>
  );
}
