"use client";

import { type LabelKind, labelNodes, labelsFor } from "@/scene/labelModel";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const KIND_CLASS: Record<LabelKind, string> = {
  event: "text-[11px] font-medium tracking-[0.01em] text-ink hover:text-ochre-soft cursor-pointer",
  territory: "font-mono text-[9.5px] uppercase tracking-[0.24em] text-ink/60",
  chokepoint: "font-serif text-[11.5px] italic text-teal-chart/85",
  city: "font-mono text-[10px] tracking-[0.06em] text-ink/75",
};

export function LabelOverlay() {
  const campaign = useChronosStore((state) => state.campaign);
  const select = useChronosStore((state) => state.select);
  const withCities = useAtlasStore((state) => state.showCities);
  const labels = labelsFor(campaign, withCities);

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
          <div className={`flex -translate-y-1/2 items-center gap-1.5 whitespace-nowrap pl-3.5 [text-shadow:0_1px_8px_rgb(0_0_0/0.95)] ${KIND_CLASS[label.kind]}`}>
            {label.kind === "chokepoint" ? <span className="block size-1 rotate-45 bg-teal-chart/80" /> : null}
            {label.text}
          </div>
        </div>
      ))}
    </div>
  );
}
