import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dermal Fillers Columbus GA | Lip & Face Fillers | Revitalize",
  description: "Dermal fillers in Columbus, GA at Revitalize Aesthetics & Wellness. Hyaluronic acid and biostimulatory fillers for volume, contour, and structural support. Call (762) 261-3880.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Dermal Fillers Columbus GA",
    description: "Dermal filler injections in Columbus, Georgia for facial volume restoration, lip enhancement, and structural support.",
    address: { "@type": "PostalAddress", streetAddress: "6901 Ray Wright Way, Suite I", addressLocality: "Columbus", addressRegion: "GA", postalCode: "31909" },
    telephone: SITE.phone.columbus,
    url: `${SITE.url}/dermal-fillers-columbus-ga`,
  };

  return (
    <LocationSEOPage
      city="Columbus"
      service="Dermal Fillers"
      serviceHref="/services/dermal-fillers"
      headline="Dermal Fillers in Columbus, GA"
      subheadline="Volume restoration and facial contouring with medical-grade precision"
      intro="Revitalize Aesthetics & Wellness offers dermal filler injections in Columbus, Georgia — hyaluronic acid fillers for immediate volume, and biostimulatory options that build structural support over time."
      bodyParagraphs={[
        "Volume loss is one of the primary structural changes associated with facial aging. The fat pads that give the midface its youthful projection gradually shift and diminish. Dermal fillers replace what has been lost — restoring volume, supporting the overlying tissue, and correcting the shadows and hollows that make a face look tired.",
        "At Revitalize, filler is placed with an understanding of facial anatomy developed through clinical training, not aesthetics-school shortcuts. The goal is a result that looks like you at your best — not a face that looks filled.",
        "We use hyaluronic acid fillers (including Juvederm and Restylane families) for immediate, reversible volume and contour. For patients seeking longer-duration structural support, biostimulatory options like Sculptra and Radiesse stimulate the body's own collagen production and build support over several months.",
        "Common treatment areas include the cheeks and midface, lips (volume, definition, and vertical lines), nasolabial folds, marionette lines, jawline, chin, and under-eye hollows. Treatment is customized based on your anatomy and goals — a single area or a comprehensive approach.",
        "Columbus patients can book a filler consultation online or call (762) 261-3880.",
      ]}
      faqs={[
        { q: "How long do dermal fillers last?", a: "Hyaluronic acid fillers typically last 6–18 months depending on product, placement, and individual metabolism. Biostimulatory fillers build results over 2–3 months and can last 2 years or more." },
        { q: "Can dermal fillers be reversed?", a: "Hyaluronic acid fillers can be dissolved with hyaluronidase. Biostimulatory fillers cannot be reversed — which is why precise placement and an experienced injector matter." },
        { q: "What is the difference between fillers and Botox?", a: "Botox relaxes the muscles that create dynamic wrinkles (expression lines). Fillers replace volume and provide structural support. They address different problems and are often used together for comprehensive results." },
        { q: "Is there downtime after filler injections?", a: "Most patients experience mild swelling and possible bruising for 2–5 days. Lips may be more swollen initially. Most patients return to normal activity immediately, with full results visible within 1–2 weeks." },
      ]}
      relatedServices={[
        { label: "Neuromodulators (Botox)", href: "/services/neuromodulators" },
        { label: "Cellenis PRP Gel Filler", href: "/services/cellenis-prp-gel-filler" },
        { label: "Vampire Facial / PRP", href: "/services/vampire-facial-prp" },
      ]}
      schema={schema}
    />
  );
}
