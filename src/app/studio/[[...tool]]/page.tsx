import type { Metadata, Viewport } from "next";
import { Panel } from "./panel";

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

export default function YonetimPaneliSayfasi() {
  return <Panel />;
}
