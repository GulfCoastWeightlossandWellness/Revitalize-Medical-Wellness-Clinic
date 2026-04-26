import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog";
import { SITE } from "@/lib/constants";
import ShopCallout from "@/components/ShopCallout";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Revitalize Aesthetics & Wellness`,
    description: post.description,
  };
}

function renderContent(content: string) {
  const paragraphs = content.trim().split(/\n\n+/);
  return paragraphs.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)", marginTop: "48px", marginBottom: "16px", lineHeight: 1.3 }}>
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-ink)", marginTop: "32px", marginBottom: "12px" }}>
          {block.replace("### ", "")}
        </h3>
      );
    }
    if (block.startsWith("- ") || block.includes("\n- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- ")).map((l) => l.replace("- ", ""));
      return (
        <ul key={i} style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          {items.map((item, j) => (
            <li key={j} style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "6px" }}
              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
            />
          ))}
        </ul>
      );
    }
    if (/^\d+\./.test(block) || block.includes("\n1.") || block.match(/\n\d+\./)) {
      const items = block.split("\n").filter((l) => /^\d+\./.test(l)).map((l) => l.replace(/^\d+\.\s*/, ""));
      if (items.length > 0) {
        return (
          <ol key={i} style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            {items.map((item, j) => (
              <li key={j} style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "6px" }}
                dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
              />
            ))}
          </ol>
        );
      }
    }
    if (block.trim() === "") return null;
    return (
      <p key={i} style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}
        dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
      />
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "MSN, RN, CRNP",
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "800px" }}>
          <Link href="/blog" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "28px" }}>
            &larr; All Articles
          </Link>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 500, marginBottom: "14px" }}>{post.category}</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)", fontWeight: 400, lineHeight: 1.15, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>{post.date}</span>
            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>{post.readTime}</span>
            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>By Travis Woodley, MSN, RN, CRNP</span>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: "64px", alignItems: "start" }} className="post-layout">
          <FadeIn>
            <article>
              {renderContent(post.content)}

              <div style={{ background: "var(--color-stone)", border: "1px solid var(--color-divider)", borderRadius: "6px", padding: "24px 28px", marginTop: "48px" }}>
                <p style={{ fontSize: "0.75rem", lineHeight: 1.75, color: "var(--color-muted-light)" }}>
                  <strong style={{ color: "var(--color-muted)" }}>Medical disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. Individual clinical decisions should be made in consultation with a qualified healthcare provider following appropriate evaluation. References to specific treatments, dosing, or protocols are informational.
                </p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <aside style={{ position: "sticky", top: "100px" }}>
              <div style={{ background: "var(--color-teal)", borderRadius: "6px", padding: "32px 28px", marginBottom: "24px" }}>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "12px" }}>Related service</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "#fff", lineHeight: 1.3, marginBottom: "16px" }}>{post.relatedService}</h3>
                <Link href={post.relatedServiceHref} style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "10px 20px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Learn More</Link>
              </div>

              <div style={{ background: "#fff", borderRadius: "6px", padding: "28px 24px", marginBottom: "24px" }}>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "14px" }}>Book a consultation</div>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-muted)", marginBottom: "16px" }}>Ready to discuss what you read? Book a consultation online or call either location.</p>
                <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "var(--color-teal)", color: "#fff", padding: "12px 20px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center", marginBottom: "8px" }}>Book Online</a>
                <a href={SITE.phone.columbusHref} style={{ display: "block", border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "10px 20px", borderRadius: "6px", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.1em", textDecoration: "none", textAlign: "center" }}>{SITE.phone.columbus}</a>
              </div>

              <ShopCallout variant="sidebar" />

              <div style={{ background: "#fff", borderRadius: "6px", padding: "28px 24px" }}>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "16px" }}>More articles</div>
                {otherPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ display: "block", textDecoration: "none", paddingBottom: "14px", marginBottom: "14px", borderBottom: "1px solid var(--color-divider)" }}>
                    <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", marginBottom: "4px" }}>{p.category}</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--color-ink)", lineHeight: 1.4, fontFamily: "var(--font-display)" }}>{p.title}</div>
                  </Link>
                ))}
              </div>
            </aside>
          </FadeIn>
        </div>
        <style>{`
          .post-layout { grid-template-columns: 1fr 320px; }
          @media (max-width: 1024px) { .post-layout { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
