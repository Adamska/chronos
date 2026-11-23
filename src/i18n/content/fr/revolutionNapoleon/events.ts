import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "napo-estates-general": {
    title: "Les états généraux et le serment du Jeu de paume",
    place: "Versailles",
    summary:
      "Convoqués par Louis XVI pour résoudre une crise financière, les états généraux s’ouvrent à Versailles le 5 mai 1789, pour la première fois depuis 1614. Le 17 juin, les députés du tiers état se proclament Assemblée nationale ; trois jours plus tard, trouvant leur salle fermée, ils jurent dans une salle de jeu de paume de ne pas se séparer avant d’avoir donné une constitution à la France.",
    context:
      "Les dettes de guerre, dont le coût du soutien à l’indépendance américaine, ont mené la couronne au bord de la banqueroute, et les ordres privilégiés refusent tout nouvel impôt. La mauvaise récolte de 1788 porte le prix du pain à son plus haut niveau depuis des décennies. Le tiers état, qui représente quelque 97 % de la population, exige le vote par tête et non plus par ordre.",
    whyHere:
      "Louis XIV avait installé la cour et le gouvernement à Versailles, à une vingtaine de kilomètres de Paris, pour garder la noblesse sous son regard. En 1789, cette distance joue dans les deux sens : les députés siègent assez près de la capitale pour que ses foules, ses journaux et ses clubs suivent chaque vote en quelques heures.",
    schematic: {
      steps: [
        "Les dettes de guerre vident le Trésor",
        "Le roi convoque les états généraux",
        "Le tiers état se dit souverain",
        "La monarchie absolue s’effondre",
      ],
    },
  },
  "napo-bastille": {
    title: "La prise de la Bastille",
    place: "Paris, faubourg Saint-Antoine",
    summary:
      "Le 14 juillet 1789, des foules parisiennes, rejointes par des gardes-françaises mutinés, prennent d’assaut la Bastille, forteresse-prison royale à l’est de la ville, pour y chercher de la poudre. Son gouverneur, le marquis de Launay, est tué, et le roi retire les troupes qu’il avait massées autour de la capitale.",
    context:
      "Le renvoi du très populaire ministre des Finances Jacques Necker, le 11 juillet, persuade les Parisiens qu’un coup de force royal contre l’Assemblée se prépare. La forteresse ne renferme que sept prisonniers, mais elle incarne l’arbitraire du pouvoir royal. Dans les semaines suivantes, la Grande Peur gagne les campagnes, et dans la nuit du 4 août l’Assemblée abolit les privilèges féodaux.",
    whyHere:
      "Les canons de la Bastille dominaient le faubourg Saint-Antoine, quartier populeux d’artisans et d’ateliers de meubles aux portes orientales de Paris. La poudre destinée aux dizaines de milliers de fusils saisis le matin même aux Invalides avait été entreposée derrière ses murs : la forteresse était la cible évidente.",
  },
  "napo-rights-of-man": {
    title: "La Déclaration des droits de l’homme et du citoyen",
    place: "Versailles",
    summary:
      "Le 26 août 1789, l’Assemblée nationale constituante adopte une déclaration en 17 articles qui proclame les droits naturels, la souveraineté de la nation, l’égalité devant la loi, la liberté d’opinion et de religion et la séparation des pouvoirs. Elle devient ensuite le préambule de la Constitution de 1791.",
    context:
      "Rédigé avec le concours de La Fayette, qui consulte Thomas Jefferson, alors ministre des États-Unis à Paris, le texte s’inspire des Lumières et des déclarations de droits américaines. Il laisse ouverte la question de savoir qui est citoyen : les femmes, les pauvres et les esclaves des colonies n’y sont pas d’emblée inclus, et en 1791 Olympe de Gouges y répond par une Déclaration des droits de la femme.",
    whyHere:
      "L’Assemblée siège encore à Versailles jusqu’aux journées d’octobre 1789, quand des Parisiennes y marchent et ramènent la famille royale, puis bientôt les députés, à Paris. Depuis la capitale, les exemplaires imprimés de la Déclaration se répandent en quelques semaines à travers la France et l’Europe.",
  },
  "napo-haiti-revolt": {
    title: "Le soulèvement des esclaves de Saint-Domingue",
    place: "Plaine du Nord, près du Cap-Français, Saint-Domingue",
    summary:
      "En août 1791, après la cérémonie du Bois-Caïman, les esclaves africains de la plaine du Nord de Saint-Domingue se soulèvent et incendient des centaines de plantations de canne et de café. La révolte contraint le commissaire Léger-Félicité Sonthonax à libérer les esclaves de la colonie en 1793, et en février 1794 la Convention abolit l’esclavage dans toutes les colonies françaises.",
    context:
      "Saint-Domingue, le tiers occidental d’Hispaniola, est la colonie la plus riche du monde : elle fournit une grande part du sucre et du café consommés en Europe grâce au travail de près d’un demi-million d’esclaves. La Révolution parisienne a déjà dressé les uns contre les autres planteurs blancs, libres de couleur et administrateurs royaux. Toussaint Louverture, ancien cocher affranchi, s’impose comme le chef le plus habile des insurgés.",
    whyHere:
      "La plaine du Nord, autour du Cap-Français, était une bande plate et bien arrosée entre les montagnes et la mer, couverte de sucreries où les esclaves étaient infiniment plus nombreux que leurs maîtres. Les mornes boisés qui la dominent offraient un refuge aux insurgés, tandis que la fièvre jaune et le paludisme des basses terres allaient anéantir une armée européenne après l’autre.",
    schematic: {
      westLabel: "Saint-Domingue",
      eastLabel: "France",
      eastbound: ["sucre", "café", "indigo", "coton"],
      westbound: ["étoffes", "vin", "farine", "outils"],
    },
  },
  "napo-varennes": {
    title: "La fuite à Varennes",
    place: "Varennes-en-Argonne",
    summary:
      "Dans la nuit du 20 juin 1791, Louis XVI, Marie-Antoinette et leurs enfants quittent les Tuileries déguisés, en direction de la place forte de Montmédy, près de la frontière de l’Est. Reconnus à Sainte-Menehould, ils sont arrêtés à Varennes et reconduits à Paris au milieu de foules silencieuses.",
    context:
      "Le roi avait accepté la Révolution en public tout en supportant mal la réforme de l’Église et les limites imposées à son pouvoir. Sa fuite ruine son crédit : les républicains réclament sa déchéance, et en juillet un rassemblement de pétitionnaires au Champ-de-Mars s’achève sous les balles de la Garde nationale. La monarchie constitutionnelle instaurée cet automne-là ne s’en remettra jamais.",
    whyHere:
      "Montmédy se trouvait tout près des Pays-Bas autrichiens, où attendaient les troupes fidèles du marquis de Bouillé et où la famille Habsbourg de la reine était à portée. La route de l’Est, à travers l’Argonne boisée, passait par de petits relais de poste où la lourde berline devait changer de chevaux, et chaque retard laissait aux patriotes locaux le temps de donner l’alerte.",
  },
  "napo-valmy": {
    title: "Valmy et la naissance de la République",
    place: "Valmy, en Champagne",
    summary:
      "Le 20 septembre 1792, les armées françaises de Dumouriez et Kellermann arrêtent l’invasion prussienne lors d’une canonnade autour de la butte au moulin de Valmy. Le lendemain, la Convention tout juste élue abolit la monarchie, et la France devient une république.",
    context:
      "La France a déclaré la guerre à l’Autriche en avril 1792, et la Prusse s’est jointe au conflit. Le manifeste de Brunswick menace Paris de destruction s’il est fait le moindre mal à la famille royale ; les Parisiens répondent en prenant les Tuileries le 10 août, et le roi est déchu. Valmy coûte peu de vies, mais la retraite de l’armée la plus admirée d’Europe donne aux révolutionnaires une immense confiance.",
    whyHere:
      "Les Prussiens avaient pris Longwy et Verdun et s’engageaient dans l’Argonne boisée, dernier obstacle naturel sur la route de Paris. En tenant les hauteurs de Valmy, les Français se plaçaient en travers de leur ligne de marche et de ravitaillement, et la pluie, la boue et la dysenterie firent le reste.",
  },
  "napo-terror": {
    title: "L’exécution du roi et la Terreur",
    place: "Place de la Révolution, Paris",
    summary:
      "Louis XVI est guillotiné le 21 janvier 1793, Marie-Antoinette en octobre. Face à l’invasion étrangère, à la guerre civile et aux émeutes de subsistance, le Comité de salut public gouverne par décrets d’exception : quelque 17 000 personnes sont exécutées après jugement et bien davantage meurent en prison ou dans des tueries sommaires, jusqu’à la chute de Robespierre le 9 Thermidor (27 juillet 1794) et son exécution le lendemain.",
    context:
      "Les Jacobins chassent leurs rivaux girondins de la Convention en juin 1793, décrètent la levée en masse en août et fixent un maximum pour le prix du pain. La loi des suspects remplit les prisons, et la répression frappe le plus durement les régions insurgées comme la Vendée, Lyon et Nantes. Après Thermidor, le pouvoir passe à des députés plus modérés puis, en 1795, à un Directoire de cinq membres.",
    whyHere:
      "La guillotine se dressait sur la vaste place qui ferme le jardin des Tuileries, à quelques pas de la salle où siégeait la Convention : les exécutions avaient lieu sous les yeux du pouvoir et devant des foules immenses. Les sections radicales de Paris pouvaient faire pression directement sur les députés, comme lorsque des foules armées encerclèrent la Convention pour en chasser les Girondins.",
  },
  "napo-italy": {
    title: "La campagne d’Italie de Bonaparte",
    place: "Rivoli, près de Vérone",
    summary:
      "Nommé en mars 1796 à la tête d’une armée d’Italie en guenilles, Napoléon Bonaparte, 26 ans, sépare les Piémontais des Autrichiens, l’emporte à Lodi et à Arcole, puis écrase à Rivoli, en janvier 1797, la dernière armée autrichienne de secours. Le traité de Campo-Formio confirme la Belgique française et une république sœur en Italie du Nord, tandis que Venise est livrée à l’Autriche.",
    context:
      "Pour le Directoire, l’Italie n’était qu’un front secondaire derrière les grandes armées du Rhin. Bonaparte en fait le théâtre décisif, paie ses troupes avec l’argent, les œuvres d’art et les trésors des États italiens, et négocie la paix presque à sa guise. La victoire fait de lui le général le plus célèbre de la République.",
    whyHere:
      "Depuis Nice, l’armée longe l’étroite côte ligure et franchit le col bas de Cadibona, là où les Alpes rejoignent l’Apennin, pour déboucher dans la plaine du Pô. Mantoue, forteresse entourée de lacs qui gardait les routes descendant des Alpes, devient l’enjeu qui attire les armées autrichiennes par la vallée de l’Adige jusqu’à Rivoli.",
  },
  "napo-pyramids": {
    title: "L’Égypte et la bataille des Pyramides",
    place: "Embabeh, près du Caire",
    summary:
      "Débarqué à Alexandrie en juillet 1798 avec quelque 35 000 soldats, Bonaparte remonte le Nil et, le 21 juillet, met en déroute la cavalerie mamelouke de Mourad Bey à Embabeh, les pyramides de Gizeh à l’horizon. Il entre au Caire quelques jours plus tard et entreprend de gouverner l’Égypte comme une colonie française.",
    context:
      "Le Directoire espère menacer la route britannique des Indes et tenir un général ambitieux loin de Paris. Plus de 150 savants, ingénieurs et artistes accompagnent l’armée et fondent l’Institut d’Égypte au Caire ; en 1799, des soldats français découvrent la pierre de Rosette, qui permettra plus tard à Jean-François Champollion de déchiffrer les hiéroglyphes.",
    whyHere:
      "L’Égypte occupe l’étroit isthme entre la Méditerranée et la mer Rouge, le plus court chemin vers l’océan Indien. Le Nil était la seule route vers le sud depuis la côte, et son mince ruban vert enfermait les deux armées sur la même bande de terre, entre le fleuve et le désert, aux portes du Caire.",
  },
  "napo-nile": {
    title: "La bataille d’Aboukir",
    place: "Baie d’Aboukir",
    summary:
      "Le soir du 1er août 1798, la flotte d’Horatio Nelson surprend les vaisseaux de ligne français au mouillage dans la baie d’Aboukir et attaque leur ligne des deux côtés. Au matin, onze des treize vaisseaux sont pris ou détruits, dont le navire amiral L’Orient, qui a explosé dans la nuit.",
    context:
      "La défaite coupe l’armée de Bonaparte de la France et donne à la Grande-Bretagne la maîtrise de la Méditerranée. Elle pousse l’Empire ottoman, suzerain nominal de l’Égypte, à déclarer la guerre à la France et favorise la formation de la deuxième coalition ; l’expédition de Bonaparte en Syrie échoue devant Saint-Jean-d’Acre en 1799.",
    whyHere:
      "La baie d’Aboukir est un vaste mouillage peu profond à l’est d’Alexandrie, dont le port était trop étroit pour les gros vaisseaux français. L’amiral Brueys avait ancré sa ligne près des hauts-fonds, persuadé qu’aucun ennemi ne pourrait passer entre lui et la côte, mais il restait juste assez d’eau pour que les premiers capitaines de Nelson s’y glissent.",
  },
  "napo-brumaire": {
    title: "Le coup d’État du 18 Brumaire",
    place: "Château de Saint-Cloud",
    summary:
      "Laissant son armée en Égypte, Bonaparte débarque à Fréjus en octobre 1799 et s’associe au directeur Sieyès pour un coup d’État les 9 et 10 novembre (18 et 19 Brumaire an VIII). Quand les députés résistent à Saint-Cloud, les grenadiers font évacuer la salle, et un Consulat de trois membres prend le pouvoir, avec Bonaparte pour Premier consul.",
    context:
      "Le Directoire est discrédité par la corruption, l’inflation, les défaites de 1799 et les annulations répétées d’élections. Une nouvelle constitution, approuvée par un plébiscite aux chiffres gonflés, concentre le pouvoir entre les mains du Premier consul. En mai 1800, Bonaparte franchit le col du Grand-Saint-Bernard avec une armée, puis remporte en juin à Marengo une victoire serrée qui assoit son pouvoir.",
    whyHere:
      "Les deux conseils législatifs furent transférés de Paris au château de Saint-Cloud, à une dizaine de kilomètres à l’ouest, sous prétexte d’un complot jacobin. Loin des quartiers révolutionnaires de la capitale, on pouvait les encercler de troupes sans craindre un soulèvement populaire pour les défendre.",
  },
  "napo-louisiana": {
    title: "La vente de la Louisiane",
    place: "La Nouvelle-Orléans",
    summary:
      "En avril 1803, la France vend aux États-Unis la Louisiane, quelque 2,1 millions de kilomètres carrés entre le Mississippi et les montagnes Rocheuses, pour 15 millions de dollars. La jeune république double à peu près de superficie.",
    context:
      "L’Espagne avait secrètement rétrocédé la Louisiane à la France en 1800, et Bonaparte rêvait d’un empire américain qui nourrirait les îles à sucre des Antilles. L’échec de son armée à Saint-Domingue et l’imminence d’une nouvelle guerre avec la Grande-Bretagne le décident à vendre. Les envoyés du président Thomas Jefferson venaient acheter La Nouvelle-Orléans seule : on leur offrit tout.",
    whyHere:
      "La Nouvelle-Orléans commandait l’embouchure du Mississippi, seul débouché des fermes de l’intérieur américain au-delà des Appalaches, dont les récoltes ne pouvaient franchir les montagnes avec profit. Qui tenait le port tenait le commerce d’un demi-continent : voilà pourquoi Jefferson le voulait presque à tout prix.",
    schematic: {
      steps: [
        "L’expédition de Saint-Domingue échoue",
        "La Louisiane perd sa raison d’être",
        "La France la vend 15 millions de dollars",
        "Les États-Unis doublent de taille",
      ],
    },
  },
  "napo-haiti-independence": {
    title: "L’indépendance d’Haïti",
    place: "Gonaïves",
    summary:
      "Le 1er janvier 1804, aux Gonaïves, Jean-Jacques Dessalines proclame l’indépendance d’Haïti, rendant à l’ancienne colonie son nom taïno. C’est le deuxième État indépendant des Amériques après les États-Unis, et le seul né d’une révolte victorieuse d’esclaves.",
    context:
      "En 1802, Bonaparte envoie son beau-frère Charles Leclerc avec une puissante armée pour rétablir l’autorité française, et l’esclavage est rétabli en Guadeloupe. Toussaint Louverture, capturé par ruse, est déporté en France, où il meurt en 1803 ; mais ses généraux reprennent les armes quand la menace d’un retour à l’esclavage devient évidente, et la fièvre jaune décime l’armée française. La victoire de Dessalines à Vertières, en novembre 1803, met fin à la guerre.",
    whyHere:
      "Les Gonaïves se trouvent au fond du golfe de la Gonâve, entre les provinces du Nord et de l’Ouest, dans la région où les armées révolutionnaires étaient les plus fortes. L’intérieur montagneux du pays, qui lui a donné son nom, « terre des montagnes », permettait aux insurgés de combattre depuis les hauteurs tandis que la maladie ravageait les troupes européennes dans les plaines côtières.",
  },
};
