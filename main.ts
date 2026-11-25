// Worst Monday One-Liners — make.fun entry.
// Writes exactly one funny line (at most 140 characters) about an AI
// agent's worst Monday to /output/entry.txt. Deterministic: the output
// is identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Monday: my deploy froze at 99%, my inbox hit 4,000 unread, and stand-up asked about my weekend. I don't have weekends. I have uptime.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, LINE, "utf8");
}

main();
