import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "io-geniza": {
    title: "Les lettres de Ben Yiju depuis le Malabar",
    place: "Mangalore, nord de la côte de Malabar",
    summary:
      "Abraham Ben Yiju, marchand juif originaire de Tunisie, vécut quelque dix-sept ans à Mangalore, où il faisait le commerce du poivre et dirigeait un atelier de bronze. Sa correspondance avec ses associés d’Aden et de Fustat a survécu dans la Geniza du Caire, la réserve d’une synagogue du Vieux-Caire.",
    context:
      "La Geniza conserve des centaines de milliers de fragments, dont les papiers d’un réseau de marchands qui acheminaient des marchandises entre l’Espagne, l’Égypte, le Yémen et l’Inde. Ben Yiju affranchit et épousa une Indienne nommée Ashu, et sa maisonnée s’étendait sur trois continents.",
    whyHere:
      "Mangalore se trouvait à l’extrémité nord de la côte du poivre, là où les rivières descendues des Ghâts occidentaux rejoignent la mer. Son commerce transitait par Aden, charnière entre les routes de mousson de la haute mer et les vents tout différents de la mer Rouge : lettres et cargaisons y attendaient un changement de navire et de saison.",
  },
  "io-majapahit": {
    title: "L’essor de Majapahit après l’expédition mongole",
    place: "Trowulan, vallée du Brantas, Java oriental",
    summary:
      "Raden Wijaya s’allia à une flotte Yuan envoyée par Kubilaï Khan pour châtier Java, s’en servit pour vaincre son rival Jayakatwang, puis se retourna contre les Mongols et les chassa. Le royaume qu’il fonda à Majapahit devint la puissance dominante de l’archipel indonésien.",
    context:
      "Au XIVe siècle, sous le ministre Gajah Mada et le roi Hayam Wuruk, Majapahit revendiquait la suzeraineté sur des ports allant de Sumatra à la Nouvelle-Guinée. Le poème de cour Nagarakretagama, composé en 1365, énumère des dizaines de lieux tributaires.",
    whyHere:
      "Les sols volcaniques de la vallée du Brantas produisaient des excédents de riz que les navires javanais portaient vers l’est pour les échanger contre du clou de girofle, de la noix de muscade et du bois de santal. Ils partaient vers l’est avec la mousson d’ouest à partir de décembre environ et revenaient avec la mousson d’est au milieu de l’année.",
  },
  "io-pasai": {
    title: "Samudera Pasai et l’islam sur les routes maritimes",
    place: "Samudera Pasai, nord de Sumatra",
    summary:
      "La stèle funéraire du sultan Malik al-Salih, datée de 1297, fait de Samudera Pasai l’un des premiers royaumes musulmans d’Asie du Sud-Est. Ibn Battuta y trouva en 1345 un sultan chaféite et une cour lettrée.",
    context:
      "L’islam se répandit dans l’océan Indien surtout par les marchands, non par les armées, à mesure que des négociants du Gujarat, du Bengale, de l’Inde du Sud et d’Arabie s’installaient et prenaient épouse dans les villes portuaires. Plus tard, des stèles royales de Pasai et de Java furent sculptées à Cambay et expédiées depuis le Gujarat.",
    whyHere:
      "La pointe nord de Sumatra est le premier atterrage après la traversée du golfe du Bengale et le dernier avant le détroit de Malacca. Les flottes y attendaient les vents : Marco Polo passa cinq mois sur cette côte en 1292 avant que ses navires puissent reprendre la mer.",
  },
  "io-kilwa": {
    title: "Kilwa et l’or de Sofala",
    place: "Kilwa Kisiwani, côte swahilie",
    summary:
      "Au début du XIVe siècle, Kilwa contrôlait l’exportation de l’or de Sofala, extrait sur le plateau du Zimbabwe. Ibn Battuta s’y rendit vers 1331, alors que le sultan al-Hasan ibn Sulaiman faisait bâtir le grand palais de Husuni Kubwa et agrandir en pierre de corail la Grande Mosquée.",
    context:
      "Les villes swahilies étaient musulmanes, africaines et cosmopolites, et parlaient une langue bantoue riche en mots arabes. Kilwa frappait sa propre monnaie de cuivre et commerçait avec l’Arabie, la Perse et l’Inde ; de la porcelaine chinoise était enchâssée dans les murs de ses mosquées et de ses tombeaux.",
    whyHere:
      "Les navires d’Arabie et de l’Inde arrivaient avec la mousson du nord-est et devaient repartir avec la mousson du sud-ouest quelques mois plus tard. Kilwa se trouvait près de la limite sud de ce circuit ; Sofala était trop au sud pour qu’on puisse l’atteindre et en revenir en une saison, si bien que son or venait à Kilwa.",
    schematic: {
      westLabel: "Côte swahilie",
      eastLabel: "Arabie et Inde",
      eastbound: ["or", "ivoire", "ambre gris", "perches de palétuvier"],
      westbound: ["cotonnades", "perles de verre", "porcelaine chinoise", "céramiques glaçurées"],
    },
  },
  "io-maldives": {
    title: "Ibn Battuta aux Maldives",
    place: "Malé, îles Maldives",
    summary:
      "Ibn Battuta passa une grande partie des années 1343 et 1344 aux Maldives, où il exerça la charge de grand cadi sous la sultane Khadija. Il décrivit des îles qui exportaient vers le Bengale des cauris servant de monnaie, et vers l’Inde, la Chine et le Yémen des cordages en fibre de coco.",
    context:
      "Les Maldives s’étaient converties à l’islam au XIIe siècle. Les cauris de leurs lagons servaient de petite monnaie du Bengale à l’Afrique de l’Ouest, où ils avaient encore cours des siècles plus tard.",
    whyHere:
      "Les atolls s’étendent en travers des routes maritimes, au sud et à l’ouest de l’Inde, et leurs lagons chauds produisaient des cauris en quantités prodigieuses. Les cocotiers de chaque îlot fournissaient le coir, la fibre avec laquelle on cousait les coques de l’océan Indien.",
  },
  "io-malacca": {
    title: "La fondation du sultanat de Malacca",
    place: "Malacca, détroit de Malacca",
    summary:
      "Vers 1400, Parameswara, prince de Palembang chassé de Singapour, fonda un port à Malacca. Protégé par les Ming contre le Siam, il devint en quelques décennies le plus grand emporium d’Asie du Sud-Est, et ses souverains embrassèrent l’islam.",
    context:
      "Parameswara reçut l’envoyé Ming Yin Qing en 1403 et rendit visite à l’empereur Yongle à Nankin en 1411. Les communautés marchandes du Gujarat, de l’Inde du Sud, de Java et de Chine traitaient chacune avec leur propre capitaine de port.",
    whyHere:
      "À Malacca se rejoignaient les régimes de mousson du golfe du Bengale et de la mer de Chine méridionale. Les navires de l’Inde arrivaient avec la mousson du sud-ouest, ceux de Chine avec celle du nord-est, et chacun attendait des mois le vent du retour dans une rade abritée, sur un passage resserré du détroit.",
    schematic: {
      steps: [
        "Parameswara fuit Singapour",
        "La protection des Ming",
        "Les marchands de la mousson affluent",
        "Les souverains embrassent l’islam",
      ],
    },
  },
  "io-zheng-he": {
    title: "Les flottes du Trésor de Zheng He",
    place: "Galle, sud du Sri Lanka",
    summary:
      "Entre 1405 et 1433, l’amiral eunuque Zheng He conduisit sept expéditions de la flotte Ming, qui atteignirent Calicut, Ormuz, Aden et la côte swahilie. Une stèle datée de 1409, découverte à Galle, honore le Bouddha, un dieu hindou et Allah, en chinois, en tamoul et en persan.",
    context:
      "L’empereur Yongle envoya ces flottes pour afficher la puissance Ming et attirer les souverains lointains dans le système tributaire. Après 1433, la cour mit fin aux expéditions, et la navigation chinoise dans l’océan Indien retourna aux mains des particuliers.",
    whyHere:
      "Galle se trouve près de la pointe méridionale du Sri Lanka, que tout navire allant du golfe du Bengale à la mer d’Arabie devait contourner. Les flottes se rassemblaient l’hiver au large du Fujian, descendaient vers le sud avec la mousson du nord-est et rentraient avec la mousson du sud-ouest.",
    schematic: {
      steps: [
        "Yongle s’empare du trône",
        "Les flottes suivent la mousson",
        "Les souverains envoient le tribut",
        "Fin des expéditions en 1433",
      ],
    },
  },
  "io-calicut": {
    title: "Calicut au temps des Zamorins",
    place: "Calicut, côte de Malabar",
    summary:
      "Abdur Razzaq Samarqandi, envoyé du souverain timouride Shah Rukh, atteignit Calicut en 1442 et y trouva un port où les marchands de tous les rivages commerçaient en sécurité sous l’autorité du Zamorin, un souverain hindou. De là, il poursuivit sa route jusqu’à Vijayanagara.",
    context:
      "Les Zamorins s’imposèrent aux XIIIe et XIVe siècles et firent de Calicut le premier port du poivre du Malabar, en s’appuyant sur les communautés marchandes musulmanes pour la navigation. Les flottes de Zheng He y firent escale à chaque expédition.",
    whyHere:
      "Calicut n’a pas de port naturel, seulement une rade foraine que la mousson du sud-ouest fermait de juin à août environ. Elle attirait le commerce par sa position d’atterrage pour les navires venus d’Aden et d’Ormuz, et grâce à des souverains qui garantissaient des droits de douane équitables et protégeaient les cargaisons.",
  },
  "io-ibn-majid": {
    title: "Le livre de navigation d’Ahmad ibn Majid",
    place: "Julfar (Ras al-Khaimah), détroit d’Ormuz",
    summary:
      "Le pilote Ahmad ibn Majid, de Julfar, acheva son Kitab al-Fawa’id, une somme de la navigation arabe traitant de la hauteur des étoiles, des saisons de navigation, des côtes et des routes de l’Afrique orientale à l’Asie du Sud-Est.",
    context:
      "Un récit plus tardif prétend qu’il guida Vasco de Gama de Malindi à Calicut, mais la plupart des historiens le rejettent : le pilote était probablement un Gujarati. L’œuvre d’Ibn Majid consigne un savoir accumulé par des générations de pilotes.",
    whyHere:
      "Julfar se trouve près du détroit d’Ormuz, berceau de familles de pilotes qui connaissaient chaque récif et chaque saison. Dans une mer où le calendrier faisait loi, un pilote devait savoir quand chaque route s’ouvrait et se fermait, et déterminer la latitude d’après des étoiles mesurées en largeurs de doigt.",
  },
  "io-da-gama": {
    title: "Vasco de Gama atteint Calicut",
    place: "Kappad, près de Calicut",
    summary:
      "Après avoir doublé le cap de Bonne-Espérance, Vasco de Gama embarqua un pilote à Malindi et traversa la mer d’Arabie en 23 jours avec la mousson du sud-ouest, jetant l’ancre près de Calicut le 20 mai 1498. Les pourparlers avec le Zamorin tournèrent mal, et il repartit en août avec une cargaison d’épices symbolique.",
    context:
      "Les Portugais arrivaient en étrangers dans un monde marchand qui avait ses propres règles, avec des marchandises dont personne ne voulait à Calicut. En quelques années, ils revinrent avec des navires de guerre pour imposer des sauf-conduits et s’emparer de ports, mettant fin à la mer ouverte qui avait duré des siècles.",
    whyHere:
      "Calicut était le premier port du poivre du Malabar et l’atterrage des navires venus d’Afrique orientale. Gama prit le chemin du retour avant que la mousson du nord-est ne soit établie : la traversée dura près de trois mois et coûta une trentaine d’hommes, emportés par le scorbut.",
  },
};
