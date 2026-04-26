import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { getHubArticles } from "@/lib/contentHub";

export const metadata: Metadata = {
  title: "Content Hub Articles",
  description: "Centralized index of long-form educational articles from the Revitalize ecosystem.",
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/hub/articles",
  },
};

function topicForArticle(title: string) {
  const t = title.toLowerCase();
  if (t.includes("hormone") || t.includes("bhrt") || t.includes("estrogen") || t.includes("testosterone")) return "hormones";
  if (t.includes("metabolic") || t.includes("weight") || t.includes("creatine")) return "metabolic";
  if (t.includes("vitamin") || t.includes("gallbladder") || t.includes("bile")) return "nutrition";
  return "general";
}

const TOPIC_CHIPS = [
  { id: "all", label: "All Topics" },
  { id: "hormones", label: "Hormones" },
  { id: "metabolic", label: "Metabolic Health" },
  { id: "nutrition", label: "Nutrition & Vitamins" },
];

export default async function HubArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const query = await searchParams;
  const activeTopic = query.topic && TOPIC_CHIPS.some((chip) => chip.id === query.topic) ? query.topic : "all";
  const articles = getHubArticles();
  const filtered =
    activeTopic === "all"
      ? articles
      : articles.filter((article) => topicForArticle(article.title) === activeTopic);

  return (
    <>
      <section style={{ background: "var(--color-ink)", padding: "74px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div className="eyebrow-white" style={{ marginBottom: "18px" }}>
            Content hub
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.8rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            Article Dashboard
          </h1>
          <p style={{ color: "rgba(255,255,255,0.52)", lineHeight: 1.8, maxWidth: "700px" }}>
            Browse the complete long-form patient education library with transparent sources and
            clear pathways back into care.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "64px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
            {TOPIC_CHIPS.map((chip) => (
              <Link
                key={chip.id}
                href={chip.id === "all" ? "/hub/articles" : `/hub/articles?topic=${chip.id}`}
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "9px 12px",
                  borderRadius: "999px",
                  border: activeTopic === chip.id ? "1px solid var(--color-teal)" : "1px solid var(--color-divider)",
                  background: activeTopic === chip.id ? "var(--color-teal)" : "#fff",
                  color: activeTopic === chip.id ? "#fff" : "var(--color-muted)",
                }}
              >
                {chip.label}
              </Link>
            ))}
          </div>
          {filtered.map((article, idx) => (
            <FadeIn key={article.slug} delay={Math.min(idx * 0.02, 0.14)}>
              <article
                style={{
                  background: "#fff",
                  borderRadius: "6px",
                  padding: "22px 22px",
                  border: "1px solid var(--color-divider)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "14px",
                }}
                className="hub-article-row"
              >
                <div>
                  <h2 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-ink)", lineHeight: 1.45, marginBottom: "8px" }}>
                    {article.title}
                  </h2>
                  {article.excerpt ? (
                    <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", lineHeight: 1.65, margin: "0 0 8px" }}>
                      {article.excerpt}
                    </p>
                  ) : null}
                  <p style={{ fontSize: "0.74rem", color: "var(--color-muted)", margin: 0 }}>
                    Source: {article.sourceDomain}
                    {article.publishedAt ? ` · ${new Date(article.publishedAt).toLocaleDateString()}` : ""}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                  <Link
                    href={`/hub/${article.slug}`}
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "#fff",
                      background: "var(--color-teal)",
                      borderRadius: "6px",
                      padding: "10px 14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Open Article
                  </Link>
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "var(--color-teal)",
                      border: "1px solid var(--color-teal)",
                      borderRadius: "6px",
                      padding: "10px 14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Source ↗
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
          {filtered.length === 0 ? (
            <div style={{ background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "6px", padding: "22px" }}>
              <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--color-muted)" }}>
                No articles match this topic yet. Try another filter.
              </p>
            </div>
          ) : null}
        </div>
        <style>{`
          @media (max-width: 760px) {
            .hub-article-row {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}

