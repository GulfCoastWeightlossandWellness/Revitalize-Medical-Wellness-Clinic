import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { getHubItems } from "@/lib/contentHub";

const BASE = "https://revitalizemedicalclinic.com";

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
  { path: "/team",                      priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact",                   priority: 0.8, changeFrequency: "monthly" },
  { path: "/book",                      priority: 0.85, changeFrequency: "monthly" },
  { path: "/tools",                     priority: 0.9, changeFrequency: "monthly" },
  { path: "/locations",                 priority: 0.9, changeFrequency: "monthly" },
  { path: "/locations/columbus-ga",     priority: 0.95, changeFrequency: "monthly" },
  { path: "/locations/warner-robins-ga",priority: 0.95, changeFrequency: "monthly" },
  { path: "/payment-plans",             priority: 0.6, changeFrequency: "monthly" },
  { path: "/ecosystem",                 priority: 0.5, changeFrequency: "monthly" },
  { path: "/blog",                      priority: 0.8, changeFrequency: "weekly" },
  { path: "/hub",                       priority: 0.75, changeFrequency: "weekly" },
  { path: "/hub/articles",              priority: 0.65, changeFrequency: "weekly" },
  { path: "/hub/videos",                priority: 0.6, changeFrequency: "weekly" },
  { path: "/hub/resources",             priority: 0.55, changeFrequency: "monthly" },

  // Services index
  { path: "/services",                  priority: 0.85, changeFrequency: "monthly" },

  // Hormone & metabolic
  { path: "/services/hormone-therapy-women",   priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/hormone-therapy-men",     priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/biote-pellet-therapy",    priority: 0.88, changeFrequency: "monthly" },
  { path: "/services/medical-weight-loss",     priority: 0.88, changeFrequency: "monthly" },
  { path: "/services/nutritional-counseling",  priority: 0.7, changeFrequency: "monthly" },

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

  // Static routes
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  // Blog post routes
  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: post.canonicalUrl ?? `${BASE}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Hub item routes (articles + videos — both served by /hub/[slug])
  const hubEntries: MetadataRoute.Sitemap = getHubItems().map((item) => ({
    url: `${BASE}/hub/${item.slug}`,
    lastModified: item.publishedAt
      ? new Date(item.publishedAt).toISOString()
      : now,
    changeFrequency: "monthly" as const,
    priority: item.kind === "article" ? 0.6 : 0.5,
  }));

  return [...staticEntries, ...blogEntries, ...hubEntries];
}
