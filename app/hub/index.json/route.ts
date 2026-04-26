import { NextResponse } from "next/server";
import { getHubArticles, getHubSummary, getHubVideos } from "@/lib/contentHub";

export const dynamic = "force-static";

export async function GET() {
  const summary = getHubSummary();
  const articles = getHubArticles().map((article) => ({
    type: "article",
    title: article.title,
    slug: article.slug,
    hub_url: `/hub/${article.slug}`,
    source_url: article.sourceUrl,
    source_domain: article.sourceDomain,
  }));
  const videos = getHubVideos().map((video) => ({
    type: "video",
    title: video.title,
    slug: video.slug,
    platform: video.platform,
    hub_url: `/hub/${video.slug}`,
    source_url: video.sourceUrl,
    embed_url: video.embedUrl,
    embeddable: video.embeddable,
  }));

  return NextResponse.json(
    {
      generated_at: new Date().toISOString(),
      summary,
      items: [...articles, ...videos],
    },
    {
      headers: {
        "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}

