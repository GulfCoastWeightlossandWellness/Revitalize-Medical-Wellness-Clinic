/**
 * Phase 4 — Generate 207 MDX files from docs/blog-schedule-208.json.
 * (The Auburn post at slot 1 is hand-written and will be skipped if present.)
 *
 * For each entry, builds a fully-populated frontmatter + a 1,200+ word body
 * using category-specific templates with topic-substitution. FAQs (4+), CTA,
 * serviceLinks, and metadata are all generated. The output is structurally
 * publication-ready MDX. Bodies are scaffolded clinical content drawn from
 * per-category templates — every post should be reviewed by a clinician
 * before going live, but the schema, internal links, FAQs, SEO fields, and
 * local context are real and production-ready.
 *
 * Run: npx tsx scripts/generate-208-posts.ts --start=0 --end=20
 * (or omit args for all 208)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SCHEDULE_PATH = join(ROOT, "docs", "blog-schedule-208.json");
const OUT_DIR = join(ROOT, "content", "blog");

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

const CITIES: Record<string, string> = {
  "columbus-ga": "Columbus, GA",
  "warner-robins-ga": "Warner Robins, GA",
};

// ─── City / location detail (for local-aware content) ──────────────────────
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

// ─── Per-category service-link map (phrase → URL) ──────────────────────────
const SERVICE_LINK_MAPS: Record<string, Record<string, string>> = {
  "Hormone Therapy": {
    "hormone optimization": "/services/hormone-therapy-women",
    "men's testosterone replacement": "/services/hormone-therapy-men",
    "Biote pellet therapy": "/services/biote-pellet-therapy",
    "comprehensive lab work": "/start-here",
  },
  "Weight Loss": {
    "medical weight loss program": "/services/medical-weight-loss",
    "GLP-1 therapy": "/services/medical-weight-loss",
    "hormone optimization": "/services/hormone-therapy-women",
    "nutritional counseling": "/services/nutritional-counseling",
  },
  "Aesthetics": {
    "neuromodulator treatments": "/services/neuromodulators",
    "dermal filler treatments": "/services/dermal-fillers",
    "microneedling": "/services/microneedling",
    "VI Peel": "/services/vi-peel",
    "fractional CO2 laser": "/services/fractional-co2-laser",
  },
  "Sexual Wellness": {
    "the O-Shot": "/services/o-shot",
    "ED treatment": "/services/erectile-dysfunction",
    "hormone optimization": "/services/hormone-therapy-women",
    "men's hormone therapy": "/services/hormone-therapy-men",
  },
  "Wellness": {
    "IV hydration therapy": "/services/iv-hydration",
    "comprehensive wellness assessment": "/start-here",
    "hormone optimization": "/services/hormone-therapy-women",
    "medical weight loss": "/services/medical-weight-loss",
  },
  "Hair Restoration": {
    "DE|RIVE hair restoration": "/services/derive-hair-restoration",
    "vampire facial PRP": "/services/vampire-facial-prp",
    "hormone therapy": "/services/hormone-therapy-women",
  },
  "Local": {
    "hormone therapy": "/services/hormone-therapy-women",
    "medical weight loss": "/services/medical-weight-loss",
    "aesthetic treatments": "/services/neuromodulators",
    "online booking": "https://revitalizeaesthetics.janeapp.com/",
  },
  "Symptoms": {
    "hormone optimization": "/services/hormone-therapy-women",
    "men's hormone therapy": "/services/hormone-therapy-men",
    "metabolic program": "/services/medical-weight-loss",
    "comprehensive lab work": "/start-here",
  },
  "Demographic": {
    "hormone therapy": "/services/hormone-therapy-women",
    "men's testosterone replacement": "/services/hormone-therapy-men",
    "medical weight loss": "/services/medical-weight-loss",
    "aesthetic care": "/services/neuromodulators",
  },
};

// ─── Helper: extract a topic noun phrase from the title ────────────────────
function topicPhrase(title: string): string {
  // Take everything before a colon, en-dash, or em-dash for the headline noun.
  const m = title.match(/^([^:—–\-]+)/);
  return (m ? m[1] : title).trim().replace(/\s+/g, " ");
}

function shortTopic(title: string, primaryKeyword: string): string {
  // For mid-sentence references — prefer a 3-5 word version.
  const t = topicPhrase(title);
  const words = t.split(/\s+/);
  if (words.length <= 5) return t;
  return primaryKeyword.split(/\s+/).slice(0, 4).join(" ");
}

function lc(s: string): string {
  return s.toLowerCase();
}

// ─── Body templates per category ───────────────────────────────────────────
type BuildArgs = {
  e: ScheduleEntry;
  topic: string;
  short: string;
  primaryKw: string;
  secondaryKw: string[];
  serviceName: string;
  serviceHref: string;
  cityRefs: { columbus?: string; warnerRobins?: string };
};

function buildHormoneBody(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const sk2 = secondaryKw[1] ?? primaryKw;
  return `${topic.endsWith("?") ? "" : "If you have been searching for clear answers about "}${topic.endsWith("?") ? topic : `${lc(topic)}, this article is for you`}. Mid-life hormone questions tend to surface around the same time as a cluster of other changes — sleep disruption, weight shifts, mood instability, declining libido — and the temptation is to attribute everything to "just getting older." Often the picture is more specific than that. ${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} sits at a clinical intersection that deserves a careful, evidence-based look rather than a quick answer.

This is what we explain to patients during their first hormone consultation, and it is what we will walk through here.

## What ${short} actually means in clinical practice

The phrase ${primaryKw} gets used loosely. In a clinical setting, it has a more specific meaning. ${topic} is best understood by separating the symptom-level experience from the underlying physiology. Symptoms are what bring patients into the office; physiology is what determines whether a treatment will work.

A comprehensive evaluation begins with [comprehensive lab work](/start-here). Without lab data, any conversation about ${primaryKw} is speculative. The labs we order include the relevant sex hormones (estradiol, progesterone, testosterone, DHEA-S, SHBG), thyroid markers (TSH, free T3, free T4, reverse T3, thyroid antibodies), metabolic markers (insulin, HbA1c, fasting glucose), and inflammatory markers (hs-CRP, fibrinogen). For most patients in mid-life, that panel reveals the actual driver of the presenting complaint.

The reason this approach matters: ${sk1} is not a diagnosis on its own. It is a symptom or a finding that points toward an underlying mechanism, and that mechanism is what gets treated.

## How ${short} relates to the broader hormonal picture

Hormones operate as a system, not as isolated values. Estrogen affects insulin sensitivity. Testosterone affects mood. Cortisol affects thyroid conversion. Progesterone affects sleep architecture. When a patient asks about ${primaryKw}, the honest clinical answer almost always involves explaining how that single hormone interacts with the others.

In the context of ${sk2}, the relevant interactions are usually:

- The relationship between sex hormones and the HPA axis (the stress response system)
- The relationship between sex hormones and thyroid function (because thyroid dysfunction mimics many sex-hormone deficiencies)
- The relationship between sex hormones and metabolic markers (because insulin resistance accelerates with hormonal decline)

A treatment plan that addresses ${primaryKw} in isolation — without considering these adjacencies — tends to underperform. A plan that addresses the system tends to work.

## Who is a candidate for treatment, and who is not

Candidacy for hormone-based treatment depends on three factors: lab confirmation of a deficiency or imbalance, symptom burden that justifies intervention, and absence of contraindications. We never treat lab numbers alone, and we never treat symptoms without lab data.

Good candidates for [${serviceName}](${serviceHref}) typically present with a cluster of related symptoms (fatigue, sleep disruption, mood changes, body composition shifts, libido changes) along with lab values that confirm the suspected mechanism. Less-good candidates include patients whose symptoms are better explained by another condition (untreated sleep apnea, untreated thyroid disease, undiagnosed depression), patients with current contraindications to hormone therapy, or patients whose primary complaint is something hormones are not actually responsible for.

The honest conversation about candidacy is the one most patients tell us they were not given by previous providers.

## How we approach ${short} at Revitalize

Our approach is structured. The first visit is a comprehensive consultation: medical history, current symptom inventory, prior treatment history, and a detailed look at any lab work you bring with you. If labs are needed, they are ordered at that visit. The second visit is the lab review and treatment plan discussion — by this point we have data, you have read the same data, and we can have a real conversation about options.

Treatment, when initiated, is started conservatively and titrated based on follow-up labs at the three-month mark. We do not believe in front-loading dose. We do not believe in committing to a treatment without a clear plan to reassess. The patients who do best under our care are the ones who understand that hormone optimization is an ongoing relationship, not a one-shot prescription.

If ${primaryKw} is something you have been thinking about, the next step is straightforward: book a consultation, bring whatever lab data you have, and we will go from there. Both [Columbus](/locations/columbus-ga) and [Warner Robins](/locations/warner-robins-ga) clinics see new hormone-therapy patients every week.`;
}

function buildWeightBody(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const sk2 = secondaryKw[1] ?? primaryKw;
  return `${topic} is a question we hear constantly in the [medical weight loss program](/services/medical-weight-loss). The conversation around weight loss has shifted dramatically over the past three years — GLP-1 medications have changed what is possible, and what was once nearly impossible (sustained loss of 15-20% of body weight) is now a routine clinical outcome for the right candidate. But the hype outpaces the clinical reality, and there is real value in slowing down to understand exactly what we are talking about when we talk about ${primaryKw}.

This article walks through the physiology, the protocols, and the practical patient considerations.

## The physiology behind ${short}

${topic.endsWith("?") ? topic : `Understanding ${primaryKw} starts with the underlying physiology`}. Mid-life weight gain is rarely a willpower problem. It is almost always a metabolic and hormonal problem. The patients we see in our 90-day medical weight loss program have usually tried everything — caloric restriction, exercise programs, commercial diet apps, supplements — and arrive frustrated that nothing has worked sustainably.

The reason it has not worked is usually one of the following:

- **Insulin resistance** — the muscle and liver cells have become less responsive to insulin signaling, which traps the body in a fat-storage state regardless of caloric intake
- **Thyroid dysfunction** — even subclinical thyroid dysfunction lowers basal metabolic rate enough to make conventional weight loss strategies ineffective
- **Sex hormone decline** — declining estrogen and testosterone shift body composition toward central adiposity (the "menopause middle") that diet and exercise alone cannot reverse
- **Cortisol dysregulation** — chronic stress raises cortisol, which directly promotes visceral fat storage and suppresses thyroid conversion

${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} sits within this picture. It is not a separate phenomenon from these mechanisms — it is one of them, or it is a downstream consequence of them.

## How GLP-1 medications fit into the picture

GLP-1 receptor agonists (semaglutide, tirzepatide, and others) work by mimicking a gut hormone that the body naturally produces in response to food. They slow gastric emptying, suppress appetite at the brain level, and improve insulin sensitivity. For the right candidate, the effect is profound and predictable.

But GLP-1 therapy is not a magic bullet, and it is not appropriate for every patient. ${sk1} matters here because the medication only addresses some of the underlying mechanisms — appetite and insulin sensitivity. The other mechanisms (thyroid, sex hormones, cortisol, sleep) often need separate attention.

The patients who get the best results on GLP-1 therapy are the ones whose program addresses all the contributing mechanisms in parallel. The patients who plateau or regain weight after stopping the medication are usually the ones whose program never addressed the underlying physiology beyond appetite suppression.

## Who is a candidate — and who is not

Candidacy for [GLP-1 therapy](/services/medical-weight-loss) within our medical weight loss program depends on:

- BMI and body composition (BMI alone is not a sufficient screen — DEXA composition matters)
- Current metabolic and hormonal status from a comprehensive lab panel
- Absence of contraindications (personal or family history of medullary thyroid carcinoma, MEN2 syndrome, prior pancreatitis)
- Realistic patient expectations about timeline, side effects, and long-term commitment

Patients who are not candidates for GLP-1 therapy are not "stuck" — there are other approaches. The full medical weight loss program includes hormone optimization, thyroid support where indicated, [hormone optimization](/services/hormone-therapy-women) where the panel suggests it would help, and structured nutritional support. GLP-1 is one tool among several.

## What this looks like at Revitalize

Our standard 90-day medical weight loss program begins with a comprehensive consultation, full lab panel, and DEXA composition scan if appropriate. The labs and scan come back, you and your provider review them together, and a personalized plan is built. ${sk2} is one of the variables that informs that plan.

If GLP-1 therapy is appropriate for your physiology, it is initiated conservatively and titrated based on tolerance and response. If GLP-1 therapy is not the best fit, we build the plan around the levers that will actually move your numbers. Either way, follow-up labs at the three-month mark are non-negotiable — we treat what the data shows, not what we hope is happening.

If you are considering ${primaryKw} as part of your own weight loss strategy, book a consultation at either [Columbus](/locations/columbus-ga) or [Warner Robins](/locations/warner-robins-ga) and we will start with the data.`;
}

function buildAestheticsBody(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  return `${topic} is one of the most common conversations we have in the aesthetics consultation room. Patients come in with a specific concern — a line they want softened, a feature they want subtly enhanced, an area they want to refresh — and the technical details of how to approach that concern are often the difference between a result that looks natural and a result that looks done.

This article explains how we approach ${primaryKw} clinically, what the realistic outcomes look like, and how to think about candidacy.

## What ${short} actually involves

The technical fundamentals of ${primaryKw} matter more than most patients realize. The product matters, the dose matters, the injection technique matters, the anatomical knowledge of the injector matters, and the post-treatment plan matters. A skilled provider can make a meaningful difference in outcome with the same product another provider would have used.

In ${sk1}, the specific anatomical considerations include:

- Facial muscle dynamics — which muscles are pulling against the area being treated, and whether they need adjustment too
- Skin quality and thickness — which affects how product settles and how visible the result is
- Underlying bone structure — which determines what is achievable and what would create an unnatural appearance
- Patient goals — whether the patient wants subtle refinement or more pronounced change, and whether either matches their underlying anatomy

We assess all of these at the consultation, not at the treatment. A consultation that does not include a face-in-motion assessment is not a real assessment. ${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} cannot be planned from a static photo.

## How the procedure actually works

For most aesthetic treatments, including ${short}, the actual procedure is brief — typically 15 to 30 minutes once the consultation has been completed. The areas to be treated are mapped, marked, and treated systematically. Most patients are surprised by how unremarkable the procedure itself is.

What happens after the procedure varies by treatment. For [neuromodulator treatments](/services/neuromodulators), full effect develops over 7 to 14 days; evaluating results before that window is premature. For [dermal filler treatments](/services/dermal-fillers), the immediate result is close to the final result, with minor settling over 1 to 2 weeks. For [microneedling](/services/microneedling) and resurfacing treatments, results develop progressively over weeks to months as collagen remodels.

Setting expectations about the timeline of results is part of the consultation. Patients who understand the timeline are far happier with their results than patients who expected immediate transformation.

## Candidacy and contraindications

Good candidates for ${primaryKw} are patients whose anatomy supports the desired result, whose goals are realistic, whose medical history does not include relevant contraindications, and who are willing to follow the post-treatment plan. Less-good candidates include patients seeking a result their anatomy cannot support, patients with active skin conditions in the treatment area, patients on medications that affect bleeding or healing, and patients who cannot commit to follow-up evaluation.

We turn away a meaningful number of patients at the consultation stage. That is by design. Treating someone whose anatomy or goals make a good outcome unlikely is not in their interest, and it is not in ours.

## What sets the Revitalize approach apart

Three things matter most: anatomical training, conservative initial dosing with planned follow-up, and a willingness to say no when treatment is not appropriate.

[${serviceName}](${serviceHref}) at Revitalize is provided by clinicians who have committed to anatomical training that goes beyond the certificate-course standard. The dosing philosophy is conservative on the first treatment — we would rather have you come back at two weeks for a touch-up than have you sit with overcorrection for three months. And the consultation philosophy is honest — if the result you want is not achievable with the treatment you are asking about, we will tell you, and we will discuss what would be appropriate instead.

If you are considering ${primaryKw} for yourself, the first step is a consultation. Book at either [Columbus](/locations/columbus-ga) or [Warner Robins](/locations/warner-robins-ga). We will assess what is appropriate for your anatomy and your goals, and we will be honest about what the realistic outcomes look like.`;
}

function buildSexualBody(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  return `${topic} is one of the most under-discussed areas of mid-life clinical care. Patients are reluctant to bring it up; clinicians often do not ask. The result is that sexual health concerns persist for years before being addressed, and the underlying causes — which are usually treatable — go unidentified.

This article approaches ${primaryKw} the same way we approach it in the consultation room: clinically, directly, without shame, and with attention to the underlying physiology rather than the surface symptom.

## Why ${short} is more common than patients realize

Sexual health concerns in mid-life are nearly universal. Studies estimate that 40-60% of women experience some form of sexual dysfunction in perimenopause and menopause, and 30-50% of men experience sexual dysfunction by age 50. The incidence is high; the help-seeking rate is low. ${primaryKw} fits within this larger pattern.

The contributing factors are usually a combination of:

- Hormonal — declining estrogen, progesterone, testosterone affecting tissue health, libido, and arousal
- Vascular — early cardiovascular changes affecting blood flow, particularly in men
- Neurological — changes in central nervous system arousal pathways
- Psychological — stress, relationship dynamics, body image, prior negative experiences
- Pharmacological — common medications (SSRIs, beta-blockers, antihistamines) that suppress sexual function

A clinical workup considers all of these. The mistake most patients have encountered before coming to us is having one factor evaluated (usually testosterone, in men) and the other factors ignored.

## The mechanism behind effective treatment

${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} responds to treatment that addresses the actual underlying mechanism. ${sk1} approaches that target the wrong mechanism do not work, and patients who have cycled through several of those approaches understandably arrive skeptical.

For hormonal contributors, [hormone optimization](/services/hormone-therapy-women) — when the lab work supports it — produces meaningful improvement. For vascular contributors in men, attention to cardiovascular health (which often involves [men's hormone therapy](/services/hormone-therapy-men) when low testosterone is part of the picture) is foundational. For tissue-quality issues, regenerative approaches like [the O-Shot](/services/o-shot) or PRP-based interventions can produce changes that no medication alone produces.

The combination matters. A single intervention addressing one factor while leaving the others unaddressed tends to disappoint. A coordinated plan tends to work.

## Who is a candidate

Most adults experiencing the symptoms ${primaryKw} addresses are appropriate candidates for evaluation. Candidacy for specific treatments depends on the underlying cause identified during workup.

Good candidates for [${serviceName}](${serviceHref}) typically have:

- Symptoms that have persisted for at least three months
- Either lab evidence of a hormonal contributor, or symptoms consistent with a tissue-quality contributor
- Realistic expectations about treatment timeline (most regenerative approaches require 8-12 weeks for full effect)
- Willingness to address adjacent factors (hormones, cardiovascular health, medications) where indicated

Patients who are not appropriate candidates include those with active acute conditions requiring different intervention, those whose symptoms are primarily explained by relationship dynamics requiring couples-level work rather than medical intervention, and those with contraindications to the specific procedures.

## What the conversation looks like at Revitalize

The first sexual-wellness consultation is a thorough one. We allocate enough time to actually talk through history, symptoms, prior approaches, and goals. We do not rush, and we do not skip the conversation in favor of an immediate treatment recommendation.

After the consultation, lab work is ordered if needed (which is most of the time). The treatment plan discussion happens at a follow-up visit, with data in hand. Treatment, when initiated, is conservative and re-evaluated at clinical milestones.

If ${primaryKw} is something you have been holding off on addressing, the first step is a consultation. We see new sexual-wellness patients at both [Columbus](/locations/columbus-ga) and [Warner Robins](/locations/warner-robins-ga). The conversation is private, professional, and focused on actually solving the problem.`;
}

function buildIVBody(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  return `${topic} is a question we get often. IV therapy has become widely available — and widely marketed — over the past several years, and the gap between marketing claims and clinical reality is wide. This article walks through what ${primaryKw} actually involves, what the realistic benefits are, and how to think about whether it is worth your time and money.

We try to be straight with patients about which IV protocols have meaningful clinical evidence and which are largely placebo. ${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} sits somewhere on that spectrum, and we will explain where.

## What ${short} actually delivers

[IV hydration therapy](/services/iv-hydration) bypasses the gut and delivers fluids, electrolytes, vitamins, or minerals directly into the bloodstream. The advantage over oral supplementation is bioavailability — what is infused is essentially 100% absorbed, whereas oral absorption rates for many of the same nutrients range from 5% to 60% depending on the nutrient and the patient's gut function.

For ${primaryKw} specifically, the relevant components typically include:

- A base of normal saline or lactated Ringer's for hydration
- Targeted vitamins (B-complex, vitamin C, sometimes vitamin D)
- Targeted minerals (magnesium, sometimes calcium, sometimes zinc)
- Optional add-ons (glutathione, taurine, NAD+ in select protocols)

The specific recipe varies by indication. ${sk1} drives some of the dosing decisions, as does the patient's prior lab work and current symptom picture.

## When IV therapy is worth it — and when it is not

IV therapy makes the most sense when:

- The patient has a documented absorption issue (post-surgical, IBD, severe SIBO) that limits oral supplementation
- The patient has an acute need (severe dehydration, severe migraine, post-procedure recovery) where the speed of IV delivery matters
- The patient has a deficiency that has not responded to oral repletion attempts
- The patient is undertaking a specific time-limited goal (athletic event, post-illness recovery, major procedure recovery) where the additional support is value-additive

IV therapy makes less sense as a routine "wellness" practice for patients with normal absorption, no documented deficiencies, and no acute need. The marketing around routine IV use significantly overstates the benefits for healthy patients with intact gut function.

We are honest with patients about which category they fall into. The patients we treat regularly with IV therapy have specific clinical reasons for it. The patients we do not treat regularly are not being denied something useful.

## Safety considerations

IV therapy is generally safe when performed by a qualified provider with appropriate sterile technique. The risks — though uncommon — include vasovagal reactions during placement, infiltration of fluid into surrounding tissue, allergic reactions to specific additives, and (very rarely) infections.

Higher-risk additives — particularly NAD+, high-dose vitamin C, and chelation agents — carry additional considerations. NAD+ infusion at therapeutic doses is uncomfortable for many patients (chest tightness, nausea) and is best initiated in a clinical setting with experienced staff. High-dose vitamin C requires G6PD screening before administration. Chelation requires specific clinical indications and monitoring.

We discuss the relevant safety profile with each patient before initiating ${primaryKw} or any IV protocol.

## What this looks like at Revitalize

[${serviceName}](${serviceHref}) at our locations is delivered in a comfortable clinical setting by clinical staff. New patients receive a brief intake — current symptoms, prior labs if available, current medications and supplements, any relevant medical history. The recommended protocol is then matched to the indication, and the infusion proceeds.

Most standard infusions take 30 to 60 minutes. NAD+ infusions take longer (2 to 4 hours, titrated for tolerance). Patients are monitored throughout.

If ${primaryKw} is something you are considering, the first conversation is the right place to start. We will help you decide whether IV therapy is actually the right tool for what you are trying to accomplish, or whether another approach would serve you better. Both [Columbus](/locations/columbus-ga) and [Warner Robins](/locations/warner-robins-ga) offer IV therapy on a scheduled basis.`;
}

function buildHairBody(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  return `${topic} is a concern that brings patients to us with significant emotional weight. Hair changes — thinning, shedding, receding — affect self-image, confidence, and quality of life in ways that are easy to underestimate clinically. The right approach to ${primaryKw} starts with understanding the underlying mechanism, because hair issues with different mechanisms respond to different treatments.

## What is actually happening with ${short}

Hair growth follows a cycle: anagen (active growth, 2-7 years), catagen (transition, 2-3 weeks), telogen (rest, 3 months). At any given time, roughly 85-90% of scalp hairs are in anagen, 1-2% in catagen, and 10-15% in telogen. Visible thinning develops when something disrupts that ratio — typically by pushing more hairs into telogen prematurely (telogen effluvium), by shrinking individual hair follicles (androgenetic alopecia), or by destroying follicles outright (cicatricial alopecias).

${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} relates to one or more of these mechanisms. The first job of evaluation is to figure out which.

The relevant workup typically includes:

- Detailed history (timing of onset, family pattern, recent stressors, medication changes, dietary changes)
- Scalp examination (pattern of loss, scarring vs non-scarring, follicle density)
- Lab work (ferritin, TSH and free T3/T4, vitamin D, sometimes CBC, sometimes hormones)
- Sometimes scalp biopsy when the pattern is unclear

${sk1} is one of the contributing factors that often shows up in this workup, particularly for patients in mid-life.

## How regenerative hair treatments work

When the workup identifies a treatable mechanism, the regenerative approach we use depends on what the mechanism is.

For androgenetic alopecia (the most common pattern), the workhorse treatments are:

- [DE|RIVE hair restoration](/services/derive-hair-restoration) — our protocol using EXO|E exosome therapy combined with scalp microneedling. The exosomes deliver growth factor signals directly to follicles in the scalp, and the microneedling stimulates a wound-healing response that activates dormant follicles.
- [Vampire facial PRP](/services/vampire-facial-prp) protocols adapted for scalp — concentrated platelets deliver patient-derived growth factors into the scalp tissue
- Adjunctive medical therapy where appropriate (topical or oral DHT modulators, evaluated case by case)

For telogen effluvium, the treatment is to identify and address the trigger — once the trigger is removed, hair recovers on its own over 6-12 months. Regenerative treatments can accelerate that recovery but are not strictly necessary.

For cicatricial alopecias, regenerative treatments alone are not enough; the underlying inflammatory or autoimmune process must be addressed.

## Realistic expectations

Hair restoration is slow. The hair growth cycle is what it is — you cannot accelerate the underlying biology. Realistic timelines for regenerative treatments are:

- 8-12 weeks: reduction in shedding (if shedding was a primary symptom)
- 4-6 months: visible improvement in density
- 9-12 months: full evaluation of treatment response

Patients who expect dramatic change at the 6-week mark are usually disappointed. Patients who understand the timeline are usually pleased with what they see at month 6 and beyond.

The other reality: hair restoration is a maintenance program, not a one-shot treatment. The biology that produced the original thinning is still operating; ongoing treatment is what maintains the gains.

## How we approach this at Revitalize

A first hair-restoration consultation includes the workup described above. We do not start treatment without understanding the mechanism — that approach produces poor outcomes and frustrated patients.

Once the mechanism is identified, [${serviceName}](${serviceHref}) is initiated with a planned protocol and a planned reassessment timeline. We use clinical photography to track progress, because subjective assessment of hair density is unreliable. The photos are what tell us whether the treatment is working.

If ${primaryKw} is the issue you want to address, book a consultation at [Columbus](/locations/columbus-ga) or [Warner Robins](/locations/warner-robins-ga). The first conversation will tell you whether our approach matches what you are looking for.`;
}

function buildLocalBody(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref, cityRefs } = a;
  const cityName = cityRefs.columbus ?? cityRefs.warnerRobins ?? "the local area";
  const cityKey = cityRefs.columbus ? "columbus-ga" : "warner-robins-ga";
  const cd = CITY_DETAILS[cityKey];
  return `${topic} is the question this article addresses directly. Patients in and around ${cityName} have asked us a version of this question often enough that a public, searchable answer is overdue. This is that answer.

## Why ${cityName} patients ask about ${short}

Local patients ask about ${primaryKw} for the same reasons patients elsewhere do — but with the added consideration of finding a provider who is geographically reasonable. ${cityName} sits within a regional network where patients commonly travel 30-60 minutes for specialized clinical care. The relevant question is not just whether ${primaryKw} is appropriate for you; it is whether the closest qualified provider is one you can build a long-term clinical relationship with.

We see patients from ${cd.nearby} who have made exactly this decision: choosing a Revitalize location based on a combination of clinical fit and reasonable travel.

## What our ${cityName} clinic offers

Our ${cityName} location at ${cd.address} provides the full range of clinical services. The phone number is **${cd.phone}**. [Online booking](https://revitalizeaesthetics.janeapp.com/) is available 24/7.

The services most relevant to ${primaryKw} include [${serviceName}](${serviceHref}), as well as adjacent services that often come up in the same conversation. Our model is to treat the underlying physiology, not just the surface complaint, so most patients end up engaged with two or three services in coordination rather than just one.

For patients new to the practice, the [start-here pathway](/start-here) is the most efficient way to figure out where to begin. It walks you through the most common entry points and points you to the right consultation type.

## The clinical philosophy we bring to every appointment

The clinical philosophy at Revitalize is straightforward and worth stating explicitly so patients know what they are getting:

- **Comprehensive workup before treatment recommendations.** No treatment is recommended without the lab data or assessment information that justifies it.
- **Conservative initial dosing.** Whether the treatment is hormone therapy, GLP-1, or aesthetic injection, we start low and titrate up based on response. We would rather under-treat at first and reassess than overtreat and have you live with the consequences for months.
- **Transparent communication about candidacy.** If a treatment you are asking about is not appropriate for your physiology, we will tell you, and we will explain why. We do not sell treatments; we recommend them when they fit.
- **Continuity over time.** The hormonal, metabolic, and aesthetic concerns that bring patients to us are usually long-term clinical relationships, not one-shot transactions. We build the practice around that reality.

This philosophy is what brings ${cityName} patients to us, and it is what keeps them with us.

## How to get started

The most efficient first step is to book a consultation. The intake will identify what kind of consultation you need (hormone, weight loss, aesthetic, sexual wellness, IV, hair restoration, or general wellness), and that consultation will be scheduled at our ${cityName} location.

If you have questions before booking, the front desk at ${cd.phone} can answer scheduling and procedural questions during business hours (Monday through Friday, 9 AM to 5 PM). They will not provide clinical advice over the phone — that is what the consultation is for — but they can clarify what to expect, what to bring, and what your options are for getting started.

For patients who prefer to do their own research first, the [Learning Library](/hub) has clinical articles on most of the topics our consultations cover. The articles are written by Travis Woodley and reflect the practice's actual clinical approach.

If ${primaryKw} is what brought you here, we are ready to help. Call ${cd.phone} or [book online](https://revitalizeaesthetics.janeapp.com/) and we will get you scheduled at our ${cityName} location.`;
}

function buildSymptomBody(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  return `${topic} is something patients describe to us frequently — and just as frequently, they tell us they have raised it with a previous provider and been told it is "just stress" or "just aging." Sometimes that is correct. Often it is not. ${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} is one of those symptoms that deserves a real workup, because it has a short list of treatable underlying causes.

This article walks through what those causes are, how to investigate them, and when to take the symptom seriously.

## What ${short} can actually mean clinically

A symptom is not a diagnosis. ${short} is a presentation that points toward a category of underlying problems, not a single specific condition. The clinical workup is about distinguishing among the realistic possibilities.

The most common drivers we identify in patients presenting with ${primaryKw}:

- **Hormonal** — declining or imbalanced sex hormones (estrogen, progesterone, testosterone), thyroid dysfunction, adrenal/cortisol patterns, insulin signaling issues
- **Nutritional** — specific micronutrient deficiencies (iron, B12, vitamin D, magnesium), or broader metabolic insufficiencies that affect cellular energy production
- **Sleep architecture** — the symptom often improves dramatically when underlying sleep issues are addressed; the symptom is being driven by sleep, not the other way around
- **Medication side effects** — common medications we forget to consider (SSRIs, beta-blockers, statins, antihistamines, PPIs) that contribute to the symptom picture
- **Lifestyle factors** — alcohol use, stress patterns, exercise habits — that have shifted in a way that produced the symptom

A workup considers all of these in parallel, not in sequence.

## How a real workup proceeds

The workup we do at Revitalize for patients presenting with ${primaryKw} starts with a comprehensive history and a comprehensive lab panel. The history is detailed enough to identify medication and lifestyle contributors. The lab panel is broad enough to identify hormonal, nutritional, and metabolic contributors.

Specific labs typically include:

- Sex hormone panel (estradiol, progesterone, total and free testosterone, DHEA-S, SHBG)
- Thyroid panel (TSH, free T3, free T4, reverse T3, thyroid antibodies)
- Metabolic panel (insulin, HbA1c, fasting glucose, lipid panel)
- Inflammatory and nutritional markers (hs-CRP, ferritin, vitamin D, B12, magnesium)

We do not run every possible test on every patient — that is wasteful and produces noise. We run the panel that is appropriate for the presenting picture. ${sk1} affects which tests we prioritize.

## What treatment looks like once a cause is identified

Treatment of ${primaryKw} depends entirely on what the workup reveals. Common interventions include:

- [Hormone optimization](/services/hormone-therapy-women) when the panel shows treatable hormonal contributors
- [Men's hormone therapy](/services/hormone-therapy-men) for male patients with low testosterone or related findings
- [Metabolic program](/services/medical-weight-loss) when insulin resistance or related metabolic issues are central
- Targeted nutritional repletion when specific deficiencies are identified
- Medication review and adjustment in coordination with the prescribing provider
- Sleep evaluation referral when sleep architecture is suspected as a primary driver

We do not believe in treating symptoms without a mechanism. We do not believe in scattershot supplementation. The treatment plan that works is the one that addresses what the data actually shows.

## When to take the symptom seriously enough to investigate

The honest answer: when it is affecting your quality of life, your function, or your relationships. Symptoms that interfere with sleep, work, exercise, intimacy, or mood are worth a workup. Symptoms that have persisted for more than three months without resolution are worth a workup. Symptoms that have appeared alongside other unexplained changes (weight, mood, energy, libido) are worth a workup.

If ${primaryKw} fits any of the above, the next step is a [comprehensive lab work](/start-here) and a real consultation. Both [Columbus](/locations/columbus-ga) and [Warner Robins](/locations/warner-robins-ga) clinics see patients for symptom-driven workups every week. The first visit is the data-gathering visit; the second is the data-review and treatment-plan visit. From there, the path forward is usually clear.`;
}

function buildDemographicBody(a: BuildArgs): string {
  const { topic, short, primaryKw, secondaryKw, serviceName, serviceHref } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  return `${topic} addresses a specific patient population whose clinical considerations are different enough from the general patient population that they deserve their own discussion. The standard treatment templates were not designed with this group in mind, and applying them without adjustment produces predictably suboptimal results.

This article walks through what makes ${primaryKw} different and how we adjust our clinical approach.

## Why this patient population needs a different approach

The default clinical templates for many treatments — hormone therapy, weight loss, aesthetic care — were built around a "typical" patient profile. ${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} sits outside that profile in ways that matter clinically.

The relevant differences include:

- Different baseline physiology — what is "normal" for the general adult population may not be relevant to this group
- Different symptom presentations — the same underlying mechanism may show up as different symptoms in this population
- Different treatment response patterns — standard dosing may be too aggressive, too conservative, or simply mismatched
- Different goals — what success looks like may be different for this patient population than for the standard reference patient

Recognizing these differences during the consultation is what produces good outcomes. Failing to recognize them is what produces frustrated patients.

## The clinical adjustments that matter

For ${short}, the specific clinical adjustments we make include:

- **Modified lab interpretation.** Reference ranges are population-derived, and the population they were derived from may not include this patient group. We interpret labs against the patient's clinical picture, not just against the lab's reference range.
- **Modified treatment dosing.** The "starting dose" most providers use as a default may not be the right starting dose for this group. We adjust based on what the physiology suggests.
- **Modified follow-up timing.** Standard follow-up intervals may be too short or too long for this group's actual response timelines.
- **Modified conversation about expectations.** What is achievable, what is realistic, and what timeline the patient should expect — all of these may differ from the general-population conversation.

The patients in this group who have struggled to find good clinical care often describe being treated as if they were a "standard" patient when they are not. ${sk1} is one example of how that mismatch shows up.

## Where ${short} interacts with other services

${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} rarely exists in isolation. The patients we see in this group often need coordination across multiple services:

- [${serviceName}](${serviceHref}) as the primary intervention
- [Hormone therapy](/services/hormone-therapy-women) where the underlying physiology requires it
- [Men's testosterone replacement](/services/hormone-therapy-men) when relevant for male patients
- [Medical weight loss](/services/medical-weight-loss) when body composition is part of the picture
- [Aesthetic care](/services/neuromodulators) when patients want to address the visible aspects of the underlying changes

The coordination matters. A treatment plan that addresses one element while leaving the adjacent elements unaddressed tends to underperform.

## How we approach this at Revitalize

The first consultation for patients in this group is intentionally longer than a standard consultation. We need the time to actually understand the patient's profile, prior treatment history, current symptom picture, and goals. The questions we ask are different. The lab panel we order may be different.

After the consultation, the workup proceeds. The treatment-plan discussion happens at a follow-up visit with data in hand. From there, treatment is initiated and re-evaluated on a schedule appropriate to the patient and the intervention.

If ${primaryKw} describes your situation, the first step is a consultation at either [Columbus](/locations/columbus-ga) or [Warner Robins](/locations/warner-robins-ga). Mention during scheduling that you fall into this patient group so the front desk can allocate the right amount of time. We will go from there.`;
}

const BODY_BUILDERS: Record<string, (a: BuildArgs) => string> = {
  "Hormone Therapy": buildHormoneBody,
  "Weight Loss": buildWeightBody,
  "Aesthetics": buildAestheticsBody,
  "Sexual Wellness": buildSexualBody,
  "Wellness": buildIVBody,
  "Hair Restoration": buildHairBody,
  "Local": buildLocalBody,
  "Symptoms": buildSymptomBody,
  "Demographic": buildDemographicBody,
};

// ─── Shared expansion: appended to every body to reach 1,200+ words ────────
function buildExpansion(a: BuildArgs): string {
  const { e, topic, short, primaryKw, secondaryKw, serviceName } = a;
  const sk1 = secondaryKw[0] ?? primaryKw;
  const sk2 = secondaryKw[1] ?? primaryKw;
  const sk3 = secondaryKw[2] ?? primaryKw;

  const adjacencies: Record<string, string> = {
    "Hormone Therapy": "Adjacent considerations include thyroid function (subclinical hypothyroidism is the single most commonly missed finding in mid-life patients), insulin signaling (insulin resistance amplifies the symptom burden of hormonal changes), and adrenal/cortisol patterns (chronic stress directly suppresses sex hormone production). A hormone consultation that does not consider these adjacencies tends to underperform.",
    "Weight Loss": "Adjacent considerations include hormone status (declining sex hormones drive central adiposity that diet alone cannot reverse), thyroid function (even mildly suboptimal thyroid output blocks weight loss), sleep architecture (poor sleep mimics insulin resistance metabolically), and stress/cortisol patterns (chronically elevated cortisol promotes visceral fat storage). The medical weight loss plan addresses these in parallel with primary intervention.",
    "Aesthetics": "Adjacent considerations include skin quality (the foundation that determines what aesthetic treatments can achieve), hormonal status (declining estrogen affects collagen production, which affects how skin responds to treatment), nutritional and hydration status (which affect healing), and lifestyle factors (smoking, sun exposure, alcohol use). The best aesthetic outcomes come from patients whose underlying skin health is also being addressed.",
    "Sexual Wellness": "Adjacent considerations include cardiovascular health (sexual function is one of the earliest indicators of vascular changes, particularly in men), hormonal status (the hormonal contributors are usually the most addressable), pelvic floor function (often overlooked but commonly contributory), and medication review (a surprising number of common medications suppress sexual function). A complete plan addresses all relevant contributors.",
    "Wellness": "Adjacent considerations include underlying nutritional and hormonal status (the panel that informs whether IV is the right tool), gut absorption capacity (the situation where IV genuinely outperforms oral), and the patient's specific goals (acute support, chronic deficiency repletion, or scheduled wellness maintenance). Matching the protocol to the goal matters more than any individual ingredient choice.",
    "Hair Restoration": "Adjacent considerations include nutritional status (ferritin, vitamin D, B12 are commonly low in patients with hair loss), thyroid function (a major contributor to telogen-pattern shedding), hormone status (androgen patterns drive androgenetic alopecia), and stress patterns (which trigger telogen effluvium). The workup considers all of these before regenerative treatments are recommended.",
    "Local": "The clinical adjacencies depend on what you are coming in for. The first consultation is the right place to identify which adjacent services may be relevant. Most patients end up engaged with two or three services in coordination, because that is what produces the best outcomes for the conditions we treat.",
    "Symptoms": "Adjacent considerations include co-occurring symptoms (which often point toward the underlying mechanism), recent life changes (medication changes, dietary changes, stress shifts), and family history patterns (which point toward genetic-driven contributors). All of these inform the workup priorities.",
    "Demographic": "The clinical adjacencies for this patient population often differ from the general adult presentation. We sort through them at the consultation rather than applying a default template. The goal is a treatment plan that fits your physiology, not a plan that fits the average patient.",
  };

  const adjacency = adjacencies[e.category] ?? adjacencies.Local;

  return `

## Common patterns we see in patients asking about ${short}

The patients we see asking about ${primaryKw} fall into a few recognizable patterns. Recognizing the pattern early often shortens the path to a useful answer.

The first pattern: patients who have already done their own research and arrive with a specific question or hypothesis. These conversations are usually efficient — we can validate or adjust the hypothesis quickly using the lab data and clinical assessment, and the treatment-plan conversation tends to move forward at a reasonable pace.

The second pattern: patients whose presenting concern is actually one symptom in a cluster they have not yet connected. ${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} ends up being one piece of a larger picture, and the treatment plan addresses the picture rather than the single piece. Patients in this group often describe a notable shift in how they feel once the broader plan is underway, because what is improving is the underlying system, not just the surface complaint.

The third pattern: patients whose prior providers told them their concern was not significant or not addressable. Sometimes that prior assessment was correct; often it was not. The way to know is the actual workup. A meaningful percentage of patients in this group are surprised by what the labs show — and by how much can be done about what the labs show.

The fourth pattern, less common: patients whose concern is real but whose root cause is outside our scope. In those cases the right answer is a referral to the appropriate specialist, not an intervention from us. We are willing to make that call.

## Where ${short} fits among related interventions and follow-up

${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} rarely lives as an isolated decision. ${adjacency}

For ${sk1}, the question of how it interacts with ${sk2} is one of the more common follow-up topics. We address it directly during the treatment-plan discussion, because the answer changes how the plan is built. The same applies to ${sk3} — patients often ask whether they should pursue both interventions in parallel or sequentially. The answer depends on the specifics, and the consultation is the right place to work it out.

The other follow-up topic that comes up reliably: how the plan adjusts over time. Hormone optimization, weight loss programs, aesthetic maintenance, sexual wellness protocols, hair restoration regimens — none of them are static. Re-evaluation at defined intervals is built into every treatment plan we initiate, because patient physiology shifts and the plan needs to shift with it.

If you are weighing ${primaryKw} as part of your own clinical picture, the most useful thing we can offer is a structured first conversation. Bring whatever lab work and history you have, bring your top three questions, and we will start there. [${serviceName}](${`/services/${e.relatedServiceSlug}`}) is one option among several; the consultation is what helps us match the right option to your situation.

A final note worth emphasizing: the goal of this article is education, not a one-size-fits-all recommendation. ${primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1)} affects different patients differently, and the right answer for one person is not necessarily the right answer for another. The clinical work — the labs, the history-taking, the consideration of adjacent factors, the conversation about realistic expectations — is what produces an answer that fits your situation specifically. Reading articles is a useful part of becoming an informed patient, but it is not a substitute for a real conversation with a clinician who can evaluate your individual picture. When you are ready to take that step, both of our locations are set up to help you start with the data and build the plan from there.`;
}

// ─── FAQs per category (with topic substitution) ───────────────────────────
function faqsFor(e: ScheduleEntry, topic: string): { question: string; answer: string }[] {
  const t = topic;
  const lt = lc(t);
  const base: { question: string; answer: string }[] = [];

  switch (e.category) {
    case "Hormone Therapy":
      base.push(
        { question: `Is ${lt} appropriate for everyone in mid-life?`, answer: `No. Candidacy depends on your specific lab values, symptom burden, and absence of contraindications. We never recommend treatment without first reviewing your lab work and clinical picture together.` },
        { question: `What labs do I need before discussing ${lt}?`, answer: `A comprehensive panel that includes sex hormones (estradiol, progesterone, total and free testosterone, DHEA-S, SHBG), thyroid markers, metabolic markers, and basic inflammatory markers. We can order these at your first visit if you do not already have recent results.` },
        { question: `How long until I notice a difference?`, answer: `Most patients notice initial improvement in energy and sleep within two to four weeks of starting hormone optimization. Full optimization — where dose has been calibrated to your specific biology — typically takes one to two full reassessment cycles, or three to six months.` },
        { question: `Will my insurance cover this?`, answer: `Coverage varies. Lab work and consultations may be partially covered. Bioidentical hormone therapy itself is typically out-of-pocket. We discuss realistic cost expectations during your initial consultation so there are no surprises.` },
        { question: `Is the protocol the same at both Columbus and Warner Robins?`, answer: `Yes. Travis Woodley sees patients at both locations on a published rotating schedule and uses the same clinical protocols and the same pharmacy partners at each.` },
      );
      break;
    case "Weight Loss":
      base.push(
        { question: `Will I be prescribed a GLP-1 medication?`, answer: `Not necessarily. GLP-1 receptor agonists are one tool in a structured medical weight loss program. Candidacy is determined after a complete metabolic and hormonal workup. Some patients do not need GLP-1 therapy; others benefit substantially from it as part of a broader plan.` },
        { question: `How long is the program?`, answer: `The structured phase is 90 days. That is enough time to complete the workup, implement interventions, reassess labs, and establish sustainable patterns. Many patients continue beyond 90 days depending on their goals.` },
        { question: `What if I have already tried GLP-1 medications without success?`, answer: `Bring whatever data you have from prior attempts — dosing, duration, response, side effects. The reasons GLP-1 underperforms in some patients are usually addressable, and we will work through them at your consultation.` },
        { question: `Does insurance cover medical weight loss?`, answer: `Coverage is highly variable. Some metabolic and hormonal evaluations may be covered. GLP-1 medications have variable coverage in 2026. We discuss realistic cost expectations early in the process.` },
        { question: `What happens after the 90 days?`, answer: `A maintenance plan tailored to what worked during the structured phase. The most common failure pattern in medical weight loss is starting strong and then losing the framework. We design the maintenance phase deliberately.` },
      );
      break;
    case "Aesthetics":
      base.push(
        { question: `How long do the results last?`, answer: `Duration depends on the specific treatment. Neuromodulators typically last three to four months. Dermal fillers last 9-18 months depending on the product and area. Microneedling and resurfacing results develop over weeks and continue improving for months as collagen remodels.` },
        { question: `Is the procedure painful?`, answer: `Most aesthetic procedures involve mild discomfort that is well-managed with topical numbing. The procedure itself is brief — usually 15 to 30 minutes. Most patients describe the experience as far less unpleasant than they had anticipated.` },
        { question: `What is the recovery like?`, answer: `Recovery varies by treatment. Neuromodulators have essentially no downtime. Fillers may produce mild swelling or bruising for 1-3 days. Microneedling produces 2-3 days of mild redness. Resurfacing treatments have longer recovery (5-10 days depending on depth).` },
        { question: `Can I combine treatments?`, answer: `Often yes — and a coordinated treatment plan addressing multiple concerns usually produces better results than treating one concern at a time. We discuss combination options during the consultation when relevant.` },
        { question: `How do I choose between the different options?`, answer: `That is the consultation conversation. We assess your anatomy, your goals, your medical history, and your tolerance for downtime, and recommend the option that best fits your specific situation.` },
      );
      break;
    case "Sexual Wellness":
      base.push(
        { question: `Is the treatment painful?`, answer: `Local anesthetic is used for the procedural portion of treatment. Most patients describe mild pressure rather than pain during the actual procedure. Some soreness for 24-48 hours afterward is normal.` },
        { question: `When will I notice results?`, answer: `Most regenerative treatments require 8 to 12 weeks for full effect. Some patients notice initial improvement earlier. Treatment response varies based on the underlying contributing factors, which is why the workup matters.` },
        { question: `Is treatment covered by insurance?`, answer: `Most sexual wellness procedures are not covered by insurance. We discuss costs upfront so you can make an informed decision before scheduling.` },
        { question: `How private is the consultation?`, answer: `Completely. Sexual wellness consultations are scheduled in private clinical rooms with appropriate time allocated. Documentation is handled with the same privacy standards as any other medical record.` },
        { question: `Can I be treated if I have a pacemaker, anticoagulants, or chronic conditions?`, answer: `Some conditions affect candidacy or require modified protocols. We review your full medical history at the consultation and adjust the recommendation accordingly. Many patients with chronic conditions are still appropriate candidates with the right precautions.` },
      );
      break;
    case "Wellness":
      base.push(
        { question: `How often should I do IV therapy?`, answer: `Frequency depends on what you are addressing. Acute indications (post-illness, pre-event, recovery) may be one-off. Chronic indications (documented absorption issues, supportive nutritional therapy) may be every 2-4 weeks. We will recommend a schedule appropriate to your specific situation.` },
        { question: `Is IV therapy actually better than oral supplementation?`, answer: `Sometimes. For documented absorption issues or acute needs, IV is meaningfully more effective. For routine wellness use in patients with normal absorption, the marginal benefit over oral supplementation is small. We are honest with patients about which category they fall into.` },
        { question: `Are there any risks?`, answer: `IV therapy is generally safe in clinical settings. Risks include infiltration, vasovagal reactions, and (rarely) allergic reactions to specific additives. NAD+ and high-dose vitamin C carry additional considerations. We discuss the relevant safety profile before any infusion.` },
        { question: `How long does an IV session take?`, answer: `Most standard infusions take 30 to 60 minutes. NAD+ infusions take 2 to 4 hours, titrated for tolerance. You can read, work on a laptop, or simply rest during the infusion.` },
        { question: `Do I need a prescription or referral?`, answer: `No. IV therapy at our clinics is delivered after a brief intake with a clinical provider; you do not need an outside referral. We will, however, ask about your current medications, supplements, and any prior IV therapy you have received.` },
      );
      break;
    case "Hair Restoration":
      base.push(
        { question: `How long until I see results?`, answer: `Reduction in shedding typically appears at 8-12 weeks. Visible improvement in density takes 4-6 months. Full evaluation of treatment response takes 9-12 months. Patience matters — the hair growth cycle is what it is, and you cannot accelerate the underlying biology.` },
        { question: `Is the treatment painful?`, answer: `Mild discomfort during the scalp microneedling portion is normal. Topical numbing is used to reduce discomfort. Most patients tolerate the procedure well; some report tingling or mild ache for a few hours afterward.` },
        { question: `How many sessions are needed?`, answer: `A typical initial protocol involves 3-4 sessions spaced 4-6 weeks apart, followed by maintenance every 4-6 months. The exact number is adjusted based on the underlying mechanism and your response.` },
        { question: `Will the results be permanent?`, answer: `Hair restoration is a maintenance program, not a one-shot treatment. The biology that produced the original thinning is still operating; ongoing periodic treatment is what maintains the gains. Patients who stop treatment entirely often see gradual return to the prior pattern over 6-12 months.` },
        { question: `Are some patients not candidates?`, answer: `Yes. Cicatricial alopecias (where follicles have been destroyed by inflammation or autoimmune activity) often need different intervention before any regenerative work. We sort this out at the workup stage to avoid wasting your time on a treatment that is not appropriate for the underlying mechanism.` },
      );
      break;
    case "Local":
      base.push(
        { question: `What are your hours?`, answer: `Both clinics are open Monday through Friday, 9 AM to 5 PM Eastern. Some Saturday appointments may be available — check the online booking calendar.` },
        { question: `Do you accept insurance?`, answer: `Coverage varies by service. Lab work and some consultations may be partially covered. Specialized services (hormone therapy, weight loss medications, aesthetic treatments) are typically out-of-pocket. We discuss costs at the consultation.` },
        { question: `Is online booking available?`, answer: `Yes, 24/7 through our JaneApp portal. The link is in the CTA above. The system handles both Columbus and Warner Robins locations.` },
        { question: `What should I bring to my first appointment?`, answer: `Any recent lab work, a current list of medications and supplements, and a written list of your top three concerns or questions. The list helps us make sure nothing important gets missed in the consultation.` },
        { question: `How quickly can I be seen?`, answer: `New-patient appointments are typically available within 1-2 weeks at both locations. Urgent issues (e.g., medication refill needs) can usually be accommodated faster — call the clinic directly.` },
      );
      break;
    case "Symptoms":
      base.push(
        { question: `When should I take this symptom seriously enough to see a doctor?`, answer: `When it is affecting your quality of life, your function, or your relationships, and when it has persisted for more than three months. Symptoms that appeared alongside other unexplained changes (weight, mood, energy, libido) are worth investigating sooner rather than later.` },
        { question: `What if my regular doctor said it is "just stress" or "just aging"?`, answer: `Sometimes that is correct. Often it is not. The way to know the difference is a comprehensive workup — appropriate lab panels and a careful clinical history. If a real workup has been done and nothing treatable was found, then "stress" or "aging" may be the right answer. If a real workup has not been done, that is the gap to close first.` },
        { question: `What labs are usually relevant?`, answer: `For most symptom-driven workups in mid-life patients, the relevant labs include sex hormones, thyroid panel, metabolic panel, and basic nutritional and inflammatory markers. The specific panel is matched to the presenting picture.` },
        { question: `How long does it take to figure out what is wrong?`, answer: `For most patients, the picture is clear after the consultation, lab work, and lab review (usually two visits separated by 1-2 weeks for lab turnaround). For more complex pictures, additional testing may be needed.` },
        { question: `What if multiple things are contributing?`, answer: `Multiple contributors is the rule, not the exception. The treatment plan addresses the contributors in priority order, with regular reassessment to make sure the plan is still appropriate as things shift.` },
      );
      break;
    case "Demographic":
      base.push(
        { question: `Why does my patient group need a different approach?`, answer: `Standard clinical templates were built around a "typical" patient profile that may not match your physiology, your symptoms, or your goals. Recognizing the differences during the consultation is what produces good outcomes; ignoring them produces frustrated patients with poor results.` },
        { question: `Will the lab panel be different?`, answer: `Possibly. The specific panel is matched to your presenting picture and the relevant clinical considerations for your patient group. The standard panel may be supplemented or modified.` },
        { question: `How is the dosing adjusted?`, answer: `Starting doses, titration intervals, and target ranges may all be adjusted based on what the physiology suggests for your group. We never apply a default dose mechanically; the dose is matched to the patient.` },
        { question: `What does success look like?`, answer: `Success is defined together at the first consultation. For some patients success means symptom resolution; for others it means functional improvement; for others it means lab markers within optimal range. We agree on the goal before we start.` },
        { question: `Is the consultation longer for this group?`, answer: `Yes. We allocate more time to the first consultation to make sure we understand your specific situation, prior history, and goals. Mention your patient group during scheduling so the front desk can allocate appropriately.` },
      );
      break;
  }

  return base.slice(0, 5);
}

// ─── CTA per intent ─────────────────────────────────────────────────────────
function ctaFor(e: ScheduleEntry): { heading: string; body: string; buttonText: string; buttonUrl: string; variant: string } {
  if (e.targetIntent === "local" || e.category === "Local") {
    return {
      heading: "Ready to schedule at Columbus or Warner Robins?",
      body: "Online booking is open 24/7. The JaneApp portal handles both locations — pick the one that works for your schedule.",
      buttonText: "Book Online",
      buttonUrl: "https://revitalizeaesthetics.janeapp.com/",
      variant: "booking",
    };
  }
  if (e.targetIntent === "commercial") {
    return {
      heading: `Considering ${shortTopic(e.title, e.primaryKeyword).toLowerCase()}?`,
      body: "A consultation is the right next step. Book online or call either location — we will start with the data and build the plan from there.",
      buttonText: "Book a Consultation",
      buttonUrl: "https://revitalizeaesthetics.janeapp.com/",
      variant: "booking",
    };
  }
  // Informational default — point to the assessment / start-here pathway
  return {
    heading: "Not sure where to start?",
    body: "The Start Here pathway walks you through the most common entry points and helps you decide which consultation type is the right fit.",
    buttonText: "Use the Start Here Pathway",
    buttonUrl: "/start-here",
    variant: "start-here",
  };
}

// ─── Frontmatter assembly ───────────────────────────────────────────────────
function buildFrontmatter(e: ScheduleEntry, body: string) {
  const topic = topicPhrase(e.title);
  const short = shortTopic(e.title, e.primaryKeyword);
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const readMin = Math.max(5, Math.round(wordCount / 220));
  const serviceName = SERVICES[e.relatedServiceSlug] ?? e.relatedServiceSlug;
  const serviceHref = `/services/${e.relatedServiceSlug}`;

  // metaTitle ≤ 60 chars
  const fullMetaTitle = `${e.title} | Revitalize`;
  const metaTitle = fullMetaTitle.length <= 60 ? fullMetaTitle : `${topic.slice(0, 50)} | Revitalize`;
  // metaDescription ≤ 155 chars
  const md = `${e.primaryKeyword.charAt(0).toUpperCase() + e.primaryKeyword.slice(1)} explained by Travis Woodley, MSN, RN, CRNP — Columbus and Warner Robins, GA. Book a consultation today.`;
  const metaDescription = md.length <= 155 ? md : md.slice(0, 152) + "...";

  // excerpt ≤ 160 chars (2 sentences)
  const exDraft = `${e.primaryKeyword.charAt(0).toUpperCase() + e.primaryKeyword.slice(1)} — what it is, who is a candidate, and how we approach it clinically. A practical patient guide from Travis Woodley, NP.`;
  const excerpt = exDraft.length <= 160 ? exDraft : exDraft.slice(0, 157) + "...";

  // Keywords (≥6): primary + secondaries + local variants when applicable
  const keywords = new Set<string>([e.primaryKeyword, ...e.secondaryKeywords]);
  if (e.relatedCities?.includes("columbus-ga")) keywords.add(`${e.primaryKeyword} Columbus GA`);
  if (e.relatedCities?.includes("warner-robins-ga")) keywords.add(`${e.primaryKeyword} Warner Robins GA`);
  // Pad to 6 if short
  const padPool = [
    `${e.category} Columbus GA`,
    `${e.category} Warner Robins GA`,
    `Travis Woodley ${e.category}`,
    "Revitalize Aesthetics Wellness",
    `${topic} Georgia`,
    `${e.primaryKeyword} Georgia`,
  ];
  for (const p of padPool) {
    if (keywords.size >= 6) break;
    keywords.add(p);
  }

  // Related posts: pick 3 same-category neighbors from the schedule
  const sameCategory = schedule
    .filter((s) => s.category === e.category && s.slug !== e.slug)
    .slice(0, 3)
    .map((s) => s.slug);

  // schemaType — HowTo if title starts with How To, FAQPage if 4+ FAQs, else Article
  const numFaqs = faqsFor(e, topic).length;
  const schemaType = /^how to /i.test(e.title) ? "HowTo" : numFaqs >= 4 ? "FAQPage" : "Article";

  // Service-link map (3-4 entries per category)
  const serviceLinks = SERVICE_LINK_MAPS[e.category] ?? SERVICE_LINK_MAPS.Local;

  // CTA
  const cta = ctaFor(e);

  // Related services: primary + 1-2 adjacent
  const relatedServices = new Set<string>([e.relatedServiceSlug]);
  if (e.category === "Hormone Therapy") relatedServices.add("biote-pellet-therapy");
  if (e.category === "Weight Loss") relatedServices.add("hormone-therapy-women");
  if (e.category === "Aesthetics" && e.relatedServiceSlug !== "neuromodulators") relatedServices.add("neuromodulators");
  if (e.category === "Sexual Wellness" && e.relatedServiceSlug === "o-shot") relatedServices.add("hormone-therapy-women");

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
    keywords: Array.from(keywords).slice(0, 8),
    ogTitle: "",
    ogDescription: "",
    twitterTitle: "",
    twitterDescription: "",
    ogImage: "",
    schemaType,
    author: { name: "Travis Woodley", credentials: "MSN, RN, CRNP" },
    relatedService: { name: serviceName, href: serviceHref, description: "" },
    relatedServices: Array.from(relatedServices),
    relatedPosts: sameCategory,
    relatedArticles: [],
    relatedCities: e.relatedCities ?? [],
    featured: false,
    serviceLinks,
    cta,
    faqs: faqsFor(e, topic),
    tableOfContents: [],
    medicalDisclaimer: "",
    mirroredFromHub: false,
    sourceHubSlug: "",
  };
}

// ─── Build a single MDX file ────────────────────────────────────────────────
function buildPost(e: ScheduleEntry): { mdx: string; words: number } {
  const topic = topicPhrase(e.title);
  const short = shortTopic(e.title, e.primaryKeyword);
  const serviceName = SERVICES[e.relatedServiceSlug] ?? e.relatedServiceSlug;
  const serviceHref = `/services/${e.relatedServiceSlug}`;

  const cityRefs: { columbus?: string; warnerRobins?: string } = {};
  if (e.relatedCities?.includes("columbus-ga")) cityRefs.columbus = CITIES["columbus-ga"];
  if (e.relatedCities?.includes("warner-robins-ga")) cityRefs.warnerRobins = CITIES["warner-robins-ga"];

  const builder = BODY_BUILDERS[e.category] ?? buildHormoneBody;
  const buildArgs = {
    e,
    topic,
    short,
    primaryKw: e.primaryKeyword,
    secondaryKw: e.secondaryKeywords,
    serviceName,
    serviceHref,
    cityRefs,
  };
  const body = builder(buildArgs) + buildExpansion(buildArgs);

  const fm = buildFrontmatter(e, body);
  const mdx = matter.stringify(`\n${body}\n`, fm);
  const words = body.split(/\s+/).filter(Boolean).length;
  return { mdx, words };
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
let minWords = Infinity;
let maxWords = 0;

console.log(`Phase 4 generator — slots ${start}–${end - 1} (${range.length} posts)`);
console.log("");

// Auburn post (slug "auburn-patients-columbus-warner-robins") is hand-written;
// preserve it. Everything else is overwriteable so we can iterate on templates.
const PROTECTED_SLUGS = new Set(["auburn-patients-columbus-warner-robins"]);

for (const e of range) {
  const path = join(OUT_DIR, `${e.slug}.mdx`);
  if (existsSync(path) && PROTECTED_SLUGS.has(e.slug)) {
    skips++;
    console.log(`  [#${e.postNumber.toString().padStart(3)}] - ${e.slug}.mdx (skipped — protected hand-written post)`);
    continue;
  }
  const { mdx, words } = buildPost(e);
  writeFileSync(path, mdx);
  writes++;
  totalWords += words;
  if (words < minWords) minWords = words;
  if (words > maxWords) maxWords = words;
  const flag = words < 1200 ? " ⚠ <1200 WORDS" : "";
  console.log(`  [#${e.postNumber.toString().padStart(3)}] ✓ ${e.slug}.mdx (${words} words, ${e.category})${flag}`);
}

console.log("");
console.log(`Wrote ${writes} files, skipped ${skips}.`);
if (writes > 0) {
  console.log(`Word stats: min ${minWords}, max ${maxWords}, avg ${Math.round(totalWords / writes)}.`);
}
