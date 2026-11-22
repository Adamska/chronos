"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PalettePreview } from "@/components/hud/PalettePreview";
import { pushRecent } from "@/components/hud/recent";
import { useChronicleRequest } from "@/components/hud/useChronicleRequest";
import { type PaletteItem, usePaletteResults } from "@/components/hud/usePaletteResults";
import { useFocusTrap } from "@/components/useFocusTrap";
import { loadChronicle } from "@/data/catalog";
import { formatSpan, formatYear } from "@/data/campaigns/registry";
import { useChronosStore } from "@/store/useChronosStore";

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

function ItemRow({ item, active }: { readonly item: PaletteItem; readonly active: boolean }) {
  if (item.kind === "query") {
    return (
      <>
        <svg viewBox="0 0 10 10" className="size-2.5 shrink-0 text-ochre" fill="currentColor" aria-hidden><path d="M5 0 6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5 3.8 3.8Z" /></svg>
        <span className="min-w-0 flex-1 truncate text-[13.5px] text-ink/90">{item.suggested ? item.query : <>Chronicle “{item.query}”</>}</span>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-ochre/80">{item.suggested ? "Try" : "Generate"}</span>
      </>
    );
  }
  const title = item.kind === "event" ? item.event.title : item.entry.title;
  const subtitle = item.kind === "event" ? `${item.entry.title} · ${item.event.place.split(",")[0]}` : item.entry.subtitle;
  const date = item.kind === "event" ? formatYear(item.event.year) : formatSpan(item.entry.startYear, item.entry.endYear);
  return (
    <>
      <span className={`size-2.5 shrink-0 ${item.kind === "event" ? "rotate-45 rounded-[2px]" : "rounded-full"}`} style={{ background: item.entry.accent }} />
      <span className="min-w-0 flex-1">
        <span className={`block truncate text-[13.5px] ${active ? "text-ink" : "text-ink/90"}`}>{title}</span>
        <span className="block truncate text-[11.5px] text-ink-muted">{subtitle}</span>
      </span>
      <span className="shrink-0 font-mono text-[10px] text-ink-faint">{date}</span>
    </>
  );
}

export function CampaignPalette() {
  const open = useChronosStore((state) => state.paletteOpen);
  const setPaletteOpen = useChronosStore((state) => state.setPaletteOpen);
  const status = useChronosStore((state) => state.chronicleStatus);
  const message = useChronosStore((state) => state.chronicleMessage);
  const request = useChronicleRequest();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const dialog = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const sections = usePaletteResults(query);
  const items = useMemo(() => sections.flatMap((section) => section.items), [sections]);
  useFocusTrap(dialog, open);

  useEffect(() => {
    if (open) requestAnimationFrame(() => input.current?.focus());
  }, [open]);

  if (!open) return null;

  const activate = (item: PaletteItem | undefined) => {
    if (!item || status === "loading") return;
    if (item.kind === "query") {
      void request(item.query);
      return;
    }
    void loadChronicle(item.entry.id).then((campaign) => {
      if (!campaign) return;
      pushRecent(campaign.id);
      const store = useChronosStore.getState();
      store.loadCampaign(campaign);
      if (item.kind === "event") store.focusEvent(item.event.id);
    });
  };

  const offsets = sections.map((_, sectionIndex) => sections.slice(0, sectionIndex).reduce((total, section) => total + section.items.length, 0));
  return (
    <div className="pointer-events-auto fixed inset-0 z-40 flex items-start justify-center bg-abyss/55 px-4 pt-[10vh] backdrop-blur-[3px]" onMouseDown={() => setPaletteOpen(false)}>
      <div ref={dialog} role="dialog" aria-modal="true" aria-label="Chronicle palette" className="glass-panel flex w-full max-w-[860px] overflow-hidden rounded-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-3 border-b border-hairline px-5 py-4">
            <svg viewBox="0 0 16 16" className="size-4 shrink-0 text-ochre" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg>
            <input
              ref={input}
              value={query}
              aria-label="Search chronicles and events"
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
              placeholder="Search events and chronicles, or ask any historical question"
              className="flex-1 bg-transparent font-serif text-[18px] text-ink outline-none placeholder:text-ink-faint"
            />
            {status === "loading" ? <span className="size-4 animate-spin rounded-full border-2 border-ochre/30 border-t-ochre" /> : null}
          </div>
          {status === "error" && message ? <p className="border-b border-hairline px-5 py-2.5 text-[12px] text-vermilion">{message}</p> : null}
          <div className="scrollbar-quiet max-h-[56vh] overflow-y-auto p-2">
            {sections.map((section, sectionIndex) => (
              <section key={section.title} aria-label={section.title}>
                <h3 className="eyebrow px-3 pb-1 pt-3">{section.title}</h3>
                <ul>
                  {section.items.map((item, itemIndex) => {
                    const position = (offsets[sectionIndex] ?? 0) + itemIndex;
                    const key = item.kind === "query" ? `q-${item.query}` : item.kind === "event" ? `e-${item.event.id}` : `c-${item.entry.id}`;
                    return (
                      <li key={key}>
                        <button
                          type="button"
                          onMouseEnter={() => setCursor(position)}
                          onFocus={() => setCursor(position)}
                          onClick={() => activate(item)}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition ${position === cursor ? "bg-white/[0.06]" : ""}`}
                        >
                          <ItemRow item={item} active={position === cursor} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-hairline px-5 py-2.5 font-mono text-[10px] text-ink-faint">
            <span>↑↓ navigate · ↵ open · esc close</span>
            <span>Structured AI chronicles with an offline encyclopedia</span>
          </div>
        </div>
        <aside className="hidden w-[300px] shrink-0 border-l border-hairline md:block" aria-label="Preview">
          <PalettePreview item={items[cursor]} />
        </aside>
      </div>
    </div>
  );
}
