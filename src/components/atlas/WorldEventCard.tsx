"use client";

import { useEffect } from "react";
import { useWikipediaSummary, wikipediaArticleUrl } from "@/components/dossier/useWikipediaSummary";
import { formatSpan, formatYear } from "@/data/campaigns/registry";
import { useLocale, useT } from "@/i18n/I18nProvider";
import type { MessageKey } from "@/i18n/dictionaries";
import { CATEGORY_COLORS } from "@/scene/WorldLayers";
import { useChronosStore } from "@/store/useChronosStore";
import { useWorldStore } from "@/store/useWorldStore";
import type { WorldEvent, WorldEventCategory } from "@/types/world";

const CATEGORY_KEYS: Record<WorldEventCategory, MessageKey> = {
  war: "world.category.war",
  politics: "world.category.politics",
  religion: "world.category.religion",
  science: "world.category.science",
  culture: "world.category.culture",
  exploration: "world.category.exploration",
  economy: "world.category.economy",
};

function EventBody({ event }: { readonly event: WorldEvent }) {
  const t = useT();
  const summary = useWikipediaSummary(event.wikipediaSlug);
  const thumbnail = summary.status === "ready" ? summary.summary.thumbnail : undefined;
  return (
    <div className="pt-1">
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={thumbnail.source} alt="" className="mb-3 h-32 w-full rounded-xl object-cover ring-1 ring-hairline" />
      ) : null}
      <p className="font-mono text-[10.5px]" style={{ color: CATEGORY_COLORS[event.category] }}>
        {t(CATEGORY_KEYS[event.category])} · {event.endYear ? formatSpan(event.year, event.endYear) : formatYear(event.year)}
      </p>
      <h3 className="mt-1 font-serif text-[20px] leading-tight text-ink">{event.title}</h3>
      <p className="mt-0.5 text-[11.5px] text-ink-muted">{event.place}</p>
      <p className="mt-2.5 text-[13px] leading-relaxed text-ink/90">{event.summary}</p>
      <a href={wikipediaArticleUrl(event.wikipediaSlug)} target="_blank" rel="noreferrer" className="mt-3 inline-block text-[12px] text-teal-chart hover:underline">
        {t("world.wikipedia")}
      </a>
    </div>
  );
}

export function WorldEventCard({ id }: { readonly id: string }) {
  const t = useT();
  const locale = useLocale();
  const data = useWorldStore((state) => state.data);
  const ensure = useWorldStore((state) => state.ensure);
  useEffect(() => ensure(locale), [ensure, locale]);
  const event = data?.events.find((entry) => entry.id === id);
  const route = data?.routes.find((entry) => entry.id === id);
  if (event) return <EventBody event={event} />;
  if (!route) return <p className="py-2 text-[12px] text-ink-muted">…</p>;
  return (
    <div className="pt-1">
      <p className="font-mono text-[10.5px] text-ochre-soft">
        {t("world.route")} · {formatSpan(route.startYear, route.endYear)}
      </p>
      <h3 className="mt-1 font-serif text-[20px] leading-tight text-ink">{route.name}</h3>
      <p className="mt-2.5 text-[13px] leading-relaxed text-ink/90">{route.summary}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {route.goods.map((good) => (
          <span key={good} className="rounded-full border border-hairline px-2 py-0.5 text-[11px] text-ink-muted">
            {good}
          </span>
        ))}
      </div>
      <button type="button" onClick={() => useChronosStore.getState().setYear(route.startYear)} className="mt-3 text-[12px] text-teal-chart hover:underline">
        {t("world.routeStart", { year: formatYear(route.startYear) })}
      </button>
    </div>
  );
}
