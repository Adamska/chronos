import { CAMPAIGNS } from "@/data/campaigns";
import type { ChronicleCampaign, HistoricalEvent } from "@/types/chronicle";

export interface Contemporary {
  readonly campaign: ChronicleCampaign;
  readonly event: HistoricalEvent;
  readonly offset: number;
}

const ALL_EVENTS = CAMPAIGNS.flatMap((campaign) => campaign.events.map((event) => ({ campaign, event })));

export function contemporaryEvents(year: number, excludeCampaignId: string | undefined, window: number, limit = 12): Contemporary[] {
  return ALL_EVENTS.filter(({ campaign }) => campaign.id !== excludeCampaignId)
    .map(({ campaign, event }) => {
      const end = event.endYear ?? event.year;
      const offset = year < event.year ? event.year - year : year > end ? year - end : 0;
      return { campaign, event, offset };
    })
    .filter((entry) => entry.offset <= window)
    .sort((a, b) => a.offset - b.offset || b.event.significance - a.event.significance)
    .slice(0, limit);
}

export function meanwhileWindow(campaign: ChronicleCampaign | null): number {
  if (!campaign) return 30;
  return Math.min(60, Math.max(15, Math.round((campaign.endYear - campaign.startYear) * 0.03)));
}
