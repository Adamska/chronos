import { type Locale, getActiveLocale } from "@/i18n/config";
import { type MessageKey, en } from "@/i18n/dictionaries/en";
import { fr } from "@/i18n/dictionaries/fr";

export type { MessageKey };
export type Dictionary = Readonly<Record<MessageKey, string>>;
export type MessageValues = Readonly<Record<string, string | number>>;
export type PluralForm = "one" | "other";

export const dictionaries: Readonly<Record<Locale, Dictionary>> = { en, fr };

export function interpolate(dictionary: Dictionary, key: MessageKey, values?: MessageValues): string {
  const template = dictionary[key];
  return values ? template.replace(/\{(\w+)\}/g, (match, name: string) => String(values[name] ?? match)) : template;
}

export function translate(key: MessageKey, values?: MessageValues, locale: Locale = getActiveLocale()): string {
  return interpolate(dictionaries[locale], key, values);
}

export function pluralForm(count: number, locale: Locale = getActiveLocale()): PluralForm {
  return new Intl.PluralRules(locale).select(count) === "one" ? "one" : "other";
}

export const numberTag = (locale: Locale = getActiveLocale()): string => (locale === "fr" ? "fr-FR" : "en-US");
