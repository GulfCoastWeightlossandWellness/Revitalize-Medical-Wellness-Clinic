import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "You're Not Broken — You're Unbalanced | Book by Travis Woodley",
  description: "The book by Travis Woodley, MSN, RN, CRNP — a clinician's guide to midlife metabolic health. Available on Amazon, Apple Books, Kindle, Kobo, Barnes & Noble, and more.",
};

const PURCHASE_LINKS = [
  { label: "Amazon (Paperback)", href: SITE.book.amazon, primary: true },
  { label: "Kindle", href: SITE.book.kindle, primary: false },
  { label: "Apple Books", href: SITE.book.appleBooks, primary: false },
  { label: "Barnes & Noble", href: SITE.book.barnesNoble, primary: false },
  { label: "Kobo", href: SITE.book.kobo, primary: false },
  { label: "Everand", href: SITE.book.everand, primary: false },
  { label: "OverDrive (Library)", href: SITE.book.overdrive, primary: false },
  { label: "All Platforms", href: SITE.book.allPlatforms, primary: false },
];

export default function BookPage() {
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "You're Not Broken — You're Unbalanced",
    author: {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "MSN, RN, CRNP",
    },
    description: "A clinician's guide to midlife metabolic health — hormones, energy, weight, sleep, and how to rebuild what mid-life has shifted.",
    url: SITE.book.amazon,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />

      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="book-hero-grid">
          <div>
            <div className="eyebrow-white" style={{ marginBottom: "20px" }}>The book</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 400, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
              You&apos;re Not Broken —<br /><em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>You&apos;re Unbalanced</em>
            </h1>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", marginBottom: "12px" }}>
              By Travis Woodley, MSN, RN, CRNP
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", marginBottom: "32px", maxWidth: "480px" }}>
              A clinician&apos;s guide to midlife metabolic health — written for the patient sitting in an exam room being told their labs are &ldquo;normal&rdquo; while feeling anything but.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href={SITE.book.amazon} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Buy on Amazon
              </a>
              <a href={SITE.book.allPlatforms} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                All Platforms
              </a>
            </div>
          </div>
          <FadeIn>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "28px 24px", textAlign: "center" }}>
              <Image
                src="/images/books/youre-not-broken-cover.png"
                alt="You're Not Broken — You're Unbalanced by Travis Woodley"
                width={420}
                height={560}
                priority
                style={{
                  width: "min(100%, 320px)",
                  height: "auto",
                  borderRadius: "6px",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
                  margin: "0 auto 22px",
                }}
              />
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.1vw, 1.7rem)", fontStyle: "italic", color: "#fff", lineHeight: 1.35, marginBottom: "8px" }}>
                &ldquo;You are not broken. You are unbalanced.&rdquo;
              </div>
              <cite style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontStyle: "normal" }}>
                — Travis Woodley
              </cite>
            </div>
          </FadeIn>
        </div>
        <style>{`.book-hero-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .book-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }} className="book-content-grid">
          <FadeIn>
            <div>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>What the book covers</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "24px" }}>
                Written by a clinician, for the patient who has been dismissed
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "16px" }}>
                Most books about midlife health are written by people who have read about midlife health. This one was written by someone who has spent seventeen years treating patients with these exact complaints — fatigue, weight gain, brain fog, poor sleep, low libido — and watching their labs come back &ldquo;normal.&rdquo;
              </p>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "24px" }}>
                Travis Woodley wrote this book for the patient who has been told there is nothing wrong, even while something clearly is. It is a clinical explanation of what actually changes in the body during midlife — the hormone shifts, metabolic slowdowns, sleep architecture changes, gut microbiome disruption, and stress response dysregulation — and what can realistically be done about each.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  "Hormones & what optimal actually means",
                  "Metabolism & why the old approach stopped working",
                  "Sleep & its role in everything else",
                  "Stress & cortisol",
                  "Gut health & nutrient absorption",
                  "Evidence-based interventions",
                ].map((topic) => (
                  <div key={topic} style={{ background: "#fff", padding: "14px 16px", borderRadius: "4px", fontSize: "0.78rem", color: "var(--color-muted)", borderLeft: "3px solid var(--color-gold)" }}>
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Get the book</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2vw, 2rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "24px" }}>
                Available on all major platforms
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {PURCHASE_LINKS.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: link.primary ? "var(--color-teal)" : "#fff", color: link.primary ? "#fff" : "var(--color-ink)", padding: "14px 18px", borderRadius: "6px", textDecoration: "none", fontSize: "0.82rem", fontWeight: link.primary ? 600 : 400, border: link.primary ? "none" : "1.5px solid var(--color-divider)", transition: "opacity 0.15s" }} className="buy-link">
                    <span>{link.label}</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.6 }}>&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{`.book-content-grid { grid-template-columns: 1fr 1fr; } .buy-link:hover { opacity: 0.85; } @media (max-width: 768px) { .book-content-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "40px", textAlign: "center" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Watch &amp; listen</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "12px" }}>
                Rebuild Metabolic Health — YouTube
              </h2>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-muted)", maxWidth: "520px", margin: "0 auto 24px" }}>
                Travis publishes educational content on hormone health, metabolic medicine, and practical wellness strategies. Subscribe for clinical insight delivered without the noise.
              </p>
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--color-teal)", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>
                Visit YouTube Channel
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{ background: "var(--color-teal)", padding: "72px clamp(24px, 6vw, 80px)", textAlign: "center" }}>
        <FadeIn>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div className="eyebrow-white" style={{ marginBottom: "16px" }}>Beyond the book</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 400, color: "#fff", letterSpacing: "-0.01em", marginBottom: "16px" }}>
              Ready to work with Travis directly?
            </h2>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", marginBottom: "28px" }}>
              The book provides the framework. The clinic provides the treatment. Book a consultation at either location in Georgia.
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-gold)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Book a Consultation</a>
              <a href={SITE.ecosystem.rebuildInstitute} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Rebuild Institute</a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
