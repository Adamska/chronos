"use client";

import { useCallback, useRef, useState } from "react";
import { CitiesCard, CompareCard, EnvironmentCard, KnownCard, TravelCard } from "@/components/atlas/LensCards";
import { useOutsideClick } from "@/components/atlas/useOutsideClick";
import { useT } from "@/i18n/I18nProvider";
import { useAtlasStore } from "@/store/useAtlasStore";

export function LensPanel() {
  const atlas = useAtlasStore();
  const t = useT();
  const [collapsed, setCollapsed] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const collapse = useCallback(() => setCollapsed(true), []);
  const entries = [
    { id: "travel", title: t("rail.travel.label"), active: atlas.lens === "travel", card: <TravelCard />, close: () => atlas.setLens("travel") },
    { id: "known", title: t("rail.known.label"), active: atlas.lens === "known", card: <KnownCard />, close: () => atlas.setLens("known") },
    { id: "environment", title: t("rail.environment.label"), active: atlas.showEnvironment, card: <EnvironmentCard />, close: atlas.toggleEnvironment },
    { id: "cities", title: t("rail.cities.label"), active: atlas.showCities, card: <CitiesCard />, close: atlas.toggleCities },
    { id: "compare", title: t("rail.compare.label"), active: atlas.compareYear !== null, card: <CompareCard />, close: atlas.toggleCompare },
  ].filter((entry) => entry.active);
  const activeKey = entries.map((entry) => entry.id).join(",");
  const [shownKey, setShownKey] = useState(activeKey);
  if (shownKey !== activeKey) {
    setShownKey(activeKey);
    if (activeKey.length > shownKey.length) setCollapsed(false);
  }
  useOutsideClick(root, collapse, entries.length > 0 && !collapsed);
  if (entries.length === 0) return null;
  return (
    <div ref={root} data-hud-zone className="flex w-[min(20rem,calc(100vw-1.5rem))] flex-col gap-2">
      {entries.map((entry) =>
        collapsed ? (
          <div key={entry.id} className="glass-panel pointer-events-auto flex items-center gap-1 self-start rounded-full py-1 pl-3 pr-1 text-[11.5px] text-ink/85">
            <button type="button" onClick={() => setCollapsed(false)} className="hover:text-ink">
              {entry.title}
            </button>
            <button type="button" aria-label={t("legend.hide", { name: entry.title })} onClick={entry.close} className="grid size-5 place-items-center rounded-full text-ink-muted hover:bg-white/10 hover:text-ink">
              ×
            </button>
          </div>
        ) : (
          <div key={entry.id} className="relative">
            {entry.card}
            <button type="button" aria-label={t("legend.hide", { name: entry.title })} onClick={entry.close} className="pointer-events-auto absolute right-2 top-2 grid size-6 place-items-center rounded-full text-ink-muted hover:bg-white/10 hover:text-ink">
              ×
            </button>
          </div>
        ),
      )}
    </div>
  );
}
