import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "Les croisades",
  subtitle: "Guerre sainte, sièges et commerce entre l’Europe et le Levant",
  summary:
    "En 1095, l’appel d’un pape lança des armées de chrétiens d’Occident sur la route de Jérusalem, et pendant deux siècles les États latins s’accrochèrent à la côte du Levant, entre Byzance, les Seldjoukides, Saladin et les Mamelouks. Suivez les croisades de Clermont à la chute de Saint-Jean-d’Acre en 1291\u00a0: massacres et sièges, châteaux et trêves, sac de Constantinople, et ces marchands qui continuèrent de commercer par-delà les lignes de front.",
  keywords: [
    "croisades",
    "première croisade",
    "terre sainte",
    "jérusalem",
    "urbain ii",
    "saladin",
    "richard cœur de lion",
    "templiers",
    "hospitaliers",
    "orient latin",
    "saint-jean-d’acre",
    "hattin",
    "quatrième croisade",
    "sac de constantinople",
    "frédéric ii",
    "saint louis",
    "baybars",
    "mamelouks",
    "byzance",
    "djihad",
  ],
  chapters: {
    "crusade-ch-clermont": {
      title: "L’appel de Clermont",
      caption: "Répondant à une demande de soldats venue de Byzance, le pape Urbain II appelle les chevaliers d’Occident à marcher sur Jérusalem.",
    },
    "crusade-ch-antioch": {
      title: "La longue route de l’Orient",
      caption:
        "À travers le plateau brûlant d’Anatolie jusqu’aux murs d’Antioche, les armées croisées ont faim, se querellent et finissent pourtant par vaincre.",
    },
    "crusade-ch-jerusalem": {
      title: "Jérusalem prise",
      caption: "Des tours de siège taillées dans le bois de navires percent les murailles, et un massacre fonde le royaume latin de Jérusalem.",
    },
    "crusade-ch-edessa": {
      title: "La chute d’Édesse",
      caption: "Zengi emporte le plus exposé des États latins, et une deuxième croisade s’achève dans l’humiliation devant Damas.",
    },
    "crusade-ch-hattin": {
      title: "Les cornes de Hattin",
      caption:
        "Saladin piège une armée franque assoiffée au-dessus du lac de Tibériade, et Jérusalem repasse sous domination musulmane en quelques mois.",
    },
    "crusade-ch-acre": {
      title: "Des rois devant Acre",
      caption:
        "Richard d’Angleterre et Philippe de France traversent la mer, prennent Acre et se contentent d’un royaume côtier sans Jérusalem.",
    },
    "crusade-ch-1204": {
      title: "Constantinople saccagée",
      caption: "Endettée auprès de Venise, une croisade se retourne contre la plus grande ville chrétienne du temps et la pille trois jours durant.",
    },
    "crusade-ch-egypt": {
      title: "Saint Louis sur le Nil",
      caption: "Dans les canaux du Delta, un roi de France est fait prisonnier, et ses vainqueurs mamelouks s’emparent de l’Égypte pour eux-mêmes.",
    },
    "crusade-ch-acre-1291": {
      title: "Le dernier bastion",
      caption: "Les Mamelouks prennent Acre d’assaut, et deux siècles de présence croisée sur la côte du Levant s’éteignent en quelques mois.",
    },
  },
  arcs: {
    "crusade-arc-appeal": { label: "Les envoyés d’Alexis Ier à Plaisance", cargo: ["ambassadeurs", "lettres"] },
    "crusade-arc-urban": { label: "La tournée de prédication d’Urbain II en France", cargo: ["sermons", "lettres pontificales"] },
    "crusade-arc-rhine": { label: "Les bandes croisées le long du Rhin" },
    "crusade-arc-peoples": { label: "La croisade populaire, de Cologne à Civetot" },
    "crusade-arc-princes": { label: "La marche des princes à travers l’Anatolie" },
    "crusade-arc-jerusalem": { label: "D’Antioche à Jérusalem" },
    "crusade-arc-venice": {
      label: "Les galères vénitiennes vers le Levant",
      cargo: ["pèlerins", "draps de laine", "bois", "argent"],
    },
    "crusade-arc-caravan": {
      label: "La route des caravanes, de Damas à Acre",
      cargo: ["épices", "soie", "coton", "sucre"],
    },
    "crusade-arc-second": { label: "La deuxième croisade" },
    "crusade-arc-hattin": { label: "L’armée de Saladin marche vers Hattin" },
    "crusade-arc-richard": { label: "La flotte de Richard, de Messine à Acre" },
    "crusade-arc-fourth": { label: "La quatrième croisade, de Venise à Constantinople" },
    "crusade-arc-plunder": {
      label: "Le butin de Constantinople expédié à Venise",
      cargo: ["reliques", "chevaux de bronze", "icônes", "argent"],
    },
    "crusade-arc-baltic": { label: "Les croisés font voile de Lübeck vers la Livonie", cargo: ["chevaliers", "colons", "marchands"] },
    "crusade-arc-louis": { label: "Louis IX fait voile vers l’Égypte" },
    "crusade-arc-mongols": { label: "Les Mongols de Hülegü envahissent la Syrie" },
    "crusade-arc-tunis": { label: "La dernière croisade de Saint Louis, vers Tunis" },
    "crusade-arc-mamluk": { label: "L’armée mamelouke marche sur Acre", cargo: ["engins de siège", "cavalerie", "sapeurs"] },
  },
  territories: {
    "crusade-terr-byzantium": { name: "L’Empire byzantin des Comnènes" },
    "crusade-terr-rum": { name: "Le sultanat seldjoukide de Roum" },
    "crusade-terr-edessa": { name: "Le comté d’Édesse" },
    "crusade-terr-states": { name: "États latins\u00a0: Antioche, Tripoli et Jérusalem" },
    "crusade-terr-fatimid": { name: "Le califat fatimide" },
    "crusade-terr-ayyubid": { name: "Le domaine ayyoubide de Saladin et de ses héritiers" },
    "crusade-terr-latin": { name: "L’Empire latin et la Grèce franque" },
    "crusade-terr-coast": { name: "La côte franque\u00a0: Acre, Tripoli et Antioche" },
    "crusade-terr-mamluk": { name: "Le sultanat mamelouk" },
  },
};
