import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

type Section = { headline: string; body: string };

type CompareData = {
  eyebrow: string;
  h1: string;
  opening: string;
  sections: Section[];
  faq: Array<{ q: string; a: string }>;
  ctaLabel: string;
  ctaHref: string;
  relatedServiceLabel: string;
  relatedServiceHref: string;
  metaTitle: string;
  metaDescription: string;
};

const COMPARISONS: Record<string, CompareData> = {
  "botox-vs-dysport": {
    metaTitle: "Botox vs. Dysport — Clinical Comparison | Revitalize",
    metaDescription: "An honest clinical comparison of Botox and Dysport neuromodulators — mechanism, diffusion, unit conversion, and when the choice actually matters.",
    eyebrow: "Injectable Comparison",
    h1: "Botox vs. Dysport — an honest clinical comparison.",
    opening:
      "Both are botulinum toxin type A neuromodulators. Both relax overactive muscles to reduce dynamic wrinkles. Both have excellent safety records spanning decades. The question of which to use is less about one being better and more about clinical context, anatomy, and provider preference.",
    sections: [
      {
        headline: "What they have in common",
        body: "Same mechanism: botulinum toxin type A blocks acetylcholine release at the neuromuscular junction, temporarily preventing muscle contraction. Same indication: treatment of dynamic wrinkles — lines that appear with movement rather than at rest. Same safety profile: both are FDA-approved, extensively studied, and well-tolerated. Same general contraindications.",
      },
      {
        headline: "How they differ",
        body: `**Formulation.** Dysport has a smaller molecular weight and lower protein load per unit than Botox. This affects diffusion behavior and unit-to-unit conversion.

**Diffusion pattern.** Dysport spreads slightly more broadly from the injection point than Botox. This can be an advantage in large surface areas (forehead) and a reason for additional precision in smaller, more confined areas (orbicularis oculi for crow's feet in certain patients).

**Unit conversion.** Dysport units and Botox units are not equivalent. The typical conversion is approximately 2.5-3 Dysport units per 1 Botox unit, though this varies by product lot and clinical context. This does not mean Dysport is cheaper or more dilute — it means the dosing systems are different.

**Onset and duration.** Both products have similar onset (3-7 days to initial effect, full effect at 2 weeks) and similar duration (3-4 months on average). Some clinicians and patients report slightly earlier onset with Dysport; evidence is mixed.`,
      },
      {
        headline: "When does the choice actually matter?",
        body: `For most patients in most treatment areas, the clinical outcome is indistinguishable between the two products when administered by an experienced provider who accounts for the unit conversion. The choice is more relevant in specific scenarios:

**Large forehead:** Dysport's diffusion pattern can be advantageous, reducing the number of injection points needed for even distribution.

**Precise confinement needed:** Botox's more contained diffusion pattern may be preferred in areas where exact localization matters — upper lip lines, for example.

**Patient history:** If a patient has had an excellent response to one product, clinical continuity favors maintaining that choice absent a specific reason to switch.`,
      },
      {
        headline: "The Revitalize approach",
        body: "At Revitalize, both Botox and Dysport are available. The choice is made during consultation based on the treatment area, the patient's anatomy, and clinical judgment. There is no default; there is no premium product. There is the product that makes the most clinical sense for your specific face and treatment goals. Every neuromodulator treatment at Revitalize begins with a clinical assessment, not a menu selection. The provider assesses muscle activity patterns, skin quality, prior treatment history, and natural movement before recommending a dosing approach.",
      },
    ],
    faq: [
      {
        q: "Is one more expensive than the other?",
        a: "Pricing varies by practice and is typically quoted in total cost rather than per-unit. At Revitalize, treatment pricing is discussed during consultation based on the areas being treated and the product selected.",
      },
      {
        q: "Can I switch from Botox to Dysport or vice versa?",
        a: "Yes. Patients switch between products regularly. The unit conversion must be applied correctly, which is a clinical responsibility, not a patient concern.",
      },
      {
        q: "Does Dysport hurt more than Botox?",
        a: "The injection experience is similar. Both are administered with very fine needles; topical numbing can be applied for patients with lower pain tolerance.",
      },
      {
        q: "How do I know which one I'm getting?",
        a: "The product used is discussed during your consultation and documented in your treatment record.",
      },
      {
        q: "Will I need more units of Dysport to get the same result?",
        a: "Yes — the unit systems are different and are not interchangeable. Your provider applies the correct unit conversion; the clinical outcome is the reference point, not the unit count.",
      },
    ],
    ctaLabel: "Book a neuromodulator consultation",
    ctaHref: SITE.booking,
    relatedServiceLabel: "Neuromodulators (Botox & Dysport)",
    relatedServiceHref: "/services/neuromodulators",
  },

  "microneedling-vs-co2-laser": {
    metaTitle: "Microneedling vs. CO2 Laser — Clinical Comparison | Revitalize",
    metaDescription: "A clinical comparison of microneedling and fractional CO2 laser resurfacing — mechanism, downtime, indications, and how to choose at Revitalize.",
    eyebrow: "Skin Resurfacing Comparison",
    h1: "Microneedling vs. CO2 Laser — which one is right for you.",
    opening:
      "Both produce skin improvement through controlled injury and the subsequent repair response. Beyond that, they are meaningfully different procedures with different mechanisms, different downtime, different risk profiles, and different ceilings for what they can achieve. The right choice depends on what you are trying to address and what you are willing to go through to get there.",
    sections: [
      {
        headline: "Microneedling — what it is and what it does",
        body: `Microneedling creates hundreds of micro-channels in the dermis using fine needles, stimulating the body's wound-healing response without removing tissue. The result is new collagen synthesis, improved skin texture, and reduction in mild surface irregularities. RF (radiofrequency) energy can be delivered simultaneously to heat the deeper dermis and amplify the tightening response.

**What microneedling addresses well:**
Fine lines and mild textural irregularity · Early pore enlargement · Mild acne scarring · Skin tone inconsistency · Initial stages of skin laxity

**What microneedling does not address:**
Deep acne scars (boxcar and icepick type) · Significant photoaging and pigmentation · Rhytids (wrinkles present at rest in mature skin) · Significant laxity

**Downtime:** 24-72 hours of redness. Most patients return to normal activity the next day.`,
      },
      {
        headline: "CO2 Laser — what it is and what it does",
        body: `Fractional CO2 resurfacing (PhantomClear at Revitalize) delivers 10,600nm ablative laser energy in a fractional pattern — columns of treatment separated by untreated tissue, which accelerates healing and reduces risk compared to fully ablative resurfacing. The laser vaporizes thin layers of skin tissue, triggering a more aggressive healing response than microneedling.

**What CO2 laser addresses well:**
Moderate to deep rhytids (wrinkles at rest) · Significant photoaging and sun damage · Acne scarring including deeper scar types · Significant textural irregularity · More advanced skin laxity · Pigmentation including melasma in appropriate candidates

**What CO2 laser does not address (or requires significant caution):**
Active inflammatory acne · Very dark skin tones (Fitzpatrick V-VI require specific protocols and expertise) · Unrealistic expectations about single-treatment outcomes · Patients unable to commit to the post-treatment protocol

**Downtime:** 5-10 days of significant healing. Redness, weeping, and crusting are normal. Full healing takes two to three weeks; residual pinkness can persist for four to eight weeks.`,
      },
      {
        headline: "How to choose",
        body: `**Choose microneedling if:**
You are in your 30s to early 40s addressing early signs of aging, you want improvement with minimal downtime, you are maintaining skin quality rather than reversing significant damage, or you are not a CO2 candidate based on skin tone.

**Choose CO2 laser if:**
You have significant photodamage, moderate to deep wrinkles, meaningful acne scarring, or textural issues that microneedling has not adequately addressed. You must be willing and able to commit to the downtime and post-treatment protocol. CO2 is not a lunch-break procedure.`,
      },
      {
        headline: "The Revitalize approach",
        body: "The decision between these two treatments is made during clinical consultation based on your skin condition, Fitzpatrick type, treatment goals, timeline, and lifestyle constraints. Neither is the default. Both are available. The right answer depends on your specific situation.",
      },
    ],
    faq: [
      {
        q: "Can I do both microneedling and CO2 laser?",
        a: "Not simultaneously. They can be performed at different points in a skin health plan — for example, microneedling for maintenance and CO2 for a significant correction. The sequence and timing are clinically directed.",
      },
      {
        q: "Does CO2 laser work on darker skin tones?",
        a: "Fractional CO2 can be performed on a wider range of skin tones than fully ablative resurfacing, but careful assessment of Fitzpatrick type and prior pigmentation patterns is essential. Darker tones (Fitzpatrick IV-VI) require specific protocols and significant experience. This is a conversation to have during consultation.",
      },
      {
        q: "How many microneedling sessions are needed to see results?",
        a: "A series of three sessions spaced four to six weeks apart is the standard recommendation for initial treatment. Results are cumulative; a single session produces improvement but multiple sessions produce more meaningful change.",
      },
      {
        q: "How many CO2 laser sessions are needed?",
        a: "One treatment produces significant improvement. Some patients benefit from a second treatment after a 6-12 month interval. The goal of CO2 is meaningful correction, not ongoing maintenance.",
      },
      {
        q: "Is one more painful than the other?",
        a: "CO2 laser is more intense. Topical anesthesia is applied before both procedures. Patients typically describe microneedling as manageable; CO2 laser produces more procedural discomfort despite numbing.",
      },
    ],
    ctaLabel: "Schedule a skin consultation",
    ctaHref: SITE.booking,
    relatedServiceLabel: "Microneedling",
    relatedServiceHref: "/services/microneedling",
  },

  "semaglutide-vs-tirzepatide": {
    metaTitle: "Semaglutide vs. Tirzepatide — Clinical Comparison | Revitalize",
    metaDescription: "A clinical comparison of semaglutide and tirzepatide for medical weight loss — mechanism, efficacy data, tolerability, and how the choice is made at Revitalize.",
    eyebrow: "Weight Loss Medication Comparison",
    h1: "Semaglutide vs. Tirzepatide — what the difference actually means.",
    opening:
      "Both are injectable medications used in structured metabolic weight loss programs. Both work, in different ways, and with different response profiles. The choice is not about which is better — it is about which is clinically appropriate for your specific metabolic picture.",
    sections: [
      {
        headline: "Semaglutide — mechanism and clinical profile",
        body: `Semaglutide is a GLP-1 receptor agonist. GLP-1 (glucagon-like peptide-1) is an incretin hormone released by the intestinal L-cells in response to eating. GLP-1 receptor agonists mimic this signal, producing several metabolic effects: slowing gastric emptying, increasing satiety signaling to the hypothalamus, reducing glucagon secretion, and improving insulin secretion in a glucose-dependent manner.

The practical result is meaningful reduction in appetite and caloric intake. The clinical trial data (SELECT, STEP trials) shows 15-18% body weight reduction in non-diabetic populations at therapeutic doses with sustained treatment.

Semaglutide is available as Ozempic (diabetes indication), Wegovy (weight management indication), and compounded semaglutide.`,
      },
      {
        headline: "Tirzepatide — mechanism and clinical profile",
        body: `Tirzepatide is a dual GIP/GLP-1 receptor agonist. It activates both the GLP-1 receptor (same as semaglutide) and the GIP (glucose-dependent insulinotropic polypeptide) receptor.

GIP acts through a different but complementary mechanism — it affects adipose tissue directly, enhances GLP-1's insulin-stimulating effect, and appears to reduce some of the GI side effects seen with GLP-1-only agonists.

The clinical trial data (SURMOUNT trials) shows 20-22% body weight reduction in non-diabetic populations at therapeutic doses — meaningfully greater than semaglutide in head-to-head comparisons. This difference is real and clinically significant.

Tirzepatide is available as Mounjaro (diabetes indication), Zepbound (weight management indication), and compounded tirzepatide.`,
      },
      {
        headline: "The key clinical differences",
        body: `**Magnitude of effect:** Tirzepatide produces greater average weight loss than semaglutide in clinical trials — approximately 20-22% vs 15-18% body weight reduction.

**GI tolerability:** Counterintuitively, tirzepatide is often better tolerated than semaglutide despite its greater potency, likely due to the complementary GIP receptor activity reducing net GI side effects.

**Insulin resistance:** Both improve insulin sensitivity. Tirzepatide's GIP component has additional effects on adipose tissue metabolism that may be advantageous in patients with significant insulin resistance.

**Cost and availability:** Both products have had supply variability. Compounded versions of both are available. Cost is comparable at most pharmacies.`,
      },
      {
        headline: "When does the choice matter?",
        body: "For most patients, tirzepatide's superior efficacy and comparable tolerability make it a reasonable first-line choice when either would be appropriate. Semaglutide may be preferred in specific circumstances: established good response on semaglutide, specific insurance coverage situations, or patient preference based on prior experience.",
      },
      {
        headline: "The Revitalize approach",
        body: "Medication selection within the medical weight loss program is made based on the patient's metabolic profile, insulin resistance pattern, prior medication history, and treatment goals. The conversation about which agent is appropriate happens after a complete metabolic evaluation — not before it. Neither medication is prescribed without the clinical framework of the structured program. The medication is one tool in a protocol that also addresses hormonal status, thyroid function, nutrition architecture, and body composition goals.",
      },
    ],
    faq: [
      {
        q: "Can I switch from semaglutide to tirzepatide?",
        a: "Yes. Transitions between GLP-1 class medications are common. The clinical approach to transition timing and dosing is individualized.",
      },
      {
        q: "Is tirzepatide covered by insurance?",
        a: "Coverage for both agents varies significantly by plan. The weight management indications (Wegovy and Zepbound) have different coverage patterns than the diabetes indications. Compounded versions are typically cash-pay.",
      },
      {
        q: "What happens if I stop the medication?",
        a: "Weight regain after stopping GLP-1 medications is well-documented. This is why the program at Revitalize emphasizes concurrent hormonal optimization and metabolic correction — building a physiological foundation that supports maintenance when medication is eventually tapered.",
      },
      {
        q: "How long do I need to be on the medication?",
        a: "Duration is individualized. The goal is to use the medication period to correct the underlying metabolic drivers — not to remain on medication indefinitely. Some patients can successfully taper and maintain; others require ongoing low-dose therapy.",
      },
      {
        q: "Are these medications safe long-term?",
        a: "Both have been studied in large cardiovascular outcome trials (SELECT for semaglutide, SURPASS-CVOT for tirzepatide) with favorable cardiovascular safety profiles. Long-term data beyond five years is still accumulating.",
      },
    ],
    ctaLabel: "Schedule a medical weight loss evaluation",
    ctaHref: SITE.booking,
    relatedServiceLabel: "Medical Weight Loss",
    relatedServiceHref: "/services/medical-weight-loss",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(COMPARISONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = COMPARISONS[slug];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

function renderSection(body: string) {
  return body.trim().split(/\n\n+/).map((block, i) => {
    if (block.trim() === "") return null;
    return (
      <p
        key={i}
        style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "16px" }}
        dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/·/g, "&nbsp;&middot;&nbsp;") }}
      />
    );
  });
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const data = COMPARISONS[slug];
  if (!data) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "760px" }}>
          <Link
            href={data.relatedServiceHref}
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "28px" }}
          >
            &larr; {data.relatedServiceLabel}
          </Link>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
            {data.eyebrow}
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, lineHeight: 1.15, color: "#fff", letterSpacing: "-0.015em", marginBottom: "24px" }}>
            {data.h1}
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: "620px" }}>
            {data.opening}
          </p>
        </div>
      </section>

      {/* Main */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 280px", gap: "64px", alignItems: "start" }} className="compare-layout">
          <FadeIn>
            <article>
              {data.sections.map((section, i) => (
                <div key={i}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)", marginTop: i === 0 ? 0 : "48px", marginBottom: "20px", lineHeight: 1.3 }}>
                    {section.headline}
                  </h2>
                  {renderSection(section.body)}
                </div>
              ))}

              {/* FAQ */}
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)", marginTop: "56px", marginBottom: "20px", lineHeight: 1.3 }}>
                Common questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
                {data.faq.map((item, i) => (
                  <details key={i} style={{ background: "var(--color-stone)", borderRadius: "4px", overflow: "hidden" }}>
                    <summary style={{ padding: "16px 20px", cursor: "pointer", fontWeight: 600, fontSize: "0.88rem", color: "var(--color-ink)", lineHeight: 1.45, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                      {item.q}
                      <span style={{ color: "var(--color-teal)", flexShrink: 0, fontSize: "1.2rem", lineHeight: 1 }}>+</span>
                    </summary>
                    <div style={{ padding: "0 20px 16px", fontSize: "0.87rem", lineHeight: 1.8, color: "var(--color-muted)" }}>
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>

              {/* CTA */}
              <div style={{ background: "rgba(201,168,108,0.07)", border: "1px solid rgba(201,168,108,0.3)", borderRadius: "8px", padding: "28px 28px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.3, marginBottom: "20px" }}>
                  Ready to find out which is right for you?
                </h3>
                <a
                  href={data.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
                >
                  {data.ctaLabel} &rarr;
                </a>
              </div>
            </article>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.1}>
            <aside style={{ position: "sticky", top: "100px" }}>
              <div style={{ background: "var(--color-teal)", borderRadius: "6px", padding: "28px 24px", marginBottom: "20px" }}>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "12px" }}>
                  Related service
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 400, color: "#fff", lineHeight: 1.3, marginBottom: "16px" }}>
                  {data.relatedServiceLabel}
                </h3>
                <Link href={data.relatedServiceHref} style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "10px 20px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
                  Learn More
                </Link>
              </div>

              <div style={{ background: "#fff", borderRadius: "6px", padding: "24px" }}>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "12px" }}>
                  Book a consultation
                </div>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-muted)", marginBottom: "14px" }}>
                  The right choice for your situation is made during consultation. Book at either location.
                </p>
                <a href={SITE.bookingColumbus} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "var(--color-teal)", color: "#fff", padding: "10px 16px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center", marginBottom: "8px" }}>
                  Columbus
                </a>
                <a href={SITE.bookingWarnerRobins} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "var(--color-gold)", color: "#fff", padding: "10px 16px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
                  Warner Robins
                </a>
              </div>
            </aside>
          </FadeIn>
        </div>

        <style>{`
          .compare-layout { grid-template-columns: 1fr 280px; }
          @media (max-width: 1024px) { .compare-layout { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
