import type { Metadata } from "next";
import InstituteMatrixPage from "@/components/InstituteMatrixPage";

export const metadata: Metadata = {
  title: "Metabolic Health Program | Rebuild Metabolic Health Institute",
  description:
    "The full Rebuild metabolic health program — insulin sensitivity, mitochondrial function, inflammation, body composition. Led by Travis Woodley, MSN, RN, CRNP. Coaching, education, and structured pathways.",
};

export default function MetabolicHealthProgramPage() {
  return (
    <InstituteMatrixPage
      slug="metabolic-health-program"
      title="Metabolic Health Program"
      eyebrow="Institute Track · Core Program"
      hero={{
        h1: "Metabolic Health Program",
        subhead:
          "The full Rebuild framework for adults whose energy, body composition, recovery, and cognitive performance have shifted — and who want a clinical-grade understanding of why and what to do about it.",
      }}
      intro="Most people struggling with metabolic dysfunction are not failing. They are operating in a state their conventional providers cannot or will not address. The Metabolic Health Program is the structured pathway through that picture."
      bodyParagraphs={[
        "I have spent 17+ years in environments where metabolic dysregulation has immediate consequences — emergency rooms, cardiac ICUs, cath labs. Every patient I treated in acute care had a metabolic story that started a decade earlier and that nobody addressed at the time. The Metabolic Health Program is the structured intervention that should have happened then.",
        "It addresses the systems that determine whether your physiology supports the life you want to live: insulin sensitivity, mitochondrial output, inflammatory burden, sleep architecture, hormonal balance, and body composition. None of these stand alone. All of them interact. Most conventional approaches address one in isolation and produce frustrating results.",
        "The program is delivered as the core Rebuild curriculum across all three tiers — Core, Elite, and the Metabolic Year. Tier choice depends on how much one-on-one coaching engagement you want. The underlying framework is identical at each level; the difference is delivery format.",
        "It is open to current Revitalize patients and to anyone who finds the Institute online. Many participants pair the coaching with clinical evaluation at Revitalize for hormone work, GLP-1 therapy, and lab review; others run the coaching alongside their existing primary care relationship.",
      ]}
      whatIncluded={[
        "Insulin sensitivity and metabolic flexibility — the foundation",
        "Mitochondrial function: what it is, how to measure it, how to support it",
        "Inflammatory load: hs-CRP, dietary inflammation, environmental inputs",
        "Body composition framework: muscle mass, fat distribution, hormonal drivers",
        "Sleep architecture and metabolic recovery",
        "Stress physiology and HPA axis recovery",
        "Nutrition principles applied to metabolic optimization (not weight loss alone)",
        "Lab markers for tracking metabolic recovery over time",
      ]}
      whoFor="Adults between 35 and 65 who have noticed metabolic shifts they cannot explain — energy, body composition, recovery, cognitive function — and who want a clinical framework to address them. Particularly appropriate for patients who have tried diet and exercise approaches alone and recognized those tools are not addressing the underlying physiology."
      relatedServices={[
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
        { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
      ]}
    />
  );
}
