import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "sahel-jenne-jeno": {
    title: "Djenné-Djeno, une ville sur la plaine inondable",
    place: "Djenné-Djeno, delta intérieur du Niger",
    summary:
      "Fondée vers 250 av. J.-C., Djenné-Djeno était devenue au Ier millénaire de notre ère une ville dense aux maisons de briques crues, entourée de villages satellites puis d’un rempart. Ses habitants cultivaient le riz africain, pêchaient, élevaient du bétail et travaillaient un fer venu de loin.",
    context:
      "Les fouilles menées à partir de 1977 par Roderick et Susan McIntosh ont ruiné l’idée ancienne selon laquelle les villes d’Afrique de l’Ouest seraient nées avec l’arrivée des marchands arabes. Cuivre, perles de pierre et fer parvenaient à Djenné-Djeno par le fleuve bien avant les caravanes de chameaux, grâce à des réseaux d’échange locaux.",
    whyHere:
      "Chaque année, le Niger et le Bani inondent une immense plaine et y laissent limon fertile, pâturages et poissons. La ville occupait une butte juste au-dessus des eaux, où cultivateurs, éleveurs et pêcheurs pouvaient commercer entre eux et avec les pirogues qui passaient sur le fleuve.",
  },
  "sahel-sijilmasa": {
    title: "Sijilmassa, port du désert",
    place: "Sijilmassa, oasis du Tafilalet",
    summary:
      "Des Berbères de la tribu des Miknassa fondèrent Sijilmassa en 757 dans une oasis, au bord septentrional du Sahara. La ville devint le grand terminus nord des caravanes qui traversaient le désert vers les pays de l’or, et l’atelier où une grande partie de cet or était frappée en monnaie.",
    context:
      "Le chameau s’était répandu en Afrique du Nord à la fin de l’époque romaine, et la conquête arabe du Maghreb relia les pistes du désert à un immense marché musulman. Vers 951, le voyageur Ibn Hawqal s’émerveilla d’une reconnaissance de dette de plusieurs dizaines de milliers de dinars due par un marchand d’Aoudaghost.",
    whyHere:
      "Sijilmassa s’élevait sur l’oued Ziz, dans le Tafilalet, dernière grande palmeraie avant deux mois de désert. Les caravanes s’y reposaient, abreuvaient et chargeaient leurs chameaux, et les cols de l’Atlas menaient de là vers Fès et la Méditerranée.",
    schematic: {
      westLabel: "Sahel",
      eastLabel: "Maghreb",
      eastbound: ["or", "ivoire", "captifs", "peaux"],
      westbound: ["sel", "cuivre", "chevaux", "étoffes", "livres"],
    },
  },
  "sahel-ghana-gold": {
    title: "Le Ghana, pays de l’or",
    place: "Ouagadou, entre le Sénégal et le Niger",
    summary:
      "Vers la fin du VIIIe siècle, l’astronome arabe al-Fazari décrivit le Ghana comme le pays de l’or\u00a0: c’est la première mention écrite du royaume. Ses fondateurs soninkés l’appelaient Ouagadou\u00a0; Ghana était en réalité le titre de son roi.",
    context:
      "Le royaume s’est sans doute formé au cours des premiers siècles de notre ère parmi les cultivateurs et marchands soninkés du Sahel, sans que l’on sache exactement quand. Il n’a rien à voir avec l’actuel Ghana, qui lui emprunta son nom en 1957 et se trouve des centaines de kilomètres plus au sud.",
    whyHere:
      "Le Ouagadou s’étendait dans le Sahel aride, juste au sud du désert, là où les chameaux pouvaient encore circuler et où les chevaux prospéraient. Ses rois se tenaient entre les caravanes de sel venues du nord et les champs aurifères du sud, et taxaient les uns comme les autres.",
  },
  "sahel-bambuk-gold": {
    title: "Les champs aurifères du Bambouk",
    place: "Bambouk, entre le Sénégal et la Falémé",
    summary:
      "À la saison sèche, des villageois mandingues creusaient des puits et lavaient les graviers des rivières dans les collines du Bambouk pour en tirer la poudre d’or. Des marchands la portaient vers le nord, jusqu’aux marchés du Ghana, et Ibn Hawqal écrivit au Xe siècle que le roi du Ghana était le plus riche de la terre grâce à son or.",
    context:
      "Le Bambouk, puis le Bouré sur le haut Niger, fournirent pendant des siècles une grande partie de l’or qui circulait dans le monde méditerranéen. Les auteurs arabes parlaient d’un commerce muet, où sel et or s’échangeaient sans un mot\u00a0: sans doute une légende simplifiant des marchés bien réels.",
    whyHere:
      "L’or arraché à des roches anciennes s’accumulait dans les graviers des rivières qui drainent les collines du Bambouk. Ces gisements se trouvaient au sud du Ghana, dans un pays plus humide où les chameaux dépérissaient\u00a0: l’or devait passer par des intermédiaires sahéliens pour rejoindre les caravanes.",
  },
  "sahel-almoravids": {
    title: "Les Almoravides s’emparent de la route de l’or",
    place: "Aoudaghost, sud du Sahara",
    summary:
      "Galvanisés par le prédicateur Abdallah ibn Yassine, des nomades sanhaja du Sahara occidental formèrent le mouvement almoravide. En 1054 et 1055, ils prirent les deux extrémités de la route de l’or\u00a0: Sijilmassa au nord, et au sud Aoudaghost, ville marchande soumise au Ghana.",
    context:
      "Tandis que Youssef ibn Tachfine partait vers le nord fonder Marrakech et conquérir le Maroc et al-Andalus, Abou Bakr ibn Omar menait l’aile méridionale. Des sources arabes plus tardives affirment que les Almoravides conquirent le Ghana en 1076, mais beaucoup d’historiens en doutent aujourd’hui\u00a0; le Ghana déclina de toute façon, à mesure que le commerce glissait vers l’est.",
    whyHere:
      "Aoudaghost se trouvait à la lisière sud du désert, dans une vallée pourvue de puits et de jardins, où les caravanes échangeaient le sel contre l’or. Qui tenait cette ville et Sijilmassa contrôlait toute la traversée occidentale du Sahara.",
    schematic: {
      steps: [
        "Un prédicateur réforme les nomades",
        "Les Almoravides prennent Sijilmassa",
        "Aoudaghost tombe au sud",
        "Le Ghana perd son commerce du nord",
        "Le pouvoir glisse vers le Niger",
      ],
    },
  },
  "sahel-koumbi-saleh": {
    title: "Al-Bakri décrit la capitale du Ghana",
    place: "Koumbi Saleh, Ouagadou",
    summary:
      "Écrivant à Cordoue en 1068, al-Bakri décrivit la capitale du Ghana comme deux villes distantes d’une dizaine de kilomètres\u00a0: une ville marchande musulmane dotée de douze mosquées, et la ville du roi avec son palais et ses bois sacrés. Le roi, Tounka Manin, gardait pour lui toutes les pépites d’or et taxait chaque charge de sel.",
    context:
      "Al-Bakri ne traversa jamais le Sahara\u00a0: il compila les récits de marchands et d’auteurs plus anciens. Le roi du Ghana n’était pas musulman, mais il employait des ministres et des interprètes musulmans. Les ruines de Koumbi Saleh, dans l’actuelle Mauritanie, sont généralement identifiées à la ville marchande.",
    whyHere:
      "La capitale s’étendait sur une plaine, à la lisière nord du Sahel, assez près du désert pour que les caravanes y parviennent, et pourtant à portée des terres agricoles et des routes de l’or du sud. Ce sont des puits, et non un fleuve, qui rendaient le site habitable.",
  },
  "sahel-timbuktu-founding": {
    title: "Tombouctou naît d’un campement touareg",
    place: "Tombouctou, boucle du Niger",
    summary:
      "Selon le Tarikh al-Soudan, chronique du XVIIe siècle, des pasteurs touaregs fondèrent Tombouctou vers 1100, comme campement saisonnier près du Niger. Des marchands s’y installèrent bientôt, et la ville devint le point de rencontre du commerce du désert et de celui du fleuve.",
    context:
      "La chronique affirme que le campement prit le nom de Bouctou, la vieille femme qui le gardait, mais cette explication est peut-être une étymologie populaire. À mesure que le Ghana s’effaçait, le commerce glissa vers la boucle du Niger, et Tombouctou finit par éclipser Oualata comme grand port du désert.",
    whyHere:
      "Tombouctou se trouve près du point le plus septentrional de la grande boucle du Niger, là où le fleuve s’approche le plus du Sahara. Les chameaux ne pouvaient descendre plus au sud, vers les terres humides infestées de mouches tsé-tsé, ni les pirogues remonter plus au nord\u00a0: c’est donc ici que les marchandises changeaient de mains.",
  },
  "sahel-sosso": {
    title: "Les Sosso s’emparent du Ouagadou",
    place: "Koumbi Saleh, Ouagadou",
    summary:
      "Selon les traditions orales, Soumaoro Kanté, roi des Sosso, prit vers 1203 l’ancienne capitale du Ghana, puis soumit les chefferies mandingues du haut Niger. La date est approximative et provient de reconstitutions tardives.",
    context:
      "Les griots se souviennent de Soumaoro comme d’un roi forgeron et d’un redoutable sorcier. Beaucoup de marchands musulmans auraient alors quitté le Ouagadou pour Oualata, plus au nord, et l’ancien empire du Ghana se défit en États plus petits.",
    whyHere:
      "Les Sosso venaient du Kaniaga, au nord-ouest de l’actuelle Bamako, entre l’ancien cœur du Ghana et le pays mandingue de l’or. De là, ils pouvaient frapper au nord la capitale déclinante et au sud les vallées du haut Niger.",
  },
  "sahel-kirina": {
    title: "Soundiata vainqueur à Kirina",
    place: "Kirina, haut Niger",
    summary:
      "Vers 1235, selon la chronologie de la tradition orale, une coalition de clans mandingues menée par Soundiata Keïta battit le roi sosso Soumaoro Kanté à Kirina. Cette victoire libéra les Mandingues et posa les fondations de l’empire du Mali.",
    context:
      "Le récit nous est parvenu par l’épopée de Soundiata, que chantent encore les griots, bardes héréditaires du monde mandingue. Soundiata y est un prince infirme qui apprend à marcher, part en exil et revient vaincre un roi sorcier dont la magie est brisée par une flèche armée d’un ergot de coq.",
    whyHere:
      "Kirina se trouvait dans la plaine du Niger, en aval du cœur mandingue, sur la route entre le pays sosso et les vallées aurifères de l’amont. Tenir ce tronçon du fleuve, c’était contrôler la route qui menait l’or du Bouré vers le Sahel.",
    schematic: {
      steps: [
        "Les Sosso écrasent les clans mandingues",
        "Soundiata revient d’exil",
        "La coalition l’emporte à Kirina",
        "Les clans s’unissent sous un mansa",
        "Naissance de l’empire du Mali",
      ],
    },
  },
  "sahel-kouroukan-fouga": {
    title: "L’assemblée de Kouroukan Fouga",
    place: "Kouroukan Fouga, près de Kangaba",
    summary:
      "La tradition mandingue rapporte qu’après Kirina, les clans victorieux se réunirent dans la plaine de Kouroukan Fouga pour proclamer Soundiata mansa et fixer les droits et devoirs de chaque clan. La date et le contenu de l’assemblée relèvent de la tradition orale et restent approximatifs.",
    context:
      "La charte orale attribuée à cette assemblée répartissait les rôles entre clans guerriers, marchands et artisans, et instituait les parentés à plaisanterie qui facilitent encore aujourd’hui les relations entre familles mandingues. En 2009, l’UNESCO a inscrit la Charte du Manden, proclamée à Kouroukan Fouga, au patrimoine culturel immatériel.",
    whyHere:
      "Kangaba se trouve au cœur du pays mandingue, sur le haut Niger, près des champs aurifères du Bouré. Elle resta le foyer sacré du clan Keïta, où le sanctuaire du Kamabolon est encore recouvert tous les sept ans au cours de cérémonies et de récitations.",
  },
  "sahel-mali-empire": {
    title: "L’empire du Mali prend forme",
    place: "Niani, haut Niger",
    summary:
      "Soundiata et ses successeurs bâtirent un empire qui s’étendait de la côte atlantique de la Sénégambie à la boucle du Niger. Ses souverains portaient le titre de mansa\u00a0; la tradition place la capitale de Soundiata à Niani, mais les historiens débattent encore de l’emplacement réel de la ville royale.",
    context:
      "Le Mali absorba ce qui restait du Ghana et devint bien plus vaste. Ses souverains ultérieurs se convertirent à l’islam et firent le pèlerinage de La Mecque, tandis que la plupart de leurs sujets gardaient des croyances plus anciennes. La richesse de l’empire reposait sur l’or du Bouré et du Bambouk et sur les taxes du commerce caravanier.",
    whyHere:
      "Le cœur mandingue se trouvait sur le haut Niger, près des champs aurifères du Bouré, avec de bonnes terres et assez de pluie pour le mil et le riz. De là, le fleuve offrait une route vers l’aval, jusqu’à Djenné et Tombouctou, où l’or rencontrait les caravanes du sel.",
  },
  "sahel-musa-cairo": {
    title: "Le pèlerinage de Mansa Moussa par Le Caire",
    place: "Le Caire, Égypte mamelouke",
    summary:
      "En 1324, Mansa Moussa, souverain du Mali, traversa le Sahara pour se rendre à La Mecque avec des milliers de compagnons et des chameaux chargés d’or. Au Caire, il rencontra le sultan mamelouk et distribua tant d’or que son cours en Égypte restait déprimé douze ans plus tard.",
    context:
      "Moussa était monté sur le trône vers 1312 et régnait sur un Mali à son apogée. L’érudit al-Omari, qui interrogea des notables du Caire sur cette visite, nota la chute du prix de l’or. À la fin du voyage, Moussa avait tant dépensé qu’il dut emprunter à des marchands cairotes pour rentrer chez lui.",
    whyHere:
      "Le Caire était le grand carrefour du monde islamique, où les caravanes de pèlerins venues d’Afrique du Nord et de l’Ouest se rassemblaient avant la longue marche vers La Mecque. Un marché opulent et un sultan puissant en firent la scène où la richesse du Mali devint célèbre.",
    schematic: {
      steps: [
        "Le Mali tient les champs aurifères",
        "Le pèlerinage traverse le Sahara",
        "L’or inonde le marché du Caire",
        "Le prix de l’or chute en Égypte",
        "La renommée du Mali gagne l’Europe",
      ],
    },
  },
};
