import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Revitalize Ecosystem | Clinic, Nutrition, Coaching & Book",
  description: "The Revitalize Ecosystem — Revitalize Aesthetics & Wellness, Revitalize Nutrition Shop, Rebuild Metabolic Health Institute, and the book by Travis Woodley.",
};

const ECOSYSTEM_NODES = [
  {
    name: "Revitalize Aesthetics & Wellness",
    category: "Clinical Practice",
    description: "The clinical home — hormone therapy, medical weight loss, aesthetics, IV hydration, and advanced aesthetic procedures at two Georgia locations. Everything is evaluated and treated by Travis Woodley or his clinical team.",
    href: "/",
    external: false,
    cta: "Explore Services",
    color: "var(--color-teal)",
  },
  {
    name: "Revitalize Nutrition Shop",
    category: "Supplements & Nutrition",
    description: "Professional-grade supplements and nutrition products curated by Travis and the Revitalize clinical team. Supplements aligned with the protocols used in the clinic.",
    href: SITE.ecosystem.nutritionShop,
    external: true,
    cta: "Visit Shop",
    color: "#4A7C59",
  },
  {
    name: "Rebuild Metabolic Health Institute",
    category: "Coaching Program",
    description: "A structured 12-week coaching program for midlife adults navigating the hormonal and metabolic shifts that medicine often misses. Covers hormones, metabolism, sleep, stress, and gut health through a systems lens.",
    href: SITE.ecosystem.rebuildInstitute,
    external: true,
    cta: "Learn More",
    color: "#6B5B4E",
  },
  {
    name: "You're Not Broken — You're Unbalanced",
    category: "The Book",
    description: "Travis Woodley's clinician-written guide to midlife metabolic health — for patients who have been told their labs are normal while feeling the opposite. Available on Amazon, Apple Books, Kobo, and all major platforms.",
    href: "/book",
    external: false,
    cta: "View the Book",
    color: "var(--color-gold)",
  },
];

export default function EcosystemPage() {
  return (
    <>
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "720px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>The full picture</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 400, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            The Revitalize<br /><em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Ecosystem</em>
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", maxWidth: "560px" }}>
            Revitalize is not a single clinic. It is a connected set of resources — clinical, educational, nutritional, and coaching — built around one consistent clinical philosophy. Travis Woodley is the thread that connects all of it.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }} className="ecosystem-grid">
            {ECOSYSTEM_NODES.map((node, i) => (
              <FadeIn key={node.name} delay={i * 0.08}>
                <div style={{ background: "#fff", padding: "48px 40px", borderRadius: "4px", borderTop: `3px solid ${node.color}`, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.26em", textTransform: "uppercase", color: node.color, fontWeight: 500, marginBottom: "14px" }}>{node.category}</div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.3, marginBottom: "16px" }}>{node.name}</h2>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "28px", flex: 1 }}>{node.description}</p>
                  {node.external ? (
                    <a href={node.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: node.color, color: "#fff", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", alignSelf: "flex-start" }}>
                      {node.cta}
                    </a>
                  ) : (
                    <Link href={node.href} style={{ display: "inline-block", background: node.color, color: "#fff", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", alignSelf: "flex-start" }}>
                      {node.cta}
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`.ecosystem-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .ecosystem-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>One philosophy</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "20px" }}>
              Clinical precision across every touchpoint
            </h2>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "16px" }}>
              Whether you are a patient at the clinic, a reader of the book, a subscriber to the coaching program, or a customer of the nutrition shop — the clinical philosophy is the same: read the whole person, identify what is actually driving the problem, and address it directly.
            </p>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "32px" }}>
              The difference between Revitalize and a traditional medical practice is that Travis did not wait for medicine to catch up. He built the infrastructure to treat patients the way the evidence has pointed for years — comprehensively, metabolically, and without dismissing what they are experiencing.
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-teal)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>Book a Consultation</a>
              <Link href="/about" style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>About Travis</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
