import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "bantu-madagascar-bananas",
    title: "Austronesian Sailors and the Banana",
    year: 600,
    place: "North-western Madagascar",
    coordinates: [46.8, -15.9],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "History_of_Madagascar",
    summary:
      "Sometime in the first millennium CE, sailors from island Southeast Asia settled Madagascar; Malagasy is an Austronesian language whose closest relative is Ma'anyan of southern Borneo. Bananas, plantains, taro and Asian yams, all Southeast Asian crops, became staples across much of Bantu-speaking Africa.",
    context:
      "When and how bananas arrived is debated. Phytoliths from Nkang in Cameroon have been dated to the mid-first millennium BCE, which would imply a far earlier arrival, but the identification has been questioned; many scholars favour a route through the East African coast and Madagascar.",
    whyHere:
      "Monsoon winds and the westward South Equatorial Current made a long crossing of the Indian Ocean possible. Bananas thrived in the humid lowlands, the Great Lakes and the rainforest, where they yielded more food than African yams and cereals.",
    keyFigures: ["Otto Christian Dahl"],
  },
  {
    id: "bantu-swahili-towns",
    title: "Swahili Towns Take Shape",
    year: 800,
    place: "Shanga, Pate Island, Lamu archipelago",
    coordinates: [41.07, -2.14],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Swahili_coast",
    summary:
      "From around the eighth century, trading towns grew along the coast from southern Somalia to Mozambique. At Shanga, Mark Horton's excavations uncovered a sequence of mosques rebuilt over centuries, the earliest of timber.",
    context:
      "Archaeology and linguistics show these towns were founded by local Bantu-speaking communities who adopted Islam and joined Indian Ocean trade, not by Arab or Persian colonists as older accounts claimed. Swahili is a Bantu language, later enriched with Arabic loanwords.",
    whyHere:
      "The coast is a chain of islands, creeks and harbours sheltered by coral reefs, within reach of the monsoon. Ships from Arabia, the Gulf and India arrived on the northeast monsoon and left on the southwest, so coastal towns became seasonal brokers between interior and ocean.",
    keyFigures: ["Mark Horton"],
  },
  {
    id: "bantu-masudi",
    title: "Al-Mas'udi Sails to the Land of the Zanj",
    year: 916,
    place: "Qanbalu, probably on Pemba Island",
    coordinates: [39.75, -5.2],
    layer: "science",
    significance: 2,
    wikipediaSlug: "Al-Masudi",
    summary:
      "In 916 the Baghdad-born scholar al-Mas'udi sailed from Oman to Qanbalu, an island town on the East African coast. His Meadows of Gold describes the Zanj coast, its ivory trade and a gold-bearing land called Sofala in the far south.",
    context:
      "Arabic geographers used 'Zanj' for the East African coast and its people. By the tenth century the coast was part of a Muslim commercial network linking Basra, Siraf and Oman with India, and al-Mas'udi was among the first writers to describe it from his own voyage.",
    whyHere:
      "Pemba lies off the mainland on the monsoon route from Oman, with sheltered anchorages, fertile soils and the safety of open water between it and the coast.",
    keyFigures: ["Al-Mas'udi"],
  },
  {
    id: "bantu-mapungubwe",
    title: "Mapungubwe Rises on the Limpopo",
    year: 1075,
    endYear: 1220,
    place: "Mapungubwe Hill, Shashe–Limpopo confluence",
    coordinates: [29.39, -22.2],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Kingdom_of_Mapungubwe",
    summary:
      "At the Shashe–Limpopo confluence, the communities of K2 and then Mapungubwe Hill formed what many archaeologists regard as southern Africa's first state, with an elite living on the hilltop above commoners. Graves on the hill held gold objects, including the famous gold rhinoceros.",
    context:
      "Dates differ by source: the kingdom is often given as about 1075 to 1220, while Thomas Huffman's chronology places the hilltop capital around 1220 to 1290. Its wealth came from sending ivory and gold to the coast, and glass beads from that trade are found in great numbers.",
    whyHere:
      "The confluence is a hot, dry valley where the Limpopo's floods renewed floodplain soils, allowing harvests in a marginal climate, while elephants supplied ivory and the river pointed toward the Indian Ocean.",
    keyFigures: ["Thomas Huffman"],
  },
  {
    id: "bantu-great-zimbabwe",
    title: "Great Zimbabwe Rules the Plateau",
    year: 1100,
    endYear: 1450,
    place: "Great Zimbabwe, near Masvingo",
    coordinates: [30.93, -20.27],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Great_Zimbabwe",
    summary:
      "On the southern edge of the Zimbabwe plateau, a capital of mortarless stone walls grew from around the twelfth century and peaked in the fourteenth, when the Great Enclosure was built. Estimates of its peak population run as high as about 18,000.",
    context:
      "Colonial-era writers denied that Africans had built it; Gertrude Caton-Thompson's excavations in 1929 confirmed its local origin, and the builders were ancestors of the Shona. Shadreck Chirikure and colleagues have since argued for revising its chronology, and the reasons for its decline in the fifteenth century are still debated.",
    whyHere:
      "The site lies over 1,000 metres up, above the tsetse fly of the lowveld, so cattle could be herded. Granite domes nearby shed natural slabs ideal for walling, and the capital sat between the gold-bearing plateau and the route east to Sofala.",
    keyFigures: ["Gertrude Caton-Thompson", "Shadreck Chirikure"],
    schematic: {
      kind: "causal",
      steps: [
        "Mapungubwe declines",
        "Power shifts to the plateau",
        "Gold flows east to Sofala",
        "Stone capital peaks",
      ],
    },
  },
  {
    id: "bantu-kilwa-gold",
    title: "Kilwa Takes Over the Sofala Gold Trade",
    year: 1200,
    place: "Kilwa Kisiwani",
    coordinates: [39.51, -8.96],
    layer: "trade",
    significance: 5,
    wikipediaSlug: "Kilwa_Sultanate",
    summary:
      "Around the late twelfth or thirteenth century, Kilwa Kisiwani gained control of trade at Sofala, where gold from the Zimbabwe plateau reached the coast. The profits paid for coral-stone mosques and palaces and for Kilwa's own copper coins.",
    context:
      "The Kilwa Chronicle credits the town's founding to Ali ibn al-Hassan Shirazi, a prince from Shiraz, a tradition historians read as a claim to Gulf ties rather than a literal migration. Ibn Battuta visited around 1331 and praised Sultan al-Hasan ibn Sulaiman, builder of the great palace of Husuni Kubwa.",
    whyHere:
      "Kilwa lies near the southern limit of reliable monsoon sailing: ships from Arabia and India could reach it and return in one season, but not Sofala. Kilwa became the broker, sending its own vessels south for the gold.",
    keyFigures: ["Ali ibn al-Hassan Shirazi", "al-Hasan ibn Sulaiman", "Ibn Battuta"],
    schematic: {
      kind: "exchange",
      westLabel: "Zimbabwe plateau",
      eastLabel: "Kilwa and the ocean",
      eastbound: ["gold", "ivory"],
      westbound: ["glass beads", "cotton cloth", "Chinese celadon", "Persian pottery"],
    },
  },
  {
    id: "bantu-kongo-founded",
    title: "Founding of the Kingdom of Kongo",
    year: 1390,
    place: "Mbanza Kongo",
    coordinates: [14.24, -6.27],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Kingdom_of_Kongo",
    summary:
      "According to Kongo traditions recorded later, Lukeni lua Nimi crossed the Congo River from the small state of Vungu to the north and conquered the land around Mbanza Kongo. The founding is usually placed around 1390, but the date is reconstructed and some historians put it earlier.",
    context:
      "Kongo became a centralised kingdom whose provinces were governed by royal appointees. The king controlled the nzimbu shells gathered at Luanda Island, which served as currency.",
    whyHere:
      "Mbanza Kongo stands on a hilltop plateau south of the Congo, healthier and easier to defend than the river valley, at a crossroads of routes between the Atlantic coast and Malebo Pool.",
    keyFigures: ["Lukeni lua Nimi"],
  },
  {
    id: "bantu-diogo-cao",
    title: "Diogo Cão Reaches the Congo Mouth",
    year: 1483,
    place: "Mouth of the Congo River",
    coordinates: [12.35, -6.1],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Diogo_Cão",
    summary:
      "Sailing for John II of Portugal, Diogo Cão entered the mouth of the Congo in 1482 or 1483 and set up a stone pillar on its southern shore. When the envoys he sent inland did not return, he took Kongo hostages to Lisbon and brought them back on a later voyage, opening relations with the kingdom.",
    context:
      "Portugal had been working down the West African coast for decades in search of gold and a sea route to India. Kongo's king, Nzinga a Nkuwu, saw advantages in the newcomers, beginning an alliance that would reshape the kingdom.",
    whyHere:
      "The Congo pours so much water into the Atlantic that its fresh-water plume and current are felt far out to sea, signalling a great river to sailors. Its estuary led toward the heartland of the largest kingdom on that coast.",
    keyFigures: ["Diogo Cão", "John II of Portugal", "Nzinga a Nkuwu"],
  },
  {
    id: "bantu-kongo-baptism",
    title: "The King of Kongo Is Baptised",
    year: 1491,
    place: "Mbanza Kongo",
    coordinates: [14.24, -6.27],
    layer: "science",
    significance: 3,
    wikipediaSlug: "João_I_of_Kongo",
    summary:
      "In 1491, after Portuguese priests, soldiers and craftsmen arrived, Nzinga a Nkuwu was baptised as João I. His son Mvemba a Nzinga, baptised as Afonso, later made Christianity central to royal power.",
    context:
      "The conversion bound Kongo to Portugal but divided the court, and the king himself later drifted from the new faith. In the sixteenth century the alliance would also draw Kongo into the Atlantic slave trade.",
    whyHere:
      "The capital lay a few days' march inland from the port of Mpinda near the Congo mouth, close enough for regular contact with Portuguese ships yet far enough to keep them at arm's length.",
    keyFigures: ["Nzinga a Nkuwu", "Afonso I of Kongo"],
  },
  {
    id: "bantu-malindi-gama",
    title: "Vasco da Gama Finds a Pilot at Malindi",
    year: 1498,
    place: "Malindi",
    coordinates: [40.12, -3.22],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Vasco_da_Gama",
    summary:
      "After a hostile reception at Mombasa, Vasco da Gama's fleet was welcomed at Malindi in April 1498, and its ruler supplied a pilot who guided the ships across the Arabian Sea to Calicut. Later tradition named the pilot as Ahmad ibn Majid, but most historians now doubt it.",
    context:
      "Malindi's ruler, a rival of Mombasa, saw an ally in the Portuguese. Within a decade Portuguese fleets would sack Kilwa and Mombasa to seize the gold trade of Sofala.",
    whyHere:
      "Malindi lay at the point where the Swahili coast met the monsoon route to India. Leaving in late April as the southwest monsoon set in, the fleet reached Calicut in under four weeks.",
    keyFigures: ["Vasco da Gama"],
  },
];
