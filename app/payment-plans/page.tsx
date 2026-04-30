import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Payment Plans | Flexible Financing | Revitalize Aesthetics & Wellness",
  description:
    "Flexible financing options for hormone therapy, medical weight loss, and aesthetic treatments at Revitalize Aesthetics & Wellness in Columbus and Warner Robins, GA. Apply through Cherry financing with quick approval.",
};

const PROVIDERS = [
  {
    id: "cherry",
    name: "Cherry",
    tagline: "Quick approval. Flexible monthly payments.",
    description:
      "Cherry is a patient financing platform that lets you split the cost of treatment into manageable monthly installments. Applications take minutes and there is no hard credit pull to check your eligibility.",
    highlights: [
      "Check eligibility in under 60 seconds",
      "No hard credit inquiry to apply",
      "Flexible payment terms available",
      "Works for hormone therapy, weight loss, aesthetics, and more",
    ],
    applyHref: SITE.financing.cherry,
    applyLabel: "Apply with Cherry",
    note: "Financing is provided by Cherry Technologies, Inc. Approval and terms are subject to creditworthiness and provider discretion. Rates and availability may vary.",
    accent: "var(--color-gold)",
  },
];

const FAQS = [
  {
    q: "Which treatments qualify for financing?",
    a: "Most elective and wellness treatments are eligible, including hormone therapy, Biote pellet cycles, medical weight loss programs, and aesthetic services. Specific eligibility is determined at checkout through the financing provider.",
  },
  {
    q: "Does applying affect my credit score?",
    a: "Cherry uses a soft credit check to determine initial eligibility, which does not impact your credit score. A hard inquiry may occur only if you proceed to full approval.",
  },
  {
    q: "Can I use HSA or FSA funds?",
    a: "Many of our services qualify as HSA or FSA-eligible expenses, including hormone therapy and certain medical weight loss treatments. Check with your plan administrator for specific coverage rules.",
  },
  {
    q: "What if I need help choosing a plan?",
    a: "Our front desk team at either location can walk you through financing options during your consultation. You are never required to finance — we offer this as a convenience, not a requirement.",
  },
  {
    q: "Are there any hidden fees?",
    a: "Financing terms including APR, fees, and total cost of credit are disclosed in full by the provider before you complete your application. Review all terms carefully before accepting.",
  },
];

export default function PaymentPlansPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--color-teal-dark)",
          padding: "80px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>
            Flexible financing
          </div>
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
          >
            Payment Plans
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.45)",
              marginBottom: "32px",
              maxWidth: "520px",
            }}
          >
            Your health should not be deferred because of how payments are structured.
            We partner with trusted financing providers so treatment is accessible when you need it.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={SITE.financing.cherry}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "var(--color-gold)",
                color: "#fff",
                padding: "13px 26px",
                borderRadius: "6px",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Apply Now — Cherry
            </a>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "1.5px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.65)",
                padding: "13px 26px",
                borderRadius: "6px",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Provider cards */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "80px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "48px" }}>
              <div className="eyebrow" style={{ marginBottom: "14px" }}>
                Financing partners
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                }}
              >
                Apply directly through our approved providers
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {PROVIDERS.map((provider, i) => (
              <FadeIn key={provider.id} delay={i * 0.08}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "8px",
                    borderLeft: `4px solid ${provider.accent}`,
                    padding: "40px 44px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "24px",
                      marginBottom: "24px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "0.55rem",
                          letterSpacing: "0.28em",
                          textTransform: "uppercase",
                          color: provider.accent,
                          fontWeight: 600,
                          marginBottom: "8px",
                        }}
                      >
                        Financing Partner
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                          fontWeight: 400,
                          color: "var(--color-ink)",
                          lineHeight: 1.15,
                          marginBottom: "6px",
                        }}
                      >
                        {provider.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--color-muted)",
                          fontStyle: "italic",
                        }}
                      >
                        {provider.tagline}
                      </p>
                    </div>
                    <a
                      href={provider.applyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "var(--color-teal)",
                        color: "#fff",
                        padding: "13px 26px",
                        borderRadius: "6px",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {provider.applyLabel} ↗
                    </a>
                    <a
                      href={SITE.financing.cherryManageAccount}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "1.5px solid var(--color-divider)",
                        color: "var(--color-muted)",
                        padding: "13px 20px",
                        borderRadius: "6px",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      Manage Your Account ↗
                    </a>
                  </div>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.85,
                      color: "var(--color-muted)",
                      marginBottom: "24px",
                      maxWidth: "640px",
                    }}
                  >
                    {provider.description}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {provider.highlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "0.85rem",
                          color: "var(--color-muted)",
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          style={{
                            color: provider.accent,
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            marginTop: "1px",
                            flexShrink: 0,
                          }}
                        >
                          —
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <p
                    style={{
                      fontSize: "0.72rem",
                      lineHeight: 1.7,
                      color: "var(--color-muted-light)",
                      fontStyle: "italic",
                      borderTop: "1px solid var(--color-divider)",
                      paddingTop: "16px",
                    }}
                  >
                    {provider.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HSA / FSA section */}
      <section
        style={{
          background: "var(--color-stone)",
          padding: "72px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
                alignItems: "start",
              }}
              className="payment-info-grid"
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "36px 32px",
                  borderTop: "3px solid var(--color-teal)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--color-teal)",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  HSA &amp; FSA
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "var(--color-ink)",
                    lineHeight: 1.25,
                    marginBottom: "14px",
                  }}
                >
                  Use pre-tax health dollars
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.8,
                    color: "var(--color-muted)",
                    marginBottom: "0",
                  }}
                >
                  Many services at Revitalize — including hormone therapy and certain medical
                  weight loss treatments — may qualify as HSA or FSA eligible expenses. Check
                  with your plan administrator regarding specific treatment eligibility before
                  your appointment.
                </p>
              </div>

              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "36px 32px",
                  borderTop: "3px solid var(--color-gold)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Have questions?
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "var(--color-ink)",
                    lineHeight: 1.25,
                    marginBottom: "14px",
                  }}
                >
                  Talk to our team
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.8,
                    color: "var(--color-muted)",
                    marginBottom: "18px",
                  }}
                >
                  Our front desk at either location can walk you through financing options
                  during your consultation. You are never required to finance — we offer this
                  as a convenience, not a requirement.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <a
                    href={SITE.phone.columbusHref}
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--color-teal)",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    Columbus: {SITE.phone.columbus}
                  </a>
                  <a
                    href={SITE.phone.warnerRobinsHref}
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--color-teal)",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    Warner Robins: {SITE.phone.warnerRobins}
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
          <style>{`.payment-info-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .payment-info-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "72px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "40px" }}>
              <div className="eyebrow" style={{ marginBottom: "14px" }}>
                Common questions
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Payment plan FAQs
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  style={{
                    background: "#fff",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <summary
                    style={{
                      padding: "20px 24px",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      color: "var(--color-ink)",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    {faq.q}
                    <span
                      style={{
                        fontSize: "1.2rem",
                        color: "var(--color-teal)",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div
                    style={{
                      padding: "0 24px 20px",
                      fontSize: "0.88rem",
                      lineHeight: 1.82,
                      color: "var(--color-muted)",
                    }}
                  >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background: "var(--color-teal)",
          padding: "72px clamp(24px, 6vw, 80px)",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "-0.01em",
              marginBottom: "16px",
            }}
          >
            Ready to get started?
          </h2>
          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "32px",
              maxWidth: "480px",
              margin: "0 auto 32px",
            }}
          >
            Check your eligibility through Cherry in under a minute, or book a consultation
            and we will walk you through financing options in person.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={SITE.financing.cherry}
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
                textDecoration: "none",
              }}
            >
              Apply with Cherry ↗
            </a>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.7)",
                padding: "14px 24px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Book a Consultation
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
