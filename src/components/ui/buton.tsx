import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Gorunum = "dolu" | "cizgili" | "sade" | "altin";
type Boyut = "normal" | "genis";

const temel =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[background-color,color,border-color,box-shadow] duration-200 disabled:opacity-60 disabled:pointer-events-none";

const gorunumler: Record<Gorunum, string> = {
  dolu: "bg-dolgu text-dolgu-metin hover:bg-dolgu-ustunde shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]",
  cizgili: "border border-cizgi-koyu text-murekkep hover:border-kirmizi hover:text-kirmizi bg-transparent",
  sade: "text-kirmizi hover:text-kirmizi-koyu underline decoration-altin/50 underline-offset-4 hover:decoration-kirmizi",
  altin: "border border-altin/50 text-altin-parlak hover:bg-altin/10 bg-transparent",
};

const boyutlar: Record<Boyut, string> = {
  normal: "px-6 py-3 text-[0.9rem]",
  genis: "px-8 py-4 text-[0.95rem]",
};

function siniflar(gorunum: Gorunum, boyut: Boyut, ek?: string) {
  const sade = gorunum === "sade";
  return cn(temel, gorunumler[gorunum], sade ? "" : boyutlar[boyut], ek);
}

export function Buton({
  gorunum = "dolu",
  boyut = "normal",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { gorunum?: Gorunum; boyut?: Boyut; children: ReactNode }) {
  return (
    <button className={siniflar(gorunum, boyut, className)} {...props}>
      {children}
    </button>
  );
}

export function ButonBaglanti({
  gorunum = "dolu",
  boyut = "normal",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { gorunum?: Gorunum; boyut?: Boyut; children: ReactNode }) {
  return (
    <Link className={siniflar(gorunum, boyut, className)} {...props}>
      {children}
    </Link>
  );
}
