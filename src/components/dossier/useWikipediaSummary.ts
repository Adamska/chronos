"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

const SummarySchema = z.object({
  title: z.string(),
  extract: z.string().default(""),
  description: z.string().optional(),
  thumbnail: z.object({ source: z.string().url(), width: z.number(), height: z.number() }).optional(),
  content_urls: z.object({ desktop: z.object({ page: z.string().url() }) }).optional(),
});

export interface WikipediaSummary {
  readonly title: string;
  readonly extract: string;
  readonly description?: string;
  readonly thumbnail?: { readonly source: string; readonly width: number; readonly height: number };
  readonly pageUrl: string;
}

export type WikipediaState =
  | { readonly status: "loading" }
  | { readonly status: "ready"; readonly summary: WikipediaSummary }
  | { readonly status: "unavailable" };

const cache = new Map<string, WikipediaSummary | null>();
const ENDPOINT = "https://en.wikipedia.org/api/rest_v1/page/summary/";

export function wikipediaArticleUrl(slug: string): string {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(slug)}`;
}

async function fetchSummary(slug: string, signal: AbortSignal): Promise<WikipediaSummary | null> {
  const response = await fetch(`${ENDPOINT}${encodeURIComponent(slug)}`, { signal, headers: { Accept: "application/json" } });
  if (!response.ok) return null;
  const parsed = SummarySchema.safeParse(await response.json());
  if (!parsed.success) return null;
  const { title, extract, description, thumbnail, content_urls: urls } = parsed.data;
  return { title, extract, description, thumbnail, pageUrl: urls?.desktop.page ?? wikipediaArticleUrl(slug) };
}

export function useWikipediaSummary(slug: string | undefined): WikipediaState {
  const [resolved, setResolved] = useState<{ readonly slug: string; readonly state: WikipediaState } | null>(null);

  useEffect(() => {
    if (!slug || cache.has(slug)) return;
    const controller = new AbortController();
    fetchSummary(slug, controller.signal)
      .then((summary) => {
        cache.set(slug, summary);
        setResolved({ slug, state: summary ? { status: "ready", summary } : { status: "unavailable" } });
      })
      .catch(() => {
        if (!controller.signal.aborted) setResolved({ slug, state: { status: "unavailable" } });
      });
    return () => controller.abort();
  }, [slug]);

  if (!slug) return { status: "unavailable" };
  const cached = cache.get(slug);
  if (cached !== undefined) return cached ? { status: "ready", summary: cached } : { status: "unavailable" };
  if (resolved?.slug === slug) return resolved.state;
  return { status: "loading" };
}
