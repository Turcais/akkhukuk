import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Kosebent } from "@/components/brand/motif";
import { SayfaBasligi } from "@/components/layout/sayfa-basligi";
import { YolVerisi } from "@/components/yapisal-veri";
import { Bolum } from "@/components/ui/bolum";
import { ayarlariGetir } from "@/lib/ayarlar";
import { sayfaMetniGetir, sec } from "@/lib/veri";
import { IletisimFormu } from "./form";

export const revalidate = 300;

const varsayilan = {
  ustBaslik: "İletişim",
  baslik: "Konunuzu bir hukukçuyla konuşun",
  aciklama:
    "Formu doldurun ya da doğrudan arayın. Mesai saatleri içinde ulaşan başvurulara aynı gün dönüş yapmaya çalışıyoruz.",
};

export async function generateMetadata(): Promise<Metadata> {
  const panel = await sayfaMetniGetir("iletisim-sayfa");
  return {
    title: "İletişim",
    description: sec(panel.seoAciklama, varsayilan.aciklama),
    alternates: { canonical: "/iletisim" },
  };
}

export default async function Iletisim() {
  const [ayarlar, panel] = await Promise.all([ayarlariGetir(), sayfaMetniGetir("iletisim-sayfa")]);
  const yolIzi = [{ ad: "İletişim", adres: "/iletisim" }];

  const bilgiler = [
    {
      Ikon: MapPin,
      baslik: "Adres",
      satirlar: ayarlar.adresSatirlari,
      adres: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ayarlar.haritaSorgusu)}`,
    },
    ...(ayarlar.telefonVar
      ? [{ Ikon: Phone, baslik: "Telefon", satirlar: [ayarlar.telefon], adres: ayarlar.telefonHref }]
      : []),
    { Ikon: Mail, baslik: "E-posta", satirlar: [ayarlar.eposta], adres: `mailto:${ayarlar.eposta}` },
    { Ikon: Clock, baslik: "Çalışma saatleri", satirlar: [ayarlar.calismaSaatleri], adres: null },
  ];

  return (
    <>
      <SayfaBasligi
        ustBaslik={sec(panel.ustBaslik, varsayilan.ustBaslik)}
        baslik={sec(panel.baslik, varsayilan.baslik)}
        aciklama={sec(panel.altBaslik, varsayilan.aciklama)}
        yolIzi={yolIzi}
      />
      <YolVerisi basamaklar={yolIzi} />

      <Bolum className="doku-kagit">
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <IletisimFormu />

          <aside className="space-y-8">
            <dl className="divide-y divide-cizgi border-y border-cizgi">
              {bilgiler.map(({ Ikon, baslik, satirlar, adres }) => (
                <div key={baslik} className="flex gap-4 py-5">
                  <Ikon className="mt-0.5 h-5 w-5 shrink-0 text-kirmizi" strokeWidth={1.4} aria-hidden="true" />
                  <div>
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-altin-metin">
                      {baslik}
                    </dt>
                    <dd className="mt-2 text-[0.95rem] leading-relaxed text-metin">
                      {adres ? (
                        <a
                          href={adres}
                          target={adres.startsWith("http") ? "_blank" : undefined}
                          rel={adres.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="transition-colors hover:text-kirmizi"
                        >
                          {satirlar.map((satir) => (
                            <span key={satir} className="block">
                              {satir}
                            </span>
                          ))}
                        </a>
                      ) : (
                        satirlar.map((satir) => (
                          <span key={satir} className="block">
                            {satir}
                          </span>
                        ))
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="relative border border-cizgi bg-yuzey p-7">
              <Kosebent className="text-altin/40" />
              <h2 className="font-display text-[1.15rem] leading-snug text-murekkep">Görüşme öncesinde</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Konuyla ilgili sözleşme, tebligat veya yazışmaları hazır bulundurun.",
                  "Varsa süre içeren belgeleri (tebliğ tarihi görünen evrak) öne alın.",
                  "Meseleyi zaman sırasına göre kısaca not edin.",
                  "Daha önce başka bir avukatla çalışıldıysa bunu belirtin.",
                ].map((madde) => (
                  <li
                    key={madde}
                    className="relative pl-5 text-[0.92rem] leading-relaxed text-metin-soluk before:absolute before:left-0 before:top-[0.68em] before:h-1.5 before:w-1.5 before:rotate-45 before:bg-altin"
                  >
                    {madde}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden border border-cizgi">
              <iframe
                title="Büro konumu"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(ayarlar.haritaSorgusu)}&hl=tr&z=17&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 grayscale-[0.35] dark:brightness-[0.72] dark:contrast-[1.08] dark:grayscale-[0.55]"
              />
            </div>
          </aside>
        </div>
      </Bolum>
    </>
  );
}
