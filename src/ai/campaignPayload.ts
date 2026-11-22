import { z } from "zod";
import type { ChronicleCampaign } from "@/types/chronicle";

const LonLat = z.tuple([z.number().min(-360).max(360), z.number().min(-90).max(90)]);
const Layer = z.enum(["borders", "trade", "conflict", "science"]);

const Schematic = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("exchange"),
    westLabel: z.string(),
    eastLabel: z.string(),
    eastbound: z.array(z.string()),
    westbound: z.array(z.string()),
  }),
  z.object({ kind: z.literal("causal"), steps: z.array(z.string()) }),
]);

const Event = z.object({
  id: z.string(),
  title: z.string(),
  year: z.number(),
  endYear: z.number().optional(),
  place: z.string(),
  coordinates: LonLat,
  layer: Layer,
  significance: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
  wikipediaSlug: z.string(),
  summary: z.string(),
  context: z.string(),
  whyHere: z.string(),
  keyFigures: z.array(z.string()),
  primarySource: z.object({ excerpt: z.string(), attribution: z.string() }).optional(),
  schematic: Schematic.optional(),
});

const Arc = z.object({
  id: z.string(),
  label: z.string(),
  kind: z.enum(["trade", "migration", "military", "knowledge", "communication", "exploration"]),
  layer: Layer,
  path: z.array(LonLat).min(2),
  startYear: z.number(),
  endYear: z.number(),
  intensity: z.number(),
  cargo: z.array(z.string()).optional(),
  eventId: z.string().optional(),
});

const Territory = z.object({
  id: z.string(),
  name: z.string(),
  startYear: z.number(),
  endYear: z.number(),
  color: z.string(),
  polygon: z.array(LonLat).min(3),
  eventId: z.string().optional(),
});

const Chapter = z.object({
  id: z.string(),
  year: z.number(),
  title: z.string(),
  caption: z.string(),
  target: LonLat,
  altitude: z.number(),
  tilt: z.number(),
  eventId: z.string().optional(),
});

export const CampaignPayloadSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  summary: z.string(),
  startYear: z.number(),
  endYear: z.number(),
  accent: z.string(),
  keywords: z.array(z.string()),
  source: z.enum(["curated", "generated", "encyclopedia", "thread", "journey"]),
  chapters: z.array(Chapter),
  events: z.array(Event).min(1),
  arcs: z.array(Arc),
  territories: z.array(Territory),
});

export const ChronicleResponsePayloadSchema = z.object({
  campaign: CampaignPayloadSchema,
  mode: z.enum(["generated", "encyclopedia"]),
  notice: z.string().nullable(),
  focusEventId: z.string().nullable(),
});

export function parseCampaignPayload(value: unknown): ChronicleCampaign | null {
  const parsed = CampaignPayloadSchema.safeParse(value);
  return parsed.success ? parsed.data : null;
}
