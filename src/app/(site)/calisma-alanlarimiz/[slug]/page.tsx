import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { Cagri } from "@/components/anasayfa/cagri";
import { SurecSemasi } from "@/components/surec-semasi";
import { Kosebent } from "@/components/brand/motif";
import { AlanIkonu } from "@/components/ui/alan-ikonu";
import { HizmetVerisi, SoruVerisi, YolVerisi } from "@/components/yapisal-veri";
import { Bolum, Kapsayici } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa } from "@/lib/icerik";
import { calismaAlanSluglari, calismaAlaniGetir, calismaAlanlariGetir, ekipGetir } from "@/lib/veri";

export const revalidate = 300;

export async function generateStaticParams() {
  const sluglar = await calismaAlanSluglari();
  return sluglar.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const alan = await calismaAlaniGetir(slug);
  if (!alan) return {};

  return {
    title: alan.baslik,
    description: alan.seoAciklama || alan.ozet,
    alternates: { canonical: `/calisma-alanlarimiz/${alan.slug}` },
    openGraph: {
      title: `${alan.baslik} — Avukatlık ve Danışmanlık`,
      description: alan.seoAciklama || alan.ozet,
      url: `/calisma-alanlarimiz/${alan.slug}`,
    },
  };
}

export default async function AlanSayfasi({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [alan, ayarlar, tumAlanlar, ekip] = await Promise.all([
    calismaAlaniGetir(slug),
    ayarlariGetir(),
    calismaAlanlariGetir(),
    ekipGetir(),
  ]);

  if (!alan) notFound();

  const digerAlanlar = tumAlanlar.filter((oge) => oge.slug !== alan.slug).slice(0, 6);
  const ilgiliAvukatlar = ekip.filter((uye) =>
    uye.uzmanlikAlanlari.some((uzmanlik) => uzmanlik.slug === alan.slug),
  );

  const yolIzi = [
    { ad: "Çalışma Alanlarımız", adres: "/calisma-alanlarimiz" },
    { ad: alan.baslik, adres: `/calisma-alanlarimiz/${alan.slug}` },
  ];

  return (
    <>
      <SayfaBasligi
        ustBaslik="Çalışma Alanı"
        baslik={alan.baslik}
        aciklama={alan.ozet}
        yolIzi={yolIzi}
        yan={
          <span className="hidden h-20 w-20 items-center justify-center border border-altin/40 text-altin-parlak lg:inline-flex">
            <AlanIkonu ad={alan.ikon} className="h-8 w-8" />
          </span>
        }
      />
      <YolVerisi basamaklar={yolIzi} />
      <HizmetVerisi
        ad={alan.baslik}
        aciklama={alan.seoAciklama || alan.ozet}
        adres={`/calisma-alanlarimiz/${alan.slug}`}
        buroAdi={ayarlar.buroAdi}
      />
      {alan.sorular.length > 0 ? <SoruVerisi sorular={alan.sorular} /> : null}

      <Bolum className="doku-kagit">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            {alan.giris ? (
              <p className="basharf olcu font-display text-[1.28rem] leading-[1.7] text-murekkep">{alan.giris}</p>
            ) : null}

            {alan.hizmetler.length > 0 ? (
              <div className="mt-14">
                <h2 className="text-[1.5rem]">
                  <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
                  <span className="mt-4 block">Bu alanda ne yapıyoruz?</span>
                </h2>
                <ul className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {alan.hizmetler.map((hizmet) => (
                    <li key={hizmet} className="flex gap-3 text-[0.95rem] leading-relaxed text-metin">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-kirmizi" strokeWidth={2} aria-hidden="true" />
                      <span>{hizmet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {alan.surec && alan.surec.length > 0 ? (
              <SurecSemasi baslik={alan.surecBasligi ?? "Süreç nasıl ilerler?"} adimlar={alan.surec} />
            ) : null}

            {alan.sorular.length > 0 ? (
              <div className="mt-16">
                <h2 className="text-[1.5rem]">
                  <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
                  <span className="mt-4 block">Sık sorulan sorular</span>
                </h2>
                <div className="mt-7 divide-y divide-cizgi border-y border-cizgi">
                  {alan.sorular.map((kayit) => (
                    <details key={kayit.soru} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.02rem] font-medium text-murekkep marker:hidden">
                        <span>{kayit.soru}</span>
                        <span
                          className="mt-1.5 h-3 w-3 shrink-0 border-b-2 border-r-2 border-kirmizi transition-transform duration-300 rotate-45 group-open:rotate-[225deg]"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="mt-4 leading-[1.8] text-metin-soluk">{kayit.cevap}</p>
                    </details>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="space-y-10 lg:sticky lg:top-32 lg:self-start">
            {alan.kimlerIcin.length > 0 ? (
              <div className="relative border border-cizgi bg-yuzey p-7">
                <Kosebent className="text-altin/40" />
                <p className="ustbaslik">Kimler için?</p>
                <ul className="mt-5 space-y-3">
                  {alan.kimlerIcin.map((madde) => (
                    <li
                      key={madde}
                      className="relative pl-5 text-[0.92rem] leading-relaxed text-metin-soluk before:absolute before:left-0 before:top-[0.68em] before:h-1.5 before:w-1.5 before:rotate-45 before:bg-altin"
                    >
                      {madde}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {ilgiliAvukatlar.length > 0 ? (
              <div className="border border-cizgi bg-yuzey p-7">
                <p className="ustbaslik">Bu alanda çalışan avukatlar</p>
                <ul className="mt-5 space-y-4">
                  {ilgiliAvukatlar.map((uye) => (
                    <li key={uye.slug}>
                      <Link href={`/ekibimiz/${uye.slug}`} className="group block">
                        <span className="block font-display text-[1.02rem] text-murekkep transition-colors group-hover:text-kirmizi">
                          {uye.ad}
                        </span>
                        <span className="mt-0.5 block text-[0.82rem] text-metin-silik">{uye.unvan}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="relative border border-kirmizi/25 bg-kirmizi-yumusak p-7">
              <Kosebent className="text-kirmizi/25" />
              <p className="font-display text-[1.15rem] leading-snug text-murekkep">
                Konunuz bu alana mı giriyor, emin değil misiniz?
              </p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-metin-soluk">
                Kısaca yazın, doğru kapıyı birlikte bulalım. Gerekirse sizi ilgili meslektaşımıza yönlendiririz.
              </p>
              <Link
                href="/iletisim"
                className="mt-5 inline-flex items-center gap-2 text-[0.85rem] font-medium uppercase tracking-[0.14em] text-kirmizi"
              >
                Yazın
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </Bolum>

      {digerAlanlar.length > 0 ? (
        <div className="border-t border-cizgi bg-kagit-koyu/40 py-16">
          <Kapsayici>
            <p className="ustbaslik">Diğer çalışma alanları</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {digerAlanlar.map((diger) => (
                <li key={diger.slug}>
                  <Link
                    href={`/calisma-alanlarimiz/${diger.slug}`}
                    className="inline-block border border-cizgi-koyu bg-kagit px-4 py-2.5 text-[0.88rem] text-metin transition-colors hover:border-kirmizi hover:text-kirmizi"
                  >
                    {diger.kisaBaslik}
                  </Link>
                </li>
              ))}
            </ul>
          </Kapsayici>
        </div>
      ) : null}

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
