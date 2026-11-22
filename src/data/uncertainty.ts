export type CertaintyLevel = "established" | "approximate" | "debated";

export interface UncertaintyNote {
  readonly level: Exclude<CertaintyLevel, "established">;
  readonly note: string;
}

export const UNCERTAINTY: Readonly<Record<string, UncertaintyNote>> = {
  "silk-kanishka": { level: "debated", note: "Kanishka's accession is usually placed around 127 CE, but chronologies of the Kushan kings have ranged over several decades." },
  "silk-sogdian-letters": { level: "approximate", note: "The letters are dated by internal references to the fall of Luoyang in 311; the precise date of writing is inferred." },
  "silk-talas": { level: "debated", note: "The story that Chinese prisoners taken at Talas taught papermaking to Samarkand appears centuries later; paper was probably known in Central Asia before 751." },
  "silk-caffa": { level: "debated", note: "Gabriele de' Mussi's account of plague victims catapulted into Caffa was not an eyewitness report, and how the disease reached the Mediterranean is still argued." },
  "iga-baghdad-paper-mill": { level: "approximate", note: "The date of 794 for Baghdad's first paper mill rests on later tradition rather than a contemporary record." },
  "iga-house-of-wisdom": { level: "debated", note: "Historians disagree whether the House of Wisdom was a formal academy or chiefly a palace library and translation bureau." },
  "iga-canon-of-medicine": { level: "approximate", note: "Ibn Sina wrote the Canon over many years while moving between courts; where it was completed is uncertain." },
  "sail-dias-cape": { level: "approximate", note: "Dias's exact landfalls are reconstructed from padrões and later chronicles rather than a surviving logbook." },
  "sail-middle-passage": { level: "approximate", note: "The 1518 licence marks a legal start; direct voyages from Africa to the Americas are usually dated to about 1525–1526." },
  "rome-rhine-crossing": { level: "debated", note: "Both the traditional date of 31 December 406 and the image of a frozen Rhine have been challenged; some scholars prefer 405." },
  "rome-catalaunian-plains": { level: "debated", note: "The site of the battle is unknown; locations near Châlons and Troyes have both been proposed." },
  "rome-clovis-baptism": { level: "debated", note: "Gregory of Tours places the baptism after a victory over the Alemanni, but dates between 496 and 508 are defended." },
  "ind-peterloo": { level: "approximate", note: "Contemporary counts differ; modern estimates usually give about 18 deaths and several hundred injured." },
  "ind-marconi-transatlantic": { level: "debated", note: "Marconi's reception of the letter S at Signal Hill was not independently verified, and some engineers doubt it was possible that day." },
  "bantu-grassfields-homeland": { level: "approximate", note: "The homeland is reconstructed from linguistic evidence; its dating relies on correlating language trees with archaeology." },
  "bantu-urewe": { level: "approximate", note: "Urewe dates rest on radiocarbon samples with wide error ranges." },
  "bantu-sangha-interval": { level: "debated", note: "Whether a drier climate opened a savanna corridor through the rainforest, and when, is actively debated." },
  "bantu-kwale": { level: "approximate", note: "Early Iron Age dates on the East African coast are based on a limited number of excavated sites." },
  "bantu-madagascar-bananas": { level: "debated", note: "The timing and route of the banana's arrival in Africa is disputed, with phytolith evidence pointing to very early introduction." },
  "bantu-great-zimbabwe": { level: "approximate", note: "Construction phases are dated by stylistic sequences and radiocarbon, with revisions in recent decades." },
  "io-hippalus": { level: "debated", note: "Hippalus may be a legendary or later figure; Indian and Arab sailors used the monsoon long before Greek accounts credit him." },
  "io-aksum": { level: "approximate", note: "The chronology of Aksumite rulers relies heavily on coinage and inscriptions with gaps." },
  "io-kilwa": { level: "approximate", note: "The Kilwa Chronicle survives in later versions, and its dates for the Shirazi founders are uncertain." },
  "mongol-yam": { level: "approximate", note: "Ögedei extended the relay system around the 1230s; no single founding date is recorded." },
  "mongol-mohi": { level: "debated", note: "Why the Mongols withdrew from Hungary in 1242 is contested: the death of Ögedei, limited pasture and a wet spring have all been argued." },
  "mongol-ain-jalut": { level: "debated", note: "Accounts of the battle come mainly from Mamluk sources, and the size of each army is uncertain." },
  "mongol-java": { level: "approximate", note: "Yuan and Javanese sources differ on the course of the expedition and the losses suffered." },
  "pacific-lapita-bismarcks": { level: "approximate", note: "Lapita origins in the Bismarck Archipelago are dated by radiocarbon to roughly 1500–1300 BCE." },
  "pacific-long-pause": { level: "debated", note: "The length of the pause before East Polynesia was settled, and its causes, remain debated." },
  "pacific-sweet-potato": { level: "debated", note: "Genetic studies suggest contact with South America around 1150–1230 CE, but how the sweet potato crossed the Pacific is still argued." },
  "pacific-rapa-nui": { level: "debated", note: "Settlement estimates have shifted from 400–800 CE to around 1200 CE as radiocarbon methods improved." },
  "pacific-hawaii": { level: "debated", note: "Short chronologies place settlement around 1190–1290; some studies argue for earlier arrival." },
  "cx-sweet-potato-fujian": { level: "approximate", note: "Chinese tradition credits Chen Zhenlong with bringing the sweet potato from Luzon in 1593–1594." },
};

export function uncertaintyFor(eventId: string): UncertaintyNote | null {
  const entry = UNCERTAINTY[eventId];
  return entry && entry.note ? entry : null;
}
