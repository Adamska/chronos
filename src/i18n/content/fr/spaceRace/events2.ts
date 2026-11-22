import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "cold-u2-incident": {
    title: "L’incident de l’U-2",
    place: "Près de Sverdlovsk, RSFS de Russie",
    summary:
      "Le 1er mai 1960, un missile sol-air soviétique abattit un avion espion U-2 de la CIA piloté par Francis Gary Powers. La version officielle de Washington s’effondra lorsque Khrouchtchev présenta le pilote vivant, ce qui fit échouer le sommet de Paris deux semaines plus tard.",
    context:
      "Avant l’avènement des satellites de reconnaissance, les survols à haute altitude étaient le seul moyen d’observer l’intérieur fermé de l’Union soviétique. Powers fut échangé en 1962 contre l’espion soviétique Rudolf Abel sur le pont de Glienicke, entre Berlin-Ouest et Potsdam.",
    whyHere:
      "Parti de Peshawar, au Pakistan, Powers traversait toute l’Union soviétique en direction de Bodø, en Norvège, en survolant Tiouratam et le cœur industriel de l’Oural. Sverdlovsk, au plus profond du territoire, était défendue par des batteries de missiles S-75, dont l’une finit par atteindre l’avion à son altitude de croisière.",
  },
  "cold-vostok-1": {
    title: "Vostok 1 : Gagarine en orbite",
    place: "Cosmodrome de Baïkonour, RSS kazakhe",
    summary:
      "Le 12 avril 1961, Youri Gagarine devint le premier homme dans l’espace, accomplissant une seule orbite en 108 minutes environ. Il s’éjecta de sa capsule pendant la descente et toucha terre séparément, en parachute, dans la région de Saratov.",
    context:
      "Survenu cinq jours avant l’échec du débarquement de la baie des Cochons, le vol fut un second coup de propagande soviétique. Kennedy répliqua en mai 1961 en engageant les États-Unis à poser un homme sur la Lune avant la fin de la décennie.",
    whyHere:
      "Lancé depuis le même pas de tir que Spoutnik, Vostok suivit une orbite qui lui permettait de redescendre en territoire soviétique plutôt qu’en mer. Une récupération dans les vastes plaines de la basse Volga convenait à un pays dépourvu d’une flotte mondiale de navires de récupération.",
  },
  "cold-berlin-wall": {
    title: "L’érection du mur de Berlin",
    place: "Berlin, porte de Brandebourg",
    summary:
      "Dans la nuit du 13 août 1961, les forces est-allemandes bouclèrent la frontière entre les secteurs avec des barbelés, bientôt remplacés par du béton. Le mur finit par encercler entièrement Berlin-Ouest.",
    context:
      "Des millions d’Allemands de l’Est, souvent jeunes et qualifiés, avaient gagné l’Ouest depuis 1949, saignant l’économie est-allemande. Moscou approuva la fermeture comme le moyen le moins risqué d’enrayer l’exode sans affronter les garnisons occidentales.",
    whyHere:
      "Berlin-Ouest était la seule brèche de la frontière interallemande, car une limite urbaine ouverte permettait à quiconque de prendre le S-Bahn vers les secteurs occidentaux. Colmater cette brèche impliquait d’emmurer une ville entière, sur un périmètre d’environ 155 kilomètres.",
  },
  "cold-tsar-bomba": {
    title: "La Tsar Bomba",
    place: "Soukhoï Nos, Nouvelle-Zemble",
    summary:
      "Le 30 octobre 1961, un bombardier soviétique largua au-dessus de l’archipel arctique de la Nouvelle-Zemble une bombe à hydrogène d’une puissance d’environ 50 mégatonnes. Elle demeure l’explosion la plus puissante jamais provoquée par l’homme.",
    context:
      "L’essai intervint alors que l’Union soviétique rompait, en pleine crise de Berlin, un moratoire informel sur les essais nucléaires. Trop lourde pour constituer une arme utilisable, la bombe servit avant tout de démonstration.",
    whyHere:
      "La Nouvelle-Zemble est un chapelet d’îles arctiques isolé entre la mer de Barents et la mer de Kara, presque désert depuis le déplacement de ses habitants nénètses. Son isolement et sa proximité avec les bases de bombardiers de la presqu’île de Kola en firent le principal site soviétique des essais de forte puissance.",
  },
  "cold-telstar": {
    title: "Telstar relie deux continents",
    place: "Station terrienne d’Andover, Maine",
    summary:
      "Lancé en juillet 1962, le satellite Telstar d’AT&T et des Bell Labs relaya les premières images de télévision en direct à travers l’Atlantique. Pour la première fois, Européens et Américains se virent en temps réel.",
    context:
      "Telstar fut une vitrine civile au cours d’une année dominée par la surenchère nucléaire. On impute sa panne, au début de 1963, aux radiations de l’essai nucléaire à haute altitude Starfish Prime, déclenché la veille de son lancement.",
    whyHere:
      "L’orbite basse de Telstar n’offrait que de brèves fenêtres durant lesquelles les deux rives de l’océan le voyaient simultanément. Les stations au sol se faisaient face de part et d’autre de l’Atlantique Nord, dans une vallée rurale de l’ouest du Maine et sur les côtes de Bretagne et de Cornouailles.",
  },
  "cold-cuban-missile-crisis": {
    title: "La crise des missiles de Cuba",
    place: "San Cristóbal, Pinar del Río, Cuba",
    summary:
      "En octobre 1962, des photographies prises par des U-2 américains révélèrent des sites de missiles soviétiques à moyenne portée en construction dans l’ouest de Cuba. Après une « quarantaine » navale et treize jours de crise, Khrouchtchev accepta de retirer les missiles.",
    context:
      "Moscou cherchait à compenser la supériorité américaine en missiles à longue portée, ainsi que les missiles Jupiter déployés en Turquie et en Italie. Par un accord secret parallèle, les États-Unis retirèrent ensuite les Jupiter de Turquie.",
    whyHere:
      "Cuba se trouve à environ 145 kilomètres de Key West : des missiles à moyenne portée installés là pouvaient atteindre une grande partie des États-Unis presque sans préavis. Ils arriveraient en outre par le sud, dans le dos des radars d’alerte avancée tournés vers l’Arctique.",
    schematic: {
      steps: ["Missiles acheminés vers Cuba", "Un U-2 repère les sites de lancement", "Quarantaine navale", "Retrait des missiles"],
    },
  },
  "cold-kourou": {
    title: "Ouverture du Centre spatial guyanais",
    place: "Kourou, Guyane",
    summary:
      "En avril 1968, la France lança de Kourou sa première fusée, une fusée-sonde Véronique. Le site devint par la suite le port spatial de l’Europe et, à partir de 1979, la base de la famille Ariane.",
    context:
      "L’indépendance algérienne contraignit la France à abandonner sa base de lancement saharienne d’Hammaguir. En 1964, le gouvernement choisit la Guyane pour s’assurer un accès à l’espace indépendant, hors de l’orbite des deux superpuissances.",
    whyHere:
      "Situé vers 5 degrés de latitude nord, Kourou est proche de l’équateur, là où la rotation terrestre apporte le plus de vitesse et où l’orbite géostationnaire est la moins coûteuse à atteindre. L’océan ouvert au nord et à l’est permet aux fusées d’emprunter des trajectoires polaires comme équatoriales, loin des terres habitées.",
  },
  "cold-apollo-11": {
    title: "Le décollage d’Apollo 11",
    place: "Complexe de lancement 39A, centre spatial Kennedy, Floride",
    summary:
      "Une Saturn V emporta Neil Armstrong, Buzz Aldrin et Michael Collins le 16 juillet 1969 ; quatre jours plus tard, Armstrong et Aldrin se posaient sur la Lune. Les États-Unis avaient tenu l’échéance fixée par Kennedy.",
    context:
      "L’alunissage mit de fait un terme à la course que l’Union soviétique menait depuis Spoutnik, tandis que sa propre fusée lunaire N1 échouait à répétition. Moins de six ans plus tard, les rivaux se retrouveraient en orbite lors de la mission Apollo-Soyouz.",
    whyHere:
      "Merritt Island permettait à la fusée géante de s’élever vers l’est au-dessus de l’Atlantique, ses étages usagés retombant en mer. Trop volumineux pour la route comme pour le rail, le premier étage de la Saturn V voyageait par barge depuis son usine, près de La Nouvelle-Orléans, jusqu’au cap.",
  },
  "cold-afghanistan": {
    title: "L’invasion soviétique de l’Afghanistan",
    place: "Kaboul, Afghanistan",
    summary:
      "Les troupes soviétiques entrèrent en Afghanistan en décembre 1979, tuèrent le président Hafizullah Amin et installèrent Babrak Karmal au pouvoir. Une décennie de guerre contre des moudjahidines armés via le Pakistan s’acheva par le retrait soviétique en février 1989.",
    context:
      "L’invasion mit fin à la détente, provoqua le boycott des Jeux olympiques de 1980 et valut à la résistance un important soutien clandestin américain, saoudien et pakistanais. Le coût et les pertes de la guerre aggravèrent la crise de l’État soviétique finissant.",
    whyHere:
      "L’Afghanistan bordait l’Asie centrale soviétique le long de l’Amou-Daria, et les convois soviétiques dépendaient d’une route unique franchissant l’Hindou Kouch par le tunnel de Salang. Les montagnes favorisaient la guérilla, tandis que la longue frontière poreuse avec le Pakistan lui offrait refuge et ravitaillement.",
  },
  "cold-fall-of-berlin-wall": {
    title: "La chute du mur de Berlin",
    place: "Point de passage de la Bornholmer Straße, Berlin",
    summary:
      "Dans la nuit du 9 novembre 1989, après l’annonce confuse d’une nouvelle réglementation des voyages, la foule contraignit les gardes est-allemands à ouvrir les postes-frontières. L’Allemagne fut réunifiée moins d’un an plus tard.",
    context:
      "Gorbatchev avait fait savoir que Moscou ne maintiendrait plus ses alliés au pouvoir par la force. En quelques mois, des révolutions balayèrent la Pologne, la Hongrie, la Tchécoslovaquie, la Bulgarie et la Roumanie.",
    whyHere:
      "La première brèche s’ouvrit sur la frontière elle-même : la Hongrie démantela sa clôture avec l’Autriche, et les Allemands de l’Est s’engouffrèrent dans ce passage. À la Bornholmer Straße, où un pont enjambait les voies ferrées, la foule grossit tant que l’officier responsable finit par ouvrir la barrière.",
    schematic: {
      steps: ["La Hongrie ouvre sa frontière", "Exode par la Hongrie", "Manifestations de Leipzig", "Annonce bâclée", "Le Mur s’ouvre"],
    },
  },
  "cold-soviet-dissolution": {
    title: "La dissolution de l’Union soviétique",
    place: "Le Kremlin, Moscou",
    summary:
      "Après l’échec d’un putsch des conservateurs en août 1991, les républiques proclamèrent leur indépendance l’une après l’autre. Gorbatchev démissionna le 25 décembre et l’Union soviétique cessa officiellement d’exister le lendemain.",
    context:
      "Les accords de Minsk-Belovej du 8 décembre, signés par la Russie, l’Ukraine et la Biélorussie, remplacèrent l’Union par une lâche Communauté des États indépendants. Avec elle s’éteignit l’ordre bipolaire qui structurait la politique mondiale depuis 1945.",
    whyHere:
      "L’Union se fractura le long des frontières internes de ses quinze républiques, devenues du jour au lendemain des frontières internationales. Baïkonour et Semipalatinsk échurent à un Kazakhstan indépendant, dont les dirigeants avaient déjà fermé le polygone d’essais en août 1991, et la Russie dut négocier un bail pour continuer à y lancer ses fusées.",
  },
};
