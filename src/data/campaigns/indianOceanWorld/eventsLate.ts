import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "io-geniza",
    title: "Ben Yiju's Letters from Malabar",
    year: 1132,
    endYear: 1149,
    place: "Mangalore, northern Malabar Coast",
    coordinates: [74.86, 12.87],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Cairo_Geniza",
    summary:
      "Abraham Ben Yiju, a Jewish merchant from Tunisia, lived for about seventeen years in Mangalore, trading pepper and running a bronze workshop. His letters with partners in Aden and Fustat survived in the Cairo Geniza, the storeroom of a synagogue in Old Cairo.",
    context:
      "The Geniza preserves hundreds of thousands of fragments, including the papers of a network of merchants who moved goods between Spain, Egypt, Yemen and India. Ben Yiju freed and married an Indian woman named Ashu, and his household spanned three continents.",
    whyHere:
      "Mangalore lay at the northern end of the pepper coast, where rivers from the Western Ghats meet the sea. Its trade ran through Aden, the hinge between the monsoon routes of the open ocean and the very different winds of the Red Sea, so letters and cargoes waited there for a change of ship and season.",
    keyFigures: ["Abraham Ben Yiju", "Madmun ben Hasan", "Shelomo Dov Goitein"],
  },
  {
    id: "io-majapahit",
    title: "Majapahit Rises After the Mongol Expedition",
    year: 1293,
    place: "Trowulan, Brantas valley, East Java",
    coordinates: [112.38, -7.56],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Majapahit",
    summary:
      "Raden Wijaya allied with a Yuan fleet sent by Kublai Khan to punish Java, used it to defeat his rival Jayakatwang, then turned on the Mongols and drove them out. The kingdom he founded at Majapahit grew into the dominant power of the Indonesian archipelago.",
    context:
      "Under the minister Gajah Mada and King Hayam Wuruk in the fourteenth century, Majapahit claimed overlordship of ports from Sumatra to New Guinea. The court poem Nagarakretagama of 1365 lists dozens of tributary places.",
    whyHere:
      "The volcanic soils of the Brantas valley grew rice surpluses that Javanese ships carried east to trade for cloves, nutmeg and sandalwood. They sailed east on the west monsoon from about December and returned on the east monsoon in the middle of the year.",
    keyFigures: ["Raden Wijaya", "Kublai Khan", "Gajah Mada", "Hayam Wuruk"],
  },
  {
    id: "io-pasai",
    title: "Samudera Pasai and Islam on the Sea Lanes",
    year: 1297,
    place: "Samudera Pasai, northern Sumatra",
    coordinates: [97.37, 5.17],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Samudera_Pasai_Sultanate",
    summary:
      "The gravestone of Sultan Malik al-Salih, dated 1297, marks Samudera Pasai as one of the first Muslim kingdoms in Southeast Asia. Ibn Battuta found a Shafi'i sultan and a learned court there in 1345.",
    context:
      "Islam spread across the Indian Ocean mainly through merchants, not armies, as traders from Gujarat, Bengal, southern India and Arabia settled and married in port towns. Later royal gravestones in Pasai and Java were carved in Cambay and shipped from Gujarat.",
    whyHere:
      "The northern tip of Sumatra is the first landfall after crossing the Bay of Bengal and the last before the Strait of Malacca. Fleets waited here for the winds: Marco Polo spent five months on this coast in 1292 before his ships could sail on.",
    keyFigures: ["Malik al-Salih", "Marco Polo", "Ibn Battuta"],
  },
  {
    id: "io-kilwa",
    title: "Kilwa and the Gold of Sofala",
    year: 1331,
    place: "Kilwa Kisiwani, Swahili coast",
    coordinates: [39.51, -8.96],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Kilwa_Kisiwani",
    summary:
      "By the early fourteenth century Kilwa controlled the export of gold from Sofala, mined in the Zimbabwe plateau. Ibn Battuta visited around 1331, when Sultan al-Hasan ibn Sulaiman was building the great palace of Husuni Kubwa and enlarging the Great Mosque in coral stone.",
    context:
      "The Swahili towns were Muslim, African and cosmopolitan, speaking a Bantu language rich in Arabic words. Kilwa minted its own copper coins and traded with Arabia, Persia and India, and Chinese porcelain was set into the walls of its mosques and tombs.",
    whyHere:
      "Ships from Arabia and India arrived on the northeast monsoon and had to leave on the southwest monsoon a few months later. Kilwa lay near the southern limit of that round trip; Sofala was too far south to reach and return within a season, so its gold came to Kilwa.",
    keyFigures: ["al-Hasan ibn Sulaiman", "Ibn Battuta"],
    primarySource: {
      excerpt:
        "I was told by a merchant that the town of Sufala lies a fortnight's journey [south] from Kulwa, and that gold dust is brought to Sufala from Yufi in the country of the Limis",
      attribution: "Ibn Battuta, Travels in Asia and Africa (dictated 1355), trans. H. A. R. Gibb (1929)",
    },
    schematic: {
      kind: "exchange",
      westLabel: "Swahili Coast",
      eastLabel: "Arabia and India",
      eastbound: ["gold", "ivory", "ambergris", "mangrove poles"],
      westbound: ["cotton cloth", "glass beads", "Chinese porcelain", "glazed ceramics"],
    },
  },
  {
    id: "io-maldives",
    title: "Ibn Battuta in the Maldives",
    year: 1343,
    endYear: 1344,
    place: "Male, Maldive Islands",
    coordinates: [73.51, 4.18],
    layer: "trade",
    significance: 2,
    wikipediaSlug: "Ibn_Battuta",
    summary:
      "Ibn Battuta spent much of 1343 and 1344 in the Maldives, serving as chief judge under Sultana Khadija. He described islands that exported cowrie shells as currency to Bengal and coconut-fibre rope to India, China and Yemen.",
    context:
      "The Maldives had converted to Islam in the twelfth century. Cowries from their lagoons served as small change from Bengal to West Africa, where they were still in use centuries later.",
    whyHere:
      "The atolls lie across the sea lanes south and west of India, and their warm lagoons bred cowries in vast numbers. Coconut palms on every islet supplied coir, the cord that stitched Indian Ocean hulls together.",
    keyFigures: ["Ibn Battuta", "Khadijah of the Maldives"],
    primarySource: {
      excerpt:
        "These cords are exported to India, China, and Yemen, and are better than hemp. The Indian and Yemenite ships are sewn together with them, for the Indian Ocean is full of reefs",
      attribution: "Ibn Battuta, Travels in Asia and Africa (dictated 1355), trans. H. A. R. Gibb (1929)",
    },
  },
  {
    id: "io-malacca",
    title: "Founding of the Malacca Sultanate",
    year: 1400,
    place: "Malacca, Strait of Malacca",
    coordinates: [102.25, 2.19],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Malacca_Sultanate",
    summary:
      "Around 1400 Parameswara, a prince of Palembang driven from Singapore, founded a port at Malacca. With Ming protection against Siam it grew within decades into the greatest emporium of Southeast Asia, and its rulers adopted Islam.",
    context:
      "Parameswara received the Ming envoy Yin Qing in 1403 and visited the Yongle Emperor in Nanjing in 1411. Merchant communities from Gujarat, southern India, Java and China each dealt with a harbour master of their own.",
    whyHere:
      "At Malacca the monsoon systems of the Bay of Bengal and the South China Sea met. Ships from India came on the southwest monsoon and ships from China on the northeast, each waiting months for the wind home in a sheltered roadstead on a narrow stretch of the strait.",
    keyFigures: ["Parameswara", "Yin Qing", "Muzaffar Shah of Malacca"],
    schematic: {
      kind: "causal",
      steps: ["Parameswara flees Singapore", "Ming protection", "Monsoon traders gather", "Rulers adopt Islam"],
    },
  },
  {
    id: "io-zheng-he",
    title: "Zheng He's Treasure Fleets",
    year: 1405,
    endYear: 1433,
    place: "Galle, southern Sri Lanka",
    coordinates: [80.22, 6.03],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Ming_treasure_voyages",
    summary:
      "Between 1405 and 1433 the eunuch admiral Zheng He led seven voyages of the Ming fleet, reaching Calicut, Hormuz, Aden and the Swahili coast. A stone dated 1409 and found at Galle honours the Buddha, a Hindu god and Allah in Chinese, Tamil and Persian.",
    context:
      "The Yongle Emperor sent the fleets to display Ming power and draw distant rulers into the tribute system. After 1433 the court ended the voyages, and Chinese seafaring in the Indian Ocean returned to private hands.",
    whyHere:
      "Galle lies near the southern tip of Sri Lanka, which every ship between the Bay of Bengal and the Arabian Sea had to round. The fleets gathered off Fujian in winter, sailed south on the northeast monsoon and came home on the southwest monsoon.",
    keyFigures: ["Zheng He", "Yongle Emperor", "Ma Huan"],
    schematic: {
      kind: "causal",
      steps: ["Yongle seizes the throne", "Fleets ride the monsoon", "Rulers send tribute", "Voyages end in 1433"],
    },
  },
  {
    id: "io-calicut",
    title: "Calicut Under the Zamorins",
    year: 1442,
    place: "Calicut, Malabar Coast",
    coordinates: [75.78, 11.25],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Zamorin",
    summary:
      "Abdur Razzaq Samarqandi, envoy of the Timurid ruler Shah Rukh, reached Calicut in 1442 and found a port where merchants from every shore traded in safety under the Hindu Zamorin. From there he travelled on to Vijayanagara.",
    context:
      "The Zamorins rose in the thirteenth and fourteenth centuries and made Calicut the leading pepper port of Malabar, relying on Muslim merchant communities for its shipping. Zheng He's fleets called there on every voyage.",
    whyHere:
      "Calicut has no natural harbour, only an open roadstead that the southwest monsoon closed from about June to August. It won trade through its position as landfall for ships from Aden and Hormuz and through rulers who guaranteed fair customs and protected cargo.",
    keyFigures: ["Abdur Razzaq Samarqandi", "Shah Rukh", "Deva Raya II"],
    primarySource: {
      excerpt:
        "Qaliqut [Calicut], which is one of the chief ports in Mulaybar and one of the largest harbours in the world. It is visited by men from China, Sumatra, Ceylon, the Maldives, Yemen and Fars",
      attribution: "Ibn Battuta on Calicut in 1342, Travels in Asia and Africa, trans. H. A. R. Gibb (1929)",
    },
  },
  {
    id: "io-ibn-majid",
    title: "Ahmad ibn Majid's Book of Navigation",
    year: 1490,
    place: "Julfar (Ras al-Khaimah), Strait of Hormuz",
    coordinates: [55.94, 25.79],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Ahmad_ibn_Majid",
    summary:
      "The pilot Ahmad ibn Majid of Julfar completed his Kitab al-Fawa'id, a summary of Arab navigation covering star altitudes, sailing seasons, coastlines and routes from East Africa to Southeast Asia.",
    context:
      "A later story claims he piloted Vasco da Gama from Malindi to Calicut, but most historians reject it; the pilot was probably a Gujarati. Ibn Majid's work records knowledge accumulated by generations of pilots.",
    whyHere:
      "Julfar lies near the Strait of Hormuz, home to families of pilots who knew every reef and season. In a sea where the calendar ruled, a pilot had to know when each route opened and closed, and fix latitude from stars measured in finger-widths.",
    keyFigures: ["Ahmad ibn Majid", "Sulaiman al-Mahri"],
  },
  {
    id: "io-da-gama",
    title: "Vasco da Gama Reaches Calicut",
    year: 1498,
    place: "Kappad, near Calicut",
    coordinates: [75.72, 11.38],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Vasco_da_Gama",
    summary:
      "After rounding the Cape of Good Hope, Vasco da Gama took on a pilot at Malindi and crossed the Arabian Sea in 23 days on the southwest monsoon, anchoring near Calicut on 20 May 1498. Talks with the Zamorin went badly, and he sailed home in August with a token cargo of spices.",
    context:
      "The Portuguese arrived as outsiders to a trading world with its own rules, carrying goods nobody at Calicut wanted. Within a few years they returned with warships to impose passes and seize ports, ending the open sea that had lasted for centuries.",
    whyHere:
      "Calicut was the leading pepper port of Malabar and the landfall for ships crossing from East Africa. Da Gama set out for home before the northeast monsoon had settled, and the return crossing took almost three months and cost about thirty men to scurvy.",
    keyFigures: ["Vasco da Gama", "Manuel I of Portugal", "Paulo da Gama"],
    primarySource: {
      excerpt:
        "On Friday, the 18th of May, after having seen no land for twenty-three days, we sighted lofty mountains",
      attribution: "Anonymous journal of the first voyage (Roteiro), 1498, trans. E. G. Ravenstein (1898)",
    },
  },
];
