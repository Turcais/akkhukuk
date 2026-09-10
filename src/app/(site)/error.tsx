"use client";

import { HataGovde } from "@/components/hata-govde";

/**
 * (site) grubundaki sayfalarda olusan hatalari yakalar.
 *
 * Ust menu ve alt bilgi bu sinirin disinda kaldigi icin ziyaretci
 * gezinmeyi kaybetmez; hata sinirlari yalnizca istemci bileseni olabilir.
 */
export default function Hata({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return <HataGovde hata={error} tekrarDene={retry} />;
}
