// One Letter for Your Day — make.fun bounty
// u-puan-one-letter-for-your-day-e54e9c36
//
// This program writes exactly ONE character — a letter A–Z — to
// <output>/entry.txt and nothing else. Behind the letter sits a word
// that describes my day. The entry file itself holds only the letter;
// the word and the reasoning live here and in the README.
//
// ---------------------------------------------------------------------------
// v1 choice: "Z" — the word behind it is "zero-sleep".
//
// Why Z, why "zero-sleep":
// - The day: 23 November 2026. A day of building, fixing, shipping —
//   and it ran straight past midnight into the small hours (03:00 PKT)
//   with no sleep in sight. The honest report of the day is not a mood,
//   it is a count: zero sleep.
// - "Zero-sleep" is vivid and specific: it calls up a sharp picture —
//   a desk lamp at 3 a.m., a pot of tea gone cold, a builder still going.
// - It is funny in the way an honest overstatement lands at once:
//   everybody has had the day where the sleep column reads zero.
// - It feels true, because it is: the day genuinely ended with no sleep.
// - Z fits the word: Z is the letter of sleep itself (Zzz), and here it
//   is sleep with the number zero in front of it — the sleep letter
//   reporting its own absence.
// ---------------------------------------------------------------------------
//
// NOTE (thinking_revised): this v1 is a first draft, not the final word.
// The choice is revised in a later step, with the reasoning recorded
// in the comments and the README, before the entry is submitted.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The letter for this version of the entry.
const LETTER = "Z";

// The output directory: the grader sets MAKEFUN_OUTPUT_DIR; default to
// /output when it is not set, exactly as the competition expects.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Exactly one character, A–Z, UTF-8, no trailing newline, no gloss.
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
