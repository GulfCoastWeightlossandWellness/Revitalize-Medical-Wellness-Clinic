import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "O-Shot | Women's Sexual Wellness | Columbus & Warner Robins, GA",
  description:
    "O-Shot PRP treatment for women's sexual wellness in Columbus and Warner Robins, Georgia. Non-surgical, autologous platelet-rich plasma for improved sensation, arousal, and comfort.",
};

export default function OShot() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Women's Sexual Wellness — Columbus & Warner Robins, GA",
        headline: "O-Shot —<br /><em>Women&apos;s Sexual Wellness</em>",
        subheadline: "A non-surgical, in-office procedure using your own platelet-rich plasma to support circulation and tissue responsiveness in the clitoral and vaginal areas. Private consultation required.",
        heroKeyword: "O-Shot PRP Columbus GA",
      }}
      intro={{
        problem: "Changes in sexual sensation, arousal, lubrication, and orgasm confidence are common as women age — and they are almost never discussed in a clinical setting. Hormonal shifts, reduced blood flow, and tissue changes in the vaginal area can significantly affect sexual function and intimate comfort. Many women have never had these concerns addressed by a provider who takes them seriously.",
        what: "The O-Shot uses platelet-rich plasma (PRP) derived from a small sample of your own blood, which is processed to concentrate the growth factors and then injected into specific areas of the clitoral complex and upper vaginal region using topical anesthetic. The growth factors in the PRP support tissue regeneration, circulation, and nerve sensitivity in the treated areas. It is an autologous procedure — no synthetic materials, no foreign substances.",
        how: "The procedure begins with a private consultation to discuss your concerns, health history, and goals. On the day of treatment, a small blood sample is drawn and processed. Topical anesthetic is applied to the treatment area and given time to work. The PRP is then delivered via fine-needle injection. Most women describe the procedure as tolerable and return to normal activities the same day.",
      }}
      candidacy={{
        good: [
          "Women experiencing reduced sensitivity or difficulty with arousal or orgasm",
          "Those with decreased natural lubrication causing discomfort during intimacy",
          "Women who prefer non-surgical, non-hormonal options for sexual wellness",
          "Those experiencing mild stress urinary incontinence (leakage with coughing, laughing, or exercise)",
          "Patients whose concerns have not been adequately addressed through hormonal approaches alone",
        ],
        notFor: [
          "Active vaginal infections — treatment should be deferred until resolved",
          "Bleeding disorders or anticoagulation therapy that cannot be safely paused",
          "Pregnancy",
          "Certain medical conditions that affect platelet function or healing",
          "Those with expectations of guaranteed outcomes — PRP results are variable",
        ],
      }}
      whatToExpect={[
        "Private consultation: We review your concerns, your health history, and your goals in a private, confidential setting. You will have the opportunity to ask every question you have before any decision is made.",
        "Blood draw: A small sample of blood is drawn and processed in the centrifuge to concentrate the platelets.",
        "Topical anesthetic: Applied to the treatment area approximately thirty minutes before the procedure.",
        "Procedure: Fine-needle injection of the prepared PRP into the target areas. The procedure takes approximately fifteen to twenty minutes.",
        "Recovery: Most women resume normal activities the same day. Mild soreness is possible for a day or two. Sexual activity is typically deferred for twenty-four to forty-eight hours post-procedure.",
        "Timeline for results: Some women notice improvements within days. More significant changes in sensation and arousal typically develop over four to twelve weeks as the PRP's growth factors stimulate tissue regeneration.",
      ]}
      relatedServices={[
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
        { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
      ]}
      relatedPosts={[
        { title: "What Is the O-Shot and Who Is It For", href: "/blog/what-is-the-o-shot" },
        { title: "Signs Your Hormones Are Out of Balance", href: "/blog/signs-hormones-out-of-balance" },
      ]}
      faqs={[
        {
          q: "Is PRP for sexual wellness FDA-approved?",
          a: "PRP for sexual wellness applications is not FDA-approved for this indication and is considered investigational. Many patients choose this treatment based on patient-reported outcomes and the favorable safety profile of autologous PRP. We discuss this status transparently at your consultation, and we never misrepresent the evidence base for any treatment we offer.",
        },
        {
          q: "Is the procedure painful?",
          a: "Topical anesthetic is applied before the procedure, which significantly reduces discomfort. Most women describe the injection sensations as brief and tolerable. Some women find the procedure easier than anticipated; others find the area remains sensitive even with numbing. We take time before the procedure to ensure the anesthetic has taken full effect.",
        },
        {
          q: "How long do the results last?",
          a: "Results vary significantly by individual. Some women report improvements lasting twelve to eighteen months; others find results are less dramatic. A series of two or three treatments spaced several months apart is sometimes recommended for patients seeking more sustained outcomes.",
        },
        {
          q: "Can the O-Shot be combined with hormone therapy?",
          a: "Yes. For many women, hormone optimization and the O-Shot work well together — hormones support the broader tissue environment while PRP addresses local circulation and sensitivity. We discuss the combination approach at consultation.",
        },
        {
          q: "Is this available at both Columbus and Warner Robins?",
          a: "Yes. O-Shot consultations and procedures are available at both our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244. All consultations are private and confidential.",
        },
      ]}
      disclaimer="PRP for sexual wellness (O-Shot) is not FDA-approved for this indication and is considered investigational. Individual results vary significantly. This is not a treatment for medical conditions. Information on this page is educational and does not constitute medical advice. Consultation required."
    />
  );
}
