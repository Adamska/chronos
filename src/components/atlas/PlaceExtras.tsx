"use client";

import { useEffect, useState } from "react";
import { Fact } from "@/components/atlas/Fact";
import { NearbyEvents } from "@/components/atlas/NearbyEvents";
import { LANGUAGE_STYLES, RELIGION_STYLES } from "@/data/world/regionStyles";
import { densityAt, loadPopulationIndex, loadPopulationSlice, populationBracket } from "@/geo/population";
import { regionAt, timelineValue } from "@/geo/regionRaster";
import { useLocale, useT } from "@/i18n/I18nProvider";
import type { LonLat } from "@/types/chronicle";
import type { RegionHistory } from "@/types/world";

interface Extras {
  readonly key: string;
  readonly region: RegionHistory | null;
  readonly density: number | null;
}

async function loadDensity(point: LonLat, year: number): Promise<number | null> {
  const index = await loadPopulationIndex();
  const bracket = index ? populationBracket(year, index.years) : null;
  if (!bracket) return null;
  const [from, to] = await Promise.all([loadPopulationSlice(bracket.from), loadPopulationSlice(bracket.to)]);
  if (!from || !to) return null;
  const a = densityAt(from, point[0], point[1]);
  const b = densityAt(to, point[0], point[1]);
  return a + (b - a) * bracket.weight;
}

function formatDensity(value: number, locale: string): string {
  const digits = value < 1 ? 1 : 0;
  return value.toLocaleString(locale === "fr" ? "fr-FR" : "en-GB", { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

export function PlaceExtras({ point, year }: { readonly point: LonLat; readonly year: number }) {
  const t = useT();
  const locale = useLocale();
  const key = `${point[0]},${point[1]}:${year}`;
  const [extras, setExtras] = useState<Extras | null>(null);

  useEffect(() => {
    let live = true;
    void Promise.all([regionAt(point), loadDensity(point, year)]).then(([region, density]) => {
      if (live) setExtras({ key, region, density });
    });
    return () => {
      live = false;
    };
  }, [key, point, year]);

  const ready = extras?.key === key ? extras : null;
  const religion = ready?.region ? timelineValue(ready.region.religion, year) : null;
  const language = ready?.region ? timelineValue(ready.region.language, year) : null;
  const religionStyle = religion ? RELIGION_STYLES[religion] : undefined;
  const languageStyle = language ? LANGUAGE_STYLES[language] : undefined;

  if (ready && !ready.region && (ready.density ?? 0) < 0.1) {
    return (
      <>
        <Fact label={t("place.surface")}>{t("place.sea")}</Fact>
        <NearbyEvents point={point} year={year} />
      </>
    );
  }
  return (
    <>
      {religionStyle ? (
        <Fact label={t("place.religion")}>
          <span className="mr-2 inline-block size-2.5 rounded-sm align-middle" style={{ background: religionStyle.color }} />
          {locale === "fr" ? religionStyle.fr : religionStyle.en}
        </Fact>
      ) : null}
      {languageStyle ? (
        <Fact label={t("place.language")}>
          <span className="mr-2 inline-block size-2.5 rounded-sm align-middle" style={{ background: languageStyle.color }} />
          {locale === "fr" ? languageStyle.fr : languageStyle.en}
        </Fact>
      ) : null}
      {ready && ready.density !== null ? (
        <Fact label={t("place.density")}>
          {ready.density < 0.1 ? t("place.empty") : t("place.perKm", { value: formatDensity(ready.density, locale) })}
        </Fact>
      ) : null}
      <NearbyEvents point={point} year={year} />
    </>
  );
}
