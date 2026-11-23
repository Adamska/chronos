import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "ottoman-osman-beylik": {
    title: "Le beylicat frontalier d’Osman",
    place: "Söğüt, Bithynie",
    summary:
      "Vers 1299, Osman, chef d’une petite troupe turkmène installée à Söğüt, se mit à razzier et à enlever les forteresses byzantines de Bithynie. En 1302, il battit une armée byzantine à Baphée, près de Nicomédie, et des guerriers de toute l’Anatolie accoururent sous sa bannière.",
    context:
      "Le sultanat seldjoukide de Roum s’était effondré sous la pression mongole, laissant l’Anatolie morcelée en une douzaine de principautés turkmènes, les beylicats. Celui d’Osman était l’un des plus petits, mais lui seul touchait l’Empire byzantin déclinant, qui offrait butin, terres et prestige de la guerre sainte.",
    whyHere:
      "Söğüt se trouvait au rebord du plateau anatolien, juste au-dessus des vallées verdoyantes qui descendent vers la mer de Marmara. De là, des cavaliers pouvaient frapper les villes byzantines des plaines, riches et mal défendues, et la route de Constantinople n’était qu’à quelques jours de marche.",
  },
  "ottoman-bursa": {
    title: "Bursa, première capitale",
    place: "Bursa, Bithynie",
    summary:
      "Après un blocus de plusieurs années, la ville byzantine de Prousa se rendit en 1326 à Orhan, fils d’Osman. Rebaptisée Bursa, elle devint la première véritable capitale ottomane, et Osman fut inhumé dans sa citadelle. Nicée tomba en 1331, Nicomédie en 1337.",
    context:
      "Orhan fit d’une bande de cavaliers un État\u00a0: il frappa monnaie, bâtit mosquées, bains et caravansérails, et fonda des écoles. Bursa devint un grand marché où les caravanes de soie persane rencontraient les marchands italiens, et elle resta un sanctuaire dynastique même après le départ de la cour.",
    whyHere:
      "Bursa s’étage sur les pentes de l’Olympe de Bithynie, l’actuel Uludağ, riche en sources, au-dessus d’une plaine fertile. Ses murailles étaient trop solides pour être prises d’assaut, mais les Ottomans tenaient les campagnes, coupèrent son ravitaillement et attendirent.",
  },
  "ottoman-gallipoli": {
    title: "Un pied en Europe",
    place: "Gallipoli, Thrace",
    summary:
      "En mars 1354, un séisme renversa les murailles de Gallipoli, sur la rive européenne des Dardanelles. Süleyman Pacha, fils d’Orhan, s’y installa, repeupla la ville de Turcs venus d’Anatolie et refusa d’en partir\u00a0: les Ottomans tenaient leur première base permanente en Europe.",
    context:
      "Les Ottomans avaient d’abord traversé comme alliés rémunérés de Jean VI Cantacuzène, dans une guerre civile byzantine. Byzance était ravagée par la peste et les querelles, la Serbie et la Bulgarie divisées, et les Balkans s’ouvraient devant les nouveaux venus.",
    whyHere:
      "Gallipoli garde le passage le plus étroit des Dardanelles, le détroit qui relie l’Égée à la mer de Marmara. Qui la tenait contrôlait la traversée entre l’Asie et l’Europe, et les plaines de Thrace commençaient juste derrière.",
    schematic: {
      steps: [
        "Guerre civile byzantine",
        "Ottomans engagés comme alliés",
        "Un séisme abat les murailles",
        "Des colons turcs s’installent",
        "La Thrace s’ouvre à la conquête",
      ],
    },
  },
  "ottoman-edirne": {
    title: "Andrinople, une capitale en Europe",
    place: "Edirne (Andrinople), Thrace",
    summary:
      "Murad Ier prit la ville byzantine d’Andrinople dans les années 1360, en 1361 selon la tradition, plus probablement vers 1369, et la rebaptisa Edirne. Elle supplanta peu à peu Bursa comme résidence principale des sultans, signe que le centre de gravité de l’empire était passé en Europe.",
    context:
      "Murad s’enfonça loin en Thrace et en Bulgarie et, en 1371, écrasa une armée serbe sur la Maritsa. Byzance, la Bulgarie et les seigneurs serbes devinrent tributaires, et l’on commença à prélever des garçons dans les familles chrétiennes soumises pour la nouvelle infanterie permanente du sultan, les janissaires.",
    whyHere:
      "Edirne se dresse au confluent de la Toundja et de l’Arda avec la Maritsa, au carrefour des routes de Constantinople vers Sofia, Belgrade et le Danube. Une armée rassemblée ici pouvait atteindre le cœur des Balkans en quelques semaines.",
  },
  "ottoman-kosovo": {
    title: "La bataille de Kosovo",
    place: "Champ de Kosovo, Serbie",
    summary:
      "Le 15 juin 1389, Murad Ier affronta une coalition menée par le prince serbe Lazar sur le Champ des Merles. Les deux souverains périrent\u00a0: Murad fut poignardé, selon la tradition serbe par le chevalier Miloš Obilić, et Lazar fut exécuté. Bayezid, fils de Murad, prit le commandement et l’emporta.",
    context:
      "La bataille fut sanglante et peut-être indécise sur le moment, mais la Serbie, saignée, accepta bientôt la suzeraineté ottomane. Dans la mémoire serbe, Kosovo devint une défaite sacrée, chantée pendant des siècles dans les poèmes épiques.",
    whyHere:
      "Le champ de Kosovo est un haut bassin où convergent les routes des vallées de la Morava et du Vardar, porte naturelle entre les Balkans centraux et l’arrière-pays adriatique. Un envahisseur venu du sud-est devait le traverser pour atteindre le cœur de la Serbie.",
  },
  "ottoman-ankara": {
    title: "Tamerlan écrase Bayezid à Ankara",
    place: "Plaine de Çubuk, près d’Ankara",
    summary:
      "Le 28 juillet 1402, le conquérant d’Asie centrale Tamerlan mit en déroute le sultan Bayezid Ier près d’Ankara. Les cavaliers tatars de Bayezid et de nombreux contingents anatoliens changèrent de camp, ses fils s’enfuirent et le sultan fut fait prisonnier. Il mourut en captivité l’année suivante.",
    context:
      "Bayezid, surnommé la Foudre, avait écrasé une croisade à Nicopolis en 1396, avalé les beylicats turkmènes d’Anatolie et bloquait Constantinople. Les beys dépossédés se réfugièrent auprès de Tamerlan, qui leur rendit leurs terres après la bataille et faillit démanteler l’État ottoman.",
    whyHere:
      "Ankara commande le plateau central anatolien, où les routes d’Iran et de Syrie rejoignent celles de la Marmara. Tamerlan s’empara d’abord des puits de la plaine de Çubuk\u00a0: l’armée de Bayezid combattit épuisée et assoiffée, dans la chaleur de l’été.",
    schematic: {
      steps: [
        "Bayezid avale les beylicats",
        "Les beys appellent Tamerlan",
        "Les vassaux désertent à Ankara",
        "Le sultan est capturé",
        "Onze ans de guerre civile",
      ],
    },
  },
  "ottoman-interregnum": {
    title: "L’interrègne",
    place: "Çamurlu, près de Samokov",
    summary:
      "Après Ankara, quatre fils de Bayezid se disputèrent l’héritage pendant dix ans, chacun tenant un morceau du domaine depuis Bursa, Amasya ou Edirne. En juillet 1413, Mehmed vainquit son frère Musa à Çamurlu et réunifia l’empire sous le nom de Mehmed Ier.",
    context:
      "Que l’État ait survécu est remarquable. Seigneurs de la frontière, janissaires et cavaliers pourvus de fiefs avaient tous intérêt au maintien d’une dynastie ottomane unique, et Byzance, la Serbie ou Venise soutinrent chacune un prince rival plutôt que de chercher à tout détruire.",
    whyHere:
      "L’empire chevauchait les détroits, si bien que les princes pouvaient s’appuyer sur l’un ou l’autre continent\u00a0: l’Anatolie et la Roumélie, les provinces balkaniques, devinrent des bastions rivaux. La bataille décisive eut lieu dans les Balkans, car les provinces européennes, épargnées par Tamerlan, détenaient les troupes décisives.",
  },
  "ottoman-constantinople": {
    title: "La prise de Constantinople",
    place: "Murailles théodosiennes, Constantinople",
    summary:
      "À partir du 6 avril 1453, Mehmed II, âgé de 21 ans, assiégea Constantinople avec une armée immense et des canons de bronze géants. Une chaîne barrait la Corne d’Or\u00a0: le 22 avril, il fit traîner des dizaines de navires par voie de terre derrière Galata jusque dans le port. Le 29 mai, ses troupes emportèrent les murailles et le dernier empereur, Constantin XI, mourut en combattant.",
    context:
      "La capitale millénaire de Byzance ne comptait plus que quelques villages entre ses murs et peut-être 50\u00a0000 habitants. Un an plus tôt, Mehmed avait bâti la forteresse de Rumeli Hisarı pour couper le Bosphore, et seuls de petits contingents, comme les Génois de Giovanni Giustiniani, vinrent au secours de la ville.",
    whyHere:
      "La ville occupait une péninsule triangulaire protégée par la mer sur deux côtés et par la triple muraille théodosienne sur le troisième. La Corne d’Or était son point faible et le Bosphore sa ligne de vie vers la mer Noire\u00a0: Mehmed attaqua les deux.",
    schematic: {
      steps: [
        "Rumeli Hisarı ferme le Bosphore",
        "Les canons battent les murailles",
        "Navires hissés dans la Corne d’Or",
        "Assaut final le 29 mai",
        "Istanbul devient capitale",
      ],
    },
  },
  "ottoman-hagia-sophia": {
    title: "Sainte-Sophie devient mosquée",
    place: "Sainte-Sophie, Istanbul",
    summary:
      "Quelques jours après la conquête, Mehmed II assista à la prière du vendredi à Sainte-Sophie, la grande église bâtie par Justinien au VIe siècle, devenue la principale mosquée de la ville. Un minaret y fut bientôt ajouté, et les mosaïques chrétiennes furent peu à peu recouvertes plutôt que détruites.",
    context:
      "Mehmed se voyait héritier des empereurs romains autant que sultan musulman. Il repeupla la ville de musulmans, de Grecs, d’Arméniens et de Juifs, reconnut le patriarche orthodoxe comme chef de sa communauté et fit d’Istanbul la capitale de son empire.",
    whyHere:
      "Sainte-Sophie couronne la pointe de la vieille péninsule, au-dessus de la rencontre du Bosphore, de la Corne d’Or et de la mer de Marmara. Sa coupole dominait toutes les approches par la mer\u00a0: la convertir annonçait à toute la ville le changement de maîtres.",
  },
  "ottoman-topkapi": {
    title: "Topkapı et la nouvelle Istanbul",
    place: "Palais de Topkapı, Istanbul",
    summary:
      "En 1459, Mehmed II ordonna la construction d’un nouveau palais sur l’ancienne acropole de Byzance, achevé dans les années suivantes. Topkapı fut le siège du gouvernement pendant près de quatre siècles, avec ses cours pour le conseil, le trésor, l’école du palais et, plus tard, le harem.",
    context:
      "Autour, Mehmed fit d’une ville en ruine une capitale vivante\u00a0: un bazar couvert, des mosquées avec écoles et cuisines populaires, de nouveaux quartiers pour les colons. Istanbul devint l’une des plus grandes villes d’Europe et du Moyen-Orient.",
    whyHere:
      "La pointe du Sérail est l’extrémité la plus haute et la plus défendable de la péninsule, rafraîchie par les vents marins et dominant l’entrée du Bosphore. Depuis ses kiosques, le sultan pouvait voir passer chaque navire entre la mer Noire et la Méditerranée.",
  },
  "ottoman-mamluks": {
    title: "Sélim conquiert le sultanat mamelouk",
    place: "Ridaniya, aux portes du Caire",
    summary:
      "Sélim Ier anéantit l’armée mamelouke à Marj Dabiq, près d’Alep, en août 1516, puis traversa le Sinaï et vainquit de nouveau à Ridaniya, aux portes du Caire, en janvier 1517. La Syrie, l’Égypte et la protection de La Mecque et de Médine passèrent aux Ottomans, dont les revenus doublèrent.",
    context:
      "Sélim avait déjà battu le chah safavide Ismaïl à Tchaldiran en 1514, grâce à ses arquebuses et à son artillerie de campagne. Serviteur des deux saintes mosquées, il prenait la tête de l’islam sunnite\u00a0; l’idée que le dernier calife abbasside lui aurait remis officiellement le califat est une légende plus tardive, même si le titre prit du poids avec le temps.",
    whyHere:
      "L’Égypte était le grenier de la Méditerranée orientale et le débouché du commerce des épices de la mer Rouge, et Le Caire la plus grande ville du monde islamique. Une fois la Syrie tombée, seule la traversée du désert du Sinaï restait un véritable obstacle.",
    schematic: {
      steps: [
        "Safavides battus à Tchaldiran",
        "Mamelouks écrasés à Marj Dabiq",
        "Le Caire pris après Ridaniya",
        "La Mecque et Médine se soumettent",
        "Le sultan guide l’islam sunnite",
      ],
    },
  },
  "ottoman-belgrade": {
    title: "La chute de Belgrade",
    place: "Belgrade, sur le Danube",
    summary:
      "Lors de la première campagne de son règne, le jeune Soliman assiégea la forteresse hongroise de Belgrade et la prit le 29 août 1521. Mehmed II avait échoué devant les mêmes murs en 1456\u00a0; désormais, la route de la Hongrie était ouverte.",
    context:
      "La Hongrie sortait affaiblie d’une révolte paysanne, de querelles entre magnats et d’un roi enfant, Louis II, et ses appels à l’aide restèrent presque sans réponse. Les princes d’Europe étaient absorbés par la rivalité entre François Ier et Charles Quint et par les premières tempêtes de la Réforme.",
    whyHere:
      "Belgrade se dresse sur un promontoire au confluent de la Save et du Danube, clé de la grande voie fluviale et de la plaine hongroise au-delà. Depuis un siècle, elle était le verrou de la porte sud de la chrétienté.",
  },
  "ottoman-rhodes": {
    title: "Les chevaliers quittent Rhodes",
    place: "Rhodes, Dodécanèse",
    summary:
      "De juin à décembre 1522, Soliman assiégea les chevaliers Hospitaliers dans leur ville forteresse de Rhodes. Après des mois de mines et d’assauts, le grand maître Philippe de Villiers de L’Isle-Adam accepta une capitulation honorable et partit avec ses chevaliers, qui s’établirent à Malte en 1530.",
    context:
      "L’ordre croisé tenait Rhodes depuis 1310, et ses galères s’attaquaient aux navires musulmans, y compris aux pèlerins en route vers La Mecque. Mehmed II avait échoué à prendre l’île en 1480.",
    whyHere:
      "Rhodes se trouve tout près de la côte anatolienne, en travers de la route maritime d’Istanbul à Alexandrie. Une fois l’Égypte devenue ottomane, une forteresse ennemie sur cette route n’était plus tolérable.",
  },
};
