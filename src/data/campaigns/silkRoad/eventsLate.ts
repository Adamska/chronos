import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "silk-talas",
    title: "Battle of Talas",
    year: 751,
    place: "Talas River valley",
    coordinates: [71.4, 42.9],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Talas",
    summary:
      "In 751 an Abbasid army defeated a Tang force under Gao Xianzhi near the Talas River after, according to Chinese sources, the Karluk Turks in the Tang army changed sides. Many Chinese soldiers were captured and taken west.",
    context:
      "The battle alone did not end Tang power in Central Asia; the An Lushan Rebellion of 755 forced the Tang to pull its armies back east. The eleventh-century writer al-Tha'alibi credits Chinese prisoners from Talas with bringing paper-making to Samarkand, but paper was probably known in Central Asia earlier, so the story is best read as a symbol of a longer transmission.",
    whyHere:
      "The Talas valley lies just north of the Tian Shan, on the route from Semirechye into Transoxiana, where Tang protectorates and the Abbasid governors of Khurasan met. Its open steppe suited cavalry, and the Karluk nomads who grazed it held the balance.",
    keyFigures: ["Gao Xianzhi", "Ziyad ibn Salih", "Du Huan"],
    schematic: {
      kind: "causal",
      steps: [
        "Tang and Abbasid armies clash",
        "Chinese captives taken west",
        "Samarkand paper gains renown",
        "Baghdad paper mill by 790s",
      ],
    },
  },
  {
    id: "silk-baghdad",
    title: "Founding of Baghdad",
    year: 762,
    place: "Baghdad",
    coordinates: [44.36, 33.31],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Round_City_of_Baghdad",
    summary:
      "The Abbasid caliph al-Mansur founded his Round City on the west bank of the Tigris in 762. Within decades Baghdad was one of the largest cities in the world, and by the 790s it had a paper mill.",
    context:
      "The Abbasids had overthrown the Umayyads in 750 with support from Khurasan and moved the heart of the caliphate east from Damascus. Cheap paper replaced papyrus and parchment in the bureaucracy and fuelled a boom in books, from translations of Greek science to poetry.",
    whyHere:
      "Here the Tigris and Euphrates run closest together and could be linked by canals, so the site drew grain from both rivers. Ships sailed down the Tigris to Basra and the Gulf, while the Khurasan Road climbed east over the Zagros toward Central Asia.",
    keyFigures: ["al-Mansur", "Harun al-Rashid"],
    primarySource: {
      excerpt: "This is the Tigris; there is no obstacle between us and China; everything on the sea can come to us on it.",
      attribution: "Caliph al-Mansur on the site of Baghdad, as reported by al-Tabari, History of the Prophets and Kings",
    },
  },
  {
    id: "silk-diamond-sutra",
    title: "The Dunhuang Diamond Sutra",
    year: 868,
    place: "Mogao Caves, Dunhuang",
    coordinates: [94.8, 40.04],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Diamond_Sutra",
    summary:
      "A woodblock-printed Diamond Sutra dated 868 is the earliest dated printed book known. It was sealed with tens of thousands of manuscripts in Mogao's Library Cave around the early eleventh century and acquired by Aurel Stein in 1907.",
    context:
      "The Mogao Caves, begun in the fourth century, grew into hundreds of painted shrines funded by local rulers, monks and merchants. The Library Cave held texts in Chinese, Tibetan, Sogdian, Khotanese, Old Uyghur, Sanskrit and Hebrew, a snapshot of the Silk Road's mix of peoples and faiths.",
    whyHere:
      "Dunhuang was the last oasis before the desert, where the northern and southern Taklamakan routes divided, so travellers prayed here for safe passage. The soft conglomerate cliff above the Daquan River was easy to carve, and the arid climate preserved paper for nine centuries.",
    keyFigures: ["Wang Jie", "Wang Yuanlu", "Aurel Stein"],
    primarySource: {
      excerpt: "Reverently made for universal free distribution by Wang Jie on behalf of his two parents.",
      attribution: "Colophon of the Diamond Sutra, dated 11 May 868, British Library Or.8210/P.2",
    },
  },
  {
    id: "silk-quanzhou",
    title: "Quanzhou Opens to the World",
    year: 1087,
    place: "Quanzhou (Zaitun), Fujian",
    coordinates: [118.59, 24.91],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Quanzhou",
    summary:
      "In 1087 the Song government opened a maritime trade office at Quanzhou, which over the next two centuries became one of the busiest ports on earth. Arab, Persian, Tamil and Southeast Asian merchants settled there and built mosques and temples.",
    context:
      "With the Tangut Xi Xia and the Liao blocking the northwest, the Song turned to the sea and taxed imports of spices and incense. Advances in shipbuilding and the mariner's compass made Chinese junks major carriers on the Indian Ocean routes.",
    whyHere:
      "Quanzhou's sheltered estuary on the Fujian coast faced Southeast Asia, and its mountainous hinterland pushed people toward the sea. Ships rode the winter northeast monsoon south toward the Strait of Malacca and returned on the summer southwest monsoon.",
    keyFigures: ["Zhao Rugua", "Pu Shougeng"],
    primarySource: {
      excerpt:
        "For one shipload of pepper that goes to Alexandria or elsewhere, destined for Christendom, there come a hundred such, aye and more too, to this haven of Zayton.",
      attribution: "Marco Polo, The Travels (c. 1298), Book II, ch. 82, trans. Henry Yule",
    },
    schematic: {
      kind: "exchange",
      westLabel: "Indian Ocean ports",
      eastLabel: "Song China",
      eastbound: ["pepper", "frankincense", "ivory", "sandalwood"],
      westbound: ["porcelain", "silk", "copper coins", "ironware"],
    },
  },
  {
    id: "silk-marco-polo",
    title: "Marco Polo at Kublai Khan's Court",
    year: 1275,
    endYear: 1291,
    place: "Shangdu (Xanadu)",
    coordinates: [116.18, 42.36],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Marco_Polo",
    summary:
      "Marco Polo, travelling with his father and uncle, reached Kublai Khan's summer capital at Shangdu around 1275 after crossing Persia, the Pamirs and the Taklamakan. He left around 1291, escorting a Mongol bride by sea to the Ilkhanate, and his book, written with Rustichello da Pisa, shaped European images of Asia.",
    context:
      "Mongol rule had brought most of the overland routes under related khanates, and Kublai employed many foreigners. Some writers have doubted that Polo reached China at all, but his details of Yuan salt revenues, paper money and administration persuade most historians that he did.",
    whyHere:
      "Shangdu stood on the grassland just north of the North China Plain, where the Mongol court could keep its horses and summer pastures while governing China. Caravans from the west reached it along the Hexi Corridor and the edge of the Gobi.",
    keyFigures: ["Marco Polo", "Kublai Khan", "Niccolò Polo", "Rustichello da Pisa"],
  },
  {
    id: "silk-pax-mongolica",
    title: "Pegolotti's Road to Cathay",
    year: 1340,
    place: "Tana, at the mouth of the Don",
    coordinates: [39.42, 47.11],
    layer: "trade",
    significance: 5,
    wikipediaSlug: "Pax_Mongolica",
    summary:
      "Around 1340 the Florentine banking agent Francesco Balducci Pegolotti wrote a merchant's handbook describing the road from Tana on the Sea of Azov to Khanbaliq: by wagon to Astrakhan and Sarai, then by camel to Urgench, Otrar and Almaliq. He relied on merchants who had made the journey.",
    context:
      "The Mongol khanates policed the roads and maintained relay stations, and Italian merchants travelled as far as China. The unity was fragile: the khanates were already fragmenting, and the Pax Mongolica did not outlast the Black Death and the fall of the Yuan in 1368.",
    whyHere:
      "Tana sat where the Don enters the Sea of Azov, the closest point Italian ships could reach to the Volga and the Golden Horde capital at Sarai. Beyond it the open steppe let wagons and camels cross Eurasia with no mountain barrier until the Tian Shan.",
    keyFigures: ["Francesco Balducci Pegolotti", "Öz Beg Khan"],
    primarySource: {
      excerpt:
        "The road you travel from Tana to Cathay is perfectly safe, whether by day or by night, according to what the merchants say who have used it.",
      attribution: "Francesco Balducci Pegolotti, La pratica della mercatura (c. 1340), trans. Henry Yule",
    },
  },
  {
    id: "silk-ibn-battuta",
    title: "Ibn Battuta at Calicut",
    year: 1342,
    place: "Calicut, Malabar Coast",
    coordinates: [75.78, 11.25],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Ibn_Battuta",
    summary:
      "The Moroccan traveller Ibn Battuta reached Calicut in the early 1340s with an embassy from the Sultan of Delhi to the Yuan emperor and found Chinese junks waiting in the harbour for the monsoon. A storm wrecked the ship carrying the embassy's gifts, but he later reached Quanzhou on his own.",
    context:
      "Between 1325 and 1354 Ibn Battuta travelled well over 100,000 kilometres, mostly within the Islamic world, where a shared faith, law and language let a trained judge find work from Delhi to the Maldives.",
    whyHere:
      "Calicut lies midway along the Malabar Coast, the source of most of the world's black pepper, where ships from China met ships from Arabia and Persia. Monsoon timing forced crews to wait here for months, turning the port into a vast market and transfer point.",
    keyFigures: ["Ibn Battuta", "Muhammad bin Tughluq"],
  },
  {
    id: "silk-caffa",
    title: "Plague at the Siege of Caffa",
    year: 1346,
    place: "Caffa (Feodosia), Crimea",
    coordinates: [35.38, 45.03],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Siege_of_Caffa",
    summary:
      "In 1346 plague broke out in the Golden Horde army of Jani Beg besieging the Genoese port of Caffa. The notary Gabriele de' Mussi wrote that the besiegers hurled corpses into the town, and in 1347 ships from the Black Sea carried the Black Death to Constantinople and Italy.",
    context:
      "Ancient DNA from burials of 1338 and 1339 in the Chüy valley of present-day Kyrgyzstan points to the Tian Shan as a source of the pandemic. De' Mussi was not an eyewitness, and plague probably reached the Mediterranean on many ships, but Caffa is the best-documented link between the steppe and Europe.",
    whyHere:
      "Caffa sat on a sheltered bay in southeastern Crimea, where steppe caravans met Genoese galleys bound for Constantinople and Italy. The trade that made it rich also tied plague reservoirs among steppe rodents to the crowded harbours of the Mediterranean.",
    keyFigures: ["Jani Beg", "Gabriele de' Mussi"],
    primarySource: {
      excerpt:
        "They ordered corpses to be placed in catapults and lobbed into the city in the hope that the intolerable stench would kill everyone inside.",
      attribution: "Gabriele de' Mussi, Historia de morbo (c. 1348), trans. Rosemary Horrox",
    },
  },
  {
    id: "silk-timur",
    title: "Timur's Samarkand",
    year: 1370,
    endYear: 1405,
    place: "Samarkand",
    coordinates: [66.97, 39.65],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Timur",
    summary:
      "From 1370 Timur made Samarkand the capital of a conquering empire whose campaigns reached from Anatolia to Delhi, and filled it with craftsmen deported from the cities he sacked. The Castilian envoy Ruy González de Clavijo saw the city in 1404, months before Timur died setting out to invade China.",
    context:
      "Timur claimed the legacy of Genghis Khan but ruled through puppet khans. His campaigns devastated Baghdad, Delhi, Damascus and the Golden Horde capital at Sarai, even as he poured their wealth into monuments such as the Bibi-Khanym Mosque.",
    whyHere:
      "Samarkand lies in the Zeravshan valley, a well-watered oasis between the Kyzylkum desert and the mountains, where roads from China, India, Iran and the steppe converge. By sacking rival trade centres such as Urgench and Sarai, Timur helped steer caravans toward his capital.",
    keyFigures: ["Timur", "Ruy González de Clavijo"],
  },
  {
    id: "silk-constantinople",
    title: "Fall of Constantinople",
    year: 1453,
    place: "Constantinople",
    coordinates: [28.95, 41.02],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Fall_of_Constantinople",
    summary:
      "On 29 May 1453 the Ottoman sultan Mehmed II took Constantinople after a siege of nearly two months, ending the Byzantine Empire. The Ottomans now held both shores of the straits between the Black Sea and the Mediterranean.",
    context:
      "Mehmed had built the fortress of Rumeli Hisarı on the Bosporus the year before to choke off help from the Black Sea, and he outflanked the chain across the Golden Horn by hauling ships overland. Genoese Caffa held out only until 1475, though trade between Europe and Asia continued through Ottoman and Mamluk lands.",
    whyHere:
      "Constantinople occupies a triangular peninsula between the Golden Horn, the Sea of Marmara and the Bosporus, where Europe and Asia are less than a kilometre apart. Whoever held it controlled every ship passing between the Black Sea and the Mediterranean.",
    keyFigures: ["Mehmed II", "Constantine XI Palaiologos", "Giovanni Giustiniani"],
  },
];
