import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La navigation polynésienne et le peuplement du Pacifique",
  subtitle: "Étoiles, houles et alizés sur le plus vaste océan du globe",
  summary:
    "Lisant les étoiles, la houle, les oiseaux et les nuages depuis leurs pirogues à balancier et à double coque, les navigateurs austronésiens puis polynésiens peuplèrent des îles dispersées sur plus de la moitié de la circonférence du globe, de Madagascar à Rapa Nui et de Hawaiʻi à Aotearoa. Découvrez comment les alizés, l’espacement des îles et la Longue Pause rythmèrent leur progression, des potiers lapita à la carte que Tupaia dressa pour James Cook.",
  keywords: [
    "polynésie",
    "austronésien",
    "lapita",
    "navigation traditionnelle",
    "navigation",
    "pirogue de voyage",
    "longue pause",
    "tonga",
    "samoa",
    "tahiti",
    "hawaï",
    "rapa nui",
    "île de pâques",
    "aotearoa",
    "nouvelle-zélande",
    "maori",
    "moriori",
    "patate douce",
    "madagascar",
    "tupaia",
    "james cook",
  ],
  chapters: {
    "pacific-ch-taiwan": {
      title: "Au départ de Taïwan",
      caption:
        "Des navigateurs austronésiens progressent d’île en île vers le sud à travers les Philippines, puis se lancent en haute mer vers les Mariannes et la Nouvelle-Guinée.",
    },
    "pacific-ch-lapita": {
      title: "Les potiers lapita",
      caption:
        "Sur les îlots de l’archipel Bismarck, nouveaux venus et peuples papous installés de longue date forgent la culture lapita.",
    },
    "pacific-ch-remote": {
      title: "Vers l’Océanie lointaine",
      caption:
        "Au-delà de la dernière île visible depuis la précédente, les pirogues lapita atteignent des terres vierges au Vanuatu, en Nouvelle-Calédonie et aux Fidji.",
    },
    "pacific-ch-tonga": {
      title: "Le berceau polynésien",
      caption:
        "Les colons atteignent Tonga et les Samoa, puis s’arrêtent près de deux mille ans tandis que prend forme la culture polynésienne.",
    },
    "pacific-ch-madagascar": {
      title: "Cap à l’ouest vers Madagascar",
      caption:
        "À l’extrême ouest du monde austronésien, des marins venus de Bornéo traversent l’océan Indien jusqu’à Madagascar.",
    },
    "pacific-ch-breakout": {
      title: "La fin de la Longue Pause",
      caption:
        "Remontant les alizés, des navigateurs atteignent les îles de la Société, plaque tournante de la Polynésie orientale.",
    },
    "pacific-ch-triangle": {
      title: "Les sommets du triangle",
      caption:
        "En quelques générations, les pirogues atteignent Hawaiʻi et Rapa Nui, et certaines touchent les côtes de l’Amérique du Sud.",
    },
    "pacific-ch-aotearoa": {
      title: "Aotearoa",
      caption:
        "Des navigateurs cinglent vers le sud-ouest, hors des tropiques, jusqu’à la dernière grande terre du globe que les humains aient peuplée.",
    },
    "pacific-ch-tupaia": {
      title: "La carte de Tupaia",
      caption: "Un navigateur de Raʻiātea embarque sur l’Endeavour et cartographie le monde polynésien pour James Cook.",
    },
  },
  arcs: {
    "pacific-arc-out-of-taiwan": { label: "Au départ de Taïwan : Philippines, Moluques et archipel Bismarck" },
    "pacific-arc-remote-oceania": { label: "La traversée lapita : de l’archipel Bismarck au Vanuatu et aux Fidji" },
    "pacific-arc-west-polynesia": { label: "Des Fidji à Tonga et aux Samoa" },
    "pacific-arc-tongan-network": {
      label: "Les échanges des Tuʻi Tonga : Fidji, Tonga, Samoa et ʻUvea",
      cargo: ["Nattes fines", "Plumes rouges", "Herminettes de pierre", "Pirogues"],
    },
    "pacific-arc-samoa-society": { label: "La fin de la Longue Pause : des Samoa aux îles de la Société" },
    "pacific-arc-hawaii": { label: "De Kahiki à Hawaiʻi par-delà l’équateur" },
    "pacific-arc-rapa-nui": { label: "Des îles de la Société à Rapa Nui via Mangareva" },
    "pacific-arc-south-america": {
      label: "Contacts avec l’Amérique du Sud",
      cargo: ["Patate douce", "Ascendance amérindienne"],
    },
    "pacific-arc-aotearoa": { label: "Des îles Cook à Aotearoa via les Kermadec" },
    "pacific-arc-basalt": {
      label: "Basalte et nacre : Mangareva, Pitcairn et Henderson",
      cargo: ["Basalte à herminettes", "Verre volcanique", "Nacre"],
    },
    "pacific-arc-madagascar": { label: "De Bornéo à Madagascar à travers l’océan Indien" },
    "pacific-arc-endeavour": { label: "Tupaia à bord de l’Endeavour : de Tahiti à la Nouvelle-Zélande" },
  },
  territories: {
    "pacific-terr-lapita": { name: "Complexe culturel lapita" },
    "pacific-terr-fiji": { name: "Sphère polynésienne occidentale : Fidji" },
    "pacific-terr-west-polynesia": { name: "Sphère polynésienne occidentale : Tonga, Samoa et ʻUvea" },
    "pacific-terr-east-polynesia": { name: "Polynésie orientale centrale" },
    "pacific-terr-hawaii": { name: "Îles Hawaiʻi" },
    "pacific-terr-aotearoa": { name: "Aotearoa" },
    "pacific-terr-rapa-nui": { name: "Rapa Nui et Motu Motiro Hiva" },
  },
};
