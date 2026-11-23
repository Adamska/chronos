import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La Première Guerre mondiale",
  subtitle: "Quatre années qui brisèrent des empires et redessinèrent la carte du monde",
  summary:
    "Deux coups de feu à Sarajevo déclenchent un engrenage d’alliances et de mobilisations qui entraîne l’Europe, ses empires puis les États-Unis dans une guerre de tranchées, de blocus et de morts de masse. Suivez la Grande Guerre de la Marne aux Dardanelles, de Verdun aux révolutions russes et aux déserts d’Arabie, jusqu’à l’armistice de 1918 et aux traités qui refaçonnèrent l’Europe et le Moyen-Orient jusqu’en 1923.",
  keywords: [
    "première guerre mondiale",
    "grande guerre",
    "14-18",
    "poilus",
    "sarajevo",
    "françois-ferdinand",
    "front occidental",
    "tranchées",
    "marne",
    "verdun",
    "somme",
    "chemin des dames",
    "dardanelles",
    "génocide arménien",
    "révolution russe",
    "lawrence d’arabie",
    "armistice",
    "traité de versailles",
    "grippe espagnole",
    "clemenceau",
  ],
  chapters: {
    "ww1-ch-sarajevo": {
      title: "Coups de feu à Sarajevo",
      caption:
        "L’assassinat de l’héritier des Habsbourg dans une ville des Balkans met en branle alliances, ultimatums et horaires ferroviaires dans toute l’Europe.",
    },
    "ww1-ch-marne": {
      title: "Du mouvement aux tranchées",
      caption:
        "La ruée allemande à travers la Belgique est arrêtée sur la Marne, et les armées creusent une ligne de la mer du Nord à la Suisse.",
    },
    "ww1-ch-gallipoli": {
      title: "Le front ottoman",
      caption:
        "Les soldats alliés meurent sur les plages des Dardanelles, tandis que le gouvernement ottoman extermine sa population arménienne.",
    },
    "ww1-ch-attrition": {
      title: "L’année de l’usure",
      caption:
        "À Verdun et sur la Somme, l’artillerie et les mitrailleuses font des champs du nord de la France un désert de boue.",
    },
    "ww1-ch-america": {
      title: "L’Amérique entre en guerre",
      caption:
        "La guerre sous-marine à outrance et un télégramme intercepté entraînent les États-Unis dans la guerre, de l’autre côté de l’Atlantique.",
    },
    "ww1-ch-revolution": {
      title: "La révolution en Russie",
      caption:
        "La faim et la défaite renversent le tsar, et les bolcheviks prennent le pouvoir à Petrograd en promettant la paix à tout prix.",
    },
    "ww1-ch-armistice": {
      title: "Les canons se taisent",
      caption:
        "Après un dernier coup de dés allemand et cent jours d’offensives alliées, l’armistice est signé en forêt de Compiègne.",
    },
    "ww1-ch-versailles": {
      title: "Faire la paix",
      caption:
        "Dans la galerie des Glaces, l’Allemagne signe une paix qu’elle n’a pas négociée, tandis que de nouvelles nations naissent des ruines des empires.",
    },
    "ww1-ch-lausanne": {
      title: "Un nouveau Moyen-Orient",
      caption:
        "Une Turquie nouvelle est reconnue à Lausanne, tandis que la Grande-Bretagne et la France gouvernent les terres arabes sous mandat.",
    },
  },
  arcs: {
    "ww1-arc-schlieffen": {
      label: "L’aile droite allemande à travers la Belgique",
      cargo: ["infanterie", "obusiers de siège", "cavalerie"],
    },
    "ww1-arc-east-prussia": { label: "L’armée de Samsonov marche sur la Prusse-Orientale" },
    "ww1-arc-race-to-sea": { label: "La course à la mer" },
    "ww1-arc-indian-convoy": { label: "Les transports de troupes indiens vers Marseille", cargo: ["corps indien", "chevaux", "rations"] },
    "ww1-arc-anzac-convoy": {
      label: "Les convois de l’ANZAC vers l’Égypte et les Dardanelles",
      cargo: ["infanterie australienne", "infanterie néo-zélandaise", "chevaux"],
    },
    "ww1-arc-east-africa": { label: "La longue retraite de Lettow-Vorbeck", cargo: ["askaris", "porteurs"] },
    "ww1-arc-deportations": { label: "Les routes de la déportation vers le désert syrien" },
    "ww1-arc-voie-sacree": { label: "La Voie sacrée, de Bar-le-Duc à Verdun", cargo: ["troupes", "obus", "vivres"] },
    "ww1-arc-grand-fleet": { label: "La Grand Fleet appareille de Scapa Flow", cargo: ["cuirassés", "croiseurs de bataille"] },
    "ww1-arc-high-seas-fleet": { label: "La Hochseeflotte quitte la Jade", cargo: ["cuirassés", "croiseurs de bataille"] },
    "ww1-arc-atlantic": { label: "Les convois américains vers la France", cargo: ["sammies", "munitions", "blé", "pétrole"] },
    "ww1-arc-lenin": { label: "Le train plombé de Lénine vers Petrograd", cargo: ["exilés bolcheviks"] },
    "ww1-arc-arab-revolt": { label: "La révolte arabe remonte vers le nord", cargo: ["chameaux", "fusils", "or britannique"] },
    "ww1-arc-allenby": { label: "L’avance d’Allenby, de l’Égypte à Damas" },
    "ww1-arc-michael": { label: "L’opération Michael fonce vers Amiens", cargo: ["troupes d’assaut", "artillerie"] },
    "ww1-arc-hundred-days": { label: "Les Cent-Jours\u00a0: d’Amiens à Mons", cargo: ["chars", "avions", "infanterie"] },
    "ww1-arc-influenza": { label: "La grippe le long des routes maritimes de la guerre", cargo: ["grippe"] },
  },
  territories: {
    "ww1-terr-germany": { name: "Empire allemand" },
    "ww1-terr-austria-hungary": { name: "Autriche-Hongrie" },
    "ww1-terr-ottoman": { name: "Empire ottoman" },
    "ww1-terr-western-front": { name: "La ligne des tranchées du front occidental" },
    "ww1-terr-german-east-africa": { name: "Afrique orientale allemande" },
    "ww1-terr-brest-litovsk": { name: "Les territoires cédés par la Russie à Brest-Litovsk" },
    "ww1-terr-french-mandate": { name: "Mandat français en Syrie et au Liban" },
    "ww1-terr-british-mandates": { name: "Mandats britanniques\u00a0: Palestine, Transjordanie et Irak" },
    "ww1-terr-turkey": { name: "République de Turquie" },
  },
};
