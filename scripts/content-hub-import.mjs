#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import * as cheerio from "cheerio";

const ROOT = process.cwd();
const HUB_DIR = path.join(ROOT, "data", "content-hub");
const PUBLIC_DIR = path.join(ROOT, "public");
const MEDIA_DIR = path.join(PUBLIC_DIR, "media", "original-site", "images");
const MASTER_INDEX = path.join(HUB_DIR, "master-content-index.json");
const IMPORTED_ARTICLES = path.join(HUB_DIR, "imported-articles.json");
const YOUTUBE_VIDEOS = path.join(HUB_DIR, "youtube-videos.json");

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function slugify(input = "") {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 90);
}

function decode(text = "") {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—");
}

function stripTracking(url) {
  try {
    const u = new URL(url);
    ["width", "height", "crop", "v", "utm_source", "utm_medium", "utm_campaign", "fbclid", "gclid"].forEach((k) =>
      u.searchParams.delete(k)
    );
    return u.toString();
  } catch {
    return url;
  }
}

function extFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const m = pathname.match(/\.([a-z0-9]{2,5})$/i);
    return (m?.[1] || "jpg").toLowerCase();
  } catch {
    return "jpg";
  }
}

async function downloadImage(url, slug, index) {
  try {
    const res = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0" },
      redirect: "follow",
    });
    if (!res.ok) return null;
    const arr = await res.arrayBuffer();
    const buf = Buffer.from(arr);
    if (!buf.length) return null;
    const hash = crypto.createHash("md5").update(buf).digest("hex").slice(0, 10);
    const ext = extFromUrl(url);
    const fileName = `hub-${slug}-${String(index + 1).padStart(2, "0")}-${hash}.${ext}`;
    const absPath = path.join(MEDIA_DIR, fileName);
    fs.writeFileSync(absPath, buf);
    return `/media/original-site/images/${fileName}`;
  } catch {
    return null;
  }
}

function parseJsonLd($) {
  const out = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).html() || "";
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) out.push(...parsed);
      else out.push(parsed);
    } catch {
      // Ignore malformed JSON-LD blocks.
    }
  });
  return out;
}

function pickArticleContainer($) {
  const selectors = [
    "article .rte",
    ".article-template__content .rte",
    ".article-content .rte",
    "article .article__content",
    "article .article-content",
    "article",
    "main article",
  ];
  for (const selector of selectors) {
    const node = $(selector).first();
    if (node.length && node.text().trim().length > 350) return node;
  }
  return $("main").first();
}

async function importArticle(article) {
  const sourceUrl = article.source_url;
  const slug = article.slug;
  const response = await fetch(sourceUrl, {
    headers: { "user-agent": "Mozilla/5.0" },
    redirect: "follow",
  });
  if (!response.ok) throw new Error(`Failed ${response.status} for ${sourceUrl}`);
  const html = await response.text();
  const $ = cheerio.load(html);

  const title = decode(
    $('meta[property="og:title"]').attr("content") ||
      $("h1").first().text().trim() ||
      article.title ||
      slug
  ).replace(/\s+\|\s+.*$/, "");

  const jsonLd = parseJsonLd($);
  const articleLd = jsonLd.find((item) => item?.["@type"] === "Article") || {};
  const publishedAt = articleLd.datePublished || null;
  const author = typeof articleLd.author?.name === "string" ? articleLd.author.name : "Travis Woodley";
  const ogImageRaw =
    $('meta[property="og:image"]').attr("content") ||
    articleLd.image?.url ||
    articleLd.image ||
    "";

  const container = pickArticleContainer($).clone();
  container.find("script, style, noscript, form, button").remove();
  container.find("a").each((_, el) => {
    const href = $(el).attr("href");
    if (href?.startsWith("/")) $(el).attr("href", `https://revitalizenutritionshop.com${href}`);
    $(el).attr("target", "_blank");
    $(el).attr("rel", "noopener noreferrer");
  });

  const imageMap = new Map();
  const imageNodes = container.find("img").toArray();
  for (let i = 0; i < imageNodes.length; i += 1) {
    const el = imageNodes[i];
    const srcRaw = $(el).attr("src") || $(el).attr("data-src") || "";
    if (!srcRaw) continue;
    const absolute = srcRaw.startsWith("//")
      ? `https:${srcRaw}`
      : srcRaw.startsWith("/")
      ? `https://revitalizenutritionshop.com${srcRaw}`
      : srcRaw;
    const canonical = stripTracking(absolute);
    if (!imageMap.has(canonical)) {
      const local = await downloadImage(canonical, slug, imageMap.size);
      if (local) imageMap.set(canonical, local);
    }
    const localSrc = imageMap.get(canonical);
    if (localSrc) {
      $(el).attr("src", localSrc);
      $(el).removeAttr("srcset");
      $(el).removeAttr("data-srcset");
      $(el).attr("loading", "lazy");
      $(el).attr("decoding", "async");
      if (!$(el).attr("alt")) $(el).attr("alt", `${title} infographic`);
    }
  }

  let heroImage = null;
  if (ogImageRaw) {
    const ogAbs = ogImageRaw.startsWith("//") ? `https:${ogImageRaw}` : ogImageRaw;
    const ogCanonical = stripTracking(ogAbs);
    const localHero = await downloadImage(ogCanonical, slug, imageMap.size + 1);
    if (localHero) heroImage = localHero;
  }

  const firstParagraph = container.find("p").first().text().trim();
  const excerpt = decode(firstParagraph).slice(0, 220);
  const contentHtml = container.html() || "";
  return {
    slug,
    title,
    sourceUrl,
    publishedAt,
    author,
    excerpt,
    contentHtml,
    heroImage,
    localImages: [...imageMap.values()],
    importedAt: new Date().toISOString(),
  };
}

function xmlText(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decode((m?.[1] || "").trim());
}

async function fetchYouTubeVideos() {
  // Source channel requested by user.
  const channelUrl = "https://www.youtube.com/@rebuildmetabolichealth";
  const channelPage = await fetch(channelUrl, { headers: { "user-agent": "Mozilla/5.0" } }).then((r) => r.text());
  const channelIdMatch = channelPage.match(/"channelId":"([^"]+)"/);
  const channelId = channelIdMatch?.[1];
  if (!channelId) return fallbackYouTubeVideos();

  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const feed = await fetch(feedUrl, { headers: { "user-agent": "Mozilla/5.0" } }).then((r) => r.text());
  const entries = [...feed.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, 20);
  const parsed = entries
    .map((m) => {
      const entry = m[1];
      const videoId = xmlText(entry, "yt:videoId");
      const title = xmlText(entry, "title");
      const published = xmlText(entry, "published");
      const sourceUrl = `https://www.youtube.com/watch?v=${videoId}`;
      return {
        id: `video:youtube:${videoId}`,
        type: "video",
        title,
        source_url: sourceUrl,
        embed_url: `https://www.youtube.com/embed/${videoId}`,
        platform: "youtube",
        published_at: published,
        status: "candidate",
      };
    })
    .filter((item) => item.embed_url.endsWith("embed/"));
  return parsed.length ? parsed : fallbackYouTubeVideos();
}

function fallbackYouTubeVideos() {
  return [
    {
      id: "video:youtube:n2dzhUD0UZk",
      type: "video",
      title: "30–90 Min Post-Workout: Carbs + Protein for Faster Recovery, Better Sleep & Hormone Balance!",
      source_url: "https://www.youtube.com/watch?v=n2dzhUD0UZk",
      embed_url: "https://www.youtube.com/embed/n2dzhUD0UZk",
      platform: "youtube",
      status: "candidate",
    },
    {
      id: "video:youtube:a-gH5dw2Jf8",
      type: "video",
      title: "Gut Reset for Testosterone, Estrogen & Menopause Relief | Measured Meal Plan, 30-Minute Split",
      source_url: "https://www.youtube.com/watch?v=a-gH5dw2Jf8",
      embed_url: "https://www.youtube.com/embed/a-gH5dw2Jf8",
      platform: "youtube",
      status: "candidate",
    },
    {
      id: "video:youtube:PE1DG2FESxM",
      type: "video",
      title: "Sleep Window, Morning Light & Grounding Circadian Reset for Better Sleep 7–10 Day Plan",
      source_url: "https://www.youtube.com/watch?v=PE1DG2FESxM",
      embed_url: "https://www.youtube.com/embed/PE1DG2FESxM",
      platform: "youtube",
      status: "candidate",
    },
    {
      id: "video:youtube:sN3uwkl7u3o",
      type: "video",
      title: "BHRT, Peptides, Thyroid & Gut Health: The Plan to Rebuild Metabolic Health",
      source_url: "https://www.youtube.com/watch?v=sN3uwkl7u3o",
      embed_url: "https://www.youtube.com/embed/sN3uwkl7u3o",
      platform: "youtube",
      status: "candidate",
    },
  ];
}

async function main() {
  ensureDir(MEDIA_DIR);
  const master = readJson(MASTER_INDEX, { articles: [] });
  const articles = Array.isArray(master.articles) ? master.articles : [];

  const imported = [];
  for (const article of articles) {
    if (!article?.source_url || !article?.slug) continue;
    if (!article.source_url.includes("/blogs/news/")) continue;
    try {
      const importedArticle = await importArticle(article);
      imported.push(importedArticle);
      console.log(`Imported article: ${importedArticle.slug}`);
    } catch (error) {
      console.error(`Failed to import ${article.slug}:`, error.message);
    }
  }

  const youtubeVideos = await fetchYouTubeVideos();
  fs.writeFileSync(IMPORTED_ARTICLES, `${JSON.stringify(imported, null, 2)}\n`, "utf8");
  fs.writeFileSync(YOUTUBE_VIDEOS, `${JSON.stringify(youtubeVideos, null, 2)}\n`, "utf8");

  console.log(`Imported ${imported.length} articles`);
  console.log(`Imported ${youtubeVideos.length} YouTube videos`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

