import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE, hasReviewLink } from "@/lib/constants";
import UniversalContactForm from "@/components/UniversalContactForm";

export const metadata: Metadata = {
  title: "Warner Robins, GA Clinic | Revitalize Aesthetics & Wellness",
  description:
    "Revitalize Aesthetics & Wellness Warner Robins, GA. Hormone therapy, medical weight loss, Biote pellets, injectables, and advanced aesthetics at 840 SR 96, Suite 3300. Serving Warner Robins, Macon, and middle Georgia.",
  alternates: { canonical: "https://revitalizemedicalclinic.com/locations/warner-robins-ga" },
  openGraph: {
    title: "Warner Robins, GA Clinic | Revitalize Aesthetics & Wellness",
    description:
      "Medical aesthetics and hormone health clinic in Warner Robins, Georgia. Serving Warner Robins, Macon, Centerville, Byron, and Perry.",
    url: "https://revitalizemedicalclinic.com/locations/warner-robins-ga",
  },
};

const SERVICES_AT_LOCATION = [
  { label: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
  { label: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
  { label: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
  { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
  { label: "Neuromodulators (Botox)", href: "/services/neuromodulators" },
  { label: "Dermal Fillers", href: "/services/dermal-fillers" },
  { label: "Microneedling", href: "/services/microneedling" },
  { label: "IV Hydration Therapy", href: "/services/iv-hydration" },
  { label: "AquaFirme Facials", href: "/services/aquafirme-facials" },
  { label: "VI Peel", href: "/services/vi-peel" },
  { label: "Vampire Facial & PRP", href: "/services/vampire-facial-prp" },
  { label: "DE|RIVE Hair Restoration", href: "/services/derive-hair-restoration" },
  { label: "Laser Hair Removal", href: "/services/laser-hair-removal" },
  { label: "Sexual Wellness", href: "/services/erectile-dysfunction" },
  { label: "Fat Dissolving Injections", href: "/services/fat-dissolving-injections" },
];

const FAQS = [
  {
    q: "Where is the Warner Robins clinic located?",
    a: "The Warner Robins clinic is located at 840 SR 96, Suite 3300, Warner Robins, GA 31088. It is accessible from Macon, Centerville, Byron, Perry, and surrounding middle Georgia communities.",
  },
  {
    q: "How do I book at the Warner Robins location?",
    a: "You can book online 24/7 through the JaneApp booking portal, or call the Warner Robins clinic directly at (478) 366-1244. A consultation is required before most treatments.",
  },
  {
    q: "Are the same services available in Warner Robins as in Columbus?",
    a: "The Warner Robins clinic offers the same core services as Columbus, including hormone therapy, Biote pellet therapy, medical weight loss, and aesthetic treatments. Contact the clinic to confirm availability of specific services.",
  },
  {
    q: "Does the Warner Robins clinic serve patients from Macon, GA?",
    a: "Yes. The Warner Robins clinic is approximately 15 miles north of Macon and regularly serves patients from Macon, Centerville, Byron, Perry, and other middle Georgia communities.",
  },
  {
    q: "Who provides care at the Warner Robins location?",
    a: "Travis Woodley, MSN, RN, CRNP, is the founder and primary clinician overseeing both the Warner Robins and Columbus locations. He is a Platinum-certified Biote provider with 17+ years of clinical experience.",
  },
  {
    q: "Is bloodwork required before starting hormone therapy?",
    a: "Yes. For hormone-related services, lab work is typically ordered before treatment begins. Your provider will review your health history and advise on what is needed at your initial consultation.",
  },
];

const warnerRobinsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://revitalizemedicalclinic.com/locations/warner-robins-ga#clinic",
      name: "Revitalize Aesthetics & Wellness — Warner Robins",
      url: "https://revitalizemedicalclinic.com/locations/warner-robins-ga",
      telephone: "+14783661244",
      email: "twoodley@revitalizemedicalclinic.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "840 SR 96, Suite 3300",
        addressLocality: "Warner Robins",
        addressRegion: "GA",
        postalCode: "31088",
        addressCountry: "US",
      },
      hasMap: SITE.locations.warnerRobins.maps,
      sameAs: [
        SITE.social.facebook,
        SITE.social.instagram,
      ],
      medicalSpecialty: "Hormone Therapy, Medical Weight Loss, Aesthetic Medicine",
      areaServed: ["Warner Robins, GA", "Macon, GA", "Centerville, GA", "Byron, GA", "Perry, GA", "Houston County, GA"],
      priceRange: "$$",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://revitalizemedicalclinic.com" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://revitalizemedicalclinic.com/locations" },
        { "@type": "ListItem", position: 3, name: "Warner Robins, GA", item: "https://revitalizemedicalclinic.com/locations/warner-robins-ga" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

const warnerRobinsAggregateRating = {
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

export default function WarnerRobinsLocationPage() {
  const reviewLink = SITE.reviews.warnerRobinsReviewLink;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(warnerRobinsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(warnerRobinsAggregateRating) }}
      />

      {/* ── HERO ── */}
      <section style={{
        background: "var(--color-teal-dark)",
        padding: "80px clamp(24px, 6vw, 80px)",
      }}>
        <div style={{ maxWidth: "720px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>Warner Robins, Georgia</div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 4vw, 4.2rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            color: "#fff",
            letterSpacing: "-0.015em",
            marginBottom: "20px",
          }}>
            Hormone health, weight loss &<br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>aesthetics in Warner Robins, GA</em>
          </h1>
          <p style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.5)",
            marginBottom: "36px",
            maxWidth: "580px",
          }}>
            The Revitalize Warner Robins clinic serves middle Georgia with medically-guided hormone therapy,
            medical weight loss, Biote pellet therapy, and advanced aesthetic treatments.
            The same clinical standards and providers as our Columbus location — closer to home for Warner Robins and Macon-area patients.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={SITE.bookingWarnerRobins}
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
            >
              Book Warner Robins
            </a>
            <a
              href={SITE.phone.warnerRobinsHref}
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
              Call {SITE.phone.warnerRobins}
            </a>
          </div>
        </div>
      </section>

      {/* ── NAP + MAP ── */}
      <section style={{
        background: "var(--color-stone)",
        padding: "72px clamp(24px, 6vw, 80px)",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }} className="wr-nap-grid">

          {/* NAP card */}
          <FadeIn>
            <div style={{ background: "#fff", borderRadius: "6px", padding: "40px 36px", borderTop: "3px solid var(--color-gold)" }}>
              <div style={{
                fontSize: "0.55rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--color-muted-light)",
                marginBottom: "20px",
              }}>
                Clinic information
              </div>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "var(--color-ink)",
                marginBottom: "4px",
              }}>
                Warner Robins
              </h2>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "24px" }}>
                Georgia
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
                <div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "4px" }}>Address</div>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-ink)", lineHeight: 1.5 }}>
                    840 SR 96, Suite 3300<br />Warner Robins, GA 31088
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "4px" }}>Phone</div>
                  <a href={SITE.phone.warnerRobinsHref} style={{ fontSize: "1.2rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    {SITE.phone.warnerRobins}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "4px" }}>Booking</div>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>Online booking available 24/7</p>
                </div>
                <div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "4px" }}>Hours</div>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", whiteSpace: "pre-line" }}>
                    {SITE.locations.warnerRobins.hours}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a
                  href={SITE.bookingWarnerRobins}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--color-teal)",
                    color: "#fff",
                    padding: "11px 20px",
                    borderRadius: "6px",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Book Online
                </a>
                <a
                  href={SITE.locations.warnerRobins.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "1.5px solid var(--color-divider)",
                    color: "var(--color-muted)",
                    padding: "11px 20px",
                    borderRadius: "6px",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Get Directions
                </a>
                {hasReviewLink(reviewLink) && (
                  <a
                    href={reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      border: "1.5px solid var(--color-divider)",
                      color: "var(--color-muted)",
                      padding: "11px 20px",
                      borderRadius: "6px",
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    Leave a Google Review
                  </a>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Map embed */}
          <FadeIn delay={0.08}>
            <div style={{ borderRadius: "6px", overflow: "hidden", lineHeight: 0, border: "1px solid var(--color-divider)" }}>
              <iframe
                title="Revitalize Warner Robins, GA — Google Maps"
                src={SITE.locations.warnerRobins.embedMapUrl}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{ background: "#fff", padding: "12px 16px" }}>
                <a
                  href={SITE.locations.warnerRobins.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.75rem", color: "var(--color-teal)", fontWeight: 500 }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ABOUT THIS LOCATION ── */}
      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>About the Warner Robins clinic</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 400,
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
              marginBottom: "28px",
            }}>
              Bringing Revitalize care to middle Georgia
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
                The Warner Robins clinic extends Revitalize's services to patients in middle Georgia — including Warner Robins, Macon, Centerville, Byron, Perry, and Houston County. It offers the same full range of hormone therapy, Biote bioidentical pellets, medical weight loss, and aesthetic treatments available at the Columbus location.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
                The same clinical approach applies here: every care plan starts with an evaluation, is tailored to the individual, and prioritizes a long-term relationship over a single transaction. If you have been looking for a provider who will take time to understand your health history and goals, this is the place to start.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
                Travis Woodley, MSN, RN, CRNP, oversees care at both locations. He is a Platinum-certified Biote provider and the author of <em>You're Not Broken — You're Unbalanced</em>. Whether you choose Warner Robins or Columbus, you receive the same level of clinical oversight and provider expertise.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── LOCAL SEO ARTICLE CROSSLINK ── */}
      <section style={{ background: "var(--color-stone)", padding: "48px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>From the learning library</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link
                href="/blog/medical-weight-loss-warner-robins-ga"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#fff",
                  borderRadius: "6px",
                  padding: "28px 32px",
                  borderLeft: "4px solid var(--color-gold)",
                  textDecoration: "none",
                  gap: "16px",
                }}
                className="wr-article-link"
              >
                <div>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "8px" }}>
                    Medical Weight Loss · Warner Robins
                  </p>
                  <p style={{ fontSize: "1.05rem", fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--color-ink)", marginBottom: "6px" }}>
                    Medical Weight Loss in Warner Robins, Georgia — What to Look For in a Program
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.7 }}>
                    What distinguishes a clinical metabolic program from prescription-only services and what to expect at Revitalize.
                  </p>
                </div>
                <span style={{ color: "var(--color-teal)", fontSize: "1.4rem", flexShrink: 0 }}>→</span>
              </Link>
              <Link
                href="/blog/botox-aesthetics-warner-robins-ga"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                borderRadius: "6px",
                padding: "28px 32px",
                borderLeft: "4px solid var(--color-gold)",
                textDecoration: "none",
                gap: "16px",
              }}
              className="wr-article-link"
              >
                <div>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "8px" }}>
                    Aesthetics · Warner Robins
                  </p>
                  <p style={{ fontSize: "1.05rem", fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--color-ink)", marginBottom: "6px" }}>
                    Botox and Aesthetic Treatments in Warner Robins, Georgia — A Clinical Guide
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.7 }}>
                    How to evaluate credentials, consultation standards, and treatment philosophy before booking injectables.
                  </p>
                </div>
                <span style={{ color: "var(--color-teal)", fontSize: "1.4rem", flexShrink: 0 }}>→</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Services available in Warner Robins</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
              fontWeight: 400,
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
              marginBottom: "36px",
            }}>
              What we offer at this location
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "2px",
            }}>
              {SERVICES_AT_LOCATION.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    background: "#fff",
                    padding: "20px 22px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.85rem",
                    color: "var(--color-ink)",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "background 0.15s",
                  }}
                  className="wr-service-link"
                >
                  {s.label}
                  <span style={{ color: "var(--color-teal)", opacity: 0.5, marginLeft: "8px" }}>→</span>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "24px" }}>
              <Link
                href="/services"
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  textDecoration: "none",
                }}
              >
                View all services →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── FAQS ── */}
      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Common questions</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
              fontWeight: 400,
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
              marginBottom: "32px",
            }}>
              Warner Robins clinic FAQ
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  style={{ background: "#fff", borderRadius: "4px", overflow: "hidden" }}
                >
                  <summary style={{
                    padding: "20px 24px",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "var(--color-ink)",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    {faq.q}
                    <span style={{ fontSize: "1.3rem", color: "var(--color-teal)", marginLeft: "12px", flexShrink: 0 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 24px 20px", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-muted)" }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── NEARBY AREAS + REVIEW CTA ── */}
      <section style={{ background: "var(--color-teal-dark)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
        }} className="wr-footer-grid">
          <FadeIn>
            <div>
              <div style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>
                Areas served
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, color: "#fff", marginBottom: "16px" }}>
                Serving Warner Robins and surrounding communities
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", marginBottom: "20px" }}>
                The Warner Robins clinic serves patients from Warner Robins, Macon, Centerville,
                Byron, Perry, Kathleen, Bonaire, and throughout Houston County and middle Georgia.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href={SITE.bookingWarnerRobins}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--color-gold)",
                    color: "#fff",
                    padding: "12px 22px",
                    borderRadius: "6px",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Book Warner Robins
                </a>
                <Link
                  href="/locations/columbus-ga"
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.55)",
                    padding: "12px 22px",
                    borderRadius: "6px",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Columbus Location →
                </Link>
                <Link
                  href="/locations/compare"
                  style={{
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.38)",
                    letterSpacing: "0.06em",
                    alignSelf: "center",
                  }}
                >
                  Compare locations →
                </Link>
              </div>
            </div>
          </FadeIn>

          {hasReviewLink(SITE.reviews.warnerRobinsReviewLink) && (
            <FadeIn delay={0.08}>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "32px 28px" }}>
                <div style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>
                  Google Reviews
                </div>
                <p style={{ fontSize: "1rem", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "10px" }}>
                  Had a good experience?
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: "20px" }}>
                  Your feedback helps other patients in Warner Robins and middle Georgia find Revitalize and make informed decisions about their care.
                </p>
                <a
                  href={SITE.reviews.warnerRobinsReviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#fff",
                    color: "var(--color-teal-dark)",
                    padding: "12px 22px",
                    borderRadius: "6px",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Leave a Google Review
                </a>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <style>{`
        .wr-nap-grid { grid-template-columns: 1fr 1fr; }
        .wr-footer-grid { grid-template-columns: 1fr 1fr; }
        .wr-service-link:hover { background: var(--color-stone) !important; }
        .wr-article-link:hover { background: var(--color-stone) !important; }
        @media (max-width: 900px) {
          .wr-nap-grid { grid-template-columns: 1fr !important; }
          .wr-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* P4 — Contact form */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "24px", textAlign: "center" }}>
              <div className="eyebrow" style={{ marginBottom: "14px" }}>Warner Robins, GA</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                Request a consultation at the Warner Robins clinic.
              </h2>
            </div>
            <UniversalContactForm
              heading="Warner Robins consultation request"
              subheading="Tell Travis what brought you here. We will follow up to schedule the right consultation type at the Warner Robins location."
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
