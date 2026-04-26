import { SITE } from "@/lib/constants";

interface ShopCalloutProps {
  variant?: "sidebar" | "inline";
}

export default function ShopCallout({ variant = "sidebar" }: ShopCalloutProps) {
  if (variant === "sidebar") {
    return (
      <div style={{ background: "var(--color-stone)", border: "1px solid var(--color-divider)", borderRadius: "6px", padding: "24px 20px" }}>
        <div style={{ fontSize: "0.52rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "10px" }}>
          Revitalize Nutrition Shop
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.35, marginBottom: "10px" }}>
          Supplements Travis recommends
        </h3>
        <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "var(--color-muted)", marginBottom: "16px" }}>
          Professional-grade formulations curated by the Revitalize clinical team — the same products discussed in consultations, available directly.
        </p>
        <a
          href={SITE.ecosystem.nutritionShop}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", background: "#fff", border: "1.5px solid var(--color-divider)", color: "var(--color-ink)", padding: "10px 16px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}
        >
          Visit the Shop ↗
        </a>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--color-stone)", borderRadius: "6px", padding: "28px 32px", borderLeft: "3px solid var(--color-gold)", display: "flex", gap: "28px", alignItems: "center", flexWrap: "wrap" }}>
      <div style={{ flex: 1, minWidth: "240px" }}>
        <div style={{ fontSize: "0.52rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "8px" }}>
          Revitalize Nutrition Shop
        </div>
        <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-muted)", margin: 0 }}>
          Professional-grade supplements curated by the Revitalize clinical team — the same formulations recommended in the clinic, available directly.
        </p>
      </div>
      <a
        href={SITE.ecosystem.nutritionShop}
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: "var(--color-teal)", color: "#fff", padding: "11px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}
      >
        Visit the Shop ↗
      </a>
    </div>
  );
}
