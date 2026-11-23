"use client";

import { useEffect, useRef, useState } from "react";
import { Fact } from "@/components/atlas/Fact";
import { PlaceExtras } from "@/components/atlas/PlaceExtras";
import { WorldEventCard } from "@/components/atlas/WorldEventCard";
import { useOutsideClick } from "@/components/atlas/useOutsideClick";
import { formatKm } from "@/components/dossier/geoInsights";
import { formatYear } from "@/data/campaigns/registry";
import type { PolityProperties } from "@/geo/borderRaster";
import { nearestCity, polityAt } from "@/geo/placeLookup";
import { localCityName } from "@/i18n/reference";
import { useT } from "@/i18n/I18nProvider";
import { formatCoordinates } from "@/scene/globeInteraction";
import { formatPopulation } from "@/scene/cityMetrics";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { LonLat } from "@/types/chronicle";

function usePolity(point: LonLat, year: number): { readonly key: string; readonly polity: PolityProperties | null } | null {
  const [result, setResult] = useState<{ readonly key: string; readonly polity: PolityProperties | null } | null>(null);
  const key = `${point[0]},${point[1]}:${year}`;
  useEffect(() => {
    let live = true;
    void polityAt(year, point).then((polity) => {
      if (live) setResult({ key, polity });
    });
    return () => {
      live = false;
    };
  }, [key, point, year]);
  return result?.key === key ? result : null;
}

function PlaceFacts({ point }: { readonly point: LonLat }) {
  const t = useT();
  const year = useChronosStore((state) => Math.round(state.year / 5) * 5);
  const polity = usePolity(point, year);
  const city = nearestCity(year, point);
  return (
    <>
      <Fact label={t("place.state")}>
        {polity === null ? (
          <span className="text-ink-muted">…</span>
        ) : polity.polity ? (
          <>
            {polity.polity.name}
            <span className="ml-1.5 font-mono text-[10.5px] text-ink-muted">
              {formatYear(polity.polity.from)} – {formatYear(polity.polity.to)}
            </span>
          </>
        ) : (
          <span className="text-ink-muted">{t("place.noState")}</span>
        )}
      </Fact>
      <PlaceExtras point={point} year={year} />
      {city ? (
        <Fact label={t("place.city")}>
          {localCityName(city.city.id, city.city.name)}
          <span className="ml-1.5 font-mono text-[10.5px] text-ink-muted">
            ~{formatPopulation(city.population)} · {formatKm(city.distanceKm)}
          </span>
        </Fact>
      ) : null}
    </>
  );
}

export function PlaceCard() {
  const t = useT();
  const place = useAtlasStore((state) => state.place);
  const worldEventId = useAtlasStore((state) => state.worldEventId);
  const queryPlace = useAtlasStore((state) => state.queryPlace);
  const year = useChronosStore((state) => Math.round(state.year));
  const root = useRef<HTMLElement>(null);
  const open = Boolean(place || worldEventId);
  useOutsideClick(root, () => queryPlace(null), open);
  if (!open) return null;

  return (
    <section ref={root} data-hud-zone aria-live="polite" className="glass-panel fade-rise pointer-events-auto flex min-h-0 max-h-full flex-col rounded-2xl">
      <header className="flex items-start justify-between gap-3 px-4 pb-2 pt-3.5">
        <div>
          <p className="eyebrow">{worldEventId ? t("place.event") : t("place.title")}</p>
          {place ? <p className="mt-1 font-mono text-[11px] text-ink-muted">{formatCoordinates(place.coordinates)} · {formatYear(year)}</p> : null}
        </div>
        <button type="button" onClick={() => queryPlace(null)} aria-label={t("dossier.close")} className="grid size-7 place-items-center rounded-full text-ink-muted hover:bg-white/10 hover:text-ink">
          ×
        </button>
      </header>
      <div className="scrollbar-quiet min-h-0 flex-1 overflow-y-auto px-4 pb-3">
        {worldEventId ? <WorldEventCard id={worldEventId} /> : place ? <PlaceFacts key={place.nonce} point={place.coordinates} /> : null}
      </div>
    </section>
  );
}
