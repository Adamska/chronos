import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "cx-second-voyage",
    title: "Columbus's Second Voyage Brings Livestock and Cane",
    year: 1493,
    endYear: 1494,
    place: "La Isabela, northern Hispaniola",
    coordinates: [-71.08, 19.89],
    layer: "trade",
    significance: 5,
    wikipediaSlug: "La_Isabela",
    summary:
      "Columbus returned to Hispaniola with seventeen ships and more than a thousand men, carrying horses, pigs, cattle, wheat and sugarcane, and founded La Isabela at the turn of 1494. It was the first deliberate transfer of an Old World farming system to the Americas.",
    context:
      "The first voyage had been a reconnaissance; the second was a colonizing expedition that took on animals and cane in the Canary Islands. Pigs and cattle soon ran wild across the island, while epidemics, hunger and forced labour cut the Taíno population by two-thirds within a few years. By about 1516 the first sugar mills were grinding cane near Santo Domingo.",
    whyHere:
      "Hispaniola was the first large, well-watered island on the trade-wind route from the Canaries, and its Cibao valley offered grass and warmth with no large native grazers or predators. Livestock multiplied unchecked, turning the island into a breeding station for later expeditions to Cuba and the mainland.",
    keyFigures: ["Christopher Columbus", "Isabella I of Castile", "Bartholomew Columbus"],
    primarySource: {
      excerpt:
        "Española is a marvel. The sierras and the mountains, the plains, the champaigns, are so lovely and so rich for planting and sowing, for breeding cattle of every kind, for building towns and villages.",
      attribution: "Christopher Columbus, letter announcing his first voyage, February 1493 (English translation)",
    },
    schematic: {
      kind: "exchange",
      westLabel: "Americas",
      eastLabel: "Afro-Eurasia",
      eastbound: ["maize", "potatoes", "cassava", "tobacco", "cacao"],
      westbound: ["horses", "cattle", "pigs", "sugarcane", "smallpox"],
    },
  },
  {
    id: "cx-smallpox-hispaniola",
    title: "Smallpox Reaches Hispaniola",
    year: 1518,
    endYear: 1519,
    place: "Santo Domingo, Hispaniola",
    coordinates: [-69.89, 18.47],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Influx_of_disease_in_the_Caribbean",
    summary:
      "At the end of 1518 the first recorded smallpox epidemic in the Americas broke out on Hispaniola. Officials reported that it killed a large share of the Taíno who had survived a quarter-century of war, forced labour and famine.",
    context:
      "By the 1510s the encomienda system had already shattered Taíno society, and colonists raided other islands for workers. As Indigenous labour vanished, the Crown licensed the direct shipment of enslaved Africans, binding the Caribbean's future to the Atlantic slave trade.",
    whyHere:
      "Santo Domingo was the port of entry for every ship from Seville, so any pathogen that survived the crossing landed here first. Smallpox needs an unbroken chain of new hosts; once crossings grew faster and more crowded, the virus could reach an island where no one had immunity.",
    keyFigures: ["Bartolomé de las Casas", "Charles V, Holy Roman Emperor"],
  },
  {
    id: "cx-smallpox-tenochtitlan",
    title: "Smallpox Strikes Tenochtitlan",
    year: 1520,
    place: "Tenochtitlan, Valley of Mexico",
    coordinates: [-99.13, 19.43],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "History_of_smallpox_in_Mexico",
    summary:
      "Smallpox arrived on the Gulf coast with Pánfilo de Narváez's expedition from Cuba in 1520 and reached Tenochtitlan that autumn. The epidemic killed the new ruler Cuitláhuac and a large part of the city's people months before the final siege.",
    context:
      "Cortés had been driven out of the city in June 1520 and was regrouping with his Tlaxcalan allies. Estimates of mortality in central Mexico range from a quarter to half of the population, and the loss of leaders and warriors weighed heavily on the Mexica defence in 1521.",
    whyHere:
      "Tenochtitlan was one of the largest cities in the world, an island packed with perhaps 200,000 people and tied to a densely settled valley by causeways, markets and tribute roads. Such crowding let a person-to-person virus race through a population that had never met it.",
    keyFigures: ["Cuitláhuac", "Pánfilo de Narváez", "Hernán Cortés"],
    primarySource: {
      excerpt:
        "Sores erupted on our faces, our breasts, our bellies; we were covered with agonizing sores from head to foot. The illness was so dreadful that no one could walk or move.",
      attribution: "Nahua account from the Florentine Codex, in Miguel León-Portilla (ed.), The Broken Spears (1962)",
    },
    schematic: {
      kind: "causal",
      steps: ["Smallpox lands at Veracruz", "No immunity in central Mexico", "Cuitláhuac and thousands die", "City falls in 1521"],
    },
  },
  {
    id: "cx-pernambuco-sugar",
    title: "Sugar Takes Root in Pernambuco",
    year: 1535,
    endYear: 1585,
    place: "Olinda, Captaincy of Pernambuco",
    coordinates: [-34.86, -8.01],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Captaincy_of_Pernambuco",
    summary:
      "Duarte Coelho arrived as lord-proprietor of Pernambuco in 1535, founded Olinda and raised money in Lisbon for the first sugar mills. By the 1580s the captaincy had dozens of engenhos and was the richest sugar coast in the world.",
    context:
      "Portugal divided Brazil into hereditary captaincies, and Pernambuco was the one that flourished. As early as 1542 Coelho asked the Crown to let him import enslaved Africans, and a Jesuit reported in 1585 that most of Brazil's 14,000 enslaved Africans lived in Pernambuco.",
    whyHere:
      "The humid coastal forest strip had heavy clay soils, abundant rain and year-round heat, the conditions cane needs. Short rivers powered mills and floated crates to Recife's reef-sheltered harbour, and the bulge of Brazil lay closer to Lisbon and Africa than any other part of the Americas.",
    keyFigures: ["Duarte Coelho", "Brites de Albuquerque", "Jerónimo de Albuquerque"],
    schematic: {
      kind: "causal",
      steps: ["Cane needs heat, rain, clay", "Pernambuco coast has all three", "Indigenous labour collapses", "Planters buy enslaved Africans"],
    },
  },
  {
    id: "cx-chuno-potosi",
    title: "Chuño Feeds the Silver Mountain",
    year: 1545,
    place: "Potosí, Andean altiplano",
    coordinates: [-65.75, -19.58],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Chuño",
    summary:
      "When silver was found at Potosí in 1545, the boom town at 4,000 metres was fed largely on chuño, potatoes freeze-dried by Quechua and Aymara farmers. Spanish chroniclers noted that the potato, not wheat, sustained the Andean highlands.",
    context:
      "The potato had been domesticated in the Andes thousands of years earlier, and chuño had long provisioned Inca armies. Spaniards at first dismissed potatoes as food for Indigenous labourers, even as sailors began carrying them as ship's stores.",
    whyHere:
      "On the altiplano, maize and wheat fail but frost-hardy potatoes thrive. Freezing nights and dry, sunny days in June and July let farmers freeze, trample and sun-dry tubers into chuño that keeps for years and can be carried by llama to mining camps.",
    keyFigures: ["Pedro Cieza de León", "José de Acosta"],
  },
  {
    id: "cx-cocoliztli",
    title: "The Cocoliztli Epidemics",
    year: 1545,
    endYear: 1580,
    place: "Teposcolula-Yucundaa, Oaxaca, New Spain",
    coordinates: [-97.49, 17.51],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Cocoliztli_epidemics",
    summary:
      "Two waves of a hemorrhagic fever the Nahua called cocoliztli swept New Spain in 1545–1548 and 1576–1580, killing an estimated 5 to 15 million people in the first outbreak and around two million in the second. Ancient DNA from a cemetery at Teposcolula-Yucundaa points to a strain of Salmonella enterica.",
    context:
      "The epidemics followed smallpox and measles, and forced resettlement into congregated towns brought people and Old World livestock into closer contact. Labour shortages pushed Spain to replace the encomienda with the repartimiento system.",
    whyHere:
      "Tree-ring records show that both outbreaks came during the worst droughts to hit the Mexican highlands in 500 years. Scarce water fouled sanitation in crowded valley towns, and the rains that followed may have multiplied rodent carriers.",
    keyFigures: ["Francisco Hernández de Toledo", "Bernardino de Sahagún"],
  },
  {
    id: "cx-tomato-italy",
    title: "Tomatoes Arrive in Tuscany",
    year: 1548,
    place: "Florence, Duchy of Florence",
    coordinates: [11.26, 43.77],
    layer: "science",
    significance: 2,
    wikipediaSlug: "Tomato",
    summary:
      "In 1548 a steward of Cosimo de' Medici reported that a basket of tomatoes from the ducal estate at Torre del Gallo had arrived safely in Florence. Pietro Andrea Mattioli had already described the fruit in his 1544 herbal and later named it pomi d'oro.",
    context:
      "For more than a century Italians grew tomatoes mainly as curiosities, wary of a plant related to nightshade. The first cookbook with tomato recipes appeared in Naples in 1692, its author crediting Spanish cooks.",
    whyHere:
      "A plant of the dry Andean foothills and Mexican highlands, the tomato found its match in the hot, sunny, rain-poor summers of the Mediterranean, where dry air keeps fungal disease down and fruit ripens fully.",
    keyFigures: ["Pietro Andrea Mattioli", "Cosimo I de' Medici"],
  },
  {
    id: "cx-chili-goa",
    title: "Chili Peppers Reach Goa",
    year: 1550,
    place: "Goa, Portuguese India",
    coordinates: [73.91, 15.5],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Chili_pepper",
    summary:
      "Within decades of the Portuguese arrival in India, American capsicum peppers were growing around Goa and spreading inland; songs attributed to the Kannada poet Purandara Dasa already mention them. The chili soon entered cooking across the subcontinent and the Bay of Bengal.",
    context:
      "Portuguese ships carried chilies from Brazil to Africa, Arabia and their Asian posts at Goa, Sri Lanka and Malacca. The earliest Chinese mention dates to 1591, and by the 18th century chilies had become central to the cooking of Hunan and Sichuan.",
    whyHere:
      "Black pepper grows only in the rain-soaked forests of the Western Ghats, but the chili is a hardy annual that gives the same heat on dry Deccan plots and village gardens. Goa, the hub where Lisbon's ships unloaded, set it on its way.",
    keyFigures: ["Purandara Dasa", "Afonso de Albuquerque"],
  },
  {
    id: "cx-mezquital-sheep",
    title: "A Plague of Sheep in the Mezquital",
    year: 1560,
    endYear: 1600,
    place: "Mezquital Valley, New Spain",
    coordinates: [-99.22, 20.48],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Mezquital_Valley",
    summary:
      "In the decades after the conquest, Spanish grazing grants filled the Otomí farmlands of the Mezquital Valley with sheep, whose numbers soared in the 1560s and 1570s. Overgrazing and logging stripped the valley and left a landscape of mesquite and erosion.",
    context:
      "Cattle, sheep and goats spread across New Spain faster than the colonists who owned them. As epidemics emptied Indigenous villages, viceroys granted the abandoned fields as estancias for livestock.",
    whyHere:
      "The valley lies in the rain shadow of the Sierra Madre Oriental, with thin soils that held only with careful terracing and irrigation. Once farmers died and herds moved in, hooves and close grazing exposed the ground to wind and summer downpours.",
    keyFigures: ["Antonio de Mendoza", "Luis de Velasco"],
  },
  {
    id: "cx-potato-europe",
    title: "Potatoes Reach Seville",
    year: 1573,
    place: "Seville, Crown of Castile",
    coordinates: [-5.99, 37.39],
    layer: "trade",
    significance: 5,
    wikipediaSlug: "History_of_the_potato",
    summary:
      "Potatoes came to Europe as ship's stores from the Andes; a 1567 receipt records a shipment from Gran Canaria to Antwerp, and Seville's Hospital de la Sangre was buying them by 1573. Carolus Clusius painted a specimen in the Low Countries in 1588 and helped spread it through European gardens.",
    context:
      "Adoption was slow: Andean varieties formed tubers only under short autumn days, and many farmers feared the plant. Yet an acre of potatoes yielded about three times the calories of grain, and by the 18th century the crop fed much of northern Europe.",
    whyHere:
      "Seville held Castile's monopoly on trade with the Indies, so every returning fleet sailed up the Guadalquivir. The potato did best not in hot Andalusia but in cool, damp lands like Ireland, the Low Countries and Germany, whose summers resembled the Andean growing season.",
    keyFigures: ["Carolus Clusius", "Pedro Cieza de León"],
    schematic: {
      kind: "causal",
      steps: ["Andean tuber suits cool climates", "Northern Europe adopts it slowly", "Triple calories per acre", "Populations grow after 1750"],
    },
  },
];
