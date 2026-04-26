import type { Metadata } from "next";
import LocationSEOPage from "@/components/LocationSEOPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hormone Therapy Warner Robins GA | Biote & HRT | Revitalize",
  description: "Hormone therapy in Warner Robins, GA at Revitalize Aesthetics & Wellness. Bioidentical HRT, Biote pellets, lab-guided dosing for men and women. Call (478) 366-1244.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Revitalize Aesthetics & Wellness — Hormone Therapy Warner Robins GA",
    description: "Bioidentical hormone therapy in Warner Robins, Georgia for men and women, including Biote pellet therapy.",
    address: { "@type": "PostalAddress", streetAddress: "840 SR 96, Suite 3300", addressLocality: "Warner Robins", addressRegion: "GA", postalCode: "31088" },
    telephone: SITE.phone.warnerRobins,
    url: `${SITE.url}/hormone-therapy-warner-robins-ga`,
  };

  return (
    <LocationSEOPage
      city="Warner Robins"
      service="Hormone Therapy"
      serviceHref="/services/hormone-therapy-women"
      headline="Hormone Therapy in Warner Robins, GA"
      subheadline="Comprehensive hormone optimization for men and women — Middle Georgia"
      intro="Revitalize Aesthetics & Wellness now serves Warner Robins and Middle Georgia with the same comprehensive hormone therapy protocols as our Columbus location — lab-guided, bioidentical, and supervised by Travis Woodley, MSN, RN, CRNP."
      bodyParagraphs={[
        "Hormone imbalance is one of the most under-diagnosed and undertreated conditions in primary care. Patients in the Warner Robins area describe the same experience as those in Columbus: years of being told their labs are 'normal' while feeling progressively worse. Fatigue. Sleep disruption. Brain fog. Weight gain. Low libido. These are not the unavoidable consequences of getting older — they are the consequences of hormone levels that are declining while the reference ranges used to evaluate them are set too broadly.",
        "At our Warner Robins location, hormone therapy begins with comprehensive labs — total and free testosterone, estradiol, progesterone, SHBG, DHEA, thyroid, and a full metabolic panel. We are evaluating for optimal function, not just for values that fall within the bottom third of the normal range.",
        "Treatment options include Biote bioidentical hormone pellets (the preferred method for most patients due to their physiological delivery profile), as well as topical creams, injections, and other delivery formats depending on clinical indication.",
        "Middle Georgia patients no longer need to drive to Columbus for access to this level of hormone management. Our Warner Robins clinic on SR 96 offers the same clinical standard, the same protocols, and the same physician oversight.",
        "Warner Robins patients can book a hormone consultation online or call (478) 366-1244.",
      ]}
      faqs={[
        { q: "Is hormone therapy appropriate for me?", a: "If you are experiencing fatigue, sleep disruption, mood changes, weight gain, brain fog, or reduced libido — particularly if these symptoms have been progressive over months or years — hormone evaluation is appropriate. A consultation and lab panel will clarify whether hormone therapy is indicated." },
        { q: "Are Biote pellets available in Warner Robins?", a: "Yes. Biote pellet insertion is available at our Warner Robins location. Travis Woodley is a Certified Platinum Biote provider." },
        { q: "Do I need to be referred by my primary care physician?", a: "No referral is required. You can book directly online or by calling our Warner Robins location." },
        { q: "How is Revitalize different from my primary care doctor for hormone management?", a: "Primary care providers typically screen for hormone deficiency using broad reference ranges and treat with standardized protocols. At Revitalize, hormone management is a clinical specialty — we use comprehensive panels, individualized dosing, and ongoing monitoring to optimize function rather than simply treat deficiency." },
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
