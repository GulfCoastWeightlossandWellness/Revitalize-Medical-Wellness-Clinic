import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Columbus vs. Warner Robins — Choose Your Location | Revitalize",
  description:
    "Both Revitalize locations offer the same full range of services and clinical team. Here's how to decide which is right for you.",
};

export default function LocationsComparePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "760px" }}>
          <Link
            href="/locations"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "28px" }}
          >
            &larr; All Locations
          </Link>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
            Choosing Your Location
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, lineHeight: 1.15, color: "#fff", letterSpacing: "-0.015em", marginBottom: "24px" }}>
            Columbus or Warner Robins &mdash; how to decide.
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: "600px" }}>
            Both locations offer the same full range of services, the same clinical team, and the same standard of care. The right choice is usually just geography.
          </p>
        </div>
      </section>

      {/* What's the same */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "20px" }}>
              What&apos;s the same at both locations
            </h2>
            <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
              {[
                "The complete Revitalize service menu — all hormonal, aesthetic, wellness, and resurfacing services",
                "Travis Woodley as the lead clinician",
                "JaneApp online booking, available 24/7",
                "The same pricing and protocols",
                "The same clinical standards",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "8px" }}>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
              There is no &ldquo;main&rdquo; location. Both are fully operational. If you can see Travis at both, the choice is entirely based on what is convenient for you.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Side-by-side cards */}
      <section style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }} className="compare-loc-grid">
            {/* Columbus */}
            <div style={{ background: "#fff", borderRadius: "8px", padding: "40px 36px", borderTop: "4px solid var(--color-teal)" }}>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, marginBottom: "10px" }}>
                Columbus
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "6px" }}>
                {SITE.locations.columbus.address}
              </h2>
              <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginBottom: "4px" }}>
                {SITE.locations.columbus.city}, {SITE.locations.columbus.state} {SITE.locations.columbus.zip}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginBottom: "24px" }}>
                {SITE.locations.columbus.phone}
              </p>

              <p style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "14px" }}>
                Columbus is the original Revitalize location. It is convenient for patients in:
              </p>
              <ul style={{ paddingLeft: "18px", marginBottom: "28px" }}>
                {[
                  "Columbus, GA",
                  "Phenix City, AL",
                  "Fort Benning and the surrounding military community",
                  "Harris County",
                  "Muscogee County",
                  "East Alabama within reasonable driving distance",
                ].map((area, i) => (
                  <li key={i} style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "4px" }}>
                    {area}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a
                  href={SITE.bookingColumbus}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", background: "var(--color-teal)", color: "#fff", padding: "11px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}
                >
                  Book Columbus &rarr;
                </a>
                <a
                  href={SITE.locations.columbus.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "10px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}
                >
                  Get Directions
                </a>
                <a
                  href={SITE.locations.columbus.phoneHref}
                  style={{ display: "block", border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "10px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}
                >
                  Call Columbus
                </a>
              </div>
            </div>

            {/* Warner Robins */}
            <div style={{ background: "#fff", borderRadius: "8px", padding: "40px 36px", borderTop: "4px solid var(--color-gold)" }}>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "10px" }}>
                Warner Robins
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "6px" }}>
                {SITE.locations.warnerRobins.address}
              </h2>
              <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginBottom: "4px" }}>
                {SITE.locations.warnerRobins.city}, {SITE.locations.warnerRobins.state} {SITE.locations.warnerRobins.zip}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginBottom: "24px" }}>
                {SITE.locations.warnerRobins.phone}
              </p>

              <p style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "14px" }}>
                The Warner Robins location serves central Georgia and is convenient for patients in:
              </p>
              <ul style={{ paddingLeft: "18px", marginBottom: "28px" }}>
                {[
                  "Warner Robins",
                  "Bonaire",
                  "Kathleen",
                  "Perry",
                  "Houston County",
                  "Bibb County / Macon area",
                ].map((area, i) => (
                  <li key={i} style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "4px" }}>
                    {area}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a
                  href={SITE.bookingWarnerRobins}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", background: "var(--color-gold)", color: "#fff", padding: "11px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}
                >
                  Book Warner Robins &rarr;
                </a>
                <a
                  href={SITE.locations.warnerRobins.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "10px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}
                >
                  Get Directions
                </a>
                <a
                  href={SITE.locations.warnerRobins.phoneHref}
                  style={{ display: "block", border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "10px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}
                >
                  Call Warner Robins
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* If you're not sure */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "660px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "20px" }}>
              If you&apos;re not sure
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "16px" }}>
              Call either location. The front desk can help you determine which is closer to your home or workplace, or whether both have equivalent availability for the service you&apos;re looking for.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "40px" }}>
              If you are new to Revitalize and booking a first consultation, either location is a reasonable starting point. Most ongoing patients stay with the location that is most convenient to their routine.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={SITE.bookingColumbus}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: "var(--color-teal)", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
              >
                Book in Columbus &rarr;
              </a>
              <a
                href={SITE.bookingWarnerRobins}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
              >
                Book in Warner Robins &rarr;
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <style>{`
        .compare-loc-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) { .compare-loc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
