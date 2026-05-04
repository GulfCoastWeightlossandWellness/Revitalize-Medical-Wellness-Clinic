import Link from "next/link";
import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";
import ShopCallout from "@/components/ShopCallout";
import RelatedPostsRow from "@/components/RelatedPostsRow";
import InstituteCallout from "@/components/InstituteCallout";
import UniversalContactForm from "@/components/UniversalContactForm";
import { getPostsByServiceSlug } from "@/lib/blog";

// Slugs that get an Institute "Go deeper" callout above the FAQ.
// Hormone + metabolic + weight loss + sexual wellness services where
// the Institute coaching is a natural adjacent option.
const INSTITUTE_CALLOUT_SLUGS = new Set([
  "hormone-therapy-women",
  "hormone-therapy-men",
  "testosterone-injection-therapy",
  "biote-pellet-therapy",
  "medical-weight-loss",
  "nutritional-counseling",
  "erectile-dysfunction",
  "o-shot",
]);

export interface FAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline?: string;
    heroKeyword: string;
  };
  intro: {
    problem: string;
    what: string;
    how: string;
  };
  candidacy: {
    good: string[];
    notFor: string[];
  };
  whatToExpect: string[];
  relatedServices: { name: string; href: string }[];
  relatedPosts: { title: string; href: string }[];
  faqs: FAQ[];
  earlyVisual?: ReactNode;
  schema?: Record<string, unknown>;
  disclaimer?: string;
  /** Page href used for BreadcrumbList schema, e.g. "/services/hormone-therapy-women" */
  pageHref?: string;
  /** Page display name for BreadcrumbList breadcrumb */
  pageName?: string;
  /** If set, renders a "Take Assessment" CTA panel before the bottom CTA section */
  assessmentCta?: { label: string; href: string };
}

function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {faqs.map((faq, i) => (
        <details
          key={i}
          style={{
            background: "#fff",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <summary
            style={{
              padding: "20px 24px",
              cursor: "pointer",
              fontFamily: "var(--font-display)",
              fontSize: "1.05rem",
              fontWeight: 400,
              color: "var(--color-ink)",
              lineHeight: 1.4,
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {faq.q}
            <span style={{ color: "var(--color-teal)", flexShrink: 0, fontSize: "1.2rem", lineHeight: 1 }}>+</span>
          </summary>
          <div
            style={{
              padding: "0 24px 20px",
              fontSize: "0.88rem",
              lineHeight: 1.85,
              color: "var(--color-muted)",
            }}
          >
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  );
}

export default function ServicePage({ hero, intro, candidacy, whatToExpect, relatedServices, relatedPosts, faqs, earlyVisual, schema, disclaimer, pageHref, pageName, assessmentCta }: ServicePageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = pageHref && pageName ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: pageName, item: `${SITE.url}${pageHref}` },
    ],
  } : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "var(--color-teal-dark)",
          padding: "80px clamp(24px, 6vw, 80px) 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,108,0.07) 0%, transparent 68%)",
            top: "50%",
            right: "-100px",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "820px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>{hero.eyebrow}</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)",
              fontWeight: 400,
              lineHeight: 1.07,
              color: "#fff",
              letterSpacing: "-0.015em",
              marginBottom: "20px",
            }}
            dangerouslySetInnerHTML={{ __html: hero.headline }}
          />
          {hero.subheadline && (
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "560px",
                marginBottom: "32px",
              }}
            >
              {hero.subheadline}
            </p>
          )}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--color-gold)",
                color: "#fff",
                padding: "13px 26px",
                borderRadius: "6px",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
              className="nav-cta-link"
            >
              Book a Consultation
            </a>
            <a
              href={SITE.phone.columbusHref}
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
              className="list-link-block"
            >
              Columbus: {SITE.phone.columbus}
            </a>
            <a
              href={SITE.phone.warnerRobinsHref}
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
              className="list-link-block"
            >
              Warner Robins: {SITE.phone.warnerRobins}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px, 6vw, 80px)" }}>
        {/* Intro */}
        <FadeIn>
          <section style={{ padding: "72px 0 0" }}>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "var(--color-ink-2)",
                fontWeight: 400,
                marginBottom: "32px",
                maxWidth: "760px",
              }}
            >
              {intro.problem}
            </p>
          </section>
        </FadeIn>

        {earlyVisual ? <div style={{ marginBottom: "40px" }}>{earlyVisual}</div> : null}

        {/* What & How */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            padding: "40px 0 60px",
          }}
          className="svc-what-grid"
        >
          <FadeIn>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.7rem",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                What is this treatment?
              </h2>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.88, color: "var(--color-muted)" }}>
                {intro.what}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.7rem",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                How we approach it at Revitalize
              </h2>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.88, color: "var(--color-muted)" }}>
                {intro.how}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Candidacy */}
        <FadeIn>
          <section
            style={{
              background: "var(--color-stone)",
              borderRadius: "8px",
              padding: "48px 44px",
              marginBottom: "60px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
            className="candidacy-grid"
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  marginBottom: "20px",
                }}
              >
                Who is a good candidate
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {candidacy.good.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-muted)" }}>
                    <span style={{ color: "var(--color-teal)", flexShrink: 0, marginTop: "3px" }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  marginBottom: "20px",
                }}
              >
                Not appropriate for
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {candidacy.notFor.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-muted)" }}>
                    <span style={{ color: "var(--color-muted-light)", flexShrink: 0, marginTop: "3px" }}>&#215;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeIn>

        {/* What to expect */}
        <FadeIn>
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 400,
                color: "var(--color-ink)",
                marginBottom: "32px",
                lineHeight: 1.2,
              }}
            >
              What to expect at your appointment
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {whatToExpect.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "24px 0",
                    borderBottom: i < whatToExpect.length - 1 ? "1px solid var(--color-divider)" : "none",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--color-teal-pale)",
                      border: "1.5px solid var(--color-teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontFamily: "var(--font-display)",
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      color: "var(--color-teal)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.82, color: "var(--color-muted)", paddingTop: "4px" }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* P3 — Institute callout for hormone/weight loss/sexual wellness services */}
        {(() => {
          const serviceSlug = pageHref?.match(/^\/services\/([a-z0-9-]+)$/)?.[1];
          if (!serviceSlug || !INSTITUTE_CALLOUT_SLUGS.has(serviceSlug)) return null;
          return (
            <FadeIn>
              <InstituteCallout variant="box" />
            </FadeIn>
          );
        })()}

        {/* Phase 5 — Related Reading: auto-derived from getPostsByServiceSlug */}
        {(() => {
          const serviceSlug = pageHref?.match(/^\/services\/([a-z0-9-]+)$/)?.[1];
          if (!serviceSlug) return null;
          const relatedReadingPosts = getPostsByServiceSlug(serviceSlug, undefined, 3);
          if (relatedReadingPosts.length === 0) return null;
          return (
            <FadeIn>
              <div style={{ marginBottom: "48px", marginLeft: "-24px", marginRight: "-24px" }}>
                <RelatedPostsRow
                  posts={relatedReadingPosts}
                  heading={`Related reading on ${pageName ?? "this service"}`}
                  background="transparent"
                />
              </div>
            </FadeIn>
          );
        })()}

        {/* FAQ */}
        <FadeIn>
          <section style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 400,
                color: "var(--color-ink)",
                marginBottom: "32px",
                lineHeight: 1.2,
              }}
            >
              Frequently asked questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </section>
        </FadeIn>

        {/* Disclaimer */}
        {disclaimer && (
          <div
            style={{
              padding: "20px 24px",
              background: "var(--color-stone)",
              borderRadius: "6px",
              borderLeft: "3px solid var(--color-divider)",
              marginBottom: "48px",
            }}
          >
            <p className="disclaimer">{disclaimer}</p>
          </div>
        )}

        {/* Shop callout */}
        <div style={{ marginBottom: "48px" }}>
          <ShopCallout variant="inline" />
        </div>

        {/* Related content */}
        {(relatedServices.length > 0 || relatedPosts.length > 0) && (
          <section style={{ marginBottom: "72px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="related-grid">
            {relatedServices.length > 0 && (
              <div>
                <div
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    fontWeight: 500,
                    marginBottom: "16px",
                  }}
                >
                  Related treatments
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--color-teal)",
                        fontWeight: 500,
                        transition: "color 0.2s",
                      }}
                      className="list-link-block"
                    >
                      {s.name} &#8594;
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {relatedPosts.length > 0 && (
              <div>
                <div
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    fontWeight: 500,
                    marginBottom: "16px",
                  }}
                >
                  Further reading
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {relatedPosts.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--color-muted)",
                        transition: "color 0.2s",
                      }}
                      className="related-post-link list-link-block"
                    >
                      {p.title} &#8594;
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      {/* Assessment CTA — shown when assessmentCta prop is provided */}
      {assessmentCta && (
        <section style={{ background: "var(--color-stone)", padding: "56px clamp(24px, 6vw, 80px)" }}>
          <FadeIn>
            <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", borderRadius: "8px", padding: "40px 44px", borderLeft: "4px solid var(--color-gold)", display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <div style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "10px" }}>
                  Free patient tool
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "10px" }}>
                  {assessmentCta.label}
                </h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--color-muted)" }}>
                  Use this assessment before your consultation to help identify relevant services and prepare for your appointment.
                </p>
              </div>
              <Link
                href={assessmentCta.href}
                style={{
                  flexShrink: 0,
                  background: "var(--color-teal)",
                  color: "#fff",
                  padding: "13px 26px",
                  borderRadius: "6px",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Take Assessment
              </Link>
            </div>
          </FadeIn>
        </section>
      )}

      {/* P4 — Contact form on every service page */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "24px", textAlign: "center" }}>
              <div className="eyebrow" style={{ marginBottom: "14px" }}>Have questions about {pageName ?? "this service"}?</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                Send Travis a message.
              </h2>
            </div>
            <UniversalContactForm
              heading="Request a Consultation"
              subheading={`Tell Travis what you are working through with ${pageName ?? "this service"}. He or his team will follow up directly.`}
            />
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "var(--color-teal)",
          padding: "64px clamp(24px, 6vw, 80px)",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "-0.01em",
              marginBottom: "12px",
            }}
          >
            Ready to learn if this is right for you?
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.5)", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
            Every treatment begins with a consultation. We&apos;ll review your history, your goals, and your candidacy — and give you a clear, honest recommendation.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--color-gold)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
              className="nav-cta-link"
            >
              Book a Consultation
            </a>
            <a
              href={SITE.phone.columbusHref}
              style={{
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.7)",
                padding: "14px 24px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
              className="nav-cta-link"
            >
              Call Columbus
            </a>
            <a
              href={SITE.phone.warnerRobinsHref}
              style={{
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.7)",
                padding: "14px 24px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
              className="nav-cta-link"
            >
              Call Warner Robins
            </a>
          </div>

          {/* Location page deep links */}
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/locations/columbus-ga"
              style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textDecoration: "none" }}
              className="svc-loc-link"
            >
              Columbus clinic details →
            </Link>
            <Link
              href="/locations/warner-robins-ga"
              style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textDecoration: "none" }}
              className="svc-loc-link"
            >
              Warner Robins clinic details →
            </Link>
          </div>
        </FadeIn>
      </section>

      <style>{`
        .svc-what-grid { grid-template-columns: 1fr 1fr; }
        .candidacy-grid { grid-template-columns: 1fr 1fr; }
        .related-grid { grid-template-columns: 1fr 1fr; }
        .related-post-link:hover { color: var(--color-teal) !important; }
        .svc-loc-link:hover { color: rgba(255,255,255,0.72) !important; }
        @media (max-width: 768px) {
          .svc-what-grid { grid-template-columns: 1fr !important; }
          .candidacy-grid { grid-template-columns: 1fr !important; }
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
