import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "bantu-grassfields-homeland",
    title: "The Proto-Bantu Homeland",
    year: -1500,
    place: "Cameroon Grassfields, Nigeria–Cameroon borderlands",
    coordinates: [10.15, 5.96],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Proto-Bantu_language",
    summary:
      "Linguists trace roughly 500 Bantu languages back to a single ancestor, Proto-Bantu, spoken in the borderlands of today's Nigeria and Cameroon. Estimates for when its speakers began to disperse vary widely, most falling in the third or early second millennium BCE, so by this date the movement was already under way.",
    context:
      "Joseph Greenberg placed Bantu within the wider Niger-Congo family and pointed to this region, where the most closely related languages cluster; Malcolm Guthrie had argued for a centre far to the south-east, but the north-western homeland is now widely accepted. Ancient DNA from the Shum Laka rock shelter, published in 2020, showed that people buried there thousands of years ago were not the main ancestors of today's Bantu speakers, a reminder that the homeland was itself diverse.",
    whyHere:
      "The Grassfields are a cool, well-watered volcanic highland on the edge of the equatorial forest, where savanna and woodland meet. From here, routes led down the Atlantic coast, south along rivers into the forest, and east along its northern margin.",
    keyFigures: ["Joseph Greenberg", "Malcolm Guthrie"],
    schematic: {
      kind: "causal",
      steps: [
        "Farming villages on the forest edge",
        "Communities grow and split",
        "Groups follow rivers and savannas",
        "Languages diverge across the continent",
      ],
    },
  },
  {
    id: "bantu-nok",
    title: "Nok Terracottas and Ironworking",
    year: -900,
    endYear: -1,
    place: "Nok, south of the Jos Plateau",
    coordinates: [8.0, 9.5],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Nok_culture",
    summary:
      "In central Nigeria, Nok communities made striking terracotta sculptures and, by around the middle of the first millennium BCE, smelted iron, among the earliest evidence of iron production in West Africa. The culture is known almost entirely from archaeology, and its language is unknown.",
    context:
      "Nok was not, as far as anyone can tell, a Bantu-speaking society; it belongs here as regional context. Iron appeared in several parts of West and Central Africa during the first millennium BCE, and whether it was invented locally or learned from outside is still argued.",
    whyHere:
      "The plateau and its surrounding valleys offered iron-rich lateritic soils and woodland for charcoal. The terracottas came to light in the twentieth century when tin miners dug through the alluvial deposits of its streams.",
    keyFigures: ["Bernard Fagg"],
  },
  {
    id: "bantu-urewe",
    title: "Urewe Ironworking Around Lake Victoria",
    year: -500,
    place: "Urewe, near Lake Victoria (western Kenya)",
    coordinates: [34.3, 0.1],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Urewe",
    summary:
      "From around the middle of the first millennium BCE, communities around Lake Victoria made a distinctive dimple-based pottery, now called Urewe ware, and smelted iron. Archaeologists link Urewe with Bantu-speaking farmers of the eastern stream, and the Great Lakes became a second centre of expansion.",
    context:
      "Mary Leakey and colleagues first described the pottery in the 1940s. Some radiocarbon dates from Rwanda, Burundi and north-western Tanzania would push smelting back several centuries earlier, but they are disputed. Historical linguists argue that Bantu speakers here borrowed words for cattle and grain crops from Central Sudanic and Cushitic-speaking neighbours.",
    whyHere:
      "The lake basin's two rainy seasons and fertile soils could feed dense villages, and its woodlands supplied the charcoal that smelting consumed. Pollen cores show forest clearance in the same centuries, though how much of it smelters caused is debated.",
    keyFigures: ["Mary Leakey"],
  },
  {
    id: "bantu-sangha-interval",
    title: "Through the Sangha River Interval",
    year: -500,
    place: "Sangha River, western Congo Basin",
    coordinates: [16.1, 2.5],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Sangha_River",
    summary:
      "Around 2,500 years ago a drier spell opened patches of savanna in a north–south belt of the rainforest along the Sangha River. Many researchers think Bantu-speaking farmers used this corridor to move south through the forest toward the Congo.",
    context:
      "How far the climate drove the expansion is debated. The linguist Koen Bostoen and colleagues tie the timing of the southward movement to this forest crisis; others argue that farmers were already inside the forest and that people themselves helped open it.",
    whyHere:
      "The Sangha runs south from the forest margins of Cameroon and the Central African Republic to the Congo, a natural line through the forest. When rainfall dropped, its valley became a mosaic of grassland and open woodland, easier ground for farmers who cleared fields and needed sunlight for their crops.",
    keyFigures: ["Koen Bostoen"],
    schematic: {
      kind: "causal",
      steps: [
        "Drier climate around 500 BCE",
        "Savanna opens along the Sangha",
        "Farmers move south through forest",
        "Villages reach the Congo",
      ],
    },
  },
  {
    id: "bantu-inner-congo",
    title: "Villages on the Inner Congo Rivers",
    year: -400,
    place: "Inner Congo Basin, near present-day Mbandaka",
    coordinates: [18.26, 0.05],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Congo_Basin",
    summary:
      "By around 400 BCE, archaeologists find pottery-making villages along the rivers of the inner Congo Basin, a sign that farmers of the western stream had settled deep inside the rainforest.",
    context:
      "Over many centuries the languages of these communities diversified into the hundreds of forest Bantu languages. The historian Jan Vansina reconstructed their history from words and traditions in Paths in the Rainforests (1990).",
    whyHere:
      "In dense forest, rivers were the roads: the Congo and its tributaries gave canoe routes, fish and riverbanks where the canopy was thin enough to clear gardens.",
    keyFigures: ["Jan Vansina"],
  },
  {
    id: "bantu-adulis",
    title: "The Periplus Describes Adulis",
    year: 50,
    place: "Adulis, Red Sea coast",
    coordinates: [39.66, 15.26],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Adulis",
    summary:
      "The Periplus of the Erythraean Sea, a Greek merchant's guide usually dated to the mid-first century CE, describes Adulis as a market for ivory brought from the interior through Aksum, and names Zoskales as ruler of the coast.",
    context:
      "Aksum grew into a kingdom that minted coins, wrote in Ge'ez and traded with Rome, Arabia and India. It is a contrast to the Bantu-speaking south: a literate state built on Red Sea commerce and highland plough farming.",
    whyHere:
      "Adulis lay on a sheltered bay below the Ethiopian escarpment, the nearest harbour to the highland plateau, where reliable summer rains supported grain farming and a road climbed to Aksum.",
    keyFigures: ["Zoskales"],
    primarySource: {
      excerpt:
        "Of these places, from the Calf-Eaters to the other Berber country, Zoscales is king; who is miserly in his ways and always striving for more, but otherwise upright, and acquainted with Greek literature.",
      attribution: "Periplus of the Erythraean Sea, §5, trans. Wilfred H. Schoff (1912)",
    },
  },
  {
    id: "bantu-rhapta",
    title: "Rhapta, the Last Market of Azania",
    year: 50,
    place: "Rhapta (site unknown, perhaps near the Rufiji delta)",
    coordinates: [39.3, -7.9],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Rhapta",
    summary:
      "The same Periplus calls Rhapta the farthest market on the coast it calls Azania, where Arab ship captains traded iron weapons and tools for ivory and tortoise shell. Its site has never been securely identified.",
    context:
      "The Periplus says the coast was held under a chief in south-western Arabia and that the captains intermarried with local people and knew their language. Who those people were, and whether they spoke Bantu languages yet, is unknown; Ptolemy's Geography also names Rhapta.",
    whyHere:
      "The northeast monsoon carried ships down from Arabia in one season and the southwest monsoon brought them home; farther south the winds grow unreliable, which helps explain why Rhapta, and later Kilwa, marked the practical limit of regular voyages.",
    keyFigures: ["Ptolemy"],
    primarySource: {
      excerpt:
        "Two days' sail beyond, there lies the very last market-town of the continent of Azania, which is called Rhapta; which has its name from the sewed boats (rhapton ploiarion) already mentioned; in which there is ivory in great quantity, and tortoise-shell.",
      attribution: "Periplus of the Erythraean Sea, §16, trans. Wilfred H. Schoff (1912)",
    },
    schematic: {
      kind: "exchange",
      westLabel: "Coast of Azania",
      eastLabel: "Arabian traders",
      eastbound: ["ivory", "rhinoceros horn", "tortoise shell"],
      westbound: ["lances", "hatchets", "swords", "glass", "wheat"],
    },
  },
  {
    id: "bantu-kwale",
    title: "The Eastern Stream Reaches the Coast",
    year: 200,
    place: "Kwale, coastal hills of southern Kenya",
    coordinates: [39.45, -4.17],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Bantu_expansion",
    summary:
      "In the early centuries CE, iron-using farmers making a pottery style archaeologists call Kwale ware settled in the hills behind the Kenyan and Tanzanian coast. Its close kinship with Urewe pottery traces the movement of the eastern stream from the Great Lakes to the Indian Ocean.",
    context:
      "Robert Soper defined Kwale ware from excavations near Kwale in the 1960s. Linguists see coastal communities of this period as ancestors of the Northeast Coast Bantu languages, including the forerunner of Swahili, though linking pots to languages is always an inference.",
    whyHere:
      "Between the Great Lakes and the sea lies the dry bush of the Nyika, poor country for farmers. The coastal hills catch rain off the Indian Ocean, so the green belt behind the shore was the natural landfall for people crossing from the lakes.",
    keyFigures: ["Robert Soper"],
  },
  {
    id: "bantu-southern-africa",
    title: "Farmers Reach the Southern African Coast",
    year: 250,
    place: "Matola, southern Mozambique",
    coordinates: [32.46, -25.96],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Bantu_peoples_of_South_Africa",
    summary:
      "By around the third century CE, farmers making Matola-style pottery had settled the coast of southern Mozambique, and related Mzonjani communities soon appeared in what is now KwaZulu-Natal. They brought iron, cereals and livestock to the south-eastern edge of the continent.",
    context:
      "The pottery belongs to the same broad family as Kwale ware, suggesting a fairly rapid movement down the coast. The newcomers met Khoe and San herders and hunter-gatherers, and the click consonants of Nguni languages such as Zulu and Xhosa record long contact.",
    whyHere:
      "The south-east gets summer rain off the warm Indian Ocean, which sorghum and millet need. Farther west lay the dry interior and the winter-rainfall Cape, beyond the range of these summer crops, and Bantu-speaking farmers did not settle there.",
    keyFigures: ["Thomas Huffman"],
  },
  {
    id: "bantu-ezana",
    title: "Ezana of Aksum Turns to Christianity",
    year: 330,
    place: "Aksum, Tigray highlands",
    coordinates: [38.72, 14.13],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Ezana_of_Axum",
    summary:
      "Around the 330s King Ezana of Aksum became a Christian, influenced by Frumentius, a Christian from Tyre who became the first bishop of Aksum. His later coins replaced the pagan disc and crescent with the cross, among the earliest coins anywhere to carry it.",
    context:
      "Aksum's gold coinage, stone stelae and inscriptions in Ge'ez, Greek and Sabaean mark a literate state tied to Rome and the Indian Ocean, a path quite unlike that of the village societies further south. Ezana's inscriptions also record a campaign against the Noba toward the Nile.",
    whyHere:
      "Aksum stood on a highland plateau over 2,000 metres up, where summer rains supported plough farming and grazing, and a road led down to Adulis. That let highland grain and inland ivory reach Red Sea shipping bound for Egypt and India.",
    keyFigures: ["Ezana of Axum", "Frumentius"],
  },
];
