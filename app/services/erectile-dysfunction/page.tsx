import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Erectile Dysfunction Treatment | Columbus & Warner Robins, GA",
  description:
    "Erectile dysfunction evaluation and treatment in Columbus and Warner Robins, Georgia. Comprehensive, judgment-free clinical assessment addressing vascular, hormonal, and lifestyle factors.",
};

export default function ErectileDysfunction() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Men's Sexual Wellness — Columbus & Warner Robins, GA",
        headline: "Erectile Dysfunction —<br /><em>A Clinical Conversation</em>",
        subheadline: "A private, judgment-free evaluation that looks at the full picture: vascular health, hormone levels, sleep, medications, and lifestyle — because ED is almost never just one thing.",
        heroKeyword: "Erectile Dysfunction Treatment Columbus GA",
      }}
      intro={{
        problem: "Erectile dysfunction affects a significant percentage of men — and the majority of them never discuss it with a clinician. The reasons vary: embarrassment, resignation to aging, or the assumption that it will resolve on its own. What many men do not know is that new-onset ED in mid-life is sometimes the first visible signal of cardiovascular disease. It is always worth a proper evaluation, not just a prescription.",
        what: "Our approach to ED begins with a systematic evaluation of contributing factors: blood flow and vascular health, hormone levels (testosterone, thyroid, prolactin), sleep quality and apnea risk, current medications with known effects on sexual function, alcohol and nicotine use, psychological and relationship factors, and baseline metabolic health. No single cause is assumed. The evaluation is designed to identify your specific contributors and address them directly.",
        how: "The process begins with a private consultation — a clinical conversation in a judgment-free environment. We review the history of your symptoms: when they started, whether they are situational or consistent, whether morning erections are present, and other details that help us understand the physiologic pattern. Targeted testing is ordered when indicated. From there, we build an action plan that addresses the modifiable contributors first — sleep, vascular health, hormones, lifestyle — and coordinates with specialists when appropriate.",
      }}
      candidacy={{
        good: [
          "Men with new-onset or progressive erectile dysfunction who have not had a clinical evaluation",
          "Those whose ED has been treated with prescription medications alone without addressing underlying causes",
          "Men with suspected hormonal contributors — low testosterone, thyroid dysfunction",
          "Those interested in a comprehensive approach rather than a quick prescription",
          "Men willing to engage with lifestyle and metabolic factors as part of the treatment plan",
        ],
        notFor: [
          "Men with acute cardiovascular symptoms — chest pain, exertional breathlessness, new onset palpitations — require urgent cardiology evaluation before ED management",
          "Those with Peyronie's disease or penile trauma causing pain or curvature — requires urology referral",
          "Men with neurological symptoms associated with sexual dysfunction — requires specialist coordination",
          "Those seeking prescription medications without any clinical evaluation or lifestyle engagement",
        ],
      }}
      whatToExpect={[
        "Private consultation: A detailed, judgment-free clinical conversation. We cover the full history of your symptoms, your overall health, your medications, and your goals. No question is inappropriate.",
        "Clinical assessment: We identify which contributing factors are most likely relevant in your case. Labs may be ordered if hormone levels or cardiometabolic markers have not been recently assessed.",
        "Action plan: We prioritize the early wins — often sleep, stress management, movement, or adjusting medications that may be contributing. These are addressed while any prescription support is evaluated.",
        "Coordination: When appropriate, we coordinate with urology, cardiology, or behavioral health specialists. We manage the communication and ensure your care is unified.",
        "Follow-up: We schedule follow-up to assess your progress and adjust the plan. ED management is not a single appointment — it is an ongoing clinical relationship.",
      ]}
      relatedServices={[
        { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
      ]}
      relatedPosts={[
        { title: "Signs Your Hormones Are Out of Balance", href: "/blog/signs-hormones-out-of-balance" },
        { title: "Why Your Energy Crashed in Your 40s and What to Do About It", href: "/blog/energy-crashed-40s" },
      ]}
      faqs={[
        {
          q: "Is this all in my head?",
          a: "Very rarely. Erectile dysfunction almost always involves vascular, neurologic, hormonal, and — sometimes — psychological factors in combination. The psychological component is real but it is usually secondary to a physiologic trigger. We take every patient's presentation seriously and evaluate all of the relevant contributors.",
        },
        {
          q: "Is there a cardiac risk associated with ED?",
          a: "There can be. New-onset ED in mid-life — particularly with no prior history — is sometimes the first signal of underlying cardiovascular disease. The vascular changes that affect penile blood flow can precede overt cardiac symptoms by several years. This is one of the reasons a proper clinical evaluation, rather than a direct prescription, is the right starting point.",
        },
        {
          q: "Do you prescribe medications for ED?",
          a: "We approach each patient individually. Prescription medications for ED may be appropriate for some patients, but they are never our starting point. We address the underlying contributors first. When medications are part of the plan, they are coordinated with the broader clinical picture — not prescribed in isolation.",
        },
        {
          q: "Is this evaluation private and confidential?",
          a: "Completely. Your consultation, your records, and any discussion of your sexual health is private and handled with the same confidentiality as any other medical interaction. We take this seriously.",
        },
        {
          q: "Do you offer ED evaluations at both Columbus and Warner Robins?",
          a: "Yes. Erectile dysfunction consultations are available at both our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
        },
      ]}
      disclaimer="Information on this page is educational and does not constitute medical advice. Erectile dysfunction requires individualized clinical evaluation. Men with chest pain, exertional breathlessness, or sudden onset neurological symptoms should seek emergency care before pursuing ED treatment. Individual results and treatment pathways vary."
      assessmentCta={{ label: "Use the Treatment Finder", href: "/tools#treatment-finder" }}
    />
  );
}
