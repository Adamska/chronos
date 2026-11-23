import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’Empire ottoman",
  subtitle: "D’un beylicat de frontière aux portes de Vienne",
  summary:
    "Une petite principauté turkmène de la frontière byzantine passa en Europe, survécut au désastre d’Ankara et prit Constantinople, avant d’engloutir le sultanat mamelouk et de remonter le Danube jusqu’à Vienne. Suivez quatre siècles de puissance ottomane à travers détroits, routes fluviales, voies maritimes et pistes caravanières, des premiers raids d’Osman vers 1299 au traité de Karlowitz en 1699.",
  keywords: [
    "empire ottoman",
    "ottomans",
    "turcs",
    "osman",
    "mehmed le conquérant",
    "chute de constantinople",
    "istanbul",
    "topkapı",
    "sélim",
    "mamelouks",
    "soliman le magnifique",
    "hürrem sultan",
    "roxelane",
    "sinan",
    "mohács",
    "siège de vienne",
    "barberousse",
    "lépante",
    "janissaires",
    "karlowitz",
  ],
  chapters: {
    "ottoman-ch-osman": {
      title: "Un beylicat de frontière",
      caption:
        "Au bord du plateau anatolien, la petite troupe de cavaliers turkmènes d’Osman guette les riches vallées byzantines en contrebas.",
    },
    "ottoman-ch-gallipoli": {
      title: "Le pas vers l’Europe",
      caption: "Un séisme ouvre les murailles de Gallipoli, et les Ottomans prennent pied durablement sur la rive européenne.",
    },
    "ottoman-ch-ankara": {
      title: "Le coup de Tamerlan",
      caption:
        "Tamerlan capture le sultan Bayezid à Ankara, et le jeune empire manque de se disloquer en dix ans de guerre civile.",
    },
    "ottoman-ch-1453": {
      title: "La Ville tombe",
      caption:
        "Mehmed II fait passer ses navires par-dessus une colline, perce les murailles terrestres et fait de Constantinople sa capitale.",
    },
    "ottoman-ch-selim": {
      title: "Maître du Caire",
      caption:
        "En deux batailles, Sélim Ier anéantit le sultanat mamelouk et s’empare de la Syrie, de l’Égypte et des villes saintes d’Arabie.",
    },
    "ottoman-ch-mohacs": {
      title: "En remontant le Danube",
      caption:
        "Soliman prend Belgrade, écrase la Hongrie à Mohács et, trois ans plus tard, se dresse devant les murs de Vienne.",
    },
    "ottoman-ch-lepanto": {
      title: "Guerre sur la Méditerranée",
      caption:
        "Au large de Lépante, la Sainte Ligue détruit une flotte ottomane, mais en moins d’un an l’arsenal du sultan en a construit une autre.",
    },
    "ottoman-ch-vienna": {
      title: "Vienne, encore",
      caption: "Le grand siège de Kara Mustafa s’effondre quand l’armée de secours de Sobieski dévale du Kahlenberg.",
    },
    "ottoman-ch-karlowitz": {
      title: "Le reflux",
      caption:
        "À Karlowitz, le sultan renonce à la Hongrie\u00a0: c’est la première grande cession de territoires de l’histoire de l’empire.",
    },
  },
  arcs: {
    "ottoman-arc-bithynia": { label: "Osman et Orhan\u00a0: de Söğüt à Bursa" },
    "ottoman-arc-gallipoli": { label: "Par les Dardanelles jusqu’à Andrinople" },
    "ottoman-arc-kosovo": { label: "La marche de Murad vers le champ de Kosovo" },
    "ottoman-arc-timur": {
      label: "L’avancée de Tamerlan sur Ankara",
      cargo: ["cavaliers d’Asie centrale", "éléphants de guerre"],
    },
    "ottoman-arc-golden-horn": {
      label: "Des navires hissés par-dessus la colline de Galata",
      cargo: ["galères", "rondins graissés", "bœufs"],
    },
    "ottoman-arc-silk": { label: "La route de la soie, de Tabriz à Bursa", cargo: ["soie grège", "teintures", "tapis"] },
    "ottoman-arc-selim": { label: "La campagne de Sélim contre les Mamelouks" },
    "ottoman-arc-hajj": {
      label: "La caravane des pèlerins de Damas",
      cargo: ["pèlerins", "étoffes", "céréales", "aumônes"],
    },
    "ottoman-arc-danube": {
      label: "La route de Soliman vers Vienne",
      cargo: ["janissaires", "cavalerie", "canons"],
    },
    "ottoman-arc-rhodes": { label: "La flotte fait voile vers Rhodes" },
    "ottoman-arc-baghdad": { label: "La campagne des deux Irak" },
    "ottoman-arc-corsairs": {
      label: "Barberousse\u00a0: d’Alger à Préveza",
      cargo: ["galères", "captifs", "butin"],
    },
    "ottoman-arc-toulon": { label: "La flotte de Barberousse à Nice et Toulon" },
    "ottoman-arc-lepanto": { label: "La flotte de la Sainte Ligue, de Messine à Lépante" },
    "ottoman-arc-venice": {
      label: "Les galères vénitiennes vers Istanbul",
      cargo: ["draps de laine", "verre", "soie grège", "épices"],
    },
    "ottoman-arc-coffee": {
      label: "Le café, de Moka à Istanbul",
      cargo: ["café", "épices", "cotonnades indiennes"],
    },
    "ottoman-arc-vienna-1683": {
      label: "Kara Mustafa marche sur Vienne",
      cargo: ["janissaires", "canons de siège", "cavaliers tatars"],
    },
    "ottoman-arc-sobieski": {
      label: "L’armée de secours de Sobieski",
      cargo: ["hussards ailés", "infanterie allemande"],
    },
  },
  territories: {
    "ottoman-terr-beylik": { name: "Le beylicat d’Osman" },
    "ottoman-terr-byzantium": { name: "Empire byzantin" },
    "ottoman-terr-bayezid": { name: "Domaine ottoman sous Bayezid Ier" },
    "ottoman-terr-mamluk": { name: "Sultanat mamelouk" },
    "ottoman-terr-mehmed": { name: "Empire ottoman sous Mehmed II" },
    "ottoman-terr-safavid": { name: "Iran safavide" },
    "ottoman-terr-height": { name: "L’Empire ottoman à son apogée" },
    "ottoman-terr-barbary": { name: "Régences barbaresques d’Alger, Tunis et Tripoli" },
    "ottoman-terr-habsburg": { name: "Monarchie des Habsbourg" },
  },
};
