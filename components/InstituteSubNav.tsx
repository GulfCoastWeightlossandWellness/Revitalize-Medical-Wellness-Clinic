/**
 * Sticky sub-nav rendered only on /institute. Top-level site nav stays
 * unchanged. Anchor links scroll to the in-page sections (overview, tiers,
 * tracks, faq, apply).
 */

export default function InstituteSubNav() {
  const items = [
    { href: "#overview", label: "Overview" },
    { href: "#tiers", label: "Tiers" },
    { href: "#tracks", label: "Coaching Tracks" },
    { href: "#faq", label: "FAQ" },
    { href: "#apply", label: "Apply" },
  ];

  return (
    <nav
      aria-label="Institute sub-navigation"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-divider)",
        backdropFilter: "saturate(140%) blur(8px)",
        WebkitBackdropFilter: "saturate(140%) blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "12px clamp(24px, 6vw, 80px)",
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          alignItems: "center",
          scrollbarWidth: "none",
        }}
        className="institute-subnav-row"
      >
        <span
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          Rebuild Institute
        </span>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              textDecoration: "none",
              flexShrink: 0,
              padding: "4px 0",
              letterSpacing: "0.02em",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
      <style>{`.institute-subnav-row::-webkit-scrollbar { display: none; }`}</style>
    </nav>
  );
}
