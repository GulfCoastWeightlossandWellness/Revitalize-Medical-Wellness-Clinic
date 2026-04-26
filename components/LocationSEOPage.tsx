import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";
import ImageSlot from "@/components/ui/ImageSlot";

export interface LocationSEOPageProps {
  city: "Columbus" | "Warner Robins";
  service: string;
  serviceHref: string;
  headline: string;
  subheadline: string;
  intro: string;
  bodyParagraphs: string[];
  faqs: { q: string; a: string }[];
  relatedServices: { label: string; href: string }[];
  schema: object;
}

export default function LocationSEOPage({
  city,
  service,
  serviceHref,
  headline,
  subheadline,
  intro,
  bodyParagraphs,
  faqs,
  relatedServices,
  schema,
}: LocationSEOPageProps) {
  const phone = city === "Columbus" ? SITE.phone.columbus : SITE.phone.warnerRobins;
  const phoneHref = city === "Columbus" ? SITE.phone.columbusHref : SITE.phone.warnerRobinsHref;
  const address = city === "Columbus"
    ? "6901 Ray Wright Way, Suite I, Columbus, GA 31909"
    : "840 SR 96, Suite 3300, Warner Robins, GA 31088";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageSlot
            src="/images/site/clinic-lobby-hero.jpg"
            alt={`${city} Revitalize clinic interior`}
            overlay="linear-gradient(0deg, rgba(9,25,34,0.78), rgba(9,25,34,0.78))"
          />
        </div>
        <div style={{ maxWidth: "720px", position: "relative", zIndex: 2 }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>{city}, Georgia</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 400, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            {headline}
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", marginBottom: "28px", maxWidth: "560px" }}>
            {intro}
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-gold)", color: "#fff", padding: "13px 26px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Book a Consultation</a>
            <a href={phoneHref} style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "13px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>Call {phone}</a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: "64px", alignItems: "start" }} className="loc-seo-layout">
          <FadeIn>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "24px" }}>{subheadline}</h2>
              {bodyParagraphs.map((p, i) => (
                <p key={i} style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "18px" }}>{p}</p>
              ))}

              {faqs.length > 0 && (
                <div style={{ marginTop: "48px" }}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "24px" }}>
                    Common questions about {service} in {city}
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {faqs.map((faq, i) => (
                      <details key={i} style={{ background: "#fff", borderRadius: "4px", overflow: "hidden" }}>
                        <summary style={{ padding: "18px 20px", fontSize: "0.92rem", fontWeight: 500, color: "var(--color-ink)", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          {faq.q}
                          <span style={{ fontSize: "1.2rem", color: "var(--color-teal)", marginLeft: "12px", flexShrink: 0 }}>+</span>
                        </summary>
                        <div style={{ padding: "0 20px 18px", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-muted)" }}>{faq.a}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ background: "var(--color-stone)", border: "1px solid var(--color-divider)", borderRadius: "6px", padding: "20px 24px", marginTop: "40px" }}>
                <p style={{ fontSize: "0.75rem", lineHeight: 1.75, color: "var(--color-muted-light)" }}>
                  <strong style={{ color: "var(--color-muted)" }}>Medical disclaimer:</strong> This page is for informational purposes only. All treatments require a clinical evaluation and are subject to provider discretion. Individual results vary.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <aside style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "var(--color-teal)", borderRadius: "6px", padding: "28px 24px" }}>
                <div style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "12px" }}>{city}, Georgia</div>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>{address}</p>
                <a href={phoneHref} style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#fff", marginBottom: "16px", textDecoration: "none" }}>{phone}</a>
                <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "var(--color-gold)", color: "#fff", padding: "12px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>Book Online</a>
              </div>

              <div style={{ background: "#fff", borderRadius: "6px", padding: "24px 20px" }}>
                <div style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "14px" }}>About this service</div>
                <Link href={serviceHref} style={{ display: "inline-block", background: "var(--color-teal)", color: "#fff", padding: "10px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", marginBottom: "14px" }}>
                  Full {service} Page
                </Link>
                <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", lineHeight: 1.65 }}>Read the complete clinical overview, candidacy information, and what to expect.</p>
              </div>

              {relatedServices.length > 0 && (
                <div style={{ background: "#fff", borderRadius: "6px", padding: "24px 20px" }}>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "14px" }}>Related services</div>
                  {relatedServices.map((s) => (
                    <Link key={s.href} href={s.href} style={{ display: "block", fontSize: "0.82rem", color: "var(--color-teal)", textDecoration: "none", paddingBottom: "8px", marginBottom: "8px", borderBottom: "1px solid var(--color-divider)" }}>
                      {s.label} &rarr;
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </FadeIn>
        </div>
        <style>{`.loc-seo-layout { grid-template-columns: 1fr 340px; } @media (max-width: 1024px) { .loc-seo-layout { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
