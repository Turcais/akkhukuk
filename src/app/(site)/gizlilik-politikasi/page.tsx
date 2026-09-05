import type { Metadata } from "next";
import { KurumsalSayfa } from "@/components/kurumsal-sayfa";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Site üzerinden toplanan bilgilerin nasıl korunduğuna ilişkin açıklama.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function Sayfa() {
  return <KurumsalSayfa anahtar="gizlilik-politikasi" />;
}
