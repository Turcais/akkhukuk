import type { Metadata } from "next";
import { KurumsalSayfa } from "@/components/kurumsal-sayfa";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Yasal Uyarı",
  description: "Bu sitedeki içeriklerin niteliği, avukat-müvekkil ilişkisi ve reklam yasağına ilişkin bilgilendirme.",
  alternates: { canonical: "/yasal-uyari" },
};

export default function Sayfa() {
  return <KurumsalSayfa anahtar="yasal-uyari" />;
}
