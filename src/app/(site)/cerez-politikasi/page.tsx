import type { Metadata } from "next";
import { KurumsalSayfa } from "@/components/kurumsal-sayfa";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Sitede kullanılan çerezler ve tarayıcı ayarları hakkında bilgi.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function Sayfa() {
  return <KurumsalSayfa anahtar="cerez-politikasi" />;
}
