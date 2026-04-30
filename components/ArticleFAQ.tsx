export interface ArticleFAQProps {
  questions: Array<{ q: string; a: string }>;
}

export default function ArticleFAQ({ questions }: ArticleFAQProps) {
  if (!questions || questions.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section style={{ marginTop: "56px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div
        style={{
          fontSize: "0.58rem",
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: "var(--color-gold)",
          fontWeight: 600,
          marginBottom: "20px",
        }}
      >
        Frequently Asked Questions
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {questions.map((item, i) => (
          <details
            key={i}
            style={{ background: "#fff", borderRadius: "4px", overflow: "hidden" }}
          >
            <summary
              style={{
                padding: "18px 22px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--color-ink)",
                lineHeight: 1.45,
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {item.q}
              <span
                style={{
                  color: "var(--color-teal)",
                  flexShrink: 0,
                  fontSize: "1.2rem",
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </summary>
            <div
              style={{
                padding: "0 22px 18px",
                fontSize: "0.88rem",
                lineHeight: 1.82,
                color: "var(--color-muted)",
              }}
            >
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
