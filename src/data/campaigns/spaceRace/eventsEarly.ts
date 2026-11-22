import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "cold-trinity-test",
    title: "Trinity: The First Nuclear Explosion",
    year: 1945,
    place: "Jornada del Muerto desert, New Mexico",
    coordinates: [-106.475, 33.677],
    layer: "science",
    significance: 5,
    wikipediaSlug: "Trinity_(nuclear_test)",
    summary:
      "On 16 July 1945 the Manhattan Project detonated a plutonium implosion device on a steel tower in the New Mexico desert. It proved the design used on Nagasaki weeks later and opened the nuclear age.",
    context:
      "The United States briefly held a nuclear monopoly that shaped its postwar diplomacy toward the Soviet Union. Soviet intelligence already had sources inside the project, and Stalin pressed his own bomb program forward after Hiroshima.",
    whyHere:
      "The Jornada del Muerto is a flat, nearly waterless basin inside the Alamogordo Bombing Range, a long drive south of the Los Alamos laboratory. Its emptiness promised secrecy and a buffer from towns, though fallout still drifted over ranches downwind.",
    keyFigures: ["J. Robert Oppenheimer", "Leslie Groves", "Kenneth Bainbridge"],
    primarySource: {
      excerpt:
        "We knew the world would not be the same. A few people laughed, a few people cried, most people were silent.",
      attribution: "J. Robert Oppenheimer, NBC documentary The Decision to Drop the Bomb (1965)",
    },
  },
  {
    id: "cold-operation-paperclip",
    title: "Operation Paperclip",
    year: 1945,
    endYear: 1959,
    place: "Nordhausen, Germany, to White Sands, New Mexico",
    coordinates: [10.79, 51.5],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Operation_Paperclip",
    summary:
      "The United States brought more than 1,600 German scientists and engineers across the Atlantic, led by Wernher von Braun's V-2 rocket team. Captured V-2s and their designers launched America's missile program at White Sands.",
    context:
      "Both victors raced to harvest German technology; the Soviet Union deported its own cohort of specialists in Operation Osoaviakhim in 1946. The Peenemünde rocketeers later built the Redstone and Saturn rockets in Huntsville, Alabama.",
    whyHere:
      "The V-2 factory lay in tunnels under the Kohnstein hill near Nordhausen, inside territory promised to the Soviet occupation zone. American teams stripped parts for about a hundred rockets and shipped them out before handing Thuringia over in July 1945.",
    keyFigures: ["Wernher von Braun", "Walter Dornberger", "Arthur Rudolph"],
    schematic: {
      kind: "exchange",
      westLabel: "United States",
      eastLabel: "Occupied Germany",
      eastbound: ["Interrogation teams", "Work contracts", "Security clearances"],
      westbound: ["V-2 components", "Rocket engineers", "Technical archives", "Wind-tunnel equipment"],
    },
  },
  {
    id: "cold-berlin-airlift",
    title: "The Berlin Airlift",
    year: 1948,
    endYear: 1949,
    place: "Tempelhof Airport, West Berlin",
    coordinates: [13.4, 52.473],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Berlin_Blockade",
    summary:
      "When the Soviet Union cut road, rail and canal access to West Berlin in June 1948, American and British aircraft supplied the city's two million people by air for nearly a year. Moscow lifted the blockade in May 1949.",
    context:
      "The crisis was triggered by the new Deutsche Mark in the Western zones and hardened the division of Germany into two states in 1949. It also convinced Western Europe that it needed a binding American security guarantee.",
    whyHere:
      "West Berlin sat about 160 kilometres inside the Soviet zone, an island with no written guarantee of surface access. The only access put in writing was three 20-mile-wide air corridors from Hamburg, Hanover and Frankfurt, and the Allies used exactly those.",
    keyFigures: ["Lucius D. Clay", "William H. Tunner", "Ernst Reuter", "Gail Halvorsen"],
    primarySource: {
      excerpt:
        "You peoples of the world, you peoples of America, of England, of France, of Italy! Look upon this city and recognize that you should not and cannot abandon this city and this people!",
      attribution: "Ernst Reuter, speech before the Reichstag ruins, Berlin, 9 September 1948 (translated)",
    },
    schematic: {
      kind: "causal",
      steps: ["New Deutsche Mark", "Soviets cut land routes", "Airlift via corridors", "Blockade lifted in 1949"],
    },
  },
  {
    id: "cold-nato-founded",
    title: "The North Atlantic Treaty",
    year: 1949,
    place: "Washington, D.C.",
    coordinates: [-77.036, 38.895],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "North_Atlantic_Treaty",
    summary:
      "Twelve nations signed the North Atlantic Treaty on 4 April 1949, pledging collective defense. It committed the United States to a peacetime alliance in Europe for the first time.",
    context:
      "The Prague coup of 1948 and the Berlin blockade made Soviet pressure feel immediate in Western capitals. Greece and Turkey joined in 1952 and West Germany in 1955, prompting the Warsaw Pact in response.",
    whyHere:
      "The alliance was built around the Atlantic as an inner sea. Small founding members like Iceland, Portugal and Denmark mattered because of Iceland, the Azores and Greenland, the island stepping-stones for convoys, bombers and anti-submarine patrols.",
    keyFigures: ["Harry S. Truman", "Dean Acheson", "Ernest Bevin"],
    primarySource: {
      excerpt:
        "The Parties agree that an armed attack against one or more of them in Europe or North America shall be considered an attack against them all.",
      attribution: "North Atlantic Treaty, Article 5, signed in Washington, 4 April 1949",
    },
  },
  {
    id: "cold-first-soviet-test",
    title: "First Soviet Atomic Bomb",
    year: 1949,
    place: "Semipalatinsk Test Site, Kazakh SSR",
    coordinates: [77.81, 50.44],
    layer: "science",
    significance: 4,
    wikipediaSlug: "RDS-1",
    summary:
      "On 29 August 1949 the Soviet Union tested RDS-1, a plutonium bomb closely modeled on the American Trinity design. American air sampling flights detected the fallout within days.",
    context:
      "The test ended the American monopoly years earlier than Washington expected and spurred the decision to build the hydrogen bomb. Espionage from Los Alamos had shortened the Soviet path considerably.",
    whyHere:
      "The site sat on open Kazakh steppe near the Irtysh River, thousands of kilometres from Soviet frontiers facing NATO and served by the Turkestan-Siberia Railway. Planners treated the steppe as empty, but villages nearby absorbed fallout from hundreds of tests until 1989.",
    keyFigures: ["Igor Kurchatov", "Lavrentiy Beria", "Yulii Khariton"],
  },
  {
    id: "cold-korean-war",
    title: "The Korean War",
    year: 1950,
    endYear: 1953,
    place: "Korean Peninsula",
    coordinates: [126.98, 37.57],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Korean_War",
    summary:
      "North Korea invaded the South in June 1950, and a United Nations force led by the United States fought back. Chinese intervention produced a stalemate, and the 1953 armistice left the line near the 38th parallel.",
    context:
      "Korea had been split in 1945 along a parallel picked by two American officers as an occupation boundary. The war globalized containment, sent American defense spending soaring and turned the Taiwan Strait into a Cold War frontier.",
    whyHere:
      "The peninsula is a land bridge between China, Russia and Japan, and the Yalu River marks where Chinese armies could cross from Manchuria. The surprise landing at Incheon exploited a deep tidal harbor close behind the front.",
    keyFigures: ["Kim Il Sung", "Syngman Rhee", "Douglas MacArthur", "Peng Dehuai"],
    schematic: {
      kind: "causal",
      steps: ["Split at 38th parallel", "North invades", "Incheon landing", "China crosses Yalu", "1953 armistice"],
    },
  },
  {
    id: "cold-bandung-conference",
    title: "The Bandung Conference",
    year: 1955,
    place: "Bandung, Java, Indonesia",
    coordinates: [107.61, -6.91],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Bandung_Conference",
    summary:
      "Representatives of 29 Asian and African countries met in Bandung in April 1955 to oppose colonialism and assert independence from both blocs. The meeting laid groundwork for the Non-Aligned Movement founded in Belgrade in 1961.",
    context:
      "Decolonization was adding new states faster than either superpower could absorb them into alliances. Leaders like Nehru, Sukarno, Nasser and Zhou Enlai used Bandung to claim a voice for the postcolonial world.",
    whyHere:
      "Indonesia straddles the sea lanes between the Indian and Pacific oceans and had just fought its way out of Dutch rule. Bandung, a cool highland city on the Parahyangan plateau, offered colonial-era meeting halls away from the heat of the coast.",
    keyFigures: ["Sukarno", "Jawaharlal Nehru", "Zhou Enlai", "Gamal Abdel Nasser"],
  },
  {
    id: "cold-dew-line",
    title: "The Distant Early Warning Line",
    year: 1957,
    place: "Canadian Arctic, near Cambridge Bay",
    coordinates: [-105.06, 69.12],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Distant_Early_Warning_Line",
    summary:
      "A chain of radar stations strung across Arctic Alaska and Canada, roughly along the 69th parallel, became operational in 1957. It was built to detect Soviet bombers approaching North America over the pole.",
    context:
      "The United States and Canada agreed to build the line in 1954 and constructed it in remote tundra in under three years. It was extended to Greenland and later replaced by the North Warning System.",
    whyHere:
      "On a globe, the shortest path from Soviet airfields to American cities runs over the Arctic Ocean, not across the Atlantic. A fence of radars along the Arctic coast gave warning far north of the populated south, while sea ice and short summers made building it a feat of logistics.",
    keyFigures: ["Dwight D. Eisenhower", "Louis St. Laurent"],
  },
  {
    id: "cold-sputnik",
    title: "Sputnik 1",
    year: 1957,
    place: "Tyuratam (Baikonur), Kazakh SSR",
    coordinates: [63.342, 45.92],
    layer: "science",
    significance: 5,
    wikipediaSlug: "Sputnik_1",
    summary:
      "On 4 October 1957 an R-7 rocket put the first artificial satellite into orbit, a polished sphere whose radio beeps could be heard worldwide. The Space Age began as a Soviet triumph.",
    context:
      "The R-7 had been designed as an intercontinental ballistic missile, so Sputnik showed that Moscow could reach American soil. The shock led to NASA, new science education funding and an accelerated American missile program.",
    whyHere:
      "Tyuratam lies on flat steppe beside the Syr Darya and the Moscow-Tashkent railway, far from borders and foreign observation. Its relatively southern latitude for Soviet territory and the empty land downrange to the east, where spent stages fall, made it ideal; the name Baikonur was borrowed from a distant mining town.",
    keyFigures: ["Sergei Korolev", "Nikita Khrushchev", "Mikhail Tikhonravov"],
    schematic: {
      kind: "causal",
      steps: ["R-7 built for warheads", "Sputnik reaches orbit", "Fear of a missile gap", "NASA founded in 1958"],
    },
  },
  {
    id: "cold-explorer-1",
    title: "Explorer 1 and the Van Allen Belts",
    year: 1958,
    place: "Cape Canaveral, Florida",
    coordinates: [-80.57, 28.44],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Explorer_1",
    summary:
      "The first American satellite was launched on a Jupiter-C rocket built by von Braun's Army team at the end of January 1958. James Van Allen's instruments aboard revealed belts of trapped radiation encircling Earth.",
    context:
      "After the televised failure of the Navy's Vanguard rocket, Explorer 1 restored some American prestige. Months later, Congress created NASA, which absorbed the old NACA laboratories and in 1960 the Huntsville rocket team.",
    whyHere:
      "Cape Canaveral juts into the Atlantic at about 28.5 degrees north, so rockets launch east over open ocean and gain extra speed from Earth's rotation. A chain of tracking stations on the Bahamas and other Atlantic islands followed each flight downrange.",
    keyFigures: ["Wernher von Braun", "James Van Allen", "William Hayward Pickering"],
  },
];
