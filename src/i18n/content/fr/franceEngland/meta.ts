import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "France et Angleterre\u00a0: sept siècles de rivalité",
  subtitle: "De Hastings à Waterloo, de part et d’autre de la Manche",
  summary:
    "Pendant trois quarts de millénaire, les rois d’Angleterre et de France se sont disputé des couronnes, des provinces et des océans. Suivez cette rivalité de la conquête normande à l’empire Plantagenêt et à la guerre de Cent Ans, puis jusqu’à la lutte mondiale pour les colonies et l’ultime affrontement de Waterloo\u00a0: une histoire façonnée par la Manche, le commerce du vin gascon, les métiers à tisser flamands et la puissance navale.",
  keywords: [
    "france",
    "angleterre",
    "guerre de cent ans",
    "hastings",
    "guillaume le conquérant",
    "aliénor d’aquitaine",
    "empire plantagenêt",
    "crécy",
    "azincourt",
    "jeanne d’arc",
    "orléans",
    "calais",
    "gascogne",
    "prince noir",
    "henri v",
    "guerre de sept ans",
    "québec",
    "trafalgar",
    "waterloo",
    "wellington",
  ],
  chapters: {
    "rival-ch-conquest": {
      title: "La conquête normande",
      caption: "Un duc de Normandie traverse la Manche, tue le roi d’Angleterre à Hastings et s’empare de sa couronne.",
    },
    "rival-ch-angevin": {
      title: "L’empire Plantagenêt",
      caption:
        "Henri II et Aliénor d’Aquitaine règnent de la frontière écossaise aux Pyrénées, sur une France plus vaste que celle de son propre roi.",
    },
    "rival-ch-bouvines": {
      title: "La Normandie perdue",
      caption:
        "Philippe Auguste prend la Normandie et écrase les alliés de Jean sans Terre à Bouvines\u00a0; vaincu, le roi d’Angleterre doit affronter ses barons.",
    },
    "rival-ch-crecy": {
      title: "Arcs longs et tête de pont",
      caption:
        "Les archers anglais triomphent à Crécy, puis Édouard III affame Calais jusqu’à sa reddition et s’assure une porte d’entrée en France.",
    },
    "rival-ch-joan": {
      title: "La Pucelle sur la Loire",
      caption: "Jeanne d’Arc fait lever le siège d’Orléans et conduit le dauphin jusqu’à son sacre à Reims.",
    },
    "rival-ch-castillon": {
      title: "La Gascogne perdue",
      caption:
        "L’artillerie française fauche les hommes de Talbot à Castillon, et Bordeaux sort de trois siècles de domination anglaise.",
    },
    "rival-ch-empire": {
      title: "Une guerre pour le monde",
      caption:
        "Du Bengale au Saint-Laurent, les deux puissances se disputent les colonies, et la puissance navale britannique fait la décision.",
    },
    "rival-ch-yorktown": {
      title: "La revanche de Yorktown",
      caption:
        "Une flotte française verrouille la baie de Chesapeake, et les troupes françaises et américaines contraignent une armée britannique à capituler.",
    },
    "rival-ch-waterloo": {
      title: "La dernière bataille",
      caption:
        "Wellington et Blücher battent Napoléon à Waterloo et referment sept siècles et demi de guerres entre les deux nations.",
    },
  },
  arcs: {
    "rival-arc-norman-crossing": { label: "La flotte de Guillaume\u00a0: de Dives à Pevensey" },
    "rival-arc-wine": { label: "La flotte du vin\u00a0: de Bordeaux à Southampton", cargo: ["clairet", "sel", "pastel"] },
    "rival-arc-wool": { label: "La laine anglaise vers les métiers flamands", cargo: ["laine brute", "peaux", "draps fins"] },
    "rival-arc-sluys": { label: "Édouard III fait voile vers le Zwin" },
    "rival-arc-crecy": { label: "La campagne de Crécy\u00a0: de la Hougue à Calais" },
    "rival-arc-calais-staple": { label: "De Londres à l’étape des laines de Calais", cargo: ["laine", "toisons", "peaux"] },
    "rival-arc-poitiers": { label: "La chevauchée du Prince Noir en 1356" },
    "rival-arc-agincourt": { label: "Henri V\u00a0: d’Harfleur à Azincourt" },
    "rival-arc-joan": { label: "La route de Jeanne, de Chinon à Reims" },
    "rival-arc-talbot": { label: "La dernière expédition de Talbot en Gascogne" },
    "rival-arc-blenheim": { label: "La marche de Marlborough vers le Danube" },
    "rival-arc-eic": {
      label: "La route de la Compagnie anglaise des Indes orientales vers Madras",
      cargo: ["argent", "calicot", "thé", "salpêtre"],
    },
    "rival-arc-compagnie": {
      label: "La route de la Compagnie des Indes vers Pondichéry",
      cargo: ["argent", "toiles de coton", "poivre"],
    },
    "rival-arc-quebec": { label: "La flotte de Wolfe remonte le Saint-Laurent" },
    "rival-arc-de-grasse": { label: "La flotte du comte de Grasse vers la Chesapeake" },
    "rival-arc-trafalgar": { label: "La flotte de Villeneuve\u00a0: de Toulon à Cadix" },
    "rival-arc-hundred-days": { label: "Les Cent-Jours de Napoléon\u00a0: de Golfe-Juan à Waterloo" },
  },
  territories: {
    "rival-terr-england": { name: "Royaume d’Angleterre" },
    "rival-terr-normandy": { name: "Duché de Normandie" },
    "rival-terr-capetian": { name: "Domaine royal français" },
    "rival-terr-angevin": { name: "Possessions Plantagenêt en France" },
    "rival-terr-gascony": { name: "Gascogne anglaise" },
    "rival-terr-calais": { name: "Calaisis anglais" },
    "rival-terr-lancastrian": { name: "France lancastrienne" },
    "rival-terr-new-france": { name: "Nouvelle-France" },
    "rival-terr-british-america": { name: "Colonies britanniques d’Amérique du Nord" },
  },
};
