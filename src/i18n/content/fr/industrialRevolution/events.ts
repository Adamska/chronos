import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "ind-bridgewater-canal": {
    title: "L’ouverture du canal de Bridgewater",
    place: "De Worsley à Manchester, Lancashire",
    summary:
      "Le duc de Bridgewater inaugura un canal qui acheminait le charbon de ses mines de Worsley jusqu’à Manchester, franchissant l’Irwell sur l’aqueduc de Barton. Le prix du charbon à Manchester chuta fortement, de moitié environ selon les contemporains.",
    context:
      "Les routes britanniques étaient défoncées et les rivières peu profondes, si bien que transporter des marchandises pondéreuses comme le charbon coûtait plus cher que de les extraire. Le succès commercial du canal déclencha une fièvre de construction qui, en 1800, reliait la Mersey, la Trent, la Severn et la Tamise.",
    whyHere:
      "Les veines de charbon de Worsley étaient noyées : les drainer par des galeries souterraines alimentait aussi le canal et permettait aux bateaux d’entrer à flot jusque dans la mine. Un tracé à niveau, suivant les courbes du relief, ne nécessitait aucune écluse sur les quelques kilomètres qui menaient à une ville en pleine croissance, avide de combustible.",
  },
  "ind-watt-condenser": {
    title: "Watt fait breveter le condenseur séparé",
    place: "Glasgow, puis Birmingham",
    summary:
      "James Watt, fabricant d’instruments à l’université de Glasgow, fit breveter une machine à vapeur dotée d’un condenseur séparé du cylindre, réduisant fortement le combustible que gaspillait la machine de Newcomen. À partir de 1775, il construisit des machines en association avec Matthew Boulton à Soho, près de Birmingham.",
    context:
      "Les machines de Newcomen pompaient l’eau des mines depuis 1712, mais elles brûlaient tant de charbon qu’elles n’étaient rentables qu’au carreau de la mine. Les machines rotatives ultérieures de Boulton et Watt pouvaient entraîner les mécanismes des filatures, libérant les usines des berges des rivières.",
    whyHere:
      "L’université de Glasgow confia à Watt un modèle de Newcomen défectueux à réparer et lui offrit la compagnie de Joseph Black, qui étudiait la chaleur latente. Les métiers du métal de Birmingham, et l’alésage précis des cylindres de John Wilkinson, transformèrent l’idée en machines qui fonctionnaient.",
    schematic: {
      steps: [
        "Le condenseur séparé économise le charbon",
        "Le mouvement rotatif entraîne les machines",
        "Les filatures quittent les berges",
        "Les usines s’entassent dans les villes",
      ],
    },
  },
  "ind-cromford-mill": {
    title: "La filature d’Arkwright à Cromford",
    place: "Cromford, Derbyshire",
    summary:
      "Richard Arkwright et ses associés bâtirent une filature de coton hydraulique équipée de son water frame breveté, qu’ils faisaient tourner jour et nuit par équipes. Autour, il fit construire des logements pour les familles qui servaient les machines, créant le modèle du village-usine.",
    context:
      "Le filage était jusque-là une activité domestique ; le water frame produisait en continu un fil de coton solide, et l’usine réunissait main-d’œuvre, force motrice et discipline sous un même toit. Le modèle d’Arkwright fut copié de part et d’autre des Pennines, en Écosse et en Nouvelle-Angleterre.",
    whyHere:
      "Le Cromford Sough, galerie d’exhaure de mines de plomb voisines, et le ruisseau de Bonsall fournissaient un débit régulier d’eau tiède qui gelait rarement. La vallée isolée se trouvait aussi loin des fileurs à la main du Lancashire, qui brisaient les premières machines.",
  },
  "ind-iron-bridge": {
    title: "L’Iron Bridge enjambe la Severn",
    place: "Coalbrookdale, Shropshire",
    summary:
      "Abraham Darby III coula et érigea au-dessus des gorges de la Severn le premier grand pont du monde en fonte, ouvert à la circulation en 1781. Il faisait la démonstration de ce que pouvait accomplir le fer, devenu assez bon marché pour servir de matériau de construction.",
    context:
      "En 1709, à Coalbrookdale, Abraham Darby Ier avait fondu le fer au coke plutôt qu’au charbon de bois, affranchissant la sidérurgie des forêts britanniques en déclin. Le fer bon marché servit aux rails, aux cylindres des machines, aux bâtis des métiers et, pour finir, aux navires.",
    whyHere:
      "Les gorges de la Severn mettent à nu, sur les mêmes versants, charbon, minerai de fer, calcaire et argile, tous les ingrédients du haut fourneau à courte distance. La rivière elle-même était une voie navigable jusqu’à Bristol et à la mer.",
  },
  "ind-cotton-gin": {
    title: "L’égreneuse à coton d’Eli Whitney",
    place: "Mulberry Grove, près de Savannah, Géorgie",
    summary:
      "Dans une plantation de Géorgie, Eli Whitney construisit une machine qui débarrassait de ses graines le coton upland à fibre courte bien plus vite que le nettoyage à la main ; il la fit breveter en 1794. La culture du coton explosa dans tout le Sud américain pour alimenter les filatures britanniques.",
    context:
      "Les machines à filer du Lancashire avaient créé une demande vorace de fibre brute, que l’Inde et les Caraïbes ne pouvaient satisfaire. L’égreneuse rendit rentable le coton upland et entraîna une immense extension de l’esclavage vers l’ouest, en Alabama, au Mississippi et en Louisiane.",
    whyHere:
      "Les hautes terres du Sud offraient une longue saison sans gel et un sol fertile, mais leur coton à graines vertes était presque impossible à nettoyer à la main. Des ports atlantiques comme Savannah et Charleston, puis La Nouvelle-Orléans, expédiaient les balles directement à Liverpool.",
    schematic: {
      westLabel: "Sud américain",
      eastLabel: "Lancashire",
      eastbound: ["Coton upland brut", "Coton Sea Island"],
      westbound: ["Cotonnades", "Articles en fer", "Crédit"],
    },
  },
  "ind-peterloo": {
    title: "Le massacre de Peterloo",
    place: "St Peter’s Field, Manchester",
    summary:
      "La cavalerie chargea une foule pacifique d’environ 60 000 personnes rassemblées pour réclamer une réforme parlementaire, tuant au moins quinze personnes et en blessant des centaines. La presse tourna l’attaque en dérision sous le nom de Peterloo, par allusion à Waterloo.",
    context:
      "Manchester était devenue la première ville cotonnière du monde, surnommée Cottonopolis, et pourtant elle n’élisait aucun député. La crise d’après-guerre, les Corn Laws et la baisse des salaires des tisserands à bras alimentaient le mouvement radical que redoutaient les autorités.",
    whyHere:
      "On attribue souvent à l’air humide venu de l’Atlantique le mérite de garder le fil de coton souple dans le Lancashire, tandis que les cours d’eau et le charbon des Pennines faisaient tourner les filatures et que Liverpool était toute proche. Ces atouts firent de Manchester une ville d’usines surpeuplée dont la voix politique restait loin derrière la richesse.",
  },
  "ind-liverpool-manchester": {
    title: "Le chemin de fer de Liverpool à Manchester",
    place: "De Liverpool à Manchester, Lancashire",
    summary:
      "Le premier chemin de fer interurbain, avec des trains de voyageurs et de marchandises circulant selon un horaire et tous tractés par des locomotives à vapeur, ouvrit en septembre 1830. Le jour de l’inauguration, le député William Huskisson fut heurté et tué par la Rocket de Stephenson.",
    context:
      "La ligne Stockton–Darlington avait montré en 1825 que des locomotives à vapeur pouvaient tirer du charbon sur une ligne publique. La victoire de la Rocket aux essais de Rainhill, en 1829, convainquit les investisseurs, et en deux décennies la Grande-Bretagne se couvrit de voies ferrées.",
    whyHere:
      "Le coton brut débarqué à Liverpool devait gagner les filatures de Manchester, à une cinquantaine de kilomètres à l’intérieur des terres, et les négociants supportaient mal les tarifs des compagnies de canaux. Le tracé exigea la tranchée d’Olive Mount, le viaduc de Sankey et une voie posée en flottaison sur des fascines à travers la tourbière de Chat Moss.",
    schematic: {
      steps: [
        "Le coton débarque à Liverpool",
        "Le fret par canal se révèle lent et coûteux",
        "La Rocket l’emporte à Rainhill",
        "La fièvre ferroviaire se répand",
      ],
    },
  },
  "ind-morse-telegraph": {
    title: "La ligne Washington–Baltimore de Morse",
    place: "Capitole des États-Unis, Washington",
    summary:
      "Samuel Morse envoya le premier message officiel sur une ligne télégraphique d’une soixantaine de kilomètres reliant le Capitole à Baltimore, où Alfred Vail le reçut. Un code simple de points et de traits fit de l’électricité un moyen de communication à longue distance presque instantané.",
    context:
      "Le Congrès avait financé la ligne expérimentale en 1843. En une décennie, des fils télégraphiques longeaient la plupart des chemins de fer américains et européens, et les nouvelles, les cours et les ordres de circulation des trains se mirent à voyager plus vite que n’importe quel voyageur.",
    whyHere:
      "Les fils furent tendus le long de l’emprise du Baltimore and Ohio Railroad, couloir tout trouvé entre les deux villes. C’est de Washington que venaient les fonds, et c’est là que les législateurs pouvaient assister à la démonstration.",
  },
  "ind-great-exhibition": {
    title: "La Grande Exposition",
    place: "Crystal Palace, Hyde Park, Londres",
    summary:
      "La Grande-Bretagne organisa la première exposition internationale des produits manufacturés dans le Crystal Palace préfabriqué de fer et de verre de Joseph Paxton, qui reçut environ six millions de visites entre mai et octobre. Ses bénéfices contribuèrent à fonder les musées de South Kensington.",
    context:
      "La Grande-Bretagne était alors l’atelier du monde, et l’exposition devait afficher son avance en matière de machines à vapeur, de textiles et de machines-outils. Les envois étrangers, des moissonneuses américaines à l’acier coulé de Krupp, laissaient aussi entrevoir les rivaux à venir.",
    whyHere:
      "Londres était le centre du plus vaste réseau commercial du monde, et les nouveaux chemins de fer permettaient à des trains d’excursion, souvent organisés par Thomas Cook, d’amener pour la journée les classes laborieuses de province.",
  },
  "ind-krupp-essen": {
    title: "L’acier Krupp et la Ruhr",
    place: "Essen, Ruhr",
    summary:
      "Alfred Krupp exposa à la Grande Exposition un lingot massif d’acier coulé sans défaut, annonçant au monde son usine d’Essen. Les bandages de roues ferroviaires en acier sans soudure, puis l’artillerie, firent de Krupp l’une des plus grandes entreprises industrielles d’Europe.",
    context:
      "L’union douanière du Zollverein, conduite par la Prusse à partir de 1834, et de nouvelles voies ferrées comme la ligne Cologne–Minden soudèrent les États allemands en un marché unique. Ingénieurs et machines britanniques aidèrent à lancer l’extraction minière et la sidérurgie de la Ruhr, avant que les entreprises allemandes ne les dépassent.",
    whyHere:
      "Les veines de charbon de la Ruhr affleurent le long de la vallée et plongent vers le nord sous des roches plus récentes : des puits profonds ouvrirent ainsi un immense bassin houiller. Le Rhin offrait un transport fluvial bon marché vers la mer, ainsi que vers le minerai et les marchés des Pays-Bas.",
  },
  "ind-bessemer-process": {
    title: "Le procédé Bessemer",
    place: "Sheffield, Yorkshire",
    summary:
      "Henry Bessemer annonça qu’en insufflant de l’air dans la fonte en fusion on brûlait le carbone et l’on obtenait de l’acier en quelques minutes au lieu de plusieurs jours ; en 1858, il ouvrit sa propre aciérie à Sheffield. L’ajout de spiegeleisen par Robert Mushet rendit le produit fiable.",
    context:
      "L’acier bon marché produit en masse remplaça le fer puddlé dans les rails, les navires, les ponts et les canons. Le procédé initial ne pouvait traiter les minerais riches en phosphore jusqu’au revêtement basique de Sidney Gilchrist Thomas, en 1878, qui ouvrit les minerais lorrains à l’industrie allemande.",
    whyHere:
      "Sheffield produisait de l’acier au creuset depuis les années 1740, grâce à la force hydraulique des Pennines pour le meulage, au charbon et aux argiles réfractaires locaux, et au fer suédois importé par Hull. Ses aciéristes qualifiés étaient prêts à adopter une méthode plus rapide.",
  },
};
