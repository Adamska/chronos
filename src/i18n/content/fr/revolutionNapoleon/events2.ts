import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "napo-civil-code": {
    title: "Le Code civil et le sacre",
    place: "Notre-Dame de Paris",
    summary:
      "En mars 1804, la France se dote d’un Code civil unique qui remplace des centaines de coutumes locales par une seule loi sur la propriété, les contrats, les successions et la famille. Le 2 décembre, à Notre-Dame de Paris, Napoléon se couronne lui-même empereur des Français en présence du pape Pie VII.",
    context:
      "Le Code conserve des acquis essentiels de la Révolution : l’égalité devant la loi, le mariage civil et le divorce, la fin des droits féodaux et la garantie de la propriété. Il renforce aussi l’autorité du mari et du père et maintient les femmes dans une infériorité juridique. Porté par les armées françaises, il façonne le droit de la Belgique, de la Rhénanie, de l’Italie et de la Pologne, puis inspire des codes de l’Amérique latine au Québec.",
    whyHere:
      "La France d’Ancien Régime était partagée entre les pays de coutumes du Nord et les pays de droit écrit, d’origine romaine, du Sud, de part et d’autre d’une ligne allant à peu près du lac Léman à l’Atlantique vers La Rochelle. Seul un État centralisé, gouverné depuis Paris où le Conseil d’État rédigea le Code, pouvait imposer une même loi à toutes les provinces.",
  },
  "napo-trafalgar": {
    title: "La bataille de Trafalgar",
    place: "Au large du cap Trafalgar",
    summary:
      "Le 21 octobre 1805, une flotte britannique de 27 vaisseaux de ligne commandée par Horatio Nelson attaque la flotte franco-espagnole de 33 vaisseaux au large du cap Trafalgar, enfonçant sa ligne en deux colonnes. Les alliés perdent 22 navires, les Britanniques aucun, mais Nelson est tué d’une balle de mousquet à l’heure de la victoire.",
    context:
      "Napoléon avait massé une armée à Boulogne pour envahir l’Angleterre et envoyé l’amiral Villeneuve aux Antilles pour y attirer la Royal Navy. Le plan échoue, et l’armée a déjà pris la route de l’Est contre l’Autriche quand la bataille est livrée. Trafalgar assure à la Grande-Bretagne la maîtrise des mers jusqu’à la fin de la guerre et pousse Napoléon vers la guerre économique.",
    whyHere:
      "Le cap Trafalgar se trouve juste à l’ouest du détroit de Gibraltar, unique passage entre l’Atlantique et la Méditerranée. La flotte de Villeneuve, abritée dans le port voisin de Cadix, faisait route vers le détroit quand elle fut surprise en pleine mer, par vent faible et forte houle, ce qui laissa aux assaillants le temps de l’approcher.",
  },
  "napo-austerlitz": {
    title: "La bataille d’Austerlitz",
    place: "Plateau de Pratzen, près d’Austerlitz, en Moravie",
    summary:
      "Le 2 décembre 1805, un an jour pour jour après son sacre, Napoléon bat en Moravie les armées russe et autrichienne, plus nombreuses, d’Alexandre Ier et de François II. En dégarnissant son aile droite, il attire les alliés hors du plateau de Pratzen, puis s’empare des hauteurs et coupe leur armée en deux.",
    context:
      "Napoléon avait conduit la Grande Armée de la Manche au Danube en quelques semaines et contraint une armée autrichienne à capituler à Ulm en octobre. La paix de Presbourg enlève à l’Autriche la Vénétie et le Tyrol, et en 1806 le Saint-Empire romain germanique, millénaire, est dissous ; ses États de l’Ouest sont regroupés dans une Confédération du Rhin sous protection française.",
    whyHere:
      "Le plateau de Pratzen dominait les terres basses et marécageuses du ruisseau de Goldbach et les étangs gelés du sud. Napoléon étudia le terrain plusieurs jours à l’avance et abandonna délibérément les hauteurs, pour que les alliés les occupent puis en descendent contre sa droite, en apparence affaiblie.",
  },
  "napo-continental": {
    title: "Le Blocus continental",
    place: "Berlin",
    summary:
      "Par le décret de Berlin du 21 novembre 1806, pris après sa victoire sur la Prusse, Napoléon ferme aux navires et aux marchandises britanniques tous les ports sous contrôle français. Étendu à la Russie après Tilsit, puis à la plus grande partie de l’Europe, le blocus vise à asphyxier l’économie marchande britannique.",
    context:
      "Faute de pouvoir envahir la Grande-Bretagne après Trafalgar, Napoléon se tourne vers la guerre économique, et Londres réplique en bloquant la France et ses alliés. La contrebande prospère tandis que des ports comme Hambourg et Amsterdam dépérissent, et faire respecter le blocus entraîne la France au Portugal, en Espagne, en Hollande et dans les États pontificaux. La rupture de la Russie en 1810 mène à l’invasion de 1812.",
    whyHere:
      "La Grande-Bretagne vivait du commerce maritime, réexportant vers le continent le sucre et le café des colonies et ses propres cotonnades par les ports de la mer du Nord et de la Baltique. Pour verrouiller un littoral allant de la Baltique à l’Adriatique, Napoléon devait contrôler ou annexer chacun de ses ports, ce qui l’entraîna dans des guerres toujours plus lointaines.",
    schematic: {
      steps: [
        "La Grande-Bretagne maîtresse des mers",
        "Le décret de Berlin ferme les ports",
        "Contrebande et pénuries se répandent",
        "La Russie rompt avec le blocus",
        "L’invasion de la Russie",
      ],
    },
  },
  "napo-tilsit": {
    title: "Iéna et les traités de Tilsit",
    place: "Tilsit, sur le Niémen",
    summary:
      "Après avoir anéanti l’armée prussienne à Iéna et Auerstaedt en octobre 1806 et battu les Russes à Friedland en juin 1807, Napoléon rencontre le tsar Alexandre Ier sur un radeau ancré au milieu du Niémen, à Tilsit. Les traités de juillet amputent la Prusse de la moitié de son territoire, créent le royaume de Westphalie et le duché de Varsovie, et associent la Russie au blocus de la Grande-Bretagne.",
    context:
      "La Prusse était entrée en guerre presque seule en 1806 et s’était effondrée en quelques semaines ; Napoléon entre à Berlin le 27 octobre. La bataille d’Eylau, en février 1807, n’est qu’un sanglant match nul, avant que Friedland ne contraigne le tsar à négocier. Tilsit marque l’apogée de la puissance de Napoléon sur le continent, même si l’alliance russe repose sur bien peu de confiance.",
    whyHere:
      "Le Niémen marquait la limite de l’Empire russe : un radeau au milieu du fleuve permettait aux deux empereurs de se rencontrer d’égal à égal, en terrain neutre. Tilsit se trouvait là où la route de Königsberg franchissait le fleuve, à la charnière entre les plaines baltes de Prusse-Orientale et la Lituanie russe.",
  },
  "napo-peninsular": {
    title: "La guerre d’Espagne",
    place: "Madrid",
    summary:
      "En 1808, Napoléon contraint les Bourbons d’Espagne à abdiquer et fait de son frère Joseph le roi d’Espagne. Le soulèvement madrilène du Dos de Mayo, écrasé dans le sang, ouvre six années de guerre au cours desquelles armées et guérilleros espagnols, Portugais et un corps britannique commandé par Arthur Wellesley, futur duc de Wellington, immobilisent des centaines de milliers de soldats français.",
    context:
      "La guerre est née de la volonté de fermer le Portugal, le plus ancien allié de la Grande-Bretagne, au commerce britannique. La capitulation d’une armée française à Bailén, en juillet 1808, brise le mythe de l’invincibilité française, et « l’ulcère espagnol » saigne l’Empire en hommes et en argent. En Amérique espagnole, l’effondrement de l’autorité royale ouvre la voie aux guerres d’indépendance.",
    whyHere:
      "Le plateau ibérique est haut, sec et découpé de sierras : les grandes armées peinaient à y vivre sur le pays, tandis que les guérilleros connaissaient chaque col. Wellington tenait le Portugal derrière les lignes fortifiées de Torres Vedras, au nord de Lisbonne, ravitaillé par la Royal Navy, alors que les Français dépendaient de longues routes exposées à travers les Pyrénées.",
  },
  "napo-wagram": {
    title: "La bataille de Wagram",
    place: "Deutsch-Wagram, plaine du Marchfeld",
    summary:
      "Les 5 et 6 juillet 1809, Napoléon bat l’armée autrichienne de l’archiduc Charles dans la plaine du Marchfeld, au nord-est de Vienne, lors de l’une des plus grandes batailles jamais livrées jusque-là, avec quelque 300 000 combattants. Le traité de Schönbrunn retire encore des territoires à l’Autriche, dont son littoral adriatique, et en 1810 Napoléon épouse l’archiduchesse Marie-Louise.",
    context:
      "L’Autriche était repartie en guerre en 1809, espérant profiter des difficultés de Napoléon en Espagne et provoquer un soulèvement national allemand. En mai, les Français avaient été repoussés à Essling, premier grand revers personnel de Napoléon. Wagram rétablit sa suprématie, mais au prix de lourdes pertes.",
    whyHere:
      "Le Danube, large et rapide en aval de Vienne, séparait les Français, maîtres de la ville, des Autrichiens déployés dans la plaine ouverte au nord. Napoléon fit de la grande île boisée de Lobau une base fortifiée et jeta de nuit des ponts sur le dernier bras, franchissant le fleuve là où il se divise en plusieurs chenaux.",
  },
  "napo-russia": {
    title: "La campagne de Russie",
    place: "Borodino",
    summary:
      "En juin 1812, Napoléon franchit le Niémen avec quelque 450 000 hommes en première ligne, la plus grande armée que l’Europe ait jamais vue. Après la boucherie de la Moskova, à Borodino, le 7 septembre, il entre dans Moscou, qui brûle autour de lui, puis entame en octobre une retraite qui s’achève en catastrophe au passage de la Bérézina, fin novembre.",
    context:
      "Les armées russes reculent en évitant la bataille et en dévastant le pays, jusqu’à ce que Koutouzov livre bataille à Borodino, à environ 120 kilomètres à l’ouest de Moscou. Alexandre Ier refuse de négocier, même après la chute de la ville. La faim, le froid, le typhus et les raids cosaques anéantissent la Grande Armée, et seule une fraction des hommes entrés en Russie repasse le Niémen en décembre.",
    whyHere:
      "Borodino se trouvait sur la route de Smolensk, principal chemin vers Moscou, où des ruisseaux et de basses collines offraient à Koutouzov une ligne de défense en travers de la route de l’envahisseur. L’immensité des distances, quelque 900 kilomètres de mauvaises routes du Niémen à Moscou, rendait impossible le ravitaillement d’une telle armée, et un hiver précoce changea la retraite en désastre.",
    schematic: {
      steps: [
        "La Russie quitte le blocus",
        "La Grande Armée franchit le Niémen",
        "Moscou brûle, pas de paix",
        "La retraite d’hiver anéantit l’armée",
      ],
    },
  },
  "napo-leipzig": {
    title: "La bataille de Leipzig",
    place: "Leipzig, en Saxe",
    summary:
      "Du 16 au 19 octobre 1813, les armées de la Russie, de la Prusse, de l’Autriche et de la Suède battent Napoléon à Leipzig lors de la bataille des Nations, qui met aux prises quelque 500 000 soldats : la plus grande bataille livrée en Europe avant la Première Guerre mondiale. Les Français refluent jusqu’au Rhin, et l’empire allemand de Napoléon s’effondre.",
    context:
      "Après le désastre russe, la Prusse se soulève contre la France au début de 1813, et l’Autriche rejoint la coalition en août. Napoléon lève une nouvelle armée de jeunes conscrits et l’emporte à Lützen, Bautzen et Dresde, sans parvenir à briser l’alliance. En 1814, les alliés envahissent la France et prennent Paris ; Napoléon abdique à Fontainebleau en avril et reçoit la souveraineté de la petite île d’Elbe.",
    whyHere:
      "Leipzig, ville marchande au carrefour des routes de la plaine saxonne, était le pivot des communications de Napoléon avec la France. La tenir lui permettait de frapper chacune des armées alliées qui convergeaient, mais le terrain découvert leur permit aussi de l’enserrer sur trois côtés, et quand un pont sur l’Elster sauta trop tôt, des milliers de soldats français furent pris au piège.",
  },
  "napo-vienna": {
    title: "Le congrès de Vienne",
    place: "Vienne",
    summary:
      "De septembre 1814 à juin 1815, les puissances victorieuses redessinent à Vienne la carte de l’Europe. La Russie obtient l’essentiel de la Pologne, la Prusse une grande partie de la Saxe et la Rhénanie, l’Autriche retrouve l’Italie du Nord, la Belgique et les Pays-Bas sont réunis en un seul royaume, et une Confédération germanique de 39 États remplace le Saint-Empire.",
    context:
      "Metternich pour l’Autriche, Castlereagh pour la Grande-Bretagne, le tsar Alexandre Ier, Hardenberg pour la Prusse et Talleyrand pour la France négocient un équilibre des puissances qui doit empêcher tout État de dominer le continent. Le règlement ignore bien des aspirations nationales, mais aucune guerre européenne générale n’éclate plus avant 1914. Le congrès condamne aussi, dans son principe, la traite atlantique.",
    whyHere:
      "Vienne, capitale des Habsbourg sur le Danube, se trouvait au point de rencontre des mondes allemand, italien, slave et hongrois, et l’Autriche avait le plus à perdre de tout remaniement de l’Europe centrale. Accueillir le congrès permit à Metternich d’en régler l’ordre du jour tandis que les cours d’Europe se divertissaient dans ses palais et ses salles de bal.",
    schematic: {
      steps: [
        "Napoléon vaincu et exilé",
        "Les grandes puissances réunies à Vienne",
        "Des États tampons encerclent la France",
        "Un siècle sans guerre générale",
      ],
    },
  },
  "napo-waterloo": {
    title: "Les Cent-Jours et Waterloo",
    place: "Waterloo, au sud de Bruxelles",
    summary:
      "Évadé de l’île d’Elbe, Napoléon débarque à Golfe-Juan le 1er mars 1815 et gagne Paris sans tirer un coup de feu, les troupes envoyées pour l’arrêter se ralliant à lui. Le 18 juin, au sud de Bruxelles, l’armée de Wellington tient sa crête tout l’après-midi jusqu’à ce que les Prussiens de Blücher tombent sur le flanc français, et la dernière armée de Napoléon se disloque.",
    context:
      "Le roi Louis XVIII s’enfuit à Gand, et les puissances réunies à Vienne mettent Napoléon hors la loi. Il se jette sur la Belgique pour battre les armées britannique et prussienne avant l’arrivée des Autrichiens et des Russes, et défait les Prussiens à Ligny le 16 juin. Quatre jours après Waterloo, il abdique pour la seconde fois.",
    whyHere:
      "La route de Bruxelles franchissait une crête basse au Mont-Saint-Jean, dont le versant arrière abritait l’infanterie de Wellington des canons français, tandis que les fermes fortifiées d’Hougoumont et de la Haye-Sainte servaient de bastions en avant. Les fortes pluies de la nuit détrempèrent le sol et retardèrent l’attaque française jusqu’à la fin de la matinée, laissant aux Prussiens le temps d’arriver de Wavre.",
  },
  "napo-saint-helena": {
    title: "La mort à Sainte-Hélène",
    place: "Longwood, Sainte-Hélène",
    summary:
      "Après s’être rendu aux Britanniques en juillet 1815, Napoléon est exilé à Sainte-Hélène, dans l’Atlantique Sud, où il vit sous surveillance à Longwood House. Il y meurt le 5 mai 1821, à 51 ans, très probablement d’un cancer de l’estomac.",
    context:
      "En exil, il dicte ses souvenirs à des compagnons comme Las Cases, dont le Mémorial de Sainte-Hélène, publié en 1823, contribue à forger la légende d’un Napoléon héritier et défenseur de la Révolution. Ses cendres sont ramenées à Paris en 1840 et déposées sous le dôme des Invalides.",
    whyHere:
      "Sainte-Hélène se trouve à quelque 1 900 kilomètres des côtes africaines, l’une des îles habitées les plus isolées du globe, et servait d’escale aux navires de la Compagnie des Indes orientales. Après l’évasion de l’île d’Elbe, les Britanniques la choisirent parce qu’aucun secours ne pouvait l’approcher sans être vu, et ils mirent garnison sur l’île comme sur la lointaine Ascension.",
  },
};
