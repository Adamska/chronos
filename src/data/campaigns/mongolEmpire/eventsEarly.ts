import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "mongol-onon-kurultai",
    title: "Temüjin Proclaimed Genghis Khan",
    year: 1206,
    place: "Headwaters of the Onon River, Khentii Mountains",
    coordinates: [109.2, 48.8],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Genghis_Khan",
    summary:
      "At a great assembly, or kurultai, near the source of the Onon River in 1206, the tribes of the eastern steppe acclaimed Temüjin as Genghis Khan. He reorganised his followers into units of tens, hundreds and thousands under commanders loyal to him rather than to their clans.",
    context:
      "Temüjin had spent two decades defeating the Tatars, Keraites and Naimans and his former sworn brother Jamukha. A personal guard, a chief judge and records kept in the Uyghur script gave the new state institutions that no earlier confederation of the Mongolian plateau had possessed.",
    whyHere:
      "The Onon rises in the Khentii Mountains, where forest meets open grassland, and this upland was Temüjin's home ground. From here the steppe runs almost unbroken west to Hungary and east to Manchuria, so a united army of mounted archers could strike in any direction while its herds grazed along the way.",
    keyFigures: ["Genghis Khan", "Muqali", "Bo'orchu", "Shigi Qutuqu"],
    schematic: {
      kind: "causal",
      steps: [
        "Temüjin defeats rival steppe tribes",
        "Kurultai proclaims Genghis Khan",
        "Decimal units replace clan loyalties",
        "United army turns on settled states",
      ],
    },
  },
  {
    id: "mongol-western-xia",
    title: "Siege of the Western Xia Capital",
    year: 1209,
    endYear: 1227,
    place: "Zhongxing (Yinchuan), Western Xia",
    coordinates: [106.27, 38.47],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Mongol_conquest_of_Western_Xia",
    summary:
      "In his first major invasion of a settled state, Genghis Khan besieged the Tangut capital in 1209, and an attempt to flood the city by diverting the river swamped the Mongol camp instead. Emperor Xiangzong submitted in 1210; when the Tanguts later broke away, a second campaign destroyed the kingdom in 1227, the year Genghis died.",
    context:
      "Western Xia held the Hexi Corridor and the great bend of the Yellow River, on the flank of the far richer Jin dynasty. As a vassal it supplied tribute and troops for the war on the Jin, and the failed siege taught the Mongols that they needed engineers to take walled cities.",
    whyHere:
      "Zhongxing lay on the irrigated plain where the Yellow River runs north between the Helan Mountains and the Ordos desert. Its walls and canals were the first serious obstacle for a cavalry army that had never yet stormed a fortified city.",
    keyFigures: ["Genghis Khan", "Emperor Xiangzong of Western Xia"],
  },
  {
    id: "mongol-zhongdu",
    title: "Fall of Zhongdu",
    year: 1215,
    place: "Zhongdu (Beijing), capital of the Jin dynasty",
    coordinates: [116.35, 39.87],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Sieges_of_Zhongdu",
    summary:
      "After breaking the Jin field armies beyond the passes from 1211, the Mongols blockaded the Jin capital, Zhongdu. The Jin court withdrew south to Kaifeng in 1214, and the starving city surrendered in June 1215 and was sacked.",
    context:
      "The Jurchen Jin dynasty ruled northern China with far larger armies and many walled cities. Among the officials who entered Mongol service afterwards was the Khitan scholar Yelü Chucai, who later persuaded Ögedei to tax the farmers of northern China rather than turn their fields into pasture.",
    whyHere:
      "Zhongdu sat at the northern tip of the North China Plain, only a few days' ride from the steppe through the Juyong Pass in the Yan Mountains. Once the Mongols forced the passes, the flat plain left the capital exposed and cut off from the grain of the south.",
    keyFigures: ["Genghis Khan", "Muqali", "Emperor Xuanzong of Jin", "Yelü Chucai"],
  },
  {
    id: "mongol-otrar",
    title: "The Siege of Otrar",
    year: 1219,
    endYear: 1220,
    place: "Otrar, on the middle Syr Darya",
    coordinates: [68.3, 42.85],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Otrar_Catastrophe",
    summary:
      "In 1218 Inalchuq, the Khwarazmian governor of Otrar, seized a Mongol trade caravan and killed its merchants, and Shah Muhammad II then had one of Genghis Khan's envoys put to death. Genghis invaded in 1219; Otrar held out until February 1220, and Inalchuq was captured and executed.",
    context:
      "Genghis had sought trade with the Khwarazmian Empire, which in a few years had grown to rule from the Syr Darya to western Iran. The Shah spread his larger army among his cities, expecting nomads to fail against walls, but the Mongols, now with engineers recruited in northern China, took them one by one.",
    whyHere:
      "Otrar stood where the Arys River joins the Syr Darya, the first great oasis city a caravan reached after crossing the steppe from the east. As Khwarazm's frontier post on the road to Mongolia, it was both the gate of the trade and the first target of the war.",
    keyFigures: ["Genghis Khan", "Inalchuq", "Muhammad II of Khwarazm", "Chagatai Khan"],
    primarySource: {
      excerpt: "O would that my mother had not born me or that I had died and become a forgotten thing ere this befell!",
      attribution: "Ibn al-Athir, The Complete History, on the Tatars, trans. E. G. Browne",
    },
  },
  {
    id: "mongol-khwarazm",
    title: "Conquest of Khwarazm",
    year: 1220,
    endYear: 1221,
    place: "Bukhara, in the Zeravshan valley",
    coordinates: [64.42, 39.77],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Mongol_invasion_of_the_Khwarazmian_Empire",
    summary:
      "In February 1220 Genghis Khan led a column across the Kyzylkum desert to Bukhara, which surrendered within days; Samarkand fell in March and the Khwarazmian capital, Urgench, in 1221. Shah Muhammad II died a fugitive on a Caspian island, and his son Jalal al-Din was defeated on the Indus.",
    context:
      "The campaign killed a large share of the people of Transoxiana and Khorasan, and Merv and Nishapur were destroyed in 1221. Skilled artisans were spared and sent east, beginning the movement of craftsmen and experts that would bind the empire together.",
    whyHere:
      "Bukhara and Samarkand are oases on the Zeravshan River, shielded from the Syr Darya frontier by the Kyzylkum desert, which the Shah had counted on as a barrier. By crossing it, Genghis reached the rich heartland behind the Shah's garrisons and cut his cities off from one another.",
    keyFigures: ["Genghis Khan", "Muhammad II of Khwarazm", "Jalal al-Din Mangburni", "Tolui"],
    primarySource: {
      excerpt: "They came, they sapped, they burnt, they slew, they plundered and they departed.",
      attribution: "A survivor of Bukhara, quoted by Ata-Malik Juvaini, History of the World-Conqueror (c. 1260), trans. J. A. Boyle",
    },
  },
  {
    id: "mongol-kalka",
    title: "Battle of the Kalka River",
    year: 1223,
    place: "Kalka River, north of the Sea of Azov",
    coordinates: [37.55, 47.25],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Battle_of_the_Kalka_River",
    summary:
      "On 31 May 1223 a Mongol force under Jebe and Subutai turned on the Rus' princes and Cumans who had pursued it for days across the steppe and routed them on the Kalka. Captured princes, among them Mstislav III of Kyiv, were crushed beneath a wooden platform on which the victors feasted.",
    context:
      "The battle capped a ride of thousands of kilometres around the Caspian that took Jebe and Subutai through Iran, Georgia and over the Caucasus. The Rus' treated it as a raid by strangers, and the Mongols rode back east; fourteen years later Subutai returned with Batu.",
    whyHere:
      "From Iran, the easy way north around the Caspian was the narrow coastal strip at Derbent, between the Caucasus and the sea. Beyond it lay the Pontic steppe, the western reach of the grassland highway, where the Mongols could feign retreat and draw a pursuing army out across open plain.",
    keyFigures: ["Subutai", "Jebe", "Mstislav Mstislavich", "Mstislav III of Kyiv"],
    primarySource: {
      excerpt:
        "The same year, for our sins, unknown tribes came, whom no one exactly knows, who they are, nor whence they came out, nor what their language is, nor of what race they are, nor what their faith is.",
      attribution: "The Chronicle of Novgorod, entry for 1224, trans. Robert Michell and Nevill Forbes (1914)",
    },
  },
  {
    id: "mongol-karakorum",
    title: "Karakorum Becomes the Capital",
    year: 1235,
    place: "Karakorum, Orkhon valley",
    coordinates: [102.83, 47.2],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Karakorum",
    summary:
      "In 1235 Genghis Khan's son and successor Ögedei walled Karakorum on the Orkhon and built a palace there, turning a camp into the capital of the empire. William of Rubruck, who visited in 1254, found a Muslim quarter of markets, a Chinese quarter of craftsmen, temples, mosques and a church, and a silver fountain made by a captured Parisian goldsmith.",
    context:
      "Ögedei had been elected Great Khan in 1229, and under him the Jin dynasty fell in 1234 and the great western campaign began. A fixed capital signalled that the conquerors meant to govern, and it drew envoys, merchants and captives from across Eurasia.",
    whyHere:
      "The Orkhon valley, with well-watered pastures sheltered by the Khangai Mountains, had been the seat of earlier steppe empires such as the Göktürks and Uyghurs. But the grassland could not feed a city, so Karakorum lived on grain and goods carted in from northern China.",
    keyFigures: ["Ögedei Khan", "William of Rubruck", "Guillaume Boucher"],
  },
  {
    id: "mongol-yam",
    title: "The Yam Relay Network",
    year: 1235,
    place: "Relay stations of the Mongolian steppe",
    coordinates: [99.0, 46.8],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Yam_(route)",
    summary:
      "Ögedei expanded his father's courier arrangements into an empire-wide chain of relay stations, each supplied by nearby households with horses, fodder and food. Messengers carrying a paiza, a metal tablet of authority, changed mounts at each post and could cover 200 to 300 kilometres in a day.",
    context:
      "The yam carried orders, intelligence, envoys and tribute, and merchants and missionaries travelled under its protection. The later khanates kept it running, and the word survives in Russian, where the post-horse system the Golden Horde left behind lasted for centuries.",
    whyHere:
      "On the open steppe, grass and water rather than roads set the limits of travel, so stations were placed wherever pasture and wells allowed. Fresh horses at every stage turned the sheer width of the grassland from a barrier into the empire's greatest advantage.",
    keyFigures: ["Ögedei Khan", "Marco Polo"],
    primarySource: {
      excerpt:
        "The messengers of the Emperor in travelling from Cambaluc, be the road whichsoever they will, find at every twenty-five miles of the journey a station which they call Yamb, or, as we should say, the 'Horse-Post-House.'",
      attribution: "Marco Polo, The Travels (c. 1298), Book II, trans. Henry Yule",
    },
  },
  {
    id: "mongol-kyiv",
    title: "Sack of Kyiv",
    year: 1240,
    place: "Kyiv, on the Dnieper",
    coordinates: [30.52, 50.45],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Siege_of_Kiev_(1240)",
    summary:
      "After sacking Ryazan and Vladimir in the winter of 1237 to 1238 and spending two years subduing the Cumans and the southern principalities, Batu's armies stormed Kyiv between 28 November and 6 December 1240. The city, once the greatest in Rus', was left largely in ruins.",
    context:
      "The western campaign, approved at a kurultai in 1235 and directed by Subutai, was led by Batu with princes from every branch of Genghis Khan's family. The rival Rus' princes never combined against it, and most of their principalities became tributaries of the Golden Horde for more than two centuries.",
    whyHere:
      "The Mongols struck the forest principalities in winter, when frozen rivers became highways through woods and marshes that cavalry could not otherwise cross. Kyiv stood on bluffs above the Dnieper at the edge of the forest-steppe, exposed to an army based on the open grassland to the south.",
    keyFigures: ["Batu Khan", "Subutai", "Möngke Khan"],
  },
  {
    id: "mongol-mohi",
    title: "Battle of Mohi and the Turn Back",
    year: 1241,
    endYear: 1242,
    place: "Mohi, on the Sajó River, Hungary",
    coordinates: [20.98, 47.98],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Mohi",
    summary:
      "On 11 April 1241 Batu and Subutai destroyed the army of King Béla IV of Hungary at Mohi on the Sajó, two days after a northern column had defeated Duke Henry II of Silesia at Legnica. The Mongols held the Hungarian plain for a year, then withdrew east in 1242.",
    context:
      "News that Ögedei had died in December 1241 is often given as the reason for the retreat, though Batu did not hurry home to the election. Historians also point to heavy Mongol losses, the stone castles that held out, and the limits of the land itself.",
    whyHere:
      "The Great Hungarian Plain is the westernmost pocket of steppe in Europe, the natural end of the grassland highway, but it is too small to feed a Mongol army's horse herds for long. Tree-ring evidence suggests an unusually wet spring in 1242 turned much of it to marsh, further cutting pasture and mobility.",
    keyFigures: ["Batu Khan", "Subutai", "Béla IV of Hungary", "Henry II the Pious"],
    schematic: {
      kind: "causal",
      steps: [
        "Mohi destroys Hungary's field army",
        "Castles and walled towns hold out",
        "Wet spring floods the plain",
        "Pasture runs short for the herds",
        "Batu withdraws to the Volga",
      ],
    },
  },
];
