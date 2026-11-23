import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "ww1-sarajevo": {
    title: "L’attentat de Sarajevo",
    place: "Pont Latin, Sarajevo, Bosnie",
    summary:
      "Le 28 juin 1914, Gavrilo Princip, un Serbe de Bosnie âgé de 19 ans, abat l’archiduc François-Ferdinand, héritier du trône d’Autriche-Hongrie, et son épouse Sophie. Une bombe lancée le matin même avait manqué sa cible, et la voiture du couple, engagée dans une mauvaise rue, s’arrêta juste devant l’assassin.",
    context:
      "L’Europe est divisée en deux camps armés\u00a0: d’un côté l’Allemagne et l’Autriche-Hongrie, de l’autre la France et la Russie, alliées, auxquelles le Royaume-Uni est lié par des ententes informelles. L’annexion de la Bosnie par l’Autriche en 1908 avait révolté les nationalistes serbes, et les jeunes conjurés de la Jeune Bosnie avaient été armés par la Main noire, une société secrète dirigée par des officiers serbes.",
    whyHere:
      "La Bosnie était le point de rencontre de trois mondes, Croates catholiques, Serbes orthodoxes et Bosniaques musulmans, à la frontière entre l’empire des Habsbourg et la Serbie. L’archiduc était venu assister à des manœuvres dans les montagnes voisines, et sa visite tombait le jour de la Vidovdan, anniversaire de la défaite serbe du Kosovo en 1389.",
  },
  "ww1-july-crisis": {
    title: "La crise de juillet",
    place: "Vienne, Berlin, Saint-Pétersbourg, Paris et Londres",
    summary:
      "Assurée du soutien inconditionnel de l’Allemagne, l’Autriche-Hongrie adresse à la Serbie un ultimatum le 23 juillet et lui déclare la guerre le 28, malgré une réponse largement conciliante. En une semaine, la Russie mobilise, l’Allemagne déclare la guerre à la Russie puis à la France, et le Royaume-Uni entre en guerre quand les troupes allemandes pénètrent en Belgique.",
    context:
      "Chaque état-major avait ses horaires ferroviaires de mobilisation et redoutait qu’un seul jour d’attente n’offre à l’ennemi une avance décisive. Les diplomates qui espéraient une nouvelle guerre balkanique limitée virent les alliances, les horaires et la peur de paraître faible changer une querelle régionale en guerre continentale en cinq semaines.",
    whyHere:
      "Vienne voulait écraser la Serbie, pôle d’attraction du nationalisme des Slaves du Sud au sein de son propre empire, tandis que la Russie se voulait protectrice des Slaves et convoitait les Détroits. L’Allemagne, prise en étau entre la France et la Russie, comptait vaincre à l’ouest avant que le géant russe, lent à se mettre en mouvement, n’ait rassemblé ses forces.",
    schematic: {
      steps: [
        "L’archiduc tué à Sarajevo",
        "Ultimatum autrichien à la Serbie",
        "La Russie mobilise",
        "L’Allemagne déclare la guerre à la Russie et à la France",
        "Belgique envahie, le Royaume-Uni entre en guerre",
      ],
    },
  },
  "ww1-belgium": {
    title: "L’invasion de la Belgique",
    place: "Liège, Belgique",
    summary:
      "Le 4 août 1914, les armées allemandes pénètrent dans la Belgique neutre pour contourner les forteresses françaises et envelopper Paris par le nord. Les forts de Liège tiennent onze jours avant d’être pulvérisés par des obusiers géants, et quelque 6 500 civils belges et français sont tués lors de représailles, à Dinant, à Louvain et ailleurs.",
    context:
      "Le plan conçu par Alfred von Schlieffen et remanié par Helmuth von Moltke devait vaincre la France en six semaines environ, avant de se retourner contre la Russie. Le Royaume-Uni garantissait la neutralité belge depuis 1839, et l’invasion fit entrer l’Empire britannique en guerre le jour même.",
    whyHere:
      "La frontière franco-allemande était courte et hérissée de forteresses, de Verdun à Belfort, adossées au massif des Vosges. Les plaines ouvertes de Belgique, sillonnées de voies ferrées et traversées par le couloir de la Meuse à Liège, offraient la seule route assez large pour qu’une immense armée puisse les déborder.",
    schematic: {
      steps: ["Peur d’une guerre sur deux fronts", "Battre la France en six semaines", "Passer par la Belgique neutre", "Le Royaume-Uni déclare la guerre"],
    },
  },
  "ww1-tannenberg": {
    title: "Tannenberg",
    place: "Hohenstein, Prusse-Orientale",
    summary:
      "La Russie envahit la Prusse-Orientale plus vite que l’Allemagne ne l’avait prévu, mais du 26 au 30 août 1914, Paul von Hindenburg et Erich Ludendorff encerclent la IIe armée du général Samsonov. Quelque 90 000 Russes sont faits prisonniers et Samsonov se donne la mort, tandis que la propagande allemande baptise la victoire du nom d’une défaite médiévale qu’elle prétend venger.",
    context:
      "La Russie avait attaqué tôt pour soulager la France, et deux corps d’armée allemands furent retirés de l’ouest au pire moment, affaiblissant la marche sur Paris. Sur le front de l’Est, la guerre resta une guerre de mouvement à travers la Pologne, la Galicie et les Carpates, avec des armées immenses et des pertes immenses.",
    whyHere:
      "Les lacs et les forêts de Mazurie séparaient les deux armées russes d’invasion, incapables de se soutenir. Les chemins de fer allemands permettaient de transférer rapidement les troupes de l’une à l’autre, et les ordres russes, envoyés par radio sans être chiffrés, indiquaient aux Allemands exactement où frapper.",
  },
  "ww1-marne": {
    title: "La Marne et la course à la mer",
    place: "Vallée de la Marne, à l’est de Paris",
    summary:
      "Début septembre 1914, l’aile droite allemande passe à l’est de Paris en exposant son flanc, et les forces françaises et britanniques contre-attaquent sur la Marne. Les Allemands se replient sur l’Aisne et s’enterrent\u00a0; chaque camp tente ensuite de déborder l’autre vers le nord, et en novembre les tranchées courent de la mer du Nord à la Suisse.",
    context:
      "Joffre avait gardé son sang-froid pendant la longue retraite, et Gallieni jeta dans la bataille la garnison de Paris, dont quelques milliers d’hommes acheminés, comme le veut la légende, par des taxis réquisitionnés. L’échec du plan allemand ouvrait une longue guerre d’usure qu’aucun état-major n’avait préparée, et à Noël certains soldats fraternisèrent brièvement dans le no man’s land.",
    whyHere:
      "La Marne et ses affluents coupaient l’axe de l’avance allemande juste à l’est de Paris, cœur du réseau ferré français qui permettait à Joffre de déplacer vite ses troupes. Au nord de l’Aisne, les crêtes de craie puis les plaines flamandes derrière la côte devinrent la ligne où des armées épuisées s’arrêtèrent et creusèrent.",
  },
  "ww1-colonial-troops": {
    title: "Les soldats des empires",
    place: "Marseille, France",
    summary:
      "Fin septembre 1914, les premières divisions indiennes débarquent à Marseille et sont envoyées en hâte dans les tranchées près d’Ypres. Au fil de la guerre, plus d’un million d’Indiens servent outre-mer, ainsi que quelque 200 000 tirailleurs sénégalais venus de toute l’Afrique occidentale, des Australiens et des Néo-Zélandais, des Canadiens, des Sud-Africains et des travailleurs d’Indochine et de Chine.",
    context:
      "La France et le Royaume-Uni puisèrent dans leurs empires soldats, travailleurs et matières premières, souvent par un recrutement très contraignant et parfois par la force. En 1918, le député sénégalais Blaise Diagne mena une campagne de recrutement en Afrique occidentale en échange de promesses de droits largement trahies après la guerre.",
    whyHere:
      "Marseille était la grande porte méditerranéenne de la France vers le canal de Suez, la route par laquelle les navires de troupes venus d’Inde, d’Indochine et d’Afrique orientale gagnaient l’Europe. De ses quais, la voie ferrée de la vallée du Rhône menait directement au front des Flandres.",
    schematic: {
      westLabel: "Europe",
      eastLabel: "Colonies",
      eastbound: ["officiers", "armes", "promesses de droits"],
      westbound: ["soldats", "travailleurs", "céréales", "matières premières"],
    },
  },
  "ww1-east-africa": {
    title: "La guerre en Afrique orientale",
    place: "Tanga, Afrique orientale allemande",
    summary:
      "En novembre 1914, un débarquement britannique et indien à Tanga est repoussé par la petite armée d’askaris africains et d’officiers allemands de Paul von Lettow-Vorbeck. Celui-ci mène ensuite une guérilla à travers l’actuelle Tanzanie, le Mozambique et la Zambie, et ne se rend que le 25 novembre 1918, deux semaines après l’armistice en Europe.",
    context:
      "Lettow-Vorbeck voulait immobiliser des troupes alliées loin de l’Europe, et il y parvint. Le vrai prix fut payé par les Africains\u00a0: des dizaines de milliers de porteurs moururent de maladie, de faim et d’épuisement, et les réquisitions apportèrent la famine aux villages traversés par les armées.",
    whyHere:
      "Tanga était le terminus côtier de la voie ferrée du Kilimandjaro, cible naturelle d’une invasion. À l’intérieur, les distances, la brousse, les saisons des pluies et la mouche tsé-tsé, qui tuait chevaux et bœufs, obligeaient à tout porter à dos d’homme\u00a0: la campagne fut une guerre de ravitaillement.",
  },
  "ww1-gallipoli": {
    title: "Les Dardanelles",
    place: "Anzac Cove, presqu’île de Gallipoli",
    summary:
      "Après l’échec de la flotte alliée à forcer les Dardanelles en mars 1915, des troupes britanniques, françaises, indiennes, australiennes et néo-zélandaises débarquent sur la presqu’île de Gallipoli le 25 avril. Les Ottomans tiennent les hauteurs, et après huit mois d’impasse les Alliés évacuent en janvier 1916, laissant plus de 100 000 morts dans les deux camps.",
    context:
      "L’Empire ottoman était entré en guerre aux côtés de l’Allemagne fin 1914, quand sa flotte avait bombardé les ports russes de la mer Noire. Winston Churchill soutenait ce plan pour l’abattre et ouvrir une route de ravitaillement vers la Russie\u00a0; Gallipoli devint au contraire un récit fondateur pour l’Australie, la Nouvelle-Zélande et la future république turque.",
    whyHere:
      "Les Dardanelles sont un détroit étroit, large d’à peine 1,2 kilomètre aux Narrows, gardé par des forts et des champs de mines. Les ravins abrupts et les crêtes de la presqu’île, dominant de minuscules plages, donnaient tous les avantages aux défenseurs qui tenaient les hauteurs.",
  },
  "ww1-armenian-genocide": {
    title: "Le génocide des Arméniens",
    place: "Anatolie orientale et désert syrien",
    summary:
      "À partir d’avril 1915, le gouvernement ottoman fait arrêter les élites arméniennes de Constantinople, puis déporte les Arméniens d’Anatolie vers le désert syrien. Les hommes sont souvent fusillés sur place\u00a0; femmes, enfants et vieillards meurent dans les marches de la mort ou dans les camps autour de Deir ez-Zor. La plupart des estimations font état d’environ un million de morts.",
    context:
      "Les dirigeants du Comité Union et Progrès au pouvoir, au premier rang desquels le ministre de l’Intérieur Talaat Pacha, accusèrent les Arméniens des défaites face à la Russie et profitèrent de la guerre pour les anéantir en tant que peuple. Les chrétiens assyriens et grecs furent eux aussi massacrés. La plupart des historiens qualifient ces faits de génocide, terme que l’État turc rejette toujours.",
    whyHere:
      "Les Arméniens vivaient depuis des millénaires sur les hauts plateaux de l’Anatolie orientale, devenus en 1915 la ligne de front face à la Russie. Les routes de déportation menaient vers le sud, par-delà le Taurus, jusqu’à l’Euphrate et au désert de Deir ez-Zor, où le manque de nourriture et d’eau devint en soi un moyen de tuer.",
  },
  "ww1-verdun": {
    title: "Verdun",
    place: "Verdun, Meuse",
    summary:
      "Le 21 février 1916, l’armée allemande déclenche un bombardement colossal sur les forts de Verdun et prend le fort de Douaumont en quelques jours. Sous Philippe Pétain, les Français tiennent en faisant tourner la plupart de leurs divisions dans la bataille, et en décembre ils ont repris l’essentiel du terrain\u00a0: environ 300 000 hommes sont morts en dix mois.",
    context:
      "Erich von Falkenhayn avait choisi un objectif que les Français ne pouvaient abandonner, dans l’espoir d’user leur armée, mais les pertes allemandes furent presque aussi lourdes. Pour la France, Verdun devint le symbole de toute la guerre, une bataille que presque chaque poilu a connue à un moment ou à un autre.",
    whyHere:
      "Verdun se trouvait dans un saillant sur la Meuse, entouré de forts sur des hauteurs boisées, exposé aux canons allemands sur trois côtés. Une seule route et un chemin de fer à voie étroite la reliaient à l’arrière\u00a0: la Voie sacrée, depuis Bar-le-Duc, parcourue par un camion toutes les quelques secondes, maintint la défense en vie.",
  },
  "ww1-jutland": {
    title: "Le Jutland et le blocus",
    place: "Mer du Nord, au large du Jutland",
    summary:
      "Le 31 mai 1916, la Grand Fleet britannique et la Hochseeflotte allemande s’affrontent au large du Jutland, seul grand choc de cuirassés de la guerre. Les Britanniques perdent davantage de navires et d’hommes, mais la flotte allemande rentre au port et n’en sort presque plus\u00a0: le blocus britannique de l’Allemagne tient.",
    context:
      "Le blocus privait l’Allemagne de vivres et d’engrais importés, et l’«\u00a0hiver des rutabagas\u00a0» de 1916-1917 fit souffrir de la faim ses villes. Faute de pouvoir briser le blocus avec ses navires de surface, l’Allemagne se tourna vers le sous-marin comme arme contre les routes maritimes britanniques.",
    whyHere:
      "La Grande-Bretagne barrait comme une digue les accès de l’Allemagne à l’océan\u00a0: la Manche pouvait être fermée à Douvres, et la route du nord, entre l’Écosse et la Norvège, surveillée depuis Scapa Flow. Les flottes sorties de la baie d’Héligoland et descendues des Orcades se rencontrèrent en haute mer au large du Jutland.",
  },
  "ww1-somme": {
    title: "La Somme",
    place: "Thiepval, Somme",
    summary:
      "Le 1er juillet 1916, après une semaine de bombardement, les troupes britanniques et françaises attaquent de part et d’autre de la Somme. Les barbelés sont souvent intacts, les abris allemands aussi\u00a0: l’armée britannique subit plus de 57 000 pertes, dont plus de 19 000 morts, la pire journée de son histoire. En novembre, les Alliés ont avancé d’une dizaine de kilomètres.",
    context:
      "L’offensive, conçue comme un coup franco-britannique commun, devait aussi soulager Verdun. En quatre mois et demi, elle fit plus d’un million de victimes dans les deux camps, et le 15 septembre les Britanniques engagèrent pour la première fois des chars au combat.",
    whyHere:
      "La Somme marquait la jonction des secteurs britannique et français, ce qui permettait aux deux armées d’attaquer côte à côte. Les Allemands tenaient les hauteurs de ces plateaux crayeux ondulés et avaient creusé dans la craie des abris profonds de dix mètres, à l’épreuve de la plupart des obus.",
  },
};
