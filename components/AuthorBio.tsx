import Link from "next/link";

/**
 * AuthorBio — renders below every blog post. Travis credentials, book link,
 * /travis personal brand link, /institute coaching link, /hub/articles for
 * more posts.
 */
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
        <Link
          href="/travis"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.15rem",
            fontWeight: 400,
            color: "var(--color-ink)",
            marginBottom: "2px",
            textDecoration: "none",
            display: "block",
          }}
        >
          Travis Woodley
        </Link>
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
          MSN, RN, CRNP &mdash; Platinum Biote Provider &mdash; Founder, Revitalize
        </div>
        <p
          style={{
            fontSize: "0.84rem",
            lineHeight: 1.82,
            color: "var(--color-muted)",
            marginBottom: "12px",
          }}
        >
          Travis spent 17+ years in high-acuity clinical medicine &mdash; emergency, cardiac
          ICU, and cath lab &mdash; before founding Revitalize. He is a Certified Platinum Biote
          hormone therapy provider, the published author of{" "}
          <Link href="/book" style={{ color: "var(--color-teal)", textDecoration: "underline" }}>
            <em>You&apos;re Not Broken &mdash; You&apos;re Unbalanced</em>
          </Link>
          , and the founder of the{" "}
          <Link href="/institute" style={{ color: "var(--color-teal)", textDecoration: "underline" }}>
            Rebuild Metabolic Health Institute
          </Link>
          . His clinical writing reflects the same precision he brought to critical care:
          specific, honest, and built around what actually works.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/travis"
            style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              textDecoration: "none",
            }}
          >
            About Travis &rarr;
          </Link>
          <Link
            href="/hub/articles"
            style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-teal)",
              textDecoration: "none",
            }}
          >
            More articles &rarr;
          </Link>
          <Link
            href="/institute"
            style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-teal)",
              textDecoration: "none",
            }}
          >
            Rebuild Institute &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
