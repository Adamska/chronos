import { findCatalogEntry, loadChronicle } from "@/data/catalog";
import { vector3ToLonLat } from "@/geo/sphericalMath";
import { currentCamera } from "@/scene/cameraRef";
import { type Lens, useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { LonLat } from "@/types/chronicle";

const round = (value: number, digits = 2) => Number(value.toFixed(digits));

function encodeState(withCamera: boolean): string {
  const { campaign, year, selection } = useChronosStore.getState();
  const { lens, travelOrigin, knownPerspective } = useAtlasStore.getState();
  const params = new URLSearchParams();
  if (campaign && findCatalogEntry(campaign.id)) params.set("c", campaign.id);
  params.set("y", String(Math.round(year)));
  if (selection) params.set(selection.kind === "event" ? "e" : "r", selection.id);
  if (lens !== "none") params.set("lens", lens);
  if (lens === "travel" && travelOrigin) params.set("o", travelOrigin.coordinates.map((value) => round(value)).join(","));
  if (lens === "known") params.set("p", knownPerspective);
  const camera = currentCamera();
  if (withCamera && camera) {
    const [lon, lat] = vector3ToLonLat(camera.position);
    params.set("cam", [round(lon), round(lat), round(camera.position.length(), 3)].join(","));
  }
  return params.toString();
}

export function buildShareUrl(): string {
  return `${window.location.origin}${window.location.pathname}?${encodeState(true)}`;
}

export function syncUrl(): void {
  const next = `?${encodeState(false)}`;
  if (window.location.search !== next || window.location.hash) window.history.replaceState(null, "", `${window.location.pathname}${next}`);
}

function sharedParams(): URLSearchParams {
  const query = new URLSearchParams(window.location.search);
  return query.has("c") ? query : new URLSearchParams(window.location.hash.slice(1));
}

const parsePoint = (value: string | null): LonLat | null => {
  const [lon, lat] = (value ?? "").split(",").map(Number);
  return lon !== undefined && lat !== undefined && Number.isFinite(lon) && Number.isFinite(lat) ? [lon, lat] : null;
};

export async function restoreSharedView(): Promise<boolean> {
  const params = sharedParams();
  const campaign = await loadChronicle(params.get("c") ?? "");
  if (!campaign) return false;
  const store = useChronosStore.getState();
  store.loadCampaign(campaign);
  const year = Number(params.get("y"));
  if (Number.isFinite(year) && params.has("y")) store.setYear(year);
  const eventId = params.get("e");
  const arcId = params.get("r");
  if (eventId) store.select({ kind: "event", id: eventId });
  else if (arcId) store.select({ kind: "arc", id: arcId });

  const atlas = useAtlasStore.getState();
  const lens = params.get("lens") as Lens | null;
  const origin = parsePoint(params.get("o"));
  if (origin) atlas.setTravelOrigin({ coordinates: origin, label: `${Math.abs(origin[1]).toFixed(1)}°, ${Math.abs(origin[0]).toFixed(1)}°` });
  if (params.get("p")) atlas.setKnownPerspective(params.get("p") ?? "latin-europe");
  if (lens === "travel" || lens === "known") atlas.setLens(lens);

  const cameraPoint = params.get("cam");
  const [lon, lat, distance] = (cameraPoint ?? "").split(",").map(Number);
  if (cameraPoint && lon !== undefined && lat !== undefined && distance !== undefined && [lon, lat, distance].every(Number.isFinite)) {
    store.requestCamera({ id: "shared-view", year: store.year, title: "Shared view", caption: "", target: [lon, lat], altitude: Math.max(0.2, distance - 1), tilt: 0 });
  }
  return true;
}
