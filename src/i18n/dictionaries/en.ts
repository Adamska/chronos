import { atlas } from "@/i18n/dictionaries/en/atlas";
import { challenge } from "@/i18n/dictionaries/en/challenge";
import { classroom } from "@/i18n/dictionaries/en/classroom";
import { dossier } from "@/i18n/dictionaries/en/dossier";
import { hud } from "@/i18n/dictionaries/en/hud";
import { landing } from "@/i18n/dictionaries/en/landing";

export const en = { ...hud, ...atlas, ...dossier, ...landing, ...challenge, ...classroom } as const;

export type MessageKey = keyof typeof en;
