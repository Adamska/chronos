import { z } from "zod";
import type { ChronicleCampaign } from "@/types/chronicle";

const LAYERS = ["borders", "trade", "conflict", "science"] as const;
const ARC_KINDS = ["trade", "migration", "military", "knowledge", "communication", "exploration"] as const;

const PointSchema = z
  .object({
    lon: z.number().describe("Longitude in decimal degrees, -180 (west) to 180 (east)."),
    lat: z.number().describe("Latitude in decimal degrees, -90 (south) to 90 (north)."),
  })
  .describe("A geographic coordinate. Double-check that longitude and latitude are not swapped.");

const YearSchema = z.number().int().describe("Calendar year. Negative for BCE (e.g. -130), positive for CE. Year 0 does not exist.");

const SchematicSchema = z
  .object({
    kind: z.enum(["exchange", "causal"]),
    westLabel: z.string().describe("Exchange only: name of the western or origin node. Empty string for causal."),
    eastLabel: z.string().describe("Exchange only: name of the eastern or destination node. Empty string for causal."),
    eastbound: z.array(z.string()).describe("Exchange only: 2-5 goods or ideas flowing east. Empty for causal."),
    westbound: z.array(z.string()).describe("Exchange only: 2-5 goods or ideas flowing west. Empty for causal."),
    steps: z.array(z.string()).describe("Causal only: 3-5 short cause-to-effect steps of at most six words. Empty for exchange."),
  })
  .describe("A compact diagram rendered in the event dossier.");

const EventSchema = z.object({
  id: z.string().describe("Unique kebab-case id."),
  title: z.string(),
  year: YearSchema,
  endYear: YearSchema.nullable().describe("End year for multi-year events, otherwise null."),
  place: z.string().describe("City, region or landmark name."),
  coordinates: PointSchema,
  layer: z.enum(LAYERS),
  significance: z.number().int().describe("Historical significance from 1 (minor) to 5 (world-historical turning point)."),
  wikipediaSlug: z.string().describe("Exact English Wikipedia article title with underscores, e.g. Battle_of_Talas."),
  summary: z.string().describe("One or two sentences describing what happened."),
  context: z.string().describe("Two or three sentences of geopolitical context."),
  whyHere: z.string().describe("One to three sentences on the geographic reason this happened at this location."),
  keyFigures: z.array(z.string()).describe("One to four real historical figures."),
  primarySource: z
    .object({ excerpt: z.string(), attribution: z.string() })
    .nullable()
    .describe("A genuine, verifiable primary source excerpt under 40 words, or null when not certain. Never invent quotes."),
  schematic: SchematicSchema.nullable(),
});

const ArcSchema = z.object({
  id: z.string(),
  label: z.string(),
  kind: z.enum(ARC_KINDS),
  layer: z.enum(LAYERS),
  path: z.array(PointSchema).describe("Two to six waypoints following the real historical route."),
  startYear: YearSchema,
  endYear: YearSchema,
  intensity: z.number().describe("Traffic volume or importance from 0.2 to 1."),
  cargo: z.array(z.string()).describe("Two to five goods, people or ideas carried."),
  eventId: z.string().nullable().describe("Id of the most closely related event, or null."),
});

const TerritorySchema = z.object({
  id: z.string(),
  name: z.string(),
  startYear: YearSchema,
  endYear: YearSchema,
  color: z.string().describe("Muted cartographic hex colour such as #b4875a."),
  polygon: z.array(PointSchema).describe("10 to 24 boundary points in order, simple and non-self-intersecting, not crossing the antimeridian."),
});

const ChapterSchema = z.object({
  id: z.string(),
  year: YearSchema,
  title: z.string().describe("Two to five words."),
  caption: z.string().describe("One evocative but factual sentence."),
  target: PointSchema.describe("Centre of the region the camera should frame."),
  altitude: z.number().describe("Camera altitude above the surface in globe radii: 0.9 regional, 1.6 continental, 2.2 hemispheric."),
  tilt: z.number().describe("Camera tilt in degrees from straight down, 0 to 35."),
  eventId: z.string().nullable(),
});

export const ChronicleCampaignSchema = z.object({
  title: z.string(),
  subtitle: z.string().describe("A short editorial tagline."),
  summary: z.string().describe("Two or three sentences framing the story and its geography."),
  startYear: YearSchema,
  endYear: YearSchema,
  keywords: z.array(z.string()).describe("Ten to fifteen lowercase search terms."),
  chapters: z.array(ChapterSchema).describe("Five to eight chronological camera chapters."),
  events: z.array(EventSchema).describe("Twelve to twenty chronological events."),
  arcs: z.array(ArcSchema).describe("Six to fourteen great-circle routes."),
  territories: z.array(TerritorySchema).describe("Two to six polities or spheres of influence."),
});

export type GeneratedCampaign = z.infer<typeof ChronicleCampaignSchema>;

export const ChronicleRequestSchema = z.object({
  query: z.string().trim().min(3, "Describe a historical topic in a few words.").max(200),
  locale: z.enum(["en", "fr"]).default("en"),
});

export type ChronicleRequest = z.infer<typeof ChronicleRequestSchema>;

export interface ChronicleResponse {
  readonly campaign: ChronicleCampaign;
  readonly mode: "generated" | "encyclopedia";
  readonly notice: string | null;
  readonly focusEventId: string | null;
}
