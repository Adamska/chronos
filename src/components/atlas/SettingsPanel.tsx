"use client";

import { useShareLink } from "@/components/atlas/useShareLink";
import { useT } from "@/i18n/I18nProvider";
import { type QualityTier, useQualityStore } from "@/scene/quality";
import { useAtlasStore } from "@/store/useAtlasStore";

const TIERS: readonly (QualityTier | "auto")[] = ["auto", "high", "balanced", "low"];

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
  const ambientSound = useAtlasStore((state) => state.ambientSound);
  const setAmbientSound = useAtlasStore((state) => state.setAmbientSound);
  const requestPoster = useAtlasStore((state) => state.requestPoster);
  const share = useShareLink();
  const t = useT();

  return (
    <section aria-label={t("rail.settings.label")} className="glass-panel pointer-events-auto rounded-2xl px-4 py-3">
      <h2 className="eyebrow mb-2">{t("rail.settings.label")}</h2>
      <p className="text-[12.5px] text-ink">{t("settings.quality")}</p>
      <div className="mt-1.5 grid grid-cols-4 gap-1 rounded-full bg-white/[0.04] p-0.5 text-[11px]">
        {TIERS.map((option) => {
          const active = option === "auto" ? !pinned : pinned && tier === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => pin(option === "auto" ? null : option)}
              className={`rounded-full px-2 py-1 transition ${active ? "bg-white/10 text-ink" : "text-ink-muted hover:text-ink"}`}
            >
              {t(`settings.tier.${option}`)}
            </button>
          );
        })}
      </div>
      <p className="mt-1.5 text-[11px] text-ink-muted">
        {t(`settings.current.${tier}`)}
        {pinned ? "" : t("settings.adaptive")}.
      </p>
      <div className="mt-2 divide-y divide-white/[0.06] border-t border-hairline">
        <Toggle label={t("settings.motion.label")} hint={t("settings.motion.hint")} checked={reducedMotion} onChange={setReducedMotion} />
        <Toggle label={t("settings.sound.label")} hint={t("settings.sound.hint")} checked={ambientSound} onChange={setAmbientSound} />
        {speechAvailable ? (
          <Toggle label={t("settings.narration.label")} hint={t("settings.narration.hint")} checked={narration} onChange={setNarration} />
        ) : null}
      </div>
      <div className="mt-2 flex flex-wrap gap-2 border-t border-hairline pt-3 text-[11.5px]">
        <button type="button" onClick={share.copy} className="rounded-full border border-hairline px-3 py-1 text-ink-muted hover:text-ink">
          {share.copied ? t("rail.share.copied") : t("rail.share.label")}
        </button>
        <button type="button" onClick={requestPoster} className="rounded-full border border-hairline px-3 py-1 text-ink-muted hover:text-ink">
          {t("rail.poster.label")}
        </button>
      </div>
    </section>
  );
}
