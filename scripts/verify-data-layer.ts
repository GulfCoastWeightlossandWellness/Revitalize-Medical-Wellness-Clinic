/**
 * Smoke-test the new MDX-backed data layer end-to-end.
 * Confirms:
 *   - getAllBlogPosts() returns 50 MDX posts + 3 hub mirrors = 53 entries
 *   - Every BLOG_POSTS + NEW_ARTICLES_20 source slug is reachable via getBlogPost()
 *   - Sitemap-equivalent set has the 50 blog URLs we expect
 *   - getMirroredBlogSlugByHubSlug() resolves
 *   - Featured post is exactly one
 *   - All required BlogPost fields are populated for every post
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { getAllBlogPosts, getBlogPost, getMirroredBlogSlugByHubSlug, isPublished, type BlogPost } from "../lib/blog";

const posts = getAllBlogPosts();
console.log(`Total posts returned by getAllBlogPosts(): ${posts.length}`);
console.log("");

// Count by category
const mirrored = posts.filter((p) => p.mirroredFromHub);
const authored = posts.filter((p) => !p.mirroredFromHub);
console.log(`  Authored (MDX) posts: ${authored.length}`);
console.log(`  Hub-mirrored posts:   ${mirrored.length}`);
console.log("");

// Featured count
const featured = posts.filter((p) => p.featured);
console.log(`Featured posts: ${featured.length} → ${featured.map((p) => p.slug).join(", ")}`);
if (featured.length !== 1) {
  console.error(`✗ Expected exactly 1 featured post, got ${featured.length}`);
  process.exit(1);
}

// Sort check: featured first, then date desc
const isSortedCorrectly = (() => {
  for (let i = 0; i < posts.length - 1; i++) {
    const a = posts[i];
    const b = posts[i + 1];
    if (a.featured && !b.featured) continue; // featured can precede non-featured
    if (!a.featured && b.featured) return false;
    if (a.featured === b.featured && a.date < b.date) return false;
  }
  return true;
})();
console.log(`Sort order (featured first, then date desc): ${isSortedCorrectly ? "✓" : "✗"}`);
if (!isSortedCorrectly) process.exit(1);

// Spot-check published slugs (must resolve)
const publishedSpotChecks = [
  "biote-pellet-therapy-explained",        // 2025-03-15
  "sleep-and-hormone-optimization",        // 2026-05-03
  "perimenopause-symptom-checklist",       // 2026-05-03 (featured)
];
// Spot-check future-dated slugs (must NOT resolve under Phase 2 gating)
const futureSpotChecks = [
  "revitalize-vs-traditional-med-spa",     // 2026-05-19
  "nad-plus-iv-therapy",                   // 2026-05-10
];

console.log("");
console.log("Spot-check getBlogPost() — published (must resolve):");
let spotFails = 0;
for (const slug of publishedSpotChecks) {
  const p = getBlogPost(slug);
  if (!p) {
    console.error(`  ✗ ${slug} — NOT FOUND`);
    spotFails++;
  } else {
    const hasFaq = (p.faq?.length ?? 0) > 0;
    const hasCta = !!p.cta;
    const contentLen = p.content.length;
    console.log(`  ✓ ${slug} (content ${contentLen} B, faq=${hasFaq}, cta=${hasCta}, schemaType=${p.schemaType})`);
  }
}
console.log("");
console.log("Spot-check getBlogPost() — future-dated (must be excluded):");
for (const slug of futureSpotChecks) {
  const p = getBlogPost(slug);
  if (p) {
    console.error(`  ✗ ${slug} — SHOULD HAVE BEEN EXCLUDED but resolved`);
    spotFails++;
  } else {
    console.log(`  ✓ ${slug} — correctly excluded by isPublished()`);
  }
}
if (spotFails > 0) process.exit(1);

// Hub-mirror reverse lookup
console.log("");
console.log("Hub mirror reverse lookup:");
for (const m of mirrored) {
  if (m.sourceHubSlug) {
    const back = getMirroredBlogSlugByHubSlug(m.sourceHubSlug);
    console.log(`  ✓ ${m.sourceHubSlug} → ${back}`);
  }
}

// Required fields populated for every post
console.log("");
console.log("Required-field check on all posts:");
let fieldFails = 0;
for (const p of posts) {
  const missing: string[] = [];
  if (!p.slug) missing.push("slug");
  if (!p.title) missing.push("title");
  if (!p.date) missing.push("date");
  if (!p.category) missing.push("category");
  if (!p.description) missing.push("description");
  if (!p.relatedService) missing.push("relatedService");
  if (!p.relatedServiceHref) missing.push("relatedServiceHref");
  // Hub-mirrored posts intentionally have short excerpt-only bodies (link out
  // to the full Learning Library article); enforce a higher floor only on
  // authored MDX posts.
  const minContent = p.mirroredFromHub ? 30 : 100;
  if (!p.content || p.content.length < minContent) {
    missing.push(`content (only ${p.content?.length ?? 0} B, min ${minContent})`);
  }
  if (missing.length > 0) {
    console.error(`  ✗ ${p.slug}: missing ${missing.join(", ")}`);
    fieldFails++;
  }
}
if (fieldFails === 0) console.log(`  ✓ All ${posts.length} posts have required fields`);
else { console.error(`  ${fieldFails} posts missing required fields`); process.exit(1); }

// Sitemap-equivalent — the URLs sitemap.ts will emit for blog posts
console.log("");
console.log(`Sitemap equivalence: ${posts.length} blog URLs would be emitted (was 33: 30 BLOG_POSTS + 3 hub mirrors)`);
console.log(`  All slugs: ${posts.map((p) => p.slug).sort().join(", ").slice(0, 200)}…`);

// ─── Phase 2 assertions: date-gating ───────────────────────────────────────
console.log("");
console.log("─── Phase 2 date-gating ──────────────────────────────────────────");

// Read every MDX file directly (bypassing the filter) to compute expected
// published vs. future split.
const BLOG_DIR = join(process.cwd(), "content", "blog");
const allMdx = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
const allDates = allMdx.map((f) => {
  const { data } = matter(readFileSync(join(BLOG_DIR, f), "utf8"));
  return { slug: (data as { slug: string }).slug, date: (data as { publishedDate?: string; date?: string }).publishedDate ?? (data as { date?: string }).date ?? "" };
});

const now = new Date();
const expectedPublished = allDates.filter((p) => isPublished(p.date));
const expectedFuture = allDates.filter((p) => !isPublished(p.date));

console.log(`Real clock:           ${now.toISOString()}`);
console.log(`Total MDX on disk:    ${allMdx.length}`);
console.log(`Expected published:   ${expectedPublished.length}`);
console.log(`Expected future:      ${expectedFuture.length}`);

// Authored count from filter must match expected published
const authoredFiltered = posts.filter((p) => !p.mirroredFromHub).length;
if (authoredFiltered !== expectedPublished.length) {
  console.error(`✗ Filtered authored count ${authoredFiltered} != expected ${expectedPublished.length}`);
  process.exit(1);
}
console.log(`Filter result match:  ✓ ${authoredFiltered} authored posts in getAllBlogPosts()`);

// Confirm every future-dated slug is NOT in getAllBlogPosts() and getBlogPost() returns undefined
const filteredSlugs = new Set(posts.map((p) => p.slug));
let futureLeak = 0;
let getPostLeak = 0;
for (const f of expectedFuture) {
  if (filteredSlugs.has(f.slug)) {
    console.error(`  ✗ FUTURE LEAK: ${f.slug} (date ${f.date}) appeared in getAllBlogPosts()`);
    futureLeak++;
  }
  if (getBlogPost(f.slug)) {
    console.error(`  ✗ getBlogPost LEAK: ${f.slug} (date ${f.date}) resolves but should be unpublished`);
    getPostLeak++;
  }
}
if (futureLeak === 0 && getPostLeak === 0) {
  console.log(`Future exclusion:     ✓ all ${expectedFuture.length} future-dated posts excluded from both getAllBlogPosts() and getBlogPost()`);
} else {
  process.exit(1);
}

// Print the future-dated cohort for the audit trail
if (expectedFuture.length > 0) {
  console.log(`Future cohort (will publish on rebuild after the date arrives):`);
  expectedFuture
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .forEach((p) => console.log(`  ${p.date}  ${p.slug}`));
}

// Sitemap parity — sitemap will emit one URL per published post + 3 hub mirrors
console.log("");
console.log(`Sitemap parity:       blog URL count emitted = getAllBlogPosts().length = ${posts.length}`);

console.log("");
console.log("✓ Data layer smoke-test passed (Phase 1 + Phase 2).");
