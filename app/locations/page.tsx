import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locations | Columbus & Warner Robins, GA",
  description: "Revitalize Aesthetics & Wellness locations in Columbus, GA and Warner Robins, GA. Hours, directions, phone numbers, and online booking for both clinic locations.",
};

export default function LocationsPage() {
  return (
    <>
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "660px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>Georgia</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 400, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            Two locations.<br /><em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>One standard of care.</em>
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)" }}>
            Revitalize serves Columbus and Warner Robins, Georgia. The same clinical team, the same protocols, and the same commitment to getting it right — regardless of which location you choose.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }} className="loc-grid">
          {[
            {
              city: "Columbus",
              state: "Georgia",
              address: "6901 Ray Wright Way, Suite I",
              zip: "Columbus, GA 31909",
              phone: SITE.phone.columbus,
              phoneHref: SITE.phone.columbusHref,
              maps: SITE.locations.columbus.maps,
              badge: "Primary Location",
              note: "Online booking available 24/7",
              detailHref: "/locations/columbus-ga",
            },
            {
              city: "Warner Robins",
              state: "Georgia",
              address: "840 SR 96, Suite 3300",
              zip: "Warner Robins, GA 31088",
              phone: SITE.phone.warnerRobins,
              phoneHref: SITE.phone.warnerRobinsHref,
              maps: SITE.locations.warnerRobins.maps,
              badge: "Second Location",
              note: "Online booking available 24/7",
              detailHref: "/locations/warner-robins-ga",
            },
          ].map((loc) => (
            <FadeIn key={loc.city}>
              <div style={{ background: "#fff", padding: "56px 48px", borderRadius: "4px", borderTop: "3px solid var(--color-gold)", height: "100%" }}>
                <span style={{ display: "inline-block", fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-teal)", border: "1px solid rgba(14,61,77,0.25)", padding: "5px 13px", borderRadius: "100px", marginBottom: "24px", fontWeight: 500 }}>{loc.badge}</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1, marginBottom: "4px" }}>{loc.city}</h2>
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "28px" }}>{loc.state}</div>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "4px" }}>{loc.address}</p>
                <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", marginBottom: "28px" }}>{loc.zip}</p>
                <a href={loc.phoneHref} style={{ display: "block", fontSize: "1.6rem", fontWeight: 500, color: "var(--color-ink)", marginBottom: "6px", transition: "color 0.2s" }} className="loc-phone-link">{loc.phone}</a>
                <p style={{ fontSize: "0.7rem", color: "var(--color-muted-light)", marginBottom: "32px" }}>{loc.note}</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-teal)", color: "#fff", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>Book Online</a>
                  <a href={loc.phoneHref} style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>Call</a>
                  <a href={loc.maps} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>Directions</a>
                  <Link href={loc.detailHref} style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-teal)", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>Full Details →</Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <style>{`.loc-grid { grid-template-columns: 1fr 1fr; } .loc-phone-link:hover { color: var(--color-teal) !important; } @media (max-width: 768px) { .loc-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "16px" }}>
              Not sure which location to choose?
            </h2>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "28px" }}>
              Both locations offer the same full range of services. Choose whichever is most convenient — or call us and we can help you schedule at the right location for your needs.
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-teal)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Book Online</a>
              <Link href="/contact" style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Contact Us</Link>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Link href="/locations/compare" style={{ fontSize: "0.72rem", color: "var(--color-teal)", fontWeight: 500, letterSpacing: "0.06em" }}>
                Compare locations side-by-side →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
