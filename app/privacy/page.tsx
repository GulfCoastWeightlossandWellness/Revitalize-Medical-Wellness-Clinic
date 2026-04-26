import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Revitalize Aesthetics & Wellness",
  description: "Privacy policy for Revitalize Aesthetics & Wellness. How we collect, use, and protect your personal information.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "8px" }}>Privacy Policy</h1>
        <p style={{ fontSize: "0.78rem", color: "var(--color-muted-light)", marginBottom: "48px" }}>Last updated: January 2025</p>

        {[
          { heading: "Information we collect", body: "We collect information you provide directly — including your name, email address, phone number, and any information submitted through our contact form or booking system. We also collect standard website analytics (pages viewed, session duration, referring source) through anonymized tracking." },
          { heading: "How we use your information", body: "Information you provide is used to respond to your inquiries, schedule consultations, and communicate about your care. We do not sell, rent, or share your personal information with third parties for marketing purposes. Clinical information is handled in accordance with HIPAA requirements." },
          { heading: "Booking and scheduling", body: "Online booking is handled through Jane App, an HIPAA-compliant practice management platform. Payment processing is handled by secure third-party processors. We do not store payment card information on our systems." },
          { heading: "Cookies and analytics", body: "Our website uses standard web analytics tools to understand how visitors use the site. This data is aggregated and anonymized. You can disable cookies through your browser settings; this will not affect your ability to use the website." },
          { heading: "Your rights", body: "You may request access to, correction of, or deletion of any personal information we hold about you by contacting us at twoodley@revitalizemedicalclinic.com. Requests are processed within 30 days." },
          { heading: "Contact", body: "Questions about this privacy policy should be directed to twoodley@revitalizemedicalclinic.com or by calling either clinic location." },
        ].map((section) => (
          <div key={section.heading} style={{ marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "12px" }}>{section.heading}</h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-muted)" }}>{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
