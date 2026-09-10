"use client";

import { HataGovde } from "@/components/hata-govde";

/**
 * Kok hata siniri.
 *
 * (site) yerlesimi kendi hata sinirinin disindadir; oradaki bir aksaklik
 * (ornegin panel verisi cekilemezse) buraya duser. Site kabugu bu noktada
 * kurulamadigi icin gezinme baglantisini govdenin kendisi tasir.
 */
export default function KokHata({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return <HataGovde hata={error} tekrarDene={retry} kabuksuz />;
}
