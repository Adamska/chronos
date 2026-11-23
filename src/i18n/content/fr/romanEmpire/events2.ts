import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "rome-principate": {
    title: "Auguste et le principat",
    place: "Rome",
    summary:
      "En janvier 27 av. J.-C., Octave annonça qu’il rendait la République au Sénat et reçut le nom d’Auguste. En réalité, il gardait les armées et les provinces frontalières\u00a0: il fondait une monarchie drapée dans les formes républicaines, que les historiens appellent le principat.",
    context:
      "Auguste régna plus de quarante ans. Il créa une armée permanente de métier, stabilisa les frontières, réorganisa les provinces et rebâtit Rome de brique et de marbre, ouvrant deux siècles de paix relative connus sous le nom de Pax Romana.",
    whyHere:
      "Rome était au centre d’un empire enroulé autour d’une seule mer\u00a0: les nouvelles, le blé et les armées pouvaient l’atteindre par l’eau depuis chaque province. Auguste habitait le Palatin, la colline de Romulus, dont le nom a donné le mot «\u00a0palais\u00a0».",
  },
  "rome-portus": {
    title: "Portus, le port de Rome",
    place: "Portus, à l’embouchure du Tibre",
    summary:
      "Dans les années 40, l’empereur Claude entreprit au nord d’Ostie un immense port artificiel, avec de longues jetées et un phare bâti sur la coque coulée du navire géant qui avait rapporté un obélisque d’Égypte. Trajan y ajouta plus tard un bassin intérieur hexagonal, et Portus devint la porte d’entrée des marchandises qui nourrissaient la capitale.",
    context:
      "Rome comptait peut-être un million d’habitants, et quelque 200 000 citoyens recevaient du blé gratuit. Le blé venait d’Égypte et d’Afrique, l’huile d’olive du sud de l’Espagne, et les amphores d’huile brisées s’entassèrent jusqu’à former une colline artificielle, le mont Testaccio.",
    whyHere:
      "L’embouchure du Tibre était un delta peu profond et mouvant, sur une côte sableuse et rectiligne dépourvue d’abri naturel\u00a0: les gros navires céréaliers déchargeaient donc depuis longtemps à Pouzzoles, près de Naples. Portus leur offrit un bassin protégé relié au fleuve par des canaux, d’où des barges étaient halées jusqu’à Rome.",
    schematic: {
      westLabel: "Rome",
      eastLabel: "Provinces",
      eastbound: ["monnaie d’argent", "gouverneurs", "vin d’Italie"],
      westbound: ["blé d’Égypte", "blé d’Afrique", "huile d’Espagne", "marbre", "fauves"],
    },
  },
  "rome-pont-du-gard": {
    title: "Les aqueducs\u00a0: le pont du Gard",
    place: "Pont du Gard, près de Nemausus (Nîmes)",
    summary:
      "Vers le milieu du Ier siècle, des ingénieurs romains construisirent un aqueduc de 50 kilomètres pour amener l’eau d’une source à Nemausus, l’actuelle Nîmes. Son pont sur le Gardon s’élève à près de 49 mètres sur trois rangs d’arches, et le canal tout entier ne descend que d’une douzaine de mètres du début à la fin.",
    context:
      "Les aqueducs alimentaient les thermes, les fontaines et les latrines des villes de tout l’Empire\u00a0; Rome elle-même en compta onze. Frontin, chargé des eaux de Rome à partir de 97, rédigea un traité qui les décrit.",
    whyHere:
      "Les sources proches d’Uzès n’étaient guère plus hautes que Nîmes, et les gorges du Gardon ainsi qu’un massif de collines calcaires les en séparaient. Pour que l’eau continue de couler sur une pente aussi douce, le canal dut contourner les collines et franchir la rivière à pleine hauteur.",
  },
  "rome-trajan-dacia": {
    title: "Trajan conquiert la Dacie",
    place: "Sarmizegetusa Regia, Dacie",
    summary:
      "Trajan mena deux guerres contre Décébale, roi des Daces, et franchit le Danube sur un grand pont de pierre et de bois conçu par Apollodore de Damas. En 106, la capitale dace tomba, Décébale se donna la mort, et l’or de la Dacie paya le forum et la colonne de Trajan à Rome.",
    context:
      "Trajan annexa ensuite l’Arabie et, en 116, descendit le Tigre jusqu’au golfe Persique. En 117, l’Empire atteignit son extension maximale, quelque cinq millions de kilomètres carrés, avant que son successeur Hadrien n’abandonne les nouvelles conquêtes de Mésopotamie.",
    whyHere:
      "Le royaume dace s’organisait autour d’un anneau de forteresses dans les montagnes de Transylvanie, qui protégeaient les mines d’or et de sel nichées dans l’arc des Carpates. Le Danube lui servait de rempart\u00a0: voilà pourquoi Trajan jeta un pont sur le fleuve à Drobeta, juste en aval des gorges des Portes de Fer.",
  },
  "rome-hadrians-wall": {
    title: "Le mur d’Hadrien",
    place: "Housesteads, nord de la Bretagne romaine",
    summary:
      "Après sa visite en Bretagne en 122, Hadrien fit construire un mur à travers l’île, de la Tyne au Solway, long de 80 milles romains, avec des forts, des fortins, des tourelles et des fossés. Il marquait, gardait et surveillait la limite nord du monde romain.",
    context:
      "Hadrien mit fin aux conquêtes de Trajan et passa une grande partie de son règne à parcourir les provinces et à fortifier les frontières, de la Bretagne au Rhin et au Danube. Son successeur bâtit un mur de gazon plus au nord, en Écosse, mais il fut abandonné en moins d’une génération.",
    whyHere:
      "Entre la Tyne et le Solway, la Grande-Bretagne se resserre en l’un de ses points les plus étroits. Dans sa partie centrale, le mur chevauche le Whin Sill, une crête de roche volcanique dure dont les falaises regardent vers le nord.",
  },
  "rome-antonine-plague": {
    title: "La peste antonine",
    place: "Séleucie du Tigre",
    summary:
      "Les troupes romaines qui rentraient d’une guerre contre les Parthes, au cours de laquelle elles avaient pillé Séleucie du Tigre en 165, rapportèrent une épidémie, probablement la variole. Elle ravagea l’Empire pendant une quinzaine d’années, et le médecin Galien en décrivit la fièvre, l’éruption et les selles noires.",
    context:
      "Marc Aurèle et Lucius Verus régnaient ensemble, tandis que la guerre faisait rage sur le Danube contre les Marcomans. Les estimations du nombre de morts varient beaucoup, mais l’épidémie décima l’armée et les contribuables au pire moment.",
    whyHere:
      "Séleucie était une immense ville marchande où les routes caravanières venues d’Iran, d’Inde et du Golfe se rejoignaient sur le Tigre. Les routes, les ports et les mouvements de troupes qui faisaient la prospérité de l’Empire portèrent aussi la maladie de Mésopotamie jusqu’à Rome et au Rhin.",
    schematic: {
      steps: [
        "Les légions pillent Séleucie",
        "Les soldats rapportent la maladie",
        "L’épidémie suit les routes",
        "Armée et impôts affaiblis",
      ],
    },
  },
  "rome-crisis": {
    title: "La crise du IIIe siècle",
    place: "Édesse, haute Mésopotamie",
    summary:
      "En 260, le roi perse Shapur Ier captura l’empereur Valérien près d’Édesse\u00a0: jamais un empereur romain n’avait été fait prisonnier. L’Empire se brisa alors en trois, un Empire gaulois à l’ouest, Rome au centre et le royaume palmyrénien de la reine Zénobie à l’est, jusqu’à ce qu’Aurélien le réunifie en 273 et 274.",
    context:
      "Entre 235 et 284, plus de vingt empereurs furent portés au pouvoir puis assassinés par leurs armées. Les Goths franchirent le Danube, la nouvelle dynastie sassanide attaqua à l’est et la monnaie d’argent s’effondra, jusqu’à ce que Dioclétien rétablisse l’ordre à partir de 284.",
    whyHere:
      "Édesse se trouvait dans la plaine ouverte entre l’Euphrate et le Tigre, où aucune montagne ni aucun grand fleuve ne séparait Rome de la Perse. Des villes comme Édesse, Carrhes et Nisibe changèrent de maîtres encore et encore sur cette frontière.",
    schematic: {
      steps: [
        "Les armées font et défont les empereurs",
        "Frontières attaquées de trois côtés",
        "Valérien captif des Perses",
        "L’Empire se brise en trois",
        "Aurélien le réunifie",
      ],
    },
  },
  "rome-milvian-bridge": {
    title: "La bataille du pont Milvius",
    place: "Pont Milvius, Rome",
    summary:
      "Le 28 octobre 312, Constantin vainquit son rival Maxence au nord de Rome, et Maxence se noya dans le Tibre. Constantin attribua sa victoire au Dieu des chrétiens et, en 313, Licinius et lui accordèrent aux chrétiens la liberté de culte.",
    context:
      "Le système des quatre empereurs imaginé par Dioclétien avait sombré dans la guerre civile après son abdication en 305. Les chrétiens sortaient de la Grande Persécution\u00a0; la conversion de Constantin fit d’une minorité persécutée la religion de l’empereur.",
    whyHere:
      "Le pont Milvius portait la voie Flaminienne au-dessus du Tibre, juste au nord de la ville. Maxence choisit de combattre dos au fleuve\u00a0: quand sa ligne céda, son armée dut fuir par le pont et par un pont de bateaux provisoire, et beaucoup se noyèrent.",
  },
  "rome-constantinople": {
    title: "Constantinople, la nouvelle Rome",
    place: "Constantinople (Byzance)",
    summary:
      "Le 11 mai 330, Constantin inaugura sa nouvelle capitale à l’emplacement de la cité grecque de Byzance, avec un palais, un hippodrome, des forums et un sénat. Constantinople resta la capitale de l’Empire romain d’Orient jusqu’en 1453.",
    context:
      "Constantin était devenu seul empereur en battant Licinius en 324, et il présida en 325 le concile de Nicée. Le centre de gravité de l’Empire glissait vers l’est, vers ses provinces les plus riches et ses frontières les plus menacées.",
    whyHere:
      "La ville occupe une péninsule entre la Corne d’Or, port naturel idéal, et la mer de Marmara. Elle commande le Bosphore, le passage de l’Europe à l’Asie et la route maritime de la mer Noire à l’Égée, et l’eau la protège sur trois côtés.",
  },
  "rome-thessalonica": {
    title: "Le christianisme devient religion d’État",
    place: "Thessalonique, Macédoine",
    summary:
      "Le 27 février 380, Théodose Ier, avec ses coempereurs Gratien et Valentinien II, ordonna à tous les peuples de l’Empire de suivre la foi chrétienne de Nicée. En une douzaine d’années, les sacrifices païens furent interdits\u00a0: en moins de soixante-dix ans, le christianisme était passé de secte persécutée à religion d’État.",
    context:
      "Les chrétiens s’étaient violemment déchirés sur la nature du Christ, et l’empereur Julien avait brièvement tenté de restaurer les anciens dieux dans les années 360. L’édit tranchait en faveur du credo de Nicée et faisait de la dissidence un crime.",
    whyHere:
      "Thessalonique était le quartier général de Théodose dans la guerre contre les Goths, après le désastre d’Andrinople en 378. Port sur la via Egnatia, à mi-chemin entre Rome et Constantinople, elle se trouvait près de la frontière menacée du Danube.",
  },
  "rome-division": {
    title: "L’Empire partagé",
    place: "Mediolanum (Milan)",
    summary:
      "À la mort de Théodose à Milan, en janvier 395, l’Empire passa à ses deux jeunes fils\u00a0: Arcadius à Constantinople, Honorius en Occident. Des empereurs s’étaient déjà partagé le pouvoir, mais cette fois la division fut durable\u00a0: plus jamais un seul souverain ne gouvernerait les deux moitiés.",
    context:
      "Les deux jeunes empereurs étaient dominés par leurs ministres, au premier rang desquels le général Stilicon en Occident. Les deux cours devinrent vite rivales, et l’Occident, plus pauvre et plus exposé, affronta presque seul les Goths, les Vandales et les Huns.",
    whyHere:
      "Milan avait remplacé Rome comme résidence impériale en Occident parce qu’elle se trouvait au pied des cols alpins, plus proche de plusieurs jours du Rhin et du Danube. La ligne de partage traversait les Balkans et suivait l’ancienne frontière entre l’Occident latin et l’Orient grec.",
  },
  "rome-sack-410": {
    title: "Alaric met Rome à sac",
    place: "Rome",
    summary:
      "Le 24 août 410, les Wisigoths d’Alaric entrèrent dans Rome par la porte Salaria et la pillèrent pendant trois jours. Aucun ennemi étranger n’avait pris la ville depuis quelque huit cents ans, et le choc retentit dans tout le monde romain.",
    context:
      "Alaric avait assiégé Rome à trois reprises pour obtenir des terres et un commandement pour son peuple, tandis que l’empereur Honorius refusait de traiter. Sa demi-sœur Galla Placidia fut emmenée en otage.",
    whyHere:
      "Rome n’était plus le siège du gouvernement\u00a0: Honorius se tenait à l’abri derrière les marais de Ravenne. En s’emparant de Portus, Alaric pouvait arrêter les navires de blé et affamer la grande ville jusqu’à la reddition.",
  },
  "rome-fall-476": {
    title: "Le dernier empereur d’Occident",
    place: "Ravenne",
    summary:
      "En 476, Odoacre, chef germanique de l’armée d’Italie, déposa le jeune empereur Romulus Augustule et renvoya les insignes impériaux à Constantinople. Il gouverna l’Italie en roi, et l’Empire romain d’Occident s’éteignit sans bruit.",
    context:
      "L’Occident avait déjà perdu la Bretagne, l’essentiel de la Gaule et de l’Espagne, et la riche Afrique, tombée aux mains des Vandales. L’Empire romain d’Orient survécut près de mille ans.",
    whyHere:
      "Protégée par des marais et des lagunes, reliée par mer à Constantinople grâce à son port de Classe, Ravenne était la capitale de l’Occident depuis 402. Ses défenses abritaient les empereurs, mais ne pouvaient sauver un empire à court de terres, d’argent et de soldats.",
  },
};
