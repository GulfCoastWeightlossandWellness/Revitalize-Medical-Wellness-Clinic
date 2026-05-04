/**
 * Peptide Education Guide — source of truth for /peptide-education,
 * /services/peptide-education, and /hub/peptides. Content sourced directly
 * from Travis Woodley's clinical Peptide Education Guide. Edits to clinical
 * detail (dosing windows, indications, cycling) should happen here only —
 * downstream pages render from this module.
 *
 * Categories follow Travis's organizational structure. Within each category,
 * peptides are listed in the order they appear in his guide.
 */

export interface Peptide {
  /** Slug-safe ID for in-page anchors. */
  id: string;
  /** Display name as it appears clinically. */
  name: string;
  /** "What it is" — clinical description in Travis's voice. */
  whatItIs: string;
  /** "Why we use it" — clinical indication and approach. */
  whyWeUse: string;
  /** "Who it's for" — patient stratification. */
  whoItsFor: string;
  /** Typical course length and reassessment cadence. */
  typicalDuration: string;
  /** Cycling pattern (continuous vs. blocks). */
  doWeCycle: string;
  /** Foundational lifestyle pairings that improve outcomes. */
  bestOutcomes: string;
  /** Optional clinical notes (limitations, screening, contraindications). */
  notes?: string;
}

export interface PeptideCategory {
  id: string;
  title: string;
  /** Short description of the category — Travis's clinical lens for the group. */
  description: string;
  peptides: Peptide[];
}

export const PEPTIDE_CATEGORIES: PeptideCategory[] = [
  {
    id: "metabolic-body-composition",
    title: "Metabolic & Body Composition Support",
    description:
      "Peptides used in structured metabolic programs — fat metabolism signaling, mitochondrial support, and the GH-axis tools we use when nutrition and training alone aren't moving the needle. Always layered on top of foundational work, never a substitute for it.",
    peptides: [
      {
        id: "aod-9604",
        name: "AOD 9604",
        whatItIs: "A fragment of the growth hormone molecule designed to emphasize fat-metabolism signaling.",
        whyWeUse: "To support fat loss/body composition — especially when patients are already doing the nutrition and training but progress is slow.",
        whoItsFor: "Patients focused on body recomposition and stubborn fat patterns.",
        typicalDuration: "Commonly 8–12 weeks, then reassess progress and decide on maintenance vs. another course.",
        doWeCycle: "Often cycled (e.g., 8–12 weeks on, then a break) depending on goals and response.",
        bestOutcomes: "Protein-forward nutrition, resistance training, steps, stress/sleep optimization.",
      },
      {
        id: "mots-c",
        name: "MOTS-C",
        whatItIs: "A mitochondrial-derived signaling peptide involved in how cells respond to metabolic stress and handle glucose/energy.",
        whyWeUse: "To support metabolic flexibility — energy, glucose handling, body composition momentum — in a comprehensive metabolic plan.",
        whoItsFor: "Patients with low energy + metabolic slowdown, insulin resistance patterns, or weight-loss resistance.",
        typicalDuration: "Often used in 4–8 week blocks (sometimes repeated) with reassessment of symptoms and metabolic markers.",
        doWeCycle: "Usually cycled in blocks rather than taken continuously.",
        bestOutcomes: "Strength training plus aerobic base work (zone 2), consistent sleep, structured nutrition and protein intake.",
      },
      {
        id: "nad-plus",
        name: "NAD+ (both strengths)",
        whatItIs: "A foundational molecule your body uses for cellular energy production and repair processes.",
        whyWeUse: "To support energy, fatigue recovery, and resilience during high stress or burnout seasons.",
        whoItsFor: "Patients with fatigue, brain fog, poor recovery, or low stamina — after we assess root causes like thyroid, iron, and sleep.",
        typicalDuration: "Often a front-loaded series (e.g., weekly for several weeks), then maintenance as needed.",
        doWeCycle: "Typically not cycled like a supplement; we individualize frequency based on response.",
        bestOutcomes: "Sleep improvement, hydration and electrolytes, exercise pacing, and addressing nutrient/thyroid drivers.",
      },
      {
        id: "adipotide",
        name: "Adipotide",
        whatItIs: "A targeted peptide studied for signaling pathways involved in reducing fat tissue by affecting how fat tissue is supported and maintained.",
        whyWeUse: "To support advanced body-composition goals when stubborn fat is the primary concern and foundational lifestyle work is already in place.",
        whoItsFor: "Highly selected patients pursuing body-composition change under close clinician guidance.",
        typicalDuration: "Often approached as a short, time-limited trial (commonly 4–8 weeks) with reassessment.",
        doWeCycle: "Yes — typically used in defined blocks rather than continuously.",
        bestOutcomes: "A structured nutrition plan, daily movement and steps, resistance training, and sleep consistency.",
        notes: "This is considered an advanced option with limited high-quality human outcome data. Expectations should be conservative.",
      },
      {
        id: "aod-cjc-ipa-mots-blend",
        name: "AOD-9604 / CJC-1295 / Ipamorelin / MOTS-C (blend)",
        whatItIs: "A combination designed to support fat metabolism (AOD-9604), growth hormone pulsatility (CJC-1295 + Ipamorelin), and mitochondrial/metabolic signaling (MOTS-C).",
        whyWeUse: "To address body composition from multiple angles — metabolism plus recovery and sleep plus cellular energy — in a single protocol.",
        whoItsFor: "Patients seeking comprehensive metabolic support with goals of fat loss, better recovery, and improved energy.",
        typicalDuration: "Often 8–12 weeks, then reassess body composition, sleep quality, and metabolic markers.",
        doWeCycle: "Yes — commonly used in cycles. We reassess and adjust the plan between cycles.",
        bestOutcomes: "Nutrition plan, resistance training, daily movement and steps, sleep consistency and stress management.",
      },
      {
        id: "tesamorelin",
        name: "Tesamorelin",
        whatItIs: "A prescription GHRH analog that stimulates the body's own growth hormone release. FDA-approved to reduce excess abdominal fat in HIV-associated lipodystrophy.",
        whyWeUse: "In appropriate patients, to target visceral and central fat patterns and support metabolic risk reduction under careful monitoring.",
        whoItsFor: "Selected patients with central/visceral fat patterns and metabolic risk markers where GH-axis support is clinically appropriate.",
        typicalDuration: "We commonly reassess around 12–26 weeks. Longer courses may be used depending on indication and response.",
        doWeCycle: "Often treated as ongoing therapy with periodic reassessment rather than frequent on/off cycles. IGF-1 and metabolic markers are monitored.",
        bestOutcomes: "Waist tracking, protein and resistance training, glucose stability strategies, sleep and stress management.",
        notes: "Because it affects the GH/IGF-1 axis, monitoring is important and we screen for contraindications.",
      },
      {
        id: "tesa-ipa-aod-mots-blend",
        name: "Tesamorelin / Ipamorelin / AOD-9604 / MOTS-C (blend)",
        whatItIs: "A comprehensive metabolic blend combining GH-axis support (tesamorelin + ipamorelin), fat metabolism signaling (AOD-9604), and mitochondrial/metabolic signaling (MOTS-C).",
        whyWeUse: "To support visceral fat patterns, energy, and recovery together in a structured metabolic program.",
        whoItsFor: "Patients with body composition and energy goals where multiple metabolic levers are needed and clinician monitoring is available.",
        typicalDuration: "Often 8–12 weeks with reassessment. May be extended or repeated based on objective progress and labs.",
        doWeCycle: "Yes — typically used in cycles with lab and symptom reassessment between cycles.",
        bestOutcomes: "A structured plan: protein-forward nutrition, resistance training, steps, sleep schedule, stress management.",
      },
    ],
  },
  {
    id: "growth-hormone-axis",
    title: "Growth Hormone Axis — Sleep, Recovery, Body Composition",
    description:
      "Tools that work through the body's own growth hormone signaling — supporting sleep depth, recovery capacity, and body composition. Layered protocols that respect physiologic GH pulsatility rather than override it.",
    peptides: [
      {
        id: "sermorelin",
        name: "Sermorelin",
        whatItIs: "A GHRH-type peptide that supports the pituitary's natural growth hormone pulses.",
        whyWeUse: "To support sleep depth, recovery, and body composition through physiologic GH signaling.",
        whoItsFor: "Patients with poor recovery, low sleep quality, or age-related changes where GH-axis support fits the overall plan.",
        typicalDuration: "Commonly 8–16 weeks, then reassess symptoms, sleep metrics, and body composition goals.",
        doWeCycle: "Often cycled — blocks of use with reassessment — depending on goals and response.",
        bestOutcomes: "Consistent sleep schedule, resistance training, adequate protein, and stress reduction.",
      },
      {
        id: "cjc-ipamorelin",
        name: "CJC-1295 / Ipamorelin",
        whatItIs: "A combination used to support growth hormone pulsatility through complementary signaling pathways.",
        whyWeUse: "To improve sleep quality, recovery, and body composition for patients who feel they're not recovering like they used to.",
        whoItsFor: "Patients with sleep and recovery issues, slow body recomposition, and high stress load — after we've addressed thyroid and nutrition basics.",
        typicalDuration: "Often 8–12 weeks, then reassess. Some continue longer with periodic breaks depending on response.",
        doWeCycle: "Yes — commonly used in cycles to maintain effectiveness and allow reassessment.",
        bestOutcomes: "Sleep hygiene, protein intake, progressive strength training, and stress modulation.",
      },
      {
        id: "hexarelin",
        name: "Hexarelin",
        whatItIs: "A stronger growth-hormone secretagogue (ghrelin-receptor pathway) that can drive more robust GH pulses.",
        whyWeUse: "To support more pronounced recovery signaling in advanced protocols when gentler GH-axis options aren't adequate.",
        whoItsFor: "Selected patients needing stronger recovery support who can be monitored closely.",
        typicalDuration: "Often 4–8 weeks with reassessment — usually shorter blocks than gentler options.",
        doWeCycle: "Yes — typically cycled in defined blocks.",
        bestOutcomes: "Tight sleep schedule, training periodization, nutrition and recovery fundamentals.",
      },
      {
        id: "tesa-ipa-blend",
        name: "Tesamorelin / Ipamorelin (blend)",
        whatItIs: "A GH-axis pairing that combines a GHRH-type signal (tesamorelin) with a GH secretagogue signal (ipamorelin).",
        whyWeUse: "To support GH-axis optimization for body composition and recovery goals in appropriate patients.",
        whoItsFor: "Selected patients with central fat patterns, recovery issues, and metabolic goals where GH-axis support is appropriate.",
        typicalDuration: "Often reassessed around 8–12 weeks, with longer courses considered depending on response and monitoring.",
        doWeCycle: "Often managed with periodic reassessment. Cycling may be used depending on goals and labs.",
        bestOutcomes: "Waist tracking, strength training, protein intake, glucose stability strategies, and sleep optimization.",
      },
      {
        id: "somatropin",
        name: "Somatropin (hGH) — Prescription",
        whatItIs: "Recombinant human growth hormone (a peptide/protein hormone) used as a prescription biologic medication.",
        whyWeUse: "Used for specific medical indications under careful monitoring. Dosing is titrated based on goals, labs, and side effects.",
        whoItsFor: "Patients with appropriate medical indication and the ability to comply with monitoring.",
        typicalDuration: "Duration depends on indication. Therapy is titrated and periodically reassessed.",
        doWeCycle: "Not typically cycled like a supplement — it's managed as prescribed therapy with monitoring.",
        bestOutcomes: "Lab-guided dosing, sleep, strength training, metabolic monitoring (glucose / IGF-1), and lifestyle optimization.",
        notes: "Because it is systemic, it requires careful screening, dosing precision, and follow-up.",
      },
      {
        id: "igf-lr3",
        name: "IGF-LR3",
        whatItIs: "A long-acting analog related to IGF-1 signaling (growth and recovery pathways).",
        whyWeUse: "Reserved for advanced, goal-specific recovery and anabolic signaling protocols under high oversight.",
        whoItsFor: "Highly selected cases only — this is not a starter wellness therapy.",
        typicalDuration: "Typically short, discrete cycles with strict monitoring and clear objective goals.",
        doWeCycle: "Yes — usually cycled. Continuous use is uncommon in wellness practice.",
        bestOutcomes: "A structured training plan, nutrition, and clinician-directed monitoring.",
      },
    ],
  },
  {
    id: "recovery-repair",
    title: "Recovery & Repair — Muscle, Tendon, Joint, Gut Barrier",
    description:
      "Tissue-recovery peptides used when conventional rehab and recovery aren't keeping pace with training load, injury, or healing demand. Always paired with the underlying physical therapy and progressive loading work.",
    peptides: [
      {
        id: "bpc-157",
        name: "BPC-157",
        whatItIs: "A 15-amino-acid peptide originally identified in gastric tissue, studied for tissue-protective and repair-signaling effects.",
        whyWeUse: "To support soft-tissue recovery (tendon, ligament, muscle) and sometimes gut-barrier comfort as part of a broader plan.",
        whoItsFor: "Patients with nagging tendon issues, recovery delays, or gut-barrier and inflammation patterns (case-dependent).",
        typicalDuration: "Commonly 6–12 weeks, then reassess symptoms and function.",
        doWeCycle: "Yes — typically used in courses and reassessed rather than used indefinitely.",
        bestOutcomes: "Physical therapy and rehab, progressive loading, sleep, protein intake, and reducing inflammatory triggers.",
      },
      {
        id: "tb-500",
        name: "TB-500",
        whatItIs: "A peptide used in regenerative protocols to support soft-tissue recovery and remodeling signaling.",
        whyWeUse: "To support mobility, tissue repair signaling, and recovery in patients with slower healing or high training load.",
        whoItsFor: "Patients with soft-tissue recovery needs or mobility limitations.",
        typicalDuration: "Often 4–8 weeks, sometimes longer depending on the case and goals.",
        doWeCycle: "Yes — commonly cycled in blocks.",
        bestOutcomes: "PT and strength programming, movement quality work, sleep, and inflammation control.",
      },
      {
        id: "bpc-tb500-blend",
        name: "BPC-157 / TB-500 (blend) — both strengths",
        whatItIs: "A combination approach that pairs more targeted repair signaling (BPC-157) with broader tissue remodeling support (TB-500).",
        whyWeUse: "To support recovery when pain or tissue strain involves more than one area, or when recovery capacity itself is the limiting factor.",
        whoItsFor: "Patients with multi-site soft-tissue complaints, athletes, or anyone needing better recovery capacity.",
        typicalDuration: "Often 8–12 weeks with reassessment of pain, mobility, and performance measures.",
        doWeCycle: "Yes — typically cycled in courses.",
        bestOutcomes: "Rehab and physical therapy, strength training, sleep consistency, anti-inflammatory nutrition.",
      },
    ],
  },
  {
    id: "skin-hair-aesthetic",
    title: "Skin, Hair & Aesthetic Longevity",
    description:
      "Peptides supporting skin remodeling, healing, and aesthetic longevity. We use these as adjuncts to in-clinic procedures and medical-grade skincare — not as substitutes for the foundational skin care work.",
    peptides: [
      {
        id: "ghk-cu",
        name: "GHK-Cu",
        whatItIs: "A copper-binding tripeptide involved in skin remodeling and repair signaling.",
        whyWeUse: "To support skin quality (texture, firmness), healing, and sometimes hair and scalp support in aesthetic longevity plans.",
        whoItsFor: "Patients focused on skin rejuvenation, post-procedure recovery, or hair and scalp support (case-dependent).",
        typicalDuration: "Often 8–12 weeks, then reassess. May transition to maintenance depending on response.",
        doWeCycle: "Often used in courses. Maintenance can be individualized.",
        bestOutcomes: "Medical-grade skincare basics, sun protection, adequate protein, and skin procedures when appropriate.",
      },
      {
        id: "ghk-tb-bpc-kpv-blend",
        name: "GHK-Cu / TB-500 / BPC-157 / KPV (blend)",
        whatItIs: "A regeneration blend combining skin remodeling (GHK-Cu), tissue recovery support (TB-500 + BPC-157), and inflammatory balance support (KPV).",
        whyWeUse: "To support skin quality, healing, and inflammatory noise for patients who want aesthetic longevity plus recovery support.",
        whoItsFor: "Patients focused on skin rejuvenation, post-procedure recovery, or inflammatory skin patterns with concurrent recovery needs.",
        typicalDuration: "Often 8–12 weeks, then reassess skin quality, comfort, and recovery metrics.",
        doWeCycle: "Yes — typically cycled in courses with reassessment.",
        bestOutcomes: "Skincare basics (SPF, barrier repair), protein, sleep, and inflammation trigger management.",
      },
      {
        id: "ghk-bpc-tb-epithalon-blend",
        name: "GHK-Cu / BPC-157 / TB-500 / Epithalon (blend)",
        whatItIs: "A broad rejuvenation blend: skin remodeling (GHK-Cu), tissue recovery (BPC-157 + TB-500), and sleep and circadian support (Epithalon).",
        whyWeUse: "To support overall vitality — skin quality, recovery, and sleep rhythm — in a unified longevity plan.",
        whoItsFor: "Patients with combined goals: better recovery, better sleep, and improved skin quality.",
        typicalDuration: "Often 8–12 weeks, then reassess. Epithalon components are frequently used in shorter cycles within the broader course.",
        doWeCycle: "Yes — commonly cycled, especially the sleep and circadian component.",
        bestOutcomes: "Sleep schedule work, resistance training, protein intake, and consistent skincare and sun protection.",
      },
    ],
  },
  {
    id: "inflammation-barrier",
    title: "Inflammation & Barrier Support",
    description:
      "Targeted tools for inflammatory load and barrier function — used as part of root-cause work, not as a way to mask underlying triggers we should be identifying and addressing.",
    peptides: [
      {
        id: "kpv",
        name: "KPV",
        whatItIs: "A small peptide fragment often used for inflammatory balance support, especially related to gut and skin comfort.",
        whyWeUse: "To calm inflammatory signaling — what we call \"inflammation noise\" — and support barrier comfort as part of root-cause care.",
        whoItsFor: "Patients with reactive gut, inflammatory skin patterns, or systemic inflammatory load (case-dependent).",
        typicalDuration: "Often 4–8 weeks, then reassess symptoms and triggers.",
        doWeCycle: "Usually cycled in short blocks and repeated as needed.",
        bestOutcomes: "Trigger identification (diet and histamine patterns), gut protocol, stress regulation, sleep.",
      },
    ],
  },
  {
    id: "immune-resilience",
    title: "Immune Resilience",
    description:
      "Immune-modulating peptides used selectively — for resilience and balanced signaling, not just \"boosting.\" Always layered onto foundational immune support: sleep, vitamin D, protein, stress.",
    peptides: [
      {
        id: "thymosin-alpha-1",
        name: "Thymosin Alpha-1 (Thymalfasin)",
        whatItIs: "A naturally occurring immune-modulating peptide involved in T-cell maturation and immune signaling balance.",
        whyWeUse: "To support immune resilience and balanced immune signaling — not just \"boosting\" — during immune stress seasons or recovery phases.",
        whoItsFor: "Patients with frequent immune stress, poor recovery after illness, or clinician-directed immune support goals.",
        typicalDuration: "Often 4–12 weeks depending on season and goal, with reassessment.",
        doWeCycle: "Commonly used in seasonal or goal-based cycles.",
        bestOutcomes: "Sleep, vitamin D optimization, protein intake, stress management, and foundational health habits.",
      },
      {
        id: "ll-37",
        name: "LL-37",
        whatItIs: "A naturally occurring human antimicrobial peptide involved in innate immune defense.",
        whyWeUse: "Used selectively in clinician-directed immune and microbial balance protocols when appropriate.",
        whoItsFor: "Highly selected patients only — not a general wellness peptide.",
        typicalDuration: "Time-limited trials with close follow-up. Duration depends on the clinical goal.",
        doWeCycle: "Yes — generally used in short blocks rather than continuous use.",
        bestOutcomes: "Foundational immune support (sleep, vitamin D status, protein), and addressing underlying drivers.",
      },
    ],
  },
  {
    id: "brain-mood-stress",
    title: "Brain, Mood & Stress Resilience",
    description:
      "Cognitive and stress-modulation peptides used selectively after we've ruled out the foundational drivers — sleep, thyroid, iron, glucose stability. Short courses, reassessed, individualized.",
    peptides: [
      {
        id: "semax",
        name: "Semax",
        whatItIs: "A peptide used in some countries for cognitive support. In wellness settings we use it to support mental clarity and stress resilience.",
        whyWeUse: "To support focus, mental clarity, and cognitive stamina during high-demand seasons.",
        whoItsFor: "Patients with brain fog or attention fatigue after we've ruled out root causes — sleep, thyroid, iron, glucose instability.",
        typicalDuration: "Often 10–30 days, then reassess. May repeat seasonally.",
        doWeCycle: "Yes — commonly cycled in short courses rather than continuous use.",
        bestOutcomes: "Sleep optimization, glucose stability, movement, hydration, and stress management.",
      },
      {
        id: "selank",
        name: "Selank",
        whatItIs: "A peptide used in some regions for stress and anxiety modulation, often described as supporting calm focus.",
        whyWeUse: "To reduce anxious tension and improve stress tolerance without heavy sedation for select patients.",
        whoItsFor: "Patients with stress reactivity, anxious rumination, or \"wired but tired\" patterns.",
        typicalDuration: "Often 2–6 weeks, then reassess.",
        doWeCycle: "Yes — often used in short courses and repeated if needed.",
        bestOutcomes: "Nervous system support (sleep timing, breathwork), caffeine strategy, magnesium when appropriate.",
      },
      {
        id: "selank-semax",
        name: "Selank / Semax",
        whatItIs: "A combined \"calm + clarity\" approach pairing stress tone support (Selank) with cognitive performance support (Semax).",
        whyWeUse: "To support high-performance seasons where stress and cognitive load are both limiting.",
        whoItsFor: "Patients in burnout-type seasons, heavy workloads, or high cognitive demand.",
        typicalDuration: "Often 2–6 weeks, then reassess.",
        doWeCycle: "Yes — typically used in cycles.",
        bestOutcomes: "Sleep consistency, workload boundaries, glucose stability, exercise and stress regulation.",
      },
      {
        id: "pe-22-28",
        name: "PE-22-28 (Mini-Spadin)",
        whatItIs: "A spadin-derived peptide explored for nervous system signaling related to mood resilience in early literature.",
        whyWeUse: "Used only selectively in neuro-wellness style protocols when appropriate and carefully monitored.",
        whoItsFor: "Highly selected patients — not a general first-line option.",
        typicalDuration: "Usually approached as a short trial with careful symptom tracking.",
        doWeCycle: "Yes — typically used in short courses with reassessment.",
        bestOutcomes: "Foundational mental wellness care, sleep, movement, and stress regulation.",
      },
    ],
  },
  {
    id: "sexual-wellness",
    title: "Sexual Wellness",
    description:
      "Peptides used for libido, arousal, and sexual response — always after we've evaluated hormones, stress load, relationship factors, and underlying health conditions. These tools complement that work; they don't replace it.",
    peptides: [
      {
        id: "pt-141",
        name: "PT-141 (Bremelanotide; Vyleesi is FDA-approved for HSDD in premenopausal women)",
        whatItIs: "A melanocortin receptor agonist that supports sexual desire and arousal signaling in the brain (central arousal pathway).",
        whyWeUse: "To support libido and arousal when low desire persists after we've evaluated hormones, stress, relationship factors, and health conditions.",
        whoItsFor: "Men or women with low desire and arousal where clinician assessment supports use.",
        typicalDuration: "Used as needed or as a time-limited trial. Label guidance includes discontinuing after 8 weeks if no improvement (for the FDA-approved product).",
        doWeCycle: "Typically not a daily cycle — it's used as needed with reassessment of benefit.",
        bestOutcomes: "Stress regulation, hormone optimization when indicated, sleep, relationship health, and cardiovascular fitness.",
        notes: "Some people experience nausea or flushing. We screen for fit and review blood pressure considerations.",
      },
      {
        id: "oxytocin",
        name: "Oxytocin",
        whatItIs: "A naturally occurring neuropeptide involved in bonding, calm, and aspects of sexual response.",
        whyWeUse: "To support stress regulation, emotional well-being, and sexual wellness in select patients.",
        whoItsFor: "Patients with stress-linked libido issues, difficulty relaxing, or low connection tone (case-dependent).",
        typicalDuration: "Often a 2–6 week trial, then continue if clearly beneficial.",
        doWeCycle: "Usually used as a trial then individualized. May be used intermittently.",
        bestOutcomes: "Stress reduction plan, sleep, relationship and communication support, hormone optimization when appropriate.",
      },
    ],
  },
  {
    id: "thyroid-metabolic-signaling",
    title: "Thyroid / Metabolic Signaling",
    description:
      "Used inside a full thyroid workup — never as a shortcut around one. The fundamentals (full thyroid panel, ferritin, selenium, iodine status, cortisol) come first.",
    peptides: [
      {
        id: "thyrotopin",
        name: "Thyrotopin",
        whatItIs: "Marketed as thyroid-axis support. Exact formulations can vary and should be clarified precisely in a lab-guided plan.",
        whyWeUse: "To support metabolic tone when thyroid signaling optimization is part of the plan and clinically appropriate.",
        whoItsFor: "Patients with thyroid-related symptoms where labs and clinical picture support an optimization strategy.",
        typicalDuration: "Time-limited trial with symptom and lab reassessment.",
        doWeCycle: "Often cycled as a trial rather than continuous long-term use without a clear reason.",
        bestOutcomes: "Full thyroid workup, iron and ferritin optimization, selenium and iodine assessment, stress and cortisol support.",
      },
    ],
  },
  {
    id: "advanced-not-routine",
    title: "Advanced — Not Routine in General Wellness",
    description:
      "These are not routine wellness or longevity tools. They appear here for educational completeness — patients reading the rest of the guide ask about them, and we want them to understand exactly where they sit in our practice.",
    peptides: [
      {
        id: "pnc-27",
        name: "PNC-27",
        whatItIs: "A peptide studied in experimental oncology models for selective cell-targeting mechanisms.",
        whyWeUse: "Not a typical wellness or optimization therapy. Generally reserved for educational contexts rather than routine care.",
        whoItsFor: "Not routine for general longevity patients.",
        typicalDuration: "Not standardized for general wellness use.",
        doWeCycle: "N/A for routine clinic use.",
        bestOutcomes: "N/A.",
      },
      {
        id: "ss-31",
        name: "SS-31 (Elamipretide)",
        whatItIs: "A mitochondria-targeting peptide designed to bind cardiolipin in the inner mitochondrial membrane to support mitochondrial function.",
        whyWeUse: "To support cellular energy and endurance in select fatigue and stamina cases where mitochondrial function support is clinically appropriate.",
        whoItsFor: "Selected patients with fatigue, low stamina, or slower recovery patterns after root-cause evaluation.",
        typicalDuration: "Often approached as a time-limited therapeutic trial with reassessment. Duration varies by clinical context.",
        doWeCycle: "Usually used in defined trials rather than indefinitely without clear benefit.",
        bestOutcomes: "Exercise pacing, strength training, sleep, nutrition that supports mitochondria, and addressing underlying stressors.",
      },
      {
        id: "epithalon",
        name: "Epithalon (Epitalon)",
        whatItIs: "A short peptide discussed in longevity medicine for circadian rhythm and healthy aging signaling support.",
        whyWeUse: "Often used to support sleep timing and quality and overall vitality in longevity programs.",
        whoItsFor: "Patients where sleep and circadian rhythm is a major bottleneck, especially in high stress seasons.",
        typicalDuration: "Often used in short courses (commonly 10–20 days) and repeated periodically based on goals.",
        doWeCycle: "Yes — typically cycled intermittently rather than used continuously.",
        bestOutcomes: "Light exposure timing, consistent bedtime, sleep hygiene, and stress reduction.",
      },
    ],
  },
];

/** Flat list of every peptide — useful for search, sitemap, etc. */
export const ALL_PEPTIDES: Peptide[] = PEPTIDE_CATEGORIES.flatMap((c) => c.peptides);

/** Total peptide count for use in headers and CTAs. */
export const PEPTIDE_COUNT = ALL_PEPTIDES.length;
