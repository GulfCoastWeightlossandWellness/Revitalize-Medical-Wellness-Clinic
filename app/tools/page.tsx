import type { Metadata } from "next";
import HormoneQuiz from "@/components/tools/HormoneQuiz";
import TreatmentFinder from "@/components/tools/TreatmentFinder";
import WeightLossCheck from "@/components/tools/WeightLossCheck";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Patient Tools | Hormone Quiz & Treatment Finder | Revitalize",
  description: "Free tools for patients — take the hormone health self-assessment or use the treatment comparison finder to understand which services may match your concerns.",
};

export default function ToolsPage() {
  return (
    <>
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "680px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>Patient resources</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 400, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            Clinical Tools
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", maxWidth: "520px" }}>
            These tools do not diagnose or prescribe. They help you organize your symptoms and understand your options before a consultation.
          </p>
        </div>
      </section>

      <section id="hormone-health-assessment" style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <HormoneQuiz />
          </FadeIn>
        </div>
      </section>

      <section id="treatment-finder" style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <TreatmentFinder />
          </FadeIn>
        </div>
      </section>

      <section id="weight-loss-check" style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <WeightLossCheck />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
