import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "sahel-djinguereber": {
    title: "La mosquée Djingareyber",
    place: "Tombouctou, boucle du Niger",
    summary:
      "De retour de La Mecque, Mansa Moussa fit bâtir une grande mosquée à Tombouctou, désormais sous la coupe du Mali. La tradition en attribue les plans à Abou Ishaq es-Sahéli, poète et architecte de Grenade revenu avec lui, qui aurait reçu 40\u00a0000 mithqals d’or.",
    context:
      "Moussa rapporta de son pèlerinage des savants et des livres, et Tombouctou commença à devenir un foyer du savoir islamique. Maintes fois reconstruite et agrandie, la mosquée est inscrite au patrimoine mondial de l’UNESCO avec les autres grandes mosquées de la ville, Sankoré et Sidi Yahia.",
    whyHere:
      "La pierre est rare au Sahel, mais la plaine inondable du Niger offre de l’argile à profusion. Les bâtisseurs montaient des murs de briques crues et d’enduit autour de charpentes de bois de palmier, dont les poutres saillantes servent d’échafaudage permanent pour le crépissage annuel après les pluies.",
  },
  "sahel-taghaza": {
    title: "Les mines de sel de Taghaza",
    place: "Taghaza, Sahara central",
    summary:
      "En plein désert, à Taghaza, des ouvriers taillaient dans le sol des plaques de sel gemme et les chargeaient sur des chameaux, deux plaques par bête. Ibn Battuta y passa en 1352 et trouva un village sinistre, sans un arbre, où même les maisons étaient bâties en sel.",
    context:
      "Au Sahel, le sel était vital pour supporter la chaleur, et la savane n’en produisait presque pas\u00a0: sur les marchés du Niger, il se vendait plusieurs fois son prix du désert. Les ouvriers de Taghaza dépendaient des caravanes pour la moindre nourriture, apportée de Sijilmassa ou du sud.",
    whyHere:
      "Taghaza repose sur le fond d’un ancien lac asséché, où d’épaisses couches de sel gemme affleurent sous la surface. Le site se trouvait à peu près à mi-chemin entre Sijilmassa et la boucle du Niger\u00a0: le sel pouvait être chargé sur la route même que suivaient déjà les caravanes de l’or.",
    schematic: {
      westLabel: "Boucle du Niger",
      eastLabel: "Taghaza",
      eastbound: ["or", "mil", "poisson séché"],
      westbound: ["sel gemme", "cuivre", "étoffes"],
    },
  },
  "sahel-ibn-battuta": {
    title: "Ibn Battuta à la cour du Mali",
    place: "Capitale du Mali, haut Niger",
    summary:
      "Le voyageur marocain Ibn Battuta passa environ huit mois au Mali en 1352 et 1353, à la cour de Mansa Souleyman, frère de Moussa. Il loua la sûreté des routes et la foule de la prière du vendredi, mais pesta contre le cadeau de bienvenue du roi\u00a0: du pain, du bœuf frit et du lait caillé.",
    context:
      "Après des décennies de voyages de la Chine à l’Espagne, Ibn Battuta traversa le Sahara avec une caravane de sel, par Taghaza et Oualata. Il rentra par Tombouctou et Gao, et son récit, mis par écrit à Fès, est le seul témoignage oculaire sur la cour du Mali à son apogée.",
    whyHere:
      "L’emplacement exact de la capitale du Mali reste inconnu\u00a0; Niani, en Guinée, en est le candidat traditionnel. Ibn Battuta l’atteignit en descendant vers le sud depuis Oualata, port du désert, puis en remontant le Niger vers le cœur mandingue, plus humide.",
  },
  "sahel-catalan-atlas": {
    title: "Mansa Moussa sur l’Atlas catalan",
    place: "Palma, Majorque",
    summary:
      "Vers 1375, le cartographe juif Abraham Cresques, de Majorque, dessina une carte du monde où Mansa Moussa trône au cœur de l’Afrique, couronné et brandissant une pépite d’or. Une légende le présente comme le roi le plus riche et le plus noble de tout le pays.",
    context:
      "L’atlas entra dans la bibliothèque du roi de France Charles V. Son portrait doré d’un roi ouest-africain devint l’une des images les plus célèbres de la cartographie médiévale et nourrit l’espoir d’atteindre l’or africain sans passer par les intermédiaires musulmans, un rêve qui poussa les Portugais le long des côtes au siècle suivant.",
    whyHere:
      "Majorque était un carrefour de la navigation méditerranéenne, où marchands catalans, italiens, juifs et musulmans commerçaient avec les ports d’Afrique du Nord comme Tlemcen et Bougie. Ses cartographes pouvaient y recueillir des nouvelles des routes caravanières qui aboutissaient précisément dans ces ports.",
  },
  "sahel-sonni-ali": {
    title: "Sonni Ali prend Tombouctou",
    place: "Tombouctou, boucle du Niger",
    summary:
      "Sonni Ali, souverain du royaume songhaï de Gao depuis 1464 environ, chassa les Touaregs de Tombouctou en 1468. Il passa presque tout son règne à guerroyer et fit d’un royaume fluvial le plus vaste empire du Sahel.",
    context:
      "Le Mali s’affaiblissait depuis des décennies, et des nomades touaregs avaient pris Tombouctou en 1433. Sonni Ali châtia les lettrés de la ville, qu’il soupçonnait d’avoir pris le parti des Touaregs\u00a0: les chroniqueurs musulmans de Tombouctou en firent un tyran cruel, tandis que la tradition orale songhaï se souvient d’un grand roi magicien.",
    whyHere:
      "Gao se trouve en aval sur le Niger\u00a0: la puissance songhaï reposait sur le fleuve lui-même. Sonni Ali associait une cavalerie rapide sur les rives à une flotte de pirogues de guerre sur l’eau, ce qui lui permettait de frapper n’importe où le long de la grande boucle.",
  },
  "sahel-djenne": {
    title: "Le siège de Djenné",
    place: "Djenné, delta intérieur du Niger",
    summary:
      "Sonni Ali assiégea Djenné, riche cité marchande du delta intérieur, jusqu’à sa reddition vers 1473. Le Tarikh al-Soudan affirme que le siège dura sept ans, sept mois et sept jours, un chiffre plus symbolique qu’exact.",
    context:
      "Djenné s’était développée près des buttes abandonnées de Djenné-Djeno et formait avec Tombouctou un couple de villes jumelles du commerce nigérien. Sa grande mosquée de briques crues fut bâtie une première fois au XIIIe siècle\u00a0; l’édifice actuel date de 1907.",
    whyHere:
      "Djenné occupe une île basse dans la plaine inondable du Bani, qui se change en lac plusieurs mois par an. L’eau la protégeait de la cavalerie, et c’est pourquoi Sonni Ali eut besoin de sa flotte pour l’isoler.",
  },
  "sahel-askia-songhai": {
    title: "L’Askia Mohammed bâtit l’État songhaï",
    place: "Gao, boucle du Niger",
    summary:
      "Après la mort de Sonni Ali, son général Mohammed Touré battit le fils du défunt à Anfao en 1493 et monta sur le trône sous le nom d’Askia Mohammed. Il organisa l’empire en provinces confiées à des gouverneurs nommés, entretint une armée permanente et une flotte fluviale, et plaça des inspecteurs des poids et mesures sur les marchés.",
    context:
      "Là où Sonni Ali s’était heurté aux lettrés musulmans, l’Askia Mohammed les courtisa, nomma des cadis et fit de l’islam le pilier de son pouvoir. Sous les Askia, le Songhaï devint le plus vaste empire qu’ait connu l’Afrique de l’Ouest, de la vallée du Sénégal aux confins des pays haoussa.",
    whyHere:
      "Gao se dresse là où le Niger repart vers le sud-est après sa grande boucle, reliée par des pistes caravanières à l’Aïr, à Ghadamès et à Tripoli. De là, les Askia pouvaient tenir tout le moyen Niger et taxer à la fois le trafic du fleuve et celui du désert.",
    schematic: {
      steps: [
        "Sonni Ali meurt en 1492",
        "Un général bat son fils à Anfao",
        "Provinces et armée permanente",
        "Lettrés et cadis soutenus",
        "Le Songhaï à son apogée",
      ],
    },
  },
  "sahel-askia-hajj": {
    title: "Le pèlerinage de l’Askia",
    place: "La Mecque, Hedjaz",
    summary:
      "En 1496, l’Askia Mohammed partit pour La Mecque avec une forte escorte et une fortune en or, dont une grande part fut distribuée en aumônes dans les villes saintes. Au Caire, le calife abbasside, simple figurant sous les Mamelouks, le nomma son lieutenant pour le Tekrour, nom arabe de l’Afrique de l’Ouest.",
    context:
      "Ce titre donnait à l’usurpateur une légitimité religieuse qui avait manqué à la lignée de Sonni Ali. L’Askia consulta aussi de grands savants de son temps, dont al-Suyuti au Caire et le juriste maghrébin al-Maghili, dont les réponses écrites à ses questions devinrent un guide pour les souverains musulmans du Sahel.",
    whyHere:
      "Le pèlerinage reliait la boucle du Niger au cœur du monde islamique. Comme Mansa Moussa avant lui, l’Askia traversa le Sahara jusqu’au Caire, puis rejoignit la grande caravane des pèlerins à travers le Sinaï et le long du Hedjaz jusqu’à La Mecque.",
  },
  "sahel-leo-africanus": {
    title: "Léon l’Africain décrit Tombouctou",
    place: "Tombouctou, boucle du Niger",
    summary:
      "Vers 1510, un jeune diplomate de Fès, al-Hassan al-Wazzan, visita Tombouctou avec son oncle. Capturé des années plus tard par des corsaires chrétiens et offert au pape Léon X, il écrivit une Description de l’Afrique qui rendit célèbres en Europe la richesse et le savoir de Tombouctou.",
    context:
      "Né à Grenade et élevé à Fès, il prit le nom de Léon lors de son baptême à Rome. Son livre, achevé en 1526 et imprimé en 1550, resta pendant plus de deux siècles la principale source européenne sur l’intérieur de l’Afrique de l’Ouest.",
    whyHere:
      "Tombouctou était le point de rencontre des commerces du désert et du fleuve, où lettrés, marchands et livres d’Afrique du Nord arrivaient avec les caravanes du sel. Un visiteur venu de Fès y voyait une ville islamique familière, transportée de l’autre côté du Sahara.",
  },
  "sahel-manuscripts": {
    title: "Les savants et les manuscrits de Tombouctou",
    place: "Quartier de Sankoré, Tombouctou",
    summary:
      "Au XVIe siècle, Tombouctou abritait des savants qui enseignaient le droit, la théologie, la grammaire, l’astronomie et la médecine autour de la mosquée de Sankoré et dans leurs propres demeures. Des familles comme celle d’Ahmed Baba constituèrent des bibliothèques de manuscrits, dont beaucoup ont survécu jusqu’à nous.",
    context:
      "Ahmed Baba, né en 1556, devint le plus célèbre de ces savants et écrivit des dizaines d’ouvrages. Des centaines de milliers de manuscrits sont conservés dans les bibliothèques familiales de Tombouctou\u00a0; en 2012 et 2013, quand des groupes armés occupèrent la ville, des bibliothécaires en mirent la plupart à l’abri à Bamako.",
    whyHere:
      "Papier, livres et maîtres traversaient le Sahara depuis Fès, Tlemcen et Le Caire avec les caravanes, et l’or du sud les payait. Sa position au bout de la route du désert fit de Tombouctou la bibliothèque naturelle du Sahel.",
  },
  "sahel-tondibi": {
    title: "La bataille de Tondibi",
    place: "Tondibi, près de Gao",
    summary:
      "Le 13 mars 1591, une armée marocaine de quelques milliers d’hommes, dont beaucoup armés d’arquebuses, défit l’armée bien plus nombreuse de l’Askia Ishaq II à Tondibi, au nord de Gao. Gao et Tombouctou furent occupées en quelques semaines, et l’empire songhaï se disloqua.",
    context:
      "Le sultan saadien Ahmed al-Mansour, enrichi par sa victoire sur les Portugais en 1578, convoitait l’or du Sahel et les mines de sel de Taghaza. Il envoya à travers le Sahara, à la fin de 1590, Judar Pacha, un converti né en Espagne\u00a0; nombre de ses soldats étaient des renégats et des Andalous rompus aux armes à feu européennes.",
    whyHere:
      "Tondibi se trouve sur le Niger, juste au nord de Gao, la capitale songhaï, là où l’armée de Judar atteignit le fleuve après la traversée du désert. Cavaliers et archers songhaï combattirent en terrain découvert, où les salves des fusils et les canons donnaient l’avantage aux envahisseurs.",
    schematic: {
      steps: [
        "Le Maroc convoite le sel et l’or",
        "Judar traverse le Sahara",
        "Les armes à feu l’emportent à Tondibi",
        "Gao et Tombouctou occupées",
        "Le Songhaï se disloque",
      ],
    },
  },
};
