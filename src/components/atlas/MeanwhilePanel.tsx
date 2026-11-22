"use client";

import { contemporaryEvents, meanwhileWindow } from "@/data/contemporaries";
import { formatYear } from "@/data/campaigns/registry";
import { useLibrary } from "@/data/useLibrary";
import { pluralForm } from "@/i18n/dictionaries";
import { useLocale, useT } from "@/i18n/I18nProvider";
import { useChronosStore } from "@/store/useChronosStore";

export function MeanwhilePanel() {
  const campaign = useChronosStore((state) => state.campaign);
  const year = useChronosStore((state) => Math.round(state.year / 5) * 5);
  const window = meanwhileWindow(campaign);
  const library = useLibrary();
  const t = useT();
  const locale = useLocale();
  const entries = library ? contemporaryEvents(library, year, campaign?.id, window) : [];

  const open = (campaignId: string, eventId: string) => {
    const target = entries.find((entry) => entry.campaign.id === campaignId)?.campaign;
    if (!target) return;
    const store = useChronosStore.getState();
    store.loadCampaign(target);
    store.focusEvent(eventId);
  };

  return (
    <section aria-label={t("rail.meanwhile.label")} className="glass-panel pointer-events-auto flex max-h-[60vh] flex-col rounded-2xl">
      <header className="border-b border-hairline px-4 py-3">
        <h2 className="eyebrow">{t("rail.meanwhile.label")}</h2>
        <p className="mt-1 text-[12.5px] text-ink/85">
          {t("meanwhile.window", { window, year: formatYear(year) })}
        </p>
      </header>
      <ol className="scrollbar-quiet overflow-y-auto p-2">
        {entries.length === 0 ? <li className="px-2 py-3 text-[12px] text-ink-muted">{t("meanwhile.empty")}</li> : null}
        {entries.map(({ campaign: source, event, offset }) => (
          <li key={event.id}>
            <button
              type="button"
              onClick={() => open(source.id, event.id)}
              className="flex w-full items-start gap-2.5 rounded-xl px-2 py-2 text-left transition hover:bg-white/[0.05]"
            >
              <span className="mt-1.5 size-2 shrink-0 rounded-full" style={{ background: source.accent }} />
              <span className="min-w-0">
                <span className="block text-[12.5px] leading-snug text-ink">{event.title}</span>
                <span className="block font-mono text-[10px] text-ink-muted">
                  {formatYear(event.year)} · {event.place.split(",")[0]} · {offset === 0
                    ? t(event.endYear && event.endYear - event.year > 10 ? "meanwhile.ongoing" : "meanwhile.same")
                    : t(`meanwhile.${event.year > year ? "later" : "earlier"}.${pluralForm(offset, locale)}`, { count: offset })}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
