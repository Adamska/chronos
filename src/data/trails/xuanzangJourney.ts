import type { Trail } from "@/types/atlas";
import { story } from "./stories/xuanzangJourney";

export const xuanzangJourneyTrail: Trail = {
  id: "journey-xuanzang",
  kind: "journey",
  title: "Xuanzang's Pilgrimage to India",
  subtitle: "Sixteen years and ten thousand miles in search of the true scriptures",
  summary:
    "In 629 the monk Xuanzang slipped out of Tang China against an imperial travel ban, determined to find reliable Buddhist texts at their source in India. He crossed the Gobi, the Tian Shan and the Hindu Kush, studied for years at Nalanda, and came home in 645 with 657 texts and a travel record that still guides archaeologists.",
  accent: "#d9a441",
  keywords: [
    "xuanzang",
    "hsuan-tsang",
    "pilgrimage",
    "buddhism",
    "silk road",
    "tang dynasty",
    "chang'an",
    "tian shan",
    "bamiyan",
    "gandhara",
    "nalanda",
    "harsha",
    "khotan",
    "great tang records on the western regions",
  ],
  stops: [
    {
      id: "xuanzang-changan",
      year: 629,
      place: "Chang'an, capital of the Tang dynasty",
      coordinates: [108.94, 34.26],
      title: "A Monk Defies the Travel Ban",
      summary:
        "Troubled by contradictions between the Chinese translations of Yogacara texts, Xuanzang petitioned to travel west and was refused. He left the capital anyway, without papers, at a time when the new Tang state still forbade travel beyond its frontier.",
      whyHere:
        "Chang'an sat in the Wei River basin at the eastern head of the overland route to Central Asia, so every road west began at its gates. Its monasteries held the translations whose gaps sent him looking for the Sanskrit originals.",
      wikipediaSlug: "Chang'an",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Xuanzang", "Emperor Taizong of Tang"],
    },
    {
      id: "xuanzang-liangzhou",
      year: 629,
      place: "Liangzhou (Wuwei), Hexi Corridor",
      coordinates: [102.64, 37.93],
      title: "Slipping Through the Hexi Corridor",
      summary:
        "At Liangzhou the governor ordered the fugitive monk back to the capital, but sympathetic Buddhists smuggled him out by night. He went on to Guazhou and crossed the desert beyond the Yumen frontier alone, nearly dying of thirst before reaching the oasis of Hami.",
      whyHere:
        "The Hexi Corridor is a narrow strip of oases fed by Qilian Mountain snowmelt, squeezed between the Tibetan Plateau and the Gobi. With no alternative route, it was the natural checkpoint where the Tang could police everyone leaving China.",
      wikipediaSlug: "Wuwei,_Gansu",
      layer: "borders",
      arrivedBy: "knowledge",
    },
    {
      id: "xuanzang-gaochang",
      year: 630,
      place: "Gaochang, Turpan Basin",
      coordinates: [89.53, 42.85],
      title: "The King of Gaochang's Patronage",
      summary:
        "King Qu Wentai, a devout Buddhist, tried to keep Xuanzang as his court teacher and relented only when the monk went on hunger strike. He then equipped him with escorts, horses, gold, silver and letters of introduction to two dozen rulers along the road.",
      whyHere:
        "The Turpan Basin lies below sea level, and underground channels carry Tian Shan meltwater to its fields, making it one of the richest oases on the northern route. That wealth let a small kingdom bankroll a pilgrim across half of Asia.",
      wikipediaSlug: "Gaochang",
      layer: "trade",
      arrivedBy: "exploration",
      keyFigures: ["Qu Wentai"],
    },
    {
      id: "xuanzang-bedel",
      year: 630,
      place: "Bedel Pass, Tian Shan",
      coordinates: [78.38, 41.42],
      title: "Over the Ice of the Tian Shan",
      summary:
        "After waiting two months at Kucha for the snows to ease, the party crossed the glaciers of the Tian Shan in seven days. His biography records that a large share of the caravan's men and animals died of cold and exposure on the ice.",
      whyHere:
        "The Bedel Pass, over 4,000 metres high, is the most direct link between the Tarim Basin oases and the grasslands of the Issyk-Kul region. It saved weeks of travel but left travellers exposed to glaciers, avalanches and bitter winds.",
      wikipediaSlug: "Bedel_Pass",
      layer: "trade",
      arrivedBy: "exploration",
    },
    {
      id: "xuanzang-suyab",
      year: 630,
      place: "Suyab, near Tokmok in the Chu Valley",
      coordinates: [75.2, 42.81],
      title: "Audience with the Western Turkic Khagan",
      summary:
        "Near Suyab Xuanzang met the khagan of the Western Turks, whose camp he describes in rich detail. The khagan's safe conduct and letters carried him through lands the Turks controlled as far as the Hindu Kush.",
      whyHere:
        "The well-watered Chu Valley offered the summer pastures a nomad court needed, and it sat on the main road between the Tarim Basin and Sogdiana. Whoever held it controlled the caravan traffic between China and the West.",
      wikipediaSlug: "Suyab",
      layer: "borders",
      arrivedBy: "exploration",
    },
    {
      id: "xuanzang-samarkand",
      year: 630,
      place: "Samarkand, Sogdiana",
      coordinates: [66.96, 39.65],
      title: "Among the Merchants of Sogdiana",
      summary:
        "Xuanzang found Samarkand prosperous but largely Zoroastrian and hostile to Buddhist monks. By his own account he won over its ruler, though he soon pressed south through the Iron Gate toward Bactria.",
      whyHere:
        "Samarkand stands in the fertile Zeravshan valley, midway between the steppe, China, India and Iran. Its Sogdian merchants ran the caravan networks of inner Asia, which made the city a crossroads of faiths as well as goods.",
      wikipediaSlug: "Samarkand",
      layer: "trade",
      arrivedBy: "exploration",
    },
    {
      id: "xuanzang-bamiyan",
      year: 630,
      place: "Bamiyan valley, Hindu Kush",
      coordinates: [67.83, 34.83],
      title: "The Colossal Buddhas of Bamiyan",
      summary:
        "Crossing the Hindu Kush, Xuanzang reached Bamiyan and described its gilded colossal Buddha and its many monasteries. His account became the key evidence for how the statues destroyed in 2001 originally looked.",
      whyHere:
        "Bamiyan is a sheltered valley at about 2,500 metres between the Hindu Kush and the Koh-i-Baba range, on the route linking Bactria to the plains of Gandhara. Caravans resting there before the high passes made it rich enough to carve Buddhas into its cliffs.",
      wikipediaSlug: "Buddhas_of_Bamiyan",
      layer: "science",
      arrivedBy: "exploration",
      primarySource: {
        excerpt:
          "Its golden hues sparkle on every side, and its precious ornaments dazzle the eyes by their brightness.",
        attribution: "Xuanzang, Si-Yu-Ki: Buddhist Records of the Western World, trans. Samuel Beal (1884), book I",
      },
    },
    {
      id: "xuanzang-gandhara",
      year: 631,
      place: "Purushapura (Peshawar), Gandhara",
      coordinates: [71.57, 34.01],
      title: "The Faded Heartland of Gandhara",
      summary:
        "Descending toward the Indus, Xuanzang found the land where much of Mahayana Buddhism had flourished largely in ruins, its stupas crumbling and its monasteries deserted. He then spent about two years studying in Kashmir.",
      whyHere:
        "The Peshawar basin opens at the foot of the Khyber and Kabul River routes, the main gate from Central Asia into the Indian plains. For centuries that position made Gandhara a meeting ground of Greek, Indian and Central Asian art and thought.",
      wikipediaSlug: "Gandhara",
      layer: "science",
      arrivedBy: "exploration",
    },
    {
      id: "xuanzang-nalanda",
      year: 637,
      place: "Nalanda, Magadha",
      coordinates: [85.44, 25.14],
      title: "Student of the Abbot Silabhadra",
      summary:
        "At Nalanda, the greatest monastic university of its day, Xuanzang studied Yogacara philosophy under the aged abbot Silabhadra and mastered Sanskrit learning. He later toured eastern and southern India before returning to teach there.",
      whyHere:
        "Nalanda lay in the fertile middle Ganges plain near Rajagriha and Bodh Gaya, the landscape of the Buddha's own life. Royal land grants from the rich rice villages around it supported thousands of resident monks.",
      wikipediaSlug: "Nalanda",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Silabhadra"],
    },
    {
      id: "xuanzang-kanauj",
      year: 643,
      place: "Kanyakubja (Kannauj), on the Ganges",
      coordinates: [79.92, 27.06],
      title: "Harsha's Great Assembly at Kanauj",
      summary:
        "Emperor Harsha summoned a great religious assembly at his capital at which Xuanzang defended Mahayana doctrine before kings and scholars. Harsha then sent him homeward laden with gifts and a large escort.",
      whyHere:
        "Kanauj commanded the Ganges at the heart of the Doab, the fertile land between the Ganges and Yamuna. Holding it gave Harsha control over the richest farmland and river traffic of northern India.",
      wikipediaSlug: "Harsha",
      layer: "borders",
      arrivedBy: "knowledge",
      keyFigures: ["Harsha"],
    },
    {
      id: "xuanzang-khotan",
      year: 644,
      place: "Khotan, southern Tarim Basin",
      coordinates: [79.92, 37.11],
      title: "Waiting for Pardon at Khotan",
      summary:
        "Returning over the Pamirs by way of Kashgar, Xuanzang halted at Khotan and wrote to Emperor Taizong asking forgiveness for his illegal departure. While awaiting the reply he taught the Buddhist community of the city.",
      whyHere:
        "Khotan's oasis is watered by rivers flowing out of the Kunlun Mountains along the southern edge of the Taklamakan Desert. On that rim road it was a natural staging post on the way back to China, and famous for jade.",
      wikipediaSlug: "Kingdom_of_Khotan",
      layer: "trade",
      arrivedBy: "knowledge",
      keyFigures: ["Emperor Taizong of Tang"],
    },
    {
      id: "xuanzang-return",
      year: 645,
      place: "Chang'an, capital of the Tang dynasty",
      coordinates: [108.96, 34.22],
      title: "Return with 657 Scriptures",
      summary:
        "Crowds lined the streets as Xuanzang returned with hundreds of Sanskrit texts, relics and images. Taizong pardoned him and commissioned his Great Tang Records on the Western Regions, and he spent the rest of his life translating, much of it at the Daci'en Temple, where the Great Wild Goose Pagoda rose in 652 to hold the collection.",
      whyHere:
        "As the imperial capital and the eastern terminus of the Silk Road, Chang'an had the patronage and the scholars to turn a pilgrim's library into a translation bureau. From there his texts spread to Korea and Japan.",
      wikipediaSlug: "Great_Wild_Goose_Pagoda",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Xuanzang", "Emperor Taizong of Tang", "Bianji"],
    },
  ],
  story,
};
