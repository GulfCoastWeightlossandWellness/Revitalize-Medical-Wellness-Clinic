import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";
import {
  PEPTIDE_CATEGORIES,
  PEPTIDE_COUNT,
} from "@/lib/peptides";

export const metadata: Metadata = {
  title: "Peptides — Patient Education Hub | Revitalize Aesthetics & Wellness",
  description: `Patient-facing peptide education hub. Browse ${PEPTIDE_COUNT} peptides across ${PEPTIDE_CATEGORIES.length} clinical categories — metabolic, growth hormone axis, recovery, skin, immune, sexual wellness, brain and mood, and longevity. Curated by Travis Woodley, MSN, RN, CRNP.`,
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/hub/peptides",
  },
  openGraph: {
    title: "Peptides — Learning Library | Revitalize Aesthetics & Wellness",
    description: `Browse ${PEPTIDE_COUNT} peptides organized by clinical category. Education, not prescription.`,
    url: "https://revitalizemedicalclinic.com/hub/peptides",
    type: "website",
  },
};

const eyebrow: React.CSSProperties = {
  fontSize: "0.58rem",
  letterSpacing: "0.26em",
  textTransform: "uppercase",
  color: "var(--color-gold)",
  fontWeight: 600,
  marginBottom: "16px",
};

export default function HubPeptidesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Learning Library", item: `${SITE.url}/hub` },
      { "@type": "ListItem", position: 3, name: "Peptides", item: `${SITE.url}/hub/peptides` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg)", padding: "20px clamp(24px, 6vw, 80px) 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", fontSize: "0.78rem", color: "var(--color-muted)" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          {" · "}
          <Link href="/hub" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Learning Library</Link>
          {" · "}
          <span style={{ color: "var(--color-ink)" }}>Peptides</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "var(--color-teal-dark)", padding: "64px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "880px" }}>
          <div style={{ ...eyebrow, color: "var(--color-gold)" }}>Learning Library · Peptides</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 400, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.015em", marginBottom: "24px" }}>
            Peptides — what they actually do.
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.7)", maxWidth: "680px" }}>
            {PEPTIDE_COUNT} peptides organized by clinical category. Use this hub to browse what we work with — from metabolic and recovery tools to skin, immune, sexual wellness, and longevity protocols. Each peptide links into the full clinical reference where Travis explains the indication, course duration, cycling pattern, and the foundational work each one needs to be paired with.
          </p>
        </div>
      </section>

      {/* Top CTA */}
      <section style={{ background: "var(--color-bg)", padding: "32px clamp(24px, 6vw, 80px) 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link
            href="/peptide-education"
            style={{
              display: "inline-block",
              background: "var(--color-gold)",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "6px",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Read the Full Education Guide &rarr;
          </Link>
          <Link
            href="/services/peptide-education"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "var(--color-teal)",
              padding: "12px 24px",
              borderRadius: "6px",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid var(--color-teal)",
            }}
          >
            Peptide Therapy Service Page
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: "var(--color-bg)", padding: "48px clamp(24px, 6vw, 80px) 80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {PEPTIDE_CATEGORIES.map((cat) => (
            <FadeIn key={cat.id}>
              <div style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "10px" }}>
                  {cat.title}
                </h2>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--color-muted)", marginBottom: "20px", maxWidth: "780px" }}>
                  {cat.description}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "10px",
                  }}
                >
                  {cat.peptides.map((p) => (
                    <Link
                      key={p.id}
                      href={`/peptide-education#${p.id}`}
                      style={{
                        display: "block",
                        background: "#fff",
                        border: "1px solid var(--color-divider)",
                        borderLeft: "3px solid var(--color-gold)",
                        borderRadius: "6px",
                        padding: "16px 18px",
                        textDecoration: "none",
                        transition: "border-color 0.2s, transform 0.2s",
                      }}
                      className="peptide-hub-card"
                    >
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-ink)", marginBottom: "6px", lineHeight: 1.3 }}>
                        {p.name}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--color-muted)", lineHeight: 1.55, marginBottom: "8px" }}>
                        {p.whyWeUse}
                      </div>
                      <div style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600 }}>
                        Read clinical detail &rarr;
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <style>{`.peptide-hub-card:hover { transform: translateY(-2px); border-left-color: var(--color-teal) !important; }`}</style>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "var(--color-stone)", padding: "64px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <div style={eyebrow}>Next Step</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "16px" }}>
              Have questions about your situation?
            </h2>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "28px" }}>
              Note: peptide therapy is pending FDA approval and not currently prescribed at Revitalize. A wellness consultation with Travis can discuss the foundational hormone, metabolic, and recovery work that often answers the underlying question — and which we do directly provide.
            </p>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "var(--color-gold)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Book a Consultation &rarr;
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
