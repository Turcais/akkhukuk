import type { Metadata } from "next";
import { KurumsalSayfa } from "@/components/kurumsal-sayfa";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "6698 sayılı Kanun kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
};

export default function Sayfa() {
  return <KurumsalSayfa anahtar="kvkk-aydinlatma-metni" />;
}
