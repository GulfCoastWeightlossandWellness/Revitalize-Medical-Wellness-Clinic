import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const FOOTER_SERVICES = [
  { label: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
  { label: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
  { label: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
  { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
  { label: "IV Hydration Therapy", href: "/services/iv-hydration" },
  { label: "Neuromodulators", href: "/services/neuromodulators" },
  { label: "Dermal Fillers", href: "/services/dermal-fillers" },
  { label: "Microneedling", href: "/services/microneedling" },
  { label: "Laser Hair Removal", href: "/services/laser-hair-removal" },
  { label: "All Services", href: "/services" },
];

const FOOTER_CLINIC_LINKS = [
  { label: "About Travis", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Locations", href: "/locations" },
  { label: "Start Here", href: "/start-here" },
  { label: "Tools & Assessments", href: "/tools" },
  { label: "Payment Plans", href: "/payment-plans" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_LIBRARY_LINKS = [
  { label: "Learning Library", href: "/hub" },
  { label: "Latest Articles", href: "/blog" },
  { label: "Full Archive", href: "/hub/articles" },
  { label: "Videos", href: "/hub/videos" },
  { label: "Patient Guides", href: "/hub/resources" },
  { label: "Hormone Health", href: "/services/hormone-therapy-women" },
  { label: "Weight Loss", href: "/services/medical-weight-loss" },
  { label: "Aesthetics", href: "/services/neuromodulators" },
  { label: "Sexual Wellness", href: "/services/o-shot" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-teal-dark)",
        color: "#fff",
        padding: "72px clamp(24px, 6vw, 80px) 36px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1.4fr 1fr 1fr 1fr",
            gap: "44px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.96)",
                borderRadius: "8px",
                padding: "8px 12px",
                marginBottom: "16px",
              }}
              className="tap-target"
              aria-label="Revitalize Aesthetics and Wellness home"
            >
              <Image
                src="/images/brand/revitalize-logo.png"
                alt="Revitalize Aesthetics and Wellness logo"
                // Intrinsic file is 864x288 (3:1 wordmark). Render at 36px tall.
                width={864}
                height={288}
                style={{ width: "auto", height: "36px", objectFit: "contain" }}
              />
            </Link>
            <p
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.82,
                color: "rgba(255,255,255,0.35)",
                fontWeight: 400,
                maxWidth: "280px",
                marginBottom: "24px",
              }}
            >
              Premier medical aesthetics and functional wellness in Columbus and Warner Robins, Georgia. Led by Travis Woodley, MSN, RN, CRNP — Platinum Biote provider and 17+ year clinician.
            </p>
            <div style={{ marginBottom: "20px" }}>
              <Image
                src="/media/original-site/images/logo-biote-ea8484c1e1.png"
                alt="Biote Trusted Certified Provider Platinum Partner badge"
                width={250}
                height={323}
                style={{ width: "110px", height: "auto", opacity: 0.95 }}
              />
            </div>
            {/* Phones */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
              <a
                href={SITE.phone.columbusHref}
                style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                className="footer-link list-link-block"
              >
                Columbus: {SITE.phone.columbus}
              </a>
              <a
                href={SITE.phone.warnerRobinsHref}
                style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                className="footer-link list-link-block"
              >
                Warner Robins: {SITE.phone.warnerRobins}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                className="footer-link list-link-block"
              >
                {SITE.email}
              </a>
            </div>
            {/* Social */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                { label: "Instagram", href: SITE.social.instagram },
                { label: "Facebook", href: SITE.social.facebook },
                { label: "YouTube", href: SITE.social.youtube },
                { label: "LinkedIn", href: SITE.social.linkedin },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.56rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "10px 12px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.38)",
                    borderRadius: "4px",
                    transition: "all 0.2s",
                    fontWeight: 500,
                  }}
                  className="footer-social-link"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              Services
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              {FOOTER_SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", transition: "color 0.2s" }}
                  className="footer-link list-link-block"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Clinic */}
          <div>
            <div style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 500, marginBottom: "20px" }}>
              Clinic
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              {FOOTER_CLINIC_LINKS.map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", transition: "color 0.2s" }} className="footer-link list-link-block">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Learning Library */}
          <div>
            <div style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 500, marginBottom: "20px" }}>
              Learning Library
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              {FOOTER_LIBRARY_LINKS.map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", transition: "color 0.2s" }} className="footer-link list-link-block">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <div
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              Ecosystem
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              {[
                { label: "Institute", href: "/institute" },
                { label: "Nutrition Shop", href: SITE.ecosystem.nutritionShop },
                { label: "Rebuild Institute", href: SITE.ecosystem.rebuildInstitute },
                { label: "The Book", href: "/book" },
                { label: "Newsletter", href: SITE.social.linkedinNewsletter },
                { label: "Biote Provider", href: SITE.biote },
                { label: "Payment Plans", href: SITE.paymentPlansPage },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", transition: "color 0.2s" }}
                  className="footer-link list-link-block"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "28px" }} />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.22)", marginBottom: "6px" }}>
              {`© ${new Date().getFullYear()} Revitalize Aesthetics & Wellness. All rights reserved.`}
            </p>
            <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.15)", maxWidth: "580px", lineHeight: 1.65 }}>
              Information on this site is for educational purposes only and does not constitute medical advice. Individual results vary. Consultation required to determine candidacy for any treatment.
            </p>
          </div>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.2)", transition: "color 0.2s" }}
                className="footer-link list-link-block"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: rgba(255,255,255,0.72) !important; }
        .footer-social-link:hover { color: var(--color-gold) !important; border-color: rgba(201,168,108,0.45) !important; }
        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: 2fr 1.4fr 1fr 1fr !important; }
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
