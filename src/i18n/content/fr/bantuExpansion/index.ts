import type { CampaignTranslation } from "@/i18n/contentTypes";
import { events } from "./events";
import { events2 } from "./events2";
import { meta } from "./meta";

export const translation: CampaignTranslation = { ...meta, events: { ...events, ...events2 } };
