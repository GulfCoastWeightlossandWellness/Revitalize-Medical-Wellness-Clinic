import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Biote Pellet Therapy | Platinum Provider | Columbus & Warner Robins, GA",
  description:
    "Biote bioidentical hormone pellet therapy in Columbus and Warner Robins, Georgia. Travis Woodley is a Certified Platinum Biote provider. Men and women. Lab-guided dosing.",
};

export default function BiotePelletTherapy() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Hormone Therapy — Columbus & Warner Robins, GA",
        headline: "Biote Pellet Therapy —<br /><em>Platinum Provider</em>",
        subheadline: "Bioidentical hormone pellets designed for steady, low-maintenance hormone delivery. Travis Woodley is a Certified Platinum Biote provider — one of the highest designations available in the Biote network.",
        heroKeyword: "Biote Pellets Columbus GA",
      }}
      intro={{
        problem: "The challenge with most hormone delivery methods — creams, patches, oral capsules, injections — is that they create peaks and troughs. You apply, absorb, and then the levels drop before the next dose. Your mood, energy, and body feel the swings. The Biote pellet method was developed specifically to address this. It delivers a consistent, physiologic level of hormones around the clock — more closely mimicking what your body did when it was producing them optimally.",
        what: "Biote pellets are tiny, rice-grain-sized implants made from plant-derived hormones that are bioidentical to human estradiol and testosterone. They are inserted subcutaneously in a brief in-office procedure and dissolve gradually over three to five months. Your body draws from the pellet as it needs — absorbing more during exercise or stress, and less at rest. No pills. No patches. No daily compliance. Nothing is left behind when the pellet is fully absorbed.",
        how: "As a Certified Platinum Biote provider, Travis Woodley uses Biote's proprietary dosing algorithms combined with his clinical assessment to calculate your personalized dose. The process begins with comprehensive lab work — not just total testosterone and estradiol, but a full panel including SHBG, DHEA, thyroid, metabolic markers, and others relevant to your specific picture. The insertion procedure takes approximately fifteen minutes. A small area is numbed, a tiny incision is made, the pellet is inserted, and the area is closed with a small bandage. Follow-up labs are drawn at three to five months to assess response and calibrate the next dose.",
      }}
      candidacy={{
        good: [
          "Men and women with confirmed hormone deficiency on lab work",
          "Those who have struggled with compliance on oral or topical hormone preparations",
          "Patients who want a low-maintenance delivery method with consistent hormone levels",
          "Those who have had variable results with other delivery methods and want to try pellet therapy",
          "Patients who want a clinician with a high level of Biote training and experience",
        ],
        notFor: [
          "Men with active prostate cancer or elevated PSA requiring evaluation",
          "Women with active or recent hormone-sensitive cancer without specialist coordination",
          "Pregnancy or active fertility treatment",
          "Those unwilling to undergo the required lab work before and during treatment",
          "Patients who want to avoid any in-office procedure",
        ],
      }}
      whatToExpect={[
        "Lab work and consultation: Comprehensive hormone and metabolic panel. We review every value with you and explain what your lab results mean for how you are feeling.",
        "Dose calculation: Using Biote's proprietary algorithm combined with your clinical presentation, your individualized dose is calculated. No guessing.",
        "Insertion procedure: Brief, in-office. Local anesthetic is applied. A small incision — typically in the hip or upper buttock — is made. The pellet is placed and the incision is closed. The whole process takes under twenty minutes.",
        "Post-procedure: Minor soreness and bruising around the insertion site is common and resolves within a few days. Activity modifications for the first week are provided in writing.",
        "Three to five months: Return for follow-up labs and clinical assessment. We review how you are feeling against your lab values and calculate your next dose. Precision improves with each cycle as we learn how your body metabolizes.",
      ]}
      relatedServices={[
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
        { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
      ]}
      relatedPosts={[
        { title: "What Is Biote Pellet Therapy and How Does It Work", href: "/blog/biote-pellet-therapy-explained" },
        { title: "Signs Your Hormones Are Out of Balance", href: "/blog/signs-hormones-out-of-balance" },
        { title: "What to Expect at Your First Hormone Consultation", href: "/blog/first-hormone-consultation" },
      ]}
      faqs={[
        {
          q: "What does 'Platinum Biote Provider' mean?",
          a: "The Biote Certified Provider designation reflects completion of Biote's training program in bioidentical hormone pellet therapy. Platinum designation is earned through clinical volume, outcome data, and continued education — it represents one of the highest levels of recognition within the Biote provider network. When you choose a Platinum Biote provider, you are choosing someone who has trained extensively in this specific protocol and has demonstrated sustained clinical results.",
        },
        {
          q: "Is Biote covered by insurance?",
          a: "Hormone pellet therapy is typically not covered by insurance and is considered an elective wellness service. We offer payment plan options — see our payment plans page for details. Some patients choose to use HSA or FSA funds for this purpose; we recommend verifying your plan's coverage directly.",
        },
        {
          q: "How long before I feel the effects of the pellet?",
          a: "Most patients begin noticing changes within two to four weeks. The pellet takes time to dissolve and the hormone levels to stabilize. Some effects — improved sleep, early energy shifts — may be noticed sooner. Full optimization is often not achieved until the second or third cycle, once your dose has been calibrated to your biology.",
        },
        {
          q: "Can the pellet be removed if I change my mind?",
          a: "Pellets cannot be removed once inserted — they are designed to dissolve over three to five months. If you experience a side effect or change your mind, the pellet will metabolize and the effects will diminish as your levels return to baseline. This is why the consultation, labs, and clinical assessment before insertion are so important.",
        },
        {
          q: "Do you offer Biote therapy at both Columbus and Warner Robins?",
          a: "Yes. Biote pellet therapy is available at both our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
        },
      ]}
      disclaimer="Biote pellet therapy requires in-person consultation and comprehensive lab work prior to treatment. Individual results vary. This page is for educational purposes and does not constitute medical advice. Travis Woodley is a Certified Platinum Biote Provider — this designation reflects training and clinical experience within the Biote network."
    />
  );
}
