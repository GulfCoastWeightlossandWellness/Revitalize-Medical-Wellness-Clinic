"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

type NavItem = { label: string; href: string; external?: boolean };
type NavColumn = { category: string; items: NavItem[] };

const SERVICES_MENU: NavColumn[] = [
  {
    category: "Hormone & Metabolic",
    items: [
      { label: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
      { label: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
      { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
      { label: "Nutritional Counseling", href: "/services/nutritional-counseling" },
    ],
  },
  {
    category: "Aesthetics & Skin",
    items: [
      { label: "Neuromodulator Treatments", href: "/services/neuromodulators" },
      { label: "Dermal Fillers", href: "/services/dermal-fillers" },
      { label: "Microneedling", href: "/services/microneedling" },
      { label: "PhantomClear CO2 Laser", href: "/services/fractional-co2-laser" },
      { label: "AquaFirme Facials", href: "/services/aquafirme-facials" },
      { label: "VI Peel", href: "/services/vi-peel" },
      { label: "Vampire Facial & PRP", href: "/services/vampire-facial-prp" },
    ],
  },
  {
    category: "Wellness & Restoration",
    items: [
      { label: "IV Hydration Therapy", href: "/services/iv-hydration" },
      { label: "Fat Dissolving Injections", href: "/services/fat-dissolving-injections" },
      { label: "Low Level Light Therapy", href: "/services/low-level-light-therapy" },
      { label: "Laser Hair Removal", href: "/services/laser-hair-removal" },
      { label: "DE|RIVE Hair Restoration", href: "/services/derive-hair-restoration" },
      { label: "Cellenis PRP Gel Filler", href: "/services/cellenis-prp-gel-filler" },
    ],
  },
  {
    category: "Sexual Wellness",
    items: [
      { label: "Erectile Dysfunction", href: "/services/erectile-dysfunction" },
      { label: "O-Shot (Women)", href: "/services/o-shot" },
    ],
  },
  {
    category: "Ecosystem",
    items: [
      { label: "Rebuild Metabolic Health Institute", href: SITE.ecosystem.rebuildInstitute, external: true },
      { label: "Nutrition Shop", href: SITE.ecosystem.nutritionShop, external: true },
    ],
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          background: scrolled ? "rgba(9,25,34,0.97)" : "rgba(9,25,34,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 4vw, 56px)",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.92)",
            flexShrink: 0,
          }}
        >
          <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Revitalize</em>
          <span style={{ display: "none" }} className="md-show"> Aesthetics &amp; Wellness</span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            listStyle: "none",
          }}
          className="desktop-nav"
        >
          {/* Services dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.48)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.2s",
                padding: "8px 0",
              }}
              className="nav-link"
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.4, marginTop: 1 }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(9,25,34,0.98)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "28px",
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "28px",
                  minWidth: "760px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
              >
                {SERVICES_MENU.map((col) => (
                  <div key={col.category}>
                    <div
                      style={{
                        fontSize: "0.55rem",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "var(--color-gold)",
                        fontWeight: 500,
                        marginBottom: "14px",
                      }}
                    >
                      {col.category}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {col.items.map((item) =>
                        item.external ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontSize: "0.72rem",
                              color: "rgba(255,255,255,0.5)",
                              transition: "color 0.2s",
                              lineHeight: 1.4,
                              fontWeight: 400,
                            }}
                            className="nav-dropdown-link"
                            onClick={() => setServicesOpen(false)}
                          >
                            {item.label} ↗
                          </a>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            style={{
                              fontSize: "0.72rem",
                              color: "rgba(255,255,255,0.5)",
                              transition: "color 0.2s",
                              lineHeight: 1.4,
                              fontWeight: 400,
                            }}
                            className="nav-dropdown-link"
                            onClick={() => setServicesOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "About Travis", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "The Book", href: "/book" },
            { label: "Locations", href: "/locations" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.48)",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--color-gold)",
              color: "#fff",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "10px 22px",
              borderRadius: "6px",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
            className="nav-cta-btn"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: "block", width: "22px", height: "1.5px",
            background: "rgba(255,255,255,0.7)", borderRadius: "2px",
            transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            transition: "all 0.3s",
          }} />
          <span style={{
            display: "block", width: "22px", height: "1.5px",
            background: "rgba(255,255,255,0.7)", borderRadius: "2px",
            opacity: mobileOpen ? 0 : 1, transition: "all 0.3s",
          }} />
          <span style={{
            display: "block", width: "22px", height: "1.5px",
            background: "rgba(255,255,255,0.7)", borderRadius: "2px",
            transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            transition: "all 0.3s",
          }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(9,25,34,0.99)",
            backdropFilter: "blur(20px)",
            zIndex: 999,
            overflowY: "auto",
            padding: "24px 28px 40px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              { label: "About Travis", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Locations", href: "/locations" },
              { label: "The Book", href: "/book" },
              { label: "Contact", href: "/contact" },
              { label: "Payment Plans", href: "/payment-plans" },
              { label: "Tools & Assessments", href: "/tools" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Link>
            ))}

            <div style={{ marginTop: "12px" }}>
              <div style={{
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "12px",
                fontWeight: 500,
              }}>
                Services
              </div>
              {SERVICES_MENU.flatMap((col) => col.items).map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.4)",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    {item.label} ↗
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.4)",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginTop: "24px",
                background: "var(--color-gold)",
                color: "#fff",
                textAlign: "center",
                padding: "16px",
                borderRadius: "8px",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </a>

            <div style={{
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}>
              <a href={SITE.phone.columbusHref} style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>
                Columbus: {SITE.phone.columbus}
              </a>
              <a href={SITE.phone.warnerRobinsHref} style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>
                Warner Robins: {SITE.phone.warnerRobins}
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .hamburger { display: none; }
        .nav-link:hover { color: rgba(255,255,255,0.9) !important; }
        .nav-dropdown-link:hover { color: rgba(255,255,255,0.88) !important; }
        .nav-cta-btn:hover { background: var(--color-gold-dark) !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
