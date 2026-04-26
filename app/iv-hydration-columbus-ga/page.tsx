import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IV Hydration Columbus GA | IV Therapy & NAD+ | Revitalize",
  description: "IV hydration therapy in Columbus, GA at Revitalize Aesthetics & Wellness. Myers Cocktail, NAD+, Vitaglow, and more. Clinician-supervised. Call (762) 261-3880.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — IV Hydration Columbus GA",
    description: "IV hydration and nutrient therapy in Columbus, Georgia including Myers Cocktail, NAD+, and custom formulas.",
    address: { "@type": "PostalAddress", streetAddress: "6901 Ray Wright Way, Suite I", addressLocality: "Columbus", addressRegion: "GA", postalCode: "31909" },
    telephone: SITE.phone.columbus,
    url: `${SITE.url}/iv-hydration-columbus-ga`,
  };

  return (
    <LocationSEOPage
      city="Columbus"
      service="IV Hydration"
      serviceHref="/services/iv-hydration"
      headline="IV Hydration Therapy in Columbus, GA"
      subheadline="Direct cellular delivery — eight formulas for hydration, recovery, and metabolic support"
      intro="Revitalize Aesthetics & Wellness offers IV hydration and nutrient therapy in Columbus, Georgia, administered in a clinical setting with medical supervision. Eight formulas address hydration, recovery, immune support, energy production, and anti-aging applications."
      bodyParagraphs={[
        "The limitation of oral supplementation is absorption. Most vitamins and nutrients must survive stomach acid, compete for intestinal transporters, and survive first-pass liver metabolism before reaching circulation. IV delivery bypasses this entirely — nutrients are introduced directly into the bloodstream at 100% bioavailability.",
        "Our Columbus clinic offers eight IV formulas: Rehydrate (saline and electrolytes), Immune Boost (high-dose vitamin C), Myers Cocktail (the clinical standard — magnesium, B vitamins, calcium, vitamin C), Energy & Focus, Vitaglow (skin and hair nutrients), NAD+ (cellular energy and neuroprotection), Athletic Recovery, and Hangover Relief.",
        "NAD+ therapy is among the more clinically significant options. Nicotinamide adenine dinucleotide is a coenzyme involved in over 500 enzymatic reactions and is central to mitochondrial energy production. Levels decline with age and with metabolic dysfunction. IV NAD+ replenishes levels directly and is used in contexts ranging from general fatigue to metabolic support.",
        "Sessions take approximately 30–60 minutes depending on the formula. The clinical environment at our Columbus location is designed for comfort — you receive your infusion in a private clinical setting, not a group spa.",
        "Columbus patients can book IV therapy online or call (762) 261-3880.",
      ]}
      faqs={[
        { q: "How long does IV therapy take?", a: "Most sessions take 30–60 minutes depending on the formula and infusion rate. NAD+ sessions may take longer. You are welcome to bring work or reading." },
        { q: "Who administers IV therapy at Revitalize?", a: "IV therapy is administered by clinical staff under medical supervision at our Columbus location. The same clinical standards applied to other treatments apply here." },
        { q: "How often can I do IV therapy?", a: "Frequency depends on your goals and the formula. Hydration and recovery formulas can be done as needed. NAD+ protocols typically involve a series of sessions. Your provider will recommend a cadence." },
        { q: "What is NAD+ and why does it matter?", a: "NAD+ is a coenzyme essential to cellular energy production and DNA repair. Levels decline with age and chronic metabolic stress. IV NAD+ replenishes levels more efficiently than oral supplementation." },
      ]}
      relatedServices={[
        { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { label: "Low-Level Light Therapy", href: "/services/low-level-light-therapy" },
        { label: "Nutritional Counseling", href: "/services/nutritional-counseling" },
      ]}
      schema={schema}
    />
  );
}
