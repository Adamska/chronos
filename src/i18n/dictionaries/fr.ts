import type { MessageKey } from "@/i18n/dictionaries/en";
import { atlas } from "@/i18n/dictionaries/fr/atlas";
import { dossier } from "@/i18n/dictionaries/fr/dossier";
import { hud } from "@/i18n/dictionaries/fr/hud";
import { landing } from "@/i18n/dictionaries/fr/landing";
import { story } from "@/i18n/dictionaries/fr/story";

export const fr: Record<MessageKey, string> = { ...hud, ...atlas, ...dossier, ...landing, ...story };
