"use client";

import { type QualityTier, useQualityStore } from "@/scene/quality";
import { useAtlasStore } from "@/store/useAtlasStore";

const TIERS: readonly { readonly id: QualityTier | "auto"; readonly label: string }[] = [
  { id: "auto", label: "Auto" },
  { id: "high", label: "High" },
  { id: "balanced", label: "Balanced" },
  { id: "low", label: "Battery" },
];

function Toggle({ label, hint, checked, onChange }: { label: string; hint: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 py-2">
      <span>
        <span className="block text-[12.5px] text-ink">{label}</span>
        <span className="block text-[11px] text-ink-muted">{hint}</span>
      </span>
      <input type="checkbox" className="mt-1 size-4 accent-[#d9a441]" checked={checked} onChange={(event) => onChange(event.target.checked)} />
    </label>
  );
}

export function SettingsPanel() {
  const tier = useQualityStore((state) => state.tier);
  const pinned = useQualityStore((state) => state.pinned);
  const pin = useQualityStore((state) => state.pin);
  const reducedMotion = useAtlasStore((state) => state.reducedMotion);
  const setReducedMotion = useAtlasStore((state) => state.setReducedMotion);
  const narration = useAtlasStore((state) => state.narration);
  const setNarration = useAtlasStore((state) => state.setNarration);
  const speechAvailable = typeof window !== "undefined" && "speechSynthesis" in window;

  return (
    <section aria-label="Display and accessibility" className="glass-panel pointer-events-auto rounded-2xl px-4 py-3">
      <h2 className="eyebrow mb-2">Display and accessibility</h2>
      <p className="text-[12.5px] text-ink">Rendering quality</p>
      <div className="mt-1.5 grid grid-cols-4 gap-1 rounded-full bg-white/[0.04] p-0.5 text-[11px]">
        {TIERS.map((option) => {
          const active = option.id === "auto" ? !pinned : pinned && tier === option.id;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => pin(option.id === "auto" ? null : option.id)}
              className={`rounded-full px-2 py-1 transition ${active ? "bg-white/10 text-ink" : "text-ink-muted hover:text-ink"}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      <p className="mt-1.5 text-[11px] text-ink-muted">Currently rendering at {tier} quality{pinned ? "" : ", adjusted to your device's frame rate"}.</p>
      <div className="mt-2 divide-y divide-white/[0.06] border-t border-hairline">
        <Toggle label="Reduce motion" hint="Cut camera flights and keep the globe still between chapters." checked={reducedMotion} onChange={setReducedMotion} />
        {speechAvailable ? (
          <Toggle label="Narrate tours" hint="Read chapter captions aloud with your system voice." checked={narration} onChange={setNarration} />
        ) : null}
      </div>
    </section>
  );
}
