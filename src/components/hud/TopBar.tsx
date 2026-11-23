"use client";

import type { ReactNode } from "react";
import { LanguageSwitch } from "@/components/hud/LanguageSwitch";
import { useT } from "@/i18n/I18nProvider";
import { useAtlasStore } from "@/store/useAtlasStore";
import { type AppMode, useChronosStore } from "@/store/useChronosStore";

const MODES: readonly AppMode[] = ["story", "atlas"];

export function ModeSwitch() {
  const t = useT();
  const mode = useChronosStore((state) => state.mode);
  const setMode = useChronosStore((state) => state.setMode);
  return (
    <div role="tablist" aria-label={t("mode.label")} className="glass-panel pointer-events-auto flex rounded-full p-0.5 text-[12.5px]">
      {MODES.map((entry) => (
        <button
          key={entry}
          type="button"
          role="tab"
          aria-selected={mode === entry}
          onClick={() => setMode(entry)}
          className={`rounded-full px-3.5 py-1.5 transition ${mode === entry ? "bg-ochre/15 text-ochre-soft" : "text-ink-muted hover:text-ink"}`}
        >
          {t(entry === "story" ? "mode.story" : "mode.atlas")}
        </button>
      ))}
    </div>
  );
}

function SettingsButton() {
  const t = useT();
  const open = useAtlasStore((state) => state.panel === "settings");
  const togglePanel = useAtlasStore((state) => state.togglePanel);
  return (
    <button
      type="button"
      data-outside-ignore
      aria-label={t("rail.settings.label")}
      aria-expanded={open}
      onClick={() => togglePanel("settings")}
      className={`glass-panel pointer-events-auto grid size-8 place-items-center rounded-full transition ${open ? "text-ochre-soft" : "text-ink-muted hover:text-ink"}`}
    >
      <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M2 4.5h7M12 4.5h2M2 11.5h2M7 11.5h7" strokeLinecap="round" />
        <circle cx="10.5" cy="4.5" r="1.5" />
        <circle cx="5.5" cy="11.5" r="1.5" />
      </svg>
    </button>
  );
}

export function TopBar({ search }: { readonly search?: ReactNode }) {
  const t = useT();
  return (
    <div data-hud-zone className="pointer-events-none absolute inset-x-3 top-3 z-20 flex items-center justify-between gap-3 sm:inset-x-4 sm:top-4">
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => useAtlasStore.getState().setLandingOpen(true)} className="pointer-events-auto flex items-center gap-2" aria-label={t("header.home")}>
          <span className="size-1.5 rounded-full bg-ochre shadow-[0_0_10px_2px_rgb(217_164_65/0.6)]" />
          <span className="hidden font-mono text-[11px] font-medium uppercase tracking-[0.42em] text-ink sm:inline">Chronos</span>
        </button>
        <ModeSwitch />
      </div>
      <div className="hidden md:block">{search}</div>
      <div className="flex shrink-0 items-center gap-2">
        <SettingsButton />
        <LanguageSwitch />
      </div>
    </div>
  );
}
