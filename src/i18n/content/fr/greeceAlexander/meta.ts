import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La Grèce antique et Alexandre le Grand",
  subtitle: "De cités rivales autour d’une mer à un empire qui touche l’Indus",
  summary:
    "Des centaines de cités querelleuses, dispersées entre vallées rocailleuses, îles et rivages lointains, inventèrent la démocratie, repoussèrent la Perse et couvrirent Athènes de marbre et de philosophie. Puis le fils d’un roi de Macédoine marcha jusqu’aux portes de l’Inde, et ses héritiers semèrent dans tout l’Orient des cités, une science et une langue grecques. Suivez le monde grec des premiers Jeux olympiques, en 776 av. J.-C., au sac de Corinthe par Rome en 146 av. J.-C.",
  keywords: [
    "grèce antique",
    "alexandre le grand",
    "jeux olympiques",
    "colonies grecques",
    "sparte",
    "athènes",
    "démocratie athénienne",
    "guerres médiques",
    "marathon",
    "thermopyles",
    "salamine",
    "périclès",
    "parthénon",
    "guerre du péloponnèse",
    "macédoine",
    "gaugamèles",
    "monde hellénistique",
    "alexandrie",
    "archimède",
    "aristote",
  ],
  chapters: {
    "greek-ch-olympia": {
      title: "Les jeux d’Olympie",
      caption:
        "Dispersées entre vallées rocailleuses et îles, des cités rivales se retrouvent tous les quatre ans pour concourir en l’honneur de Zeus.",
    },
    "greek-ch-colonies": {
      title: "Des grenouilles autour d’une mare",
      caption:
        "À court de terres, les cités grecques envoient des colons outre-mer et couronnent la Méditerranée et la mer Noire de nouvelles poleis.",
    },
    "greek-ch-persian-wars": {
      title: "La Perse repoussée",
      caption:
        "À Marathon, aux Thermopyles et à Salamine, de petites armées et flottes grecques arrêtent le plus grand empire de leur temps.",
    },
    "greek-ch-pericles": {
      title: "Le siècle de Périclès",
      caption:
        "Enrichie par le tribut et le commerce, Athènes la démocrate couronne son Acropole du Parthénon, puis combat Sparte pendant vingt-sept ans.",
    },
    "greek-ch-macedon": {
      title: "L’essor de la Macédoine",
      caption:
        "Depuis le royaume du Nord, Philippe II forge une armée nouvelle et se rend maître de la Grèce à Chéronée.",
    },
    "greek-ch-alexander": {
      title: "Alexandre conquiert la Perse",
      caption:
        "En trois grandes batailles, Alexandre brise l’armée perse et revendique le trône de Darius, de l’Égypte à l’Iran.",
    },
    "greek-ch-india": {
      title: "Aux confins du monde",
      caption:
        "Au-delà de l’Hindou Kouch et de l’Indus, Alexandre combat encore, jusqu’à ce que son armée refuse d’aller plus loin vers l’est.",
    },
    "greek-ch-alexandria": {
      title: "La science d’Alexandrie",
      caption:
        "Dans la ville fondée par Alexandre, des rois grecs paient des savants pour rassembler les livres, écrire la géométrie et mesurer la Terre.",
    },
    "greek-ch-corinth": {
      title: "Rome prend la Grèce",
      caption:
        "Rome saccage Corinthe et absorbe la Grèce, mais le savoir et l’art grecs finissent par conquérir leurs vainqueurs.",
    },
  },
  arcs: {
    "greek-arc-syracuse": { label: "Les colons corinthiens cinglent vers Syracuse", cargo: ["colons", "céramique", "vin"] },
    "greek-arc-massalia": { label: "Les Phocéens fondent Massalia", cargo: ["colons", "vin", "huile d’olive"] },
    "greek-arc-black-sea": {
      label: "Les colonies milésiennes de la mer Noire",
      cargo: ["blé", "poisson salé", "bois", "esclaves"],
    },
    "greek-arc-datis": { label: "La flotte perse fait voile vers Marathon" },
    "greek-arc-xerxes": { label: "Xerxès envahit la Grèce", cargo: ["infanterie", "cavalerie", "navires de ravitaillement"] },
    "greek-arc-grain-athens": {
      label: "Le blé de la mer Noire vers le Pirée",
      cargo: ["blé", "poisson salé", "peaux", "esclaves"],
    },
    "greek-arc-sicily": { label: "L’expédition athénienne en Sicile" },
    "greek-arc-alex-anatolia": { label: "Alexandre\u00a0: de Pella à Issos" },
    "greek-arc-alex-egypt": { label: "Alexandre\u00a0: Tyr, l’Égypte et Siwa" },
    "greek-arc-alex-persia": { label: "Alexandre\u00a0: vers Gaugamèles et Persépolis" },
    "greek-arc-alex-east": { label: "Alexandre\u00a0: à travers l’Iran jusqu’à l’Iaxarte" },
    "greek-arc-alex-india": { label: "Alexandre\u00a0: par l’Hindou Kouch jusqu’en Inde" },
    "greek-arc-gedrosia": { label: "La traversée du désert de Gédrosie" },
    "greek-arc-nearchus": {
      label: "Néarque navigue de l’Indus au golfe Persique",
      cargo: ["cartes", "notes de navigation", "récits de baleines"],
    },
    "greek-arc-scholars": { label: "Lettres entre Alexandrie et Syracuse", cargo: ["traités", "démonstrations", "lettres"] },
    "greek-arc-rome": { label: "Rome marche sur l’Isthme" },
  },
  territories: {
    "greek-terr-hellas": { name: "Les cités grecques de l’Égée" },
    "greek-terr-sparta": { name: "Sparte et la ligue du Péloponnèse" },
    "greek-terr-persia": { name: "L’Empire perse achéménide" },
    "greek-terr-athens": { name: "L’empire athénien (ligue de Délos)" },
    "greek-terr-macedon": { name: "La Macédoine de Philippe II" },
    "greek-terr-alexander": { name: "L’empire d’Alexandre le Grand" },
    "greek-terr-ptolemaic": { name: "Le royaume lagide" },
    "greek-terr-seleucid": { name: "L’Empire séleucide" },
  },
};
