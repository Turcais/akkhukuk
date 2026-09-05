import { site } from "@/lib/site";

/**
 * Arama motorlarina okunabilir yapisal veri (JSON-LD).
 *
 * Google icin bu isaretleme, sayfanin ne oldugunu tahmin etmek yerine
 * dogrudan bilmesini saglar: hangi buro, hangi hizmet, hangi avukat,
 * hangi soru-cevap. Zengin sonuc gorunumlerinin on kosuludur.
 */

type JsonSozluk = Record<string, unknown>;

function Betik({ veri }: { veri: JsonSozluk }) {
  return (
    <script
      type="application/ld+json"
      // İçerik yalnızca kendi verimizden üretilir; kullanıcı girdisi içermez.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(veri).replace(/</g, "\\u003c") }}
    />
  );
}

export function BuroVerisi({
  buroAdi,
  aciklama,
  eposta,
  telefon,
  adresSatirlari,
  sosyal,
  alanBasliklari,
}: {
  buroAdi: string;
  aciklama: string;
  eposta: string;
  telefon: string;
  adresSatirlari: string[];
  sosyal: string[];
  alanBasliklari: string[];
}) {
  const adres = {
    "@type": "PostalAddress",
    streetAddress: adresSatirlari.slice(0, -1).join(", ") || adresSatirlari[0],
    addressLocality: adresSatirlari[adresSatirlari.length - 1] ?? site.city,
    addressCountry: "TR",
  };

  return (
    <>
      <Betik
        veri={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "@id": `${site.url}/#buro`,
          name: buroAdi,
          alternateName: site.shortName,
          description: aciklama,
          url: site.url,
          email: eposta,
          telephone: telefon,
          address: adres,
          areaServed: { "@type": "Country", name: "Türkiye" },
          priceRange: "$$",
          knowsLanguage: ["tr", "en"],
          sameAs: sosyal,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Çalışma alanları",
            itemListElement: alanBasliklari.map((baslik, sira) => ({
              "@type": "Offer",
              position: sira + 1,
              itemOffered: { "@type": "Service", name: baslik, serviceType: baslik },
            })),
          },
        }}
      />
      <Betik
        veri={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${site.url}/#site`,
          url: site.url,
          name: buroAdi,
          inLanguage: "tr-TR",
          publisher: { "@id": `${site.url}/#buro` },
        }}
      />
    </>
  );
}

export function YolVerisi({ basamaklar }: { basamaklar: { ad: string; adres: string }[] }) {
  return (
    <Betik
      veri={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: basamaklar.map((basamak, sira) => ({
          "@type": "ListItem",
          position: sira + 1,
          name: basamak.ad,
          item: `${site.url}${basamak.adres}`,
        })),
      }}
    />
  );
}

export function SoruVerisi({ sorular }: { sorular: { soru: string; cevap: string }[] }) {
  if (sorular.length === 0) return null;
  return (
    <Betik
      veri={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: sorular.map(({ soru, cevap }) => ({
          "@type": "Question",
          name: soru,
          acceptedAnswer: { "@type": "Answer", text: cevap },
        })),
      }}
    />
  );
}

export function HizmetVerisi({
  ad,
  aciklama,
  adres,
  buroAdi,
}: {
  ad: string;
  aciklama: string;
  adres: string;
  buroAdi: string;
}) {
  return (
    <Betik
      veri={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: ad,
        serviceType: ad,
        description: aciklama,
        url: `${site.url}${adres}`,
        provider: { "@type": "LegalService", name: buroAdi, "@id": `${site.url}/#buro` },
        areaServed: { "@type": "Country", name: "Türkiye" },
      }}
    />
  );
}

export function AvukatVerisi({
  ad,
  unvan,
  aciklama,
  adres,
  buroAdi,
  gorsel,
  uzmanliklar,
}: {
  ad: string;
  unvan: string;
  aciklama: string;
  adres: string;
  buroAdi: string;
  gorsel?: string | null;
  uzmanliklar: string[];
}) {
  return (
    <Betik
      veri={{
        "@context": "https://schema.org",
        "@type": "Attorney",
        name: ad,
        jobTitle: unvan,
        description: aciklama,
        url: `${site.url}${adres}`,
        image: gorsel ?? undefined,
        knowsAbout: uzmanliklar,
        worksFor: { "@type": "LegalService", name: buroAdi, "@id": `${site.url}/#buro` },
        address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "TR" },
      }}
    />
  );
}

export function YaziVerisi({
  baslik,
  aciklama,
  adres,
  tarih,
  yazar,
  buroAdi,
  gorsel,
}: {
  baslik: string;
  aciklama: string;
  adres: string;
  tarih: string;
  yazar?: string;
  buroAdi: string;
  gorsel?: string | null;
}) {
  return (
    <Betik
      veri={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: baslik,
        description: aciklama,
        datePublished: tarih,
        dateModified: tarih,
        inLanguage: "tr-TR",
        image: gorsel ?? undefined,
        author: yazar ? { "@type": "Person", name: yazar } : { "@type": "Organization", name: buroAdi },
        publisher: { "@type": "Organization", name: buroAdi, "@id": `${site.url}/#buro` },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${adres}` },
      }}
    />
  );
}
