import type { Trail } from "@/types/atlas";

export const zhengHeJourneyTrail: Trail = {
  id: "journey-zheng-he",
  kind: "journey",
  title: "Zheng He's Treasure Fleets",
  subtitle: "Seven Ming voyages riding the monsoons from Nanjing to Africa",
  summary:
    "Between 1405 and 1433 the court eunuch Zheng He led seven great fleets for the Ming emperors into the Indian Ocean, carrying tens of thousands of men to display imperial power and gather tribute. His squadrons reached Java, Ceylon, Calicut, Hormuz, Aden and the Swahili coast before the court abandoned the voyages.",
  accent: "#c76a5a",
  keywords: [
    "zheng he",
    "cheng ho",
    "treasure fleet",
    "treasure voyages",
    "ming dynasty",
    "yongle emperor",
    "nanjing",
    "malacca",
    "calicut",
    "hormuz",
    "malindi",
    "giraffe",
    "monsoon",
    "indian ocean",
    "ma huan",
  ],
  stops: [
    {
      id: "zhenghe-nanjing",
      year: 1405,
      place: "Longjiang shipyard, Nanjing",
      coordinates: [118.73, 32.07],
      title: "The Treasure Ships Leave Nanjing",
      summary:
        "The Yongle Emperor, who had seized the throne in 1402, ordered a vast fleet built to project Ming power overseas. In 1405 Zheng He, a Muslim-born eunuch and trusted commander, led out the first voyage with some 27,000 men.",
      whyHere:
        "Nanjing, then the Ming capital, lies on the lower Yangtze, deep enough for large ships yet sheltered far upriver from typhoons and pirates. Timber floated down the river and the labour of a capital region fed shipyards on a scale no port could match.",
      wikipediaSlug: "Ming_treasure_voyages",
      layer: "borders",
      arrivedBy: "exploration",
      keyFigures: ["Zheng He", "Yongle Emperor"],
    },
    {
      id: "zhenghe-champa",
      year: 1405,
      place: "Qui Nhon (Vijaya), Champa",
      coordinates: [109.22, 13.78],
      title: "First Landfall in Champa",
      summary:
        "After assembling at the Yangtze mouth and on the Fujian coast, the fleet made its first foreign landfall in the kingdom of Champa. It became the regular opening stop of every voyage.",
      whyHere:
        "The winter northeast monsoon carried ships from Fujian down the coast of Vietnam in about ten days. Champa's harbours were the natural first port of call before the run across the South China Sea.",
      wikipediaSlug: "Champa",
      layer: "trade",
      arrivedBy: "exploration",
    },
    {
      id: "zhenghe-java",
      year: 1406,
      place: "East Java, Majapahit",
      coordinates: [112.75, -7.25],
      title: "Caught in a Javanese Civil War",
      summary:
        "Landing in Java during a war between two rival Majapahit kings, around 170 men from the fleet were killed. The victorious king later sent envoys to apologize and pay compensation to the Ming court.",
      whyHere:
        "Java's north coast ports gathered rice from the volcanic interior and spices from the eastern islands. Whoever controlled them sat on the main route to the Moluccas, which made Java a power the fleet had to engage.",
      wikipediaSlug: "Majapahit",
      layer: "conflict",
      arrivedBy: "exploration",
    },
    {
      id: "zhenghe-palembang",
      year: 1407,
      place: "Palembang, Sumatra",
      coordinates: [104.76, -2.99],
      title: "Defeat of the Pirate Chen Zuyi",
      summary:
        "On the way home from the first voyage the fleet destroyed the forces of Chen Zuyi, a Chinese pirate leader based at Palembang. He was captured and executed in Nanjing.",
      whyHere:
        "Palembang lies up the Musi River near the southern approach to the Strait of Malacca and the Sunda Strait. That position let whoever held it prey on, or tax, all shipping between China and the Indian Ocean.",
      wikipediaSlug: "Chen_Zuyi",
      layer: "conflict",
      arrivedBy: "military",
      keyFigures: ["Chen Zuyi"],
    },
    {
      id: "zhenghe-malacca",
      year: 1409,
      place: "Malacca, Malay Peninsula",
      coordinates: [102.25, 2.19],
      title: "A Fortified Depot at Malacca",
      summary:
        "Zheng He confirmed Ming protection of the young port of Malacca against Siam and set up a stockaded depot there. Fleets stored goods and regrouped at Malacca while waiting for the monsoon to change.",
      whyHere:
        "Malacca sits on the narrows of the Strait of Malacca, between the monsoon systems of the South China Sea and the Bay of Bengal. Ships from China and India both had to wait there for the winds to turn, making it the hinge of the whole route.",
      wikipediaSlug: "Malacca_Sultanate",
      layer: "trade",
      arrivedBy: "exploration",
      keyFigures: ["Parameswara"],
    },
    {
      id: "zhenghe-galle",
      year: 1411,
      place: "Galle, Ceylon",
      coordinates: [80.22, 6.03],
      title: "The Trilingual Stele and War in Ceylon",
      summary:
        "Zheng He set up a stele, dated 1409, honouring the Buddha, Allah and a Tamil Hindu deity in Chinese, Persian and Tamil. In 1411 his troops defeated the Ceylonese ruler Alagakkonara and carried him captive to Nanjing.",
      whyHere:
        "Ceylon lies where ships crossing the Bay of Bengal round southern India, and its harbours served traders of every faith. A single stone addressing Buddhists, Muslims and Hindus reflects that mix.",
      wikipediaSlug: "Galle_Trilingual_Inscription",
      layer: "conflict",
      arrivedBy: "military",
      keyFigures: ["Alagakkonara"],
    },
    {
      id: "zhenghe-hormuz",
      year: 1414,
      place: "Hormuz, Persian Gulf",
      coordinates: [56.46, 27.1],
      title: "Into the Persian Gulf at Hormuz",
      summary:
        "The fourth voyage pushed beyond India to Hormuz, the great emporium at the mouth of the Persian Gulf. The Muslim interpreter Ma Huan described its markets full of pearls, gems and goods from across Asia.",
      whyHere:
        "Hormuz is a barren island commanding the narrow strait into the Persian Gulf. Its harbour linked the Indian Ocean monsoon trade with caravan routes into Persia and Central Asia.",
      wikipediaSlug: "Kingdom_of_Ormus",
      layer: "trade",
      arrivedBy: "exploration",
      keyFigures: ["Ma Huan"],
    },
    {
      id: "zhenghe-semudera",
      year: 1415,
      place: "Semudera (Samudera Pasai), northern Sumatra",
      coordinates: [97.15, 5.15],
      title: "Intervention in Semudera",
      summary:
        "Returning from Hormuz, the fleet intervened in a succession struggle at Semudera, defeating the rebel Sekandar and taking him to China. The episode shows how the voyages backed favoured rulers by force.",
      whyHere:
        "Semudera, near the northern tip of Sumatra, was the last landfall before the open crossing of the Bay of Bengal to Ceylon. Fleets gathered there to wait for the monsoon to turn.",
      wikipediaSlug: "Samudera_Pasai_Sultanate",
      layer: "conflict",
      arrivedBy: "military",
      keyFigures: ["Sekandar"],
    },
    {
      id: "zhenghe-aden",
      year: 1418,
      place: "Aden, Rasulid Yemen",
      coordinates: [45.03, 12.79],
      title: "Gifts from the Sultan of Aden",
      summary:
        "Squadrons of the fifth and later voyages called at Aden, where the Rasulid sultan received the Ming envoys and sent back tribute that included exotic African animals.",
      whyHere:
        "Aden's harbour, sheltered in an extinct volcanic crater, guards the entrance to the Red Sea. Ships bound for Egypt or East Africa passed it, making it a natural meeting point of the Indian Ocean trade.",
      wikipediaSlug: "Aden",
      layer: "trade",
      arrivedBy: "exploration",
    },
    {
      id: "zhenghe-malindi",
      year: 1418,
      place: "Malindi, Swahili coast",
      coordinates: [40.12, -3.22],
      title: "The Giraffe from Malindi",
      summary:
        "Malindi had sent a giraffe to China in 1415, which the court hailed as the mythical qilin, a sign of heaven's favour. The fifth voyage carried its envoys home, bringing the fleet to the coast of Africa.",
      whyHere:
        "On the East African coast the northeast monsoon carried ships south from Arabia and India, and the southwest monsoon carried them back. Malindi and the other Swahili ports traded ivory and exotic animals for Asian cloth and porcelain.",
      wikipediaSlug: "Malindi",
      layer: "trade",
      arrivedBy: "exploration",
    },
    {
      id: "zhenghe-changle",
      year: 1431,
      place: "Changle, Fujian coast",
      coordinates: [119.52, 25.96],
      title: "Waiting for the Monsoon at Changle",
      summary:
        "Before the seventh and final voyage Zheng He erected a stele at Changle recording all seven voyages and thanking the sea goddess Tianfei. He had raised a similar inscription at Liujiagang near the Yangtze mouth that same year.",
      whyHere:
        "Changle lies at the mouth of the Min River, a sheltered anchorage on the Fujian coast. Fleets waited there for the northeast monsoon of winter before sailing south.",
      wikipediaSlug: "Zheng_He",
      layer: "science",
      arrivedBy: "exploration",
      keyFigures: ["Zheng He", "Xuande Emperor"],
    },
    {
      id: "zhenghe-calicut",
      year: 1433,
      place: "Calicut, Malabar Coast",
      coordinates: [75.78, 11.25],
      title: "Death on the Last Voyage",
      summary:
        "Zheng He is usually said to have died in 1433 at Calicut, the fleet's main Indian port, although the place and circumstances are uncertain and he may have been buried at sea. The fleet returned to Nanjing that summer and the voyages were never resumed.",
      whyHere:
        "Calicut, on the Malabar Coast, was the chief pepper market of India, and its rulers welcomed foreign merchants. Lying where the monsoons met the trade of Arabia and Southeast Asia, it was the anchor of every voyage.",
      wikipediaSlug: "Kozhikode",
      layer: "trade",
      arrivedBy: "exploration",
      keyFigures: ["Zheng He"],
    },
  ],
};
