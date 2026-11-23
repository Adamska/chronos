import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "egypt-naqada": {
    title: "Les chefferies de Nagada dans la vallée du Nil",
    place: "Nagada et Abydos, Haute-Égypte",
    summary:
      "Vers 3200 av. J.-C., les villages d’agriculteurs de Haute-Égypte sont devenus des chefferies rivales, centrées sur Nagada, Hiérakonpolis et Abydos. Leurs élites sont enterrées avec des poteries fines, des vases de pierre et des objets importés, et des étiquettes en os d’une tombe royale d’Abydos portent quelques-uns des plus anciens hiéroglyphes connus.",
    context:
      "À mesure que le Sahara s’assèche, après 5000 av. J.-C., éleveurs et agriculteurs se pressent dans la vallée du Nil. La culture de Nagada gagne le Delta depuis le sud, avec un même style de poterie, de sépulture et de royauté, tandis que le commerce apporte le lapis-lazuli d’Afghanistan et des idées venues de Mésopotamie.",
    whyHere:
      "Chaque été, la crue du Nil déposait un limon noir sur une bande de terre large de quelques kilomètres, enserrée par des falaises désertiques. La nourriture abondait, mais les terres cultivables étaient étroites et faciles à revendiquer : les villes du fleuve s’enrichirent et rivalisèrent, et Nagada, l’antique Noubt, « la ville de l’or », tenait une route vers l’or du désert Oriental.",
  },
  "egypt-narmer": {
    title: "Narmer unifie les Deux Terres",
    place: "Hiérakonpolis (Nekhen), Haute-Égypte",
    summary:
      "Vers 3100 av. J.-C., un roi de Haute-Égypte nommé Narmer soumet le Delta. Une palette d’apparat découverte à Hiérakonpolis le montre coiffé de la couronne blanche du Sud sur une face, et de la couronne rouge du Nord sur l’autre.",
    context:
      "L’unification fut sans doute l’aboutissement d’une longue suite de conquêtes et d’alliances plutôt qu’une bataille unique. La tradition postérieure l’attribuait à un fondateur nommé Ménès, souvent identifié à Narmer. Les nouveaux rois gouvernent depuis Memphis et se font enterrer à Abydos, tandis que naissent ensemble l’écriture, l’impôt et l’idéologie royale.",
    whyHere:
      "Le Nil est une route unique : les bateaux descendent vers le nord au fil du courant et remontent vers le sud grâce au vent du nord, qui souffle presque toute l’année. Qui tenait le fleuve pouvait déplacer troupes et grain sur toute la vallée, et les déserts de part et d’autre laissaient peu de refuges aux rivaux.",
    schematic: {
      steps: [
        "Des chefferies rivales le long du Nil",
        "La Haute-Égypte absorbe le Delta",
        "Un roi porte deux couronnes",
        "Memphis garde la pointe du Delta",
      ],
    },
  },
  "egypt-djoser": {
    title: "La pyramide à degrés de Djéser",
    place: "Saqqarah, près de Memphis",
    summary:
      "Pour le roi Djéser, son haut dignitaire Imhotep empile six plateformes de pierre de taille décroissante en une tour à degrés d’environ 62 mètres. C’est le plus ancien grand édifice entièrement bâti en pierre taillée, au cœur d’une enceinte de chapelles destinées au jubilé éternel du roi.",
    context:
      "Les rois précédents reposaient sous des tombes plates en brique crue, les mastabas. Imhotep traduisit en calcaire des formes jusque-là faites de bois, de roseau et de brique, et les Égyptiens le vénérèrent plus tard comme un sage, puis comme un dieu guérisseur.",
    whyHere:
      "Saqqarah s’étend au bord du désert, juste au-dessus de la plaine inondable, à l’ouest de Memphis : assez haut pour rester au sec, assez près de la capitale, et tourné vers l’horizon occidental où l’on croyait que se couchaient le soleil et les morts. Le plateau étant lui-même calcaire, la pierre se taillait sur place.",
  },
  "egypt-giza": {
    title: "La grande pyramide de Khéops",
    place: "Plateau de Gizeh",
    summary:
      "Khéops, deuxième roi de la IVe dynastie, élève une pyramide d’environ 146 mètres faite de quelque 2,3 millions de blocs. Elle reste la plus haute construction humaine pendant près de quatre mille ans, et ses successeurs Khéphren et Mykérinos bâtissent les leurs à côté.",
    context:
      "La pyramide fut construite par des équipes organisées, nourries et logées, et non par des esclaves ; leur village a été fouillé au sud du plateau. Des papyrus retrouvés au port d’Ouadi el-Jarf, sur la mer Rouge, contiennent le journal de bord d’un inspecteur nommé Merer, dont l’équipe convoyait le calcaire blanc des carrières de Toura jusqu’à Gizeh.",
    whyHere:
      "Gizeh est une dalle de calcaire massive au bord du désert, assez solide pour porter un tel poids et visible depuis Memphis. Pendant la crue, l’eau venait presque au pied du plateau : canaux et port permettaient aux bateaux d’amener tout près du chantier le calcaire de Toura et le granite d’Assouan.",
  },
  "egypt-first-intermediate": {
    title: "L’Ancien Empire se disloque",
    place: "Moalla et les provinces du Sud",
    summary:
      "Après le très long règne de Pépi II, le pouvoir royal de Memphis s’efface et l’Égypte se morcelle entre gouverneurs de province. Des dynasties rivales, à Hérakléopolis au nord et à Thèbes au sud, s’affrontent pendant un siècle, jusqu’à ce que Montouhotep II de Thèbes réunifie le pays vers 2055 av. J.-C.",
    context:
      "Les inscriptions funéraires de gouverneurs comme Ânkhtifi de Moalla se vantent d’avoir nourri leur peuple pendant les années de famine. La littérature égyptienne a gardé de cette époque le souvenir d’un chaos, même si bien des provinces y gagnèrent leur propre art, leur richesse et leur assurance.",
    whyHere:
      "Les récoltes de l’Égypte dépendaient entièrement de la hauteur de la crue d’été. Une série de crues faibles vers 2200 av. J.-C., que de nombreux chercheurs rattachent à une sécheresse plus vaste au Proche-Orient, vida les greniers royaux, et la vallée longue et étroite permettait à chaque district de se débrouiller seul.",
    schematic: {
      steps: [
        "Des crues du Nil trop basses",
        "Récoltes et greniers à sec",
        "Les gouverneurs tiennent leurs provinces",
        "Thèbes réunifie l’Égypte",
      ],
    },
  },
  "egypt-semna": {
    title: "Les forteresses de la deuxième cataracte",
    place: "Semna, deuxième cataracte",
    summary:
      "Sésostris III repousse la frontière égyptienne jusqu’à Semna, au sud de la deuxième cataracte, et y dresse des stèles interdisant aux Nubiens de passer vers le nord, sauf pour commercer ou en mission officielle. Une chaîne de forteresses en brique crue, dont Bouhen, Mirgissa et Semna, garde les rapides.",
    context:
      "Après la réunification par Montouhotep II, les rois du Moyen Empire réorganisent le pays et se tournent vers le sud. Au-delà des cataractes s’étend Kerma, premier grand royaume de Koush, qui contrôle l’or, l’ivoire, l’ébène et le bétail que convoite l’Égypte.",
    whyHere:
      "À la deuxième cataracte, le Nil se faufile dans une longue ceinture de rapides de granite où il fallait haler ou décharger les bateaux. Ce goulet était l’endroit idéal pour contrôler qui et quoi circulait sur le fleuve, et à Semna la gorge était assez étroite pour être verrouillée par des forts sur les deux rives.",
    schematic: {
      westLabel: "Égypte",
      eastLabel: "Nubie",
      eastbound: ["céréales", "lin", "huiles", "faïence"],
      westbound: ["or", "ivoire", "ébène", "bétail"],
    },
  },
  "egypt-serabit": {
    title: "Un alphabet dans les mines de turquoise",
    place: "Sérabit el-Khadim, Sinaï",
    summary:
      "Dans les mines de turquoise de Sérabit el-Khadim, des ouvriers de langue sémitique gravent de courtes inscriptions avec quelques dizaines de signes empruntés aux hiéroglyphes, chacun notant un seul son. Cette écriture protosinaïtique est le plus ancien ancêtre connu des alphabets phénicien, grec, latin et arabe.",
    context:
      "Depuis l’Ancien Empire, des expéditions égyptiennes exploitaient la turquoise et le cuivre du sud du Sinaï, et elles avaient bâti à Sérabit un temple à Hathor, « dame de la turquoise ». Beaucoup d’ouvriers venaient de Canaan. La datation est discutée, mais la plupart des spécialistes placent ces inscriptions au Moyen Empire ou peu après.",
    whyHere:
      "Les montagnes du Sinaï recèlent le cuivre et la turquoise qui manquent à la vallée du Nil, et la péninsule est le pont terrestre entre l’Égypte et Canaan. Scribes égyptiens et mineurs cananéens y travaillaient côte à côte, et une poignée de signes phonétiques s’apprenait bien plus vite que des centaines de hiéroglyphes.",
  },
  "egypt-hyksos": {
    title: "Les Hyksôs règnent depuis Avaris",
    place: "Avaris (Tell el-Dab’a), Delta oriental",
    summary:
      "Tandis que le Moyen Empire s’affaiblit, des populations d’origine cananéenne installées dans le Delta oriental prennent le pouvoir et fondent la XVe dynastie à Avaris. Les Égyptiens appellent leurs rois heqaou khasout, « chefs des pays étrangers », nom que les auteurs grecs transforment en Hyksôs.",
    context:
      "Les fouilles de Tell el-Dab’a révèlent une grande ville aux maisons et aux tombes de style levantin, avec des sépultures d’ânes. Les Hyksôs dominent le nord de l’Égypte, perçoivent un tribut des princes locaux et s’allient à Kerma, en Nubie, tandis qu’une dynastie rivale tient Thèbes. Ils diffusent en Égypte le char attelé et l’arc composite.",
    whyHere:
      "Avaris se trouvait sur la branche pélusiaque du Nil, à la lisière orientale du Delta : la première terre fertile qu’atteignaient les voyageurs venus de Canaan par la route côtière. C’était un point d’arrivée naturel pour les migrants et les marchands du Levant, et son port s’ouvrait sur la Méditerranée.",
    schematic: {
      steps: [
        "Des Cananéens s’installent dans le Delta",
        "Le Moyen Empire se fragmente",
        "Les rois hyksôs règnent à Avaris",
        "Le char gagne les bords du Nil",
      ],
    },
  },
  "egypt-ahmose": {
    title: "Ahmôsis prend Avaris",
    place: "Avaris, Delta oriental",
    summary:
      "Poursuivant la guerre engagée par Séqenenrê Taâ et Kamosé, le roi thébain Ahmôsis s’empare d’Avaris, chasse les Hyksôs d’Égypte et assiège leur place forte de Sharouhen, au sud de Canaan. L’Égypte réunifiée entre dans le Nouvel Empire, son âge le plus puissant.",
    context:
      "La momie de Séqenenrê porte des blessures mortelles à la tête, sans doute reçues au combat. Les Thébains apprennent de leur ennemi et adoptent le char et de nouvelles armes de bronze ; le soldat Ahmès, fils d’Abana, raconte les sièges dans sa tombe d’Elkab. L’Égypte ne comptera plus sur ses seuls déserts pour se défendre.",
    whyHere:
      "Avaris était accessible par le fleuve depuis Thèbes : la guerre se mena donc autant avec des flottes sur le Nil qu’avec des armées à terre. Au-delà, la route du nord du Sinaï menait tout droit en Canaan, et c’est pourquoi les vainqueurs poussèrent jusqu’à Sharouhen pour fermer cette porte.",
  },
  "egypt-punt": {
    title: "L’expédition d’Hatchepsout au pays de Pount",
    place: "Pount, sur la côte sud de la mer Rouge",
    summary:
      "Vers la neuvième année de son règne, Hatchepsout envoie une flotte au pays de Pount par la mer Rouge. Elle en revient avec des arbres à myrrhe vivants, de l’encens, de l’ébène, de l’ivoire, de l’or, des babouins et des peaux de panthère, et le voyage est sculpté en détail sur son temple de Deir el-Bahari.",
    context:
      "L’Égypte commerçait avec Pount depuis au moins la Ve dynastie, mais les contacts s’étaient interrompus. Hatchepsout, d’abord régente pour Thoutmôsis III puis pharaon à part entière, se sert de l’expédition pour affirmer sa légitimité. Les reliefs montrent le chef de Pount, Parahou, son épouse Ati et des maisons sur pilotis.",
    whyHere:
      "Les arbres à encens poussent dans les collines arides du sud de la mer Rouge et de la Corne de l’Afrique, pas en Égypte. Les expéditions traversaient le désert Oriental jusqu’à la côte, descendaient vers le sud avec le vent du nord, régulier dans la moitié nord de la mer Rouge, et réglaient leur retour sur les vents saisonniers du sud.",
    schematic: {
      westLabel: "Égypte",
      eastLabel: "Pount",
      eastbound: ["perles", "haches", "poignards", "bijoux"],
      westbound: ["myrrhe", "encens", "ébène", "or", "babouins"],
    },
  },
};
