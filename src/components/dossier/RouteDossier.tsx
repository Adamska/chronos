"use client";

import { ActionButton, Badge, Section } from "@/components/dossier/DossierParts";
import { formatKm, routeLegs } from "@/components/dossier/geoInsights";
import { RouteSchematic } from "@/components/dossier/TimelineSchematic";
import { formatSpan } from "@/data/campaigns/registry";
import { sampleGreatCircle } from "@/geo/sphericalMath";
import { ARC_KIND_COLORS } from "@/scene/temporal";
import { useT } from "@/i18n/I18nProvider";
import { useChronosStore } from "@/store/useChronosStore";
import type { ChronicleCampaign, GeoArc } from "@/types/chronicle";

export function RouteDossier({ arc, campaign }: { readonly arc: GeoArc; readonly campaign: ChronicleCampaign }) {
  const select = useChronosStore((state) => state.select);
  const requestCamera = useChronosStore((state) => state.requestCamera);
  const t = useT();
  const related = arc.eventId ? campaign.events.find((event) => event.id === arc.eventId) : undefined;
  const totalKm = routeLegs(arc.path).reduce((sum, leg) => sum + leg, 0);
  const first = arc.path[0];
  const last = arc.path[arc.path.length - 1];

  const flyAlong = () => {
    if (!first || !last) return;
    const midpoint = sampleGreatCircle(first, last, 2)[1] ?? first;
    requestCamera({
      id: `route-${arc.id}`,
      year: arc.startYear,
      title: arc.label,
      caption: arc.label,
      target: midpoint,
      altitude: Math.min(2.4, 0.9 + totalKm / 9000),
      tilt: 12,
    });
  };

  return (
    <>
      <header className="px-5 pb-4 pt-5">
        <div className="flex flex-wrap gap-1.5">
          <Badge color={ARC_KIND_COLORS[arc.kind]}>{t(`arc.${arc.kind}`)}</Badge>
          <Badge>{formatSpan(arc.startYear, arc.endYear)}</Badge>
          <Badge>{t(`layer.${arc.layer}`)}</Badge>
        </div>
        <h2 className="mt-3 font-serif text-[26px] leading-[1.1] text-ink">{arc.label}</h2>
        <p className="mt-2 font-mono text-[11px] text-ink-muted">
          {t("route.waypoints", { count: arc.path.length, distance: formatKm(totalKm) })}
        </p>
      </header>
      <Section label={t("route.profile")}>
        <RouteSchematic arc={arc} />
      </Section>
      {arc.cargo && arc.cargo.length > 0 ? (
        <Section label={t("route.cargo")}>
          <div className="flex flex-wrap gap-1.5">
            {arc.cargo.map((item) => (
              <span key={item} className="rounded-md border border-hairline bg-white/[0.03] px-2 py-1 text-[12px] text-ink/85">
                {item}
              </span>
            ))}
          </div>
        </Section>
      ) : null}
      <Section label={t("route.intensity")}>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full rounded-full bg-ochre/80" style={{ width: `${Math.round(arc.intensity * 100)}%` }} />
        </div>
      </Section>
      <div className="flex flex-wrap gap-2 border-t border-hairline px-5 py-4">
        <ActionButton onClick={flyAlong}>{t("route.frame")}</ActionButton>
        {related ? <ActionButton onClick={() => select({ kind: "event", id: related.id })}>{related.title}</ActionButton> : null}
      </div>
    </>
  );
}
