"use client";

import { LOCALES, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { useLocale, useT } from "@/i18n/I18nProvider";

export function switchLocale(target: Locale): void {
  document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
  const [, , ...rest] = window.location.pathname.split("/");
  window.location.assign(new URL(`/${target}${rest.length ? `/${rest.join("/")}` : ""}${window.location.search}`, window.location.origin));
}

export function LanguageSwitch() {
  const locale = useLocale();
  const t = useT();
  return (
    <div role="group" data-hud-zone aria-label={t("language.label")} className="glass-panel pointer-events-auto flex rounded-full p-0.5 font-mono text-[10.5px]">
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          aria-pressed={option === locale}
          aria-label={t(option === "en" ? "language.en" : "language.fr")}
          onClick={() => option !== locale && switchLocale(option)}
          className={`rounded-full px-2.5 py-1 uppercase tracking-[0.12em] transition ${option === locale ? "bg-white/10 text-ink" : "text-ink-muted hover:text-ink"}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
