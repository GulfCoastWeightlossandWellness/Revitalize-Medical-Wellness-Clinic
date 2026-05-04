import type { Metadata } from "next";
import InstituteMatrixPage from "@/components/InstituteMatrixPage";

export const metadata: Metadata = {
  title: "Men's Health Coaching | Rebuild Metabolic Health Institute",
  description:
    "Coaching for men optimizing testosterone, body composition, and recovery in mid-life. TRT integration, training programming, sleep and stress optimization. Led by Travis Woodley, MSN, RN, CRNP.",
};

export default function MensHealthCoachingPage() {
  return (
    <InstituteMatrixPage
      slug="mens-health-coaching"
      title="Men's Health Coaching"
      eyebrow="Institute Track · Men's Health"
      hero={{
        h1: "Men's Health Coaching",
        subhead:
          "The coaching track for men who are serious about hormone optimization, body composition, recovery, and long-term performance. Built for patients on TRT, considering TRT, or working without it — with the full clinical framework behind every recommendation.",
      }}
      intro="Most men's health content online oscillates between conventional dismissiveness and supplement marketing. This track is neither. It is the clinical framework I use with my own patients, structured for self-directed application."
      bodyParagraphs={[
        "Men in their 40s and 50s rarely get a complete clinical conversation about hormone status, body composition, and metabolic health from their primary care providers. The conversation is either 'your numbers are normal, do more cardio' or 'let me write you a script and we'll see how you feel.' Both miss the framework that produces sustained results.",
        "The Men's Health Coaching track is built around the clinical reasoning I apply with men in the office: comprehensive labs interpreted against the patient's physiology rather than population averages, attention to free T and SHBG (not just total T), the metabolic factors that determine response to hormone optimization, training and recovery patterns that match the protocol, and the long-term framework that sustains results across decades.",
        "It works for current TRT patients who want deeper engagement with the data and the protocol. It works for men evaluating TRT who want to understand the framework before starting. And it works for men whose labs do not yet warrant TRT but who want to optimize the underlying systems that determine when they will.",
        "The track integrates with both pellet-based and injection-based testosterone protocols at Revitalize, plus the medical weight loss and metabolic programs. Many participants are also patients; many are not.",
      ]}
      whatIncluded={[
        "Comprehensive male hormone panel interpretation: total T, free T, SHBG, estradiol, DHEA, PSA, hematocrit",
        "Pellet vs injection delivery: when each fits, how to think about the choice",
        "Training programming aligned with hormonal response: resistance, conditioning, recovery",
        "Sleep architecture and its outsized effect on testosterone production",
        "Body composition: muscle mass, visceral adiposity, the markers that matter",
        "Cardiovascular health alongside TRT: hematocrit monitoring, lipid considerations",
        "Sexual function and erectile health as cardiometabolic markers",
        "The long-term decision framework — not just starting TRT, but how it evolves over years",
      ]}
      whoFor="Men in their 30s, 40s, 50s, and 60s who want a clinical framework for hormone optimization and metabolic health. Active and athletic men who want to maintain performance through mid-life. Patients on TRT (pellet or injection) who want deeper engagement with their labs and protocol. Men whose primary care has not addressed their picture comprehensively."
      relatedServices={[
        { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
        { name: "Testosterone Injection Therapy", href: "/services/testosterone-injection-therapy" },
        { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
        { name: "Erectile Dysfunction Treatment", href: "/services/erectile-dysfunction" },
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
      ]}
    />
  );
}
