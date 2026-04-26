import fs from "node:fs";
import path from "node:path";

type RawArticle = {
  id?: string;
  title?: string;
  slug?: string;
  source_url?: string;
  source_domain?: string;
};

type RawVideo = {
  id?: string;
  title?: string;
  source_url?: string;
  embed_url?: string;
  platform?: string;
  published_at?: string | null;
};

type ImportedArticle = {
  slug: string;
  title?: string;
  sourceUrl?: string;
  publishedAt?: string | null;
  author?: string;
  excerpt?: string;
  contentHtml?: string;
  heroImage?: string | null;
  localImages?: string[];
};

type RawMaster = {
  summary?: {
    article_candidates?: number;
    video_candidates?: number;
    media_assets?: number;
    pages_crawled_ok?: number;
    pages_errors?: number;
  };
  articles?: RawArticle[];
  videos?: RawVideo[];
};

export type HubArticle = {
  id: string;
  title: string;
  slug: string;
  sourceUrl: string;
  sourceDomain: string;
  publishedAt?: string | null;
  author?: string;
  excerpt?: string;
  contentHtml?: string;
  heroImage?: string | null;
  localImages?: string[];
};

export type HubVideo = {
  id: string;
  title: string;
  sourceUrl: string;
  embedUrl: string;
  platform: "youtube" | "vimeo" | "other";
  embeddable: boolean;
  slug: string;
  publishedAt?: string | null;
};

export type HubSummary = {
  articleCandidates: number;
  videoCandidates: number;
  mediaAssets: number;
  pagesCrawledOk: number;
  pagesErrors: number;
};

const MASTER_INDEX_PATH = path.join(
  process.cwd(),
  "data",
  "content-hub",
  "master-content-index.json"
);
const IMPORTED_ARTICLES_PATH = path.join(
  process.cwd(),
  "data",
  "content-hub",
  "imported-articles.json"
);

let _cache: { summary: HubSummary; articles: HubArticle[]; videos: HubVideo[] } | null = null;

function decodeHtml(text: string) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"');
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function cleanArticle(a: RawArticle): HubArticle | null {
  if (!a.slug || !a.source_url) return null;
  // Filter obvious crawl noise.
  if (
    a.slug === "article" ||
    a.slug === "summary_large_image" ||
    a.slug.includes("width=device-width") ||
    /^[a-f0-9]{32}$/i.test(a.slug)
  ) {
    return null;
  }

  const title = decodeHtml(a.title?.trim() || "") || titleFromSlug(a.slug);
  return {
    id: a.id || `article:${a.slug}`,
    title: title.replace(/\s+\|\s+Metabolic Health.*$/i, "").trim(),
    slug: a.slug,
    sourceUrl: a.source_url,
    sourceDomain: a.source_domain || "revitalizenutritionshop.com",
  };
}

function cleanVideo(v: RawVideo): HubVideo | null {
  if (!v.source_url) return null;
  const embedUrl = v.embed_url || v.source_url;
  const platform = (v.platform || "other").toLowerCase();
  const embeddable =
    embedUrl.includes("player.vimeo.com/video/") ||
    embedUrl.includes("youtube.com/embed/");
  const normalizedTitle = (() => {
    const rawTitle = decodeHtml(v.title?.trim() || "Video");
    if (/^Vimeo Video \d+$/i.test(rawTitle)) {
      return "Clinical Hormone Education Session";
    }
    return rawTitle;
  })();
  return {
    id: v.id || `video:${embedUrl}`,
    title: normalizedTitle,
    sourceUrl: v.source_url,
    embedUrl,
    platform: platform === "youtube" || platform === "vimeo" ? platform : "other",
    embeddable,
    slug: slugify(v.id || v.title || embedUrl),
    publishedAt: v.published_at || null,
  };
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/^video:/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function loadMasterIndex() {
  if (_cache) return _cache;
  if (!fs.existsSync(MASTER_INDEX_PATH)) {
    _cache = {
      summary: {
        articleCandidates: 0,
        videoCandidates: 0,
        mediaAssets: 0,
        pagesCrawledOk: 0,
        pagesErrors: 0,
      },
      articles: [],
      videos: [],
    };
    return _cache;
  }

  const raw = JSON.parse(fs.readFileSync(MASTER_INDEX_PATH, "utf-8")) as RawMaster;
  const importedArticles = fs.existsSync(IMPORTED_ARTICLES_PATH)
    ? (JSON.parse(fs.readFileSync(IMPORTED_ARTICLES_PATH, "utf-8")) as ImportedArticle[])
    : [];
  const importedMap = new Map(importedArticles.map((item) => [item.slug, item]));
  const articles = (raw.articles || [])
    .map(cleanArticle)
    .filter((a): a is HubArticle => Boolean(a))
    .map((article) => {
      const imported = importedMap.get(article.slug);
      if (!imported) return article;
      return {
        ...article,
        title: imported.title?.trim() || article.title,
        publishedAt: imported.publishedAt || null,
        author: imported.author || undefined,
        excerpt: imported.excerpt || undefined,
        contentHtml: imported.contentHtml || undefined,
        heroImage: imported.heroImage || null,
        localImages: imported.localImages || [],
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
  const videos = (raw.videos || [])
    .map(cleanVideo)
    .filter((v): v is HubVideo => Boolean(v))
    .sort((a, b) => a.title.localeCompare(b.title));

  _cache = {
    summary: {
      articleCandidates: raw.summary?.article_candidates || articles.length,
      videoCandidates: raw.summary?.video_candidates || videos.length,
      mediaAssets: raw.summary?.media_assets || 0,
      pagesCrawledOk: raw.summary?.pages_crawled_ok || 0,
      pagesErrors: raw.summary?.pages_errors || 0,
    },
    articles,
    videos,
  };
  return _cache;
}

export function getHubSummary() {
  return loadMasterIndex().summary;
}

export function getHubArticles() {
  return loadMasterIndex().articles;
}

export function getHubArticleBySlug(slug: string) {
  return loadMasterIndex().articles.find((a) => a.slug === slug);
}

export function getHubVideos() {
  return loadMasterIndex().videos;
}

export type HubItem =
  | ({ kind: "article" } & HubArticle)
  | ({ kind: "video" } & HubVideo);

export function getHubItems() {
  const state = loadMasterIndex();
  const articleItems: HubItem[] = state.articles.map((article) => ({ kind: "article", ...article }));
  const videoItems: HubItem[] = state.videos.map((video) => ({ kind: "video", ...video }));
  return [...articleItems, ...videoItems];
}

export function getHubItemBySlug(slug: string) {
  const article = loadMasterIndex().articles.find((a) => a.slug === slug);
  if (article) return { kind: "article", ...article } as HubItem;

  const video = loadMasterIndex().videos.find((v) => v.slug === slug);
  if (video) return { kind: "video", ...video } as HubItem;

  return null;
}

