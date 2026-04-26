import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Botox Columbus GA | Neuromodulators | Revitalize Aesthetics",
  description: "Botox and neuromodulators in Columbus, GA at Revitalize Aesthetics & Wellness. Clinician-administered, natural results. Book online or call (762) 261-3880.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Botox Columbus GA",
    description: "Botox and neuromodulator injections in Columbus, Georgia administered by a licensed clinician.",
    address: { "@type": "PostalAddress", streetAddress: "6901 Ray Wright Way, Suite I", addressLocality: "Columbus", addressRegion: "GA", postalCode: "31909" },
    telephone: SITE.phone.columbus,
    url: `${SITE.url}/botox-columbus-ga`,
  };

  return (
    <LocationSEOPage
      city="Columbus"
      service="Botox / Neuromodulators"
      serviceHref="/services/neuromodulators"
      headline="Botox in Columbus, GA"
      subheadline="Clinician-administered neuromodulators — precise, natural-looking results"
      intro="Revitalize Aesthetics & Wellness offers Botox and neuromodulator injections in Columbus, Georgia, administered by clinical staff with a background in anatomy and advanced practice medicine — not aesthetics as a secondary service."
      bodyParagraphs={[
        "Neuromodulators — including Botox — work by temporarily blocking the nerve signals that cause specific muscles to contract. Applied precisely, they smooth dynamic wrinkles (lines formed by repeated facial movement) and can address hyperhidrosis, TMJ-related muscle tension, and other clinical applications beyond cosmetic use.",
        "At Revitalize, every injection starts with a clinical assessment of facial anatomy, muscle movement, skin quality, and your aesthetic goals. The objective is never a frozen appearance — it is a rested, natural result that softens lines without eliminating the expressiveness that makes your face yours.",
        "Common treatment areas include the forehead, glabella (between the brows, the '11 lines'), lateral canthal lines (crow's feet), brow elevation, lip lines, neck bands, masseter (for jaw slimming or TMJ tension), and chin dimpling. Multi-area treatment is common.",
        "Results typically appear within 3–5 days and reach full effect at 10–14 days. Duration is typically 3–4 months for most patients, though individual variation is common. Consistent treatment over time is associated with longer-lasting results.",
        "Columbus patients can book a neuromodulator consultation online or call (762) 261-3880.",
      ]}
      faqs={[
        { q: "How is Botox different at a medical clinic versus a spa?", a: "At Revitalize, injections are administered by clinical staff with advanced anatomy training and medical backgrounds. Dosing, injection technique, and follow-up reflect that clinical standard." },
        { q: "Does Botox hurt?", a: "Most patients describe neuromodulator injections as a minor pinch. A topical numbing agent is available. The procedure takes approximately 15–20 minutes." },
        { q: "How long does Botox last?", a: "Most patients find results last 3–4 months. Patients who treat consistently over multiple cycles often find their results last longer as the targeted muscles gradually weaken with repeated relaxation." },
        { q: "What is the difference between Botox, Dysport, and Xeomin?", a: "All three are botulinum toxin type A neuromodulators with the same mechanism and similar results. Differences lie in formulation, unit dosing, and onset time. Your provider will recommend the appropriate product based on your treatment goals." },
      ]}
      relatedServices={[
        { label: "Dermal Fillers", href: "/services/dermal-fillers" },
        { label: "Vampire Facial / PRP", href: "/services/vampire-facial-prp" },
        { label: "Microneedling", href: "/services/microneedling" },
      ]}
      schema={schema}
    />
  );
}
