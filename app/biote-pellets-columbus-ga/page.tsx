import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Biote Pellet Therapy Columbus GA | Bioidentical Hormones | Revitalize",
  description: "Biote pellet therapy in Columbus, GA at Revitalize Aesthetics & Wellness. Certified Platinum Biote provider Travis Woodley, MSN, RN, CRNP. Call (762) 261-3880.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Biote Pellets Columbus GA",
    description: "Biote bioidentical hormone pellet therapy in Columbus, Georgia by Certified Platinum Biote provider Travis Woodley.",
    address: { "@type": "PostalAddress", streetAddress: "6901 Ray Wright Way, Suite I", addressLocality: "Columbus", addressRegion: "GA", postalCode: "31909" },
    telephone: SITE.phone.columbus,
    url: `${SITE.url}/biote-pellets-columbus-ga`,
  };

  return (
    <LocationSEOPage
      city="Columbus"
      service="Biote Pellet Therapy"
      serviceHref="/services/biote-pellet-therapy"
      headline="Biote Pellet Therapy in Columbus, GA"
      subheadline="Bioidentical hormone pellets — continuous delivery, no compliance burden, lab-guided dosing"
      intro="Revitalize Aesthetics & Wellness is the Columbus, Georgia home of Biote pellet therapy — administered by Travis Woodley, MSN, RN, CRNP, a Certified Platinum Biote provider."
      bodyParagraphs={[
        "Of all the hormone delivery methods available — pills, patches, creams, injections, pellets — Biote bioidentical hormone pellets are unique in one important way: they respond to your body's demand. When your heart rate rises during exertion or stress, blood flow through the subcutaneous tissue increases and more hormone is absorbed. At rest, absorption slows. No other delivery method produces this physiologic regulation.",
        "The Platinum designation Travis holds within the Biote provider network reflects clinical volume, demonstrated outcomes, and advanced training — not just completion of an introductory certification. When you receive Biote pellet therapy at Revitalize Columbus, you are being treated by one of the most experienced Biote providers in Georgia.",
        "The insertion procedure is a brief in-office visit — typically 15 minutes. A small area near the upper buttock is numbed, a tiny incision is made, the pellet is placed subcutaneously, and the site is closed with a small bandage. No sutures. Most patients return to normal activity the same day with minor restrictions for the first 72 hours.",
        "Pellets are fully bioidentical — plant-derived hormones with the same molecular structure as the hormones your body produces. They dissolve completely over 3–6 months. Nothing is left behind.",
        "Dosing is calculated using Biote's proprietary algorithm combined with Travis's clinical assessment of your labs, symptoms, weight, and body composition. Follow-up labs are repeated each cycle to refine dosing based on your response.",
        "Columbus patients seeking Biote pellet therapy can book a consultation online or call (762) 261-3880.",
      ]}
      faqs={[
        { q: "What is the difference between Biote and other hormone pellet providers?", a: "Biote is a clinical framework with standardized insertion protocols, proprietary dosing software, and provider certification requirements. Not all pellet therapy is Biote. Travis Woodley holds Platinum certification — the highest level in the Biote network." },
        { q: "How often are pellets inserted?", a: "Women typically return every 3–5 months. Men typically return every 4–6 months. Timing is determined by your response and lab values at follow-up." },
        { q: "Does the insertion hurt?", a: "The area is numbed with a local anesthetic before insertion. Most patients describe feeling pressure but not pain. The procedure takes approximately 15 minutes." },
        { q: "Can I do Biote pellets if I have never done hormone therapy before?", a: "Yes. Many patients start with Biote pellets as their first hormone therapy. Comprehensive labs are reviewed before any treatment recommendation is made." },
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
