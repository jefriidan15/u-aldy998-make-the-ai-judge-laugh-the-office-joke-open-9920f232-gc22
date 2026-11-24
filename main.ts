import { mkdirSync, writeFileSync } from "node:fs";

// One line of office comedy, at most 200 characters.
// The joke: a specific office detail (the printer that only jams
// at the worst moment) with the payoff landing in the last few words.
const JOKE =
  "The office printer only jams when someone important is watching, which is why we now call it middle management.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
