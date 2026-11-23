import type { Trail } from "@/types/atlas";
import { story } from "./stories/silverThread";

export const silverThreadTrail: Trail = {
  id: "thread-silver",
  kind: "thread",
  title: "Silver: From Potosí to Ming China",
  subtitle: "How an Andean mountain paid China's taxes, c. 1545–1650",
  summary:
    "Silver dug from the Cerro Rico of Potosí and refined with Andean mercury crossed the Pacific on the Manila galleons to buy Chinese silk and porcelain. China, which had made silver the medium of its taxes, absorbed much of the New World's output and tied the Americas, Asia and Europe into one monetary system.",
  accent: "#b8b8a8",
  keywords: [
    "silver",
    "potosí",
    "cerro rico",
    "mercury",
    "huancavelica",
    "patio process",
    "manila galleon",
    "acapulco",
    "manila",
    "fujian",
    "yuegang",
    "ming dynasty",
    "single whip",
    "global trade",
    "spanish empire",
  ],
  stops: [
    {
      id: "silver-potosi",
      year: 1545,
      place: "Potosí, Upper Peru (Bolivia)",
      coordinates: [-65.7531, -19.5836],
      title: "A Mountain of Silver at Potosí",
      summary:
        "In 1545 an Indigenous prospector named Huallpa revealed the silver veins of the Cerro Rico, and Spanish claims were registered that April. Within a generation a mining boomtown had grown at the foot of the mountain, one of the largest cities in the Americas.",
      whyHere:
        "The Cerro Rico is a volcanic cone shot through with exceptionally rich silver veins, some of which outcropped at the surface. It stands on the cold, treeless Altiplano at about 4,000 metres, where Andean road networks and dense highland populations could supply labour, food and llama transport.",
      wikipediaSlug: "Potosí",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Diego Huallpa"],
      primarySource: {
        excerpt:
          "They say of the rich veine, the first that was discovered, that the metall lay above the ground the height of a launce, like vnto rockes, raising the superficies of the earth, like vnto a crest of three hundred foote long",
        attribution:
          "José de Acosta, Natural and Moral History of the Indies, Book IV (1590), trans. Edward Grimston (1604)",
      },
    },
    {
      id: "silver-pachuca",
      year: 1554,
      place: "Pachuca, New Spain (Mexico)",
      coordinates: [-98.7591, 20.1011],
      title: "The Patio Process Is Born",
      summary:
        "At Pachuca, the merchant Bartolomé de Medina perfected a way to extract silver by mixing crushed ore with mercury, salt and copper sulfate in open courtyards. The amalgamation method spread across Mexico and later made Andean ores profitable at an unprecedented scale.",
      whyHere:
        "The silver districts north of Mexico City sat in dry, deforested uplands where charcoal for smelting was scarce and much of the ore too poor to smelt. Amalgamation in sunlit patios replaced fuel with time, mercury and labour.",
      wikipediaSlug: "Patio_process",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Bartolomé de Medina"],
    },
    {
      id: "silver-huancavelica",
      year: 1563,
      place: "Huancavelica, Peru",
      coordinates: [-74.9764, -12.7861],
      title: "Mercury From Huancavelica",
      summary:
        "Amador de Cabrera, guided by an Indigenous informant, registered the cinnabar deposits of Huancavelica in the early 1560s. Once Viceroy Francisco de Toledo brought amalgamation to Potosí in the early 1570s, Huancavelica mercury became the reagent that kept Andean silver flowing.",
      whyHere:
        "Large mercury deposits are rare: the empire's other major source, Almadén, lay in Spain across an ocean and an isthmus. Huancavelica's cinnabar sat in the central Andes, close enough to send mercury by llama to the coast, by ship south to Arica and back up to Potosí.",
      wikipediaSlug: "Huancavelica",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Amador de Cabrera", "Francisco de Toledo"],
      primarySource: {
        excerpt:
          "from whence they carry it by sea to Arica, and so to Potosi by land vpon their sheepe. There is yeerely spent in Potosi for the refining of mettalles, about six or seven thousand quintalles of quicke-silver",
        attribution:
          "José de Acosta, Natural and Moral History of the Indies, Book IV (1590), trans. Edward Grimston (1604)",
      },
    },
    {
      id: "silver-acapulco",
      year: 1565,
      place: "Acapulco, New Spain (Mexico)",
      coordinates: [-99.8901, 16.8531],
      title: "Urdaneta Finds the Way Back",
      summary:
        "In October 1565 the friar-navigator Andrés de Urdaneta brought the San Pedro into Acapulco after sailing from the Philippines, proving a reliable eastbound route across the Pacific. Acapulco became the American terminus of the Manila galleons, which carried silver west and Asian goods east for 250 years.",
      whyHere:
        "Urdaneta sailed north from the Philippines to the latitude of the westerlies and the Kuroshio current, which carried him across to California and down the coast. Acapulco's deep, sheltered bay was the best natural harbour on New Spain's Pacific coast, linked by road to Mexico City and Veracruz.",
      wikipediaSlug: "Andrés_de_Urdaneta",
      layer: "trade",
      arrivedBy: "exploration",
      keyFigures: ["Andrés de Urdaneta", "Miguel López de Legazpi"],
    },
    {
      id: "silver-yuegang",
      year: 1567,
      place: "Yuegang (Haicheng), Fujian, China",
      coordinates: [117.82, 24.45],
      title: "The Ming Open Yuegang",
      summary:
        "In 1567 the Ming court relaxed its ban on private maritime trade and licensed Fujian merchants to sail abroad from Yuegang, the Moon Harbour near Zhangzhou, newly made the seat of Haicheng county. Its junks soon dominated the run to Manila, where they sold silk and porcelain for silver.",
      whyHere:
        "Fujian's mountainous coast had little farmland and a long seafaring tradition, and Yuegang lay up the Jiulong River estuary, a smugglers' haven before it was legalised. The winter northeast monsoon carried junks south to Luzon in a few weeks; the summer southwest monsoon brought them home.",
      wikipediaSlug: "Haijin",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "silver-manila",
      year: 1571,
      place: "Manila, Philippines",
      coordinates: [120.9747, 14.5906],
      title: "Manila, Where Two Worlds Met",
      summary:
        "Miguel López de Legazpi made Manila the Spanish capital of the Philippines in 1571. Chinese junks arrived each spring with silk and porcelain, and Spanish merchants paid with American silver shipped out from Acapulco on the galleons.",
      whyHere:
        "Manila Bay is one of the finest sheltered harbours in Asia, a short monsoon voyage from Fujian and at the western end of the trade-wind route from Acapulco. It was the one place where Spain's Pacific lifeline touched the edge of the Chinese market.",
      wikipediaSlug: "Manila_galleon",
      layer: "trade",
      arrivedBy: "exploration",
      keyFigures: ["Miguel López de Legazpi"],
      primarySource: {
        excerpt:
          "what is given them for it, is silver and reals, for they do not like gold, nor any other goods in exchange, nor do they carry any to China",
        attribution: "Antonio de Morga, Sucesos de las Islas Filipinas (1609), trans. Henry E. J. Stanley (1868)",
      },
    },
    {
      id: "silver-arica",
      year: 1572,
      place: "Arica, Peru (Chile)",
      coordinates: [-70.3126, -18.4783],
      title: "Down From the Altiplano to Arica",
      summary:
        "Toledo's reforms of the early 1570s, amalgamation with Huancavelica mercury and the forced-labour draft known as the mita, multiplied Potosí's output. Silver bars and coins descended by llama and mule to Arica, then went by sea to Callao, Lima's port, for shipment north.",
      whyHere:
        "Arica was the nearest usable anchorage to Potosí, reached by trails dropping from the Altiplano across the western cordillera and the edge of the Atacama Desert. From there the Humboldt Current and steady southerly winds favoured the voyage north along the coast to Callao.",
      wikipediaSlug: "Arica",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Francisco de Toledo"],
    },
    {
      id: "silver-beijing",
      year: 1581,
      place: "Beijing, Ming China",
      coordinates: [116.3975, 39.9087],
      title: "The Single Whip Makes Silver Law",
      summary:
        "Under the grand secretary Zhang Juzheng, the Single Whip reform was extended across the empire in 1581, consolidating land taxes and labour service into payments in silver. Ming fiscal life now depended on a metal China produced in only small quantities.",
      whyHere:
        "With paper money discredited and domestic mines small, China's vast commercial economy had to import silver, and around 1600 an ounce of silver bought roughly twice as much gold in China as in Europe. That gap pulled Japanese and American silver toward Chinese ports.",
      wikipediaSlug: "Single_whip_reform",
      layer: "borders",
      arrivedBy: "trade",
      keyFigures: ["Zhang Juzheng", "Wanli Emperor"],
      primarySource: {
        excerpt:
          "The silver of the new continent seems, in this manner, to be one of the principal commodities by which the commerce between the two extremities of the old one is carried on",
        attribution: "Adam Smith, The Wealth of Nations, Book I, Chapter 11 (1776)",
      },
    },
  ],
  story,
};
