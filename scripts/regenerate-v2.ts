/**
 * Phase 6 — V2 enhanced post generator (overwrites Phase 4 templated posts).
 *
 * Improvements over v1 (scripts/generate-208-posts.ts):
 *   - Body length: ~2,400-2,800 words (was ~1,350)
 *   - H2 sections: 8-10 (was 4-5)
 *   - Internal links per post: 8-12 (was 2-3)
 *   - FAQs: 7 per post (was 5)
 *   - serviceLinks map: 5-8 per post (was 3-4)
 *   - Keywords: 8 (was 5-6)
 *   - OG/Twitter metadata: fully populated (were blank)
 *   - readTime auto-calculated from new body length
 *   - schemaType: HowTo/FAQPage/Article — same logic as v1
 *
 * Bodies remain template-derived with topic substitution. They are NOT
 * bespoke clinical journalism — they are publication-ready scaffolding
 * that needs Travis's clinical voice review before going live, but the
 * SEO surface area (links, keywords, schema, structure) is fully optimized.
 *
 * Run: npx tsx scripts/regenerate-v2.ts --start=0 --end=23
 *
 * The Auburn post (slug "auburn-patients-columbus-warner-robins") is protected.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SCHEDULE_PATH = join(ROOT, "docs", "blog-schedule-208.json");
const OUT_DIR = join(ROOT, "content", "blog");
const PROTECTED = new Set(["auburn-patients-columbus-warner-robins"]);

interface ScheduleEntry {
  postNumber: number;
  publishedDate: string;
  dayOfWeek: "Tue" | "Thu";
  title: string;
  slug: string;
  category: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetIntent: "informational" | "commercial" | "local";
  relatedServiceSlug: string;
  relatedCities?: string[];
}

const schedule: ScheduleEntry[] = JSON.parse(readFileSync(SCHEDULE_PATH, "utf8"));

// ─── Service catalog (slug → display name) ─────────────────────────────────
const SERVICES: Record<string, string> = {
  "hormone-therapy-women": "Hormone Therapy for Women",
  "hormone-therapy-men": "Hormone Therapy for Men",
  "biote-pellet-therapy": "Biote Pellet Therapy",
  "medical-weight-loss": "Medical Weight Loss",
  "nutritional-counseling": "Nutritional Counseling",
  "neuromodulators": "Neuromodulators (Botox / Dysport)",
  "dermal-fillers": "Dermal Fillers",
  "microneedling": "Microneedling",
  "fractional-co2-laser": "Fractional CO2 Laser",
  "aquafirme-facials": "AquaFirme Facials",
  "vi-peel": "VI Peel",
  "vampire-facial-prp": "Vampire Facial (PRP)",
  "iv-hydration": "IV Hydration",
  "fat-dissolving-injections": "Fat-Dissolving Injections",
  "low-level-light-therapy": "Low-Level Light Therapy",
  "laser-hair-removal": "Laser Hair Removal",
  "derive-hair-restoration": "DE|RIVE Hair Restoration",
  "cellenis-prp-gel-filler": "Cellenis PRP Gel Filler",
  "erectile-dysfunction": "Erectile Dysfunction Treatment",
  "o-shot": "O-Shot",
};

const CITY_DETAILS: Record<string, { phone: string; address: string; nearby: string }> = {
  "columbus-ga": {
    phone: "(762) 261-3880",
    address: "6901 Ray Wright Way, Suite I, Columbus, GA 31909",
    nearby: "Phenix City, Fort Benning, and the surrounding military community",
  },
  "warner-robins-ga": {
    phone: "(478) 366-1244",
    address: "840 SR 96, Suite 3300, Warner Robins, GA 31088",
    nearby: "Bonaire, Perry, and Houston County",
  },
};

// ─── ServiceLinks per category — 5-8 phrase→URL mappings ────────────────────
const SERVICE_LINK_MAPS: Record<string, Record<string, string>> = {
  "Hormone Therapy": {
    "hormone optimization": "/services/hormone-therapy-women",
    "men's testosterone replacement": "/services/hormone-therapy-men",
    "Biote pellet therapy": "/services/biote-pellet-therapy",
    "comprehensive lab work": "/start-here",
    "Columbus location": "/locations/columbus-ga",
    "Warner Robins location": "/locations/warner-robins-ga",
    "book a consultation": "https://revitalizeaesthetics.janeapp.com/",
    "hormone health assessment": "/tools",
  },
  "Weight Loss": {
    "medical weight loss program": "/services/medical-weight-loss",
    "GLP-1 therapy": "/services/medical-weight-loss",
    "hormone optimization": "/services/hormone-therapy-women",
    "nutritional counseling": "/services/nutritional-counseling",
    "weight loss assessment": "/tools",
    "Columbus clinic": "/locations/columbus-ga",
    "Warner Robins clinic": "/locations/warner-robins-ga",
    "online booking": "https://revitalizeaesthetics.janeapp.com/",
  },
  "Aesthetics": {
    "neuromodulator treatments": "/services/neuromodulators",
    "dermal filler treatments": "/services/dermal-fillers",
    "microneedling": "/services/microneedling",
    "VI Peel": "/services/vi-peel",
    "fractional CO2 laser": "/services/fractional-co2-laser",
    "AquaFirme facial": "/services/aquafirme-facials",
    "vampire facial": "/services/vampire-facial-prp",
    "book online": "https://revitalizeaesthetics.janeapp.com/",
  },
  "Sexual Wellness": {
    "the O-Shot": "/services/o-shot",
    "ED treatment": "/services/erectile-dysfunction",
    "hormone optimization": "/services/hormone-therapy-women",
    "men's hormone therapy": "/services/hormone-therapy-men",
    "comprehensive workup": "/start-here",
    "private consultation": "https://revitalizeaesthetics.janeapp.com/",
    "Columbus consultation": "/locations/columbus-ga",
  },
  "Wellness": {
    "IV hydration therapy": "/services/iv-hydration",
    "comprehensive wellness assessment": "/start-here",
    "hormone optimization": "/services/hormone-therapy-women",
    "medical weight loss": "/services/medical-weight-loss",
    "Columbus IV clinic": "/locations/columbus-ga",
    "Warner Robins IV clinic": "/locations/warner-robins-ga",
    "schedule an infusion": "https://revitalizeaesthetics.janeapp.com/",
  },
  "Hair Restoration": {
    "DE|RIVE hair restoration": "/services/derive-hair-restoration",
    "vampire facial PRP": "/services/vampire-facial-prp",
    "hormone therapy": "/services/hormone-therapy-women",
    "men's hormone therapy": "/services/hormone-therapy-men",
    "scalp consultation": "https://revitalizeaesthetics.janeapp.com/",
    "Columbus consultation": "/locations/columbus-ga",
  },
  "Local": {
    "hormone therapy": "/services/hormone-therapy-women",
    "men's hormone therapy": "/services/hormone-therapy-men",
    "medical weight loss": "/services/medical-weight-loss",
    "aesthetic treatments": "/services/neuromodulators",
    "IV therapy": "/services/iv-hydration",
    "online booking": "https://revitalizeaesthetics.janeapp.com/",
    "comprehensive workup": "/start-here",
  },
  "Symptoms": {
    "hormone optimization": "/services/hormone-therapy-women",
    "men's hormone therapy": "/services/hormone-therapy-men",
    "metabolic program": "/services/medical-weight-loss",
    "comprehensive lab work": "/start-here",
    "the symptom assessment tool": "/tools",
    "Columbus consultation": "/locations/columbus-ga",
    "Warner Robins consultation": "/locations/warner-robins-ga",
  },
  "Demographic": {
    "hormone therapy": "/services/hormone-therapy-women",
    "men's testosterone replacement": "/services/hormone-therapy-men",
    "medical weight loss": "/services/medical-weight-loss",
    "aesthetic care": "/services/neuromodulators",
    "comprehensive workup": "/start-here",
    "consultation booking": "https://revitalizeaesthetics.janeapp.com/",
  },
};

// ─── Helpers ────────────────────────────────────────────────────────────────
function topicPhrase(title: string): string {
  const m = title.match(/^([^:—–\-]+)/);
  return (m ? m[1] : title).trim().replace(/\s+/g, " ");
}
function shortTopic(title: string, primaryKeyword: string): string {
  const t = topicPhrase(title);
  const words = t.split(/\s+/);
  if (words.length <= 5) return t;
  return primaryKeyword.split(/\s+/).slice(0, 4).join(" ");
}
function lc(s: string): string { return s.toLowerCase(); }
function cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

// ─── V2 body builders — each category gets a deeper, multi-section build ────
type BuildArgs = {
  e: ScheduleEntry;
  topic: string;
  short: string;
  primaryKw: string;
  secondaryKw: string[];
  serviceName: string;
  serviceHref: string;
  cityRefs: { columbus?: string; warnerRobins?: string };
  related: { slug: string; title: string }[];
};

function buildHormoneBodyV2(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, related } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const sk2 = secondaryKw[1] ?? primaryKw;
  const sk3 = secondaryKw[2] ?? primaryKw;
  const r0 = related[0];
  const r1 = related[1];
  const r2 = related[2];

  return `${cap(primaryKw)} is one of the most common topics that brings new patients into the office, and the conversation deserves more depth than the surface answer most people get. Mid-life hormone questions tend to surface in clusters — sleep changes, energy shifts, body composition changes, mood instability, libido changes, cognitive symptoms — and the patient who walks in asking specifically about ${primaryKw} is usually noticing one symptom in a larger pattern. This article explains the clinical picture in the depth you need to make an informed decision, including how we approach the workup, what treatment actually involves, and how to know whether you are a good candidate.

This is the same conversation we have at the first hormone consultation. It is published here so you can think it through before you book.

## What ${short} actually is — a clinical definition

The phrase ${primaryKw} gets used loosely. Inside the clinic, it has a specific meaning that depends on lab values, symptom pattern, and the underlying physiology that produced both. ${cap(topic)} is best understood by separating three layers: what you experience (symptoms), what the labs show (biomarkers), and what mechanism is driving both (physiology).

A useful way to think about it: hormones are signaling molecules. They tell tissues what to do. When the signal is weak, distorted, or arriving at the wrong time, the downstream tissues do not behave correctly, and the result is the cluster of symptoms that brought you here. ${cap(sk1)} sits within this signaling framework. Restoring the signal — when the underlying physiology will respond — produces measurable improvement.

Before we recommend any treatment, [comprehensive lab work](/start-here) is the foundation. Without lab data, any conversation about ${primaryKw} is informed guessing. The panel we order includes the relevant sex hormones (estradiol, progesterone, total and free testosterone, DHEA-S, SHBG), thyroid markers (TSH, free T3, free T4, reverse T3, thyroid antibodies), metabolic markers (insulin, HbA1c, fasting glucose), and inflammatory markers (hs-CRP, fibrinogen). For most patients in mid-life, that panel reveals the actual driver of the presenting complaint, not just the surface symptom.

## The mechanism behind ${short}

${cap(primaryKw)} is downstream of specific physiological mechanisms. The mechanisms differ by patient and by presentation, but the most common patterns we identify in the workup are: declining production of the relevant hormone (the most common pattern in mid-life), impaired conversion or activation of the hormone (the second most common), changes in receptor sensitivity at the target tissue (the most under-recognized), and disruptions in the binding-protein system that controls bioavailability (commonly missed by routine panels).

${cap(sk2)} typically reflects one or more of these mechanisms. The treatment plan that works is the one that targets the actual mechanism, not the surface symptom. Treating a receptor sensitivity problem with more hormone, for example, predictably underperforms — sometimes for years — until someone actually identifies the receptor problem.

This is why the first conversation matters. Two patients with identical symptoms can have completely different mechanisms. Without sorting out which mechanism applies to your situation, the treatment plan is a guess.

## Who is a candidate — and who is not

Candidacy for hormone-based treatment depends on three independent factors: lab confirmation of the suspected mechanism, symptom burden that justifies intervention, and absence of contraindications.

**Good candidates** typically present with:

- A cluster of related symptoms that have persisted for at least three months
- Lab values that confirm the suspected hormonal mechanism
- Realistic expectations about timeline (most hormone optimization shows initial response in 2-4 weeks, full optimization in 3-6 months)
- Willingness to do follow-up labs at the three-month reassessment mark
- Absence of personal or family history that would contraindicate the specific therapy

**Less-good candidates** include:

- Patients whose symptoms are better explained by another untreated condition (sleep apnea, untreated thyroid disease, untreated mood disorder, substance issue)
- Patients seeking immediate results from a process that takes months
- Patients with active contraindications to the specific therapy under consideration
- Patients whose primary problem is not actually hormonal even though it presents that way

We turn away a meaningful percentage of patients at the workup stage. That is by design. Treatment when the mechanism is wrong does not work, and pretending otherwise is not in anyone's interest. The right next step for those patients is a different intervention — and we will tell you what it is.

If you are considering [${serviceName}](${serviceHref}), the candidacy conversation is the most important part of the consultation.

## What the workup involves — what to expect at your first visit

The first hormone consultation is structured to gather everything we need to make a real recommendation at the second visit. The first visit covers history (medical, surgical, medication, supplement, family, lifestyle), current symptom inventory in detail, prior treatment attempts and their outcomes, and goals — both what you want to feel and what you do not want to do (some patients want to optimize without medication; some are open to anything; we work with both).

Lab work is ordered at that visit if you do not already have recent results. The labs we order are the comprehensive panel above. ${cap(sk3)} affects which markers we prioritize and which add-on tests may be relevant.

The second visit is the lab review. We sit with the data together, walk through what each marker means in your specific context, and discuss treatment options. By this visit, we have data and you have the same data — which means the conversation is real, not theoretical.

If you already have recent comprehensive lab work, the first and second visits can sometimes be combined. Bring it with you when you book.

## How treatment proceeds

Hormone-based treatment, when initiated, follows a deliberate pattern: conservative starting dose, titration based on response, follow-up labs at three months, dose adjustment based on the labs and your symptom report, and then ongoing reassessment at six-month or annual intervals depending on the protocol.

We do not believe in front-loading dose. A patient who feels noticeable improvement at a moderate dose and full optimization at the calibrated dose is doing better than a patient who was overdosed at the start and now has to deal with side effects from a level that was higher than necessary. Conservative titration is not slower in any meaningful sense — it is what produces a stable optimal level rather than oscillation between too much and too little.

[${cap(serviceName)}](${serviceHref}) protocols are individualized. The specific delivery method (oral, transdermal, injection, pellet), the specific hormone combination, the specific dose, and the specific monitoring schedule are all matched to your physiology and your goals. There is no default protocol that we apply to everyone.

## Common questions patients ask in the consultation

Patients ask us several questions consistently during the consultation, and the answers are worth surfacing here so you can think about them in advance.

**"How will I know if it is working?"** You will know in the first month if there is a response — sleep usually improves first, then energy, then mood and cognitive function. Body composition changes take longer (3-6 months). Libido and sexual function recovery are variable in timing. We track these explicitly at follow-up so we have data, not just impressions.

**"What if I do not feel a difference?"** That is the value of the three-month lab reassessment. If your levels are in the optimal range and you do not feel different, we look at adjacent factors (thyroid, sleep architecture, stress, nutritional status) that may be limiting the response. The follow-up is not optional for this reason.

**"How long do I stay on treatment?"** This depends on what we are treating and what your goals are. Some patients use hormone therapy for a defined window during a specific transition. Others continue indefinitely. We discuss the long-term framework at the treatment-plan visit and revisit it at every annual reassessment.

## How this fits with adjacent treatments

${cap(primaryKw)} rarely lives in isolation. The patients we see most successfully are usually addressing two or three things in coordination: hormone optimization plus thyroid support, or hormone optimization plus a [medical weight loss program](/services/medical-weight-loss), or hormone optimization plus targeted nutritional changes. The right combination depends on the lab picture.

If you have read other articles in this Library, you have probably noticed the cross-references. That is intentional. The hormone, metabolic, and nutritional systems interact, and treating any one in isolation tends to underperform compared to treating the system. ${r0 ? `Articles like ["${r0.title}"](/blog/${r0.slug})` : "Other articles in this Library"} expand on the adjacent considerations, and ${r1 ? `["${r1.title}"](/blog/${r1.slug})` : "the related-reading section below"} addresses the most common follow-up question patients ask after this one.

## Realistic expectations

Hormone optimization is not fast in the way patients sometimes hope. The hormone signaling system takes time to recalibrate, and tissue-level changes (body composition, skin quality, cognitive function recovery) take longer than symptom-level changes (sleep, energy, mood). Realistic timelines:

- **2-4 weeks:** initial change in sleep and energy if the dose is right
- **6-8 weeks:** mood and cognitive symptoms begin to stabilize
- **3 months:** first lab reassessment; dose typically refined here
- **6 months:** body composition changes become measurable
- **9-12 months:** full optimization at the calibrated dose

Patients who understand this timeline are far happier with their care than patients who expected immediate transformation.

## How we approach ${short} at Revitalize

Our approach is deliberate. The first visit is comprehensive. The lab panel is comprehensive. The treatment-plan conversation is data-driven. The follow-up is non-negotiable. The patients who do best under our care are the ones who understand that hormone optimization is a clinical relationship over time, not a one-shot prescription.

Both the [Columbus location](/locations/columbus-ga) and the [Warner Robins location](/locations/warner-robins-ga) see new hormone-therapy patients every week. Travis Woodley sees patients at both locations on a published rotating schedule. The clinical protocol is identical at both — same lab partners, same pharmacy partners, same approach.

If ${primaryKw} is something you have been considering, the most useful next step is a consultation. ${r2 ? `For patients who want to read more before booking, ["${r2.title}"](/blog/${r2.slug}) addresses an adjacent topic that often comes up in the same conversation.` : "Bring whatever lab data you have and we will start there."}`;
}

function buildWeightBodyV2(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, related } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const sk2 = secondaryKw[1] ?? primaryKw;
  const sk3 = secondaryKw[2] ?? primaryKw;
  const r0 = related[0]; const r1 = related[1]; const r2 = related[2];

  return `${cap(primaryKw)} is one of the most-asked questions in the [medical weight loss program](/services/medical-weight-loss) right now. The conversation about weight loss has changed dramatically — GLP-1 medications have made sustained loss of 15-20% of body weight a routine clinical outcome rather than a rare one. But the marketing has outpaced the clinical reality, and patients arrive with a mix of accurate information, partial information, and outright misinformation. This article walks through the picture in the depth you need to actually make a decision, including the physiology, the protocols, the candidacy criteria, and the realistic outcomes.

If you have tried weight loss before and it has not worked sustainably, this article is especially relevant. The reasons it has not worked are usually addressable.

## What ${short} actually is — separating the marketing from the clinical reality

${cap(primaryKw)} sits within a larger conversation about metabolic medicine. The framing matters because the same intervention can succeed or fail depending on whether the underlying physiology is being addressed. Mid-life weight gain is rarely a willpower problem; it is almost always a metabolic and hormonal problem. The patients we see in the [medical weight loss program](/services/medical-weight-loss) have usually tried everything — caloric restriction, exercise programs, commercial diet apps, supplements — and arrive frustrated that nothing has produced lasting change.

The reason it has not worked is usually one or more of:

- **Insulin resistance** — muscle and liver cells have become less responsive to insulin signaling, trapping the body in a fat-storage state regardless of caloric intake
- **Thyroid dysfunction** — even subclinical thyroid dysfunction lowers basal metabolic rate enough to undermine conventional weight loss strategies
- **Sex hormone decline** — declining estrogen and testosterone shift body composition toward central adiposity that diet and exercise alone cannot reverse
- **Cortisol dysregulation** — chronic stress raises cortisol, which directly promotes visceral fat storage and suppresses thyroid conversion
- **Sleep architecture disruption** — poor sleep produces measurable metabolic changes that mimic insulin resistance

${cap(sk1)} fits within this framework. It is not a separate phenomenon from these mechanisms — it is one of them, or a downstream consequence of them.

## How GLP-1 medications fit into the picture

GLP-1 receptor agonists (semaglutide, tirzepatide, and others) work by mimicking a gut hormone the body produces in response to food. They slow gastric emptying, suppress appetite at the brain level, and improve insulin sensitivity. For the right candidate, the effect is profound and predictable — averaged across study populations, semaglutide produces ~15% body weight loss over 68 weeks; tirzepatide produces ~21% over similar timeframes.

But GLP-1 therapy is not a magic bullet, and it is not appropriate for every patient. ${cap(sk2)} matters because the medication only addresses some of the underlying mechanisms. The other mechanisms (thyroid, sex hormones, cortisol, sleep) often need separate attention. The patients who get the best results are the ones whose program addresses all the contributing mechanisms in parallel. The patients who plateau or regain after stopping are usually the ones whose program never addressed anything beyond appetite suppression.

This is why we do not run GLP-1 as a stand-alone product. It is one tool inside a structured program that also looks at hormone status, thyroid function, body composition (via DEXA when indicated), and adjacent metabolic factors.

## Who is a candidate — and who is not

Candidacy for [GLP-1 therapy](/services/medical-weight-loss) within our program depends on:

- BMI and body composition (BMI alone is not a sufficient screen — DEXA composition matters significantly)
- Current metabolic and hormonal status from a comprehensive lab panel
- Absence of contraindications (personal or family history of medullary thyroid carcinoma, MEN2 syndrome, prior pancreatitis)
- Realistic patient expectations about timeline, side effects, and long-term commitment

Candidates whose physiology indicates that GLP-1 will work tend to have insulin resistance, central adiposity, and at least one adjacent factor (suboptimal hormones, suboptimal thyroid, or both). Candidates whose physiology indicates GLP-1 will struggle tend to have already-low BMI, athletic body composition, very high baseline activity, or contraindications.

Patients who are not candidates for GLP-1 are not stuck — there are other levers. The full [medical weight loss program](/services/medical-weight-loss) includes [hormone optimization](/services/hormone-therapy-women), thyroid support where indicated, [men's testosterone replacement](/services/hormone-therapy-men) where the male hormone picture warrants it, structured nutritional support, and resistance training guidance. GLP-1 is one tool among several.

## What the workup looks like at the first visit

The first medical weight loss consultation is comprehensive. We need to understand prior weight loss attempts (what worked, what did not, why), current lifestyle baseline (sleep, stress, exercise, dietary patterns), current medication and supplement regimen, family history of metabolic disease, and your specific goals — both target outcome and timeline.

Lab work is ordered at that visit if you do not have recent results. The panel we run includes the standard metabolic markers (fasting insulin, HbA1c, fasting glucose, comprehensive metabolic panel, lipid panel) plus the relevant hormonal markers (full sex hormone panel, full thyroid panel, cortisol pattern when indicated). ${cap(sk3)} affects which add-on tests we prioritize.

The lab review visit produces the personalized plan. By that visit you have the same data we do, and the conversation about which interventions make sense for your physiology is grounded in the actual numbers.

## How the 90-day program proceeds

The structured phase of the medical weight loss program is 90 days. That is enough time to complete the full workup, initiate interventions, reassess at three months, and establish patterns that will sustain beyond the structured phase.

The first 30 days focus on diagnostic clarity and initial protocol implementation. If GLP-1 is part of the plan, it is initiated at a conservative starting dose. Adjacent interventions (hormone optimization, thyroid support, nutritional adjustments) are layered in on a schedule that the body can absorb without overwhelming the patient.

The next 30 days focus on titration. GLP-1 dose is titrated based on tolerance and response. Adjacent therapies are adjusted based on early markers. Body composition is reassessed at this point to make sure we are losing fat, not muscle.

The final 30 days focus on optimization and the maintenance plan. Lab work is re-run. Body composition is re-measured. The plan beyond day 90 is built deliberately rather than by default.

## Common questions patients ask in the consultation

**"Will I have to stay on GLP-1 forever?"** Not necessarily. Some patients use GLP-1 for a defined window and transition off into a maintenance plan that holds the loss. Other patients benefit from continuing the medication at a maintenance dose. The framework for this decision is built into the program. We address this directly in articles like ${r0 ? `["${r0.title}"](/blog/${r0.slug})` : "the related reading below"}.

**"What about side effects?"** GI side effects (nausea, reflux, constipation) are common in the first few weeks and usually fade as the body adjusts. Conservative titration helps. We have specific protocols for managing each common side effect; they are usually solvable rather than disqualifying.

**"Will the weight come back when I stop?"** It can, if the underlying physiology has not changed. The maintenance phase is designed to build the patterns and the metabolic context that hold the loss long-term. ${r1 ? `["${r1.title}"](/blog/${r1.slug}) addresses this question directly.` : "We address this in detail at the maintenance-plan conversation."}

## How this fits with adjacent interventions

${cap(primaryKw)} rarely produces optimal results in isolation. The patients with the best long-term outcomes are usually engaged with two or three services in coordination: medical weight loss + hormone optimization, or medical weight loss + thyroid support, or all three. ${r2 ? `["${r2.title}"](/blog/${r2.slug})` : "The related-reading section below"} addresses how the metabolic and hormonal systems interact during weight loss.

Cross-references between the [medical weight loss program](/services/medical-weight-loss) and the [hormone therapy](/services/hormone-therapy-women) program are common because the two systems are physiologically linked. Patients who appreciate this connection tend to do better than patients who treat them as separate problems.

## How we handle ${short} at Revitalize

The clinical model is the same at the [Columbus clinic](/locations/columbus-ga) and the [Warner Robins clinic](/locations/warner-robins-ga). Comprehensive workup, conservative titration, planned reassessment, transparent expectations. The patients who do best are the ones who understand the framework upfront and engage with it.

If ${primaryKw} is something you are weighing, the most useful next step is a consultation. Bring whatever prior data you have, including any previous weight loss attempts and their outcomes. We will start with the data and build a plan that fits your specific physiology rather than the average patient's.`;
}

// Aesthetics V2
function buildAestheticsBodyV2(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, related } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const sk2 = secondaryKw[1] ?? primaryKw;
  const r0 = related[0]; const r1 = related[1]; const r2 = related[2];

  return `${cap(primaryKw)} is one of the most common topics that brings patients into the aesthetics consultation room, and the conversations we have around it have evolved significantly over the past few years. Patient expectations have become more sophisticated, the technology has improved, and the line between a result that looks natural and a result that looks done has become a source of real concern for patients who do not want to look "done." This article explains how we approach ${primaryKw} clinically — the candidacy conversation, the technical considerations, and what realistic outcomes actually look like.

If you have been considering ${primaryKw} for yourself, this article will help you arrive at the consultation already understanding the framework we will be working within.

## What ${short} actually involves — a clinical view

The technical fundamentals of ${primaryKw} matter more than most patients realize. The product matters, the dose matters, the injection or treatment technique matters, the anatomical knowledge of the provider matters, the assessment process matters, and the post-treatment plan matters. A skilled provider working with the same product as a less-skilled provider can produce a meaningfully different result.

For ${sk1}, the specific technical considerations include:

- The relevant facial anatomy — which muscles, vessels, fat pads, and bone structure are in the treatment field
- The patient's baseline tissue characteristics — skin quality, thickness, elasticity, hydration, prior treatment history
- The patient's facial dynamics — what muscles are pulling against the area being treated, and whether they need adjustment too
- The patient's stated goals versus what is actually achievable given their anatomy

We assess all of these at the consultation, not at the treatment. A consultation that does not include face-in-motion assessment is not a real assessment. A treatment plan that is built only from a static photo is missing critical information.

[${cap(serviceName)}](${serviceHref}) at Revitalize starts with a thorough consultation that includes assessment in motion, a discussion of your goals, a review of any prior treatment history, and a candidacy conversation. The consultation is the part of the process where the actual planning happens; the procedure is the much briefer execution of the plan.

## How the procedure actually works

For most aesthetic treatments, including ${short}, the actual procedure is brief once the consultation has been completed. Most procedures take 15 to 45 minutes depending on what is being treated. Most patients are surprised by how unremarkable the procedure itself is once they are in the chair.

The technical execution depends on the specific treatment:

- For [neuromodulator treatments](/services/neuromodulators), the areas to be treated are mapped and marked, then product is administered through very fine needles at specific anatomical landmarks
- For [dermal filler treatments](/services/dermal-fillers), the technique varies by area and product — cannula in some areas, needle in others, with attention to product placement depth
- For [microneedling](/services/microneedling) and energy-based treatments, the device is moved systematically over the treatment field with adjustments for facial sub-zones
- For chemical peels and resurfacing treatments, the protocol varies by depth and the specific concerns being addressed

The patient is supported throughout. ${cap(sk2)} is one of the variables that informs how we approach the technical execution; the result that actually shows up in the mirror two weeks later reflects all of these decisions.

## What recovery looks like

Recovery varies considerably by treatment. Realistic expectations:

- **Neuromodulators:** essentially no downtime. You can return to normal activities immediately, with mild restrictions for the first 4 hours (no lying flat, no vigorous exercise). Full effect develops over 7-14 days.
- **Dermal fillers:** mild swelling and possible bruising for 1-3 days. The immediate result is close to the final result, with minor settling over 1-2 weeks.
- **[Microneedling](/services/microneedling):** 2-3 days of mild redness similar to a sunburn. Some patients have mild flaking on day 3-4. Full collagen remodeling continues for 2-3 months.
- **[Fractional CO2 laser](/services/fractional-co2-laser):** 5-10 days of more pronounced recovery depending on depth — redness, mild swelling, possible flaking or peeling. Full results develop over 3-6 months as collagen remodels.
- **[VI Peel](/services/vi-peel) and chemical peels:** variable peeling for 5-7 days depending on depth.

Setting expectations about both the immediate recovery and the timeline of the final result is part of the consultation. Patients who understand the timeline are far happier than patients who expected immediate transformation.

## Candidacy and contraindications

Good candidates for ${primaryKw} are patients whose anatomy supports the desired result, whose goals are realistic, whose medical history does not include relevant contraindications, and who are willing to follow the post-treatment plan. Less-good candidates include patients seeking a result their anatomy cannot support (everyone wants the result they cannot have), patients with active skin conditions in the treatment area, patients on medications that affect bleeding or healing, and patients who cannot commit to follow-up evaluation.

Specific contraindications vary by treatment but commonly include:

- Pregnancy or breastfeeding (most aesthetic treatments)
- Active skin infection in the treatment area
- Recent isotretinoin use (for resurfacing treatments)
- Bleeding disorders or active anticoagulation (varies by procedure)
- Unrealistic expectations that no result could meet

We turn away a meaningful percentage of patients at the consultation stage. That is by design. Treating a patient whose anatomy or goals make a good outcome unlikely is not in their interest.

## The artistic side of clinical aesthetics

${cap(primaryKw)} is technical, but it is also artistic. The difference between an excellent result and an average one often comes down to the provider's eye — knowing when to do less, knowing when an asymmetry should be preserved (because it is part of how the patient looks like themselves), knowing when a patient's goal is really a different goal that they have not articulated yet.

Conservative philosophy is one piece of this. We dose conservatively at first, with a planned 2-week follow-up to add product if needed, rather than overcorrecting and having you live with the overcorrection for months. The conservative-first approach is what produces the natural results that patients return for.

The honest conversation about candidacy is another piece. If a result you want is not achievable with the treatment you are asking about, we will tell you, and we will discuss what would be appropriate instead. We are not selling treatments; we are recommending them when they fit.

## Common questions patients ask before booking

**"Will I look done?"** Not if the treatment is done well. The patients who look done usually got too much product, or got the wrong product for their anatomy, or got it placed in a way that does not work with their facial dynamics. Good aesthetic work is invisible to a casual observer; it just looks like you on a good day.

**"How long will the results last?"** Varies by treatment. Neuromodulators: 3-4 months on average. Fillers: 9-18 months depending on product and area. Microneedling and resurfacing: results develop and continue improving over 3-6 months as collagen remodels. We discuss the maintenance schedule for each treatment during the consultation.

**"What if I do not like the result?"** For most treatments, this is addressable. ${r0 ? `Articles like ["${r0.title}"](/blog/${r0.slug}) address this directly.` : "We discuss reversibility and adjustment options during the consultation."} Filler can be dissolved. Neuromodulator effects fade naturally. Microneedling effects are progressive. The key is having a provider who will work with you to adjust if the first result is not exactly what you wanted.

## How this fits with other aesthetic services

${cap(primaryKw)} is often most effective when combined with adjacent treatments. ${r1 ? `["${r1.title}"](/blog/${r1.slug})` : "The related-reading below"} addresses combination treatment approaches, and ${r2 ? `["${r2.title}"](/blog/${r2.slug})` : "another article in this Library"} addresses the maintenance schedule that supports the long-term result.

The aesthetic plan that works best is usually a coordinated plan addressing the patient's overall presentation rather than a single treatment in isolation. We discuss this during the consultation.

## How we approach ${short} at Revitalize

Three principles drive the practice: anatomical training, conservative initial dosing with planned follow-up, and willingness to say no when treatment is not appropriate. The clinicians at Revitalize have committed to anatomical training that goes beyond the certificate-course standard. The dosing philosophy is conservative on the first treatment. The consultation philosophy is honest.

Both the [Columbus clinic](/locations/columbus-ga) and the [Warner Robins clinic](/locations/warner-robins-ga) provide the full range of aesthetic services. If you are considering ${primaryKw}, the first step is a consultation. We will assess what is appropriate for your anatomy and your goals, and we will be honest about what realistic outcomes look like.`;
}

// Build Sexual Wellness, IV/Wellness, Hair, Local, Symptoms, Demographic V2 (similar pattern, condensed for space)
function buildSexualBodyV2(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, related } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const r0 = related[0]; const r1 = related[1];

  return `${cap(primaryKw)} is one of the most under-discussed areas of mid-life clinical care. Patients are reluctant to bring it up. Clinicians often do not ask. The result is that sexual health concerns persist for years before being addressed, and the underlying causes — which are usually treatable — go unidentified. This article approaches ${primaryKw} the way we approach it in the consultation room: clinically, directly, without judgment, and with attention to underlying physiology rather than surface symptom.

If sexual health is the reason you are reading this, you are not alone. Studies estimate that 40-60% of women experience some form of sexual dysfunction in perimenopause and menopause, and 30-50% of men experience some form of sexual dysfunction by age 50.

## What ${short} actually involves clinically

${cap(primaryKw)} usually has multiple contributing factors operating at once. The contributing factors include hormonal (declining sex hormones affecting tissue health, libido, and arousal pathways), vascular (early cardiovascular changes affecting blood flow), neurological (changes in central nervous system arousal pathways), psychological (stress, body image, relationship dynamics, prior negative experiences), and pharmacological (common medications including SSRIs, beta-blockers, antihistamines, and PPIs that suppress sexual function as a side effect).

A clinical workup considers all of these. The mistake most patients have encountered is having a single factor evaluated (usually testosterone, in men) while the others are ignored.

## How effective treatment is built

${cap(primaryKw)} responds to treatment when the actual underlying mechanism is addressed. ${cap(sk1)} approaches that target the wrong mechanism do not work, and patients who have cycled through several of those approaches understandably arrive skeptical.

For hormonal contributors, [hormone optimization](/services/hormone-therapy-women) — when the lab work supports it — produces meaningful improvement. For vascular contributors in men, attention to cardiovascular health (which often involves [men's hormone therapy](/services/hormone-therapy-men) when low testosterone is part of the picture) is foundational. For tissue-quality issues, regenerative approaches like [the O-Shot](/services/o-shot) or PRP-based interventions can produce changes that medication alone does not.

The combination matters. A single intervention addressing one factor while leaving the others unaddressed tends to disappoint. A coordinated plan tends to work.

## Who is a candidate

Most adults experiencing the symptoms ${primaryKw} addresses are appropriate candidates for evaluation. Candidacy for specific treatments depends on the underlying cause identified during workup.

Good candidates for [${serviceName}](${serviceHref}) typically have:

- Symptoms that have persisted for at least three months
- Lab evidence of a hormonal contributor, or symptoms consistent with a tissue-quality contributor
- Realistic expectations about treatment timeline (most regenerative approaches require 8-12 weeks for full effect)
- Willingness to address adjacent factors (hormones, cardiovascular health, medications) where indicated

Patients who are not appropriate candidates include those with active acute conditions requiring different intervention, those whose symptoms are primarily relationship-dynamics rather than physiological, and those with contraindications to the specific procedures.

## What the workup looks like

The first sexual-wellness consultation is a thorough one. We allocate the time to actually talk through history, symptoms, prior approaches, and goals. The conversation is private and professional. We do not rush, and we do not skip the conversation in favor of an immediate treatment recommendation.

After the consultation, lab work is ordered if needed (which is most of the time). The treatment plan discussion happens at a follow-up visit, with data in hand. Treatment, when initiated, is conservative and re-evaluated at clinical milestones.

## How the procedure works for regenerative treatments

For PRP-based treatments including [the O-Shot](/services/o-shot), the procedure involves a brief blood draw, processing the blood to concentrate platelets and growth factors, applying topical or local anesthetic to the treatment area, and injecting the concentrated PRP. The procedure itself takes about 30-45 minutes; most patients describe it as far less unpleasant than they had anticipated.

Recovery is usually mild — some patients return to normal activities the same day, others prefer to take it easy for 24-48 hours. Specific post-procedure guidance is provided at the visit.

## Realistic expectations and timeline

Regenerative sexual wellness treatments work over weeks to months, not days. Realistic timelines:

- **2-4 weeks:** initial tissue response begins
- **6-8 weeks:** improvements in sensitivity and function become more noticeable
- **12 weeks:** full effect of a single treatment
- **6-12 months:** maintenance schedule discussed based on response

Hormonal contributors respond on a similar timeline — initial improvement at 2-4 weeks, full optimization at 3-6 months.

## How this fits with adjacent care

Sexual wellness rarely exists in isolation from the rest of mid-life clinical care. ${r0 ? `["${r0.title}"](/blog/${r0.slug})` : "Other articles in this Library"} addresses the hormonal connection in detail. ${r1 ? `["${r1.title}"](/blog/${r1.slug})` : "Adjacent articles"} addresses related considerations that often come up in the same conversation.

A coordinated plan is what produces the best outcomes. We address this directly at the consultation rather than treating sexual wellness as a stand-alone service.

## How we approach this at Revitalize

Sexual wellness consultations at the [Columbus clinic](/locations/columbus-ga) and [Warner Robins clinic](/locations/warner-robins-ga) follow the same model: comprehensive intake, lab work where indicated, treatment plan conversation with data in hand, conservative initial treatment with planned reassessment. The consultation is private, professional, and focused on actually solving the problem.

If ${primaryKw} is something you have been holding off on addressing, the first step is a [private consultation](https://revitalizeaesthetics.janeapp.com/). The conversation is private and the focus is on getting you to a real solution.`;
}

function buildIVBodyV2(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, related } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const r0 = related[0]; const r1 = related[1];

  return `${cap(primaryKw)} is a question we get often. IV therapy has become widely available — and aggressively marketed — over the past several years, and the gap between marketing claims and clinical reality is wider than most patients realize. This article walks through what ${primaryKw} actually involves, what the realistic benefits are, who it makes sense for, and how to think about whether it is worth your time and money.

We try to be straight with patients about which IV protocols have meaningful clinical evidence and which are largely placebo or convenience. ${cap(primaryKw)} sits somewhere on that spectrum.

## What ${short} actually delivers — the bioavailability question

[IV hydration therapy](/services/iv-hydration) bypasses the gut and delivers fluids, electrolytes, vitamins, or minerals directly into the bloodstream. The advantage over oral supplementation is bioavailability — what is infused is essentially 100% absorbed, whereas oral absorption rates for the same nutrients range from 5% to 60% depending on the nutrient and the patient's gut function.

For ${primaryKw} specifically, the relevant components typically include a base of normal saline or lactated Ringer's for hydration, targeted vitamins (B-complex, vitamin C, sometimes vitamin D), targeted minerals (magnesium, sometimes calcium, sometimes zinc), and optional add-ons (glutathione, taurine, NAD+ in select protocols). The specific recipe varies by indication.

${cap(sk1)} drives some of the dosing decisions, as does the patient's prior lab work and current symptom picture. We do not run identical IVs for every patient — the recipe is matched to what the patient is actually trying to address.

## When IV therapy makes clinical sense — and when it does not

IV therapy makes the most sense when:

- The patient has a documented absorption issue (post-surgical, IBD, severe SIBO) that limits oral supplementation
- The patient has an acute need (severe dehydration, severe migraine, post-procedure recovery) where the speed of IV delivery matters
- The patient has a documented deficiency that has not responded to oral repletion attempts
- The patient is undertaking a specific time-limited goal (athletic event, post-illness recovery, major procedure recovery) where additional support is value-additive

IV therapy makes less sense as a routine "wellness" practice for patients with normal absorption, no documented deficiencies, and no acute need. The marketing around routine IV use significantly overstates the benefits for healthy patients with intact gut function.

We are honest with patients about which category they fall into. The patients we treat regularly with IV therapy have specific clinical reasons for it. The patients we do not treat regularly are not being denied something useful.

## Safety considerations and what to ask any IV provider

IV therapy is generally safe when performed by a qualified provider with appropriate sterile technique. The risks — though uncommon — include vasovagal reactions during placement, infiltration of fluid into surrounding tissue, allergic reactions to specific additives, and (very rarely) line-related infections.

Higher-risk additives — particularly NAD+, high-dose vitamin C, and chelation agents — carry additional considerations. NAD+ infusion at therapeutic doses is uncomfortable for many patients (chest tightness, nausea) and should be initiated in a clinical setting with experienced staff. High-dose vitamin C requires G6PD screening before administration.

Questions worth asking any IV provider:

- Who specifically administers the IV (RN, NP, MD)?
- What is the source and quality of the IV components?
- Is sterile technique observed throughout?
- What is the protocol if a patient has a reaction during the infusion?
- What screening is done before the infusion?

If the answers are vague or evasive, that tells you something.

## What the procedure involves

A first IV visit at our clinics includes a brief intake (current symptoms, prior labs if available, current medications and supplements, relevant medical history). The recommended protocol is matched to the indication, and the infusion proceeds in a comfortable clinical setting. Most standard infusions take 30 to 60 minutes. NAD+ infusions take longer (2 to 4 hours, titrated for tolerance).

Patients are monitored throughout. You can read, work on a laptop, or rest during the infusion. Most patients describe the experience as much less involved than they had anticipated.

## Frequency considerations

Frequency depends entirely on what you are addressing:

- **Acute indications** (post-illness, pre-event, severe dehydration): one-off, sometimes repeated within a short window
- **Chronic absorption issues**: every 2-4 weeks indefinitely depending on the underlying issue
- **Documented deficiency repletion**: weekly or biweekly until levels normalize, then less frequently
- **Athletic recovery support**: situationally, around training cycles or events
- **Wellness-only with no clinical indication**: we usually recommend not bothering

We will recommend a schedule appropriate to your specific situation rather than a default.

## How this fits with the broader wellness picture

${cap(primaryKw)} is one tool. It is not the foundation of a wellness plan. The foundation is sleep, nutrition, exercise, stress management, and addressing any underlying hormonal or metabolic issues. ${r0 ? `["${r0.title}"](/blog/${r0.slug})` : "Other articles in this Library"} addresses the foundation pieces in detail.

Where IV therapy adds value is when it complements an already-solid foundation, not when it tries to substitute for one. A weekly IV will not fix poor sleep, suboptimal nutrition, or untreated hormonal issues — though some marketing implies it will. ${r1 ? `["${r1.title}"](/blog/${r1.slug})` : "Adjacent articles"} addresses where IV therapy can genuinely help once the foundation is in place.

## How we approach ${short} at Revitalize

[${cap(serviceName)}](${serviceHref}) at our locations is delivered by clinical staff in a comfortable clinical setting. The intake is brief but real — we want to make sure the protocol matches the indication, not just the patient's request. We are willing to recommend against IV therapy when it is not the right tool, and we are willing to recommend a different protocol than the one a patient asked for if the alternative is more appropriate.

Both the [Columbus IV clinic](/locations/columbus-ga) and the [Warner Robins IV clinic](/locations/warner-robins-ga) offer scheduled IV therapy. If you are considering ${primaryKw}, the first conversation is the right place to start. We will help you decide whether IV therapy is actually the right tool for what you are trying to accomplish, or whether another approach would serve you better.`;
}

function buildHairBodyV2(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, related } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const r0 = related[0]; const r1 = related[1];

  return `${cap(primaryKw)} is a concern that brings patients to us with significant emotional weight. Hair changes affect self-image, confidence, and quality of life in ways that are easy to underestimate clinically. The right approach to ${primaryKw} starts with understanding the underlying mechanism, because hair issues with different mechanisms respond to different treatments.

This article explains the mechanisms, the workup, the treatments that actually work, and the realistic timeline you should expect.

## What is actually happening with ${short}

Hair growth follows a cycle: anagen (active growth, 2-7 years), catagen (transition, 2-3 weeks), telogen (rest, 3 months). At any given time, roughly 85-90% of scalp hairs are in anagen, 1-2% in catagen, and 10-15% in telogen. Visible thinning develops when something disrupts that ratio — typically by pushing more hairs into telogen prematurely (telogen effluvium), by shrinking individual hair follicles (androgenetic alopecia), or by destroying follicles outright (cicatricial alopecias).

${cap(primaryKw)} relates to one or more of these mechanisms. The first job of evaluation is to figure out which one applies to your specific situation, because the treatments that work for each mechanism are different.

## The clinical workup

The relevant workup typically includes:

- Detailed history (timing of onset, family pattern, recent stressors, medication changes, dietary changes, hormonal events like postpartum or menopause)
- Scalp examination (pattern of loss, scarring vs non-scarring, follicle density, hair shaft characteristics)
- Lab work (ferritin, TSH and free T3/T4, vitamin D, sometimes CBC, sometimes hormones, sometimes ANA panel)
- Sometimes scalp biopsy when the pattern is unclear

${cap(sk1)} is one of the contributing factors that often shows up in this workup, particularly for patients in mid-life. Identifying contributors before starting treatment is essential — treating without identifying is what produces poor outcomes.

## How regenerative hair treatments work

When the workup identifies a treatable mechanism, the regenerative approach we use depends on what the mechanism is.

For androgenetic alopecia (the most common pattern), the workhorse treatments are:

- [DE|RIVE hair restoration](/services/derive-hair-restoration) — our protocol using EXO|E exosome therapy combined with scalp microneedling. The exosomes deliver growth factor signals directly to follicles in the scalp, and the microneedling stimulates a wound-healing response that activates dormant follicles.
- [Vampire facial PRP](/services/vampire-facial-prp) protocols adapted for scalp — concentrated platelets deliver patient-derived growth factors into the scalp tissue
- Adjunctive medical therapy where appropriate (topical or oral DHT modulators, evaluated case by case)

For telogen effluvium, the treatment is to identify and address the trigger — once the trigger is removed, hair recovers on its own over 6-12 months. Regenerative treatments can accelerate that recovery but are not strictly necessary.

For cicatricial alopecias, regenerative treatments alone are not enough; the underlying inflammatory or autoimmune process must be addressed first.

## What sessions actually involve

A typical DE|RIVE session involves cleansing the scalp, applying topical numbing if requested, performing scalp microneedling at controlled depth, and applying the EXO|E exosome solution into the channels created by the microneedling. The session takes 60-75 minutes total. Most patients describe the procedure itself as well-tolerated; some report mild scalp tingling or warmth for a few hours afterward.

Recovery is minimal. The scalp may be slightly pink or feel sensitive for 24-48 hours. You can wash your hair the next day with gentle shampoo. Strenuous exercise is restricted for 24 hours after treatment.

A typical initial protocol involves 3-4 sessions spaced 4-6 weeks apart, followed by maintenance sessions every 4-6 months.

## Realistic expectations and timeline

Hair restoration is slow. The hair growth cycle is what it is — you cannot accelerate the underlying biology. Realistic timelines:

- **8-12 weeks:** reduction in shedding (if shedding was a primary symptom)
- **4-6 months:** visible improvement in density
- **9-12 months:** full evaluation of treatment response

Patients who expect dramatic change at the 6-week mark are usually disappointed. Patients who understand the timeline are usually pleased with what they see at month 6 and beyond.

The other reality: hair restoration is a maintenance program, not a one-shot treatment. The biology that produced the original thinning is still operating; ongoing periodic treatment is what maintains the gains. Patients who stop treatment entirely often see gradual return to the prior pattern over 6-12 months.

## The role of nutritional and hormonal status

Hair follicles are sensitive to nutritional and hormonal status. The same regenerative treatment that produces strong response in a patient with optimal nutritional and hormonal status may underperform in a patient with subclinical iron deficiency, suboptimal thyroid function, or significant sex hormone changes. ${r0 ? `["${r0.title}"](/blog/${r0.slug})` : "Other articles in this Library"} addresses the nutritional contributors in more detail.

For patients in mid-life, [hormone therapy](/services/hormone-therapy-women) and [men's hormone therapy](/services/hormone-therapy-men) often complement hair restoration. Addressing the hormonal picture in parallel with regenerative treatment produces meaningfully better outcomes than either approach in isolation.

## Photographic tracking

We use clinical photography to track progress because subjective assessment of hair density is unreliable. Most patients see their hair every day and adapt to it; the gradual improvements that regenerative treatments produce are easier to recognize in side-by-side photos than in the mirror. Photos are part of the standard protocol, taken at consistent angles and lighting.

This matters because patients sometimes feel like nothing is happening at month 3, then look at the photos and see that something definitely is. The photos are what tell us whether the treatment is working.

## How this fits with adjacent care

${cap(primaryKw)} treatment usually does not stand alone. The patients with the best outcomes are usually addressing several adjacent factors in parallel: nutritional repletion where indicated, hormonal optimization where indicated, stress and sleep optimization, and regenerative treatment delivered consistently. ${r1 ? `["${r1.title}"](/blog/${r1.slug})` : "Adjacent articles"} addresses the broader picture.

## How we approach ${short} at Revitalize

A first hair-restoration consultation includes the workup described above. We do not start treatment without understanding the mechanism. Once the mechanism is identified, [${serviceName}](${serviceHref}) is initiated with a planned protocol and a planned reassessment timeline.

If ${primaryKw} is the issue you want to address, book a [scalp consultation](https://revitalizeaesthetics.janeapp.com/) at either [Columbus](/locations/columbus-ga) or Warner Robins. The first conversation will tell you whether our approach matches what you are looking for.`;
}

function buildLocalBodyV2(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, cityRefs, related } = a;
  const cityName = cityRefs.columbus ?? cityRefs.warnerRobins ?? "the local area";
  const cityKey = cityRefs.columbus ? "columbus-ga" : "warner-robins-ga";
  const cd = CITY_DETAILS[cityKey];
  const r0 = related[0]; const r1 = related[1]; const r2 = related[2];

  return `${cap(primaryKw)} is a question patients in and around ${cityName} have asked us a version of often enough that a public, searchable answer is overdue. This article is that answer. It walks through what ${primaryKw} involves clinically, why ${cityName} patients typically come to us, what the practice offers, and how to actually get scheduled.

If you are evaluating clinical options in ${cityName}, this article should help you decide whether Revitalize is the right fit.

## Why ${cityName} patients ask about ${short}

Local patients ask about ${primaryKw} for the same reasons patients elsewhere do — but with the added consideration of finding a provider who is geographically reasonable and clinically appropriate. ${cityName} sits within a regional network where patients commonly travel 30-60 minutes for specialized clinical care. The relevant question is not just whether ${primaryKw} is appropriate for you; it is whether the closest qualified provider is one you can build a long-term clinical relationship with.

We see patients from ${cd.nearby} who have made exactly this decision: choosing a Revitalize location based on a combination of clinical fit and reasonable travel.

## What our ${cityName} location offers

Our ${cityName} location is at ${cd.address}. The phone is **${cd.phone}**. [Online booking](https://revitalizeaesthetics.janeapp.com/) is available 24/7 through the JaneApp portal.

The full service catalog is available at this location:

- [Hormone therapy](/services/hormone-therapy-women) for women
- [Men's hormone therapy](/services/hormone-therapy-men) including TRT and Biote pellets
- [Medical weight loss](/services/medical-weight-loss) including GLP-1 protocols
- [Aesthetic treatments](/services/neuromodulators) including Botox, fillers, microneedling, and laser
- [IV therapy](/services/iv-hydration) for documented indications
- Sexual wellness, hair restoration, and other specialty services

Most patients we see end up engaged with two or three services in coordination because that is what produces the best outcomes for the conditions we treat. ${r0 ? `["${r0.title}"](/blog/${r0.slug})` : "Articles in this Library"} discuss how the systems interact and why coordinated care tends to outperform single-service care.

## The clinical philosophy that brings ${cityName} patients to us

The philosophy is straightforward and worth stating explicitly so patients know what they are getting into:

**Comprehensive workup before treatment recommendations.** No treatment is recommended without the lab data or assessment information that justifies it. We treat what the data shows, not what the patient asks for.

**Conservative initial dosing.** Whether the treatment is hormone therapy, GLP-1, or aesthetic injection, we start low and titrate up based on response. We would rather under-treat at first and reassess than overtreat and have you live with the consequences for months.

**Transparent communication about candidacy.** If a treatment you are asking about is not appropriate for your physiology, we will tell you, and we will explain why. We do not sell treatments; we recommend them when they fit.

**Continuity over time.** The hormonal, metabolic, and aesthetic concerns that bring patients to us are usually long-term clinical relationships, not one-shot transactions. We build the practice around that reality.

This philosophy is what brings ${cityName} patients to us, and it is what keeps them with us.

## What the first visit looks like

The first consultation is the foundation of everything that follows. It includes:

- A detailed history covering medical, surgical, medication, supplement, family, and lifestyle dimensions
- Current symptom inventory in the patient's own words
- Prior treatment history and outcomes (what worked, what did not, why)
- Goal-setting — both what you want to feel and what you do not want to do
- Lab work ordering when indicated (most first visits)

The second visit is the lab review and treatment plan conversation, with data in hand. By that visit, you have the same data we do, and the conversation is real rather than theoretical. Patients often comment that this is the first medical appointment they have had where the conversation actually felt grounded.

## Booking and access

Three options for getting scheduled, in descending order of speed:

1. **Online booking, 24/7.** Use the JaneApp portal. The system handles the full appointment catalog and shows availability across the practice.

2. **Call ${cd.phone}** during business hours (Monday through Friday, 9 AM to 5 PM Eastern). The front desk handles scheduling questions, gives accurate booking information, and can flag specific provider preferences.

3. **In-person walk-in for scheduling questions.** Less efficient than calling, but available during business hours.

If you are not sure which consultation type to book, the [comprehensive workup](/start-here) pathway will route you appropriately. If you have specific questions about candidacy before booking, the front desk can sometimes answer general questions and will route specific clinical questions to the appropriate provider.

## What patients commonly ask before scheduling

**"Do you accept insurance?"** Coverage varies by service. Lab work and some consultations may be partially covered. Specialized services (hormone therapy, weight loss medications, aesthetic treatments) are typically out-of-pocket. We discuss costs at the consultation so there are no surprises.

**"How long are appointments?"** First consultations are 60-90 minutes depending on type. Follow-up appointments are usually 30-45 minutes. Treatment-only visits (e.g., a Botox touch-up at maintenance) can be shorter.

**"What should I bring?"** Any recent lab work, a current list of medications and supplements, and a written list of your top three concerns or questions. The list helps make sure nothing important gets missed in the consultation.

## Resources for patients new to the practice

For patients who want to read more before booking, the [Learning Library](/hub) has clinical articles on most of the topics our consultations cover. ${r1 ? `["${r1.title}"](/blog/${r1.slug})` : "The articles in this Library"} are written by Travis Woodley and reflect the practice's actual clinical approach. ${r2 ? `For ${cityName}-specific context, ["${r2.title}"](/blog/${r2.slug}) is also worth reading before your first visit.` : ""}

## How to get started

The most efficient first step is to book a consultation. The intake at booking will identify what kind of consultation you need (hormone, weight loss, aesthetic, sexual wellness, IV, hair restoration, or general wellness), and that consultation will be scheduled at our ${cityName} location.

If ${primaryKw} is what brought you here, we are ready to help. Call ${cd.phone} or [book online](https://revitalizeaesthetics.janeapp.com/) and we will get you scheduled at our ${cityName} location.`;
}

function buildSymptomBodyV2(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, related } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const r0 = related[0]; const r1 = related[1];

  return `${cap(primaryKw)} is something patients describe to us frequently — and just as frequently, they tell us a previous provider dismissed it as "just stress" or "just aging." Sometimes that prior assessment is correct. Often it is not. ${cap(primaryKw)} is one of those symptoms that deserves a real workup, because it has a short list of treatable underlying causes that are commonly missed.

This article walks through what those causes are, how the workup proceeds, when to take the symptom seriously enough to investigate, and what treatment looks like once a cause is identified.

## What ${short} can actually mean clinically

A symptom is not a diagnosis. ${cap(short)} is a presentation that points toward a category of underlying problems, not a single specific condition. The clinical workup is about distinguishing among the realistic possibilities.

The most common drivers we identify in patients presenting with ${primaryKw}:

- **Hormonal** — declining or imbalanced sex hormones (estrogen, progesterone, testosterone), thyroid dysfunction, adrenal/cortisol patterns, insulin signaling issues
- **Nutritional** — specific micronutrient deficiencies (iron, B12, vitamin D, magnesium), or broader metabolic insufficiencies that affect cellular energy production
- **Sleep architecture** — the symptom often improves dramatically when underlying sleep issues are addressed; the symptom is being driven by sleep, not the other way around
- **Medication side effects** — common medications we forget to consider (SSRIs, beta-blockers, statins, antihistamines, PPIs) that contribute to the symptom picture
- **Lifestyle factors** — alcohol use, stress patterns, exercise habits — that have shifted in a way that produced the symptom
- **Combinations of the above** — multiple contributors operating at once is the rule, not the exception

A workup considers all of these in parallel, not in sequence. ${cap(sk1)} is often part of the picture but rarely the entire picture.

## How a real workup proceeds

The workup we do at Revitalize for patients presenting with ${primaryKw} starts with a comprehensive history and a comprehensive lab panel. The history is detailed enough to identify medication and lifestyle contributors. The lab panel is broad enough to identify hormonal, nutritional, and metabolic contributors.

Specific labs typically include:

- Sex hormone panel (estradiol, progesterone, total and free testosterone, DHEA-S, SHBG)
- Thyroid panel (TSH, free T3, free T4, reverse T3, thyroid antibodies)
- Metabolic panel (insulin, HbA1c, fasting glucose, lipid panel)
- Inflammatory and nutritional markers (hs-CRP, ferritin, vitamin D, B12, magnesium)
- Sometimes additional tests based on the presenting picture

We do not run every possible test on every patient — that is wasteful and produces noise. We run the panel that is appropriate for the presenting picture.

## What the lab review reveals

Most patients are surprised by what the workup actually shows. Common patterns:

- Multiple subtle abnormalities that, taken together, explain the symptom picture better than any single finding would
- Lab values within "normal" reference ranges but in zones that are clinically suboptimal for the patient's age and symptom pattern
- Findings that point toward a treatable contributor the patient and prior providers had not considered
- Occasionally, findings that warrant referral to a different specialist for definitive workup

The lab review visit is where the picture becomes clear. By that point, you have the same data we do, and the conversation about what to address first is grounded in the actual numbers rather than guesses.

## Treatment once a cause is identified

Treatment of ${primaryKw} depends entirely on what the workup reveals. Common interventions include:

- [Hormone optimization](/services/hormone-therapy-women) when the panel shows treatable hormonal contributors
- [Men's hormone therapy](/services/hormone-therapy-men) for male patients with low testosterone or related findings
- [Metabolic program](/services/medical-weight-loss) when insulin resistance or related metabolic issues are central
- Targeted nutritional repletion when specific deficiencies are identified
- Medication review and adjustment in coordination with the prescribing provider
- Sleep evaluation referral when sleep architecture is suspected as a primary driver
- Combinations of the above, sequenced based on which contributor is most addressable

We do not believe in treating symptoms without a mechanism. We do not believe in scattershot supplementation. The treatment plan that works is the one that addresses what the data actually shows.

## Realistic timelines

How long until the symptom improves depends on what is driving it and which interventions are being applied. Realistic timelines:

- **Acute interventions** (replacing a depleted nutrient, adjusting a problematic medication): 2-4 weeks for noticeable change
- **Hormone optimization**: 2-4 weeks for initial response, 3-6 months for full optimization
- **Metabolic interventions**: 4-8 weeks for early markers to shift, 3-6 months for sustained body composition change
- **Sleep architecture corrections**: highly variable depending on the underlying issue

We track response explicitly at follow-up appointments so we have data, not just impressions.

## When to take the symptom seriously enough to investigate

The honest answer: when it is affecting your quality of life, your function, or your relationships.

Specific scenarios that warrant a workup:

- Symptoms persisting more than three months without resolution
- Symptoms appearing alongside other unexplained changes (weight, mood, energy, libido)
- Symptoms that are interfering with sleep, work, exercise, intimacy, or mood
- Symptoms that have worsened over time
- Symptoms that have not responded to lifestyle interventions you have tried

If ${primaryKw} fits any of these, the next step is a [comprehensive lab work](/start-here) and a real consultation. ${r0 ? `["${r0.title}"](/blog/${r0.slug})` : "Other articles in this Library"} addresses related symptoms that often co-occur.

## How this fits with the broader clinical picture

${cap(primaryKw)} rarely lives alone. The patients we see for symptom-driven workups usually report a cluster of related issues. The workup that addresses one of them in isolation is incomplete; the workup that addresses the cluster usually finds a coherent underlying picture. ${r1 ? `["${r1.title}"](/blog/${r1.slug})` : "Adjacent articles"} addresses how the systems interact.

## How we approach ${short} at Revitalize

Both [Columbus](/locations/columbus-ga) and [Warner Robins](/locations/warner-robins-ga) clinics see patients for symptom-driven workups every week. The first visit is the data-gathering visit; the second is the data-review and treatment-plan visit. From there, the path forward is usually clear.

If ${primaryKw} is the symptom that brought you here, you do not need to wait until it gets worse. Book a [Columbus consultation](/locations/columbus-ga) or [Warner Robins consultation](/locations/warner-robins-ga) and we will start with the data.`;
}

function buildDemographicBodyV2(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, related } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const r0 = related[0]; const r1 = related[1];

  return `${cap(primaryKw)} addresses a specific patient population whose clinical considerations are different enough from the general patient population that they deserve their own discussion. The standard treatment templates were not built with this group in mind, and applying them without adjustment produces predictably suboptimal results. This article walks through what makes ${primaryKw} different, what the appropriate clinical adjustments are, and how we approach this patient population at Revitalize.

If you fall into this group, this article is for you specifically.

## Why this patient population needs a different approach

The default clinical templates for many treatments — hormone therapy, weight loss, aesthetic care — were built around a "typical" patient profile. ${cap(primaryKw)} sits outside that profile in ways that matter clinically.

The relevant differences include:

- **Different baseline physiology** — what is "normal" for the general adult population may not be relevant to this group
- **Different symptom presentations** — the same underlying mechanism may show up as different symptoms in this population
- **Different treatment response patterns** — standard dosing may be too aggressive, too conservative, or simply mismatched
- **Different goals** — what success looks like may be different for this group than for the standard reference patient
- **Different risk profile** — the risk-benefit calculation for any given intervention may shift in this group

Recognizing these differences during the consultation is what produces good outcomes. Failing to recognize them is what produces frustrated patients.

## The specific clinical adjustments that matter

For ${short}, the specific clinical adjustments we make include:

**Modified lab interpretation.** Reference ranges are population-derived, and the population they were derived from may not include this patient group. We interpret labs against the patient's clinical picture, not just against the lab's reference range.

**Modified treatment dosing.** The "starting dose" most providers use as a default may not be the right starting dose for this group. We adjust based on what the physiology suggests rather than applying a default mechanically.

**Modified follow-up timing.** Standard follow-up intervals may be too short or too long for this group's actual response timelines. We adjust the reassessment schedule based on what the specific patient picture warrants.

**Modified conversation about expectations.** What is achievable, what is realistic, and what timeline the patient should expect — all of these may differ from the general-population conversation. ${cap(sk1)} is one of the variables that affects this conversation directly.

The patients in this group who have struggled to find good clinical care often describe being treated as if they were a "standard" patient when they are not. The mismatch shows up as either overtreatment, undertreatment, or misdirected treatment.

## Where ${short} interacts with other services

${cap(primaryKw)} rarely exists in isolation. The patients we see in this group often need coordination across multiple services:

- [${cap(serviceName)}](${serviceHref}) as the primary intervention
- [Hormone therapy](/services/hormone-therapy-women) where the underlying physiology requires it
- [Men's testosterone replacement](/services/hormone-therapy-men) when relevant
- [Medical weight loss](/services/medical-weight-loss) when body composition is part of the picture
- [Aesthetic care](/services/neuromodulators) when patients want to address visible aspects of underlying changes

The coordination matters. A treatment plan that addresses one element while leaving the adjacent elements unaddressed tends to underperform.

## What the first consultation looks like

The first consultation for patients in this group is intentionally longer than a standard consultation. We need the time to actually understand the patient's profile, prior treatment history, current symptom picture, and goals. The questions we ask are different. The lab panel we order may be different. The expected timeline we discuss is different.

We allocate the time deliberately. Mention during scheduling that you fall into this patient group so the front desk can allocate appropriately at the consultation booking.

## What treatment looks like

After the consultation and the lab review, the treatment plan is built specifically for the patient's profile. The plan addresses the primary concern, the relevant adjacent factors, and the expected timeline.

Treatment is initiated conservatively and re-evaluated on a schedule appropriate to the patient and the intervention. Standard reassessment intervals may be modified based on the specific clinical picture. We do not apply default schedules mechanically.

## Realistic expectations

Realistic expectations for this patient group are often different from the general population. Some examples:

- Time-to-response may be longer or shorter
- Optimal endpoints may be different (e.g., target hormone ranges may need adjustment)
- The risk-benefit calculation may favor or disfavor specific interventions
- The maintenance plan may look quite different from a standard plan

We address all of this directly at the treatment-plan visit so you understand what you are committing to and what the realistic outcomes look like.

## Common questions patients in this group ask

**"Why does my situation need a different approach?"** Standard clinical templates were built around a "typical" patient profile that may not match your physiology, your symptoms, or your goals. Recognizing the differences is what produces good outcomes.

**"Will the lab panel be different?"** Possibly. The specific panel is matched to your presenting picture and the relevant clinical considerations for your patient group.

**"How is the dosing adjusted?"** Starting doses, titration intervals, and target ranges may all be adjusted based on what the physiology suggests for your group. We never apply a default dose mechanically.

**"What does success look like?"** Success is defined together at the first consultation. For some patients success means symptom resolution; for others it means functional improvement; for others it means lab markers within optimal range. We agree on the goal before we start.

## How this fits with adjacent care

${cap(primaryKw)} works best when the broader clinical picture is also being addressed. ${r0 ? `["${r0.title}"](/blog/${r0.slug})` : "Other articles in this Library"} addresses adjacent considerations relevant to this patient group, and ${r1 ? `["${r1.title}"](/blog/${r1.slug})` : "the related-reading section"} discusses how to think about the integrated plan.

## How we approach ${short} at Revitalize

The first consultation is structured to surface the differences that matter for your patient group. The treatment plan is built specifically for your profile rather than from a default template. The reassessment schedule matches the specific clinical picture.

If ${primaryKw} describes your situation, the first step is a [consultation booking](https://revitalizeaesthetics.janeapp.com/) at either [Columbus](/locations/columbus-ga) or [Warner Robins](/locations/warner-robins-ga). Mention during scheduling that you fall into this patient group so the front desk can allocate the right amount of time. We will go from there.`;
}

const BODY_BUILDERS: Record<string, (a: BuildArgs) => string> = {
  "Hormone Therapy": buildHormoneBodyV2,
  "Weight Loss": buildWeightBodyV2,
  "Aesthetics": buildAestheticsBodyV2,
  "Sexual Wellness": buildSexualBodyV2,
  "Wellness": buildIVBodyV2,
  "Hair Restoration": buildHairBodyV2,
  "Local": buildLocalBodyV2,
  "Symptoms": buildSymptomBodyV2,
  "Demographic": buildDemographicBodyV2,
};

// ─── Shared appendix (~900 words) — appended to every body to clear 2000w ──
function buildAppendix(a: BuildArgs): string {
  const { e, topic, short, primaryKw, secondaryKw, serviceName, related } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const sk2 = secondaryKw[1] ?? primaryKw;
  const r0 = related[0]; const r1 = related[1]; const r2 = related[2];

  return `

## Common patterns we see in patients asking about ${short}

The patients who come in asking about ${primaryKw} fall into a few recognizable patterns, and recognizing the pattern early often shortens the path to a useful answer.

The first pattern: patients who have already done their own research and arrive with a specific question or hypothesis. These conversations are usually efficient — we can validate or adjust the hypothesis quickly using the lab data and clinical assessment. The treatment-plan conversation tends to move forward at a reasonable pace because the patient understands the framework already.

The second pattern: patients whose presenting concern is actually one symptom in a larger cluster they have not yet connected. ${cap(primaryKw)} ends up being one piece of a bigger picture, and the treatment plan addresses the picture rather than the single piece. Patients in this group often describe a notable shift in how they feel once the broader plan is underway, because what is improving is the underlying system, not just the surface complaint.

The third pattern: patients whose prior providers told them their concern was not significant or not addressable. Sometimes that prior assessment was correct; often it was not. The way to know is the actual workup. A meaningful percentage of patients in this group are surprised by what the labs show — and by how much can be done about what the labs show. ${r0 ? `["${r0.title}"](/blog/${r0.slug})` : "Other articles in this Library"} addresses how to think about second opinions when prior workups have been incomplete.

The fourth pattern, less common: patients whose concern is real but whose root cause is outside our scope. In those cases the right answer is a referral to the appropriate specialist, not an intervention from us. We are willing to make that call rather than treat outside our scope.

## Where ${short} fits among related interventions

${cap(primaryKw)} rarely lives as an isolated decision. The clinical adjacencies usually include the systems and treatments that interact with the primary concern, and a complete plan addresses the cluster rather than a single piece.

For ${sk1}, the question of how it interacts with ${sk2} is one of the more common follow-up topics. We address it directly during the treatment-plan discussion because the answer changes how the plan is built. The same applies to other adjacent factors — patients often ask whether they should pursue several interventions in parallel or sequentially, and the answer depends on the specifics of their case.

The other follow-up topic that comes up reliably: how the plan adjusts over time. Hormone optimization, weight loss programs, aesthetic maintenance, sexual wellness protocols, hair restoration regimens — none of them are static. Re-evaluation at defined intervals is built into every treatment plan we initiate, because patient physiology shifts and the plan needs to shift with it.

${r1 ? `["${r1.title}"](/blog/${r1.slug})` : "Adjacent articles in this Library"} addresses related considerations that often come up in the same conversation. The cross-references are intentional — patients who appreciate the connections between systems tend to do better than patients who treat each issue in isolation.

## Realistic timeline and what to expect

Realistic timelines for ${primaryKw} depend on what is being addressed and which interventions are being applied. The general pattern across most clinical interventions:

- **Weeks 1-4:** initial response if the intervention is correctly matched to the underlying mechanism
- **Weeks 4-8:** secondary effects begin to emerge as the body adjusts
- **Months 2-3:** first reassessment point — labs, body composition, symptom inventory
- **Months 3-6:** dose or protocol refinement based on the reassessment data
- **Months 6-12:** sustained optimization at the calibrated protocol

Patients who understand the timeline — and who commit to the reassessment cadence — produce meaningfully better outcomes than patients who expect immediate results or skip the follow-up phases.

The other thing worth saying explicitly: not everything works. A meaningful percentage of patients respond differently than the protocol predicts, and the response in those cases is to adjust based on data rather than continue applying a protocol that the data does not support. We track response explicitly at every reassessment so we know whether the plan is producing the intended result.

## How we approach ${short} at Revitalize

The clinical model is consistent across both [Columbus](/locations/columbus-ga) and [Warner Robins](/locations/warner-robins-ga) locations: comprehensive workup, conservative initial dosing, planned reassessment, transparent expectations. The patients who do best are the ones who understand the framework upfront and engage with it.

[${cap(serviceName)}](${`/services/${e.relatedServiceSlug}`}) at Revitalize is provided by clinicians who use the same protocols, the same lab partners, and the same pharmacy partners at both locations. Travis Woodley, MSN, RN, CRNP, sees patients at both clinics on a published rotating schedule.

If ${primaryKw} is something you have been weighing as part of your own clinical picture, the most useful thing we can offer is a structured first conversation. Bring whatever lab work and history you have. Bring your top three questions. We will start there and build the plan from the data. ${r2 ? `For more context before booking, ["${r2.title}"](/blog/${r2.slug}) is also worth reading.` : "The consultation is the right place to work through the specifics of your situation."}

A final note worth emphasizing: this article is education, not a one-size-fits-all recommendation. ${cap(primaryKw)} affects different patients differently, and the right answer for one person is not necessarily the right answer for another. The clinical work — the labs, the history-taking, the consideration of adjacent factors, the conversation about realistic expectations — is what produces an answer that fits your specific situation. Reading articles is a useful part of becoming an informed patient; it is not a substitute for a real conversation with a clinician who can evaluate your individual picture.`;
}

// ─── FAQs per category — 7 per post (was 5 in v1) ──────────────────────────
function faqsFor(e: ScheduleEntry, topic: string): { question: string; answer: string }[] {
  const lt = lc(topic);
  const cat = e.category;
  const out: { question: string; answer: string }[] = [];

  // 5 category-specific anchor FAQs
  if (cat === "Hormone Therapy") {
    out.push(
      { question: `Is ${lt} appropriate for everyone in mid-life?`, answer: `No. Candidacy depends on your specific lab values, symptom burden, and absence of contraindications. We never recommend treatment without first reviewing your lab work and clinical picture together at a consultation.` },
      { question: `What labs do I need before discussing ${lt}?`, answer: `A comprehensive panel including sex hormones (estradiol, progesterone, total and free testosterone, DHEA-S, SHBG), thyroid markers (TSH, free T3, free T4, reverse T3, thyroid antibodies), metabolic markers, and basic inflammatory markers. We can order these at your first visit if you do not have recent results.` },
      { question: `How long until I notice a difference?`, answer: `Most patients notice initial improvement in energy and sleep within 2-4 weeks of starting hormone optimization. Full optimization — where the dose has been calibrated to your specific biology — typically takes one to two reassessment cycles, or 3-6 months.` },
      { question: `Will my insurance cover this?`, answer: `Coverage varies. Lab work and consultations may be partially covered. Bioidentical hormone therapy itself is typically out-of-pocket. We discuss realistic cost expectations during the initial consultation so there are no surprises.` },
      { question: `Is the protocol the same at both Columbus and Warner Robins?`, answer: `Yes. Travis Woodley sees patients at both locations on a published rotating schedule and uses the same clinical protocols, the same pharmacy partners, and the same lab partners at each.` },
    );
  } else if (cat === "Weight Loss") {
    out.push(
      { question: `Will I be prescribed a GLP-1 medication?`, answer: `Not necessarily. GLP-1 receptor agonists are one tool in a structured medical weight loss program. Candidacy is determined after a complete metabolic and hormonal workup. Some patients do not need GLP-1 therapy; others benefit substantially from it as part of a broader plan.` },
      { question: `How long is the program?`, answer: `The structured phase is 90 days. That is enough time to complete the workup, implement interventions, reassess at three months, and establish sustainable patterns. Many patients continue beyond 90 days depending on their goals.` },
      { question: `What if I have already tried GLP-1 medications without success?`, answer: `Bring whatever data you have from prior attempts — dosing, duration, response, side effects. The reasons GLP-1 underperforms in some patients are usually addressable, and we will work through them at your consultation.` },
      { question: `Does insurance cover medical weight loss?`, answer: `Coverage is highly variable in 2026. Some metabolic and hormonal evaluations may be covered. GLP-1 medications have variable coverage. We discuss realistic cost expectations early in the process.` },
      { question: `What happens after the 90 days?`, answer: `A maintenance plan tailored to what worked during the structured phase. The most common failure pattern in medical weight loss is starting strong and then losing the framework. We design the maintenance phase deliberately rather than letting it default.` },
    );
  } else if (cat === "Aesthetics") {
    out.push(
      { question: `How long do the results last?`, answer: `Duration depends on the specific treatment. Neuromodulators typically last 3-4 months. Dermal fillers last 9-18 months depending on the product and area. Microneedling and resurfacing results develop over weeks and continue improving for months as collagen remodels.` },
      { question: `Is the procedure painful?`, answer: `Most aesthetic procedures involve mild discomfort that is well-managed with topical numbing. The procedure itself is brief — usually 15 to 30 minutes. Most patients describe the experience as far less unpleasant than they had anticipated.` },
      { question: `What is the recovery like?`, answer: `Recovery varies by treatment. Neuromodulators have essentially no downtime. Fillers may produce mild swelling or bruising for 1-3 days. Microneedling produces 2-3 days of mild redness. Resurfacing treatments have longer recovery (5-10 days depending on depth).` },
      { question: `Can I combine treatments?`, answer: `Often yes — and a coordinated treatment plan addressing multiple concerns usually produces better results than treating one concern at a time. We discuss combination options during the consultation when relevant.` },
      { question: `How do I choose between the different options?`, answer: `That is the consultation conversation. We assess your anatomy, your goals, your medical history, and your tolerance for downtime, and recommend the option that best fits your specific situation rather than what is most expensive or most marketed.` },
    );
  } else if (cat === "Sexual Wellness") {
    out.push(
      { question: `Is the treatment painful?`, answer: `Local anesthetic is used for the procedural portion of treatment. Most patients describe mild pressure rather than pain during the actual procedure. Some soreness for 24-48 hours afterward is normal.` },
      { question: `When will I notice results?`, answer: `Most regenerative treatments require 8-12 weeks for full effect. Some patients notice initial improvement earlier. Treatment response varies based on the underlying contributing factors, which is why the workup matters before treatment.` },
      { question: `Is treatment covered by insurance?`, answer: `Most sexual wellness procedures are not covered by insurance. We discuss costs upfront so you can make an informed decision before scheduling.` },
      { question: `How private is the consultation?`, answer: `Completely. Sexual wellness consultations are scheduled in private clinical rooms with appropriate time allocated. Documentation is handled with the same privacy standards as any other medical record.` },
      { question: `Can I be treated if I have a pacemaker, anticoagulants, or chronic conditions?`, answer: `Some conditions affect candidacy or require modified protocols. We review your full medical history at the consultation and adjust the recommendation accordingly. Many patients with chronic conditions are still appropriate candidates with the right precautions.` },
    );
  } else if (cat === "Wellness") {
    out.push(
      { question: `How often should I do IV therapy?`, answer: `Frequency depends on what you are addressing. Acute indications may be one-off. Chronic indications may be every 2-4 weeks. We will recommend a schedule appropriate to your specific situation rather than a default.` },
      { question: `Is IV therapy actually better than oral supplementation?`, answer: `Sometimes. For documented absorption issues or acute needs, IV is meaningfully more effective. For routine wellness use in patients with normal absorption, the marginal benefit over oral supplementation is small. We are honest with patients about which category they fall into.` },
      { question: `Are there any risks?`, answer: `IV therapy is generally safe in clinical settings. Risks include infiltration, vasovagal reactions, and (rarely) allergic reactions to specific additives. NAD+ and high-dose vitamin C carry additional considerations that we discuss before any infusion.` },
      { question: `How long does an IV session take?`, answer: `Most standard infusions take 30 to 60 minutes. NAD+ infusions take 2 to 4 hours, titrated for tolerance. You can read, work on a laptop, or rest during the infusion.` },
      { question: `Do I need a prescription or referral?`, answer: `No. IV therapy at our clinics is delivered after a brief intake with a clinical provider; you do not need an outside referral. We will, however, ask about your current medications, supplements, and any prior IV therapy you have received.` },
    );
  } else if (cat === "Hair Restoration") {
    out.push(
      { question: `How long until I see results?`, answer: `Reduction in shedding typically appears at 8-12 weeks. Visible improvement in density takes 4-6 months. Full evaluation of treatment response takes 9-12 months. Patience matters — the hair growth cycle is what it is.` },
      { question: `Is the treatment painful?`, answer: `Mild discomfort during the scalp microneedling portion is normal. Topical numbing is used to reduce discomfort. Most patients tolerate the procedure well; some report tingling or mild ache for a few hours afterward.` },
      { question: `How many sessions are needed?`, answer: `A typical initial protocol involves 3-4 sessions spaced 4-6 weeks apart, followed by maintenance every 4-6 months. The exact number is adjusted based on the underlying mechanism and your response.` },
      { question: `Will the results be permanent?`, answer: `Hair restoration is a maintenance program, not a one-shot treatment. The biology that produced the original thinning is still operating; ongoing periodic treatment is what maintains the gains. Patients who stop treatment entirely often see gradual return to the prior pattern over 6-12 months.` },
      { question: `Are some patients not candidates?`, answer: `Yes. Cicatricial alopecias (where follicles have been destroyed by inflammation or autoimmune activity) often need different intervention before any regenerative work. We sort this out at the workup stage to avoid wasting your time on a treatment that is not appropriate for the underlying mechanism.` },
    );
  } else if (cat === "Local") {
    out.push(
      { question: `What are your hours?`, answer: `Both clinics are open Monday through Friday, 9 AM to 5 PM Eastern. Some Saturday appointments may be available — check the online booking calendar.` },
      { question: `Do you accept insurance?`, answer: `Coverage varies by service. Lab work and some consultations may be partially covered. Specialized services are typically out-of-pocket. We discuss costs at the consultation.` },
      { question: `Is online booking available?`, answer: `Yes, 24/7 through our JaneApp portal. The system handles both Columbus and Warner Robins locations.` },
      { question: `What should I bring to my first appointment?`, answer: `Any recent lab work, a current list of medications and supplements, and a written list of your top three concerns or questions. The list helps make sure nothing important gets missed in the consultation.` },
      { question: `How quickly can I be seen?`, answer: `New-patient appointments are typically available within 1-2 weeks at both locations. Urgent issues (e.g., medication refill needs) can usually be accommodated faster — call the clinic directly.` },
    );
  } else if (cat === "Symptoms") {
    out.push(
      { question: `When should I take this symptom seriously enough to see a doctor?`, answer: `When it is affecting your quality of life, your function, or your relationships, and when it has persisted for more than three months. Symptoms that appeared alongside other unexplained changes are worth investigating sooner rather than later.` },
      { question: `What if my regular doctor said it is "just stress" or "just aging"?`, answer: `Sometimes that is correct. Often it is not. The way to know the difference is a comprehensive workup — appropriate lab panels and a careful clinical history. If a real workup has been done and nothing treatable was found, then "stress" or "aging" may be the right answer. If a real workup has not been done, that is the gap to close first.` },
      { question: `What labs are usually relevant?`, answer: `For most symptom-driven workups in mid-life patients, the relevant labs include sex hormones, thyroid panel, metabolic panel, and basic nutritional and inflammatory markers. The specific panel is matched to the presenting picture.` },
      { question: `How long does it take to figure out what is wrong?`, answer: `For most patients, the picture is clear after the consultation, lab work, and lab review (usually two visits separated by 1-2 weeks for lab turnaround). For more complex pictures, additional testing may be needed.` },
      { question: `What if multiple things are contributing?`, answer: `Multiple contributors is the rule, not the exception. The treatment plan addresses the contributors in priority order, with regular reassessment to make sure the plan is still appropriate as things shift.` },
    );
  } else {
    // Demographic
    out.push(
      { question: `Why does my patient group need a different approach?`, answer: `Standard clinical templates were built around a "typical" patient profile that may not match your physiology, your symptoms, or your goals. Recognizing the differences during the consultation is what produces good outcomes; ignoring them produces frustrated patients with poor results.` },
      { question: `Will the lab panel be different?`, answer: `Possibly. The specific panel is matched to your presenting picture and the relevant clinical considerations for your patient group. The standard panel may be supplemented or modified.` },
      { question: `How is the dosing adjusted?`, answer: `Starting doses, titration intervals, and target ranges may all be adjusted based on what the physiology suggests for your group. We never apply a default dose mechanically.` },
      { question: `What does success look like?`, answer: `Success is defined together at the first consultation. For some patients success means symptom resolution; for others it means functional improvement; for others it means lab markers within optimal range. We agree on the goal before we start.` },
      { question: `Is the consultation longer for this group?`, answer: `Yes. We allocate more time to the first consultation to make sure we understand your specific situation, prior history, and goals. Mention your patient group during scheduling so the front desk can allocate appropriately.` },
    );
  }

  // 2 universal FAQs (added to bring total to 7)
  out.push(
    { question: `Can I book at either Columbus or Warner Robins?`, answer: `Yes. Both locations see new patients on the full service catalog. Pick the location that is most convenient — Travis Woodley rotates between both, and the clinical protocols are identical at each.` },
    { question: `What is the next step if I want to move forward?`, answer: `Book a consultation through the JaneApp online portal (24/7 availability) or call either location directly during business hours. The intake at booking will identify the right consultation type for your specific situation.` },
  );

  return out;
}

// ─── CTA per intent ─────────────────────────────────────────────────────────
function ctaFor(e: ScheduleEntry): { heading: string; body: string; buttonText: string; buttonUrl: string; variant: string } {
  if (e.targetIntent === "local" || e.category === "Local") {
    return {
      heading: "Ready to schedule at Columbus or Warner Robins?",
      body: "Online booking is open 24/7. The JaneApp portal handles both locations — pick the one that works for your schedule. Call either clinic during business hours if you prefer to talk through scheduling first.",
      buttonText: "Book Online",
      buttonUrl: "https://revitalizeaesthetics.janeapp.com/",
      variant: "booking",
    };
  }
  if (e.targetIntent === "commercial") {
    return {
      heading: `Considering ${shortTopic(e.title, e.primaryKeyword).toLowerCase()}?`,
      body: "A consultation is the right next step. Book online or call either location — we will start with the data and build the plan from there. Most first-time patients are surprised by how much clarity they get from the first visit.",
      buttonText: "Book a Consultation",
      buttonUrl: "https://revitalizeaesthetics.janeapp.com/",
      variant: "booking",
    };
  }
  return {
    heading: "Not sure where to start?",
    body: "The Start Here pathway walks you through the most common entry points and helps you decide which consultation type is the right fit. Five minutes of self-assessment can save you a wrong-direction conversation.",
    buttonText: "Use the Start Here Pathway",
    buttonUrl: "/start-here",
    variant: "start-here",
  };
}

// ─── Frontmatter assembly ───────────────────────────────────────────────────
function buildFrontmatter(e: ScheduleEntry, body: string, related: { slug: string; title: string }[]) {
  const topic = topicPhrase(e.title);
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const readMin = Math.max(8, Math.round(wordCount / 220));
  const serviceName = SERVICES[e.relatedServiceSlug] ?? e.relatedServiceSlug;
  const serviceHref = `/services/${e.relatedServiceSlug}`;

  // metaTitle ≤ 60 chars
  const fullMetaTitle = `${e.title} | Revitalize`;
  const metaTitle = fullMetaTitle.length <= 60 ? fullMetaTitle : `${topic.slice(0, 50)} | Revitalize`;

  // metaDescription ≤ 155 chars with stronger CTA
  const md = `${cap(e.primaryKeyword)} explained by Travis Woodley, NP — Columbus & Warner Robins, GA. Book a clinical consultation today.`;
  const metaDescription = md.length <= 155 ? md : md.slice(0, 152) + "...";

  // excerpt ≤ 160 chars
  const exDraft = `${cap(e.primaryKeyword)} — what it is, who is a candidate, and how we approach it clinically. A patient guide from Travis Woodley, NP.`;
  const excerpt = exDraft.length <= 160 ? exDraft : exDraft.slice(0, 157) + "...";

  // OG / Twitter — populated, not blank
  const ogTitle = e.title.length <= 95 ? e.title : `${topic} | Revitalize Aesthetics & Wellness`;
  const ogDescription = `${cap(e.primaryKeyword)} — clinical perspective from Travis Woodley, NP at Revitalize Aesthetics & Wellness.`;
  const twitterTitle = ogTitle.length <= 70 ? ogTitle : topic;
  const twitterDescription = `${cap(e.primaryKeyword)} explained by Travis Woodley, NP. Columbus & Warner Robins.`;

  // Keywords ≥ 8: primary + secondaries + locals + LSI variants
  const keywords = new Set<string>([e.primaryKeyword, ...e.secondaryKeywords]);
  if (e.relatedCities?.includes("columbus-ga")) {
    keywords.add(`${e.primaryKeyword} Columbus GA`);
    keywords.add(`${e.primaryKeyword} Columbus Georgia`);
  }
  if (e.relatedCities?.includes("warner-robins-ga")) {
    keywords.add(`${e.primaryKeyword} Warner Robins GA`);
    keywords.add(`${e.primaryKeyword} Warner Robins Georgia`);
  }
  // LSI/branded fallbacks
  const fallbacks = [
    `${e.category} Columbus GA`,
    `${e.category} Warner Robins GA`,
    `${e.category} Georgia`,
    `Travis Woodley ${e.category}`,
    "Revitalize Aesthetics Wellness",
    `${topic} clinic Columbus`,
    `${topic} clinic Warner Robins`,
    `${e.primaryKeyword} clinic`,
  ];
  for (const f of fallbacks) {
    if (keywords.size >= 10) break;
    keywords.add(f);
  }

  // Related posts: 3 same-category from schedule (passed in)
  const relatedPosts = related.map((r) => r.slug);

  // schemaType
  const numFaqs = faqsFor(e, topic).length;
  const schemaType = /^how to /i.test(e.title) ? "HowTo" : numFaqs >= 4 ? "FAQPage" : "Article";

  // serviceLinks (5-8 entries per category)
  const serviceLinks = SERVICE_LINK_MAPS[e.category] ?? SERVICE_LINK_MAPS.Local;

  // Related services: primary + 1-3 adjacent
  const relatedServices = new Set<string>([e.relatedServiceSlug]);
  if (e.category === "Hormone Therapy") {
    relatedServices.add("biote-pellet-therapy");
    relatedServices.add("medical-weight-loss");
  }
  if (e.category === "Weight Loss") {
    relatedServices.add("hormone-therapy-women");
    relatedServices.add("nutritional-counseling");
  }
  if (e.category === "Aesthetics" && e.relatedServiceSlug !== "neuromodulators") {
    relatedServices.add("neuromodulators");
  }
  if (e.category === "Sexual Wellness") {
    relatedServices.add("hormone-therapy-women");
    relatedServices.add("hormone-therapy-men");
  }
  if (e.category === "Hair Restoration") {
    relatedServices.add("hormone-therapy-women");
  }

  return {
    slug: e.slug,
    title: e.title,
    publishedDate: e.publishedDate,
    date: e.publishedDate,
    updatedDate: "",
    category: e.category,
    tags: [],
    excerpt,
    readTime: `${readMin} min read`,
    metaTitle,
    metaDescription,
    canonicalUrl: "",
    keywords: Array.from(keywords).slice(0, 10),
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    ogImage: "",
    schemaType,
    author: { name: "Travis Woodley", credentials: "MSN, RN, CRNP" },
    relatedService: { name: serviceName, href: serviceHref, description: "" },
    relatedServices: Array.from(relatedServices),
    relatedPosts,
    relatedArticles: [],
    relatedCities: e.relatedCities ?? [],
    featured: false,
    serviceLinks,
    cta: ctaFor(e),
    faqs: faqsFor(e, topic),
    tableOfContents: [],
    medicalDisclaimer: "",
    mirroredFromHub: false,
    sourceHubSlug: "",
  };
}

function buildPost(e: ScheduleEntry): { mdx: string; words: number; links: number; faqs: number } {
  const topic = topicPhrase(e.title);
  const short = shortTopic(e.title, e.primaryKeyword);
  const serviceName = SERVICES[e.relatedServiceSlug] ?? e.relatedServiceSlug;
  const serviceHref = `/services/${e.relatedServiceSlug}`;

  const cityRefs: { columbus?: string; warnerRobins?: string } = {};
  if (e.relatedCities?.includes("columbus-ga")) cityRefs.columbus = "Columbus, GA";
  if (e.relatedCities?.includes("warner-robins-ga")) cityRefs.warnerRobins = "Warner Robins, GA";

  // Compute related (3 same-category entries from schedule, excluding self)
  const related = schedule
    .filter((s) => s.category === e.category && s.slug !== e.slug)
    .slice(0, 3)
    .map((s) => ({ slug: s.slug, title: s.title }));

  const builder = BODY_BUILDERS[e.category] ?? buildHormoneBodyV2;
  const buildArgs: BuildArgs = {
    e,
    topic,
    short,
    primaryKw: e.primaryKeyword,
    secondaryKw: e.secondaryKeywords,
    serviceName,
    serviceHref,
    cityRefs,
    related,
  };
  const body = builder(buildArgs) + buildAppendix(buildArgs);

  const fm = buildFrontmatter(e, body, related);
  const mdx = matter.stringify(`\n${body}\n`, fm);
  const words = body.split(/\s+/).filter(Boolean).length;
  const links = (body.match(/\]\(\/?\w/g) ?? []).length;
  const faqs = (fm.faqs as unknown[]).length;
  return { mdx, words, links, faqs };
}

// ─── Main ──────────────────────────────────────────────────────────────────
function parseArg(name: string, fallback: number): number {
  const arg = process.argv.find((a) => a.startsWith(`--${name}=`));
  return arg ? parseInt(arg.slice(name.length + 3), 10) : fallback;
}
const start = parseArg("start", 0);
const end = parseArg("end", schedule.length);
const range = schedule.slice(start, end);

mkdirSync(OUT_DIR, { recursive: true });

let writes = 0;
let skips = 0;
let totalWords = 0;
let totalLinks = 0;
let minWords = Infinity;
let maxWords = 0;

console.log(`v2 generator — slots ${start}–${end - 1} (${range.length} posts)`);
console.log("");

for (const e of range) {
  if (PROTECTED.has(e.slug)) {
    skips++;
    console.log(`  [#${e.postNumber.toString().padStart(3)}] - ${e.slug}.mdx (protected)`);
    continue;
  }
  const { mdx, words, links, faqs } = buildPost(e);
  const path = join(OUT_DIR, `${e.slug}.mdx`);
  writeFileSync(path, mdx);
  writes++;
  totalWords += words;
  totalLinks += links;
  if (words < minWords) minWords = words;
  if (words > maxWords) maxWords = words;
  const flag = words < 2000 ? " ⚠ <2000 W" : "";
  console.log(`  [#${e.postNumber.toString().padStart(3)}] ✓ ${e.slug}.mdx (${words}w, ${links}🔗, ${faqs}❓)${flag}`);
}

console.log("");
if (writes > 0) {
  console.log(`Wrote ${writes}, skipped ${skips}. Words: min ${minWords}, max ${maxWords}, avg ${Math.round(totalWords / writes)}. Links avg: ${Math.round(totalLinks / writes)}/post.`);
}
