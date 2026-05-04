import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";
import { getHubArticles, getHubVideos } from "@/lib/contentHub";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Learning Library | Hormone Health, Weight Loss & Aesthetics Education | Revitalize",
  description:
    "Patient education library from Revitalize Aesthetics & Wellness. Articles, videos, and patient guides on hormone therapy, medical weight loss, aesthetics, IV hydration, and more. Led by Travis Woodley, MSN, RN, CRNP.",
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/hub",
  },
  openGraph: {
    title: "Learning Library | Revitalize Aesthetics & Wellness",
    description:
      "Complete patient education library for hormone optimization, metabolic health, aesthetics, recovery, and clinical resources — from Travis Woodley and the Revitalize team.",
    url: "https://revitalizemedicalclinic.com/hub",
    type: "website",
  },
};

const TOPIC_PATHS = [
  { title: "Hormone Health", desc: "Perimenopause, testosterone, BHRT, Biote pellets", href: "/hub/articles?category=hormone-therapy", service: "/services/hormone-therapy-women" },
  { title: "Weight & Metabolism", desc: "GLP-1, semaglutide, insulin resistance, body composition", href: "/hub/articles?category=weight-loss", service: "/services/medical-weight-loss" },
  { title: "Aesthetics", desc: "Neuromodulators, fillers, skin resurfacing, PRP", href: "/hub/articles?category=aesthetics", service: "/services/neuromodulators" },
  { title: "IV Hydration", desc: "Vitamin infusions, recovery, hydration protocols", href: "/hub/articles?category=iv-hydration", service: "/services/iv-hydration" },
  { title: "Sexual Wellness", desc: "O-Shot, erectile dysfunction, intimacy restoration", href: "/hub/articles?category=sexual-wellness", service: "/services/o-shot" },
  { title: "Hair Restoration", desc: "DE|RIVE protocol, PRP for hair, scalp health", href: "/hub/articles?category=hair-restoration", service: "/services/derive-hair-restoration" },
  { title: "Peptides", desc: "BPC-157, GH-axis, MOTS-C, GHK-Cu, PT-141 — clinical reference for 25+ peptides", href: "/hub/peptides", service: "/services/peptide-education" },
];

export default function LearningLibraryPage() {
  const hubArticles = getHubArticles().slice(0, 4);
  const videos = getHubVideos().slice(0, 4);
  // Preserve pre-MDX source-order behavior (oldest 6) until Phase 5
  // redesigns this section.
  const blogPosts = [...getAllBlogPosts()]
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .slice(0, 6);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Revitalize Learning Library",
    description: "Patient-facing education library with articles, videos, and clinical resource pathways.",
    url: "https://revitalizemedicalclinic.com/hub",
    hasPart: [
      ...hubArticles.map((a) => ({
        "@type": "Article",
        headline: a.title,
        url: `https://revitalizemedicalclinic.com/hub/${a.slug}`,
      })),
      ...videos.map((v) => ({
        "@type": "VideoObject",
        name: v.title,
        url: `https://revitalizemedicalclinic.com/hub/${v.slug}`,
      })),
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Learning Library", item: `${SITE.url}/hub` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(130deg, #091922 0%, #0E3D4D 60%, #174E60 100%)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.9fr", gap: "48px", alignItems: "center" }} className="hub-hero-grid">
          <div>
            <div className="eyebrow-white" style={{ marginBottom: "20px" }}>Patient Education</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.6vw, 4.8rem)", fontWeight: 400, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.015em", marginBottom: "18px" }}>
              Learning
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Library</em>
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", maxWidth: "560px", marginBottom: "32px" }}>
              Explore articles, videos, and patient guides from Revitalize. Written and curated by Travis Woodley, MSN, RN, CRNP — so you can make confident, informed decisions before your first appointment.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link href="/hub/articles" style={{ background: "var(--color-gold)", color: "#fff", padding: "13px 24px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Read Articles
              </Link>
              <Link href="/hub/videos" style={{ background: "rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.88)", padding: "13px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.2)" }}>
                Watch Videos
              </Link>
              <Link href="/tools" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", padding: "13px 10px" }}>
                Take Assessment →
              </Link>
            </div>
          </div>
          <FadeIn delay={0.08}>
            <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "28px 24px" }}>
              <div style={{ fontSize: "0.54rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "10px" }}>Featured · Travis Woodley</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "#fff", fontWeight: 400, marginBottom: "10px", lineHeight: 1.25 }}>
                {SITE.book.title}
              </h2>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "20px" }}>
                &ldquo;You are not broken. You are unbalanced.&rdquo; The clinical framework behind the clinic, the protocols, and every resource in this library.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href={SITE.book.allPlatforms} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--color-gold)", color: "#fff", padding: "11px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
                  Get The Book ↗
                </a>
                <Link href="/book" style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>
                  View all formats →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{`.hub-hero-grid { grid-template-columns: 1.2fr 0.9fr; } @media (max-width: 900px) { .hub-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── BROWSE BY FORMAT ── */}
      <section style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "36px" }}>
              <div className="eyebrow" style={{ marginBottom: "12px" }}>Browse by format</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                Choose how you learn
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }} className="hub-format-grid">
            {[
              {
                eyebrow: "Articles",
                title: "Long-form patient education",
                desc: "Hormones, metabolic medicine, fertility, sleep, aesthetics, and recovery explained in clinical-quality language for real-world patient decisions.",
                href: "/hub/articles",
                accent: "var(--color-teal)",
                cta: "Open Article Library",
              },
              {
                eyebrow: "Videos",
                title: "Visual education from Travis",
                desc: "Watch practical patient education directly from Travis and the Revitalize team. Short-form clinical explainers without the fluff.",
                href: "/hub/videos",
                accent: "var(--color-gold)",
                cta: "Watch Videos",
              },
              {
                eyebrow: "Patient Guides",
                title: "Resources and care pathways",
                desc: "Jump to the nutrition shop, book resources, financing options, and trusted ecosystem destinations from one place.",
                href: "/hub/resources",
                accent: "var(--color-ink)",
                cta: "Explore Guides",
              },
            ].map((card) => (
              <FadeIn key={card.eyebrow}>
                <div style={{ background: "#fff", borderRadius: "8px", padding: "34px 30px", borderTop: `3px solid ${card.accent}`, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div className="eyebrow" style={{ marginBottom: "12px" }}>{card.eyebrow}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 400, color: "var(--color-ink)", marginBottom: "10px", lineHeight: 1.25 }}>{card.title}</h3>
                  <p style={{ fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-muted)", marginBottom: "24px", flex: 1 }}>{card.desc}</p>
                  <Link href={card.href} style={{ display: "inline-block", background: "var(--color-teal)", color: "#fff", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    {card.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`.hub-format-grid { grid-template-columns: repeat(3, 1fr); } @media (max-width: 900px) { .hub-format-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── LATEST ARTICLES FROM TRAVIS ── */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "36px", gap: "20px", flexWrap: "wrap" }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: "12px" }}>Latest articles</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                  From the Revitalize blog
                </h2>
              </div>
              <Link href="/blog" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)", whiteSpace: "nowrap" }}>
                All articles →
              </Link>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="hub-articles-grid">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} style={{ display: "block", textDecoration: "none", height: "100%" }}>
                  <article style={{ background: "#fff", borderRadius: "4px", padding: "28px 24px", height: "100%", borderTop: "3px solid var(--color-teal)", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s" }} className="hub-article-card">
                    <div style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 500, marginBottom: "12px" }}>{post.category}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.08rem", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.4, marginBottom: "10px", flex: 1 }}>{post.title}</h3>
                    <p style={{ fontSize: "0.78rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "16px" }}>{post.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                      <span style={{ fontSize: "0.62rem", color: "var(--color-muted-light)" }}>{post.readTime}</span>
                      <span style={{ fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)" }}>Read →</span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>

          {hubArticles.length > 0 && (
            <FadeIn>
              <div style={{ marginTop: "28px", background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "8px", padding: "22px 24px" }}>
                <div className="eyebrow" style={{ marginBottom: "10px" }}>Also in the library</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }} className="hub-also-grid">
                  {hubArticles.map((a) => (
                    <Link key={a.slug} href={`/hub/${a.slug}`} style={{ fontSize: "0.84rem", color: "var(--color-teal)", padding: "8px 0", borderBottom: "1px solid var(--color-divider)", display: "block" }} className="list-link-block">
                      {a.title}
                    </Link>
                  ))}
                </div>
                <Link href="/hub/articles" style={{ display: "inline-block", marginTop: "16px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)" }}>
                  Full article archive →
                </Link>
              </div>
            </FadeIn>
          )}
        </div>
        <style>{`
          .hub-articles-grid { grid-template-columns: repeat(3, 1fr); }
          .hub-also-grid { grid-template-columns: repeat(2, 1fr); }
          .hub-article-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
          @media (max-width: 900px) { .hub-articles-grid { grid-template-columns: 1fr 1fr !important; } .hub-also-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 560px) { .hub-articles-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── VIDEOS ── */}
      {videos.length > 0 && (
        <section style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "36px", gap: "20px", flexWrap: "wrap" }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: "12px" }}>Video education</div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                    Watch &amp; learn
                  </h2>
                </div>
                <Link href="/hub/videos" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)", whiteSpace: "nowrap" }}>
                  All videos →
                </Link>
              </div>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }} className="hub-videos-grid">
              {videos.map((v, i) => (
                <FadeIn key={v.id} delay={i * 0.06}>
                  <article style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--color-divider)" }}>
                    <iframe
                      src={v.embedUrl}
                      title={v.title}
                      loading="lazy"
                      style={{ width: "100%", aspectRatio: "16 / 9", border: "none", background: "#000" }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h3 style={{ fontSize: "0.88rem", lineHeight: 1.45, color: "var(--color-ink)", margin: 0 }}>{v.title}</h3>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
          <style>{`.hub-videos-grid { grid-template-columns: repeat(2, 1fr); } @media (max-width: 768px) { .hub-videos-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>
      )}

      {/* ── BROWSE BY TOPIC ── */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "36px" }}>
              <div className="eyebrow" style={{ marginBottom: "12px" }}>Browse by topic</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                Popular patient topics
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }} className="hub-topics-grid">
            {TOPIC_PATHS.map((topic, i) => (
              <FadeIn key={topic.title} delay={i * 0.05}>
                <div style={{ background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "8px", padding: "24px 22px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "8px" }}>{topic.title}</h3>
                  <p style={{ fontSize: "0.78rem", lineHeight: 1.65, color: "var(--color-muted)", marginBottom: "16px" }}>{topic.desc}</p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <Link href={topic.href} style={{ fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-teal)" }}>
                      Read Articles →
                    </Link>
                    <Link href={topic.service} style={{ fontSize: "0.58rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-muted-light)" }}>
                      View Service →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`.hub-topics-grid { grid-template-columns: repeat(3, 1fr); } @media (max-width: 900px) { .hub-topics-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 560px) { .hub-topics-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── TRAVIS / AUTHOR SECTION ── */}
      <section style={{ background: "var(--color-teal-dark)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="hub-author-grid">
          <FadeIn>
            <div>
              <div className="eyebrow-white" style={{ marginBottom: "16px" }}>Author &amp; clinician</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.01em" }}>
                Travis Woodley,<br />
                <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>MSN, RN, CRNP</em>
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", marginBottom: "28px" }}>
                With 17+ years in high-acuity clinical medicine and functional wellness, Travis brings the same evidence-based framework to every article, video, and patient consultation. Every resource in this library reflects what he actually discusses in clinic — not marketing copy.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/about" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", padding: "11px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  About Travis
                </Link>
                <a href={SITE.book.allPlatforms} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-gold)", color: "#fff", padding: "11px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Get the Book ↗
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "28px 24px" }}>
              <div style={{ fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>This library covers</div>
              {[
                "Hormone optimization for men and women",
                "Medical weight loss and GLP-1 therapy",
                "Aesthetic treatments and skin health",
                "IV hydration and recovery protocols",
                "Sexual wellness and intimacy restoration",
                "Hair restoration and scalp health",
                "Clinical supplement guidance",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: "0.84rem", color: "rgba(255,255,255,0.55)" }}>
                  <span style={{ color: "var(--color-teal-light)", flexShrink: 0 }}>—</span>
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{`.hub-author-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 900px) { .hub-author-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)", textAlign: "center" }}>
        <FadeIn>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Patient tools</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "14px", lineHeight: 1.15 }}>
              Not sure where to start?
            </h2>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "32px" }}>
              Use the Treatment Finder or Hormone Health Assessment before your consultation — so you arrive with a clear starting point.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/tools" style={{ background: "var(--color-teal)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Use the Treatment Finder
              </Link>
              <Link href="/start-here" style={{ border: "1.5px solid rgba(201,168,108,0.4)", color: "var(--color-gold)", padding: "14px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Start Here — New Patients
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
