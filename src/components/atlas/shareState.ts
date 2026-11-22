import { z } from "zod";
import { CampaignPayloadSchema } from "@/ai/campaignPayload";
import { ClassChallengeSchema } from "@/classroom/schema";
import { findCatalogEntry, loadChronicle } from "@/data/catalog";
import { vector3ToLonLat } from "@/geo/sphericalMath";
import { translate } from "@/i18n/dictionaries";
import { currentCamera } from "@/scene/cameraRef";
import { type Lens, useAtlasStore } from "@/store/useAtlasStore";
import { useChallengeStore } from "@/store/useChallengeStore";
import { useChronosStore } from "@/store/useChronosStore";
import { useGenerationStore } from "@/store/useGenerationStore";
import type { ChronicleCampaign, LonLat } from "@/types/chronicle";

async function loadSharedChronicle(id: string): Promise<ChronicleCampaign | null> {
  try {
    const response = await fetch(`/api/chronicle/shared/${encodeURIComponent(id)}`);
    if (!response.ok) return null;
    const body = (await response.json()) as { campaign?: unknown };
    const parsed = CampaignPayloadSchema.safeParse(body.campaign);
    if (!parsed.success) return null;
    useGenerationStore.getState().rememberShare(parsed.data.id, id);
    return parsed.data;
  } catch {
    return null;
  }
}

const round = (value: number, digits = 2) => Number(value.toFixed(digits));

function encodeState(withCamera: boolean): string {
  const { campaign, year, selection } = useChronosStore.getState();
  const { lens, travelOrigin, knownPerspective } = useAtlasStore.getState();
  const params = new URLSearchParams();
  const shareId = campaign ? useGenerationStore.getState().shares[campaign.id] : undefined;
  if (campaign && findCatalogEntry(campaign.id)) params.set("c", campaign.id);
  else if (shareId) params.set("g", shareId);
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
  return query.has("c") || query.has("g") || query.has("class") ? query : new URLSearchParams(window.location.hash.slice(1));
}

const parsePoint = (value: string | null): LonLat | null => {
  const [lon, lat] = (value ?? "").split(",").map(Number);
  return lon !== undefined && lat !== undefined && Number.isFinite(lon) && Number.isFinite(lat) ? [lon, lat] : null;
};

const ClassChallengeReply = z.object({ challenge: ClassChallengeSchema });

async function joinClassChallenge(code: string): Promise<boolean> {
  const response = await fetch(`/api/classroom/challenges/${encodeURIComponent(code)}`).catch(() => null);
  const parsed = ClassChallengeReply.safeParse(await response?.json().catch(() => null));
  if (!parsed.success) return false;
  const campaign = await loadChronicle(parsed.data.challenge.campaignId);
  if (!campaign) return false;
  useChronosStore.getState().loadCampaign(campaign);
  useChallengeStore.getState().joinClass(parsed.data.challenge.code, parsed.data.challenge.eventIds, parsed.data.challenge.difficulty);
  useAtlasStore.getState().setChallengeActive(true);
  return true;
}

export async function restoreSharedView(): Promise<boolean> {
  const params = sharedParams();
  const classParam = params.get("class");
  if (classParam) return joinClassChallenge(classParam.toUpperCase());
  const campaign = params.get("g") ? await loadSharedChronicle(params.get("g") ?? "") : await loadChronicle(params.get("c") ?? "");
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

  const challenge = params.get("challenge");
  if (challenge === "easy" || challenge === "normal" || challenge === "hard") {
    useChallengeStore.setState({ difficulty: challenge });
    atlas.setChallengeActive(true);
  }

  const cameraPoint = params.get("cam");
  const [lon, lat, distance] = (cameraPoint ?? "").split(",").map(Number);
  if (cameraPoint && lon !== undefined && lat !== undefined && distance !== undefined && [lon, lat, distance].every(Number.isFinite)) {
    store.requestCamera({ id: "shared-view", year: store.year, title: translate("share.viewTitle"), caption: "", target: [lon, lat], altitude: Math.max(0.2, distance - 1), tilt: 0 });
  }
  return true;
}
