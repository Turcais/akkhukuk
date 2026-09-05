import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind siniflarini cakismasiz birlestirir. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 2026-03-14 -> "14 Mart 2026" */
export function tarihYaz(iso?: string | null) {
  if (!iso) return "";
  const tarih = new Date(iso);
  if (Number.isNaN(tarih.getTime())) return "";
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(tarih);
}

/** Metinden kaba okuma suresi (dakika) cikarir. */
export function okumaSuresi(kelimeSayisi: number) {
  return Math.max(1, Math.round(kelimeSayisi / 200));
}

/** Telefon numarasini tel: baglantisina uygun hale getirir. */
export function telefonBaglantisi(numara: string) {
  return `tel:${numara.replace(/[^\d+]/g, "")}`;
}

/** WhatsApp baglantisi icin numarayi sadelestirir. */
export function whatsappBaglantisi(numara: string, mesaj?: string) {
  const sade = numara.replace(/[^\d]/g, "");
  const metin = mesaj ? `?text=${encodeURIComponent(mesaj)}` : "";
  return `https://wa.me/${sade}${metin}`;
}
