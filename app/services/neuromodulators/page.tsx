import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Neuromodulator Treatments | Botox | Columbus & Warner Robins, GA",
  description:
    "Neuromodulator injections (Botox, Dysport) in Columbus and Warner Robins, Georgia. Conservative, face-mapped approach by a licensed clinical team. Natural results, minimal downtime.",
};

export default function Neuromodulators() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Aesthetics — Columbus & Warner Robins, GA",
        headline: "Neuromodulator<br /><em>Treatments</em>",
        subheadline: "Wrinkle-relaxing injections delivered by a licensed clinical team with a conservative, face-mapped approach. The goal is softer lines and natural movement — not a frozen appearance.",
        heroKeyword: "Botox Columbus GA",
      }}
      intro={{
        problem: "The lines you have been noticing are movement lines — created by the same facial expressions you have made thousands of times over your lifetime. There is nothing wrong with them. But if they have started to bother you, or if they are more pronounced than they were a few years ago, a well-placed neuromodulator treatment can soften them significantly without changing how you look. The key word is 'well-placed.' The difference between a result that looks natural and one that looks overdone is almost entirely technique and restraint.",
        what: "Neuromodulators are injectable proteins — botulinum toxin type A — that temporarily reduce muscle contraction in treated areas. When injected precisely, they soften the movement lines created by habitual facial expressions: forehead lines, frown lines between the brows, and crow's feet are the most common treatment areas. Results typically appear within three to seven days and last three to five months depending on the area, dose, and individual metabolism. No surgery. Minimal downtime.",
        how: "Every patient begins with a face-mapping consultation. We assess your facial anatomy, your movement patterns, and what you want to change — and equally important, what you do not want to change. We discuss realistic outcomes and the tradeoffs between different approaches. Injections are performed using fine-gauge needles. Most patients describe the sensation as brief, tolerable pressure. You leave looking largely the same — results develop over the following days. We schedule a two-week follow-up for anyone who wants to review the outcome.",
      }}
      candidacy={{
        good: [
          "Adults seeking to soften forehead lines, frown lines, or crow's feet",
          "Those interested in preventive treatment to slow the development of deeper lines",
          "Patients looking for a low-downtime, lunch-break-friendly procedure",
          "Those who want subtle, natural-looking results rather than a dramatically altered appearance",
          "Patients interested in combining neuromodulators with dermal fillers for broader facial refreshing",
        ],
        notFor: [
          "Pregnant or breastfeeding patients",
          "Those with neuromuscular conditions such as myasthenia gravis or ALS",
          "Active skin infections or open lesions at the injection sites",
          "Known allergy to botulinum toxin or its formulation components",
          "Those taking certain muscle-relaxing medications — requires review at consultation",
        ],
      }}
      whatToExpect={[
        "Consultation and face mapping: We assess your facial anatomy, discuss your aesthetic goals, and develop a treatment plan. This is not a sales conversation — it is a clinical assessment. We will tell you what we can achieve and what we cannot.",
        "Treatment day: Injections take ten to twenty minutes depending on the number of areas treated. Fine-gauge needles are used. Topical numbing is available but most patients do not require it. You may have some minor redness or small injection-site marks that resolve within a few hours.",
        "Days one to three: You will notice the injection sites but likely no visible change in the treated muscles yet. Avoid lying flat for four hours, avoid rubbing the treated areas, and avoid intense exercise for the day.",
        "Days three to seven: The neuromodulator takes effect. You will notice the treated areas relaxing and movement lines softening. The effect is not instant — this is normal.",
        "Week two: Full results are visible. We offer a complimentary two-week check-in if you want to assess the outcome together. Touch-up units can be added if any area feels uneven.",
        "Three to five months: Results gradually wear off as the neuromuscular connection is restored. Most patients schedule maintenance every three to four months to sustain results.",
      ]}
      relatedServices={[
        { name: "Dermal Fillers", href: "/services/dermal-fillers" },
        { name: "Microneedling", href: "/services/microneedling" },
        { name: "AquaFirme Facials", href: "/services/aquafirme-facials" },
        { name: "VI Peel", href: "/services/vi-peel" },
        { name: "PhantomClear CO2 Laser", href: "/services/fractional-co2-laser" },
      ]}
      relatedPosts={[
        { title: "The Difference Between Botox and Dermal Fillers", href: "/blog/botox-vs-dermal-fillers" },
        { title: "How to Choose a Medical Spa in Columbus GA", href: "/blog/how-to-choose-medical-spa-columbus-ga" },
      ]}
      faqs={[
        {
          q: "How is a neuromodulator treatment at Revitalize different from other providers?",
          a: "The difference is clinical training and philosophy. Our providers have backgrounds in emergency and critical care medicine — they understand anatomy at a level most aesthetic providers do not. Our approach is conservative by design: we use the minimum effective dose to achieve the result you want, and we leave room for adjustment. We would rather you come back for a touch-up than leave looking overdone.",
        },
        {
          q: "Will I look frozen?",
          a: "Not if you tell us that is not what you want. A frozen appearance results from high doses placed without regard for natural movement. Our goal is for people who see you to notice that you look rested and refreshed — not that you have had anything done. This requires a lighter hand and a focus on preserving expressive muscle function.",
        },
        {
          q: "How long do results last?",
          a: "Most patients see results that last three to five months. Higher-metabolism individuals may metabolize the product faster. Some areas — like crow's feet — tend to last longer than forehead lines. With consistent maintenance over time, many patients find they need slightly less product to maintain the same result.",
        },
        {
          q: "Can neuromodulators be used preventively?",
          a: "Yes. Preventive neuromodulator treatment in your 30s can slow the development of deeper, etched lines that form from repeated muscle contraction over time. The dose used for prevention is typically lower than for treating established lines.",
        },
        {
          q: "What areas can be treated?",
          a: "The most common areas are the forehead, glabella (frown lines between the brows), and crow's feet. We also treat bunny lines (nose bridge), lip lines, lip flip, chin dimpling, and jawline (masseter) for teeth grinding or facial slimming in appropriate candidates. Each area is assessed individually during your consultation.",
        },
        {
          q: "Do you offer neuromodulator treatments at both Columbus and Warner Robins?",
          a: "Yes. Neuromodulator treatments are available at both our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244. Online booking is available at all times.",
        },
        {
          q: "What should I avoid before and after treatment?",
          a: "Before: avoid blood thinners including aspirin, ibuprofen, fish oil, and vitamin E for several days if possible, and avoid alcohol the day before. After: avoid lying flat for four hours, avoid rubbing the treated areas, avoid intense heat (saunas, hot yoga) and strenuous exercise for the day. We will provide full written aftercare instructions.",
        },
      ]}
      disclaimer="Neuromodulator treatments are performed by licensed clinical providers. Results are temporary and vary by individual. This page uses the term 'neuromodulator' to refer to wrinkle-relaxing injectable treatments. Specific product selection is determined at consultation. Information on this page is educational and does not constitute medical advice."
    />
  );
}
