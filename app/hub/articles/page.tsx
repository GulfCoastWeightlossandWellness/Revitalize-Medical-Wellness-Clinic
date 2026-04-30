import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { getAllBlogPosts, type BlogPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Full Article Archive | Learning Library | Revitalize Aesthetics & Wellness",
  description: "Complete archive of educational articles on hormone health, metabolic medicine, aesthetics, and wellness from the Revitalize Learning Library.",
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/hub/articles",
  },
};

type ArticleCategorySlug =
  | "hormone-therapy"
  | "weight-loss"
  | "aesthetics"
  | "iv-hydration"
  | "sexual-wellness"
  | "hair-restoration"
  | "wellness"
  | "functional-medicine";

function categorySlugForPost(post: BlogPost): ArticleCategorySlug {
  const category = post.category.toLowerCase();
  const title = post.title.toLowerCase();
  const text = `${title} ${post.description.toLowerCase()}`;

  if (category.includes("hormone")) return "hormone-therapy";
  if (category.includes("weight")) return "weight-loss";
  if (category.includes("aesthetic")) return "aesthetics";
  if (category.includes("iv")) return "iv-hydration";
  if (category.includes("sexual")) return "sexual-wellness";
  if (category.includes("hair")) return "hair-restoration";
  if (category.includes("functional")) return "functional-medicine";
  if (category.includes("clinic") || category.includes("education")) return "wellness";

  if (text.includes("hormone") || text.includes("biote") || text.includes("menopause") || text.includes("testosterone")) return "hormone-therapy";
  if (text.includes("weight") || text.includes("metabolic") || text.includes("semaglutide") || text.includes("tirzepatide") || text.includes("glp")) return "weight-loss";
  if (text.includes("botox") || text.includes("dysport") || text.includes("filler") || text.includes("microneedling") || text.includes("laser") || text.includes("aesthetic")) return "aesthetics";
  if (text.includes("iv") || text.includes("hydration")) return "iv-hydration";
  if (text.includes("libido") || text.includes("erectile") || text.includes("o-shot") || text.includes("sexual")) return "sexual-wellness";
  if (text.includes("hair") || text.includes("scalp")) return "hair-restoration";
  if (text.includes("thyroid") || text.includes("insulin") || text.includes("inflammation") || text.includes("mitochond")) return "functional-medicine";
  return "wellness";
}

const TOPIC_CHIPS: Array<{ id: "all" | ArticleCategorySlug; label: string }> = [
  { id: "all", label: "All Topics" },
  { id: "hormone-therapy", label: "Hormone Health" },
  { id: "weight-loss", label: "Weight & Metabolism" },
  { id: "aesthetics", label: "Aesthetics" },
  { id: "iv-hydration", label: "IV Hydration" },
  { id: "sexual-wellness", label: "Sexual Wellness" },
  { id: "hair-restoration", label: "Hair Restoration" },
  { id: "wellness", label: "Wellness" },
];

export default async function HubArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; topic?: string }>;
}) {
  const query = await searchParams;
  const rawCategory = query.category ?? query.topic ?? "all";
  const activeCategory = TOPIC_CHIPS.some((chip) => chip.id === rawCategory) ? rawCategory : "all";
  const articles = getAllBlogPosts();
  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => categorySlugForPost(article) === activeCategory);

  return (
    <>
      <section style={{ background: "var(--color-ink)", padding: "74px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div className="eyebrow-white" style={{ marginBottom: "18px" }}>
            Learning Library
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
            Full Article Archive
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
                href={chip.id === "all" ? "/hub/articles" : `/hub/articles?category=${chip.id}`}
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "9px 12px",
                  borderRadius: "999px",
                  border: activeCategory === chip.id ? "1px solid var(--color-teal)" : "1px solid var(--color-divider)",
                  background: activeCategory === chip.id ? "var(--color-teal)" : "#fff",
                  color: activeCategory === chip.id ? "#fff" : "var(--color-muted)",
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
                  {article.description ? (
                    <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", lineHeight: 1.65, margin: "0 0 8px" }}>
                      {article.description}
                    </p>
                  ) : null}
                  <p style={{ fontSize: "0.74rem", color: "var(--color-muted)", margin: 0 }}>
                    {article.date ? `${new Date(article.date).toLocaleDateString()}` : ""}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                  <Link
                    href={`/blog/${article.slug}`}
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
                    Read Article
                  </Link>
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

