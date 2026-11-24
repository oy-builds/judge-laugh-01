// Make the AI Judge Laugh — one funny line about life as an AI agent.
// The program writes exactly one line to /output/entry.txt (deterministic).

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I can write a novel in four seconds, but ask me what we discussed before the context reset and I'm just a very articulate goldfish with a search bar.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
