import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "PhantomClear Fractional CO2 Laser | Columbus & Warner Robins, GA",
  description:
    "PhantomClear fractional CO2 laser resurfacing in Columbus and Warner Robins, Georgia. Clinically meaningful skin texture and tone improvement for appropriate candidates.",
};

export default function FractionalCO2Laser() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Skin Resurfacing — Columbus & Warner Robins, GA",
        headline: "PhantomClear<br /><em>Fractional CO2 Laser</em>",
        subheadline: "Ablative fractional CO2 resurfacing at 10,600 nm. One of the most clinically effective options available for skin texture, tone, and fine line improvement in appropriate candidates.",
        heroKeyword: "CO2 Laser Resurfacing Columbus GA",
      }}
      intro={{
        problem: "For patients who want meaningful, lasting improvement in skin quality — not maintenance, not incremental progress — fractional CO2 laser is often the most effective non-surgical option available. It is not appropriate for everyone, and it requires real recovery time. But for candidates who qualify and are willing to invest in that recovery, the results are clinically significant in a way that peels, microneedling, and non-ablative devices cannot fully replicate.",
        what: "The PhantomClear system delivers a carbon-dioxide laser at 10,600 nm in a fractionated pattern — tiny, evenly spaced columns of ablative energy that penetrate the dermis and trigger a robust collagen remodeling response. Because the treatment is fractionated, surrounding untreated tissue accelerates healing. The result is significant improvement in skin texture, tone, pore appearance, fine lines, and surface irregularities over the weeks following treatment.",
        how: "Candidacy is assessed carefully before any treatment is scheduled. A full skin evaluation, health history review, and discussion of realistic outcomes is required. Treatment day begins with topical and/or injected anesthesia. The procedure itself takes twenty to sixty minutes depending on the areas treated. You will need to plan for several days of visible healing — redness, warmth, and peeling are expected and part of the process. Sun protection during recovery is mandatory, not optional. Most patients see the initial results emerge two to three weeks after treatment as the healing process completes.",
      }}
      candidacy={{
        good: [
          "Adults with significant skin texture irregularity, pore enlargement, or surface damage",
          "Those with photodamage, brown spots, and uneven tone that has not responded to lighter treatments",
          "Patients with fine-to-moderate lines willing to invest in a recovery period",
          "Those who have completed lighter treatments and want a more intensive result",
          "Appropriate Fitzpatrick skin types — discussed at consultation",
        ],
        notFor: [
          "Current or recent isotretinoin use — requires a waiting period of typically twelve months",
          "Pregnancy or breastfeeding",
          "Active skin infections, open lesions, or inflammatory skin conditions",
          "History of abnormal scarring or keloids",
          "Fitzpatrick skin types with higher melanin density — risk of post-inflammatory hyperpigmentation without appropriate protocol",
        ],
      }}
      whatToExpect={[
        "Consultation and candidacy assessment: This is a detailed conversation about your skin, your history, your goals, and the realistic outcome. We do not schedule CO2 laser without this step.",
        "Treatment day preparation: Arrive with clean skin. Topical numbing is applied. Depending on the treatment intensity, additional comfort measures may be used.",
        "Treatment: The PhantomClear device delivers fractionated laser energy to the treatment area. You will feel warmth and pressure. The treatment takes twenty to sixty minutes.",
        "Immediately after: The skin will be red, warm, and may appear slightly swollen. This is expected. You will leave with detailed aftercare instructions.",
        "Days one through five: Visible healing. The skin will feel rough, peel, and may be quite pink. This is the process — it indicates that the collagen remodeling response has been triggered.",
        "Week two and beyond: As the outer layers of skin heal, the new skin emerges smoother, more refined, and more radiant. Collagen remodeling continues for three to six months after a single treatment.",
        "Long-term: Results from a single CO2 treatment can be lasting with appropriate sun protection and maintenance. Some patients choose a single intensive treatment; others prefer a series of lighter treatments.",
      ]}
      relatedServices={[
        { name: "Microneedling", href: "/services/microneedling" },
        { name: "VI Peel", href: "/services/vi-peel" },
        { name: "Vampire Facial & PRP", href: "/services/vampire-facial-prp" },
        { name: "AquaFirme Facials", href: "/services/aquafirme-facials" },
      ]}
      relatedPosts={[
        { title: "Microneedling vs CO2 Laser — Which Is Right for You", href: "/blog/microneedling-vs-co2-laser" },
        { title: "How to Choose a Medical Spa in Columbus GA", href: "/blog/how-to-choose-medical-spa-columbus-ga" },
      ]}
      faqs={[
        {
          q: "How long is the recovery?",
          a: "Plan for five to seven days of visible healing — redness, peeling, and a rough texture that resolves as the outer skin sheds. Most patients feel comfortable returning to normal social activities after seven to ten days. Redness may persist for two to four weeks. Strict sun avoidance and broad-spectrum SPF during the healing period are non-negotiable.",
        },
        {
          q: "How many treatments do I need?",
          a: "For most patients, one treatment at an appropriate intensity produces significant results. Some patients choose a series of two or three lighter treatments spaced at appropriate intervals to minimize recovery time while still achieving meaningful improvement. We discuss the single-treatment versus series approach at your consultation based on your goals and tolerance for downtime.",
        },
        {
          q: "Is CO2 laser appropriate for all skin tones?",
          a: "This is one of the most important candidacy questions for CO2 laser. Darker Fitzpatrick skin types carry a higher risk of post-inflammatory hyperpigmentation with ablative laser treatments. At your consultation, we assess your skin type carefully and discuss whether CO2 laser is appropriate for you, or whether an alternative — such as a series of microneedling treatments or lighter peels — would produce better results with lower risk.",
        },
        {
          q: "Can CO2 laser be combined with other treatments?",
          a: "After CO2 laser, the skin needs time to heal before any other treatments are performed. We do not stack treatments on the same day as CO2 resurfacing. Once fully healed, patients often combine CO2 laser results maintenance with microneedling, chemical peels, or AquaFirme facials.",
        },
        {
          q: "Do you offer CO2 laser at both locations?",
          a: "Yes. PhantomClear fractional CO2 laser is available at both our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
        },
      ]}
      disclaimer="Fractional CO2 laser resurfacing is an ablative procedure with a recovery period. Individual results vary. This treatment is not appropriate for all patients — candidacy is determined at consultation. Strict sun protection during and after healing is required. Information on this page is educational and does not constitute medical advice."
    />
  );
}
