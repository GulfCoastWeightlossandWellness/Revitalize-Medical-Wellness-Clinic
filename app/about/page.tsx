import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE, MEDIA_APPEARANCES } from "@/lib/constants";
import ImageSlot from "@/components/ui/ImageSlot";

export const metadata: Metadata = {
  title: "About Travis Woodley | MSN, RN, CRNP | Founder",
  description: "Travis Woodley, MSN, RN, CRNP — founder of Revitalize Aesthetics & Wellness, author of 'You're Not Broken — You're Unbalanced', and founder of the Rebuild Metabolic Health Institute. 17+ years in emergency medicine, cardiac ICU, cath lab. Columbus and Warner Robins, GA.",
};

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Travis Woodley",
    honorificSuffix: "MSN, RN, CRNP",
    jobTitle: "Nurse Practitioner, Founder",
    description:
      "Travis Woodley is a nurse practitioner with 17+ years of clinical experience in emergency medicine, cardiac ICU, and cardiac catheterization labs. Founder of Revitalize Aesthetics & Wellness, Certified Platinum Biote provider, published author, and founder of the Rebuild Metabolic Health Institute.",
    url: `${SITE.url}/about`,
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
    ],
    worksFor: {
      "@type": "MedicalBusiness",
      name: "Revitalize Aesthetics & Wellness",
      url: SITE.url,
    },
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
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "760px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>The clinician behind the practice</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 400, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            Travis Woodley,<br /><em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>MSN, RN, CRNP</em>
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", maxWidth: "540px" }}>
            Nurse practitioner. Founder. Certified Platinum Biote provider. Published author. 17+ years in high-acuity clinical medicine. The kind of clinician who reads your labs before making a recommendation.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr" }} className="about-grid">
        <div style={{ minHeight: "480px", position: "relative", overflow: "hidden" }}>
          <ImageSlot
            src="/images/site/travis-woodley.jpg"
            alt="Travis Woodley portrait"
            priority
            overlay="linear-gradient(0deg, rgba(9,25,34,0.56), rgba(9,25,34,0.22))"
            objectPosition="center top"
          />
          <blockquote style={{ position: "absolute", left: "28px", right: "28px", bottom: "24px", zIndex: 2, fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontStyle: "italic", color: "rgba(255,255,255,0.9)", lineHeight: 1.45, textAlign: "left", maxWidth: "420px" }}>
            &ldquo;You are not broken. You are unbalanced. And balance can be rebuilt.&rdquo;
            <cite style={{ display: "block", marginTop: "14px", fontStyle: "normal", fontSize: "0.56rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
              — Travis Woodley, MSN, RN, CRNP
            </cite>
          </blockquote>
        </div>
        <FadeIn>
          <div style={{ padding: "72px clamp(32px, 5vw, 72px)" }}>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
              Travis Woodley didn&apos;t come to aesthetic and functional medicine through a spa. He came through seventeen years of emergency rooms, cardiac catheterization labs, and intensive care units — environments where reading the whole patient, not just the presenting complaint, is the difference between getting it right and getting it wrong.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
              When he founded Revitalize Aesthetics and Wellness, he brought that same orientation with him. Every patient gets a clinical conversation before a treatment recommendation. Labs are reviewed, not skimmed. The question is always &ldquo;what is actually driving this&rdquo; — not &ldquo;what can we sell.&rdquo;
            </p>
            <p style={{ marginBottom: "20px" }}>
              <Link href="/blog/revitalize-vs-traditional-med-spa" style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-teal)", textDecoration: "none" }}>
                What makes the Revitalize model different →
              </Link>
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "28px" }}>
              He is a Certified Platinum Biote provider — one of the highest designations in the Biote hormone therapy network — and the published author of <em>You&apos;re Not Broken — You&apos;re Unbalanced</em>, a clinician&apos;s guide to midlife metabolic health. He also founded the Rebuild Metabolic Health Institute, a structured coaching program for adults navigating the hormone and metabolic shifts of mid-life.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link href="/book" style={{ background: "var(--color-teal)", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Book</Link>
              <a href={SITE.ecosystem.rebuildInstitute} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "12px 24px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>Rebuild Institute</a>
            </div>
          </div>
        </FadeIn>
        <style>{`.about-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } .about-grid > div:first-child { min-height: 280px !important; } }`}</style>
      </section>

      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "48px" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Credentials &amp; background</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em" }}>
                17+ years of earned clinical authority
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="creds-grid">
            {[
              { title: "Emergency Medicine", body: "Over a decade in emergency clinical environments — triage, rapid assessment, and high-acuity decision-making under pressure. This is where you learn to read a patient, not just a chart." },
              { title: "Cardiac ICU & Cath Lab", body: "Critical care in cardiac intensive care and cardiac catheterization laboratory settings. Cardiovascular disease and its metabolic drivers — insulin resistance, hormonal dysfunction, inflammation — are not abstractions." },
              { title: "Certified Platinum Biote Provider", body: "Platinum designation within the Biote hormone therapy provider network, reflecting clinical volume, training, and outcome-based recognition." },
              { title: "MSN, RN, CRNP", body: "Masters of Science in Nursing, Registered Nurse, Certified Registered Nurse Practitioner. Clinical training that spans direct care and advanced practice." },
              { title: "Published Author", body: "Author of You're Not Broken — You're Unbalanced — a clinician-written guide to midlife metabolic health, available on Amazon, Apple Books, Kobo, and major platforms." },
              { title: "Rebuild Metabolic Health Institute", body: "Founder of a structured 12-week coaching program addressing hormones, metabolism, sleep, stress, and gut health for midlife adults seeking a systems-based approach." },
            ].map((c) => (
              <FadeIn key={c.title}>
                <div style={{ background: "#fff", padding: "36px 30px", height: "100%", borderRadius: "4px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "12px", lineHeight: 1.25 }}>{c.title}</h3>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-muted)" }}>{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`.creds-grid { grid-template-columns: repeat(3, 1fr); } @media (max-width: 900px) { .creds-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 560px) { .creds-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Media & Speaking */}
      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "32px" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Media &amp; Speaking</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                Podcast appearances, video, and press.
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="about-media-grid">
            {MEDIA_APPEARANCES.map((m) => (
              <FadeIn key={m.title + m.date}>
                <a href={m.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none", background: "#fff", padding: "24px 28px", borderRadius: "8px", border: "1px solid var(--color-divider)", height: "100%" }}>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "10px" }}>
                    {m.type === "podcast" ? "Podcast" : m.type === "video" ? "Video" : "Press"} · {m.date}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "8px", lineHeight: 1.4 }}>
                    {m.title}
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "var(--color-muted)" }}>
                    {m.show}
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-teal)", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
                YouTube: @rebuildmetabolichealth &rarr;
              </a>
              <Link href="/travis" style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "12px 24px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
                Travis&apos;s Page &rarr;
              </Link>
              <Link href="/book" style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "12px 24px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
                The Book &rarr;
              </Link>
            </div>
          </FadeIn>
          <style>{`.about-media-grid { grid-template-columns: repeat(2, 1fr); } @media (max-width: 768px) { .about-media-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      <section style={{ background: "var(--color-teal)", padding: "72px clamp(24px, 6vw, 80px)", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "#fff", letterSpacing: "-0.01em", marginBottom: "16px" }}>
            Ready to work with Travis&apos;s team?
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.5)", marginBottom: "28px", maxWidth: "480px", margin: "0 auto 28px" }}>
            Every treatment begins with a consultation. Book online or call either location.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-gold)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Book a Consultation</a>
            <a href={SITE.phone.columbusHref} style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "14px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>Columbus: {SITE.phone.columbus}</a>
            <a href={SITE.phone.warnerRobinsHref} style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "14px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>Warner Robins: {SITE.phone.warnerRobins}</a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
