import type { Metadata, Viewport } from "next";
import { isSanityConfigured } from "@/sanity/env";
import { Panel } from "./panel";
import { KurulumGerekli } from "./kurulum-gerekli";

export const dynamic = "force-static";

/** Yonetim paneli arama sonuclarinda gorunmemeli. */
export const metadata: Metadata = {
  title: "Yönetim Paneli",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

/**
 * Sanity proje kimligi tanimli degilken panel calismaz ve hata firlatir.
 * Bu durumda bos bir hata ekrani yerine ne yapilmasi gerektigini anlatan
 * bir sayfa gosterilir — site zaten yerel icerikle calismaya devam eder.
 */
export default function YonetimPaneliSayfasi() {
  if (!isSanityConfigured) return <KurulumGerekli />;
  return <Panel />;
}
