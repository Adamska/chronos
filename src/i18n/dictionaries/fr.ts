import type { MessageKey } from "@/i18n/dictionaries/en";
import { atlas } from "@/i18n/dictionaries/fr/atlas";
import { challenge } from "@/i18n/dictionaries/fr/challenge";
import { classroom } from "@/i18n/dictionaries/fr/classroom";
import { dossier } from "@/i18n/dictionaries/fr/dossier";
import { hud } from "@/i18n/dictionaries/fr/hud";
import { landing } from "@/i18n/dictionaries/fr/landing";

export const fr: Record<MessageKey, string> = { ...hud, ...atlas, ...dossier, ...landing, ...challenge, ...classroom };
