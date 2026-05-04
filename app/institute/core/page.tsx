import type { Metadata } from "next";
import InstituteTierPage, { type InstituteTierContent } from "@/components/InstituteTierPage";
import { INSTITUTE_PRICING } from "@/lib/constants";

const tier = INSTITUTE_PRICING.core;

export const metadata: Metadata = {
  title: `${tier.name} — Rebuild Metabolic Health Institute | ${tier.price} · ${tier.duration}`,
  description:
    "The structured, self-directed entry point to the Rebuild Metabolic Health Institute. Full curriculum, monthly group Q&A with Travis Woodley, protocol library, and a 90-day program timeline. For motivated adults who want a clinical framework without one-on-one coaching.",
};

const content: InstituteTierContent = {
  slug: "core",
  heroHeadline: "The clinical framework, without the hand-holding.",
  heroSubhead:
    "Core is the structured entry point to the Rebuild Metabolic Health Institute — full curriculum, protocol library, monthly group Q&A, and a 90-day timeline. Designed for self-directed adults who learn well from a framework and want to do the work themselves.",
  whatItIs: [
    "Core is not a watered-down version of the higher tiers. It is the same clinical framework I use with every Rebuild participant — the same physiology, the same protocol logic, the same standards. What is different is the delivery: structured content and group touchpoints rather than one-on-one coaching.",
    "If you have ever bought a course and watched a few modules and never finished, that is not what Core is. Core is built around a 90-day arc with milestone checkpoints. It is structured the way I structure clinical work — sequentially, with each phase building on the last.",
    "You learn how the systems actually work — hormones, sleep, mitochondria, inflammation, body composition — and you apply the protocols. When you have a question, you bring it to the monthly group call. The community handles a lot of the day-to-day friction; the protocols and frameworks handle the substance.",
  ],
  includes: [
    "Full Rebuild curriculum: hormonal health, metabolic optimization, sleep architecture, inflammation management, body composition",
    "Access to the Rebuild private community",
    "Monthly group Q&A with Travis (recorded for later access)",
    "Foundational lab interpretation guide — what to ask for, what the numbers mean",
    "Protocol library: supplementation, nutrition timing, training structure, recovery",
    "90-day program timeline with milestone checkpoints",
    "Mobile and desktop access to all materials",
  ],
  structure: [
    "The first 30 days are foundational. You learn the framework — what metabolic dysfunction looks like, why mid-life shifts the rules, what the levers actually are. You complete a baseline self-assessment so you know where you are starting.",
    "Days 30 to 60 are protocol implementation. You select the entry-point protocols that match your situation (sleep architecture, blood sugar regulation, training structure, inflammation management) and you run them. The monthly Q&A drops in the middle of this window — bring your specific questions.",
    "Days 60 to 90 are integration and assessment. You measure what changed, you adjust what is not working, and you build the habits that need to outlast the 90-day window. The goal is not to finish a program. The goal is to leave with a sustainable framework you understand and can keep refining.",
  ],
  rightFor:
    "You are new to metabolic optimization, you learn well from structured content, and you want a clinical framework without the cost of one-on-one coaching. You are willing to do the work independently with periodic group support. You read instructions and follow them.",
  notRightFor:
    "You need individualized protocol adjustments, you have complex hormonal or metabolic pathology that requires direct clinical attention, or you learn best through one-on-one interaction with a clinician. If that describes you, look at Elite or the Metabolic Year.",
  success: [
    "You finish the 90 days with a clear understanding of what is happening in your physiology and why. You know which levers move what. You know what your baseline labs mean and what you would change to optimize them.",
    "You have implemented protocols across sleep, blood sugar, training, and inflammation, and you have data on what worked for you. You have a sustainable framework — not a temporary push.",
    "You know whether the next step for you is staying with the Rebuild community, moving to Elite for individualized work, or returning to your existing care relationship with new questions to ask. Whatever the next move is, you are no longer guessing.",
  ],
  travisNote: [
    "I built Core for the person who reads. The person who, when they get a problem, opens a textbook before they open Google. That person does not need me to walk them through every step — they need a framework that holds together and a place to bring their questions.",
    "Most of what I wish I could give every patient — the systems thinking, the why behind the protocols, the way to read your own labs without flinching — does not require an hour of my time per person. It requires a structure they can work through. That is what Core is.",
    "If you are willing to do the work, this tier punches well above its price. If you are looking for someone to manage your protocol for you, this is not the right tier — and I would rather you know that on day one than figure it out on day forty.",
  ],
  faq: [
    {
      q: "Is Core the same content as Elite?",
      a: "Yes — the curriculum is identical. The difference is the layer of support. Core gives you the framework and group access; Elite adds individualized lab review, custom protocol adjustment, and one-on-one sessions with Travis. If the framework is enough for you, Core is the right tier.",
    },
    {
      q: "How much time per week does Core require?",
      a: "Most participants spend 2–4 hours per week on the curriculum and protocol implementation during the active 90 days. The work front-loads in the first 30 days and tapers as protocols become routine.",
    },
    {
      q: "What happens after the 90 days end?",
      a: "You retain access to all curriculum and the community. Many Core participants stay engaged through the community indefinitely; some move up to Elite once they want individualized work; some leave with what they learned and return later. There is no auto-renewal.",
    },
    {
      q: "Can I upgrade from Core to Elite mid-program?",
      a: "Yes. The price differential is credited and you get full Elite access from the upgrade date forward. Many people start with Core and discover they want individualized lab review — upgrading is straightforward.",
    },
    {
      q: "Is the monthly Q&A live or recorded?",
      a: "Both. The Q&A runs live monthly and is recorded for participants who cannot attend. You can submit questions ahead of time so Travis addresses them on the call even if you cannot be there.",
    },
    {
      q: "Do I need to be a Revitalize patient to enroll in Core?",
      a: "No. Rebuild is open to anyone, regardless of where you receive clinical care. Many participants are in other states and work with their existing providers; the framework is provider-agnostic.",
    },
    {
      q: "Is there a refund or trial period?",
      a: "There is a 14-day review period after enrollment. If the program is not what you expected within the first two weeks, contact us to discuss your options.",
    },
  ],
  externalApplyUrl: "https://rebuildmetabolichealth.com/apply-for-core/",
};

export default function CorePage() {
  return <InstituteTierPage content={content} />;
}
