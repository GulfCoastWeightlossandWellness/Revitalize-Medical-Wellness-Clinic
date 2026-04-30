import Link from "next/link";

export default function AuthorBio() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        background: "var(--color-stone)",
        borderLeft: "3px solid var(--color-gold)",
        borderRadius: "6px",
        padding: "28px 24px",
        marginTop: "48px",
      }}
    >
      {/* Avatar placeholder */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "var(--color-teal)",
          border: "2px solid var(--color-gold)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          TW
        </span>
      </div>

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.15rem",
            fontWeight: 400,
            color: "var(--color-ink)",
            marginBottom: "2px",
          }}
        >
          Travis Woodley
        </div>
        <div
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          MSN, RN, CRNP &mdash; Founder, Revitalize Aesthetics &amp; Wellness
        </div>
        <p
          style={{
            fontSize: "0.84rem",
            lineHeight: 1.82,
            color: "var(--color-muted)",
            marginBottom: "14px",
          }}
        >
          Travis Woodley spent 17+ years in high-acuity clinical medicine &mdash; emergency,
          cardiac ICU, and cath lab environments &mdash; before founding Revitalize. He is a
          Certified Platinum Biote hormone therapy provider, published author of{" "}
          <em>You&apos;re Not Broken &mdash; You&apos;re Unbalanced</em>, and the founder of the Rebuild
          Metabolic Health Institute. His clinical writing reflects the same precision he brought
          to critical care: specific, honest, and built around what actually works.
        </p>
        <Link
          href="/hub/articles"
          style={{
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            textDecoration: "none",
          }}
        >
          More articles by Travis &rarr;
        </Link>
      </div>
    </div>
  );
}
