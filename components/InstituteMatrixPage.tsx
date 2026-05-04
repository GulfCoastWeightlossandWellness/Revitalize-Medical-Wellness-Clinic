import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import InstituteInquiryForm from "@/components/InstituteInquiryForm";
import { SITE } from "@/lib/constants";

/**
 * Shared template for the 5 Institute SEO matrix pages.
 * Each matrix page is a thin wrapper that passes specific copy + related
 * service links. Schema (Course + EducationalOcc) is rendered consistently.
 */

export interface InstituteMatrixPageProps {
  slug: string;
  title: string;
  eyebrow: string;
  hero: {
    h1: string;
    subhead: string;
  };
  intro: string;
  /** 3-5 paragraphs of body copy in Travis's voice. */
  bodyParagraphs: string[];
  /** What's included in this specific coaching focus. */
  whatIncluded: string[];
  /** Who this specific track is for (clinical specifics). */
  whoFor: string;
  /** Related Revitalize service slugs. */
  relatedServices: { name: string; href: string }[];
}

export default function InstituteMatrixPage({
  slug,
  title,
  eyebrow,
  hero,
  intro,
  bodyParagraphs,
  whatIncluded,
  whoFor,
  relatedServices,
}: InstituteMatrixPageProps) {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description: intro,
    provider: {
      "@type": "EducationalOrganization",
      name: "Rebuild Metabolic Health Institute",
      url: `${SITE.url}/institute`,
      sameAs: SITE.ecosystem.rebuildInstitute,
    },
    instructor: {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "MSN, RN, CRNP",
      url: `${SITE.url}/travis`,
    },
    url: `${SITE.url}/institute/${slug}`,
    educationalLevel: "Adult continuing education / clinical coaching",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "var(--color-teal-dark)",
          padding: "80px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          {/* Rebuild Institute brand mark — same containment pattern as the
              other Institute hero surfaces. */}
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
              style={{ width: "auto", height: "64px", objectFit: "contain", display: "block" }}
            />
          </div>
          <Link
            href="/institute"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 500,
              textDecoration: "none",
              display: "block",
              marginBottom: "20px",
            }}
          >
            &larr; Rebuild Metabolic Health Institute
          </Link>
          <div
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            {eyebrow}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#fff",
              letterSpacing: "-0.015em",
              marginBottom: "24px",
            }}
          >
            {hero.h1}
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.65)",
              maxWidth: "600px",
            }}
          >
            {hero.subhead}
          </p>
        </div>
      </section>

      {/* Body */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "72px clamp(24px, 6vw, 80px)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "56px",
            alignItems: "start",
          }}
          className="matrix-layout"
        >
          <FadeIn>
            <article>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "var(--color-ink)",
                  marginBottom: "28px",
                  fontStyle: "italic",
                }}
              >
                {intro}
              </p>
              {bodyParagraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.9,
                    color: "var(--color-muted)",
                    marginBottom: "20px",
                  }}
                >
                  {p}
                </p>
              ))}

              {/* What's included */}
              <div
                style={{
                  marginTop: "40px",
                  background: "var(--color-stone)",
                  borderRadius: "8px",
                  padding: "28px 28px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  What this track covers
                </div>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  {whatIncluded.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.8,
                        color: "var(--color-muted)",
                        marginBottom: "8px",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who it's for */}
              <div
                style={{
                  marginTop: "32px",
                  background: "#fff",
                  border: "1px solid var(--color-divider)",
                  borderRadius: "8px",
                  padding: "28px 28px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--color-teal)",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Who this track is for
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: "var(--color-muted)",
                    margin: 0,
                  }}
                >
                  {whoFor}
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.1}>
            <aside
              style={{
                position: "sticky",
                top: "100px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  background: "var(--color-teal)",
                  borderRadius: "6px",
                  padding: "24px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: "10px",
                  }}
                >
                  About the Institute
                </div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "14px",
                  }}
                >
                  Rebuild is the coaching extension of Travis&apos;s clinical work.
                  Open to current patients and to anyone who finds it online.
                </p>
                <Link
                  href="/institute"
                  style={{
                    display: "inline-block",
                    background: "var(--color-gold)",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: "6px",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  Institute Home &rarr;
                </Link>
              </div>

              {relatedServices.length > 0 && (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "6px",
                    padding: "24px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.55rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-muted-light)",
                      marginBottom: "14px",
                    }}
                  >
                    Related Revitalize services
                  </div>
                  {relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        color: "var(--color-teal)",
                        textDecoration: "none",
                        paddingBottom: "8px",
                        marginBottom: "8px",
                        borderBottom: "1px solid var(--color-divider)",
                      }}
                    >
                      {s.name} &rarr;
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </FadeIn>
        </div>
        <style>{`.matrix-layout { grid-template-columns: 1fr 320px; } @media (max-width: 1024px) { .matrix-layout { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Inquiry form */}
      <section
        style={{
          background: "var(--color-stone)",
          padding: "72px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "28px", textAlign: "center" }}>
              <div
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Apply to {title}
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                Tell Travis about your situation.
              </h2>
            </div>
            <InstituteInquiryForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
