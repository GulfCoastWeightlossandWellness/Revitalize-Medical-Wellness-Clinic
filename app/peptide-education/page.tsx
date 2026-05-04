import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";
import {
  PEPTIDE_CATEGORIES,
  PEPTIDE_COUNT,
  type Peptide,
} from "@/lib/peptides";

export const metadata: Metadata = {
  title:
    "Peptide Education Guide | Revitalize Aesthetics & Wellness — Travis Woodley CRNP",
  description:
    "Travis Woodley's clinical peptide education guide. What each peptide is, why we use it, who it's for, typical course duration, and how we cycle it. Covers metabolic, GH-axis, recovery, skin, immune, sexual wellness, brain/mood, and longevity peptides.",
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/peptide-education",
  },
  openGraph: {
    title: "Peptide Education Guide | Revitalize Aesthetics & Wellness",
    description:
      "Comprehensive clinical guide to peptide therapy from Travis Woodley, MSN, RN, CRNP. Indications, duration, cycling, and the foundational work that makes each peptide effective.",
    url: "https://revitalizemedicalclinic.com/peptide-education",
    type: "article",
  },
};

const eyebrow: React.CSSProperties = {
  fontSize: "0.58rem",
  letterSpacing: "0.26em",
  textTransform: "uppercase",
  color: "var(--color-gold)",
  fontWeight: 600,
  marginBottom: "16px",
};

export default function PeptideEducationPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Peptide Education Guide",
    headline: "Peptide Education Guide — Revitalize Aesthetics & Wellness",
    description:
      "Clinical peptide education guide from Travis Woodley, MSN, RN, CRNP — covering metabolic, growth hormone axis, recovery, skin, immune, sexual wellness, and longevity peptides.",
    url: `${SITE.url}/peptide-education`,
    author: {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "MSN, RN, CRNP",
      url: `${SITE.url}/travis`,
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: "Revitalize Aesthetics & Wellness",
      url: SITE.url,
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learning Library",
        item: `${SITE.url}/hub`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Peptide Education Guide",
        item: `${SITE.url}/peptide-education`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Compliance alert — top-of-page so it cannot be missed.
          Peptide regulatory status is in flux (503A bulks list, FDA category
          2 listings); this banner makes the educational-only nature of this
          page explicit and protects Travis on the prescribing question. */}
      <aside
        role="note"
        aria-label="Important regulatory notice"
        style={{
          background: "#FBF1DE",
          borderBottom: "2px solid #C9A86C",
          padding: "16px clamp(24px, 6vw, 80px)",
          color: "#5A4318",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <span
            aria-hidden="true"
            style={{
              flexShrink: 0,
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "#C9A86C",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.85rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1px",
            }}
          >
            !
          </span>
          <div style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
            <strong style={{ fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", fontSize: "0.7rem", color: "#7a5a1f" }}>
              Important Notice
            </strong>
            <div style={{ marginTop: "4px" }}>
              This page is provided for <strong>patient education only</strong>. Many of the peptides referenced here are pending FDA review or are restricted under current FDA compounding guidance — <strong>prescriptions for peptide therapy are not currently provided through Revitalize Aesthetics &amp; Wellness</strong>. Nothing on this page constitutes medical advice or an offer to prescribe. Discuss any therapy with your treating clinician.
            </div>
          </div>
        </div>
      </aside>

      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg)", padding: "20px clamp(24px, 6vw, 80px) 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", fontSize: "0.78rem", color: "var(--color-muted)" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          {" · "}
          <Link href="/hub" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Learning Library</Link>
          {" · "}
          <span style={{ color: "var(--color-ink)" }}>Peptide Education Guide</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "var(--color-teal-dark)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "880px" }}>
          <div style={{ ...eyebrow, color: "var(--color-gold)", marginBottom: "20px" }}>
            Peptide Education Guide · Travis Woodley, MSN, RN, CRNP
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.6rem)", fontWeight: 400, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.015em", marginBottom: "24px" }}>
            What peptides actually do — and how we use them clinically.
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(255,255,255,0.72)", maxWidth: "720px", marginBottom: "20px" }}>
            Peptides are short chains of amino acids that act as signaling molecules in the body — telling cells what to do, when to do it, and how much. Used correctly, they're a powerful adjunct to clinical care. Used carelessly, they're an expensive way to push physiology in directions you didn't actually want.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(255,255,255,0.72)", maxWidth: "720px" }}>
            This is our working clinical reference for {PEPTIDE_COUNT} peptides organized by what they actually do — metabolic, growth hormone axis, recovery, skin, immune, brain and mood, sexual wellness, and longevity. For each one: what it is, why we use it, who it's for, how long a course typically runs, whether we cycle it, and what foundational work has to be in place for it to work.
          </p>
        </div>
      </section>

      {/* How we approach peptides */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <div style={eyebrow}>How We Approach Peptide Therapy</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "28px" }}>
              The clinical principles behind every protocol on this page.
            </h2>
            <PrincipleBlock
              title="Foundations first."
              body="Every peptide on this page works better when sleep, protein, training, and stress regulation are in place. None of them work as well when those are missing. We do not put a patient on a peptide protocol to bypass the foundational work — we use peptides to amplify what the foundations are already doing."
            />
            <PrincipleBlock
              title="Lab-guided when relevant."
              body="GH-axis peptides require IGF-1 and metabolic monitoring. Thyroid signaling tools require a full thyroid workup. Anything that touches the metabolic or hormonal axes is sequenced around labs — drawn before, drawn after, interpreted in context."
            />
            <PrincipleBlock
              title="Cycled, not continuous."
              body="Most of these peptides are used in defined courses (commonly 4–12 weeks) followed by reassessment. Continuous indefinite use is uncommon in our practice. Cycling preserves response, gives us cleaner data on what's actually working, and respects the body's signaling rhythms."
            />
            <PrincipleBlock
              title="Patient stratification."
              body="Several peptides on this list are labeled as 'highly selected patients only' or 'not a starter wellness therapy' — that's deliberate. Some tools belong only in advanced protocols with close clinical oversight. We say so up front rather than bury it."
            />
            <PrincipleBlock
              title="Honest about evidence."
              body="The evidence base for peptide therapy is uneven. Some peptides (tesamorelin, PT-141 / Vyleesi) have FDA-approved indications. Others have strong mechanistic support but limited human outcome data. We tell you which is which — expectations are conservative where the data is thin."
            />
            <PrincipleBlock
              title="No prescriptions on this page."
              body="This guide is education. Prescriptions and protocols are decided one-on-one in consultation, after we've reviewed your history, labs, current medications, and goals. If a peptide on this page sounds relevant, the next step is a conversation, not a checkout button."
            />
          </div>
        </FadeIn>
      </section>

      {/* Quick category jump */}
      <section style={{ background: "var(--color-stone)", padding: "56px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={eyebrow}>Jump to a Category</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.6vw, 2rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "28px" }}>
              {PEPTIDE_CATEGORIES.length} categories · {PEPTIDE_COUNT} peptides.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "10px",
              }}
            >
              {PEPTIDE_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-divider)",
                    borderLeft: "3px solid var(--color-gold)",
                    borderRadius: "6px",
                    padding: "14px 16px",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    color: "var(--color-ink)",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {cat.title}
                  <div style={{ fontSize: "0.7rem", color: "var(--color-muted)", marginTop: "4px", fontWeight: 400 }}>
                    {cat.peptides.length} peptide{cat.peptides.length === 1 ? "" : "s"}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Categories */}
      {PEPTIDE_CATEGORIES.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          style={{
            background: ci % 2 === 0 ? "var(--color-bg)" : "var(--color-stone)",
            padding: "72px clamp(24px, 6vw, 80px)",
            scrollMarginTop: "80px",
          }}
        >
          <FadeIn>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              <div style={eyebrow}>Category</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "16px", letterSpacing: "-0.01em" }}>
                {cat.title}
              </h2>
              <p style={{ fontSize: "0.98rem", lineHeight: 1.85, color: "var(--color-muted)", maxWidth: "780px", marginBottom: "40px" }}>
                {cat.description}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {cat.peptides.map((p) => (
                  <PeptideCard key={p.id} peptide={p} />
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      ))}

      {/* Safety / disclaimer */}
      <section style={{ background: "var(--color-teal)", padding: "64px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <div style={{ ...eyebrow, color: "rgba(201,168,108,0.85)" }}>Important</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "24px" }}>
              This guide is education, not a prescription.
            </h2>
            <p style={{ fontSize: "0.97rem", lineHeight: 1.85, color: "rgba(255,255,255,0.78)", marginBottom: "16px" }}>
              Peptides are bioactive compounds. Some are FDA-approved for specific indications, some are used off-label in wellness practice with varying degrees of evidence, and some are appropriate only for highly selected patients under close clinician oversight. None of them are appropriate without a clinical evaluation.
            </p>
            <p style={{ fontSize: "0.97rem", lineHeight: 1.85, color: "rgba(255,255,255,0.78)", marginBottom: "16px" }}>
              <strong style={{ color: "#fff" }}>Revitalize does not currently prescribe or dispense peptide therapy</strong> — many of the peptides on this page are pending FDA review or are restricted under current FDA compounding guidance. This page exists to give patients clinical-grade context on the peptide landscape so they can make informed decisions and have informed conversations with their treating clinician.
            </p>
            <p style={{ fontSize: "0.97rem", lineHeight: 1.85, color: "rgba(255,255,255,0.78)" }}>
              If something on this page maps to a problem you are trying to solve, a consultation with Travis is often the right next step — most often the answer involves the foundational hormone, metabolic, and recovery work we do directly provide, not peptide therapy itself.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <div style={eyebrow}>Next Step</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.01em" }}>
              Have questions about your situation?
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "32px", maxWidth: "640px", margin: "0 auto 32px" }}>
              Travis is happy to discuss the foundational work — sleep architecture, training, nutrition, and lab interpretation — that determines whether any of these tools would even be appropriate for your situation. For prescribing-related decisions on peptide therapy specifically, please see the regulatory notice at the top of this page and discuss with your treating clinician.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "var(--color-gold)",
                  color: "#fff",
                  padding: "16px 32px",
                  borderRadius: "6px",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Book a Wellness Consultation &rarr;
              </a>
              <Link
                href="/institute"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "var(--color-teal)",
                  padding: "16px 32px",
                  borderRadius: "6px",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid var(--color-teal)",
                }}
              >
                Rebuild Institute Coaching
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

function PrincipleBlock({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        borderLeft: "3px solid var(--color-gold)",
        padding: "12px 0 12px 22px",
        marginBottom: "24px",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.15rem",
          fontWeight: 400,
          color: "var(--color-ink)",
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-muted)", margin: 0 }}>{body}</p>
    </div>
  );
}

function PeptideCard({ peptide }: { peptide: Peptide }) {
  return (
    <article
      id={peptide.id}
      style={{
        background: "#fff",
        border: "1px solid var(--color-divider)",
        borderRadius: "8px",
        padding: "28px 28px",
        scrollMarginTop: "80px",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.35rem",
          fontWeight: 400,
          color: "var(--color-ink)",
          marginBottom: "18px",
          lineHeight: 1.25,
          letterSpacing: "-0.005em",
        }}
      >
        {peptide.name}
      </h3>
      <PeptideField label="What it is" value={peptide.whatItIs} />
      <PeptideField label="Why we use it" value={peptide.whyWeUse} />
      <PeptideField label="Who it's for" value={peptide.whoItsFor} />
      <PeptideField label="Typical duration" value={peptide.typicalDuration} />
      <PeptideField label="Do we cycle it" value={peptide.doWeCycle} />
      <PeptideField label="Best outcomes when combined with" value={peptide.bestOutcomes} />
      {peptide.notes && (
        <div
          style={{
            marginTop: "12px",
            background: "rgba(201,168,108,0.08)",
            borderLeft: "3px solid var(--color-gold)",
            borderRadius: "4px",
            padding: "12px 16px",
            fontSize: "0.85rem",
            lineHeight: 1.7,
            color: "var(--color-ink)",
          }}
        >
          <strong style={{ fontWeight: 600 }}>Note:</strong> {peptide.notes}
        </div>
      )}
    </article>
  );
}

function PeptideField({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "16px", marginBottom: "10px" }} className="peptide-field-row">
      <div
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-teal)",
          fontWeight: 600,
          paddingTop: "3px",
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "var(--color-ink)" }}>{value}</div>
      <style>{`@media (max-width: 640px) { .peptide-field-row { grid-template-columns: 1fr !important; gap: 4px !important; margin-bottom: 14px !important; } }`}</style>
    </div>
  );
}
