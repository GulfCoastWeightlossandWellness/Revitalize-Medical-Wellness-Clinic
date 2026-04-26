import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Content Hub Resources",
  description: "Key external and internal resources for education, tools, and follow-up care.",
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/hub/resources",
  },
};

const RESOURCE_LINKS = [
  {
    label: "Revitalize Nutrition Shop",
    href: SITE.ecosystem.nutritionShop,
    description: "Clinical supplement catalog and nutrition education storefront.",
    external: true,
  },
  {
    label: "Rebuild Metabolic Health Institute",
    href: SITE.ecosystem.rebuildInstitute,
    description: "Long-form educational platform connected to Travis's metabolic framework.",
    external: true,
  },
  {
    label: "Rebuild Metabolic Health YouTube",
    href: SITE.social.youtube,
    description: "Video-first patient education and practitioner insights.",
    external: true,
  },
  {
    label: "Payment Plans",
    href: SITE.paymentPlansPage,
    description: "Independent financing options and provider links.",
    external: false,
  },
  {
    label: "The Book",
    href: "/book",
    description: "You're Not Broken — You're Unbalanced by Travis Woodley, with full platform links.",
    external: false,
  },
  {
    label: "Buy The Book (All Platforms)",
    href: SITE.book.allPlatforms,
    description: "Direct multi-platform purchase page for Travis's book.",
    external: true,
  },
  {
    label: "Media Archive Review",
    href: "/media-review",
    description: "Local review page for archived original media assets.",
    external: false,
  },
];

export default function HubResourcesPage() {
  return (
    <>
      <section style={{ background: "var(--color-ink)", padding: "74px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div className="eyebrow-white" style={{ marginBottom: "18px" }}>
            Content hub
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.8rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            Resource Dashboard
          </h1>
          <p style={{ color: "rgba(255,255,255,0.52)", lineHeight: 1.8, maxWidth: "700px" }}>
            Everything patients need in one place: education, supplements, book resources, and
            trusted care pathways.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "64px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="hub-resources-grid">
          {RESOURCE_LINKS.map((resource, idx) => (
            <FadeIn key={resource.label} delay={Math.min(idx * 0.03, 0.15)}>
              <article style={{ background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "6px", padding: "20px 20px 18px" }}>
                <h2 style={{ fontSize: "0.95rem", marginBottom: "8px", color: "var(--color-ink)" }}>{resource.label}</h2>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--color-muted)", marginBottom: "14px" }}>
                  {resource.description}
                </p>
                {resource.external ? (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.58rem", color: "var(--color-teal)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}
                  >
                    Open Resource ↗
                  </a>
                ) : (
                  <Link
                    href={resource.href}
                    style={{ fontSize: "0.58rem", color: "var(--color-teal)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}
                  >
                    Open Resource
                  </Link>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
        <div style={{ maxWidth: "1000px", margin: "14px auto 0", background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "8px", padding: "20px 20px" }}>
          <div style={{ fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-teal-light)", marginBottom: "8px" }}>
            Travis on supplements
          </div>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.25rem", lineHeight: 1.45, color: "var(--color-ink)" }}>
            &ldquo;Supplements are tools, not magic. The right formulation at the right time can support
            what we are already building through labs, nutrition, sleep, and consistency.&rdquo;
          </p>
        </div>
        <style>{`
          .hub-resources-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 900px) {
            .hub-resources-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

