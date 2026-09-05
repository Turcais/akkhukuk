"use client";

import { NextStudio } from "next-sanity/studio";
import yapilandirma from "../../../../sanity.config";

/** Sanity yonetim paneli. Site kabugu olmadan tam ekran calisir. */
export function Panel() {
  return <NextStudio config={yapilandirma} />;
}
