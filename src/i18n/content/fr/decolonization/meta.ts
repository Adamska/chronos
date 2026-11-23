import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La décolonisation",
  subtitle: "La fin des empires européens, de Delhi à Pretoria",
  summary:
    "En 1945, une poignée d’États européens régnaient encore sur une grande partie de l’Afrique et de l’Asie. Cinquante ans plus tard, presque toutes leurs colonies étaient devenues des nations indépendantes, parfois par la négociation, souvent au prix de manifestations de masse, de massacres et de longues guerres de libération. Suivez les peuples colonisés qui ont conquis leur liberté, du minuit de l’indépendance indienne et de la cuvette de Diên Biên Phu à l’année de l’Afrique et à l’élection de Nelson Mandela en 1994.",
  keywords: [
    "décolonisation",
    "indépendance",
    "fin des empires",
    "partition des indes",
    "gandhi",
    "nehru",
    "hô chi minh",
    "diên biên phu",
    "bandung",
    "crise de suez",
    "nkrumah",
    "guerre d’algérie",
    "accords d’évian",
    "lumumba",
    "année de l’afrique",
    "révolution des œillets",
    "amílcar cabral",
    "nelson mandela",
    "apartheid",
    "tiers-monde",
  ],
  chapters: {
    "decol-ch-1945": {
      title: "Des empires victorieux",
      caption:
        "La guerre est gagnée et la Charte de l’ONU parle d’autodétermination, mais les drapeaux européens flottent toujours sur une grande partie de l’Afrique et de l’Asie.",
    },
    "decol-ch-india": {
      title: "Minuit et partition",
      caption:
        "À minuit, l’Inde britannique devient deux nations, et une frontière tracée à la hâte jette des millions de réfugiés sur les routes du Pendjab et du Bengale.",
    },
    "decol-ch-dien-bien-phu": {
      title: "Diên Biên Phu",
      caption:
        "Dans une vallée de montagne proche du Laos, le Viêt-minh contraint une armée française à capituler et met fin à l’empire français en Asie.",
    },
    "decol-ch-bandung": {
      title: "L’esprit de Bandung",
      caption:
        "Vingt-neuf nations d’Asie et d’Afrique se réunissent à Java pour condamner le colonialisme et refuser d’être les pions de la guerre froide.",
    },
    "decol-ch-africa": {
      title: "L’année de l’Afrique",
      caption:
        "Dix-sept États africains accèdent à l’indépendance en une seule année, tandis que le Congo plonge dans la crise et que l’ONU condamne le colonialisme.",
    },
    "decol-ch-algeria": {
      title: "L’Algérie indépendante",
      caption:
        "Après huit ans de guerre, les accords d’Évian mettent fin à l’Algérie française, et pieds-noirs et harkis fuient de l’autre côté de la Méditerranée.",
    },
    "decol-ch-carnation": {
      title: "Des œillets à Lisbonne",
      caption:
        "Une révolution de soldats renverse la dictature portugaise et ouvre la voie à l’indépendance de la Guinée-Bissau, du Mozambique et de l’Angola.",
    },
    "decol-ch-mandela": {
      title: "La liberté en Afrique du Sud",
      caption:
        "La Namibie est libre, Mandela est sorti de prison, et les Sud-Africains de toutes couleurs votent ensemble pour la première fois.",
    },
  },
  arcs: {
    "decol-arc-punjab-east": {
      label: "Hindous et sikhs fuient le Pendjab occidental et le Sind",
      cargo: ["colonnes de réfugiés", "trains de réfugiés"],
    },
    "decol-arc-punjab-west": {
      label: "Les musulmans fuient le Pendjab oriental vers le Pakistan",
      cargo: ["colonnes de réfugiés", "trains de réfugiés"],
    },
    "decol-arc-bengal": { label: "Le Bengale coupé en deux : Dacca et Calcutta" },
    "decol-arc-round-table": { label: "Les négociations entre Jakarta et La Haye" },
    "decol-arc-dbp-supply": {
      label: "La ligne de ravitaillement viêt-minh vers Diên Biên Phu",
      cargo: ["artillerie", "riz", "munitions", "bicyclettes"],
    },
    "decol-arc-bandung-west": { label: "Délégations du Caire et de Karachi vers Bandung" },
    "decol-arc-bandung-north": { label: "Délégations de Pékin et de Rangoun vers Bandung" },
    "decol-arc-suez-invasion": {
      label: "Le corps expéditionnaire franco-britannique : de Malte et Chypre à Port-Saïd",
      cargo: ["parachutistes", "commandos de marine", "porte-avions"],
    },
    "decol-arc-canal-route": {
      label: "Le pétrole du Golfe par le canal de Suez",
      cargo: ["pétrole brut", "pétroliers", "droits de passage"],
    },
    "decol-arc-accra-1958": {
      label: "Lumumba se rend à la conférence d’Accra",
      cargo: ["panafricanisme", "contacts", "idées"],
    },
    "decol-arc-lumumba": { label: "Le dernier voyage de Lumumba" },
    "decol-arc-pieds-noirs": {
      label: "L’exode des pieds-noirs vers la France",
      cargo: ["colons", "harkis", "valises"],
    },
    "decol-arc-windrush": {
      label: "Le Windrush : les migrants caribéens vers la Grande-Bretagne",
      cargo: ["ouvriers", "infirmières", "familles"],
    },
    "decol-arc-paigc": { label: "Les fronts du PAIGC depuis Conakry", cargo: ["guérilleros", "armes", "manuels scolaires"] },
    "decol-arc-frelimo": { label: "Le FRELIMO, de la Tanzanie au Mozambique", cargo: ["guérilleros", "armes", "médicaments"] },
    "decol-arc-retornados": { label: "Le pont aérien des retornados depuis l’Angola" },
    "decol-arc-namibia-return": { label: "Les exilés de la SWAPO rentrent au pays" },
    "decol-arc-mandela": { label: "Mandela, de la porte de la prison à la présidence" },
  },
  territories: {
    "decol-terr-british-india": { name: "Inde britannique" },
    "decol-terr-indochina": { name: "Indochine française" },
    "decol-terr-algeria": { name: "Algérie française" },
    "decol-terr-aof": { name: "Afrique-Occidentale française" },
    "decol-terr-congo": { name: "Congo belge" },
    "decol-terr-kenya": { name: "Colonie du Kenya" },
    "decol-terr-angola": { name: "Angola portugais" },
    "decol-terr-mozambique": { name: "Mozambique portugais" },
    "decol-terr-south-africa": { name: "Afrique du Sud de l’apartheid" },
  },
};
