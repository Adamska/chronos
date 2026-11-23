import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’Égypte des pharaons",
  subtitle: "Trois mille ans sur un fil vert tendu à travers le désert",
  summary:
    "Pendant trois millénaires, une civilisation a vécu sur une bande de limon large de quelques kilomètres, nourrie par la crue d’été et enfermée entre deux déserts. Suivez l’Égypte de l’unification de Narmer aux pyramides, de l’empire de Thoutmôsis et de Ramsès aux conquérants nubiens et perses, puis à la cité grecque d’Alexandrie, jusqu’à la mort de Cléopâtre en 30 av. J.-C.",
  keywords: [
    "égypte ancienne",
    "pharaons",
    "nil",
    "narmer",
    "pyramides",
    "gizeh",
    "khéops",
    "imhotep",
    "hatchepsout",
    "pount",
    "akhenaton",
    "amarna",
    "toutânkhamon",
    "ramsès ii",
    "qadesh",
    "abou simbel",
    "nubie",
    "koush",
    "alexandrie",
    "cléopâtre",
  ],
  chapters: {
    "egypt-ch-two-lands": {
      title: "Les Deux Terres n’en font qu’une",
      caption:
        "Un roi venu du sud réunit le Delta sous une même couronne, et le Nil devient l’épine dorsale de l’un des premiers États territoriaux du monde.",
    },
    "egypt-ch-pyramids": {
      title: "Des montagnes de pierre",
      caption:
        "Au bord du désert, au-dessus de la plaine inondable, les équipes de Khéops élèvent une pyramide de 2,3 millions de blocs, acheminés par bateau au moment de la crue.",
    },
    "egypt-ch-punt": {
      title: "La route de Pount",
      caption:
        "La flotte d’Hatchepsout descend toute la mer Rouge et revient chargée d’arbres à encens, d’ébène et d’or.",
    },
    "egypt-ch-amarna": {
      title: "La cité du disque solaire",
      caption:
        "Akhenaton quitte Thèbes et ses dieux pour une capitale neuve, bâtie en plein désert et vouée au seul Aton.",
    },
    "egypt-ch-kadesh": {
      title: "Des chars sur l’Oronte",
      caption:
        "Ramsès II et le roi hittite Mouwatalli s’affrontent à Qadesh, là où se touchent les sphères égyptienne et hittite, en Syrie.",
    },
    "egypt-ch-collapse": {
      title: "Les Peuples de la mer",
      caption:
        "Tandis que s’effondre le monde de l’âge du bronze, pillards et migrants déferlent le long de la Méditerranée orientale jusqu’aux bouches du Nil.",
    },
    "egypt-ch-kush": {
      title: "Des pharaons venus de Koush",
      caption:
        "Depuis Napata, au pied de la montagne sacrée du Gebel Barkal, les rois koushites descendent le Nil et règnent sur l’Égypte pendant près d’un siècle.",
    },
    "egypt-ch-alexandria": {
      title: "Une cité grecque au bord du Nil",
      caption:
        "Alexandre fonde Alexandrie entre la mer et le lac Maréotis, et les Ptolémées en font la ville la plus brillante de la Méditerranée.",
    },
    "egypt-ch-cleopatra": {
      title: "Le dernier pharaon",
      caption: "Après Actium, Cléopâtre meurt à Alexandrie, et le blé comme l’or de l’Égypte passent à Rome.",
    },
  },
  arcs: {
    "egypt-arc-nile": { label: "L’autoroute du Nil : de Memphis à Assouan", cargo: ["céréales", "pierre", "lin", "papyrus"] },
    "egypt-arc-byblos": { label: "Les navires de cèdre de Byblos", cargo: ["cèdre", "résine", "vin", "huile"] },
    "egypt-arc-sinai": { label: "Cuivre et turquoise du Sinaï par le ouadi el-Jarf", cargo: ["cuivre", "turquoise"] },
    "egypt-arc-nubia": {
      label: "Au-delà des cataractes : la route de l’or vers Koush",
      cargo: ["or", "ivoire", "ébène", "bétail"],
    },
    "egypt-arc-punt": {
      label: "Par la mer Rouge jusqu’au pays de Pount",
      cargo: ["myrrhe", "encens", "ébène", "or", "babouins"],
    },
    "egypt-arc-canaan": { label: "Des colons cananéens dans le Delta oriental" },
    "egypt-arc-megiddo": { label: "La marche de Thoutmôsis III sur Megiddo" },
    "egypt-arc-letters": {
      label: "Les lettres d’Amarna : des tablettes entre cours royales",
      cargo: ["tablettes d’argile", "or", "lapis-lazuli", "chevaux"],
    },
    "egypt-arc-kadesh": { label: "Ramsès II marche sur Qadesh" },
    "egypt-arc-hittite": { label: "L’armée hittite de Mouwatalli vers Qadesh" },
    "egypt-arc-sea-peoples": { label: "Les Peuples de la mer en Méditerranée orientale" },
    "egypt-arc-piye": { label: "Piânkhy descend le Nil depuis Napata" },
    "egypt-arc-cambyses": { label: "Cambyse traverse le nord du Sinaï" },
    "egypt-arc-canal": {
      label: "Le canal de Darius : du Nil à la mer Rouge",
      cargo: ["céréales", "tribut", "navires royaux"],
    },
    "egypt-arc-alexander": { label: "Alexandre en Égypte : de Péluse à Siwa" },
    "egypt-arc-aegean": {
      label: "De l’Égée à Alexandrie : savants, livres et blé",
      cargo: ["livres", "savants", "papyrus", "blé"],
    },
    "egypt-arc-actium": { label: "La fuite d’Actium à Alexandrie" },
  },
  territories: {
    "egypt-terr-old-kingdom": { name: "Égypte thinite et Ancien Empire" },
    "egypt-terr-middle-kingdom": { name: "Égypte du Moyen Empire" },
    "egypt-terr-hyksos": { name: "Royaume hyksôs (XVe dynastie)" },
    "egypt-terr-kerma": { name: "Royaume de Kerma" },
    "egypt-terr-new-kingdom": { name: "Égypte du Nouvel Empire et son empire" },
    "egypt-terr-hittite": { name: "Empire hittite" },
    "egypt-terr-kush": { name: "Royaume de Koush (Napata et Méroé)" },
    "egypt-terr-achaemenid": { name: "Empire perse achéménide" },
    "egypt-terr-ptolemaic": { name: "Royaume lagide" },
  },
};
