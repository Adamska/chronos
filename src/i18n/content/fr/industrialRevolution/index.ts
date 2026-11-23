import type { CampaignTranslation } from "@/i18n/contentTypes";
import { events } from "./events";
import { events2 } from "./events2";
import { meta } from "./meta";
import { story } from "./story";

export const translation: CampaignTranslation = { ...meta, ...story, events: { ...events, ...events2 } };
