"use client";

import { type LabelKind, combineLabels, labelNodes, labelsFor, polityLabelsFor } from "@/scene/labelModel";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import { usePolityStore } from "@/store/usePolityStore";

const KIND_CLASS: Record<LabelKind, string> = {
  event: "tracking-[0.01em] text-ink hover:text-ochre-soft cursor-pointer",
  territory: "font-mono text-[9.5px] uppercase tracking-[0.24em] text-ink/60",
  chokepoint: "font-serif text-[11.5px] italic text-teal-chart/85",
  city: "font-mono text-[10px] tracking-[0.06em] text-ink/75",
  polity: "font-serif text-[12px] uppercase tracking-[0.22em] text-[#e9dcc0]/70",
};

const EVENT_SIZE: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "text-[10.5px] text-ink/70",
  2: "text-[10.5px] text-ink/80",
  3: "text-[11px] font-medium",
  4: "text-[12px] font-medium",
  5: "text-[13px] font-semibold",
};

const LEADER_KINDS = new Set<LabelKind>(["event", "city"]);

export function LabelOverlay() {
  const campaign = useChronosStore((state) => state.campaign);
  const select = useChronosStore((state) => state.select);
  const withCities = useAtlasStore((state) => state.showCities);
  const polities = usePolityStore((state) => state.labels);
  const labels = combineLabels(labelsFor(campaign, withCities), polityLabelsFor(polities));

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden>
      {labels.map((label) => (
        <div
          key={label.id}
          ref={(node) => {
            if (node) labelNodes.set(label.id, node);
            else labelNodes.delete(label.id);
          }}
          className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 will-change-transform"
          style={{ pointerEvents: "none" }}
          onClick={() => label.event && select({ kind: "event", id: label.event.id })}
        >
          <div className={`relative flex -translate-y-1/2 items-center gap-1.5 whitespace-nowrap pl-4 [text-shadow:0_1px_8px_rgb(0_0_0/0.95)] ${KIND_CLASS[label.kind]} ${label.event ? EVENT_SIZE[label.event.significance] : ""}`}>
            {LEADER_KINDS.has(label.kind) ? <span aria-hidden className="absolute left-0 top-1/2 h-px w-3 bg-current opacity-45" /> : null}
            {label.kind === "chokepoint" ? <span className="block size-1 rotate-45 bg-teal-chart/80" /> : null}
            {label.text}
          </div>
        </div>
      ))}
    </div>
  );
}
