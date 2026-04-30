import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Low Level Light Therapy | LED Therapy | Columbus & Warner Robins, GA",
  description: "Low level light therapy (LED) in Columbus and Warner Robins, GA. Non-invasive, comfortable sessions targeting skin appearance with specific light wavelengths. No heat, no UV.",
};

export default function LowLevelLightTherapy() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Wellness — Columbus & Warner Robins, GA",
        headline: "Low Level<br /><em>Light Therapy</em>",
        subheadline: "Non-invasive LED light therapy delivering specific wavelengths to support skin appearance and cellular health. No heat, no UV exposure, no downtime.",
        heroKeyword: "Light Therapy Columbus GA",
      }}
      intro={{
        problem: "Low level light therapy sits at the gentler end of our treatment spectrum — no downtime, no discomfort, no UV. For patients looking for a low-commitment option to support skin brightness and maintenance, or for those integrating it as part of a broader wellness approach, it offers a genuinely pleasant session with no recovery required.",
        what: "LED light therapy uses specific light wavelengths delivered at low intensities to interact with cellular processes in the skin. Different wavelengths target different chromophores and biological processes. Red light is most commonly used for its association with collagen activity and skin appearance improvements. Near-infrared light penetrates more deeply. Sessions are entirely comfortable — panels are positioned above the skin while you relax.",
        how: "Sessions are scheduled after a brief evaluation to confirm candidacy and select the appropriate wavelength protocol. You lie comfortably while the light panels are positioned over the treatment area. Sessions take ten to thirty minutes. No numbing is needed. No aftercare other than standard sun protection.",
      }}
      candidacy={{
        good: [
          "Adults seeking a gentle, zero-downtime complement to other skin treatments",
          "Those looking to support skin maintenance and brightness between more intensive procedures",
          "Patients integrating light therapy into a holistic wellness approach",
          "Those with sensitivity to more aggressive treatments who need a gentler option",
        ],
        notFor: [
          "Pregnancy — light therapy over large areas is deferred until after delivery",
          "Photosensitizing medications — review required before proceeding",
          "Active skin irritation or inflammatory conditions in the treatment area",
          "Those with light sensitivity conditions",
        ],
      }}
      whatToExpect={[
        "Brief consultation: Candidacy confirmed and wavelength protocol selected.",
        "Session: Panels positioned over the skin. You relax for ten to thirty minutes.",
        "After: No downtime. Skin may appear temporarily brighter or more even. Some patients notice nothing immediately; results build with regular sessions.",
        "Frequency: For most patients, a series of sessions spaced weekly or bi-weekly is recommended before transitioning to maintenance.",
      ]}
      relatedServices={[
        { name: "AquaFirme Facials", href: "/services/aquafirme-facials" },
        { name: "Microneedling", href: "/services/microneedling" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
      ]}
      relatedPosts={[
        { title: "How to Choose a Medical Spa in Columbus GA", href: "/blog/how-to-choose-medical-spa-columbus-ga" },
      ]}
      faqs={[
        {
          q: "How is low level light therapy different from laser?",
          a: "Laser devices deliver concentrated, coherent light that creates controlled tissue effects — ablation, heating, or targeted destruction. Low level light therapy delivers broad, non-coherent light at intensities too low to create thermal effects. The mechanisms and clinical applications are distinct.",
        },
        {
          q: "Is there any evidence for LED light therapy?",
          a: "There is a meaningful body of research on LED photobiomodulation, particularly for red and near-infrared wavelengths and their effects on cellular activity. We represent the treatment accurately — it is a supportive modality with a generally positive evidence profile for certain applications, not a replacement for treatments with more robust clinical data.",
        },
        {
          q: "Is it available at both locations?",
          a: "Yes — Columbus at (762) 261-3880 and Warner Robins at (478) 366-1244.",
        },
      ]}
      disclaimer="Low level light therapy is a cosmetic treatment. Individual results vary. No specific outcomes are guaranteed. Information on this page is educational and does not constitute medical advice."
      assessmentCta={{ label: "Use the Treatment Finder", href: "/tools#treatment-finder" }}
    />
  );
}
