"use client";
import { SITE } from "@/lib/constants";

export default function BookingBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        background: "var(--color-teal-dark)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
      }}
      className="booking-bar"
    >
      <div style={{ display: "flex", gap: "10px", flex: 1, justifyContent: "center" }}>
        <a
          href={SITE.booking}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--color-gold)",
            color: "#fff",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "12px 24px",
            borderRadius: "6px",
            flex: 1,
            textAlign: "center",
          }}
        >
          Book a Consultation
        </a>
        <a
          href={SITE.phone.columbusHref}
          style={{
            border: "1px solid rgba(255,255,255,0.18)",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.62rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            padding: "12px 16px",
            borderRadius: "6px",
            whiteSpace: "nowrap",
          }}
        >
          Call
        </a>
      </div>

      <style>{`
        .booking-bar { display: none; }
        @media (max-width: 768px) { .booking-bar { display: flex !important; } }
      `}</style>
    </div>
  );
}
