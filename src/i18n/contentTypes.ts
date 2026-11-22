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

export interface CampaignTranslation extends CampaignMetaTranslation {
  readonly events?: Readonly<Record<string, EventTranslation>>;
}
