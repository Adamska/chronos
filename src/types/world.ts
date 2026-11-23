import type { LonLat } from "@/types/chronicle";

export type WorldEventCategory = "war" | "politics" | "religion" | "science" | "culture" | "exploration" | "economy";

export interface WorldEvent {
  readonly id: string;
  readonly year: number;
  readonly endYear?: number;
  readonly title: string;
  readonly place: string;
  readonly coordinates: LonLat;
  readonly category: WorldEventCategory;
  readonly significance: 3 | 4 | 5;
  readonly wikipediaSlug: string;
  readonly summary: string;
}

export interface TradeRoute {
  readonly id: string;
  readonly name: string;
  readonly medium: "land" | "sea" | "river";
  readonly startYear: number;
  readonly endYear: number;
  readonly path: readonly LonLat[];
  readonly goods: readonly string[];
  readonly summary: string;
}

export type ReligionId =
  | "ancestral"
  | "ancient-polytheism"
  | "zoroastrianism"
  | "judaism"
  | "christianity-catholic"
  | "christianity-orthodox"
  | "christianity-eastern"
  | "christianity-protestant"
  | "islam-sunni"
  | "islam-shia"
  | "hinduism"
  | "buddhism"
  | "east-asian-traditions"
  | "secular";

export type LanguageId =
  | "romance"
  | "germanic"
  | "slavic"
  | "celtic"
  | "hellenic"
  | "indo-iranian"
  | "semitic"
  | "egyptian"
  | "berber"
  | "turkic"
  | "mongolic"
  | "sino-tibetan"
  | "japonic-koreanic"
  | "austroasiatic-tai"
  | "austronesian"
  | "dravidian"
  | "uralic"
  | "niger-congo"
  | "nilo-saharan"
  | "indigenous-americas"
  | "other";

export type Timeline<T extends string> = readonly (readonly [fromYear: number, value: T])[];

export interface RegionHistory {
  readonly id: string;
  readonly name: string;
  readonly religion: Timeline<ReligionId>;
  readonly language: Timeline<LanguageId>;
}

export interface CategoryStyle {
  readonly color: string;
  readonly en: string;
  readonly fr: string;
}
