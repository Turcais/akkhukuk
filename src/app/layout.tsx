import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { TemaSaglayici } from "@/components/tema-saglayici";
import { site } from "@/lib/site";
import "./globals.css";

/* Turkce karakterler icin latin-ext sart: ğ ş ı İ ö ü ç */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/* Baslik yazi tipi: yuksek kontrastli didone, gec Osmanli baskisinin havasi. */
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Ankara Avukatlık ve Hukuki Danışmanlık`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/rss.xml", title: `${site.name} — Yayınlar` }] },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Ankara Avukatlık ve Hukuki Danışmanlık`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Ankara Avukatlık ve Hukuki Danışmanlık`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#16130f" },
  ],
  colorScheme: "light dark",
};

/**
 * Kok yerlesim yalnizca html/body kabugu kurar. Site basligi ve alt bilgi
 * (site) grubunun yerlesimindedir; boylece /studio yonetim paneli site
 * kabugu olmadan tam ekran calisir.
 */
export default function KokYerlesim({ children }: { children: React.ReactNode }) {
  return (
    /* Yazi tipi degiskenleri <html> uzerinde tanimlanir.
       globals.css icindeki --font-sans / --font-display bunlari :root
       seviyesinde okur; degiskenler <body>'de kalirsa :root'ta tanimsiz
       olur ve iki yazi tipi de sessizce devre disi kalir. */
    /* suppressHydrationWarning: tema sinifi sunucuda bilinemez, istemcide
       ilk boyada eklenir; bu tek elemandaki farki React'e bildiriyoruz. */
    <html lang={site.lang} className={`${inter.variable} ${bodoni.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <TemaSaglayici>{children}</TemaSaglayici>
      </body>
    </html>
  );
}
