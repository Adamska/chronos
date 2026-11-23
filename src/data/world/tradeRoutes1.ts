import type { TradeRoute } from "@/types/world";

export const routes1: readonly TradeRoute[] = [
  {
    id: "route-gulf-meluhha",
    name: "Gulf trade with Meluhha",
    medium: "sea",
    startYear: -2600,
    endYear: -1900,
    path: [
      [46.1, 30.96], [48.8, 29.4], [50.6, 26.3], [53.5, 26.6], [56.4, 26.4], [61.5, 24.9], [67.3, 24.2], [68.6, 22.4],
      [70.8, 20.5], [72.25, 22.52],
    ],
    goods: ["carnelian", "copper", "timber", "ivory"],
    summary:
      "Ships linked Sumerian cities with Dilmun (Bahrain), Magan (Oman) and Meluhha, the Indus civilisation, carrying carnelian beads, copper, timber and ivory along the Gulf and the Makran coast.",
  },
  {
    id: "route-amber-road",
    name: "Amber Road",
    medium: "land",
    startYear: -1600,
    endYear: 400,
    path: [
      [18.65, 54.35], [18.09, 51.76], [17.03, 51.11], [16.86, 48.11], [15.87, 46.42], [14.5, 46.05], [13.37, 45.77],
    ],
    goods: ["amber", "furs", "bronze", "glass"],
    summary:
      "Baltic amber reached the Mediterranean from the Bronze Age; in Roman times a road ran from Aquileia via Carnuntum on the Danube to the Baltic coast, trading for Roman goods.",
  },
  {
    id: "route-incense",
    name: "Incense Route",
    medium: "land",
    startYear: -700,
    endYear: 200,
    path: [
      [54.43, 17.04], [47, 15.37], [45.33, 15.42], [44.13, 17.49], [39.61, 24.47], [37.92, 26.62], [35.44, 30.33],
      [34.46, 31.5],
    ],
    goods: ["frankincense", "myrrh", "spices"],
    summary:
      "Camel caravans carried frankincense and myrrh from southern Arabia through Marib, Najran and Dedan to Petra and Gaza, enriching the Sabaean and Nabataean kingdoms.",
  },
  {
    id: "route-silk-roads",
    name: "Silk Roads (overland)",
    medium: "land",
    startYear: -130,
    endYear: 1450,
    path: [
      [108.94, 34.26], [94.66, 40.14], [89.18, 42.95], [82.96, 41.72], [75.99, 39.47], [66.96, 39.65], [62.19, 37.66],
      [51.43, 35.6], [44.4, 33.3], [36.16, 36.2],
    ],
    goods: ["silk", "horses", "silver", "glass", "paper"],
    summary:
      "A web of caravan routes linked Han and Tang China through the oases of the Tarim Basin to Samarkand, Persia and the Mediterranean, carrying goods, religions and technologies across Eurasia.",
  },
  {
    id: "route-red-sea-india",
    name: "Red Sea and monsoon route to India",
    medium: "sea",
    startYear: -100,
    endYear: 600,
    path: [[35.47, 23.91], [39.8, 18.5], [43.4, 12.6], [52, 12], [76.2, 10.15]],
    goods: ["pepper", "gold coins", "wine", "gems"],
    summary:
      "Using the monsoon winds, Roman-era ships sailed from Berenice through Bab-el-Mandeb and across the Arabian Sea to Muziris on the Malabar Coast, trading gold and wine for pepper and gems.",
  },
  {
    id: "route-maritime-silk-road",
    name: "Maritime Silk Road",
    medium: "sea",
    startYear: -100,
    endYear: 1500,
    path: [
      [113.26, 23], [110.8, 17.2], [109.6, 11.5], [104.4, 1.2], [95, 6.2], [80.5, 5.6], [76, 8], [58.5, 24.5],
      [56.6, 26.4], [52.3, 27.66],
    ],
    goods: ["silk", "porcelain", "spices", "cotton", "incense"],
    summary:
      "Ships riding the monsoons linked southern China, the Strait of Malacca, Sri Lanka and India with the Persian Gulf, carrying Chinese silk and porcelain west and spices, cotton and incense east.",
  },
  {
    id: "route-roman-grain",
    name: "Alexandria grain fleet",
    medium: "sea",
    startYear: -30,
    endYear: 330,
    path: [[29.9, 31.2], [25.5, 34.3], [19, 36.5], [15.62, 38], [14.05, 40.75], [12.25, 41.73]],
    goods: ["grain", "papyrus", "glass", "linen"],
    summary:
      "Each year large freighters carried Egyptian wheat from Alexandria to Puteoli and Ostia to feed Rome; after 330 the Egyptian grain was sent instead to Constantinople.",
  },
  {
    id: "route-trans-saharan",
    name: "Trans-Saharan gold and salt route",
    medium: "land",
    startYear: 750,
    endYear: 1600,
    path: [[-5, 34.03], [-4.23, 31.28], [-5, 23.6], [-3, 16.77], [-0.04, 16.27]],
    goods: ["gold", "salt", "textiles", "enslaved people"],
    summary:
      "Camel caravans crossed the Sahara from Fez and Sijilmasa via the salt mines of Taghaza to Timbuktu and Gao, trading salt and northern goods for gold; enslaved Africans were taken north.",
  },
  {
    id: "route-grand-canal",
    name: "Grand Canal",
    medium: "river",
    startYear: 1293,
    endYear: 1855,
    path: [
      [116.4, 39.9], [117.2, 39.13], [115.7, 36.84], [116.59, 35.41], [119.02, 33.6], [119.41, 32.39], [120.62, 31.3],
      [120.16, 30.27],
    ],
    goods: ["rice", "salt", "silk", "timber"],
    summary:
      "The world's longest artificial waterway, linked up under the Sui in the early 600s and extended by the Yuan to Beijing, carried tribute grain from the Yangtze delta north to the capital.",
  },
  {
    id: "route-varangian",
    name: "Route from the Varangians to the Greeks",
    medium: "river",
    startYear: 850,
    endYear: 1100,
    path: [
      [17.54, 59.33], [23, 59.6], [30.2, 59.95], [32.3, 60], [31.27, 58.52], [31.88, 54.78], [30.52, 50.45],
      [31.9, 46.6], [28.98, 41.01],
    ],
    goods: ["furs", "wax", "honey", "captives", "silver"],
    summary:
      "Scandinavian traders rowed and portaged their boats from the Baltic up the Neva and Volkhov, then down the Dnieper past Kiev to the Black Sea and Constantinople.",
  },
  {
    id: "route-swahili-coast",
    name: "Swahili coast trade",
    medium: "sea",
    startYear: 900,
    endYear: 1500,
    path: [
      [45.34, 2.04], [40.12, -3.22], [39.67, -4.05], [39.19, -6.16], [39.51, -8.96], [41, -11.5], [41, -15.5],
      [34.84, -19.83],
    ],
    goods: ["gold", "ivory", "porcelain", "cotton cloth", "beads"],
    summary:
      "Monsoon-borne dhows linked Swahili city-states from Mogadishu to Kilwa and Sofala with Arabia, India and China, trading gold from Great Zimbabwe and ivory for cloth, beads and porcelain.",
  },
  {
    id: "route-spice-islands",
    name: "Spice Islands route",
    medium: "sea",
    startYear: 1000,
    endYear: 1650,
    path: [[129.9, -4.53], [121.5, -6.5], [113, -5], [107.2, -3], [104.6, 0.8], [102.25, 2.19]],
    goods: ["nutmeg", "cloves", "mace", "pepper", "cloth"],
    summary:
      "Nutmeg and mace from Banda and cloves from Maluku, the only places they grew, passed through Javanese and Malay ports to Malacca and on to India, China and Europe.",
  },
  {
    id: "route-tea-horse",
    name: "Tea Horse Road",
    medium: "land",
    startYear: 1074,
    endYear: 1950,
    path: [[103, 29.98], [101.96, 30.05], [100.27, 30], [99.1, 30], [97.18, 31.14], [91.13, 29.65]],
    goods: ["tea", "horses", "salt", "medicinal herbs"],
    summary:
      "Porters and mule caravans carried compressed tea from Sichuan over high passes to Tibet, where it was exchanged for the horses that Song and later Chinese armies needed.",
  },
  {
    id: "route-hanseatic",
    name: "Hanseatic League sea route",
    medium: "sea",
    startYear: 1250,
    endYear: 1600,
    path: [
      [3.22, 51.21], [4.2, 53], [7.8, 54.1], [9.99, 53.55], [10.69, 53.87], [18.3, 57.64], [24.75, 59.44], [29, 60],
      [30.3, 59.93], [31.27, 58.52],
    ],
    goods: ["cloth", "furs", "wax", "herring", "grain"],
    summary:
      "Merchant towns led by Lübeck carried Flemish cloth east from Bruges and brought furs, wax, grain and herring west, from their trading post at Novgorod to the North Sea.",
  },
];
