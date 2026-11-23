import type { TradeRoute } from "@/types/world";

export const routes2: readonly TradeRoute[] = [
  {
    id: "route-venetian-galleys",
    name: "Venetian galleys to the Levant",
    medium: "sea",
    startYear: 1200,
    endYear: 1500,
    path: [[12.34, 45.44], [15, 43], [19, 40], [21.6, 36.6], [25.13, 35.4], [26.6, 35.1], [29.9, 31.2]],
    goods: ["spices", "pepper", "silk", "cotton", "glass"],
    summary:
      "State-organised convoys of merchant galleys sailed from Venice down the Adriatic, past Venetian ports in Greece and Crete, to Alexandria and Beirut for spices brought from the Indian Ocean.",
  },
  {
    id: "route-genoese-black-sea",
    name: "Genoese route to the Black Sea",
    medium: "sea",
    startYear: 1261,
    endYear: 1475,
    path: [
      [8.93, 44.41], [9.9, 42.9], [15.6, 37.9], [22.4, 36.1], [25.6, 37.8], [26, 38.4], [26.2, 40], [28.98, 41.03],
      [35.38, 45.03],
    ],
    goods: ["alum", "grain", "silk", "captives"],
    summary:
      "After 1261 Genoa built a chain of colonies from Pera and Chios to Caffa in Crimea, trading grain, alum, silk and enslaved people until the Ottoman conquests.",
  },
  {
    id: "route-pochteca",
    name: "Aztec pochteca trade",
    medium: "land",
    startYear: 1400,
    endYear: 1521,
    path: [[-99.13, 19.43], [-98.3, 19.06], [-96.12, 18.09], [-94.43, 18.15], [-91.75, 18.65]],
    goods: ["cacao", "feathers", "jade", "obsidian", "cotton cloth"],
    summary:
      "Professional long-distance merchants, the pochteca, travelled on foot with porters from Tenochtitlan to the Gulf Coast port of Xicalango, trading obsidian and cloth for cacao, jade and quetzal feathers.",
  },
  {
    id: "route-cape-route",
    name: "Cape Route (Carreira da Índia)",
    medium: "sea",
    startYear: 1498,
    endYear: 1800,
    path: [
      [-9.14, 38.71], [-24, 14.5], [-28, -10], [-15, -32], [20, -36], [38, -30], [41, -18], [40.73, -15.03],
      [73.83, 15.49],
    ],
    goods: ["pepper", "cinnamon", "silver", "textiles"],
    summary:
      "Portuguese fleets left Lisbon, swung wide into the South Atlantic to catch the westerlies, rounded the Cape of Good Hope and called at Mozambique before crossing to Goa.",
  },
  {
    id: "route-manila-galleon-west",
    name: "Manila galleons (western Pacific)",
    medium: "sea",
    startYear: 1565,
    endYear: 1815,
    path: [[180, 13.5], [144.75, 13.45], [124.4, 12.6], [120.95, 14.55], [124.6, 13.2], [142, 34], [180, 40]],
    goods: ["silver", "silk", "porcelain", "spices"],
    summary:
      "From Manila, galleons laden with Chinese silk and porcelain sailed north-east to catch the westerlies off Japan; on the return they reached Manila via Guam with American silver.",
  },
  {
    id: "route-manila-galleon-east",
    name: "Manila galleons (eastern Pacific)",
    medium: "sea",
    startYear: 1565,
    endYear: 1815,
    path: [
      [-180, 40], [-124.8, 40.2], [-115, 28], [-110.5, 22.3], [-105.5, 18.5], [-99.89, 16.85], [-140, 13.5],
      [-180, 13.5],
    ],
    goods: ["silver", "silk", "porcelain", "ivory"],
    summary:
      "Galleons from Manila made landfall off California and coasted south to Acapulco, then sailed back west on the trade winds near 13 degrees north, laden with American silver.",
  },
  {
    id: "route-treasure-fleets",
    name: "Spanish treasure fleets",
    medium: "sea",
    startYear: 1566,
    endYear: 1790,
    path: [
      [-79.65, 9.55], [-75.55, 10.42], [-80.5, 16.5], [-85, 21.4], [-82.36, 23.14], [-80.2, 24.2], [-79.7, 27],
      [-27.2, 38.7], [-6.4, 36.8],
    ],
    goods: ["silver", "gold", "cochineal", "sugar", "hides"],
    summary:
      "Two annual convoys, one for Veracruz and one for Cartagena and Portobelo, met at Havana to return together with American silver, riding the Gulf Stream past the Azores to Seville.",
  },
  {
    id: "route-angola-brazil",
    name: "South Atlantic slave route",
    medium: "sea",
    startYear: 1575,
    endYear: 1850,
    path: [[13.23, -8.84], [-10, -12], [-38.5, -12.97], [-38, -19.5], [-41.8, -23.4], [-43.17, -22.9]],
    goods: ["enslaved Africans", "tobacco", "cachaça", "cloth"],
    summary:
      "Nearly five million enslaved Africans landed in Brazil, the largest share of the Atlantic slave trade, many shipped from Luanda; Brazilian tobacco and cane spirit paid for captives in Angola.",
  },
  {
    id: "route-atlantic-triangular",
    name: "Atlantic triangular trade",
    medium: "sea",
    startYear: 1640,
    endYear: 1807,
    path: [
      [-2.6, 51.45], [-5.5, 51.2], [-11, 44], [-18.5, 14.5], [-12.5, 3.5], [-1.24, 5.1], [-59.6, 13.1], [-50, 38],
      [-5.5, 51.2], [-2.6, 51.45],
    ],
    goods: ["textiles", "guns", "enslaved Africans", "sugar", "rum"],
    summary:
      "Ships from Bristol, Liverpool, Nantes and other ports traded manufactured goods for captives in West Africa, carried them across the Atlantic in the Middle Passage, and returned with sugar and rum.",
  },
  {
    id: "route-voc",
    name: "Dutch East India Company route",
    medium: "sea",
    startYear: 1611,
    endYear: 1799,
    path: [
      [4.75, 53.05], [1.5, 51], [-5.5, 49.3], [-20, 20], [-28, -5], [18.42, -33.92], [20, -35.3], [60, -39],
      [105.6, -6.5], [106.8, -6.13],
    ],
    goods: ["spices", "pepper", "textiles", "silver", "tea"],
    summary:
      "From 1611 Dutch ships sailed via the Cape, where Cape Town was founded in 1652, then ran east on the Roaring Forties before turning north to Batavia, the company's Asian headquarters.",
  },
  {
    id: "route-fur-trade",
    name: "Canadian fur trade canoe route",
    medium: "river",
    startYear: 1680,
    endYear: 1870,
    path: [
      [-73.57, 45.5], [-75.7, 45.42], [-79.45, 46.3], [-84.35, 46.5], [-89.25, 48.4], [-93.4, 48.6], [-97.84, 53.98],
      [-102.27, 53.96], [-111.1, 58.7],
    ],
    goods: ["beaver pelts", "trade goods", "pemmican", "guns"],
    summary:
      "Voyageurs paddled birchbark canoes from Montreal up the Ottawa River, across the Great Lakes and along lakes and rivers to the Athabasca country, exchanging European goods for furs from Indigenous trappers.",
  },
  {
    id: "route-suez",
    name: "Suez route to India",
    medium: "sea",
    startYear: 1869,
    endYear: 1967,
    path: [
      [0.5, 51.45], [-5.2, 49.6], [-10, 42], [-9.3, 36.6], [-5.6, 35.95], [11.5, 37.4], [32.3, 31.27], [32.55, 29.95],
      [43.4, 12.6], [72.83, 18.93],
    ],
    goods: ["cotton", "tea", "jute", "manufactures", "mail"],
    summary:
      "Steamships from London ran through the Mediterranean and the Suez Canal to Aden and Bombay, cutting weeks from the voyage to India and binding the British Empire together with coaling stations.",
  },
  {
    id: "route-panama",
    name: "Panama Canal route",
    medium: "sea",
    startYear: 1914,
    endYear: 2025,
    path: [
      [-74, 40.6], [-72, 33], [-73.8, 20], [-79.9, 9.36], [-79.55, 8.95], [-80, 7], [-92, 12], [-110.5, 22],
      [-122.5, 37.8],
    ],
    goods: ["grain", "oil", "containers", "cars"],
    summary:
      "Opened in 1914, the canal let ships between New York and San Francisco avoid the long passage round Cape Horn, cutting the voyage by about 13,000 km.",
  },
  {
    id: "route-container-asia-europe",
    name: "Asia-Europe container route",
    medium: "sea",
    startYear: 1970,
    endYear: 2025,
    path: [
      [103.85, 1.2], [95.5, 6], [80.4, 5.5], [43.4, 12.6], [32.5, 30], [11.5, 37.4], [-5.6, 35.95], [-9.6, 36.6],
      [-10, 47], [4, 51.95],
    ],
    goods: ["electronics", "clothing", "machinery", "furniture"],
    summary:
      "Since the 1970s giant container ships have linked Shanghai, Singapore and other Asian hubs with Rotterdam via the Suez Canal, carrying a large share of the world's manufactured trade.",
  },
];
