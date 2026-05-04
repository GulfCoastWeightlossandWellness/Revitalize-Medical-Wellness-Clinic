import type { Metadata } from "next";
import InstituteMatrixPage from "@/components/InstituteMatrixPage";

export const metadata: Metadata = {
  title: "Hormone Optimization Coaching | Rebuild Metabolic Health Institute",
  description:
    "Structured coaching for adults optimizing hormones in mid-life — perimenopause, andropause, thyroid, adrenals. Led by Travis Woodley, MSN, RN, CRNP. Open to current Revitalize patients and to anyone who finds the Institute online.",
};

export default function HormoneOptimizationCoachingPage() {
  return (
    <InstituteMatrixPage
      slug="hormone-optimization-coaching"
      title="Hormone Optimization Coaching"
      eyebrow="Institute Track · Hormones"
      hero={{
        h1: "Hormone Optimization Coaching",
        subhead:
          "The structured coaching path for adults navigating mid-life hormone shifts — built on the same clinical framework I use at Revitalize, applied to the questions and decisions that come up between appointments.",
      }}
      intro="Hormone optimization is a long-term decision. The first appointment matters — but so does what you do with the information in the months that follow. This track is the coaching layer for patients who want sustained education and clinical reasoning support."
      bodyParagraphs={[
        "Most patients I see in the clinic understand the diagnosis and the protocol within the first two visits. What they want next is a deeper understanding of what the labs mean, how the protocol will evolve, what to expect at the next reassessment, and how to handle the inevitable questions that come up — about sleep, weight, energy, mood, sex drive — in the weeks between visits.",
        "The Hormone Optimization Coaching track inside the Rebuild Metabolic Health Institute is built for that gap. It is not a replacement for clinical care. It is the structured education and coaching layer alongside it. We cover the hormone systems, the lab interpretation framework, the protocol logic, and the lifestyle factors that determine whether the protocol actually works.",
        "The track is appropriate for current Revitalize patients who want more depth than appointments alone provide, and for anyone who has found me through the book, the podcast, or the writing and wants to learn this framework before deciding whether to start clinical care.",
        "I personally lead the curriculum and review every application. The coaching cadence and tier specifics are discussed at the application stage — Core, Elite, and the Metabolic Year are all available. Every track works because the underlying physiology is the same; the difference is how much one-on-one engagement you want with me.",
      ]}
      whatIncluded={[
        "Hormone systems framework: HPG axis, HPA axis, thyroid, sex hormones, and how they interact",
        "Lab interpretation training — total T, free T, SHBG, estradiol, progesterone, DHEA, thyroid panel, cortisol patterns",
        "Protocol logic for pellets, injections, oral, transdermal — when each fits and why",
        "What to expect month-by-month after starting hormone therapy",
        "Adjacent factors that determine response: sleep, stress, body composition, gut health",
        "Periodic group Q&A sessions plus (in higher tiers) one-on-one coaching with Travis",
      ]}
      whoFor="Current Revitalize hormone therapy patients who want more depth than appointments alone provide. Patients evaluating hormone therapy for the first time who want to understand the framework before starting. Adults who have read the book or found Travis through the podcast and want structured guidance applying these concepts to their own situation."
      relatedServices={[
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
        { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
        { name: "Testosterone Injection Therapy", href: "/services/testosterone-injection-therapy" },
        { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
      ]}
    />
  );
}
