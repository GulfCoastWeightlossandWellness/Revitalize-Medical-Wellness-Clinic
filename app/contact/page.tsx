import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";
import UniversalContactForm from "@/components/UniversalContactForm";

export const metadata: Metadata = {
  title: "Contact | Columbus & Warner Robins, GA",
  description: "Contact Revitalize Aesthetics & Wellness. Two locations in Georgia — Columbus (762) 261-3880 and Warner Robins (478) 366-1244. Book online at any time.",
};

export default function ContactPage() {
  return (
    <>
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "600px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>Get in touch</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 400, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            Contact<br /><em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Revitalize</em>
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)" }}>
            For new patient bookings, the fastest path is online scheduling. For clinical questions, call us directly. We respond to every inquiry.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }} className="contact-grid">
          <FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                {
                  label: "Columbus, Georgia",
                  items: [
                    { type: "address", value: "6901 Ray Wright Way, Suite I\nColumbus, GA 31909" },
                    { type: "phone", value: SITE.phone.columbus, href: SITE.phone.columbusHref },
                    { type: "booking", value: "Book Columbus online (24/7)", href: SITE.bookingColumbus },
                  ],
                },
                {
                  label: "Warner Robins, Georgia",
                  items: [
                    { type: "address", value: "840 SR 96, Suite 3300\nWarner Robins, GA 31088" },
                    { type: "phone", value: SITE.phone.warnerRobins, href: SITE.phone.warnerRobinsHref },
                    { type: "booking", value: "Book Warner Robins online (24/7)", href: SITE.bookingWarnerRobins },
                  ],
                },
                {
                  label: "General inquiries",
                  items: [
                    { type: "email", value: SITE.email, href: `mailto:${SITE.email}` },
                  ],
                },
              ].map((section) => (
                <div key={section.label} style={{ background: "#fff", padding: "36px 32px", borderRadius: "4px", borderTop: "3px solid var(--color-gold)" }}>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 500, marginBottom: "18px" }}>{section.label}</div>
                  {section.items.map((item, i) => (
                    <div key={i} style={{ marginBottom: "10px" }}>
                      {item.href ? (
                        <a href={item.href} target={item.type === "booking" ? "_blank" : undefined} rel={item.type === "booking" ? "noopener noreferrer" : undefined} style={{ fontSize: item.type === "phone" ? "1.3rem" : "0.9rem", fontWeight: item.type === "phone" ? 500 : 400, color: "var(--color-teal)", transition: "color 0.2s" }} className="contact-link">
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <UniversalContactForm
              heading="Send Travis a message"
              subheading="For appointment scheduling, the JaneApp link is fastest. Use this form for clinical questions, general inquiries, or to start a conversation."
            />
          </FadeIn>
        </div>
        <style>{`.contact-grid { grid-template-columns: 1fr 1fr; } .contact-link:hover { color: var(--color-teal-mid) !important; opacity: 0.8; } @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
