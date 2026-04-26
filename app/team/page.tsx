import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";
import ImageSlot from "@/components/ui/ImageSlot";

export const metadata: Metadata = {
  title: "Our Team | Travis Woodley & Clinical Staff | Revitalize",
  description: "Meet the clinical team at Revitalize Aesthetics & Wellness. Travis Woodley, MSN, RN, CRNP — founder and lead clinician — and the staff serving Columbus and Warner Robins, GA.",
};

export default function TeamPage() {
  return (
    <>
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "680px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>The people behind the practice</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 400, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            Our Team
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", maxWidth: "520px" }}>
            Clinical care requires more than credentials. It requires people who listen, who stay current, and who prioritize getting it right over getting through the schedule. That is who we hire.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="team-lead-grid">
              <div style={{ minHeight: "440px", borderRadius: "4px", overflow: "hidden", position: "relative" }}>
                <ImageSlot
                  src="/images/placeholders/team-travis.svg"
                  alt="Travis Woodley headshot placeholder"
                  priority
                  overlay="linear-gradient(0deg, rgba(9,25,34,0.58), rgba(9,25,34,0.22))"
                  objectPosition="center top"
                />
                <div style={{ position: "absolute", left: "28px", bottom: "28px", zIndex: 2 }}>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "10px" }}>Founder &amp; Lead Clinician</div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, color: "#fff", lineHeight: 1.1, marginBottom: "8px" }}>Travis Woodley</h2>
                  <div style={{ fontSize: "0.7rem", color: "var(--color-gold)", letterSpacing: "0.08em" }}>MSN, RN, CRNP</div>
                </div>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "16px" }}>
                  Travis Woodley built Revitalize out of seventeen years in high-acuity clinical medicine — emergency rooms, cardiac intensive care, and catheterization labs. The orientation he developed in those environments — read the whole patient, understand the mechanism, address the root — is the orientation he brought to functional and aesthetic medicine.
                </p>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "16px" }}>
                  He is a Certified Platinum Biote provider, one of the highest designations in the hormone therapy network, reflecting both clinical volume and demonstrated patient outcomes. He is also the published author of <em>You&apos;re Not Broken — You&apos;re Unbalanced</em> and the founder of the Rebuild Metabolic Health Institute.
                </p>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "28px" }}>
                  When you see Travis, you are seeing a clinician who has read your labs before walking in the room, who will ask questions about your sleep, your stress, your history — not just the presenting complaint.
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <Link href="/about" style={{ background: "var(--color-teal)", color: "#fff", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Full Biography</Link>
                  <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Book a Consultation</a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{`.team-lead-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .team-lead-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "48px" }}>
              <div className="eyebrow" style={{ marginBottom: "12px" }}>Clinical staff</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em" }}>
                Supporting the clinical experience
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: "#fff", padding: "40px 36px", borderRadius: "4px", borderTop: "3px solid var(--color-gold)", maxWidth: "560px" }}>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 500, marginBottom: "12px" }}>Clinical Staff</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "6px" }}>Carly Wyatt</h3>
              <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.8, marginBottom: "12px" }}>
                Carly brings clinical precision and patient-focused care to the Revitalize team, supporting the full range of aesthetic and wellness services across both locations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{ background: "var(--color-teal)", padding: "72px clamp(24px, 6vw, 80px)", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "#fff", letterSpacing: "-0.01em", marginBottom: "16px" }}>
            Ready to meet the team?
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.5)", marginBottom: "28px", maxWidth: "440px", margin: "0 auto 28px" }}>
            Book a consultation at either Georgia location. Every treatment begins with a clinical conversation.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-gold)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Book a Consultation</a>
            <a href={SITE.phone.columbusHref} style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "14px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>Columbus: {SITE.phone.columbus}</a>
            <a href={SITE.phone.warnerRobinsHref} style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "14px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>Warner Robins: {SITE.phone.warnerRobins}</a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
