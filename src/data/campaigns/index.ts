import { ageOfSailCampaign } from "@/data/campaigns/ageOfSail";
import { bantuExpansionCampaign } from "@/data/campaigns/bantuExpansion";
import { columbianExchangeCampaign } from "@/data/campaigns/columbianExchange";
import { fallOfRomeCampaign } from "@/data/campaigns/fallOfRome";
import { indianOceanWorldCampaign } from "@/data/campaigns/indianOceanWorld";
import { industrialRevolutionCampaign } from "@/data/campaigns/industrialRevolution";
import { islamicGoldenAgeCampaign } from "@/data/campaigns/islamicGoldenAge";
import { mongolEmpireCampaign } from "@/data/campaigns/mongolEmpire";
import { polynesianVoyagingCampaign } from "@/data/campaigns/polynesianVoyaging";
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
  mongolEmpireCampaign,
  bantuExpansionCampaign,
  polynesianVoyagingCampaign,
  columbianExchangeCampaign,
  indianOceanWorldCampaign,
].map(sortCampaignEvents);

export const DEFAULT_CAMPAIGN: ChronicleCampaign = CAMPAIGNS[0] ?? sortCampaignEvents(silkRoadCampaign);

export function findCampaign(id: string): ChronicleCampaign | undefined {
  return CAMPAIGNS.find((campaign) => campaign.id === id);
}
