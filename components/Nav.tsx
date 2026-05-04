"use client";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";

type NavItem = { label: string; href: string; external?: boolean };
type NavColumn = { category: string; items: NavItem[] };

const SERVICES_MENU: NavColumn[] = [
  {
    category: "Hormone & Metabolic",
    items: [
      { label: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
      { label: "Testosterone Injection Therapy", href: "/services/testosterone-injection-therapy" },
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

const LIBRARY_MENU = [
  {
    category: "Browse",
    items: [
      { label: "Learning Library", href: "/hub" },
      { label: "Latest Articles", href: "/blog" },
      { label: "Full Article Archive", href: "/hub/articles" },
      { label: "Videos", href: "/hub/videos" },
      { label: "Patient Guides", href: "/hub/resources" },
    ],
  },
  {
    category: "From Travis",
    items: [
      { label: "The Book", href: "/book" },
      { label: "Assessments & Tools", href: "/tools" },
      { label: "Start Here — New Patients", href: "/start-here" },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const libraryMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLibraryOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (servicesOpen && servicesMenuRef.current && !servicesMenuRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (libraryOpen && libraryMenuRef.current && !libraryMenuRef.current.contains(target)) {
        setLibraryOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setLibraryOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [servicesOpen, libraryOpen]);

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
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.96)",
            borderRadius: "6px",
            padding: "4px 10px",
            flexShrink: 0,
          }}
          className="tap-target"
          aria-label="Revitalize Aesthetics and Wellness home"
        >
          <Image
            src="/images/brand/revitalize-logo.png"
            alt="Revitalize Aesthetics and Wellness logo"
            width={180}
            height={56}
            priority
            style={{ width: "auto", height: "30px" }}
          />
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
            ref={servicesMenuRef}
            style={{ position: "relative" }}
          >
            <button
              type="button"
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
                padding: "10px 2px",
              }}
              className={`nav-link nav-text-link ${pathname.startsWith("/services") ? "active" : ""}`}
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-menu"
              aria-haspopup="menu"
              onClick={() => { setServicesOpen((open) => !open); setLibraryOpen(false); }}
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
                id="desktop-services-menu"
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
                              padding: "8px 2px",
                            }}
                            className="nav-dropdown-link list-link-block"
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
                              padding: "8px 2px",
                            }}
                            className="nav-dropdown-link list-link-block"
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

          {/* Start Here — primary conversion CTA, visually distinct */}
          <Link
            href="/start-here"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              fontWeight: 600,
              transition: "color 0.2s, border-color 0.2s",
              border: "1px solid rgba(201,168,108,0.4)",
              padding: "8px 16px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
            }}
            className={`nav-link nav-start-here-link ${pathname === "/start-here" ? "active" : ""}`}
          >
            Start Here
          </Link>

          {/* About Travis */}
          <Link
            href="/about"
            style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.48)", fontWeight: 500, transition: "color 0.2s" }}
            className={`nav-link nav-text-link ${pathname === "/about" ? "active" : ""}`}
          >
            About Travis
          </Link>

          {/* Learning Library dropdown */}
          <div ref={libraryMenuRef} style={{ position: "relative" }}>
            <button
              type="button"
              style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.48)", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 500, display: "flex", alignItems: "center", gap: "5px", transition: "color 0.2s", padding: "10px 2px" }}
              className={`nav-link nav-text-link ${pathname.startsWith("/hub") || pathname === "/blog" || pathname === "/book" ? "active" : ""}`}
              aria-expanded={libraryOpen}
              aria-controls="desktop-library-menu"
              aria-haspopup="menu"
              onClick={() => { setLibraryOpen((o) => !o); setServicesOpen(false); }}
            >
              Learning Library
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.4, marginTop: 1 }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {libraryOpen && (
              <div
                id="desktop-library-menu"
                style={{ position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: "rgba(9,25,34,0.98)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "24px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", minWidth: "340px", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
              >
                {LIBRARY_MENU.map((col) => (
                  <div key={col.category}>
                    <div style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 500, marginBottom: "14px" }}>
                      {col.category}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      {col.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", transition: "color 0.2s", lineHeight: 1.4, fontWeight: 400, padding: "8px 2px" }}
                          className="nav-dropdown-link list-link-block"
                          onClick={() => setLibraryOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Shop — amber pill */}
          <a
            href={SITE.ecosystem.nutritionShop}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              fontWeight: 500,
              border: "1px solid rgba(201,168,108,0.5)",
              padding: "8px 16px",
              borderRadius: "99px",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            }}
            className="nav-shop-link"
          >
            Shop
          </a>

          {/* Institute — top-level, promoted */}
          <Link
            href="/institute"
            style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.48)", fontWeight: 500, transition: "color 0.2s" }}
            className={`nav-link nav-text-link ${pathname.startsWith("/institute") ? "active" : ""}`}
          >
            Institute
          </Link>

          {/* Locations */}
          <Link
            href="/locations"
            style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.48)", fontWeight: 500, transition: "color 0.2s" }}
            className={`nav-link nav-text-link ${pathname === "/locations" ? "active" : ""}`}
          >
            Locations
          </Link>

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
            className="nav-cta-btn nav-cta-link"
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
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
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
          id="mobile-nav-menu"
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
            {/* Start Here — most prominent mobile nav item */}
            <Link
              href="/start-here"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                padding: "16px 0",
                borderBottom: "1px solid rgba(201,168,108,0.2)",
                fontWeight: 600,
              }}
              className="list-link-block"
            >
              Start Here — New Patients
            </Link>

            {/* Tools as second item */}
            <Link
              href="/tools"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontWeight: 500,
              }}
              className={`list-link-block ${pathname === "/tools" ? "active-mobile-link" : ""}`}
            >
              Assessments & Tools
            </Link>

            {[
              { label: "About Travis", href: "/about" },
              { label: "Institute", href: "/institute" },
              { label: "Locations", href: "/locations" },
              { label: "Contact", href: "/contact" },
              { label: "Payment Plans", href: "/payment-plans" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{ fontSize: "0.85rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontWeight: 500 }}
                className={`list-link-block ${pathname === item.href ? "active-mobile-link" : ""}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Shop — mobile */}
            <a
              href={SITE.ecosystem.nutritionShop}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontWeight: 500,
                display: "block",
              }}
              className="list-link-block"
            >
              Shop ↗
            </a>

            {/* Learning Library section in mobile */}
            <div style={{ marginTop: "16px" }}>
              <div style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "8px", fontWeight: 500 }}>
                Learning Library
              </div>
              {[
                { label: "Learning Library", href: "/hub" },
                { label: "Latest Articles", href: "/blog" },
                { label: "Full Archive", href: "/hub/articles" },
                { label: "Videos", href: "/hub/videos" },
                { label: "Patient Guides", href: "/hub/resources" },
                { label: "The Book", href: "/book" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "block", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  className="list-link-block"
                >
                  {item.label}
                </Link>
              ))}
            </div>

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
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                    className="list-link-block"
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
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                    className="list-link-block"
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
        .nav-start-here-link:hover { color: #fff !important; border-color: rgba(201,168,108,0.8) !important; }
        .nav-shop-link:hover { color: #fff !important; border-color: rgba(201,168,108,0.9) !important; }
        .active-mobile-link { color: rgba(255,255,255,0.95) !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
