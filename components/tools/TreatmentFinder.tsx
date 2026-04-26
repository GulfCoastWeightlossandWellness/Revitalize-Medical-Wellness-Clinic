"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

type Treatment = {
  name: string;
  href: string;
  invasiveness: "non-invasive" | "minimally-invasive" | "procedural";
  description: string;
  timeToResults: string;
};

type Concern = {
  id: string;
  label: string;
  treatments: Treatment[];
};

const CONCERNS: Concern[] = [
  {
    id: "energy-hormones",
    label: "Low energy, mood, or hormone symptoms",
    treatments: [
      { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy", invasiveness: "minimally-invasive", description: "Bioidentical hormone pellets inserted subcutaneously — consistent delivery over 3–6 months.", timeToResults: "2–4 weeks" },
      { name: "Hormone Therapy for Women", href: "/services/hormone-therapy-women", invasiveness: "minimally-invasive", description: "Comprehensive estrogen, progesterone, and testosterone optimization with multiple delivery options.", timeToResults: "2–6 weeks" },
      { name: "Hormone Therapy for Men", href: "/services/hormone-therapy-men", invasiveness: "minimally-invasive", description: "Testosterone optimization with lab-guided dosing and full clinical evaluation.", timeToResults: "3–6 weeks" },
      { name: "IV Hydration", href: "/services/iv-hydration", invasiveness: "minimally-invasive", description: "High-dose micronutrients and NAD+ delivered intravenously — immediate cellular support.", timeToResults: "Same session" },
    ],
  },
  {
    id: "weight-loss",
    label: "Weight loss that has not responded to diet and exercise",
    treatments: [
      { name: "Medical Weight Loss", href: "/services/medical-weight-loss", invasiveness: "non-invasive", description: "90-day structured program addressing metabolic function, GLP-1 medications, and sustained lifestyle change.", timeToResults: "4–8 weeks" },
      { name: "Fat-Dissolving Injections", href: "/services/fat-dissolving-injections", invasiveness: "minimally-invasive", description: "Deoxycholic acid injections targeting submental fat. Treatment-resistant localized fat only.", timeToResults: "4–6 weeks per session" },
      { name: "Nutritional Counseling", href: "/services/nutritional-counseling", invasiveness: "non-invasive", description: "Metabolic-integrated nutritional strategy aligned with your hormone and metabolic profile.", timeToResults: "4–8 weeks" },
    ],
  },
  {
    id: "skin-texture",
    label: "Skin texture, lines, or overall skin quality",
    treatments: [
      { name: "Fractional CO2 Laser", href: "/services/fractional-co2-laser", invasiveness: "procedural", description: "PhantomClear system resurfacing — addresses texture, tone, scars, and fine lines with a single treatment.", timeToResults: "2–4 weeks post-healing" },
      { name: "Microneedling", href: "/services/microneedling", invasiveness: "minimally-invasive", description: "Collagen induction therapy. RF option available. 3-session protocol recommended.", timeToResults: "4–6 weeks per session" },
      { name: "VI Peel", href: "/services/vi-peel", invasiveness: "minimally-invasive", description: "Medical-grade chemical peel for texture, pigment, and fine lines. Face and body.", timeToResults: "7–14 days post-peel" },
      { name: "AquaFirme Facials", href: "/services/aquafirme-facials", invasiveness: "non-invasive", description: "4-step hydrodermabrasion with exfoliation, extraction, hydration, and serums.", timeToResults: "Immediate" },
    ],
  },
  {
    id: "volume-wrinkles",
    label: "Volume loss, wrinkles, or facial contour",
    treatments: [
      { name: "Neuromodulators (Botox)", href: "/services/neuromodulators", invasiveness: "minimally-invasive", description: "Botulinum toxin for dynamic wrinkle reduction. Results visible in 3–5 days.", timeToResults: "3–7 days" },
      { name: "Dermal Fillers", href: "/services/dermal-fillers", invasiveness: "minimally-invasive", description: "HA and biostimulatory fillers for volume restoration, contour, and structural support.", timeToResults: "Immediate to 4 weeks" },
      { name: "Vampire Facial / PRP", href: "/services/vampire-facial-prp", invasiveness: "minimally-invasive", description: "Autologous PRP combined with microneedling — your own growth factors reinjected.", timeToResults: "4–6 weeks" },
      { name: "Cellenis PRP Gel Filler", href: "/services/cellenis-prp-gel-filler", invasiveness: "minimally-invasive", description: "Autologous gel filler from your own plasma — no synthetic materials.", timeToResults: "2–4 weeks" },
    ],
  },
  {
    id: "hair",
    label: "Hair thinning or hair loss",
    treatments: [
      { name: "DeRive Hair Restoration", href: "/services/derive-hair-restoration", invasiveness: "minimally-invasive", description: "EXO|E Exosome technology for scalp and follicle regeneration. Hormone-free.", timeToResults: "3–6 months" },
      { name: "Laser Hair Removal", href: "/services/laser-hair-removal", invasiveness: "non-invasive", description: "Motus AZ system for permanent hair reduction — all skin types.", timeToResults: "After session 2–3" },
    ],
  },
  {
    id: "sexual-wellness",
    label: "Sexual wellness or intimate health",
    treatments: [
      { name: "O-Shot", href: "/services/o-shot", invasiveness: "minimally-invasive", description: "Autologous PRP for female sexual wellness and stress urinary incontinence. Investigational.", timeToResults: "2–6 weeks" },
      { name: "Erectile Dysfunction", href: "/services/erectile-dysfunction", invasiveness: "minimally-invasive", description: "Comprehensive evaluation including hormonal, vascular, and psychological factors with evidence-based treatment.", timeToResults: "Varies by treatment" },
    ],
  },
  {
    id: "hydration-recovery",
    label: "Fatigue, dehydration, or nutrient replenishment",
    treatments: [
      { name: "IV Hydration Therapy", href: "/services/iv-hydration", invasiveness: "minimally-invasive", description: "8 formulas including Myers Cocktail, NAD+, Rehydrate, and Vitaglow — administered in-office.", timeToResults: "During / same session" },
      { name: "Low-Level Light Therapy", href: "/services/low-level-light-therapy", invasiveness: "non-invasive", description: "LED wavelength therapy for cellular energy production and recovery.", timeToResults: "Series of sessions" },
    ],
  },
];

const INVASIVENESS_LABELS = {
  "non-invasive": { label: "Non-invasive", color: "#4A7C59" },
  "minimally-invasive": { label: "Minimally invasive", color: "var(--color-teal)" },
  "procedural": { label: "Procedural", color: "var(--color-gold)" },
};

export default function TreatmentFinder() {
  const [selected, setSelected] = useState<string | null>(null);

  const concern = CONCERNS.find((c) => c.id === selected);

  return (
    <div style={{ background: "#fff", borderRadius: "8px", padding: "48px clamp(24px, 5vw, 56px)" }}>
      <div style={{ marginBottom: "32px" }}>
        <div className="eyebrow" style={{ marginBottom: "12px" }}>Treatment Finder</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "8px" }}>What is your primary concern?</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.7 }}>Select the area that matters most to you — we will show you relevant options ranked by invasiveness.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "36px" }} className="concern-grid">
        {CONCERNS.map((c) => (
          <button key={c.id} onClick={() => setSelected(c.id === selected ? null : c.id)} style={{ textAlign: "left", padding: "16px 18px", borderRadius: "6px", border: selected === c.id ? "2px solid var(--color-teal)" : "1.5px solid var(--color-divider)", background: selected === c.id ? "rgba(14,61,77,0.04)" : "#fff", color: "var(--color-ink)", fontSize: "0.85rem", cursor: "pointer", lineHeight: 1.4, transition: "border-color 0.15s", fontFamily: "var(--font-body)", fontWeight: selected === c.id ? 500 : 400 }}>
            {c.label}
          </button>
        ))}
      </div>

      {concern && (
        <div>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 500, marginBottom: "16px" }}>Matching treatments — {concern.treatments.length} options</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {concern.treatments.map((t) => {
              const tag = INVASIVENESS_LABELS[t.invasiveness];
              return (
                <div key={t.href} style={{ background: "var(--color-stone)", borderRadius: "6px", padding: "20px 22px", display: "grid", gridTemplateColumns: "1fr auto", gap: "16px", alignItems: "center" }} className="treatment-row">
                  <div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "6px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 400, color: "var(--color-ink)" }}>{t.name}</span>
                      <span style={{ fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: tag.color, border: `1px solid ${tag.color}`, padding: "2px 8px", borderRadius: "100px", fontWeight: 500 }}>{tag.label}</span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.6, marginBottom: "4px" }}>{t.description}</p>
                    <span style={{ fontSize: "0.68rem", color: "var(--color-muted-light)" }}>Results: {t.timeToResults}</span>
                  </div>
                  <Link href={t.href} style={{ background: "var(--color-teal)", color: "#fff", padding: "10px 16px", borderRadius: "6px", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }}>Learn More</Link>
                </div>
              );
            })}
          </div>
          <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "13px 26px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>Book a Consultation</a>
        </div>
      )}
      <style>{`.concern-grid { grid-template-columns: 1fr 1fr; } .treatment-row { grid-template-columns: 1fr auto; } @media (max-width: 640px) { .concern-grid { grid-template-columns: 1fr !important; } .treatment-row { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
