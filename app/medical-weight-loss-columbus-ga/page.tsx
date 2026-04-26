import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Medical Weight Loss Columbus GA | Semaglutide & GLP-1 | Revitalize",
  description: "Medical weight loss in Columbus, GA at Revitalize Aesthetics & Wellness. Supervised 90-day program with GLP-1 medications, metabolic labs, and clinical support. Call (762) 261-3880.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Medical Weight Loss Columbus GA",
    description: "Medical weight loss program in Columbus, Georgia including GLP-1 medications, metabolic evaluation, and supervised treatment.",
    address: { "@type": "PostalAddress", streetAddress: "6901 Ray Wright Way, Suite I", addressLocality: "Columbus", addressRegion: "GA", postalCode: "31909" },
    telephone: SITE.phone.columbus,
    url: `${SITE.url}/medical-weight-loss-columbus-ga`,
  };

  return (
    <LocationSEOPage
      city="Columbus"
      service="Medical Weight Loss"
      serviceHref="/services/medical-weight-loss"
      headline="Medical Weight Loss in Columbus, GA"
      subheadline="A supervised approach to weight loss that actually addresses why the weight is there"
      intro="Revitalize Aesthetics & Wellness offers a clinically supervised medical weight loss program in Columbus, Georgia — not a supplement package or calorie-counting app, but a structured protocol that addresses the metabolic and hormonal factors behind weight that will not move."
      bodyParagraphs={[
        "Most patients who arrive at our Columbus clinic have already tried the conventional approaches — caloric restriction, increased exercise, commercial diet programs. They lost weight, then regained it, or they could not lose it at all despite doing everything correctly on paper. This is not a willpower failure. It is a metabolic one.",
        "Our 90-day medical weight loss program begins with comprehensive labs — not just a basic metabolic panel, but a full evaluation of thyroid function, insulin sensitivity, hormone levels, inflammatory markers, and other factors that directly govern how the body stores and mobilizes fat. Treatment is built from those results.",
        "For patients who qualify, GLP-1 medications including semaglutide are available as part of the protocol. These medications work at the level of the brain's appetite and satiety centers, producing a physiological reduction in hunger that supports sustainable dietary change. They are not a shortcut — they are a tool used within a supervised clinical framework.",
        "The program includes regular clinical check-ins, medication titration, ongoing lab monitoring, and adjustments based on your response. The goal is not to achieve a number on a scale and stop — it is to rebuild a metabolic baseline that makes the results sustainable.",
        "Columbus patients can book a medical weight loss consultation online or call our Columbus location directly at (762) 261-3880.",
      ]}
      faqs={[
        { q: "What is medical weight loss and how is it different from commercial programs?", a: "Medical weight loss is supervised by a licensed clinician and begins with laboratory evaluation of the metabolic and hormonal factors driving your weight. Commercial programs address calories and behavior. Medical weight loss addresses the biology underneath." },
        { q: "Is semaglutide available at Revitalize in Columbus?", a: "Yes. Semaglutide and other GLP-1 receptor agonists are available for qualifying patients as part of the supervised 90-day program. Eligibility is determined after labs and a clinical evaluation." },
        { q: "How long does the medical weight loss program take?", a: "The structured program is 90 days. Many patients continue with maintenance protocols beyond that. The 90-day framework is designed to achieve meaningful metabolic change and establish habits that persist." },
        { q: "Does insurance cover medical weight loss at Revitalize?", a: "Most medical weight loss services, including GLP-1 medications, are not covered by standard insurance. We offer payment plan options. Many patients use HSA or FSA funds for qualifying services." },
        { q: "What labs are included in the initial evaluation?", a: "The initial workup typically includes thyroid function, fasting glucose and insulin, HbA1c, lipid panel, comprehensive metabolic panel, hormone levels, and inflammatory markers. The exact panel is determined clinically." },
      ]}
      relatedServices={[
        { label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" },
        { label: "Nutritional Counseling", href: "/services/nutritional-counseling" },
        { label: "IV Hydration", href: "/services/iv-hydration" },
      ]}
      schema={schema}
    />
  );
}
