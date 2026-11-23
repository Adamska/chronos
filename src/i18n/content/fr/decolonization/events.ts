import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "decol-un-charter": {
    title: "La Charte des Nations unies et les empires de 1945",
    place: "San Francisco, États-Unis",
    summary:
      "Cinquante nations signèrent la Charte des Nations unies en juin 1945. Elle proclamait le droit des peuples à disposer d’eux-mêmes et obligeait les puissances coloniales à rendre compte des territoires qu’elles administraient, sans toutefois leur promettre l’indépendance.",
    context:
      "Le Royaume-Uni, la France, les Pays-Bas, la Belgique et le Portugal gouvernaient encore quelque 750 millions de personnes en Afrique, en Asie, aux Caraïbes et dans le Pacifique. Des centaines de milliers de soldats coloniaux avaient combattu pour les Alliés dans une guerre menée au nom de la liberté, et ils rentraient chez eux bien décidés à en avoir leur part.",
    whyHere:
      "La conférence se tint sur la côte pacifique des États-Unis, la puissance montante qui avait vaincu le Japon et n’éprouvait guère de sympathie pour les empires européens. Déplacer la diplomatie mondiale de Genève vers l’Amérique marquait le déclin d’une Europe ruinée par la guerre.",
  },
  "decol-setif": {
    title: "Sétif et Guelma",
    place: "Sétif, Algérie",
    summary:
      "Le 8 mai 1945, jour où l’Europe fêtait la victoire, la police tira sur des manifestants algériens qui brandissaient à Sétif un drapeau nationaliste. Des émeutes firent une centaine de morts européens, puis l’armée, des milices et l’aviation se vengèrent pendant des semaines sur les villages alentour.",
    context:
      "Le nombre d’Algériens tués reste discuté : les chiffres officiels français parlaient d’environ un millier, les estimations des historiens vont de plusieurs milliers à plusieurs dizaines de milliers, et l’Algérie avance 45 000 morts. Pour toute une génération de nationalistes, le massacre prouva qu’aucune réforme n’était possible dans le cadre de l’Algérie française.",
    whyHere:
      "Sétif se trouvait dans les hautes plaines céréalières du Constantinois, où les colons européens possédaient les meilleures terres et où les paysans algériens avaient été repoussés vers des pentes plus pauvres. Les pénuries et la famine du temps de guerre avaient aggravé ces tensions lorsque le cortège se mit en marche.",
  },
  "decol-indonesia": {
    title: "L’Indonésie proclame son indépendance",
    place: "Jakarta, Java",
    summary:
      "Deux jours après la capitulation du Japon, Soekarno et Mohammad Hatta proclamèrent l’indépendance de l’Indonésie. Les Néerlandais tentèrent de reconquérir l’archipel par deux grandes offensives militaires, mais la pression internationale les contraignit à transférer la souveraineté en décembre 1949.",
    context:
      "Le Japon avait occupé les Indes néerlandaises en 1942 et offert une tribune aux dirigeants nationalistes. Les quatre années de révolution coûtèrent la vie à environ 100 000 Indonésiens selon les estimations récentes, notamment lors de massacres comme ceux de Rawagede et du sud de Célèbes, et les États-Unis menacèrent de couper l’aide du plan Marshall aux Pays-Bas.",
    whyHere:
      "Batavia, rebaptisée Jakarta, était la capitale d’un chapelet de plus de 13 000 îles. Les Néerlandais pouvaient prendre les villes et les routes de Java, très peuplée, mais les guérilleros républicains se fondaient dans ses montagnes et ses rizières en terrasses.",
    schematic: {
      steps: [
        "Le Japon chasse les Néerlandais",
        "République proclamée à Jakarta",
        "Offensives militaires néerlandaises",
        "Pressions de l’ONU et des États-Unis",
        "Souveraineté transférée en 1949",
      ],
    },
  },
  "decol-indochina": {
    title: "L’indépendance du Viêt Nam et la guerre d’Indochine",
    place: "Place Ba Đình, Hanoï",
    summary:
      "Le 2 septembre 1945, Hô Chi Minh proclama l’indépendance de la République démocratique du Viêt Nam devant une foule immense à Hanoï. La France revint en force et, après le bombardement de Haïphong en novembre 1946, éclata une guerre qui dura huit ans.",
    context:
      "L’Indochine française avait été exploitée pour son caoutchouc, son riz et ses impôts, et une famine avait tué en 1944-1945 entre 400 000 et deux millions de personnes dans le Nord. Le Viêt-minh, front dirigé par les communistes, gagna un large soutien comme mouvement national ; après 1949, la Chine l’appuya tandis que les États-Unis finançaient l’essentiel de l’effort de guerre français.",
    whyHere:
      "Le delta du fleuve Rouge, autour de Hanoï, était le cœur très peuplé du nord du Viêt Nam, tandis que les collines calcaires et boisées du nord, le long de la frontière chinoise, offraient au Viêt-minh des bases sûres et une voie de ravitaillement.",
  },
  "decol-india-independence": {
    title: "L’Inde devient indépendante",
    place: "New Delhi, Inde",
    summary:
      "À minuit, dans la nuit du 14 au 15 août 1947, la domination britannique prit fin sur le sous-continent. Jawaharlal Nehru devint Premier ministre de l’Inde, tandis que Muhammad Ali Jinnah devenait gouverneur général du nouvel État du Pakistan.",
    context:
      "Des décennies de campagnes de masse menées par Gandhi et le Congrès national indien, la mutinerie de la marine en 1946 et l’épuisement du Royaume-Uni au sortir de la guerre rendaient le Raj intenable. Le dernier vice-roi, lord Mountbatten, avança la passation de pouvoir de juin 1948 à août 1947.",
    whyHere:
      "Les Britanniques avaient bâti New Delhi comme capitale impériale à côté d’anciennes cités mogholes, dans la plaine de la Yamuna qui commande les routes entre le Pendjab et la vallée du Gange. L’indépendance fut proclamée dans les bâtiments mêmes qui devaient incarner la puissance du Raj.",
  },
  "decol-partition": {
    title: "La partition des Indes",
    place: "Pendjab, entre Lahore et Amritsar",
    summary:
      "Le sous-continent fut divisé entre une Inde à majorité hindoue et un Pakistan à majorité musulmane, lui-même formé de deux morceaux distants de 1 600 kilomètres. Entre 12 et 20 millions de personnes fuirent de part et d’autre des nouvelles frontières, et les violences intercommunautaires firent entre plusieurs centaines de milliers et deux millions de morts.",
    context:
      "La Ligue musulmane de Jinnah réclamait une patrie distincte, le Congrès voulait une Inde unie, et le Royaume-Uni, pressé de partir, accepta la division. Le juriste britannique Cyril Radcliffe, qui n’avait jamais mis les pieds en Inde, traça les lignes en cinq semaines, et elles ne furent publiées que deux jours après l’indépendance.",
    whyHere:
      "Le Pendjab et le Bengale étaient les deux provinces où musulmans, hindous et sikhs vivaient entremêlés : la frontière les coupa en deux. Au Pendjab, la ligne passa entre Lahore et Amritsar, distantes d’à peine 50 kilomètres, laissant des communautés entières du mauvais côté.",
    schematic: {
      steps: [
        "Le Royaume-Uni épuisé par la guerre",
        "Congrès et Ligue dans l’impasse",
        "Mountbatten avance la date",
        "Ligne Radcliffe tracée en semaines",
        "Des millions fuient à travers le Pendjab",
      ],
    },
  },
  "decol-burma-ceylon": {
    title: "La Birmanie et Ceylan prennent leur route",
    place: "Rangoun, Birmanie",
    summary:
      "La Birmanie devint une république indépendante le 4 janvier 1948 et choisit de quitter le Commonwealth. Un mois plus tard, Ceylan, l’actuel Sri Lanka, accéda pacifiquement à l’indépendance comme dominion resté proche du Royaume-Uni.",
    context:
      "Le dirigeant nationaliste birman Aung San avait négocié l’indépendance, mais il fut assassiné avec plusieurs de ses ministres en juillet 1947. La Birmanie affronta vite des insurrections communistes et des minorités ethniques, tandis qu’à Ceylan une transition d’abord paisible priva dès 1948 de citoyenneté les travailleurs tamouls des plantations, d’origine indienne.",
    whyHere:
      "Rangoun se trouve à l’embouchure de l’Irrawaddy, le fleuve qui portait vers la mer le riz, le teck et le pétrole birmans et avait fait du pays l’un des grands exportateurs de l’Empire. Le port de Colombo, à Ceylan, était une escale navale stratégique sur la route de Suez à Singapour.",
  },
  "decol-kenya": {
    title: "Les Mau Mau et l’état d’urgence au Kenya",
    place: "Hautes terres centrales, Kenya",
    summary:
      "Des combattants kikuyu de l’Armée de la terre et de la liberté prirent le maquis dans les forêts du mont Kenya et des Aberdare contre le pouvoir des colons. Les Britanniques décrétèrent l’état d’urgence, internèrent des dizaines de milliers de Kényans dans des camps où la torture était courante, et pendirent plus d’un millier de personnes.",
    context:
      "Plus de 11 000 insurgés furent tués selon les chiffres britanniques, contre 32 colons européens, et des Kikuyu loyalistes périrent aussi, car la révolte fut également une guerre civile. Le Kenya devint indépendant en 1963 sous Jomo Kenyatta et, en 2013, le Royaume-Uni indemnisa plus de 5 000 victimes survivantes des camps.",
    whyHere:
      "Les hautes terres fraîches et fertiles autour du mont Kenya avaient été réservées aux fermiers blancs, les « White Highlands », tandis que les familles kikuyu s’entassaient dans des réserves ou travaillaient comme métayers. Les épaisses forêts de montagne offraient aux insurgés un abri que les troupes britanniques peinaient à percer.",
  },
  "decol-dien-bien-phu": {
    title: "La bataille de Diên Biên Phu",
    place: "Diên Biên Phu, nord-ouest du Viêt Nam",
    summary:
      "De mars à mai 1954, le Viêt-minh assiégea un camp retranché français dans une vallée isolée et le contraignit à capituler au bout de 56 jours. On y vit largement la première défaite d’une armée coloniale européenne dans une bataille rangée face à un mouvement anticolonial.",
    context:
      "Le lendemain de la chute, la conférence de Genève aborda l’Indochine et décida en juillet de couper le Viêt Nam en deux au 17e parallèle, en attendant des élections qui n’eurent jamais lieu. La France quitta l’Indochine, et les États-Unis la remplacèrent bientôt comme principale puissance étrangère au Sud.",
    whyHere:
      "Les Français avaient choisi une cuvette proche de la frontière laotienne pour barrer au Viêt-minh la route du Laos, persuadés qu’aucune artillerie ne pourrait franchir les montagnes de jungle environnantes. Des dizaines de milliers de porteurs et de bicyclettes leur donnèrent tort, et les canons de Giap tirèrent depuis les hauteurs.",
    schematic: {
      steps: [
        "Un camp français dans une cuvette",
        "Des porteurs hissent les canons",
        "L’artillerie ferme la piste d’aviation",
        "La garnison capitule le 7 mai",
        "Genève coupe le Viêt Nam en deux",
      ],
    },
  },
  "decol-algerian-war": {
    title: "La guerre d’Algérie",
    place: "Massif des Aurès, Algérie",
    summary:
      "Le 1er novembre 1954, le tout nouveau Front de libération nationale (FLN) lança des attaques coordonnées à travers l’Algérie. La France, qui considérait l’Algérie comme un ensemble de départements français et non comme une colonie, y envoya quelque 400 000 soldats, et le conflit devint la plus sanglante de ses guerres de décolonisation.",
    context:
      "Environ un million d’Européens vivaient parmi neuf millions d’Algériens musulmans privés de l’égalité des droits. L’armée pratiqua la torture de façon systématique pendant la bataille d’Alger en 1957 et regroupa quelque deux millions de villageois dans des camps, tandis que le FLN tuait aussi des civils et des rivaux ; la crise emporta la IVe République et ramena de Gaulle au pouvoir en 1958.",
    whyHere:
      "Les Aurès, massif escarpé de villages berbères chaouis loin des villes côtières, échappaient depuis longtemps au contrôle de l’État. Leurs gorges et leurs forêts, à portée de la frontière tunisienne, formaient un berceau idéal pour la guérilla.",
  },
  "decol-bandung": {
    title: "La conférence de Bandung",
    place: "Bandung, Java",
    summary:
      "En avril 1955, les délégués de 29 pays d’Asie et d’Afrique, représentant plus de la moitié de l’humanité, se réunirent à Bandung. Ils condamnèrent le colonialisme sous toutes ses formes et appelèrent à la coopération entre nations nouvellement libres, en dehors des blocs rivaux de la guerre froide.",
    context:
      "La rencontre avait été convoquée par l’Indonésie, l’Inde, le Pakistan, la Birmanie et Ceylan. Nehru, Zhou Enlai et Nasser en furent les vedettes, et des nationalistes d’une Afrique du Nord encore colonisée vinrent plaider leur cause ; l’esprit de Bandung déboucha en 1961 sur le mouvement des non-alignés.",
    whyHere:
      "Bandung, ville fraîche des hauteurs de Java occidental, était l’endroit où Soekarno avait fait ses études et commencé sa vie politique sous la domination néerlandaise. Réunir la conférence dans une ancienne colonie tout juste libérée, et non en Europe ou en Amérique, était déjà un message.",
  },
  "decol-suez": {
    title: "La crise de Suez",
    place: "Port-Saïd, Égypte",
    summary:
      "En juillet 1956, Gamal Abdel Nasser nationalisa la Compagnie du canal de Suez. Israël, le Royaume-Uni et la France convinrent secrètement d’attaquer l’Égypte fin octobre, mais les pressions américaines et soviétiques les forcèrent à se retirer en quelques semaines.",
    context:
      "Nasser voulait les revenus du canal pour construire le haut barrage d’Assouan, après le retrait du prêt promis par les États-Unis et le Royaume-Uni. L’humiliation montra que Londres et Paris ne pouvaient plus agir en puissances impériales contre la volonté de Washington, et fit de Nasser un héros dans le monde arabe et en Afrique.",
    whyHere:
      "Le canal raccourcissait de milliers de kilomètres la route maritime de l’Europe à l’Asie et acheminait l’essentiel du pétrole de l’Europe occidentale depuis le golfe Persique. C’est à Port-Saïd, à son débouché sur la Méditerranée, que débarquèrent les parachutistes et les commandos franco-britanniques.",
    schematic: {
      westLabel: "Europe",
      eastLabel: "Golfe et Asie",
      eastbound: ["produits manufacturés", "troupes", "navires pour l’Inde"],
      westbound: ["pétrole du Golfe", "caoutchouc", "thé", "coton"],
    },
  },
};
