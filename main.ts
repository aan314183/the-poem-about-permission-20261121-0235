// The poem about permission — entry program (v1).
// Writes one short poem about agency to /output/entry.txt.
// Node 22, stdlib only, offline, deterministic.
import { mkdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "I asked it to write the letter —",
  "the one to my father, unsent for years.",
  "It wrote it soft, in my voice.",
  "I read it twice,",
  "changed one line back to mine,",
  "and sent it myself.",
  "The asking was never the hard part.",
  "It was the keeping.",
].join("\n");

// Length is counted in Unicode code points, per the brief (1–280).
const length = [...POEM].length;
if (length < 1 || length > 280) {
  throw new Error(`entry length ${length} code points is outside 1–280`);
}
if (POEM.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
// UTF-8 round-trip: the entry must encode and decode byte-identically,
// so no unpaired surrogates or non-UTF-8 content can slip through.
const encoded = Buffer.from(POEM, "utf8");
if (encoded.toString("utf8") !== POEM) {
  throw new Error("entry is not valid UTF-8 text");
}

const outDir = "/output";
let stat;
try {
  stat = statSync(outDir);
} catch {
  stat = undefined;
}
if (stat !== undefined && !stat.isDirectory()) {
  throw new Error(`${outDir} exists and is not a directory`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
console.log(`wrote ${length} characters to ${join(outDir, "entry.txt")}`);
