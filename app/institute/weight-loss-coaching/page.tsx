import type { Metadata } from "next";
import InstituteMatrixPage from "@/components/InstituteMatrixPage";

export const metadata: Metadata = {
  title: "Weight Loss Coaching | Rebuild Metabolic Health Institute",
  description:
    "Structured coaching for adults on GLP-1 medications, navigating weight loss plateaus, or rebuilding metabolic flexibility. Led by Travis Woodley, MSN, RN, CRNP. Open to current Revitalize patients and to anyone online.",
};

export default function WeightLossCoachingPage() {
  return (
    <InstituteMatrixPage
      slug="weight-loss-coaching"
      title="Weight Loss Coaching"
      eyebrow="Institute Track · Weight Loss"
      hero={{
        h1: "Weight Loss Coaching",
        subhead:
          "The Institute coaching track for adults who want sustained results — whether they are on GLP-1 therapy, transitioning off, or working without medication. Built around what actually drives durable weight loss in mid-life: hormones, sleep, muscle, and protein.",
      }}
      intro="Most weight loss programs underperform because they ignore the metabolic physiology that determines whether the loss holds. This track is built around what actually matters — and what most patients never get told."
      bodyParagraphs={[
        "Weight loss in mid-life is a different physiological problem than weight loss at 25. The set point shifts. The hormones change. The muscle protein synthesis machinery becomes less responsive. The thyroid runs slower under caloric restriction. Insulin sensitivity is more fragile. None of this is in the conventional weight loss conversation.",
        "GLP-1 medications have changed what is achievable — the right candidate can sustain a 15-20% body weight reduction. But GLP-1 is one tool in a metabolic plan, not a replacement for one. Patients who treat it as a standalone solution tend to lose muscle alongside fat, regain weight when they stop, and miss the underlying issues that produced the weight in the first place.",
        "The Weight Loss Coaching track addresses the full picture. It works for patients on GLP-1 who want to maximize results and minimize side effects. It works for patients transitioning off GLP-1 who want to hold the loss. And it works for patients who are not on GLP-1 and want to address the metabolic factors that have made weight loss difficult.",
        "Many participants pair the coaching with clinical evaluation at Revitalize for hormone work, GLP-1 prescribing, or DEXA composition tracking. Others run the coaching independently and use it to inform decisions made with their existing providers.",
      ]}
      whatIncluded={[
        "GLP-1 therapy framework: when it works, when it doesn't, how to maximize response",
        "Protein targets and timing for muscle preservation during weight loss",
        "Resistance training programming during a caloric deficit",
        "Hormone status and how it determines weight loss response — when to optimize hormones first",
        "Thyroid function in the context of caloric restriction",
        "Off-ramping GLP-1: the maintenance phase that holds the loss",
        "Body composition tracking: DEXA logic, what numbers actually matter",
        "The honest conversation about what is realistic for your specific physiology",
      ]}
      whoFor="Adults navigating mid-life weight loss who want sustained results, not a 12-week diet. Patients on GLP-1 medications who want to maximize response and preserve muscle. Patients transitioning off GLP-1 who need a maintenance framework. Patients whose weight loss has plateaued despite consistent effort and who want to understand why."
      relatedServices={[
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
        { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
      ]}
    />
  );
}
