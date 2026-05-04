import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ImageSlot from "@/components/ui/ImageSlot";
import InstituteInquiryForm from "@/components/InstituteInquiryForm";
import { SITE, MEDIA_APPEARANCES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Travis Woodley, MSN RN CRNP | Hormone & Metabolic Health Expert",
  description:
    "Travis Woodley, MSN, RN, CRNP — nurse practitioner, Certified Platinum Biote provider, published author, and founder of Revitalize Aesthetics & Wellness and the Rebuild Metabolic Health Institute. 17+ years in emergency, cardiac ICU, and cath lab medicine.",
  keywords: [
    "Travis Woodley CRNP",
    "Travis Woodley MSN",
    "Travis Woodley nurse practitioner",
    "hormone optimization expert Columbus GA",
    "metabolic health specialist Georgia",
    "Platinum Biote provider Columbus",
    "Revitalize Aesthetics Wellness founder",
    "Rebuild Metabolic Health Institute",
    "You're Not Broken You're Unbalanced",
  ],
  alternates: { canonical: `${SITE.url}/travis` },
};

export default function TravisPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Travis Woodley",
    honorificSuffix: "MSN, RN, CRNP",
    jobTitle: "Nurse Practitioner, Founder",
    description:
      "Travis Woodley is a nurse practitioner with 17+ years of clinical experience in emergency medicine, cardiac ICU, and cardiac catheterization labs. He is a Certified Platinum Biote hormone therapy provider, the published author of You're Not Broken — You're Unbalanced, and the founder of Revitalize Aesthetics & Wellness and the Rebuild Metabolic Health Institute.",
    url: `${SITE.url}/travis`,
    image: `${SITE.url}/images/site/travis-woodley.jpg`,
    knowsAbout: [
      "Hormone therapy",
      "Bioidentical hormone replacement",
      "Testosterone optimization",
      "Metabolic health",
      "Medical weight loss",
      "GLP-1 therapy",
      "Aesthetic medicine",
      "Functional medicine",
      "Mid-life metabolic optimization",
    ],
    worksFor: [
      {
        "@type": "MedicalBusiness",
        name: "Revitalize Aesthetics & Wellness",
        url: SITE.url,
      },
      {
        "@type": "EducationalOrganization",
        name: "Rebuild Metabolic Health Institute",
        url: `${SITE.url}/institute`,
      },
    ],
    author: {
      "@type": "Book",
      name: "You're Not Broken — You're Unbalanced",
      url: `${SITE.url}/book`,
    },
    sameAs: [
      SITE.social.linkedin,
      SITE.social.youtube,
      SITE.social.instagram,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "var(--color-teal-dark)",
          padding: "80px clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>
            Nurse Practitioner · Founder · Author · Educator
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
            Travis Woodley,
            <br />
            <em
              style={{ fontStyle: "italic", color: "var(--color-gold)" }}
            >
              MSN, RN, CRNP
            </em>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.55)",
              maxWidth: "620px",
            }}
          >
            17+ years in emergency medicine, cardiac ICU, and cath lab. Certified Platinum
            Biote provider. Published author of <em>You&apos;re Not Broken — You&apos;re
            Unbalanced</em>. Founder of Revitalize Aesthetics &amp; Wellness and the Rebuild
            Metabolic Health Institute. The clinician your conventional doctor isn&apos;t.
          </p>
        </div>
      </section>

      {/* Portrait + intro */}
      <section
        style={{
          background: "#fff",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="travis-grid"
      >
        <div
          style={{ minHeight: "520px", position: "relative", overflow: "hidden" }}
        >
          <ImageSlot
            src="/images/site/travis-woodley.jpg"
            alt="Travis Woodley, MSN, RN, CRNP — portrait"
            priority
            overlay="linear-gradient(0deg, rgba(9,25,34,0.55), rgba(9,25,34,0.18))"
            objectPosition="center top"
          />
        </div>
        <FadeIn>
          <div style={{ padding: "72px clamp(32px, 5vw, 72px)" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>
              The clinical philosophy
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                fontWeight: 400,
                color: "var(--color-ink)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              Read the patient. Read the labs. Then decide.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "16px" }}>
              I came to functional and aesthetic medicine through 17+ years of acute care —
              the kind of environment where reading a patient incorrectly has immediate
              consequences. Emergency rooms. Cardiac ICUs. Cath labs. I watched what
              happens when metabolic dysfunction goes unaddressed for a decade and finally
              becomes a crisis.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "16px" }}>
              When I founded Revitalize, I built it on a simple commitment: every patient gets
              a real clinical conversation before a treatment recommendation. Labs are reviewed,
              not skimmed. The question is what is actually driving this — not what we can sell.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
              That same philosophy carries through everything I do — the clinic, the book,
              the Institute, the writing, the podcast appearances. It is the same answer to the
              same question, applied to whoever is in front of me.
            </p>
          </div>
        </FadeIn>
        <style>{`.travis-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .travis-grid { grid-template-columns: 1fr !important; } .travis-grid > div:first-child { min-height: 320px !important; } }`}</style>
      </section>

      {/* Credentials grid */}
      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "40px" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Credentials</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em" }}>
                17+ years of earned clinical authority.
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="travis-creds-grid">
            {[
              { title: "MSN, RN, CRNP", body: "Master of Science in Nursing. Registered Nurse. Certified Registered Nurse Practitioner. Clinical training that spans direct care and advanced practice." },
              { title: "Emergency Medicine", body: "Over a decade in emergency clinical environments — triage, rapid assessment, high-acuity decision-making under pressure. Where you learn to read a patient, not just a chart." },
              { title: "Cardiac ICU & Cath Lab", body: "Critical care in cardiac intensive care and cardiac catheterization laboratory settings. Cardiovascular disease and its metabolic drivers are not abstractions." },
              { title: "Certified Platinum Biote Provider", body: "Platinum designation within the Biote hormone therapy provider network — reflecting clinical volume, training, and outcome-based recognition." },
              { title: "Published Author", body: "Author of You're Not Broken — You're Unbalanced. A clinician-written guide to mid-life metabolic health, available on Amazon, Apple Books, Kobo, and major platforms." },
              { title: "Founder & Educator", body: "Founder of Revitalize Aesthetics & Wellness (clinical practice) and the Rebuild Metabolic Health Institute (coaching program). Educator across podcast, video, and writing channels." },
            ].map((c) => (
              <FadeIn key={c.title}>
                <div style={{ background: "#fff", padding: "36px 30px", height: "100%", borderRadius: "4px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "12px", lineHeight: 1.25 }}>{c.title}</h3>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-muted)" }}>{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <style>{`.travis-creds-grid { grid-template-columns: repeat(3, 1fr); } @media (max-width: 900px) { .travis-creds-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 560px) { .travis-creds-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* The book */}
      <section style={{ background: "#fff", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="travis-book-grid">
          <FadeIn>
            <div>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>The Book</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.15, marginBottom: "20px" }}>
                You&apos;re Not Broken &mdash; <em>You&apos;re Unbalanced</em>
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "16px" }}>
                A clinician&apos;s guide to mid-life metabolic health. If you have been doing
                everything right and still feel wrong, this book explains why — and what to do
                about it. Travis draws on 17+ years of emergency and cardiac medicine to
                translate the science of hormones, metabolism, sleep, and stress into a
                practical framework for recovery.
              </p>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "20px" }}>
                Available across all major platforms.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { label: "Amazon", href: SITE.book.amazon },
                  { label: "Kindle", href: SITE.book.kindle },
                  { label: "Barnes & Noble", href: SITE.book.barnesNoble },
                  { label: "Apple Books", href: SITE.book.appleBooks },
                  { label: "Kobo", href: SITE.book.kobo },
                  { label: "Everand", href: SITE.book.everand },
                  { label: "All Platforms", href: SITE.book.allPlatforms },
                ].map((b) => (
                  <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "10px 16px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
                    {b.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div style={{ background: "var(--color-stone)", borderRadius: "8px", padding: "40px 32px", textAlign: "center" }}>
              {/* You're Not Broken brand mark — light stone background; no
                  containment needed. */}
              <Image
                src="/images/brand/youre-not-broken-logo.png"
                alt="You're Not Broken brand logo"
                width={1667}
                height={1872}
                style={{ width: "auto", height: "120px", objectFit: "contain", margin: "0 auto 20px", display: "block" }}
              />
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
                Featured Book
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontStyle: "italic", color: "var(--color-ink)", marginBottom: "12px", lineHeight: 1.3 }}>
                &ldquo;You are not broken. You are unbalanced. And balance can be rebuilt.&rdquo;
              </div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-muted)" }}>
                — Travis Woodley
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{`.travis-book-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .travis-book-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Media & Speaking */}
      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "32px" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Media &amp; Speaking</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em" }}>
                Podcast appearances, video, and press.
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="travis-media-grid">
            {MEDIA_APPEARANCES.map((m) => (
              <FadeIn key={m.title + m.date}>
                <a href={m.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none", background: "#fff", padding: "28px 28px", borderRadius: "8px", border: "1px solid var(--color-divider)", height: "100%" }}>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "10px" }}>
                    {m.type === "podcast" ? "Podcast" : m.type === "video" ? "Video" : "Press"} · {m.date}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "8px", lineHeight: 1.4 }}>
                    {m.title}
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "var(--color-muted)", marginBottom: "12px" }}>
                    {m.show}
                  </div>
                  <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)" }}>
                    Watch / Listen &rarr;
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div style={{ marginTop: "32px", padding: "24px 28px", background: "#fff", borderLeft: "3px solid var(--color-gold)", borderRadius: "6px" }}>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, marginBottom: "8px" }}>
                YouTube Channel
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "10px" }}>
                @rebuildmetabolichealth
              </h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-muted)", marginBottom: "12px" }}>
                Long-form clinical education on hormones, metabolic health, weight loss
                medications, and mid-life optimization. New videos regularly.
              </p>
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-teal)", textDecoration: "none" }}>
                Subscribe on YouTube &rarr;
              </a>
            </div>
          </FadeIn>
          <style>{`.travis-media-grid { grid-template-columns: repeat(2, 1fr); } @media (max-width: 768px) { .travis-media-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Speaking / consulting inquiry */}
      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "24px", textAlign: "center" }}>
              {/* Rebuild Metabolic Health Institute brand mark — page section
                  background is light stone, so the logo's white background
                  blends naturally. */}
              <Image
                src="/images/brand/rebuild-institute-logo.png"
                alt="Rebuild Metabolic Health Institute logo"
                width={1024}
                height={1024}
                style={{ width: "auto", height: "100px", objectFit: "contain", margin: "0 auto 16px", display: "block" }}
              />
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Work with Travis</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "12px" }}>
                Coaching, consulting, or speaking inquiry.
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", maxWidth: "560px", margin: "0 auto" }}>
                Use this form for Rebuild Institute coaching applications, podcast invitations,
                press inquiries, or speaking engagements. Travis reviews every submission personally.
              </p>
            </div>
            <InstituteInquiryForm
              heading="Apply or inquire"
              subheading="Tell Travis what you are reaching out about and how he can help."
            />
          </FadeIn>
        </div>
      </section>

      {/* Bottom links */}
      <section style={{ background: "var(--color-teal-dark)", padding: "60px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/institute" style={{ background: "var(--color-gold)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>
            The Institute &rarr;
          </Link>
          <Link href="/book" style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            The Book &rarr;
          </Link>
          <Link href="/about" style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            About the Practice &rarr;
          </Link>
          <Link href="/hub/articles" style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            All Articles &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
