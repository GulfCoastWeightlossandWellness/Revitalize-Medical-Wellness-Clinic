import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { formatPostDate, getAllBlogPosts, getFeaturedPost } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Articles | Hormone Health, Weight Loss & Aesthetics Education | Columbus GA",
  description: "Clinical articles on hormone therapy, medical weight loss, and aesthetic treatments from Travis Woodley, MSN, RN, CRNP — Revitalize Aesthetics & Wellness in Columbus and Warner Robins, GA.",
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/blog",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Hormone Therapy": "var(--color-teal)",
  "Weight Loss": "#4A7C59",
  "Aesthetics": "#7C5C4A",
  "IV Therapy": "#4A5C7C",
  "Hair Restoration": "#5C4A7C",
  "Sexual Wellness": "#7C4A5C",
  "Clinic": "var(--color-teal-mid)",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  // Phase 5: explicit featured selection (falls back to most recent if none marked)
  const featured = getFeaturedPost() ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Learning Library", item: `${SITE.url}/hub` },
      { "@type": "ListItem", position: 3, name: "Articles", item: `${SITE.url}/blog` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "700px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>Clinical insights · Learning Library</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 400, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            Articles
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", maxWidth: "520px" }}>
            Clinical articles and practical patient guidance on hormones, metabolic medicine,
            and aesthetic treatments — from Travis Woodley, MSN, RN, CRNP.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--color-divider)",
                borderRadius: "6px",
                padding: "18px 22px",
                marginBottom: "22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>
                Looking for videos, guides, and extended resources? Visit the full Learning Library.
              </div>
              <Link
                href="/hub"
                style={{
                  fontSize: "0.58rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: "var(--color-teal)",
                  borderRadius: "6px",
                  padding: "10px 14px",
                  whiteSpace: "nowrap",
                }}
              >
                Learning Library →
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <Link href={`/blog/${featured.slug}`} style={{ display: "block", textDecoration: "none", marginBottom: "64px" }}>
              <div style={{ background: "#fff", borderRadius: "6px", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", transition: "box-shadow 0.2s" }} className="featured-post-grid">
                <div style={{ minHeight: "360px", display: "flex", alignItems: "flex-end", padding: "40px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #0E3D4D 0%, #091922 100%)" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "36px", zIndex: 1 }}>
                    <Image
                      src="/images/site/biote-provider-badge.png"
                      alt="Biote provider badge"
                      width={900}
                      height={1164}
                      priority
                      style={{ width: "min(82%, 360px)", height: "auto", opacity: 0.92, filter: "drop-shadow(0 16px 34px rgba(0,0,0,0.35))" }}
                    />
                  </div>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(9,25,34,0.65), rgba(9,25,34,0.35))", zIndex: 2 }} />
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <span style={{ display: "inline-block", fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: "100px", marginBottom: "16px" }}>Featured</span>
                    <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "8px" }}>{featured.category}</div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.3, marginBottom: "12px" }}>{featured.title}</h2>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>{formatPostDate(featured.date)} &bull; {featured.readTime}</div>
                  </div>
                </div>
                <div style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "24px" }}>{featured.description}</p>
                  <span style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)" }}>Read article &rarr;</span>
                </div>
              </div>
            </Link>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="blog-grid">
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} style={{ display: "block", textDecoration: "none", height: "100%" }}>
                  <article style={{ background: "#fff", borderRadius: "4px", padding: "32px 28px", height: "100%", borderTop: `3px solid ${CATEGORY_COLORS[post.category] ?? "var(--color-teal)"}`, display: "flex", flexDirection: "column", transition: "box-shadow 0.2s" }} className="blog-card">
                    <div style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: CATEGORY_COLORS[post.category] ?? "var(--color-teal)", fontWeight: 500, marginBottom: "14px" }}>{post.category}</div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.4, marginBottom: "12px", flex: 1 }}>{post.title}</h2>
                    <p style={{ fontSize: "0.8rem", lineHeight: 1.78, color: "var(--color-muted)", marginBottom: "20px" }}>{post.description}</p>
                    <div style={{ marginTop: "auto" }}>
                      <div style={{ fontSize: "0.65rem", color: "var(--color-muted-light)", letterSpacing: "0.04em", marginBottom: "10px" }}>
                        {formatPostDate(post.date)}
                        <span style={{ margin: "0 8px", opacity: 0.4 }}>·</span>
                        {post.readTime}
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)" }}>Read &rarr;</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`
          .featured-post-grid { grid-template-columns: 1fr 1fr; }
          .blog-grid { grid-template-columns: repeat(3, 1fr); }
          .blog-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
          @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 768px) { .featured-post-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 560px) { .blog-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
