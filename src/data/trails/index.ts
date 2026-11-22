import { equianoJourneyTrail } from "@/data/trails/equianoJourney";
import { ibnBattutaJourneyTrail } from "@/data/trails/ibnBattutaJourney";
import { numeralsThreadTrail } from "@/data/trails/numeralsThread";
import { paperThreadTrail } from "@/data/trails/paperThread";
import { plagueThreadTrail } from "@/data/trails/plagueThread";
import { printingThreadTrail } from "@/data/trails/printingThread";
import { silverThreadTrail } from "@/data/trails/silverThread";
import { trailToCampaign } from "@/data/trails/toCampaign";
import { xuanzangJourneyTrail } from "@/data/trails/xuanzangJourney";
import { zhengHeJourneyTrail } from "@/data/trails/zhengHeJourney";
import type { Trail } from "@/types/atlas";
import type { ChronicleCampaign } from "@/types/chronicle";

export const TRAILS: readonly Trail[] = [
  silverThreadTrail,
  numeralsThreadTrail,
  plagueThreadTrail,
  paperThreadTrail,
  printingThreadTrail,
  xuanzangJourneyTrail,
  ibnBattutaJourneyTrail,
  zhengHeJourneyTrail,
  equianoJourneyTrail,
];

export const TRAIL_CAMPAIGNS: readonly ChronicleCampaign[] = TRAILS.map(trailToCampaign);
