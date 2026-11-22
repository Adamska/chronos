"use client";

import { useT } from "@/i18n/I18nProvider";
import { LAYER_COLORS } from "@/scene/temporal";
import { useChronosStore } from "@/store/useChronosStore";
import { LAYER_KINDS } from "@/types/chronicle";

export function LayerToggles() {
  const t = useT();
  const layers = useChronosStore((state) => state.layers);
  const toggleLayer = useChronosStore((state) => state.toggleLayer);
  const campaign = useChronosStore((state) => state.campaign);

  return (
    <div className="ml-auto flex shrink-0 items-center justify-end gap-1 sm:flex-wrap sm:gap-1.5" role="group" aria-label={t("layers.group")}>
      {LAYER_KINDS.map((layer) => {
        const count = layer === "borders"
          ? (campaign?.territories.length ?? 0) + (campaign?.events.filter((event) => event.layer === layer).length ?? 0)
          : (campaign?.events.filter((event) => event.layer === layer).length ?? 0) + (campaign?.arcs.filter((arc) => arc.layer === layer).length ?? 0);
        const active = layers[layer];
        return (
          <button
            key={layer}
            type="button"
            aria-pressed={active}
            onClick={() => toggleLayer(layer)}
            title={t(`layer.${layer}`)}
            className={`group flex items-center gap-1.5 rounded-full border px-2 py-1.5 text-[11px] transition sm:gap-2 sm:px-2.5 ${
              active ? "border-white/12 bg-white/[0.06] text-ink" : "border-transparent text-ink-faint hover:text-ink-muted"
            }`}
          >
            <span
              className="size-2 rounded-full transition"
              style={{ background: active ? LAYER_COLORS[layer] : "transparent", boxShadow: `inset 0 0 0 1.5px ${LAYER_COLORS[layer]}` }}
            />
            <span className="hidden xl:inline">{t(`layer.${layer}`)}</span>
            <span className="hidden sm:inline xl:hidden">{t(`layer.${layer}.short`)}</span>
            <span className="hidden font-mono text-[10px] text-ink-faint sm:inline">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
