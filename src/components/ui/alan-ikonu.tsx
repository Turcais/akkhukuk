import {
  Building2,
  Briefcase,
  FileSignature,
  Gavel,
  HardHat,
  HeartHandshake,
  Landmark,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** Sema icindeki simge degerlerini ikon bilesenlerine baglar. */
const eslesme: Record<string, LucideIcon> = {
  bina: Building2,
  kurum: Landmark,
  sozlesme: FileSignature,
  calisan: Users,
  insaat: HardHat,
  tahsilat: ReceiptText,
  aile: HeartHandshake,
  adalet: Gavel,
  devlet: Scale,
  kalkan: ShieldCheck,
  marka: Sparkles,
  danismanlik: Briefcase,
};

export function AlanIkonu({ ad, className }: { ad: string; className?: string }) {
  const Ikon = eslesme[ad] ?? FileSignature;
  return <Ikon className={cn("h-5 w-5", className)} strokeWidth={1.4} aria-hidden="true" />;
}
