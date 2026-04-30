import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import ServiceImagePlaceholder from "@/components/ServiceImagePlaceholder";

export const metadata: Metadata = {
  title: "VI Peel | Chemical Peel | Columbus & Warner Robins, GA",
  description: "VI Peel chemical peel in Columbus and Warner Robins, GA. Controlled resurfacing for brighter, smoother, more even-toned skin. Face, chest, back, hands, and more.",
};

export default function VIPeel() {
  return (
    <>
      <ServicePage
        hero={{
        eyebrow: "Skin Resurfacing — Columbus & Warner Robins, GA",
        headline: "VI Peel —<br /><em>Professional Chemical Peel</em>",
        subheadline: "Controlled chemical exfoliation that resurfaces the outer skin layers and reveals smoother, more even, more radiant skin underneath. Available for face and body.",
        heroKeyword: "VI Peel Chemical Peel Columbus GA",
      }}
      intro={{
        problem: "The skin you see at the surface is not always a reliable indicator of what's underneath. Sun damage, textural changes, uneven tone, and fine lines accumulate in the outer skin layers over time. A professional-grade chemical peel removes those layers in a controlled, clinician-supervised manner — exposing the healthier skin below and triggering the collagen synthesis response that follows.",
        what: "The VI Peel is a medium-depth chemical peel applied by a licensed provider to the face or body areas. It causes controlled exfoliation of the outer skin layers over five to seven days. The result — once the peeling process is complete — is smoother texture, more even tone, improved brightness, and a generally refreshed appearance. It is effective for photodamage, fine lines, mild textural concerns, and general resurfacing.",
        how: "After a brief skin evaluation, the peel solution is applied to the treatment area. You may feel warmth or tingling during application. The session itself takes thirty to forty-five minutes. You leave with the peel applied — it is not neutralized at the clinic. Peeling typically begins around days two to three and peaks at days four and five, after which the fresh skin emerges. Full recovery takes five to seven days, after which aftercare products are used to optimize results.",
      }}
      candidacy={{
        good: [
          "Adults seeking improvement in skin tone, texture, or brightness",
          "Those with photodamage, mild brown spots, or uneven pigmentation",
          "Patients looking for a resurfacing option with predictable results",
          "Those willing to observe the five-to-seven-day recovery protocol",
          "Patients maintaining results between more intensive treatments",
        ],
        notFor: [
          "Active skin irritation, open lesions, or recent sunburn",
          "Pregnancy or breastfeeding",
          "Certain allergies to peel components — reviewed at consultation",
          "Recent use of specific retinoids or other sensitizing topicals — requires washout period",
          "Those unable to observe the aftercare protocol including sun avoidance",
        ],
      }}
      whatToExpect={[
        "Consultation and skin evaluation: Your provider assesses your skin and confirms candidacy. Peel strength and formula are selected.",
        "Treatment day: Skin is cleansed and the peel solution is applied. Warmth and tingling are normal. Session takes thirty to forty-five minutes.",
        "Days one and two: Skin may look normal or slightly bronze. This is the peel working under the surface.",
        "Days three through five: Visible peeling begins. The skin sheds in sheets or patches — this is the process. Do not pick. Follow the aftercare protocol.",
        "Days five through seven: Peeling completes and fresh, smoother skin is revealed.",
        "Week two and beyond: Results continue to refine. Strict sun protection is required to protect the new skin.",
      ]}
      relatedServices={[
        { name: "AquaFirme Facials", href: "/services/aquafirme-facials" },
        { name: "Microneedling", href: "/services/microneedling" },
        { name: "PhantomClear CO2 Laser", href: "/services/fractional-co2-laser" },
        { name: "Vampire Facial & PRP", href: "/services/vampire-facial-prp" },
      ]}
      relatedPosts={[
        { title: "Microneedling vs CO2 Laser — Which Is Right for You", href: "/blog/microneedling-vs-co2-laser" },
      ]}
      faqs={[
        {
          q: "How many VI Peels do I need?",
          a: "Many patients see meaningful improvement after a single peel. For more significant concerns — pronounced photodamage, deeper lines, or acne scarring — a series of two to three peels spaced four to six weeks apart produces better cumulative results. We discuss your goals and a realistic series plan at consultation.",
        },
        {
          q: "Can the VI Peel treat areas besides the face?",
          a: "Yes. The VI Peel can be applied to the chest, back, shoulders, arms, hands, and buttocks for body resurfacing. Body peels are particularly effective for photodamage, textural irregularity, and ingrown hair concerns on the back and chest.",
        },
        {
          q: "How long is the recovery?",
          a: "Plan for five to seven days of active peeling. During this period, the skin sheds and should not be picked or rubbed. Most patients feel comfortable returning to normal social activities after day seven. Strict sun protection is required throughout the healing process and beyond.",
        },
        {
          q: "Is the VI Peel appropriate for darker skin tones?",
          a: "The VI Peel has formulas designed for a range of skin types, including Fitzpatrick skin types IV through VI. We assess your skin carefully at consultation and discuss the appropriate formula and any additional precautions.",
        },
        {
          q: "Is VI Peel available at both locations?",
          a: "Yes — Columbus at (762) 261-3880 and Warner Robins at (478) 366-1244.",
        },
      ]}
        disclaimer="VI Peel results vary by individual and skin type. This is a cosmetic treatment with a recovery period. Strict adherence to aftercare instructions — including sun avoidance — is required. Information on this page is educational and does not constitute medical advice."
        assessmentCta={{ label: "Use the Treatment Finder", href: "/tools#treatment-finder" }}
      />
      <ServiceImagePlaceholder
        eyebrow="VI Peel gallery"
        title="Treatment context visuals"
        description="This section is being replaced with custom clinical imagery matched to VI Peel consultation and recovery education."
        plannedImageSet="P09 - Skin Resurfacing Supporting Image"
      />
    </>
  );
}
