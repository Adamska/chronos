import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La Seconde Guerre mondiale",
  subtitle: "Une guerre planétaire, du pont Marco-Polo à la baie de Tokyo",
  summary:
    "D’un accrochage nocturne près de Beiping en 1937 à la capitulation signée en baie de Tokyo en 1945, la guerre embrasa l’Asie, l’Europe, l’Afrique et les océans, et fit quelque 70 à 85 millions de morts, en majorité des civils. Suivez les fronts, les lignes de ravitaillement et les crimes d’une guerre livrée sur tous les continents, dont la Shoah, ainsi que l’alliance qui vainquit l’Allemagne nazie, l’Italie fasciste et le Japon impérial.",
  keywords: [
    "seconde guerre mondiale",
    "deuxième guerre mondiale",
    "39-45",
    "shoah",
    "holocauste",
    "débarquement",
    "stalingrad",
    "pearl harbor",
    "hiroshima",
    "churchill",
    "de gaulle",
    "appel du 18 juin",
    "roosevelt",
    "staline",
    "anne frank",
    "joukov",
    "résistance",
    "guerre du pacifique",
    "nankin",
    "nations unies",
  ],
  chapters: {
    "ww2-ch-china": {
      title: "La guerre gagne la Chine",
      caption:
        "Un accrochage nocturne sur un pont près de Beiping devient une invasion japonaise de grande ampleur, qui atteint Nankin dès décembre.",
    },
    "ww2-ch-poland": {
      title: "La Pologne partagée",
      caption:
        "Une semaine après le pacte entre Hitler et Staline, les armées allemandes entrent en Pologne et l’Europe bascule dans la guerre.",
    },
    "ww2-ch-1940": {
      title: "La France tombe, l’Angleterre tient",
      caption:
        "Les chars allemands atteignent la Manche en dix jours\u00a0; la France signe l’armistice, tandis que de Gaulle et Churchill poursuivent la lutte depuis Londres.",
    },
    "ww2-ch-east": {
      title: "Une guerre d’anéantissement",
      caption:
        "L’Allemagne envahit l’Union soviétique, assiège Leningrad et n’est arrêtée qu’aux portes de Moscou.",
    },
    "ww2-ch-pacific": {
      title: "Pearl Harbor",
      caption:
        "Le Japon frappe la flotte américaine à Hawaï et déferle vers le sud pour s’emparer du pétrole et du caoutchouc de l’Asie du Sud-Est.",
    },
    "ww2-ch-holocaust": {
      title: "La Shoah",
      caption:
        "De toute l’Europe, des trains emportent les Juifs vers les centres de mise à mort de la Pologne occupée, où des millions sont assassinés.",
    },
    "ww2-ch-turn": {
      title: "Le tournant",
      caption: "À Midway, à El-Alamein et à Stalingrad, l’avance de l’Axe est stoppée, puis refoulée.",
    },
    "ww2-ch-liberation": {
      title: "La Libération",
      caption:
        "Les Alliés débarquent en Normandie, Paris se soulève et, en Biélorussie, l’Armée rouge anéantit tout un groupe d’armées allemand.",
    },
    "ww2-ch-end": {
      title: "La fin de la guerre",
      caption:
        "Berlin tombe, deux bombes atomiques détruisent deux villes japonaises, et le Japon capitule tandis que naissent les Nations unies.",
    },
  },
  arcs: {
    "ww2-arc-shanghai-nanjing": { label: "L’offensive japonaise sur le Yangzi\u00a0: de Shanghai à Nankin" },
    "ww2-arc-poland": { label: "La 10e armée allemande\u00a0: de la Silésie à Varsovie" },
    "ww2-arc-sedan": { label: "Le corridor des panzers\u00a0: des Ardennes à la Manche" },
    "ww2-arc-dunkirk": {
      label: "Opération Dynamo\u00a0: de Dunkerque à Douvres",
      cargo: ["soldats", "petits bateaux", "destroyers"],
    },
    "ww2-arc-barbarossa": { label: "Le groupe d’armées Centre\u00a0: de Brest-Litovsk aux portes de Moscou" },
    "ww2-arc-road-of-life": {
      label: "La Route de la vie sur le lac Ladoga",
      cargo: ["farine", "carburant", "munitions"],
    },
    "ww2-arc-malaya": { label: "Le Japon frappe au sud\u00a0: de Hainan à Singapour" },
    "ww2-arc-deportations": { label: "Les trains de la déportation\u00a0: de Drancy à Auschwitz-Birkenau" },
    "ww2-arc-midway": { label: "Les porte-avions américains, de Pearl Harbor à Midway" },
    "ww2-arc-solomons": { label: "Des Salomon et de la Nouvelle-Guinée aux Philippines" },
    "ww2-arc-atlantic": {
      label: "Les convois transatlantiques\u00a0: d’Halifax à Liverpool",
      cargo: ["pétrole", "vivres", "munitions", "avions"],
    },
    "ww2-arc-alamein": { label: "L’avance de la 8e armée\u00a0: d’El-Alamein à Tunis" },
    "ww2-arc-uranus": { label: "Opération Uranus\u00a0: la tenaille se referme à Kalatch" },
    "ww2-arc-italy": { label: "La remontée de l’Italie\u00a0: de la Sicile à Rome" },
    "ww2-arc-overlord": { label: "Opération Overlord\u00a0: de Portsmouth à la Normandie et à Paris" },
    "ww2-arc-bagration": { label: "Opération Bagration\u00a0: de Vitebsk à la Vistule" },
    "ww2-arc-berlin": { label: "L’Armée rouge\u00a0: de la Vistule à Berlin" },
    "ww2-arc-central-pacific": { label: "À travers le Pacifique central\u00a0: de Tarawa à Okinawa" },
  },
  territories: {
    "ww2-terr-japan-china": { name: "L’empire japonais en Corée, en Mandchourie et en Chine occupée" },
    "ww2-terr-japan-south": { name: "Les conquêtes japonaises du Sud" },
    "ww2-terr-soviet-pact": { name: "Les annexions soviétiques permises par le pacte" },
    "ww2-terr-vichy": { name: "La France de Vichy, zone non occupée" },
    "ww2-terr-free-france": { name: "L’Afrique française libre" },
    "ww2-terr-axis-europe": { name: "L’Europe et l’Afrique du Nord sous contrôle de l’Axe, fin 1942" },
  },
};
