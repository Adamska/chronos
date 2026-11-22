import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "rome-sack-410": {
    title: "Alaric met Rome à sac",
    place: "Rome",
    summary:
      "Les Wisigoths d’Alaric entrèrent dans Rome en août 410 et la pillèrent pendant trois jours. Pour la première fois depuis quelque 800 ans, la ville tombait aux mains d’un ennemi étranger.",
    context:
      "Alaric avait passé des années à réclamer des terres, une solde et un commandement à la cour d’Occident, qui s’y refusait tandis que l’empereur Honorius restait à l’abri à Ravenne. Le sac stupéfia le monde méditerranéen et poussa Augustin à écrire La Cité de Dieu.",
    whyHere:
      "Rome vivait du blé débarqué à Portus, à l’embouchure du Tibre : en s’emparant du port en 409, Alaric pouvait réduire la ville par la famine. Honorius, retranché derrière les marais et les lagunes de Ravenne, restait hors de sa portée.",
  },
  "rome-theodosian-walls": {
    title: "Les murailles de Théodose",
    place: "Constantinople, côté terre",
    summary:
      "Sous la régence d’Anthémius, Constantinople acheva une nouvelle et massive muraille terrestre d’environ 6 km, de la mer de Marmara à la Corne d’Or. Après un séisme en 447, elle fut rapidement rebâtie et dotée d’un mur extérieur et d’un fossé, formant une triple barrière.",
    context:
      "Les murailles furent élevées alors que Théodose II était encore enfant et que les Goths d’Alaric parcouraient les Balkans. Lorsque les Huns d’Attila ravagèrent la Thrace dans les années 440, la capitale elle-même ne fut jamais prise.",
    whyHere:
      "La ville se dressant sur une péninsule baignée d’eau sur deux côtés, une seule ligne de murailles barrant son court front terrestre suffisait à la clore entièrement. Des murs maritimes et une flotte gardaient le reste, et le ravitaillement continuait d’arriver par mer même quand des armées tenaient les campagnes.",
    schematic: {
      steps: [
        "La péninsule n’offre qu’un front terrestre",
        "Une triple muraille le verrouille",
        "Le ravitaillement arrive par mer",
        "Les envahisseurs se détournent",
      ],
    },
  },
  "rome-carthage-439": {
    title: "Les Vandales prennent Carthage",
    place: "Carthage, Afrique proconsulaire",
    summary:
      "Dix ans après être passés d’Espagne en Afrique, les Vandales de Genséric s’emparèrent de Carthage en octobre 439. L’Empire d’Occident perdait ses provinces les plus riches, ainsi que le blé et les impôts qui nourrissaient Rome et payaient ses armées.",
    context:
      "Rome reconnut le royaume vandale par un traité en 442. Les arsenaux de Carthage donnèrent à Genséric une flotte qui razzia la Sicile et l’Italie et mit Rome elle-même à sac en 455.",
    whyHere:
      "Carthage s’étend sur le golfe de Tunis, près de la fertile vallée du Bagradas, et le cap Bon n’est qu’à environ 140 km de la Sicile, de l’autre côté du détroit qui partage la Méditerranée. Qui la tenait contrôlait à la fois le grenier de Rome et la route maritime entre les deux moitiés de l’empire.",
    schematic: {
      steps: [
        "Les Vandales passent en Afrique (429)",
        "Carthage tombe (439)",
        "Blé et impôts perdus",
        "L’armée d’Occident n’est plus payée",
      ],
    },
  },
  "rome-catalaunian-plains": {
    title: "La bataille des champs Catalauniques",
    place: "Champagne, près de Châlons",
    summary:
      "Une coalition de Romains menés par Aetius et de Wisigoths conduits par Théodoric Ier tint en échec l’armée d’Attila dans le nord de la Gaule. Théodoric fut tué, mais Attila se retira vers l’est, au-delà du Rhin.",
    context:
      "Attila avait envahi la Gaule et assiégé Orléans. Il envahit l’Italie l’année suivante, mais mourut en 453, et son empire se disloqua après la défaite de ses fils à la Nedao, en 454.",
    whyHere:
      "Les plaines crayeuses et ouvertes de Champagne, traversées par des voies romaines convergeant vers Châlons et Troyes, offraient un terrain où les deux camps pouvaient déployer leur cavalerie. L’emplacement exact de la bataille demeure inconnu.",
  },
  "rome-fall-476": {
    title: "La déposition de Romulus Augustule",
    place: "Ravenne",
    summary:
      "Le général germanique Odoacre déposa l’enfant empereur Romulus Augustule et envoya les insignes impériaux à Constantinople. Il gouverna l’Italie en roi, nominalement sous l’autorité de l’empereur d’Orient Zénon.",
    context:
      "En 476, l’Empire d’Occident se réduisait à peu près à l’Italie, tandis que Vandales, Wisigoths, Burgondes et Francs régnaient sur les anciennes provinces. L’empereur exilé Julius Nepos conserva ses prétentions au titre jusqu’à sa mort, en 480.",
    whyHere:
      "Ravenne était la capitale de l’Occident depuis 402, car ses marais et ses lagunes la rendaient presque imprenable, et son port de Classe ouvrait sur l’Adriatique et l’Orient. Cette sécurité en fit un refuge pour des empereurs faibles plutôt qu’une base d’où défendre les provinces.",
  },
  "rome-theodoric-ravenna": {
    title: "Théodoric prend Ravenne",
    place: "Ravenne",
    summary:
      "Envoyé vers l’ouest par l’empereur Zénon, Théodoric mena les Ostrogoths en Italie en 489 et, après un long siège, prit Ravenne, où il tua Odoacre en 493. Il gouverna l’Italie jusqu’en 526, en conservant son administration romaine et son Sénat.",
    context:
      "Zénon se réjouissait d’éloigner des Balkans une puissante armée gothique. Théodoric tissa un réseau d’alliances matrimoniales avec les rois francs, wisigoths, vandales et burgondes.",
    whyHere:
      "Les marais et les lagunes de Ravenne tinrent Théodoric en échec près de trois ans, et Odoacre ne consentit à traiter qu’une fois le port bloqué. Les Goths entrèrent en Italie par l’Isonzo, porte naturelle qui mène des Balkans à travers les Alpes orientales, peu élevées.",
  },
  "rome-clovis-baptism": {
    title: "Le baptême de Clovis",
    place: "Reims, nord de la Gaule",
    summary:
      "Clovis, roi des Francs, fut baptisé dans la foi catholique par l’évêque Remi à Reims, à une date que l’on situe diversement entre 496 et 508. À la différence des Goths ariens, les Francs partageaient désormais la foi de leurs sujets gallo-romains.",
    context:
      "Clovis unifia les groupes francs et vainquit les Wisigoths à Vouillé en 507, les chassant de la plus grande partie de la Gaule. Le soutien des évêques de Gaule contribua à faire du royaume franc le plus durable des États successeurs.",
    whyHere:
      "Reims était le siège métropolitain de l’ancienne province romaine où les Francs s’étaient établis, entre le Rhin et la Seine. S’étendant par voie de terre à partir de leurs territoires d’origine plutôt que de migrer au loin, les Francs ne perdirent jamais le contact avec leur réservoir d’hommes.",
  },
  "rome-corpus-juris": {
    title: "Le Corpus juris civilis",
    place: "Constantinople",
    summary:
      "Une commission dirigée par Tribonien compila le Code, le Digeste et les Institutes, condensant des siècles de droit romain en un ensemble cohérent. Sa redécouverte dans l’Italie médiévale en fit le fondement du droit civil dans toute l’Europe.",
    context:
      "Justinien entendait restaurer le monde romain dans le droit autant que dans ses territoires. Le travail se poursuivit même pendant la sédition Nika de 532, qui faillit le renverser.",
    whyHere:
      "Protégée par la mer et ses murailles, Constantinople avait conservé les archives, les bibliothèques et les juristes formés que les villes saccagées de l’Occident avaient perdus. La commission s’appuya sur les écoles de droit de la capitale et de Béryte, principaux foyers du savoir juridique.",
  },
  "rome-vandalic-war": {
    title: "Bélisaire reprend l’Afrique",
    place: "Carthage",
    summary:
      "Bélisaire appareilla de Constantinople avec environ 15 000 soldats, l’emporta à Ad Decimum et à Tricamarum, et entra dans Carthage. Le roi vandale Gélimer se rendit en 534.",
    context:
      "Cette victoire facile encouragea Justinien à attaquer l’Italie ostrogothique en 535, ouvrant une guerre qui dura jusqu’en 554 et laissa la péninsule dévastée.",
    whyHere:
      "La flotte longea les côtes de la Grèce et se ravitailla en Sicile avant de débarquer à Caput Vada, à plusieurs jours de marche au sud de Carthage, évitant ainsi une bataille navale. La flotte vandale était alors en Sardaigne pour mater une révolte, laissant la côte sans défense.",
  },
  "rome-hagia-sophia": {
    title: "La consécration de Sainte-Sophie",
    place: "Constantinople",
    summary:
      "La nouvelle cathédrale de Justinien, conçue par Anthémius de Tralles et Isidore de Milet, fut consacrée en décembre 537 après moins de six ans de travaux. Elle resta la plus grande église du monde chrétien pendant près de mille ans.",
    context:
      "L’église précédente avait brûlé lors de la sédition Nika de 532. Rebâtie, Sainte-Sophie proclamait la richesse et l’autorité chrétienne d’un empire qui se voyait comme la seule vraie Rome.",
    whyHere:
      "L’église couronne la première colline, à la pointe de la péninsule, près du Grand Palais et de l’Hippodrome, visible des navires sur le Bosphore et la mer de Marmara. La région se trouve près d’une zone de failles actives, et des séismes firent s’effondrer la première coupole en 558.",
  },
  "rome-plague": {
    title: "La peste de Justinien",
    place: "Péluse, delta oriental du Nil",
    summary:
      "La peste bubonique apparut à Péluse en 541 et atteignit Constantinople en 542, où Procope rapporta des milliers de morts par jour. L’ADN ancien a confirmé que Yersinia pestis en était la cause.",
    context:
      "Justinien lui-même contracta la maladie et y survécut. La peste revint par vagues pendant deux siècles, éclaircissant les rangs des soldats et des contribuables dont ses reconquêtes avaient besoin ; il régna jusqu’à sa mort en 565, laissant un empire à bout de forces.",
    whyHere:
      "Péluse gardait la lisière orientale du delta du Nil, là où les routes de la mer Rouge et du Sinaï rejoignaient la navigation méditerranéenne. D’Égypte, la maladie emprunta les mêmes routes maritimes que le blé destiné à la capitale.",
    schematic: {
      steps: [
        "La peste surgit à Péluse",
        "Les navires frumentaires l’emportent au nord",
        "Constantinople frappée (542)",
        "Armées et impôts s’amenuisent",
      ],
    },
  },
};
