"use client";

import { useState } from "react";
import { BaseMapLegend } from "@/components/atlas/BaseMapLegend";
import { CitiesCard, CompareCard, EnvironmentCard, KnownCard, TravelCard } from "@/components/atlas/LensCards";
import { useT } from "@/i18n/I18nProvider";
import type { MessageKey } from "@/i18n/dictionaries";
import { BASE_MAPS, type BaseMap, OVERLAYS, type Overlay, useAtlasStore } from "@/store/useAtlasStore";

const BASE_LABELS: Record<BaseMap, MessageKey> = {
  countries: "atlas.base.countries",
  religions: "atlas.base.religions",
  languages: "atlas.base.languages",
  population: "atlas.base.population",
  none: "atlas.base.none",
};

const OVERLAY_LABELS: Record<Overlay, MessageKey> = {
  events: "atlas.overlay.events",
  trade: "atlas.overlay.trade",
  cities: "atlas.overlay.cities",
  physical: "atlas.overlay.physical",
};

const OVERLAY_CARDS: Partial<Record<Overlay, () => React.ReactNode>> = {
  cities: () => <CitiesCard />,
  physical: () => <EnvironmentCard />,
};

const APPROXIMATE = new Set<BaseMap>(["religions", "languages"]);

function Row({ checked, label, onClick, radio, badge }: { readonly checked: boolean; readonly label: string; readonly onClick: () => void; readonly radio?: boolean; readonly badge?: string }) {
  return (
    <button type="button" role={radio ? "radio" : "checkbox"} aria-checked={checked} onClick={onClick} className="flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-[12.5px] transition hover:bg-white/[0.05]">
      <span className={`grid size-3.5 shrink-0 place-items-center border ${radio ? "rounded-full" : "rounded-[4px]"} ${checked ? "border-ochre bg-ochre/20" : "border-ink-faint"}`}>
        {checked ? <span className={`block size-1.5 bg-ochre ${radio ? "rounded-full" : "rounded-[1px]"}`} /> : null}
      </span>
      <span className={checked ? "text-ink" : "text-ink/75"}>{label}</span>
      {badge ? <span className="ml-auto rounded-full border border-hairline px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-ink-faint">{badge}</span> : null}
    </button>
  );
}

export function AtlasPanel() {
  const t = useT();
  const atlas = useAtlasStore();
  const [advanced, setAdvanced] = useState(atlas.lens !== "none" || atlas.compareYear !== null);
  const [collapsed, setCollapsed] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);

  return (
    <section data-hud-zone aria-label={t("atlas.layers")} className="glass-panel pointer-events-auto flex min-h-0 max-h-full w-full flex-col rounded-2xl">
      <header className="flex items-center justify-between px-4 pb-2 pt-3">
        <h2 className="eyebrow">{t("atlas.layers")}</h2>
        <button type="button" onClick={() => setCollapsed(!collapsed)} aria-expanded={!collapsed} className="text-[11px] text-ink-muted hover:text-ink">
          {collapsed ? t("atlas.show") : t("atlas.hide")}
        </button>
      </header>
      {collapsed ? null : (
        <div className="scrollbar-quiet min-h-0 flex-1 overflow-y-auto px-2 pb-3">
          <p className="px-2 pb-1 pt-1 text-[10.5px] text-ink-faint">{t("atlas.baseTitle")}</p>
          <div role="radiogroup" aria-label={t("atlas.baseTitle")}>
            {BASE_MAPS.map((base) => (
              <div key={base}>
                <Row radio checked={atlas.baseMap === base} label={t(BASE_LABELS[base])} badge={APPROXIMATE.has(base) ? t("atlas.approximate") : undefined} onClick={() => atlas.setBaseMap(base)} />
                {atlas.baseMap === base && base !== "none" ? (
                  <div className="px-2">
                    <BaseMapLegend baseMap={base} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <p className="px-2 pb-1 pt-3 text-[10.5px] text-ink-faint">{t("atlas.overlayTitle")}</p>
          {OVERLAYS.map((overlay) => (
            <div key={overlay}>
              <Row checked={atlas.overlays[overlay]} label={t(OVERLAY_LABELS[overlay])} onClick={() => atlas.toggleOverlay(overlay)} />
              {atlas.overlays[overlay] && OVERLAY_CARDS[overlay] ? <div className="px-2">{OVERLAY_CARDS[overlay]?.()}</div> : null}
            </div>
          ))}
          <button type="button" onClick={() => setAdvanced(!advanced)} aria-expanded={advanced} className="mt-2 flex w-full items-center justify-between px-2 pb-1 pt-2 text-[10.5px] text-ink-faint hover:text-ink-muted">
            {t("atlas.advanced")}
            <span aria-hidden>{advanced ? "−" : "+"}</span>
          </button>
          {advanced ? (
            <>
              <Row checked={atlas.lens === "travel"} label={t("rail.travel.label")} onClick={() => atlas.setLens("travel")} />
              {atlas.lens === "travel" ? <div className="px-2"><TravelCard /></div> : null}
              <Row checked={atlas.lens === "known"} label={t("rail.known.label")} onClick={() => atlas.setLens("known")} />
              {atlas.lens === "known" ? <div className="px-2"><KnownCard /></div> : null}
              <Row checked={atlas.compareYear !== null} label={t("rail.compare.label")} onClick={atlas.toggleCompare} />
              {atlas.compareYear !== null ? <div className="px-2"><CompareCard /></div> : null}
            </>
          ) : null}
          <p className="px-2 pt-3 text-[10.5px] leading-snug text-ink-faint">{t("atlas.clickHint")}</p>
        </div>
      )}
    </section>
  );
}
