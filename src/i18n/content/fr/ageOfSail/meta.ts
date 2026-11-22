import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’âge de la voile et les verrous maritimes du monde",
  subtitle: "Comment les vents et les mers étroites ont bâti les premiers empires mondiaux",
  summary:
    "Entre 1415 et 1700, quelques régimes de vents et une poignée de détroits et de caps décidèrent de qui pouvait atteindre qui par la mer. Marins portugais, espagnols, néerlandais et anglais apprirent à chevaucher les alizés, les vents d’ouest et les moussons, et leurs empires reposèrent sur la prise des passages entre les océans, de Ceuta et du Cap à Ormuz, Malacca et Manille.",
  keywords: [
    "âge de la voile",
    "grandes découvertes",
    "verrous maritimes",
    "alizés",
    "mousson",
    "volta do mar",
    "vasco de gama",
    "christophe colomb",
    "fernand de magellan",
    "galion de manille",
    "commerce des épices",
    "détroit de malacca",
    "cap de bonne-espérance",
    "détroit d’ormuz",
    "argent de potosí",
    "compagnie néerlandaise des indes orientales",
    "estado da índia",
    "traite atlantique",
    "passage du milieu",
    "flotte des indes",
  ],
  chapters: {
    "sail-ch-ceuta": {
      title: "La porte du détroit",
      caption:
        "En s’emparant de Ceuta, le Portugal prit pied pour l’Europe sur la rive africaine du détroit qui unit la Méditerranée à l’Atlantique.",
    },
    "sail-ch-cape": {
      title: "Doubler le Cap",
      caption:
        "En prenant le large, Bartolomeu Dias trouva les vents d’ouest australs et se glissa au-delà de la pointe de l’Afrique, dans l’océan Indien.",
    },
    "sail-ch-atlantic": {
      title: "Porté par les alizés",
      caption:
        "Depuis les Canaries, les alizés du nord-est portèrent Colomb vers l’ouest jusqu’aux Bahamas ; les vents d’ouest, près des Açores, le ramenèrent chez lui.",
    },
    "sail-ch-monsoon": {
      title: "La porte de la mousson",
      caption:
        "Porté par la mousson du sud-ouest depuis Malindi, Vasco de Gama traversa la mer d’Arabie jusqu’aux ports du poivre de Malabar en moins de quatre semaines.",
    },
    "sail-ch-malacca": {
      title: "La gorge du commerce des épices",
      caption:
        "À Malacca, là où se rencontrent les moussons, Albuquerque s’empara du passage par lequel les épices de l’archipel s’écoulaient vers l’ouest.",
    },
    "sail-ch-strait": {
      title: "Par le détroit",
      caption:
        "La flotte de Magellan se faufila par le détroit qui s’ouvre au pied de l’Amérique du Sud et déboucha sur un océan bien plus vaste qu’on ne l’avait imaginé.",
    },
    "sail-ch-pacific": {
      title: "La boucle du Pacifique",
      caption:
        "Vers l’ouest avec les alizés, vers l’est avec le Kuroshio et les vents d’ouest, les galions de Manille unirent l’argent américain à la soie chinoise.",
    },
    "sail-ch-roaring-forties": {
      title: "Les quarantièmes rugissants",
      caption:
        "Filant vers l’est devant les vents d’ouest des quarantièmes rugissants, les navires néerlandais remontaient au nord vers le détroit de la Sonde et leur nouvelle base de Batavia.",
    },
    "sail-ch-table-bay": {
      title: "Mi-parcours à la baie de la Table",
      caption:
        "Au pied de la montagne de la Table, la VOC établit un fort et des jardins pour nourrir les équipages, à mi-chemin entre le Texel et Batavia.",
    },
  },
  arcs: {
    "sail-arc-carreira": {
      label: "Carreira da Índia : de Lisbonne à Goa",
      cargo: ["poivre", "cannelle", "argent", "cuivre"],
    },
    "sail-arc-columbus": { label: "Premier voyage de Colomb, aller et retour" },
    "sail-arc-magellan": { label: "Expédition de Magellan : de Sanlúcar à Guam par le détroit" },
    "sail-arc-galleon-west": {
      label: "Galion de Manille : d’Acapulco à Manille avec les alizés",
      cargo: ["pesos d’argent", "soldats", "missionnaires"],
    },
    "sail-arc-tornaviaje": {
      label: "Galion de Manille : la tornaviaje vers Acapulco",
      cargo: ["soie", "porcelaine", "épices", "cotonnades"],
    },
    "sail-arc-flota": {
      label: "Flotte des Indes : de Veracruz et La Havane à Séville",
      cargo: ["argent", "or", "cochenille", "cuirs"],
    },
    "sail-arc-voc": { label: "Route de la VOC : du Texel à Batavia par les quarantièmes rugissants" },
    "sail-arc-spice": {
      label: "Route des épices : de Banda à Malacca",
      cargo: ["noix de muscade", "macis", "clous de girofle", "bois de santal"],
    },
    "sail-arc-fujian": {
      label: "De l’argent contre de la soie : de Manille au Fujian",
      cargo: ["argent", "soie", "porcelaine"],
    },
    "sail-arc-middle-passage-angola": { label: "Passage du milieu : de Luanda à Bahia" },
    "sail-arc-middle-passage-guinea": { label: "Passage du milieu : de la Côte-de-l’Or à la Barbade et à la Jamaïque" },
  },
  territories: {
    "sail-zone-estado-da-india": { name: "Estado da Índia (sphère de la mer d’Arabie)" },
    "sail-zone-new-spain": { name: "Vice-royauté de Nouvelle-Espagne" },
    "sail-zone-peru": { name: "Vice-royauté du Pérou" },
    "sail-zone-ottoman": { name: "Empire ottoman" },
    "sail-zone-safavid": { name: "Perse safavide" },
    "sail-zone-mughal": { name: "Empire moghol" },
    "sail-zone-ming": { name: "Chine des Ming" },
    "sail-zone-voc": { name: "Indes orientales néerlandaises (sphère de la VOC)" },
  },
};
