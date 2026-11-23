import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’Empire romain",
  subtitle: "D’un gué sur le Tibre à un monde bâti autour d’une mer",
  summary:
    "Quelques cabanes au-dessus du Tibre devinrent une république, qui conquit l’Italie, brisa Carthage et absorba la Grèce, avant de se muer en un empire qui fit de la Méditerranée un lac intérieur. Suivez l’essor de Rome à travers ses routes, ses ports, ses aqueducs et ses légions, de la fondation légendaire de 753 av. J.-C. à la déposition du dernier empereur d’Occident en 476.",
  keywords: [
    "empire romain",
    "rome antique",
    "république romaine",
    "guerres puniques",
    "carthage",
    "hannibal",
    "jules césar",
    "rubicon",
    "auguste",
    "pax romana",
    "voies romaines",
    "aqueducs",
    "trajan",
    "mur d’hadrien",
    "constantin",
    "constantinople",
    "légions",
    "chute de rome",
  ],
  chapters: {
    "rome-ch-founding": {
      title: "Une ville sur sept collines",
      caption:
        "Au-dessus du gué du Tibre, entre cités étrusques et colonies grecques, des villages latins deviennent la ville que les Romains diront la leur.",
    },
    "rome-ch-hannibal": {
      title: "Le pari d’Hannibal",
      caption:
        "Privé de la mer, le plus grand général de Carthage marche de l’Espagne à travers les Alpes et écrase les armées romaines sur leur propre sol.",
    },
    "rome-ch-146": {
      title: "Carthage et Corinthe tombent",
      caption:
        "En une seule année, Rome rase sa vieille rivale africaine et saccage la porte de la Grèce\u00a0: la Méditerranée lui appartient.",
    },
    "rome-ch-caesar": {
      title: "La Gaule de César",
      caption:
        "Huit années de guerre portent la puissance romaine jusqu’au Rhin et à la Manche, et donnent à un général une armée qui n’obéit qu’à lui.",
    },
    "rome-ch-augustus": {
      title: "Le premier empereur",
      caption: "Après Actium, Octave devient Auguste et habille une monarchie nouvelle des oripeaux de l’ancienne République.",
    },
    "rome-ch-height": {
      title: "L’Empire à son apogée",
      caption:
        "Du nord de la Bretagne romaine au golfe Persique, routes, ports et aqueducs unissent quelque soixante millions d’habitants sous une même autorité.",
    },
    "rome-ch-crisis": {
      title: "Crise et redressement",
      caption:
        "Épidémies, guerres civiles et invasions mènent l’Empire au bord du gouffre, et un empereur finit ses jours captif des Perses.",
    },
    "rome-ch-constantine": {
      title: "Un empire chrétien",
      caption: "Constantin conquiert Rome sous un signe chrétien et bâtit une nouvelle capitale là où l’Europe rencontre l’Asie.",
    },
    "rome-ch-end": {
      title: "La fin de l’Occident",
      caption:
        "Coupé en deux, l’Empire perd sa moitié occidentale lorsqu’un général germanique dépose le dernier empereur à Ravenne.",
    },
  },
  arcs: {
    "rome-arc-via-appia": { label: "Voie Appienne\u00a0: de Rome à Brindes", cargo: ["légions", "courriers", "vin", "blé"] },
    "rome-arc-sicily": { label: "Par le détroit, vers la Sicile" },
    "rome-arc-hannibal-alps": {
      label: "La marche d’Hannibal\u00a0: de Carthagène au Pô",
      cargo: ["éléphants", "cavalerie numide", "infanterie ibère"],
    },
    "rome-arc-hannibal-italy": { label: "Hannibal en Italie\u00a0: la Trébie, Trasimène, Cannes" },
    "rome-arc-africa": { label: "Les invasions romaines de l’Afrique" },
    "rome-arc-greece": { label: "Les légions en Grèce" },
    "rome-arc-egnatia": { label: "Via Egnatia\u00a0: de Dyrrachium à Byzance", cargo: ["courriers", "légions", "marchands"] },
    "rome-arc-caesar-gaul": { label: "Les campagnes de César en Gaule" },
    "rome-arc-rubicon": { label: "César marche sur l’Italie" },
    "rome-arc-actium": { label: "La fuite, d’Actium à Alexandrie" },
    "rome-arc-grain": { label: "La flotte du blé\u00a0: d’Alexandrie à Portus", cargo: ["blé", "papyrus", "lin", "verre"] },
    "rome-arc-baetica": { label: "L’huile d’olive de Bétique", cargo: ["huile d’olive", "garum", "vin", "argent"] },
    "rome-arc-limes": { label: "La route du limes, du Rhin au Danube", cargo: ["légions", "ravitaillement", "dépêches"] },
    "rome-arc-dacia": { label: "Trajan franchit le Danube" },
    "rome-arc-parthia": { label: "Trajan marche vers le golfe Persique" },
    "rome-arc-plague": { label: "La peste antonine gagne l’ouest", cargo: ["variole"] },
    "rome-arc-christianity": {
      label: "Le christianisme, de Jérusalem à Rome",
      cargo: ["Évangiles", "épîtres", "missionnaires"],
    },
    "rome-arc-alaric": { label: "La marche d’Alaric sur Rome" },
  },
  territories: {
    "rome-terr-etruria": { name: "Cités étrusques" },
    "rome-terr-italy": { name: "Italie romaine" },
    "rome-terr-carthage": { name: "Carthage et son cœur africain" },
    "rome-terr-gaul": { name: "La Gaule conquise par César" },
    "rome-terr-augustus": { name: "L’Empire romain sous Auguste" },
    "rome-terr-height": { name: "L’Empire romain à son apogée" },
    "rome-terr-persia": { name: "La Perse parthe, puis sassanide" },
    "rome-terr-west": { name: "Empire romain d’Occident" },
    "rome-terr-east": { name: "Empire romain d’Orient" },
  },
};
