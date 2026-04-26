import FadeIn from "@/components/FadeIn";

interface ServiceImagePlaceholderProps {
  eyebrow: string;
  title: string;
  description: string;
  plannedImageSet: string;
}

export default function ServiceImagePlaceholder({
  eyebrow,
  title,
  description,
  plannedImageSet,
}: ServiceImagePlaceholderProps) {
  return (
    <section style={{ background: "var(--color-bg)", padding: "0 clamp(24px, 6vw, 80px) 84px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            {eyebrow}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
              fontWeight: 400,
              color: "var(--color-ink)",
              marginBottom: "10px",
            }}
          >
            {title}
          </h2>
          <p style={{ fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-muted)", marginBottom: "18px", maxWidth: "760px" }}>
            {description}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            style={{
              background: "linear-gradient(135deg, #0E3D4D 0%, #174E60 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              padding: "24px",
              color: "rgba(255,255,255,0.88)",
              boxShadow: "0 16px 40px rgba(9,25,34,0.22)",
            }}
          >
            <div style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "10px" }}>
              Premium image update in progress
            </div>
            <p style={{ margin: "0 0 10px", fontSize: "0.86rem", lineHeight: 1.75 }}>
              This section is being upgraded with custom medical-grade visuals built specifically for this treatment page.
            </p>
            <p style={{ margin: 0, fontSize: "0.74rem", lineHeight: 1.7, color: "rgba(255,255,255,0.66)" }}>
              Planned asset set: {plannedImageSet}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
