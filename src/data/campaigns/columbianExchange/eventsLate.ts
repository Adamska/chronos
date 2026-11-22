import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "cx-luanda-slave-trade",
    title: "Luanda and the Slave Trade to Brazil",
    year: 1576,
    endYear: 1800,
    place: "Luanda, Angola",
    coordinates: [13.23, -8.84],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Atlantic_slave_trade",
    summary:
      "Paulo Dias de Novais founded Luanda in 1576, and it became the largest single port of embarkation in the Atlantic slave trade. West Central Africa supplied nearly half of the roughly 12.5 million people forced onto slave ships, and Brazil received more captives than any other destination.",
    context:
      "Sugar mills ran on brutal, year-round labour, and planters worked enslaved people to death and bought replacements rather than improve conditions. Wars and raids waged to supply captives devastated societies across Ndongo, Kongo and their neighbours, while maize and cassava fed the barracoons and the ships.",
    whyHere:
      "Luanda's bay is sheltered by a long sandbar island, and the South Atlantic's winds and currents made the crossing to Pernambuco and Bahia shorter and more direct than voyages from West Africa to the Caribbean. That geography tied Angola and Brazil into a single system.",
    keyFigures: ["Paulo Dias de Novais", "Nzinga of Ndongo and Matamba"],
  },
  {
    id: "cx-chocolate-spain",
    title: "Chocolate Reaches the Spanish Court",
    year: 1585,
    endYear: 1631,
    place: "Madrid, Crown of Castile",
    coordinates: [-3.7, 40.42],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "History_of_chocolate",
    summary:
      "Q'eqchi' Maya nobles brought by Dominican friars introduced cacao drinks to the Spanish court in 1544, and the first recorded commercial shipment of cacao reached Spain in 1585. Sweetened with sugar and spiced, chocolate became the fashionable drink of Madrid's elite.",
    context:
      "Spaniards first valued chocolate as medicine, and Philip II's physician Francisco Hernández catalogued its supposed powers. Antonio Colmenero de Ledesma published a treatise on chocolate in Madrid in 1631, and the drink spread to Italy, France and England.",
    whyHere:
      "Cacao trees grow only in hot, humid lowlands near the equator, such as Soconusco and Tabasco, so Spain could never grow its own. Every cup depended on the fleets from Veracruz, giving Castile a long monopoly on the trade.",
    keyFigures: ["Francisco Hernández de Toledo", "Philip II of Spain"],
  },
  {
    id: "cx-sweet-potato-fujian",
    title: "Sweet Potatoes Save Fujian",
    year: 1594,
    place: "Fuzhou, Fujian",
    coordinates: [119.3, 26.08],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Sweet_potato",
    summary:
      "Fujianese merchants trading in Spanish Manila brought sweet potato vines home, and when crops failed in 1594 Governor Jin Xuezeng ordered them planted. The tuber spread across southern China, and the scholar Xu Guangqi wrote a treatise promoting it.",
    context:
      "The Ming had reopened private overseas trade from Yuegang in 1567, and Chinese junks met the Manila galleons that carried American silver and crops across the Pacific. Maize was spreading through China at the same time.",
    whyHere:
      "Fujian is mostly mountains, with little flat land for irrigated rice, and its coast faces Luzon across a few days' sail. Sweet potatoes thrive on sandy, sloping, unirrigated soil, survive drought and typhoons underground, and yield heavily from small plots.",
    keyFigures: ["Jin Xuezeng", "Xu Guangqi"],
  },
  {
    id: "cx-kongo-staples",
    title: "Maize and Cassava Become Kongo Staples",
    year: 1600,
    endYear: 1700,
    place: "Mbanza Kongo, Kingdom of Kongo",
    coordinates: [14.24, -6.27],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Cassava",
    summary:
      "Portuguese traders carried cassava from Brazil and maize across the Atlantic, and by the 17th century both had become staples in Kongo and Angola. Maize also spread along the Gold Coast, where the Dutch trader Pieter de Marees described it in 1602.",
    context:
      "The new crops supported denser populations but were also bound up with the slave trade, feeding slave ships, ports and garrisons. Cassava's bitter varieties must be grated, soaked and dried to remove cyanide, a technique learned from Brazil.",
    whyHere:
      "Western Central Africa has a long dry season and leached, acidic soils. Cassava tolerates both, and its roots can stay in the ground for months as a famine reserve that raiders cannot easily seize, while fast-growing maize fits between the rains.",
    keyFigures: ["Pieter de Marees"],
  },
  {
    id: "cx-virginia-tobacco",
    title: "Rolfe Plants Sweet Tobacco in Virginia",
    year: 1612,
    endYear: 1618,
    place: "Jamestown, Virginia",
    coordinates: [-76.78, 37.21],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "John_Rolfe",
    summary:
      "John Rolfe planted Nicotiana tabacum from Spanish Trinidad seed and shipped the first four barrels of leaf to England in 1614. By 1618 Virginia was exporting 40,000 pounds a year, and tobacco became the colony's currency.",
    context:
      "James I despised smoking and taxed imports heavily, but English demand made Virginia profitable. The crop exhausted soils within a few years, driving planters onto Powhatan land and, from 1619, toward enslaved African labour.",
    whyHere:
      "The Chesapeake's long, humid summers suited the Caribbean tobacco species, and deep tidal rivers let ocean ships load hogsheads at each plantation's own wharf, with no need for towns or roads.",
    keyFigures: ["John Rolfe", "Pocahontas", "James VI and I"],
    primarySource: {
      excerpt:
        "A custome lothsome to the eye, hatefull to the Nose, harmefull to the braine, dangerous to the Lungs, and in the blacke stinking fume thereof, neerest resembling the horrible Stigian smoke of the pit that is bottomelesse.",
      attribution: "James VI and I, A Counterblaste to Tobacco, 1604",
    },
  },
  {
    id: "cx-ottoman-tobacco-ban",
    title: "Murad IV Bans Tobacco",
    year: 1632,
    place: "Istanbul, Ottoman Empire",
    coordinates: [28.98, 41.01],
    layer: "conflict",
    significance: 2,
    wikipediaSlug: "Murad_IV",
    summary:
      "Sultan Murad IV banned tobacco smoking and closed Istanbul's coffeehouses, seeing them as centres of sedition, and enforced the ban with executions. Within decades the ban lapsed and tobacco became part of Ottoman daily life.",
    context:
      "Tobacco had reached the empire around 1600 through English and Dutch merchants. Ottoman scholars debated whether it was lawful, and the writer Katip Çelebi argued that bans were futile against a habit so widespread.",
    whyHere:
      "Istanbul, at the meeting of the Mediterranean and Black Sea routes, received tobacco by sea from western merchants. The plant soon grew in the warm, dry summers of the Balkans and Anatolia, which later produced the famous oriental leaf.",
    keyFigures: ["Murad IV", "Katip Çelebi"],
  },
  {
    id: "cx-jesuit-bark",
    title: "Jesuit's Bark Reaches Rome",
    year: 1649,
    place: "Rome, Papal States",
    coordinates: [12.49, 41.89],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Cinchona",
    summary:
      "Bark from the Andean cinchona tree, sent by Jesuits in Peru, was used in Rome against malarial fevers by the 1640s. In the late 1640s the Schedula Romana set out how to dose it, and Cardinal Juan de Lugo promoted its free distribution.",
    context:
      "Malaria was an Old World disease that the Columbian Exchange carried to the Americas, yet the first effective remedy came from the Andes. Protestant physicians long distrusted the 'Jesuit's powder', and its active ingredient, quinine, was isolated only in 1820.",
    whyHere:
      "The best bark came from cloud forests on the Andean slopes around Loja. Rome needed it badly: the marshes of the Campagna and the Pontine plain bred mosquitoes, and summer fevers struck the city every year.",
    keyFigures: ["Juan de Lugo", "Agostino Salumbrino"],
  },
  {
    id: "cx-comanche-horses",
    title: "Horses Make the Comanche Empire",
    year: 1706,
    endYear: 1786,
    place: "Southern Great Plains",
    coordinates: [-101.0, 34.5],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Comancheria",
    summary:
      "Spanish horses scattered by the Pueblo Revolt of 1680 spread north, and the Comanche, first recorded near New Mexico in 1706, built a mounted society that drove the Apache off the southern Plains. By the 1750s Comancheria dominated the region between New Mexico and Texas.",
    context:
      "Horses turned the Comanche into formidable bison hunters, raiders and traders, selling horses and captives across the Plains. Spain made peace with them in 1786 after Governor Juan Bautista de Anza's campaigns.",
    whyHere:
      "The southern Plains are an ocean of short grass with milder winters than the north, so horses could graze year-round in huge herds. Bison provided food and hides, and Spanish settlements in New Mexico and Texas lay within raiding and trading reach.",
    keyFigures: ["Popé", "Cuerno Verde", "Juan Bautista de Anza"],
  },
  {
    id: "cx-ireland-potato",
    title: "Ireland's Potato Dependence",
    year: 1740,
    endYear: 1741,
    place: "Kingdom of Ireland",
    coordinates: [-8.0, 53.0],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Irish_Famine_(1740–1741)",
    summary:
      "A seven-week Great Frost in the winter of 1739–40 destroyed stored potatoes and grain, and the famine that followed killed between 13 and 20 percent of Ireland's 2.4 million people. Yet the potato kept spreading, and Ireland's population roughly doubled by the end of the century.",
    context:
      "Landless labourers rented tiny plots where an acre of potatoes and a cow could feed a family. This dependence on a single crop set the stage for the catastrophe of the 1840s.",
    whyHere:
      "Ireland's cool, wet Atlantic climate ripened grain poorly but suited the potato, which grew on bog edges and hillsides in raised ridges. The same mild climate left farmers unprepared for the rare Arctic freeze of 1740.",
    keyFigures: ["Adam Smith", "Hugh Boulter"],
    primarySource: {
      excerpt:
        "The chairmen, porters, and coal-heavers in London... the strongest men and the most beautiful women perhaps in the British dominions, are said to be, the greater part of them, from the lowest rank of people in Ireland, who are generally fed with this root.",
      attribution: "Adam Smith, The Wealth of Nations, Book I, ch. 11, 1776",
    },
  },
  {
    id: "cx-china-uplands",
    title: "Hong Liangji and China's Crowded Uplands",
    year: 1793,
    place: "Han River highlands, Shaanxi",
    coordinates: [109.03, 32.68],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Hong_Liangji",
    summary:
      "In 1793 the scholar Hong Liangji warned that China's population was outgrowing its land, five years before Malthus. With maize and sweet potatoes, the Qing population had roughly tripled from about 100 million in the 1650s to some 300 million by 1790.",
    context:
      "Migrants cleared the hills of the Han River highlands and other uplands, planting maize on slopes too steep and dry for rice. Erosion silted rivers below, and in 1796 the White Lotus Rebellion broke out in these same overcrowded hills.",
    whyHere:
      "China's rice lands in the valleys and deltas were already full. Maize and sweet potatoes grew on steep, unirrigated slopes, opening vast marginal uplands that had supported few people before.",
    keyFigures: ["Hong Liangji", "Qianlong Emperor"],
    schematic: {
      kind: "causal",
      steps: ["Maize and sweet potato arrive", "Migrants clear upland slopes", "Population nears 300 million", "Erosion silts the rivers"],
    },
  },
];
