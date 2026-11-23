import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "Les empires d’Afrique de l’Ouest",
  subtitle: "Ghana, Mali et Songhaï, là où le désert rencontre le Niger",
  summary:
    "Sur le Sahel, le rivage du Sahara, trois grands empires se sont enrichis en se plaçant entre le sel du désert et l’or de la savane. Suivez les caravanes de chameaux de Sijilmassa à Koumbi Saleh, l’ascension de Soundiata à Kirina, le pèlerinage doré de Mansa Moussa, les mosquées et les manuscrits de Tombouctou et de Djenné, jusqu’à la chute de l’empire songhaï sous les fusils marocains à Tondibi, en 1591.",
  keywords: [
    "afrique de l’ouest",
    "sahel",
    "empire du ghana",
    "ouagadou",
    "empire du mali",
    "empire songhaï",
    "commerce transsaharien",
    "or et sel",
    "tombouctou",
    "djenné",
    "gao",
    "koumbi saleh",
    "soundiata keïta",
    "mansa moussa",
    "sonni ali",
    "askia mohammed",
    "ibn battûta",
    "almoravides",
    "tondibi",
    "griots",
  ],
  chapters: {
    "sahel-ch-delta": {
      title: "Des villes sur la plaine inondable",
      caption:
        "Bien avant les caravanes, cultivateurs, pêcheurs et forgerons bâtissent Djenné-Djeno sur une butte, au-dessus des crues annuelles du Niger.",
    },
    "sahel-ch-ghana": {
      title: "Le pays de l’or",
      caption:
        "Entre les caravanes du sel et les champs aurifères, les rois du Ghana taxent chaque charge qui traverse leur double capitale.",
    },
    "sahel-ch-kirina": {
      title: "Le Lion du Mali",
      caption:
        "Selon les griots, un prince exilé revient sur le haut Niger et brise la puissance du roi sosso.",
    },
    "sahel-ch-musa": {
      title: "L’or au Caire",
      caption:
        "Mansa Moussa traverse le Sahara pour se rendre à La Mecque et dépense tant d’or au Caire que son cours y reste bas pendant des années.",
    },
    "sahel-ch-timbuktu": {
      title: "Terre, bois et savoir",
      caption:
        "Là où le chameau rencontre la pirogue, Tombouctou élève une grande mosquée de terre et de bois et commence à attirer les savants.",
    },
    "sahel-ch-sonni": {
      title: "Le roi du fleuve",
      caption:
        "Avec ses cavaliers sur les rives et ses pirogues de guerre sur l’eau, Sonni Ali, roi de Gao, s’empare de Tombouctou et de Djenné.",
    },
    "sahel-ch-askia": {
      title: "L’empire de l’Askia",
      caption:
        "Un général devenu empereur divise le Songhaï en provinces et en fait le plus vaste État qu’ait connu l’Afrique de l’Ouest.",
    },
    "sahel-ch-tondibi": {
      title: "Les fusils de Tondibi",
      caption:
        "Une armée marocaine franchit le désert armée de fusils et brise l’empire songhaï sur les rives du Niger.",
    },
  },
  arcs: {
    "sahel-arc-sijilmasa": {
      label: "La route caravanière de l’Ouest\u00a0: de Sijilmassa au Ghana",
      cargo: ["sel", "cuivre", "étoffes", "chevaux"],
    },
    "sahel-arc-bambuk": { label: "L’or du Bambouk vers le Ouagadou", cargo: ["poudre d’or", "pépites"] },
    "sahel-arc-eastern": { label: "La route de l’Est\u00a0: de Gao à Tripoli", cargo: ["or", "ivoire", "tissus", "chevaux"] },
    "sahel-arc-almoravid": { label: "Les Almoravides frappent au sud" },
    "sahel-arc-taghaza": { label: "La route du sel\u00a0: de Taghaza à Tombouctou", cargo: ["sel gemme", "cuivre", "étoffes"] },
    "sahel-arc-sundiata": { label: "Le retour d’exil de Soundiata" },
    "sahel-arc-bure": { label: "L’or du Bouré descend le Niger", cargo: ["or", "noix de kola"] },
    "sahel-arc-delta": {
      label: "En pirogue à travers le delta intérieur",
      cargo: ["riz", "mil", "poisson séché", "or"],
    },
    "sahel-arc-musa": { label: "La caravane de Mansa Moussa vers Le Caire", cargo: ["or", "pèlerins", "serviteurs"] },
    "sahel-arc-mecca": { label: "La route des pèlerins, du Caire à La Mecque", cargo: ["pèlerins", "aumônes", "livres"] },
    "sahel-arc-scholars": {
      label: "Livres et savants à travers le désert",
      cargo: ["manuscrits", "papier", "lettrés"],
    },
    "sahel-arc-battuta": { label: "Le voyage d’Ibn Battuta au Mali" },
    "sahel-arc-forest": {
      label: "La route des Wangara vers l’or de la forêt",
      cargo: ["or", "noix de kola", "sel", "étoffes"],
    },
    "sahel-arc-sonni": { label: "La guerre fluviale de Sonni Ali" },
    "sahel-arc-askia": { label: "La route de l’Askia Mohammed vers Le Caire", cargo: ["or", "soldats", "lettrés"] },
    "sahel-arc-judar": {
      label: "Judar Pacha traverse le Sahara",
      cargo: ["arquebuses", "canons", "chameaux"],
    },
  },
  territories: {
    "sahel-terr-ghana": { name: "Ghana (Ouagadou)" },
    "sahel-terr-almoravid": { name: "L’empire almoravide en Afrique" },
    "sahel-terr-mali": { name: "Empire du Mali" },
    "sahel-terr-sonni": { name: "Le Songhaï de Sonni Ali" },
    "sahel-terr-askia": { name: "L’empire songhaï des Askia" },
    "sahel-terr-saadi": { name: "Le Maroc saadien" },
  },
};
