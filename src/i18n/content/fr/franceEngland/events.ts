import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "rival-hastings": {
    title: "La bataille d’Hastings",
    place: "Colline de Senlac, près d’Hastings (Sussex)",
    summary:
      "Le 14 octobre 1066, Guillaume, duc de Normandie, vainquit et tua le roi Harold Godwinson au terme d’une journée de combat sur une crête au nord d’Hastings. Couronné à Westminster le jour de Noël, il remplaça l’aristocratie anglaise par une élite normande de langue française.",
    context:
      "Édouard le Confesseur mourut sans enfant en janvier 1066, et trois prétendants se disputèrent son trône. Harold venait d’écraser le roi de Norvège Harald Hardrada à Stamford Bridge, près d’York, et dut faire traverser toute l’Angleterre à son armée épuisée pour affronter les Normands.",
    whyHere:
      "La Manche est la plus étroite entre la Normandie, la Picardie et le Sussex, et la lagune abritée de Pevensey offrit à Guillaume un débarquement sûr. Il resta près de ses navires, sur la presqu’île d’Hastings\u00a0: c’est Harold qui dut venir à lui et barrer la route de Londres sur la crête où s’élève aujourd’hui l’abbaye de Battle.",
    schematic: {
      steps: [
        "Édouard le Confesseur meurt sans héritier",
        "Harold couronné, Guillaume revendique",
        "Les Normands débarquent à Pevensey",
        "Harold tué à Hastings",
      ],
    },
  },
  "rival-domesday": {
    title: "Le grand inventaire du Domesday Book",
    place: "Winchester, trésor royal d’Angleterre",
    summary:
      "Craignant une invasion danoise, Guillaume ordonna à Noël 1085 le recensement de chaque domaine de son royaume. En un an, ses enquêteurs consignèrent qui tenait la terre, ce qu’elle valait et combien de charrues, de moulins et d’habitants elle faisait vivre.",
    context:
      "Vingt ans après Hastings, presque tous les grands domaines étaient passés de mains anglaises en mains normandes, et le français était devenu la langue de la cour, du droit et de la noblesse. Le Domesday Book chiffre ce transfert, qui liait durablement les rois d’Angleterre à leur duché d’outre-Manche.",
    whyHere:
      "Winchester, ancienne capitale des rois du Wessex, abritait le trésor royal\u00a0: le registre achevé y fut conservé, et on l’appela longtemps le Livre de Winchester. Le Wessex et ses riches collines crayeuses formaient le cœur du royaume dont Guillaume avait hérité.",
  },
  "rival-angevin": {
    title: "Henri et Aliénor bâtissent l’empire Plantagenêt",
    place: "Poitiers, Poitou",
    summary:
      "Huit semaines après l’annulation de son mariage avec Louis VII, Aliénor d’Aquitaine épousa à Poitiers, en mai 1152, Henri, comte d’Anjou et duc de Normandie. Deux ans plus tard, il était couronné roi d’Angleterre sous le nom d’Henri II et régnait de la frontière écossaise aux Pyrénées.",
    context:
      "Henri tenait davantage de la France que le roi de France lui-même, mais pour la Normandie, l’Anjou et l’Aquitaine il restait le vassal de Louis VII. Ce double statut, roi en Angleterre et sujet en France, fut le germe de trois siècles de conflits.",
    whyHere:
      "Poitiers se trouvait au seuil qui sépare le val de Loire de l’Aquitaine. Les terres Plantagenêt étaient cousues ensemble par la Loire, la façade atlantique et la Manche\u00a0: le centre de gravité de cet empire se situait à Chinon et à Fontevraud plutôt qu’à Londres.",
  },
  "rival-gaillard": {
    title: "La chute de Château-Gaillard",
    place: "Les Andelys, sur la Seine",
    summary:
      "Après six mois de siège, Philippe Auguste s’empara en mars 1204 de la grande forteresse de Richard Cœur de Lion. Rouen capitula en juin, et Jean sans Terre perdit en deux ans la Normandie, l’Anjou, le Maine et la Touraine.",
    context:
      "Richard avait fait bâtir Château-Gaillard en à peine deux ans pour protéger Rouen. Son frère Jean, dont se méfiaient les barons normands et que Philippe surclassait en habileté, ne put la secourir\u00a0: le duché du Conquérant passa à la couronne de France.",
    whyHere:
      "Le château se dresse sur un éperon de craie au-dessus d’une boucle de la Seine, la grande route fluviale de Paris à Rouen et à la mer. Qui le tenait tenait la porte de la Normandie\u00a0: voilà pourquoi Philippe mit tant de moyens à le faire tomber.",
  },
  "rival-bouvines": {
    title: "La bataille de Bouvines",
    place: "Bouvines, entre Lille et Tournai",
    summary:
      "Le 27 juillet 1214, Philippe Auguste vainquit une coalition réunissant l’empereur Otton IV, les comtes de Flandre et de Boulogne et un contingent anglais soldé par Jean sans Terre. Le même mois, l’armée de Jean reculait sur la Loire\u00a0: c’en était fini de ses espoirs de reprendre la Normandie.",
    context:
      "Jean avait dépensé des années d’impôts anglais pour bâtir une alliance capable de prendre Philippe en tenaille, au nord et au sud. Bouvines fit du roi capétien le souverain le plus puissant d’Occident et transforma l’échec de Jean à l’étranger en révolte dans son propre royaume.",
    whyHere:
      "La coalition marchait depuis la Flandre sur la route de Paris, et Philippe fit volte-face pour combattre dans la plaine ouverte, près du pont sur la Marque. Ces terres agricoles plates et sèches se prêtaient aux charges de la chevalerie française.",
    schematic: {
      steps: [
        "La Normandie perdue en 1204",
        "La coalition de Jean écrasée à Bouvines",
        "Les barons anglais se révoltent",
        "La Grande Charte scellée en 1215",
      ],
    },
  },
  "rival-magna-carta": {
    title: "La Grande Charte à Runnymede",
    place: "Runnymede, au bord de la Tamise",
    summary:
      "En juin 1215, les barons révoltés contraignirent Jean sans Terre à sceller une charte qui limitait le pouvoir royal et promettait une justice conforme à la loi du pays. Quand le pape l’annula, les barons offrirent la couronne d’Angleterre au prince Louis de France, qui tint Londres en 1216.",
    context:
      "La défaite en France avait vidé le trésor de Jean et ruiné son autorité. Louis se retira en 1217, après sa défaite à Lincoln et la perte de sa flotte au large de Sandwich, mais la charte, maintes fois réédictée, devint un texte fondateur des libertés anglaises.",
    whyHere:
      "Runnymede est une prairie inondable entre le château royal de Windsor et le camp rebelle de Staines\u00a0: un terrain neutre où aucun camp ne pouvait tendre d’embuscade à l’autre. La Tamise elle-même menait de l’un comme de l’autre à Londres.",
  },
  "rival-claret": {
    title: "La flotte du vin gascon",
    place: "Bordeaux, sur la Garonne",
    summary:
      "Au cours de l’année record 1308-1309, Bordeaux expédia près de 100 000 tonneaux de vin, en grande partie ce rouge clair que les Anglais appelaient claret. La Gascogne, dernière grande possession anglaise en France, vivait de ce commerce.",
    context:
      "Par le traité de Paris de 1259, Henri III renonça à la Normandie et garda la Gascogne en tant que vassal du roi de France. Les marchands bordelais jouissaient de privilèges royaux et préféraient un roi lointain à Londres à un roi tout proche à Paris.",
    whyHere:
      "La Garonne et la Dordogne se rejoignent dans l’estuaire de la Gironde, qui permet aux navires de haute mer d’atteindre les quais de Bordeaux. Par la mer, Bordeaux était plus proche de Southampton et de Bristol que de Paris, et la flotte du vin cinglait vers le nord chaque automne, après les vendanges.",
    schematic: {
      westLabel: "Bordeaux",
      eastLabel: "Angleterre",
      eastbound: ["clairet", "sel", "pastel"],
      westbound: ["blé", "draps de laine", "poisson salé", "étain"],
    },
  },
  "rival-outbreak": {
    title: "Une querelle pour une couronne",
    place: "Paris, cour de Philippe VI",
    summary:
      "En mai 1337, Philippe VI prononça la confiscation de la Gascogne d’Édouard III\u00a0: la guerre de Cent Ans commençait. Édouard répliqua en revendiquant le trône de France lui-même, par sa mère Isabelle, fille de Philippe le Bel.",
    context:
      "Quand la lignée directe des Capétiens s’éteignit en 1328, les grands du royaume choisirent Philippe de Valois plutôt qu’un roi étranger dont les droits passaient par une femme. Les différends sur la Gascogne, le soutien français à l’Écosse et la rivalité en Flandre transformèrent une querelle féodale en guerre dynastique.",
    whyHere:
      "Paris était le cœur d’une monarchie qui ne cessait d’étendre ses tribunaux et ses impôts aux provinces. Les sujets gascons pouvaient faire appel au Parlement de Paris par-dessus la tête de leur duc, ce qui rendait le pouvoir du roi d’Angleterre à Bordeaux insupportable pour les deux camps.",
    schematic: {
      steps: [
        "Fin des Capétiens directs en 1328",
        "Un Valois préféré à Édouard",
        "Philippe VI confisque la Gascogne",
        "Édouard revendique la couronne de France",
      ],
    },
  },
  "rival-wool": {
    title: "La Flandre choisit la laine anglaise",
    place: "Gand, comté de Flandre",
    summary:
      "Quand Édouard III suspendit les exportations de laine en 1336, les métiers de Gand, Bruges et Ypres s’arrêtèrent. Menée par Jacob van Artevelde, Gand rompit avec son comte pro-français, et en janvier 1340 Édouard fut proclamé roi de France sur la place du marché.",
    context:
      "La Flandre devait fidélité féodale à la France, mais son économie dépendait de l’Angleterre. La laine était la grande exportation anglaise, et le roi s’en servait comme d’une arme et comme garantie des emprunts qui payaient ses armées.",
    whyHere:
      "Les villes drapières flamandes se trouvaient à une journée de mer de l’estuaire de la Tamise, sur des rivières et des canaux menant au port de Bruges. Les moutons anglais fournissaient la laine longue et fine dont leurs tisserands avaient besoin et que la Flandre ne produisait pas.",
    schematic: {
      westLabel: "Angleterre",
      eastLabel: "Flandre",
      eastbound: ["laine brute", "peaux", "étain"],
      westbound: ["draps fins", "argent", "épices"],
    },
  },
  "rival-sluys": {
    title: "La bataille de l’Écluse",
    place: "Estuaire du Zwin, au large de L’Écluse",
    summary:
      "Le 24 juin 1340, la flotte d’Édouard III attaqua la flotte d’invasion française ancrée dans l’estuaire du Zwin et l’anéantit presque entièrement. Les deux amiraux français périrent, et les archers anglais changèrent la bataille en massacre.",
    context:
      "Philippe VI avait rassemblé des navires en Flandre pour porter la guerre en Angleterre. Après l’Écluse, la Manche appartint pour l’essentiel aux Anglais\u00a0: pendant des décennies, la guerre se déroula sur le sol français, et les villes anglaises furent largement épargnées.",
    whyHere:
      "Le Zwin était le débouché maritime de Bruges, un chenal abrité mais étroit. Enchaînés les uns aux autres en lignes, les navires français ne purent manœuvrer quand Édouard surgit avec le vent et la marée dans le dos.",
  },
  "rival-crecy": {
    title: "La bataille de Crécy",
    place: "Crécy-en-Ponthieu, Picardie",
    summary:
      "Le 26 août 1346, la petite armée d’Édouard III, postée sur une pente avec ses archers sur les ailes, brisa les charges répétées de la chevalerie française. Philippe VI s’enfuit, et le Prince Noir, âgé de seize ans, gagna sa réputation au premier rang.",
    context:
      "Édouard avait débarqué dans le Cotentin en juillet, saccagé Caen et marché presque jusqu’à Paris avant de remonter vers le nord. La bataille montra que des archers disciplinés et des hommes d’armes combattant à pied pouvaient vaincre la meilleure cavalerie d’Europe.",
    whyHere:
      "Le Ponthieu était un comté dont Édouard avait hérité, juste au nord du gué de Blanchetaque sur la Somme qu’il avait forcé deux jours plus tôt. Il choisit une douce crête flanquée de la forêt de Crécy, si bien que les Français durent attaquer en montée au terme d’une longue marche.",
  },
  "rival-calais-siege": {
    title: "Le siège de Calais",
    place: "Calais, sur le pas de Calais",
    summary:
      "Édouard assiégea Calais pendant onze mois, jusqu’à ce que la faim force la ville à se rendre en août 1347. Six bourgeois offrirent leur vie pour leurs concitoyens et furent épargnés\u00a0; Édouard expulsa une grande partie des habitants et y installa des colons anglais.",
    context:
      "L’armée de secours de Philippe VI parvint en vue des remparts puis se retira sans combattre. Calais devint la tête de pont de l’Angleterre en France pour plus de deux siècles et, à partir de 1363, l’étape obligée par laquelle devait passer la laine anglaise.",
    whyHere:
      "Calais est le port français le plus proche de Douvres, à une quarantaine de kilomètres à peine. Marais et cours d’eau la rendaient très difficile à prendre d’assaut\u00a0: c’est pourquoi Édouard la prit par la faim, et pourquoi les Anglais purent la garder si longtemps.",
  },
};
