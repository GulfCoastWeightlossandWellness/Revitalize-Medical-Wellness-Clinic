import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import InstituteInquiryForm from "@/components/InstituteInquiryForm";
import InstituteSubNav from "@/components/InstituteSubNav";
import { SITE, INSTITUTE_PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rebuild Metabolic Health Institute | Travis Woodley CRNP",
  description:
    "Structured coaching for midlife metabolic optimization. Three tiers — Core, Elite, the full Metabolic Year — plus topic-specific coaching tracks (hormones, weight loss, men's health, women's hormones). Led by Travis Woodley, MSN, RN, CRNP.",
};

const TIERS = [
  {
    slug: "core" as const,
    name: INSTITUTE_PRICING.core.name,
    price: INSTITUTE_PRICING.core.price,
    duration: INSTITUTE_PRICING.core.duration,
    tagline: "A structured metabolic foundation for individuals who want guidance, not hand-holding.",
    body: "Core is the entry-level Rebuild program. It provides the framework, the clinical reasoning, and the protocols — delivered through structured content and periodic group touchpoints with Travis. It is designed for self-directed individuals who want to understand what they are doing and why, not just receive instructions.",
    includes: [
      "Full Rebuild curriculum: hormonal health, metabolic optimization, sleep architecture, inflammation management, body composition",
      "Access to the Rebuild private community",
      "Monthly group Q&A with Travis",
      "Foundational lab interpretation guide",
      "Protocol library: supplementation, nutrition timing, training structure",
      "90-day program timeline with milestone checkpoints",
    ],
    rightFor: "You are new to metabolic optimization, you learn well from structured content, and you want a clinical framework without the cost of one-on-one coaching. You are willing to do the work independently with periodic group support.",
    notRightFor: "You need individualized protocol adjustments, you have complex hormonal or metabolic pathology, or you learn best through direct interaction with a clinician.",
    applyHref: "/institute/core",
    applyLabel: "Explore Core",
  },
  {
    slug: "elite" as const,
    name: INSTITUTE_PRICING.elite.name,
    price: INSTITUTE_PRICING.elite.price,
    duration: INSTITUTE_PRICING.elite.duration,
    tagline: "A clinical coaching relationship for individuals who want individualized guidance.",
    body: "Elite provides everything in Core plus direct access to Travis for individualized protocol design, lab interpretation, and periodic one-on-one coaching sessions. This is the program for people who have tried the general approach and know they need something tailored to their specific physiology.",
    includes: [
      "Everything in Core",
      "Two one-on-one coaching sessions with Travis (60 min each)",
      "Individualized lab review and protocol adjustment",
      "Direct messaging access for clinical questions (response within 48 business hours)",
      "Custom supplement and nutrition protocol based on your labs and history",
      "Priority access to new Rebuild content and protocols",
      "Six-month program timeline",
    ],
    rightFor: "You have specific hormonal or metabolic issues that require individualized attention, you want Travis reviewing your actual lab values rather than general guidance, or you have been through a basic program and know the generic approach is not sufficient.",
    notRightFor: "You want frequent, ongoing clinical oversight or are dealing with acute medical issues that require in-person care. Rebuild is a coaching program, not a medical practice. Clinical care remains at Revitalize.",
    applyHref: "/institute/elite",
    applyLabel: "Explore Elite",
  },
  {
    slug: "metabolic-year" as const,
    name: INSTITUTE_PRICING["metabolic-year"].name,
    price: INSTITUTE_PRICING["metabolic-year"].price,
    duration: INSTITUTE_PRICING["metabolic-year"].duration,
    tagline: "A full-year clinical partnership for individuals committed to comprehensive metabolic transformation.",
    body: "The Metabolic Year is the complete Rebuild experience. It pairs the full curriculum with a sustained coaching relationship across four quarters, regular lab review cycles, and direct access to Travis throughout the year. It is designed for individuals who understand that meaningful metabolic change takes time and want a clinical partner for the full journey.",
    includes: [
      "Everything in Elite, extended across 12 months",
      "Four one-on-one coaching sessions (one per quarter, 60-90 min each)",
      "Quarterly lab review with protocol adjustment",
      "Unlimited direct message access (48-hour response)",
      "Full Rebuild curriculum plus quarterly advanced content drops",
      "Annual metabolic assessment with year-over-year comparison",
      "Priority booking at both Revitalize locations for any in-clinic services",
    ],
    rightFor: "You are serious about sustainable metabolic optimization, you want a clinical relationship rather than a program, and you understand that the most meaningful changes in hormone function, body composition, and metabolic health take longer than 90 days to fully manifest.",
    notRightFor: null,
    applyHref: "/institute/metabolic-year",
    applyLabel: "Explore the Metabolic Year",
  },
];

const FAQ = [
  {
    q: "Is Rebuild a medical practice or a coaching program?",
    a: "Rebuild is a coaching and education program. It is not a substitute for clinical care, and it does not involve prescribing medications or ordering labs. Clinical care — including hormone therapy, GLP-1 prescriptions, and lab work — happens at Revitalize. Rebuild operates as the educational and coaching layer alongside clinical care, not instead of it.",
  },
  {
    q: "Can I do Rebuild without being a Revitalize patient?",
    a: "Yes. Rebuild is open to any motivated adult regardless of whether they receive clinical care at Revitalize. That said, many Rebuild participants find that pairing the program with clinical evaluation at Revitalize accelerates results significantly.",
  },
  {
    q: "What if I'm already working with another provider for hormone therapy?",
    a: "Rebuild is designed to complement, not replace, existing clinical relationships. The curriculum is educational and protocol-based. You can apply the frameworks with your existing provider.",
  },
  {
    q: "Is there a payment plan available?",
    a: "Payment plan options are discussed during the application process. Contact us directly to discuss what works for your situation.",
  },
  {
    q: "What is the application process?",
    a: "Complete the application form. Travis reviews all applications personally. You will hear back within 5 business days regarding fit and next steps.",
  },
  {
    q: "What if the program is not the right fit for me?",
    a: "There is a 14-day review period after enrollment. If the program is not meeting your expectations in the first two weeks, contact us to discuss your options.",
  },
  {
    q: "How is this different from working with a personal trainer or nutritionist?",
    a: "The distinction is the clinical framework. Rebuild addresses the hormonal, metabolic, and physiological drivers of your current state — not just behavior and food choices. A trainer optimizes around your current physiology. Rebuild addresses the physiology itself.",
  },
  {
    q: "Is Rebuild appropriate for women going through perimenopause?",
    a: "Yes. Perimenopausal and menopausal metabolic shifts are one of the primary patient populations Rebuild is designed for. The program addresses the hormonal, metabolic, and lifestyle factors specific to this transition.",
  },
];

const BUTTON = {
  display: "inline-block",
  background: "var(--color-gold)",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "6px",
  fontSize: "0.6rem",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
};

export default function InstitutePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Rebuild Metabolic Health Institute",
    description:
      "Structured coaching and education program for adults navigating mid-life hormonal and metabolic health, founded by Travis Woodley, MSN, RN, CRNP.",
    url: `${SITE.url}/institute`,
    sameAs: SITE.ecosystem.rebuildInstitute,
    founder: {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "MSN, RN, CRNP",
      url: `${SITE.url}/travis`,
    },
    parentOrganization: {
      "@type": "MedicalBusiness",
      name: "Revitalize Aesthetics & Wellness",
      url: SITE.url,
    },
  };

  const courseSchema = TIERS.map((tier) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: `Rebuild Metabolic Health Institute — ${tier.name}`,
    description: tier.tagline,
    provider: {
      "@type": "EducationalOrganization",
      name: "Rebuild Metabolic Health Institute",
      url: `${SITE.url}/institute`,
    },
    instructor: {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "MSN, RN, CRNP",
    },
    offers: {
      "@type": "Offer",
      price: tier.price.replace(/[^0-9]/g, ""),
      priceCurrency: "USD",
      url: `${SITE.url}${tier.applyHref}`,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {courseSchema.map((cs, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cs) }}
        />
      ))}

      <InstituteSubNav />

      {/* Hero */}
      <section id="overview" style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)", scrollMarginTop: "70px" }}>
        <div style={{ maxWidth: "760px" }}>
          {/* Rebuild Institute brand mark — file is on white background, so
              we contain it in a white pill that pops against the dark teal
              hero. Sized large since it's the primary brand statement here. */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.96)",
              borderRadius: "12px",
              padding: "14px 18px",
              marginBottom: "24px",
            }}
          >
            <Image
              src="/images/brand/rebuild-institute-logo.png"
              alt="Rebuild Metabolic Health Institute logo"
              width={1024}
              height={1024}
              priority
              style={{ width: "auto", height: "96px", objectFit: "contain", display: "block" }}
            />
          </div>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "20px" }}>
            Rebuild Metabolic Health Institute
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 400, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.015em", marginBottom: "24px" }}>
            The program for people who want the full picture.
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: "600px" }}>
            Not a meal plan. Not a supplement stack. A structured clinical coaching program built on the same metabolic framework Travis developed across 17 years of high-acuity medicine — and refined through the patients at Revitalize.
          </p>
        </div>
      </section>

      {/* Clinical Philosophy */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              The Clinical Philosophy
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "32px" }}>
              What Rebuild is built on.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
              Travis Woodley did not design a weight loss program. He designed a metabolic reconstruction framework.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
              The premise is simple but rarely applied: most people struggling with energy, weight, performance, and recovery are not failing. They are operating in a state of metabolic dysfunction that no amount of willpower or caloric restriction will fix. The hormones are off. The sleep architecture is compromised. The inflammatory load is elevated. The mitochondria are underperforming.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
              The Rebuild Metabolic Health Institute is the structured pathway for correcting those systems — not managing symptoms, but addressing root causes. It is designed for motivated adults between 35 and 65 who want clinical-grade guidance without the overhead of traditional healthcare.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Tiers */}
      <section id="tiers" style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)", scrollMarginTop: "70px" }}>
        <FadeIn>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              Three Tiers
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "32px" }}>
              Choose the level of support that fits your situation.
            </h2>

            {/* Compare-tiers strip */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "48px" }} className="tier-compare-strip">
              {TIERS.map((t) => (
                <Link
                  key={t.slug}
                  href={t.applyHref}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-divider)",
                    borderTop: "3px solid var(--color-gold)",
                    borderRadius: "6px",
                    padding: "18px 18px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-ink)", marginBottom: "4px" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--color-muted)", marginBottom: "8px" }}>
                    {t.price} · {t.duration}
                  </div>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600 }}>
                    See details &rarr;
                  </div>
                </Link>
              ))}
            </div>
            <style>{`@media (max-width: 720px) { .tier-compare-strip { grid-template-columns: 1fr !important; } }`}</style>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    background: "#fff",
                    borderRadius: "8px",
                    padding: "40px 40px",
                    borderLeft: "4px solid var(--color-gold)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)", margin: 0 }}>
                      {tier.name}
                    </h3>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, color: "var(--color-teal)" }}>
                      {tier.price}
                    </div>
                  </div>
                  <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "var(--color-teal)", marginBottom: "16px", lineHeight: 1.5 }}>
                    {tier.tagline}
                  </p>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "20px" }}>
                    {tier.body}
                  </p>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-ink)", fontWeight: 600, marginBottom: "10px" }}>
                    What {tier.name} includes
                  </div>
                  <ul style={{ paddingLeft: "18px", marginBottom: "20px" }}>
                    {tier.includes.map((item, i) => (
                      <li key={i} style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "6px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "28px" }} className="tier-fit-grid">
                    <div style={{ background: "rgba(14,61,77,0.04)", borderRadius: "6px", padding: "16px 18px" }}>
                      <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, marginBottom: "8px" }}>
                        Right for you if
                      </div>
                      <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-muted)", margin: 0 }}>
                        {tier.rightFor}
                      </p>
                    </div>
                    {tier.notRightFor && (
                      <div style={{ background: "rgba(201,168,108,0.06)", borderRadius: "6px", padding: "16px 18px" }}>
                        <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "8px" }}>
                          Not right for you if
                        </div>
                        <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-muted)", margin: 0 }}>
                          {tier.notRightFor}
                        </p>
                      </div>
                    )}
                  </div>
                  <Link href={tier.applyHref} style={BUTTON}>
                    {tier.applyLabel} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Who It's For */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              Who Rebuild Is For
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "28px" }}>
              This program is designed for a specific type of person.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
              They are typically between 35 and 65. They have tried the conventional approaches — the diets, the fitness programs, the supplements — and they have either plateaued or recognized that those tools are not addressing what is actually wrong.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
              They are not looking for motivation. They have plenty. They are looking for clinical clarity: what is actually happening in their physiology, why the approaches that worked before no longer work, and what needs to change.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
              They are professionals, executives, parents, and athletes who understand that their performance — physical, cognitive, and emotional — is directly connected to their metabolic state. And they want to optimize it with the same rigor they bring to everything else.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", fontStyle: "italic" }}>
              If that description fits, Rebuild was built for you.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Clinical Foundation */}
      <section style={{ background: "var(--color-teal)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(201,168,108,0.8)", fontWeight: 600, marginBottom: "16px" }}>
              The Clinical Foundation
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "28px" }}>
              Built on 17+ years of clinical medicine.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(255,255,255,0.7)", marginBottom: "20px" }}>
              Travis Woodley&apos;s background is not in wellness coaching. It is in environments where physiological dysfunction has immediate consequences — emergency medicine, cardiac ICU, and cath lab. He spent 17 years watching what happens when metabolic dysregulation goes unaddressed long enough to become a crisis.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(255,255,255,0.7)", marginBottom: "20px" }}>
              Rebuild is the clinical framework he wished existed when the patients in his ER were still in the decade before they needed emergency care. It is preventive medicine applied with the rigor of acute care.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(255,255,255,0.7)" }}>
              He is also a Certified Platinum Biote hormone therapy provider, the published author of <em>You&apos;re Not Broken &mdash; You&apos;re Unbalanced</em>, and the founder of the clinical practice at Revitalize. The Rebuild Metabolic Health Institute is the coaching extension of that clinical work — delivered to motivated individuals who want the same level of physiological precision applied to their optimization.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)", scrollMarginTop: "70px" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              FAQ
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "32px" }}>
              Questions about the program.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {FAQ.map((item, i) => (
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

      {/* Coaching tracks (matrix pages) */}
      <section id="tracks" style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)", scrollMarginTop: "70px" }}>
        <FadeIn>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ marginBottom: "40px", maxWidth: "700px" }}>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>Coaching Tracks</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "16px" }}>
                Topic-specific coaching pathways.
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)" }}>
                The Core, Elite, and Metabolic Year tiers are the program structure. The tracks below are the topic-specific applications — each with its own clinical framework, lab interpretation focus, and protocol logic.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="institute-tracks-grid">
              {[
                { name: "Hormone Optimization Coaching", href: "/institute/hormone-optimization-coaching", desc: "Mid-life hormone shifts — perimenopause, andropause, thyroid, adrenals." },
                { name: "Metabolic Health Program", href: "/institute/metabolic-health-program", desc: "Insulin sensitivity, mitochondrial function, inflammation, body composition." },
                { name: "Weight Loss Coaching", href: "/institute/weight-loss-coaching", desc: "GLP-1 integration, muscle preservation, durable maintenance." },
                { name: "Men's Health Coaching", href: "/institute/mens-health-coaching", desc: "Testosterone optimization, training, recovery, long-term performance." },
                { name: "Women's Hormone Coaching", href: "/institute/womens-hormone-coaching", desc: "Perimenopause, menopause, post-reproductive optimization." },
              ].map((t) => (
                <Link key={t.href} href={t.href} style={{ background: "#fff", borderRadius: "8px", padding: "24px 24px", border: "1px solid var(--color-divider)", textDecoration: "none", display: "block" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "8px" }}>{t.name}</h3>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-muted)", marginBottom: "12px" }}>{t.desc}</p>
                  <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)" }}>Explore track &rarr;</span>
                </Link>
              ))}
            </div>
            <style>{`@media (max-width: 768px) { .institute-tracks-grid { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        </FadeIn>
      </section>

      {/* Closing inquiry form */}
      <section id="apply" style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)", scrollMarginTop: "70px" }}>
        <FadeIn>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.15, marginBottom: "12px" }}>
                Ready to apply?
              </h2>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--color-muted)" }}>
                The application is short. Travis reviews every one.
              </p>
            </div>
            <InstituteInquiryForm />
            <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", textAlign: "center", marginTop: "20px" }}>
              Prefer to apply via the external Rebuild site?{" "}
              <a href="https://rebuildmetabolichealth.com/apply-for-core/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-teal)", textDecoration: "underline" }}>Core</a>
              {" · "}
              <a href="https://rebuildmetabolichealth.com/apply-for-elite/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-teal)", textDecoration: "underline" }}>Elite</a>
              {" · "}
              <a href="https://rebuildmetabolichealth.com/apply-for-metabolic-year/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-teal)", textDecoration: "underline" }}>Metabolic Year</a>
            </p>
          </div>
        </FadeIn>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .tier-fit-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
