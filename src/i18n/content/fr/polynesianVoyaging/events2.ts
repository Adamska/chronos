import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "pacific-sweet-potato": {
    title: "La patate douce et les contacts avec l’Amérique du Sud",
    place: "Fatu Hiva, sud des Marquises",
    summary:
      "La patate douce, domestiquée en Amérique tropicale, poussait en Polynésie orientale des siècles avant l’arrivée des Européens dans le Pacifique. Une étude génétique de 2020 a décelé une ascendance amérindienne dans plusieurs populations de Polynésie orientale, le contact le plus ancien étant daté d’environ 1150-1230, à Fatu Hiva.",
    context:
      "La composante amérindienne se rapproche le plus des peuples autochtones de l’actuelle Colombie, mais on ignore si ce sont des Polynésiens qui naviguèrent vers l’est ou des Sud-Américains qui dérivèrent vers l’ouest. Une étude de 2018 a soutenu que la plante aurait pu traverser l’océan naturellement, mais la plupart des spécialistes privilégient toujours un transport par l’homme.",
    whyHere:
      "Le courant sud-équatorial et les alizés du sud-est portent des côtes de l’Amérique du Sud vers les Marquises et les Tuamotu, route que suivit en dérivant le radeau Kon-Tiki en 1947. Pour des Polynésiens remontant le vent, la côte américaine était une cible trop vaste pour être manquée.",
    schematic: {
      steps: [
        "Contact avec le nord de l’Amérique du Sud",
        "La patate douce atteint la Polynésie orientale",
        "Le kūmara gagne Hawaiʻi et Rapa Nui",
        "Culture de base dans l’Aotearoa tempérée",
      ],
    },
  },
  "pacific-tui-tonga": {
    title: "La chefferie maritime des Tuʻi Tonga",
    place: "Lapaha (Muʻa), Tongatapu",
    summary:
      "Depuis un centre royal établi à Lapaha, sur Tongatapu, la lignée sacrée des Tuʻi Tonga bâtit une chefferie maritime dont l’influence s’étendait aux Samoa, à ʻUvea, à Futuna et à une partie des Fidji. La tradition attribue à Tuʻitātui l’érection du trilithe de Haʻamonga ʻa Maui, vers 1200.",
    context:
      "Des herminettes de pierre exhumées au centre royal avaient été taillées dans des roches extraites aux Samoa, aux Fidji et dans d’autres îles, signe de la distance que parcouraient tributs et présents. Nattes fines, plumes rouges, étoffes d’écorce battue et pirogues circulaient entre familles de chefs liées par le mariage et l’obligation.",
    whyHere:
      "Tonga, les Fidji et les Samoa ne sont qu’à quelques jours de navigation les unes des autres, assez proches pour des allers-retours réguliers en toute saison. Les terres vastes, fertiles et plates de Tongatapu pouvaient nourrir une population dense, et son lagon offrait aux chefs un port abrité pour leurs grandes pirogues doubles.",
  },
  "pacific-rapa-nui": {
    title: "Les Polynésiens peuplent Rapa Nui",
    place: "Anakena, Rapa Nui",
    summary:
      "Des navigateurs polynésiens atteignirent vers 1200 Rapa Nui, l’île habitée la plus isolée du globe. Au cours des siècles suivants, ils sculptèrent et déplacèrent des centaines de statues monumentales, les moai.",
    context:
      "Des estimations plus anciennes situaient le peuplement dès 400 à 800 de notre ère, mais les datations au radiocarbone conduites par Terry Hunt et Carl Lipo ont plaidé pour 1200 environ. La disparition de la forêt de palmiers de l’île, et la question de savoir si elle provoqua un effondrement social, font l’objet de vifs débats ; les rats polynésiens, friands des graines de palmier, y ont joué un rôle.",
    whyHere:
      "Rapa Nui se trouve à plus de 2 000 kilomètres de Pitcairn et à plus de 3 500 de l’Amérique du Sud. Par 27 degrés de latitude sud, elle est plus fraîche, plus sèche et plus venteuse que les îles tropicales : l’arbre à pain et le cocotier y peinaient, et la patate douce devint l’aliment de base.",
  },
  "pacific-mangareva-exchange": {
    title: "Les échanges entre Mangareva, Pitcairn et Henderson",
    place: "Mangareva, îles Gambier",
    summary:
      "L’analyse géochimique de l’origine des outils de pierre montre que Mangareva, Pitcairn et Henderson étaient reliées par des voyages réguliers en pirogue, qui faisaient circuler basalte à herminettes, verre volcanique et nacre. Vers 1500, le réseau s’était effondré, et Pitcairn et Henderson furent plus tard abandonnées.",
    context:
      "L’archéologue Marshall Weisler a retracé l’origine du basalte de Henderson jusqu’à des carrières de Pitcairn et de Mangareva. On impute souvent l’effondrement à la déforestation de Mangareva, qui réduisit le bois disponible pour les grandes pirogues, mais ses causes restent débattues.",
    whyHere:
      "Aucune des trois îles ne possédait tout : Mangareva avait un vaste lagon riche en huîtres perlières à lèvres noires, la minuscule Pitcairn un basalte fin et du verre volcanique, et Henderson, île corallienne surélevée, des tortues et des oiseaux marins, mais pas de pierre. Pitcairn se trouve à environ 540 kilomètres de Mangareva et à 200 de Henderson.",
    schematic: {
      westLabel: "Mangareva",
      eastLabel: "Pitcairn et Henderson",
      eastbound: ["Nacre", "Basalte de Mangareva"],
      westbound: ["Basalte à herminettes de Pitcairn", "Verre volcanique"],
    },
  },
  "pacific-hawaii": {
    title: "Les navigateurs atteignent Hawaiʻi",
    place: "Ka Lae (South Point), île de Hawaiʻi",
    summary:
      "Venus des îles de la Société ou des Marquises, des Polynésiens franchirent l’équateur pour peupler Hawaiʻi vers 1200, au terme d’un voyage de quelque 4 000 kilomètres. La tradition hawaïenne garde le souvenir d’allers et retours vers Kahiki, les terres du sud, poursuivis pendant plusieurs générations.",
    context:
      "L’étude de Wilmshurst de 2011 situait le peuplement de Hawaiʻi entre 1190 et 1290 environ, tandis que d’autres études hawaïennes plaident pour une arrivée légèrement plus précoce. L’archipel abrita plus tard certaines des chefferies les plus vastes et les plus hiérarchisées de Polynésie.",
    whyHere:
      "La route de Tahiti à Hawaiʻi suit presque le méridien, en travers des alizés du nord-est et du sud-est : les pirogues pouvaient naviguer vent de travers dans les deux sens. En faisant route au nord, les navigateurs traversaient le pot-au-noir et voyaient l’étoile Polaire monter chaque nuit un peu plus haut.",
  },
  "pacific-aotearoa": {
    title: "Le peuplement polynésien d’Aotearoa",
    place: "Wairau Bar, Marlborough",
    summary:
      "Des navigateurs de Polynésie orientale atteignirent Aotearoa-Nouvelle-Zélande vers 1250-1300 : ce fut la dernière grande terre du globe à être peuplée. Des villages anciens comme Wairau Bar, avec ses campements de chasseurs de moa et ses sépultures, montrent les premiers colons s’adaptant à un monde tempéré.",
    context:
      "Des graines rongées par le rat polynésien, arrivé avec les humains, sont datées d’environ 1280, et presque aucune trace humaine ne se trouve sous les cendres de l’éruption du Kaharoa, vers 1314. Les moa géants furent chassés jusqu’à l’extinction en deux siècles environ.",
    whyHere:
      "Aotearoa est plus vaste que toutes les autres îles polynésiennes réunies et s’étend loin vers les froides latitudes australes, à quelque 3 000 kilomètres au sud-ouest des îles Cook. La plupart des plantes tropicales y échouèrent : les colons comptèrent donc sur la chasse, la pêche et le kūmara conservé l’hiver dans des fosses.",
    schematic: {
      steps: [
        "Les navigateurs cinglent au sud-ouest, hors des tropiques",
        "Les plantes tropicales échouent dans le froid",
        "Moa et phoques nourrissent les premières générations",
        "Le kūmara conservé l’hiver dans des fosses",
      ],
    },
  },
  "pacific-taputapuatea": {
    title: "Taputapuātea devient un centre de la navigation",
    place: "Taputapuātea, Opoa, Raʻiātea",
    summary:
      "Le marae de Taputapuātea, à Raʻiātea, devint le centre cérémoniel le plus sacré de Polynésie orientale, où se réunissaient chefs et prêtres de nombreuses îles. On en emportait des pierres pour fonder de nouveaux marae sur d’autres îles.",
    context:
      "Le nom ancien de Raʻiātea, Havaiʻi, fait écho à la patrie ancestrale de la tradition polynésienne, appelée Hawaiki en Aotearoa. Le site a été inscrit sur la Liste du patrimoine mondial de l’UNESCO en 2017, et le prêtre-navigateur Tupaia fut formé à ses traditions.",
    whyHere:
      "Raʻiātea se trouve au cœur des îles de la Société, et le marae se dresse sur une pointe faisant face à Te Ava Moʻa, passe sacrée à travers le récif par laquelle les pirogues entraient dans le lagon et en sortaient.",
  },
  "pacific-chatham-moriori": {
    title: "Les Moriori s’établissent aux îles Chatham",
    place: "Rēkohu (île Chatham)",
    summary:
      "Vers 1500, des Polynésiens venus des grandes îles de Nouvelle-Zélande s’établirent aux îles Chatham, à 800 kilomètres à l’est, et devinrent les Moriori. Suivant un code attribué à l’ancêtre Nunuku-whenua, ils renoncèrent à tuer à la guerre.",
    context:
      "Isolés des grandes îles, les Moriori développèrent leur propre dialecte et leurs propres coutumes. Leur pacifisme les laissa sans défense lorsque des Māori du Taranaki, transportés par un navire européen, envahirent l’archipel en 1835 et en tuèrent ou réduisirent en esclavage un grand nombre.",
    whyHere:
      "Par 44 degrés de latitude sud, les Chatham sont trop froides pour le kūmara comme pour toute autre plante polynésienne : les Moriori vivaient de pêche, de chasse aux phoques et aux oiseaux, et de cueillette. Faute de grands arbres, ils construisaient de petites embarcations en tiges de lin de Nouvelle-Zélande plutôt que de grandes pirogues de voyage.",
  },
  "pacific-tupaia-cook": {
    title: "Tupaia cartographie le Pacifique pour Cook",
    place: "Baie de Matavai, Tahiti",
    summary:
      "En juillet 1769, le prêtre et navigateur Tupaia, originaire de Raʻiātea, rejoignit à Tahiti l’Endeavour de James Cook. Il guida le navire à travers les îles de la Société jusqu’à Rurutu et dessina une carte d’environ 74 îles réparties à travers le Pacifique central.",
    context:
      "En Nouvelle-Zélande, Tupaia pouvait converser avec les Māori, dont la langue était proche de la sienne, et servit d’interprète à l’expédition. Il mourut à Batavia en 1770, mais sa carte survit à travers des copies, témoignage unique du savoir géographique polynésien au moment du contact.",
    whyHere:
      "La baie de Matavai, à Tahiti, était le mouillage favori des navires européens, et Tupaia s’y était réfugié après la conquête de son île natale, Raʻiātea, par des guerriers de Bora Bora. Selon des travaux récents, sa carte situait les îles d’après des caps de navigation, du point de vue d’un navigateur, plutôt qu’en latitude et en longitude, ce qui déconcerta longtemps les lecteurs européens.",
  },
};
