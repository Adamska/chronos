export interface SchematicTranslation {
  readonly westLabel?: string;
  readonly eastLabel?: string;
  readonly eastbound?: readonly string[];
  readonly westbound?: readonly string[];
  readonly steps?: readonly string[];
}

export interface EventTranslation {
  readonly title?: string;
  readonly place?: string;
  readonly summary?: string;
  readonly context?: string;
  readonly whyHere?: string;
  readonly schematic?: SchematicTranslation;
}

export interface CampaignMetaTranslation {
  readonly title?: string;
  readonly subtitle?: string;
  readonly summary?: string;
  readonly keywords?: readonly string[];
  readonly chapters?: Readonly<Record<string, { readonly title?: string; readonly caption?: string }>>;
  readonly arcs?: Readonly<Record<string, { readonly label?: string; readonly cargo?: readonly string[] }>>;
  readonly territories?: Readonly<Record<string, { readonly name?: string }>>;
}

export interface FigureTranslation {
  readonly name?: string;
  readonly role?: string;
  readonly places?: readonly { readonly place?: string; readonly note?: string }[];
}

export interface StoryTranslation {
  readonly steps?: Readonly<Record<string, { readonly title?: string; readonly narration?: string }>>;
  readonly figures?: Readonly<Record<string, FigureTranslation>>;
}

export interface CampaignTranslation extends CampaignMetaTranslation, StoryTranslation {
  readonly events?: Readonly<Record<string, EventTranslation>>;
}
