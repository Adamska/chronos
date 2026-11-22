"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useChronicleRequest } from "@/components/hud/useChronicleRequest";
import { CAMPAIGNS } from "@/data/campaigns";
import { formatSpan } from "@/data/campaigns/registry";
import { useChronosStore } from "@/store/useChronosStore";
import type { ChronicleCampaign } from "@/types/chronicle";

const SUGGESTIONS = [
  "Spread of the printing press in 15th-century Europe",
  "Mongol Empire expansion under Genghis Khan",
  "Voyages of Zheng He",
] as const;

type PaletteItem =
  | { readonly kind: "campaign"; readonly campaign: ChronicleCampaign }
  | { readonly kind: "query"; readonly query: string; readonly suggested: boolean };

function rankCampaigns(query: string): ChronicleCampaign[] {
  const terms = query.toLowerCase().split(/\s+/).filter((term) => term.length > 1);
  if (terms.length === 0) return [...CAMPAIGNS];
  return CAMPAIGNS.map((campaign) => {
    const haystack = `${campaign.title} ${campaign.subtitle} ${campaign.keywords.join(" ")}`.toLowerCase();
    return { campaign, score: terms.filter((term) => haystack.includes(term)).length };
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.campaign);
}

export function SearchPill() {
  const setPaletteOpen = useChronosStore((state) => state.setPaletteOpen);
  const status = useChronosStore((state) => state.chronicleStatus);
  return (
    <button
      type="button"
      onClick={() => setPaletteOpen(true)}
      data-hud-zone
      className="glass-panel pointer-events-auto flex w-[22rem] items-center gap-3 rounded-full px-4 py-2 text-left text-[12.5px] text-ink-muted transition hover:text-ink"
    >
      <svg viewBox="0 0 16 16" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg>
      <span className="flex-1 truncate">{status === "loading" ? "Directing your chronicle…" : "Chronicle any moment in history"}</span>
      <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-ink-faint">⌘K</kbd>
    </button>
  );
}

export function CampaignPalette() {
  const open = useChronosStore((state) => state.paletteOpen);
  const setPaletteOpen = useChronosStore((state) => state.setPaletteOpen);
  const loadCampaign = useChronosStore((state) => state.loadCampaign);
  const status = useChronosStore((state) => state.chronicleStatus);
  const message = useChronosStore((state) => state.chronicleMessage);
  const request = useChronicleRequest();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const items = useMemo<PaletteItem[]>(() => {
    const trimmed = query.trim();
    const campaigns = rankCampaigns(trimmed).map((campaign) => ({ kind: "campaign" as const, campaign }));
    if (trimmed.length >= 3) return [{ kind: "query", query: trimmed, suggested: false }, ...campaigns];
    return [...campaigns, ...SUGGESTIONS.map((suggestion) => ({ kind: "query" as const, query: suggestion, suggested: true }))];
  }, [query]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => input.current?.focus());
  }, [open]);

  if (!open) return null;

  const activate = (item: PaletteItem | undefined) => {
    if (!item || status === "loading") return;
    if (item.kind === "campaign") loadCampaign(item.campaign);
    else void request(item.query);
  };

  return (
    <div className="pointer-events-auto fixed inset-0 z-40 flex items-start justify-center bg-abyss/55 px-4 pt-[12vh] backdrop-blur-[3px]" onMouseDown={() => setPaletteOpen(false)}>
      <div role="dialog" aria-label="Chronicle palette" className="glass-panel w-full max-w-[640px] overflow-hidden rounded-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-hairline px-5 py-4">
          <svg viewBox="0 0 16 16" className="size-4 shrink-0 text-ochre" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg>
          <input
            ref={input}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setCursor(0);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") setCursor((value) => Math.min(items.length - 1, value + 1));
              else if (event.key === "ArrowUp") setCursor((value) => Math.max(0, value - 1));
              else if (event.key === "Enter") activate(items[cursor]);
              else return;
              event.preventDefault();
            }}
            placeholder="Voyages of Zheng He, the Black Death, the Meiji Restoration…"
            className="flex-1 bg-transparent font-serif text-[18px] text-ink outline-none placeholder:text-ink-faint"
          />
          {status === "loading" ? <span className="size-4 animate-spin rounded-full border-2 border-ochre/30 border-t-ochre" /> : null}
        </div>
        {status === "error" && message ? <p className="border-b border-hairline px-5 py-2.5 text-[12px] text-vermilion">{message}</p> : null}
        <ul className="scrollbar-quiet max-h-[52vh] overflow-y-auto p-2">
          {items.map((item, index) => {
            const key = item.kind === "campaign" ? item.campaign.id : `query-${item.query}`;
            return (
              <li key={key}>
                <button
                  type="button"
                  onMouseEnter={() => setCursor(index)}
                  onClick={() => activate(item)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${index === cursor ? "bg-white/[0.06]" : ""}`}
                >
                  {item.kind === "campaign" ? (
                    <>
                      <span className="size-2.5 shrink-0 rounded-full" style={{ background: item.campaign.accent }} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13.5px] text-ink">{item.campaign.title}</span>
                        <span className="block truncate text-[11.5px] text-ink-muted">{item.campaign.subtitle}</span>
                      </span>
                      <span className="shrink-0 font-mono text-[10px] text-ink-faint">{formatSpan(item.campaign.startYear, item.campaign.endYear)}</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 10 10" className="size-2.5 shrink-0 text-ochre" fill="currentColor"><path d="M5 0 6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5 3.8 3.8Z" /></svg>
                      <span className="min-w-0 flex-1 truncate text-[13.5px] text-ink/90">
                        {item.suggested ? item.query : <>Chronicle “{item.query}”</>}
                      </span>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-ochre/80">{item.suggested ? "Try" : "Generate"}</span>
                    </>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between border-t border-hairline px-5 py-2.5 font-mono text-[10px] text-ink-faint">
          <span>↑↓ navigate · ↵ open · esc close</span>
          <span>Structured AI chronicles with an offline encyclopedia</span>
        </div>
      </div>
    </div>
  );
}
