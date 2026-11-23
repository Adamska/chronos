import type { HistoricalEvent } from "@/types/chronicle";

export const middleEvents: readonly HistoricalEvent[] = [
  {
    id: "napo-pyramids",
    title: "Egypt and the Battle of the Pyramids",
    year: 1798,
    place: "Embabeh, near Cairo",
    coordinates: [31.2, 30.07],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Battle_of_the_Pyramids",
    summary:
      "Landing at Alexandria in July 1798 with some 35,000 soldiers, Bonaparte marched up the Nile and on 21 July routed the Mamluk cavalry of Murad Bey at Embabeh, with the pyramids of Giza on the horizon. He entered Cairo days later and set about governing Egypt as a French colony.",
    context:
      "The Directory hoped to threaten Britain's route to India and to keep an ambitious general far from Paris. More than 150 scholars, engineers and artists sailed with the army and founded the Institute of Egypt in Cairo; in 1799 French soldiers found the Rosetta Stone, which later allowed Jean-François Champollion to decipher hieroglyphs.",
    whyHere:
      "Egypt sits on the narrow isthmus between the Mediterranean and the Red Sea, the shortest link toward the Indian Ocean. The Nile was the only road south from the coast, and its thin green valley squeezed both armies onto the same strip of land between river and desert outside Cairo.",
    keyFigures: ["Napoleon Bonaparte", "Murad Bey", "Louis Desaix"],
  },
  {
    id: "napo-nile",
    title: "Battle of the Nile at Aboukir Bay",
    year: 1798,
    place: "Aboukir Bay",
    coordinates: [30.08, 31.32],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Battle_of_the_Nile",
    summary:
      "On the evening of 1 August 1798 Horatio Nelson's fleet found the French ships of the line anchored in Aboukir Bay and attacked both sides of their line. By morning eleven of the thirteen had been taken or destroyed, including the flagship L'Orient, which blew up in the night.",
    context:
      "The defeat cut Bonaparte's army off from France and gave Britain command of the Mediterranean. It encouraged the Ottoman Empire, Egypt's nominal sovereign, to declare war on France and helped form the Second Coalition, and Bonaparte's march into Syria broke down before Acre in 1799.",
    whyHere:
      "Aboukir Bay is a wide, shallow anchorage east of Alexandria, whose harbour was too shallow for the big French ships. Admiral Brueys moored his line close to the shoals, assuming no enemy could pass inshore of him, but there was just enough water for Nelson's leading captains to slip between the French and the coast.",
    keyFigures: ["Horatio Nelson", "François-Paul Brueys d'Aigalliers"],
  },
  {
    id: "napo-brumaire",
    title: "The Coup of 18 Brumaire",
    year: 1799,
    place: "Château de Saint-Cloud",
    coordinates: [2.21, 48.84],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Coup_of_18_Brumaire",
    summary:
      "Leaving his army in Egypt, Bonaparte landed at Fréjus in October 1799 and joined the Director Sieyès in a coup on 9 and 10 November (18 and 19 Brumaire, Year VIII). When the deputies resisted at Saint-Cloud, grenadiers cleared the hall, and a three-man Consulate took power with Bonaparte as First Consul.",
    context:
      "The Directory was discredited by corruption, inflation, defeats in 1799 and repeated purges of election results. A new constitution, approved by a plebiscite with inflated figures, concentrated power in the First Consul. In May 1800 Bonaparte led an army over the Great St Bernard Pass and in June won a narrow victory at Marengo, which secured his hold on France.",
    whyHere:
      "The two legislative councils were moved from Paris to the palace of Saint-Cloud, about ten kilometres west, on the pretext of a Jacobin plot. Away from the radical districts of the capital, they could be surrounded by troops without risking a popular rising in their defence.",
    keyFigures: ["Napoleon Bonaparte", "Emmanuel Joseph Sieyès", "Lucien Bonaparte"],
  },
  {
    id: "napo-louisiana",
    title: "The Louisiana Purchase",
    year: 1803,
    place: "New Orleans",
    coordinates: [-90.07, 29.95],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Louisiana_Purchase",
    summary:
      "In April 1803 France sold Louisiana, some 2.1 million square kilometres between the Mississippi and the Rocky Mountains, to the United States for 15 million dollars. The deal roughly doubled the size of the young republic.",
    context:
      "Spain had secretly returned Louisiana to France in 1800, and Bonaparte dreamed of an American empire feeding the sugar islands of the Caribbean. The failure of his army in Saint-Domingue and a looming new war with Britain persuaded him to sell. President Thomas Jefferson's envoys had come to buy New Orleans alone and were offered everything.",
    whyHere:
      "New Orleans held the mouth of the Mississippi, the outlet for every farm in the American interior beyond the Appalachians, whose crops could not cross the mountains at a profit. Whoever held the port held the trade of half a continent, which is why Jefferson wanted it at almost any price.",
    keyFigures: ["Thomas Jefferson", "Robert R. Livingston", "James Monroe", "François Barbé-Marbois"],
    schematic: {
      kind: "causal",
      steps: ["Saint-Domingue expedition collapses", "Louisiana loses its purpose", "France sells for $15 million", "United States doubles in size"],
    },
  },
  {
    id: "napo-haiti-independence",
    title: "Haitian Independence",
    year: 1804,
    place: "Gonaïves",
    coordinates: [-72.69, 19.45],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Haitian_Declaration_of_Independence",
    summary:
      "On 1 January 1804 at Gonaïves, Jean-Jacques Dessalines proclaimed the independence of Haiti, giving the former colony its Taíno name. It was the second independent state in the Americas after the United States, and the only one born of a successful revolt of enslaved people.",
    context:
      "In 1802 Bonaparte sent his brother-in-law Charles Leclerc with a large army to restore French control, and slavery was reimposed in Guadeloupe. Toussaint Louverture was seized by a ruse and deported to France, where he died in 1803, but his generals rose again when the threat of re-enslavement became clear, and yellow fever destroyed the French army. Dessalines's victory at Vertières in November 1803 ended the war.",
    whyHere:
      "Gonaïves lies at the head of the Gulf of Gonâve, between the colony's northern and western provinces, in the region where the revolutionary armies were strongest. Haiti's rugged interior, which gave the country its name, 'land of mountains', let the rebels fight from the heights while disease ravaged European troops on the coastal plains.",
    keyFigures: ["Jean-Jacques Dessalines", "Toussaint Louverture", "Charles Leclerc", "Henri Christophe"],
    primarySource: {
      excerpt:
        "In overthrowing me, you have cut down in Saint-Domingue only the trunk of the tree of liberty. It will spring up again by the roots, for they are numerous and deep.",
      attribution: "Toussaint Louverture, on being deported to France, June 1802",
    },
  },
  {
    id: "napo-civil-code",
    title: "The Civil Code and the Coronation",
    year: 1804,
    place: "Notre-Dame, Paris",
    coordinates: [2.35, 48.853],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Napoleonic_Code",
    summary:
      "In March 1804 France adopted a single Civil Code, replacing hundreds of local customs with one law on property, contracts, inheritance and the family. On 2 December, in Notre-Dame de Paris, Napoleon crowned himself Emperor of the French in the presence of Pope Pius VII.",
    context:
      "The Code kept key gains of the Revolution: equality before the law, civil marriage and divorce, the end of feudal dues and secure property. It also reinforced the power of husbands and fathers and kept women legally subordinate. Carried by French armies, it shaped the law of Belgium, the Rhineland, Italy and Poland and later inspired codes from Latin America to Quebec.",
    whyHere:
      "Old-regime France was split between the customary laws of the north and the Roman-based written law of the south, along a line running roughly from Lake Geneva to the Atlantic near La Rochelle. Only a centralised state run from Paris, where the Council of State drafted the Code, could impose one law on every province.",
    keyFigures: ["Napoleon Bonaparte", "Jean-Étienne-Marie Portalis", "Jean-Jacques-Régis de Cambacérès", "Pope Pius VII"],
  },
  {
    id: "napo-trafalgar",
    title: "Battle of Trafalgar",
    year: 1805,
    place: "Off Cape Trafalgar",
    coordinates: [-6.03, 36.18],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Trafalgar",
    summary:
      "On 21 October 1805 a British fleet of 27 ships of the line under Horatio Nelson attacked the combined French and Spanish fleet of 33 ships off Cape Trafalgar, driving two columns through its line. The allies lost 22 ships and the British none, but Nelson was killed by a musket ball in the hour of victory.",
    context:
      "Napoleon had massed an army at Boulogne to invade England and sent Admiral Villeneuve to the West Indies to lure the Royal Navy away. The plan failed, and the army had already marched east against Austria before the battle was fought. Trafalgar secured British command of the sea for the rest of the war and pushed Napoleon toward economic warfare.",
    whyHere:
      "Cape Trafalgar lies just west of the Strait of Gibraltar, the only gateway between the Atlantic and the Mediterranean. Villeneuve's fleet had sheltered in nearby Cádiz and was heading for the strait when it was caught in open water, in light winds and a heavy swell that gave the attackers time to close.",
    keyFigures: ["Horatio Nelson", "Pierre-Charles Villeneuve", "Cuthbert Collingwood", "Federico Gravina"],
    primarySource: {
      excerpt: "England expects that every man will do his duty.",
      attribution: "Signal hoisted by HMS Victory before the Battle of Trafalgar, 21 October 1805",
    },
  },
  {
    id: "napo-austerlitz",
    title: "Battle of Austerlitz",
    year: 1805,
    place: "Pratzen Heights, near Austerlitz, Moravia",
    coordinates: [16.76, 49.13],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Austerlitz",
    summary:
      "On 2 December 1805, a year to the day after his coronation, Napoleon defeated the larger Russian and Austrian armies of Alexander I and Francis II in Moravia. By weakening his right flank he lured the allies down from the Pratzen Heights, then seized the plateau and cut their army in two.",
    context:
      "Napoleon had marched the Grande Armée from the Channel to the Danube in a few weeks and forced an Austrian army to surrender at Ulm in October. The Peace of Pressburg stripped Austria of Venetia and Tyrol, and in 1806 the thousand-year-old Holy Roman Empire was dissolved, its western states regrouped in a Confederation of the Rhine under French protection.",
    whyHere:
      "The Pratzen plateau dominated the low, marshy ground of the Goldbach brook and the frozen ponds to the south. Napoleon studied the field days in advance and deliberately gave up the heights, so that the allies would occupy them and then come down against his seemingly weak right.",
    keyFigures: ["Napoleon Bonaparte", "Alexander I of Russia", "Francis II, Holy Roman Emperor", "Mikhail Kutuzov"],
  },
  {
    id: "napo-continental",
    title: "The Continental System",
    year: 1806,
    endYear: 1814,
    place: "Berlin",
    coordinates: [13.4, 52.52],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Continental_System",
    summary:
      "By the Berlin Decree of 21 November 1806, issued after his victory over Prussia, Napoleon closed every port under French control to British ships and goods. Extended to Russia after Tilsit and later to most of Europe, the blockade aimed to strangle Britain's trading economy.",
    context:
      "Unable to invade Britain after Trafalgar, Napoleon turned to economic warfare, and Britain answered by blockading France and its allies. Smuggling boomed while ports such as Hamburg and Amsterdam withered, and enforcing the system drew France into Portugal, Spain, Holland and the Papal States. Russia's break with it in 1810 led to the invasion of 1812.",
    whyHere:
      "Britain lived by sea trade, re-exporting colonial sugar, coffee and its own cotton cloth to the continent through North Sea and Baltic ports. To seal a coastline stretching from the Baltic to the Adriatic, Napoleon had to control or annex every harbour on it, which dragged him into ever more distant wars.",
    keyFigures: ["Napoleon Bonaparte", "Alexander I of Russia", "George Canning"],
    schematic: {
      kind: "causal",
      steps: ["Britain rules the seas", "Berlin Decree closes ports", "Smuggling and shortages spread", "Russia breaks away", "Invasion of Russia"],
    },
  },
];
