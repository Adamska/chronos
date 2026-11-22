import type { Metadata } from "next";
import { AtlasShell } from "@/components/AtlasShell";
import { findCatalogEntry } from "@/data/catalog";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const params = await searchParams;
  const id = typeof params.c === "string" ? params.c : "";
  const year = typeof params.y === "string" ? params.y : "";
  const entry = findCatalogEntry(id);
  const image = `/api/og?${new URLSearchParams({ ...(entry ? { c: entry.id } : {}), ...(year ? { y: year } : {}) }).toString()}`;
  const title = entry ? `${entry.title} · Chronos` : "Chronos — A Temporal & Geopolitical Atlas";
  const description = entry?.subtitle ?? "An interactive 3D atlas of trade networks, scientific diffusion, migrations and shifting borders.";
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function HomePage() {
  return <AtlasShell />;
}
