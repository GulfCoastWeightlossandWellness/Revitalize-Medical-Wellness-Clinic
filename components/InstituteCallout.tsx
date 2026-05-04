import Image from "next/image";
import Link from "next/link";

/**
 * Reusable Institute callout — used on the homepage, on hormone/weight-loss
 * service pages (via ServicePage template), and on the AuthorBio (via
 * inline link). Same design language across surfaces so patients recognize
 * it as a consistent next-step option.
 */
export interface InstituteCalloutProps {
  /** Optional override of default heading. */
  heading?: string;
  /** Optional override of body. */
  body?: string;
  /** Variant — 'box' for service pages (compact), 'wide' for homepage. */
  variant?: "box" | "wide";
}

export default function InstituteCallout({
  heading = "Go deeper with the Rebuild Institute",
  body = "If clinic visits are not the full picture for you, the Rebuild Metabolic Health Institute is the structured coaching layer Travis built for patients who want more depth than a single appointment can give.",
  variant = "box",
}: InstituteCalloutProps) {
  if (variant === "wide") {
    return (
      <section
        style={{
          background: "var(--color-teal-dark)",
          padding: "72px clamp(24px, 6vw, 80px)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="institute-cb-grid"
        >
          <div>
            {/* Rebuild Institute brand mark — wide-variant. White pill since
                file has a white background and the section is dark teal. */}
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.96)",
                borderRadius: "10px",
                padding: "10px 14px",
                marginBottom: "16px",
              }}
            >
              <Image
                src="/images/brand/rebuild-institute-logo.png"
                alt="Rebuild Metabolic Health Institute logo"
                width={1024}
                height={1024}
                style={{ width: "auto", height: "56px", objectFit: "contain", display: "block" }}
              />
            </div>
            <div
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Beyond the Clinic
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)",
                fontWeight: 400,
                color: "#fff",
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
                marginBottom: "20px",
              }}
            >
              The Rebuild Metabolic Health Institute.
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.6)",
                marginBottom: "12px",
              }}
            >
              Coaching, education, and structured programs for adults who want
              more than a clinical appointment. Built on the same metabolic
              framework Travis uses at Revitalize — refined into a complete
              educational pathway you can work through anywhere.
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Open to current Revitalize patients and to anyone who finds it
              online.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link
              href="/institute"
              style={{
                background: "var(--color-gold)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "6px",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Explore the Institute &rarr;
            </Link>
            <Link
              href="/institute/hormone-optimization-coaching"
              style={{
                border: "1.5px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.85)",
                padding: "12px 24px",
                borderRadius: "6px",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Hormone Coaching
            </Link>
            <Link
              href="/institute/weight-loss-coaching"
              style={{
                border: "1.5px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.85)",
                padding: "12px 24px",
                borderRadius: "6px",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Weight Loss Coaching
            </Link>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .institute-cb-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    );
  }

  // Compact box variant for service pages
  return (
    <div
      style={{
        background: "var(--color-teal)",
        borderRadius: "8px",
        padding: "28px 28px",
        marginBottom: "48px",
      }}
    >
      {/* Rebuild Institute brand mark — compact box variant. Smaller white
          pill so the eyebrow + heading still lead the composition. */}
      <div
        style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.96)",
          borderRadius: "8px",
          padding: "8px 10px",
          marginBottom: "12px",
        }}
      >
        <Image
          src="/images/brand/rebuild-institute-logo.png"
          alt="Rebuild Metabolic Health Institute logo"
          width={1024}
          height={1024}
          style={{ width: "auto", height: "40px", objectFit: "contain", display: "block" }}
        />
      </div>
      <div
        style={{
          fontSize: "0.55rem",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "var(--color-gold)",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        Beyond the Clinic
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.3rem",
          fontWeight: 400,
          color: "#fff",
          lineHeight: 1.3,
          marginBottom: "10px",
        }}
      >
        {heading}
      </h3>
      <p
        style={{
          fontSize: "0.86rem",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.72)",
          marginBottom: "16px",
        }}
      >
        {body}
      </p>
      <Link
        href="/institute"
        style={{
          display: "inline-block",
          background: "var(--color-gold)",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "6px",
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        Learn About the Institute &rarr;
      </Link>
    </div>
  );
}
