import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatYear } from "@/data/campaigns/registry";
import { findLibraryCampaign } from "@/data/library";
import { readChallenge, readResults } from "@/server/classroomStore";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Class results · Chronos", robots: { index: false } };

export default async function ClassResults({ params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code.toUpperCase();
  const challenge = await readChallenge(code);
  if (!challenge) notFound();
  const results = [...(await readResults(code))].sort((a, b) => b.score - a.score);
  const campaign = findLibraryCampaign(challenge.campaignId);
  const events = challenge.eventIds.map((id) => campaign?.events.find((event) => event.id === id)).filter((event) => event !== undefined);
  const averages = events.map((event) => {
    const rounds = results.flatMap((result) => result.rounds.filter((round) => round.eventId === event.id));
    return { event, average: rounds.length ? rounds.reduce((sum, round) => sum + round.distanceKm, 0) / rounds.length : null };
  });

  return (
    <main className="classroom-sheet mx-auto max-w-[46rem] px-8 py-10 font-serif text-[#1d1b17]">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b665c]">Class challenge {code} · {challenge.difficulty}</p>
      <h1 className="mt-2 text-[34px] leading-tight">{challenge.title}</h1>
      <p className="mt-1 font-sans text-[14px] text-[#4a463e]">{campaign?.title ?? challenge.campaignId} · {results.length} submissions</p>

      <h2 className="mt-8 text-[22px]">Scores</h2>
      <table className="mt-3 w-full font-sans text-[13px]">
        <thead>
          <tr className="border-b border-[#1d1b17] text-left">
            <th className="py-1.5">#</th>
            <th>Name</th>
            <th className="text-right">Score</th>
            <th className="text-right">Submitted</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={`${result.name}-${result.submittedAt}`} className="border-b border-dotted border-[#cfc6b0]">
              <td className="py-1.5">{index + 1}</td>
              <td>{result.name}</td>
              <td className="text-right font-mono">{result.score}</td>
              <td className="text-right font-mono text-[11px] text-[#6b665c]">{result.submittedAt.slice(0, 16).replace("T", " ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {results.length === 0 ? <p className="mt-3 font-sans text-[13px] text-[#6b665c]">No submissions yet. Share the link /?class={code} with your students.</p> : null}

      <h2 className="mt-10 text-[22px]">Where the class went wrong</h2>
      <ul className="mt-3 space-y-2 font-sans text-[13px]">
        {averages.map(({ event, average }) => (
          <li key={event.id} className="flex justify-between gap-4 border-b border-dotted border-[#cfc6b0] py-1">
            <span>
              {event.title} <span className="text-[#6b665c]">({formatYear(event.year)}, {event.place.split(",")[0]})</span>
            </span>
            <span className="shrink-0 font-mono">{average === null ? "—" : `${Math.round(average).toLocaleString("en-US")} km`}</span>
          </li>
        ))}
      </ul>
      <p className="mt-10 font-sans text-[11px] text-[#6b665c]">Results are kept for 90 days.</p>
    </main>
  );
}
