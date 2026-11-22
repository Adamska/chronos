import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";
import type { ReactNode } from "react";
import { I18nProvider } from "@/i18n/I18nProvider";
import { DEFAULT_LOCALE, LOCALES, isLocale } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = dictionaries[isLocale(lang) ? lang : DEFAULT_LOCALE];
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: dictionary["meta.title"],
    description: dictionary["meta.description"],
  };
}

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  return (
    <html lang={locale} className={`${inter.variable} ${newsreader.variable} ${plexMono.variable}`}>
      <body className="font-sans">
        <I18nProvider locale={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
