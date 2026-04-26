#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HUB_DIR = path.join(ROOT, "data", "content-hub");
const PATHS = {
  pages: path.join(HUB_DIR, "pages.json"),
  links: path.join(HUB_DIR, "links.json"),
  media: path.join(HUB_DIR, "media-links.json"),
  embeds: path.join(HUB_DIR, "embed-links.json"),
  crawlReport: path.join(HUB_DIR, "crawl-report.json"),
  masterIndex: path.join(HUB_DIR, "master-content-index.json"),
  syncReport: path.join(HUB_DIR, "content-sync-report.json"),
  youtubeVideos: path.join(HUB_DIR, "youtube-videos.json"),
};

function readJson(filePath, fallback = []) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function htmlDecode(text = "") {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&nbsp;/g, " ");
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function hashId(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

function normalizeUrl(value = "") {
  try {
    const url = new URL(value.trim());
    url.hash = "";
    const tracking = new Set(["fbclid", "gclid", "mc_cid", "mc_eid"]);
    [...url.searchParams.keys()].forEach((key) => {
      if (key.startsWith("utm_") || tracking.has(key.toLowerCase())) {
        url.searchParams.delete(key);
      }
    });
    const query = [...url.searchParams.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");
    url.search = query ? `?${query}` : "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return value.trim();
  }
}

function pickArticlesFromPages(pages) {
  const out = new Map();
  for (const page of pages) {
    if (!page?.url || page.status !== "ok") continue;
    const url = normalizeUrl(page.url);
    const match = url.match(/^https:\/\/revitalizenutritionshop\.com\/blogs\/news\/([a-z0-9-]+)$/i);
    if (!match) continue;
    const slug = match[1].toLowerCase();
    if (
      slug === "article" ||
      slug === "summary_large_image" ||
      slug.includes("width-device-width") ||
      /^[a-f0-9]{20,}$/i.test(slug)
    ) {
      continue;
    }
    const cleanedTitle = htmlDecode(page.title || "").replace(/\s+\|\s+Metabolic Health.*$/i, "").trim();
    out.set(slug, {
      id: `article:${slug}`,
      type: "article",
      title: cleanedTitle || titleFromSlug(slug),
      slug,
      source_url: url,
      source_domain: "revitalizenutritionshop.com",
      embed_type: "internal-render-or-source-link",
      status: "candidate",
    });
  }
  return [...out.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function pickVideos(embeds, links) {
  const videos = new Map();

  for (const row of embeds) {
    const raw = row?.embed_url;
    if (!raw) continue;
    const url = normalizeUrl(htmlDecode(raw).replace(/&amp;/g, "&"));
    const vimeo = url.match(/https:\/\/player\.vimeo\.com\/video\/(\d+)/i);
    if (!vimeo) continue;
    const id = vimeo[1];
    videos.set(`vimeo:${id}`, {
      id: `video:vimeo:${id}`,
      type: "video",
      title: `Vimeo Video ${id}`,
      source_url: url,
      embed_url: url,
      platform: "vimeo",
      status: "candidate",
    });
  }

  let youtubeChannelSeen = false;
  for (const row of links) {
    const target = row?.target || "";
    if (!target.includes("youtube.com/")) continue;
    if (target.includes("/@rebuildmetabolichealth") || target.includes("/channel/") || target.includes("/c/")) {
      youtubeChannelSeen = true;
      break;
    }
  }

  if (youtubeChannelSeen) {
    videos.set("youtube:channel", {
      id: "video:youtube-channel",
      type: "video-channel",
      title: "Rebuild Metabolic Health YouTube Channel",
      source_url: "https://www.youtube.com/@rebuildmetabolichealth",
      embed_url: "https://www.youtube.com/@rebuildmetabolichealth",
      platform: "youtube",
      status: "candidate",
    });
  }

  return [...videos.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function mergeYouTubeVideos(baseVideos, importedYouTubeVideos) {
  const map = new Map(baseVideos.map((video) => [video.id, video]));
  for (const video of importedYouTubeVideos) {
    if (!video?.id || !video?.source_url) continue;
    map.set(video.id, {
      id: video.id,
      type: "video",
      title: video.title || "YouTube Video",
      source_url: video.source_url,
      embed_url: video.embed_url || video.source_url,
      platform: "youtube",
      status: "candidate",
      published_at: video.published_at || null,
    });
  }
  return [...map.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function pickMedia(mediaLinks) {
  const out = new Map();
  for (const row of mediaLinks) {
    if (!row?.target) continue;
    const url = normalizeUrl(row.target);
    if (!url.startsWith("http")) continue;
    if (url.includes("googletagmanager.com")) continue;
    out.set(url, {
      url,
      domain: row.target_domain || safeHost(url),
      ext: row.ext || safeExt(url),
    });
  }
  return [...out.values()].sort((a, b) => a.url.localeCompare(b.url));
}

function safeHost(value) {
  try {
    return new URL(value).hostname;
  } catch {
    return "";
  }
}

function safeExt(value) {
  try {
    const name = new URL(value).pathname.split("/").pop() || "";
    const m = name.match(/(\.[a-z0-9]+)$/i);
    return m?.[1] || "";
  } catch {
    return "";
  }
}

function main() {
  const pages = readJson(PATHS.pages, []);
  const links = readJson(PATHS.links, []);
  const mediaLinks = readJson(PATHS.media, []);
  const embeds = readJson(PATHS.embeds, []);
  const importedYouTubeVideos = readJson(PATHS.youtubeVideos, []);
  const crawl = readJson(PATHS.crawlReport, {});
  const previous = readJson(PATHS.masterIndex, null);

  const articles = pickArticlesFromPages(pages);
  const videos = mergeYouTubeVideos(pickVideos(embeds, links), importedYouTubeVideos);
  const media = pickMedia(mediaLinks);

  const next = {
    generated_at: new Date().toISOString(),
    summary: {
      article_candidates: articles.length,
      video_candidates: videos.length,
      media_assets: media.length,
      pages_crawled_ok: Number(crawl.pages_crawled || 0),
      pages_errors: Number(crawl.pages_errors || 0),
    },
    articles,
    videos,
    media,
  };

  fs.writeFileSync(PATHS.masterIndex, `${JSON.stringify(next, null, 2)}\n`, "utf8");

  const previousSummary = previous?.summary || {};
  const report = {
    generated_at: next.generated_at,
    source_files: {
      pages: path.relative(ROOT, PATHS.pages),
      links: path.relative(ROOT, PATHS.links),
      media_links: path.relative(ROOT, PATHS.media),
      embed_links: path.relative(ROOT, PATHS.embeds),
      crawl_report: path.relative(ROOT, PATHS.crawlReport),
    },
    output_file: path.relative(ROOT, PATHS.masterIndex),
    checksum: hashId(JSON.stringify(next.summary) + JSON.stringify(articles.slice(0, 20))),
    summary: next.summary,
    delta: {
      article_candidates: next.summary.article_candidates - Number(previousSummary.article_candidates || 0),
      video_candidates: next.summary.video_candidates - Number(previousSummary.video_candidates || 0),
      media_assets: next.summary.media_assets - Number(previousSummary.media_assets || 0),
    },
    notes: [
      "This refresh script is deterministic and idempotent for the same crawl artifacts.",
      "Run a fresh crawl first if you need newly published upstream content.",
    ],
  };
  fs.writeFileSync(PATHS.syncReport, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  console.log("Content hub refresh complete.");
  console.log(JSON.stringify(report.summary, null, 2));
}

main();

