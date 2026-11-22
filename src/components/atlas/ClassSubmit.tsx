"use client";

import { type FormEvent, useState } from "react";
import type { ChallengeResult } from "@/store/useChallengeStore";

export function ClassSubmit({ code, results }: { readonly code: string; readonly results: readonly ChallengeResult[] }) {
  const [name, setName] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || state === "sending") return;
    setState("sending");
    const response = await fetch(`/api/classroom/challenges/${code}/results`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        score: results.reduce((sum, result) => sum + result.points, 0),
        rounds: results.map((result) => ({ eventId: result.event.id, distanceKm: Math.round(result.distanceKm), points: result.points })),
      }),
    }).catch(() => null);
    setState(response?.ok ? "sent" : "failed");
  };

  if (state === "sent") return <p className="mt-3 text-[12px] text-teal-chart">Sent to class {code}. Your teacher can see your score.</p>;
  return (
    <form onSubmit={(event) => void submit(event)} className="mt-3 flex gap-2">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your name"
        aria-label="Your name for the class results"
        maxLength={40}
        className="min-w-0 flex-1 rounded-lg border border-hairline bg-abyss/60 px-3 py-1.5 text-[12.5px] text-ink outline-none focus:border-ochre/50"
      />
      <button type="submit" disabled={!name.trim() || state === "sending"} className="rounded-full bg-ochre/15 px-3 text-[12px] text-ochre-soft enabled:hover:bg-ochre/25 disabled:opacity-40">
        {state === "failed" ? "Retry" : `Send to class ${code}`}
      </button>
    </form>
  );
}
