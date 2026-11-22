import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’échange colombien : plantes, animaux et maladies",
  subtitle: "Semences, bétail et microbes qui traversèrent l’Atlantique et refaçonnèrent le monde",
  summary:
    "Lorsque les voyages de Colomb réunirent deux hémisphères séparés depuis des millénaires, plantes, bétail, agents pathogènes et êtres humains commencèrent à circuler de l’un à l’autre, transformant régimes alimentaires, paysages et populations, des Andes au Sichuan. Le climat et l’altitude décidèrent où chaque nouveau venu prospérerait : la canne à sucre sur les côtes chaudes et humides, la pomme de terre sur les hautes terres fraîches, le maïs et la patate douce sur les pentes marginales, tandis que les maladies de l’Ancien Monde ravageaient les Amériques.",
  keywords: [
    "échange colombien",
    "alfred crosby",
    "variole",
    "cocoliztli",
    "pomme de terre",
    "maïs",
    "manioc",
    "patate douce",
    "piment",
    "tomate",
    "sucre",
    "tabac",
    "chocolat",
    "quinine",
    "chevaux",
    "comanches",
    "hispaniola",
    "tenochtitlan",
    "pernambouc",
    "traite atlantique",
  ],
  chapters: {
    "cx-ch-second-voyage": {
      title: "Une arche pour Hispaniola",
      caption:
        "Dix-sept navires quittent Cadix avec chevaux, porcs, bovins et canne à sucre, emportant une ferme de l’Ancien Monde vers les Caraïbes.",
    },
    "cx-ch-smallpox": {
      title: "La grande maladie",
      caption:
        "La variole passe de Cuba à la côte du golfe du Mexique et ravage Tenochtitlan, emportant son nouveau souverain.",
    },
    "cx-ch-altiplano": {
      title: "Le pain de l’Altiplano",
      caption:
        "À 4 000 mètres, les pommes de terre séchées par le gel nourrissent Potosí, ville champignon de l’argent où ni le maïs ni le blé ne peuvent pousser.",
    },
    "cx-ch-sugar-slavery": {
      title: "Sucre et esclavage",
      caption:
        "Depuis Luanda, des Africains réduits en esclavage sont déportés à travers l’Atlantique Sud pour travailler dans les champs de canne du Pernambouc et de Bahia.",
    },
    "cx-ch-fujian": {
      title: "Des boutures venues de Manille",
      caption:
        "Rapportée de Luçon, alors espagnole, la patate douce s’enracine sur les collines du Fujian tandis que la famine frappe la côte.",
    },
    "cx-ch-tobacco": {
      title: "La feuille de Virginie",
      caption:
        "John Rolfe plante du tabac caribéen au bord de la James, et l’aversion d’un roi ne peut rien contre l’engouement des Anglais.",
    },
    "cx-ch-plains": {
      title: "Les nations cavalières",
      caption:
        "Les chevaux espagnols se répandent vers le nord depuis le Nouveau-Mexique, et les Comanches s’en servent pour devenir les maîtres des Plaines du Sud.",
    },
    "cx-ch-ireland": {
      title: "La racine de l’Irlande",
      caption:
        "Un tubercule andin nourrit les petits tenanciers irlandais, jusqu’à ce qu’un Grand Gel détruise la récolte et que la famine s’ensuive.",
    },
    "cx-ch-uplands": {
      title: "Les collines surpeuplées de la Chine",
      caption:
        "Le maïs et la patate douce poussent l’agriculture sur les hautes terres escarpées de la Chine, alors que la population approche les 300 millions.",
    },
  },
  arcs: {
    "cx-arc-second-voyage": {
      label: "Le deuxième voyage : de Cadix à Hispaniola",
      cargo: ["chevaux", "porcs", "bovins", "canne à sucre", "blé"],
    },
    "cx-arc-smallpox": { label: "La variole : d’Hispaniola à Tenochtitlan" },
    "cx-arc-potato": { label: "La pomme de terre : du Pérou à Séville, en Irlande et aux Pays-Bas" },
    "cx-arc-maize-africa": { label: "Le maïs : du Cap-Vert à la Côte-de-l’Or et au Kongo" },
    "cx-arc-cassava": { label: "Le manioc : de Bahia à l’Angola et au Kongo" },
    "cx-arc-middle-passage": { label: "La traversée forcée : de Luanda au Pernambouc" },
    "cx-arc-sugar-europe": {
      label: "Le sucre : du Pernambouc à Lisbonne et Amsterdam",
      cargo: ["sucre", "mélasse", "bois-brésil"],
    },
    "cx-arc-chili-india": { label: "Le piment : du Brésil à Goa" },
    "cx-arc-chili-china": { label: "Le piment : de Malacca à Macao et au Sichuan" },
    "cx-arc-sweet-potato": { label: "La patate douce : de Manille au Fujian" },
    "cx-arc-tobacco": { label: "Le tabac : de la Chesapeake à Londres" },
    "cx-arc-horses": { label: "Les chevaux : de Mexico aux Plaines du Sud" },
    "cx-arc-cinchona": { label: "L’écorce des jésuites : de Loja et Lima à Rome" },
  },
  territories: {
    "cx-terr-new-spain": { name: "Caraïbes espagnoles et Nouvelle-Espagne" },
    "cx-terr-peru": { name: "Vice-royauté du Pérou (hautes terres andines)" },
    "cx-terr-brazil-sugar": { name: "Côte sucrière du Brésil portugais" },
    "cx-terr-comancheria": { name: "Comancheria" },
    "cx-terr-kongo": { name: "Royaume du Kongo" },
    "cx-terr-china": { name: "Chine des Ming et des Qing" },
  },
};
