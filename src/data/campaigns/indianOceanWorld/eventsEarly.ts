import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "io-hippalus",
    title: "Hippalus and the Open-Sea Crossing",
    year: -100,
    place: "Eudaemon Arabia (Aden), mouth of the Red Sea",
    coordinates: [45.03, 12.79],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Hippalus",
    summary:
      "Greek sources credit a pilot named Hippalus with learning to sail straight across the Arabian Sea on the southwest monsoon instead of hugging the coasts of Arabia and Persia. The Periplus even says the southwest wind was named after him.",
    context:
      "His date is debated: some scholars place him around the voyages of Eudoxus of Cyzicus in the late second century BCE, others in the first century CE, and some think 'Hippalus' was first the name of the wind. Arab and Indian sailors had certainly used the monsoon long before any Greek wrote it down.",
    whyHere:
      "The Indian Ocean's winds reverse with the seasons: from about June to September the southwest monsoon blows steadily toward India, and from November to March the northeast monsoon blows back. A ship leaving the Gulf of Aden in midsummer could run before the wind to Malabar in weeks and come home the following winter.",
    keyFigures: ["Hippalus", "Eudoxus of Cyzicus"],
    primarySource: {
      excerpt:
        "Hippalus was the pilot who by observing the location of the ports and the conditions of the sea, first discovered how to lay his course straight across the ocean.",
      attribution: "Periplus of the Erythraean Sea, §57 (c. 50 CE), trans. Wilfred H. Schoff (1912)",
    },
    schematic: {
      kind: "causal",
      steps: ["Winds reverse by season", "Pilots cross open sea", "Summer wind blows east", "Winter wind blows home"],
    },
  },
  {
    id: "io-berenike",
    title: "Roman Egypt Turns to the Indian Ocean",
    year: -25,
    place: "Berenike and Myos Hormos, Red Sea coast of Egypt",
    coordinates: [35.48, 23.91],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Berenice_Troglodytica",
    summary:
      "After Augustus annexed Egypt in 30 BCE, traffic from the Red Sea ports of Myos Hormos and Berenike to India grew rapidly. Excavations at Berenike have found Indian teak, black pepper, Tamil-Brahmi inscriptions and Indian cooking ware.",
    context:
      "The Ptolemies had founded Berenike around 275 BCE mainly to import African war elephants. Under Rome the port became the main gateway for pepper, textiles and gems, and the empire taxed imports at a quarter of their value.",
    whyHere:
      "Strong northerly winds blow down the northern Red Sea for most of the year, so ships avoided beating up to Suez and unloaded far to the south instead. From Berenike, camel caravans crossed about 380 kilometres of desert to Coptos on the Nile, a journey Pliny put at twelve days.",
    keyFigures: ["Augustus", "Strabo", "Aelius Gallus"],
    primarySource: {
      excerpt:
        "I learned that as many as one hundred and twenty vessels were sailing from Myos Hormos to India, whereas formerly, under the Ptolemies, only a very few ventured to undertake the voyage",
      attribution: "Strabo, Geography 2.5.12 (early 1st century CE), trans. H. L. Jones (1917)",
    },
  },
  {
    id: "io-periplus",
    title: "The Periplus of the Erythraean Sea",
    year: 50,
    place: "Barygaza (Bharuch), Gulf of Khambhat",
    coordinates: [72.98, 21.7],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Periplus_of_the_Erythraean_Sea",
    summary:
      "An anonymous Greek-speaking merchant from Egypt wrote a practical guide to the ports from the Red Sea to East Africa, Arabia and India, listing what each market bought and sold and when to sail. It describes Barygaza, Muziris, Poduke on the Coromandel Coast and even a land called Thina beyond the Ganges.",
    context:
      "The text is usually dated between about 40 and 70 CE. It names rulers such as Zoscales on the African coast and Charibael in southern Arabia, and records that Barygaza imported wine, copper, tin, coral and Roman coin in exchange for cotton cloth, gems, ivory and spices.",
    whyHere:
      "Barygaza lay up the Narmada estuary at the head of the Gulf of Khambhat, the outlet for the cotton and gems of western India. The gulf has some of the largest tides in Asia, and local pilots had to meet incoming ships and tow them upriver through the surging bore.",
    keyFigures: ["Zoscales", "Charibael"],
    primarySource: {
      excerpt:
        "For the rush of waters at the incoming tide is irresistible, and the anchors cannot hold against it",
      attribution: "Periplus of the Erythraean Sea, §46 (c. 50 CE), trans. Wilfred H. Schoff (1912)",
    },
  },
  {
    id: "io-muziris",
    title: "The Muziris Papyrus",
    year: 150,
    place: "Muziris (near Pattanam), Malabar Coast",
    coordinates: [76.21, 10.15],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Muziris",
    summary:
      "A mid-second-century papyrus from Egypt records a loan for a voyage to Muziris and the homeward cargo of the ship Hermapollon: Gangetic nard, ivory and textiles valued at nearly seven million drachmas. It shows how much capital a single monsoon voyage could carry.",
    context:
      "Pliny the Elder called Muziris the first emporium of India, and Tamil poems of the Sangam age describe foreign ships arriving with gold and leaving with pepper. Excavations at Pattanam since 2007 have found Roman amphorae and glass at what may be the ancient port.",
    whyHere:
      "Muziris stood near the mouth of the Periyar, a short haul from the hills that grew most of the world's black pepper. Ships left Egypt in midsummer, rode the southwest monsoon across the Arabian Sea and sailed home in December or January on the northeast monsoon.",
    keyFigures: ["Pliny the Elder"],
    schematic: {
      kind: "exchange",
      westLabel: "Roman Egypt",
      eastLabel: "Malabar Coast",
      eastbound: ["gold coin", "wine", "glass", "coral", "copper"],
      westbound: ["pepper", "malabathrum", "ivory", "pearls", "Gangetic nard"],
    },
  },
  {
    id: "io-oc-eo",
    title: "Funan and the Port of Oc Eo",
    year: 250,
    place: "Oc Eo, western Mekong Delta",
    coordinates: [105.14, 10.25],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Óc_Eo",
    summary:
      "In the mid-third century the envoys Kang Tai and Zhu Ying of the Chinese state of Wu visited Funan, whose main port was Oc Eo. Excavations there have yielded Indian seals, Chinese bronze mirrors and Roman gold, including a medallion of Antoninus Pius dated 152.",
    context:
      "Funan was the first great trading state of mainland Southeast Asia, and Chinese records say its ruler Fan Shiman built a fleet and subdued his neighbours. Its rulers adopted Indian royal titles, Sanskrit and Hindu and Buddhist cults.",
    whyHere:
      "Goods from India were often carried across the narrow Kra Isthmus and shipped on across the Gulf of Thailand, where Oc Eo was the natural landfall. Canals linked it to the Mekong, whose rice fed crews waiting for the monsoon to turn toward China. Once ships began sailing straight through the Strait of Malacca, Funan lost that advantage.",
    keyFigures: ["Kang Tai", "Zhu Ying", "Fan Shiman", "Louis Malleret"],
  },
  {
    id: "io-aksum",
    title: "Ezana of Aksum Adopts Christianity",
    year: 330,
    place: "Aksum, Tigray highlands",
    coordinates: [38.72, 14.13],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Ezana_of_Axum",
    summary:
      "King Ezana of Aksum converted to Christianity around the 330s under the influence of Frumentius, a Syrian from Tyre who had been captured as a boy when his ship stopped at a Red Sea port on the way to India. Ezana's later coins carry the cross, among the earliest anywhere to do so.",
    context:
      "Aksum minted its own gold coins, traded ivory with Rome and India, and later controlled parts of southern Arabia. Frumentius was consecrated bishop by Athanasius of Alexandria, tying the Ethiopian church to Egypt for sixteen centuries.",
    whyHere:
      "Aksum sits on a plateau above 2,000 metres, where summer rains support farming, about eight days' march from Adulis on the Gulf of Zula. Ships bound for India called at Adulis, so ideas reached Aksum by sea as easily as ivory left it.",
    keyFigures: ["Ezana of Axum", "Frumentius", "Athanasius of Alexandria"],
  },
  {
    id: "io-srivijaya",
    title: "Srivijaya Commands the Straits",
    year: 682,
    place: "Palembang, on the Musi River, Sumatra",
    coordinates: [104.76, -2.98],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Srivijaya",
    summary:
      "The Kedukan Bukit inscription of 682 records a sacred expedition by the ruler Dapunta Hyang with an army of twenty thousand. Within a few years Srivijaya had absorbed the rival port of Malayu in Jambi and reached Bangka, commanding the approaches to the Strait of Malacca and the Sunda Strait.",
    context:
      "The Chinese monk Yijing stopped at Srivijaya in 671 on his way to India and later spent years there copying and translating Buddhist texts. Srivijaya sent tribute to China and kept the straits open and policed, drawing shipping to its harbours.",
    whyHere:
      "Ships from China arrived on the northeast monsoon and ships from India on the southwest, and neither could go on until the wind changed. Palembang, safely upriver yet close to both the Strait of Malacca and the Sunda Strait, became the place where they waited.",
    keyFigures: ["Dapunta Hyang Sri Jayanasa", "Yijing"],
    primarySource: {
      excerpt:
        "In the fortified city of Bhoga Buddhist priests number more than 1,000, whose minds are bent on learning and good practices.",
      attribution: "Yijing, A Record of the Buddhist Religion (692), trans. J. Takakusu (1896)",
    },
  },
  {
    id: "io-belitung",
    title: "The Belitung Shipwreck",
    year: 830,
    place: "Off Belitung Island, Java Sea",
    coordinates: [107.62, -2.55],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Belitung_shipwreck",
    summary:
      "A sewn-plank ship of western Indian Ocean design sank off Belitung around 830 carrying some 60,000 pieces of Tang ceramics, mostly Changsha bowls, along with gold and silver vessels. One bowl bears a date equivalent to 826.",
    context:
      "Found by fishermen in 1998, the wreck is the clearest physical proof of direct voyages between Abbasid ports and Tang China. Many bowls carry Buddhist and Islamic motifs aimed at buyers in the Gulf.",
    whyHere:
      "Belitung lies between Bangka and Borneo, on the passage from the South China Sea into the Java Sea, ringed by reefs. A hull stitched with coconut-fibre cord could flex on such reefs, but it could not survive striking one with a full cargo.",
    keyFigures: ["Tilman Walterfang", "Michael Flecker"],
    schematic: {
      kind: "exchange",
      westLabel: "Abbasid Gulf",
      eastLabel: "Tang China",
      eastbound: ["frankincense", "pearls", "glassware", "ivory"],
      westbound: ["Changsha bowls", "celadon", "gold cups", "star anise"],
    },
  },
  {
    id: "io-siraf",
    title: "Siraf and the Accounts of China and India",
    year: 851,
    endYear: 916,
    place: "Siraf, Persian Gulf coast",
    coordinates: [52.34, 27.67],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Bandar_Siraf",
    summary:
      "A collection of merchants' reports compiled in 851 described the sea route from Siraf to Guangzhou, by way of Muscat, Quilon and Kalah on the Malay Peninsula. Around 916 Abu Zayd of Siraf added that the massacre of foreign merchants at Guangzhou in 878–879 had cut the direct voyages short.",
    context:
      "Siraf grew rich as the Gulf's main outlet for Abbasid Iraq, and its merchants built houses several storeys high of imported timber. After a great earthquake in 977 and the shift of trade to Kish and Hormuz, the city declined.",
    whyHere:
      "Siraf had almost no water or farmland, but deep anchorage close inshore let large ships load there instead of entering the shallow head of the Gulf at Basra. A voyage to China and back took a year and a half or more, because every leg had to wait for its monsoon.",
    keyFigures: ["Abu Zayd al-Sirafi", "Sulaiman al-Tajir", "Huang Chao"],
  },
  {
    id: "io-chola-raid",
    title: "The Chola Raid on Srivijaya",
    year: 1025,
    place: "Kadaram (Kedah), Malay Peninsula",
    coordinates: [100.41, 5.74],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Chola_invasion_of_Srivijaya",
    summary:
      "Rajendra I's fleet crossed the Bay of Bengal and sacked Kadaram and other Srivijayan ports, capturing the king Sangrama Vijayatunggavarman. A Tamil inscription at Thanjavur lists more than a dozen places taken, from the Nicobars to Sumatra.",
    context:
      "The raid's motive is debated, but it probably aimed to break Srivijaya's grip on the lucrative China trade. Relations had been friendly: a Srivijayan king had endowed a Buddhist monastery at Nagapattinam about two decades earlier.",
    whyHere:
      "Kedah was the first landfall for ships crossing the Bay of Bengal from India, guided by the 1,200-metre peak of Gunung Jerai. Taking it put the western mouth of the Strait of Malacca within Chola reach.",
    keyFigures: ["Rajendra I", "Sangrama Vijayatunggavarman"],
    schematic: {
      kind: "causal",
      steps: ["Song trade booms", "Srivijaya taxes the straits", "Chola fleet sails east", "Kadaram sacked"],
    },
  },
];
