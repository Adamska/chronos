import type { PaletteItem } from "@/components/hud/usePaletteResults";
import { eraLabel, formatSpan, formatYear } from "@/data/campaigns/registry";
import { TIMELINE_MAX_YEAR, TIMELINE_MIN_YEAR } from "@/types/chronicle";

const fraction = (year: number) => (year - TIMELINE_MIN_YEAR) / (TIMELINE_MAX_YEAR - TIMELINE_MIN_YEAR);

export function PalettePreview({ item }: { readonly item: PaletteItem | undefined }) {
  if (!item) return null;
  if (item.kind === "query") {
    return (
      <div className="p-5">
        <p className="eyebrow">{item.suggested ? "Suggested question" : "Generate a chronicle"}</p>
        <p className="mt-2 font-serif text-[18px] leading-snug text-ink">{item.query}</p>
        <p className="mt-3 text-[12px] leading-relaxed text-ink-muted">
          The AI director builds a full campaign with events, routes and chapters. Without a key, the offline encyclopedia answers from curated entries.
        </p>
      </div>
    );
  }
  const { entry } = item;
  return (
    <div className="p-5">
      <span className="block h-1 w-10 rounded-full" style={{ background: entry.accent }} />
      {item.kind === "event" ? (
        <>
          <p className="eyebrow mt-3">
            {formatYear(item.event.year)} · {eraLabel(item.event.year)}
          </p>
          <p className="mt-1.5 font-serif text-[19px] leading-snug text-ink">{item.event.title}</p>
          <p className="mt-1 font-mono text-[10.5px] text-ink-muted">{item.event.place}</p>
          <p className="mt-3 text-[12.5px] leading-relaxed text-ink/85">{item.event.summary}</p>
          <p className="mt-3 text-[11px] text-ink-faint">In {entry.title}</p>
        </>
      ) : (
        <>
          <p className="eyebrow mt-3">{formatSpan(entry.startYear, entry.endYear)}</p>
          <p className="mt-1.5 font-serif text-[20px] leading-snug text-ink">{entry.title}</p>
          <p className="mt-2 text-[12.5px] leading-relaxed text-ink/85">{entry.subtitle}</p>
          <div className="relative mt-5 h-1.5 rounded-full bg-white/[0.06]" aria-hidden>
            <div
              className="absolute inset-y-0 rounded-full"
              style={{ left: `${fraction(entry.startYear) * 100}%`, width: `${Math.max(0.8, (fraction(entry.endYear) - fraction(entry.startYear)) * 100)}%`, background: entry.accent }}
            />
          </div>
          <div className="mt-1 flex justify-between font-mono text-[9px] text-ink-faint">
            <span>3000 BCE</span>
            <span>2026 CE</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-1">
            {entry.keywords.slice(0, 8).map((keyword) => (
              <span key={keyword} className="rounded-full border border-hairline px-2 py-0.5 text-[10.5px] text-ink-muted">
                {keyword}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
