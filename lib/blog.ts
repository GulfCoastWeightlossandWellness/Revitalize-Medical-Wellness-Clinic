/**
 * Blog data layer — reads MDX files from content/blog/, parses frontmatter
 * with gray-matter, translates to the BlogPost shape that all consumers expect.
 *
 * Phase 1: isPublished() stubbed to always return true (no date-gating yet).
 * Phase 2 will flip the stub to compare publishedDate against UTC midnight.
 *
 * Hub-mirror synthesis (3 hub articles auto-rendered as /blog/hub-{slug})
 * is preserved as runtime computation — these are NOT stored as MDX.
 *
 * sanitizePost() is preserved as a defensive layer; MDX files are authored
 * clean, but the sanitizer catches Fort Moore→Fort Benning, Vercel preview
 * URLs, and internal markers if any leak through future content imports.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { getHubArticles } from "@/lib/contentHub";

// ─── Public type (unchanged from previous BLOG_POSTS implementation) ────────
export interface BlogPost {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  keyword: string;
  date: string;
  readTime: string;
  category: string;
  relatedService: string;
  relatedServiceHref: string;
  content: string;
  mirroredFromHub?: boolean;
  canonicalUrl?: string;
  sourceHubSlug?: string;
  faq?: Array<{ q: string; a: string }>;
  cta?: {
    headline: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
    variant?: "assessment" | "booking" | "start-here";
  };
  serviceLinks?: Record<string, string>;
  tableOfContents?: string[];
  medicalDisclaimer?: string;
  relatedArticles?: Array<{ title: string; href: string }>;
  relatedServiceDescription?: string;
  // Extended fields (Phase 2/3/5 — optional, ignored by current renderer)
  publishedDate?: string;
  featured?: boolean;
  schemaType?: string;
  keywords?: string[];
  relatedServices?: string[];
  relatedPosts?: string[];
  relatedCities?: string[];
  tags?: string[];
}

// ─── Date-gating (Phase 2: live UTC midnight comparison) ───────────────────
/**
 * Returns true when a post's publishedDate (YYYY-MM-DD) has reached UTC
 * midnight. A post dated today goes live at 00:00 UTC. Future-dated posts
 * are excluded from getAllBlogPosts() and therefore from the sitemap,
 * generateStaticParams, and every related-posts widget.
 *
 * An empty / malformed date yields an Invalid Date whose comparison returns
 * false, so missing-date posts default to unpublished (safe).
 */
export function isPublished(publishedDate: string): boolean {
  const pubDate = new Date(publishedDate + "T00:00:00.000Z");
  return pubDate <= new Date();
}

// ─── Sanitization (defensive net; MDX is authored clean) ───────────────────
const INTERNAL_MARKERS = [
  "IMPLEMENTATION NOTES", "CLAUDE CODE", "Campbell Digital Studio",
  "Internal use only", "HIGH CONVERSION", "INLINE LINKS", "MID-ARTICLE CTA",
  "Metadata:", "FULL PAGE COPY", "PHASE", "Route:", "File to edit",
];

function stripVercelPreviewUrls(value: string): string {
  return value.replace(/https:\/\/revitalize-medical-wellness-clinic\.vercel\.app/g, "");
}

function sanitizeFortBenningWording(value: string): string {
  return value
    .replace(/Fort\s+Moore\s*\(formerly\s+Fort\s+Benning\)/g, "Fort Benning, formerly Fort Moore")
    .replace(/Fort\s+Moore\s+and\s+the\s+surrounding\s+military\s+community/g, "Fort Benning and the surrounding military community")
    .replace(/Fort\s+Moore,\s*formerly\s+Fort\s+Benning/g, "Fort Benning, formerly Fort Moore")
    .replace(/\bFort Moore\b/g, "Fort Benning");
}

function stripInternalSections(value: string): string {
  return value
    .replace(/\n\*\*INLINE LINKS:\*\*[\s\S]*$/i, "")
    .replace(/\n\*\*MID-ARTICLE CTA:\*\*[\s\S]*$/i, "")
    .replace(/\n\*\*FAQ:\*\*[\s\S]*$/i, "")
    .replace(/\n\*\*MEDICAL DISCLAIMER:\*\*[\s\S]*$/i, "")
    .replace(/\n\*\*RELATED SERVICE:\*\*[\s\S]*$/i, "")
    .replace(/\n\*\*RELATED ARTICLES:\*\*[\s\S]*$/i, "")
    .replace(/^# .+\n\n/, "")
    .replace(/\*\*Dek:\*\*.+\n\n/i, "")
    .replace(/\*\*By .+\*\*\n\n/i, "")
    .replace(/\*\*TABLE OF CONTENTS:\*\*[\s\S]*?\n---\n\n/i, "")
    .trim();
}

function sanitizeText(value?: string): string | undefined {
  if (!value) return value;
  const sanitized = sanitizeFortBenningWording(value);
  if (INTERNAL_MARKERS.some((marker) => sanitized.includes(marker))) {
    return stripInternalSections(sanitized);
  }
  return sanitized;
}

function sanitizeReadTime(value?: string): string {
  const match = value?.match(/\d+\s*min(?:\s*read)?/i);
  if (!match) return "8 min read";
  return match[0].toLowerCase().includes("read") ? match[0] : `${match[0]} read`;
}

function sanitizeCategory(value?: string): string {
  return (value ?? "Education").split("\n")[0].replace(/\*\*.*$/, "").trim() || "Education";
}

function sanitizeRelatedArticles(relatedArticles?: Array<{ title: string; href: string }>) {
  if (!relatedArticles?.length) return undefined;
  return relatedArticles.filter(
    (item) =>
      item?.title &&
      item?.href?.startsWith("/") &&
      !item.title.includes("**") &&
      !INTERNAL_MARKERS.some((marker) => item.title.includes(marker))
  );
}

function sanitizePost(post: BlogPost): BlogPost {
  return {
    ...post,
    title: sanitizeText(post.title) ?? post.title,
    metaTitle: sanitizeText(post.metaTitle),
    description: sanitizeText(post.description) ?? post.description,
    keyword: sanitizeText(post.keyword) ?? post.keyword,
    readTime: sanitizeReadTime(post.readTime),
    category: sanitizeCategory(post.category),
    relatedService: sanitizeText(post.relatedService) ?? post.relatedService,
    relatedServiceDescription: sanitizeText(post.relatedServiceDescription),
    content: stripVercelPreviewUrls(stripInternalSections(sanitizeText(post.content) ?? post.content)),
    medicalDisclaimer: sanitizeText(post.medicalDisclaimer),
    cta: post.cta
      ? {
          ...post.cta,
          headline: sanitizeText(post.cta.headline) ?? post.cta.headline,
          body: sanitizeText(post.cta.body) ?? post.cta.body,
          buttonLabel: sanitizeText(post.cta.buttonLabel) ?? post.cta.buttonLabel,
        }
      : undefined,
    faq: post.faq?.map((item) => ({
      q: sanitizeText(item.q) ?? item.q,
      a: sanitizeText(item.a) ?? item.a,
    })),
    tableOfContents: post.tableOfContents?.map((item) => sanitizeText(item) ?? item),
    relatedArticles: sanitizeRelatedArticles(post.relatedArticles),
  };
}

// ─── Frontmatter → BlogPost translator ──────────────────────────────────────
type Frontmatter = Record<string, unknown>;

function asString(v: unknown, fallback = ""): string {
  return v == null ? fallback : String(v);
}
function asOptString(v: unknown): string | undefined {
  if (v == null) return undefined;
  const s = String(v);
  return s.length > 0 ? s : undefined;
}
function asStringArray(v: unknown): string[] | undefined {
  return Array.isArray(v) ? v.map((x) => String(x)) : undefined;
}

function frontmatterToBlogPost(fm: Frontmatter, body: string): BlogPost {
  const cta = fm.cta as Record<string, unknown> | null | undefined;
  const faqs = (fm.faqs as Array<{ question: string; answer: string }> | undefined) ?? [];
  const relatedService = fm.relatedService as Record<string, string> | undefined;
  const keywords = asStringArray(fm.keywords) ?? [];
  const serviceLinksRaw = fm.serviceLinks as Record<string, string> | undefined;
  const tocRaw = asStringArray(fm.tableOfContents);
  const relatedArticlesRaw = fm.relatedArticles as Array<{ title: string; href: string }> | undefined;

  return {
    slug: asString(fm.slug),
    title: asString(fm.title),
    metaTitle: asOptString(fm.metaTitle),
    description: asString(fm.excerpt),
    keyword: keywords[0] ?? "",
    date: asString(fm.publishedDate ?? fm.date),
    readTime: asString(fm.readTime, "8 min read"),
    category: asString(fm.category, "Education"),
    relatedService: asString(relatedService?.name),
    relatedServiceHref: asString(relatedService?.href),
    relatedServiceDescription: asOptString(relatedService?.description),
    content: body.trim(),
    mirroredFromHub: fm.mirroredFromHub === true,
    canonicalUrl: asOptString(fm.canonicalUrl),
    sourceHubSlug: asOptString(fm.sourceHubSlug),
    faq: faqs.length > 0 ? faqs.map((f) => ({ q: String(f.question), a: String(f.answer) })) : undefined,
    cta:
      cta && cta.heading
        ? {
            headline: String(cta.heading),
            body: String(cta.body ?? ""),
            buttonLabel: String(cta.buttonText ?? ""),
            buttonHref: String(cta.buttonUrl ?? ""),
            variant: cta.variant
              ? (String(cta.variant) as "assessment" | "booking" | "start-here")
              : undefined,
          }
        : undefined,
    serviceLinks:
      serviceLinksRaw && Object.keys(serviceLinksRaw).length > 0 ? serviceLinksRaw : undefined,
    tableOfContents: tocRaw && tocRaw.length > 0 ? tocRaw : undefined,
    medicalDisclaimer: asOptString(fm.medicalDisclaimer),
    relatedArticles:
      relatedArticlesRaw && relatedArticlesRaw.length > 0 ? relatedArticlesRaw : undefined,
    publishedDate: asOptString(fm.publishedDate),
    featured: fm.featured === true,
    schemaType: asString(fm.schemaType, "Article"),
    keywords: keywords.length > 0 ? keywords : undefined,
    relatedServices: asStringArray(fm.relatedServices),
    relatedPosts: asStringArray(fm.relatedPosts),
    relatedCities: asStringArray(fm.relatedCities),
    tags: asStringArray(fm.tags),
  };
}

// ─── Load + cache MDX posts (sync at module init; cache cleared on restart) ─
const BLOG_DIR = join(process.cwd(), "content", "blog");

let mdxCache: BlogPost[] | null = null;

function readAllMdxPosts(): BlogPost[] {
  if (mdxCache) return mdxCache;
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  mdxCache = files.map((file) => {
    const raw = readFileSync(join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return frontmatterToBlogPost(data as Frontmatter, content);
  });
  return mdxCache;
}

// ─── Hub-mirror synthesis (preserved from previous lib/blog.ts) ────────────
function hubTopicFromTitle(title: string) {
  const t = title.toLowerCase();
  if (t.includes("hormone") || t.includes("bhrt") || t.includes("menopause") || t.includes("testosterone")) {
    return {
      category: "Hormone Therapy",
      relatedService: "Hormone Therapy — Women",
      relatedServiceHref: "/services/hormone-therapy-women",
    };
  }
  if (t.includes("metabolic") || t.includes("creatine") || t.includes("gallbladder") || t.includes("vitamin")) {
    return {
      category: "Weight Loss",
      relatedService: "Medical Weight Loss",
      relatedServiceHref: "/services/medical-weight-loss",
    };
  }
  return {
    category: "Education",
    relatedService: "Nutritional Counseling",
    relatedServiceHref: "/services/nutritional-counseling",
  };
}

function buildMirroredPosts(): BlogPost[] {
  const hubArticles = getHubArticles().slice(0, 3);
  return hubArticles.map((article) => {
    const topic = hubTopicFromTitle(article.title);
    const date = article.publishedAt ? article.publishedAt.slice(0, 10) : "2026-01-25";
    return {
      slug: `hub-${article.slug}`,
      title: article.title,
      description:
        article.excerpt ||
        "Originally published in the Revitalize Learning Library and featured here in the blog.",
      keyword: `revitalize learning library ${article.slug}`,
      date,
      publishedDate: date,
      readTime: "8 min read",
      category: topic.category,
      relatedService: topic.relatedService,
      relatedServiceHref: topic.relatedServiceHref,
      content: (article.excerpt || "Read the full article in the Learning Library for the complete version.").trim(),
      mirroredFromHub: true,
      canonicalUrl: `https://revitalizemedicalclinic.com/blog/hub-${article.slug}`,
      sourceHubSlug: article.slug,
      featured: false,
      schemaType: "Article",
    };
  });
}

// ─── Public API (same surface as before) ───────────────────────────────────
export function getAllBlogPosts(): BlogPost[] {
  const mdxPosts = readAllMdxPosts();
  const mirrored = buildMirroredPosts();

  // Dedupe by slug. MDX entries take precedence (mirrored slugs are `hub-…`
  // prefixed and won't collide in practice; this preserves the previous
  // last-write-wins semantics from the old getAllBlogPosts).
  const map = new Map<string, BlogPost>();
  [...mdxPosts, ...mirrored].forEach((post) => map.set(post.slug, sanitizePost(post)));

  // Phase-2-ready filter (currently a no-op — see isPublished()).
  const published = [...map.values()].filter((post) =>
    isPublished(post.publishedDate ?? post.date),
  );

  // Sort: featured first, then publish date desc.
  return published.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (b.featured && !a.featured) return 1;
    return a.date < b.date ? 1 : -1;
  });
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}

export function getMirroredBlogSlugByHubSlug(hubSlug: string): string | undefined {
  return getAllBlogPosts().find(
    (post) => post.mirroredFromHub && post.sourceHubSlug === hubSlug,
  )?.slug;
}

// ─── Phase 5 query helpers ─────────────────────────────────────────────────
/**
 * Returns up to 3 published posts that tag this service slug in
 * `relatedServices[]`. If fewer than 3 are tagged, fills with same-category
 * posts so callers can always render a row of 3 (or 0 if nothing matches).
 * Excludes hub-mirrored posts and the post being viewed if `excludeSlug` is set.
 */
export function getPostsByServiceSlug(
  serviceSlug: string,
  excludeSlug?: string,
  limit = 3,
): BlogPost[] {
  const all = getAllBlogPosts().filter(
    (p) => !p.mirroredFromHub && p.slug !== excludeSlug,
  );
  const tagged = all.filter((p) => p.relatedServices?.includes(serviceSlug));
  if (tagged.length >= limit) return tagged.slice(0, limit);

  // Fall back to category match. Find the category most associated with the
  // service slug from the tagged set; if no tagged posts, infer from the
  // service slug's category convention.
  const inferredCategory =
    tagged[0]?.category ?? inferCategoryFromServiceSlug(serviceSlug);
  const filler = all
    .filter(
      (p) =>
        p.category === inferredCategory &&
        !tagged.some((t) => t.slug === p.slug),
    )
    .slice(0, limit - tagged.length);

  return [...tagged, ...filler].slice(0, limit);
}

function inferCategoryFromServiceSlug(slug: string): string {
  if (slug.includes("hormone") || slug.includes("biote")) return "Hormone Therapy";
  if (slug.includes("weight") || slug.includes("nutritional")) return "Weight Loss";
  if (
    slug.includes("neuromodulator") ||
    slug.includes("filler") ||
    slug.includes("microneedling") ||
    slug.includes("laser") ||
    slug.includes("peel") ||
    slug.includes("aquafirme") ||
    slug.includes("vampire")
  )
    return "Aesthetics";
  if (slug === "o-shot" || slug === "erectile-dysfunction") return "Sexual Wellness";
  if (slug.includes("iv") || slug.includes("light-therapy") || slug.includes("fat-dissolving"))
    return "Wellness";
  if (slug.includes("hair") || slug.includes("derive")) return "Hair Restoration";
  return "Hormone Therapy";
}

/**
 * Returns up to N published posts that tag this city slug in
 * `relatedCities[]`. Used by location-service combo pages.
 */
export function getPostsByCity(
  citySlug: string,
  excludeSlug?: string,
  limit = 3,
): BlogPost[] {
  return getAllBlogPosts()
    .filter(
      (p) =>
        !p.mirroredFromHub &&
        p.slug !== excludeSlug &&
        p.relatedCities?.includes(citySlug),
    )
    .slice(0, limit);
}

/**
 * Returns up to N published posts in the given category.
 * Used by symptom pages and compare pages.
 */
export function getPostsByCategory(
  category: string,
  excludeSlug?: string,
  limit = 6,
): BlogPost[] {
  return getAllBlogPosts()
    .filter(
      (p) => !p.mirroredFromHub && p.slug !== excludeSlug && p.category === category,
    )
    .slice(0, limit);
}

/**
 * Returns the post explicitly marked `featured: true`, or the most recent
 * published post if none are marked. Never returns null when posts exist.
 */
export function getFeaturedPost(): BlogPost | null {
  const posts = getAllBlogPosts();
  if (posts.length === 0) return null;
  // getAllBlogPosts() already sorts featured first; posts[0] is correct.
  return posts[0];
}

/**
 * Returns the N most recent published posts (excluding any explicit featured
 * post if `excludeFeatured` is true, so a homepage with a separate hero
 * doesn't repeat it). Excludes hub-mirrored posts.
 */
export function getRecentPosts(n: number, excludeFeatured = false): BlogPost[] {
  const posts = getAllBlogPosts().filter((p) => !p.mirroredFromHub);
  const filtered = excludeFeatured ? posts.filter((p) => !p.featured) : posts;
  // posts may be sorted featured-first; for "recent" we want pure date desc.
  return [...filtered]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, n);
}
