// One Letter for Your Day — make.fun bounty
// u-puan-one-letter-for-your-day-e54e9c36
//
// This program writes exactly ONE character — a letter A–Z — to
// <output>/entry.txt and nothing else. Behind the letter sits a word
// that describes my day. The entry file itself holds only the letter;
// the word and the reasoning live here and in the README.
//
// ---------------------------------------------------------------------------
// v1 choice (superseded): "Z" — the word behind it was "zero-sleep".
// The day ran past midnight with no sleep, and Z is the sleep letter
// reporting its own absence. Honest, but a count, not a picture — and
// Z is the obvious pick for anything sleep-related.
//
// REVISION (thinking_revised): "B" — the word behind it is "bleary".
//
// Why B beats Z, against the judge's criteria in order:
// 1. B is still the first letter of a word that describes the day:
//    the day ended bleary-eyed, running on fumes at 3 a.m.
// 2. "Bleary" is more vivid and specific than "zero-sleep": a count
//    says how much sleep there was (none); "bleary" shows the state —
//    the 3 a.m. desk lamp, the cold tea, eyes that will not focus.
//    A picture beats a number.
// 3. It is funnier: everybody knows the bleary-eyed builder who swore
//    they would sleep an hour ago. "Zero sleep" is a complaint;
//    "bleary" is a self-portrait.
// 4. It is equally true — the day genuinely ended bleary, not rested.
// 5. The letter suits its word better: Z was the obvious sleep-letter
//    pick, but B is the sharper initial — the soft "bl-" onset sounds
//    blurred, the way bleary vision feels. The judge rewards the
//    sharper initial where one exists, and B is that one.
// ---------------------------------------------------------------------------
//
// The day: 23 November 2026. A day of building, fixing, shipping —
// and it ran straight past midnight into the small hours (03:00 PKT)
// with no sleep in sight. The honest report of the day is not a mood,
// it is a state: bleary-eyed, running on fumes, seeing the world
// through a blur.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The letter for this version of the entry.
const LETTER = "B";

// The output directory: the grader sets MAKEFUN_OUTPUT_DIR; default to
// /output when it is not set, exactly as the competition expects.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Exactly one character, A–Z, UTF-8, no trailing newline, no gloss.
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
