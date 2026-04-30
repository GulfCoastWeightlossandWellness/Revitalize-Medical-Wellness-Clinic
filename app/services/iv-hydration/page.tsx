import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "IV Hydration Therapy | Columbus & Warner Robins, GA | NAD+ | Myers Cocktail",
  description:
    "IV hydration therapy in Columbus and Warner Robins, Georgia. Eight targeted infusion formulas including NAD+, Myers Cocktail, high-dose Vitamin C, and glutathione. Clinical evaluation required.",
};

export default function IVHydration() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Wellness — Columbus & Warner Robins, GA",
        headline: "IV Hydration<br /><em>Therapy</em>",
        subheadline: "Eight targeted infusion formulas designed to support hydration, micronutrient status, and recovery. All sessions require a brief clinical evaluation before treatment.",
        heroKeyword: "IV Hydration Therapy Columbus GA",
      }}
      intro={{
        problem: "Oral supplementation has limits. Your gut absorbs what it can, and that absorption is affected by your digestive health, your current nutrient status, and a dozen other variables. IV delivery bypasses that entirely — nutrients enter the bloodstream directly, at concentrations that are not achievable through oral supplementation. For targeted recovery, immune support, energy support, or antioxidant loading, this matters.",
        what: "IV hydration therapy delivers fluids, electrolytes, vitamins, and other nutrients directly into the bloodstream through a small IV catheter. At Revitalize, we offer eight formulas ranging from basic saline rehydration to NAD+ infusions and high-dose Vitamin C. All sessions are performed after a brief clinical assessment to confirm that IV therapy is appropriate for you on that day. We do not skip this step.",
        how: "You arrive, check in, and have a brief good-faith clinical examination. Your provider reviews your health history, any current medications, and confirms that there are no contraindications. The appropriate formula is selected — or confirmed if you have booked a specific option — and a small IV catheter is placed. Most infusions take thirty to sixty minutes depending on the formula. NAD+ infusions take longer. You sit comfortably, and your provider or clinical staff monitors the infusion throughout.",
      }}
      candidacy={{
        good: [
          "Healthy adults seeking targeted hydration, recovery support, or micronutrient support",
          "Those preparing for or recovering from athletic events or periods of high physical demand",
          "Patients with documented micronutrient deficiencies who have discussed IV supplementation with their provider",
          "Those seeking NAD+ therapy for energy support and cellular health",
          "Patients whose providers have recommended IV vitamin therapy as part of a broader wellness plan",
        ],
        notFor: [
          "Pregnant or breastfeeding patients — requires clearance from OB provider",
          "Those with congestive heart failure, kidney disease, or liver disease — requires specialist review",
          "Active infection at the intended catheter site",
          "Patients with severe allergies to components of the selected formula",
          "Anyone seeking IV therapy as a substitute for emergency medical care",
        ],
      }}
      whatToExpect={[
        "Arrival and check-in: Brief intake form and good-faith clinical examination confirming you are appropriate for IV therapy that day. This takes five to ten minutes.",
        "Formula selection: Your provider confirms the appropriate formula based on your goals and health status. If you have a specific formula in mind, we review it together.",
        "IV placement: A small-gauge catheter is placed — typically in the arm. Most patients find it quick and manageable.",
        "Infusion: You relax while the infusion runs. Standard formulas take thirty to sixty minutes. NAD+ infusions take significantly longer — plan accordingly when booking.",
        "Post-infusion: The catheter is removed and a brief bandage is applied. Most patients leave feeling hydrated. Some formulas, particularly those with B vitamins, may produce a temporary feeling of warmth or mild flush — this is normal.",
      ]}
      relatedServices={[
        { name: "Low Level Light Therapy", href: "/services/low-level-light-therapy" },
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
      ]}
      relatedPosts={[
        { title: "IV Hydration — Who Actually Benefits", href: "/blog/iv-hydration-who-benefits" },
        { title: "Signs Your Hormones Are Out of Balance", href: "/blog/signs-hormones-out-of-balance" },
      ]}
      faqs={[
        {
          q: "What formulas do you offer?",
          a: "We offer eight IV formulas: Rehydrate (1L saline), Myers Cocktail (saline with clinician-selected vitamins and minerals), Hydration with Vitamin C and B-Complex and Zinc, High-Dose Vitamin C, Headache/Recovery Hydration, Vitaglow (glutathione and Vitamin C), Vitaglow Ultra (enhanced antioxidant formula), and NAD+. Each is described in detail during your consultation.",
        },
        {
          q: "What is NAD+ and why would someone use it?",
          a: "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme involved in cellular energy metabolism, DNA repair, and mitochondrial function. Levels decline with age. IV NAD+ infusions are used by patients seeking support for energy, cognitive function, and cellular recovery. NAD+ infusions take longer than standard formulas — typically two to four hours — and may produce mild flushing or nausea in some patients. We discuss this thoroughly beforehand.",
        },
        {
          q: "How often should I receive IV therapy?",
          a: "This depends entirely on your goals and health status. For general wellness support, some patients do monthly sessions. Athletes may schedule more frequently around training cycles. There is no one-size-fits-all answer, and we do not recommend IV therapy as a routine supplement without a clinical rationale. We work with you to determine an appropriate schedule.",
        },
        {
          q: "Is IV hydration safe?",
          a: "When administered properly after a clinical assessment, IV hydration has a strong safety profile. Risks include local discomfort or bruising at the catheter site, vein irritation, and rare infection. We use sterile technique, monitor all infusions, and have protocols in place for adverse reactions. The clinical assessment we perform before every session is specifically designed to catch contraindications before they become problems.",
        },
        {
          q: "Do you offer IV therapy at both locations?",
          a: "Yes. IV hydration therapy is available at our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
        },
      ]}
      earlyVisual={
        <FadeIn>
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--color-divider)",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: "760px",
            }}
          >
            <Image
              src="/images/generated/service-iv-hydration-infusion-v1.png"
              alt="IV hydration infusion session in a monitored clinical setting"
              width={1024}
              height={576}
              quality={82}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 68vw, 760px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </FadeIn>
      }
      disclaimer="IV hydration therapy is intended to support hydration status and general well-being. It is not a treatment for medical conditions, not a substitute for emergency care, and not appropriate for all individuals. A good-faith clinical examination is required before every session. Individual responses vary. Information on this page is educational and does not constitute medical advice."
      pageHref="/services/iv-hydration"
      pageName="IV Hydration Therapy"
      assessmentCta={{ label: "Use the Treatment Finder", href: "/tools#treatment-finder" }}
    />
  );
}
