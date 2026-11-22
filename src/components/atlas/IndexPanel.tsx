"use client";

import { formatYear } from "@/data/campaigns/registry";
import { LAYER_COLORS } from "@/scene/temporal";
import { useChronosStore } from "@/store/useChronosStore";
import { LAYER_LABELS } from "@/types/chronicle";

export function IndexPanel() {
  const campaign = useChronosStore((state) => state.campaign);
  const selection = useChronosStore((state) => state.selection);
  const focusEvent = useChronosStore((state) => state.focusEvent);
  if (!campaign) return null;

  return (
    <section aria-label={`Events in ${campaign.title}`} className="glass-panel pointer-events-auto flex max-h-[60vh] flex-col rounded-2xl">
      <header className="border-b border-hairline px-4 py-3">
        <h2 className="eyebrow">Event index</h2>
        <p className="mt-1 text-[12.5px] text-ink/85">{campaign.events.length} events in chronological order</p>
      </header>
      <ol className="scrollbar-quiet overflow-y-auto p-2">
        {campaign.events.map((event) => {
          const selected = selection?.kind === "event" && selection.id === event.id;
          return (
            <li key={event.id}>
              <button
                type="button"
                aria-current={selected ? "true" : undefined}
                onClick={() => focusEvent(event.id)}
                className={`flex w-full items-start gap-2.5 rounded-xl px-2 py-1.5 text-left transition hover:bg-white/[0.05] focus-visible:bg-white/[0.08] ${
                  selected ? "bg-ochre/10" : ""
                }`}
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full" style={{ background: LAYER_COLORS[event.layer] }} aria-hidden />
                <span className="min-w-0">
                  <span className="block text-[12.5px] leading-snug text-ink">{event.title}</span>
                  <span className="block font-mono text-[10px] text-ink-muted">
                    {formatYear(event.year)} · {event.place.split(",")[0]} · <span className="sr-only">{LAYER_LABELS[event.layer]}</span>
                    {"•".repeat(event.significance)}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <p className="border-t border-hairline px-4 py-2 font-mono text-[10px] text-ink-faint">[ and ] step through events · space plays</p>
    </section>
  );
}
