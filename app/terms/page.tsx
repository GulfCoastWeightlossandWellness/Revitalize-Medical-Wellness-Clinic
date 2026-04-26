import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Revitalize Aesthetics & Wellness",
  description: "Terms of use for the Revitalize Aesthetics & Wellness website.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "8px" }}>Terms of Use</h1>
        <p style={{ fontSize: "0.78rem", color: "var(--color-muted-light)", marginBottom: "48px" }}>Last updated: January 2025</p>

        {[
          { heading: "Use of this website", body: "This website is operated by Revitalize Aesthetics & Wellness. By accessing this site, you agree to these terms. The content on this site is for informational purposes only and does not constitute medical advice, diagnosis, or treatment." },
          { heading: "Medical disclaimer", body: "Nothing on this website should be interpreted as a substitute for professional medical advice. Always consult a qualified healthcare provider before starting, modifying, or discontinuing any treatment. Individual results from any treatment vary. Results described on this site are not guaranteed." },
          { heading: "Accuracy of information", body: "We make reasonable efforts to keep information on this site accurate and up to date. Treatment availability, pricing, and protocols are subject to change. Contact us directly for current information on any specific service." },
          { heading: "Intellectual property", body: "All content on this website — text, images, graphics, and design — is the property of Revitalize Aesthetics & Wellness or used with permission. You may not reproduce, distribute, or use our content without written permission." },
          { heading: "External links", body: "This site may contain links to third-party websites including booking platforms, social media, and partner organizations. We are not responsible for the content or practices of external sites." },
          { heading: "Limitation of liability", body: "Revitalize Aesthetics & Wellness is not liable for any direct, indirect, incidental, or consequential damages resulting from use of this website or reliance on its content." },
          { heading: "Contact", body: "Questions about these terms should be directed to twoodley@revitalizemedicalclinic.com." },
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
