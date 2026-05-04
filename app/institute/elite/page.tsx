import type { Metadata } from "next";
import InstituteTierPage, { type InstituteTierContent } from "@/components/InstituteTierPage";
import { INSTITUTE_PRICING } from "@/lib/constants";

const tier = INSTITUTE_PRICING.elite;

export const metadata: Metadata = {
  title: `${tier.name} — Rebuild Metabolic Health Institute | ${tier.price} · ${tier.duration}`,
  description:
    "Six-month clinical coaching with Travis Woodley, MSN, RN, CRNP. Includes the full Rebuild curriculum plus individualized lab interpretation, custom protocols, two one-on-one sessions, and direct messaging access. For people who know the generic approach is not enough.",
};

const content: InstituteTierContent = {
  slug: "elite",
  heroHeadline: "Individualized clinical coaching, built around your physiology.",
  heroSubhead:
    "Elite is the six-month tier for people who know they need more than a framework. Everything in Core, plus direct lab review, individualized protocol design, two one-on-one sessions with Travis, and direct messaging access for clinical questions throughout the program.",
  whatItIs: [
    "Elite is for the person who has tried the general approach and knows it is not enough. You may have done the diet, run the supplement stack, dialed in the training — and you are still missing something. Usually that something is hidden in the labs nobody bothered to draw, or in the relationship between markers nobody bothered to compare.",
    "I built Elite around the assumption that you do not need motivation. You need somebody actually looking at your numbers. Somebody asking why your free testosterone is in the bottom quartile when your total is fine, why your fasting insulin is doing what it is doing relative to your A1c, why your TSH is technically normal but your fT3-to-rT3 ratio tells a different story.",
    "Elite gives you that. You get the full Rebuild curriculum so the framework is in place. You get individualized lab review so the protocol is built for you, not for the average. You get two scheduled one-on-one calls and direct message access so the protocol can adjust as your numbers move.",
  ],
  includes: [
    "Everything in Core (full curriculum + community + group Q&A)",
    "Two one-on-one coaching sessions with Travis (60 minutes each)",
    "Individualized lab review — bring your existing labs or follow Travis's recommendations on what to draw",
    "Custom protocol design built around your specific labs, history, and goals",
    "Direct message access for clinical questions (response within 48 business hours)",
    "Quarterly protocol adjustment as your numbers shift",
    "Six-month program timeline with mid-program reassessment at month 3",
    "Priority access to new Rebuild content and protocols as they release",
  ],
  structure: [
    "Months 1–2 are intake and baseline. Your first one-on-one happens early — we walk through your history, your current labs (or what to draw if you don't have any), and we build the initial protocol. You are working through the Core curriculum in parallel so the framework is forming as we go.",
    "Months 3–4 are protocol execution and refinement. By month 3 we have data — what moved, what didn't, what unexpected things showed up. Your second one-on-one falls in this window and is built around interpreting that data. The protocol gets adjusted with intent, not by guess.",
    "Months 5–6 are integration and durability. The goal is not just that you feel better at month 6 — it is that you understand what got you there well enough to maintain it. Direct message access stays open through the full window so questions get answered as they come up, not banked for the next call.",
    "Throughout the six months, you have direct messaging for clinical questions — what to do when something shifts, how to read a lab that came back differently than expected, whether a new symptom matters. That access is the part most people end up valuing most.",
  ],
  rightFor:
    "You have specific hormonal or metabolic issues that require individualized attention. You want Travis reviewing your actual lab values rather than general guidance. You have been through a basic program or generic protocol and you know the standard approach is not addressing what is actually wrong. You are willing to draw labs and act on the data.",
  notRightFor:
    "You want frequent ongoing clinical oversight or you are dealing with acute medical issues that require in-person care — Rebuild is a coaching program, not a medical practice. You are looking for the cheapest entry point — Core is a better fit if budget is the deciding factor. You want a year-long sustained relationship — the Metabolic Year is built for that.",
  success: [
    "By month 6 your labs tell a different story than they did at intake. The markers we targeted have moved in the direction we predicted. The symptoms that drove you to apply have either resolved or are clearly tracking that direction with a known timeline.",
    "More importantly, you understand why. You can read your own panel and know what each number means relative to the others. You know which protocols moved which markers. You know what your maintenance looks like and what would make you call for a re-engagement.",
    "Some Elite participants finish month 6 and roll into the Metabolic Year for sustained relationship. Some finish and run on their own. Both are reasonable outcomes — Elite is built so you can do either.",
  ],
  travisNote: [
    "Most of the people I see in Elite have one thing in common: somebody told them their labs were normal when they were not. Or they were normal in the lab-reference sense — within range — but the range was built off populations averaging 30 pounds heavier than they are, and the range tells you almost nothing about whether you are in your own optimal zone.",
    "Free testosterone in the bottom 25% of the reference range is technically normal. So is a fasting insulin of 14. So is a TSH of 4 with no fT3 drawn at all. None of those are normal in any meaningful clinical sense — they just sit inside an arbitrary statistical band.",
    "Elite is built to look past the band. We are looking at you, your trajectory, the relationships between the markers, and what you actually want to feel like in six months. The protocol gets built around that — not around the population average.",
    "If you have ever left a doctor's office being told everything is fine while you know it is not — Elite is the response to that experience. You bring the labs, I'll tell you what they actually say.",
  ],
  faq: [
    {
      q: "Do I need to already have labs drawn before I apply?",
      a: "No — and ideally you would not redraw recent labs just to apply. If you have anything from the last 12 months bring it. If you don't, I'll tell you what to ask for and where to get it. You can also use Revitalize directly if you live near Columbus or Warner Robins.",
    },
    {
      q: "Can Elite prescribe medications?",
      a: "No. Rebuild is a coaching and education program. Prescriptions, hormone therapy, and clinical care happen at Revitalize or with your existing provider. Elite gives you the protocol logic and lab interpretation that should inform whatever clinical relationship you have.",
    },
    {
      q: "What is the response time for direct messages?",
      a: "Within 48 business hours. Many responses come faster than that. Direct message access is for clinical and protocol questions during the program, not for emergencies — if it is acute, contact your physician or local urgent care.",
    },
    {
      q: "Can I extend Elite past 6 months?",
      a: "Yes. At month 5, we discuss next steps. Many Elite participants extend by adding additional one-on-one sessions or rolling into the Metabolic Year for the continuing relationship.",
    },
    {
      q: "Is the price all-inclusive, or are there add-ons?",
      a: "The $3,000 covers everything listed: curriculum, community, group Q&A, two one-on-one sessions, lab review, custom protocol, direct messaging, and quarterly adjustments for the full 6 months. Lab draw costs (if you do them through your insurance or directly) are not included — those vary widely and stay with you.",
    },
    {
      q: "How is Elite different from working with a functional medicine doctor?",
      a: "A functional medicine doctor is a clinician with prescribing authority. Elite is a coaching relationship — protocol design, lab interpretation, framework, and direct access to me. If you need prescriptions or in-person clinical workup, you need a clinician. If you need somebody who actually reads your labs and tells you what they mean, Elite does that.",
    },
    {
      q: "Can I switch up to the Metabolic Year mid-program?",
      a: "Yes. The Elite cost is credited toward the Metabolic Year if you upgrade within the first 90 days.",
    },
  ],
  externalApplyUrl: "https://rebuildmetabolichealth.com/apply-for-elite/",
};

export default function ElitePage() {
  return <InstituteTierPage content={content} />;
}
