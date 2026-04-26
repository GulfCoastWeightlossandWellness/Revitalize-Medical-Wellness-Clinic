import { getHubArticles } from "@/lib/contentHub";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = getHubArticles();
  const siteUrl = "https://revitalizemedicalclinic.com";
  const now = new Date().toUTCString();

  const items = articles
    .map(
      (article) => `
        <item>
          <title>${escapeXml(article.title)}</title>
          <link>${siteUrl}/hub/${article.slug}</link>
          <guid isPermaLink="true">${siteUrl}/hub/${article.slug}</guid>
          <description>${escapeXml(`Sourced from ${article.sourceDomain}`)}</description>
          <pubDate>${now}</pubDate>
          <source url="${escapeXml(article.sourceUrl)}">${escapeXml(article.sourceDomain)}</source>
        </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Revitalize Content Hub Feed</title>
    <link>${siteUrl}/hub</link>
    <description>Centralized article feed from the Revitalize content hub.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

