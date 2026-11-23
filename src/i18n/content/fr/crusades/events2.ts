import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "crusade-saladin-egypt": {
    title: "Saladin prend l’Égypte",
    place: "Le Caire, Égypte",
    summary:
      "Envoyé en Égypte par Nur al-Din avec son oncle Shirkuh, le jeune officier kurde Saladin devient en 1169 le vizir du dernier calife fatimide. En 1171, il abolit le califat chiite des Fatimides, rétablit l’autorité du calife sunnite de Bagdad et fait de l’Égypte la base d’une nouvelle dynastie, les Ayyoubides.",
    context:
      "Tout au long des années 1160, le roi Amaury de Jérusalem et Nur al-Din s’étaient disputé une Égypte en pleine décomposition. Après la mort de Nur al-Din en 1174, Saladin s’empare de Damas puis, au cours de la décennie suivante, d’Alep et d’une grande partie de la haute Mésopotamie, encerclant les États latins.",
    whyHere:
      "La vallée du Nil offrait les terres les plus riches du Moyen-Orient, et son blé, son or et sa flotte pouvaient financer une guerre à une échelle hors de portée de la seule Syrie. Avec l’Égypte et la Syrie dans une même main, le royaume franc se retrouvait pris comme dans un étau.",
    schematic: {
      steps: ["L’Égypte fatimide s’affaiblit", "Francs et Syriens se disputent Le Caire", "Saladin devient vizir", "Le califat fatimide est aboli", "Égypte et Syrie unies"],
    },
  },
  "crusade-acre-trade": {
    title: "Des marchands entre les armées",
    place: "Acre, royaume de Jérusalem",
    summary:
      "En 1184, le pèlerin andalou Ibn Jubayr voyage avec une caravane de Damas à Acre, le port le plus actif de la côte franque, et rentre chez lui sur un navire génois. Il s’étonne que le commerce circule librement entre terres musulmanes et chrétiennes alors même que leurs armées se combattent.",
    context:
      "Les caravanes acquittaient des droits de douane à Acre comme à Damas, les marchands italiens achetaient épices et soieries d’Orient pour l’Europe, et les seigneurs francs cultivaient la canne à sucre et la raffinaient dans des moulins le long de la côte. Les idées circulaient aussi, plus lentement\u00a0: la science arabe gagna l’Europe surtout par l’Espagne et la Sicile, mais à Antioche aussi des savants traduisirent en latin des traités médicaux arabes.",
    whyHere:
      "Acre possédait le meilleur port abrité de la côte au sud de Tyr et se trouvait au débouché des routes de Damas et de la vallée du Jourdain. Elle était ainsi le point de rencontre naturel entre les pistes caravanières du désert et les routes maritimes des flottes italiennes.",
    schematic: {
      westLabel: "Europe latine",
      eastLabel: "Syrie et Égypte",
      eastbound: ["draps de laine", "bois", "fer", "argent"],
      westbound: ["sucre", "poivre", "soie", "coton", "alun"],
    },
  },
  "crusade-hattin": {
    title: "Les cornes de Hattin",
    place: "Cornes de Hattin, Galilée",
    summary:
      "Le 4 juillet 1187, l’armée de Saladin anéantit l’armée du royaume de Jérusalem, épuisée et assoiffée, sur les pentes d’un volcan éteint dominant le lac de Tibériade. Le roi Guy de Lusignan est capturé avec la relique de la Vraie Croix\u00a0; Saladin tue de sa main Renaud de Châtillon et fait exécuter les Templiers et Hospitaliers prisonniers.",
    context:
      "Renaud avait pillé des caravanes en violation des trêves et lancé des navires jusque sur la mer Rouge, menaçant la route du pèlerinage de La Mecque. Saladin assiège Tibériade pour attirer les Francs hors de leurs places, et le roi Guy, contre l’avis du comte Raymond de Tripoli, traverse un plateau aride en pleine chaleur d’été.",
    whyHere:
      "Entre Séphorie, où les Francs campaient près de bonnes sources, et le lac de Tibériade s’étendaient quelque 25 kilomètres de plateau desséché. Les troupes de Saladin tenaient l’eau, mirent le feu aux broussailles et encerclèrent l’armée assoiffée sur les deux collines de Hattin, en vue du lac qu’elle n’atteignit jamais.",
    schematic: {
      steps: ["Renaud rompt la trêve", "Saladin assiège Tibériade", "Les Francs traversent un plateau aride", "L’armée encerclée sans eau", "Le royaume privé de défenseurs"],
    },
  },
  "crusade-jerusalem-1187": {
    title: "Saladin entre à Jérusalem",
    place: "Jérusalem",
    summary:
      "Après Hattin, Acre et presque toute la côte tombent en quelques semaines. Défendue par Balian d’Ibelin avec peu de soldats, Jérusalem capitule le 2 octobre 1187\u00a0: ses chrétiens peuvent se racheter, et beaucoup de ceux qui ne le peuvent pas sont libérés par Saladin et son frère al-Adil, même si des milliers sont réduits en esclavage.",
    context:
      "Le contraste avec le massacre de 1099 fut remarqué dès l’époque et grandit la réputation de Saladin en Europe comme dans le monde islamique. Le Dôme du Rocher et al-Aqsa furent rendus au culte musulman, et la chaire de Nur al-Din enfin installée.",
    whyHere:
      "Sans armée de campagne pour la secourir ni port à elle, Jérusalem, perchée dans ses collines, ne pouvait pas tenir. Seule Tyr, protégée par sa chaussée et par la mer, résista à Saladin et devint la tête de pont de la croisade suivante.",
  },
  "crusade-acre-1191": {
    title: "Le siège d’Acre",
    place: "Acre",
    summary:
      "En 1189, le roi Guy, libéré par Saladin, assiège Acre et se retrouve bientôt encerclé à son tour par l’armée de Saladin, dans un double siège qui dure près de deux ans. L’arrivée de Philippe Auguste et de Richard Cœur de Lion force la ville à capituler en juillet 1191\u00a0; les négociations sur la rançon traînant, Richard fait tuer quelque 2\u00a0700 prisonniers musulmans hors des murs.",
    context:
      "La troisième croisade répond à la perte de Jérusalem avec les trois plus grands souverains d’Europe. L’empereur Frédéric Barberousse traverse l’Anatolie à la tête d’une immense armée mais se noie dans le Saleph en 1190, et la plupart de ses hommes rebroussent chemin. En route, Richard s’empare de Chypre, qui restera latine pendant près de quatre siècles.",
    whyHere:
      "Le port d’Acre était la porte du royaume et le seul capable de débarquer une armée royale avec ses chevaux et ses engins de siège. Ses murailles fermaient une petite presqu’île\u00a0: les assiégeants se retranchèrent côté terre tandis que les flottes se disputaient les approches maritimes.",
  },
  "crusade-jaffa": {
    title: "Le traité de Jaffa",
    place: "Jaffa",
    summary:
      "Vainqueur de Saladin à Arsouf en 1191, deux fois parvenu à une journée de marche de Jérusalem, Richard juge qu’il pourrait prendre la ville mais non la garder. Le 2 septembre 1192, les deux chefs concluent une trêve de trois ans et huit mois\u00a0: les Francs gardent la côte de Tyr à Jaffa, et les pèlerins chrétiens désarmés peuvent se rendre à Jérusalem.",
    context:
      "Des mois de combats et de marchandages avaient fait naître un respect mutuel\u00a0; Richard proposa même de marier sa sœur Jeanne à al-Adil, le frère de Saladin. Richard reprend la mer en octobre et se fait capturer en Autriche, tandis que Saladin meurt à Damas en mars suivant.",
    whyHere:
      "Jaffa était le port le plus proche de Jérusalem, le point de débarquement des pèlerins et la base de toute marche vers les monts de Judée. La trêve laissait aux Francs une bande côtière ravitaillable par la mer, tandis que l’intérieur et la Ville sainte restaient à Saladin.",
  },
  "crusade-constantinople": {
    title: "Le sac de Constantinople",
    place: "Constantinople",
    summary:
      "Le 12 avril 1204, l’armée de la quatrième croisade, qui devait partir pour l’Égypte, prend d’assaut Constantinople, la plus grande ville chrétienne du monde. Pendant trois jours, les croisés pillent églises, palais et maisons, puis couronnent Baudouin de Flandre premier empereur latin.",
    context:
      "Incapable de payer à Venise la flotte commandée, l’armée attaque d’abord pour les Vénitiens la ville chrétienne de Zara, puis épouse la cause du prince exilé Alexis Ange, qui promet argent et troupes. Quand il ne paie pas et périt assassiné, les croisés se retournent contre la ville elle-même. Byzance ne reprendra sa capitale qu’en 1261.",
    whyHere:
      "Constantinople tenait le Bosphore, charnière entre l’Europe et l’Asie, entre la mer Noire et la Méditerranée. Ses murailles terrestres n’avaient jamais été percées, mais les remparts maritimes plus bas de la Corne d’Or étaient directement accessibles aux navires vénitiens munis de passerelles d’assaut.",
    schematic: {
      steps: ["Les croisés doivent leurs navires à Venise", "Zara attaquée pour payer la dette", "Un prince exilé promet de payer", "Impayée, l’armée prend la ville", "Empire latin, empire maritime vénitien"],
    },
  },
  "crusade-albigensian": {
    title: "La croisade contre les cathares",
    place: "Béziers, Languedoc",
    summary:
      "En 1209, le pape Innocent III retourne la croisade contre les cathares, chrétiens dualistes condamnés comme hérétiques, et contre leurs protecteurs du midi de la France. Les barons du Nord prennent Béziers d’assaut et massacrent ses habitants, et vingt ans de guerre finissent par placer le Languedoc sous la couronne de France.",
    context:
      "Les privilèges autrefois promis pour Jérusalem récompensaient désormais la guerre contre des chrétiens d’Europe. Sur les bords de la Baltique, croisés et chevaliers Teutoniques conquéraient pendant ce temps les Lives et les Prussiens païens, s’y taillant des États bien à eux.",
    whyHere:
      "Le Languedoc, entre le Rhône et les Pyrénées, était un pays riche de villes et de commerce, dont les comtes de Toulouse regardaient autant vers l’Aragon que vers Paris. La croisade offrit aux barons du Nord et au roi de France une porte d’entrée dans une région qu’ils n’avaient jamais vraiment tenue.",
  },
  "crusade-frederick": {
    title: "Jérusalem rendue par traité",
    place: "Église du Saint-Sépulcre, Jérusalem",
    summary:
      "Excommunié pour avoir retardé sa croisade, l’empereur Frédéric II débarque à Acre en 1228 et négocie au lieu de combattre. En février 1229, le sultan al-Kamil d’Égypte lui rend Jérusalem, Bethléem et Nazareth pour dix ans, et en mars Frédéric porte sa couronne dans l’église du Saint-Sépulcre.",
    context:
      "Al-Kamil, brouillé avec ses parents ayyoubides de Damas et échaudé par la cinquième croisade, qui avait occupé Damiette de 1219 à 1221, préfère un accord à une nouvelle guerre. Le traité laisse l’esplanade du Temple aux musulmans et ne satisfait guère\u00a0: le pape le condamne, et beaucoup de musulmans y voient une trahison. Jérusalem est perdue pour de bon en 1244.",
    whyHere:
      "Les murailles de Jérusalem avaient été abattues en 1219 par un prince ayyoubide qui craignait que les croisés ne s’en servent\u00a0: la ville était ouverte et presque indéfendable. Il était donc plus facile pour al-Kamil de la céder, et sa valeur, pour les deux camps, était avant tout symbolique.",
  },
  "crusade-louis-egypt": {
    title: "Saint Louis sur le Nil",
    place: "Mansourah, delta du Nil",
    summary:
      "Le roi de France Louis IX prend Damiette en juin 1249 et remonte le Nil vers Le Caire. À Mansourah, en février 1250, son avant-garde est piégée dans les ruelles de la ville par les Mamelouks bahrites, et en avril l’armée en retraite capitule\u00a0; Louis est fait prisonnier puis libéré contre rançon.",
    context:
      "Pendant la campagne meurt le sultan ayyoubide al-Salih Ayyub, et sa veuve Chajar al-Durr cache sa mort pour que l’armée continue le combat. Quelques semaines après la victoire, les Mamelouks assassinent son héritier Turan Shah et prennent le pouvoir, fondant un sultanat qui gouvernera l’Égypte et la Syrie pendant plus de 250 ans.",
    whyHere:
      "Les stratèges de la croisade avaient fini par croire que Jérusalem se gagnait ou se perdait en Égypte, dont la richesse nourrissait les armées ayyoubides. Mais le dédale de canaux et de bras du Nil ralentissait les armées à l’extrême, comme Louis l’apprit devant le canal qui protégeait Mansourah.",
  },
  "crusade-ain-jalut": {
    title: "Les Mamelouks arrêtent les Mongols",
    place: "Aïn Djalout, vallée de Jezreel",
    summary:
      "Le 3 septembre 1260, l’armée mamelouke du sultan Qutuz, dont Baybars commande l’avant-garde, bat une armée mongole à Aïn Djalout, la «\u00a0source de Goliath\u00a0», en Galilée. C’est le premier coup d’arrêt sérieux à l’expansion mongole au Moyen-Orient.",
    context:
      "Deux ans plus tôt, les Mongols de Hülegü avaient saccagé Bagdad et tué le dernier calife abbasside, avant de prendre Alep et Damas. Les Francs d’Acre restent neutres et laissent les Mamelouks traverser leurs terres\u00a0; peu après, Baybars participe au meurtre de Qutuz et se proclame sultan.",
    whyHere:
      "La vallée de Jezreel est le couloir naturel entre l’intérieur syrien et la route côtière de l’Égypte, un champ de bataille depuis les temps bibliques. Sa source abreuvait les chevaux, et les collines alentour permirent aux Mamelouks de feindre la retraite pour prendre les Mongols lancés à leur poursuite dans une embuscade.",
  },
  "crusade-krak": {
    title: "Baybars prend le krak des Chevaliers",
    place: "Krak des Chevaliers, Syrie",
    summary:
      "En avril 1271, le sultan Baybars s’empare du krak des Chevaliers, le plus grand château des Hospitaliers, après un siège d’environ un mois, en poussant les derniers défenseurs à se rendre grâce à une fausse lettre attribuée à leur grand maître.",
    context:
      "Depuis 1265, Baybars avait pris Césarée, Arsouf, Safed et, en 1268, Antioche, dont les habitants furent tués ou réduits en esclavage. En 1270, Louis IX meurt de maladie en assiégeant Tunis, et la petite croisade du prince Édouard d’Angleterre, en 1271-1272, ne peut guère freiner l’avancée mamelouke.",
    whyHere:
      "Le krak se dressait sur un éperon élevé commandant la trouée de Homs, la seule large ouverture dans les montagnes côtières entre l’intérieur syrien et la Méditerranée. Qui le tenait contrôlait la route de Homs à Tripoli et la plaine fertile en contrebas.",
  },
  "crusade-acre-1291": {
    title: "La chute de Saint-Jean-d’Acre",
    place: "Saint-Jean-d’Acre",
    summary:
      "En avril 1291, le sultan al-Ashraf Khalil amène devant Acre, capitale de ce qui reste du royaume franc, une immense armée mamelouke et des dizaines d’engins de siège. La ville tombe le 18 mai après six semaines\u00a0; les Templiers tiennent leur forteresse dix jours de plus, et en quelques mois Tyr, Sidon, Beyrouth et les derniers châteaux sont abandonnés.",
    context:
      "Tripoli était tombée en 1289. Le meurtre de musulmans à Acre par des croisés italiens fraîchement débarqués, en 1290, fournit un prétexte au sultan Qalawun, mais il meurt avant la campagne et son fils l’achève. Les ordres militaires poursuivent la lutte depuis Chypre puis Rhodes, et l’idéal de croisade survivra des siècles au Levant franc.",
    whyHere:
      "Depuis un siècle, Acre était la fenêtre des croisés sur la mer, là où débarquaient armées, pèlerins et marchands. Une fois tombée, les autres villes de la côte n’avaient plus ni raison ni moyens de résister, et les Francs se replièrent à Chypre, à une courte traversée de là.",
    schematic: {
      steps: ["Les Mamelouks unissent Égypte et Syrie", "Les châteaux tombent un à un", "Tripoli tombe en 1289", "Acre prise après six semaines", "Les Francs se replient à Chypre"],
    },
  },
};
