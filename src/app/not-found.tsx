import type { Metadata } from "next";
import { BulunamadiGovde } from "@/components/bulunamadi-govde";
import { SiteKabugu } from "@/components/layout/site-kabugu";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

/**
 * Hicbir rotayla eslesmeyen adresler icin 404.
 *
 * Next bu durumda rota grubunun degil kok dizinin not-found dosyasini
 * calistirir; kok yerlesim yalnizca html/body kabugunu kurdugu icin site
 * kabugunu burada acikca sarmak gerekir. Aksi halde ziyaretci Next'in
 * Ingilizce varsayilan 404 sayfasini gorur.
 */
export default function KokBulunamadi() {
  return (
    <SiteKabugu>
      <BulunamadiGovde />
    </SiteKabugu>
  );
}
