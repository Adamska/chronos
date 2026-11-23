import type { Trail } from "@/types/atlas";
import { story } from "./stories/paperThread";

export const paperThreadTrail: Trail = {
  id: "thread-paper",
  kind: "thread",
  title: "Paper: From Cai Lun to Europe",
  subtitle: "A Han court craft crosses Asia and the Mediterranean, 105–1390",
  summary:
    "Paper made from rags, bark and hemp was refined at the Han court and carried west by Silk Road merchants. Samarkand, Baghdad and Cairo made it the medium of the Islamic world, and from al-Andalus and Italy it reached the German lands just in time for the printing press.",
  accent: "#d6c9a8",
  keywords: [
    "paper",
    "papermaking",
    "cai lun",
    "han dynasty",
    "dunhuang",
    "samarkand",
    "talas",
    "baghdad",
    "papyrus",
    "xàtiva",
    "fabriano",
    "watermark",
    "nuremberg",
    "ulman stromer",
  ],
  stops: [
    {
      id: "paper-luoyang",
      year: 105,
      place: "Luoyang, Eastern Han China",
      coordinates: [112.454, 34.6197],
      title: "Cai Lun Presents Paper to the Throne",
      summary:
        "In 105 the court eunuch Cai Lun reported to Emperor He on a method of making paper from bark, hemp, rags and old fishing nets. Cruder papers already existed, but his name became attached to the invention and to the craft.",
      whyHere:
        "Luoyang was the Eastern Han capital, set in a sheltered basin on the Luo River near the Yellow River, and Cai Lun oversaw the imperial workshops there. A huge bureaucracy wrote on bulky bamboo slips and costly silk, while the capital's waste supplied cheap fibre.",
      wikipediaSlug: "Cai_Lun",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Cai Lun", "Emperor He of Han"],
      primarySource: {
        excerpt:
          "In ancient times writing was generally on bamboo or on pieces of silk, which were then called chih. But silk being expensive and bamboo heavy, these two materials were not convenient. Then Ts'ai Lun thought of using tree bark, hemp, rags and fish nets.",
        attribution:
          "Fan Ye, Book of the Later Han (5th century), trans. T. F. Carter, The Invention of Printing in China and Its Spread Westward (1925)",
      },
    },
    {
      id: "paper-dunhuang",
      year: 313,
      place: "Great Wall watchtower near Dunhuang",
      coordinates: [94.6616, 40.1421],
      title: "Merchant Letters on the Silk Road",
      summary:
        "In a ruined watchtower west of Dunhuang, Aurel Stein found a mailbag of letters written by Sogdian merchants in the early fourth century, written on paper, some still in their envelopes. They show paper already travelling with traders far from the Chinese heartland.",
      whyHere:
        "Dunhuang guards the western end of the Hexi Corridor, where the routes divide to skirt the Taklamakan Desert. Sogdian merchants from the Samarkand region ran the trade along this road, and the desert air preserved what they lost.",
      wikipediaSlug: "Dunhuang",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Aurel Stein"],
    },
    {
      id: "paper-samarkand",
      year: 751,
      place: "Samarkand, Sogdiana",
      coordinates: [66.9597, 39.6542],
      title: "The Paper of Samarkand",
      summary:
        "Arabic tradition says Chinese prisoners taken at the Battle of Talas in 751 taught papermaking at Samarkand. Historians now treat the story as a legend, since paper was probably already made in the region, but Samarkand paper became famous across the Islamic world.",
      whyHere:
        "Samarkand stands in the Zarafshan valley, whose irrigation canals watered fields of flax, hemp and cotton and supplied the water papermakers need. As the Sogdian hub between China and Iran, it was where an eastern craft met the newly arrived Abbasid world.",
      wikipediaSlug: "Samarkand",
      layer: "trade",
      arrivedBy: "trade",
      primarySource: {
        excerpt:
          "Among the specialties of Samarkand that should be mentioned is paper. It has replaced the rolls of Egyptian papyrus and the parchment which were formerly used for writing, because it is more beautiful, more agreeable and more convenient.",
        attribution:
          "Al-Tha'alibi (11th century), quoted in T. F. Carter, The Invention of Printing in China and Its Spread Westward (1925)",
      },
    },
    {
      id: "paper-baghdad",
      year: 794,
      place: "Baghdad, Abbasid Caliphate",
      coordinates: [44.3661, 33.3152],
      title: "Baghdad's First Paper Mill",
      summary:
        "In the reign of Harun al-Rashid, around 794, a paper mill was set up in Baghdad, traditionally credited to the Barmakid family of viziers. Paper soon became the standard medium of Abbasid government, scholarship and commerce.",
      whyHere:
        "Baghdad straddled the Tigris, which supplied water for pounding and washing pulp, and the irrigated plain grew flax and hemp. The caliphate's sprawling ministries consumed records on a vast scale, and paper was cheaper than parchment and harder to alter than papyrus.",
      wikipediaSlug: "History_of_paper",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Harun al-Rashid"],
    },
    {
      id: "paper-damascus",
      year: 900,
      place: "Damascus, Syria",
      coordinates: [36.2765, 33.5138],
      title: "Damascus Paper for the Mediterranean",
      summary:
        "By the tenth century Syrian mills were producing paper in quantity for export, and Byzantine writers came to call imported paper charta damascena, the paper of Damascus.",
      whyHere:
        "Damascus is an oasis fed by the Barada River from the Anti-Lebanon mountains, whose channels drove mills and watered the flax of the Ghouta. The city sat on caravan routes to the Mediterranean ports that linked Syria to Byzantium and Europe.",
      wikipediaSlug: "Damascus",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "paper-cairo",
      year: 1000,
      place: "Fustat (Old Cairo), Egypt",
      coordinates: [31.2333, 30.0063],
      title: "Paper Ends Egypt's Papyrus Age",
      summary:
        "By around 1000 paper had displaced papyrus in Egypt, the plant's homeland for more than three thousand years. The Cairo Geniza, a synagogue storeroom in Fustat, preserved some 400,000 manuscript fragments, most of them paper, recording Mediterranean trade and daily life.",
      whyHere:
        "Egypt's linen industry, fed by flax from the Nile floodplain, produced a steady supply of rags, the raw material of Islamic paper. Fustat was a commercial crossroads between the Indian Ocean trade of the Red Sea and the Mediterranean.",
      wikipediaSlug: "Cairo_Geniza",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "paper-fez",
      year: 1100,
      place: "Fez, Morocco",
      coordinates: [-4.9736, 34.0645],
      title: "Mills in the Valley of Fez",
      summary:
        "By the twelfth century Fez had become a major papermaking centre of the Maghreb, supplying the scholars of its mosques and the chanceries of the Almoravid and Almohad dynasties.",
      whyHere:
        "The Fez River drops steeply through a narrow valley, and its channels powered mills and ran through the city's quarters. Fez linked the caravan trade from the Sahara to the crossings into al-Andalus.",
      wikipediaSlug: "Fez,_Morocco",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "paper-xativa",
      year: 1150,
      place: "Xàtiva (Játiva), al-Andalus",
      coordinates: [-0.5181, 38.9897],
      title: "Xàtiva Brings Paper to Europe",
      summary:
        "Papermakers at Xàtiva were producing paper by the mid-twelfth century, the earliest well-attested production in Europe, and the geographer al-Idrisi praised its quality. After James I of Aragon took the town in 1244, its Muslim papermakers kept working under Christian rule.",
      whyHere:
        "Xàtiva overlooks an irrigated plain near Valencia where Islamic-era canals watered fields of flax and hemp. Streams from the surrounding hills gave water for pulping, and the coast gave access to Mediterranean shipping.",
      wikipediaSlug: "Xàtiva",
      layer: "trade",
      arrivedBy: "migration",
      keyFigures: ["Muhammad al-Idrisi", "James I of Aragon"],
    },
    {
      id: "paper-fabriano",
      year: 1280,
      place: "Fabriano, Marche, Italy",
      coordinates: [12.9047, 43.3367],
      title: "Fabriano Reinvents the Craft",
      summary:
        "In the later thirteenth century the papermakers of Fabriano introduced water-powered stamping hammers, sizing with animal gelatin, and wire watermarks, which appear in Italian paper from the 1280s. Their stronger, cheaper sheets came to dominate the European market.",
      whyHere:
        "Fabriano lies in an Apennine valley whose fast streams already drove fulling mills for the wool trade, a technology readily adapted to pounding rags. The Adriatic port of Ancona and Italy's dense towns supplied rags and buyers.",
      wikipediaSlug: "Fabriano",
      layer: "science",
      arrivedBy: "trade",
    },
    {
      id: "paper-nuremberg",
      year: 1390,
      place: "Nuremberg, Holy Roman Empire",
      coordinates: [11.0767, 49.4521],
      title: "Ulman Stromer's Mill on the Pegnitz",
      summary:
        "The Nuremberg merchant and councillor Ulman Stromer converted a mill outside the city into a paper mill in 1390, bringing in Italian craftsmen. It is the earliest documented paper mill in Germany, ready to supply the printers who would follow within two generations.",
      whyHere:
        "Nuremberg was an imperial city whose merchants traded over the Alpine passes with Venice and Lombardy, where Stromer saw Italian paper. The Pegnitz River provided water power, and producing locally cut out the long haul from Italy.",
      wikipediaSlug: "Ulman_Stromer",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Ulman Stromer"],
    },
  ],
  story,
};
