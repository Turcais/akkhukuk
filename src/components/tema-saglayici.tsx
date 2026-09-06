"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Tema saglayicisi.
 *
 * Varsayilan "sistem": ziyaretci isletim sisteminde koyu tema
 * kullaniyorsa site de koyu acilir. Sinif adlari Turkce tutulur ki
 * globals.css icindeki .karanlik tanimiyla eslessin.
 */
export function TemaSaglayici({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      value={{ light: "aydinlik", dark: "karanlik" }}
    >
      {children}
    </ThemeProvider>
  );
}
