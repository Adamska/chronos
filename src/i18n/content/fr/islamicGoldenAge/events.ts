import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "iga-abbasid-revolution": {
    title: "Le triomphe de la révolution abbasside",
    place: "Grand Zab, nord de la Mésopotamie",
    summary:
      "En janvier 750, des armées levées au Khorassan mirent en déroute le dernier calife omeyyade, Marwan II, sur les bords du Grand Zab, mettant fin au pouvoir omeyyade exercé depuis Damas et portant la famille abbasside au pouvoir.",
    context:
      "La révolte, proclamée ouvertement à Merv en 747 sous les bannières noires d’Abu Muslim, s’appuyait sur les griefs des convertis persans et sur l’ascendance des Abbassides, issus d’al-Abbas, oncle du Prophète. La victoire déplaça le centre de gravité du califat de la Syrie vers l’Irak et l’Iran, bien plus près des traditions savantes persanes et indiennes.",
    whyHere:
      "Marwan marcha vers l’est depuis sa base de Harran pour affronter les forces khorassaniennes qui descendaient du plateau iranien, et les deux armées se rencontrèrent sur le Grand Zab, le plus important affluent de rive gauche du Tigre. Sa tentative de jeter un pont sur la rivière face à l’ennemi tourna à la déroute.",
    schematic: {
      steps: [
        "Le Khorassan se soulève",
        "Les Omeyyades écrasés sur le Zab",
        "Le pouvoir passe en Irak",
        "Les élites persanes rejoignent la cour",
      ],
    },
  },
  "iga-founding-of-baghdad": {
    title: "Al-Mansur fonde Bagdad",
    place: "Bagdad, sur le Tigre",
    summary:
      "Le calife al-Mansur traça sa nouvelle capitale, Madinat al-Salam, sous la forme d’une ville circulaire fortifiée sur la rive occidentale du Tigre, un jour choisi, dit-on, par les astrologues de la cour Nawbakht et Masha’allah.",
    context:
      "Les Abbassides voulaient une capitale éloignée des turbulentes villes de garnison de Koufa et de Bassora, et loin de la Syrie omeyyade. En quelques décennies, Bagdad compta parmi les plus grandes villes du monde ; ses marchés et sa cour attiraient marchands, médecins et savants venus d’Iran, d’Inde et de la frontière byzantine.",
    whyHere:
      "À Bagdad, le Tigre et l’Euphrate se rapprochent au plus près, et des canaux comme le Nahr Isa reliaient les deux fleuves : grain et marchandises de Syrie, de la Djézireh et du Golfe pouvaient tous arriver par voie d’eau. Le site commandait aussi la route du Khorassan, la grande artère qui franchissait le Zagros vers l’Iran et l’Asie centrale.",
  },
  "iga-baghdad-paper-mill": {
    title: "Un moulin à papier à Bagdad",
    place: "Bagdad",
    summary:
      "La tradition fait remonter le premier moulin à papier de Bagdad aux environs de 794, sous Haroun al-Rachid et ses vizirs barmécides ; le papier supplanta bientôt le papyrus et le parchemin dans la chancellerie califale.",
    context:
      "La fabrication du papier, invention chinoise, était établie à Samarcande dès le milieu du VIIIe siècle ; une tradition arabe plus tardive l’attribua aux prisonniers chinois capturés à la bataille de Talas en 751, récit que les historiens accueillent avec prudence. Un papier bon marché et durable soutint la bureaucratie abbasside, un florissant commerce de copistes et de libraires, et l’immense volume de traductions et de travaux savants qui suivit.",
    whyHere:
      "Bagdad réunissait les chiffons de lin, la filasse et l’eau des canaux nécessaires à la fabrication du papier, et le plus grand marché de l’écrit au monde : une chancellerie immense, des tribunaux et des cercles d’enseignement. Contrairement au papyrus, le papier pouvait être produit partout où l’on trouvait de l’eau et des fibres, ce qui affranchissait le cœur de l’empire de sa dépendance envers le Nil.",
    schematic: {
      steps: [
        "Le papier atteint Samarcande",
        "Un moulin est fondé à Bagdad",
        "La chancellerie adopte le papier",
        "Le commerce du livre prospère",
      ],
    },
  },
  "iga-al-khwarizmi": {
    title: "Al-Khwarizmi écrit sur l’algèbre",
    place: "Bagdad",
    summary:
      "Muhammad ibn Musa al-Khwarizmi rédigea l’Abrégé du calcul par la restauration et la comparaison, dont la résolution méthodique des équations donna son nom à l’algèbre, ainsi qu’un traité sur le calcul au moyen des chiffres indiens.",
    context:
      "Al-Khwarizmi travaillait sous le patronage d’al-Ma’mun et puisait aux tables astronomiques indiennes comme aux traditions grecque et babylonienne. Au XIIe siècle, les versions latines de son arithmétique firent connaître à l’Europe la numération décimale de position, et son nom survit dans le mot « algorithme ».",
    whyHere:
      "La cour de Bagdad rassemblait des mathématiciens venus du Khwarezm, d’Iran, d’Irak et de Syrie, et des ouvrages astronomiques indiens étaient parvenus dans la ville dans les années 770. Une capitale qui administrait l’impôt foncier, le droit successoral et le commerce au long cours suscitait une demande constante de calcul pratique.",
  },
  "iga-house-of-wisdom": {
    title: "La Maison de la sagesse",
    place: "Bagdad",
    summary:
      "Sous le calife al-Ma’mun (813–833), la bibliothèque palatiale connue sous le nom de Maison de la sagesse devint un foyer du mouvement de traduction, qui rendit en arabe des œuvres grecques, syriaques, persanes et sanskrites.",
    context:
      "Le mouvement de traduction, né sous al-Mansur, dura deux siècles, financé par les califes, les courtisans et de riches mécènes comme les frères Banu Musa. Aristote, Galien, Euclide et Ptolémée devinrent les fondements de la philosophie, de la médecine, de la géométrie et de l’astronomie arabes, même si les historiens débattent encore du degré d’institutionnalisation de la Maison de la sagesse.",
    whyHere:
      "Bagdad se trouvait entre les savants chrétiens syriacophones d’Irak et de la Djézireh, la tradition médicale persane de Gundishapur, à quelques jours de route au sud-est, et le savoir indien qui arrivait par le Sind et le Golfe. Les califes pouvaient aussi envoyer des émissaires au-delà de la frontière du Taurus pour acquérir des manuscrits grecs en terre byzantine.",
    schematic: {
      steps: [
        "Les califes financent la traduction",
        "Les textes grecs passent en arabe",
        "Les savants les prolongent",
        "La science arabe prend la tête",
      ],
    },
  },
  "iga-hunayn-ibn-ishaq": {
    title: "Hunayn ibn Ishaq traduit Galien",
    place: "Bagdad",
    summary:
      "Hunayn ibn Ishaq, médecin chrétien nestorien originaire d’al-Hira, dirigea un atelier qui traduisit en syriaque et en arabe la plupart des œuvres médicales de Galien, ainsi que des textes hippocratiques et philosophiques.",
    context:
      "Hunayn collationnait plusieurs manuscrits grecs avant de traduire, et dans une lettre célèbre il dressa la liste des œuvres de Galien que lui et son cercle avaient rendues. Médecin du calife al-Mutawakkil, il rédigea aussi son propre traité sur l’œil, qui fit autorité.",
    whyHere:
      "La communauté chrétienne de Hunayn à al-Hira, près de Koufa, était déjà bilingue en arabe et en syriaque, la langue-pont entre savoir grec et savoir arabe. Les riches mécènes de Bagdad, dont les Banu Musa, payaient généreusement des traductions exactes.",
  },
  "iga-siraf-china-route": {
    title: "Siraf et la route maritime de la Chine",
    place: "Siraf, golfe Persique",
    summary:
      "Au milieu du IXe siècle, des navires faisaient voile de Siraf à Canton, un voyage décrit dans les Relations de la Chine et de l’Inde, compilées en 851.",
    context:
      "L’économie abbasside était liée par la mer à l’Inde, à l’Asie du Sud-Est et à la Chine des Tang ; l’épave de Belitung, un navire cousu de type arabe découvert au large de l’Indonésie, transportait au IXe siècle des dizaines de milliers de céramiques chinoises. Les marchands musulmans vécurent nombreux à Canton jusqu’aux massacres perpétrés lors de la révolte de Huang Chao, en 878–879.",
    whyHere:
      "Les cargaisons de Bassora descendaient jusqu’à Siraf, un mouillage en eau profonde sur la rive iranienne, pour éviter les hauts-fonds du fond du Golfe. De là, les navires suivaient l’alternance des vents de mousson jusqu’à Kollam, en Inde, puis, par le détroit de Malacca, jusqu’à la mer de Chine méridionale.",
    schematic: {
      westLabel: "Golfe Persique",
      eastLabel: "Chine des Tang",
      eastbound: ["encens", "ivoire", "verrerie", "dattes"],
      westbound: ["soie", "porcelaine", "bols de Changsha", "camphre"],
    },
  },
  "iga-al-battani-raqqa": {
    title: "Al-Battani observe le ciel à Raqqa",
    place: "Raqqa, sur l’Euphrate",
    summary:
      "Pendant quatre décennies, al-Battani mena à Raqqa des observations qui affinèrent la durée de l’année solaire, l’obliquité de l’écliptique et la vitesse de précession des équinoxes.",
    context:
      "Son manuel astronomique, le Kitab al-Zij, corrigeait Ptolémée à l’aide d’observations nouvelles et employait les sinus plutôt que les cordes grecques. Traduit en latin par Platon de Tivoli au XIIe siècle, il fut cité à maintes reprises par Copernic.",
    whyHere:
      "Raqqa s’élève au confluent du Balikh et de l’Euphrate, sur la route de Harran, berceau de la famille d’al-Battani et centre de la communauté sabéenne, vénératrice des astres et dépositaire d’une longue tradition astronomique. Le ciel clair et sec de la steppe de Djézireh se prêtait à des années d’observation méthodique.",
  },
  "iga-al-razi": {
    title: "Al-Razi à la tête de l’hôpital",
    place: "Rayy, près de l’actuelle Téhéran",
    summary:
      "Abu Bakr al-Razi, qui dirigea des hôpitaux à Rayy et à Bagdad, compila l’immense recueil clinique al-Hawi et rédigea un traité pionnier distinguant la variole de la rougeole.",
    context:
      "Sceptique envers l’autorité, al-Razi écrivit des Doutes sur Galien, opposant ses propres observations cliniques aux affirmations du maître. Son manuel dédié au gouverneur al-Mansur ibn Ishaq, traduit à Tolède sous le titre de Liber ad Almansorem, devint un ouvrage de référence dans les écoles de médecine européennes.",
    whyHere:
      "Rayy s’étendait au pied méridional de l’Elbourz, sur la route du Khorassan, l’artère qui reliait Bagdad à Nichapour et à l’Asie centrale. Cette position en faisait l’une des grandes villes du plateau iranien, assez riche et fréquentée pour entretenir un hôpital d’enseignement.",
  },
  "iga-caliphate-of-cordoba": {
    title: "La proclamation du califat de Cordoue",
    place: "Cordoue, al-Andalus",
    summary:
      "Abd al-Rahman III se proclama calife en 929 ; sous son règne et celui de son fils al-Hakam II, Cordoue devint l’une des villes les plus grandes et les plus raffinées d’Europe.",
    context:
      "La dynastie omeyyade, refondée en Ibérie par Abd al-Rahman Ier après qu’il eut échappé à la purge abbasside de 750, rivalisait désormais avec Bagdad comme avec les Fatimides. Des envoyés byzantins offrirent au calife un manuscrit grec de l’herbier de Dioscoride, que Hasdaï ibn Shaprut contribua à faire passer en arabe, et al-Hakam II réunit une bibliothèque célèbre.",
    whyHere:
      "Cordoue s’étend à l’endroit où le pont romain portait la grande route au-dessus du Guadalquivir, entre la sierra Morena et la fertile Campiña. L’agriculture irriguée de la vallée, enrichie de cultures venues d’Orient, nourrissait une grande ville et une cour assez riche pour acheter des livres dans tout le monde islamique.",
  },
  "iga-fatimid-cairo": {
    title: "Les Fatimides fondent Le Caire et al-Azhar",
    place: "Le Caire, Égypte",
    summary:
      "Le général fatimide Jawhar conquit l’Égypte en 969 et fonda une nouvelle ville palatiale, al-Qahira, à côté de l’ancienne Fustat ; sa mosquée-cathédrale, al-Azhar, fut achevée en 972.",
    context:
      "Chiites ismaéliens apparus en Ifriqiya, les Fatimides étaient les rivaux des Abbassides ; Le Caire devint leur capitale en 973 et un second pôle du savoir islamique. Le calife al-Hakim y ajouta en 1005 la Maison de la science, bibliothèque publique et salle d’enseignement.",
    whyHere:
      "Le Caire occupe le goulet où la vallée du Nil s’ouvre sur le delta, au pied des collines du Moqattam, commandant le trafic entre la Haute et la Basse-Égypte. Les excédents de grain égyptiens finançaient la dynastie, et la position du pays entre la Méditerranée et la mer Rouge liait le commerce fatimide à la fois à l’Italie et à l’Inde.",
  },
};
