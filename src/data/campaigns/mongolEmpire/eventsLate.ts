import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "mongol-baghdad",
    title: "Hulagu Sacks Baghdad",
    year: 1258,
    place: "Baghdad, on the Tigris",
    coordinates: [44.37, 33.31],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Siege_of_Baghdad",
    summary:
      "Sent west by his brother Möngke, Hulagu destroyed the Nizari Ismaili castles in 1256 and then besieged Baghdad, which surrendered on 10 February 1258. The city was sacked and the caliph al-Musta'sim was put to death, ending five centuries of Abbasid rule from Baghdad.",
    context:
      "The caliph had little military power left but great prestige among Sunni Muslims, and his refusal to submit made him a target. Hulagu's army included Chinese engineers and Christian Georgian troops, and he took into his service the scholar Nasir al-Din al-Tusi, for whom he soon built an observatory at Maragheh.",
    whyHere:
      "Baghdad sat where the Tigris and Euphrates come closest, at the foot of the main road down from the Iranian plateau through the Zagros passes. Its flat, canal-cut plain gave the defenders no high ground, and the Mongols broke the dikes to flood the caliph's field army before closing on the walls.",
    keyFigures: ["Hulagu Khan", "al-Musta'sim", "Nasir al-Din al-Tusi"],
  },
  {
    id: "mongol-ain-jalut",
    title: "Battle of Ain Jalut",
    year: 1260,
    place: "Ain Jalut, Jezreel Valley",
    coordinates: [35.36, 32.55],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Battle_of_Ain_Jalut",
    summary:
      "On 3 September 1260 the Mamluk sultan Qutuz and his general Baybars defeated a Mongol army at the spring of Ain Jalut, and its commander Kitbuqa was killed. The Mongols soon lost Syria, and the Euphrates became the lasting frontier between the Ilkhanate and the Mamluks.",
    context:
      "After taking Aleppo and Damascus, Hulagu learned that Möngke had died and withdrew most of his army east, leaving Kitbuqa with a reduced force. Many Mamluks, Baybars among them, were Kipchak Turks bought as boys from the same steppe as their enemies, and they fought with the same horse archery.",
    whyHere:
      "Syria's dry, scattered pastures could not keep a full Mongol army and its remounts through the summer, which helps explain why Hulagu left only a small force there. Ain Jalut lies in the Jezreel Valley, the corridor between the Galilee hills and Samaria that carries the road from the coast to Damascus, and its spring made it a natural place to camp and fight.",
    keyFigures: ["Qutuz", "Baybars", "Kitbuqa", "Hulagu Khan"],
    schematic: {
      kind: "causal",
      steps: [
        "Möngke dies in China, 1259",
        "Hulagu withdraws his main army",
        "Syria cannot feed large herds",
        "Mamluks defeat Kitbuqa's force",
        "Euphrates becomes the frontier",
      ],
    },
  },
  {
    id: "mongol-toluid-war",
    title: "The Toluid Civil War",
    year: 1260,
    endYear: 1264,
    place: "Karakorum and the Mongolian steppe",
    coordinates: [102.6, 47.4],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Toluid_Civil_War",
    summary:
      "When Möngke died in 1259 without a declared successor, rival assemblies in 1260 proclaimed both of his brothers, Kublai and Ariq Böke, as Great Khan. Kublai, backed by the wealth of northern China, cut Karakorum off from its grain and forced Ariq Böke to surrender in 1264.",
    context:
      "The war and the conflicts that followed, Berke of the Golden Horde against Hulagu and Kaidu against Kublai, ended the empire's political unity. Four main successor states emerged: the Yuan, the Golden Horde, the Ilkhanate and the Chagatai Khanate, linked by family and trade but often at war.",
    whyHere:
      "Karakorum sat deep in the grassland, far from any farmland able to feed it, and depended on grain carted from northern China. Whoever held the fields of China could starve the old steppe capital, which is why the centre of Mongol power shifted south to Kublai's new cities.",
    keyFigures: ["Kublai Khan", "Ariq Böke", "Berke", "Kaidu"],
  },
  {
    id: "mongol-xiangyang",
    title: "Siege of Xiangyang",
    year: 1267,
    endYear: 1273,
    place: "Xiangyang and Fancheng, on the Han River",
    coordinates: [112.14, 32.04],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Xiangyang",
    summary:
      "For years Kublai's armies blockaded the Song twin fortresses of Xiangyang and Fancheng. In 1273 counterweight trebuchets built by two Muslim engineers sent from the Ilkhanate, Ismail and Ala al-Din, helped break Fancheng, and the Song commander Lü Wenhuan surrendered Xiangyang.",
    context:
      "The Southern Song had held the line of the Huai and Han rivers for decades with walled cities, river fleets and gunpowder weapons. On the advice of the Song defector Liu Zheng, the Mongols built a river navy of their own, turning a steppe army into a combined force of cavalry, infantry and warships.",
    whyHere:
      "Xiangyang and Fancheng faced each other across the Han River, guarding the main route from the North China Plain to the Yangtze. Rivers, walls and wet rice country blunted cavalry; once the twin cities fell, the Han carried Mongol fleets down to the Yangtze and on toward the Song capital at Lin'an.",
    keyFigures: ["Kublai Khan", "Lü Wenhuan", "Aju", "Liu Zheng"],
    schematic: {
      kind: "causal",
      steps: [
        "Twin cities block the Han River",
        "Mongols build a river fleet",
        "Ilkhanate engineers build trebuchets",
        "Xiangyang surrenders in 1273",
        "Yangtze opens to Mongol fleets",
      ],
    },
  },
  {
    id: "mongol-yuan",
    title: "Kublai Proclaims the Yuan Dynasty",
    year: 1271,
    place: "Dadu (Khanbaliq), modern Beijing",
    coordinates: [116.39, 39.91],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Yuan_dynasty",
    summary:
      "In 1271 Kublai Khan adopted the Chinese dynastic name Great Yuan and made his new city of Dadu, known to Turkic and Mongol speakers as Khanbaliq, his main capital. By 1279 the Yuan ruled all of China, the first non-Han dynasty to do so.",
    context:
      "Kublai ruled as both Great Khan and Chinese emperor, though the western khanates recognised his supremacy only loosely. His court employed Mongols, Chinese, Uyghurs, Persians and Tibetans, and goods, techniques and experts moved between Yuan China and the Ilkhanate in Iran.",
    whyHere:
      "Dadu was built just south of the passes through the Yan Mountains, where the North China Plain meets the roads to the Mongolian steppe. From here Kublai could govern the farmland while staying within reach of his summer capital at Shangdu on the grassland, and canals and coastal shipping brought rice from the south.",
    keyFigures: ["Kublai Khan", "Liu Bingzhong", "Jamal al-Din"],
    schematic: {
      kind: "exchange",
      westLabel: "Ilkhanate Iran",
      eastLabel: "Yuan China",
      eastbound: ["astronomical instruments", "Muslim administrators", "cobalt pigment", "trebuchet engineers"],
      westbound: ["paper money", "porcelain", "silk", "Chinese medicine"],
    },
  },
  {
    id: "mongol-japan",
    title: "Mongol Invasions of Japan",
    year: 1274,
    endYear: 1281,
    place: "Hakata Bay, northern Kyushu",
    coordinates: [130.35, 33.62],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Mongol_invasions_of_Japan",
    summary:
      "In 1274 and again in 1281, Yuan and Korean forces sailed from Korea to Hakata Bay after Japan ignored Kublai's demands for submission. The first landing withdrew after a day of fighting, and in 1281 a far larger armada, joined by a fleet from southern China, was held off by a coastal wall and then wrecked by a typhoon.",
    context:
      "Goryeo Korea, a Mongol vassal since 1259, had to build and crew most of the ships. Japan's Kamakura shogunate, led by the regent Hōjō Tokimune, mobilised the warriors of Kyushu, and the storms came to be remembered as kamikaze, the divine winds.",
    whyHere:
      "The Korea Strait, about 200 kilometres wide with Tsushima and Iki as stepping stones, was the shortest crossing, but it put an army built around horses at the mercy of the sea. Hakata Bay was the natural landing at the end of that chain of islands, and late summer brought typhoons to the very coast the fleets had to hold.",
    keyFigures: ["Kublai Khan", "Hōjō Tokimune", "Takezaki Suenaga", "Hong Dagu"],
  },
  {
    id: "mongol-yamen",
    title: "Battle of Yamen",
    year: 1279,
    place: "Yamen, Pearl River Delta",
    coordinates: [113.08, 22.25],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Battle_of_Yamen",
    summary:
      "On 19 March 1279 a Yuan fleet under Zhang Hongfan destroyed the last Song fleet at Yamen, west of the Pearl River estuary. The Song minister Lu Xiufu leapt into the sea with the boy emperor Zhao Bing, and the Song dynasty ended.",
    context:
      "The Song capital Lin'an had surrendered to the Mongol general Bayan in 1276, but loyalists carried two young princes south by sea. To finish the war the Mongols needed a navy, and much of it came from surrendered Song commanders and ships.",
    whyHere:
      "Cavalry could not reach a court that lived on its ships, so the end came at sea among the islands and channels of the Pearl River Delta. Zhang Shijie chained the Song ships together in the anchorage at Yamen, and the Yuan squadrons cut them off from fresh water and attacked with the tides.",
    keyFigures: ["Zhang Hongfan", "Zhang Shijie", "Lu Xiufu", "Zhao Bing"],
  },
  {
    id: "mongol-bar-sauma",
    title: "Rabban Bar Sauma's Embassy to Europe",
    year: 1287,
    endYear: 1288,
    place: "Rome",
    coordinates: [12.49, 41.89],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Rabban_Bar_Sauma",
    summary:
      "In 1287 the Ilkhan Arghun sent Rabban Bar Sauma, a Uyghur monk of the Church of the East born near Khanbaliq, to seek a Western alliance against the Mamluks. He visited Constantinople, Rome, Paris and Gascony, met Philip IV of France and Edward I of England, and returned in 1288 with letters from Pope Nicholas IV but no army.",
    context:
      "Bar Sauma had left China in the 1270s on a pilgrimage to Jerusalem with his pupil Markos, who became patriarch of the Church of the East. His account, preserved in Syriac, gives a rare view of Latin Europe through eastern eyes, written as Marco Polo's book was describing Asia to Europeans.",
    whyHere:
      "Bar Sauma could cross Asia because the khanates kept roads and relay stations open between Khanbaliq and Iran. The Mamluks blocked the Ilkhanate's way to the Mediterranean through Syria, so its envoy went around them, sailing across the Black Sea to Constantinople and on to Italy.",
    keyFigures: ["Rabban Bar Sauma", "Arghun", "Philip IV of France", "Edward I of England"],
  },
  {
    id: "mongol-java",
    title: "Yuan Expedition to Java",
    year: 1293,
    place: "Daha (Kediri), East Java",
    coordinates: [112.01, -7.82],
    layer: "borders",
    significance: 2,
    wikipediaSlug: "Mongol_invasion_of_Java",
    summary:
      "In 1293 a Yuan fleet carrying 20,000 to 30,000 men reached Java to punish King Kertanegara of Singhasari, who had maimed Kublai's envoy. Finding him already dead, the Yuan commanders helped his son-in-law Raden Wijaya defeat the usurper Jayakatwang of Kediri, after which Wijaya turned on them and drove them back to their ships.",
    context:
      "It was the last of Kublai's overseas wars, after the failures in Japan and costly campaigns in Champa and Đại Việt. Wijaya went on to found Majapahit, which became the leading power in the archipelago.",
    whyHere:
      "Java lay more than 3,000 kilometres from the Yuan ports across the South China Sea, reachable only on the monsoon winds, so the army could not easily be reinforced or resupplied. An army built around horses had no advantage in the rice fields and river valleys of East Java, and it had to sail home before the winds turned.",
    keyFigures: ["Raden Wijaya", "Jayakatwang", "Ike Mese", "Shi Bi"],
  },
  {
    id: "mongol-ming",
    title: "Ming Armies Take Dadu",
    year: 1368,
    place: "Dadu (Beijing)",
    coordinates: [116.42, 39.95],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Hongwu_Emperor",
    summary:
      "In 1368 Zhu Yuanzhang, a former monk and Red Turban rebel leader, proclaimed the Ming dynasty at Nanjing, and his general Xu Da marched north on Dadu. The last Yuan emperor, Toghon Temür, fled to the steppe before the city fell, ending Mongol rule in China.",
    context:
      "Yuan rule had been weakened by succession struggles, a collapsing paper currency, famine and the great Yellow River floods of the 1340s. When forced labour on the river's dikes in 1351 helped ignite the Red Turban rebellions, the court lost control of the south whose grain fed the capital.",
    whyHere:
      "Dadu depended on grain shipped from the Yangtze delta along the Grand Canal and the coast, and rebels and pirates in the south cut that lifeline. With the capital going hungry, the Mongol court did what steppe rulers had done before and retreated north to the grassland, where the Northern Yuan survived.",
    keyFigures: ["Hongwu Emperor", "Xu Da", "Toghon Temür"],
    schematic: {
      kind: "causal",
      steps: [
        "Yellow River floods and famine",
        "Dike labour sparks Red Turban revolts",
        "Rebels cut the southern grain supply",
        "Xu Da marches on Dadu",
        "Yuan court retreats to the steppe",
      ],
    },
  },
];
