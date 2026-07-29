// src/lib/fonts.ts
import localFont from "next/font/local";

export const righteous = localFont({
  src: "../../public/fonts/Righteous-Regular.ttf",
  weight: "100 900",
  style: "normal",
  variable: "--font-righteous",
  display: "swap",
});

export const googleSans = localFont({
  src: "../../public/fonts/GoogleSans.ttf",
  weight: "100 900",
  style: "normal",
  variable: "--font-google-sans",
  display: "swap",
});

export const roboto = localFont({
  src: "../../public/fonts/Roboto.ttf",
  weight: "100 900",
  style: "normal",
  variable: "--font-roboto",
  display: "swap",
});