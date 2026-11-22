import type { CampaignTranslation } from "@/i18n/contentTypes";
import { events } from "./events";
import { meta } from "./meta";

export const translation: CampaignTranslation = { ...meta, events: { ...events } };
