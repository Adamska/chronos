import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "sail-ceuta": {
    title: "Le Portugal s’empare de Ceuta",
    place: "Ceuta, détroit de Gibraltar",
    summary:
      "Le 21 août 1415, une expédition portugaise conduite par le roi Jean Ier prit d’assaut Ceuta, port mérinide : ce fut la première conquête européenne durable sur le continent africain.",
    context:
      "Enserré par la Castille sur terre, le Portugal se tourna vers la mer pour le commerce, la gloire et la croisade. Ceuta offrit au jeune prince Henri sa première vision de l’Afrique ; depuis sa base de l’Algarve, près de Sagres et de Lagos, il patronna plus tard les voyages qui descendirent le long des côtes africaines, même si la fameuse « école de navigation » de Sagres relève largement d’une légende tardive.",
    whyHere:
      "Ceuta occupe une étroite péninsule sur la rive africaine du détroit de Gibraltar, face à Gibraltar, de l’autre côté de l’unique passage entre la Méditerranée et l’Atlantique. Pourtant, une fois la ville tombée, les marchands musulmans détournèrent tout simplement leurs caravanes vers d’autres ports : première leçon montrant que tenir un verrou ne revient pas à posséder le commerce qui le traverse.",
  },
  "sail-dias-cape": {
    title: "Bartolomeu Dias double le Cap",
    place: "Cap de Bonne-Espérance",
    summary:
      "Au début de 1488, la petite flotte de Bartolomeu Dias fut entraînée au sud de la pointe de l’Afrique, toucha terre à Mossel Bay, côté océan Indien, et aperçut le cap de Bonne-Espérance sur le chemin du retour.",
    context:
      "Des décennies d’explorations portugaises, sous le prince Henri puis sous le roi Jean II, avaient permis de dépasser la Côte-de-l’Or jusqu’à l’Angola. Dias prouva que l’Atlantique débouchait sur l’océan Indien ; selon le chroniqueur João de Barros, le roi rebaptisa son « cap des Tempêtes » en cap de Bonne-Espérance.",
    whyHere:
      "Au large du sud-ouest de l’Afrique, le courant de Benguela et les alizés du sud-est soufflent de face pour un navire qui longe la côte. En gagnant le large, Dias trouva les vents d’ouest des hautes latitudes australes, qui le portèrent vers l’est au-delà de la pointe du continent : c’est la grande boucle hauturière, la volta do mar, que les flottes suivantes rendirent routinière.",
  },
  "sail-columbus": {
    title: "Colomb traverse l’Atlantique",
    place: "Guanahani (San Salvador), Bahamas",
    summary:
      "Partis de Palos pour le compte de la Castille et passés par les Canaries, les trois navires de Christophe Colomb touchèrent terre aux Bahamas le 12 octobre 1492, puis gagnèrent Cuba et Hispaniola, où la Santa María s’échoua le jour de Noël.",
    context:
      "Le Portugal avait rejeté le projet de Colomb d’atteindre l’Asie par l’ouest, jugeant à raison qu’il sous-estimait la taille de la Terre. Isabelle et Ferdinand, tout juste vainqueurs de Grenade, le soutinrent, et il continua d’affirmer qu’il avait atteint les confins de l’Asie.",
    whyHere:
      "Colomb descendit d’abord jusqu’aux Canaries avant de virer à l’ouest, plaçant ses navires dans la ceinture des alizés du nord-est, qui soufflèrent régulièrement en poupe pendant toute la traversée. Pour rentrer, il remonta au nord chercher les vents d’ouest et mit le cap sur les Açores, traçant le grand circuit des vents de l’Atlantique Nord, tournant dans le sens des aiguilles d’une montre, que la navigation espagnole suivrait pendant trois siècles.",
  },
  "sail-columbian-exchange": {
    title: "Les débuts de l’échange colombien",
    place: "La Isabela, Hispaniola",
    summary:
      "Le deuxième voyage de Colomb, en 1493, amena à Hispaniola des colons, du bétail, du blé et de la canne à sucre, amorçant entre les deux hémisphères un transfert réciproque de plantes, d’animaux, d’êtres humains et d’agents pathogènes.",
    context:
      "La variole et d’autres maladies de l’Ancien Monde décimèrent des peuples autochtones qui n’y avaient jamais été exposés, tandis que le maïs, la pomme de terre et le manioc se répandaient en Afrique, en Europe et en Asie, contribuant à nourrir la croissance démographique ultérieure. L’historien Alfred Crosby forgea l’expression en 1972.",
    whyHere:
      "Hispaniola se trouvait au bout de la course des alizés depuis les Canaries : elle devint le premier point d’arrivée de tout ce qui était transporté vers l’ouest. Ses basses terres chaudes et humides convenaient à la canne à sucre, que les Ibériques avaient déjà plantée à Madère et aux Canaries.",
    schematic: {
      westLabel: "Amériques",
      eastLabel: "Afro-Eurasie",
      eastbound: ["maïs", "pommes de terre", "manioc", "cacao", "tabac"],
      westbound: ["chevaux", "bovins", "blé", "canne à sucre", "variole"],
    },
  },
  "sail-tordesillas": {
    title: "Le traité de Tordesillas",
    place: "Tordesillas, Castille",
    summary:
      "Le 7 juin 1494, la Castille et le Portugal convinrent de se partager les terres nouvellement découvertes hors d’Europe selon un méridien situé à 370 lieues à l’ouest des îles du Cap-Vert, l’ouest revenant à la Castille et l’est au Portugal.",
    context:
      "Une bulle pontificale de 1493 avait tracé une ligne à seulement 100 lieues à l’ouest des Açores et du Cap-Vert, favorable à la Castille après le retour de Colomb. Jean II obtint par la négociation une ligne plus occidentale ; son tracé de l’autre côté du globe resta disputé jusqu’au traité de Saragosse, en 1529.",
    whyHere:
      "La ligne courait en plein Atlantique, vers 46 degrés de longitude ouest, laissant aux flottes portugaises la place de leur large détour vers l’ouest sur la route du Cap. Elle tranchait aussi le renflement oriental de l’Amérique du Sud, ce qui explique que le Brésil soit devenu portugais.",
  },
  "sail-gama-calicut": {
    title: "Vasco de Gama atteint Calicut",
    place: "Calicut (Kozhikode), côte de Malabar",
    summary:
      "Après avoir doublé le Cap et embarqué un pilote à Malindi, Vasco de Gama traversa la mer d’Arabie et jeta l’ancre devant Calicut en mai 1498, ouvrant la première route entièrement maritime de l’Europe à l’Inde.",
    context:
      "Calicut, gouvernée par le Zamorin, était un port prospère où les marchands musulmans d’Arabie, d’Égypte et du Gujarat dominaient le commerce au long cours. Les marchandises de Gama ne firent guère impression, mais le poivre et les épices qu’il rapporta en 1499 montrèrent que la route permettait de contourner Venise et la mer Rouge contrôlée par les Mamelouks.",
    whyHere:
      "La côte de Malabar était le grand jardin à poivre du monde, et ses ports vivaient au rythme de la mousson : celle du sud-ouest portait les navires de l’Afrique orientale à l’Inde en quelques semaines. Gama la saisit à Malindi et traversa en moins de quatre semaines, mais le retour contre le vent prit près de trois mois, et le scorbut emporta des dizaines de ses hommes.",
    schematic: {
      westLabel: "Lisbonne",
      eastLabel: "Calicut",
      eastbound: ["argent", "or", "cuivre", "corail"],
      westbound: ["poivre", "gingembre", "cannelle", "clous de girofle"],
    },
  },
  "sail-cabral-brazil": {
    title: "Cabral atteint le Brésil",
    place: "Porto Seguro, Bahia",
    summary:
      "En route vers l’Inde avec treize navires, Pedro Álvares Cabral s’écarta si loin vers l’ouest dans l’Atlantique Sud que, le 22 avril 1500, sa flotte aperçut le mont Pascoal, sur la côte du Brésil, dont il prit possession au nom du Portugal.",
    context:
      "Cabral renvoya au pays un navire de ravitaillement porteur de la nouvelle, dont la lettre de Pero Vaz de Caminha décrivant la terre et ses habitants, puis poursuivit vers l’Inde ; on débat encore de savoir si l’atterrissage était prémédité. Une tempête près du Cap envoya par le fond plusieurs navires, et Bartolomeu Dias s’y noya.",
    whyHere:
      "Pour éviter les calmes du golfe de Guinée et rejoindre les vents d’ouest austraux, les flottes portugaises décrivaient un long arc vers le sud-ouest à travers l’Atlantique. Le renflement oriental du Brésil s’avance vers l’Afrique sur cette trajectoire, et il se trouvait à l’est de la ligne de Tordesillas, dans la moitié portugaise.",
  },
  "sail-diu": {
    title: "La bataille de Diu",
    place: "Diu, Gujarat",
    summary:
      "Le 3 février 1509, le vice-roi portugais Francisco de Almeida anéantit au large de Diu une flotte coalisée de l’Égypte mamelouke, du sultanat du Gujarat et du Zamorin de Calicut.",
    context:
      "Les Mamelouks, dont les revenus dépendaient des épices transitant par la mer Rouge, avaient envoyé une flotte qui tua Lourenço, le fils d’Almeida, à Chaul en 1508. La victoire de Diu fit des navires portugais, armés d’une lourde artillerie embarquée, la force navale dominante de la mer d’Arabie pendant la majeure partie du siècle.",
    whyHere:
      "Diu est une petite île au large de la pointe méridionale de la péninsule du Kathiawar, près de l’entrée du golfe de Khambhat, débouché des ateliers textiles du Gujarat et point de départ des voyages vers la mer Rouge et le golfe Persique. Son port abrité commandait le commerce maritime le plus riche de l’Inde occidentale.",
  },
  "sail-goa": {
    title: "Albuquerque prend Goa",
    place: "Goa, côte du Konkan",
    summary:
      "Afonso de Albuquerque enleva Goa au sultanat de Bijapur en mars 1510, la perdit en quelques mois, puis la reprit définitivement le 25 novembre 1510.",
    context:
      "Albuquerque entendait dominer l’océan Indien par quelques bases fortifiées plutôt que par de vastes territoires ; Goa devint le cœur de l’Estado da Índia et, à partir de 1530, le siège de ses vice-rois. Depuis ces bases, les Portugais imposaient le cartaz, un sauf-conduit dont les navires asiatiques avaient besoin pour ne pas être saisis.",
    whyHere:
      "Goa est une île entre les estuaires de la Mandovi et du Zuari, facile à défendre côté terre et dotée d’un mouillage abrité. C’était aussi un port par lequel les chevaux de guerre arabes et persans parvenaient aux royaumes belliqueux du Deccan, un commerce lucratif qu’Albuquerque entendait contrôler.",
  },
  "sail-malacca-1511": {
    title: "La prise de Malacca par les Portugais",
    place: "Malacca, péninsule Malaise",
    summary:
      "En août 1511, Afonso de Albuquerque prit d’assaut Malacca, le port le plus riche d’Asie du Sud-Est, contraignit le sultan Mahmud Shah à l’exil et bâtit la forteresse plus tard connue sous le nom d’A Famosa.",
    context:
      "Les sultans de Malacca s’étaient enrichis en accueillant les marchands du Gujarat, du Bengale, de Chine, de Java et des Moluques. Les Portugais ne parvinrent jamais à monopoliser ce commerce : les marchands musulmans se reportèrent sur des ports rivaux comme Aceh et Johor, l’État fondé par le successeur du sultan exilé.",
    whyHere:
      "Le détroit de Malacca est le plus court passage maritime entre l’océan Indien et la mer de Chine méridionale, et les moussons s’y rencontrent. Les navires venus d’Inde arrivaient avec la mousson du sud-ouest et les jonques chinoises avec celle du nord-est : les uns comme les autres devaient attendre au port que le vent tourne, ce qui faisait naturellement de Malacca un entrepôt.",
    schematic: {
      steps: [
        "Les moussons se rencontrent au détroit",
        "Les flottes attendent le vent",
        "Malacca devient l’entrepôt",
        "Le Portugal s’empare du passage",
        "Le commerce se reporte sur Aceh et Johor",
      ],
    },
  },
  "sail-hormuz": {
    title: "Albuquerque s’assure d’Ormuz",
    place: "Île d’Ormuz, golfe Persique",
    summary:
      "Revenu devant une ville qu’il avait attaquée en 1507, Albuquerque s’assura d’Ormuz en 1515, faisant de son roi un vassal du Portugal et bâtissant une forteresse à l’entrée du golfe Persique ; il mourut plus tard dans l’année au large de Goa.",
    context:
      "Les souverains d’Ormuz s’étaient enrichis comme intermédiaires entre la Perse, l’Arabie et l’Inde, et le Portugal taxait désormais ce trafic. La Perse safavide supportait mal cet arrangement, et en 1622 le chah Abbas Ier, aidé par des navires de la Compagnie anglaise des Indes orientales, chassa les Portugais.",
    whyHere:
      "Ormuz est une île de sel aride, presque dépourvue d’eau douce, mais elle se dresse dans le détroit qui forme l’unique entrée maritime du golfe Persique. Tout navire chargé de chevaux persans, de perles du Golfe ou des marchandises de Bassora devait passer sous ses murs.",
  },
};
