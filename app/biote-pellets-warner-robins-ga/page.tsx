import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Biote Pellet Therapy Warner Robins GA | Bioidentical Hormones | Revitalize",
  description: "Biote pellet therapy in Warner Robins, GA at Revitalize Aesthetics & Wellness. Certified Platinum Biote provider Travis Woodley. Call (478) 366-1244.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Biote Pellets Warner Robins GA",
    description: "Biote bioidentical hormone pellet therapy in Warner Robins, Georgia by Certified Platinum Biote provider Travis Woodley.",
    address: { "@type": "PostalAddress", streetAddress: "840 SR 96, Suite 3300", addressLocality: "Warner Robins", addressRegion: "GA", postalCode: "31088" },
    telephone: SITE.phone.warnerRobins,
    url: `${SITE.url}/biote-pellets-warner-robins-ga`,
  };

  return (
    <LocationSEOPage
      city="Warner Robins"
      service="Biote Pellet Therapy"
      serviceHref="/services/biote-pellet-therapy"
      headline="Biote Pellet Therapy in Warner Robins, GA"
      subheadline="Bioidentical hormone pellets in Middle Georgia — Certified Platinum Biote provider"
      intro="Revitalize Aesthetics & Wellness brings Biote pellet therapy to Warner Robins and Middle Georgia. Travis Woodley, MSN, RN, CRNP — a Certified Platinum Biote provider — oversees all hormone treatments at both our Columbus and Warner Robins locations."
      bodyParagraphs={[
        "For Middle Georgia patients who have been traveling to Atlanta or Columbus for Biote pellet therapy, the Warner Robins location at 840 SR 96 provides the same level of clinical care without the drive. The clinical standard is identical — the same labs, the same dosing algorithm, the same insertion technique, the same follow-up protocol.",
        "Biote bioidentical hormone pellets are made from plant-derived hormones — primarily testosterone and estradiol — that are molecularly identical to the hormones your body produces. They are inserted subcutaneously in a brief in-office procedure and dissolve completely over 3–6 months. Unlike pills, patches, or injections, pellets respond to your body's physiological demand for hormones.",
        "Travis's Platinum certification within the Biote network is not an entry-level credential. It reflects a sustained clinical record of patient outcomes and a level of procedural experience that distinguishes this practice from clinics that added hormone therapy as a revenue service.",
        "Warner Robins patients can begin the process with a consultation and comprehensive labs — the results are reviewed in detail before any treatment recommendation is made. If Biote pellet therapy is appropriate for you, insertion can typically be scheduled within the same week.",
        "Book online or call our Warner Robins location at (478) 366-1244.",
      ]}
      faqs={[
        { q: "Can I get Biote pellets at the Warner Robins location?", a: "Yes. Biote pellet insertion is available at our Warner Robins clinic on SR 96. Travis Woodley oversees all pellet therapy at both Georgia locations." },
        { q: "What is included in the initial hormone evaluation?", a: "A comprehensive hormone panel including testosterone (total and free), estradiol, DHEA-S, SHBG, thyroid markers, and a full metabolic panel. The exact panel is determined by your history and symptoms." },
        { q: "How long until I feel results?", a: "Most patients begin noticing changes in energy and sleep within 2–4 weeks of their first pellet insertion. Full optimization may take 2–3 cycles as dosing is refined." },
        { q: "Are there any activity restrictions after insertion?", a: "For the first 72 hours, we recommend avoiding lower body exercise, hot tubs, and swimming. Most patients return to normal daily activity the same day." },
      ]}
      relatedServices={[
        { label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" },
        { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" },
        { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
      ]}
      schema={schema}
    />
  );
}
