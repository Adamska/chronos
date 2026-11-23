import { atlas } from "@/i18n/dictionaries/en/atlas";
import { dossier } from "@/i18n/dictionaries/en/dossier";
import { hud } from "@/i18n/dictionaries/en/hud";
import { landing } from "@/i18n/dictionaries/en/landing";
import { story } from "@/i18n/dictionaries/en/story";

export const en = { ...hud, ...atlas, ...dossier, ...landing, ...story } as const;

export type MessageKey = keyof typeof en;
