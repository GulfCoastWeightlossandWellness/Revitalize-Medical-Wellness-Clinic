import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

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
                    { type: "booking", value: "Book online (24/7)", href: SITE.booking },
                  ],
                },
                {
                  label: "Warner Robins, Georgia",
                  items: [
                    { type: "address", value: "840 SR 96, Suite 3300\nWarner Robins, GA 31088" },
                    { type: "phone", value: SITE.phone.warnerRobins, href: SITE.phone.warnerRobinsHref },
                    { type: "booking", value: "Book online (24/7)", href: SITE.booking },
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
            <div style={{ background: "#fff", padding: "40px 36px", borderRadius: "4px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "16px" }}>Send a message</h2>
              <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginBottom: "28px", lineHeight: 1.75 }}>
                For appointment booking, use our online scheduler — it is the fastest option. For clinical questions or general inquiries, use the form below.
              </p>
              <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "Full name", type: "text", name: "name", placeholder: "Your name" },
                  { label: "Email address", type: "email", name: "email", placeholder: "your@email.com" },
                  { label: "Phone number", type: "tel", name: "phone", placeholder: "(xxx) xxx-xxxx" },
                ].map((field) => (
                  <div key={field.name}>
                    <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.1em", color: "var(--color-ink-2)", marginBottom: "6px" }}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      style={{ width: "100%", padding: "11px 14px", border: "1.5px solid var(--color-divider)", borderRadius: "6px", fontSize: "0.88rem", color: "var(--color-ink)", background: "var(--color-bg)", fontFamily: "var(--font-body)", outline: "none" }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.1em", color: "var(--color-ink-2)", marginBottom: "6px" }}>Preferred location</label>
                  <select style={{ width: "100%", padding: "11px 14px", border: "1.5px solid var(--color-divider)", borderRadius: "6px", fontSize: "0.88rem", color: "var(--color-ink)", background: "var(--color-bg)", fontFamily: "var(--font-body)" }}>
                    <option value="">Select a location</option>
                    <option value="columbus">Columbus, GA</option>
                    <option value="warnerrobins">Warner Robins, GA</option>
                    <option value="either">Either location</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.1em", color: "var(--color-ink-2)", marginBottom: "6px" }}>Your message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us what you are looking for or any questions you have..."
                    style={{ width: "100%", padding: "11px 14px", border: "1.5px solid var(--color-divider)", borderRadius: "6px", fontSize: "0.88rem", color: "var(--color-ink)", background: "var(--color-bg)", fontFamily: "var(--font-body)", resize: "vertical" }}
                  />
                </div>
                <button type="submit" style={{ background: "var(--color-teal)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", border: "none", cursor: "pointer", fontFamily: "var(--font-body)" }}>
                  Send Message
                </button>
                <p style={{ fontSize: "0.7rem", color: "var(--color-muted-light)", lineHeight: 1.65 }}>
                  For appointment booking, please use our{" "}
                  <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-teal)" }}>online scheduler</a>
                  {" "}for the fastest response.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
        <style>{`.contact-grid { grid-template-columns: 1fr 1fr; } .contact-link:hover { color: var(--color-teal-mid) !important; opacity: 0.8; } @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
