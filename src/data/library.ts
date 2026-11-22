import { CAMPAIGNS } from "@/data/campaigns";
import { TRAIL_CAMPAIGNS } from "@/data/trails";
import type { ChronicleCampaign } from "@/types/chronicle";

export const LIBRARY: readonly ChronicleCampaign[] = [...CAMPAIGNS, ...TRAIL_CAMPAIGNS];

export function findLibraryCampaign(id: string): ChronicleCampaign | undefined {
  return LIBRARY.find((campaign) => campaign.id === id);
}
