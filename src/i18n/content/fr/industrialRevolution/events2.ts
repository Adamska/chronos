import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "ind-cotton-famine": {
    title: "La famine du coton dans le Lancashire",
    place: "Villes cotonnières du Lancashire",
    summary:
      "La guerre de Sécession tarit l’approvisionnement en coton du Sud, mettant à l’arrêt les filatures du Lancashire et réduisant des centaines de milliers de personnes à l’assistance. Nombre d’ouvriers des filatures n’en soutinrent pas moins publiquement l’Union et l’abolition de l’esclavage.",
    context:
      "Le blocus nordiste et l’embargo décrété par la Confédération elle-même devaient contraindre la Grande-Bretagne à intervenir, mais les entrepôts étaient pleins après la surproduction de 1860, et la Grande-Bretagne resta neutre. Les négociants se tournèrent vers l’Inde et l’Égypte, déclenchant à Bombay un boom spéculatif sur le coton.",
    whyHere:
      "Le Lancashire avait concentré dans un seul comté la filature mondiale du coton, alimentée de manière écrasante par une source unique, de l’autre côté de l’Atlantique. Cette dépendance transforma une guerre outre-océan en famine à Blackburn, Preston et Manchester.",
  },
  "ind-atlantic-cable": {
    title: "Le Great Eastern pose le câble transatlantique",
    place: "Heart’s Content, Terre-Neuve",
    summary:
      "Le gigantesque vapeur de Brunel, le Great Eastern, posa un câble télégraphique de l’île de Valentia, en Irlande, jusqu’à Heart’s Content, donnant à l’Europe et à l’Amérique du Nord une liaison électrique durable. L’équipage repêcha ensuite et acheva le câble perdu en 1865 : deux lignes fonctionnaient désormais.",
    context:
      "Un câble de 1858 avait transmis des messages entre la reine Victoria et le président Buchanan, mais il avait lâché au bout de quelques semaines, après l’application d’une tension trop élevée. Un câble de meilleure qualité, les instruments sensibles de William Thomson et un navire assez grand pour porter toute la longueur assurèrent le succès de la tentative de 1866.",
    whyHere:
      "L’ouest de l’Irlande et Terre-Neuve sont les points les plus proches entre les îles Britanniques et l’Amérique du Nord, et les sondages avaient révélé entre eux un fond marin large et relativement plat. Heart’s Content offrait pour l’atterrissage un port profond et abrité.",
  },
  "ind-suez-canal": {
    title: "L’ouverture du canal de Suez",
    place: "Isthme de Suez, Égypte",
    summary:
      "Après dix ans de travaux, accomplis en grande partie par des ouvriers égyptiens réquisitionnés, une compagnie à direction française ouvrit un canal à niveau entre la Méditerranée et la mer Rouge. Les navires à destination de l’Inde n’avaient plus à contourner l’Afrique.",
    context:
      "Le canal favorisait les navires à vapeur, capables de tenir leur cap malgré les vents contraires de la mer Rouge, et les aida à supplanter la voile sur les routes de l’Orient. La Grande-Bretagne racheta les actions du gouvernement égyptien en 1875 et occupa l’Égypte en 1882 pour sécuriser sa route des Indes.",
    whyHere:
      "L’isthme est une bande de désert basse et plate, large d’environ 160 kilomètres seulement, et les deux mers sont presque au même niveau : aucune écluse n’était nécessaire. Le lac Timsah et les lacs Amers offraient des bassins naturels le long du tracé.",
    schematic: {
      westLabel: "Grande-Bretagne et Europe",
      eastLabel: "Inde et Orient",
      eastbound: ["Cotonnades", "Machines", "Rails", "Courrier"],
      westbound: ["Coton brut", "Jute", "Thé", "Blé"],
    },
  },
  "ind-transcontinental": {
    title: "Le premier chemin de fer transcontinental",
    place: "Promontory Summit, territoire de l’Utah",
    summary:
      "Le Central Pacific, construit vers l’est depuis Sacramento, rejoignit l’Union Pacific, construit vers l’ouest depuis le Missouri, et un crampon d’or cérémoniel scella leur jonction. Un signal télégraphique annonça les derniers coups de masse aux villes de tout le pays.",
    context:
      "Autorisée par le Pacific Railway Act de 1862, la ligne arrima la Californie à l’Union et ramena la traversée d’une côte à l’autre de plusieurs mois à une semaine environ. Des milliers d’ouvriers chinois construisirent le Central Pacific, tandis que le chemin de fer accélérait la dépossession des nations des Plaines.",
    whyHere:
      "L’Union Pacific suivit la vallée en pente douce de la Platte et franchit la ligne de partage des eaux par les bassins ouverts du Wyoming. Le Central Pacific dut percer le granit de la Sierra Nevada près du col Donner, et les deux lignes se rejoignirent dans les terres plates au nord du Grand Lac Salé.",
  },
  "ind-india-cable": {
    title: "Le câble sous-marin atteint Bombay",
    place: "Porthcurno, Cornouailles",
    summary:
      "Des câbles partis de Porthcurno par Lisbonne, Gibraltar et Malte, raccordés à travers l’Égypte à une ligne de la mer Rouge passant par Aden, relièrent directement Londres et Bombay en 1870. Les nouvelles qui mettaient des semaines par bateau arrivaient désormais le jour même.",
    context:
      "La révolte indienne de 1857 avait montré combien la lenteur des nouvelles venues d’Inde pouvait être dangereuse, et un premier câble de la mer Rouge avait échoué en 1860. Les compagnies de John Pender, fusionnées en 1872 sous le nom d’Eastern Telegraph Company, devinrent le noyau du réseau impérial britannique plus tard appelé All Red Line.",
    whyHere:
      "Porthcurno est une anse sablonneuse abritée à la pointe sud-ouest de la Grande-Bretagne, à l’écart des mouillages encombrés des ports de la Manche. La route sautait ensuite d’une station britannique à l’autre, Gibraltar, Malte et Aden, qui servaient aussi de dépôts de charbon.",
    schematic: {
      steps: [
        "Les nouvelles de la révolte mettent des semaines",
        "Les câbles à la gutta-percha font leurs preuves en mer",
        "La route de la mer Rouge est reposée",
        "Londres et Bombay communiquent chaque jour",
      ],
    },
  },
  "ind-overland-telegraph": {
    title: "Le télégraphe transaustralien",
    place: "Alice Springs, Australie centrale",
    summary:
      "Un fil unique d’environ 3 200 kilomètres fut tendu à travers le continent, de Port Darwin à Adélaïde, et raccordé à un câble sous-marin venu de Java. L’Australie était reliée par télégraphe à Londres et au reste du monde.",
    context:
      "Les colonies dépendaient jusque-là de paquebots-poste qui mettaient des semaines à apporter les nouvelles d’Europe. Des stations relais jalonnaient la ligne, et la ville d’Alice Springs se développa plus tard à côté de l’une d’elles.",
    whyHere:
      "La ligne suivait l’itinéraire que John McDouall Stuart avait ouvert en 1862, de point d’eau en point d’eau, à travers les monts MacDonnell. Darwin fut choisie parce que la côte nord est la plus proche de Java et des câbles d’Asie.",
  },
  "ind-tomioka-silk-mill": {
    title: "La filature de soie de Tomioka",
    place: "Tomioka, Gunma, Japon",
    summary:
      "Le gouvernement de Meiji ouvrit une filature de soie modèle équipée de machines françaises et dirigée par l’ingénieur français Paul Brunat. Les jeunes femmes qui y furent formées diffusèrent le dévidage mécanique dans les filatures de tout le Japon.",
    context:
      "La soie grège était la première exportation du Japon, et les maladies du ver à soie en Europe en avaient accru la demande. De 1871 à 1873, la mission Iwakura étudia les usines d’Amérique et d’Europe, tandis que le nouveau gouvernement recherchait la puissance industrielle.",
    whyHere:
      "Gunma se trouvait au cœur de la région séricicole du Japon, avec mûriers et cocons à portée de main, l’eau de la rivière pour le dévidage et des terrains libres pour un vaste site. La soie produite gagnait le port ouvert de Yokohama pour l’exportation.",
  },
  "ind-trans-siberian": {
    title: "Le début des travaux du Transsibérien",
    place: "Vladivostok, Extrême-Orient russe",
    summary:
      "Le tsarévitch Nicolas inaugura les travaux à Vladivostok en 1891, lançant le plus long chemin de fer du monde. Les trains atteignirent le Pacifique par la Mandchourie dès 1903, et l’itinéraire entièrement russe longeant l’Amour fut achevé en 1916.",
    context:
      "Porté par Sergueï Witte, le chemin de fer devait peupler la Sibérie, ouvrir l’accès à ses céréales et à ses minerais et projeter la puissance russe en Asie orientale. Sa branche mandchoue contribua à provoquer la guerre russo-japonaise de 1904–1905.",
    whyHere:
      "La baie de la Corne d’Or, à Vladivostok, était le meilleur port de la Russie sur la mer du Japon. La ligne s’en tenait à la ceinture méridionale de steppe et de forêt de la Sibérie, où des colons pouvaient cultiver la terre, et devait contourner le lac Baïkal, d’abord par ferry, puis le long de ses falaises.",
  },
  "ind-marconi-transatlantic": {
    title: "Le signal radio transatlantique de Marconi",
    place: "Signal Hill, Saint-Jean, Terre-Neuve",
    summary:
      "Guglielmo Marconi affirma avoir entendu la lettre S en morse, émise depuis sa station de Poldhu, en Cornouailles, sur un récepteur relié à une antenne portée par un cerf-volant. L’affirmation fut contestée, mais elle montrait que la télégraphie sans fil pouvait franchir un océan sans câble.",
    context:
      "Les compagnies de câbles détenaient le monopole du trafic télégraphique de Terre-Neuve et contraignirent Marconi à poursuivre ses travaux en Nouvelle-Écosse. Un service transatlantique régulier de télégraphie sans fil commença en 1907, et la radio devint bientôt vitale en mer.",
    whyHere:
      "La géographie qui avait favorisé les câbles jouait encore : la Cornouailles et Terre-Neuve se font face de part et d’autre du tronçon le plus étroit de l’Atlantique Nord. Le sommet exposé de Signal Hill donnait de la hauteur à l’antenne au-dessus du port.",
  },
  "ind-ford-assembly-line": {
    title: "La chaîne de montage mobile de Ford",
    place: "Highland Park, Michigan",
    summary:
      "L’usine Ford de Highland Park introduisit des chaînes de montage mobiles pour la Ford T, ramenant le temps d’assemblage d’un châssis de plus de douze heures à environ une heure et demie. En janvier 1914, Ford instaura la journée de travail à cinq dollars.",
    context:
      "La production de masse combinait pièces interchangeables, machines-outils spécialisées et une chaîne qui apportait le travail à l’ouvrier. Les voitures bon marché et les méthodes qui les produisaient se répandirent dans le monde industriel au cours des décennies suivantes.",
    whyHere:
      "Detroit se trouvait sur la voie navigable des Grands Lacs, où les minéraliers apportaient le minerai de fer du Minnesota et où arrivait le charbon des Appalaches. La ville comptait déjà des carrossiers, des ateliers mécaniques et des fabricants de moteurs marins sur lesquels s’appuyer.",
    schematic: {
      steps: [
        "Pièces interchangeables standardisées",
        "La chaîne apporte le travail à l’ouvrier",
        "Le temps d’assemblage s’effondre",
        "Le prix de la Ford T baisse",
      ],
    },
  },
  "ind-panama-canal": {
    title: "L’ouverture du canal de Panama",
    place: "Tranchée de la Culebra, zone du canal de Panama",
    summary:
      "En août 1914, le SS Ancon effectua le premier transit officiel du canal, reliant l’Atlantique et le Pacifique par des écluses et un lac artificiel. L’ouverture coïncida avec le début de la Première Guerre mondiale en Europe.",
    context:
      "Une compagnie française dirigée par Ferdinand de Lesseps avait échoué dans les années 1880, vaincue par les maladies et les glissements de terrain. Les États-Unis soutinrent en 1903 la sécession du Panama vis-à-vis de la Colombie, prirent le contrôle d’une zone du canal et construisirent celui-ci sous la direction de George Washington Goethals.",
    whyHere:
      "Le Panama est la terre la plus étroite entre les deux océans. Un barrage sur le Chagres créa le lac Gatún, qui alimente les écluses, et la tranchée de la Culebra entailla le point bas de la ligne de partage des eaux.",
  },
};
