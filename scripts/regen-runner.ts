/**
 * Phase 6 batch runner. Reads docs/regeneration-progress.json, generates the
 * next batch of 23 via scripts/regenerate-v2.ts, updates the progress file,
 * and prints whether more batches remain.
 *
 * Designed to be invoked once per loop iteration. Re-entrant safe.
 *
 * Output (last line) machine-readable:
 *   STATUS:more  (more batches remain)
 *   STATUS:done  (all 208 slots processed)
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PROGRESS_PATH = join(ROOT, "docs", "regeneration-progress.json");
const SCHEDULE_PATH = join(ROOT, "docs", "blog-schedule-208.json");

const BATCH_SIZE = 23;
const TOTAL = JSON.parse(readFileSync(SCHEDULE_PATH, "utf8")).length;

interface Progress {
  nextSlot: number;          // next 0-indexed slot to process
  batchesCompleted: number;
  totalBatches: number;
  startedAt: string;
  lastBatchAt?: string;
}

function readProgress(): Progress {
  if (existsSync(PROGRESS_PATH)) {
    return JSON.parse(readFileSync(PROGRESS_PATH, "utf8")) as Progress;
  }
  const totalBatches = Math.ceil(TOTAL / BATCH_SIZE);
  return {
    nextSlot: 0,
    batchesCompleted: 0,
    totalBatches,
    startedAt: new Date().toISOString(),
  };
}

function writeProgress(p: Progress): void {
  writeFileSync(PROGRESS_PATH, JSON.stringify(p, null, 2));
}

const progress = readProgress();
console.log(`Progress: batch ${progress.batchesCompleted + 1}/${progress.totalBatches} (next slot ${progress.nextSlot}/${TOTAL})`);
console.log("");

if (progress.nextSlot >= TOTAL) {
  console.log("All batches complete.");
  console.log("STATUS:done");
  process.exit(0);
}

const start = progress.nextSlot;
const end = Math.min(start + BATCH_SIZE, TOTAL);

const result = spawnSync("npx", ["tsx", "scripts/regenerate-v2.ts", `--start=${start}`, `--end=${end}`], {
  cwd: ROOT,
  stdio: "inherit",
});

if (result.status !== 0) {
  console.error(`Generator exited with status ${result.status}`);
  process.exit(result.status ?? 1);
}

const updated: Progress = {
  ...progress,
  nextSlot: end,
  batchesCompleted: progress.batchesCompleted + 1,
  lastBatchAt: new Date().toISOString(),
};
writeProgress(updated);

console.log("");
console.log(`Batch complete. Next slot: ${updated.nextSlot}/${TOTAL}`);
if (updated.nextSlot >= TOTAL) {
  console.log("STATUS:done");
} else {
  console.log("STATUS:more");
}
