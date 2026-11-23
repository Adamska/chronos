"use client";

import { useEffect } from "react";
import { Fact } from "@/components/atlas/Fact";
import { formatYear } from "@/data/campaigns/registry";
import { worldWindow } from "@/data/worldLayer";
import { kilometresBetween } from "@/geo/placeLookup";
import { useLocale, useT } from "@/i18n/I18nProvider";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useWorldStore } from "@/store/useWorldStore";
import type { LonLat } from "@/types/chronicle";

const RADIUS_KM = 1200;

export function NearbyEvents({ point, year }: { readonly point: LonLat; readonly year: number }) {
  const t = useT();
  const locale = useLocale();
  const data = useWorldStore((state) => state.data);
  const ensure = useWorldStore((state) => state.ensure);
  useEffect(() => ensure(locale), [ensure, locale]);
  const window = worldWindow(year) * 3;
  const nearby = (data?.events ?? [])
    .filter((event) => Math.abs(event.year - year) <= window && kilometresBetween(point, event.coordinates) <= RADIUS_KM)
    .sort((a, b) => Math.abs(a.year - year) - Math.abs(b.year - year))
    .slice(0, 4);
  if (nearby.length === 0) return null;
  return (
    <Fact label={t("place.nearby")}>
      <ul className="space-y-1.5">
        {nearby.map((event) => (
          <li key={event.id}>
            <button type="button" onClick={() => useAtlasStore.getState().showWorldEvent(event.id)} className="text-left hover:text-ochre-soft">
              <span className="mr-2 font-mono text-[10.5px] text-ink-muted">{formatYear(event.year)}</span>
              {event.title}
            </button>
          </li>
        ))}
      </ul>
    </Fact>
  );
}
