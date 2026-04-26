import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "DE|RIVE Hair Restoration | Columbus & Warner Robins, GA",
  description: "DE|RIVE hair restoration system in Columbus and Warner Robins, GA. 100% natural, hormone-free hair wellness using plant-based EXO|E Technology. In-office and at-home protocol.",
};

export default function DeriveHairRestoration() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Hair Restoration — Columbus & Warner Robins, GA",
        headline: "DE|RIVE Hair<br /><em>Restoration</em>",
        subheadline: "A 100% natural, hormone-free hair wellness system using plant-based EXO|E Technology. In-office treatment combined with a daily at-home protocol for progressive, lasting improvement.",
        heroKeyword: "Hair Restoration Columbus GA",
      }}
      intro={{
        problem: "Hair thinning is one of the most psychologically impactful changes adults experience, yet most over-the-counter options are either ineffective or reliant on chemicals and hormones that not every patient wants to use. DE|RIVE was developed specifically for patients who want a non-surgical, hormone-free approach that works with the scalp's biology rather than overriding it.",
        what: "DE|RIVE is a three-part system: an in-office scalp serum applied by a licensed clinician, a daily home-use serum applied morning and evening, and optional supportive shampoo and leave-in conditioner. The system uses plant-based factors and EXO|E Technology — a proprietary delivery system designed to target scalp health and follicle support. It is 100% natural and hormone-free, making it appropriate for patients who cannot use or prefer to avoid hormone-based hair treatments.",
        how: "Treatment begins with a scalp evaluation to assess the pattern of thinning, scalp condition, and goals. In-office sessions involve application of the DE|RIVE In-Office Serum to the scalp — a thirty-to-forty-five-minute appointment. You are given the daily home-use serum and instructed on application. Most patients use the system in a series of in-office sessions combined with the daily home routine. Consistency with the at-home protocol is central to results.",
      }}
      candidacy={{
        good: [
          "Adults experiencing diffuse hair thinning or reduced hair density",
          "Those seeking a natural, hormone-free approach to hair wellness",
          "Patients with scalp concerns including reduced follicle activity",
          "Those who want a non-surgical option with a consistent daily protocol",
          "Patients complementing other hair restoration approaches",
        ],
        notFor: [
          "Active scalp infections or inflammatory scalp conditions",
          "Pregnancy or breastfeeding — requires medical clearance",
          "Those with alopecia totalis or universalis — results are unlikely in complete follicle absence",
          "Patients with known allergies to any system components",
        ],
      }}
      whatToExpect={[
        "Scalp evaluation: Assessment of your hair loss pattern, scalp condition, and goals. We give you a realistic treatment timeline.",
        "In-office sessions: The DE|RIVE In-Office Serum is applied to the scalp. Sessions take thirty to forty-five minutes.",
        "Home protocol: Daily application of the DE|RIVE Daily Support Serum, morning and evening. Consistency here determines results.",
        "Early improvements: Many patients notice hair that 'styles with more lift' and feels more voluminous within the first few weeks of the combined protocol.",
        "Progressive results: Continued improvement in scalp health and hair fullness develops over the three-to-six-month range with consistent use.",
        "Maintenance: Ongoing daily home use sustains results. Periodic in-office sessions can maintain and build on improvements.",
      ]}
      relatedServices={[
        { name: "Laser Hair Removal", href: "/services/laser-hair-removal" },
        { name: "Vampire Facial & PRP", href: "/services/vampire-facial-prp" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
      ]}
      relatedPosts={[
        { title: "Signs Your Hormones Are Out of Balance", href: "/blog/signs-hormones-out-of-balance" },
      ]}
      faqs={[
        {
          q: "Is DE|RIVE appropriate for both men and women?",
          a: "Yes. DE|RIVE is formulated for both men and women experiencing hair thinning. The hormone-free, plant-based composition makes it appropriate for patients of any sex who want to avoid hormone-based hair treatments.",
        },
        {
          q: "How long before I see results?",
          a: "Many patients notice early styling improvements — more lift, more volume — within the first few weeks of consistent home use. More meaningful changes in hair density and scalp health typically develop over three to six months. Consistency with the daily home protocol is the most important factor in outcomes.",
        },
        {
          q: "Can DE|RIVE be combined with other hair restoration approaches?",
          a: "Yes. DE|RIVE can be used alongside PRP scalp treatments and other non-surgical hair wellness protocols. We discuss what combination makes the most sense for your specific presentation at consultation.",
        },
        {
          q: "Is DE|RIVE available at both Columbus and Warner Robins?",
          a: "Yes — Columbus at (762) 261-3880 and Warner Robins at (478) 366-1244.",
        },
      ]}
      disclaimer="DE|RIVE hair restoration results vary by individual. This is a cosmetic treatment, not a medical one. Individual responses to the protocol differ. Results are not guaranteed. Information on this page is educational and does not constitute medical advice."
    />
  );
}
