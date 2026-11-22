import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La chute de Rome et les migrations de l’Antiquité tardive",
  subtitle: "Fleuves, steppe, détroits et blé : pourquoi l’Occident est tombé et l’Orient a tenu",
  summary:
    "De la crise de 235 à la mort de Justinien en 565, le monde romain fut remodelé par la pression sur le Rhin et le Danube, par les peuples poussés vers l’ouest le long du couloir de la steppe et par les flottes frumentaires qui nourrissaient ses capitales. L’Occident se morcela en royaumes germaniques dès qu’il eut perdu l’Afrique, tandis que Constantinople, protégée par les eaux et les murailles, survécut et tenta une reconquête.",
  keywords: [
    "chute de rome",
    "antiquité tardive",
    "grandes invasions",
    "empire byzantin",
    "constantinople",
    "justinien",
    "bélisaire",
    "attila",
    "huns",
    "goths",
    "vandales",
    "alaric",
    "constantin",
    "dioclétien",
    "andrinople",
    "carthage",
    "murailles de théodose",
    "annone",
    "peste de justinien",
  ],
  chapters: {
    "rome-ch-crisis": {
      title: "Un empire sous tension",
      caption:
        "Les armées du Rhin, du Danube et de l’Euphrate font et défont les empereurs, tandis que les menaces montent à la fois sur toutes les frontières.",
    },
    "rome-ch-edessa": {
      title: "Désastre en Orient",
      caption:
        "Dans la plaine ouverte de Mésopotamie, Shapur Ier capture un empereur romain, et l’empire éclate en trois.",
    },
    "rome-ch-constantinople": {
      title: "Une nouvelle Rome",
      caption:
        "Constantin refonde Byzance sur un promontoire entre deux mers, là où l’Europe et l’Asie se touchent presque.",
    },
    "rome-ch-adrianople": {
      title: "De la steppe à la Thrace",
      caption:
        "Les Huns déferlent sur les prairies, les Goths franchissent le Danube, et un empereur meurt dans la plaine de Thrace.",
    },
    "rome-ch-sack": {
      title: "Rome tombe aux mains d’Alaric",
      caption:
        "Le Rhin forcé et la cour retranchée à Ravenne, les Wisigoths affament puis mettent à sac l’ancienne capitale.",
    },
    "rome-ch-carthage": {
      title: "Le cordon nourricier tranché",
      caption:
        "Les Vandales prennent Carthage, et avec elle le blé et les impôts africains qui maintenaient en vie l’Empire d’Occident.",
    },
    "rome-ch-476": {
      title: "Le dernier empereur d’Occident",
      caption:
        "Dans Ravenne, cernée de marais, Odoacre dépose Romulus Augustule et renvoie les insignes impériaux en Orient.",
    },
    "rome-ch-reconquest": {
      title: "Justinien frappe à l’ouest",
      caption:
        "Bélisaire appareille du Bosphore pour reprendre l’Afrique et l’Italie au nom d’un empire qui ne cessa jamais de se dire romain.",
    },
    "rome-ch-plague": {
      title: "La peste sur les routes du blé",
      caption:
        "La peste quitte l’Égypte à bord des navires frumentaires et gagne Constantinople, saignant l’empire que Justinien avait agrandi.",
    },
  },
  arcs: {
    "rome-arc-annona-africa": {
      label: "La flotte frumentaire d’Afrique vers Ostie",
      cargo: ["blé", "huile d’olive", "sigillée claire africaine"],
    },
    "rome-arc-annona-egypt": {
      label: "La flotte frumentaire d’Alexandrie vers Constantinople",
      cargo: ["blé d’Égypte", "papyrus", "lin"],
    },
    "rome-arc-huns": { label: "L’avancée des Huns à travers la steppe" },
    "rome-arc-goths-danube": { label: "Les Goths franchissent le Danube" },
    "rome-arc-visigoths": { label: "Les Wisigoths, des Balkans à la Gaule" },
    "rome-arc-vandals": { label: "Les Vandales, du Rhin à Carthage" },
    "rome-arc-anglo-saxons": { label: "Angles et Saxons passent en Bretagne" },
    "rome-arc-attila": { label: "L’invasion de la Gaule par Attila" },
    "rome-arc-ostrogoths": { label: "Les Ostrogoths marchent sur l’Italie" },
    "rome-arc-belisarius": { label: "Bélisaire : de Constantinople à Carthage et à Rome" },
    "rome-arc-plague": {
      label: "La peste, de Péluse à travers la Méditerranée",
      cargo: ["blé", "rats", "puces"],
    },
  },
  territories: {
    "rome-terr-roman-empire": { name: "Empire romain" },
    "rome-terr-western-empire": { name: "Empire romain d’Occident" },
    "rome-terr-eastern-empire": { name: "Empire romain d’Orient" },
    "rome-terr-sasanian": { name: "Empire sassanide" },
    "rome-terr-hunnic": { name: "Empire hunnique" },
    "rome-terr-vandal": { name: "Royaume vandale" },
    "rome-terr-visigothic": { name: "Royaume wisigoth" },
    "rome-terr-ostrogothic": { name: "Royaume ostrogoth" },
  },
};
