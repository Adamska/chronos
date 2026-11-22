"use client";

import { type ReactNode, createContext, useContext, useMemo } from "react";
import { type Locale, setActiveLocale } from "@/i18n/config";
import { type MessageKey, type MessageValues, dictionaries, interpolate } from "@/i18n/dictionaries";

export { interpolate };

type Translate = (key: MessageKey, values?: MessageValues) => string;

interface I18nValue {
  readonly locale: Locale;
  readonly t: Translate;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ locale, children }: { readonly locale: Locale; readonly children: ReactNode }) {
  setActiveLocale(locale);
  const value = useMemo<I18nValue>(() => {
    const dictionary = dictionaries[locale];
    return { locale, t: (key, values) => interpolate(dictionary, key, values) };
  }, [locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}

export const useT = (): Translate => useI18n().t;
export const useLocale = (): Locale => useI18n().locale;
