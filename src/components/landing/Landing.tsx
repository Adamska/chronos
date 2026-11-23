"use client";

import { useMemo, useRef, useState } from "react";
import { LanguageSwitch } from "@/components/hud/LanguageSwitch";
import { useFocusTrap } from "@/components/useFocusTrap";
import { CATALOG, type CatalogEntry, loadChronicle, localizedEntry } from "@/data/catalog";
import { formatSpan } from "@/data/campaigns/registry";
import { useLocale, useT } from "@/i18n/I18nProvider";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const SEEN_KEY = "chronos.landing.seen";

export function hasSeenLanding(): boolean {
  try {
    return window.localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberLanding(): void {
  try {
    window.localStorage.setItem(SEEN_KEY, "1");
  } catch {
    return;
  }
}

const FILTERS = ["all", "antiquity", "middle-ages", "early-modern", "modern"] as const;
type Filter = (typeof FILTERS)[number];
const FILTER_KEYS = { all: "landing.filter.all", antiquity: "era.antiquity", "middle-ages": "era.middleAges", "early-modern": "era.earlyModern", modern: "era.modern" } as const;

function eraOfEntry(entry: CatalogEntry): Exclude<Filter, "all"> {
  const middle = (entry.startYear + entry.endYear) / 2;
  if (middle < 500) return "antiquity";
  if (middle < 1450) return "middle-ages";
  if (middle < 1789) return "early-modern";
  return "modern";
}

function ChronicleCard({ entry, onOpen }: { readonly entry: CatalogEntry; readonly onOpen: (entry: CatalogEntry) => void }) {
  const t = useT();
  const era = eraOfEntry(entry);
  return (
    <button
      type="button"
      onClick={() => onOpen(entry)}
      className="group flex flex-col gap-2 rounded-xl border border-hairline bg-white/[0.03] p-3.5 text-left transition hover:border-white/20 hover:bg-white/[0.06]"
    >
      <span className="flex items-center justify-between gap-2">
        <span className="h-1 w-8 rounded-full" style={{ background: entry.accent }} />
        <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">{t(FILTER_KEYS[era])}</span>
      </span>
      <span className="font-serif text-[16px] leading-snug text-ink group-hover:text-ochre-soft">{entry.title}</span>
      <span className="line-clamp-2 text-[12px] leading-snug text-ink-muted">{entry.subtitle}</span>
      <span className="mt-auto font-mono text-[10px] text-ink-faint">{formatSpan(entry.startYear, entry.endYear)}</span>
    </button>
  );
}

export function Landing() {
  const open = useAtlasStore((state) => state.landingOpen);
  const setLandingOpen = useAtlasStore((state) => state.setLandingOpen);
  const [filter, setFilter] = useState<Filter>("all");
  const dialog = useRef<HTMLDivElement>(null);
  const t = useT();
  const locale = useLocale();
  const catalog = useMemo(() => CATALOG.map((entry) => localizedEntry(entry, locale)), [locale]);
  useFocusTrap(dialog, open);
  if (!open) return null;

  const close = () => {
    rememberLanding();
    setLandingOpen(false);
  };
  const openEntry = (entry: CatalogEntry) => {
    void loadChronicle(entry.id).then((campaign) => {
      if (campaign) useChronosStore.getState().loadCampaign(campaign);
      close();
    });
  };
  const doors = [
    { title: t("landing.story.title"), body: t("landing.story.body"), act: () => document.getElementById("landing-stories")?.scrollIntoView({ behavior: "smooth" }) },
    {
      title: t("landing.atlas.title"),
      body: t("landing.atlas.body"),
      act: () => {
        useChronosStore.getState().setMode("atlas");
        close();
      },
    },
  ];
  const entries = catalog.filter((entry) => filter === "all" || eraOfEntry(entry) === filter).sort((a, b) => a.startYear - b.startYear);

  return (
    <div ref={dialog} role="dialog" aria-modal="true" aria-label={t("landing.aria")} className="pointer-events-auto absolute inset-0 z-40 overflow-y-auto bg-gradient-to-b from-abyss/70 via-abyss/85 to-abyss">
      <div className="mx-auto flex min-h-full max-w-6xl flex-col px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow">{t("landing.eyebrow")}</p>
          <LanguageSwitch />
        </div>
        <h1 className="mt-3 font-serif text-[52px] leading-none text-ink sm:text-[76px]">Chronos</h1>
        <p className="mt-4 max-w-2xl font-serif text-[19px] leading-snug text-ink/85 sm:text-[22px]">
          {t("landing.lede")}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {doors.map((door, index) => (
            <button
              key={door.title}
              type="button"
              onClick={door.act}
              autoFocus={index === 0}
              className="glass-panel rounded-2xl px-6 py-5 text-left transition hover:border-ochre/40"
            >
              <span className="block font-serif text-[22px] text-ink">{door.title}</span>
              <span className="mt-1.5 block text-[13px] leading-snug text-ink-muted">{door.body}</span>
            </button>
          ))}
        </div>
        <div id="landing-stories" className="mt-10 flex scroll-mt-6 flex-wrap items-center justify-between gap-3">
          <h2 className="eyebrow">{t("landing.chronicles")}</h2>
          <div className="flex gap-1 rounded-full bg-white/[0.04] p-0.5 text-[11.5px]" role="group" aria-label={t("landing.filter")}>
            {FILTERS.map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
                className={`rounded-full px-3 py-1 transition ${filter === value ? "bg-white/10 text-ink" : "text-ink-muted hover:text-ink"}`}
              >
                {t(FILTER_KEYS[value])}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {entries.map((entry) => (
            <ChronicleCard key={entry.id} entry={entry} onOpen={openEntry} />
          ))}
        </div>
        <button type="button" onClick={close} className="mx-auto mt-10 text-[12px] text-ink-muted underline-offset-4 hover:text-ink hover:underline">
          {t("landing.skip")}
        </button>
      </div>
    </div>
  );
}
