"use client";

import { CLIMATE_PERIODS, FLOW_KIND_LABELS, type FlowKind } from "@/data/environment";
import { KNOWN_PERSPECTIVES, perspectiveFor, snapshotFor } from "@/data/knownWorld";
import { formatYear } from "@/data/campaigns/registry";
import { travelModelFor } from "@/geo/travelModels";
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
    <section className="glass-panel pointer-events-auto rounded-2xl px-4 py-3">
      <h2 className="eyebrow mb-2">{title}</h2>
      {children}
    </section>
  );
}

function TravelCard() {
  const origin = useAtlasStore((state) => state.travelOrigin);
  const model = useChronosStore((state) => travelModelFor(state.year));
  return (
    <Card title="Travel time">
      <p className="text-[13px] text-ink">From {origin?.label ?? "a chosen point"}</p>
      <p className="mt-0.5 text-[11.5px] text-ink-muted">{model.label}</p>
      <div className="mt-3 h-2 rounded-full bg-[linear-gradient(90deg,#fac761,#db7a42_30%,#5eb3a8_60%,#3d5c8f)]" />
      <div className="mt-1 flex justify-between font-mono text-[9.5px] text-ink-faint">
        <span>1 week</span>
        <span>1 month</span>
        <span>3 months</span>
        <span>1 year</span>
      </div>
      <p className="mt-2.5 text-[11.5px] leading-snug text-ink-muted">
        Click anywhere on the globe to move the origin. Surface travel only, using typical speeds of the era.
      </p>
    </Card>
  );
}

function KnownCard() {
  const perspectiveId = useAtlasStore((state) => state.knownPerspective);
  const setPerspective = useAtlasStore((state) => state.setKnownPerspective);
  const perspective = perspectiveFor(perspectiveId);
  const snapshot = useChronosStore((state) => snapshotFor(perspective, state.year));
  return (
    <Card title="Edge of the known world">
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
            {entry.label}
          </button>
        ))}
      </div>
      {snapshot ? (
        <p className="mt-2.5 text-[12px] leading-snug text-ink/85">
          <span className="font-mono text-[10.5px] text-ochre-soft">c. {formatYear(snapshot.year)} · {perspective.vantage}</span>
          <br />
          {snapshot.note}
        </p>
      ) : null}
      <p className="mt-2 text-[10.5px] text-ink-faint">An approximate reconstruction of documented geographical knowledge.</p>
    </Card>
  );
}

function EnvironmentCard() {
  const season = useAtlasStore((state) => state.season);
  const setSeason = useAtlasStore((state) => state.setSeason);
  const year = useChronosStore((state) => Math.round(state.year));
  const period = CLIMATE_PERIODS.find((entry) => year >= entry.startYear && year <= entry.endYear);
  return (
    <Card title="Winds, currents and climate">
      <ul className="grid grid-cols-2 gap-1.5">
        {(Object.keys(FLOW_SWATCHES) as FlowKind[]).map((kind) => (
          <li key={kind} className="flex items-center gap-2 text-[11.5px] text-ink/85">
            <span className="h-0.5 w-4 rounded-full" style={{ background: FLOW_SWATCHES[kind] }} />
            {FLOW_KIND_LABELS[kind]}
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
            {value === "summer" ? "Summer · southwest monsoon" : "Winter · northeast monsoon"}
          </button>
        ))}
      </div>
      <p className="mt-2.5 text-[11.5px] leading-snug text-ink-muted">
        {period ? (
          <>
            <span className={period.tone === "warm" ? "text-[#e8915a]" : "text-[#6fb3e0]"}>{period.name}.</span> {period.note}
          </>
        ) : (
          "No major climate anomaly is recorded for this year."
        )}
      </p>
    </Card>
  );
}

function CitiesCard() {
  const year = useChronosStore((state) => Math.round(state.year / 5) * 5);
  const ranking = largestCities(year, 5);
  return (
    <Card title={`Largest cities · ${formatYear(year)}`}>
      <ol className="space-y-1">
        {ranking.map((entry, index) => (
          <li key={entry.city.id} className="flex items-baseline justify-between gap-3 text-[12px]">
            <span className={index === 0 ? "text-ochre-soft" : "text-ink/85"}>
              {index + 1}. {entry.city.name}
            </span>
            <span className="font-mono text-[10.5px] text-ink-muted">~{formatPopulation(entry.population)}</span>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-[10.5px] text-ink-faint">Estimates after Chandler, Modelski and the UN; ancient figures are uncertain.</p>
    </Card>
  );
}

function CompareCard() {
  const compareYear = useAtlasStore((state) => state.compareYear);
  const setCompareYear = useAtlasStore((state) => state.setCompareYear);
  const year = useChronosStore((state) => Math.round(state.year));
  if (compareYear === null) return null;
  return (
    <Card title="Compare two years">
      <p className="text-[12.5px] text-ink">
        <span className="text-[#7ed6ec]">Outlines</span> show {formatYear(compareYear)}; colours show {formatYear(year)}.
      </p>
      <input
        type="range"
        min={-3000}
        max={2024}
        value={compareYear}
        aria-label="Comparison year"
        onChange={(event) => setCompareYear(Number(event.target.value))}
        className="mt-3 w-full accent-[#7ed6ec]"
      />
      <div className="mt-1 flex gap-1">
        {[-100, -50, 50, 100].map((step) => (
          <button key={step} type="button" onClick={() => setCompareYear(Math.max(-3000, Math.min(2024, compareYear + step)))} className="flex-1 rounded-full border border-hairline py-0.5 font-mono text-[10px] text-ink-muted hover:text-ink">
            {step > 0 ? `+${step}` : step}
          </button>
        ))}
      </div>
      <p className="mt-2 text-[10.5px] text-ink-faint">Borders: Cliopatria, Seshat Global History Databank (CC BY 4.0).</p>
    </Card>
  );
}

export function LensPanel() {
  const lens = useAtlasStore((state) => state.lens);
  const environment = useAtlasStore((state) => state.showEnvironment);
  const cities = useAtlasStore((state) => state.showCities);
  const comparing = useAtlasStore((state) => state.compareYear !== null);
  if (lens === "none" && !environment && !cities && !comparing) return null;
  return (
    <div data-hud-zone className="flex w-[min(20rem,calc(100vw-1.5rem))] flex-col gap-2">
      {lens === "travel" ? <TravelCard /> : null}
      {lens === "known" ? <KnownCard /> : null}
      {environment ? <EnvironmentCard /> : null}
      {cities ? <CitiesCard /> : null}
      <CompareCard />
    </div>
  );
}
