import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import ServiceImagePlaceholder from "@/components/ServiceImagePlaceholder";

export const metadata: Metadata = {
  title: "Laser Hair Removal | Motus AZ | Columbus & Warner Robins, GA",
  description:
    "Laser hair removal with the Motus AZ system in Columbus and Warner Robins, Georgia. Works across a wide range of skin tones. Series-based treatment for long-term reduction.",
};

export default function LaserHairRemoval() {
  return (
    <>
      <ServicePage
        hero={{
        eyebrow: "Aesthetics — Columbus & Warner Robins, GA",
        headline: "Laser Hair<br /><em>Removal</em>",
        subheadline: "Long-term hair reduction using the Motus AZ system — a modern laser platform capable of treating a wide range of skin tones with minimal discomfort.",
        heroKeyword: "Laser Hair Removal Columbus GA",
      }}
      intro={{
        problem: "Shaving, waxing, threading, and epilating are maintenance activities — they address the symptom temporarily but never the root. Laser hair removal targets the hair follicle directly, delivering energy that disrupts the follicle's ability to produce hair. After a completed series, most patients see a significant and lasting reduction in hair growth in the treated area. Many describe it as one of the most practical aesthetic investments they have made.",
        what: "We use the Motus AZ laser system, which delivers energy at a wavelength and with delivery technology designed to reduce discomfort compared to older laser platforms. The Motus AZ is capable of treating a wide range of skin tones safely — including skin types that historically presented higher risks with traditional laser hair removal systems.",
        how: "The treatment area is shaved twenty-four hours before your appointment. The handheld device is applied in passes over the treatment area, delivering laser energy to targeted follicles. A cooling mechanism reduces the heat sensation. Sessions take fifteen to sixty minutes or more depending on the size of the treatment area. Most patients describe tolerable, brief heat sensations. A series of sessions is required because hair follicles cycle through growth phases, and laser energy is most effective in the active growth phase.",
      }}
      candidacy={{
        good: [
          "Adults seeking long-term reduction in hair growth on the face, body, or extremities",
          "Those tired of the ongoing time and cost of shaving, waxing, or other temporary removal methods",
          "Patients with dark hair — laser hair removal is most effective when there is contrast between hair and skin tone",
          "Most skin tones — the Motus AZ system accommodates a wider range than older platforms",
          "Those who can commit to a series of sessions spaced several weeks apart",
        ],
        notFor: [
          "Pregnancy — hair removal is deferred until after delivery",
          "Patients taking photosensitizing medications — requires review and possible dose adjustment",
          "Active skin infections or irritation in the treatment area",
          "Recent tattoos in the treatment field",
          "Those with light blonde, red, or gray hair — laser energy targets pigment, and results are reduced with lighter hair",
        ],
      }}
      whatToExpect={[
        "Consultation: We assess your skin type, hair characteristics, and treatment area. We give you a realistic expectation for the number of sessions needed and what reduction you can expect.",
        "Preparation: Shave the treatment area twenty-four hours before your appointment. Avoid waxing, threading, or any removal method that removes the hair from the follicle for at least four weeks before treatment. Avoid sun exposure to the treatment area.",
        "Treatment session: The Motus AZ device is passed over the treatment area in a series of passes. You will feel brief heat sensations with each pulse. Sessions take fifteen to sixty or more minutes.",
        "After treatment: The skin may appear mildly red and feel like a mild sunburn. This typically resolves within a few hours to a day. Avoid sun exposure to the treated area and apply SPF.",
        "Between sessions: You will likely see some continued shedding of treated hairs over two to three weeks. Shaving is fine between sessions. Do not wax or thread.",
        "After your series: Most patients complete four to eight sessions to see significant reduction. Maintenance sessions may be recommended annually for some patients.",
      ]}
      relatedServices={[
        { name: "AquaFirme Facials", href: "/services/aquafirme-facials" },
        { name: "Microneedling", href: "/services/microneedling" },
        { name: "DE|RIVE Hair Restoration", href: "/services/derive-hair-restoration" },
      ]}
      relatedPosts={[
        { title: "How to Choose a Medical Spa in Columbus GA", href: "/blog/how-to-choose-medical-spa-columbus-ga" },
      ]}
      faqs={[
        {
          q: "How many sessions do I need?",
          a: "Most patients need four to eight sessions to achieve significant reduction. The exact number depends on your hair color, hair density, skin type, and the treatment area. Hair follicles cycle through growth phases, and each session targets the follicles in the active growth phase. This is why sessions must be spaced apart — to catch each follicle at the right phase.",
        },
        {
          q: "Is laser hair removal permanent?",
          a: "Laser hair removal produces long-term reduction, not guaranteed permanent elimination. For most patients, a completed series results in substantial reduction that can last years. Some follicles may produce finer, lighter regrowth over time. Maintenance sessions once or twice a year can sustain results for those who want maximum reduction.",
        },
        {
          q: "Does it work on all skin tones?",
          a: "The Motus AZ system uses a wavelength and delivery technology that accommodates a wider range of skin tones than older platforms. However, the most effective outcomes remain with darker hair against lighter skin because the laser targets pigment contrast. At your consultation, we assess your skin type and give you an honest expectation of what you can expect.",
        },
        {
          q: "Is it painful?",
          a: "Most patients describe tolerable brief heat sensations — significantly less uncomfortable than older laser systems. The Motus AZ uses a cooling mechanism that reduces discomfort during treatment. Sensitive areas may be more uncomfortable than others.",
        },
        {
          q: "Do you offer laser hair removal at both locations?",
          a: "Yes. Laser hair removal is available at both our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
        },
      ]}
        disclaimer="Laser hair removal results vary by individual, hair type, and skin tone. Long-term reduction is likely for most appropriate candidates; permanent elimination is not guaranteed. A series of sessions is required. Consultation required to confirm candidacy."
      />
      <ServiceImagePlaceholder
        eyebrow="Treatment equipment"
        title="Motus AZ platform context"
        description="This section is being replaced with custom device-context photography captured to match this treatment page."
        plannedImageSet="P04 - Service Hero System (Skin Resurfacing and Device Context)"
      />
    </>
  );
}
