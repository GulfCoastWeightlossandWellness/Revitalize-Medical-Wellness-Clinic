/**
 * Phase 5 — shared component used across service pages, symptom pages,
 * compare pages, location-service combos, and the homepage. Renders nothing
 * if `posts` is empty (per pre-approved decision: no empty grids).
 */
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

interface Props {
  posts: BlogPost[];
  heading?: string;
  background?: "stone" | "white" | "transparent";
  variant?: "default" | "compact"; // compact = 2-up max, used inside narrow contexts (combo sidebars)
}

const CATEGORY_COLORS: Record<string, string> = {
  "Hormone Therapy": "var(--color-teal)",
  "Weight Loss": "#4A7C59",
  "Aesthetics": "#7C5C4A",
  "Wellness": "#4A5C7C",
  "Hair Restoration": "#5C4A7C",
  "Sexual Wellness": "#7C4A5C",
  "Local": "var(--color-teal-mid)",
  "Symptoms": "#7C5C4A",
  "Demographic": "var(--color-teal)",
  "Education": "var(--color-teal-mid)",
  "Clinic": "var(--color-teal-mid)",
};

export default function RelatedPostsRow({
  posts,
  heading = "Related reading",
  background = "stone",
  variant = "default",
}: Props) {
  if (!posts || posts.length === 0) return null;

  const bg =
    background === "white"
      ? "#fff"
      : background === "transparent"
        ? "transparent"
        : "var(--color-stone)";

  const cols = variant === "compact" ? 2 : 3;

  return (
    <section
      style={{
        background: bg,
        padding: "64px clamp(24px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 600,
            marginBottom: "10px",
          }}
        >
          From the Learning Library
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
            fontWeight: 400,
            color: "var(--color-ink)",
            letterSpacing: "-0.01em",
            marginBottom: "28px",
          }}
        >
          {heading}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: "16px",
          }}
          className="related-posts-row"
        >
          {posts.map((post) => {
            const accent = CATEGORY_COLORS[post.category] ?? "var(--color-teal)";
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <article
                  style={{
                    background: "#fff",
                    borderRadius: "6px",
                    padding: "24px 22px",
                    height: "100%",
                    borderTop: `3px solid ${accent}`,
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s",
                  }}
                  className="related-post-card"
                >
                  <div
                    style={{
                      fontSize: "0.55rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: accent,
                      fontWeight: 500,
                      marginBottom: "12px",
                    }}
                  >
                    {post.category}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      color: "var(--color-ink)",
                      lineHeight: 1.4,
                      marginBottom: "10px",
                      flex: 1,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      lineHeight: 1.7,
                      color: "var(--color-muted)",
                      marginBottom: "16px",
                    }}
                  >
                    {post.description.length > 140
                      ? post.description.slice(0, 137) + "..."
                      : post.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "auto",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.65rem",
                        color: "var(--color-muted-light)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {post.readTime}
                    </span>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--color-teal)",
                      }}
                    >
                      Read &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
        <style>{`
          .related-post-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
          @media (max-width: 900px) {
            .related-posts-row { grid-template-columns: ${cols === 3 ? "1fr 1fr" : "1fr"} !important; }
          }
          @media (max-width: 560px) {
            .related-posts-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
