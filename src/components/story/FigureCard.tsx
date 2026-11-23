"use client";

import { useRef } from "react";
import { useOutsideClick } from "@/components/atlas/useOutsideClick";
import { useWikipediaSummary } from "@/components/dossier/useWikipediaSummary";
import { formatSpan, formatYear } from "@/data/campaigns/registry";
import { storyOf } from "@/data/story";
import { useT } from "@/i18n/I18nProvider";
import { useChronosStore } from "@/store/useChronosStore";
import type { KeyFigure } from "@/types/story";

function Portrait({ figure }: { readonly figure: KeyFigure }) {
  const summary = useWikipediaSummary(figure.wikipediaSlug);
  const thumbnail = summary.status === "ready" ? summary.summary.thumbnail : undefined;
  if (thumbnail) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={thumbnail.source} alt="" className="size-16 shrink-0 rounded-xl object-cover object-top ring-1 ring-hairline" />
    );
  }
  return <span className="grid size-16 shrink-0 place-items-center rounded-xl bg-white/[0.05] font-serif text-[28px] text-ochre-soft ring-1 ring-hairline">{figure.name.charAt(0)}</span>;
}

export function FigureCard() {
  const t = useT();
  const campaign = useChronosStore((state) => state.campaign);
  const figureId = useChronosStore((state) => state.figureId);
  const showFigure = useChronosStore((state) => state.showFigure);
  const requestCamera = useChronosStore((state) => state.requestCamera);
  const root = useRef<HTMLElement>(null);
  const figure = campaign && figureId ? storyOf(campaign).figures.find((entry) => entry.id === figureId) : undefined;
  useOutsideClick(root, () => showFigure(null), Boolean(figure));
  if (!figure) return null;

  return (
    <section ref={root} data-hud-zone aria-label={figure.name} className="glass-panel fade-rise pointer-events-auto flex max-h-full w-full flex-col rounded-2xl">
      <header className="flex gap-3 px-4 pb-3 pt-4">
        <Portrait figure={figure} />
        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-[19px] leading-tight text-ink">{figure.name}</h2>
          <p className="mt-0.5 font-mono text-[10.5px] text-ink-muted">
            {formatSpan(figure.born, figure.died)}
          </p>
          <p className="mt-1 text-[12px] leading-snug text-ink/80">{figure.role}</p>
        </div>
        <button type="button" onClick={() => showFigure(null)} aria-label={t("dossier.close")} className="grid size-7 shrink-0 place-items-center rounded-full text-ink-muted hover:bg-white/10 hover:text-ink">
          ×
        </button>
      </header>
      <p className="eyebrow border-t border-hairline px-4 pt-3">{t("figure.life")}</p>
      <ol className="scrollbar-quiet min-h-0 flex-1 overflow-y-auto px-2 pb-3 pt-1">
        {figure.places.map((place, index) => (
          <li key={`${place.year}-${index}`}>
            <button
              type="button"
              onClick={() =>
                requestCamera({ id: `${figure.id}-${index}`, year: place.year, title: place.place, caption: place.note, target: place.coordinates, altitude: 0.95, tilt: 18 })
              }
              className="flex w-full gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-white/[0.05]"
            >
              <span className="mt-0.5 w-[5.5rem] shrink-0 whitespace-nowrap font-mono text-[10.5px] tabular-nums text-ochre-soft">{formatYear(place.year)}</span>
              <span className="min-w-0">
                <span className="block text-[12.5px] text-ink">{place.place}</span>
                <span className="block text-[11.5px] leading-snug text-ink-muted">{place.note}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
