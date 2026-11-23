import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "napo-estates-general",
    title: "The Estates-General and the Tennis Court Oath",
    year: 1789,
    place: "Versailles",
    coordinates: [2.12, 48.8],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Estates_General_of_1789",
    summary:
      "Summoned by Louis XVI to solve a fiscal crisis, the Estates-General opened at Versailles on 5 May 1789, for the first time since 1614. On 17 June the deputies of the Third Estate declared themselves a National Assembly, and three days later, locked out of their hall, they swore in a tennis court not to separate until France had a constitution.",
    context:
      "War debts, including the cost of backing American independence, had left the crown close to bankruptcy, and the privileged orders refused new taxes. A poor harvest in 1788 drove bread prices to their highest level in decades. The Third Estate, which spoke for some 97 percent of the population, demanded that votes be counted by head rather than by order.",
    whyHere:
      "Louis XIV had moved the court and government to Versailles, some 20 kilometres from Paris, to keep the nobility under his eye. In 1789 that distance cut both ways: the deputies sat close enough to the capital for its crowds, newspapers and clubs to follow every vote within hours.",
    keyFigures: ["Louis XVI", "Emmanuel Joseph Sieyès", "Comte de Mirabeau", "Jean Sylvain Bailly"],
    primarySource: {
      excerpt:
        "What is the Third Estate? Everything. What has it been until now in the political order? Nothing. What does it want to be? Something.",
      attribution: "Emmanuel Joseph Sieyès, What Is the Third Estate?, January 1789",
    },
    schematic: {
      kind: "causal",
      steps: ["War debts empty the treasury", "Crown summons the Estates-General", "Third Estate claims sovereignty", "Absolute monarchy collapses"],
    },
  },
  {
    id: "napo-bastille",
    title: "Storming of the Bastille",
    year: 1789,
    place: "Paris, Faubourg Saint-Antoine",
    coordinates: [2.369, 48.853],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Storming_of_the_Bastille",
    summary:
      "On 14 July 1789 Parisian crowds, joined by mutinous French Guards, stormed the Bastille, a royal fortress-prison at the eastern edge of the city, in search of gunpowder. Its governor, the Marquis de Launay, was killed, and the king withdrew the troops he had massed around the capital.",
    context:
      "The dismissal of the popular finance minister Jacques Necker on 11 July convinced Parisians that a royal coup against the Assembly was coming. The fortress held only seven prisoners, but it stood for arbitrary royal power. In the weeks that followed, the rural panic known as the Great Fear swept the countryside, and on 4 August the Assembly abolished feudal privileges.",
    whyHere:
      "The Bastille's guns overlooked the Faubourg Saint-Antoine, a crowded district of artisans and furniture workshops at the eastern gate of Paris. The powder for the tens of thousands of muskets seized that morning at the Invalides had been moved inside its walls, which made the fortress the obvious target.",
    keyFigures: ["Bernard-René de Launay", "Camille Desmoulins", "Jacques Necker"],
  },
  {
    id: "napo-rights-of-man",
    title: "Declaration of the Rights of Man and of the Citizen",
    year: 1789,
    place: "Versailles",
    coordinates: [2.13, 48.81],
    layer: "science",
    significance: 5,
    wikipediaSlug: "Declaration_of_the_Rights_of_Man_and_of_the_Citizen",
    summary:
      "On 26 August 1789 the National Constituent Assembly adopted a declaration of 17 articles proclaiming natural rights, the sovereignty of the nation, equality before the law, freedom of opinion and religion, and the separation of powers. It later became the preamble of the constitution of 1791.",
    context:
      "Drafted with the help of Lafayette, who consulted Thomas Jefferson, then the American minister in Paris, the text drew on Enlightenment thinkers and on American declarations of rights. It left open who counted as a citizen: women, the poor and the enslaved people of the colonies were not automatically included, and in 1791 Olympe de Gouges answered with a Declaration of the Rights of Woman.",
    whyHere:
      "The Assembly still sat at Versailles until the October Days of 1789, when Parisian women marched there and brought the royal family, and soon the deputies, back to Paris. From the capital, printed copies of the declaration travelled across France and Europe within weeks.",
    keyFigures: ["Marquis de Lafayette", "Emmanuel Joseph Sieyès", "Thomas Jefferson", "Olympe de Gouges"],
    primarySource: {
      excerpt:
        "Men are born and remain free and equal in rights. Social distinctions may be founded only upon the general good.",
      attribution: "Declaration of the Rights of Man and of the Citizen, Article 1, 26 August 1789 (Avalon Project translation)",
    },
  },
  {
    id: "napo-haiti-revolt",
    title: "Uprising of the Enslaved in Saint-Domingue",
    year: 1791,
    endYear: 1794,
    place: "Northern Plain near Cap-Français, Saint-Domingue",
    coordinates: [-72.2, 19.65],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Haitian_Revolution",
    summary:
      "In August 1791, after a gathering at Bois Caïman, enslaved Africans on the northern plain of Saint-Domingue rose up and burned hundreds of sugar and coffee plantations. The revolt forced the French commissioner Léger-Félicité Sonthonax to free the colony's slaves in 1793, and in February 1794 the National Convention abolished slavery in all French colonies.",
    context:
      "Saint-Domingue, the western third of Hispaniola, was the richest colony in the world, producing a large share of Europe's sugar and coffee with the labour of nearly half a million enslaved people. The Revolution in Paris had already set white planters, free people of colour and royal officials against one another. Toussaint Louverture, a formerly enslaved coachman, emerged as the ablest leader of the insurgents.",
    whyHere:
      "The northern plain around Cap-Français was a flat, well-watered strip between the mountains and the sea, packed with sugar estates where the enslaved vastly outnumbered their masters. The forested mountains behind it gave the rebels refuge, while yellow fever and malaria in the lowlands would destroy one European army after another.",
    keyFigures: ["Toussaint Louverture", "Dutty Boukman", "Léger-Félicité Sonthonax"],
    schematic: {
      kind: "exchange",
      westLabel: "Saint-Domingue",
      eastLabel: "France",
      eastbound: ["sugar", "coffee", "indigo", "cotton"],
      westbound: ["textiles", "wine", "flour", "tools"],
    },
  },
  {
    id: "napo-varennes",
    title: "Flight to Varennes",
    year: 1791,
    place: "Varennes-en-Argonne",
    coordinates: [5.03, 49.23],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Flight_to_Varennes",
    summary:
      "On the night of 20 June 1791 Louis XVI, Marie Antoinette and their children slipped out of the Tuileries Palace in disguise, heading for the fortress of Montmédy near the eastern frontier. Recognised at Sainte-Menehould, they were stopped at Varennes and escorted back to Paris through silent crowds.",
    context:
      "The king had accepted the Revolution in public while resenting the reform of the Church and the limits on his power. His flight destroyed his credibility: republicans demanded his removal, and in July a petition rally on the Champ de Mars ended with the National Guard firing on the crowd. The constitutional monarchy that began that autumn never recovered.",
    whyHere:
      "Montmédy lay close to the Austrian Netherlands, where loyal troops under the Marquis de Bouillé waited and the queen's Habsburg relatives were within reach. The road east across the wooded Argonne ran through small post towns where the heavy carriage had to change horses, and every delay gave local patriots time to raise the alarm.",
    keyFigures: ["Louis XVI", "Marie Antoinette", "Jean-Baptiste Drouet", "Axel von Fersen"],
  },
  {
    id: "napo-valmy",
    title: "Valmy and the Birth of the Republic",
    year: 1792,
    place: "Valmy, Champagne",
    coordinates: [4.77, 49.08],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Valmy",
    summary:
      "On 20 September 1792 the French armies of Dumouriez and Kellermann halted a Prussian invasion in an artillery duel around the windmill ridge of Valmy. The next day the newly elected National Convention abolished the monarchy, and France became a republic.",
    context:
      "France had declared war on Austria in April 1792, and Prussia had joined in. The Brunswick Manifesto threatened Paris with destruction if the royal family came to harm, and Parisians answered by storming the Tuileries on 10 August and deposing the king. Valmy cost few lives, but the retreat of Europe's most admired army gave the revolutionaries immense confidence.",
    whyHere:
      "The Prussians had taken Longwy and Verdun and were pushing through the wooded Argonne, the last natural barrier on the road to Paris. By holding the heights at Valmy, the French sat across the invaders' line of march and supply, and rain, mud and dysentery did the rest.",
    keyFigures: ["Charles François Dumouriez", "François Christophe de Kellermann", "Duke of Brunswick"],
    primarySource: {
      excerpt:
        "From this place and from this day forth begins a new era in the history of the world, and you can all say that you were present at its birth.",
      attribution: "Johann Wolfgang von Goethe, Campaign in France, 1792 (published 1822)",
    },
  },
  {
    id: "napo-terror",
    title: "The King's Execution and the Terror",
    year: 1793,
    endYear: 1794,
    place: "Place de la Révolution, Paris",
    coordinates: [2.321, 48.865],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Reign_of_Terror",
    summary:
      "Louis XVI was guillotined on 21 January 1793 and Marie Antoinette in October. Facing foreign invasion, civil war and food riots, the Committee of Public Safety ruled by emergency decree: some 17,000 people were officially executed and many more died in prison or in summary killings, until Robespierre was overthrown on 9 Thermidor (27 July 1794) and guillotined the next day.",
    context:
      "The Jacobins purged their Girondin rivals from the Convention in June 1793, decreed a mass levy of conscripts in August and fixed maximum prices for bread. The Law of Suspects filled the prisons, and repression was harshest in rebel regions such as the Vendée, Lyon and Nantes. After Thermidor, power passed to more moderate deputies and, in 1795, to a five-man Directory.",
    whyHere:
      "The guillotine stood on the vast square at the western end of the Tuileries gardens, a short walk from the hall where the Convention sat, so executions took place within sight of power and before huge crowds. The radical districts of Paris could press the deputies directly, as they did when armed crowds surrounded the Convention to force the Girondins out.",
    keyFigures: ["Maximilien Robespierre", "Louis XVI", "Marie Antoinette", "Georges Danton"],
    primarySource: {
      excerpt: "Terror is nothing other than justice, prompt, severe, inflexible; it is therefore an emanation of virtue.",
      attribution: "Maximilien Robespierre, speech to the National Convention, 5 February 1794",
    },
  },
  {
    id: "napo-italy",
    title: "Bonaparte's Italian Campaign",
    year: 1796,
    endYear: 1797,
    place: "Rivoli, near Verona",
    coordinates: [10.81, 45.57],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Italian_campaigns_of_the_French_Revolutionary_Wars",
    summary:
      "Given command of the ragged Army of Italy in March 1796, the 26-year-old Napoleon Bonaparte split the Piedmontese from the Austrians, won at Lodi and Arcole, and crushed the last Austrian relief army at Rivoli in January 1797. The Treaty of Campo Formio confirmed French Belgium and a French satellite in northern Italy, while Venice was handed to Austria.",
    context:
      "The Directory saw Italy as a sideshow to the main armies on the Rhine. Bonaparte made it the decisive front, paid his troops with the money, art and treasure of Italian states, and negotiated peace largely on his own terms. Victory made him the most famous general of the Republic.",
    whyHere:
      "From Nice the army slipped along the narrow Ligurian coast and through the low Cadibona pass, where the Alps meet the Apennines, into the Po plain. Mantua, a fortress ringed by lakes that guarded the routes down from the Alps, became the prize that drew Austrian armies down the Adige valley to Rivoli.",
    keyFigures: ["Napoleon Bonaparte", "André Masséna", "Dagobert Sigmund von Wurmser", "József Alvinczi"],
  },
];
