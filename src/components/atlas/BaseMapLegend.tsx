"use client";

import { useEffect, useState } from "react";
import { LANGUAGE_STYLES, RELIGION_STYLES } from "@/data/world/regionStyles";
import { type RegionKind, regionTally } from "@/geo/regionRaster";
import { useLocale, useT } from "@/i18n/I18nProvider";
import type { BaseMap } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { CategoryStyle } from "@/types/world";

function styleFor(kind: RegionKind, id: string): CategoryStyle | undefined {
  return kind === "religion" ? RELIGION_STYLES[id as keyof typeof RELIGION_STYLES] : LANGUAGE_STYLES[id as keyof typeof LANGUAGE_STYLES];
}

function CategoryLegend({ kind }: { readonly kind: RegionKind }) {
  const t = useT();
  const locale = useLocale();
  const year = useChronosStore((state) => Math.round(state.year / 10) * 10);
  const [tally, setTally] = useState<{ readonly key: string; readonly entries: readonly [string, number][] } | null>(null);
  const key = `${kind}:${year}`;

  useEffect(() => {
    let live = true;
    void regionTally(kind, year).then((counts) => {
      if (live) setTally({ key, entries: [...counts.entries()].sort((a, b) => b[1] - a[1]) });
    });
    return () => {
      live = false;
    };
  }, [kind, year, key]);

  return (
    <div className="pb-2 pl-6">
      <ul className="grid grid-cols-1 gap-y-1">
        {(tally?.entries ?? []).slice(0, 9).map(([id]) => {
          const style = styleFor(kind, id);
          if (!style) return null;
          return (
            <li key={id} className="flex items-center gap-2 text-[11.5px] text-ink/85">
              <span className="size-2.5 shrink-0 rounded-sm" style={{ background: style.color }} />
              {locale === "fr" ? style.fr : style.en}
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-[10.5px] leading-snug text-ink-faint">{t(kind === "religion" ? "legend.religion.note" : "legend.language.note")}</p>
    </div>
  );
}

function PopulationLegend() {
  const t = useT();
  return (
    <div className="pb-2 pl-6">
      <div className="h-2 rounded-full bg-[linear-gradient(90deg,#29606b,#db8f3d_55%,#fff0c8)]" />
      <div className="mt-1 flex justify-between font-mono text-[9.5px] text-ink-faint">
        <span>1</span>
        <span>10</span>
        <span>100</span>
        <span>1 000+</span>
      </div>
      <p className="mt-1.5 text-[10.5px] leading-snug text-ink-faint">{t("legend.population.note")}</p>
    </div>
  );
}

export function BaseMapLegend({ baseMap }: { readonly baseMap: BaseMap }) {
  const t = useT();
  if (baseMap === "countries") return <p className="pb-2 pl-6 text-[10.5px] leading-snug text-ink-faint">{t("lens.compare.credit")}</p>;
  if (baseMap === "religions") return <CategoryLegend kind="religion" />;
  if (baseMap === "languages") return <CategoryLegend kind="language" />;
  if (baseMap === "population") return <PopulationLegend />;
  return null;
}
