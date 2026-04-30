import Link from "next/link";

export interface ArticleCTAProps {
  headline: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "assessment" | "booking" | "start-here";
}

const BUTTON_STYLE = {
  display: "inline-block",
  background: "var(--color-gold)",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "6px",
  fontSize: "0.6rem",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
};

export default function ArticleCTA({ headline, body, buttonLabel, buttonHref }: ArticleCTAProps) {
  const isExternal = buttonHref.startsWith("http");
  return (
    <div
      style={{
        background: "rgba(201,168,108,0.07)",
        border: "1px solid rgba(201,168,108,0.3)",
        borderRadius: "8px",
        padding: "28px 28px",
        margin: "40px 0",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.35rem",
          fontWeight: 400,
          color: "var(--color-ink)",
          lineHeight: 1.3,
          marginBottom: "10px",
        }}
      >
        {headline}
      </h3>
      <p
        style={{
          fontSize: "0.88rem",
          lineHeight: 1.82,
          color: "var(--color-muted)",
          marginBottom: "20px",
        }}
      >
        {body}
      </p>
      {isExternal ? (
        <a href={buttonHref} target="_blank" rel="noopener noreferrer" style={BUTTON_STYLE}>
          {buttonLabel}
        </a>
      ) : (
        <Link href={buttonHref} style={BUTTON_STYLE}>
          {buttonLabel}
        </Link>
      )}
    </div>
  );
}
