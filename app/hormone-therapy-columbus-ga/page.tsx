import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hormone Therapy Columbus GA | Biote & HRT | Revitalize",
  description: "Hormone therapy in Columbus, GA at Revitalize Aesthetics & Wellness. Bioidentical hormone replacement, Biote pellets, lab-guided dosing for men and women. Call (762) 261-3880.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Hormone Therapy Columbus GA",
    description: "Bioidentical hormone therapy and Biote pellet therapy in Columbus, Georgia for men and women.",
    address: { "@type": "PostalAddress", streetAddress: "6901 Ray Wright Way, Suite I", addressLocality: "Columbus", addressRegion: "GA", postalCode: "31909" },
    telephone: SITE.phone.columbus,
    url: `${SITE.url}/hormone-therapy-columbus-ga`,
  };

  return (
    <LocationSEOPage
      city="Columbus"
      service="Hormone Therapy"
      serviceHref="/services/hormone-therapy-women"
      headline="Hormone Therapy in Columbus, GA"
      subheadline="Lab-guided hormone optimization for men and women — not a generic protocol"
      intro="Revitalize Aesthetics & Wellness provides hormone therapy for men and women in Columbus, Georgia. Travis Woodley, MSN, RN, CRNP — a Certified Platinum Biote provider — evaluates each patient individually based on comprehensive labs, not symptom surveys alone."
      bodyParagraphs={[
        "Hormone imbalance does not announce itself with a single dramatic symptom. It accumulates — fatigue that worsens over months, sleep that becomes less restorative, weight that redistributes to the midsection, a mental sharpness that gradually dulls. Most patients who arrive at our Columbus clinic describe it as 'feeling off' for a long time before they connected it to hormones.",
        "Our approach begins with comprehensive laboratory evaluation. We measure total and free testosterone, estradiol, progesterone, DHEA-S, SHBG, thyroid markers, and a full metabolic panel. The goal is not to push your values into a textbook normal range — it is to identify the level at which you feel, function, and sleep well.",
        "We offer multiple delivery options including Biote bioidentical hormone pellets — the only delivery method that responds physiologically to your body's demand. As a Certified Platinum Biote provider, Travis has completed the full provider training and maintains the clinical volume that reflects real-world outcomes.",
        "Hormone therapy at Revitalize is not administered in isolation. We consider the full metabolic picture — sleep, stress, thyroid function, adrenal health, and nutritional status — because hormones do not work in isolation. A testosterone level that looks fine on paper may not be doing its job if SHBG is high or if other factors are suppressing its activity.",
        "Columbus patients can book a hormone consultation online or call (762) 261-3880.",
      ]}
      faqs={[
        { q: "What hormone tests are done before starting hormone therapy?", a: "A comprehensive panel including total and free testosterone, estradiol, progesterone (for women), DHEA-S, SHBG, thyroid markers, and metabolic labs. The exact panel may be adjusted based on your history and symptoms." },
        { q: "Does Revitalize offer Biote pellets in Columbus?", a: "Yes. Travis Woodley is a Certified Platinum Biote provider — one of the highest designations in the network. Biote pellet insertion is available at our Columbus location." },
        { q: "Is hormone therapy available for men?", a: "Yes. Testosterone optimization for men is one of our most common treatments in Columbus. The evaluation and approach differ from women's protocols but the same lab-first philosophy applies." },
        { q: "How long does it take to feel results?", a: "Most patients begin noticing changes in energy, sleep, and mood within 2–4 weeks of starting hormone therapy. Full optimization typically requires 2–3 treatment cycles to fine-tune dosing." },
        { q: "Are bioidentical hormones safer than synthetic hormones?", a: "Bioidentical hormones are molecularly identical to the hormones your body produces. The clinical consensus is that bioidentical preparations, when dosed appropriately based on labs, are the preferred approach. Every patient's situation is unique — a clinical consultation is the right starting point." },
      ]}
      relatedServices={[
        { label: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
        { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" },
      ]}
      schema={schema}
    />
  );
}
