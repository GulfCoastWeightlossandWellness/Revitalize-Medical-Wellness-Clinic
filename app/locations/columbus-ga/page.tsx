import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE, hasReviewLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Columbus, GA Clinic | Revitalize Aesthetics & Wellness",
  description:
    "Revitalize Aesthetics & Wellness Columbus, GA. Hormone therapy, medical weight loss, Biote pellets, injectables, and advanced aesthetics led by Travis Woodley, MSN, RN, CRNP. 6901 Ray Wright Way, Suite I.",
  alternates: { canonical: "https://revitalizemedicalclinic.com/locations/columbus-ga" },
  openGraph: {
    title: "Columbus, GA Clinic | Revitalize Aesthetics & Wellness",
    description:
      "Premier medical aesthetics and hormone health clinic in Columbus, Georgia. Hormone therapy, medical weight loss, Biote pellets, and aesthetic treatments.",
    url: "https://revitalizemedicalclinic.com/locations/columbus-ga",
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
  { label: "PhantomClear CO2 Laser", href: "/services/fractional-co2-laser" },
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
    q: "Where is the Columbus clinic located?",
    a: "The Columbus clinic is located at 6901 Ray Wright Way, Suite I, Columbus, GA 31909. It is conveniently accessible from Phenix City, Fort Benning, and surrounding areas.",
  },
  {
    q: "How do I book an appointment at the Columbus location?",
    a: "You can book online 24/7 through the JaneApp booking portal, or call the Columbus clinic directly at (762) 261-3880. A consultation is required before most treatments.",
  },
  {
    q: "Does the Columbus clinic require labs before hormone therapy?",
    a: "Yes. For hormone-related services, bloodwork is typically ordered before treatment begins. Your provider will advise on what is needed at your initial consultation.",
  },
  {
    q: "Is Travis Woodley the provider at Columbus?",
    a: "Travis Woodley, MSN, RN, CRNP, is the founder and primary clinician. He is a Platinum-certified Biote provider with 17+ years of clinical experience and oversees care at both the Columbus and Warner Robins locations.",
  },
  {
    q: "Does Revitalize serve patients from Phenix City or Fort Benning?",
    a: "Yes. The Columbus clinic is located near Phenix City, AL and the Fort Moore / Fort Benning area, and welcomes patients from both communities.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Bring a valid photo ID, insurance information if applicable, any recent lab results, and a list of current medications. You may also want to note your main health goals ahead of the visit.",
  },
];

const columbusSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://revitalizemedicalclinic.com/locations/columbus-ga#clinic",
      name: "Revitalize Aesthetics & Wellness — Columbus",
      url: "https://revitalizemedicalclinic.com/locations/columbus-ga",
      telephone: "+17622613880",
      email: "twoodley@revitalizemedicalclinic.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6901 Ray Wright Way, Suite I",
        addressLocality: "Columbus",
        addressRegion: "GA",
        postalCode: "31909",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 32.5099, longitude: -84.9877 },
      hasMap: SITE.locations.columbus.maps,
      sameAs: [
        SITE.social.facebook,
        SITE.social.instagram,
      ],
      medicalSpecialty: "Hormone Therapy, Medical Weight Loss, Aesthetic Medicine",
      areaServed: ["Columbus, GA", "Phenix City, AL", "Fort Moore, GA", "Muscogee County, GA"],
      priceRange: "$$",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://revitalizemedicalclinic.com" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://revitalizemedicalclinic.com/locations" },
        { "@type": "ListItem", position: 3, name: "Columbus, GA", item: "https://revitalizemedicalclinic.com/locations/columbus-ga" },
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

export default function ColumbusLocationPage() {
  const reviewLink = SITE.reviews.columbusReviewLink;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(columbusSchema) }}
      />

      {/* ── HERO ── */}
      <section style={{
        background: "var(--color-teal-dark)",
        padding: "80px clamp(24px, 6vw, 80px)",
      }}>
        <div style={{ maxWidth: "720px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>Columbus, Georgia</div>
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
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>aesthetics in Columbus, GA</em>
          </h1>
          <p style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.5)",
            marginBottom: "36px",
            maxWidth: "580px",
          }}>
            Revitalize Aesthetics & Wellness Columbus offers medically-guided hormone therapy,
            medical weight loss, Biote pellet therapy, and advanced aesthetic treatments.
            Led by Travis Woodley, MSN, RN, CRNP — Platinum Biote provider with 17+ years of clinical experience.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={SITE.bookingColumbus}
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
              Book Columbus
            </a>
            <a
              href={SITE.phone.columbusHref}
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
              Call {SITE.phone.columbus}
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
        }} className="columbus-nap-grid">

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
                Columbus
              </h2>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "24px" }}>
                Georgia
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
                <div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "4px" }}>Address</div>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-ink)", lineHeight: 1.5 }}>
                    6901 Ray Wright Way, Suite I<br />Columbus, GA 31909
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "4px" }}>Phone</div>
                  <a href={SITE.phone.columbusHref} style={{ fontSize: "1.2rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    {SITE.phone.columbus}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "4px" }}>Booking</div>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>Online booking available 24/7</p>
                </div>
                <div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "4px" }}>Hours</div>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", whiteSpace: "pre-line" }}>
                    {SITE.locations.columbus.hours}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a
                  href={SITE.bookingColumbus}
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
                  href={SITE.locations.columbus.maps}
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
                title="Revitalize Columbus, GA — Google Maps"
                src={SITE.locations.columbus.embedMapUrl}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{ background: "#fff", padding: "12px 16px" }}>
                <a
                  href={SITE.locations.columbus.maps}
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
            <div className="eyebrow" style={{ marginBottom: "16px" }}>About the Columbus clinic</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 400,
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
              marginBottom: "28px",
            }}>
              Clinical care designed for the people of Columbus, Georgia
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
                The Columbus clinic is the primary Revitalize location, offering a full range of services including hormone therapy, Biote bioidentical hormone pellets, medical weight loss, and aesthetic treatments. Travis Woodley and the clinical team serve patients from Columbus, Phenix City, Fort Moore, and the broader Muscogee County area.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
                Care at Revitalize is relationship-based. Every treatment plan begins with a clinical evaluation and is tailored to the individual. Whether you are exploring hormone optimization for the first time or continuing an existing wellness plan, the Columbus team prioritizes understanding your goals before recommending any treatment.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
                Travis Woodley is a Platinum-certified Biote provider and holds credentials as a Nurse Practitioner (MSN, RN, CRNP) with more than 17 years of clinical experience. He is also the author of <em>You're Not Broken — You're Unbalanced</em>, a patient resource on hormone health and metabolic medicine.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Services available in Columbus</div>
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
                  className="columbus-service-link"
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
              Columbus clinic FAQ
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
        }} className="columbus-footer-grid">
          <FadeIn>
            <div>
              <div style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>
                Areas served
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, color: "#fff", marginBottom: "16px" }}>
                Serving Columbus and surrounding communities
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", marginBottom: "20px" }}>
                The Columbus clinic welcomes patients from Columbus, Phenix City (AL), Fort Moore,
                Midland, Ellerslie, Pine Mountain, Hamilton, and the greater Muscogee County area.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href={SITE.bookingColumbus}
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
                  Book Columbus
                </a>
                <Link
                  href="/locations/warner-robins-ga"
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
                  Warner Robins Location →
                </Link>
              </div>
            </div>
          </FadeIn>

          {hasReviewLink(SITE.reviews.columbusReviewLink) && (
            <FadeIn delay={0.08}>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "32px 28px" }}>
                <div style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>
                  Google Reviews
                </div>
                <p style={{ fontSize: "1rem", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "10px" }}>
                  Had a good experience?
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: "20px" }}>
                  Your feedback helps other patients find Revitalize and make informed decisions about their care.
                </p>
                <a
                  href={SITE.reviews.columbusReviewLink}
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
        .columbus-nap-grid { grid-template-columns: 1fr 1fr; }
        .columbus-footer-grid { grid-template-columns: 1fr 1fr; }
        .columbus-service-link:hover { background: var(--color-stone) !important; }
        @media (max-width: 900px) {
          .columbus-nap-grid { grid-template-columns: 1fr !important; }
          .columbus-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
