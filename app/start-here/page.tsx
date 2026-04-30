import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Start Here | New Patient Guide — Revitalize Aesthetics & Wellness",
  description:
    "Not sure where to begin? This page helps new patients identify the right treatments, understand what to expect, and take the first step toward better health in Columbus or Warner Robins, GA.",
  alternates: { canonical: "https://revitalizemedicalclinic.com/start-here" },
  openGraph: {
    title: "Start Here | Revitalize Aesthetics & Wellness",
    description:
      "New patients: find the right path for your goals. Hormone health, weight loss, aesthetics, and more. Columbus and Warner Robins, GA.",
    url: "https://revitalizemedicalclinic.com/start-here",
  },
};

const CONCERNS = [
  {
    icon: "01",
    label: "Low Energy or Fatigue",
    description: "Persistent tiredness, brain fog, or feeling worn down despite rest.",
    services: [
      { label: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
      { label: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
      { label: "IV Hydration Therapy", href: "/services/iv-hydration" },
    ],
    tool: { label: "Take the Hormone Health Assessment", href: "/tools" },
  },
  {
    icon: "02",
    label: "Weight Gain or Difficulty Losing Weight",
    description: "Struggling with weight despite diet and exercise changes.",
    services: [
      { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
      { label: "Nutritional Counseling", href: "/services/nutritional-counseling" },
      { label: "Hormone Therapy", href: "/services/hormone-therapy-women" },
    ],
    tool: { label: "Use the Treatment Finder", href: "/tools" },
  },
  {
    icon: "03",
    label: "Hormone Symptoms",
    description: "Hot flashes, mood changes, low libido, sleep problems, or irregular cycles.",
    services: [
      { label: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
      { label: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
    ],
    tool: { label: "Take the Hormone Health Assessment", href: "/tools" },
  },
  {
    icon: "04",
    label: "Skin Aging or Aesthetic Concerns",
    description: "Fine lines, volume loss, uneven skin tone, or desire for a refreshed appearance.",
    services: [
      { label: "Neuromodulators (Botox)", href: "/services/neuromodulators" },
      { label: "Dermal Fillers", href: "/services/dermal-fillers" },
      { label: "Microneedling", href: "/services/microneedling" },
      { label: "PhantomClear CO2 Laser", href: "/services/fractional-co2-laser" },
    ],
    tool: { label: "Use the Treatment Finder", href: "/tools" },
  },
  {
    icon: "05",
    label: "Dehydration or Recovery",
    description: "Post-illness recovery, athletic recovery, or general need for replenishment.",
    services: [
      { label: "IV Hydration Therapy", href: "/services/iv-hydration" },
    ],
    tool: { label: "Use the Treatment Finder", href: "/tools" },
  },
  {
    icon: "06",
    label: "Sexual Wellness Concerns",
    description: "Low libido, discomfort, or sexual health changes affecting quality of life.",
    services: [
      { label: "O-Shot (Women)", href: "/services/o-shot" },
      { label: "Erectile Dysfunction", href: "/services/erectile-dysfunction" },
      { label: "Hormone Therapy", href: "/services/hormone-therapy-women" },
    ],
    tool: { label: "Take the Hormone Health Assessment", href: "/tools" },
  },
  {
    icon: "07",
    label: "Hair Thinning or Loss",
    description: "Noticeable hair thinning, shedding, or changes in density.",
    services: [
      { label: "DE|RIVE Hair Restoration", href: "/services/derive-hair-restoration" },
      { label: "Laser Hair Removal", href: "/services/laser-hair-removal" },
    ],
    tool: { label: "Use the Treatment Finder", href: "/tools" },
  },
  {
    icon: "08",
    label: "General Wellness Optimization",
    description: "You feel okay but want to feel better — more energy, better sleep, sharper focus.",
    services: [
      { label: "Hormone Therapy", href: "/services/hormone-therapy-women" },
      { label: "Nutritional Counseling", href: "/services/nutritional-counseling" },
      { label: "IV Hydration Therapy", href: "/services/iv-hydration" },
    ],
    tool: { label: "Take the Hormone Health Assessment", href: "/tools" },
  },
];

const STEPS = [
  {
    number: "01",
    title: "Take an Assessment",
    body: "Our Hormone Health Self-Assessment and Treatment Finder help you identify which services may be most relevant to your concerns before your appointment.",
  },
  {
    number: "02",
    title: "Book a Consultation",
    body: "A clinical evaluation is required before any treatment. Your provider will review your health history, discuss your goals, and recommend an individualized plan.",
  },
  {
    number: "03",
    title: "Labs May Be Ordered",
    body: "For hormone-related services, bloodwork is typically required. Your provider will advise whether labs are needed at your consultation.",
  },
  {
    number: "04",
    title: "Begin Your Care Plan",
    body: "Treatment plans are individualized based on your evaluation. Results vary and are not guaranteed — the goal is progress that fits your life.",
  },
];

const startHereSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Start Here | New Patient Guide — Revitalize Aesthetics & Wellness",
  description:
    "A new patient guide to help visitors understand which services may address their concerns and how to begin care at Revitalize Aesthetics & Wellness.",
  url: "https://revitalizemedicalclinic.com/start-here",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://revitalizemedicalclinic.com" },
      { "@type": "ListItem", position: 2, name: "Start Here", item: "https://revitalizemedicalclinic.com/start-here" },
    ],
  },
};

export default function StartHerePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(startHereSchema) }}
      />

      {/* ── HERO ── */}
      <section style={{
        background: "var(--color-teal-dark)",
        padding: "80px clamp(24px, 6vw, 80px)",
      }}>
        <div style={{ maxWidth: "720px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>New Patients</div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)",
            fontWeight: 400,
            lineHeight: 1.07,
            color: "#fff",
            letterSpacing: "-0.015em",
            marginBottom: "20px",
          }}>
            Not sure where<br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>to start?</em>
          </h1>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.5)",
            marginBottom: "36px",
            maxWidth: "560px",
          }}>
            Revitalize offers hormone health, medical weight loss, aesthetics, IV hydration, and more.
            This page helps you identify what may be most relevant to your concerns and guides you to the right next step.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/tools"
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
            >
              Take the Assessment
            </Link>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.7)",
                padding: "14px 28px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT BRINGS YOU IN ── */}
      <section style={{
        background: "var(--color-stone)",
        padding: "80px clamp(24px, 6vw, 80px)",
      }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Find your path</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 3rem)",
              fontWeight: 400,
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
              marginBottom: "16px",
            }}>
              What brings you here today?
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)" }}>
              Select the concern that best matches yours. Each card shows services that may be relevant
              and links to the appropriate assessment. Treatment candidacy is always determined by a clinical evaluation.
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {CONCERNS.map((concern, i) => (
            <FadeIn key={concern.label} delay={i * 0.04}>
              <div style={{
                background: "#fff",
                borderRadius: "6px",
                padding: "28px 24px",
                borderTop: "3px solid var(--color-teal)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                height: "100%",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", fontWeight: 400, color: "var(--color-gold)", opacity: 0.4, lineHeight: 1, marginBottom: "16px" }}>{concern.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  color: "var(--color-ink)",
                  lineHeight: 1.3,
                }}>
                  {concern.label}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.7 }}>
                  {concern.description}
                </p>

                <div style={{ marginTop: "4px" }}>
                  <div style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--color-muted-light)",
                    marginBottom: "8px",
                  }}>
                    Potentially relevant services
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {concern.services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--color-teal)",
                          textDecoration: "none",
                          padding: "6px 0",
                          borderBottom: "1px solid var(--color-divider)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        className="concern-service-link"
                      >
                        {s.label}
                        <span style={{ fontSize: "0.9rem", opacity: 0.5 }}>→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={concern.tool.href}
                  style={{
                    marginTop: "auto",
                    paddingTop: "12px",
                    display: "inline-block",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    textDecoration: "none",
                  }}
                  className="concern-tool-link"
                >
                  {concern.tool.label} →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{
        background: "var(--color-bg)",
        padding: "80px clamp(24px, 6vw, 80px)",
      }}>
        <FadeIn>
          <div style={{ maxWidth: "640px", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>What to expect</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 3rem)",
              fontWeight: 400,
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
            }}>
              How the process works
            </h2>
          </div>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "2px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.07}>
              <div style={{
                background: "#fff",
                padding: "36px 28px",
                borderTop: "3px solid var(--color-gold)",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.8rem",
                  fontWeight: 400,
                  color: "var(--color-gold)",
                  opacity: 0.4,
                  lineHeight: 1,
                  marginBottom: "16px",
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  marginBottom: "10px",
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-muted)" }}>
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── TOOLS CTA ── */}
      <section style={{
        background: "var(--color-teal)",
        padding: "72px clamp(24px, 6vw, 80px)",
      }}>
        <FadeIn>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <div style={{
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "20px",
              fontWeight: 500,
            }}>
              Free patient tools
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "-0.01em",
              marginBottom: "16px",
            }}>
              Not sure which direction to take?
            </h2>
            <p style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.55)",
              marginBottom: "36px",
            }}>
              The Hormone Health Self-Assessment and Treatment Finder are designed to help you
              understand which services may be most relevant — before you ever book an appointment.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/tools"
                style={{
                  background: "var(--color-gold)",
                  color: "#fff",
                  padding: "14px 30px",
                  borderRadius: "6px",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Hormone Assessment
              </Link>
              <Link
                href="/tools"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "rgba(255,255,255,0.8)",
                  padding: "14px 30px",
                  borderRadius: "6px",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Treatment Finder
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── LOCATION + PAYMENT ── */}
      <section style={{
        background: "var(--color-stone)",
        padding: "80px clamp(24px, 6vw, 80px)",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "24px",
        }} className="start-info-grid">

          {/* Location */}
          <FadeIn>
            <div style={{ background: "#fff", borderRadius: "6px", padding: "32px 28px", borderTop: "3px solid var(--color-gold)" }}>
              <div style={{
                fontSize: "0.55rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--color-muted-light)",
                marginBottom: "16px",
              }}>
                Choose a location
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "16px" }}>
                Columbus, GA
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.7, marginBottom: "12px" }}>
                6901 Ray Wright Way, Suite I<br />
                Columbus, GA 31909
              </p>
              <a href={SITE.phone.columbusHref} style={{ display: "block", fontSize: "0.9rem", color: "var(--color-teal)", marginBottom: "20px", fontWeight: 500 }}>
                {SITE.phone.columbus}
              </a>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "16px" }}>
                Warner Robins, GA
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.7, marginBottom: "12px" }}>
                840 SR 96, Suite 3300<br />
                Warner Robins, GA 31088
              </p>
              <a href={SITE.phone.warnerRobinsHref} style={{ display: "block", fontSize: "0.9rem", color: "var(--color-teal)", fontWeight: 500 }}>
                {SITE.phone.warnerRobins}
              </a>
            </div>
          </FadeIn>

          {/* Payment */}
          <FadeIn delay={0.05}>
            <div style={{ background: "#fff", borderRadius: "6px", padding: "32px 28px", borderTop: "3px solid var(--color-teal)" }}>
              <div style={{
                fontSize: "0.55rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--color-muted-light)",
                marginBottom: "16px",
              }}>
                Payment & financing
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--color-ink)", fontWeight: 600, marginBottom: "12px" }}>
                Flexible payment options available
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.75, marginBottom: "20px" }}>
                Revitalize works with Cherry financing to help make treatments more accessible.
                Ask about payment plans at your consultation.
              </p>
              <Link
                href={SITE.paymentPlansPage}
                style={{
                  display: "inline-block",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  textDecoration: "none",
                  border: "1.5px solid var(--color-teal)",
                  padding: "10px 18px",
                  borderRadius: "6px",
                }}
              >
                View Payment Plans
              </Link>
            </div>
          </FadeIn>

          {/* Book CTA */}
          <FadeIn delay={0.1}>
            <div style={{
              background: "var(--color-teal-dark)",
              borderRadius: "6px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "20px",
            }}>
              <div>
                <div style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "16px",
                }}>
                  Ready to begin?
                </div>
                <p style={{
                  fontSize: "1rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.5,
                  marginBottom: "8px",
                }}>
                  The first step is a conversation.
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                  Book a consultation to meet with Travis or a member of the clinical team.
                  No commitment required at the first visit.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href={SITE.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--color-gold)",
                    color: "#fff",
                    padding: "14px 20px",
                    borderRadius: "6px",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  Book Online
                </a>
                <Link
                  href="/contact"
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.55)",
                    padding: "12px 20px",
                    borderRadius: "6px",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Medical disclaimer */}
        <div style={{ maxWidth: "1100px", margin: "32px auto 0" }}>
          <p style={{ fontSize: "0.72rem", color: "var(--color-muted-light)", lineHeight: 1.75 }}>
            <strong>Medical disclaimer:</strong> The information on this page is intended to help patients navigate available services and does not constitute medical advice. Treatment candidacy and recommended plans are determined through an individual clinical evaluation. Results vary. All treatments are subject to provider discretion.
          </p>
        </div>
      </section>

      <style>{`
        .concern-service-link:hover { color: var(--color-teal-dark) !important; }
        .concern-tool-link:hover { opacity: 0.75; }
        @media (max-width: 768px) {
          .start-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
