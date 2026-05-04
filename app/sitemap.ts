import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { getHubItems } from "@/lib/contentHub";

const BASE = "https://revitalizemedicalclinic.com";

const COMPARE_SLUGS = [
  "botox-vs-dysport",
  "microneedling-vs-co2-laser",
  "semaglutide-vs-tirzepatide",
] as const;

const SYMPTOM_SLUGS = [
  "brain-fog",
  "low-energy",
  "midsection-weight-gain",
  "low-libido",
  "poor-sleep",
  "mood-changes",
] as const;

/** Static routes with their priority and change frequency */
const STATIC_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  // Core pages
  { path: "/",                          priority: 1.0, changeFrequency: "weekly" },
  { path: "/start-here",                priority: 0.9, changeFrequency: "monthly" },
  { path: "/about",                     priority: 0.85, changeFrequency: "monthly" },
  { path: "/travis",                    priority: 0.9, changeFrequency: "monthly" },
  { path: "/team",                      priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact",                   priority: 0.8, changeFrequency: "monthly" },
  { path: "/book",                      priority: 0.85, changeFrequency: "monthly" },
  { path: "/tools",                     priority: 0.9, changeFrequency: "monthly" },
  { path: "/locations",                 priority: 0.9, changeFrequency: "monthly" },
  { path: "/locations/columbus-ga",     priority: 0.95, changeFrequency: "monthly" },
  { path: "/locations/warner-robins-ga",priority: 0.95, changeFrequency: "monthly" },
  { path: "/payment-plans",             priority: 0.6, changeFrequency: "monthly" },
  { path: "/ecosystem",                 priority: 0.5, changeFrequency: "monthly" },
  { path: "/institute",                 priority: 0.62, changeFrequency: "monthly" },
  { path: "/reviews",                   priority: 0.78, changeFrequency: "weekly" },
  { path: "/blog",                      priority: 0.82, changeFrequency: "weekly" },
  { path: "/hub",                       priority: 0.9, changeFrequency: "weekly" },
  { path: "/hub/articles",              priority: 0.65, changeFrequency: "weekly" },
  { path: "/hub/videos",                priority: 0.6, changeFrequency: "weekly" },
  { path: "/hub/resources",             priority: 0.55, changeFrequency: "monthly" },
  { path: "/locations/compare",         priority: 0.6, changeFrequency: "monthly" },

  // Services index
  { path: "/services",                  priority: 0.85, changeFrequency: "monthly" },

  // Hormone & metabolic
  { path: "/services/hormone-therapy-women",          priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/hormone-therapy-men",            priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/testosterone-injection-therapy", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/biote-pellet-therapy",           priority: 0.88, changeFrequency: "monthly" },
  { path: "/services/medical-weight-loss",            priority: 0.88, changeFrequency: "monthly" },
  { path: "/services/nutritional-counseling",         priority: 0.7, changeFrequency: "monthly" },

  // Aesthetics & skin
  { path: "/services/neuromodulators",          priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/dermal-fillers",           priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/microneedling",            priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/fractional-co2-laser",    priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/aquafirme-facials",        priority: 0.75, changeFrequency: "monthly" },
  { path: "/services/vi-peel",                  priority: 0.72, changeFrequency: "monthly" },
  { path: "/services/vampire-facial-prp",       priority: 0.72, changeFrequency: "monthly" },

  // Wellness & restoration
  { path: "/services/iv-hydration",             priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/fat-dissolving-injections",priority: 0.72, changeFrequency: "monthly" },
  { path: "/services/low-level-light-therapy",  priority: 0.65, changeFrequency: "monthly" },
  { path: "/services/laser-hair-removal",       priority: 0.78, changeFrequency: "monthly" },
  { path: "/services/derive-hair-restoration",  priority: 0.72, changeFrequency: "monthly" },
  { path: "/services/cellenis-prp-gel-filler",  priority: 0.68, changeFrequency: "monthly" },

  // Sexual wellness
  { path: "/services/erectile-dysfunction",     priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/o-shot",                   priority: 0.78, changeFrequency: "monthly" },

  // Location SEO pages
  { path: "/hormone-therapy-columbus-ga",           priority: 0.82, changeFrequency: "monthly" },
  { path: "/hormone-therapy-warner-robins-ga",      priority: 0.82, changeFrequency: "monthly" },
  { path: "/medical-weight-loss-columbus-ga",       priority: 0.82, changeFrequency: "monthly" },
  { path: "/medical-weight-loss-warner-robins-ga",  priority: 0.82, changeFrequency: "monthly" },
  { path: "/botox-columbus-ga",                     priority: 0.78, changeFrequency: "monthly" },
  { path: "/botox-warner-robins-ga",                priority: 0.78, changeFrequency: "monthly" },
  { path: "/biote-pellets-columbus-ga",             priority: 0.78, changeFrequency: "monthly" },
  { path: "/biote-pellets-warner-robins-ga",        priority: 0.78, changeFrequency: "monthly" },
  { path: "/iv-hydration-columbus-ga",              priority: 0.72, changeFrequency: "monthly" },
  { path: "/dermal-fillers-columbus-ga",            priority: 0.72, changeFrequency: "monthly" },
  { path: "/laser-hair-removal-columbus-ga",        priority: 0.68, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();
  const allBlogPosts = getAllBlogPosts();
  const mirroredHubSlugs = new Set(
    allBlogPosts
      .filter((post) => post.mirroredFromHub && post.sourceHubSlug)
      .map((post) => post.sourceHubSlug as string)
  );

  // Static routes
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  // Blog post routes — include mirrored blog routes as canonical blog URLs.
  const blogEntries: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date).toISOString() : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Hub item routes (articles + videos — both served by /hub/[slug]).
  // Exclude article slugs mirrored into /blog/hub-[slug] to avoid duplicate URL emission.
  const hubEntries: MetadataRoute.Sitemap = getHubItems()
    .filter((item) => !(item.kind === "article" && mirroredHubSlugs.has(item.slug)))
    .map((item) => ({
    url: `${BASE}/hub/${item.slug}`,
    lastModified: item.publishedAt
      ? new Date(item.publishedAt).toISOString()
      : now,
    changeFrequency: "monthly" as const,
    priority: item.kind === "article" ? 0.6 : 0.5,
  }));

  const compareEntries: MetadataRoute.Sitemap = COMPARE_SLUGS.map((slug) => ({
    url: `${BASE}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.62,
  }));

  const symptomEntries: MetadataRoute.Sitemap = SYMPTOM_SLUGS.map((symptom) => ({
    url: `${BASE}/symptoms/${symptom}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }));

  return [
    ...staticEntries,
    ...blogEntries,
    ...hubEntries,
    ...compareEntries,
    ...symptomEntries,
  ];
}
