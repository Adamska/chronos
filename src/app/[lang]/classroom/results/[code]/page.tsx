import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatYear } from "@/data/campaigns/registry";
import { findLibraryCampaign } from "@/data/library";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import { FR_TRANSLATIONS } from "@/i18n/content/fr";
import { dictionaries, interpolate, numberTag, pluralForm } from "@/i18n/dictionaries";
import { localizeCampaign } from "@/i18n/localize";
import { readChallenge, readResults } from "@/server/classroomStore";

type Params = Promise<{ lang: string; code: string }>;

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  return { title: dictionaries[isLocale(lang) ? lang : DEFAULT_LOCALE]["results.meta.title"], robots: { index: false } };
}

export default async function ClassResults({ params }: { params: Params }) {
  const { lang, code: rawCode } = await params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const dictionary = dictionaries[locale];
  const code = rawCode.toUpperCase();
  const challenge = await readChallenge(code);
  if (!challenge) notFound();
  const results = [...(await readResults(code))].sort((a, b) => b.score - a.score);
  const source = findLibraryCampaign(challenge.campaignId);
  const translation = source && locale === "fr" ? await FR_TRANSLATIONS[source.id]?.().catch(() => null) : null;
  const campaign = source ? localizeCampaign(source, translation ?? null) : undefined;
  const events = challenge.eventIds.map((id) => campaign?.events.find((event) => event.id === id)).filter((event) => event !== undefined);
  const averages = events.map((event) => {
    const rounds = results.flatMap((result) => result.rounds.filter((round) => round.eventId === event.id));
    return { event, average: rounds.length ? rounds.reduce((sum, round) => sum + round.distanceKm, 0) / rounds.length : null };
  });
  const difficulty = interpolate(dictionary, `difficulty.${challenge.difficulty}`).toLowerCase();
  const submissions = interpolate(dictionary, `results.submissions.${pluralForm(results.length, locale)}`, {
    title: campaign?.title ?? challenge.campaignId,
    count: results.length,
  });

  return (
    <main className="classroom-sheet mx-auto max-w-[46rem] px-8 py-10 font-serif text-[#1d1b17]">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b665c]">{interpolate(dictionary, "results.eyebrow", { code, difficulty })}</p>
      <h1 className="mt-2 text-[34px] leading-tight">{challenge.title}</h1>
      <p className="mt-1 font-sans text-[14px] text-[#4a463e]">{submissions}</p>

      <h2 className="mt-8 text-[22px]">{dictionary["results.scores"]}</h2>
      <table className="mt-3 w-full font-sans text-[13px]">
        <thead>
          <tr className="border-b border-[#1d1b17] text-left">
            <th className="py-1.5">#</th>
            <th>{dictionary["results.name"]}</th>
            <th className="text-right">{dictionary["results.score"]}</th>
            <th className="text-right">{dictionary["results.submitted"]}</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={`${result.name}-${result.submittedAt}`} className="border-b border-dotted border-[#cfc6b0]">
              <td className="py-1.5">{index + 1}</td>
              <td>{result.name}</td>
              <td className="text-right font-mono">{result.score.toLocaleString(numberTag(locale))}</td>
              <td className="text-right font-mono text-[11px] text-[#6b665c]">{result.submittedAt.slice(0, 16).replace("T", " ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {results.length === 0 ? (
        <p className="mt-3 font-sans text-[13px] text-[#6b665c]">{interpolate(dictionary, "results.empty", { link: `/${locale}/?class=${code}` })}</p>
      ) : null}

      <h2 className="mt-10 text-[22px]">{dictionary["results.wrong"]}</h2>
      <ul className="mt-3 space-y-2 font-sans text-[13px]">
        {averages.map(({ event, average }) => (
          <li key={event.id} className="flex justify-between gap-4 border-b border-dotted border-[#cfc6b0] py-1">
            <span>
              {event.title}{" "}
              <span className="text-[#6b665c]">
                ({formatYear(event.year, locale)}, {event.place.split(",")[0]})
              </span>
            </span>
            <span className="shrink-0 font-mono">{average === null ? "—" : `${Math.round(average).toLocaleString(numberTag(locale))}${locale === "fr" ? "\u00a0" : " "}km`}</span>
          </li>
        ))}
      </ul>
      <p className="mt-10 font-sans text-[11px] text-[#6b665c]">{dictionary["results.retention"]}</p>
    </main>
  );
}
