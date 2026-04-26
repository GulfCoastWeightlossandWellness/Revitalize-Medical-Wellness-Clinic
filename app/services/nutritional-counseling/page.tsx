import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Nutritional Counseling | Columbus & Warner Robins, GA",
  description: "Clinician-guided nutritional counseling in Columbus and Warner Robins, GA. Personalized, culturally mindful nutrition architecture integrated with your metabolic and hormonal health plan.",
};

export default function NutritionalCounseling() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Wellness — Columbus & Warner Robins, GA",
        headline: "Nutritional<br /><em>Counseling</em>",
        subheadline: "Personalized nutrition architecture built around your metabolic baseline, hormone status, and lifestyle. Not a diet — a framework that actually fits how you live.",
        heroKeyword: "Nutritional Counseling Columbus GA",
      }}
      intro={{
        problem: "Generic nutrition advice fails most people not because they lack discipline but because it ignores their biology. Your optimal protein intake, carbohydrate timing, and fat balance are directly influenced by your hormone levels, your insulin sensitivity, your cortisol patterns, and your sleep quality. A nutrition plan built without accounting for these factors is guesswork.",
        what: "Our nutritional counseling is clinician-guided and integrated with your broader health picture. We build protein-anchored nutrition frameworks with strategic macronutrient timing based on your labs, your activity level, your stress load, and your realistic lifestyle constraints. We do not prescribe rigid meal plans that you will abandon in two weeks. We build architectures that adapt.",
        how: "Nutritional counseling is typically integrated with our medical weight loss program or hormone therapy protocols, though it can be pursued independently. We begin with your current diet history, metabolic labs, and lifestyle constraints. From there, we develop a templated framework that you can adapt to your food preferences and cultural context. Follow-up sessions are used to refine the approach based on your response.",
      }}
      candidacy={{
        good: [
          "Anyone wanting a personalized, evidence-based nutrition approach connected to their metabolic labs",
          "Those enrolled in the medical weight loss program seeking structured nutrition support",
          "Patients managing insulin resistance, pre-diabetes, or metabolic syndrome",
          "Those undergoing hormone therapy who want to optimize their nutrition for hormonal health",
          "Anyone who has tried generic dietary approaches and wants something that accounts for their biology",
        ],
        notFor: [
          "Those with active eating disorders — requires specialized clinical coordination",
          "Patients seeking a rigid prescribed meal plan rather than a flexible framework",
        ],
      }}
      whatToExpect={[
        "Initial consultation: We review your diet history, metabolic labs, lifestyle, and goals.",
        "Framework development: A personalized nutrition architecture is built around your specific metabolic profile.",
        "Implementation: You are provided with practical templates and guidance for applying the framework to your daily life.",
        "Follow-up: Periodic sessions to assess your response, adjust the framework, and address emerging questions.",
      ]}
      relatedServices={[
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
        { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
      ]}
      relatedPosts={[
        { title: "Medical Weight Loss vs Fad Diets — What Actually Works", href: "/blog/medical-weight-loss-vs-fad-diets" },
        { title: "Why Your Energy Crashed in Your 40s and What to Do About It", href: "/blog/energy-crashed-40s" },
      ]}
      faqs={[
        {
          q: "Is nutritional counseling covered by insurance?",
          a: "Nutritional counseling in a medical spa context is typically not covered by insurance. We offer payment plan options and some patients apply HSA/FSA funds.",
        },
        {
          q: "Can I get nutritional counseling without enrolling in the weight loss program?",
          a: "Yes. Nutritional counseling is available as a standalone service for patients who want personalized guidance without the full medical weight loss program structure.",
        },
        {
          q: "Is nutritional counseling available at both locations?",
          a: "Yes — Columbus at (762) 261-3880 and Warner Robins at (478) 366-1244.",
        },
      ]}
      disclaimer="Nutritional counseling at Revitalize is provided by licensed clinical staff. It is not intended to replace care by a registered dietitian for patients with complex dietary medical conditions. Information on this page is educational and does not constitute medical advice."
    />
  );
}
