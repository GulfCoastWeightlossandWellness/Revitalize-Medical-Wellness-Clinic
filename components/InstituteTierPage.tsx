/**
 * Shared template for the three Institute tier pages — Core, Elite, Metabolic
 * Year. Each tier page (under app/institute/{slug}/page.tsx) is a thin wrapper
 * that imports this and passes its tier-specific content. The shared template
 * keeps layout, schema, and section order consistent.
 */

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import InstituteApplicationForm from "@/components/InstituteApplicationForm";
import { SITE, INSTITUTE_PRICING, type InstituteTierSlug } from "@/lib/constants";

export interface InstituteTierContent {
  slug: InstituteTierSlug;
  /** Hero — short, declarative — what this tier IS. */
  heroHeadline: string;
  /** One-sentence positioning subheadline under the hero. */
  heroSubhead: string;
  /** Long-form "what this tier is" section paragraphs. */
  whatItIs: string[];
  /** What's included — bullet list. */
  includes: string[];
  /** Structure / timeline — paragraphs describing how the program runs. */
  structure: string[];
  /** Right for / not right for — short paragraphs. */
  rightFor: string;
  notRightFor: string | null;
  /** What success looks like — paragraphs. */
  success: string[];
  /** Travis's personal note — written in his voice. */
  travisNote: string[];
  /** Tier-specific FAQ. */
  faq: { q: string; a: string }[];
  /** External rebuildmetabolichealth.com fallback URL. */
  externalApplyUrl: string;
}

export default function InstituteTierPage({ content }: { content: InstituteTierContent }) {
  const tier = INSTITUTE_PRICING[content.slug];
  const externalUrl = content.externalApplyUrl;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `Rebuild Metabolic Health Institute — ${tier.name}`,
    description: content.heroSubhead,
    timeRequired: tier.durationISO,
    provider: {
      "@type": "EducationalOrganization",
      name: "Rebuild Metabolic Health Institute",
      url: `${SITE.url}/institute`,
    },
    instructor: {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "MSN, RN, CRNP",
      url: `${SITE.url}/travis`,
    },
    offers: {
      "@type": "Offer",
      price: tier.priceNumber,
      priceCurrency: "USD",
      url: `${SITE.url}/institute/${tier.slug}`,
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Rebuild Institute", item: `${SITE.url}/institute` },
      { "@type": "ListItem", position: 3, name: tier.name, item: `${SITE.url}/institute/${tier.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg)", padding: "20px clamp(24px, 6vw, 80px) 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", fontSize: "0.78rem", color: "var(--color-muted)" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          {" · "}
          <Link href="/institute" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Rebuild Institute</Link>
          {" · "}
          <span style={{ color: "var(--color-ink)" }}>{tier.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "var(--color-teal-dark)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "780px" }}>
          {/* Rebuild Institute brand mark — same containment pattern used on
              the /institute hero. Slightly smaller here because the tier
              eyebrow does the heavy identification work. */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.96)",
              borderRadius: "10px",
              padding: "10px 14px",
              marginBottom: "20px",
            }}
          >
            <Image
              src="/images/brand/rebuild-institute-logo.png"
              alt="Rebuild Metabolic Health Institute logo"
              width={1024}
              height={1024}
              priority
              style={{ width: "auto", height: "72px", objectFit: "contain", display: "block" }}
            />
          </div>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "20px" }}>
            Rebuild Metabolic Health Institute · {tier.name} · {tier.duration}
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 400, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.015em", marginBottom: "24px" }}>
            {content.heroHeadline}
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.7)", maxWidth: "600px", marginBottom: "28px" }}>
            {content.heroSubhead}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
            <a
              href="#apply"
              style={{
                display: "inline-block",
                background: "var(--color-gold)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "6px",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Apply for {tier.name} &rarr;
            </a>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "#fff" }}>
              {tier.price}
            </div>
          </div>
        </div>
      </section>

      {/* What this tier is */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              What {tier.name} Is
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "32px" }}>
              The structure, the depth, the access.
            </h2>
            {content.whatItIs.map((p, i) => (
              <p key={i} style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
                {p}
              </p>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* What's included */}
      <section style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              What's Included
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "28px" }}>
              Every component of the {tier.name} program.
            </h2>
            <ul style={{ paddingLeft: "0", listStyle: "none" }}>
              {content.includes.map((item, i) => (
                <li
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-divider)",
                    borderRadius: "6px",
                    padding: "16px 20px",
                    marginBottom: "10px",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    color: "var(--color-ink)",
                    borderLeft: "3px solid var(--color-gold)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Structure / timeline */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              The Structure
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "28px" }}>
              How {tier.name} runs over {tier.duration}.
            </h2>
            {content.structure.map((p, i) => (
              <p key={i} style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
                {p}
              </p>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Fit */}
      <section style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              Fit
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "28px" }}>
              Who {tier.name} is for — and who it isn't.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: content.notRightFor ? "1fr 1fr" : "1fr", gap: "16px" }} className="tier-page-fit-grid">
              <div style={{ background: "#fff", borderLeft: "3px solid var(--color-teal)", borderRadius: "6px", padding: "20px 22px" }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, marginBottom: "10px" }}>
                  Right for you if
                </div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--color-muted)", margin: 0 }}>
                  {content.rightFor}
                </p>
              </div>
              {content.notRightFor && (
                <div style={{ background: "#fff", borderLeft: "3px solid var(--color-gold)", borderRadius: "6px", padding: "20px 22px" }}>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "10px" }}>
                    Not right for you if
                  </div>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--color-muted)", margin: 0 }}>
                    {content.notRightFor}
                  </p>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* What success looks like */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              What Success Looks Like
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "28px" }}>
              The outcome you should expect.
            </h2>
            {content.success.map((p, i) => (
              <p key={i} style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
                {p}
              </p>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Travis's personal note */}
      <section style={{ background: "var(--color-teal)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(201,168,108,0.85)", fontWeight: 600, marginBottom: "16px" }}>
              From Travis
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "28px" }}>
              Why I built {tier.name} this way.
            </h2>
            {content.travisNote.map((p, i) => (
              <p key={i} style={{ fontSize: "0.97rem", lineHeight: 1.9, color: "rgba(255,255,255,0.8)", marginBottom: "20px" }}>
                {p}
              </p>
            ))}
            <p style={{ fontSize: "0.85rem", color: "var(--color-gold)", fontStyle: "italic", marginTop: "28px", marginBottom: 0 }}>
              — Travis Woodley, MSN, RN, CRNP
            </p>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              Common Questions
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "32px" }}>
              About {tier.name}.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {content.faq.map((item, i) => (
                <details key={i} style={{ background: "#fff", borderRadius: "4px", overflow: "hidden" }}>
                  <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem", color: "var(--color-ink)", lineHeight: 1.45, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                    {item.q}
                    <span style={{ color: "var(--color-teal)", flexShrink: 0, fontSize: "1.2rem", lineHeight: 1 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 22px 18px", fontSize: "0.88rem", lineHeight: 1.82, color: "var(--color-muted)" }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Apply */}
      <section id="apply" style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)", scrollMarginTop: "80px" }}>
        <FadeIn>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.15, marginBottom: "12px" }}>
                Apply for {tier.name}
              </h2>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--color-muted)" }}>
                {tier.price} · {tier.duration} · Travis reviews every application personally.
              </p>
            </div>
            <InstituteApplicationForm tier={tier.slug} tierName={tier.name} tierPrice={tier.price} />
            <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", textAlign: "center", marginTop: "20px" }}>
              Prefer to apply via the external Rebuild site?{" "}
              <a href={externalUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-teal)", textDecoration: "underline" }}>
                Use the rebuildmetabolichealth.com form &rarr;
              </a>
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Footer cross-links */}
      <section style={{ background: "var(--color-bg)", padding: "56px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
            Other Tiers
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="tier-cross-grid">
            {Object.values(INSTITUTE_PRICING).map((t) => {
              const isCurrent = t.slug === tier.slug;
              return (
                <Link
                  key={t.slug}
                  href={isCurrent ? "/institute" : `/institute/${t.slug}`}
                  style={{
                    background: isCurrent ? "var(--color-teal)" : "#fff",
                    color: isCurrent ? "#fff" : "var(--color-ink)",
                    border: "1px solid var(--color-divider)",
                    borderRadius: "8px",
                    padding: "20px 22px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: isCurrent ? "rgba(255,255,255,0.65)" : "var(--color-muted)", fontWeight: 600, marginBottom: "8px" }}>
                    {isCurrent ? "Currently viewing" : "Compare"}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", marginBottom: "4px" }}>{t.name}</div>
                  <div style={{ fontSize: "0.82rem", color: isCurrent ? "rgba(255,255,255,0.85)" : "var(--color-muted)" }}>
                    {t.price} · {t.duration}
                  </div>
                </Link>
              );
            })}
          </div>
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <Link href="/institute" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-teal)", textDecoration: "none" }}>
              &larr; Back to Institute overview
            </Link>
          </div>
          <style>{`@media (max-width: 720px) { .tier-cross-grid { grid-template-columns: 1fr !important; } .tier-page-fit-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>
    </>
  );
}
