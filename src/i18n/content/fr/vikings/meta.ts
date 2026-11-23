import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "Les Vikings",
  subtitle: "Pillards, marchands et colons venus des fjords du Nord",
  summary:
    "Pendant près de trois siècles, des navires partis de Scandinavie emportèrent pillards, marchands et familles de paysans sur les mers et le long des fleuves d’Europe. Suivez-les du raid de Lindisfarne en 793 à la fondation de Dublin, de la Normandie et de Kiev, à travers l’Atlantique jusqu’en Islande, au Groenland et à Terre-Neuve, puis jusqu’à Constantinople et à la Volga, avant l’échec de la dernière grande invasion de l’Angleterre en 1066.",
  keywords: [
    "vikings",
    "normands",
    "hommes du Nord",
    "varègues",
    "rus’",
    "drakkars",
    "lindisfarne",
    "danelaw",
    "alfred le grand",
    "rollon",
    "normandie",
    "islande",
    "althing",
    "érik le rouge",
    "groenland",
    "leif erikson",
    "vinland",
    "harald à la dent bleue",
    "knut le grand",
    "harald hardrada",
    "stamford bridge",
  ],
  chapters: {
    "viking-ch-lindisfarne": {
      title: "La terreur venue de la mer",
      caption:
        "Partis de l’ouest de la Norvège, des navires traversent la mer du Nord et pillent Lindisfarne, le monastère le plus vénéré du nord de l’Angleterre.",
    },
    "viking-ch-rivers": {
      title: "Des fleuves de butin",
      caption:
        "Les pillards hivernent en Irlande et fondent Dublin, puis remontent la Seine et rançonnent Paris pour 7\u00a0000 livres d’argent.",
    },
    "viking-ch-danelaw": {
      title: "Le Danelaw",
      caption:
        "Une grande armée conquiert trois royaumes anglais, jusqu’à ce qu’Alfred de Wessex l’arrête à Edington\u00a0: l’Angleterre est coupée en deux.",
    },
    "viking-ch-rus": {
      title: "La route des Grecs",
      caption:
        "Les Rus’ venus de Suède suivent les fleuves de la Baltique à Kiev et à la mer Noire, échangeant fourrures et esclaves contre l’argent du monde islamique.",
    },
    "viking-ch-normandy": {
      title: "La terre des hommes du Nord",
      caption: "Le roi franc cède la basse Seine au Viking Rollon, qui devient le fondateur de la Normandie.",
    },
    "viking-ch-iceland": {
      title: "Une république dans l’océan",
      caption:
        "Des colons peuplent une île déserte et fondent l’Althing, une assemblée en plein air dans une faille entre deux continents.",
    },
    "viking-ch-vinland": {
      title: "Vers le Nouveau Monde",
      caption:
        "De l’Islande au Groenland, puis à Terre-Neuve\u00a0: des marins nordiques atteignent l’Amérique du Nord cinq siècles avant Christophe Colomb.",
    },
    "viking-ch-cnut": {
      title: "Les rois de la mer du Nord",
      caption:
        "Des rois chrétiens règnent désormais sur le Danemark et la Norvège, et le Danois Knut y ajoute la couronne d’Angleterre pour bâtir un empire de la mer du Nord.",
    },
    "viking-ch-1066": {
      title: "La dernière invasion",
      caption:
        "Harald Hardrada tombe à Stamford Bridge, quelques semaines avant que Guillaume, descendant de Rollon, ne conquière l’Angleterre depuis la Normandie.",
    },
  },
  arcs: {
    "viking-arc-lindisfarne": { label: "À travers la mer du Nord jusqu’à Lindisfarne", cargo: ["argent", "livres", "captifs"] },
    "viking-arc-western-isles": {
      label: "La route des îles du Nord\u00a0: de la Norvège à Dublin",
      cargo: ["colons", "esclaves", "argent"],
    },
    "viking-arc-faroes-iceland": {
      label: "De la Norvège aux Féroé et à l’Islande",
      cargo: ["familles", "moutons", "bétail", "bois"],
    },
    "viking-arc-ansgar": { label: "La mission d’Anschaire\u00a0: de Hambourg à Birka", cargo: ["missionnaires", "Évangiles"] },
    "viking-arc-seine": { label: "En remontant la Seine jusqu’à Paris", cargo: ["guerriers", "butin", "tribut"] },
    "viking-arc-austrvegr": {
      label: "La route de l’Est\u00a0: de Birka à Novgorod",
      cargo: ["fourrures", "argent", "esclaves", "perles"],
    },
    "viking-arc-great-army": { label: "La marche de la Grande Armée à travers l’Angleterre" },
    "viking-arc-volga": { label: "La route de l’argent par la Volga", cargo: ["fourrures", "esclaves", "dirhams", "soie"] },
    "viking-arc-dnieper": {
      label: "La route des Grecs\u00a0: de Novgorod à Constantinople",
      cargo: ["fourrures", "cire", "miel", "esclaves", "soie"],
    },
    "viking-arc-ibn-fadlan": {
      label: "L’ambassade d’Ibn Fadlan\u00a0: de Bagdad à la Volga",
      cargo: ["lettres", "présents", "maîtres de l’islam"],
    },
    "viking-arc-dublin-york": { label: "L’axe Dublin-York", cargo: ["esclaves", "argent", "fourrures"] },
    "viking-arc-greenland": {
      label: "Érik le Rouge fait voile vers le Groenland",
      cargo: ["colons", "bétail", "ivoire de morse"],
    },
    "viking-arc-vinland": { label: "Leif Erikson fait voile vers le Vinland", cargo: ["bois", "raisin", "noix cendrées"] },
    "viking-arc-varangians": { label: "Les Varègues font voile vers Constantinople", cargo: ["guerriers", "haches"] },
    "viking-arc-cnut": { label: "Les traversées de Knut en mer du Nord", cargo: ["flottes", "housecarls", "Danegeld"] },
    "viking-arc-hardrada": { label: "Harald Hardrada envahit l’Angleterre", cargo: ["guerriers", "300 navires"] },
  },
  territories: {
    "viking-terr-dublin": { name: "Royaume norrois de Dublin" },
    "viking-terr-danelaw": { name: "Le Danelaw" },
    "viking-terr-rus": { name: "La Rus’ de Kiev" },
    "viking-terr-normandy": { name: "Duché de Normandie" },
    "viking-terr-iceland": { name: "L’État libre islandais" },
    "viking-terr-denmark": { name: "Royaume de Danemark" },
    "viking-terr-byzantium": { name: "Empire byzantin" },
    "viking-terr-cnut": { name: "L’empire de Knut en mer du Nord" },
  },
};
