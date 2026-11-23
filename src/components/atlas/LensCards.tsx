"use client";

import { CLIMATE_PERIODS, FLOW_KIND_LABELS, type FlowKind } from "@/data/environment";
import { KNOWN_PERSPECTIVES, perspectiveFor, snapshotFor } from "@/data/knownWorld";
import { formatYear } from "@/data/campaigns/registry";
import { travelModelFor } from "@/geo/travelModels";
import { useT } from "@/i18n/I18nProvider";
import { localCityName, localClimatePeriod, localFlowKind, localPerspective, localSnapshotNote, localTravelModel } from "@/i18n/reference";
import { formatPopulation, largestCities } from "@/scene/cityMetrics";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const FLOW_SWATCHES: Record<FlowKind, string> = {
  "warm-current": "#e8915a",
  "cold-current": "#6fb3e0",
  wind: "#d9dde0",
  monsoon: "#7fd1b9",
};

function Card({ title, children }: { readonly title: string; readonly children: React.ReactNode }) {
  return (
    <div className="mt-2 rounded-xl bg-white/[0.03] px-3 py-2.5">
      <h3 className="sr-only">{title}</h3>
      {children}
    </div>
  );
}

export function TravelCard() {
  const origin = useAtlasStore((state) => state.travelOrigin);
  const model = useChronosStore((state) => travelModelFor(state.year));
  const t = useT();
  return (
    <Card title={t("rail.travel.label")}>
      <p className="text-[13px] text-ink">{t("lens.travel.from", { origin: origin?.label ?? t("lens.travel.chosenPoint") })}</p>
      <p className="mt-0.5 text-[11.5px] text-ink-muted">{localTravelModel(model.id, model.label)}</p>
      <div className="mt-3 h-2 rounded-full bg-[linear-gradient(90deg,#fac761,#db7a42_30%,#5eb3a8_60%,#3d5c8f)]" />
      <div className="mt-1 flex justify-between font-mono text-[9.5px] text-ink-faint">
        <span>{t("lens.travel.week")}</span>
        <span>{t("lens.travel.month")}</span>
        <span>{t("lens.travel.months")}</span>
        <span>{t("lens.travel.year")}</span>
      </div>
      <p className="mt-2.5 text-[11.5px] leading-snug text-ink-muted">
        {t("lens.travel.note")}
      </p>
    </Card>
  );
}

export function KnownCard() {
  const perspectiveId = useAtlasStore((state) => state.knownPerspective);
  const setPerspective = useAtlasStore((state) => state.setKnownPerspective);
  const perspective = perspectiveFor(perspectiveId);
  const snapshot = useChronosStore((state) => snapshotFor(perspective, state.year));
  const t = useT();
  return (
    <Card title={t("rail.known.label")}>
      <div className="flex flex-wrap gap-1">
        {KNOWN_PERSPECTIVES.map((entry) => (
          <button
            key={entry.id}
            type="button"
            aria-pressed={entry.id === perspectiveId}
            onClick={() => setPerspective(entry.id)}
            className={`rounded-full border px-2 py-0.5 text-[11px] transition ${
              entry.id === perspectiveId ? "border-ochre/50 bg-ochre/10 text-ochre-soft" : "border-hairline text-ink-muted hover:text-ink"
            }`}
          >
            {localPerspective(entry.id, entry).label}
          </button>
        ))}
      </div>
      {snapshot ? (
        <p className="mt-2.5 text-[12px] leading-snug text-ink/85">
          <span className="font-mono text-[10.5px] text-ochre-soft">
            {t("lens.known.circa", { year: formatYear(snapshot.year), vantage: localPerspective(perspective.id, perspective).vantage })}
          </span>
          <br />
          {localSnapshotNote(perspective.id, snapshot.year, snapshot.note)}
        </p>
      ) : null}
      <p className="mt-2 text-[10.5px] text-ink-faint">{t("lens.known.note")}</p>
    </Card>
  );
}

export function EnvironmentCard() {
  const season = useAtlasStore((state) => state.season);
  const setSeason = useAtlasStore((state) => state.setSeason);
  const year = useChronosStore((state) => Math.round(state.year));
  const found = CLIMATE_PERIODS.find((entry) => year >= entry.startYear && year <= entry.endYear);
  const period = found ? { ...found, ...localClimatePeriod(found.id, found) } : undefined;
  const t = useT();
  return (
    <Card title={t("rail.environment.label")}>
      <ul className="grid grid-cols-2 gap-1.5">
        {(Object.keys(FLOW_SWATCHES) as FlowKind[]).map((kind) => (
          <li key={kind} className="flex items-center gap-2 text-[11.5px] text-ink/85">
            <span className="h-0.5 w-4 rounded-full" style={{ background: FLOW_SWATCHES[kind] }} />
            {localFlowKind(kind, FLOW_KIND_LABELS[kind])}
          </li>
        ))}
      </ul>
      <div className="mt-3 flex gap-1 rounded-full bg-white/[0.04] p-0.5 text-[11px]">
        {(["summer", "winter"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={season === value}
            onClick={() => setSeason(value)}
            className={`flex-1 rounded-full px-2 py-1 transition ${season === value ? "bg-white/10 text-ink" : "text-ink-muted"}`}
          >
            {value === "summer" ? t("lens.env.summer") : t("lens.env.winter")}
          </button>
        ))}
      </div>
      <p className="mt-2.5 text-[11.5px] leading-snug text-ink-muted">
        {period ? (
          <>
            <span className={period.tone === "warm" ? "text-[#e8915a]" : "text-[#6fb3e0]"}>{period.name}.</span> {period.note}
          </>
        ) : (
          t("lens.env.none")
        )}
      </p>
    </Card>
  );
}

export function CitiesCard() {
  const year = useChronosStore((state) => Math.round(state.year / 5) * 5);
  const ranking = largestCities(year, 5);
  const t = useT();
  return (
    <Card title={t("lens.cities.title", { year: formatYear(year) })}>
      <ol className="space-y-1">
        {ranking.map((entry, index) => (
          <li key={entry.city.id} className="flex items-baseline justify-between gap-3 text-[12px]">
            <span className={index === 0 ? "text-ochre-soft" : "text-ink/85"}>
              {index + 1}. {localCityName(entry.city.id, entry.city.name)}
            </span>
            <span className="font-mono text-[10.5px] text-ink-muted">~{formatPopulation(entry.population)}</span>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-[10.5px] text-ink-faint">{t("lens.cities.note")}</p>
    </Card>
  );
}

export function CompareCard() {
  const compareYear = useAtlasStore((state) => state.compareYear);
  const setCompareYear = useAtlasStore((state) => state.setCompareYear);
  const year = useChronosStore((state) => Math.round(state.year));
  const t = useT();
  if (compareYear === null) return null;
  return (
    <Card title={t("rail.compare.label")}>
      <p className="text-[12.5px] text-ink">
        <span className="text-[#7ed6ec]">{t("lens.compare.outlines")}</span>
        {t("lens.compare.rest", { compare: formatYear(compareYear), year: formatYear(year) })}
      </p>
      <input
        type="range"
        min={-3500}
        max={2024}
        value={compareYear}
        aria-label={t("lens.compare.slider")}
        onChange={(event) => setCompareYear(Number(event.target.value))}
        className="mt-3 w-full accent-[#7ed6ec]"
      />
      <div className="mt-1 flex gap-1">
        {[-100, -50, 50, 100].map((step) => (
          <button key={step} type="button" onClick={() => setCompareYear(Math.max(-3500, Math.min(2024, compareYear + step)))} className="flex-1 rounded-full border border-hairline py-0.5 font-mono text-[10px] text-ink-muted hover:text-ink">
            {step > 0 ? `+${step}` : step}
          </button>
        ))}
      </div>
      <p className="mt-2 text-[10.5px] text-ink-faint">{t("lens.compare.credit")}</p>
    </Card>
  );
}
