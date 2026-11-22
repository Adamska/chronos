import { formatKm, routeLegs } from "@/components/dossier/geoInsights";
import { formatYear } from "@/data/campaigns/registry";
import { LAYER_COLORS } from "@/scene/temporal";
import type { ChronicleCampaign, GeoArc, HistoricalEvent, LonLat } from "@/types/chronicle";

const MUTED = "rgb(233 228 216 / 0.45)";
const INK = "rgb(233 228 216 / 0.85)";

const clip = (text: string, length: number) => (text.length > length ? `${text.slice(0, length - 1)}…` : text);

export function TimelineSchematic({ campaign, event }: { readonly campaign: ChronicleCampaign; readonly event: HistoricalEvent }) {
  const span = campaign.endYear - campaign.startYear || 1;
  const x = (year: number) => 16 + ((year - campaign.startYear) / span) * 328;
  const ordered = [...campaign.events].sort((a, b) => a.year - b.year);
  const index = ordered.findIndex((entry) => entry.id === event.id);
  const previous = ordered[index - 1];
  const next = ordered[index + 1];
  const markerX = x(event.year);

  return (
    <svg viewBox="0 0 360 96" className="w-full" role="img" aria-label={`${event.title} within ${campaign.title}`}>
      <line x1="16" x2="344" y1="44" y2="44" stroke="rgb(233 228 216 / 0.16)" />
      {ordered.map((entry) => (
        <circle key={entry.id} cx={x(entry.year)} cy="44" r={entry.id === event.id ? 0 : 1.6 + entry.significance * 0.35} fill={LAYER_COLORS[entry.layer]} opacity="0.55" />
      ))}
      {event.endYear && event.endYear > event.year ? (
        <rect x={markerX} y="40" width={Math.max(2, x(event.endYear) - markerX)} height="8" rx="4" fill="rgb(217 164 65 / 0.35)" />
      ) : null}
      <circle cx={markerX} cy="44" r="5.5" fill="#d9a441" stroke="#05070a" strokeWidth="2" />
      <text x={Math.min(300, Math.max(40, markerX))} y="26" textAnchor="middle" fontSize="11" fill="#e8c47a" fontFamily="var(--font-plex-mono)">
        {formatYear(event.year)}
      </text>
      <text x="16" y="62" fontSize="8.5" fill={MUTED} fontFamily="var(--font-plex-mono)">{formatYear(campaign.startYear)}</text>
      <text x="344" y="62" textAnchor="end" fontSize="8.5" fill={MUTED} fontFamily="var(--font-plex-mono)">{formatYear(campaign.endYear)}</text>
      {previous ? (
        <text x="16" y="86" fontSize="10" fill={INK} fontFamily="var(--font-inter)">← {clip(previous.title, 24)}</text>
      ) : null}
      {next ? (
        <text x="344" y="86" textAnchor="end" fontSize="10" fill={INK} fontFamily="var(--font-inter)">{clip(next.title, 24)} →</text>
      ) : null}
    </svg>
  );
}

const formatPoint = ([lon, lat]: LonLat) => `${Math.abs(lat).toFixed(0)}°${lat >= 0 ? "N" : "S"} ${Math.abs(lon).toFixed(0)}°${lon >= 0 ? "E" : "W"}`;

export function RouteSchematic({ arc }: { readonly arc: GeoArc }) {
  const legs = routeLegs(arc.path);
  const total = legs.reduce((sum, leg) => sum + leg, 0);
  const stops = arc.path.length;
  const x = (index: number) => 24 + (index / Math.max(1, stops - 1)) * 312;
  let cumulative = 0;
  const positions = arc.path.map((_, index) => {
    if (index > 0) cumulative += legs[index - 1] ?? 0;
    return total > 0 ? 24 + (cumulative / total) * 312 : x(index);
  });

  return (
    <svg viewBox="0 0 360 88" className="w-full" role="img" aria-label={`${arc.label} route profile`}>
      <path d={`M 24 46 H 336`} stroke="#d9a441" strokeWidth="1.5" className="flow-dash" fill="none" />
      {arc.path.map((point, index) => {
        const px = positions[index] ?? x(index);
        const endpoint = index === 0 || index === stops - 1;
        return (
          <g key={`${point[0]}-${point[1]}-${index}`}>
            <circle cx={px} cy="46" r={endpoint ? 5 : 3.5} fill={endpoint ? "#d9a441" : "#0b1016"} stroke="#d9a441" strokeWidth="1.5" />
            {endpoint ? (
              <text x={px} y="70" textAnchor={index === 0 ? "start" : "end"} dx={index === 0 ? -6 : 6} fontSize="8.5" fill={MUTED} fontFamily="var(--font-plex-mono)">
                {formatPoint(point)}
              </text>
            ) : null}
          </g>
        );
      })}
      {legs.map((leg, index) => {
        const mid = ((positions[index] ?? 0) + (positions[index + 1] ?? 0)) / 2;
        return leg / total > 0.12 ? (
          <text key={index} x={mid} y="34" textAnchor="middle" fontSize="9.5" fill={INK} fontFamily="var(--font-plex-mono)">{formatKm(leg)}</text>
        ) : null;
      })}
      <text x="24" y="14" fontSize="8.5" letterSpacing="1.4" fill={MUTED} fontFamily="var(--font-plex-mono)">GREAT-CIRCLE DISTANCE</text>
      <text x="336" y="14" textAnchor="end" fontSize="11" fill="#e8c47a" fontFamily="var(--font-plex-mono)">{formatKm(total)}</text>
    </svg>
  );
}
