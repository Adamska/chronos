import type { RegionHistory } from "@/types/world";

export const EUROPE_REGIONS: readonly RegionHistory[] = [
  {
    id: "643", name: "Russia",
    religion: [[-3000, "ancestral"], [1100, "christianity-orthodox"], [1960, "secular"], [1991, "christianity-orthodox"]],
    language: [[-3000, "other"], [-1500, "uralic"], [1000, "slavic"]],
  },
  {
    id: "804", name: "Ukraine",
    religion: [[-3000, "ancestral"], [1050, "christianity-orthodox"]],
    language: [[-3000, "other"], [-1500, "indo-iranian"], [600, "slavic"]],
  },
  {
    id: "112", name: "Belarus",
    religion: [[-3000, "ancestral"], [1100, "christianity-orthodox"], [1700, "christianity-catholic"], [1839, "christianity-orthodox"]],
    language: [[-3000, "other"], [700, "slavic"]],
  },
  {
    id: "616", name: "Poland",
    religion: [[-3000, "ancestral"], [1080, "christianity-catholic"]],
    language: [[-3000, "other"], [600, "slavic"]],
  },
  {
    id: "440", name: "Lithuania",
    religion: [[-3000, "ancestral"], [1420, "christianity-catholic"]],
    language: [[-3000, "other"]],
  },
  {
    id: "428", name: "Latvia",
    religion: [[-3000, "ancestral"], [1250, "christianity-catholic"], [1560, "christianity-protestant"]],
    language: [[-3000, "other"]],
  },
  {
    id: "233", name: "Estonia",
    religion: [[-3000, "ancestral"], [1250, "christianity-catholic"], [1550, "christianity-protestant"], [1960, "secular"]],
    language: [[-3000, "other"], [-1500, "uralic"]],
  },
  {
    id: "246", name: "Finland",
    religion: [[-3000, "ancestral"], [1250, "christianity-catholic"], [1550, "christianity-protestant"]],
    language: [[-3000, "other"], [-1500, "uralic"]],
  },
  {
    id: "752", name: "Sweden",
    religion: [[-3000, "ancestral"], [-1700, "ancient-polytheism"], [1100, "christianity-catholic"], [1550, "christianity-protestant"]],
    language: [[-3000, "other"], [-1700, "germanic"]],
  },
  {
    id: "578", name: "Norway",
    religion: [[-3000, "ancestral"], [-1700, "ancient-polytheism"], [1030, "christianity-catholic"], [1540, "christianity-protestant"]],
    language: [[-3000, "other"], [-1700, "germanic"]],
  },
  {
    id: "208", name: "Denmark",
    religion: [[-3000, "ancestral"], [-1700, "ancient-polytheism"], [1000, "christianity-catholic"], [1540, "christianity-protestant"]],
    language: [[-3000, "other"], [-1700, "germanic"]],
  },
  {
    id: "352", name: "Iceland",
    religion: [[-3000, "ancestral"], [874, "ancient-polytheism"], [1000, "christianity-catholic"], [1550, "christianity-protestant"]],
    language: [[-3000, "other"], [874, "germanic"]],
  },
  {
    id: "826", name: "United Kingdom",
    religion: [[-3000, "ancestral"], [-800, "ancient-polytheism"], [680, "christianity-catholic"], [1560, "christianity-protestant"]],
    language: [[-3000, "other"], [-800, "celtic"], [650, "germanic"]],
  },
  {
    id: "372", name: "Ireland",
    religion: [[-3000, "ancestral"], [-600, "ancient-polytheism"], [550, "christianity-catholic"]],
    language: [[-3000, "other"], [-600, "celtic"], [1820, "germanic"]],
  },
  {
    id: "250", name: "France",
    religion: [[-3000, "ancestral"], [-800, "ancient-polytheism"], [450, "christianity-catholic"]],
    language: [[-3000, "other"], [-800, "celtic"], [450, "romance"]],
  },
  {
    id: "724", name: "Spain",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [400, "christianity-catholic"], [950, "islam-sunni"], [1150, "christianity-catholic"]],
    language: [[-3000, "other"], [-100, "romance"]],
  },
  {
    id: "620", name: "Portugal",
    religion: [[-3000, "ancestral"], [-600, "ancient-polytheism"], [450, "christianity-catholic"]],
    language: [[-3000, "other"], [-700, "celtic"], [50, "romance"]],
  },
  {
    id: "380", name: "Italy",
    religion: [[-3000, "ancestral"], [-800, "ancient-polytheism"], [400, "christianity-catholic"]],
    language: [[-3000, "other"], [-300, "romance"]],
  },
  {
    id: "756", name: "Switzerland",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [650, "christianity-catholic"], [1530, "christianity-protestant"], [1970, "christianity-catholic"]],
    language: [[-3000, "other"], [-500, "celtic"], [50, "romance"], [700, "germanic"]],
  },
  {
    id: "276", name: "Germany",
    religion: [[-3000, "ancestral"], [-800, "ancient-polytheism"], [800, "christianity-catholic"], [1550, "christianity-protestant"]],
    language: [[-3000, "other"], [-600, "celtic"], [-100, "germanic"]],
  },
  {
    id: "040", name: "Austria",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [750, "christianity-catholic"], [1570, "christianity-protestant"], [1630, "christianity-catholic"]],
    language: [[-3000, "other"], [-500, "celtic"], [600, "germanic"]],
  },
  {
    id: "528", name: "Netherlands",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [750, "christianity-catholic"], [1600, "christianity-protestant"], [1960, "christianity-catholic"], [2015, "secular"]],
    language: [[-3000, "other"], [-500, "germanic"]],
  },
  {
    id: "056", name: "Belgium",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [650, "christianity-catholic"]],
    language: [[-3000, "other"], [-500, "celtic"], [450, "germanic"]],
  },
  {
    id: "442", name: "Luxembourg",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [650, "christianity-catholic"]],
    language: [[-3000, "other"], [-500, "celtic"], [450, "germanic"]],
  },
  {
    id: "203", name: "Czechia",
    religion: [[-3000, "ancestral"], [-400, "ancient-polytheism"], [600, "ancestral"], [950, "christianity-catholic"], [1420, "christianity-protestant"], [1630, "christianity-catholic"], [1980, "secular"]],
    language: [[-3000, "other"], [-400, "celtic"], [10, "germanic"], [600, "slavic"]],
  },
  {
    id: "703", name: "Slovakia",
    religion: [[-3000, "ancestral"], [-300, "ancient-polytheism"], [550, "ancestral"], [950, "christianity-catholic"], [1570, "christianity-protestant"], [1700, "christianity-catholic"]],
    language: [[-3000, "other"], [-300, "celtic"], [550, "slavic"]],
  },
  {
    id: "348", name: "Hungary",
    religion: [[-3000, "ancestral"], [-300, "ancient-polytheism"], [450, "ancestral"], [1050, "christianity-catholic"], [1570, "christianity-protestant"], [1700, "christianity-catholic"]],
    language: [[-3000, "other"], [-300, "celtic"], [600, "slavic"], [900, "uralic"]],
  },
  {
    id: "705", name: "Slovenia",
    religion: [[-3000, "ancestral"], [-300, "ancient-polytheism"], [400, "christianity-catholic"], [600, "ancestral"], [800, "christianity-catholic"]],
    language: [[-3000, "other"], [-300, "celtic"], [600, "slavic"]],
  },
  {
    id: "191", name: "Croatia",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [400, "christianity-catholic"], [650, "ancestral"], [850, "christianity-catholic"]],
    language: [[-3000, "other"], [650, "slavic"]],
  },
  {
    id: "070", name: "Bosnia and Herz.",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [400, "christianity-catholic"], [650, "ancestral"], [900, "christianity-catholic"], [1600, "islam-sunni"], [1870, "christianity-orthodox"], [1971, "islam-sunni"]],
    language: [[-3000, "other"], [650, "slavic"]],
  },
  {
    id: "688", name: "Serbia",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [400, "christianity-catholic"], [620, "ancestral"], [880, "christianity-orthodox"]],
    language: [[-3000, "other"], [620, "slavic"]],
  },
  {
    id: "499", name: "Montenegro",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [400, "christianity-catholic"], [620, "ancestral"], [900, "christianity-orthodox"]],
    language: [[-3000, "other"], [620, "slavic"]],
  },
  {
    id: "Kosovo", name: "Kosovo",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [400, "christianity-catholic"], [620, "ancestral"], [880, "christianity-orthodox"], [1800, "islam-sunni"]],
    language: [[-3000, "other"], [620, "slavic"], [1800, "other"]],
  },
  {
    id: "807", name: "Macedonia",
    religion: [[-3000, "ancestral"], [-700, "ancient-polytheism"], [400, "christianity-orthodox"], [600, "ancestral"], [870, "christianity-orthodox"]],
    language: [[-3000, "other"], [600, "slavic"]],
  },
  {
    id: "008", name: "Albania",
    religion: [[-3000, "ancestral"], [-600, "ancient-polytheism"], [400, "christianity-orthodox"], [1650, "islam-sunni"], [1967, "secular"], [1991, "islam-sunni"]],
    language: [[-3000, "other"]],
  },
  {
    id: "300", name: "Greece",
    religion: [[-3000, "ancestral"], [-2000, "ancient-polytheism"], [400, "christianity-orthodox"]],
    language: [[-3000, "other"], [-2000, "hellenic"]],
  },
  {
    id: "100", name: "Bulgaria",
    religion: [[-3000, "ancestral"], [-600, "ancient-polytheism"], [400, "christianity-orthodox"], [650, "ancestral"], [870, "christianity-orthodox"]],
    language: [[-3000, "other"], [700, "slavic"]],
  },
  {
    id: "642", name: "Romania",
    religion: [[-3000, "ancestral"], [-500, "ancient-polytheism"], [900, "christianity-orthodox"]],
    language: [[-3000, "other"], [500, "romance"]],
  },
  {
    id: "498", name: "Moldova",
    religion: [[-3000, "ancestral"], [1000, "christianity-orthodox"]],
    language: [[-3000, "other"], [600, "slavic"], [1350, "romance"]],
  },
  {
    id: "196", name: "Cyprus",
    religion: [[-3000, "ancestral"], [-1500, "ancient-polytheism"], [400, "christianity-orthodox"]],
    language: [[-3000, "other"], [-1000, "hellenic"]],
  },
  {
    id: "N. Cyprus", name: "N. Cyprus",
    religion: [[-3000, "ancestral"], [-1500, "ancient-polytheism"], [400, "christianity-orthodox"], [1975, "islam-sunni"]],
    language: [[-3000, "other"], [-1000, "hellenic"], [1975, "turkic"]],
  },
];
