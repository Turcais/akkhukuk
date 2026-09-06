import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Cagri } from "@/components/anasayfa/cagri";
import { Metin } from "@/components/metin";
import { YolVerisi } from "@/components/yapisal-veri";
import { Bolum } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa } from "@/lib/icerik";
import { tarihYaz } from "@/lib/utils";
import { rehberGetir, rehberSluglari } from "@/lib/veri";

export const revalidate = 300;

export async function generateStaticParams() {
  const sluglar = await rehberSluglari();
  return sluglar.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const rehber = await rehberGetir(slug);
  if (!rehber) return {};

  return {
    title: rehber.baslik,
    description: rehber.seoAciklama || rehber.ozet,
    alternates: { canonical: `/rehberler/${rehber.slug}` },
    openGraph: {
      type: "article",
      title: rehber.baslik,
      description: rehber.seoAciklama || rehber.ozet,
      url: `/rehberler/${rehber.slug}`,
    },
  };
}

export default async function RehberSayfasi({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [rehber, ayarlar] = await Promise.all([rehberGetir(slug), ayarlariGetir()]);

  if (!rehber) notFound();

  const yolIzi = [
    { ad: "Rehberler", adres: "/rehberler" },
    { ad: rehber.baslik, adres: `/rehberler/${rehber.slug}` },
  ];

  return (
    <>
      <SayfaBasligi ustBaslik="Rehber" baslik={rehber.baslik} aciklama={rehber.ozet} yolIzi={yolIzi} />
      <YolVerisi basamaklar={yolIzi} />

      <article>
        <Bolum className="doku-kagit">
          <div className="olcu">
            {rehber.guncelleme ? (
              <p className="text-[0.82rem] uppercase tracking-[0.14em] text-metin-silik">
                Son güncelleme: {tarihYaz(rehber.guncelleme)}
              </p>
            ) : null}

            <div className="mt-8">
              <Metin govde={rehber.govde} />
            </div>

            <p className="mt-14 border-t border-cizgi pt-8 text-[0.85rem] leading-relaxed text-metin-silik">
              Bu rehber genel bilgilendirme amacı taşır; somut bir olaya ilişkin hukuki görüş değildir ve
              avukat-müvekkil ilişkisi kurmaz. Mevzuat ve uygulama değişebileceğinden güncelleme tarihini
              dikkate alınız.
            </p>

            <Link
              href="/rehberler"
              className="mt-8 inline-flex items-center gap-2 text-[0.85rem] font-medium uppercase tracking-[0.14em] text-kirmizi"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              Tüm rehberler
            </Link>
          </div>
        </Bolum>
      </article>

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
