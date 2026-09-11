import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Paylasim gorseli.
 *
 * WhatsApp, LinkedIn ve X'te baglanti paylasildiginda gorunur. Sitedeki
 * kitabe duzenini birebir tekrarlar: koyu zemin, altin cerceve, muhur.
 *
 * Muhur olarak buronun kendi isareti kullanilir. Dosya modul duzeyinde
 * bir kez okunur; boylece her istekte diske gidilmez. fetch(new URL(...,
 * import.meta.url)) denendi ve calismadi: undici file: adreslerini
 * desteklemiyor ("not implemented... yet").
 */

export const alt = `${site.name} — Ankara Avukatlık ve Hukuki Danışmanlık`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const muhur = await readFile(join(process.cwd(), "public/marka/akk-muhur.svg"));
const muhurAdresi = `data:image/svg+xml;base64,${muhur.toString("base64")}`;

export default function PaylasimGorseli() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(120deg, #16110d 0%, #2a0f16 55%, #16110d 100%)",
          padding: 84,
          position: "relative",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 40,
            border: "1px solid rgba(201,169,97,0.42)",
            display: "flex",
          }}
        />
        {/* ImageResponse icinde next/image calismaz; duz img kullanilir. */}
        <img
          src={muhurAdresi}
          alt=""
          width={168}
          height={168}
          style={{ position: "absolute", top: 74, right: 74 }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#c9a961", fontSize: 22, letterSpacing: 6 }}>
          <div style={{ width: 56, height: 1, background: "#c9a961", display: "flex" }} />
          ANKARA
        </div>
        <div style={{ display: "flex", color: "#ffffff", fontSize: 74, marginTop: 26, lineHeight: 1.1, maxWidth: 800 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", color: "rgba(255,255,255,0.62)", fontSize: 30, marginTop: 26 }}>
          Avukatlık ve Hukuki Danışmanlık
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 42,
            paddingTop: 26,
            borderTop: "1px solid rgba(201,169,97,0.32)",
            color: "rgba(255,255,255,0.45)",
            fontSize: 22,
          }}
        >
          Şirketler · Vakıflar ve Dernekler · Sözleşmeler · Uyuşmazlık Çözümü
        </div>
      </div>
    ),
    size,
  );
}
