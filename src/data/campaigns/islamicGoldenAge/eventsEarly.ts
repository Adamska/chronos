import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "iga-abbasid-revolution",
    title: "The Abbasid Revolution Triumphs",
    year: 750,
    place: "Great Zab River, northern Mesopotamia",
    coordinates: [43.5, 36.1],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Abbasid_revolution",
    summary:
      "Armies raised in Khurasan routed the last Umayyad caliph, Marwan II, on the Great Zab in January 750, ending Umayyad rule from Damascus and bringing the Abbasid family to power.",
    context:
      "The revolt, proclaimed openly at Merv in 747 under the black banners of Abu Muslim, drew on the grievances of Persian converts and on the Abbasids' descent from the Prophet's uncle al-Abbas. Victory moved the caliphate's centre of gravity from Syria to Iraq and Iran, much closer to Persian and Indian traditions of learning.",
    whyHere:
      "Marwan marched east from his base at Harran to meet the Khurasani forces descending from the Iranian plateau, and the two met at the Great Zab, the largest left-bank tributary of the Tigris. His attempt to bridge the river in the face of the enemy ended in rout.",
    keyFigures: ["Abu al-Abbas al-Saffah", "Abu Muslim", "Abdallah ibn Ali", "Marwan II"],
    schematic: {
      kind: "causal",
      steps: ["Khurasan rises", "Umayyads routed on the Zab", "Power shifts to Iraq", "Persian elites join court"],
    },
  },
  {
    id: "iga-founding-of-baghdad",
    title: "Al-Mansur Founds Baghdad",
    year: 762,
    endYear: 766,
    place: "Baghdad, on the Tigris",
    coordinates: [44.37, 33.34],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Round_City_of_Baghdad",
    summary:
      "Caliph al-Mansur laid out his new capital, Madinat al-Salam, as a circular walled city on the west bank of the Tigris, on a day reportedly chosen by the court astrologers Nawbakht and Masha'allah.",
    context:
      "The Abbasids wanted a capital away from the restive garrison towns of Kufa and Basra and far from Umayyad Syria. Within decades Baghdad was among the largest cities in the world, its markets and court drawing merchants, physicians and scholars from Iran, India and the Byzantine frontier.",
    whyHere:
      "At Baghdad the Tigris and Euphrates run closest together, and canals such as the Nahr Isa linked the two rivers, so grain and goods from Syria, the Jazira and the Gulf could all arrive by water. The site also commanded the Khurasan Road, the great highway east across the Zagros to Iran and Central Asia.",
    keyFigures: ["Al-Mansur", "Nawbakht", "Masha'allah ibn Athari"],
    primarySource: {
      excerpt:
        "This is the Tigris; there is no obstacle between us and China; everything on the sea can come to us on it.",
      attribution: "Caliph al-Mansur, as reported by al-Tabari, History of the Prophets and Kings (early 10th century)",
    },
  },
  {
    id: "iga-baghdad-paper-mill",
    title: "Paper Mill in Baghdad",
    year: 794,
    place: "Baghdad",
    coordinates: [44.42, 33.31],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "History_of_paper",
    summary:
      "Tradition dates Baghdad's first paper mill to around 794, under Harun al-Rashid and his Barmakid viziers, and paper soon displaced papyrus and parchment in the caliphal chancery.",
    context:
      "Papermaking, a Chinese invention, was established in Samarkand by the mid-eighth century; later Arabic tradition credited Chinese prisoners taken at the Battle of Talas in 751, a story historians treat with caution. Cheap, durable paper underpinned the Abbasid bureaucracy, a thriving trade in copyists and booksellers, and the sheer volume of translation and scholarship that followed.",
    whyHere:
      "Baghdad combined the linen rags, flax and canal water that papermaking needs with the largest market for writing in the world: a vast chancery, law courts and teaching circles. Unlike papyrus, paper could be made wherever there was water and fibre, freeing the imperial heartland from dependence on the Nile.",
    keyFigures: ["Harun al-Rashid", "Yahya ibn Khalid"],
    schematic: {
      kind: "causal",
      steps: ["Paper reaches Samarkand", "Mill founded in Baghdad", "Chancery adopts paper", "Book trade booms"],
    },
  },
  {
    id: "iga-al-khwarizmi",
    title: "Al-Khwarizmi Writes on Algebra",
    year: 820,
    place: "Baghdad",
    coordinates: [44.4, 33.36],
    layer: "science",
    significance: 5,
    wikipediaSlug: "Al-Khwarizmi",
    summary:
      "Muhammad ibn Musa al-Khwarizmi wrote The Compendious Book on Calculation by Completion and Balancing, whose systematic solution of equations gave algebra its name, and a treatise on calculating with Hindu numerals.",
    context:
      "Al-Khwarizmi worked under the patronage of al-Ma'mun and drew on Indian astronomical tables as well as Greek and Babylonian traditions. Twelfth-century Latin versions of his arithmetic introduced decimal place-value numerals to Europe, and his name survives in the word algorithm.",
    whyHere:
      "Baghdad's court gathered mathematicians from Khwarazm, Iran, Iraq and Syria, and Indian astronomical works had reached the city in the 770s. A capital administering land tax, inheritance law and long-distance trade created constant demand for practical calculation.",
    keyFigures: ["Al-Khwarizmi", "Al-Ma'mun"],
    primarySource: {
      excerpt:
        "what is easiest and most useful in arithmetic, such as men constantly require in cases of inheritance, legacies, partition, law-suits, and trade, and in all their dealings with one another",
      attribution:
        "Al-Khwarizmi, The Compendious Book on Calculation by Completion and Balancing (c. 820), trans. F. Rosen (1831)",
    },
  },
  {
    id: "iga-house-of-wisdom",
    title: "The House of Wisdom",
    year: 830,
    place: "Baghdad",
    coordinates: [44.38, 33.35],
    layer: "science",
    significance: 5,
    wikipediaSlug: "House_of_Wisdom",
    summary:
      "Under Caliph al-Ma'mun (813–833) the palace library known as the House of Wisdom became a hub of the translation movement, which rendered Greek, Syriac, Persian and Sanskrit works into Arabic.",
    context:
      "The translation movement began under al-Mansur and lasted two centuries, funded by caliphs, courtiers and wealthy patrons such as the Banu Musa brothers. Aristotle, Galen, Euclid and Ptolemy became the foundations of Arabic philosophy, medicine, geometry and astronomy, though historians still debate how formal an institution the House of Wisdom was.",
    whyHere:
      "Baghdad sat between the Syriac-speaking Christian scholars of Iraq and the Jazira, the Persian medical tradition of Gondishapur a few days to the southeast, and Indian learning arriving through Sindh and the Gulf. Caliphs could also send envoys across the Taurus frontier to acquire Greek manuscripts in Byzantine lands.",
    keyFigures: ["Al-Ma'mun", "Al-Kindi", "Muhammad ibn Musa ibn Shakir"],
    primarySource: {
      excerpt:
        "We ought not to be ashamed of appreciating the truth and of acquiring it wherever it comes from, even if it comes from races distant and nations different from us.",
      attribution: "Al-Kindi, On First Philosophy (9th century)",
    },
    schematic: {
      kind: "causal",
      steps: ["Caliphs fund translation", "Greek texts enter Arabic", "Scholars extend them", "Arabic leads science"],
    },
  },
  {
    id: "iga-hunayn-ibn-ishaq",
    title: "Hunayn ibn Ishaq Translates Galen",
    year: 850,
    place: "Baghdad",
    coordinates: [44.41, 33.33],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Hunayn_ibn_Ishaq",
    summary:
      "Hunayn ibn Ishaq, a Nestorian Christian physician from al-Hira, led a workshop that translated most of Galen's medical works, along with Hippocratic and philosophical texts, into Syriac and Arabic.",
    context:
      "Hunayn collated several Greek manuscripts before translating, and in a famous letter he listed the Galen works he and his circle had rendered. He served as physician to Caliph al-Mutawakkil and wrote his own influential treatise on the eye.",
    whyHere:
      "Hunayn's Christian community at al-Hira, near Kufa, was already bilingual in Arabic and Syriac, the bridge language between Greek and Arabic scholarship. Baghdad's wealthy patrons, including the Banu Musa, paid handsomely for accurate translations.",
    keyFigures: ["Hunayn ibn Ishaq", "Ishaq ibn Hunayn", "Al-Mutawakkil"],
  },
  {
    id: "iga-siraf-china-route",
    title: "Siraf and the Sea Route to China",
    year: 851,
    place: "Siraf, Persian Gulf",
    coordinates: [52.34, 27.67],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Bandar_Siraf",
    summary:
      "By the mid-ninth century ships sailed from Siraf to Guangzhou in China, a voyage described in the Accounts of China and India compiled in 851.",
    context:
      "The Abbasid economy was tied by sea to India, Southeast Asia and Tang China; the Belitung shipwreck, an Arab-style sewn ship found off Indonesia, carried tens of thousands of Chinese ceramics in the ninth century. Muslim merchants lived in Guangzhou in large numbers until the massacres of Huang Chao's rebellion in 878–879.",
    whyHere:
      "Cargo from Basra was carried down to Siraf, a deep-water anchorage on the Iranian shore, to avoid the shallow approaches at the head of the Gulf. From there ships rode the alternating monsoon winds to Kollam in India and on through the Strait of Malacca to the South China Sea.",
    keyFigures: ["Sulayman al-Tajir", "Abu Zayd al-Sirafi"],
    schematic: {
      kind: "exchange",
      westLabel: "Persian Gulf",
      eastLabel: "Tang China",
      eastbound: ["frankincense", "ivory", "glassware", "dates"],
      westbound: ["silk", "porcelain", "Changsha bowls", "camphor"],
    },
  },
  {
    id: "iga-al-battani-raqqa",
    title: "Al-Battani Observes the Sky at Raqqa",
    year: 877,
    endYear: 918,
    place: "Raqqa, on the Euphrates",
    coordinates: [39.01, 35.95],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Al-Battani",
    summary:
      "For four decades al-Battani made observations at Raqqa that refined the length of the solar year, the obliquity of the ecliptic and the rate of precession of the equinoxes.",
    context:
      "His astronomical handbook, the Kitab al-Zij, corrected Ptolemy with fresh observations and used sines rather than Greek chords. Translated into Latin by Plato of Tivoli in the twelfth century, it was cited repeatedly by Copernicus.",
    whyHere:
      "Raqqa stands where the Balikh joins the Euphrates, on the road from Harran, al-Battani's family home and the centre of the star-venerating Sabian community with its long astronomical tradition. Clear, dry skies over the Jazira steppe favoured years of systematic observation.",
    keyFigures: ["Al-Battani"],
  },
  {
    id: "iga-al-razi",
    title: "Al-Razi Directs the Hospital",
    year: 900,
    place: "Rayy, near modern Tehran",
    coordinates: [51.43, 35.59],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Abu_Bakr_al-Razi",
    summary:
      "Abu Bakr al-Razi, who directed hospitals in Rayy and Baghdad, compiled the vast clinical notebook al-Hawi and wrote a pioneering treatise distinguishing smallpox from measles.",
    context:
      "A sceptic of authority, al-Razi wrote Doubts about Galen, setting his own clinical observations against the master's claims. His handbook for the governor al-Mansur ibn Ishaq, translated in Toledo as the Liber ad Almansorem, became a standard text in European medical schools.",
    whyHere:
      "Rayy lay at the southern foot of the Alborz on the Khurasan Road, the highway linking Baghdad with Nishapur and Central Asia. That position made it one of the great cities of the Iranian plateau, with the wealth and traffic to sustain a teaching hospital.",
    keyFigures: ["Abu Bakr al-Razi"],
  },
  {
    id: "iga-caliphate-of-cordoba",
    title: "Caliphate of Córdoba Proclaimed",
    year: 929,
    place: "Córdoba, al-Andalus",
    coordinates: [-4.78, 37.88],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Umayyad_state_of_Córdoba",
    summary:
      "Abd al-Rahman III proclaimed himself caliph in 929, and Córdoba under him and his son al-Hakam II became one of the largest and most cultured cities in Europe.",
    context:
      "The Umayyad dynasty, refounded in Iberia by Abd al-Rahman I after he escaped the Abbasid purge of 750, now rivalled both Baghdad and the Fatimids. Byzantine envoys presented the caliph with a Greek manuscript of Dioscorides' herbal, which Hasdai ibn Shaprut helped render into Arabic, and al-Hakam II assembled a celebrated library.",
    whyHere:
      "Córdoba lies where the Roman bridge carried the main road across the Guadalquivir, between the Sierra Morena and the fertile Campiña. Irrigated farming in the valley, with crops introduced from the east, fed a great city and a court rich enough to buy books from across the Islamic world.",
    keyFigures: ["Abd al-Rahman III", "Al-Hakam II", "Hasdai ibn Shaprut"],
  },
];
