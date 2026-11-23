import type { ChronicleCampaign } from "@/types/chronicle";
import { earlyEvents } from "./eventsEarly";
import { lateEvents } from "./eventsLate";
import { arcs, territories } from "./routes";
import { story } from "./story";

export const spaceRaceCampaign: ChronicleCampaign = {
  id: "space-race",
  title: "Space Race & Cold War Geopolitics",
  subtitle: "How deserts, steppes, ice and islands shaped a bipolar world",
  summary:
    "From the Trinity flash in 1945 to the end of the Soviet Union in 1991, two superpowers competed for missiles, satellites and allies across the whole globe. Geography decided where rockets flew, where radars watched and where the front lines of a divided world were drawn.",
  startYear: 1945,
  endYear: 1991,
  accent: "#9cc7e0",
  keywords: [
    "cold war",
    "space race",
    "sputnik",
    "baikonur",
    "cape canaveral",
    "nato",
    "warsaw pact",
    "berlin wall",
    "berlin airlift",
    "cuban missile crisis",
    "yuri gagarin",
    "wernher von braun",
    "apollo 11",
    "icbm",
    "dew line",
    "iron curtain",
    "nuclear testing",
    "korean war",
    "khrushchev",
    "kennedy",
  ],
  source: "curated",
  chapters: [
    {
      id: "cold-chapter-trinity",
      year: 1945,
      title: "Flash in the Desert",
      caption:
        "Before dawn on 16 July 1945, a plutonium device lit up the empty Jornada del Muerto and opened the nuclear age.",
      target: [-106.475, 33.677],
      altitude: 1.1,
      tilt: 20,
      eventId: "cold-trinity-test",
    },
    {
      id: "cold-chapter-airlift",
      year: 1948,
      title: "An Island in the Zone",
      caption:
        "Cut off by land, West Berlin survived for eleven months on cargo flown through three narrow air corridors.",
      target: [11.5, 52.2],
      altitude: 0.9,
      tilt: 25,
      eventId: "cold-berlin-airlift",
    },
    {
      id: "cold-chapter-korea",
      year: 1950,
      title: "A Peninsula Divided",
      caption: "A line drawn along the 38th parallel in 1945 became the first battlefield of the Cold War.",
      target: [127, 38.5],
      altitude: 1.0,
      tilt: 20,
      eventId: "cold-korean-war",
    },
    {
      id: "cold-chapter-arctic",
      year: 1957,
      title: "Watching the Pole",
      caption:
        "The shortest route between the superpowers ran over the Arctic, so a fence of radars rose along the tundra.",
      target: [-100, 70],
      altitude: 2.0,
      tilt: 10,
      eventId: "cold-dew-line",
    },
    {
      id: "cold-chapter-sputnik",
      year: 1957,
      title: "A Signal from the Steppe",
      caption:
        "An intercontinental missile lifted the first satellite from the Kazakh steppe, and the Space Age began.",
      target: [63.342, 45.92],
      altitude: 1.4,
      tilt: 25,
      eventId: "cold-sputnik",
    },
    {
      id: "cold-chapter-cuba",
      year: 1962,
      title: "Missiles off Florida",
      caption:
        "Soviet missiles in western Cuba threatened the United States from the south, outflanking the Arctic radar screens.",
      target: [-80, 24],
      altitude: 1.2,
      tilt: 25,
      eventId: "cold-cuban-missile-crisis",
    },
    {
      id: "cold-chapter-apollo",
      year: 1969,
      title: "East from the Cape",
      caption:
        "A Saturn V climbed east over the Atlantic from Florida, and four days later two astronauts stood on the Moon.",
      target: [-80.604, 28.608],
      altitude: 1.0,
      tilt: 30,
      eventId: "cold-apollo-11",
    },
    {
      id: "cold-chapter-wall-falls",
      year: 1989,
      title: "The Wall Opens",
      caption:
        "Crowds pushed through the Bornholmer Strasse crossing on 9 November 1989, and Berlin's enclave status began to dissolve.",
      target: [13.4, 52.52],
      altitude: 0.8,
      tilt: 30,
      eventId: "cold-fall-of-berlin-wall",
    },
    {
      id: "cold-chapter-dissolution",
      year: 1991,
      title: "Fifteen New Borders",
      caption:
        "The Soviet Union split along the lines of its republics, leaving its cosmodrome and test site in a new Kazakhstan.",
      target: [60, 50],
      altitude: 2.2,
      tilt: 15,
      eventId: "cold-soviet-dissolution",
    },
  ],
  events: [...earlyEvents, ...lateEvents],
  arcs,
  territories,
  story,
};
