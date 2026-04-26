import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Services | Medical Aesthetics & Wellness",
  description: "Complete list of services at Revitalize Aesthetics & Wellness in Columbus and Warner Robins, GA. Hormone therapy, medical weight loss, aesthetics, injectables, IV hydration, and more.",
};

const CATEGORIES = [
  {
    title: "Hormone & Metabolic",
    services: [
      { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women", desc: "Bioidentical hormone optimization for perimenopause, menopause, and mid-life imbalance." },
      { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men", desc: "Lab-guided testosterone optimization using the Biote pellet method." },
      { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy", desc: "Platinum Biote provider. Steady, low-maintenance hormone delivery via subcutaneous pellets." },
      { name: "Medical Weight Loss", href: "/services/medical-weight-loss", desc: "90-day structured program addressing insulin, cortisol, thyroid, and hormones. GLP-1 options available." },
      { name: "Nutritional Counseling", href: "/services/nutritional-counseling", desc: "Personalized nutrition architecture built around your metabolic baseline and labs." },
    ],
  },
  {
    title: "Aesthetics & Injectables",
    services: [
      { name: "Neuromodulator Treatments", href: "/services/neuromodulators", desc: "Conservative, face-mapped wrinkle-relaxing injections. Natural results, minimal downtime." },
      { name: "Dermal Fillers", href: "/services/dermal-fillers", desc: "Hyaluronic acid and biostimulatory fillers for volume restoration and facial contouring." },
      { name: "Cellenis PRP Gel Filler", href: "/services/cellenis-prp-gel-filler", desc: "Natural volumizing using your own platelet-rich plasma processed into an injectable gel." },
      { name: "Fat Dissolving Injections", href: "/services/fat-dissolving-injections", desc: "Deoxycholic acid for localized submental fullness. Non-surgical double chin reduction." },
    ],
  },
  {
    title: "Skin Rejuvenation",
    services: [
      { name: "Microneedling", href: "/services/microneedling", desc: "Controlled micro-channels to stimulate collagen remodeling. RF option available." },
      { name: "PhantomClear CO2 Laser", href: "/services/fractional-co2-laser", desc: "Fractional CO2 resurfacing for meaningful texture, tone, and fine line improvement." },
      { name: "Vampire Facial & PRP", href: "/services/vampire-facial-prp", desc: "PRP microneedling combining your own growth factors with micro-channel delivery." },
      { name: "AquaFirme Facials", href: "/services/aquafirme-facials", desc: "Device-assisted cleanse, polish, infuse, and protect. Glassy results, no downtime." },
      { name: "VI Peel", href: "/services/vi-peel", desc: "Professional chemical peel for brighter, smoother, more even skin. Face and body." },
      { name: "Laser Hair Removal", href: "/services/laser-hair-removal", desc: "Long-term hair reduction using the Motus AZ system across a wide range of skin tones." },
    ],
  },
  {
    title: "Wellness & Restoration",
    services: [
      { name: "IV Hydration Therapy", href: "/services/iv-hydration", desc: "Eight targeted infusion formulas including NAD+, Myers Cocktail, and high-dose Vitamin C." },
      { name: "Low Level Light Therapy", href: "/services/low-level-light-therapy", desc: "Non-invasive LED sessions to support skin appearance. No heat, no UV, no downtime." },
      { name: "DE|RIVE Hair Restoration", href: "/services/derive-hair-restoration", desc: "100% natural, hormone-free hair wellness using plant-based EXO|E Technology." },
    ],
  },
  {
    title: "Sexual Wellness",
    services: [
      { name: "O-Shot", href: "/services/o-shot", desc: "PRP-based treatment for women's sensation, arousal, and intimate comfort." },
      { name: "Erectile Dysfunction", href: "/services/erectile-dysfunction", desc: "Comprehensive, judgment-free evaluation and treatment addressing all contributing factors." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "720px" }}>
          <div className="eyebrow-white" style={{ marginBottom: "20px" }}>Columbus &amp; Warner Robins, GA</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 400, lineHeight: 1.07, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            All Services
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", maxWidth: "520px", marginBottom: "28px" }}>
            Every treatment at Revitalize begins with a clinical consultation. Below is a complete overview of what we offer at our Columbus and Warner Robins locations.
          </p>
          <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "13px 26px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            Book a Consultation
          </a>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "64px" }}>
          {CATEGORIES.map((cat, ci) => (
            <FadeIn key={cat.title} delay={ci * 0.05}>
              <div>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 500, marginBottom: "24px" }}>{cat.title}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2px" }}>
                  {cat.services.map((s) => (
                    <Link key={s.href} href={s.href}>
                      <div style={{ background: "#fff", padding: "32px 28px", height: "100%", borderRadius: "4px", transition: "box-shadow 0.25s, transform 0.25s" }} className="svc-index-card">
                        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "10px", lineHeight: 1.25 }}>{s.name}</h2>
                        <p style={{ fontSize: "0.8rem", lineHeight: 1.78, color: "var(--color-muted)", marginBottom: "16px" }}>{s.desc}</p>
                        <span style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600 }}>Learn more</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <style>{`.svc-index-card:hover { box-shadow: 0 16px 40px rgba(0,0,0,0.08); transform: translateY(-3px); }`}</style>
    </>
  );
}
