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

/**
 * Yapisal veride gorsel alanlari mutlak adres ister.
 *
 * Panelden gelen gorseller zaten tam adreslidir; public/ altindaki yerel
 * dosyalar "/ekip/..." seklinde geldigi icin site adresiyle tamamlanir.
 */
function numara(deger?: string | null) {
  /* Yapisal veride numara E.164 bicimiyle verilir; bosluk ve parantez
     insan icin, makine icin degil. */
  const sade = deger?.replace(/[^\d+]/g, "");
  return sade || undefined;
}

function tamAdres(yol?: string | null) {
  if (!yol) return undefined;
  return yol.startsWith("http") ? yol : `${site.url}${yol}`;
}

export function BuroVerisi({
  buroAdi,
  aciklama,
  eposta,
  telefon,
  adresSatirlari,
  adresSokak,
  postaKodu,
  ilce,
  il,
  sosyal,
  alanBasliklari,
  baro,
}: {
  buroAdi: string;
  aciklama: string;
  eposta: string;
  telefon: string;
  adresSatirlari: string[];
  adresSokak?: string;
  postaKodu?: string;
  ilce?: string;
  il?: string;
  sosyal: string[];
  alanBasliklari: string[];
  baro?: string;
}) {
  /* Ilce, il ve posta kodu ayri alanlardan gelir: gorunen adres
     satirlarini ayristirmaya calismak yerel aramada yanlis sehir
     yazmak gibi sessiz hatalara aciktir. */
  const adres = {
    "@type": "PostalAddress",
    streetAddress: adresSokak || adresSatirlari[0],
    addressLocality: ilce || site.city,
    addressRegion: il || site.city,
    postalCode: postaKodu || undefined,
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
          logo: `${site.url}/marka/akk-logo.svg`,
          image: `${site.url}/opengraph-image`,
          email: eposta,
          telephone: numara(telefon),
          address: adres,
          areaServed: [
            { "@type": "Country", name: "Türkiye" },
            { "@type": "City", name: "Ankara" },
          ],
          priceRange: "$$",
          knowsLanguage: ["tr", "en"],
          availableLanguage: ["Türkçe", "İngilizce"],
          /* Bu alan, bir dil modeline "ne konuda calisiyorlar" diye
             soruldugunda dogrudan okunan yerdir. */
          knowsAbout: alanBasliklari,
          memberOf: baro ? { "@type": "Organization", name: baro } : undefined,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Müvekkil başvuruları",
            telephone: numara(telefon),
            email: eposta,
            areaServed: "TR",
            availableLanguage: ["Turkish", "English"],
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
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
          /* Arama sonuclarinda site ici arama kutusu cikabilmesi icin */
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${site.url}/arama?q={arama_terimi}`,
            },
            "query-input": "required name=arama_terimi",
          },
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
        inLanguage: "tr-TR",
        /* Sesli asistanlarin okuyabilecegi bolumler */
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "[data-konusulabilir]"],
        },
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
  telefon,
  uzmanliklar,
  baglantilar = [],
  diller = [],
}: {
  ad: string;
  unvan: string;
  aciklama: string;
  adres: string;
  buroAdi: string;
  gorsel?: string | null;
  telefon?: string;
  uzmanliklar: string[];
  baglantilar?: string[];
  diller?: string[];
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
        image: tamAdres(gorsel),
        telephone: numara(telefon),
        knowsAbout: uzmanliklar,
        knowsLanguage: diller.length > 0 ? diller : undefined,
        sameAs: baglantilar.length > 0 ? baglantilar : undefined,
        worksFor: { "@type": "LegalService", name: buroAdi, "@id": `${site.url}/#buro` },
        address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "TR" },
      }}
    />
  );
}

export function YaziVerisi({
  baslik,
  aciklama,
  ozetCevap,
  bolum,
  kaynaklar,
  adres,
  tarih,
  yazar,
  buroAdi,
  gorsel,
}: {
  baslik: string;
  aciklama: string;
  ozetCevap?: string;
  bolum?: string;
  kaynaklar?: string[];
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
        /* Yazinin sordugu soruya dogrudan cevap; ozetleyen sistemlerin
           alintiladigi alan burasidir. */
        abstract: ozetCevap,
        articleSection: bolum,
        citation: kaynaklar,
        datePublished: tarih,
        dateModified: tarih,
        inLanguage: "tr-TR",
        isAccessibleForFree: true,
        image: tamAdres(gorsel),
        author: yazar ? { "@type": "Person", name: yazar } : { "@type": "Organization", name: buroAdi },
        publisher: { "@type": "Organization", name: buroAdi, "@id": `${site.url}/#buro` },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${adres}` },
      }}
    />
  );
}

/**
 * Sayfadaki sirali listeyi arama motoruna bildirir.
 * Calisma alanlari dizininde kullanilir: 12 alan tek bir liste olarak
 * anlasilir, tek tek kesfedilmeyi beklemez.
 */
export function ListeVerisi({
  ad,
  ogeler,
}: {
  ad: string;
  ogeler: { ad: string; adres: string; aciklama?: string }[];
}) {
  return (
    <Betik
      veri={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: ad,
        numberOfItems: ogeler.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: ogeler.map((oge, sira) => ({
          "@type": "ListItem",
          position: sira + 1,
          name: oge.ad,
          description: oge.aciklama,
          url: `${site.url}${oge.adres}`,
        })),
      }}
    />
  );
}
