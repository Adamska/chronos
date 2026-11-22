import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "iga-fatimid-cairo",
    title: "Fatimids Found Cairo and al-Azhar",
    year: 969,
    place: "Cairo, Egypt",
    coordinates: [31.26, 30.05],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Fatimid_conquest_of_Egypt",
    summary:
      "The Fatimid general Jawhar conquered Egypt in 969 and founded a new palace city, al-Qahira, beside old Fustat; its congregational mosque, al-Azhar, was completed in 972.",
    context:
      "The Fatimids were Ismaili Shi'i rivals of the Abbasids who had risen in Ifriqiya, and Cairo became their capital in 973 and a second pole of Islamic learning. Caliph al-Hakim added the House of Knowledge, a public library and teaching hall, in 1005.",
    whyHere:
      "Cairo occupies the narrow neck where the Nile valley opens into the delta, beneath the Muqattam hills, controlling traffic between Upper and Lower Egypt. Egypt's grain surplus funded the dynasty, and its position between the Mediterranean and the Red Sea tied Fatimid commerce to both Italy and India.",
    keyFigures: ["Jawhar al-Siqilli", "Al-Mu'izz li-Din Allah"],
  },
  {
    id: "iga-book-of-optics",
    title: "Ibn al-Haytham's Book of Optics",
    year: 1011,
    endYear: 1021,
    place: "Cairo, Egypt",
    coordinates: [31.24, 30.03],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Book_of_Optics",
    summary:
      "Ibn al-Haytham wrote his seven-volume Book of Optics, showing that vision occurs when light from objects enters the eye and testing his claims with controlled experiments.",
    context:
      "Born in Basra, Ibn al-Haytham came to Cairo under Caliph al-Hakim; later biographers say a failed scheme to regulate the Nile left him in years of seclusion, during which he wrote. Translated into Latin around 1200 as De aspectibus, the work shaped the optics of Roger Bacon, Witelo and, eventually, Kepler.",
    whyHere:
      "Fatimid Cairo offered a rich court and libraries independent of Baghdad. The Nile itself drew Ibn al-Haytham there: by the biographers' account, the caliph hoped he could tame the river's annual flood near the first cataract at Aswan.",
    keyFigures: ["Ibn al-Haytham", "Al-Hakim bi-Amr Allah"],
    primarySource: {
      excerpt:
        "The seeker after the truth is not one who studies the writings of the ancients and, following his natural disposition, puts his trust in them",
      attribution: "Ibn al-Haytham, Doubts Concerning Ptolemy (11th century), in English translation",
    },
  },
  {
    id: "iga-canon-of-medicine",
    title: "Ibn Sina's Canon of Medicine",
    year: 1025,
    place: "Hamadan, western Iran",
    coordinates: [48.52, 34.8],
    layer: "science",
    significance: 4,
    wikipediaSlug: "The_Canon_of_Medicine",
    summary:
      "Ibn Sina completed the Canon of Medicine around 1025, a five-book synthesis of Galenic medicine, Aristotelian philosophy and his own clinical experience.",
    context:
      "Ibn Sina served as physician and vizier to rival princes as the Samanid and Buyid world fragmented, writing the Canon while moving between Jurjan, Rayy, Hamadan and Isfahan. Gerard of Cremona's Latin translation, made in twelfth-century Toledo, kept it a core textbook in European universities for centuries.",
    whyHere:
      "Hamadan, ancient Ecbatana, lies at the foot of Mount Alvand where the Khurasan Road climbs from Mesopotamia onto the Iranian plateau. Its Buyid court was one of several on the plateau competing for scholars, a rivalry that gave Ibn Sina patrons, and sometimes enemies, wherever he went.",
    keyFigures: ["Ibn Sina", "Shams al-Dawla"],
  },
  {
    id: "iga-al-biruni-india",
    title: "Al-Biruni Studies India",
    year: 1030,
    place: "Ghazni, Afghanistan",
    coordinates: [68.42, 33.55],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Al-Biruni",
    summary:
      "Al-Biruni, brought to Ghazni after Mahmud's conquest of Khwarazm in 1017, completed around 1030 his great study of Indian astronomy, religion and society, known simply as the India.",
    context:
      "Travelling with Ghaznavid campaigns into the Punjab, al-Biruni learned Sanskrit and estimated the Earth's radius from the dip of the horizon seen from a hilltop fort at Nandana. His India described Indian numerals, calendars and philosophy on their own terms, a landmark of comparative scholarship.",
    whyHere:
      "Ghazni sat on the high road between Kabul and Kandahar, at the head of the passes that descend to the Indus plain. Mahmud's raids through those passes gave al-Biruni access to Indian scholars and texts that earlier writers in Baghdad never saw.",
    keyFigures: ["Al-Biruni", "Mahmud of Ghazni"],
    primarySource: {
      excerpt:
        "The Hindus believe that there is no country but theirs, no nation like theirs, no kings like theirs, no religion like theirs, no science like theirs.",
      attribution: "Al-Biruni, India (c. 1030), trans. Edward C. Sachau (1888)",
    },
  },
  {
    id: "iga-fall-of-toledo",
    title: "Castile Takes Toledo",
    year: 1085,
    place: "Toledo, central Iberia",
    coordinates: [-4.02, 39.86],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Siege_of_Toledo_(1085)",
    summary:
      "Alfonso VI of León and Castile took Toledo from its taifa king al-Qadir in May 1085, the first great city of al-Andalus to pass to the Christian kingdoms.",
    context:
      "After the Caliphate of Córdoba collapsed in 1031, al-Andalus splintered into rival taifa kingdoms that paid tribute to Christian rulers. The shock led the taifas to summon the Almoravids from Morocco, who defeated Alfonso at Sagrajas in 1086, yet Toledo, with its libraries and Arabic-speaking Christians and Jews, stayed Castilian.",
    whyHere:
      "Toledo stands on a granite rock almost encircled by a gorge of the Tagus, the strongest natural fortress in central Iberia and the old Visigothic capital. Commanding the route between the northern meseta and the Guadalquivir valley, it was the first great prize for the advancing kingdoms.",
    keyFigures: ["Alfonso VI of León and Castile", "Al-Qadir of Toledo"],
  },
  {
    id: "iga-crusader-antioch",
    title: "Crusaders Take Antioch",
    year: 1098,
    place: "Antioch, on the Orontes",
    coordinates: [36.16, 36.2],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Principality_of_Antioch",
    summary:
      "The First Crusade captured Antioch in June 1098 after a long siege, and Bohemond of Taranto made it the capital of a principality; Jerusalem fell the following year.",
    context:
      "The Crusader states placed Latin settlers, merchants and clerics in daily contact with Arabic-speaking Christians and Muslims. In 1127 Stephen of Antioch translated al-Majusi's medical encyclopedia, the Royal Book, into Latin in the city, one of several channels through which Arabic science reached the West.",
    whyHere:
      "Antioch commands the lower Orontes valley, where the road from Anatolia through the Syrian Gates descends into Syria, so any army marching overland to Jerusalem had to take it. Its port at St Symeon linked the city to Italian shipping.",
    keyFigures: ["Bohemond of Taranto", "Stephen of Antioch"],
  },
  {
    id: "iga-toledo-translators",
    title: "The Toledo School of Translators",
    year: 1130,
    endYear: 1187,
    place: "Toledo, Castile",
    coordinates: [-4.01, 39.85],
    layer: "science",
    significance: 5,
    wikipediaSlug: "Toledo_School_of_Translators",
    summary:
      "Under Archbishop Raymond and his successors, scholars in Toledo translated Arabic science and philosophy into Latin; Gerard of Cremona alone rendered dozens of works, including Ptolemy's Almagest in 1175.",
    context:
      "Mozarabic Christians and Jewish scholars often rendered the Arabic orally into the Romance vernacular, which a Latin cleric then set down in Latin. Ptolemy, al-Khwarizmi, Ibn Sina and Aristotle with his Arabic commentators reached the new universities of Paris and Oxford through these versions.",
    whyHere:
      "Toledo kept its Arabic libraries and its Arabic-speaking Christian and Jewish communities after 1085, making it the greatest centre of Arabic learning under Latin rule. Scholars from England, Italy and Flanders crossed the Pyrenees to find there books unobtainable at home.",
    keyFigures: ["Raymond of Toledo", "Gerard of Cremona", "Dominicus Gundissalinus"],
    schematic: {
      kind: "causal",
      steps: ["Toledo falls intact", "Bilinguals render Arabic", "Latin texts reach schools", "Europe absorbs it"],
    },
  },
  {
    id: "iga-tabula-rogeriana",
    title: "Al-Idrisi's Book of Roger",
    year: 1154,
    place: "Palermo, Sicily",
    coordinates: [13.36, 38.12],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Tabula_Rogeriana",
    summary:
      "At the court of Roger II in Palermo, al-Idrisi completed in 1154 the Book of Roger, a world geography with seventy sectional maps, made alongside a great silver planisphere.",
    context:
      "Norman Sicily, conquered from its Muslim emirs between 1061 and 1091, kept Arabic, Greek and Latin as languages of government. The Book of Roger combined Ptolemy and Islamic geography with fresh reports from travellers, producing one of the most detailed world maps of the Middle Ages.",
    whyHere:
      "Sicily sits at the narrows between Tunisia and Italy, the crossroads of Mediterranean shipping, and Palermo's harbour received sailors and merchants from every coast. Roger II reportedly had travellers questioned and their accounts compared to build the map.",
    keyFigures: ["Muhammad al-Idrisi", "Roger II of Sicily"],
  },
  {
    id: "iga-ibn-rushd",
    title: "Ibn Rushd Comments on Aristotle",
    year: 1169,
    place: "Córdoba and Seville, al-Andalus",
    coordinates: [-4.79, 37.89],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Averroes",
    summary:
      "Introduced to the Almohad caliph Abu Yaqub Yusuf by Ibn Tufayl around 1169, Ibn Rushd was asked to explain the works of Aristotle and spent decades writing commentaries on them.",
    context:
      "Translated into Latin by Michael Scot and others in the early thirteenth century, his commentaries made him known in Europe simply as the Commentator. Their reception at Paris fed debates over reason and faith that shaped scholastic philosophy, including the work of Thomas Aquinas.",
    whyHere:
      "The Almohads ruled both Morocco and al-Andalus, and Córdoba and Seville remained centres of law and learning with strong libraries. Ibn Rushd moved between these cities and the court at Marrakesh, across the Strait of Gibraltar that bound the two halves of the empire.",
    keyFigures: ["Ibn Rushd", "Ibn Tufayl", "Abu Yaqub Yusuf"],
  },
  {
    id: "iga-liber-abaci",
    title: "Fibonacci's Liber Abaci",
    year: 1202,
    place: "Pisa, Italy",
    coordinates: [10.4, 43.72],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Liber_Abaci",
    summary:
      "Leonardo of Pisa, later called Fibonacci, published Liber Abaci, teaching Italian merchants to calculate with Hindu-Arabic numerals and their place-value system.",
    context:
      "Leonardo learned the Indian method of reckoning as a boy at Bugia in North Africa, where his father served as a Pisan customs official, and studied further while travelling in Egypt, Syria, Greece, Sicily and Provence. Abacus schools spread the new numerals through Italian commerce, though Roman numerals lingered in official records for centuries.",
    whyHere:
      "Pisa was a maritime republic whose ships and trading posts reached North African ports such as Bugia, on the main sea lane from Italy to the Maghreb. Commerce brought its merchants into daily contact with Arabic accounting and arithmetic.",
    keyFigures: ["Fibonacci", "Guglielmo Bonacci"],
    primarySource: {
      excerpt: "The nine Indian figures are: 9 8 7 6 5 4 3 2 1.",
      attribution: "Leonardo of Pisa (Fibonacci), Liber Abaci (1202), ch. 1, trans. L. E. Sigler (2002)",
    },
    schematic: {
      kind: "causal",
      steps: ["Numerals reach Baghdad", "Spread across Maghreb", "Pisan boy learns at Bugia", "Liber Abaci, 1202"],
    },
  },
  {
    id: "iga-sack-of-baghdad",
    title: "Mongols Sack Baghdad",
    year: 1258,
    place: "Baghdad",
    coordinates: [44.39, 33.33],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Siege_of_Baghdad",
    summary:
      "Mongol forces under Hulagu Khan besieged Baghdad, sacked it in February 1258 and executed the last Abbasid caliph, al-Musta'sim, ending the caliphate in Baghdad.",
    context:
      "Hulagu had already destroyed the Nizari Ismaili strongholds, including Alamut, in 1256. Libraries were plundered and much of the population killed, yet the scholar Nasir al-Din al-Tusi, who served Hulagu, went on to found the Maragheh observatory in 1259, carrying the scientific tradition into Ilkhanid Iran.",
    whyHere:
      "The Khurasan Road that had made Baghdad rich led the Mongols straight to it, down from Hamadan through the Zagros passes. By then the caliph ruled little beyond central Iraq, and the open floodplain around the city offered no natural defences beyond the Tigris itself.",
    keyFigures: ["Hulagu Khan", "Al-Musta'sim", "Nasir al-Din al-Tusi"],
    schematic: {
      kind: "causal",
      steps: ["Alamut falls, 1256", "Mongols cross the Zagros", "Baghdad sacked, 1258", "Al-Tusi turns to Maragheh"],
    },
  },
];
