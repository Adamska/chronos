import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "cold-trinity-test": {
    title: "Trinity, la première explosion nucléaire",
    place: "Désert de la Jornada del Muerto, Nouveau-Mexique",
    summary:
      "Le 16 juillet 1945, le projet Manhattan fit exploser un engin au plutonium à implosion, hissé au sommet d’une tour d’acier dans le désert du Nouveau-Mexique. L’essai valida le modèle employé contre Nagasaki quelques semaines plus tard et ouvrit l’ère nucléaire.",
    context:
      "Les États-Unis détinrent brièvement un monopole nucléaire qui orienta leur diplomatie d’après-guerre envers l’Union soviétique. Le renseignement soviétique disposait déjà de sources au cœur du projet, et Staline accéléra son propre programme de bombe après Hiroshima.",
    whyHere:
      "La Jornada del Muerto est un bassin plat et presque dépourvu d’eau, au sein du champ de tir d’Alamogordo, à une longue route au sud du laboratoire de Los Alamos. Son vide promettait le secret et une zone tampon loin des villes, même si les retombées dérivèrent malgré tout sur des ranchs situés sous le vent.",
  },
  "cold-operation-paperclip": {
    title: "L’opération Paperclip",
    place: "De Nordhausen (Allemagne) à White Sands (Nouveau-Mexique)",
    summary:
      "Les États-Unis firent traverser l’Atlantique à plus de 1 600 scientifiques et ingénieurs allemands, emmenés par l’équipe de Wernher von Braun, conceptrice du V2. Les V2 capturés et leurs concepteurs lancèrent le programme de missiles américain à White Sands.",
    context:
      "Les deux vainqueurs se disputèrent la technologie allemande ; l’Union soviétique déporta en 1946 son propre contingent de spécialistes lors de l’opération Ossoaviakhim. Les ingénieurs de Peenemünde construisirent plus tard les fusées Redstone et Saturn à Huntsville, en Alabama.",
    whyHere:
      "L’usine de V2 se cachait dans des galeries creusées sous la colline du Kohnstein, près de Nordhausen, en territoire promis à la zone d’occupation soviétique. Les équipes américaines y prélevèrent de quoi assembler une centaine de fusées et les expédièrent avant de céder la Thuringe en juillet 1945.",
    schematic: {
      westLabel: "États-Unis",
      eastLabel: "Allemagne occupée",
      eastbound: ["Équipes d’interrogatoire", "Contrats de travail", "Habilitations de sécurité"],
      westbound: ["Pièces de V2", "Ingénieurs en fusées", "Archives techniques", "Équipements de soufflerie"],
    },
  },
  "cold-berlin-airlift": {
    title: "Le pont aérien de Berlin",
    place: "Aéroport de Tempelhof, Berlin-Ouest",
    summary:
      "Lorsque l’Union soviétique coupa en juin 1948 les accès routiers, ferroviaires et fluviaux à Berlin-Ouest, des avions américains et britanniques ravitaillèrent par les airs les deux millions d’habitants de la ville pendant près d’un an. Moscou leva le blocus en mai 1949.",
    context:
      "Déclenchée par l’introduction du nouveau Deutsche Mark dans les zones occidentales, la crise figea la division de l’Allemagne en deux États en 1949. Elle convainquit aussi l’Europe de l’Ouest qu’il lui fallait une garantie de sécurité américaine contraignante.",
    whyHere:
      "Berlin-Ouest se trouvait à quelque 160 kilomètres à l’intérieur de la zone soviétique, îlot dépourvu de toute garantie écrite d’accès terrestre. Seuls trois couloirs aériens de 20 milles de large, partant de Hambourg, de Hanovre et de Francfort, avaient été consignés par écrit, et les Alliés empruntèrent précisément ceux-là.",
    schematic: {
      steps: ["Nouveau Deutsche Mark", "Les Soviétiques coupent les voies terrestres", "Pont aérien par les couloirs", "Levée du blocus en 1949"],
    },
  },
  "cold-nato-founded": {
    title: "Le traité de l’Atlantique Nord",
    place: "Washington",
    summary:
      "Le 4 avril 1949, douze nations signèrent le traité de l’Atlantique Nord et s’engagèrent dans une défense collective. Pour la première fois, les États-Unis se liaient en temps de paix par une alliance en Europe.",
    context:
      "Le coup de Prague de 1948 et le blocus de Berlin rendirent la pression soviétique tangible dans les capitales occidentales. La Grèce et la Turquie adhérèrent en 1952, puis l’Allemagne de l’Ouest en 1955, ce qui suscita en riposte le pacte de Varsovie.",
    whyHere:
      "L’alliance s’organisa autour de l’Atlantique, conçu comme une mer intérieure. De petits membres fondateurs comme l’Islande, le Portugal et le Danemark comptaient en raison de l’Islande, des Açores et du Groenland, jalons insulaires pour les convois, les bombardiers et les patrouilles anti-sous-marines.",
  },
  "cold-first-soviet-test": {
    title: "La première bombe atomique soviétique",
    place: "Polygone d’essais de Semipalatinsk, RSS kazakhe",
    summary:
      "Le 29 août 1949, l’Union soviétique testa la RDS-1, une bombe au plutonium étroitement calquée sur le modèle américain de Trinity. Les vols américains de prélèvement atmosphérique en détectèrent les retombées en quelques jours.",
    context:
      "L’essai mit fin au monopole américain des années plus tôt que Washington ne l’escomptait et précipita la décision de construire la bombe à hydrogène. L’espionnage mené à Los Alamos avait considérablement raccourci le chemin des Soviétiques.",
    whyHere:
      "Le site s’étendait sur la steppe kazakhe, près de l’Irtych, à des milliers de kilomètres des frontières soviétiques faisant face à l’OTAN, et était desservi par le Turksib, la voie ferrée Turkestan-Sibérie. Les planificateurs tenaient la steppe pour vide, mais les villages voisins subirent les retombées de centaines d’essais jusqu’en 1989.",
  },
  "cold-korean-war": {
    title: "La guerre de Corée",
    place: "Péninsule coréenne",
    summary:
      "La Corée du Nord envahit le Sud en juin 1950, et une force des Nations unies menée par les États-Unis riposta. L’intervention chinoise déboucha sur une impasse, et l’armistice de 1953 laissa la ligne de front près du 38e parallèle.",
    context:
      "La Corée avait été partagée en 1945 le long d’un parallèle choisi par deux officiers américains comme limite d’occupation. La guerre mondialisa l’endiguement, fit s’envoler les dépenses militaires américaines et transforma le détroit de Taïwan en front de la guerre froide.",
    whyHere:
      "La péninsule forme un pont terrestre entre la Chine, la Russie et le Japon, et le Yalou marque l’endroit où les armées chinoises pouvaient passer depuis la Mandchourie. Le débarquement surprise d’Incheon tira parti d’un port en eau profonde, soumis à de fortes marées, tout proche des arrières du front.",
    schematic: {
      steps: ["Partage au 38e parallèle", "Invasion par le Nord", "Débarquement d’Incheon", "La Chine franchit le Yalou", "Armistice de 1953"],
    },
  },
  "cold-bandung-conference": {
    title: "La conférence de Bandung",
    place: "Bandung, Java, Indonésie",
    summary:
      "En avril 1955, les représentants de 29 pays d’Asie et d’Afrique se réunirent à Bandung pour s’opposer au colonialisme et affirmer leur indépendance à l’égard des deux blocs. La rencontre prépara le terrain du mouvement des non-alignés, fondé à Belgrade en 1961.",
    context:
      "La décolonisation faisait naître de nouveaux États plus vite qu’aucune des deux superpuissances ne pouvait les intégrer à ses alliances. Des dirigeants comme Nehru, Sukarno, Nasser et Zhou Enlai se servirent de Bandung pour faire entendre la voix du monde postcolonial.",
    whyHere:
      "L’Indonésie chevauche les routes maritimes entre l’océan Indien et le Pacifique, et venait d’arracher par les armes son indépendance aux Pays-Bas. Bandung, ville d’altitude au climat frais sur le plateau de Parahyangan, offrait des salles de réunion de l’époque coloniale, loin de la chaleur de la côte.",
  },
  "cold-dew-line": {
    title: "La ligne DEW, radar d’alerte avancée",
    place: "Arctique canadien, près de Cambridge Bay",
    summary:
      "Une chaîne de stations radar tendue à travers l’Arctique de l’Alaska et du Canada, à peu près le long du 69e parallèle, devint opérationnelle en 1957. Elle devait détecter les bombardiers soviétiques approchant de l’Amérique du Nord par le pôle.",
    context:
      "Les États-Unis et le Canada décidèrent sa construction en 1954 et l’achevèrent en moins de trois ans dans une toundra reculée. Prolongée jusqu’au Groenland, elle fut plus tard remplacée par le Système d’alerte du Nord.",
    whyHere:
      "Sur un globe, le chemin le plus court entre les aérodromes soviétiques et les villes américaines passe au-dessus de l’océan Arctique, et non de l’Atlantique. Une barrière de radars le long du littoral arctique donnait l’alerte très au nord des régions peuplées, tandis que la banquise et la brièveté des étés faisaient de sa construction un exploit logistique.",
  },
  "cold-sputnik": {
    title: "Spoutnik 1",
    place: "Tiouratam (Baïkonour), RSS kazakhe",
    summary:
      "Le 4 octobre 1957, une fusée R-7 plaça sur orbite le premier satellite artificiel, une sphère polie dont les bips radio pouvaient être captés dans le monde entier. L’ère spatiale s’ouvrait sur un triomphe soviétique.",
    context:
      "La R-7 avait été conçue comme missile balistique intercontinental : Spoutnik prouvait donc que Moscou pouvait atteindre le sol américain. Le choc donna naissance à la NASA, à de nouveaux financements pour l’enseignement scientifique et à l’accélération du programme de missiles américain.",
    whyHere:
      "Tiouratam s’étend sur une steppe plate, au bord du Syr-Daria et de la voie ferrée Moscou-Tachkent, loin des frontières et des regards étrangers. Sa latitude relativement méridionale pour le territoire soviétique et les terres vides qui s’étendent vers l’est, où retombent les étages usagés, en faisaient un site idéal ; le nom de Baïkonour fut emprunté à une lointaine ville minière.",
    schematic: {
      steps: ["La R-7, conçue pour porter des ogives", "Spoutnik atteint l’orbite", "La peur d’un retard en missiles", "Création de la NASA en 1958"],
    },
  },
  "cold-explorer-1": {
    title: "Explorer 1 et les ceintures de Van Allen",
    place: "Cap Canaveral, Floride",
    summary:
      "Le premier satellite américain fut lancé fin janvier 1958 par une fusée Jupiter-C, construite par l’équipe de von Braun pour l’armée de terre. Les instruments de James Van Allen embarqués à bord révélèrent des ceintures de rayonnement piégé qui encerclent la Terre.",
    context:
      "Après l’échec télévisé de la fusée Vanguard de la Marine, Explorer 1 restaura en partie le prestige américain. Quelques mois plus tard, le Congrès créa la NASA, qui absorba les anciens laboratoires de la NACA puis, en 1960, l’équipe de fusées de Huntsville.",
    whyHere:
      "Le cap Canaveral s’avance dans l’Atlantique vers 28,5 degrés de latitude nord : les fusées partent vers l’est au-dessus de l’océan et gagnent un surcroît de vitesse grâce à la rotation terrestre. Une chaîne de stations de poursuite installées aux Bahamas et sur d’autres îles de l’Atlantique suivait chaque vol le long de sa trajectoire.",
  },
};
