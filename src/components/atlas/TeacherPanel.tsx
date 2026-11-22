"use client";

import { useState } from "react";
import { z } from "zod";
import { formatYear } from "@/data/campaigns/registry";
import type { Difficulty } from "@/store/useChallengeStore";
import { useChronosStore } from "@/store/useChronosStore";

const CreatedSchema = z.object({ code: z.string() });
const ErrorSchema = z.object({ error: z.string() });

export function TeacherPanel() {
  const campaign = useChronosStore((state) => state.campaign);
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("normal");
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  if (!campaign) return null;

  const toggle = (id: string) => setSelected((current) => (current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id].slice(0, 10)));
  const create = async () => {
    setError(null);
    const response = await fetch("/api/classroom/challenges", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ campaignId: campaign.id, title: title || campaign.title, difficulty, eventIds: selected }),
    });
    const body: unknown = await response.json();
    const created = CreatedSchema.safeParse(body);
    if (response.ok && created.success) setCode(created.data.code);
    else setError(ErrorSchema.safeParse(body).data?.error ?? "The challenge could not be created.");
  };

  if (code) {
    const studentLink = `${window.location.origin}/?class=${code}`;
    return (
      <section aria-label="Class challenge created" className="glass-panel pointer-events-auto rounded-2xl px-4 py-3">
        <h2 className="eyebrow">Class challenge ready</h2>
        <p className="mt-2 font-mono text-[28px] tracking-[0.2em] text-ochre-soft">{code}</p>
        <p className="mt-2 text-[12px] text-ink/85">Students open this link and play the same {selected.length} places:</p>
        <p className="mt-1 break-all font-mono text-[11px] text-ink">{studentLink}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={() => void navigator.clipboard?.writeText(studentLink)} className="rounded-full bg-ochre/15 px-3 py-1 text-[12px] text-ochre-soft hover:bg-ochre/25">
            Copy student link
          </button>
          <a href={`/classroom/results/${code}`} target="_blank" rel="noreferrer" className="rounded-full border border-hairline px-3 py-1 text-[12px] text-ink-muted hover:text-ink">
            Open results
          </a>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Create a class challenge" className="glass-panel pointer-events-auto flex max-h-[60vh] flex-col rounded-2xl">
      <header className="border-b border-hairline px-4 py-3">
        <h2 className="eyebrow">Create a class challenge</h2>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder={campaign.title}
          aria-label="Challenge title"
          className="mt-2 w-full rounded-lg border border-hairline bg-abyss/60 px-3 py-1.5 text-[12.5px] text-ink outline-none focus:border-ochre/50"
        />
        <div className="mt-2 flex gap-1 text-[11px]" role="group" aria-label="Difficulty">
          {(["easy", "normal", "hard"] as const).map((value) => (
            <button key={value} type="button" aria-pressed={difficulty === value} onClick={() => setDifficulty(value)} className={`rounded-full border px-2.5 py-0.5 capitalize ${difficulty === value ? "border-ochre/50 text-ochre-soft" : "border-hairline text-ink-muted"}`}>
              {value}
            </button>
          ))}
        </div>
      </header>
      <ul className="scrollbar-quiet overflow-y-auto p-2">
        {campaign.events.map((event) => (
          <li key={event.id}>
            <label className="flex cursor-pointer items-start gap-2.5 rounded-xl px-2 py-1.5 hover:bg-white/[0.05]">
              <input type="checkbox" checked={selected.includes(event.id)} onChange={() => toggle(event.id)} className="mt-1 accent-[#d9a441]" />
              <span className="min-w-0">
                <span className="block text-[12.5px] text-ink">{event.title}</span>
                <span className="block font-mono text-[10px] text-ink-muted">{formatYear(event.year)}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>
      <footer className="flex items-center justify-between gap-3 border-t border-hairline px-4 py-2.5">
        <span className={`text-[11px] ${error ? "text-vermilion" : "text-ink-muted"}`}>{error ?? `${selected.length} of 3–10 places selected`}</span>
        <button type="button" disabled={selected.length < 3} onClick={() => void create()} className="rounded-full bg-ochre/15 px-3 py-1 text-[12px] text-ochre-soft enabled:hover:bg-ochre/25 disabled:opacity-40">
          Create
        </button>
      </footer>
    </section>
  );
}
