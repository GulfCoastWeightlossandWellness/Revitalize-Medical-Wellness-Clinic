import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import ServiceImagePlaceholder from "@/components/ServiceImagePlaceholder";

export const metadata: Metadata = {
  title: "Fat Dissolving Injections | Submental | Columbus & Warner Robins, GA",
  description: "Fat dissolving injections (deoxycholic acid) for submental fullness in Columbus and Warner Robins, GA. Non-surgical double chin reduction. Series-based treatment.",
};

export default function FatDissolvingInjections() {
  return (
    <>
      <ServicePage
        hero={{
        eyebrow: "Wellness — Columbus & Warner Robins, GA",
        headline: "Fat Dissolving<br /><em>Injections</em>",
        subheadline: "FDA-recognized deoxycholic acid injections for localized submental fullness — the 'double chin.' Non-surgical, with gradual, natural-looking results over a series of sessions.",
        heroKeyword: "Fat Dissolving Injections Columbus GA",
      }}
      intro={{
        problem: "Submental fullness — the accumulation of fat under the chin — is one of the most common concerns we hear about, and one of the most resistant to diet and exercise. The fat cells in this area are stubborn, and for many people, they persist regardless of overall weight loss. Fat dissolving injections address this specific area directly.",
        what: "We use deoxycholic acid — a bile-acid derivative that is FDA-recognized for the reduction of submental fullness. When injected, it disrupts the membrane of fat cells, causing them to release their contents and be gradually metabolized by the body over several weeks. The treated fat cells do not regenerate. Results are gradual and natural-looking.",
        how: "A series of injection sessions is required — most patients need two to four sessions spaced four to eight weeks apart to achieve their desired result. Each session takes twenty to thirty minutes. The injection sites are mapped and marked before treatment. Common effects after treatment include significant swelling, firmness, bruising, numbness, and tenderness in the submental area — these are expected and typically resolve over one to two weeks.",
      }}
      candidacy={{
        good: [
          "Adults with localized submental fullness (double chin) that is resistant to diet and exercise",
          "Those seeking a non-surgical alternative to liposuction for this specific area",
          "Patients with good skin elasticity in the submental area",
          "Those willing to complete a series of sessions and manage the expected recovery",
        ],
        notFor: [
          "Pregnancy or breastfeeding",
          "Active infection in the treatment area",
          "Prior surgery in the submental area — requires evaluation",
          "Those expecting dramatic weight loss from this treatment — it targets localized fat, not overall weight",
          "Poor skin laxity — loose skin in the area may require a different approach",
        ],
      }}
      whatToExpect={[
        "Consultation: We evaluate the submental area, assess skin laxity, and determine the number of sessions likely needed.",
        "Treatment day: Injection sites are marked. Treatment takes twenty to thirty minutes.",
        "Post-treatment: Significant swelling, firmness, and possible bruising under the chin are expected and normal. This typically peaks at two to three days and resolves over one to two weeks.",
        "Between sessions: Sessions are spaced four to eight weeks apart to allow full resolution before the next treatment.",
        "Results: Gradual reduction in submental fullness develops over the weeks following each session as treated fat cells are metabolized. Final results from the series emerge over two to three months.",
      ]}
      relatedServices={[
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Dermal Fillers", href: "/services/dermal-fillers" },
        { name: "Neuromodulators", href: "/services/neuromodulators" },
      ]}
      relatedPosts={[
        { title: "Medical Weight Loss vs Fad Diets — What Actually Works", href: "/blog/medical-weight-loss-vs-fad-diets" },
      ]}
      faqs={[
        {
          q: "How many sessions will I need?",
          a: "Most patients require two to four sessions. The number depends on the volume of fat in the submental area and your desired degree of reduction. We assess this at your consultation and give you a realistic estimate.",
        },
        {
          q: "Is the post-treatment swelling severe?",
          a: "The swelling after each session can be significant — patients sometimes describe it as looking worse before it looks better. This is the expected inflammatory response and resolves over one to two weeks. We prepare patients for this in detail at consultation so it is not a surprise.",
        },
        {
          q: "Are the results permanent?",
          a: "The treated fat cells are destroyed and do not regenerate. The results can be long-lasting if your weight remains stable. Significant weight gain after treatment can result in other fat cells in the area enlarging.",
        },
        {
          q: "Is this available at both locations?",
          a: "Yes — Columbus at (762) 261-3880 and Warner Robins at (478) 366-1244.",
        },
      ]}
        disclaimer="Deoxycholic acid injections are FDA-recognized for submental fullness only. This is not a weight loss treatment. Individual results vary. Significant post-treatment swelling and bruising are expected. Information on this page is educational and does not constitute medical advice."
      />
      <ServiceImagePlaceholder
        eyebrow="Treatment visuals"
        title="Submental fat reduction context"
        description="This section is being replaced with custom, page-specific clinical visuals aligned to candidacy and treatment expectations."
        plannedImageSet="P04 - Service Hero System (Injectables and Wellness Context)"
      />
    </>
  );
}
