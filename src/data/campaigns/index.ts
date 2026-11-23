import { ageOfSailCampaign } from "@/data/campaigns/ageOfSail";
import { ancientEgyptCampaign } from "@/data/campaigns/ancientEgypt";
import { bantuExpansionCampaign } from "@/data/campaigns/bantuExpansion";
import { columbianExchangeCampaign } from "@/data/campaigns/columbianExchange";
import { crusadesCampaign } from "@/data/campaigns/crusades";
import { fallOfRomeCampaign } from "@/data/campaigns/fallOfRome";
import { franceEnglandCampaign } from "@/data/campaigns/franceEngland";
import { greeceAlexanderCampaign } from "@/data/campaigns/greeceAlexander";
import { imperialChinaCampaign } from "@/data/campaigns/imperialChina";
import { indianOceanWorldCampaign } from "@/data/campaigns/indianOceanWorld";
import { industrialRevolutionCampaign } from "@/data/campaigns/industrialRevolution";
import { islamicGoldenAgeCampaign } from "@/data/campaigns/islamicGoldenAge";
import { mesopotamiaCampaign } from "@/data/campaigns/mesopotamia";
import { mongolEmpireCampaign } from "@/data/campaigns/mongolEmpire";
import { persianEmpireCampaign } from "@/data/campaigns/persianEmpire";
import { polynesianVoyagingCampaign } from "@/data/campaigns/polynesianVoyaging";
import { revolutionNapoleonCampaign } from "@/data/campaigns/revolutionNapoleon";
import { romanEmpireCampaign } from "@/data/campaigns/romanEmpire";
import { silkRoadCampaign } from "@/data/campaigns/silkRoad";
import { spaceRaceCampaign } from "@/data/campaigns/spaceRace";
import { vikingsCampaign } from "@/data/campaigns/vikings";
import { sortCampaignEvents } from "@/data/campaigns/registry";
import type { ChronicleCampaign } from "@/types/chronicle";

export const CAMPAIGNS: readonly ChronicleCampaign[] = [
  romanEmpireCampaign,
  ancientEgyptCampaign,
  franceEnglandCampaign,
  revolutionNapoleonCampaign,
  mesopotamiaCampaign,
  greeceAlexanderCampaign,
  persianEmpireCampaign,
  imperialChinaCampaign,
  vikingsCampaign,
  crusadesCampaign,
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

export const DEFAULT_CAMPAIGN: ChronicleCampaign = CAMPAIGNS[0] ?? sortCampaignEvents(romanEmpireCampaign);

export function findCampaign(id: string): ChronicleCampaign | undefined {
  return CAMPAIGNS.find((campaign) => campaign.id === id);
}
