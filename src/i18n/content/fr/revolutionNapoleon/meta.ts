import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La Révolution française et Napoléon",
  subtitle: "Des états généraux à Sainte-Hélène, un continent redessiné",
  summary:
    "En 1789, une monarchie en faillite convoque ses sujets à Versailles et déclenche une révolution qui renverse un roi, abolit l’esclavage dans les colonies et plonge l’Europe dans une guerre d’une génération. Suivez-la de la Bastille à la Terreur, de l’indépendance d’Haïti à l’empire de Napoléon étendu de l’Atlantique au Niémen, des neiges de Russie à Waterloo et à la carte redessinée à Vienne.",
  keywords: [
    "révolution française",
    "napoléon",
    "bonaparte",
    "bastille",
    "droits de l’homme",
    "robespierre",
    "terreur",
    "révolution haïtienne",
    "toussaint louverture",
    "égypte",
    "code civil",
    "vente de la louisiane",
    "trafalgar",
    "austerlitz",
    "blocus continental",
    "guerre d’espagne",
    "campagne de russie",
    "koutouzov",
    "waterloo",
    "wellington",
    "congrès de vienne",
    "sainte-hélène",
  ],
  chapters: {
    "napo-ch-bastille": {
      title: "La chute de la Bastille",
      caption:
        "Craignant un coup de force royal, les Parisiens prennent d’assaut la forteresse qui garde la porte orientale de leur ville et s’emparent de sa poudre.",
    },
    "napo-ch-saint-domingue": {
      title: "Saint-Domingue s’embrase",
      caption:
        "Dans les plaines sucrières de la plus riche colonie du monde, les esclaves se soulèvent et prennent la Révolution au mot.",
    },
    "napo-ch-republic": {
      title: "La République en guerre",
      caption:
        "Les colonnes prussiennes sont arrêtées dans les collines de Champagne, et dès le lendemain la France abolit la monarchie.",
    },
    "napo-ch-terror": {
      title: "La Terreur et Thermidor",
      caption:
        "Un roi, une reine puis des milliers de suspects périssent sur l’échafaud, jusqu’à ce que la Terreur dévore Robespierre lui-même.",
    },
    "napo-ch-egypt": {
      title: "Bonaparte en Égypte",
      caption:
        "Une armée française et ses savants débarquent sur le Nil, avant que Nelson ne détruise la flotte qui les a amenés.",
    },
    "napo-ch-emperor": {
      title: "Le Code et la couronne",
      caption:
        "La France reçoit une seule loi pour tous les citoyens, et le général qui la lui donne se couronne empereur à Notre-Dame.",
    },
    "napo-ch-austerlitz": {
      title: "Le soleil d’Austerlitz",
      caption:
        "La Grande-Bretagne gagne la mer à Trafalgar, mais sur terre la Grande Armée déferle de la Manche jusqu’aux plaines de Moravie.",
    },
    "napo-ch-russia": {
      title: "En Russie",
      caption:
        "La plus grande armée que l’Europe ait jamais vue marche sur Moscou, et seule une fraction de ses hommes en revient.",
    },
    "napo-ch-waterloo": {
      title: "Waterloo et Vienne",
      caption:
        "Un dernier coup de dés échoue sur une crête belge, tandis qu’à Vienne les diplomates redessinent la carte de l’Europe.",
    },
  },
  arcs: {
    "napo-arc-sugar": { label: "Sucre et café : de Saint-Domingue à Bordeaux", cargo: ["sucre", "café", "indigo", "coton"] },
    "napo-arc-varennes": { label: "La fuite de la famille royale vers Montmédy" },
    "napo-arc-valmy": { label: "L’invasion prussienne de 1792" },
    "napo-arc-italy": { label: "L’armée d’Italie, de Nice à Rivoli" },
    "napo-arc-egypt": { label: "L’expédition d’Égypte, de Toulon au Caire" },
    "napo-arc-return": { label: "Le retour d’Égypte de Bonaparte" },
    "napo-arc-marengo": { label: "Par le col du Grand-Saint-Bernard jusqu’à Marengo" },
    "napo-arc-leclerc": { label: "L’expédition de Leclerc à Saint-Domingue" },
    "napo-arc-mississippi": {
      label: "En descendant le Mississippi jusqu’à La Nouvelle-Orléans",
      cargo: ["céréales", "farine", "fourrures", "coton", "bois"],
    },
    "napo-arc-trafalgar": { label: "La diversion atlantique de Villeneuve" },
    "napo-arc-austerlitz": { label: "De la Manche à Austerlitz" },
    "napo-arc-tilsit": { label: "D’Iéna au Niémen" },
    "napo-arc-smuggling": {
      label: "La route des contrebandiers : de Londres à Göteborg",
      cargo: ["sucre", "café", "cotonnades", "indigo"],
    },
    "napo-arc-wellington": { label: "La route de Wellington, de Lisbonne à Toulouse" },
    "napo-arc-russia-advance": { label: "La Grande Armée marche sur Moscou" },
    "napo-arc-russia-retreat": { label: "La retraite de Moscou par la Bérézina" },
    "napo-arc-eagle": { label: "Le vol de l’Aigle : de l’île d’Elbe à Paris" },
    "napo-arc-helena": { label: "L’exil à Sainte-Hélène" },
  },
  territories: {
    "napo-terr-france": { name: "Royaume de France" },
    "napo-terr-republic": { name: "République française et débuts de l’Empire" },
    "napo-terr-empire": { name: "L’Empire français à son apogée" },
    "napo-terr-rhine": { name: "Confédération du Rhin" },
    "napo-terr-warsaw": { name: "Duché de Varsovie" },
    "napo-terr-italy": { name: "Royaume d’Italie" },
    "napo-terr-haiti": { name: "Haïti" },
    "napo-terr-louisiana": { name: "Louisiane cédée aux États-Unis" },
    "napo-terr-netherlands": { name: "Royaume uni des Pays-Bas" },
  },
};
