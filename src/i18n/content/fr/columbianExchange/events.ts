import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "cx-second-voyage": {
    title: "Le deuxième voyage de Colomb apporte bétail et canne à sucre",
    place: "La Isabela, nord d’Hispaniola",
    summary:
      "Colomb revint à Hispaniola avec dix-sept navires et plus d’un millier d’hommes, emportant chevaux, porcs, bovins, blé et canne à sucre, et fonda La Isabela au tournant de l’année 1494. Ce fut le premier transfert délibéré d’un système agricole de l’Ancien Monde vers les Amériques.",
    context:
      "Le premier voyage avait été une reconnaissance ; le second fut une expédition de colonisation, qui embarqua animaux et canne aux Canaries. Porcs et bovins retournèrent bientôt à l’état sauvage à travers l’île, tandis qu’épidémies, faim et travail forcé réduisaient des deux tiers la population taïno en quelques années. Vers 1516, les premiers moulins à sucre broyaient la canne près de Saint-Domingue.",
    whyHere:
      "Hispaniola était la première grande île bien arrosée sur la route des alizés depuis les Canaries, et sa vallée du Cibao offrait herbe et chaleur, sans grands herbivores ni prédateurs indigènes. Le bétail s’y multiplia sans frein, faisant de l’île une pépinière d’animaux pour les expéditions ultérieures vers Cuba et le continent.",
    schematic: {
      westLabel: "Amériques",
      eastLabel: "Afro-Eurasie",
      eastbound: ["maïs", "pommes de terre", "manioc", "tabac", "cacao"],
      westbound: ["chevaux", "bovins", "porcs", "canne à sucre", "variole"],
    },
  },
  "cx-smallpox-hispaniola": {
    title: "La variole atteint Hispaniola",
    place: "Saint-Domingue, Hispaniola",
    summary:
      "À la fin de 1518 éclata à Hispaniola la première épidémie de variole attestée dans les Amériques. Selon les rapports des officiers royaux, elle emporta une grande partie des Taïnos qui avaient survécu à un quart de siècle de guerre, de travail forcé et de famine.",
    context:
      "Dès les années 1510, le système de l’encomienda avait brisé la société taïno, et les colons razziaient d’autres îles pour trouver de la main-d’œuvre. À mesure que disparaissaient les travailleurs autochtones, la Couronne autorisa l’acheminement direct d’Africains réduits en esclavage, liant l’avenir des Caraïbes à la traite atlantique.",
    whyHere:
      "Saint-Domingue était le port d’entrée de tous les navires venus de Séville : tout agent pathogène ayant survécu à la traversée y débarquait en premier. La variole a besoin d’une chaîne ininterrompue de nouveaux hôtes ; une fois les traversées devenues plus rapides et plus chargées, le virus put atteindre une île où personne n’était immunisé.",
  },
  "cx-smallpox-tenochtitlan": {
    title: "La variole frappe Tenochtitlan",
    place: "Tenochtitlan, vallée de Mexico",
    summary:
      "La variole débarqua sur la côte du golfe avec l’expédition de Pánfilo de Narváez, venue de Cuba en 1520, et atteignit Tenochtitlan à l’automne. L’épidémie emporta le nouveau souverain, Cuitláhuac, et une grande partie des habitants de la ville, des mois avant le siège final.",
    context:
      "Cortés avait été chassé de la ville en juin 1520 et regroupait ses forces auprès de ses alliés tlaxcaltèques. Les estimations de la mortalité dans le centre du Mexique vont d’un quart à la moitié de la population, et la perte de chefs et de guerriers pesa lourdement sur la défense mexica en 1521.",
    whyHere:
      "Tenochtitlan était l’une des plus grandes villes du monde, une île où se pressaient peut-être 200 000 personnes, reliée à une vallée densément peuplée par des chaussées, des marchés et des routes du tribut. Une telle densité permit à un virus transmis d’une personne à l’autre de se propager à toute vitesse dans une population qui ne l’avait jamais rencontré.",
    schematic: {
      steps: ["La variole débarque à Veracruz", "Aucune immunité dans le centre du Mexique", "Cuitláhuac et des milliers d’autres périssent", "La ville tombe en 1521"],
    },
  },
  "cx-pernambuco-sugar": {
    title: "Le sucre s’enracine au Pernambouc",
    place: "Olinda, capitainerie de Pernambouc",
    summary:
      "Duarte Coelho arriva en 1535 comme seigneur-donataire du Pernambouc, fonda Olinda et réunit à Lisbonne les fonds nécessaires aux premiers moulins à sucre. Dans les années 1580, la capitainerie comptait des dizaines d’engenhos et formait la côte sucrière la plus riche du monde.",
    context:
      "Le Portugal avait divisé le Brésil en capitaineries héréditaires, et le Pernambouc fut celle qui prospéra. Dès 1542, Coelho demanda à la Couronne l’autorisation d’importer des Africains réduits en esclavage, et un jésuite rapporta en 1585 que la plupart des 14 000 esclaves africains du Brésil vivaient au Pernambouc.",
    whyHere:
      "L’étroite bande de forêt côtière humide offrait des sols argileux lourds, des pluies abondantes et une chaleur constante toute l’année, les conditions qu’exige la canne. De courtes rivières actionnaient les moulins et charriaient les caisses jusqu’au port de Recife, abrité par un récif, et le renflement du Brésil était plus proche de Lisbonne et de l’Afrique que toute autre partie des Amériques.",
    schematic: {
      steps: ["La canne exige chaleur, pluie et argile", "La côte du Pernambouc réunit les trois", "La main-d’œuvre autochtone s’effondre", "Les planteurs achètent des Africains réduits en esclavage"],
    },
  },
  "cx-chuno-potosi": {
    title: "Le chuño nourrit la montagne d’argent",
    place: "Potosí, Altiplano andin",
    summary:
      "Lorsque l’argent fut découvert à Potosí en 1545, la ville champignon, perchée à 4 000 mètres, fut nourrie en grande partie de chuño, des pommes de terre séchées par le gel par les paysans quechuas et aymaras. Les chroniqueurs espagnols notèrent que c’était la pomme de terre, et non le blé, qui faisait vivre les hautes terres andines.",
    context:
      "La pomme de terre avait été domestiquée dans les Andes des milliers d’années plus tôt, et le chuño ravitaillait depuis longtemps les armées incas. Les Espagnols méprisèrent d’abord la pomme de terre comme une nourriture de travailleurs indigènes, alors même que les marins commençaient à en embarquer parmi leurs provisions de bord.",
    whyHere:
      "Sur l’Altiplano, le maïs et le blé échouent, mais la pomme de terre, résistante au gel, prospère. Les nuits glaciales et les journées sèches et ensoleillées de juin et juillet permettaient aux paysans de geler, de piétiner et de sécher au soleil les tubercules pour en faire du chuño, qui se conserve des années et pouvait être transporté à dos de lama jusqu’aux camps miniers.",
  },
  "cx-cocoliztli": {
    title: "Les épidémies de cocoliztli",
    place: "Teposcolula-Yucundaa, Oaxaca, Nouvelle-Espagne",
    summary:
      "Deux vagues d’une fièvre hémorragique que les Nahuas appelaient cocoliztli balayèrent la Nouvelle-Espagne en 1545-1548 et en 1576-1580, tuant selon les estimations de 5 à 15 millions de personnes lors de la première et environ deux millions lors de la seconde. L’ADN ancien d’un cimetière de Teposcolula-Yucundaa désigne une souche de Salmonella enterica.",
    context:
      "Ces épidémies succédèrent à la variole et à la rougeole, et le regroupement forcé des populations dans des villages de « congrégation » rapprocha les habitants du bétail de l’Ancien Monde. La pénurie de main-d’œuvre poussa l’Espagne à remplacer l’encomienda par le système du repartimiento.",
    whyHere:
      "Les cernes des arbres montrent que les deux flambées survinrent durant les pires sécheresses qu’aient connues les hautes terres mexicaines en 500 ans. La rareté de l’eau dégrada l’hygiène dans les villes surpeuplées des vallées, et les pluies qui suivirent purent multiplier les rongeurs porteurs de la maladie.",
  },
  "cx-tomato-italy": {
    title: "La tomate arrive en Toscane",
    place: "Florence, duché de Florence",
    summary:
      "En 1548, un intendant de Cosme de Médicis signala qu’un panier de tomates provenant du domaine ducal de Torre del Gallo était arrivé sans encombre à Florence. Pietro Andrea Mattioli avait déjà décrit le fruit dans son herbier de 1544, et le nomma plus tard pomi d’oro.",
    context:
      "Pendant plus d’un siècle, les Italiens cultivèrent surtout la tomate comme une curiosité, se méfiant d’une plante apparentée à la morelle. Le premier livre de cuisine comportant des recettes à base de tomate parut à Naples en 1692, son auteur en attribuant le mérite aux cuisiniers espagnols.",
    whyHere:
      "Plante des contreforts secs des Andes et des hautes terres mexicaines, la tomate trouva son terrain d’élection dans les étés chauds, ensoleillés et peu pluvieux de la Méditerranée, où l’air sec limite les maladies fongiques et où les fruits mûrissent pleinement.",
  },
  "cx-chili-goa": {
    title: "Le piment atteint Goa",
    place: "Goa, Inde portugaise",
    summary:
      "Quelques décennies à peine après l’arrivée des Portugais en Inde, les piments américains du genre Capsicum poussaient autour de Goa et gagnaient l’intérieur ; des chants attribués au poète kannada Purandara Dasa les mentionnent déjà. Le piment s’imposa bientôt dans les cuisines de tout le sous-continent et du pourtour du golfe du Bengale.",
    context:
      "Les navires portugais transportèrent le piment du Brésil vers l’Afrique, l’Arabie et leurs comptoirs asiatiques de Goa, de Sri Lanka et de Malacca. La plus ancienne mention chinoise date de 1591, et au XVIIIe siècle le piment était devenu essentiel à la cuisine du Hunan et du Sichuan.",
    whyHere:
      "Le poivre noir ne pousse que dans les forêts détrempées des Ghâts occidentaux, alors que le piment est une plante annuelle robuste qui donne le même piquant sur les parcelles sèches du Deccan et dans les jardins villageois. Goa, plaque tournante où déchargeaient les navires de Lisbonne, le lança sur sa route.",
  },
  "cx-mezquital-sheep": {
    title: "Un fléau de moutons dans le Mezquital",
    place: "Vallée du Mezquital, Nouvelle-Espagne",
    summary:
      "Dans les décennies qui suivirent la conquête, les concessions de pâturage espagnoles remplirent de moutons les terres agricoles otomies de la vallée du Mezquital ; leur nombre explosa dans les années 1560 et 1570. Surpâturage et déboisement dénudèrent la vallée, laissant un paysage de mesquite et d’érosion.",
    context:
      "Bovins, moutons et chèvres se répandirent à travers la Nouvelle-Espagne plus vite que les colons qui les possédaient. À mesure que les épidémies vidaient les villages indigènes, les vice-rois concédaient les champs abandonnés comme estancias d’élevage.",
    whyHere:
      "La vallée se trouve dans l’ombre pluviométrique de la Sierra Madre orientale, avec des sols minces qui ne tenaient que grâce à un aménagement soigneux en terrasses et à l’irrigation. Une fois les paysans morts et les troupeaux installés, les sabots et la pâture rase exposèrent le sol au vent et aux averses d’été.",
  },
  "cx-potato-europe": {
    title: "La pomme de terre arrive à Séville",
    place: "Séville, couronne de Castille",
    summary:
      "La pomme de terre gagna l’Europe comme provision de bord venue des Andes ; un reçu de 1567 atteste une cargaison expédiée de Grande Canarie à Anvers, et l’Hospital de la Sangre de Séville en achetait dès 1573. Charles de L’Écluse (Carolus Clusius) en peignit un spécimen aux Pays-Bas en 1588 et contribua à la diffuser dans les jardins européens.",
    context:
      "Son adoption fut lente : les variétés andines ne formaient de tubercules que sous les jours courts de l’automne, et beaucoup de paysans se méfiaient de la plante. Pourtant, un acre de pommes de terre fournissait environ trois fois plus de calories que les céréales, et au XVIIIe siècle elle nourrissait une grande partie de l’Europe du Nord.",
    whyHere:
      "Séville détenait le monopole castillan du commerce avec les Indes : toutes les flottes de retour remontaient donc le Guadalquivir. La pomme de terre ne réussit pas tant dans la chaude Andalousie que dans les pays frais et humides comme l’Irlande, les Pays-Bas et l’Allemagne, dont les étés rappelaient la saison de culture andine.",
    schematic: {
      steps: ["Le tubercule andin convient aux climats frais", "L’Europe du Nord l’adopte lentement", "Trois fois plus de calories par acre", "La population croît après 1750"],
    },
  },
};
