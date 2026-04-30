import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "AquaFirme Facials | Columbus & Warner Robins, GA",
  description: "AquaFirme facial treatments in Columbus and Warner Robins, GA. Cleanse, polish, and infuse with custom serums for glassy, refreshed skin with no significant downtime.",
};

export default function AquaFirmeFacials() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Facials — Columbus & Warner Robins, GA",
        headline: "AquaFirme<br /><em>Facials</em>",
        subheadline: "A four-step device-assisted facial — cleanse, polish, infuse, protect — customized to your skin type and delivered in forty-five to sixty minutes. Glassy, refreshed results with no downtime.",
        heroKeyword: "AquaFirme Facial Columbus GA",
      }}
      intro={{
        problem: "Most facials leave your skin looking better for a day or two and then return to baseline. The AquaFirme is designed differently — it combines mechanical exfoliation, vacuum-assisted fluid delivery, and targeted serum infusion into a single session that produces genuinely polished, dewy results. For patients who want a high-quality facial with visible same-day results and no recovery time, this is one of the best options we offer.",
        what: "AquaFirme is a device-assisted facial that delivers cleansing, exfoliation, serum infusion, and hydration in a sequential protocol. The vacuum-assisted fluid wash removes surface buildup more thoroughly than manual cleansing. The polish step addresses texture and dry patches. The infusion step delivers custom serums selected for your skin's specific concerns — whether refinement, brightening, or hydration. The final step protects the freshly treated skin with hydrators and SPF.",
        how: "After a brief skin assessment to determine which serum combination is most appropriate, the AquaFirme device is applied in the four-step protocol. The procedure takes forty-five to sixty minutes. Most patients describe it as comfortable and relaxing. You leave with what the clinic describes as a freshly washed, glassy look — smooth, dewy, and noticeably clearer. Most patients return to normal activities immediately.",
      }}
      candidacy={{
        good: [
          "Adults seeking a high-quality facial with same-day visible results",
          "Those with dull, uneven, or rough-textured skin",
          "Patients who want a zero-downtime treatment between more intensive procedures",
          "Those maintaining results from microneedling, laser, or peel treatments",
          "Anyone preparing for an event and wanting polished, camera-ready skin",
        ],
        notFor: [
          "Active skin irritation, open lesions, or recent sunburn in the treatment area",
          "Known allergies to serum components — reviewed at consultation",
          "Those expecting results equivalent to ablative or resurfacing procedures",
        ],
      }}
      whatToExpect={[
        "Skin assessment: Your provider evaluates your skin type and selects the appropriate serum combination for your session.",
        "Cleanse and prep: The device performs a thorough vacuum-assisted cleansing of the skin surface.",
        "Polish: Controlled exfoliation addresses texture irregularity and dry patches.",
        "Infuse: Custom serums targeting your specific concerns are delivered to the skin.",
        "Protect: Hydrators and broad-spectrum SPF are applied.",
        "After: Most patients experience a brief period of mild pinkness that resolves quickly. Skin appears dewy, smooth, and refreshed.",
      ]}
      relatedServices={[
        { name: "VI Peel", href: "/services/vi-peel" },
        { name: "Microneedling", href: "/services/microneedling" },
        { name: "Neuromodulators", href: "/services/neuromodulators" },
        { name: "Vampire Facial & PRP", href: "/services/vampire-facial-prp" },
      ]}
      relatedPosts={[
        { title: "How to Choose a Medical Spa in Columbus GA", href: "/blog/how-to-choose-medical-spa-columbus-ga" },
      ]}
      faqs={[
        {
          q: "How often should I get an AquaFirme facial?",
          a: "Most patients schedule AquaFirme facials every four to six weeks as a maintenance treatment. The regular cadence keeps skin clear, hydrated, and smooth between more intensive procedures.",
        },
        {
          q: "Is there any downtime?",
          a: "Minimal to none. Temporary mild pinkness may occur immediately after but typically resolves within a few hours. Most patients return to normal activities and wear makeup the same day.",
        },
        {
          q: "Can AquaFirme be combined with other treatments?",
          a: "Yes. AquaFirme pairs well with dermaplaning and LED light therapy as a same-session addition. It is also a good maintenance treatment to schedule between microneedling or peel sessions.",
        },
        {
          q: "Is AquaFirme the same as a HydraFacial?",
          a: "AquaFirme is a distinct device with its own protocol, though both involve device-assisted cleansing and serum infusion. We can discuss how the two compare and which approach is most appropriate for your skin during your consultation.",
        },
        {
          q: "Is AquaFirme available at both locations?",
          a: "Yes — Columbus, GA at (762) 261-3880 and Warner Robins, GA at (478) 366-1244.",
        },
      ]}
      disclaimer="AquaFirme facial results vary by individual and skin type. This is a cosmetic treatment. Information on this page is educational and does not constitute medical advice."
      assessmentCta={{ label: "Use the Treatment Finder", href: "/tools#treatment-finder" }}
    />
  );
}
