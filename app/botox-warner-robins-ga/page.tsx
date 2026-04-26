import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Botox Warner Robins GA | Neuromodulators | Revitalize Aesthetics",
  description: "Botox and neuromodulators in Warner Robins, GA at Revitalize Aesthetics & Wellness. Clinician-administered, natural results. Call (478) 366-1244.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Botox Warner Robins GA",
    description: "Botox and neuromodulator injections in Warner Robins, Georgia administered by licensed clinical staff.",
    address: { "@type": "PostalAddress", streetAddress: "840 SR 96, Suite 3300", addressLocality: "Warner Robins", addressRegion: "GA", postalCode: "31088" },
    telephone: SITE.phone.warnerRobins,
    url: `${SITE.url}/botox-warner-robins-ga`,
  };

  return (
    <LocationSEOPage
      city="Warner Robins"
      service="Botox / Neuromodulators"
      serviceHref="/services/neuromodulators"
      headline="Botox in Warner Robins, GA"
      subheadline="Precise neuromodulator injections — clinical training, natural results"
      intro="Revitalize Aesthetics & Wellness provides Botox and neuromodulator injections in Warner Robins, Georgia. The same clinical standard as our Columbus location — anatomy-based injection technique, individualized dosing, and a commitment to results that look like you at your best."
      bodyParagraphs={[
        "Warner Robins patients looking for Botox have more options than they did five years ago — but fewer of those options involve clinical staff with the anatomy training and advanced practice background that produce consistent, natural-looking results. Revitalize is a medical practice, not a spa with a Botox add-on.",
        "Neuromodulators work by temporarily relaxing the muscles responsible for dynamic expression lines — forehead lines, the '11 lines' between the brows, crow's feet, and others. Applied correctly, the result is a softening of the lines most visible at rest without affecting the facial movement that gives expression.",
        "The Warner Robins location offers the same full menu of neuromodulator treatments as Columbus: forehead, glabella, crow's feet, brow lift, lip lines, neck bands, masseter (jaw slimming and TMJ tension), gummy smile, chin, and hyperhidrosis (excessive sweating).",
        "Results typically appear within 3–5 days and reach full effect at 2 weeks. Duration is 3–4 months for most patients. Follow-up appointments ensure results are maintained and dosing can be refined over time.",
        "Warner Robins patients can book a neuromodulator appointment online or call (478) 366-1244.",
      ]}
      faqs={[
        { q: "How is Botox at a medical clinic different from a spa?", a: "At Revitalize, injections are administered by clinical staff trained in anatomy and advanced practice medicine. The clinical evaluation before treatment, the injection technique, and the follow-up all reflect that background." },
        { q: "What neuromodulator products are available?", a: "We use FDA-approved neuromodulators including Botox (onabotulinumtoxinA), Dysport, and Xeoform depending on the treatment area and your clinical needs. Your provider will recommend the appropriate product." },
        { q: "How long does the appointment take?", a: "The consultation and injection typically take 20–30 minutes. If you are a returning patient with a stable protocol, the appointment may be shorter." },
        { q: "What should I avoid after Botox injections?", a: "Avoid lying flat, vigorous exercise, and significant heat exposure for 4 hours after treatment. Avoid rubbing the treated areas for 24 hours. Your provider will give you complete aftercare instructions." },
      ]}
      relatedServices={[
        { label: "Dermal Fillers", href: "/services/dermal-fillers" },
        { label: "AquaFirme Facials", href: "/services/aquafirme-facials" },
        { label: "VI Peel", href: "/services/vi-peel" },
      ]}
      schema={schema}
    />
  );
}
