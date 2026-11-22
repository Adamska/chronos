import { ageOfSailCampaign } from "@/data/campaigns/ageOfSail";
import { fallOfRomeCampaign } from "@/data/campaigns/fallOfRome";
import { industrialRevolutionCampaign } from "@/data/campaigns/industrialRevolution";
import { islamicGoldenAgeCampaign } from "@/data/campaigns/islamicGoldenAge";
import { silkRoadCampaign } from "@/data/campaigns/silkRoad";
import { spaceRaceCampaign } from "@/data/campaigns/spaceRace";
import { sortCampaignEvents } from "@/data/campaigns/registry";
import type { ChronicleCampaign } from "@/types/chronicle";

export const CAMPAIGNS: readonly ChronicleCampaign[] = [
  silkRoadCampaign,
  islamicGoldenAgeCampaign,
  ageOfSailCampaign,
  fallOfRomeCampaign,
  industrialRevolutionCampaign,
  spaceRaceCampaign,
].map(sortCampaignEvents);

export const DEFAULT_CAMPAIGN: ChronicleCampaign = CAMPAIGNS[0] ?? sortCampaignEvents(silkRoadCampaign);

export function findCampaign(id: string): ChronicleCampaign | undefined {
  return CAMPAIGNS.find((campaign) => campaign.id === id);
}
