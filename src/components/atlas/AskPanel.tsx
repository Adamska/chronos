"use client";

import { type FormEvent, useState } from "react";
import { answerOffline } from "@/ai/askOffline";
import { type AskEvent, type AskResponse, AskResponseSchema } from "@/ai/askSchema";
import { useChronosStore } from "@/store/useChronosStore";

const SUGGESTIONS = ["Why did this route matter?", "Which mountains shaped this story?", "Where did the sea make the difference?"];

export function AskPanel() {
  const campaign = useChronosStore((state) => state.campaign);
  const [question, setQuestion] = useState("");
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<AskResponse | null>(null);

  if (!campaign) return null;

  const events: AskEvent[] = campaign.events.slice(0, 30).map((event) => ({
    id: event.id,
    title: event.title,
    year: event.year,
    place: event.place,
    coordinates: [event.coordinates[0], event.coordinates[1]],
    summary: event.summary.slice(0, 600),
    whyHere: event.whyHere.slice(0, 600),
  }));

  const apply = (response: AskResponse) => {
    setResult(response);
    const store = useChronosStore.getState();
    if (response.focus) {
      store.requestCamera({
        id: "answer",
        year: store.year,
        title: "Answer",
        caption: response.answer,
        target: [response.focus.lon, response.focus.lat],
        altitude: Math.min(2.2, Math.max(0.8, response.focus.altitude)),
        tilt: 20,
      });
    }
  };

  const submit = async (event?: FormEvent, override?: string) => {
    event?.preventDefault();
    const text = (override ?? question).trim();
    if (text.length < 3 || pending) return;
    setQuestion(text);
    setPending(true);
    try {
      const response = await fetch("/api/chronicle/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, campaignTitle: campaign.title, events }),
      });
      const parsed = AskResponseSchema.safeParse(await response.json());
      apply(parsed.success ? parsed.data : answerOffline(text, events));
    } catch {
      apply(answerOffline(text, events));
    } finally {
      setPending(false);
    }
  };

  const related = result?.eventIds.map((id) => campaign.events.find((entry) => entry.id === id)).filter((entry) => entry !== undefined) ?? [];

  return (
    <section aria-label="Ask about this map" className="glass-panel pointer-events-auto rounded-2xl px-4 py-3">
      <h2 className="eyebrow mb-2">Ask about this map</h2>
      <form onSubmit={(event) => void submit(event)} className="flex gap-2">
        <input
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Why didn't the Portuguese take Aden?"
          aria-label="Your question"
          className="min-w-0 flex-1 rounded-lg border border-hairline bg-abyss/60 px-3 py-1.5 text-[12.5px] text-ink outline-none placeholder:text-ink-faint focus:border-ochre/50"
        />
        <button type="submit" disabled={pending} className="rounded-lg bg-ochre/15 px-3 text-[12px] text-ochre-soft transition hover:bg-ochre/25 disabled:opacity-50">
          {pending ? "…" : "Ask"}
        </button>
      </form>
      {!result ? (
        <div className="mt-2 flex flex-wrap gap-1">
          {SUGGESTIONS.map((suggestion) => (
            <button key={suggestion} type="button" onClick={() => void submit(undefined, suggestion)} className="rounded-full border border-hairline px-2 py-0.5 text-[11px] text-ink-muted hover:text-ink">
              {suggestion}
            </button>
          ))}
        </div>
      ) : (
        <div aria-live="polite" className="mt-3">
          <p className="font-serif text-[14px] leading-snug text-ink">{result.answer}</p>
          {related.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1">
              {related.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => useChronosStore.getState().focusEvent(event.id)}
                  className="rounded-full border border-ochre/30 px-2 py-0.5 text-[11px] text-ochre-soft hover:bg-ochre/10"
                >
                  {event.title}
                </button>
              ))}
            </div>
          ) : null}
          <p className="mt-2 font-mono text-[10px] text-ink-faint">{result.mode === "generated" ? "Answered by the AI director" : "Answered from the chronicle offline"}</p>
        </div>
      )}
    </section>
  );
}
