import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Paylasim gorseli.
 *
 * WhatsApp, LinkedIn ve X'te baglanti paylasildiginda gorunur. Sitedeki
 * kitabe duzenini birebir tekrarlar: koyu zemin, altin cerceve, muhur.
 */

export const alt = `${site.name} — Ankara Avukatlık ve Hukuki Danışmanlık`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#c9a961", fontSize: 22, letterSpacing: 6 }}>
          <div style={{ width: 56, height: 1, background: "#c9a961", display: "flex" }} />
          ANKARA
        </div>
        <div style={{ display: "flex", color: "#ffffff", fontSize: 78, marginTop: 26, lineHeight: 1.1 }}>
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
