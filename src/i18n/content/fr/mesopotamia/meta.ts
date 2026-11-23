import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La Mésopotamie",
  subtitle: "Le pays entre les fleuves, où naquirent les villes, l’écriture et les empires",
  summary:
    "Sur une plaine sans pluie, entre le Tigre et l’Euphrate, l’irrigation nourrit les premières villes, des scribes inventèrent l’écriture et des rois bâtirent les premiers empires. Suivez trois mille ans d’histoire mésopotamienne, d’Uruk et des cités-États sumériennes à Sargon, Hammurabi et aux rois d’Assyrie, jusqu’à la Babylone de Nabuchodonosor et sa prise par Cyrus le Perse en 539 av. J.-C.",
  keywords: [
    "mésopotamie",
    "sumer",
    "sumériens",
    "uruk",
    "cunéiforme",
    "gilgamesh",
    "akkad",
    "sargon",
    "ziggurat",
    "ur",
    "babylone",
    "hammurabi",
    "assyrie",
    "ninive",
    "assurbanipal",
    "nabuchodonosor",
    "porte d’ishtar",
    "tigre",
    "euphrate",
    "croissant fertile",
  ],
  chapters: {
    "meso-ch-uruk": {
      title: "La première ville",
      caption:
        "Des canaux amènent l’Euphrate sur une plaine sans pluie, et l’orge qu’ils font naître nourrit Uruk, la première véritable ville.",
    },
    "meso-ch-writing": {
      title: "Des signes sur l’argile",
      caption:
        "Les comptables des temples d’Uruk impriment des marques dans l’argile fraîche\u00a0; en quelques siècles, ces marques sauront noter toute une langue.",
    },
    "meso-ch-akkad": {
      title: "L’empire de Sargon",
      caption: "Un échanson de Kish soumet les cités de Sumer et porte ses armées du Golfe jusqu’à la Méditerranée.",
    },
    "meso-ch-ur": {
      title: "La ziggurat d’Ur",
      caption:
        "Les rois d’Ur élèvent au dieu Lune une montagne de brique crue et dirigent l’État le plus bureaucratique du monde antique.",
    },
    "meso-ch-hammurabi": {
      title: "Les lois d’Hammurabi",
      caption: "Un roi de Babylone unifie le pays des fleuves et grave 282 lois dans la pierre, sous le regard du dieu Soleil.",
    },
    "meso-ch-diplomacy": {
      title: "Frères entre grands rois",
      caption:
        "La Babylone kassite échange lapis-lazuli et chevaux contre l’or d’Égypte, dans des lettres rédigées en akkadien, la langue diplomatique de l’époque.",
    },
    "meso-ch-assyria": {
      title: "La machine assyrienne",
      caption: "Depuis son cœur sur le Tigre, l’Assyrie change les royaumes en provinces et déplace des peuples entiers à travers son empire.",
    },
    "meso-ch-nineveh": {
      title: "Ninive en flammes",
      caption:
        "Mèdes descendus des montagnes et Babyloniens venus du sud convergent sur la plus grande ville du monde et la laissent en ruines.",
    },
    "meso-ch-cyrus": {
      title: "Babylone ouvre ses portes",
      caption:
        "L’éblouissante capitale de Nabuchodonosor tombe presque sans combat aux mains de Cyrus, et la Mésopotamie entre dans un empire perse universel.",
    },
  },
  arcs: {
    "meso-arc-uruk-upriver": {
      label: "Les colonies d’Uruk en amont de l’Euphrate",
      cargo: ["bois", "cuivre", "pierre", "textiles"],
    },
    "meso-arc-lapis": { label: "Le lapis-lazuli, du Badakhshan à Ur", cargo: ["lapis-lazuli", "étain", "cornaline"] },
    "meso-arc-gulf": {
      label: "La route du Golfe\u00a0: Ur, Dilmoun, Magan, Meluhha",
      cargo: ["cuivre", "cornaline", "bois", "textiles"],
    },
    "meso-arc-sargon-south": { label: "Sargon soumet Sumer" },
    "meso-arc-sargon-west": { label: "Sargon marche vers la forêt de cèdres", cargo: ["cèdre", "argent"] },
    "meso-arc-tin-east": { label: "L’étain du plateau iranien vers Assur", cargo: ["étain"] },
    "meso-arc-kanesh": {
      label: "Les caravanes d’ânes, d’Assur à Kanesh",
      cargo: ["étain", "étoffes de laine", "argent", "or"],
    },
    "meso-arc-hammurabi": { label: "Les guerres d’Hammurabi\u00a0: Larsa, Eshnunna, Mari" },
    "meso-arc-hittite": { label: "Le raid de Mursili le long de l’Euphrate", cargo: ["statue de Marduk"] },
    "meso-arc-amarna": {
      label: "Messagers royaux entre Babylone et l’Égypte",
      cargo: ["lapis-lazuli", "chevaux", "or", "lettres"],
    },
    "meso-arc-deportation": { label: "Les Israélites déportés en Assyrie" },
    "meso-arc-lachish": { label: "La campagne de Sennachérib en Juda" },
    "meso-arc-tablets": {
      label: "Des tablettes babyloniennes expédiées à Ninive",
      cargo: ["présages", "hymnes", "textes médicaux", "listes de mots"],
    },
    "meso-arc-medes": { label: "Les Mèdes descendent du Zagros" },
    "meso-arc-babylonians": { label: "Nabopolassar remonte le Tigre" },
    "meso-arc-exile": { label: "La route de l’exil\u00a0: de Jérusalem à Babylone" },
    "meso-arc-cyrus": { label: "Cyrus marche sur Babylone" },
  },
  territories: {
    "meso-terr-sumer": { name: "Cités-États sumériennes" },
    "meso-terr-elam": { name: "Élam" },
    "meso-terr-akkad": { name: "Empire d’Akkad" },
    "meso-terr-ur3": { name: "Troisième dynastie d’Ur" },
    "meso-terr-hammurabi": { name: "La Babylonie d’Hammurabi" },
    "meso-terr-kassite": { name: "Babylonie kassite" },
    "meso-terr-assyria": { name: "Empire néo-assyrien" },
    "meso-terr-neo-babylon": { name: "Empire néo-babylonien" },
    "meso-terr-persia": { name: "L’Empire perse de Cyrus" },
  },
};
