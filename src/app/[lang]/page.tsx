import type { Metadata } from "next";
import { AtlasShell } from "@/components/AtlasShell";
import { findCatalogEntry, localizedEntry } from "@/data/catalog";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import { dictionaries, interpolate } from "@/i18n/dictionaries";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;
type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params, searchParams }: { params: Params; searchParams: SearchParams }): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const dictionary = dictionaries[locale];
  const query = await searchParams;
  const id = typeof query.c === "string" ? query.c : "";
  const year = typeof query.y === "string" ? query.y : "";
  const found = findCatalogEntry(id);
  const entry = found ? localizedEntry(found, locale) : undefined;
  const image = `/api/og?${new URLSearchParams({ ...(entry ? { c: entry.id } : {}), ...(year ? { y: year } : {}) }).toString()}`;
  const title = entry ? interpolate(dictionary, "meta.entryTitle", { title: entry.title }) : dictionary["meta.title"];
  const description = entry?.subtitle ?? dictionary["meta.description"];
  return {
    title,
    description,
    openGraph: { title, description, locale: locale === "fr" ? "fr_FR" : "en_GB", images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    alternates: { languages: { en: `/en${id ? `?c=${id}` : ""}`, fr: `/fr${id ? `?c=${id}` : ""}` } },
  };
}

export default function HomePage() {
  return <AtlasShell />;
}
