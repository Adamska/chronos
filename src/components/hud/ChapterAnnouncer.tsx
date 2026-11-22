"use client";

import { formatYear } from "@/data/campaigns/registry";
import { useT } from "@/i18n/I18nProvider";
import { useChronosStore } from "@/store/useChronosStore";

export function ChapterAnnouncer() {
  const t = useT();
  const campaign = useChronosStore((state) => state.campaign);
  const chapterId = useChronosStore((state) => state.activeChapterId);
  const selection = useChronosStore((state) => state.selection);
  const chapter = campaign?.chapters.find((entry) => entry.id === chapterId);
  const event = selection?.kind === "event" ? campaign?.events.find((entry) => entry.id === selection.id) : undefined;
  return (
    <p aria-live="polite" className="sr-only">
      {campaign ? `${campaign.title}. ` : ""}
      {chapter ? t("announcer.chapter", { title: chapter.title, year: formatYear(chapter.year), caption: chapter.caption }) : ""}
      {event ? t("announcer.selected", { title: event.title, place: event.place, year: formatYear(event.year) }) : ""}
    </p>
  );
}
