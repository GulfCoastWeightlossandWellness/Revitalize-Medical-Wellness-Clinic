import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";
import ImageSlot from "@/components/ui/ImageSlot";
import ShopCallout from "@/components/ShopCallout";
import { formatPostDate, getRecentPosts } from "@/lib/blog";
import InstituteCallout from "@/components/InstituteCallout";
import UniversalContactForm from "@/components/UniversalContactForm";

export const metadata: Metadata = {
  title: "Revitalize Aesthetics & Wellness | Columbus & Warner Robins, GA",
  description:
    "Premier hormone therapy, medical weight loss, and aesthetic treatments in Columbus and Warner Robins, Georgia. Led by Travis Woodley, MSN, RN, CRNP — Platinum Biote provider with 17+ years of clinical experience.",
};

const PATHWAYS = [
  {
    id: "hormones",
    number: "01",
    title: "My energy, mood, or weight feels off",
    description:
      "Fatigue, brain fog, weight that won't move despite doing everything right, sleep disruption, or emotional flatness — these are often hormonal signals. We run targeted labs and address root causes.",
    treatments: ["Hormone Therapy", "Biote Pellets", "Medical Weight Loss"],
    href: "/services/hormone-therapy-women",
    color: "var(--color-teal)",
  },
  {
    id: "weight",
    number: "02",
    title: "I need to lose weight and actually keep it off",
    description:
      "Not a diet plan — a metabolic strategy. We assess insulin sensitivity, cortisol patterns, thyroid function, and sex hormones, then build a structured program around what's actually driving your weight.",
    treatments: ["Medical Weight Loss", "GLP-1 Therapy", "Nutritional Counseling"],
    href: "/services/medical-weight-loss",
    color: "var(--color-teal-mid)",
  },
  {
    id: "skin",
    number: "03",
    title: "I want my skin to look like I feel inside",
    description:
      "Whether you're considering injectables for the first time or looking for advanced resurfacing, our providers take a conservative, structured approach to aesthetic results that age gracefully.",
    treatments: ["Neuromodulators", "Dermal Fillers", "Microneedling", "CO2 Laser"],
    href: "/services/neuromodulators",
    color: "var(--color-gold)",
  },
  {
    id: "wellness",
    number: "04",
    title: "I want to optimize my overall health",
    description:
      "IV hydration, light therapy, PRP, sexual wellness treatments — a curated set of evidence-informed interventions for people who take their health seriously and want a clinical team to match.",
    treatments: ["IV Hydration", "PRP Therapy", "O-Shot", "DE|RIVE Hair"],
    href: "/services/iv-hydration",
    color: "var(--color-teal-dark)",
  },
];

const FEATURED_SERVICES = [
  {
    category: "Hormone & Metabolic",
    name: "Women's Hormone Therapy",
    description:
      "Bioidentical hormone optimization for perimenopause, menopause, and post-reproductive years. Lab-guided, clinician-supervised, and delivered via the Biote pellet method for steady, convenient support.",
    href: "/services/hormone-therapy-women",
    tags: ["Perimenopause", "Menopause", "Biote Pellets"],
  },
  {
    category: "Hormone & Metabolic",
    name: "Men's Hormone Therapy",
    description:
      "Testosterone optimization for men experiencing low energy, declining libido, body composition changes, or mid-life metabolic shifts. Lab-guided protocols delivered via injection or Biote pellet — your physiology, your choice.",
    href: "/services/hormone-therapy-men",
    tags: ["TRT", "Injections", "Biote Pellets"],
  },
  {
    category: "Hormone & Metabolic",
    name: "Medical Weight Loss",
    description:
      "A 90-day metabolic program addressing insulin sensitivity, cortisol rhythms, thyroid function, and sex hormones. GLP-1 receptor agonists considered where clinically appropriate.",
    href: "/services/medical-weight-loss",
    tags: ["Lab-Guided", "Structured Program", "GLP-1 Options"],
  },
  {
    category: "Sexual Wellness",
    name: "Erectile Dysfunction",
    description:
      "Clinical workup and evidence-based treatment for men experiencing ED. Private consultation, root-cause evaluation (vascular, hormonal, neurogenic), and treatment options including PRP, shockwave, and pharmacologic protocols.",
    href: "/services/erectile-dysfunction",
    tags: ["PRP", "Shockwave", "Confidential"],
  },
  {
    category: "Aesthetics",
    name: "Neuromodulators",
    description:
      "Wrinkle-relaxing injections administered by a licensed clinical team. Conservative, face-mapped approach focused on natural movement and gradual improvement.",
    href: "/services/neuromodulators",
    tags: ["Botox", "Dysport", "No Downtime"],
  },
  {
    category: "Aesthetics",
    name: "Dermal Fillers",
    description:
      "Hyaluronic acid and biostimulatory fillers for cheeks, lips, jawline, and more. Subtle, structured results with needle and cannula technique.",
    href: "/services/dermal-fillers",
    tags: ["Juvederm", "Radiesse", "Natural Results"],
  },
  {
    category: "Skin Resurfacing",
    name: "PhantomClear CO2 Laser",
    description:
      "Fractional CO2 resurfacing at 10,600 nm — clinically meaningful improvement in texture, tone, and fine lines for candidates who want results, not just maintenance.",
    href: "/services/fractional-co2-laser",
    tags: ["Ablative", "Collagen Induction", "Resurfacing"],
  },
  {
    category: "Skin Resurfacing",
    name: "Microneedling",
    description:
      "Controlled micro-channels stimulate the skin's natural repair response. Optional RF energy available. Effective for texture, tone, and pore refinement.",
    href: "/services/microneedling",
    tags: ["RF Option", "Texture", "Tone"],
  },
  {
    category: "Education",
    name: "Peptide Education",
    description:
      "Travis's clinical reference guide to 25 peptides across metabolic, growth hormone axis, recovery, skin, immune, sexual wellness, and longevity categories. Education only — peptide therapy is pending FDA approval and not currently prescribed at Revitalize.",
    href: "/peptide-education",
    tags: ["Education Only", "Clinical Reference", "BPC-157 · GH-Axis"],
  },
  {
    category: "Wellness",
    name: "IV Hydration Therapy",
    description:
      "Eight targeted infusion formulas — from basic rehydration to NAD+ and high-dose Vitamin C. All delivered after a good-faith clinical examination.",
    href: "/services/iv-hydration",
    tags: ["NAD+", "Myers Cocktail", "Vitamin C"],
  },
  {
    category: "Hair Restoration",
    name: "DE|RIVE Hair Restoration",
    description:
      "A 100% natural, hormone-free hair wellness system using plant-based factors and EXO|E Technology. In-office and at-home protocol for lasting results.",
    href: "/services/derive-hair-restoration",
    tags: ["Non-Surgical", "Natural", "Men & Women"],
  },
  {
    category: "Sexual Wellness",
    name: "O-Shot for Women",
    description:
      "PRP-based sexual wellness treatment for women — addressing arousal, sensation, and post-childbirth or post-menopausal changes. Private consultation, evidence-informed protocols.",
    href: "/services/o-shot",
    tags: ["PRP", "Non-Surgical", "Private"],
  },
];

const TESTIMONIALS = [
  {
    quote: "My energy levels and overall quality of life are like a different person.",
    author: "Cody",
    location: "Alabama",
    service: "Hormone Therapy",
    featured: true,
  },
  {
    quote: "I feel like I'm coming to see friends for every appointment. The care here is genuinely different.",
    author: "Chad",
    location: "Alabama",
    service: "Wellness Program",
    featured: false,
  },
  {
    quote: "The staff is informative, patient, and answered every question I had without making me feel rushed.",
    author: "Brian",
    location: "Alabama",
    service: "Initial Consultation",
    featured: false,
  },
  {
    quote: "Incredible staff. Very friendly. I actually look forward to my appointments.",
    author: "Quinn",
    location: "Alabama",
    service: "Aesthetic Treatment",
    featured: false,
  },
];

const aggregateRatingColumbus = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Revitalize Aesthetics & Wellness — Columbus",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "76",
    bestRating: "5",
    worstRating: "1",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "6901 Ray Wright Way, Suite I",
    addressLocality: "Columbus",
    addressRegion: "GA",
    postalCode: "31909",
  },
};

const aggregateRatingWarnerRobins = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Revitalize Aesthetics & Wellness — Warner Robins",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "76",
    bestRating: "5",
    worstRating: "1",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "840 SR 96, Suite 3300",
    addressLocality: "Warner Robins",
    addressRegion: "GA",
    postalCode: "31088",
  },
};

export default function HomePage() {
  // Phase 5: the existing "Learning Library" section now shows the 3 most
  // recent published posts. getRecentPosts() sorts pure date-desc and
  // respects the isPublished() filter, so future-dated posts never leak.
  const featuredPosts = getRecentPosts(3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingColumbus) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingWarnerRobins) }}
      />
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "calc(100vh - var(--nav-height))",
          background: "var(--color-teal-dark)",
          display: "grid",
          gridTemplateColumns: "54% 46%",
          position: "relative",
          overflow: "hidden",
        }}
        className="hero-section"
      >
        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px clamp(24px, 5vw, 80px) 80px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Trust badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
              padding: "8px 16px",
              border: "1px solid rgba(201,168,108,0.3)",
              borderRadius: "100px",
              width: "fit-content",
            }}
          >
            {SITE.reviews.verifiedRating && (
              <span style={{ color: "var(--color-gold)", fontSize: "0.82rem", fontWeight: 600 }}>{SITE.reviews.verifiedRating}</span>
            )}
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              {SITE.reviews.verifiedCount ? `${SITE.reviews.verifiedCount} Google Reviews` : "Verified Google Reviews"}
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Platinum Biote Provider
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 5vw, 5.6rem)",
              fontWeight: 400,
              lineHeight: 1.07,
              color: "#fff",
              letterSpacing: "-0.015em",
              marginBottom: "24px",
            }}
          >
            You are not broken.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>You are unbalanced.</em>
          </h1>

          <p
            style={{
              fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
              lineHeight: 1.88,
              color: "rgba(255,255,255,0.45)",
              maxWidth: "460px",
              marginBottom: "40px",
              fontWeight: 400,
            }}
          >
            Hormone therapy, medical weight loss, and precision aesthetic care — delivered by a licensed clinical team in Columbus and Warner Robins, Georgia.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
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
                transition: "background 0.2s",
              }}
              className="btn-gold"
            >
              Book a Consultation
            </a>
            <Link
              href="/start-here"
              style={{
                border: "1.5px solid rgba(201,168,108,0.4)",
                color: "var(--color-gold)",
                padding: "14px 28px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Start Here
            </Link>
            <Link
              href="/tools"
              style={{
                border: "1.5px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.5)",
                padding: "14px 28px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Take Assessment
            </Link>
          </div>
          <div style={{ marginBottom: "36px" }}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/services"
                style={{
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                }}
                className="hero-services-link"
              >
                Explore all services →
              </Link>
              <Link
                href="/blog/revitalize-vs-traditional-med-spa"
                style={{
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                }}
                className="hero-services-link"
              >
                How we&apos;re different →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
            className="hero-stats"
          >
            {[
              { val: "17+", label: "Years\nClinical Experience" },
              ...(SITE.reviews.verifiedCount ? [{ val: SITE.reviews.verifiedCount, label: "Google\nReviews" }] : [{ val: "Patient-\nFocused", label: "Columbus &\nWarner Robins" }]),
              ...(SITE.reviews.verifiedRating ? [{ val: SITE.reviews.verifiedRating, label: "Average\nRating" }] : [{ val: "Consult-\nFirst", label: "Approach\nto Care" }]),
              { val: "2", label: "Georgia\nLocations" },
            ].map((s) => (
              <div key={s.val}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.6rem",
                    fontWeight: 400,
                    color: "var(--color-gold)",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "0.56rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.28)",
                    lineHeight: 1.65,
                    whiteSpace: "pre-line",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image panel */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "var(--color-teal)",
          }}
        >
          <ImageSlot
            src="/images/site/clinic-lobby-hero.jpg"
            alt="Revitalize clinic lobby"
            priority
            overlay="linear-gradient(0deg, rgba(9,25,34,0.16), rgba(9,25,34,0.16))"
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(105deg, var(--color-teal-dark) 0%, rgba(9,25,34,0.3) 50%, transparent 100%)",
              zIndex: 1,
            }}
          />
          {/* Location pills */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "clamp(24px, 4vw, 56px)",
              zIndex: 3,
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Columbus, GA", href: SITE.phone.columbusHref, tel: SITE.phone.columbus },
              { label: "Warner Robins, GA", href: SITE.phone.warnerRobinsHref, tel: SITE.phone.warnerRobins },
            ].map((loc) => (
              <a
                key={loc.label}
                href={loc.href}
                style={{
                  fontSize: "0.56rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  padding: "8px 16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "100px",
                  backdropFilter: "blur(8px)",
                  background: "rgba(0,0,0,0.2)",
                }}
              >
                {loc.label} — {loc.tel}
              </a>
            ))}
          </div>
        </div>

        <style>{`
          .hero-section { grid-template-columns: 54% 46%; }
          .btn-gold:hover { background: var(--color-gold-dark) !important; }
          .hero-services-link:hover { color: rgba(255,255,255,0.6) !important; }
          @media (max-width: 768px) {
            .hero-section { grid-template-columns: 1fr !important; }
            .hero-section > div:last-child { display: none !important; }
            .hero-stats { gap: 20px !important; flex-wrap: wrap !important; }
          }
        `}</style>
      </section>

      {/* ── PATIENT PATHWAYS ── */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "96px clamp(24px, 6vw, 80px) 0",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <FadeIn>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                marginBottom: "56px",
                alignItems: "end",
              }}
              className="pathway-intro"
            >
              <div>
                <div className="eyebrow" style={{ marginBottom: "16px" }}>Where to start</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: "var(--color-ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  What brought you here today?
                </h2>
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                  color: "var(--color-muted)",
                  fontWeight: 400,
                  maxWidth: "440px",
                }}
              >
                Every patient comes to us for different reasons. These four pathways help us point you toward the right starting conversation.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
            className="pathways-grid"
          >
            {PATHWAYS.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.08}>
                <Link href={p.href}>
                  <div
                    style={{
                      padding: "44px 32px 40px",
                      background: "#fff",
                      borderTop: "3px solid transparent",
                      borderRight: "1px solid var(--color-divider)",
                      cursor: "pointer",
                      height: "100%",
                      transition: "border-top-color 0.25s, box-shadow 0.25s, transform 0.25s",
                    }}
                    className={`pathway-card pathway-card-${p.id}`}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "3.2rem",
                        fontWeight: 400,
                        color: "var(--color-divider)",
                        lineHeight: 1,
                        marginBottom: "18px",
                        transition: "color 0.25s",
                      }}
                      className="pathway-num"
                    >
                      {p.number}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.25rem",
                        fontWeight: 400,
                        lineHeight: 1.25,
                        color: "var(--color-ink)",
                        marginBottom: "14px",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        lineHeight: 1.8,
                        color: "var(--color-muted)",
                        fontWeight: 400,
                        marginBottom: "20px",
                      }}
                    >
                      {p.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                      {p.treatments.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: "0.55rem",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            padding: "4px 9px",
                            background: "var(--color-teal-pale)",
                            color: "var(--color-teal)",
                            borderRadius: "100px",
                            fontWeight: 500,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        <style>{`
          .pathway-intro { grid-template-columns: 1fr 1fr; }
          .pathways-grid { grid-template-columns: repeat(4, 1fr); }
          .pathway-card:last-child { border-right: none !important; }
          .pathway-card:hover { border-top-color: var(--color-gold) !important; box-shadow: 0 16px 48px rgba(0,0,0,0.07); transform: translateY(-4px); }
          .pathway-card:hover .pathway-num { color: var(--color-gold-pale) !important; }
          @media (max-width: 900px) {
            .pathway-intro { grid-template-columns: 1fr !important; gap: 16px !important; }
            .pathways-grid { grid-template-columns: 1fr 1fr !important; }
            .pathway-card { border-right: 1px solid var(--color-divider) !important; }
          }
          @media (max-width: 560px) {
            .pathways-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── STATS BAR ── */}
      <FadeIn>
        <section
          style={{
            background: "var(--color-teal)",
            padding: "56px clamp(24px, 6vw, 80px)",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              textAlign: "center",
            }}
            className="stats-bar"
          >
            {[
              { val: "17+", label: "Years in high-acuity clinical medicine" },
              { val: SITE.reviews.verifiedRating ?? "Top Rated", label: SITE.reviews.verifiedCount ? `Average Google rating across ${SITE.reviews.verifiedCount} reviews` : "Average Google rating" },
              { val: "Platinum", label: "Biote Hormone Therapy provider designation" },
              { val: "2", label: "Clinic locations in Georgia" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "0 32px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
                className="stat-item"
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3rem",
                    fontWeight: 400,
                    color: "var(--color-gold)",
                    lineHeight: 1,
                    marginBottom: "10px",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 400,
                    maxWidth: "160px",
                    margin: "0 auto",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <style>{`
            .stats-bar { grid-template-columns: repeat(4, 1fr); }
            @media (max-width: 768px) {
              .stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
              .stat-item { border-right: none !important; padding: 20px 0 !important; }
            }
          `}</style>
        </section>
      </FadeIn>

      {/* ── SERVICES ── */}
      <section
        style={{
          background: "var(--color-stone)",
          padding: "96px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <FadeIn>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                alignItems: "end",
                marginBottom: "56px",
              }}
              className="services-header"
            >
              <div>
                <div className="eyebrow" style={{ marginBottom: "16px" }}>What we offer</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: "var(--color-ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Clinical treatments,
                  <em style={{ fontStyle: "italic", color: "var(--color-teal)" }}> not spa services</em>
                </h2>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.85,
                    color: "var(--color-muted)",
                    marginBottom: "20px",
                  }}
                >
                  Every service at Revitalize begins with a clinical consultation. We don't recommend treatments — we match them to your specific anatomy, labs, and goals.
                </p>
                <Link
                  href="/services"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-teal)",
                    fontWeight: 600,
                    borderBottom: "1px solid var(--color-teal)",
                    paddingBottom: "2px",
                    transition: "opacity 0.2s",
                  }}
                >
                  View All 20 Services
                </Link>
              </div>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
            className="services-grid"
          >
            {FEATURED_SERVICES.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.06}>
                <Link href={s.href}>
                  <div
                    style={{
                      background: "#fff",
                      padding: "36px 32px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "4px",
                      transition: "box-shadow 0.3s, transform 0.3s",
                    }}
                    className="service-card"
                  >
                    <div
                      style={{
                        fontSize: "0.55rem",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "var(--color-teal-light)",
                        marginBottom: "10px",
                        fontWeight: 500,
                      }}
                    >
                      {s.category}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.35rem",
                        fontWeight: 400,
                        color: "var(--color-ink)",
                        marginBottom: "12px",
                        lineHeight: 1.2,
                      }}
                    >
                      {s.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        lineHeight: 1.78,
                        color: "var(--color-muted)",
                        flex: 1,
                        marginBottom: "18px",
                      }}
                    >
                      {s.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "16px" }}>
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: "0.55rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            padding: "4px 9px",
                            background: "var(--color-stone)",
                            color: "var(--color-muted)",
                            borderRadius: "100px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-teal)",
                        fontWeight: 600,
                        marginTop: "auto",
                      }}
                    >
                      Learn more
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        <style>{`
          .services-header { grid-template-columns: 1fr 1fr; }
          .services-grid { grid-template-columns: repeat(3, 1fr); }
          .service-card:hover { box-shadow: 0 20px 56px rgba(0,0,0,0.08); transform: translateY(-4px); }
          @media (max-width: 900px) {
            .services-header { grid-template-columns: 1fr !important; gap: 16px !important; }
            .services-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 560px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── ABOUT TRAVIS ── */}
      <section
        style={{
          background: "#fff",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="about-section"
      >
        {/* Image panel */}
        <div style={{ minHeight: "560px", position: "relative", overflow: "hidden" }}>
          <ImageSlot
            src="/images/site/travis-woodley.jpg"
            alt="Travis Woodley portrait"
            priority
            objectPosition="center top"
            overlay="linear-gradient(0deg, rgba(9,25,34,0.52), rgba(9,25,34,0.2))"
          />
          <div
            style={{
              position: "absolute",
              left: "40px",
              bottom: "36px",
              right: "40px",
              zIndex: 2,
              padding: "16px 18px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(9,25,34,0.45)",
              color: "rgba(255,255,255,0.82)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Founder &amp; Lead Clinician
          </div>
        </div>

        {/* Content */}
        <FadeIn>
          <div
            style={{
              padding: "80px clamp(32px, 5vw, 72px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="eyebrow" style={{ marginBottom: "16px" }}>The clinician behind the practice</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.6rem",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "var(--color-ink)",
                letterSpacing: "-0.01em",
                marginBottom: "4px",
              }}
            >
              Travis Woodley
            </h2>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--color-teal-light)",
                marginBottom: "24px",
                fontWeight: 500,
              }}
            >
              MSN, RN, CRNP — Founder
            </div>

            <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "12px" }}>
              Travis Woodley spent 17+ years in high-acuity clinical medicine — emergency, cardiac ICU, and cath lab environments where decisions happen fast and errors aren't tolerated. That clinical instinct is what he brought to Revitalize.
            </p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
              He&apos;s a Certified Platinum Biote provider, published author, and the founder of the Rebuild Metabolic Health Institute — a structured coaching program for midlife metabolic optimization. He doesn&apos;t prescribe generic protocols. He reads labs, thinks in systems, and treats patients the way he&apos;d want to be treated.
            </p>

            <ul style={{ listStyle: "none", margin: "0 0 28px", padding: 0 }}>
              {[
                "17+ years: emergency medicine, cath lab, cardiac ICU",
                "Certified Platinum Biote Hormone Therapy Provider",
                "Author: You're Not Broken — You're Unbalanced",
                "Founder, Rebuild Metabolic Health Institute",
                "Columbus, GA and Warner Robins, GA locations",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--color-stone)",
                    fontSize: "0.83rem",
                    color: "var(--color-muted)",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "var(--color-gold)",
                      flexShrink: 0,
                      marginTop: "7px",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link
                href="/about"
                style={{
                  background: "var(--color-teal)",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Full Biography
              </Link>
              <Link
                href="/book"
                style={{
                  border: "1.5px solid var(--color-divider)",
                  color: "var(--color-muted)",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                The Book
              </Link>
            </div>
          </div>
        </FadeIn>

        <style>{`
          .about-section { grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) {
            .about-section { grid-template-columns: 1fr !important; }
            .about-section > div:first-child { min-height: 300px !important; }
          }
        `}</style>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        style={{
          background: "var(--color-teal-dark)",
          padding: "96px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div className="eyebrow-white" style={{ marginBottom: "16px", justifyContent: "center" }}>
                Patient experiences
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  marginBottom: "16px",
                }}
              >
                What patients say
              </h2>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "100px",
                }}
              >
                {SITE.reviews.verifiedRating && (
                  <span style={{ color: "var(--color-gold)", fontWeight: 600 }}>{SITE.reviews.verifiedRating}</span>
                )}
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem" }}>
                  {SITE.reviews.verifiedCount
                    ? `average rating across ${SITE.reviews.verifiedCount} Google reviews`
                    : "top-rated on Google"}
                </span>
              </div>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2px",
            }}
            className="testimonials-grid"
          >
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.07}>
                <div
                  style={{
                    padding: "48px 44px",
                    background: t.featured ? "rgba(201,168,108,0.08)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${t.featured ? "rgba(201,168,108,0.2)" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: "4px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "4px",
                      color: "var(--color-gold)",
                      marginBottom: "20px",
                    }}
                  >
                    5.0 rating
                  </div>
                  <blockquote
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "#fff",
                      lineHeight: 1.55,
                      marginBottom: "24px",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {t.author} — {t.location}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link
              href="/reviews"
              style={{
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                paddingBottom: "2px",
                transition: "color 0.2s",
              }}
              className="reviews-all-link"
            >
              Read all reviews →
            </Link>
          </div>
        </div>

        <style>{`
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
          .eyebrow-white { justify-content: center; }
          .eyebrow-white::before { display: none !important; }
          .reviews-all-link:hover { color: rgba(255,255,255,0.72) !important; }
          @media (max-width: 768px) {
            .testimonials-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── LOCATIONS ── */}
      <section
        style={{
          background: "var(--color-stone)",
          padding: "96px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "52px" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Two locations</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Serving Columbus &amp; Warner Robins
              </h2>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2px",
            }}
            className="locations-grid"
          >
            {[
              {
                city: "Columbus",
                state: "Georgia",
                address: "6901 Ray Wright Way, Suite I",
                zip: "Columbus, GA 31909",
                phone: SITE.phone.columbus,
                phoneHref: SITE.phone.columbusHref,
                maps: SITE.locations.columbus.maps,
                badge: "Primary Location",
                detailHref: "/locations/columbus-ga",
              },
              {
                city: "Warner Robins",
                state: "Georgia",
                address: "840 SR 96, Suite 3300",
                zip: "Warner Robins, GA 31088",
                phone: SITE.phone.warnerRobins,
                phoneHref: SITE.phone.warnerRobinsHref,
                maps: SITE.locations.warnerRobins.maps,
                badge: "Second Location",
                detailHref: "/locations/warner-robins-ga",
              },
            ].map((loc) => (
              <FadeIn key={loc.city}>
                <div
                  style={{
                    background: "#fff",
                    padding: "52px 48px",
                    borderRadius: "4px",
                    position: "relative",
                    overflow: "hidden",
                    borderTop: "3px solid var(--color-gold)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.55rem",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--color-teal)",
                      border: "1px solid rgba(14,61,77,0.25)",
                      padding: "5px 13px",
                      borderRadius: "100px",
                      marginBottom: "24px",
                      fontWeight: 500,
                    }}
                  >
                    {loc.badge}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.4rem",
                      fontWeight: 400,
                      color: "var(--color-ink)",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {loc.city}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--color-muted-light)",
                      marginBottom: "24px",
                    }}
                  >
                    {loc.state}
                  </div>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      lineHeight: 1.85,
                      color: "var(--color-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    {loc.address}
                  </p>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--color-muted)",
                      marginBottom: "24px",
                    }}
                  >
                    {loc.zip}
                  </p>
                  <a
                    href={loc.phoneHref}
                    style={{
                      display: "block",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "var(--color-ink)",
                      letterSpacing: "0.01em",
                      marginBottom: "20px",
                      transition: "color 0.2s",
                    }}
                    className="loc-phone"
                  >
                    {loc.phone}
                  </a>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <a
                      href={SITE.booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "var(--color-teal)",
                        color: "#fff",
                        padding: "11px 22px",
                        borderRadius: "6px",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                      }}
                    >
                      Book Now
                    </a>
                    <a
                      href={loc.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "1.5px solid var(--color-divider)",
                        color: "var(--color-muted)",
                        padding: "11px 22px",
                        borderRadius: "6px",
                        fontSize: "0.6rem",
                        fontWeight: 500,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                      }}
                    >
                      Get Directions
                    </a>
                    <Link
                      href={loc.detailHref}
                      style={{
                        border: "1.5px solid var(--color-divider)",
                        color: "var(--color-teal)",
                        padding: "11px 22px",
                        borderRadius: "6px",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                      }}
                    >
                      Full Details →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <style>{`
          .locations-grid { grid-template-columns: 1fr 1fr; }
          .loc-phone:hover { color: var(--color-teal) !important; }
          @media (max-width: 768px) {
            .locations-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── START HERE / TOOLS ── */}
      <section style={{ background: "var(--color-teal)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="start-tools-grid">
            <div>
              <div className="eyebrow-white" style={{ marginBottom: "20px" }}>Patient tools</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.4rem)", fontWeight: 400, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.01em", marginBottom: "16px" }}>
                Not sure where<br />
                <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>to start?</em>
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", marginBottom: "32px", maxWidth: "460px" }}>
                Use the Hormone Health Self-Assessment or Treatment Finder to understand which services may be most relevant to your concerns — before booking an appointment.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/start-here" style={{ background: "var(--color-gold)", color: "#fff", padding: "13px 26px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  Start Here
                </Link>
                <Link href="/tools" style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "13px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Take Assessment
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { title: "Hormone Health Assessment", desc: "Answer questions about your symptoms to understand if hormone optimization may be relevant to you.", href: "/tools" },
                { title: "Treatment Finder", desc: "Select your top concerns and see which services are designed to address them.", href: "/tools" },
                { title: "New Patient Guide", desc: "Not sure what to expect? The Start Here page walks you through the first visit process.", href: "/start-here" },
              ].map((tool) => (
                <Link key={tool.title} href={tool.href} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px 22px", borderLeft: "3px solid var(--color-gold)", textDecoration: "none", transition: "background 0.2s", display: "block" }} className="tool-card-link">
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>{tool.title}</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
        <style>{`.start-tools-grid { grid-template-columns: 1fr 1fr; } .tool-card-link:hover { background: rgba(255,255,255,0.12) !important; } @media (max-width: 900px) { .start-tools-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── BOOK SECTION ── */}
      <section
        style={{
          background: "var(--color-teal-dark)",
          display: "grid",
          gridTemplateColumns: "55% 45%",
        }}
        className="book-section"
      >
        <FadeIn>
          <div
            style={{
              padding: "96px clamp(32px, 5vw, 80px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="eyebrow-white" style={{ marginBottom: "20px" }}>The book</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 3.8vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "#fff",
                letterSpacing: "-0.01em",
                marginBottom: "8px",
              }}
            >
              You&apos;re Not Broken —<br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>You&apos;re Unbalanced</em>
            </h2>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "24px",
              }}
            >
              By Travis Woodley, MSN, RN, CRNP
            </div>
            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.88,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "460px",
                marginBottom: "32px",
              }}
            >
              A clinician&apos;s guide to midlife metabolic health. If you&apos;re doing everything right and still feel wrong, this book explains why — and what to do about it. Travis draws on 17+ years of emergency and cardiac medicine to translate the science of hormones, metabolism, sleep, and stress into a practical framework for recovery.
            </p>

            <div
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: "12px",
              }}
            >
              Available at
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "24px" }}>
              {[
                { label: "Amazon", href: SITE.book.amazon },
                { label: "Kindle", href: SITE.book.kindle },
                { label: "Barnes & Noble", href: SITE.book.barnesNoble },
                { label: "Apple Books", href: SITE.book.appleBooks },
                { label: "Kobo", href: SITE.book.kobo },
                { label: "All Platforms", href: SITE.book.allPlatforms },
              ].map((b) => (
                <a
                  key={b.label}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "8px 14px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.55)",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                  }}
                  className="book-retailer-link"
                >
                  {b.label}
                </a>
              ))}
            </div>

            <Link
              href="/book"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                width: "fit-content",
                background: "var(--color-gold)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              About the Book
            </Link>
          </div>
        </FadeIn>

        {/* Book visual */}
        <div
          style={{
            background: "rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 60px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(201,168,108,0.1) 0%, transparent 68%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Image
            src="/images/books/youre-not-broken-cover.png"
            alt="You're Not Broken — You're Unbalanced by Travis Woodley"
            width={392}
            height={522}
            priority
            quality={75}
            style={{
              width: "min(100%, 360px)",
              height: "auto",
              borderRadius: "3px 10px 10px 3px",
              boxShadow: "-10px 24px 64px rgba(0,0,0,0.8)",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>

        <style>{`
          .book-section { grid-template-columns: 55% 45%; }
          .book-retailer-link:hover { background: var(--color-gold) !important; color: #fff !important; border-color: var(--color-gold) !important; }
          @media (max-width: 768px) {
            .book-section { grid-template-columns: 1fr !important; }
            .book-section > div:last-child { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── REBUILD METABOLIC HEALTH INSTITUTE callout (P3) ── */}
      <InstituteCallout variant="wide" />

      {/* ── NUTRITION SHOP ── */}
      <section style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/site/nutrition-shop-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.52,
            filter: "saturate(1.02) contrast(1.02)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(245,243,239,0.74), rgba(245,243,239,0.66))",
          }}
        />
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", position: "relative", zIndex: 2 }} className="shop-section-grid">
          <FadeIn>
            <div>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Revitalize Nutrition Shop</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "18px" }}>
                Supplements Travis<br />actually recommends
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.88, color: "var(--color-muted)", marginBottom: "12px" }}>
                Most supplement stores sell everything to everyone. The Revitalize Nutrition Shop is different — it is curated by Travis and the clinical team based on what we actually recommend in consultations and use within our protocols.
              </p>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.88, color: "var(--color-muted)", marginBottom: "28px" }}>
                Professional-grade formulations. No marketing fluff. Available directly, without the pharmacy markup.
              </p>
              <a
                href={SITE.ecosystem.nutritionShop}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: "var(--color-teal)", color: "#fff", padding: "13px 26px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}
              >
                Visit the Nutrition Shop
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
              {[
                { label: "Hormone Support", detail: "Products selected for patients in hormone optimization protocols" },
                { label: "Metabolic Health", detail: "Formulations used within our medical weight loss programs" },
                { label: "Recovery & Repair", detail: "Post-procedure and general recovery support" },
                { label: "Energy & Cognitive", detail: "NAD+ precursors, adaptogens, and focus support" },
              ].map((cat) => (
                <div key={cat.label} style={{ background: "#fff", padding: "22px 20px", borderRadius: "4px" }}>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "8px" }}>{cat.label}</div>
                  <p style={{ fontSize: "0.78rem", lineHeight: 1.65, color: "var(--color-muted)", margin: 0 }}>{cat.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{`.shop-section-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .shop-section-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── LEARNING LIBRARY PREVIEW ── */}
      <section style={{ background: "#fff", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", gap: "20px", flexWrap: "wrap" }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: "12px" }}>Learning Library</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.15 }}>
                  Patient education &amp; insights
                </h2>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", flexShrink: 0 }}>
                <Link href="/hub" style={{ background: "var(--color-teal)", color: "#fff", padding: "11px 20px", borderRadius: "6px", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Full Library
                </Link>
                <Link href="/blog" style={{ border: "1px solid var(--color-divider)", color: "var(--color-muted)", padding: "11px 18px", borderRadius: "6px", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  All Articles →
                </Link>
              </div>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="home-lib-grid">
            {featuredPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`} style={{ display: "block", textDecoration: "none", height: "100%" }}>
                  <article style={{ background: "var(--color-stone)", borderRadius: "4px", padding: "28px 24px", height: "100%", borderTop: "3px solid var(--color-teal)", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s" }} className="home-lib-card">
                    <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 500, marginBottom: "12px" }}>{post.category}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.4, marginBottom: "10px", flex: 1 }}>{post.title}</h3>
                    <p style={{ fontSize: "0.78rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "16px" }}>{post.description}</p>
                    <div style={{ marginTop: "auto" }}>
                      <div style={{ fontSize: "0.62rem", color: "var(--color-muted-light)", letterSpacing: "0.04em", marginBottom: "8px" }}>
                        {formatPostDate(post.date)}
                        <span style={{ margin: "0 6px", opacity: 0.4 }}>·</span>
                        {post.readTime}
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <span style={{ fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)" }}>Read →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/hub/videos" style={{ fontSize: "0.7rem", color: "var(--color-muted)", letterSpacing: "0.08em" }}>Watch videos →</Link>
              <span style={{ color: "var(--color-divider)" }}>·</span>
              <Link href="/hub/resources" style={{ fontSize: "0.7rem", color: "var(--color-muted)", letterSpacing: "0.08em" }}>Patient guides →</Link>
              <span style={{ color: "var(--color-divider)" }}>·</span>
              <Link href="/book" style={{ fontSize: "0.7rem", color: "var(--color-muted)", letterSpacing: "0.08em" }}>The Book →</Link>
            </div>
          </FadeIn>
        </div>
        <style>{`
          .home-lib-grid { grid-template-columns: repeat(3, 1fr); }
          .home-lib-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
          @media (max-width: 900px) { .home-lib-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 560px) { .home-lib-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "96px clamp(24px, 6vw, 80px)",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "20px" }}>
              <span>Ready to start</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 3.8vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--color-ink)",
                letterSpacing: "-0.01em",
                marginBottom: "20px",
              }}
            >
              The first step is a conversation
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: "var(--color-muted)",
                marginBottom: "40px",
              }}
            >
              Every treatment at Revitalize begins with a clinical consultation. We review your history, your goals, and your labs — then we make a recommendation based on what you actually need.
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "36px" }}>
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--color-teal)",
                  color: "#fff",
                  padding: "16px 32px",
                  borderRadius: "6px",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Book a Consultation
              </a>
              <Link
                href="/tools"
                style={{
                  border: "1.5px solid var(--color-divider)",
                  color: "var(--color-muted)",
                  padding: "16px 32px",
                  borderRadius: "6px",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Take the Assessment
              </Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
              {[
                { label: "Columbus", phone: SITE.phone.columbus, href: SITE.phone.columbusHref },
                { label: "Warner Robins", phone: SITE.phone.warnerRobins, href: SITE.phone.warnerRobinsHref },
              ].map((loc) => (
                <div key={loc.label} style={{ textAlign: "center" }}>
                  <a
                    href={loc.href}
                    style={{
                      display: "block",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "var(--color-ink)",
                      letterSpacing: "0.01em",
                      transition: "color 0.2s",
                    }}
                    className="cta-phone-link"
                  >
                    {loc.phone}
                  </a>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.56rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-muted-light)",
                      marginTop: "4px",
                    }}
                  >
                    {loc.label}, Georgia
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <style>{`
          .eyebrow { display: inline-flex; }
          .cta-phone-link:hover { color: var(--color-teal) !important; }
        `}</style>
      </section>

      {/* ── Book a Consultation form ── */}
      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "28px", textAlign: "center" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Get in touch</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "12px" }}>
                Book a Consultation
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", maxWidth: "560px", margin: "0 auto" }}>
                Tell Travis a little about what brought you here. Travis or his team will follow up directly within one business day.
              </p>
            </div>
            <UniversalContactForm
              heading="Request a Consultation"
              subheading="A short note is enough — we will follow up to schedule the right consultation type for your situation."
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
