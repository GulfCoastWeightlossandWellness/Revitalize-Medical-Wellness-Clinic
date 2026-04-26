"use client";
import { useState } from "react";
import { SITE } from "@/lib/constants";

export default function BookingBar() {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <div className="booking-bar" style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 900,
      background: "var(--color-teal-dark)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
    }}>
      {/* Call location picker — slides up when Call button tapped */}
      {callOpen && (
        <div style={{
          background: "rgba(9,25,34,0.98)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 20px 12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}>
          <div style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>
            Choose a location
          </div>
          <a
            href={SITE.phone.columbusHref}
            onClick={() => setCallOpen(false)}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.06)", borderRadius: "6px", padding: "12px 16px" }}
          >
            <span style={{ fontSize: "0.72rem", fontWeight: 500, color: "rgba(255,255,255,0.8)", letterSpacing: "0.04em" }}>Columbus, GA</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)" }}>{SITE.phone.columbus}</span>
          </a>
          <a
            href={SITE.phone.warnerRobinsHref}
            onClick={() => setCallOpen(false)}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.06)", borderRadius: "6px", padding: "12px 16px" }}
          >
            <span style={{ fontSize: "0.72rem", fontWeight: 500, color: "rgba(255,255,255,0.8)", letterSpacing: "0.04em" }}>Warner Robins, GA</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)" }}>{SITE.phone.warnerRobins}</span>
          </a>
        </div>
      )}

      <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Book */}
        <a
          href={SITE.booking}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 2,
            background: "var(--color-gold)",
            color: "#fff",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "13px 10px",
            borderRadius: "6px",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Book Now
        </a>

        {/* Call — toggles location picker */}
        <button
          type="button"
          onClick={() => setCallOpen((v) => !v)}
          style={{
            flex: 1,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "transparent",
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.6rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "13px 10px",
            borderRadius: "6px",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
          aria-expanded={callOpen}
          aria-label="Call a location"
        >
          Call
        </button>

        {/* Start Assessment */}
        <a
          href="/start-here"
          style={{
            flex: 1,
            border: "1px solid rgba(201,168,108,0.45)",
            background: "transparent",
            color: "var(--color-gold)",
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "13px 8px",
            borderRadius: "6px",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Start Here
        </a>
      </div>

      <style>{`
        .booking-bar { display: none; }
        @media (max-width: 768px) { .booking-bar { display: block !important; } }
      `}</style>
    </div>
  );
}
