import { DEFAULT_CHRONICLE_ID, findCatalogEntry, loadChronicle } from "@/data/catalog";
import { vector3ToLonLat } from "@/geo/sphericalMath";
import { currentCamera } from "@/scene/cameraRef";
import { BASE_MAPS, type BaseMap, type Lens, OVERLAYS, type Overlay, useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { LonLat } from "@/types/chronicle";

const round = (value: number, digits = 2) => Number(value.toFixed(digits));

function encodeState(withCamera: boolean): string {
  const { campaign, year, mode, stepIndex, figureId, selection } = useChronosStore.getState();
  const atlas = useAtlasStore.getState();
  const params = new URLSearchParams();
  if (campaign && findCatalogEntry(campaign.id)) params.set("c", campaign.id);
  if (mode === "story") {
    params.set("s", String(stepIndex + 1));
    if (figureId) params.set("f", figureId);
    if (selection?.kind === "event") params.set("e", selection.id);
    if (atlas.storyBorders) params.set("borders", "1");
  } else {
    params.set("m", "atlas");
    params.set("y", String(Math.round(year)));
    params.set("b", atlas.baseMap);
    params.set("o", OVERLAYS.filter((overlay) => atlas.overlays[overlay]).join(","));
    if (atlas.lens !== "none") params.set("lens", atlas.lens);
    if (atlas.lens === "travel" && atlas.travelOrigin) params.set("from", atlas.travelOrigin.coordinates.map((value) => round(value)).join(","));
    if (atlas.lens === "known") params.set("p", atlas.knownPerspective);
  }
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

const parsePoint = (value: string | null): LonLat | null => {
  const [lon, lat] = (value ?? "").split(",").map(Number);
  return lon !== undefined && lat !== undefined && Number.isFinite(lon) && Number.isFinite(lat) ? [lon, lat] : null;
};

function restoreAtlas(params: URLSearchParams): void {
  const atlas = useAtlasStore.getState();
  const base = params.get("b") as BaseMap | null;
  if (base && BASE_MAPS.includes(base)) atlas.setBaseMap(base);
  if (params.has("o")) {
    const wanted = new Set((params.get("o") ?? "").split(",").filter(Boolean));
    useAtlasStore.setState({ overlays: Object.fromEntries(OVERLAYS.map((overlay) => [overlay, wanted.has(overlay)])) as Record<Overlay, boolean> });
  }
  const origin = parsePoint(params.get("from"));
  if (origin) atlas.setTravelOrigin({ coordinates: origin, label: `${Math.abs(origin[1]).toFixed(1)}°, ${Math.abs(origin[0]).toFixed(1)}°` });
  if (params.get("p")) atlas.setKnownPerspective(params.get("p") ?? "latin-europe");
  const lens = params.get("lens") as Lens | null;
  if (lens === "travel" || lens === "known") useAtlasStore.setState({ lens });
  const store = useChronosStore.getState();
  store.setMode("atlas");
  const year = Number(params.get("y"));
  if (params.has("y") && Number.isFinite(year)) store.setYear(year);
}

export async function restoreSharedView(): Promise<boolean> {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("c") && params.get("m") !== "atlas") return false;
  const campaign = await loadChronicle(params.get("c") ?? DEFAULT_CHRONICLE_ID);
  const store = useChronosStore.getState();
  if (campaign) store.loadCampaign(campaign);
  if (params.get("m") === "atlas") restoreAtlas(params);
  else if (campaign) {
    const step = Number(params.get("s"));
    if (Number.isFinite(step) && step > 1) store.goToStep(step - 1);
    if (params.get("f")) store.showFigure(params.get("f"));
    if (params.get("e")) store.select({ kind: "event", id: params.get("e") ?? "" });
    if (params.get("borders") === "1") useAtlasStore.setState({ storyBorders: true });
  } else return false;
  const [lon, lat, distance] = (params.get("cam") ?? "").split(",").map(Number);
  if (params.has("cam") && lon !== undefined && lat !== undefined && distance !== undefined && [lon, lat, distance].every(Number.isFinite)) {
    store.requestCamera({ id: "shared-view", year: store.year, title: "", caption: "", target: [lon, lat], altitude: Math.max(0.2, distance - 1), tilt: 0 });
  }
  return true;
}
