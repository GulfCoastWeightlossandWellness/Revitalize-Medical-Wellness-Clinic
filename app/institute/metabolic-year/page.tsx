import type { Metadata } from "next";
import InstituteTierPage, { type InstituteTierContent } from "@/components/InstituteTierPage";
import { INSTITUTE_PRICING } from "@/lib/constants";

const tier = INSTITUTE_PRICING["metabolic-year"];

export const metadata: Metadata = {
  title: `${tier.name} — Rebuild Metabolic Health Institute | ${tier.price} · ${tier.duration}`,
  description:
    "A 12-month clinical coaching partnership with Travis Woodley, MSN, RN, CRNP. Quarterly lab review cycles, four one-on-one sessions, unlimited direct messaging, and the full Rebuild curriculum. Built for sustained metabolic transformation.",
};

const content: InstituteTierContent = {
  slug: "metabolic-year",
  heroHeadline: "A full year of clinical partnership.",
  heroSubhead:
    "The Metabolic Year is the complete Rebuild experience — a 12-month coaching relationship with quarterly lab cycles, four one-on-one sessions, unlimited direct messaging, and protocol that evolves as your physiology shifts. Built for the person who understands meaningful metabolic change takes longer than 90 days.",
  whatItIs: [
    "The Metabolic Year is not a longer program. It is a different relationship. The shorter tiers are built around a problem you want to solve. The Metabolic Year is built around a 12-month arc of progressive optimization — the kind of work that can only happen when somebody is watching your numbers across a full year.",
    "Hormone systems do not respond to interventions on a 90-day clock. Mitochondrial density rebuilds across months, not weeks. Sleep architecture restoration is measured across quarters. Body composition change that lasts requires the time to build the underlying physiology that supports it. The Metabolic Year is the timeline that the biology actually runs on.",
    "Across the year you get four full lab cycles. Four one-on-one sessions structured around those labs. Unlimited direct messaging access throughout. Quarterly content drops on advanced topics that build on the foundational curriculum. And — for participants near Columbus or Warner Robins — priority booking access at Revitalize for any in-clinic services you decide to layer in.",
  ],
  includes: [
    "Everything in Elite, extended across 12 months",
    "Four one-on-one coaching sessions (one per quarter, 60–90 minutes each)",
    "Quarterly lab review cycles with formal protocol adjustment at each touchpoint",
    "Unlimited direct message access (48-hour response, often faster)",
    "Full Rebuild curriculum plus quarterly advanced content drops",
    "Annual metabolic assessment with year-over-year comparison",
    "Priority booking at both Revitalize locations for any in-clinic services (TRT, GLP-1, Biote, IV therapy, aesthetic services)",
    "Direct line for protocol adjustments between scheduled sessions",
  ],
  structure: [
    "Quarter 1 — Baseline and direction. Comprehensive lab panel, full intake one-on-one, initial protocol design. The first quarter is about establishing where you actually start, not where you assumed you started. Often this means we identify markers nobody had measured before and discover the lever that has been holding everything else back.",
    "Quarter 2 — Protocol execution and the first re-check. Quarter 2 lab draw at month 3, second one-on-one to interpret the data and adjust. By the end of Q2 you usually feel meaningfully different — energy, sleep, recovery, body composition — and we have evidence in the labs that the trajectory is real.",
    "Quarter 3 — Optimization and depth. The third quarter is where we move past correction and into optimization. Travis frequently introduces advanced protocols here — things that wouldn't make sense in months 1–3 but become high-leverage once the foundations are in place. Third lab draw and one-on-one anchor this quarter.",
    "Quarter 4 — Integration and sustainability. The final quarter is about durability — making sure what you built will hold without ongoing intensive support. Final lab draw and one-on-one. Year-over-year comparison. We discuss whether you continue with the relationship in a maintenance form, return to Elite-level engagement, or move forward independently.",
  ],
  rightFor:
    "You are serious about sustainable metabolic optimization, you want a clinical relationship rather than a program, and you understand that the most meaningful changes in hormone function, body composition, and metabolic health take longer than 90 days to fully manifest. You are willing to invest both the financial commitment and the time across a full year.",
  notRightFor: null,
  success: [
    "By month 12, your full lab panel tells a different story across every meaningful axis. Hormones in the optimal zone for you — not just within the population reference range. Insulin sensitivity restored. Inflammatory markers down. Sleep architecture measurably better. Body composition shifted in the direction of more muscle, less visceral fat, better recovery.",
    "More importantly, the changes are durable. You did not push for them with a short-term intervention you cannot maintain. You built them into your physiology and your routine across 12 months — which means month 13 looks like month 12, and month 24 looks better, not worse.",
    "And you understand your own physiology in a way most physicians never had time to teach you. You can read a lab panel. You know your own optimal ranges. You know which protocols moved which markers, and what you would do if any of them drifted again. You leave the year not just optimized — but operationally fluent in your own metabolic health.",
  ],
  travisNote: [
    "When I look back at the patients I have worked with longest, the ones with the most sustained improvement — they all share something in common. The change happened on a slower timeline than they expected. The first quarter was about getting honest about the starting point. The second quarter was about feeling early progress. The third quarter was about realizing how much further the optimization could go. The fourth quarter was about locking it in.",
    "That arc does not happen in 90 days, and it is the reason I built the Metabolic Year. There is a particular kind of work that can only happen when somebody is watching your numbers across a full annual cycle — through seasonal shifts, through travel, through whatever life throws at the protocol. That is what this tier is.",
    "I am also honest that the Metabolic Year is not the right tier for most people. Most people are well-served by Core or Elite, and I will tell you that during application review if I see it. But for the person who knows they want a sustained partnership — who has been chasing their physiology for years without anyone actually building a relationship around it — the Metabolic Year is the answer that has not existed before.",
    "If you have been managing your own optimization for years and you are tired of doing it alone — if you want a clinical mind in your corner across a full year of work — this is what I built it for.",
  ],
  faq: [
    {
      q: "Why is the Metabolic Year a year, not 6 months or 18 months?",
      a: "12 months captures four full quarterly lab cycles, two seasonal cycles, and the timeline on which most hormonal and metabolic changes consolidate into durable physiology. Shorter than that and you are still in the early-protocol-response window when you exit. Longer than that and most participants are ready to maintain on their own with periodic check-ins, not sustained intensive coaching.",
    },
    {
      q: "Is this priced as a one-time payment or does it have payment plan options?",
      a: "Both options exist. Many participants pay the year upfront. Others use a quarterly payment structure or a custom plan. We discuss what works for your situation during the application process.",
    },
    {
      q: "What if my situation changes mid-year?",
      a: "We have a mid-year reassessment at month 6 to discuss whether the program is still fitting. If life makes continuing impossible, we discuss options — typically conversion of remaining months into Elite-equivalent access or a structured pause.",
    },
    {
      q: "Do I need to live near Columbus or Warner Robins?",
      a: "No. The Metabolic Year is delivered remotely and works for participants anywhere in the country. Lab draws are arranged locally to you. The one-on-one sessions are video. The priority booking at Revitalize is a benefit if you happen to be local — but it is not required.",
    },
    {
      q: "Can the Metabolic Year coordinate with my existing provider?",
      a: "Yes. Many participants have an existing PCP, endocrinologist, or hormone provider — Rebuild operates as the coaching and protocol layer alongside that clinical relationship. Travis can speak to your provider directly with your release if it helps coordinate the work.",
    },
    {
      q: "What happens at the end of the year?",
      a: "We do a final assessment with year-over-year lab comparison, confirm what is durable, and discuss the next phase. Many graduates move into a maintenance check-in cadence — quarterly or twice-yearly. Some move into independent operation with the framework they built. Some renew for another year if they are working on long-arc goals like body recomposition or athletic performance.",
    },
    {
      q: "How is this different from concierge medicine?",
      a: "Concierge medicine is a clinical relationship — your concierge physician can prescribe, examine, and treat you. The Metabolic Year is a coaching and education relationship — Travis is not your prescribing clinician (clinical care happens at Revitalize or with your existing provider). What you get is a sustained relationship with someone who actually reads your labs and builds the protocol logic — which most concierge physicians, despite the price tag, do not have time for.",
    },
    {
      q: "What if I apply and you tell me a different tier is the right fit?",
      a: "That happens. Travis reads every application. If the right answer for you is Core or Elite — or if you should not be in any of the tiers right now — he will tell you. Application is a conversation, not a transaction.",
    },
  ],
  externalApplyUrl: "https://rebuildmetabolichealth.com/apply-for-metabolic-year/",
};

export default function MetabolicYearPage() {
  return <InstituteTierPage content={content} />;
}
