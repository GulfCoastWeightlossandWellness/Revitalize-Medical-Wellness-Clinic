import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";
import { getHubArticles, getHubVideos } from "@/lib/contentHub";

export const metadata: Metadata = {
  title: "Content Hub | Articles, Videos, and Educational Resources",
  description:
    "Centralized hub for Revitalize educational content across articles, videos, and legacy resources from clinic and nutrition platforms.",
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/hub",
  },
  openGraph: {
    title: "Revitalize Learning Library",
    description:
      "Complete patient education library for hormone optimization, metabolic health, recovery, and clinical resources.",
    url: "https://revitalizemedicalclinic.com/hub",
    type: "website",
  },
};

export default function ContentHubPage() {
  const articles = getHubArticles().slice(0, 4);
  const videos = getHubVideos().slice(0, 4);
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Revitalize Learning Library",
    description:
      "Patient-facing education library with articles, videos, and clinical resource pathways.",
    url: "https://revitalizemedicalclinic.com/hub",
    hasPart: [
      ...articles.map((a) => ({
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <section style={{ background: "linear-gradient(130deg, #091922 0%, #0E3D4D 60%, #174E60 100%)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.9fr", gap: "30px" }} className="hub-hero-grid">
          <div>
            <div className="eyebrow-white" style={{ marginBottom: "20px" }}>
              Learning library
            </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.6vw, 4.6rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              color: "#fff",
              letterSpacing: "-0.015em",
              marginBottom: "18px",
            }}
          >
            Revitalize
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Content Hub</em>
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", maxWidth: "680px" }}>
            Complete patient education library for hormone optimization, metabolic health,
            nutrition, and recovery guidance from Travis Woodley and the Revitalize clinical team.
            Use this to browse everything in one place.
          </p>
            <div style={{ marginTop: "26px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link href="/hub/articles" style={{ background: "var(--color-gold)", color: "#fff", padding: "12px 20px", borderRadius: "6px", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Read Articles
              </Link>
              <Link href="/hub/videos" style={{ background: "rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.88)", padding: "12px 20px", borderRadius: "6px", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.24)" }}>
                Watch Videos
              </Link>
            </div>
          </div>
          <FadeIn delay={0.08}>
            <div style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "22px" }}>
              <div style={{ fontSize: "0.54rem", color: "rgba(255,255,255,0.58)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>
                Featured in this platform
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", color: "#fff", fontWeight: 400, marginBottom: "8px", lineHeight: 1.25 }}>
                {SITE.book.title}
              </h2>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "16px" }}>
                &ldquo;You are not broken. You are unbalanced.&rdquo; This hub is built around the same
                patient-first framework from Travis&apos;s clinical and book content.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a href={SITE.book.allPlatforms} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.6rem", color: "var(--color-gold)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
                  Get The Book ↗
                </a>
                <a href={SITE.ecosystem.nutritionShop} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.6rem", color: "var(--color-gold)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
                  Visit Vitamin Shop ↗
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{`
          .hub-hero-grid { grid-template-columns: 1.2fr 0.9fr; }
          @media (max-width: 900px) {
            .hub-hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "10px", padding: "26px 24px" }}>
              <div className="eyebrow" style={{ marginBottom: "10px" }}>
                Start here
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontWeight: 400, color: "var(--color-ink)", marginBottom: "8px" }}>
                Pick what you need right now
              </h2>
              <p style={{ fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-muted)", marginBottom: "18px", maxWidth: "760px" }}>
                This hub is organized for patient decisions, not content inventory. Choose your
                concern, learn quickly, and take the next step when you are ready.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }} className="hub-start-grid">
                {[
                  { title: "Hormones", desc: "Perimenopause, testosterone, BHRT", href: "/hub/articles?topic=hormones" },
                  { title: "Energy", desc: "Fatigue, sleep, recovery basics", href: "/hub/videos" },
                  { title: "Weight & Metabolic", desc: "Insulin, body composition, GLP-1", href: "/hub/articles?topic=metabolic" },
                  { title: "Supplements", desc: "Clinical vitamin guidance", href: "/hub/resources" },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    style={{
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-divider)",
                      borderRadius: "8px",
                      padding: "14px 14px",
                      display: "block",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-ink)", marginBottom: "5px" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-muted)", lineHeight: 1.55, marginBottom: "10px" }}>
                      {item.desc}
                    </div>
                    <div style={{ fontSize: "0.56rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: "var(--color-teal)" }}>
                      Open →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          <div style={{ marginTop: "52px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }} className="hub-entry-grid">
            <FadeIn>
              <div style={{ background: "#fff", borderRadius: "6px", padding: "34px 30px", borderTop: "3px solid var(--color-teal)" }}>
                <div className="eyebrow" style={{ marginBottom: "12px" }}>
                  Articles
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                    fontWeight: 400,
                    color: "var(--color-ink)",
                    marginBottom: "10px",
                  }}
                >
                  Evidence-backed patient articles
                </h2>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-muted)", marginBottom: "20px" }}>
                  Hormones, metabolic medicine, fertility, sleep, and recovery explained in plain
                  language for real-world patient decisions.
                </p>
                <Link
                  href="/hub/articles"
                  style={{
                    display: "inline-block",
                    background: "var(--color-teal)",
                    color: "#fff",
                    padding: "12px 22px",
                    borderRadius: "6px",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Open Article Dashboard
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div style={{ background: "#fff", borderRadius: "6px", padding: "34px 30px", borderTop: "3px solid var(--color-gold)" }}>
                <div className="eyebrow" style={{ marginBottom: "12px" }}>
                  Videos
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                    fontWeight: 400,
                    color: "var(--color-ink)",
                    marginBottom: "10px",
                  }}
                >
                  Watch the patient video library
                </h2>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-muted)", marginBottom: "20px" }}>
                  Practical education from Travis and the team. No cluttered labels, just direct
                  access to the actual lessons.
                </p>
                <Link
                  href="/hub/videos"
                  style={{
                    display: "inline-block",
                    background: "var(--color-teal)",
                    color: "#fff",
                    padding: "12px 22px",
                    borderRadius: "6px",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Open Video Dashboard
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div style={{ background: "#fff", borderRadius: "6px", padding: "34px 30px", borderTop: "3px solid var(--color-ink)" }}>
                <div className="eyebrow" style={{ marginBottom: "12px" }}>
                  Resources
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                    fontWeight: 400,
                    color: "var(--color-ink)",
                    marginBottom: "10px",
                  }}
                >
                  Care pathways and tools
                </h2>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-muted)", marginBottom: "20px" }}>
                  Jump to the nutrition shop, book resources, financing info, and trusted ecosystem
                  destinations from one command center.
                </p>
                <Link
                  href="/hub/resources"
                  style={{
                    display: "inline-block",
                    background: "var(--color-teal)",
                    color: "#fff",
                    padding: "12px 22px",
                    borderRadius: "6px",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Open Resource Dashboard
                </Link>
              </div>
            </FadeIn>
          </div>

          <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="hub-preview-grid">
            <FadeIn>
              <div style={{ background: "#fff", borderRadius: "8px", border: "1px solid var(--color-divider)", padding: "24px 24px 20px" }}>
                <div className="eyebrow" style={{ marginBottom: "10px" }}>
                  Featured articles
                </div>
                {articles.length === 0 ? (
                  <p style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
                    Articles are still being synced into the hub.
                  </p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {articles.map((a) => (
                      <Link key={a.slug} href={`/hub/${a.slug}`} style={{ fontSize: "0.84rem", color: "var(--color-teal)", borderBottom: "1px solid var(--color-divider)", paddingBottom: "8px" }}>
                        {a.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div style={{ background: "#fff", borderRadius: "8px", border: "1px solid var(--color-divider)", padding: "24px 24px 20px" }}>
                <div className="eyebrow" style={{ marginBottom: "10px" }}>
                  Featured videos
                </div>
                {videos.length === 0 ? (
                  <p style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
                    Videos are still being synced into the hub.
                  </p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {videos.map((v) => (
                      <a key={v.id} href={v.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.84rem", color: "var(--color-teal)", borderBottom: "1px solid var(--color-divider)", paddingBottom: "8px" }}>
                        {v.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <div style={{ marginTop: "16px", background: "linear-gradient(115deg, #F8F6F2 0%, #FFFFFF 100%)", border: "1px solid var(--color-divider)", borderRadius: "10px", padding: "24px" }}>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-teal-light)", marginBottom: "8px" }}>
                From Travis
              </div>
              <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.4rem", lineHeight: 1.4, color: "var(--color-ink)" }}>
                &ldquo;If a supplement does not support outcomes we can measure in clinic, it does not
                stay in our recommendations.&rdquo;
              </p>
              <a href={SITE.ecosystem.nutritionShop} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "14px", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: "var(--color-teal)" }}>
                Shop Clinical-Grade Vitamins ↗
              </a>
            </div>
          </FadeIn>
        </div>
        <style>{`
          .hub-start-grid { grid-template-columns: repeat(4, 1fr); }
          .hub-entry-grid { grid-template-columns: 1fr 1fr 1fr; }
          .hub-preview-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 900px) {
            .hub-start-grid { grid-template-columns: 1fr 1fr !important; }
            .hub-entry-grid { grid-template-columns: 1fr !important; }
            .hub-preview-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 560px) {
            .hub-start-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

