"use client";

import { useWikipediaSummary, wikipediaArticleUrl } from "@/components/dossier/useWikipediaSummary";
import type { LonLat } from "@/types/chronicle";

function formatCoordinate([lon, lat]: LonLat): string {
  const latLabel = `${Math.abs(lat).toFixed(2)}°${lat >= 0 ? "N" : "S"}`;
  const lonLabel = `${Math.abs(lon).toFixed(2)}°${lon >= 0 ? "E" : "W"}`;
  return `${latLabel} ${lonLabel}`;
}

function CartographicPlate({ title, coordinates }: { readonly title: string; readonly coordinates: LonLat }) {
  const initial = title.replace(/^(The|Battle of|Siege of|Fall of)\s+/i, "").charAt(0).toUpperCase();
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="img" aria-label={`Cartographic plate for ${title}`}>
      <defs>
        <pattern id="plate-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="rgb(233 228 216 / 0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill="#0b1016" />
      <rect width="320" height="180" fill="url(#plate-grid)" />
      <circle cx="160" cy="90" r="54" fill="none" stroke="rgb(217 164 65 / 0.35)" strokeDasharray="2 5" />
      <circle cx="160" cy="90" r="30" fill="none" stroke="rgb(217 164 65 / 0.6)" />
      <text x="160" y="104" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="40" fill="#e8c47a">
        {initial}
      </text>
      <text x="14" y="168" fontFamily="var(--font-plex-mono)" fontSize="9" letterSpacing="1.5" fill="rgb(233 228 216 / 0.45)">
        {formatCoordinate(coordinates)}
      </text>
    </svg>
  );
}

interface WikipediaFigureProps {
  readonly slug: string;
  readonly title: string;
  readonly coordinates: LonLat;
  readonly variant?: "card" | "hero";
}

export function WikipediaFigure({ slug, title, coordinates, variant = "card" }: WikipediaFigureProps) {
  const state = useWikipediaSummary(slug);
  const thumbnail = state.status === "ready" ? state.summary.thumbnail : undefined;
  const href = state.status === "ready" ? state.summary.pageUrl : wikipediaArticleUrl(slug);

  const hero = variant === "hero";
  return (
    <figure className={hero ? "relative overflow-hidden bg-slate-deep" : "overflow-hidden rounded-xl border border-hairline bg-slate-deep"}>
      <div className={`relative w-full ${hero ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
        {state.status === "loading" ? <div className="absolute inset-0 animate-pulse bg-white/[0.03]" /> : null}
        {thumbnail ? (
          <img
            src={thumbnail.source}
            alt={state.status === "ready" ? state.summary.title : title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover opacity-90 [filter:sepia(0.18)_saturate(0.85)_contrast(1.05)]"
          />
        ) : state.status !== "loading" ? (
          <div className="absolute inset-0">
            <CartographicPlate title={title} coordinates={coordinates} />
          </div>
        ) : null}
        {hero ? <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1016]" /> : null}
      </div>
      <figcaption className={`flex items-center justify-between gap-3 px-3 py-2 ${hero ? "absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent pr-14" : ""}`}>
        <span className="truncate font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
          {state.status === "ready" ? state.summary.description ?? "Archival summary" : state.status === "loading" ? "Retrieving archive" : "Archive offline"}
        </span>
        <a href={href} target="_blank" rel="noreferrer" className="shrink-0 text-[11px] text-ochre-soft hover:underline">
          Wikipedia
        </a>
      </figcaption>
    </figure>
  );
}
