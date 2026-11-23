import type { RegionHistory } from "@/types/world";

export const OCEANIA_REGIONS: readonly RegionHistory[] = [
  {
    id: "036", name: "Australia",
    religion: [[-3000, "ancestral"], [1845, "christianity-protestant"]],
    language: [[-3000, "other"], [1845, "germanic"]],
  },
  {
    id: "554", name: "New Zealand",
    religion: [[-3000, "ancestral"], [1860, "christianity-protestant"], [2023, "secular"]],
    language: [[-3000, "other"], [1280, "austronesian"], [1860, "germanic"]],
  },
  {
    id: "598", name: "Papua New Guinea",
    religion: [[-3000, "ancestral"], [1950, "christianity-protestant"]],
    language: [[-3000, "other"]],
  },
  {
    id: "090", name: "Solomon Is.",
    religion: [[-3000, "ancestral"], [1930, "christianity-protestant"]],
    language: [[-3000, "other"], [-1000, "austronesian"]],
  },
  {
    id: "548", name: "Vanuatu",
    religion: [[-3000, "ancestral"], [1920, "christianity-protestant"]],
    language: [[-3000, "other"], [-1000, "austronesian"]],
  },
  {
    id: "242", name: "Fiji",
    religion: [[-3000, "ancestral"], [1860, "christianity-protestant"]],
    language: [[-3000, "other"], [-1000, "austronesian"]],
  },
  {
    id: "540", name: "New Caledonia",
    religion: [[-3000, "ancestral"], [1900, "christianity-catholic"]],
    language: [[-3000, "other"], [-1100, "austronesian"], [1960, "romance"]],
  },
  {
    id: "260", name: "Fr. S. Antarctic Lands",
    religion: [[-3000, "ancestral"], [1950, "christianity-catholic"]],
    language: [[-3000, "other"], [1950, "romance"]],
  },
];
