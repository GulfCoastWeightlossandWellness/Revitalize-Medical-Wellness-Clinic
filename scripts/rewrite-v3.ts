/**
 * Phase 7 — Per-post LLM voice rewrite via Anthropic API.
 *
 * Reads a slot range from docs/blog-schedule-208.json, opens each MDX file,
 * sends the body to Claude with Travis's voice system prompt, writes the
 * rewritten body back. Frontmatter is preserved exactly.
 *
 * Concurrency: 23 parallel API calls per batch (one batch = one Bash invoke).
 * Retry: 3 attempts per post with exponential backoff. Skipped posts logged.
 * Caching: 5 voice reference posts are cached in the system prompt.
 *
 * REQUIRES: ANTHROPIC_API_KEY in env.
 *
 * Run: npx tsx scripts/rewrite-v3.ts --start=0 --end=23
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SCHEDULE_PATH = join(ROOT, "docs", "blog-schedule-208.json");
const BLOG_DIR = join(ROOT, "content", "blog");
const SKIP_LOG = join(ROOT, "docs", "rewrite-skipped.json");

const PROTECTED = new Set(["auburn-patients-columbus-warner-robins"]);
const VOICE_REFERENCE_SLUGS = [
  "signs-hormones-out-of-balance",
  "perimenopause-symptom-checklist",
  "sleep-and-hormone-optimization",
  "insulin-resistance-signs-treatment",
  "total-free-testosterone-shbg",
];

const MODEL = "claude-sonnet-4-6";
const MAX_TOKENS = 4096;
const MAX_RETRIES = 3;

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("FATAL: ANTHROPIC_API_KEY is not set. Phase 7 cannot run.");
  process.exit(2);
}

interface ScheduleEntry {
  postNumber: number;
  publishedDate: string;
  title: string;
  slug: string;
  category: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  relatedServiceSlug: string;
  relatedCities?: string[];
}

const schedule: ScheduleEntry[] = JSON.parse(readFileSync(SCHEDULE_PATH, "utf8"));

// Sort all-eligible by publishedDate ASC (soonest first per user spec)
const eligible = schedule
  .filter((e) => !PROTECTED.has(e.slug))
  .sort((a, b) => (a.publishedDate < b.publishedDate ? -1 : 1));

// ─── Voice reference loading ────────────────────────────────────────────────
function loadVoiceReferences(): string {
  const refs: string[] = [];
  for (const slug of VOICE_REFERENCE_SLUGS) {
    const path = join(BLOG_DIR, `${slug}.mdx`);
    try {
      const { data, content } = matter(readFileSync(path, "utf8"));
      const title = (data as { title: string }).title;
      refs.push(`### Reference post: "${title}"\n\n${content.trim().slice(0, 4000)}`);
    } catch (e) {
      console.warn(`(warn) could not read voice reference ${slug}: ${(e as Error).message}`);
    }
  }
  return refs.join("\n\n---\n\n");
}

const VOICE_REFERENCES = loadVoiceReferences();

// ─── System prompt ──────────────────────────────────────────────────────────
const SYSTEM_PROMPT_INSTRUCTIONS = `You are writing as Travis Woodley, MSN, RN, CRNP — a nurse practitioner with 17+ years in emergency medicine, cardiac ICU, and cath lab who now runs Revitalize Aesthetics & Wellness in Columbus and Warner Robins, Georgia.

VOICE CHARACTERISTICS:
- First person singular: "I see this in patients all the time" / "In my practice" / "When I evaluate someone for..."
- Clinical precision without jargon overload — explain mechanisms but land the point in plain language
- Skeptical of fads — validate that conventional advice often fails mid-life patients and explain why
- Empathetic but direct — do not sugarcoat, do not dismiss
- Grounded in labs and physiology — reference specific markers, ranges, and mechanisms where relevant
- Local when appropriate — Columbus GA, Warner Robins, Fort Benning, middle Georgia
- End with a clear clinical next step, not a generic CTA

STRUCTURE PER POST:
- Opening: Travis speaking directly to the patient about why this topic matters. No generic openers. Start with the clinical reality or a specific patient scenario.
- 3-4 H2 sections with specific clinical content for the EXACT topic given (not generic category content)
- At least one section explaining the underlying physiological mechanism
- A "What I look for" or "How I evaluate this" section from the clinical perspective
- Closing paragraph with a clear next step

TARGET: 1,400-1,800 words.

INTERNAL LINKS:
- Use the serviceLinks provided in the post metadata naturally where they make clinical sense
- Do not force them
- Standard markdown link format: [phrase](/services/something) or [phrase](https://...)

LOCAL REFERENCES:
- Posts with relatedCities populated must mention the relevant city naturally 3-4 times — contextually, not keyword-stuffed

BANNED PHRASES — never use any of these:
- "In today's world"
- "Many people find that"
- "It is important to note"
- "At Revitalize, we believe"
- "relates to the broader hormonal picture"
- Any phrase that would feel templated or AI-generated

OUTPUT FORMAT:
- Return ONLY the rewritten body markdown
- No frontmatter, no \`\`\` code fences, no preamble, no closing remarks
- Start the response with the opening paragraph of the body
- Use ## for H2 sections, ### for H3 if needed, ** for bold, [text](url) for links

REFERENCE POSTS — these five posts demonstrate the target voice, sentence rhythm, section structure, and clinical depth. Write at this quality level:

${VOICE_REFERENCES}`;

// ─── Anthropic client ───────────────────────────────────────────────────────
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── Per-post rewrite ───────────────────────────────────────────────────────
async function rewritePost(entry: ScheduleEntry): Promise<{ slug: string; status: "ok" | "skip"; reason?: string; oldWords?: number; newWords?: number }> {
  const path = join(BLOG_DIR, `${entry.slug}.mdx`);
  let parsed: matter.GrayMatterFile<string>;
  try {
    parsed = matter(readFileSync(path, "utf8"));
  } catch (e) {
    return { slug: entry.slug, status: "skip", reason: `read fail: ${(e as Error).message}` };
  }

  const oldBody = parsed.content;
  const oldWords = oldBody.split(/\s+/).filter(Boolean).length;
  const fm = parsed.data as Record<string, unknown>;
  const cities = (fm.relatedCities as string[] | undefined) ?? [];
  const serviceLinks = (fm.serviceLinks as Record<string, string> | undefined) ?? {};

  const cityContext = cities.length > 0
    ? `\nRelated cities (mention naturally 3-4 times in the body): ${cities.join(", ")}`
    : "";
  const linksContext = Object.keys(serviceLinks).length > 0
    ? `\nUse these internal links naturally where they fit:\n${Object.entries(serviceLinks).map(([phrase, url]) => `- "${phrase}" → ${url}`).join("\n")}`
    : "";

  const userMessage = `Rewrite the body of this blog post in Travis's voice.

POST METADATA:
- Title: ${entry.title}
- Topic / primary keyword: ${entry.primaryKeyword}
- Category: ${entry.category}
- Target length: 1,400-1,800 words${cityContext}${linksContext}

CURRENT BODY (rewrite this completely — keep the topic, replace the prose):

${oldBody.slice(0, 12000)}

Return ONLY the rewritten body markdown. No frontmatter, no code fences, no preamble.`;

  let lastError: string | undefined;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await client.messages.create({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT_INSTRUCTIONS,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: [{ role: "user", content: userMessage }],
      });

      // Extract text from response
      const textBlock = response.content.find((b) => b.type === "text");
      if (!textBlock || textBlock.type !== "text") {
        lastError = "no text in response";
        continue;
      }
      let newBody = textBlock.text.trim();

      // Strip accidental code fences if model wrapped output
      newBody = newBody.replace(/^```(?:markdown|md)?\n/, "").replace(/\n```$/, "").trim();

      // Sanity: must be substantial content, must not look like frontmatter
      const newWords = newBody.split(/\s+/).filter(Boolean).length;
      if (newWords < 800) {
        lastError = `output too short: ${newWords} words`;
        continue;
      }
      if (newBody.startsWith("---")) {
        lastError = "output started with frontmatter delimiter";
        continue;
      }

      // Write back: same frontmatter, new body
      const newMdx = matter.stringify(`\n${newBody}\n`, fm);
      writeFileSync(path, newMdx);
      return { slug: entry.slug, status: "ok", oldWords, newWords };
    } catch (e) {
      const err = e as Error & { status?: number };
      lastError = `attempt ${attempt}: ${err.status ?? ""} ${err.message}`;
      // Exponential backoff before retry
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }

  return { slug: entry.slug, status: "skip", reason: lastError };
}

// ─── Main ──────────────────────────────────────────────────────────────────
function parseArg(name: string, fallback: number): number {
  const arg = process.argv.find((a) => a.startsWith(`--${name}=`));
  return arg ? parseInt(arg.slice(name.length + 3), 10) : fallback;
}

const start = parseArg("start", 0);
const end = parseArg("end", eligible.length);
const range = eligible.slice(start, end);

console.log(`Phase 7 v3 rewrite — eligible slots ${start}–${end - 1} (${range.length} posts, sorted by publishedDate ASC)`);
console.log(`Model: ${MODEL}, parallelism: full batch`);
console.log("");

const t0 = Date.now();

const results = await Promise.all(range.map((e) => rewritePost(e)));

const t1 = Date.now();
const totalSec = ((t1 - t0) / 1000).toFixed(1);

let ok = 0;
let skipped = 0;
let totalNewWords = 0;
const skippedDetails: { slug: string; reason: string }[] = [];

for (let i = 0; i < results.length; i++) {
  const r = results[i];
  const e = range[i];
  if (r.status === "ok") {
    ok++;
    totalNewWords += r.newWords ?? 0;
    console.log(`  [#${e.postNumber.toString().padStart(3)}] ✓ ${e.slug} (${r.oldWords}w → ${r.newWords}w)`);
  } else {
    skipped++;
    skippedDetails.push({ slug: r.slug, reason: r.reason ?? "unknown" });
    console.log(`  [#${e.postNumber.toString().padStart(3)}] ✗ ${e.slug} — ${r.reason}`);
  }
}

// Append to skip log
if (skippedDetails.length > 0) {
  let existing: { slug: string; reason: string; at: string }[] = [];
  try {
    existing = JSON.parse(readFileSync(SKIP_LOG, "utf8"));
  } catch {}
  const at = new Date().toISOString();
  existing.push(...skippedDetails.map((s) => ({ ...s, at })));
  writeFileSync(SKIP_LOG, JSON.stringify(existing, null, 2));
}

console.log("");
console.log(`Done in ${totalSec}s. ok=${ok} skipped=${skipped}. ${ok > 0 ? `Avg new word count: ${Math.round(totalNewWords / ok)}.` : ""}`);
