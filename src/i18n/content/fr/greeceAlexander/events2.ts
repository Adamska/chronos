import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "greek-tyre": {
    title: "Le siège de Tyr",
    place: "Tyr, Phénicie",
    summary:
      "Comme la cité insulaire de Tyr refusait de lui ouvrir ses portes, Alexandre l’assiégea pendant sept mois en 332 av. J.-C., en construisant une digue à travers le bras de mer. Avec des navires de Sidon et de Chypre, il finit par ouvrir une brèche dans les remparts\u00a0; des milliers de Tyriens furent tués et quelque 30\u00a0000 vendus comme esclaves.",
    context:
      "Alexandre voulait priver de tout port la flotte perse, en grande partie phénicienne, avant de marcher sur l’Égypte. Gaza, dernière forteresse sur la route du sud, tomba après un nouveau siège de deux mois.",
    whyHere:
      "Tyr se dressait sur une île à environ 800 mètres de la côte, ses murailles plongeant droit dans la mer, et elle avait jadis résisté treize ans à un siège babylonien. La digue d’Alexandre la relia pour toujours au continent\u00a0: le sable s’y accumula, et Tyr est depuis une presqu’île.",
  },
  "greek-alexandria": {
    title: "L’Égypte, Siwa et une ville nouvelle",
    place: "Alexandrie, Égypte",
    summary:
      "L’Égypte accueillit Alexandre en libérateur de la domination perse à la fin de 332 av. J.-C. Au début de l’année suivante, il traça une ville nouvelle sur la côte, à l’ouest du delta du Nil, Alexandrie, et traversa le désert jusqu’à l’oracle d’Amon, dans l’oasis de Siwa, qui le salua comme fils du dieu.",
    context:
      "En Égypte, Alexandre fut traité en pharaon, et pour les Grecs, Amon n’était qu’une forme de Zeus. Tracée selon un plan en damier aux larges avenues, Alexandrie devint sous les Ptolémées la plus grande ville du monde grec et la plaque tournante du commerce méditerranéen.",
    whyHere:
      "Le site se trouvait à l’ouest des bouches du Nil, si bien que les courants, qui emportent les alluvions du fleuve vers l’est, n’envaseraient pas ses ports. L’île de Pharos abritait deux ports sur la mer, tandis que le lac Maréotis, derrière la ville, la reliait par canal au Nil et au blé d’Égypte.",
    schematic: {
      westLabel: "Méditerranée",
      eastLabel: "Vallée du Nil",
      eastbound: ["vin", "huile d’olive", "argent", "colons grecs"],
      westbound: ["blé", "papyrus", "lin", "verre"],
    },
  },
  "greek-gaugamela": {
    title: "La bataille de Gaugamèles",
    place: "Gaugamèles, haute Mésopotamie",
    summary:
      "Le 1er octobre 331 av. J.-C., Darius III affronta Alexandre avec une armée bien plus nombreuse, près de Gaugamèles, dans une plaine qu’il avait fait aplanir pour ses chars à faux. Alexandre fit glisser sa ligne vers la droite jusqu’à ce qu’une brèche s’ouvre dans les rangs perses, puis s’y engouffra avec sa cavalerie des Compagnons\u00a0; Darius s’enfuit, et l’Empire perse s’effondra.",
    context:
      "Babylone et Suse ouvrirent bientôt leurs portes, livrant à Alexandre les trésors des rois perses. Darius s’enfuit vers l’est et fut assassiné en 330 av. J.-C. par son propre satrape Bessos, laissant Alexandre revendiquer son trône.",
    whyHere:
      "Darius choisit une vaste plaine dégagée à l’est du Tigre, sur la route royale qui menait de la Mésopotamie à l’Iran, où sa cavalerie et ses chars auraient la place d’envelopper un ennemi moins nombreux. Il laissa Alexandre franchir l’Euphrate et le Tigre sans combattre, afin de livrer bataille sur le terrain de son choix.",
    schematic: {
      steps: [
        "Darius choisit une plaine dégagée",
        "Alexandre glisse vers la droite",
        "Une brèche s’ouvre dans la ligne perse",
        "Les Compagnons chargent Darius",
        "Darius fuit, l’empire s’effondre",
      ],
    },
  },
  "greek-persepolis": {
    title: "L’incendie de Persépolis",
    place: "Persépolis, Perside",
    summary:
      "Alexandre força les Portes persiques, dans le Zagros, et entra au début de 330 av. J.-C. à Persépolis, la capitale cérémonielle des rois perses. Il emporta son trésor et, quelques mois plus tard, incendia les palais royaux, soit pour venger l’incendie d’Athènes, soit, selon certains auteurs anciens, au sortir d’un banquet arrosé.",
    context:
      "Bâtie par Darius Ier à partir de 518 av. J.-C. environ, Persépolis était le lieu où les peuples de l’empire apportaient leurs présents au roi, comme le montrent encore ses escaliers sculptés. Son trésor contenait quelque 120\u00a0000 talents d’argent selon Diodore, une fortune qui paya les armées d’Alexandre pendant des années.",
    whyHere:
      "Persépolis s’élevait sur une terrasse au pied des montagnes de la Perside, berceau de la dynastie perse, dans la haute plaine de Marvdasht. La route directe depuis Suse franchissait le Zagros par l’étroit défilé des Portes persiques, où le satrape Ariobarzane bloqua Alexandre jusqu’à ce que des prisonniers lui montrent un sentier pour le contourner.",
  },
  "greek-alexandria-eschate": {
    title: "La guerre aux confins de la steppe",
    place: "Alexandrie Eschatè (Khodjent), Sogdiane",
    summary:
      "Lancé à la poursuite de Bessos, Alexandre franchit en 329 av. J.-C. l’Hindou Kouch enneigé, entra en Bactriane et atteignit l’Iaxarte, où il fonda Alexandrie Eschatè, «\u00a0la plus lointaine\u00a0». Pendant deux ans, il mena une âpre guérilla en Bactriane et en Sogdiane, puis épousa Roxane, fille d’un noble du pays.",
    context:
      "Bessos, qui avait tué Darius et s’était proclamé roi, fut capturé et exécuté. La résistance menée par Spitaménès, et le meurtre de Cleitos, l’ami d’Alexandre, lors d’une querelle d’ivrognes à Maracanda, montrèrent combien la conquête de l’Asie centrale était dure et coûteuse.",
    whyHere:
      "L’Iaxarte, l’actuel Syr-Daria, marquait la limite nord-est du monde perse, au-delà de laquelle erraient les nomades saces de la steppe. Khodjent se trouve là où le fleuve quitte la vallée du Ferghana, une porte naturelle que la ville d’Alexandre devait garder.",
  },
  "greek-hydaspes": {
    title: "La bataille de l’Hydaspe",
    place: "L’Hydaspe, Pendjab",
    summary:
      "En 326 av. J.-C., sous les pluies de la mousson, Alexandre franchit de nuit l’Hydaspe en crue, en amont de l’armée du roi Poros, et le vainquit au terme d’une rude bataille contre ses éléphants de guerre. Impressionné par le courage de Poros, Alexandre lui laissa son royaume en tant qu’allié.",
    context:
      "Alexandre était entré en Inde avec l’appui du souverain de Taxila. Après la bataille, son cheval Bucéphale mourut et donna son nom à une ville nouvelle. Plus à l’est, sur les rives de l’Hyphase, ses soldats épuisés refusèrent d’aller plus loin, et Alexandre dut faire demi-tour.",
    whyHere:
      "Grossi par la fonte des neiges himalayennes et les pluies de mousson, l’Hydaspe, l’actuelle Jhelum, ne pouvait être passé à gué sous les yeux d’un ennemi dont les éléphants terrifiaient les chevaux. Alexandre profita d’une île boisée et d’un promontoire en amont pour cacher sa traversée et prendre Poros de flanc.",
  },
  "greek-gedrosia": {
    title: "Le désert de Gédrosie et le voyage de Néarque",
    place: "Désert de Gédrosie, côte du Makran",
    summary:
      "Après avoir descendu l’Indus jusqu’à l’océan, Alexandre divisa ses forces en 325 av. J.-C.\u00a0: Cratère prit une route intérieure, l’amiral Néarque la flotte, et Alexandre lui-même longea le Makran à travers le désert de Gédrosie. La chaleur, la soif et une crue subite tuèrent nombre de soldats et de civils avant que les survivants n’atteignent la Carmanie.",
    context:
      "Selon Arrien, Alexandre voulait surpasser Cyrus et la légendaire reine Sémiramis, dont les armées y auraient péri. Néarque, pendant ce temps, reconnut la côte de l’Indus au golfe Persique, et son récit, conservé par Arrien, fut la première description grecque de ces rivages.",
    whyHere:
      "Le Makran est l’une des côtes les plus arides de la Terre, bordée de chaînes stériles parallèles à la mer et pauvre en puits. Alexandre choisit cette route pour creuser des puits et laisser des vivres à la flotte, qui devait attendre les vents de la mousson d’hiver pour cingler vers l’ouest.",
  },
  "greek-babylon": {
    title: "La mort à Babylone",
    place: "Babylone, Mésopotamie",
    summary:
      "De retour à Babylone, dont il voulait faire sa capitale, Alexandre tomba malade après un banquet et mourut en juin 323 av. J.-C., à 32 ans. Il ne laissait aucun héritier adulte, et ses généraux se partagèrent d’abord l’empire comme gouverneurs, avant de se le disputer par les armes.",
    context:
      "En onze ans à peine, il avait conquis un empire de la Grèce à l’Indus, fondé des villes portant son nom et célébré à Suse des mariages collectifs entre Macédoniens et Perses. La fièvre, le poison et l’alcool ont tous été accusés de sa mort\u00a0; son corps embaumé fut saisi par Ptolémée et emmené en Égypte.",
    whyHere:
      "Babylone, sur l’Euphrate, se trouvait au cœur de l’empire, entre la Méditerranée et le plateau iranien, et le fleuve menait au golfe Persique. Alexandre y rassemblait une flotte pour un voyage autour de l’Arabie lorsqu’il mourut.",
  },
  "greek-ipsus": {
    title: "Ipsos et les royaumes des successeurs",
    place: "Ipsos, Phrygie",
    summary:
      "À Ipsos, en 301 av. J.-C., Séleucos et Lysimaque battirent le vieux général Antigone le Borgne, qui périt sur le champ de bataille à plus de quatre-vingts ans, grâce à des centaines d’éléphants de guerre que Séleucos avait obtenus en Inde. La bataille mit fin à tout espoir de réunifier l’empire d’Alexandre.",
    context:
      "La famille d’Alexandre fut anéantie dans ces guerres\u00a0: son demi-frère, sa mère, sa veuve Roxane et son jeune fils furent tous tués. De ces ruines surgirent des dynasties de langue grecque\u00a0: les Ptolémées en Égypte, les Séleucides de la Syrie à l’Iran et, plus tard, les Antigonides en Macédoine.",
    whyHere:
      "Ipsos se trouvait sur le plateau phrygien, au milieu de l’Asie Mineure, là où se rejoignent les routes qui vont de l’Égée à la Syrie et à l’Euphrate. Dans ses plaines dégagées, éléphants et cavalerie pouvaient décider d’une bataille, et le vainqueur tenait les routes entre l’Europe et l’Orient.",
  },
  "greek-library": {
    title: "La bibliothèque d’Alexandrie",
    place: "Mouseion, Alexandrie",
    summary:
      "Au début du IIIe siècle av. J.-C., Ptolémée Ier, général d’Alexandre devenu pharaon, et son fils Ptolémée II fondèrent le Mouseion, un institut de recherche doté d’une immense bibliothèque. Des agents royaux achetaient ou copiaient tous les rouleaux qu’ils pouvaient trouver, et la collection atteignit des centaines de milliers de volumes.",
    context:
      "Les Ptolémées rémunéraient des savants pour étudier, écrire et enseigner. Euclide exposa la géométrie dans ses Éléments, le médecin Hérophile étudia le corps humain par la dissection, et des traductions comme la Septante, la Bible hébraïque en grec, ouvrirent d’autres traditions aux lecteurs grecs.",
    whyHere:
      "Les ports d’Alexandrie attiraient navires, marchands et savants de toute la Méditerranée, et selon le médecin Galien, bien plus tardif, les livres trouvés à bord étaient saisis et copiés pour la bibliothèque. L’Égypte détenait aussi le monopole du papyrus, le support d’écriture du monde antique, qui poussait dans les marais du delta.",
  },
  "greek-eratosthenes": {
    title: "Ératosthène mesure la Terre",
    place: "Syène (Assouan), Égypte",
    summary:
      "Vers 240 av. J.-C., Ératosthène, directeur de la bibliothèque d’Alexandrie, compara le soleil de midi au solstice d’été à Syène, où il brillait presque à la verticale, et à Alexandrie, où il projetait une ombre d’un cinquantième de cercle. De la distance entre les deux villes, il déduisit que la Terre mesurait environ 250\u00a0000 stades de tour, un résultat remarquablement proche de la réalité.",
    context:
      "Les penseurs grecs savaient au moins depuis Aristote que la Terre était une sphère\u00a0; Ératosthène la mesura. Il dressa aussi une carte du monde quadrillée de parallèles et de méridiens, et on lui attribue l’invention du mot géographie.",
    whyHere:
      "Syène, l’actuelle Assouan, se trouve près du tropique du Cancer\u00a0: à midi au solstice d’été, le soleil y tombe presque à la verticale. La ville se situe en outre à peu près plein sud d’Alexandrie, le long du Nil, dont les arpenteurs avaient mesuré les distances, ce qui lui donnait une base d’environ 5\u00a0000 stades.",
    schematic: {
      steps: [
        "Soleil au zénith à Syène",
        "Ombre à Alexandrie\u00a0: 1/50 de cercle",
        "5\u00a0000 stades entre les deux villes",
        "La Terre\u00a0: environ 250\u00a0000 stades de tour",
      ],
    },
  },
  "greek-archimedes": {
    title: "Archimède et le siège de Syracuse",
    place: "Syracuse, Sicile",
    summary:
      "Quand Syracuse prit le parti de Carthage pendant la deuxième guerre punique, une armée et une flotte romaines commandées par Marcellus l’assiégèrent en 213 av. J.-C. Pendant de longs mois, les catapultes et les grues d’Archimède, capables de soulever des navires hors de l’eau, tinrent les Romains en échec, mais la ville tomba en 212 av. J.-C. et le vieux mathématicien fut tué par un soldat romain.",
    context:
      "Archimède, qui avait sans doute étudié à Alexandrie et correspondait avec ses savants, établit la loi du levier et le principe de la poussée des fluides, donna une valeur approchée de pi et calcula le volume de la sphère. Syracuse, la plus grande cité grecque d’Occident, devint romaine, et ses œuvres d’art comme son savoir commencèrent à affluer vers Rome.",
    whyHere:
      "Syracuse occupait un site redoutable\u00a0: l’île d’Ortygie et ses ports en contrebas, et au-dessus le plateau des Épipoles, ceint de falaises et de quelque 27 kilomètres de murailles. C’était une ville que l’ingénierie pouvait défendre, et elle ne tomba que par une attaque nocturne surprise, pendant une fête.",
  },
  "greek-corinth": {
    title: "Rome détruit Corinthe",
    place: "Corinthe, Péloponnèse",
    summary:
      "En 146 av. J.-C., le consul romain Lucius Mummius écrasa l’armée de la ligue achéenne près de l’Isthme et prit Corinthe. Les hommes furent massacrés, les femmes et les enfants vendus comme esclaves et les trésors de la ville expédiés à Rome avant qu’elle ne soit incendiée\u00a0; la même année, Rome rasait Carthage.",
    context:
      "En un demi-siècle, Rome avait vaincu la Macédoine et les Séleucides et s’était faite l’arbitre des affaires grecques, réduisant la Macédoine en province. Quand la ligue achéenne la défia, Rome fit un exemple de sa cité la plus riche. La Grèce perdit sa liberté, mais l’art, la philosophie et la science grecs allaient façonner la culture romaine.",
    whyHere:
      "Corinthe commandait l’Isthme, une langue de terre large de six kilomètres entre le golfe de Corinthe et le golfe Saronique, avec un port sur chaque mer et une voie dallée, le diolkos, pour haler les navires de l’une à l’autre. Qui la tenait tenait la porte du Péloponnèse et le raccourci entre l’Italie et l’Égée.",
  },
};
