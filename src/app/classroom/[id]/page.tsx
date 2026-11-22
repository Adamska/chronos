import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "@/app/classroom/[id]/PrintButton";
import { eraLabel, formatSpan, formatYear } from "@/data/campaigns/registry";
import { LIBRARY, findLibraryCampaign } from "@/data/library";
import type { HistoricalEvent, LayerKind } from "@/types/chronicle";

const QUESTIONS: Record<LayerKind, (event: HistoricalEvent) => string> = {
  borders: (event) => `Which natural boundaries — rivers, mountains, deserts or seas — helped decide who controlled ${event.place.split(",")[0]}?`,
  trade: (event) => `What made ${event.place.split(",")[0]} a natural meeting point for goods? What would change if this route were cut?`,
  conflict: (event) => `How did the terrain and distances around ${event.place.split(",")[0]} shape the outcome of “${event.title}”?`,
  science: (event) => `Why might new ideas have gathered at ${event.place.split(",")[0]} rather than elsewhere in the region?`,
};

export function generateStaticParams() {
  return LIBRARY.map((campaign) => ({ id: campaign.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const campaign = findLibraryCampaign((await params).id);
  return { title: campaign ? `${campaign.title} — Classroom sheet · Chronos` : "Classroom sheet · Chronos" };
}

const coordinates = ([lon, lat]: readonly [number, number]) =>
  `${Math.abs(lat).toFixed(1)}°${lat >= 0 ? "N" : "S"}, ${Math.abs(lon).toFixed(1)}°${lon >= 0 ? "E" : "W"}`;

export default async function ClassroomSheet({ params }: { params: Promise<{ id: string }> }) {
  const campaign = findLibraryCampaign((await params).id);
  if (!campaign) notFound();
  const steps = campaign.chapters
    .map((chapter) => ({ chapter, event: campaign.events.find((entry) => entry.id === chapter.eventId) }))
    .filter((step): step is { chapter: (typeof campaign.chapters)[number]; event: HistoricalEvent } => step.event !== undefined);
  const places = [...steps].sort((a, b) => a.event.place.localeCompare(b.event.place));

  return (
    <main className="classroom-sheet mx-auto max-w-[46rem] px-8 py-10 font-serif text-[#1d1b17]">
      <div className="no-print mb-8 flex items-center justify-between font-sans text-[12px]">
        <Link href={`/#c=${campaign.id}`} className="text-[#8a5a12] underline-offset-2 hover:underline">
          Open in the atlas
        </Link>
        <PrintButton />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b665c]">Chronos classroom sheet · {formatSpan(campaign.startYear, campaign.endYear)}</p>
      <h1 className="mt-2 text-[34px] leading-tight">{campaign.title}</h1>
      <p className="mt-1 font-sans text-[14px] text-[#4a463e]">{campaign.subtitle}</p>
      <p className="mt-4 text-[16px] leading-relaxed">{campaign.summary}</p>

      <ol className="mt-8 space-y-7">
        {steps.map(({ chapter, event }, index) => (
          <li key={chapter.id} className="break-inside-avoid border-t border-[#d8d0bd] pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b665c]">
              {index + 1} · {formatYear(event.year)} · {eraLabel(event.year)} · {coordinates(event.coordinates)}
            </p>
            <h2 className="mt-1 text-[22px] leading-snug">{chapter.title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed">{event.summary}</p>
            <p className="mt-3 border-l-2 border-[#c9952f] pl-3 text-[15px] italic leading-relaxed">Why here? {event.whyHere}</p>
            <p className="mt-3 font-sans text-[13px] leading-relaxed text-[#3a362f]">
              <span className="font-semibold">Discuss: </span>
              {QUESTIONS[event.layer](event)}
            </p>
          </li>
        ))}
      </ol>

      <section className="mt-10 break-inside-avoid border-t-2 border-[#1d1b17] pt-5">
        <h2 className="text-[22px]">Map exercise</h2>
        <p className="mt-1 font-sans text-[13px] text-[#3a362f]">
          Mark each place on a blank world map, number them in chronological order, then draw the routes that connect them.
        </p>
        <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 font-sans text-[13px]">
          {places.map(({ event }) => (
            <li key={event.id} className="border-b border-dotted border-[#cfc6b0] py-1">
              {event.place.split(",")[0]}
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-10 font-sans text-[11px] text-[#6b665c]">Dates marked as approximate or debated in the atlas reflect genuine scholarly uncertainty.</p>
    </main>
  );
}
