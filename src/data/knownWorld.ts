export type KnownRegion = readonly [lon: number, lat: number, radiusDegrees: number];

export interface KnownSnapshot {
  readonly year: number;
  readonly note: string;
  readonly regions: readonly KnownRegion[];
}

export interface KnownPerspective {
  readonly id: string;
  readonly label: string;
  readonly vantage: string;
  readonly snapshots: readonly KnownSnapshot[];
}

export const KNOWN_PERSPECTIVES: readonly KnownPerspective[] = [
  {
    id: "greco-roman",
    label: "Greco-Roman geographers",
    vantage: "Alexandria and Rome",
    snapshots: [
      { year: -500, note: "Hecataeus of Miletus: a disc of lands ringed by Ocean.", regions: [[15, 38, 17], [35, 44, 8], [42, 33, 11], [31, 26, 8], [53, 32, 9]] },
      {
        year: 150,
        note: "Ptolemy's Geography: from the Fortunate Isles to the Sinae.",
        regions: [[10, 45, 21], [35, 45, 10], [50, 32, 15], [45, 20, 10], [77, 20, 11], [32, 14, 13], [65, 40, 10], [81, 7, 4], [100, 10, 7], [0, 52, 8], [12, 57, 5]],
      },
    ],
  },
  {
    id: "chinese",
    label: "Han and Tang Chinese geographers",
    vantage: "Chang'an",
    snapshots: [
      { year: -100, note: "After Zhang Qian: the Western Regions as far as Bactria and Parthia.", regions: [[110, 33, 16], [127, 38, 5], [76, 40, 11], [62, 36, 9], [103, 46, 9], [106, 18, 6]] },
      {
        year: 750,
        note: "Tang itineraries reach Persia, India and the Arab caliphate.",
        regions: [[110, 32, 17], [137, 36, 6], [127, 38, 5], [70, 40, 15], [53, 32, 10], [78, 20, 13], [103, 10, 12], [44, 30, 8], [81, 7, 4]],
      },
    ],
  },
  {
    id: "islamic",
    label: "Islamic geographers",
    vantage: "Baghdad and Palermo",
    snapshots: [
      {
        year: 950,
        note: "Al-Mas'udi: from al-Andalus to the China coast and the land of Zanj.",
        regions: [[45, 30, 18], [5, 32, 14], [-4, 40, 6], [65, 40, 14], [78, 20, 14], [40, -5, 10], [115, 25, 10], [105, 5, 12], [20, 42, 12], [45, 52, 10]],
      },
      {
        year: 1154,
        note: "Al-Idrisi's Tabula Rogeriana, drawn for Roger II of Sicily.",
        regions: [[45, 30, 18], [5, 32, 15], [-4, 40, 7], [65, 40, 14], [78, 20, 14], [40, -5, 10], [115, 25, 10], [105, 5, 12], [10, 48, 16], [15, 60, 8], [-5, 15, 10], [45, 52, 10]],
      },
    ],
  },
  {
    id: "latin-europe",
    label: "Latin Europe",
    vantage: "Lisbon, Seville and Amsterdam",
    snapshots: [
      { year: 1000, note: "Christendom, the Mediterranean and the Norse North Atlantic.", regions: [[10, 48, 18], [18, 38, 14], [40, 33, 8], [-20, 63, 9], [-45, 62, 6], [-56, 50, 4]] },
      {
        year: 1400,
        note: "Portolan charts, the Canaries and Marco Polo's reports of Cathay.",
        regions: [[10, 48, 20], [18, 37, 16], [42, 32, 12], [5, 30, 10], [-15, 28, 4], [40, 55, 10], [65, 42, 9], [112, 32, 9]],
      },
      {
        year: 1500,
        note: "Africa rounded, India reached by sea, the Caribbean charted.",
        regions: [[10, 48, 20], [18, 37, 16], [42, 32, 12], [5, 30, 10], [-10, 10, 10], [20, -30, 8], [40, -5, 8], [76, 15, 10], [-72, 20, 8], [-38, -10, 6], [-30, 20, 14], [40, 55, 10]],
      },
      {
        year: 1550,
        note: "After Magellan: two oceans crossed and the Spice Islands reached.",
        regions: [[10, 48, 20], [18, 37, 16], [42, 32, 12], [5, 20, 16], [20, -20, 14], [45, 0, 12], [75, 15, 13], [-90, 20, 15], [-60, -15, 16], [-72, -35, 8], [-150, 10, 10], [150, 10, 8], [110, 5, 14], [137, 36, 5], [115, 25, 10], [-30, 20, 14]],
      },
      {
        year: 1700,
        note: "Coasts of every inhabited continent charted; interiors still largely blank.",
        regions: [[10, 48, 22], [30, 35, 18], [5, 20, 18], [20, -20, 16], [45, 0, 14], [75, 18, 15], [-80, 40, 15], [-95, 20, 14], [-60, -15, 20], [-72, -40, 10], [-150, 10, 12], [150, 10, 10], [110, 10, 16], [137, 36, 6], [115, 30, 12], [100, 60, 14], [118, -25, 8], [170, -42, 6], [-30, 20, 16]],
      },
    ],
  },
  {
    id: "polynesian",
    label: "Polynesian navigators",
    vantage: "Ra'iātea",
    snapshots: [
      { year: 1300, note: "The Polynesian Triangle: Hawai'i, Rapa Nui and Aotearoa.", regions: [[-150, -17, 13], [-157, 20, 6], [-109, -27, 4], [174, -40, 8], [-175, -15, 9], [178, -17, 7], [-140, -10, 7]] },
    ],
  },
];

export function snapshotFor(perspective: KnownPerspective, year: number): KnownSnapshot | undefined {
  const eligible = perspective.snapshots.filter((snapshot) => snapshot.year <= year);
  return eligible[eligible.length - 1] ?? perspective.snapshots[0];
}

export function perspectiveFor(id: string): KnownPerspective {
  return KNOWN_PERSPECTIVES.find((perspective) => perspective.id === id) ?? (KNOWN_PERSPECTIVES[3] as KnownPerspective);
}
