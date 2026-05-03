import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";
import RelatedPostsRow from "@/components/RelatedPostsRow";
import { getPostsByCategory } from "@/lib/blog";

// Each symptom maps to a clinical category for related-post selection
const SYMPTOM_CATEGORY: Record<string, string> = {
  "brain-fog": "Hormone Therapy",
  "low-energy": "Hormone Therapy",
  "low-libido": "Sexual Wellness",
  "midsection-weight-gain": "Weight Loss",
  "mood-changes": "Hormone Therapy",
  "poor-sleep": "Hormone Therapy",
};

type SymptomData = {
  eyebrow: string;
  h1: string;
  opening: string;
  driversHeadline: string;
  drivers: string;
  failsHeadline: string;
  fails: string;
  approachHeadline: string;
  approach: string;
  services: Array<{ label: string; href: string }>;
  faq: Array<{ q: string; a: string }>;
  ctaHeadline: string;
  metaTitle: string;
  metaDescription: string;
};

const SYMPTOMS: Record<string, SymptomData> = {
  "brain-fog": {
    metaTitle: "Brain Fog | Clinical Causes & Treatment | Revitalize",
    metaDescription: "Clinical explanation of brain fog, why it happens, and how it is addressed at Revitalize in Columbus and Warner Robins, Georgia.",
    eyebrow: "Cognitive Performance",
    h1: "Brain fog is a symptom, not a personality trait.",
    opening:
      "Difficulty concentrating, word-finding problems, mental slowness, and the sensation of thinking through cotton — these are not signs of stress or aging. They are physiological signals. When the brain is not performing the way it should, something upstream has changed. Finding that change is a clinical problem, not a mindset problem.",
    driversHeadline: "What is actually driving brain fog",
    drivers: `Cognitive performance depends on several intersecting physiological systems. When any of them are disrupted, the result is predictable: reduced processing speed, impaired working memory, difficulty sustaining focus.

The most common underlying drivers in a clinical population aged 35 to 65:

**Hormonal decline.** Estrogen, testosterone, and progesterone all have direct neuroprotective and cognitive functions. Estrogen supports acetylcholine synthesis and cerebral blood flow. Testosterone affects spatial cognition and verbal memory. Progesterone is a neurosteroid with direct GABAergic activity in the brain. Decline in any of these is directly associated with cognitive symptoms.

**Thyroid dysfunction.** Subclinical hypothyroidism — TSH elevated but still within the broad "normal" reference range — is one of the most common and most overlooked causes of persistent cognitive slowing. Standard TSH screening misses a significant portion of clinically relevant thyroid dysfunction.

**Insulin resistance.** The brain is an insulin-responsive organ. Impaired insulin signaling reduces glucose uptake in neurons and disrupts the metabolic substrate for cognitive work. Some researchers refer to Alzheimer's disease as Type 3 diabetes for this reason. The earlier stages of this process produce exactly the kind of functional cognitive impairment patients describe as brain fog.

**Sleep architecture disruption.** The glymphatic system — the brain's waste clearance infrastructure — operates primarily during deep sleep. Chronic disruption of slow-wave and REM sleep impairs the clearance of metabolic byproducts from neural tissue. The result accumulates over time.

**Chronic inflammation.** Systemic inflammatory burden crosses the blood-brain barrier and activates neuroinflammatory cascades. Elevated cortisol, poor gut barrier function, and environmental toxin load all contribute.`,
    failsHeadline: "Why \"just rest more\" isn't working",
    fails:
      "The advice to reduce stress, sleep more, and take it easy addresses the surface. It does not address the physiology. If the hormonal substrate is deficient, rest does not restore it. If thyroid function is suboptimal, self-care does not correct it. If insulin resistance is impairing neuronal metabolism, mindfulness does not reverse it. Cognitive symptoms that persist despite adequate sleep and manageable stress are physiological until proven otherwise. They deserve a clinical evaluation, not a productivity framework.",
    approachHeadline: "The clinical approach at Revitalize",
    approach:
      "A comprehensive evaluation for cognitive symptoms at Revitalize starts with labs. Not a questionnaire. Not a symptom checklist. Actual lab values: comprehensive thyroid panel, sex hormones, fasting insulin, inflammatory markers, and a metabolic panel. From that foundation, the clinical picture becomes clear. Hormonal deficits that are addressable with bioidentical hormone therapy are addressed. Thyroid patterns that warrant optimization are addressed. Metabolic dysregulation is approached through the structured weight loss and metabolic program. The goal is not to manage the symptom. It is to find what changed and correct it.",
    services: [
      { label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" },
      { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
      { label: "Start Here", href: "/start-here" },
    ],
    faq: [
      {
        q: "Can brain fog be caused by perimenopause?",
        a: "Yes. Cognitive symptoms — particularly word-finding difficulty and working memory impairment — are among the most common and most underrecognized symptoms of perimenopause. Estrogen has direct neuroprotective and cholinergic functions. Its decline during the menopausal transition produces measurable cognitive changes in many women.",
      },
      {
        q: "How do I know if my brain fog is hormonal versus something neurological?",
        a: "Lab work is the first step. If hormone levels, thyroid function, insulin markers, and inflammatory markers are all normal, the differential expands. Persistent or worsening cognitive symptoms with normal labs warrant neurological evaluation. Most patients presenting to Revitalize have correctable physiological drivers, not neurological pathology.",
      },
      {
        q: "Will hormone therapy improve my cognitive symptoms?",
        a: "For patients whose cognitive symptoms are driven by hormonal decline, optimization typically produces meaningful improvement. The degree and timeline vary — most patients notice changes in clarity and processing speed within four to eight weeks of achieving therapeutic hormone levels.",
      },
      {
        q: "Is there a test for brain fog?",
        a: "Brain fog itself is not a diagnosis — it is a symptom cluster. The clinical evaluation looks for the underlying cause. A comprehensive lab panel is the starting point.",
      },
      {
        q: "Does caffeine make brain fog worse?",
        a: "In some patients, yes. High caffeine intake disrupts sleep architecture, increases cortisol, and can worsen the adrenal burden that contributes to cognitive symptoms. This is highly individual. The clinical history includes dietary and stimulant patterns.",
      },
    ],
    ctaHeadline: "Ready to find out what's actually driving it?",
  },

  "low-energy": {
    metaTitle: "Low Energy & Fatigue | Clinical Causes & Treatment | Revitalize",
    metaDescription: "Clinical explanation of persistent fatigue, why it happens, and how it is addressed at Revitalize in Columbus and Warner Robins, Georgia.",
    eyebrow: "Energy & Fatigue",
    h1: "Fatigue that sleep doesn't fix is a physiological problem.",
    opening:
      "Everyone is tired sometimes. This is different. This is waking after seven or eight hours and still not feeling rested. This is the afternoon crash that arrives whether or not the morning was demanding. This is the progressive loss of the energy margin that used to exist. When fatigue is this consistent and this resistant to rest, the answer is not more sleep. The answer is a lab.",
    driversHeadline: "What is actually driving persistent fatigue",
    drivers: `The most clinically common drivers of treatment-resistant fatigue in adults aged 35 to 65:

**Testosterone deficiency.** Testosterone is the primary energy-regulating androgen in both men and women. Deficiency produces fatigue that is pervasive rather than situational — present across the day, not tied to specific demands. This applies to women as well as men; female testosterone levels that are suboptimal for a given individual produce identical fatigue symptoms.

**Thyroid hypofunction.** The thyroid regulates the metabolic rate of every cell in the body. Suboptimal thyroid function — even within the broad reference ranges used by standard screening — produces systemic fatigue, cold intolerance, slowed cognition, and difficulty maintaining body weight. Many patients are told their thyroid is "normal" based on TSH alone when a complete panel would tell a different story.

**Adrenal dysregulation.** The cortisol pattern — how cortisol rises in the morning and declines through the day — directly governs energy architecture. A flattened cortisol curve, or one that peaks at the wrong time, produces exactly the fatigue pattern patients describe: difficulty getting going in the morning, a brief window of acceptable energy, and then a significant afternoon drop.

**Iron-deficiency anemia.** Often screened but frequently missed at the subclinical level. Ferritin — the storage form of iron — can be low enough to cause fatigue while hemoglobin remains normal. Ferritin below 50 ng/mL is associated with fatigue symptoms in a significant subset of patients.

**Mitochondrial substrate deficiency.** NAD+, CoQ10, magnesium, and B vitamins are all required for mitochondrial ATP production. Depletion of any of these — common with age, chronic stress, and certain medications — directly impairs cellular energy output.`,
    failsHeadline: "Why energy drinks and more sleep are not working",
    fails:
      "Caffeine and stimulants compensate for — and compound — the underlying deficit. They do not address the physiological cause; they borrow energy from a system that is already in debt. The result is dependency, tolerance, and a pattern where removing the stimulants reveals the true degree of dysfunction underneath. More sleep helps with sleep deprivation. It does not help with hormonal fatigue, thyroid hypofunction, or mitochondrial insufficiency. The ceiling of rest as a solution is determined by what the underlying physiology can support.",
    approachHeadline: "The clinical approach at Revitalize",
    approach:
      "A fatigue evaluation at Revitalize includes a complete hormonal panel, thyroid function (TSH, free T3, free T4, and reverse T3 where indicated), iron studies including ferritin, a metabolic panel, and an assessment of inflammatory markers. The clinical picture emerging from that data determines the intervention. For most patients in the 35-65 age range, meaningful improvement requires addressing the hormonal substrate — not symptom management, but actual correction of the physiological deficit driving the symptom.",
    services: [
      { label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" },
      { label: "IV Hydration Therapy (NAD+ formula)", href: "/services/iv-hydration" },
      { label: "Start Here", href: "/start-here" },
    ],
    faq: [
      {
        q: "My doctor said my labs are normal but I'm still exhausted. What now?",
        a: '"Normal" reference ranges are population averages, not optimal ranges. A TSH of 3.5 is technically normal by most lab standards; many patients feel significantly better with levels between 1.0 and 2.0. The same applies to testosterone and other hormones. Optimal is a different threshold than normal.',
      },
      {
        q: "Can IV therapy help with fatigue?",
        a: "NAD+ infusion directly supports mitochondrial function and has been reported to produce meaningful energy improvements in patients with mitochondrial substrate depletion. It is adjunctive — it supports the underlying correction rather than replacing it.",
      },
      {
        q: "Is adrenal fatigue a real diagnosis?",
        a: '"Adrenal fatigue" is not a recognized medical diagnosis in the conventional sense, but HPA axis dysregulation — the dysregulated cortisol pattern it describes — is real and measurable. Cortisol testing (ideally four-point salivary or dried urine) reveals the actual pattern; the label matters less than the clinical finding.',
      },
      {
        q: "How long does it take to feel better after starting hormone therapy?",
        a: "Energy is typically one of the earlier responders. Most patients notice improvement within three to six weeks of reaching therapeutic hormone levels. Full optimization — including body composition and mood stabilization — takes longer.",
      },
      {
        q: "Can fatigue be a symptom of depression rather than hormone deficiency?",
        a: "Both can be present simultaneously. Hormonal deficiency — particularly testosterone and estrogen deficiency — directly affects mood and motivation through the same neurological pathways involved in depression. Treating the hormonal deficit often resolves or substantially improves mood symptoms without a separate psychiatric diagnosis.",
      },
    ],
    ctaHeadline: "Ready to find out what's driving it?",
  },

  "midsection-weight-gain": {
    metaTitle: "Midsection Weight Gain | Clinical Causes & Treatment | Revitalize",
    metaDescription: "Clinical explanation of abdominal fat accumulation, why it happens, and how it is addressed at Revitalize in Columbus and Warner Robins, Georgia.",
    eyebrow: "Body Composition",
    h1: "The weight around your midsection is a metabolic signal.",
    opening:
      "Visceral fat — the fat that accumulates around the organs in the abdominal cavity — is not the same as subcutaneous fat in other areas. It is metabolically active tissue that produces inflammatory cytokines, disrupts insulin signaling, and directly affects hormonal balance. Its accumulation is a physiological indicator, not a lifestyle judgment.",
    driversHeadline: "What is actually driving abdominal fat accumulation",
    drivers: `**Cortisol excess.** The adrenal stress response preferentially deposits fat in the visceral compartment. Chronic stress — psychological or physiological — maintains chronically elevated cortisol levels that directly promote central adiposity regardless of caloric intake.

**Insulin resistance.** When cells become resistant to insulin's signaling, the pancreas compensates by producing more. Chronically elevated insulin is the primary signal for fat storage, and visceral tissue is particularly insulin-sensitive. The cycle is self-perpetuating: visceral fat worsens insulin resistance, which worsens visceral fat deposition.

**Sex hormone decline.** Estrogen deficiency in women is directly associated with the redistribution of body fat from peripheral (hips, thighs) to central (abdominal) depots. Testosterone deficiency in men produces the same central adiposity pattern, along with corresponding loss of lean mass. This is why body shape changes in mid-life even when diet and exercise remain constant.

**Thyroid dysfunction.** Low-normal thyroid function slows the metabolic rate sufficiently to produce meaningful weight gain over time — particularly in the presence of age-related hormonal decline.`,
    failsHeadline: "Why the standard approaches stop working",
    fails:
      "Caloric restriction works for calorically-driven weight gain. It does not work, or works poorly, for weight that is driven by insulin resistance, hormonal decline, and cortisol dysregulation. The metabolism adapts to restriction in ways that are particularly aggressive in a state of hormonal deficiency. Exercise helps maintain lean mass but cannot overcome the anabolic resistance that comes with low testosterone or the metabolic depression of hypothyroidism. The frustration patients describe — \"I'm doing everything right and nothing is working\" — is not compliance failure. It is physiology working against an intervention that is not addressing the actual driver.",
    approachHeadline: "The clinical approach at Revitalize",
    approach:
      "A body composition evaluation at Revitalize starts with the physiology: insulin, cortisol patterns, comprehensive hormone panel, thyroid function. The intervention is built around what the labs show. For most patients with central adiposity in mid-life, this involves addressing the hormonal substrate — whether that is sex hormone optimization, thyroid correction, or insulin sensitization through the structured medical weight loss program. GLP-1 therapy is considered where clinically appropriate as a tool within the broader metabolic protocol.",
    services: [
      { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
      { label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" },
      { label: "Start Here", href: "/start-here" },
    ],
    faq: [
      {
        q: "Is abdominal fat more dangerous than fat elsewhere?",
        a: "Clinically, yes. Visceral fat produces inflammatory mediators and disrupts insulin signaling in ways that subcutaneous fat does not to the same degree. Central adiposity is associated with elevated cardiovascular risk, metabolic syndrome, and accelerated hormonal decline independent of total body weight.",
      },
      {
        q: "Will GLP-1 medications remove visceral fat specifically?",
        a: "GLP-1 receptor agonists produce weight loss that tends to come from both visceral and subcutaneous fat compartments. Studies suggest a meaningful proportion of GLP-1-driven weight loss comes from visceral fat, which is part of what drives the cardiovascular risk reduction seen in the major trials.",
      },
      {
        q: "Can hormone therapy alone reduce abdominal fat?",
        a: "In patients whose central adiposity is primarily driven by sex hormone deficiency, yes — hormone optimization often produces meaningful body composition improvement without additional pharmacological intervention. The degree of response is individual and depends on the extent of the underlying deficiency.",
      },
      {
        q: "Is there a surgical option you recommend?",
        a: "Revitalize does not offer surgical body contouring. Our focus is on metabolic correction — addressing the physiological drivers of fat accumulation — rather than mechanical removal.",
      },
      {
        q: "How long does it take to see body composition changes?",
        a: "Body composition changes are slower than weight changes on a scale. Meaningful visceral fat reduction with a comprehensive program typically becomes measurable within three to six months.",
      },
    ],
    ctaHeadline: "Ready to address the physiology, not just the number?",
  },

  "low-libido": {
    metaTitle: "Low Libido | Clinical Causes & Treatment | Revitalize",
    metaDescription: "Clinical explanation of low libido, why it happens, and how it is addressed at Revitalize in Columbus and Warner Robins, Georgia.",
    eyebrow: "Sexual Wellness",
    h1: "Low libido is a symptom with a clinical cause.",
    opening:
      "Sexual desire is not a fixed trait. It is a physiologically regulated state that changes in response to hormonal levels, stress load, relationship context, and sleep quality. When libido declines in a way that feels persistent, progressive, and out of character, the most useful first question is not psychological. It is physiological.",
    driversHeadline: "What is actually driving low libido",
    drivers: `**Testosterone deficiency.** This applies to both men and women. Testosterone is the primary driver of sexual desire in both sexes. Women produce testosterone in the ovaries and adrenal glands; its decline — which accelerates significantly in the perimenopausal transition — is directly associated with reduced sexual interest, arousal difficulty, and decreased response to stimulation. In men, testosterone deficiency produces analogous changes in desire and arousal.

**Estrogen deficiency (women).** Low estrogen produces vaginal tissue changes — reduced lubrication, thinning of the vaginal wall, increased friction during intercourse — that make sex uncomfortable or painful. When sex becomes associated with discomfort, desire predictably declines. This is a physiological mechanism, not a psychological one.

**Elevated cortisol.** Chronic stress suppresses both testosterone production and sexual desire through competing neurological and hormonal pathways. The stress response is biologically prioritized over reproductive function.

**Medication effects.** A significant number of commonly prescribed medications — antidepressants (particularly SSRIs), oral contraceptives, antihypertensives, and others — directly suppress libido as a side effect. This is underreported and underrecognized.

**Relationship and psychological context.** This is real and deserves acknowledgment. Clinical evaluation distinguishes the physiological from the contextual — both can be present simultaneously.`,
    failsHeadline: "Why \"it's just stress\" doesn't fully explain it",
    fails:
      "Stress contributes. But when libido is significantly below a person's baseline and has declined progressively over months or years, stress alone rarely explains the full picture. The hormonal changes of mid-life are real, measurable, and directly implicated in the sexual function changes that accompany them.",
    approachHeadline: "The clinical approach at Revitalize",
    approach:
      "Sexual wellness evaluation at Revitalize starts with a complete hormonal panel. Testosterone — free and total — estradiol, and DHEA are the primary analytes for libido assessment. The clinical conversation includes medication history, sleep, stress load, and relationship context. For patients with demonstrable hormonal deficits, optimization typically produces meaningful improvement in desire, arousal, and satisfaction. PRP-based treatments (O-Shot for women, erectile dysfunction evaluation and treatment for men) address vascular and tissue-level contributors beyond the hormonal picture.",
    services: [
      { label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" },
      { label: "O-Shot", href: "/services/o-shot" },
      { label: "Erectile Dysfunction", href: "/services/erectile-dysfunction" },
      { label: "Start Here", href: "/start-here" },
    ],
    faq: [
      {
        q: "Is low libido something I should talk to my OB/GYN about instead?",
        a: "Your OB/GYN is an appropriate first contact. Many OB/GYN practices do not specialize in hormonal optimization for sexual function, however, and may not offer the same level of hormonal assessment and intervention. Revitalize focuses specifically on this intersection of hormonal health and sexual wellness.",
      },
      {
        q: "Can antidepressants be causing my low libido?",
        a: "Yes. SSRI and SNRI antidepressants suppress libido and delay orgasm in a significant proportion of patients. This should be discussed with the prescribing provider. There are alternatives with lower sexual side effect profiles, and in some cases hormonal optimization can partially offset medication-driven libido suppression.",
      },
      {
        q: "What is the O-Shot?",
        a: "The O-Shot is a PRP-based (platelet-rich plasma) treatment for women's sexual wellness. Concentrated growth factors from the patient's own blood are injected into the clitoral and vaginal tissue, stimulating vascularization and tissue repair. It is used for arousal difficulty, orgasm difficulty, and vaginal dryness.",
      },
      {
        q: "Will hormone therapy affect my relationship?",
        a: "Clinical optimization addresses the physiological drivers of libido. The relational, psychological, and contextual dimensions of sexual wellness are equally real and beyond the scope of clinical practice to resolve. Some patients find that restoring physiological function creates the foundation for addressing relational dimensions more productively.",
      },
      {
        q: "Is low libido a normal part of aging?",
        a: "Some decline in sexual desire with age is common. That does not make it inevitable or untreatable. The degree of decline that is physiologically correctable is significantly larger than most patients assume.",
      },
    ],
    ctaHeadline: "Ready to start with the clinical picture?",
  },

  "poor-sleep": {
    metaTitle: "Poor Sleep | Clinical Causes & Treatment | Revitalize",
    metaDescription: "Clinical explanation of poor sleep and insomnia, why it happens, and how it is addressed at Revitalize in Columbus and Warner Robins, Georgia.",
    eyebrow: "Sleep & Recovery",
    h1: "Poor sleep is downstream of physiology, not upstream of it.",
    opening:
      "Sleep medicine frames insomnia primarily as a behavioral and psychological problem amenable to cognitive restructuring and sleep hygiene. This is partly true. It is also incomplete. Many patients who struggle with sleep — difficulty falling asleep, frequent waking, early morning waking, non-restorative sleep — are experiencing a physiological disruption that no amount of bedtime routine will correct.",
    driversHeadline: "What is actually disrupting sleep",
    drivers: `**Progesterone deficiency (women).** Progesterone is a neurosteroid with direct sedative properties via GABA-A receptor modulation. Progesterone decline during perimenopause is directly associated with sleep initiation difficulty, increased waking, and the characteristic 3am arousal pattern many perimenopausal women describe. Progesterone restoration often resolves this pattern more effectively than sleep medication.

**Cortisol dysregulation.** The normal cortisol curve rises sharply in the morning and declines to a nadir in the evening. When this pattern is disrupted — elevated evening cortisol, a flattened curve, or secondary cortisol peaks at night — the result is difficulty falling asleep, frequent waking, and early morning arousal with inability to return to sleep.

**Testosterone deficiency.** Low testosterone is associated with reduced sleep efficiency and increased sleep apnea risk in men. Sleep apnea itself is bidirectionally related to testosterone — apnea lowers testosterone, and low testosterone increases apnea risk through central respiratory effects.

**Estrogen decline.** Vasomotor symptoms — hot flashes and night sweats — are the most obvious sleep disruptors of menopausal transition. Less visibly, estrogen also affects the serotonin and norepinephrine systems that regulate sleep architecture.

**Blood glucose instability.** Reactive hypoglycemia — blood glucose dropping significantly in the early morning hours — is a common cause of 3am to 4am waking. The adrenal counter-regulatory response to low glucose produces adrenaline and cortisol release, which awakens the patient.`,
    failsHeadline: "Why sleep hygiene alone isn't fixing it",
    fails:
      "Sleep hygiene is appropriate for behaviorally-driven insomnia. It is not the right tool for hormonally-driven, cortisol-driven, or glucose-driven sleep disruption. A patient with progesterone deficiency who practices excellent sleep hygiene will still wake at 3am.",
    approachHeadline: "The clinical approach at Revitalize",
    approach:
      "Sleep evaluation at Revitalize is part of the comprehensive hormonal and metabolic assessment. Progesterone, cortisol pattern, thyroid function, and blood glucose markers are reviewed in the context of the sleep complaint. For most patients in the perimenopausal and andropausal range, sleep disruption is a treatable physiological problem when the root cause is identified.",
    services: [
      { label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" },
      { label: "Medical Weight Loss (metabolic component)", href: "/services/medical-weight-loss" },
      { label: "Start Here", href: "/start-here" },
    ],
    faq: [
      {
        q: "Should I get a sleep study before pursuing hormonal evaluation?",
        a: "If there is any clinical suspicion of sleep apnea — particularly in men or in patients who snore or have witnessed apnea events — a sleep study should be part of the evaluation. Hormonal assessment and sleep study are complementary, not sequential.",
      },
      {
        q: "Can melatonin help with the sleep problems caused by hormonal changes?",
        a: "Melatonin addresses circadian rhythm and sleep latency but does not address progesterone deficiency or cortisol dysregulation. For hormonally-driven sleep disruption, melatonin is at best adjunctive.",
      },
      {
        q: "Will treating my hormones definitely fix my sleep?",
        a: "For patients whose sleep disruption is primarily hormonal in origin, optimization typically produces significant improvement. The timeline varies — most patients see meaningful change within four to eight weeks of reaching therapeutic hormone levels. Sleep is not guaranteed to normalize in every case, but it is addressable as a physiological target.",
      },
      {
        q: "Is Ambien or a sleep medication a better option?",
        a: "Sedative-hypnotics address the symptom without addressing the cause. They are appropriate for acute or situational insomnia but are not the preferred long-term approach for chronic sleep disruption, particularly when a physiological driver is identifiable and correctable.",
      },
      {
        q: "What does the 3am waking pattern usually mean?",
        a: "In perimenopausal and postmenopausal women, 3am waking most commonly reflects progesterone deficiency and/or cortisol irregularity. In men, it may reflect early morning testosterone nadir, sleep apnea arousals, or glucose instability. The specific pattern helps direct the clinical investigation.",
      },
    ],
    ctaHeadline: "Ready to get to the root of it?",
  },

  "mood-changes": {
    metaTitle: "Mood Changes | Clinical Causes & Treatment | Revitalize",
    metaDescription: "Clinical explanation of mid-life mood changes, why they happen, and how they are addressed at Revitalize in Columbus and Warner Robins, Georgia.",
    eyebrow: "Mood & Mental Clarity",
    h1: "Mood changes in mid-life are often hormonal, not psychological.",
    opening:
      "Irritability that feels out of proportion. Anxiety that appeared without an obvious trigger. A flattened emotional range — not depression exactly, but a loss of the emotional color and enthusiasm that used to be there. Mood symptoms in mid-life are real, common, and in many cases driven by changes in the hormonal environment of the brain — not by life circumstances, not by character, and not by diagnosis.",
    driversHeadline: "How hormones regulate mood",
    drivers: `**Estrogen.** Estrogen modulates serotonin, dopamine, and norepinephrine — the primary neurotransmitter systems involved in mood regulation, reward, and motivation. Its decline during perimenopause is directly associated with increased anxiety, irritability, tearfulness, and depression symptoms in women who had no prior history of mood disorders. This is not coincidence. It is mechanism.

**Progesterone.** Progesterone and its neurosteroid metabolite allopregnanolone modulate GABA-A receptors — the primary inhibitory system in the brain. Progesterone decline produces anxiety, difficulty calming down, and sleep-disrupting rumination that mimics anxiety disorder.

**Testosterone.** Testosterone affects motivation, drive, confidence, and competitive engagement in both sexes. Its decline — in men and women — produces a specific mood pattern: not sadness exactly, but flatness. Reduced interest. Lower tolerance for discomfort. Diminished initiative.

**Cortisol chronicity.** Sustained elevated cortisol produces hippocampal changes over time that directly increase anxiety, impair stress tolerance, and reduce emotional resilience. The HPA axis dysregulation that underlies adrenal fatigue is also the mechanism underlying chronic anxiety and mood instability in stressed individuals.

**Thyroid dysfunction.** The relationship between thyroid function and mood is bidirectional and well-established. Hypothyroidism produces depression-like symptoms — low energy, cognitive slowing, anhedonia, emotional withdrawal. Hyperthyroid states produce anxiety and emotional lability. Subclinical thyroid dysfunction can produce mood symptoms without meeting diagnostic thresholds on standard screening.`,
    failsHeadline: "Why this does not always respond to antidepressants",
    fails:
      "Antidepressants address serotonin and norepinephrine signaling. They do not address estrogen deficiency, progesterone decline, testosterone deficiency, or thyroid dysfunction. When mood symptoms are driven by these mechanisms, antidepressants produce partial response at best — which is consistent with the clinical experience many mid-life patients report. This is not an argument against antidepressants. They are appropriate for primary depressive and anxiety disorders. It is an argument for completing the hormonal evaluation before concluding that the mood presentation is primarily psychiatric.",
    approachHeadline: "The clinical approach at Revitalize",
    approach:
      "Mood evaluation at Revitalize occurs in the context of a complete hormonal and metabolic assessment. The clinical history includes the timeline of mood change relative to hormonal transitions, medication history, sleep quality, and life context. The lab panel covers estradiol, progesterone, testosterone, thyroid function, cortisol patterns, and inflammatory markers. The intervention is built from what that data shows.",
    services: [
      { label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" },
      { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" },
      { label: "Medical Weight Loss (metabolic component)", href: "/services/medical-weight-loss" },
      { label: "Start Here", href: "/start-here" },
    ],
    faq: [
      {
        q: "Is hormonal mood disruption the same as depression?",
        a: "It can be clinically indistinguishable without hormonal evaluation. The distinction matters because the treatment is different. Hormonal mood disruption responds to hormonal optimization; primary depressive disorder responds to antidepressants and psychotherapy. Many patients have some degree of both.",
      },
      {
        q: "Can I be on antidepressants and also pursue hormonal optimization?",
        a: "Yes. Hormonal optimization and psychiatric medication management are not mutually exclusive. Many patients find that hormonal correction allows them to reduce or eventually discontinue psychiatric medications with appropriate clinical oversight.",
      },
      {
        q: "How quickly does mood improve with hormone therapy?",
        a: "Mood response varies. Some patients notice meaningful improvement in irritability and anxiety within two to four weeks of achieving therapeutic hormone levels. Others take longer, particularly when sleep disruption is concurrent. Full mood stabilization typically takes one to two pellet cycles.",
      },
      {
        q: "Can testosterone therapy affect mood in women?",
        a: "Yes, positively. Testosterone optimization in women with demonstrable deficiency typically produces improvements in energy, motivation, and emotional engagement. Mood flattening and loss of drive are among the symptoms most consistently addressed by testosterone optimization in women.",
      },
      {
        q: "What if my mood symptoms started after a major life event?",
        a: "Life events and hormonal changes frequently coincide — the stress of the event may itself accelerate hormonal dysregulation. A thorough clinical history accounts for both. The presence of a precipitating life event does not exclude a hormonal component.",
      },
    ],
    ctaHeadline: "Ready to look at the hormonal picture?",
  },
};

type Props = { params: Promise<{ symptom: string }> };

export async function generateStaticParams() {
  return Object.keys(SYMPTOMS).map((symptom) => ({ symptom }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { symptom } = await params;
  const data = SYMPTOMS[symptom];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

function renderBody(text: string) {
  return text.trim().split(/\n\n+/).map((block, i) => {
    if (block.trim() === "") return null;
    return (
      <p
        key={i}
        style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "18px" }}
        dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
      />
    );
  });
}

export default async function SymptomPage({ params }: Props) {
  const { symptom } = await params;
  const data = SYMPTOMS[symptom];
  if (!data) notFound();

  const relatedPosts = getPostsByCategory(SYMPTOM_CATEGORY[symptom] ?? "Hormone Therapy", undefined, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "760px" }}>
          <Link
            href="/start-here"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "28px" }}
          >
            &larr; Start Here
          </Link>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
            {data.eyebrow}
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, lineHeight: 1.15, color: "#fff", letterSpacing: "-0.015em", marginBottom: "24px" }}>
            {data.h1}
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: "600px" }}>
            {data.opening}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 300px", gap: "64px", alignItems: "start" }} className="symptom-layout">
          <FadeIn>
            <article>
              {/* Drivers */}
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)", marginTop: 0, marginBottom: "20px", lineHeight: 1.3 }}>
                {data.driversHeadline}
              </h2>
              {renderBody(data.drivers)}

              {/* Why it fails */}
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)", marginTop: "48px", marginBottom: "20px", lineHeight: 1.3 }}>
                {data.failsHeadline}
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "20px" }}>
                {data.fails}
              </p>

              {/* Approach */}
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)", marginTop: "48px", marginBottom: "20px", lineHeight: 1.3 }}>
                {data.approachHeadline}
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-muted)", marginBottom: "32px" }}>
                {data.approach}
              </p>

              {/* FAQ */}
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)", marginTop: "48px", marginBottom: "20px", lineHeight: 1.3 }}>
                Common questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
                {data.faq.map((item, i) => (
                  <details key={i} style={{ background: "var(--color-stone)", borderRadius: "4px", overflow: "hidden" }}>
                    <summary style={{ padding: "16px 20px", cursor: "pointer", fontWeight: 600, fontSize: "0.88rem", color: "var(--color-ink)", lineHeight: 1.45, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                      {item.q}
                      <span style={{ color: "var(--color-teal)", flexShrink: 0, fontSize: "1.2rem", lineHeight: 1 }}>+</span>
                    </summary>
                    <div style={{ padding: "0 20px 16px", fontSize: "0.87rem", lineHeight: 1.8, color: "var(--color-muted)" }}>
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>

              {/* Dual-location CTA */}
              <div style={{ background: "rgba(201,168,108,0.07)", border: "1px solid rgba(201,168,108,0.3)", borderRadius: "8px", padding: "28px 28px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.3, marginBottom: "20px" }}>
                  {data.ctaHeadline}
                </h3>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href={SITE.bookingColumbus}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", background: "var(--color-teal)", color: "#fff", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
                  >
                    Book in Columbus &rarr;
                  </a>
                  <a
                    href={SITE.bookingWarnerRobins}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
                  >
                    Book in Warner Robins &rarr;
                  </a>
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.1}>
            <aside style={{ position: "sticky", top: "100px" }}>
              <div style={{ background: "var(--color-teal)", borderRadius: "6px", padding: "28px 24px", marginBottom: "20px" }}>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "12px" }}>
                  Related services
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {data.services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      style={{ display: "block", color: "#fff", fontSize: "0.82rem", lineHeight: 1.5, textDecoration: "none", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {s.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: "6px", padding: "24px" }}>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "12px" }}>
                  Book a consultation
                </div>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-muted)", marginBottom: "14px" }}>
                  Ready to start with labs and a clinical evaluation? Book at either location.
                </p>
                <a href={SITE.bookingColumbus} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "var(--color-teal)", color: "#fff", padding: "10px 16px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center", marginBottom: "8px" }}>
                  Columbus
                </a>
                <a href={SITE.bookingWarnerRobins} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "var(--color-gold)", color: "#fff", padding: "10px 16px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
                  Warner Robins
                </a>
              </div>
            </aside>
          </FadeIn>
        </div>

        <style>{`
          .symptom-layout { grid-template-columns: 1fr 300px; }
          @media (max-width: 1024px) { .symptom-layout { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Phase 5 — Related articles for this symptom */}
      <RelatedPostsRow
        posts={relatedPosts}
        heading={`Related articles on ${data.eyebrow.toLowerCase()}`}
      />
    </>
  );
}
