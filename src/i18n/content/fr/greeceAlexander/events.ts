import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "greek-olympics": {
    title: "Les premiers Jeux olympiques",
    place: "Olympie, Élide",
    summary:
      "D’après une liste de vainqueurs établie vers 400 av. J.-C., les premiers Jeux olympiques eurent lieu en 776 av. J.-C.\u00a0: Corèbe, un cuisinier d’Élis, remporta la seule épreuve, une course d’un stade. Célébrée tous les quatre ans en l’honneur de Zeus, la fête devint le grand lieu de rencontre du monde grec.",
    context:
      "Les Grecs vivaient dans des centaines de cités indépendantes, les poleis, souvent en guerre les unes contre les autres. Ils partageaient pourtant une langue, des dieux et des mythes, et une trêve sacrée permettait aux athlètes et aux spectateurs de gagner Olympie sans danger. Les Grecs comptèrent plus tard les années en olympiades, des cycles de quatre ans partant de 776 av. J.-C.",
    whyHere:
      "Olympie s’étendait dans une douce vallée boisée, au confluent du Cladéos et de l’Alphée, le plus grand fleuve du Péloponnèse. Le sanctuaire appartenait à la petite Élide et non à une grande puissance, ce qui en faisait un terrain neutre, et la vallée offrait aux pèlerins une route facile depuis la côte ionienne.",
  },
  "greek-colonisation": {
    title: "La grande colonisation",
    place: "Syracuse, Sicile",
    summary:
      "Vers 733 av. J.-C., des colons venus de Corinthe sous la conduite d’Archias débarquèrent sur l’île d’Ortygie, à l’est de la Sicile, et fondèrent Syracuse. Entre 750 et 550 av. J.-C. environ, les cités grecques essaimèrent des centaines d’établissements de l’Espagne à la Crimée, si bien que les Grecs vivaient autour de la mer, dirait Platon, comme des grenouilles autour d’une mare.",
    context:
      "Croissance de la population, manque de terres, commerce et querelles politiques poussaient des groupes de jeunes hommes outre-mer, le plus souvent après avoir consulté l’oracle de Delphes. Chaque colonie devenait une cité indépendante, liée à sa métropole par les cultes et la parenté. La Sicile et l’Italie du Sud devinrent si grecques que les Romains les appelèrent Grande-Grèce.",
    whyHere:
      "Ortygie est une petite île collée à la côte, dotée d’une source d’eau douce, la fontaine Aréthuse, et d’un port naturel de chaque côté. Derrière elle s’étendaient les plaines fertiles de l’est de la Sicile, et le site se trouvait sur la route maritime qui menait de la Grèce à la Méditerranée occidentale.",
    schematic: {
      westLabel: "Colonies d’Occident",
      eastLabel: "Grèce égéenne",
      eastbound: ["blé", "bois", "métaux", "esclaves"],
      westbound: ["vin", "huile d’olive", "céramique peinte", "colons"],
    },
  },
  "greek-sparta": {
    title: "Sparte devient un État guerrier",
    place: "Sparte, Laconie",
    summary:
      "Vers le milieu du VIIe siècle av. J.-C., Sparte avait conquis la riche plaine de Messénie, au-delà du Taygète, et réduit ses habitants à l’état d’hilotes, des serfs qui cultivaient la terre pour leurs maîtres. Libéré du travail, chaque citoyen spartiate devenait un soldat à plein temps, formé dès sept ans par une rude éducation d’État.",
    context:
      "Les Spartiates attribuaient leurs lois à un législateur légendaire, Lycurgue. Ils avaient deux rois, un conseil des anciens et cinq éphores élus, et vivaient dans la peur constante d’une révolte des hilotes. Leur infanterie lourde fit de Sparte la première puissance terrestre de la Grèce pendant près de trois siècles.",
    whyHere:
      "Sparte se trouvait dans la vallée de l’Eurotas, un sillon fertile enserré entre les chaînes du Taygète et du Parnon, si bien protégé que la ville se passa de murailles pendant des siècles. Au-delà du Taygète s’étendait la Messénie, une plaine plus vaste et plus riche que Sparte put conquérir, mais qu’elle dut tenir sous sa botte à jamais.",
    schematic: {
      steps: [
        "Sparte conquiert la Messénie",
        "Les Messéniens deviennent hilotes",
        "Les hilotes cultivent pour les Spartiates",
        "Les citoyens ne vivent que pour la guerre",
        "La peur de la révolte gouverne Sparte",
      ],
    },
  },
  "greek-democracy": {
    title: "Clisthène et la naissance de la démocratie",
    place: "Agora, Athènes",
    summary:
      "En 508 av. J.-C., l’aristocrate athénien Clisthène, soutenu par les simples citoyens, réorganisa Athènes en dix tribus nouvelles qui mêlaient la ville, la côte et l’intérieur des terres. Un Conseil de 500 membres tirés de toute l’Attique préparait les décisions de l’Assemblée, où chaque citoyen adulte pouvait prendre la parole et voter.",
    context:
      "Le tyran Hippias avait été chassé en 510 av. J.-C. avec l’aide de Sparte. Quand le roi spartiate Cléomène voulut installer au pouvoir son allié Isagoras, les Athéniens se soulevèrent et l’assiégèrent sur l’Acropole. Femmes, esclaves et étrangers restaient exclus, mais le pouvoir appartenait désormais au corps des citoyens, le dèmos.",
    whyHere:
      "L’Attique était vaste pour une cité grecque, et ses trois régions, la ville, la côte et les collines, avaient chacune soutenu des factions aristocratiques rivales. En composant chaque tribu de morceaux des trois, Clisthène brisa ces fidélités régionales et rattacha toute la campagne à l’Assemblée d’Athènes.",
    schematic: {
      steps: [
        "Le tyran Hippias chassé",
        "Sparte soutient Isagoras",
        "Les Athéniens se soulèvent",
        "Clisthène redessine les tribus",
        "Les citoyens votent à l’Assemblée",
      ],
    },
  },
  "greek-marathon": {
    title: "La bataille de Marathon",
    place: "Plaine de Marathon, Attique",
    summary:
      "En 490 av. J.-C., une expédition perse débarqua dans la baie de Marathon, à une quarantaine de kilomètres d’Athènes. Quelque 10\u00a0000 Athéniens et 1\u00a0000 Platéens menés par Miltiade chargèrent à travers la plaine et rejetèrent les envahisseurs vers leurs navires\u00a0; Hérodote compte 6\u00a0400 morts perses contre 192 Athéniens.",
    context:
      "Athènes et Érétrie avaient envoyé des navires soutenir la révolte des cités grecques d’Ionie contre la Perse en 499 av. J.-C., et les rebelles avaient incendié Sardes. Darius Ier dépêcha une flotte punitive qui détruisit Érétrie avant de passer en Attique. La légende du coureur portant à Athènes la nouvelle de la victoire ne fut racontée que des siècles plus tard.",
    whyHere:
      "La baie offrait une longue plage abritée pour une flotte et une plaine où la cavalerie perse pouvait manœuvrer\u00a0; le tyran exilé Hippias, qui guidait les Perses, la connaissait car son père y avait débarqué en 546 av. J.-C. Les Athéniens campèrent là où collines et marais fermaient les issues, un terrain où la cavalerie ne servait guère.",
  },
  "greek-thermopylae": {
    title: "La bataille des Thermopyles",
    place: "Défilé des Thermopyles",
    summary:
      "En août 480 av. J.-C., environ 7\u00a0000 Grecs menés par le roi spartiate Léonidas tinrent trois jours durant le défilé côtier des Thermopyles face à l’armée de Xerxès. Quand un homme du pays montra aux Perses un sentier de montagne qui contournait le passage, Léonidas renvoya la plupart des alliés et mourut au combat avec ses 300 Spartiates et les Thespiens qui avaient choisi de rester.",
    context:
      "Dix ans après Marathon, Xerxès Ier fit franchir l’Hellespont à une immense armée sur des ponts de bateaux. Une ligue d’une trentaine de cités grecques, conduite par Sparte, résolut de l’arrêter sur terre aux Thermopyles, tandis que sa flotte barrait le détroit voisin de l’Artémision.",
    whyHere:
      "Ici, l’unique route de Thessalie vers la Grèce centrale se faufilait entre les falaises du mont Callidrome et les hauts-fonds du golfe Maliaque, par endroits à peine plus large qu’un chemin de charrette. Dans un tel couloir, le nombre des Perses ne comptait guère\u00a0; depuis, les alluvions du fleuve ont repoussé le rivage de plusieurs kilomètres.",
  },
  "greek-salamis": {
    title: "La bataille de Salamine",
    place: "Détroit de Salamine",
    summary:
      "En septembre 480 av. J.-C., alors qu’Athènes avait été évacuée et son Acropole incendiée, quelque 370 trières grecques attirèrent la flotte perse, plus nombreuse, dans l’étroit chenal qui sépare Salamine de la côte attique. Incapables de manœuvrer, les navires perses furent éperonnés et coulés sous les yeux de Xerxès, qui se replia bientôt en Asie.",
    context:
      "Trois ans plus tôt, Thémistocle avait convaincu les Athéniens de consacrer un riche filon d’argent découvert au Laurion à une flotte de 200 navires de guerre. Après Salamine, l’armée de terre perse fut battue à Platées en 479 av. J.-C., et les Grecs portèrent la guerre de l’autre côté de l’Égée pour libérer les cités d’Ionie.",
    whyHere:
      "Entre l’île de Salamine et le continent, le chenal se resserre à un kilomètre et demi environ, trop peu pour qu’une grande flotte déploie sa ligne. Les Grecs combattaient près de leur propre rivage, où les lourdes trières athéniennes pouvaient éperonner des navires ennemis entassés.",
    schematic: {
      steps: [
        "L’argent du Laurion paie les trières",
        "Athènes évacuée vers Salamine",
        "La flotte perse entre dans le détroit",
        "Navires entassés éperonnés et coulés",
        "Xerxès se replie en Asie",
      ],
    },
  },
  "greek-parthenon": {
    title: "L’Athènes de Périclès et le Parthénon",
    place: "Acropole, Athènes",
    summary:
      "En 447 av. J.-C., à l’initiative de Périclès, Athènes entreprit sur l’Acropole un nouveau temple de marbre dédié à Athéna, conçu par Ictinos et Callicratès, ses sculptures étant dirigées par Phidias. Achevé en 432 av. J.-C., le Parthénon couronnait une cité où Sophocle écrivait ses tragédies et où Socrate interrogeait ses concitoyens sur l’agora.",
    context:
      "Après les guerres médiques, Athènes prit la tête de la ligue de Délos, une alliance de cités égéennes qui finançaient une flotte commune. En 454 av. J.-C., le trésor de la ligue fut transféré de Délos à Athènes, et une partie de cet argent paya les nouveaux monuments\u00a0: l’alliance était devenue un empire athénien.",
    whyHere:
      "L’Acropole est un rocher au sommet plat qui domine la ville d’environ 70 mètres, une forteresse depuis l’âge du bronze, visible de la mer jusqu’au Pirée. Son marbre venait du mont Pentélique, à quelque 16 kilomètres, et descendait vers la ville bloc par bloc.",
    schematic: {
      westLabel: "Athènes",
      eastLabel: "Alliés de l’Égée",
      eastbound: ["trières", "garnisons", "monnaie d’argent", "tribunaux"],
      westbound: ["tribut", "rameurs", "blé", "bois"],
    },
  },
  "greek-peloponnesian-war": {
    title: "La guerre du Péloponnèse",
    place: "Longs Murs, entre Athènes et le Pirée",
    summary:
      "En 431 av. J.-C., la rivalité entre Athènes et Sparte éclata en une guerre qui embrasa le monde grec pendant vingt-sept ans. Athènes survécut à la peste et à une désastreuse expédition en Sicile, mais après que Sparte, financée par l’or perse, eut détruit sa flotte à Aigos Potamos en 405 av. J.-C., la cité affamée capitula en 404 av. J.-C.",
    context:
      "Sparte et ses alliés dominaient sur terre, Athènes et son empire sur mer. Périclès comptait s’abriter derrière les murailles et laisser frapper la flotte, mais en 429 av. J.-C. une épidémie dans la ville surpeuplée emporta peut-être un quart de ses habitants, Périclès compris.",
    whyHere:
      "Deux Longs Murs d’environ six kilomètres reliaient Athènes à son port du Pirée et faisaient de la ville une île ravitaillée par la mer, pendant que les armées spartiates brûlaient les champs de l’Attique. Athènes ne tomba que lorsque Lysandre coupa sa route du blé dans l’Hellespont.",
  },
  "greek-chaeronea": {
    title: "Philippe II vainqueur à Chéronée",
    place: "Chéronée, Béotie",
    summary:
      "En août 338 av. J.-C., Philippe II de Macédoine vainquit à Chéronée les armées coalisées d’Athènes et de Thèbes. Son fils Alexandre, âgé de dix-huit ans, mena la charge de cavalerie qui anéantit le Bataillon sacré thébain, et l’année suivante Philippe s’attacha les cités grecques au sein de la ligue de Corinthe.",
    context:
      "Usées par des décennies de guerres entre Sparte, Athènes et Thèbes, les cités grecques ne pouvaient rivaliser avec une Macédoine réformée. Philippe avait armé son infanterie de la longue sarisse et payait ses soldats avec l’or du mont Pangée, tandis que l’orateur athénien Démosthène mettait en garde contre lui en vain. Philippe fut assassiné en 336 av. J.-C., alors qu’il s’apprêtait à envahir la Perse.",
    whyHere:
      "Chéronée garde une plaine étroite sur le Céphise, sur la grande route qui mène du nord de la Grèce en Béotie puis à Athènes. Les alliés la choisirent pour barrer la route à Philippe là où collines et rivière protégeaient leurs flancs.",
  },
  "greek-granicus": {
    title: "La bataille du Granique",
    place: "Le Granique, Phrygie hellespontique",
    summary:
      "Au printemps 334 av. J.-C., Alexandre franchit l’Hellespont avec quelque 37\u00a0000 hommes et, après un hommage à Troie, affronta sur le Granique l’armée des satrapes perses. Il lança sa cavalerie à travers la rivière et à l’assaut de ses berges escarpées, faillit être tué dans la mêlée et remporta la bataille qui lui ouvrit l’Asie Mineure.",
    context:
      "Alexandre avait hérité du projet paternel d’envahir l’Empire perse, présenté aux Grecs comme la vengeance de l’invasion de Xerxès. Les cités grecques d’Asie Mineure devaient être libérées de la domination perse, et Sardes se rendit sans combat quelques semaines plus tard.",
    whyHere:
      "Le Granique descend du mont Ida vers la mer de Marmara et coupe la route qui mène de l’Hellespont à l’intérieur de l’Asie Mineure. Ses berges raides et boueuses formaient une ligne de défense naturelle\u00a0: voilà pourquoi les satrapes y attendirent Alexandre au lieu de le laisser s’enfoncer dans les terres.",
  },
  "greek-issus": {
    title: "La bataille d’Issos",
    place: "Issos, Cilicie",
    summary:
      "En novembre 333 av. J.-C., Darius III amena une immense armée sur les arrières d’Alexandre et l’affronta dans une étroite plaine côtière près d’Issos. La cavalerie d’Alexandre enfonça la ligne perse, Darius s’enfuit, et sa mère, son épouse et ses filles furent capturées dans le camp royal.",
    context:
      "Après le Granique, Alexandre avait traversé l’Asie Mineure, tranchant au passage le nœud gordien selon la légende. La victoire d’Issos lui ouvrit la Syrie et la Phénicie, mais Darius s’échappa pour lever une nouvelle armée en Mésopotamie.",
    whyHere:
      "Entre le golfe d’Alexandrette et les monts Amanus, la plaine côtière ne mesure que quelques kilomètres de large et n’est traversée que par le petit Pinaros. Comprimés dans cette bande de terre, les Perses ne purent profiter de leur nombre pour envelopper l’armée macédonienne, plus réduite.",
  },
};
