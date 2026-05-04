import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { SITE } from "@/lib/constants";
import { PEPTIDE_COUNT } from "@/lib/peptides";

export const metadata: Metadata = {
  title: "Peptide Education & Consultation Columbus GA | Revitalize Aesthetics & Wellness",
  description: `Clinical peptide education and consultation in Columbus and Warner Robins, GA — covering ${PEPTIDE_COUNT} peptides across nine categories. Note: peptide therapy is pending FDA approval and not currently prescribed at Revitalize. Travis Woodley, MSN, RN, CRNP — education and consultation only.`,
  keywords: [
    "peptide education Columbus GA",
    "peptide consultation Columbus GA",
    "peptide therapy Warner Robins",
    "BPC-157 education Columbus",
    "Sermorelin information Columbus GA",
    "CJC-1295 Ipamorelin Georgia",
    "Tesamorelin education Columbus",
    "PT-141 Bremelanotide Georgia",
    "MOTS-C peptide education",
    "GHK-Cu skin peptide",
    "Thymosin Alpha-1 immune education",
    "Travis Woodley peptide consultation",
    "Revitalize peptide education",
  ],
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/services/peptide-education",
  },
};

export default function PeptideTherapyServicePage() {
  // Service schema (not MedicalProcedure) — this offering is education and
  // consultation only. Peptide therapy itself is pending FDA approval and not
  // prescribed at Revitalize. Misrepresenting that in MedicalProcedure schema
  // would be both legally and SEO inaccurate.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Peptide Education & Consultation",
    serviceType: "Patient education and clinical consultation",
    description:
      "Patient education and consultation regarding the peptide therapy landscape — what each peptide is, its evidence base, regulatory status, and how patient goals around recovery, body composition, sleep, and longevity may be addressed through hormone optimization, GLP-1 medical weight loss, IV therapy, and other services Revitalize directly provides. Peptide therapy itself is pending FDA approval and not currently prescribed.",
    provider: {
      "@type": "MedicalBusiness",
      name: "Revitalize Aesthetics & Wellness",
      url: SITE.url,
    },
    areaServed: [
      { "@type": "City", name: "Columbus, GA" },
      { "@type": "City", name: "Warner Robins, GA" },
    ],
    audience: {
      "@type": "PatientAudience",
      audienceType: "Adults seeking education on peptide therapy and related metabolic, hormone, and recovery interventions",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Compliance alert — kept consistent with /peptide-education.
          Many peptides are pending FDA review or restricted under FDA
          compounding guidance; we are explicit that prescriptions for
          peptide therapy are not currently dispensed at Revitalize. */}
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
              Peptide therapy is currently <strong>pending FDA approval and restricted under FDA compounding guidance</strong>. Revitalize Aesthetics &amp; Wellness <strong>does not currently provide prescriptions or dispense peptide therapy</strong>. This page describes our educational and consultation services around peptide-related questions and the foundational hormone, metabolic, and recovery work that often comes first.
            </div>
          </div>
        </div>
      </aside>

      <ServicePage
        hero={{
          eyebrow: "Peptide Education & Consultation — Columbus & Warner Robins, GA",
          headline: "Peptide Education<br /><em>& Consultation</em>",
          subheadline:
            "Patient education on the peptides Travis tracks clinically — what they are, what they do, who they're studied for, and how they relate to the hormone, metabolic, and recovery work we actually deliver. Education and consultation only; peptide prescriptions are not currently provided (see notice above).",
          heroKeyword: "Peptide Education Columbus GA",
        }}
        intro={{
          problem:
            "Peptides have a marketing problem. Patients see them advertised everywhere as a fix for fat loss, sleep, recovery, libido, longevity — and most of what's online is either oversold or completely missing the clinical context that makes any of these tools meaningful. The signaling biology is real. The cycling matters. The lab work matters. The foundational lifestyle work matters more than any peptide does. We see patients who have spent thousands on self-directed peptide stacks from gray-market pharmacies, and they want to know what's actually evidence-based — and what they should be doing first regardless of whether peptide therapy ever becomes part of their plan.",
          what:
            "Peptides are short chains of amino acids that act as signaling molecules — telling cells what to do at the cellular level. Different peptides hit different pathways: some support growth hormone pulsatility for sleep and recovery, some support fat metabolism, some support tissue repair, some calm inflammatory signaling. Travis tracks roughly 25 peptides across nine clinical categories. The full educational reference — what each one is, the patient population it has been studied for, typical course patterns, and the foundational work that makes each one meaningful — lives on the Peptide Education page. This consultation service is about understanding that landscape and identifying what foundational work belongs in your plan today.",
          how:
            "We start with a real consultation — your goals, your current medications and supplements, the labs you have (or new labs we order), and what foundational work is already in place. The honest truth about peptide therapy is that most patients are best served by tightening sleep, protein, training, hormone optimization, and stress regulation first — and a meaningful percentage find that the foundational work is enough on its own. The hormone, metabolic, and recovery services we do provide directly (TRT, BHRT, GLP-1 medical weight loss, IV therapy, hormone pellets) often address the underlying drivers people were hoping a peptide would fix. We discuss all of this transparently, regardless of where peptide therapy itself sits in current FDA guidance.",
        }}
        candidacy={{
          good: [
            "Patients curious about peptides who want clinical-grade education before making any decisions about self-directed protocols or out-of-state prescribers",
            "Patients evaluating whether their goals would actually be better addressed by hormone optimization, GLP-1 therapy, or other services we do provide directly",
            "Patients with specific goals (body composition, recovery, sleep, libido, immune resilience) where foundational work needs to be evaluated and structured first",
            "Patients with central or visceral fat patterns wanting to understand which clinical levers — including services we provide — are most appropriate",
            "Patients in burnout-type seasons looking for structured support across sleep, training, hormones, and stress",
            "Patients who want a clinician to review and contextualize peptide-related questions rather than rely on supplement-store guidance",
          ],
          notFor: [
            "Patients seeking a peptide prescription — we do not currently provide those (see top-of-page notice)",
            "Patients looking for a shortcut around foundational work — the foundations always come first regardless of what peptide regulation looks like",
            "Patients seeking out-of-state telehealth peptide prescribing — we don't refer into that space",
            "Patients expecting same-week results from any wellness intervention",
            "Self-directed protocol validation — we won't review or advise on peptides obtained from gray-market sources",
          ],
        }}
        whatToExpect={[
          "Comprehensive consultation: We review your goals, history, current medications, supplements, and recent labs. We discuss what foundational work is already in place and what is missing.",
          "Honest landscape conversation: We walk through the peptide categories relevant to your goals — what the evidence supports, what is overhyped, what is FDA-approved (very few), and what is currently restricted.",
          "Foundational plan: We identify the hormone, metabolic, recovery, and lifestyle work that should happen first. Often this is the entire conversation — and patients leave with a clear plan that does not require peptide therapy at all.",
          "Service alignment: When the right answer is hormone optimization, GLP-1 medical weight loss, IV therapy, or another service we directly provide, we explain why and walk through the next step.",
          "Lab interpretation when relevant: Travis can interpret existing labs, recommend additional draws, and contextualize what the numbers say about your physiology — independent of whether peptide therapy enters the picture.",
          "Ongoing relationship: This is a clinical conversation, not a one-time transaction. Patients often return as foundational work matures and as the regulatory landscape around peptide therapy continues to evolve.",
        ]}
        relatedServices={[
          { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
          { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
          { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
          { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
          { name: "Erectile Dysfunction", href: "/services/erectile-dysfunction" },
          { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
        ]}
        relatedPosts={[
          { title: "Peptide Education Guide — Travis's Full Clinical Reference", href: "/peptide-education" },
          { title: "Free Testosterone vs Total Testosterone — Why Your Lab Results Matter", href: "/blog/free-testosterone-vs-total-testosterone-why-your-lab-results-matter" },
          { title: "Symptom Guide: Persistent Fatigue", href: "/symptoms/low-energy" },
          { title: "Symptom Guide: Poor Sleep", href: "/symptoms/poor-sleep" },
          { title: "Symptom Guide: Midsection Weight Gain", href: "/symptoms/midsection-weight-gain" },
        ]}
        faqs={[
          {
            q: "Does Revitalize prescribe peptide therapy?",
            a: "No — not currently. Many peptides are pending FDA review or are restricted under FDA compounding guidance. We don't prescribe or dispense peptide therapy at Revitalize Aesthetics & Wellness. What we do offer is patient education on the peptide landscape and consultation around the foundational hormone, metabolic, and recovery work that often answers the underlying question without peptides.",
          },
          {
            q: "Then what does this consultation actually cover?",
            a: "It covers your goals, your current physiology (history, labs, medications), and the landscape of clinical levers available to you — including the services we directly provide (hormone optimization, GLP-1 medical weight loss, IV therapy, hormone pellets, injection-based TRT) and the educational context around peptide therapy as a separate domain. Many patients arrive thinking peptides are the answer and leave with a structured plan that does not require them at all.",
          },
          {
            q: "What is peptide therapy?",
            a: "Peptides are short chains of amino acids that act as signaling molecules in the body — telling cells what to do at the cellular level. Different peptides target different systems: growth hormone pulsatility, fat metabolism, tissue repair, inflammatory signaling, sexual response. The full educational reference (with what each peptide is, who it has been studied for, typical course patterns, and foundational pairings) is on the Peptide Education page linked at the bottom of this page.",
          },
          {
            q: "Are any peptides FDA-approved?",
            a: "A small number — tesamorelin (Egrifta) for HIV-associated lipodystrophy and bremelanotide (Vyleesi) for HSDD in premenopausal women being the most established examples. Most peptides discussed in wellness contexts are not FDA-approved, and many fell into restricted categories under recent FDA compounding guidance. The Peptide Education page is explicit about which peptides have what regulatory status.",
          },
          {
            q: "If you don't prescribe peptides, why have this service at all?",
            a: "Two reasons. First, patients are being marketed peptides aggressively from out-of-state telehealth and gray-market sources, often without any clinical context. Travis would rather walk patients through the landscape honestly than have them make those decisions in a vacuum. Second, the underlying goals patients bring to peptides — better recovery, better sleep, better body composition, better sexual response — are usually addressable through the hormone, metabolic, and lifestyle work we do provide directly. The consultation is about figuring out which conversation you actually need to have.",
          },
          {
            q: "Could you prescribe peptides in the future?",
            a: "If and when the regulatory landscape changes — and several peptides do appear to be moving through FDA review — we will revisit. For now, the answer is no.",
          },
          {
            q: "Will the foundational work you recommend interact with anything I'm already taking?",
            a: "We review your full medication list at consultation, including current TRT, BHRT, GLP-1, thyroid medications, and supplements. If we recommend any service we directly provide (hormone optimization, IV therapy, etc.), we sequence it around what you're already on.",
          },
          {
            q: "Can foundational hormone optimization replace what people are looking for from peptides?",
            a: "Often, yes. The most common goals people bring to peptide therapy — better energy, better sleep, better recovery, better body composition — are frequently driven by under-optimized testosterone, thyroid, sleep architecture, or insulin sensitivity. Addressing those foundational drivers (which we do provide) often delivers the result patients hoped a peptide would. Sometimes peptides would be additive; sometimes they're not the right tool. The consultation sorts that out.",
          },
          {
            q: "How much is the consultation?",
            a: "Pricing varies by appointment type and is discussed during scheduling. Cost is transparent — there are no surprise add-ons.",
          },
          {
            q: "Do you offer peptide consultations at both Columbus and Warner Robins?",
            a: `Yes. Peptide education and consultation visits are available at both our Columbus, GA location — ${SITE.phone.columbus} — and our Warner Robins, GA location — ${SITE.phone.warnerRobins}. Travis sees patients at both clinics on a published rotating schedule.`,
          },
          {
            q: "Where can I learn more about specific peptides before my consultation?",
            a: "Read the Peptide Education page — Travis's working clinical reference for every peptide he tracks, organized by category, with what each one is, the patient population it has been studied for, typical course patterns, and the foundational work each one needs to be paired with. It is education only, but it will make the consultation conversation more efficient.",
          },
        ]}
        disclaimer="Peptide therapy is currently pending FDA approval and is restricted under FDA compounding guidance. Revitalize Aesthetics & Wellness does not currently prescribe or dispense peptide therapy. This service provides patient education and consultation only. Information presented is educational and does not substitute for individualized clinical evaluation. Individual responses to any wellness intervention vary."
        pageHref="/services/peptide-education"
        pageName="Peptide Therapy"
        assessmentCta={{ label: "Read the Full Peptide Education Guide", href: "/peptide-education" }}
      />
    </>
  );
}
