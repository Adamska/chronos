import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "silk-zhang-qian",
    title: "Zhang Qian Reaches Bactria",
    year: -128,
    endYear: -126,
    place: "Daxia (Bactria), on the upper Oxus",
    coordinates: [66.9, 36.76],
    layer: "trade",
    significance: 5,
    wikipediaSlug: "Zhang_Qian",
    summary:
      "Sent by Emperor Wu to recruit the Yuezhi against the Xiongnu, the envoy Zhang Qian reached their new lands on the Oxus after a decade as a Xiongnu captive. The alliance failed, but his report on Ferghana, Bactria and Parthia gave the Han court its first detailed picture of the West.",
    context:
      "The Xiongnu confederation dominated the steppe and extracted tribute from the Han. The Yuezhi, driven west by the Xiongnu, had settled north of the Oxus and held sway over Bactria. Of the hundred or so men who set out, only Zhang Qian and his guide Ganfu are recorded as returning.",
    whyHere:
      "Bactria sat where the Oxus valley meets the passes of the Hindu Kush, so its markets drew goods from India, the steppe and Iran. Finding Sichuan cloth there told Zhang Qian that a route already linked southwest China to Bactria by way of India.",
    keyFigures: ["Zhang Qian", "Emperor Wu of Han", "Ganfu"],
    primarySource: {
      excerpt:
        "When I was in Daxia I saw bamboo canes from Qiong and cloth made in the province of Shu. When I asked the people how they had gotten such articles, they replied, 'Our merchants go buy them in the markets of Shendu.'",
      attribution: "Zhang Qian's report in Sima Qian, Records of the Grand Historian, ch. 123, trans. Burton Watson",
    },
    schematic: {
      kind: "causal",
      steps: [
        "Han seeks allies against Xiongnu",
        "Envoy reaches Yuezhi in Bactria",
        "Court learns of Ferghana horses",
        "Han armies push west",
      ],
    },
  },
  {
    id: "silk-hexi-corridor",
    title: "Han Conquest of the Hexi Corridor",
    year: -121,
    place: "Hexi Corridor (Jiuquan)",
    coordinates: [98.49, 39.73],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Hexi_Corridor",
    summary:
      "In 121 BCE the young general Huo Qubing drove the Xiongnu out of the Hexi Corridor, and the Hunye king surrendered with tens of thousands of followers. Over the following decades the Han planted commanderies at Wuwei, Zhangye, Jiuquan and Dunhuang and extended its walls west to the Yumen Pass.",
    context:
      "Emperor Wu abandoned the old policy of appeasing the Xiongnu with marriage alliances and gifts. Holding this strip of land separated the Xiongnu from their Qiang allies to the south and opened direct contact with the oasis states of the Tarim Basin.",
    whyHere:
      "The corridor is a trough nearly 1,000 kilometres long between the Qilian Mountains and the Gobi, where snowmelt rivers feed a chain of oases. It was the only practical passage from the Yellow River to the Tarim Basin, so whoever held it controlled overland traffic between China and the West.",
    keyFigures: ["Huo Qubing", "Emperor Wu of Han"],
  },
  {
    id: "silk-heavenly-horses",
    title: "War of the Heavenly Horses",
    year: -104,
    endYear: -101,
    place: "Ferghana Valley (Dayuan)",
    coordinates: [71.8, 40.8],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "War_of_the_Heavenly_Horses",
    summary:
      "When the kingdom of Dayuan in Ferghana refused to trade its prized horses and killed a Han envoy, Emperor Wu sent General Li Guangli west across the Tarim Basin. The first expedition failed, but the second besieged the capital, Ershi, and brought back about three thousand horses.",
    context:
      "Han cavalry wanted larger, stronger mounts than the steppe ponies of the Xiongnu, and Zhang Qian had reported the 'blood-sweating' horses of Ferghana. The victory awed the oasis states and prepared the way for Han garrisons in the Western Regions.",
    whyHere:
      "Ferghana is a fertile basin ringed by the Tian Shan and Alai ranges, with alfalfa pastures that could raise heavy horses. Reaching it meant crossing the whole Taklamakan rim and the passes west of Kashgar, and the first army broke down for lack of food from the oases along the way.",
    keyFigures: ["Li Guangli", "Emperor Wu of Han"],
  },
  {
    id: "silk-pliny",
    title: "Pliny Counts the Cost of Eastern Luxuries",
    year: 77,
    place: "Rome",
    coordinates: [12.49, 41.89],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Natural_History_(Pliny)",
    summary:
      "In his Natural History, dedicated to the future emperor Titus in 77 CE, Pliny the Elder complained that India, the land of the Seres and Arabia drained the Roman Empire of 100 million sesterces a year.",
    context:
      "Silk reached Rome as a costly luxury through long chains of intermediaries, and Romans knew its makers only vaguely as the Seres. Most eastern goods, above all pepper, came by sea to Egypt, while Parthia controlled the overland approaches.",
    whyHere:
      "Rome sat at the far western end of the network, thousands of kilometres from any silk producer. Its imports funnelled through Alexandria, fed by Red Sea ports such as Berenice, and through Syrian caravan cities like Palmyra and Antioch.",
    keyFigures: ["Pliny the Elder"],
    primarySource: {
      excerpt:
        "By the lowest reckoning India, China and the Arabian peninsula take from our empire 100 million sesterces every year—that is the sum which our luxuries and our women cost us.",
      attribution: "Pliny the Elder, Natural History 12.84 (77 CE), trans. H. Rackham",
    },
    schematic: {
      kind: "exchange",
      westLabel: "Roman Empire",
      eastLabel: "India and China",
      eastbound: ["gold coin", "glassware", "coral", "wine"],
      westbound: ["silk", "pepper", "pearls", "gemstones"],
    },
  },
  {
    id: "silk-gan-ying",
    title: "Gan Ying Turns Back at the Gulf",
    year: 97,
    place: "Head of the Persian Gulf (Tiaozhi)",
    coordinates: [47.6, 30.9],
    layer: "trade",
    significance: 2,
    wikipediaSlug: "Gan_Ying",
    summary:
      "The Han general Ban Chao sent his envoy Gan Ying to find Da Qin, the Roman Empire. Gan Ying reached the shore of a great sea, probably the Persian Gulf, where Parthian sailors warned that the crossing could take up to two years, and he turned back.",
    context:
      "Ban Chao had restored Han power over the Tarim Basin. The Book of the Later Han states that Parthia wanted to trade Chinese silk to Rome itself and so kept the two empires apart, and many historians read the sailors' warning in that light.",
    whyHere:
      "Mesopotamia and the Gulf formed the hinge between the overland road from Iran and the sea lanes to India and Egypt, and Parthia sat astride both. A traveller arriving from the east met open water here, which made Parthian shipmasters the gatekeepers to everything beyond.",
    keyFigures: ["Gan Ying", "Ban Chao"],
  },
  {
    id: "silk-kanishka",
    title: "Kanishka and Kushan Buddhism",
    year: 127,
    place: "Purushapura (Peshawar), Gandhara",
    coordinates: [71.57, 34.01],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Kanishka",
    summary:
      "The Kushan emperor Kanishka, whose reign probably began around 127 CE, ruled from Bactria to the Ganges plain and became a celebrated patron of Buddhism. Workshops in Gandhara and Mathura produced some of the earliest images of the Buddha in human form.",
    context:
      "Kushan rule joined Central Asian, Iranian and Indian worlds under one dynasty. Monks from Parthian and Kushan lands, such as An Shigao and Lokaksema, were among the first to translate Buddhist texts into Chinese at Luoyang in the second century.",
    whyHere:
      "Gandhara lies at the foot of the Khyber Pass and the routes over the Hindu Kush and Karakoram. Its monasteries stood on the roads merchants took north to Bactria and the Tarim Basin, so Buddhism travelled east with the caravans.",
    keyFigures: ["Kanishka", "An Shigao", "Lokaksema"],
  },
  {
    id: "silk-sogdian-letters",
    title: "The Sogdian Ancient Letters",
    year: 313,
    place: "Han watchtower west of Dunhuang",
    coordinates: [93.9, 40.3],
    layer: "trade",
    significance: 2,
    wikipediaSlug: "Sogdia",
    summary:
      "Around 313 CE a bag of letters written by Sogdian merchants in China went astray in a watchtower west of Dunhuang, where Aurel Stein found it in 1907. One letter reports the sack of Luoyang in 311; another is from Miwnay, a woman left destitute in Dunhuang by her husband.",
    context:
      "Sogdians from Samarkand and Bukhara had built a diaspora of trading communities across northern China. The letters show a family network dealing in goods such as musk and silver while the Western Jin dynasty collapsed around them.",
    whyHere:
      "Dunhuang guarded the point where the Hexi Corridor ends and the routes around the Taklamakan begin, so mail between China and Sogdiana passed its frontier posts. The dry desert air preserved paper that would have rotted almost anywhere else.",
    keyFigures: ["Nanai-vandak", "Miwnay", "Aurel Stein"],
  },
  {
    id: "silk-silkworms",
    title: "Silkworms Smuggled to Constantinople",
    year: 552,
    place: "Constantinople",
    coordinates: [28.98, 41.01],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Byzantine_silk",
    summary:
      "According to Procopius, monks who had lived in a land called Serinda brought silkworm eggs to Justinian around 552. Their gift laid the foundation of a Byzantine silk industry that no longer depended entirely on Persian middlemen.",
    context:
      "The Eastern Roman Empire fought repeated wars with Sasanian Persia, which controlled the overland silk trade and charged heavily for it. Justinian had already tried, without success, to buy silk through Ethiopian merchants in the Red Sea to bypass Persia.",
    whyHere:
      "Constantinople commanded the straits between the Black Sea and the Aegean and was the empire's greatest market for luxury cloth. Mulberry trees grew well in Greece, Syria and Anatolia, so once the eggs arrived silk could be raised inside imperial borders.",
    keyFigures: ["Justinian I", "Procopius"],
  },
  {
    id: "silk-xuanzang",
    title: "Xuanzang's Journey to India",
    year: 629,
    endYear: 645,
    place: "Bamiyan, Hindu Kush",
    coordinates: [67.83, 34.82],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Xuanzang",
    summary:
      "Defying a ban on foreign travel, the monk Xuanzang left China in 629 and went west by Turfan, Samarkand and the Hindu Kush, passing the great Buddhas of Bamiyan on his way to India. He studied at Nalanda and returned to Chang'an in 645 with more than six hundred Buddhist texts.",
    context:
      "The new Tang dynasty had not yet secured its western frontier, and the Western Turkic Khaganate dominated the routes. Xuanzang's Great Tang Records on the Western Regions became a key source for Central Asia and India, and his translations reshaped Chinese Buddhism.",
    whyHere:
      "Bamiyan lies in a high valley between the Hindu Kush and the Koh-i-Baba range, on the route from Bactria down to Gandhara. Caravans resting there endowed the monasteries and the colossal Buddhas carved into its cliffs.",
    keyFigures: ["Xuanzang", "Emperor Taizong of Tang"],
  },
  {
    id: "silk-chang-an",
    title: "Chang'an, Capital of the Tang",
    year: 713,
    endYear: 755,
    place: "Chang'an (Xi'an)",
    coordinates: [108.94, 34.34],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Chang'an",
    summary:
      "Under Emperor Xuanzong, Tang Chang'an was one of the largest cities in the world, a walled grid of about 84 square kilometres with perhaps a million people. Sogdian, Persian, Turkic and Arab traders did business in its regulated West Market.",
    context:
      "Tang armies had taken the Tarim oases in the mid-seventh century and stationed the Four Garrisons of Anxi there. Zoroastrian, Manichaean and Church of the East communities worshipped in the city, and Central Asian music and dress were in fashion until the An Lushan Rebellion of 755.",
    whyHere:
      "Chang'an stood in the Wei River valley, a basin shielded by mountains and guarded passes, at the eastern head of the road through the Hexi Corridor. Grain barges from the east and caravans from the west both converged on it.",
    keyFigures: ["Emperor Xuanzong of Tang", "An Lushan"],
  },
];
