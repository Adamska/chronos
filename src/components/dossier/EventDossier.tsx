"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { ActionButton, Badge, Section } from "@/components/dossier/DossierParts";
import { FlowSchematic } from "@/components/dossier/FlowSchematic";
import { formatKm, nearestBarrier, nearestChokepoint } from "@/components/dossier/geoInsights";
import { RouteDossier } from "@/components/dossier/RouteDossier";
import { TimelineSchematic } from "@/components/dossier/TimelineSchematic";
import { WikipediaFigure } from "@/components/dossier/WikipediaFigure";
import { eraLabel, formatSpan, formatYear } from "@/data/campaigns/registry";
import { uncertaintyFor } from "@/data/uncertainty";
import { ARC_KIND_COLORS, LAYER_COLORS } from "@/scene/temporal";
import { useChronosStore } from "@/store/useChronosStore";
import type { ChronicleCampaign, GeoArc, HistoricalEvent } from "@/types/chronicle";
import { LAYER_LABELS } from "@/types/chronicle";

type Sheet = "peek" | "half" | "full";
const SHEET_HEIGHTS: Record<Sheet, string> = { peek: "30dvh", half: "56dvh", full: "92dvh" };
const NEXT_SHEET: Record<Sheet, Sheet> = { peek: "half", half: "full", full: "peek" };

function EventBody({ event, campaign }: { readonly event: HistoricalEvent; readonly campaign: ChronicleCampaign }) {
  const select = useChronosStore((state) => state.select);
  const requestCamera = useChronosStore((state) => state.requestCamera);
  const chokepoint = nearestChokepoint(event.coordinates);
  const barrier = nearestBarrier(event.coordinates);
  const routes = campaign.arcs.filter((arc) => arc.eventId === event.id);
  const uncertainty = uncertaintyFor(event.id);
  const [lon, lat] = event.coordinates;

  return (
    <>
      <WikipediaFigure slug={event.wikipediaSlug} title={event.title} coordinates={event.coordinates} variant="hero" />
      <header className="relative -mt-14 px-5 pb-4">
        <div className="flex flex-wrap gap-1.5">
          <Badge>{eraLabel(event.year)}</Badge>
          <Badge>{event.endYear ? formatSpan(event.year, event.endYear) : formatYear(event.year)}</Badge>
          <Badge color={LAYER_COLORS[event.layer]}>{LAYER_LABELS[event.layer]}</Badge>
          {uncertainty ? <Badge color={uncertainty.level === "debated" ? "#e0624a" : "#9a9789"}>{uncertainty.level}</Badge> : null}
        </div>
        <h2 tabIndex={-1} className="mt-3 font-serif text-[29px] leading-[1.05] text-ink outline-none [text-shadow:0_2px_18px_rgb(0_0_0/0.85)]">{event.title}</h2>
        <p className="mt-2 font-mono text-[11px] text-ink-muted">
          {event.place} · {Math.abs(lat).toFixed(2)}°{lat >= 0 ? "N" : "S"} {Math.abs(lon).toFixed(2)}°{lon >= 0 ? "E" : "W"}
        </p>
        <p className="mt-4 text-[14px] leading-relaxed text-ink/85 first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-serif first-letter:text-[46px] first-letter:leading-[0.78] first-letter:text-ochre-soft">
          {event.summary}
        </p>
      </header>

      <Section label="Geopolitical context">
        <p className="text-[13px] leading-relaxed text-ink/80">{event.context}</p>
      </Section>

      {uncertainty ? (
        <Section label={uncertainty.level === "debated" ? "What historians debate" : "How precise is this?"}>
          <p className="text-[12.5px] leading-relaxed text-ink/75">{uncertainty.note}</p>
        </Section>
      ) : null}

      <Section label="Why here?">
        <div className="rounded-lg border-l-2 border-ochre bg-ochre/[0.06] px-3.5 py-3">
          <p className="font-serif text-[15px] leading-snug text-ink">{event.whyHere}</p>
        </div>
        <dl className="mt-3 grid grid-cols-2 gap-2">
          {chokepoint ? (
            <div className="rounded-lg border border-hairline px-3 py-2">
              <dt className="eyebrow">Nearest chokepoint</dt>
              <dd className="mt-1 text-[12px] text-ink">{chokepoint.name}</dd>
              <dd className="font-mono text-[10.5px] text-ink-muted">{formatKm(chokepoint.distanceKm)}</dd>
            </div>
          ) : null}
          {barrier ? (
            <div className="rounded-lg border border-hairline px-3 py-2">
              <dt className="eyebrow">Nearest barrier</dt>
              <dd className="mt-1 text-[12px] text-ink">{barrier.name}</dd>
              <dd className="font-mono text-[10.5px] text-ink-muted">{formatKm(barrier.distanceKm)}</dd>
            </div>
          ) : null}
        </dl>
      </Section>

      <Section label="Key figures">
        <ul className="flex flex-wrap gap-1.5">
          {event.keyFigures.map((figure) => (
            <li key={figure} className="rounded-md border border-hairline bg-white/[0.03] px-2 py-1 text-[12px] text-ink/85">
              {figure}
            </li>
          ))}
        </ul>
      </Section>

      {event.primarySource ? (
        <figure className="border-t border-hairline px-5 py-6">
          <span aria-hidden className="block font-serif text-[64px] leading-[0.5] text-ochre/60">“</span>
          <blockquote className="mt-2 font-serif text-[19px] italic leading-snug text-ink">{event.primarySource.excerpt}</blockquote>
          <figcaption className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-muted">{event.primarySource.attribution}</figcaption>
        </figure>
      ) : null}

      {event.schematic ? (
        <Section label={event.schematic.kind === "exchange" ? "Exchange schematic" : "Causal chain"}>
          <FlowSchematic schematic={event.schematic} />
        </Section>
      ) : null}

      <Section label="Position in the chronicle">
        <TimelineSchematic campaign={campaign} event={event} />
      </Section>

      {routes.length > 0 ? (
        <Section label="Connected routes">
          <div className="flex flex-col gap-1.5">
            {routes.map((arc) => (
              <button
                key={arc.id}
                type="button"
                onClick={() => select({ kind: "arc", id: arc.id })}
                className="flex items-center gap-2 rounded-lg border border-hairline px-3 py-2 text-left text-[12.5px] text-ink/85 transition hover:border-white/20"
              >
                <span className="size-2 rounded-full" style={{ background: ARC_KIND_COLORS[arc.kind] }} />
                {arc.label}
              </button>
            ))}
          </div>
        </Section>
      ) : null}

      <div className="border-t border-hairline px-5 py-4">
        <ActionButton
          onClick={() =>
            requestCamera({ id: `focus-${event.id}`, year: event.year, title: event.title, caption: event.summary, target: event.coordinates, altitude: 0.85, tilt: 28 })
          }
        >
          Fly to this site
        </ActionButton>
      </div>
    </>
  );
}

export function EventDossier() {
  const campaign = useChronosStore((state) => state.campaign);
  const selection = useChronosStore((state) => state.selection);
  const select = useChronosStore((state) => state.select);
  const selectedEvent = selection?.kind === "event" ? campaign?.events.find((entry) => entry.id === selection.id) : undefined;
  const selectedArc = selection?.kind === "arc" ? campaign?.arcs.find((entry) => entry.id === selection.id) : undefined;
  const open = Boolean(campaign && (selectedEvent || selectedArc));
  const [retained, setRetained] = useState<{ event?: HistoricalEvent; arc?: GeoArc }>({});
  if (open && (retained.event !== selectedEvent || retained.arc !== selectedArc)) {
    setRetained({ event: selectedEvent, arc: selectedArc });
  }
  const event = open ? selectedEvent : retained.event;
  const arc = open ? selectedArc : retained.arc;
  const contentKey = event?.id ?? arc?.id ?? "empty";
  const panel = useRef<HTMLElement>(null);
  const dragStart = useRef(0);
  const [sheet, setSheet] = useState<Sheet>("half");

  useEffect(() => {
    if (open) panel.current?.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
  }, [open, contentKey]);

  return (
    <aside
      ref={panel}
      aria-hidden={!open}
      aria-label="Dossier"
      data-hud-zone
      style={{ "--sheet-height": SHEET_HEIGHTS[sheet] } as CSSProperties}
      className={`pointer-events-auto absolute inset-x-0 bottom-0 z-20 h-[var(--sheet-height)] transition-[transform,opacity,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:inset-x-auto md:right-4 md:top-4 md:bottom-[13.5rem] md:h-auto md:w-[min(420px,calc(100vw-24px))] ${
        open ? "translate-y-0 opacity-100 md:translate-x-0" : "pointer-events-none translate-y-full opacity-0 md:translate-x-[calc(100%+2rem)] md:translate-y-0"
      }`}
    >
      <button
        type="button"
        aria-label="Resize dossier"
        onClick={() => setSheet(NEXT_SHEET[sheet])}
        onPointerDown={(event) => (dragStart.current = event.clientY)}
        onPointerUp={(event) => {
          const delta = event.clientY - dragStart.current;
          if (Math.abs(delta) > 24) setSheet(delta < 0 ? (sheet === "peek" ? "half" : "full") : sheet === "full" ? "half" : "peek");
        }}
        className="absolute -top-0 left-1/2 z-20 flex h-6 w-16 -translate-x-1/2 items-center justify-center md:hidden"
      >
        <span className="h-1 w-10 rounded-full bg-white/30" />
      </button>
      <div key={contentKey} className="glass-panel scrollbar-quiet relative h-full overflow-y-auto rounded-t-2xl md:rounded-2xl">
        <div className="sticky top-0 z-10 h-0">
          <button
            type="button"
            onClick={() => select(null)}
            aria-label="Close dossier"
            className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-hairline bg-abyss/70 text-ink-muted backdrop-blur transition hover:text-ink"
          >
            <svg viewBox="0 0 16 16" className="size-3" stroke="currentColor" strokeWidth="1.8"><path d="m3 3 10 10M13 3 3 13" /></svg>
          </button>
        </div>
        {campaign && event ? <EventBody event={event} campaign={campaign} /> : null}
        {campaign && arc ? <RouteDossier arc={arc} campaign={campaign} /> : null}
      </div>
    </aside>
  );
}
