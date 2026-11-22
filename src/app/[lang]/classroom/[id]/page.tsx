import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "@/app/[lang]/classroom/[id]/PrintButton";
import { eraLabel, formatSpan, formatYear } from "@/data/campaigns/registry";
import { LIBRARY, findLibraryCampaign } from "@/data/library";
import { DEFAULT_LOCALE, type Locale, isLocale } from "@/i18n/config";
import { FR_TRANSLATIONS } from "@/i18n/content/fr";
import { type Dictionary, dictionaries, interpolate } from "@/i18n/dictionaries";
import { localizeCampaign } from "@/i18n/localize";
import type { ChronicleCampaign, HistoricalEvent, LonLat } from "@/types/chronicle";

type Params = Promise<{ lang: string; id: string }>;

const shortPlace = (event: HistoricalEvent) => event.place.split(",")[0] ?? event.place;

function question(dictionary: Dictionary, event: HistoricalEvent): string {
  return interpolate(dictionary, `classroom.question.${event.layer}`, { place: shortPlace(event), title: event.title });
}

async function loadSheet(lang: string, id: string): Promise<{ readonly locale: Locale; readonly campaign: ChronicleCampaign | undefined }> {
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const campaign = findLibraryCampaign(id);
  if (!campaign || locale === "en") return { locale, campaign };
  const translation = await FR_TRANSLATIONS[id]?.().catch(() => null);
  return { locale, campaign: localizeCampaign(campaign, translation ?? null) };
}

export function generateStaticParams() {
  return LIBRARY.map((campaign) => ({ id: campaign.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, id } = await params;
  const { locale, campaign } = await loadSheet(lang, id);
  const dictionary = dictionaries[locale];
  return { title: campaign ? interpolate(dictionary, "classroom.meta.title", { title: campaign.title }) : dictionary["classroom.meta.fallback"] };
}

function coordinates([lon, lat]: LonLat, dictionary: Dictionary): string {
  const latitude = `${Math.abs(lat).toFixed(1)}°${dictionary[lat >= 0 ? "compass.n" : "compass.s"]}`;
  return `${latitude}, ${Math.abs(lon).toFixed(1)}°${dictionary[lon >= 0 ? "compass.e" : "compass.w"]}`;
}

export default async function ClassroomSheet({ params }: { params: Params }) {
  const { lang, id } = await params;
  const { locale, campaign } = await loadSheet(lang, id);
  if (!campaign) notFound();
  const dictionary = dictionaries[locale];
  const steps = campaign.chapters
    .map((chapter) => ({ chapter, event: campaign.events.find((entry) => entry.id === chapter.eventId) }))
    .filter((step): step is { chapter: (typeof campaign.chapters)[number]; event: HistoricalEvent } => step.event !== undefined);
  const places = [...steps].sort((a, b) => a.event.place.localeCompare(b.event.place, locale));

  return (
    <main className="classroom-sheet mx-auto max-w-[46rem] px-8 py-10 font-serif text-[#1d1b17]">
      <div className="no-print mb-8 flex items-center justify-between font-sans text-[12px]">
        <Link href={`/${locale}?c=${campaign.id}`} className="text-[#8a5a12] underline-offset-2 hover:underline">
          {dictionary["classroom.open"]}
        </Link>
        <PrintButton />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b665c]">
        {interpolate(dictionary, "classroom.eyebrow", { span: formatSpan(campaign.startYear, campaign.endYear, locale) })}
      </p>
      <h1 className="mt-2 text-[34px] leading-tight">{campaign.title}</h1>
      <p className="mt-1 font-sans text-[14px] text-[#4a463e]">{campaign.subtitle}</p>
      <p className="mt-4 text-[16px] leading-relaxed">{campaign.summary}</p>

      <ol className="mt-8 space-y-7">
        {steps.map(({ chapter, event }, index) => (
          <li key={chapter.id} className="break-inside-avoid border-t border-[#d8d0bd] pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b665c]">
              {index + 1} · {formatYear(event.year, locale)} · {eraLabel(event.year, locale)} · {coordinates(event.coordinates, dictionary)}
            </p>
            <h2 className="mt-1 text-[22px] leading-snug">{chapter.title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed">{event.summary}</p>
            <p className="mt-3 border-l-2 border-[#c9952f] pl-3 text-[15px] italic leading-relaxed">
              {dictionary["classroom.whyHere"]} {event.whyHere}
            </p>
            <p className="mt-3 font-sans text-[13px] leading-relaxed text-[#3a362f]">
              <span className="font-semibold">{dictionary["classroom.discuss"]} </span>
              {question(dictionary, event)}
            </p>
          </li>
        ))}
      </ol>

      <section className="mt-10 break-inside-avoid border-t-2 border-[#1d1b17] pt-5">
        <h2 className="text-[22px]">{dictionary["classroom.map.title"]}</h2>
        <p className="mt-1 font-sans text-[13px] text-[#3a362f]">{dictionary["classroom.map.body"]}</p>
        <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 font-sans text-[13px]">
          {places.map(({ event }) => (
            <li key={event.id} className="border-b border-dotted border-[#cfc6b0] py-1">
              {shortPlace(event)}
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-10 font-sans text-[11px] text-[#6b665c]">{dictionary["classroom.footer"]}</p>
    </main>
  );
}
