import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Laser Hair Removal Columbus GA | Motus AZ | Revitalize Aesthetics",
  description: "Laser hair removal in Columbus, GA at Revitalize Aesthetics & Wellness. Motus AZ system — all skin types, permanent reduction. Book online or call (762) 261-3880.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Laser Hair Removal Columbus GA",
    description: "Laser hair removal in Columbus, Georgia using the Motus AZ system for all skin types.",
    address: { "@type": "PostalAddress", streetAddress: "6901 Ray Wright Way, Suite I", addressLocality: "Columbus", addressRegion: "GA", postalCode: "31909" },
    telephone: SITE.phone.columbus,
    url: `${SITE.url}/laser-hair-removal-columbus-ga`,
  };

  return (
    <LocationSEOPage
      city="Columbus"
      service="Laser Hair Removal"
      serviceHref="/services/laser-hair-removal"
      headline="Laser Hair Removal in Columbus, GA"
      subheadline="Permanent hair reduction with the Motus AZ system — all skin tones"
      intro="Revitalize Aesthetics & Wellness offers laser hair removal in Columbus, Georgia using the Motus AZ system — a dual-wavelength platform that delivers effective, comfortable treatment across all skin types, including darker skin tones that older systems could not safely treat."
      bodyParagraphs={[
        "Laser hair removal works by delivering light energy that is selectively absorbed by the melanin in hair follicles. The absorbed energy converts to heat, damaging the follicle's ability to produce future hair growth. With repeated sessions timed to the hair growth cycle, the result is permanent reduction.",
        "The Motus AZ system at Revitalize Columbus uses both Alexandrite (755nm) and Nd:YAG (1064nm) wavelengths. The Alexandrite is highly effective for lighter skin tones. The Nd:YAG penetrates deeper and carries less melanin absorption risk, making it appropriate for medium to dark skin tones that have historically been underserved by laser hair removal clinics.",
        "Common treatment areas include legs, underarms, bikini and Brazilian, back, chest, abdomen, face (upper lip, chin, sideburns), neck, and arms. Full-body packages and individual area sessions are both available.",
        "Most patients require 6–8 sessions to achieve significant permanent reduction. Sessions are spaced 4–6 weeks apart to align with the hair growth cycle. Maintenance sessions may be needed annually for some areas.",
        "Columbus patients can book laser hair removal online or call (762) 261-3880.",
      ]}
      faqs={[
        { q: "Does laser hair removal work on all skin types?", a: "At Revitalize Columbus, yes. The Motus AZ system includes an Nd:YAG 1064nm wavelength specifically designed for medium to dark skin tones. We treat all Fitzpatrick skin types." },
        { q: "How many sessions are needed?", a: "Most patients achieve significant permanent reduction in 6–8 sessions. Facial hair typically requires more sessions than body areas. Individual variation is common." },
        { q: "Is laser hair removal painful?", a: "The Motus AZ system is designed for comfort. Most patients describe a snapping or warm sensation. Topical numbing is available for sensitive areas. It is generally more comfortable than older systems." },
        { q: "Can I be treated if I have a tan?", a: "Active tan or sun exposure increases the risk of pigment changes. We recommend avoiding sun exposure and self-tanner for 2 weeks before treatment. Your provider will assess your skin before each session." },
      ]}
      relatedServices={[
        { label: "DeRive Hair Restoration", href: "/services/derive-hair-restoration" },
        { label: "AquaFirme Facials", href: "/services/aquafirme-facials" },
        { label: "Fractional CO2 Laser", href: "/services/fractional-co2-laser" },
      ]}
      schema={schema}
    />
  );
}
