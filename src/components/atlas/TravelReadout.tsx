"use client";

import { pluralForm } from "@/i18n/dictionaries";
import { useT } from "@/i18n/I18nProvider";
import { travelDaysAt, travelReady } from "@/scene/lensField";
import { useAtlasStore } from "@/store/useAtlasStore";

function describe(days: number, t: ReturnType<typeof useT>): string {
  if (days < 1) return t("travel.underDay");
  if (days < 14) return t(`travel.days.${pluralForm(Math.round(days))}`, { count: Math.round(days) });
  if (days < 60) return t("travel.weeks", { count: Math.round(days / 7) });
  if (days < 540) return t("travel.months", { count: Math.round(days / 30) });
  return t("travel.longer");
}

export function TravelReadout() {
  const hover = useAtlasStore((state) => state.hover);
  const origin = useAtlasStore((state) => state.travelOrigin);
  const t = useT();
  if (!hover || !origin) return null;
  const ready = travelReady(origin.coordinates);
  const days = ready ? travelDaysAt(hover.coordinates) : null;
  return (
    <div
      role="status"
      className="glass-panel pointer-events-none fixed z-30 rounded-lg px-2.5 py-1.5 text-[11.5px] text-ink"
      style={{ left: hover.clientX + 14, top: hover.clientY + 14 }}
    >
      {!ready ? t("travel.calculating") : days === null ? t("travel.unreachable") : t("travel.from", { duration: describe(days, t), origin: origin.label })}
    </div>
  );
}
