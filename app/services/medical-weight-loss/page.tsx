import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Medical Weight Loss Columbus & Warner Robins, GA | GLP-1 | Semaglutide",
  description:
    "Structured medical weight loss in Columbus and Warner Robins, Georgia. Metabolic assessment, GLP-1 options including semaglutide, and a 90-day program targeting the root causes of weight gain. Travis Woodley, CRNP.",
};

export default function MedicalWeightLoss() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Medical Weight Loss — Columbus & Warner Robins, GA",
        headline: "Medical Weight Loss<br /><em>That Addresses Root Causes</em>",
        subheadline: "Weight regulation is biochemical before it is behavioral. Our 90-day structured program assesses insulin sensitivity, cortisol patterns, thyroid function, and sex hormones — and builds a plan around what is actually driving your weight.",
        heroKeyword: "Medical Weight Loss Columbus GA",
      }}
      intro={{
        problem: "If you have tried every diet and the weight keeps coming back — or if you are doing everything right and the scale won't move — the problem is probably not willpower. Midlife weight gain is often driven by measurable hormonal and metabolic shifts: declining testosterone or estrogen, rising cortisol, insulin resistance, thyroid dysfunction, or disrupted sleep architecture. Treating any one of these in isolation rarely works. You need a program that looks at all of them.",
        what: "Our medical weight loss program is a structured, clinician-supervised intervention that combines metabolic assessment, personalized nutrition architecture, resistance training protocols, sleep and stress management, and prescription options where clinically appropriate. GLP-1 receptor agonists — including semaglutide and tirzepatide — are considered for patients who meet candidacy criteria after an in-person assessment. We do not prescribe these medications online or without a clinical evaluation.",
        how: "The program begins with a comprehensive metabolic workup: insulin sensitivity markers, fasting glucose and insulin, thyroid panel, sex hormones, cortisol patterns, and inflammatory markers. From there, we build a 90-day structured protocol. Week one establishes baseline nutrition architecture — protein-anchored with strategic carbohydrate timing. Resistance training and daily movement targets are layered in. Weeks five through eight introduce macro adjustments based on your metabolic response. The final month focuses on habit consolidation and, if applicable, the transition plan for any prescription support. Follow-up is built into the program — we are not handing you a plan and sending you home.",
      }}
      candidacy={{
        good: [
          "Adults with unexplained or persistent weight gain despite reasonable lifestyle efforts",
          "Those with documented insulin resistance, prediabetes, or metabolic syndrome",
          "Patients with mid-life weight shift associated with hormonal changes",
          "Anyone seeking a structured, supervised approach rather than a commercial diet program",
          "Patients who have tried GLP-1 medications without a supporting metabolic framework and want to do it properly",
        ],
        notFor: [
          "Those with active eating disorders — medical coordination required before proceeding",
          "Patients with certain cardiovascular or renal conditions — individualized assessment required",
          "Pregnancy or breastfeeding",
          "Those seeking prescription weight loss medications without a clinical consultation and metabolic assessment",
          "Patients unwilling to engage with lifestyle modifications alongside any prescription support",
        ],
      }}
      whatToExpect={[
        "Week 1 — Baseline assessment: Comprehensive metabolic labs, full clinical consultation, initial nutrition architecture, and a protein and fiber target. We review what your labs are actually telling us about your metabolism.",
        "Weeks 2–4 — Foundation phase: Resistance training plan is installed. We establish your movement baseline, set daily step targets, and begin refining your nutrition framework based on your initial response.",
        "Weeks 5–8 — Adjustment phase: Macronutrient targets are refined based on body composition changes, energy levels, and lab response. Prescription support — if applicable — is re-evaluated for dose and response.",
        "Weeks 9–12 — Consolidation phase: Focus shifts to long-term habit architecture, stress management, and sleep optimization. Medication exit criteria are established if applicable. We plan your maintenance protocol.",
        "Follow-up and continuation: Weight management does not end at week twelve. We schedule follow-up labs and reassessment to ensure the progress holds and to catch any metabolic drift early.",
      ]}
      relatedServices={[
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
        { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
        { name: "Fat Dissolving Injections", href: "/services/fat-dissolving-injections" },
      ]}
      relatedPosts={[
        { title: "Semaglutide vs. Tirzepatide — What the Difference Actually Means", href: "/compare/semaglutide-vs-tirzepatide" },
        { title: "Medical Weight Loss vs Fad Diets — What Actually Works", href: "/blog/medical-weight-loss-vs-fad-diets" },
        { title: "How Semaglutide Works for Weight Loss", href: "/blog/how-semaglutide-works" },
        { title: "Signs Your Hormones Are Out of Balance", href: "/blog/signs-hormones-out-of-balance" },
        { title: "Why Your Energy Crashed in Your 40s and What to Do About It", href: "/blog/energy-crashed-40s" },
      ]}
      faqs={[
        {
          q: "Do I have to take medication to participate in the weight loss program?",
          a: "No. Prescription support — including GLP-1 receptor agonists — is one tool in the program, not the program itself. Many patients achieve significant, sustainable results through the metabolic and lifestyle framework alone. Medications are considered when the clinical assessment suggests they would be appropriate and when the patient meets candidacy criteria. We never recommend medication as a substitute for addressing underlying metabolic drivers.",
        },
        {
          q: "What is a GLP-1 receptor agonist and how does it work?",
          a: "GLP-1 receptor agonists are a class of medications that mimic a naturally occurring gut hormone involved in blood sugar regulation and appetite signaling. They reduce hunger, slow gastric emptying, and — in clinical trials — produce meaningful weight reduction when combined with lifestyle changes. Semaglutide and tirzepatide are the most clinically studied options in this class. They require a prescription, a clinical evaluation, and ongoing monitoring to use safely and effectively.",
        },
        {
          q: "How much weight can I expect to lose?",
          a: "We do not make weight loss promises because the honest answer is: it depends. It depends on your metabolic baseline, your hormone status, your adherence to the protocol, your stress and sleep, and whether prescription support is part of your plan. What we can tell you is that our program targets steady, defensible progress — the kind that comes from addressing root causes rather than aggressive restriction that rebounds. Most patients in the program achieve clinically meaningful results within twelve weeks.",
        },
        {
          q: "How is this different from other weight loss programs?",
          a: "Most commercial programs address calories and macros. Our program starts by asking why your metabolism is working the way it is. We run labs that most programs never consider. We look at your hormones, your stress response, your insulin dynamics, and your sleep architecture. Then we build a program around what your body actually needs — not a generic template.",
        },
        {
          q: "Can I combine medical weight loss with hormone therapy?",
          a: "Yes, and for many patients, the combination is significantly more effective than either approach alone. Hormonal imbalance directly impairs fat metabolism and body composition, so optimizing hormones while running a structured weight program often produces results that neither produces independently. We coordinate these programs carefully.",
        },
        {
          q: "Do you offer medical weight loss at both locations?",
          a: "Yes. Our medical weight loss program is available at both our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
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
              src="/images/generated/service-medical-weight-loss-consult-v1.png"
              alt="Medical weight loss consultation reviewing metabolic trends on a tablet"
              width={1024}
              height={576}
              quality={82}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 68vw, 760px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </FadeIn>
      }
      disclaimer="Medical information on this page is educational and does not constitute medical advice. GLP-1 receptor agonists require a prescription and in-person clinical evaluation. We do not prescribe weight loss medications online. Individual results vary significantly. Weight loss outcomes depend on multiple factors including adherence, metabolic baseline, and lifestyle factors."
      pageHref="/services/medical-weight-loss"
      pageName="Medical Weight Loss"
      assessmentCta={{ label: "Use the Treatment Finder", href: "/tools" }}
      />
  );
}
