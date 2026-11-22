"use client";

import { formatYear } from "@/data/campaigns/registry";
import { useChronosStore } from "@/store/useChronosStore";

export function ChapterAnnouncer() {
  const campaign = useChronosStore((state) => state.campaign);
  const chapterId = useChronosStore((state) => state.activeChapterId);
  const selection = useChronosStore((state) => state.selection);
  const chapter = campaign?.chapters.find((entry) => entry.id === chapterId);
  const event = selection?.kind === "event" ? campaign?.events.find((entry) => entry.id === selection.id) : undefined;
  return (
    <p aria-live="polite" className="sr-only">
      {campaign ? `${campaign.title}. ` : ""}
      {chapter ? `Chapter: ${chapter.title}, ${formatYear(chapter.year)}. ${chapter.caption} ` : ""}
      {event ? `Selected: ${event.title}, ${event.place}, ${formatYear(event.year)}.` : ""}
    </p>
  );
}
