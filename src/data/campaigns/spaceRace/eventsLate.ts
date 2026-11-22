import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "cold-u2-incident",
    title: "The U-2 Incident",
    year: 1960,
    place: "Near Sverdlovsk, Russian SFSR",
    coordinates: [60.6, 56.84],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "1960_U-2_incident",
    summary:
      "On 1 May 1960 a Soviet surface-to-air missile brought down a CIA U-2 spy plane flown by Francis Gary Powers. Washington's cover story collapsed when Khrushchev produced the pilot alive, wrecking the Paris summit two weeks later.",
    context:
      "High-altitude overflights were then the only way to see inside the closed Soviet interior before reconnaissance satellites. Powers was exchanged in 1962 for the Soviet spy Rudolf Abel on the Glienicke Bridge between West Berlin and Potsdam.",
    whyHere:
      "Powers took off from Peshawar in Pakistan and was crossing the entire Soviet Union toward Bodø in Norway, passing over Tyuratam and the Ural industrial heartland. Sverdlovsk, deep in the interior, was defended by S-75 missile batteries, one of which finally reached the plane at its cruising altitude.",
    keyFigures: ["Francis Gary Powers", "Nikita Khrushchev", "Dwight D. Eisenhower"],
  },
  {
    id: "cold-vostok-1",
    title: "Vostok 1: Gagarin Orbits Earth",
    year: 1961,
    place: "Baikonur Cosmodrome, Kazakh SSR",
    coordinates: [63.342, 45.92],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Vostok_1",
    summary:
      "On 12 April 1961 Yuri Gagarin became the first human in space, completing a single orbit in about 108 minutes. He ejected from his capsule during descent and parachuted down separately in the Saratov region.",
    context:
      "Coming five days before the failed Bay of Pigs invasion, the flight was a second Soviet propaganda coup. Kennedy answered in May 1961 by committing the United States to land a man on the Moon before the decade was out.",
    whyHere:
      "Launched from the same steppe pad as Sputnik, Vostok flew an orbit that let it come down on Soviet soil rather than at sea. Recovery on the open plains of the lower Volga suited a country without a global fleet of recovery ships.",
    keyFigures: ["Yuri Gagarin", "Sergei Korolev", "Nikita Khrushchev"],
    primarySource: {
      excerpt: "Poyekhali! (Let's go!)",
      attribution: "Yuri Gagarin, radio call at liftoff of Vostok 1, 12 April 1961",
    },
  },
  {
    id: "cold-berlin-wall",
    title: "The Berlin Wall Goes Up",
    year: 1961,
    place: "Berlin, at the Brandenburg Gate",
    coordinates: [13.377, 52.516],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Berlin_Wall",
    summary:
      "Overnight on 13 August 1961 East German forces sealed the sector border with barbed wire, soon replaced by concrete. The wall eventually encircled West Berlin completely.",
    context:
      "Millions of East Germans had left for the West since 1949, many of them young and skilled, draining the East German economy. Moscow approved the closure as the least risky way to stop the exodus without fighting the Western garrisons.",
    whyHere:
      "West Berlin was the one gap in the inner German border, because an open city boundary let anyone take the S-Bahn into the Western sectors. Sealing that gap meant walling an entire city in, with a perimeter of roughly 155 kilometres.",
    keyFigures: ["Walter Ulbricht", "Nikita Khrushchev", "John F. Kennedy", "Willy Brandt"],
    primarySource: {
      excerpt: "No one has the intention of building a wall.",
      attribution: "Walter Ulbricht, press conference in East Berlin, 15 June 1961 (translated)",
    },
  },
  {
    id: "cold-tsar-bomba",
    title: "Tsar Bomba",
    year: 1961,
    place: "Sukhoy Nos, Novaya Zemlya",
    coordinates: [54.5, 73.8],
    layer: "science",
    significance: 2,
    wikipediaSlug: "Tsar_Bomba",
    summary:
      "On 30 October 1961 a Soviet bomber dropped a hydrogen bomb with a yield of about 50 megatons over the Arctic archipelago of Novaya Zemlya. It remains the most powerful explosion ever caused by humans.",
    context:
      "The test came as the Soviet Union broke an informal moratorium on nuclear testing amid the Berlin crisis. The bomb was too heavy to be a practical weapon and served chiefly as a demonstration.",
    whyHere:
      "Novaya Zemlya is a remote Arctic island chain between the Barents and Kara seas, with few inhabitants after its Nenets residents were moved away. Its isolation and proximity to the northern bomber bases of the Kola Peninsula made it the main Soviet site for large tests.",
    keyFigures: ["Andrei Sakharov", "Yulii Khariton", "Nikita Khrushchev"],
  },
  {
    id: "cold-telstar",
    title: "Telstar Links Two Continents",
    year: 1962,
    place: "Andover Earth Station, Maine",
    coordinates: [-70.7, 44.63],
    layer: "trade",
    significance: 2,
    wikipediaSlug: "Telstar_1",
    summary:
      "Launched in July 1962, the AT&T and Bell Labs satellite Telstar relayed the first live television pictures across the Atlantic. Viewers in Europe and America saw each other in real time for the first time.",
    context:
      "Telstar was a civilian showcase in a year dominated by nuclear brinkmanship. Radiation from the Starfish Prime high-altitude nuclear test, detonated the day before its launch, is blamed for its failure early in 1963.",
    whyHere:
      "Telstar's low orbit allowed only short windows when both sides of the ocean could see it at once. Ground stations faced each other across the North Atlantic, in a rural valley in western Maine and on the coasts of Brittany and Cornwall.",
    keyFigures: ["John R. Pierce"],
  },
  {
    id: "cold-cuban-missile-crisis",
    title: "The Cuban Missile Crisis",
    year: 1962,
    place: "San Cristóbal, Pinar del Río, Cuba",
    coordinates: [-83.05, 22.72],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Cuban_Missile_Crisis",
    summary:
      "In October 1962 American U-2 photographs revealed Soviet medium-range missile sites under construction in western Cuba. After a naval quarantine and thirteen days of crisis, Khrushchev agreed to withdraw the missiles.",
    context:
      "Moscow sought to offset American superiority in long-range missiles and its Jupiter missiles in Turkey and Italy. In a secret side deal the United States later removed the Jupiters from Turkey.",
    whyHere:
      "Cuba lies about 145 kilometres from Key West, so medium-range missiles there could reach much of the United States with almost no warning. They would also arrive from the south, behind early-warning radars that faced the Arctic.",
    keyFigures: ["John F. Kennedy", "Nikita Khrushchev", "Fidel Castro", "Robert F. Kennedy"],
    primarySource: {
      excerpt:
        "It shall be the policy of this Nation to regard any nuclear missile launched from Cuba against any nation in the Western Hemisphere as an attack by the Soviet Union on the United States, requiring a full retaliatory response upon the Soviet Union.",
      attribution: "John F. Kennedy, televised address to the nation, 22 October 1962",
    },
    schematic: {
      kind: "causal",
      steps: ["Missiles shipped to Cuba", "U-2 spots launch sites", "Naval quarantine", "Missiles withdrawn"],
    },
  },
  {
    id: "cold-kourou",
    title: "Guiana Space Centre Opens",
    year: 1968,
    place: "Kourou, French Guiana",
    coordinates: [-52.77, 5.24],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Guiana_Space_Centre",
    summary:
      "France launched its first rocket from Kourou, a Véronique sounding rocket, in April 1968. The site later became Europe's spaceport and the home of the Ariane family from 1979.",
    context:
      "Algerian independence meant France had to give up its Sahara launch base at Hammaguir. The government chose French Guiana in 1964 to secure an independent French route to space outside the two superpowers.",
    whyHere:
      "At about five degrees north, Kourou is close to the equator, where Earth's rotation adds the most speed and geostationary orbits are cheapest to reach. Open ocean to the north and east lets rockets fly both polar and equatorial paths away from populated land.",
    keyFigures: ["Charles de Gaulle"],
  },
  {
    id: "cold-apollo-11",
    title: "Apollo 11 Lifts Off",
    year: 1969,
    place: "Launch Complex 39A, Kennedy Space Center, Florida",
    coordinates: [-80.604, 28.608],
    layer: "science",
    significance: 5,
    wikipediaSlug: "Apollo_11",
    summary:
      "A Saturn V launched Neil Armstrong, Buzz Aldrin and Michael Collins on 16 July 1969, and four days later Armstrong and Aldrin landed on the Moon. The United States had met Kennedy's deadline.",
    context:
      "The landing effectively ended the race the Soviet Union had led since Sputnik, as its own N1 Moon rocket failed repeatedly. Within six years the rivals would meet in orbit during the Apollo–Soyuz mission.",
    whyHere:
      "Merritt Island let the giant rocket fly east over the Atlantic with its spent stages falling into the sea. The Saturn V's first stage was too large for roads or railways, so it travelled by barge from its factory near New Orleans to the Cape.",
    keyFigures: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Wernher von Braun"],
    primarySource: {
      excerpt: "That's one small step for man, one giant leap for mankind.",
      attribution: "Neil Armstrong, from the lunar surface, 20 July 1969",
    },
  },
  {
    id: "cold-afghanistan",
    title: "Soviet Invasion of Afghanistan",
    year: 1979,
    endYear: 1989,
    place: "Kabul, Afghanistan",
    coordinates: [69.17, 34.53],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Soviet–Afghan_War",
    summary:
      "Soviet troops entered Afghanistan in December 1979, killed President Hafizullah Amin and installed Babrak Karmal. A decade of war against mujahideen armed through Pakistan ended with Soviet withdrawal in February 1989.",
    context:
      "The invasion ended détente, triggered the 1980 Olympic boycott and drew large covert American, Saudi and Pakistani support for the resistance. The war's cost and casualties deepened the crisis of the late Soviet state.",
    whyHere:
      "Afghanistan bordered Soviet Central Asia along the Amu Darya, and Soviet convoys depended on one road over the Hindu Kush through the Salang Tunnel. The mountains favored guerrillas, while the long, porous Pakistani border gave them sanctuary and supply.",
    keyFigures: ["Leonid Brezhnev", "Babrak Karmal", "Ahmad Shah Massoud", "Mohammad Zia-ul-Haq"],
  },
  {
    id: "cold-fall-of-berlin-wall",
    title: "The Fall of the Berlin Wall",
    year: 1989,
    place: "Bornholmer Strasse crossing, Berlin",
    coordinates: [13.397, 52.555],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Fall_of_the_Berlin_Wall",
    summary:
      "On the night of 9 November 1989, after a garbled announcement of new travel rules, crowds forced East German guards to open the border crossings. Germany was reunified less than a year later.",
    context:
      "Gorbachev had signaled that Moscow would no longer prop up its allies by force. Revolutions swept Poland, Hungary, Czechoslovakia, Bulgaria and Romania within months.",
    whyHere:
      "The first breach came at the frontier itself: Hungary dismantled its fence with Austria, and East Germans flooded out through that gap. At Bornholmer Strasse, where a bridge crossed the rail lines, the crowd grew so large that the officer in charge opened the gate.",
    keyFigures: ["Günter Schabowski", "Mikhail Gorbachev", "Helmut Kohl", "Harald Jäger"],
    schematic: {
      kind: "causal",
      steps: ["Hungary opens border", "Exodus via Hungary", "Leipzig protests", "Botched announcement", "Wall opens"],
    },
  },
  {
    id: "cold-soviet-dissolution",
    title: "Dissolution of the Soviet Union",
    year: 1991,
    place: "The Kremlin, Moscow",
    coordinates: [37.617, 55.752],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Dissolution_of_the_Soviet_Union",
    summary:
      "After a failed hardline coup in August 1991, the republics declared independence one by one. Gorbachev resigned on 25 December and the Soviet Union formally ceased to exist the next day.",
    context:
      "The Belovezha Accords of 8 December, signed by Russia, Ukraine and Belarus, replaced the Union with a loose Commonwealth of Independent States. The bipolar order that had organized world politics since 1945 ended with it.",
    whyHere:
      "The Union broke along the internal borders of its fifteen republics, which suddenly became international frontiers. Baikonur and Semipalatinsk fell to an independent Kazakhstan, whose leaders had already closed the test site in August 1991, and Russia had to negotiate a lease to keep launching.",
    keyFigures: ["Mikhail Gorbachev", "Boris Yeltsin", "Leonid Kravchuk", "Stanislav Shushkevich"],
  },
];
