import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Medical Weight Loss Warner Robins GA | GLP-1 | Revitalize",
  description: "Medical weight loss in Warner Robins, GA at Revitalize Aesthetics & Wellness. Supervised program with GLP-1, metabolic labs, and clinical support. Call (478) 366-1244.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Medical Weight Loss Warner Robins GA",
    description: "Medical weight loss program in Warner Robins, Georgia including GLP-1 medications, metabolic evaluation, and supervised treatment.",
    address: { "@type": "PostalAddress", streetAddress: "840 SR 96, Suite 3300", addressLocality: "Warner Robins", addressRegion: "GA", postalCode: "31088" },
    telephone: SITE.phone.warnerRobins,
    url: `${SITE.url}/medical-weight-loss-warner-robins-ga`,
  };

  return (
    <LocationSEOPage
      city="Warner Robins"
      service="Medical Weight Loss"
      serviceHref="/services/medical-weight-loss"
      headline="Medical Weight Loss in Warner Robins, GA"
      subheadline="A supervised metabolic approach — not another program you have already tried"
      intro="Revitalize Aesthetics & Wellness serves Warner Robins, Georgia with a clinically supervised medical weight loss program. The same 90-day protocol, the same comprehensive lab evaluation, the same clinical philosophy as our Columbus location — now accessible to patients in Middle Georgia."
      bodyParagraphs={[
        "Warner Robins patients dealing with stubborn weight, unexplained weight gain, or weight that has returned after successful loss share a common experience: the standard advice has not worked. The calories-in-calories-out model fails when the underlying metabolism is dysregulated — when thyroid function is suboptimal, when insulin resistance is developing, when hormones have shifted.",
        "Our medical weight loss program at the Warner Robins location begins with comprehensive laboratory evaluation. We assess thyroid function, insulin and glucose metabolism, hormone levels, inflammatory markers, and the full metabolic picture. The treatment protocol is built from those results.",
        "For qualifying patients, GLP-1 medications including semaglutide are available as part of the supervised program. These are not handed out at the first visit — they are one tool in a clinical protocol that includes regular check-ins, lab monitoring, and ongoing adjustment.",
        "The goal is not a temporary result. The goal is a metabolic baseline that holds. Patients who complete the 90-day program leave with a clearer understanding of what was driving their weight gain and a protocol designed to prevent recurrence.",
        "Warner Robins patients can book online or call (478) 366-1244.",
      ]}
      faqs={[
        { q: "Is the Warner Robins location the same program as Columbus?", a: "Yes. The clinical protocols, lab panels, and treatment approach are identical at both locations. Travis Woodley oversees both practices." },
        { q: "Do I need a referral to start medical weight loss?", a: "No referral is needed. You can book a medical weight loss consultation directly online or by calling the Warner Robins location." },
        { q: "What GLP-1 medications are available?", a: "Semaglutide and other GLP-1 receptor agonists are available for qualifying patients. Eligibility is determined after a full clinical evaluation and lab review." },
        { q: "Will my results be maintained after the 90-day program?", a: "Maintenance depends on what drove your weight gain originally. If hormonal or metabolic dysfunction was contributing, addressing those factors — which the program does — supports sustainable results. We provide guidance for the maintenance phase." },
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
