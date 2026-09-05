import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { gorselAdresi } from "@/sanity/client";
import type { Govde } from "@/lib/veri";
import type { MetinBlogu } from "@/lib/yasal-metinler";
import type { YaziBlogu } from "@/lib/yazilar";

/**
 * Uzun metin bloklarini ekrana basar.
 *
 * Iki kaynak vardir: yonetim panelinden gelen portable text ve koddaki
 * yerel bloklar. Ikisi de ayni tipografiyle render edilir.
 */

const bilesenler: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-5 leading-[1.8] text-metin">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-12 text-[1.45rem] first:mt-0">
        <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
        <span className="mt-4 block">{children}</span>
      </h2>
    ),
    h3: ({ children }) => <h3 className="mt-9 text-[1.15rem] font-semibold">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-2 border-altin bg-altin-yumusak/50 py-4 pl-6 pr-4 font-display text-[1.1rem] leading-relaxed text-murekkep">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-5 space-y-2.5">{children}</ul>,
    number: ({ children }) => <ol className="mt-5 list-decimal space-y-2.5 pl-5">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="relative pl-6 leading-[1.75] text-metin before:absolute before:left-0 before:top-[0.72em] before:h-1.5 before:w-1.5 before:rotate-45 before:bg-altin">
        {children}
      </li>
    ),
    number: ({ children }) => <li className="leading-[1.75] text-metin">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-murekkep">{children}</strong>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-kirmizi underline decoration-altin/60 underline-offset-4 hover:decoration-kirmizi"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const adres = gorselAdresi(value, 1400);
      if (!adres) return null;
      return (
        <figure className="mt-10">
          <Image
            src={adres}
            alt={value?.alt ?? ""}
            width={1400}
            height={880}
            className="h-auto w-full border border-cizgi"
          />
          {value?.alt ? (
            <figcaption className="mt-3 text-[0.82rem] text-metin-silik">{value.alt}</figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

function YerelBlok({ blok }: { blok: YaziBlogu | MetinBlogu }) {
  switch (blok.tur) {
    case "altBaslik":
      return (
        <h2 className="mt-12 text-[1.45rem] first:mt-0">
          <span className="block h-px w-10 bg-altin/60" aria-hidden="true" />
          <span className="mt-4 block">{blok.metin}</span>
        </h2>
      );
    case "liste":
      return (
        <ul className="mt-5 space-y-2.5">
          {blok.maddeler.map((madde) => (
            <li
              key={madde}
              className="relative pl-6 leading-[1.75] text-metin before:absolute before:left-0 before:top-[0.72em] before:h-1.5 before:w-1.5 before:rotate-45 before:bg-altin"
            >
              {madde}
            </li>
          ))}
        </ul>
      );
    case "vurgu":
      return (
        <p className="mt-8 border-l-2 border-altin bg-altin-yumusak/50 py-4 pl-6 pr-4 font-display text-[1.08rem] leading-relaxed text-murekkep">
          {blok.metin}
        </p>
      );
    default:
      return <p className="mt-5 leading-[1.8] text-metin">{blok.metin}</p>;
  }
}

export function Metin<T extends YaziBlogu | MetinBlogu>({ govde }: { govde: Govde<T> }) {
  if (govde.kaynak === "panel") {
    return <PortableText value={govde.bloklar} components={bilesenler} />;
  }
  return (
    <>
      {govde.bloklar.map((blok, sira) => (
        <YerelBlok key={sira} blok={blok} />
      ))}
    </>
  );
}

/** Biyografi gibi duz paragraf dizileri icin. */
export function Paragraflar({ govde }: { govde: Govde<string> }) {
  if (govde.kaynak === "panel") {
    return <PortableText value={govde.bloklar} components={bilesenler} />;
  }
  return (
    <>
      {govde.bloklar.map((paragraf, sira) => (
        <p key={sira} className="mt-5 leading-[1.8] text-metin first:mt-0">
          {paragraf}
        </p>
      ))}
    </>
  );
}
