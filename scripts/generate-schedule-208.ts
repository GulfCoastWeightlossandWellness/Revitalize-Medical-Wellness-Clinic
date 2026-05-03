/**
 * Phase 3 — Generate the complete 208-post publishing schedule.
 *
 * Output: docs/blog-schedule-208.json
 *
 * Cadence: Every Tuesday and Thursday starting Tue 2026-06-02.
 * Total slots over the next 104 weeks = 208 (104 × 2).
 *
 * Distribution across 9 categories totals 208:
 *   Hormone 45 + Weight 40 + Aesthetics 35 + Sexual 15 + IV 15 +
 *   Hair 10 + Local 25 + Symptom 15 + Demographic 8 = 208
 *
 * Slot 1 (Tue 2026-06-02) is reserved for the Auburn transition post.
 * Local posts are interleaved across the schedule (~1 every 4 weeks).
 * Other categories are round-robin distributed so no category clusters.
 *
 * Slug collision guard: builds slug from title, deduplicates against the
 * 53 existing posts in content/blog/.
 */

import { readdirSync, mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BLOG_DIR = join(ROOT, "content", "blog");
const DOCS_DIR = join(ROOT, "docs");
const OUT_FILE = join(DOCS_DIR, "blog-schedule-208.json");

// ─── Cadence ───────────────────────────────────────────────────────────────
const START = new Date("2026-06-02T00:00:00.000Z"); // Tue
const TOTAL = 208;

function buildDates(): { date: string; day: "Tue" | "Thu" }[] {
  const out: { date: string; day: "Tue" | "Thu" }[] = [];
  let d = new Date(START);
  while (out.length < TOTAL) {
    const dow = d.getUTCDay(); // 2 = Tue, 4 = Thu
    if (dow === 2) out.push({ date: d.toISOString().slice(0, 10), day: "Tue" });
    if (dow === 4) out.push({ date: d.toISOString().slice(0, 10), day: "Thu" });
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return out;
}

// ─── Title pools per category ──────────────────────────────────────────────
type Cat =
  | "Hormone Therapy"
  | "Weight Loss"
  | "Aesthetics"
  | "Sexual Wellness"
  | "Wellness"
  | "Hair Restoration"
  | "Local"
  | "Symptoms"
  | "Demographic";

interface Topic {
  title: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: "informational" | "commercial" | "local";
  relatedServiceSlug: string;
  relatedCities?: string[];
}

// HORMONE THERAPY (45)
const HORMONE: Topic[] = [
  ["Estrogen Replacement Therapy: Patches, Pills, Pellets — Choosing the Right Delivery", "estrogen replacement therapy delivery", ["bioidentical estrogen", "estradiol patch", "hormone pellets women"], "informational", "hormone-therapy-women"],
  ["Bioidentical Progesterone: Why It Matters in Hormone Therapy", "bioidentical progesterone", ["progesterone for sleep", "natural progesterone", "perimenopause progesterone"], "informational", "hormone-therapy-women"],
  ["Testosterone Therapy for Women: A Clinical Primer", "testosterone therapy women", ["female testosterone replacement", "low T in women", "testosterone for libido"], "informational", "hormone-therapy-women"],
  ["DHEA Replacement: The Forgotten Hormone in Mid-Life Optimization", "DHEA replacement therapy", ["DHEA supplementation", "adrenal hormones", "DHEA for women"], "informational", "hormone-therapy-women"],
  ["Adrenal Fatigue or Cortisol Dysregulation — What the Evidence Actually Shows", "cortisol dysregulation", ["adrenal fatigue", "HPA axis dysfunction", "stress hormones"], "informational", "hormone-therapy-women"],
  ["Reverse T3 vs Free T3: Decoding Your Thyroid Panel", "reverse T3 free T3", ["thyroid panel interpretation", "T3 conversion", "thyroid lab work"], "informational", "hormone-therapy-women"],
  ["Hashimoto's and Hormone Therapy: How They Interact Clinically", "Hashimoto thyroid hormone therapy", ["autoimmune thyroid HRT", "Hashimoto bioidentical hormones", "thyroid antibodies"], "informational", "hormone-therapy-women"],
  ["The HPA Axis Explained for Patients", "HPA axis explained", ["hypothalamus pituitary adrenal", "stress response system", "cortisol regulation"], "informational", "hormone-therapy-women"],
  ["Pellet Insertion Day: What to Expect Step by Step", "pellet insertion procedure", ["Biote pellet day", "hormone pellet insertion", "pellet aftercare"], "informational", "biote-pellet-therapy"],
  ["The Real Cost of Bioidentical Hormone Therapy in Georgia", "bioidentical hormone therapy cost Georgia", ["BHRT pricing", "hormone therapy cost Columbus GA", "Biote cost"], "commercial", "hormone-therapy-women"],
  ["Men's Testosterone Optimization: TRT Beyond the Basics", "testosterone optimization men", ["TRT advanced", "men's hormone health", "testosterone replacement protocol"], "informational", "hormone-therapy-men"],
  ["Free Testosterone vs Total Testosterone: Why Your Lab Results Matter", "free vs total testosterone", ["testosterone bioavailability", "testosterone lab interpretation", "low free T"], "informational", "hormone-therapy-men"],
  ["SHBG and Hormone Bioavailability: A Clinical Explanation", "SHBG sex hormone binding globulin", ["bioavailable hormones", "SHBG levels", "hormone-binding protein"], "informational", "hormone-therapy-men"],
  ["Hot Flashes at Night: When to Test Your Hormones", "night hot flashes hormones", ["nocturnal vasomotor symptoms", "perimenopausal night sweats", "hormone testing"], "informational", "hormone-therapy-women"],
  ["Vaginal Estrogen: Local Therapy vs Systemic HRT", "vaginal estrogen therapy", ["local estradiol", "vaginal atrophy treatment", "topical estrogen"], "informational", "hormone-therapy-women"],
  ["Premature Ovarian Insufficiency and Hormone Therapy", "premature ovarian insufficiency", ["early menopause", "POI hormone therapy", "premature menopause treatment"], "informational", "hormone-therapy-women"],
  ["PCOS and Hormone Therapy: Treating the Underlying Imbalance", "PCOS hormone therapy", ["polycystic ovary syndrome treatment", "PCOS bioidentical hormones", "PCOS metabolic"], "informational", "hormone-therapy-women"],
  ["Hormone Therapy and Cancer Risk: Reading the Evidence Honestly", "hormone therapy cancer risk", ["HRT breast cancer", "bioidentical safety", "hormone risk benefit"], "informational", "hormone-therapy-women"],
  ["Insurance Coverage for Bioidentical Hormone Therapy in 2026", "insurance bioidentical hormone therapy", ["BHRT insurance", "hormone therapy coverage", "out-of-pocket hormone costs"], "commercial", "hormone-therapy-women"],
  ["The Three-Month Hormone Reassessment: Why It Matters", "hormone reassessment three months", ["BHRT follow-up", "hormone titration", "hormone therapy monitoring"], "informational", "hormone-therapy-women"],
  ["Estradiol vs Estrone vs Estriol: The Three Estrogens Explained", "estradiol estrone estriol", ["types of estrogen", "estrogen hormones", "estrogen forms"], "informational", "hormone-therapy-women"],
  ["Why Your Doctor May Not Test the Right Hormones", "comprehensive hormone testing", ["hormone panel gaps", "missing thyroid markers", "limited hormone testing"], "informational", "hormone-therapy-women"],
  ["Fibroids and Hormone Therapy: A Treatment Decision Tree", "fibroids hormone therapy", ["uterine fibroids HRT", "fibroid management", "estrogen and fibroids"], "informational", "hormone-therapy-women"],
  ["Hormones and Migraine in Women: The Connection", "hormones migraine women", ["estrogen migraine", "menstrual migraine", "perimenopausal headaches"], "informational", "hormone-therapy-women"],
  ["Bone Density, Estrogen, and Long-Term Hormone Therapy", "bone density hormone therapy", ["osteoporosis HRT", "estrogen for bones", "DEXA scan menopause"], "informational", "hormone-therapy-women"],
  ["Hormone Therapy After Hysterectomy: What Changes Clinically", "hormone therapy after hysterectomy", ["post-hysterectomy HRT", "estrogen after surgery", "surgical menopause"], "informational", "hormone-therapy-women"],
  ["DHT and Male Pattern Hair Loss: The Hormone Connection", "DHT male pattern hair loss", ["dihydrotestosterone hair loss", "androgenetic alopecia", "DHT blockers"], "informational", "derive-hair-restoration"],
  ["Erectile Function as a Marker of Cardiovascular Health", "erectile function cardiovascular health", ["ED heart disease marker", "vascular health men", "ED early warning"], "informational", "erectile-dysfunction"],
  ["Menopausal Brain Fog: When It's Hormones, When It's Something Else", "menopausal brain fog", ["cognitive changes menopause", "hormone brain fog", "perimenopause memory"], "informational", "hormone-therapy-women"],
  ["The Sleep–Hormone Connection: Beyond Cortisol", "sleep hormones connection", ["progesterone sleep", "hormonal insomnia", "melatonin and hormones"], "informational", "hormone-therapy-women"],
  ["Estrogen and Skin: How HRT Changes Collagen", "estrogen skin collagen", ["HRT for skin", "menopausal skin", "estrogen aging"], "informational", "hormone-therapy-women"],
  ["What a Comprehensive Hormone Panel Should Include", "comprehensive hormone panel", ["complete hormone testing", "hormone lab markers", "BHRT workup labs"], "informational", "hormone-therapy-women"],
  ["Synthetic vs Bioidentical Progestins: The Real Risk Differences", "synthetic vs bioidentical progestin", ["medroxyprogesterone vs progesterone", "progestin safety", "WHI study reanalysis"], "informational", "hormone-therapy-women"],
  ["Pellet Therapy Side Effects: What's Normal, What's Not", "Biote pellet side effects", ["hormone pellet reactions", "pellet extrusion", "pellet site soreness"], "informational", "biote-pellet-therapy"],
  ["Restoring Libido in Mid-Life: A Hormonal Approach", "restoring libido mid-life", ["low libido treatment", "hormonal libido restoration", "sex drive perimenopause"], "informational", "hormone-therapy-women"],
  ["Adrenal DHEA Replacement: Dosing Considerations", "DHEA dosing replacement", ["DHEA dose", "DHEA-S levels", "adrenal hormone therapy"], "informational", "hormone-therapy-women"],
  ["Pregnenolone: The Mother Hormone", "pregnenolone hormone", ["pregnenolone supplementation", "hormone precursors", "neurosteroid"], "informational", "hormone-therapy-women"],
  ["Cortisol Awakening Response: A Clinical Marker Worth Understanding", "cortisol awakening response", ["CAR test", "morning cortisol", "salivary cortisol"], "informational", "hormone-therapy-women"],
  ["Iodine, Thyroid, and Hormone Optimization", "iodine thyroid optimization", ["iodine deficiency", "thyroid iodine", "selenium iodine"], "informational", "hormone-therapy-women"],
  ["Gut Health and Estrogen Metabolism: The Estrobolome", "estrobolome gut estrogen", ["estrogen metabolism gut", "microbiome hormones", "estrogen detox pathway"], "informational", "hormone-therapy-women"],
  ["Why Mid-Life Weight Gain Is Often Hormonal, Not Caloric", "mid-life weight gain hormonal", ["menopausal weight gain", "andropause weight", "hormone-driven obesity"], "informational", "hormone-therapy-women"],
  ["Hormone Therapy for Men in Their 50s and 60s", "hormone therapy men 50s 60s", ["older men TRT", "andropause therapy", "testosterone after 50"], "informational", "hormone-therapy-men"],
  ["The Andropause Window: Recognizing Male Transition Early", "andropause early signs", ["male hormone transition", "andropause symptoms men", "early TRT candidacy"], "informational", "hormone-therapy-men"],
  ["When to Stop Hormone Therapy: A Clinical Decision Framework", "when to stop hormone therapy", ["discontinuing HRT", "tapering bioidentical hormones", "BHRT exit strategy"], "informational", "hormone-therapy-women"],
  ["Bioidentical Hormone Pellets vs Injections: A Side-by-Side", "pellets vs injections testosterone", ["hormone delivery comparison", "Biote vs cypionate", "TRT options"], "informational", "biote-pellet-therapy"],
].map(([title, primaryKeyword, secondaryKeywords, intent, relatedServiceSlug]) => ({
  title: title as string,
  primaryKeyword: primaryKeyword as string,
  secondaryKeywords: secondaryKeywords as string[],
  intent: intent as Topic["intent"],
  relatedServiceSlug: relatedServiceSlug as string,
}));

// WEIGHT LOSS (40)
const WEIGHT: Topic[] = [
  ["GLP-1 Side Effects: How Long They Last and How to Manage Them", "GLP-1 side effects management", ["semaglutide nausea", "tirzepatide GI effects", "GLP-1 fatigue"], "informational", "medical-weight-loss"],
  ["Compounded vs Brand-Name GLP-1 in 2026: What the FDA Update Means", "compounded vs brand GLP-1", ["compounded semaglutide legality", "Wegovy vs compounded", "FDA shortage list"], "informational", "medical-weight-loss"],
  ["Sarcopenia on GLP-1: Preserving Muscle While Losing Fat", "sarcopenia GLP-1 muscle loss", ["muscle preservation weight loss", "lean mass GLP-1", "protein resistance training"], "informational", "medical-weight-loss"],
  ["Building a Protein Plan for Weight Loss on GLP-1", "protein plan GLP-1", ["protein targets weight loss", "protein per pound bodyweight", "high-protein meal plan"], "howto", "medical-weight-loss"],
  ["Resistance Training While on GLP-1: A Clinical Guide", "resistance training GLP-1", ["strength training weight loss", "lifting on semaglutide", "GLP-1 exercise protocol"], "informational", "medical-weight-loss"],
  ["The Real Cost of GLP-1 Therapy in Georgia", "GLP-1 cost Georgia", ["semaglutide cost Columbus GA", "tirzepatide pricing", "weight loss medication cost"], "commercial", "medical-weight-loss"],
  ["GLP-1 and Pregnancy: What Patients Need to Know", "GLP-1 pregnancy", ["semaglutide pregnancy risk", "GLP-1 contraception", "weight loss medication pregnancy"], "informational", "medical-weight-loss"],
  ["Insurance Coverage for Weight Loss Medications: The 2026 Reality", "insurance weight loss medications 2026", ["GLP-1 insurance coverage", "Wegovy insurance", "weight loss prescription cost"], "commercial", "medical-weight-loss"],
  ["The Maintenance Phase After GLP-1: Avoiding the Rebound", "GLP-1 maintenance phase", ["weight regain after GLP-1", "lifelong weight maintenance", "transitioning off semaglutide"], "informational", "medical-weight-loss"],
  ["Body Recomposition on GLP-1: Beyond the Scale", "body recomposition GLP-1", ["DEXA on GLP-1", "lean mass tracking", "fat loss vs muscle loss"], "informational", "medical-weight-loss"],
  ["Hidden Causes of Weight Loss Resistance", "weight loss resistance causes", ["why I can't lose weight", "metabolic resistance", "stuck weight loss"], "informational", "medical-weight-loss"],
  ["Leptin Resistance: Why Your Body Resists Weight Loss", "leptin resistance", ["leptin signaling", "appetite hormone", "leptin and weight loss"], "informational", "medical-weight-loss"],
  ["The Microbiome and Weight Loss: A Clinical Update", "microbiome weight loss", ["gut bacteria obesity", "microbiome diversity weight", "akkermansia"], "informational", "medical-weight-loss"],
  ["Sleep Quality and Weight Loss: A Clinical Connection", "sleep quality weight loss", ["sleep deprivation obesity", "sleep apnea weight gain", "circadian rhythm metabolism"], "informational", "medical-weight-loss"],
  ["Stress, Cortisol, and Belly Fat", "cortisol belly fat", ["stress visceral fat", "cortisol weight gain", "midsection fat hormones"], "informational", "medical-weight-loss"],
  ["Why Crash Diets Permanently Damage Metabolism", "crash diet metabolism damage", ["yo-yo dieting metabolism", "metabolic adaptation", "starvation mode"], "informational", "medical-weight-loss"],
  ["Continuous Glucose Monitoring for Non-Diabetics: Worth It?", "CGM non-diabetics", ["CGM weight loss", "metabolic health CGM", "glucose variability"], "informational", "medical-weight-loss"],
  ["Hidden Carbs in Your Diet: An Honest Audit", "hidden carbs diet", ["sneaky carbs", "low-carb mistakes", "carbohydrate awareness"], "informational", "medical-weight-loss"],
  ["Intermittent Fasting and GLP-1: Synergy or Conflict", "intermittent fasting GLP-1", ["fasting on semaglutide", "time-restricted eating", "fasting protocols GLP-1"], "informational", "medical-weight-loss"],
  ["Strength Training for Mid-Life Body Composition", "strength training mid-life", ["lifting after 40", "menopausal body composition", "lean mass aging"], "informational", "medical-weight-loss"],
  ["NEAT: The Non-Exercise Activity Driving Long-Term Loss", "NEAT non-exercise activity thermogenesis", ["daily movement weight loss", "step count metabolism", "fidgeting calories"], "informational", "medical-weight-loss"],
  ["Why Cardio Alone Is Insufficient for Mid-Life Weight Loss", "cardio insufficient weight loss", ["cardio vs strength", "cardio plateau", "exercise for fat loss"], "informational", "medical-weight-loss"],
  ["Adipose Tissue as an Endocrine Organ", "adipose tissue endocrine", ["fat as hormone organ", "adipokines", "fat tissue inflammation"], "informational", "medical-weight-loss"],
  ["Inflammation, Weight Gain, and Metabolic Syndrome", "inflammation weight gain metabolic syndrome", ["chronic inflammation obesity", "CRP weight loss", "inflammatory diet"], "informational", "medical-weight-loss"],
  ["Mitochondrial Health and Weight Loss", "mitochondrial health weight loss", ["mitochondria metabolism", "ATP energy weight", "mitochondrial dysfunction"], "informational", "medical-weight-loss"],
  ["Thyroid Function and Weight Plateau", "thyroid weight plateau", ["hypothyroid weight loss", "TSH weight", "thyroid metabolism"], "informational", "medical-weight-loss"],
  ["Postpartum Weight Loss: A Clinical Approach", "postpartum weight loss", ["weight loss after pregnancy", "postpartum metabolism", "breastfeeding and weight loss"], "informational", "medical-weight-loss"],
  ["Weight Loss After Menopause: What Actually Works", "weight loss after menopause", ["menopausal weight loss", "postmenopausal metabolism", "hormones and weight after 50"], "informational", "medical-weight-loss"],
  ["Weight Loss for Men with Low Testosterone", "weight loss low testosterone men", ["TRT and weight loss", "low T weight gain", "men's metabolic health"], "informational", "hormone-therapy-men"],
  ["Combining Weight Loss with Hormone Therapy", "weight loss hormone therapy combined", ["BHRT weight loss", "metabolic hormone optimization", "combined protocols"], "informational", "medical-weight-loss"],
  ["Visceral Fat vs Subcutaneous Fat: Why It Matters", "visceral vs subcutaneous fat", ["belly fat types", "visceral adiposity", "metabolic risk fat"], "informational", "medical-weight-loss"],
  ["The Liver's Role in Weight Management", "liver weight management", ["fatty liver weight loss", "NAFLD", "liver metabolism"], "informational", "medical-weight-loss"],
  ["SIBO and Weight Loss Resistance", "SIBO weight loss", ["small intestinal bacterial overgrowth", "SIBO bloating weight", "gut and weight"], "informational", "medical-weight-loss"],
  ["Food Sensitivities and Weight Plateau", "food sensitivities weight plateau", ["food sensitivity weight loss", "elimination diet weight", "gluten weight"], "informational", "medical-weight-loss"],
  ["Hidden Sugars and Liquid Calories: An Audit", "hidden sugars liquid calories", ["sugar sources audit", "liquid calorie weight gain", "sugar tracking"], "informational", "medical-weight-loss"],
  ["Alcohol and Weight Loss: An Honest Clinical View", "alcohol weight loss", ["drinking and weight loss", "alcohol metabolism", "alcohol calories"], "informational", "medical-weight-loss"],
  ["Realistic Weight Loss Timelines on Medical Programs", "realistic weight loss timeline", ["medical weight loss expectations", "GLP-1 timeline results", "weight loss month-by-month"], "informational", "medical-weight-loss"],
  ["The Set-Point Theory of Body Weight: Updated for 2026", "set-point theory body weight", ["weight set point", "metabolic set point", "body weight regulation"], "informational", "medical-weight-loss"],
  ["Weight Loss Maintenance Beyond One Year", "weight loss maintenance long term", ["sustained weight loss", "weight maintenance phase", "preventing weight regain"], "informational", "medical-weight-loss"],
  ["When GLP-1 Stops Working: Clinical Next Steps", "GLP-1 stops working", ["GLP-1 plateau next steps", "tirzepatide after semaglutide", "weight loss medication switch"], "informational", "medical-weight-loss"],
].map(([title, primaryKeyword, secondaryKeywords, intent, relatedServiceSlug]) => ({
  title: title as string,
  primaryKeyword: primaryKeyword as string,
  secondaryKeywords: secondaryKeywords as string[],
  intent: intent as Topic["intent"],
  relatedServiceSlug: relatedServiceSlug as string,
}));

// AESTHETICS (35)
const AESTHETICS: Topic[] = [
  ["Forehead Lines vs Glabellar Lines: Targeting Both with Botox", "forehead glabellar lines botox", ["frown lines treatment", "11s between eyebrows", "upper face neuromodulator"], "informational", "neuromodulators"],
  ["Crow's Feet Treatment: A Conservative Botox Approach", "crow's feet botox", ["lateral canthal lines", "eye wrinkles treatment", "smile line botox"], "informational", "neuromodulators"],
  ["Subtle Brow Lift with Botox", "botox brow lift", ["chemical brow lift", "non-surgical brow lift", "brow shaping botox"], "informational", "neuromodulators"],
  ["Lower Face Botox: Masseter, DAO, and Mentalis", "lower face botox", ["masseter botox jaw slimming", "DAO mouth corner", "mentalis chin"], "informational", "neuromodulators"],
  ["Botox for TMJ and Jaw Tension Relief", "botox TMJ jaw tension", ["TMJ neuromodulator", "jaw clenching treatment", "bruxism botox"], "informational", "neuromodulators"],
  ["Hyperhidrosis Treatment with Botox", "botox hyperhidrosis sweating", ["excessive underarm sweating", "axillary botox", "hyperhidrosis treatment"], "informational", "neuromodulators"],
  ["Migraine Treatment with Botox: Insurance Coverage and Reality", "botox migraine treatment insurance", ["chronic migraine botox", "migraine prevention injection", "neurology botox referral"], "informational", "neuromodulators"],
  ["Daxxify vs Botox vs Dysport: A 2026 Comparison", "Daxxify Botox Dysport comparison", ["neuromodulator comparison 2026", "longest lasting botox", "Daxxify duration"], "informational", "neuromodulators"],
  ["Tear Trough Filler: Risks and Realistic Expectations", "tear trough filler risks", ["under eye filler", "hollow under eye treatment", "filler tear trough complications"], "informational", "dermal-fillers"],
  ["Cheek Filler for Mid-Face Restoration", "cheek filler mid-face", ["cheek augmentation filler", "midface lift filler", "volume restoration cheeks"], "informational", "dermal-fillers"],
  ["Jawline Sculpting with Filler: A Clinical Approach", "jawline filler sculpting", ["jaw definition filler", "non-surgical jawline", "jawline contouring"], "informational", "dermal-fillers"],
  ["Chin Augmentation: Filler vs Implants", "chin augmentation filler vs implants", ["chin filler comparison", "non-surgical chin", "chin projection"], "informational", "dermal-fillers"],
  ["Nasolabial Folds: Filler vs Other Approaches", "nasolabial folds filler treatment", ["smile line filler", "marionette lines", "nasolabial fold reduction"], "informational", "dermal-fillers"],
  ["Dissolving Filler: When and Why", "dissolving filler hyaluronidase", ["filler dissolve", "hyaluronidase injection", "remove filler"], "informational", "dermal-fillers"],
  ["Filler Migration: Causes and Prevention", "filler migration causes prevention", ["lip filler migration", "filler movement", "migrated filler treatment"], "informational", "dermal-fillers"],
  ["Lip Flip vs Lip Filler: Different Outcomes", "lip flip vs lip filler", ["botox lip flip", "lip enhancement options", "lip aesthetic comparison"], "informational", "neuromodulators"],
  ["Vampire Facelift vs Standard PRP Treatments", "vampire facelift vs PRP", ["vampire facial differences", "PRP facial types", "facial PRP treatment"], "informational", "vampire-facial-prp"],
  ["Microneedling with PRP: The Combination Benefits", "microneedling PRP combination", ["PRP microneedling", "vampire microneedling", "microneedling growth factors"], "informational", "microneedling"],
  ["Microneedling for Acne Scars: Realistic Outcomes", "microneedling acne scars", ["acne scar treatment", "rolling scar microneedling", "atrophic scar treatment"], "informational", "microneedling"],
  ["Skin Tightening: Comparing Energy-Based Modalities", "skin tightening modalities", ["RF microneedling", "ultrasound skin tightening", "non-surgical skin tightening"], "informational", "microneedling"],
  ["Fractional CO2 vs Erbium Laser: Choosing the Right Resurfacing", "fractional CO2 vs erbium laser", ["laser resurfacing comparison", "ablative laser comparison", "erbium YAG vs CO2"], "informational", "fractional-co2-laser"],
  ["CO2 Laser Recovery: A Day-by-Day Timeline", "CO2 laser recovery timeline", ["fractional CO2 healing", "laser resurfacing day-by-day", "CO2 downtime"], "howto", "fractional-co2-laser"],
  ["Sun Damage Reversal: A Clinical Approach", "sun damage reversal", ["photodamage treatment", "sun spots reversal", "actinic damage repair"], "informational", "fractional-co2-laser"],
  ["Melasma Treatment: What Actually Works", "melasma treatment options", ["chloasma treatment", "hyperpigmentation melasma", "stubborn melasma"], "informational", "vi-peel"],
  ["Hyperpigmentation in Darker Skin Tones: A Specialized Approach", "hyperpigmentation darker skin", ["Fitzpatrick IV-VI hyperpigmentation", "ethnic skin treatment", "PIH treatment"], "informational", "vi-peel"],
  ["AquaFirme Hydrafacial: When to Choose It", "AquaFirme hydrafacial selection", ["hydrafacial vs", "AquaFirme treatment", "deep cleansing facial"], "informational", "aquafirme-facials"],
  ["VI Peel for Acne-Prone Skin", "VI Peel acne prone skin", ["medium-depth peel acne", "VI Peel for active acne", "chemical peel acne"], "informational", "vi-peel"],
  ["PRP for Under-Eye Hollows", "PRP under-eye hollows", ["PRP eye area", "under eye PRP injection", "tear trough PRP"], "informational", "vampire-facial-prp"],
  ["Skin Booster Injections: An Overview", "skin booster injections", ["Profhilo", "skin quality injectables", "hydrating injectables"], "informational", "dermal-fillers"],
  ["Maintenance Schedules for Aesthetic Treatments", "aesthetic treatment maintenance schedule", ["botox maintenance frequency", "filler touch-up schedule", "aesthetic upkeep plan"], "informational", "neuromodulators"],
  ["Men's Aesthetics: An Underserved Patient Population", "men's aesthetic treatments", ["male botox", "male filler", "men's aesthetic preferences"], "informational", "neuromodulators"],
  ["Pre-Procedure Skin Prep: What to Do Before Treatment", "pre-procedure skin prep", ["aesthetic procedure preparation", "skin prep before botox", "before laser checklist"], "howto", "neuromodulators"],
  ["Sun Protection After Aesthetic Procedures", "sun protection after aesthetic", ["sunscreen after procedures", "post-laser sun care", "post-treatment SPF"], "howto", "neuromodulators"],
  ["Building a Maintenance Plan: A Clinical Framework", "aesthetic maintenance plan framework", ["aesthetic treatment plan", "annual maintenance aesthetic", "treatment scheduling clinical"], "informational", "neuromodulators"],
  ["Setting Realistic Expectations for Aesthetic Procedures", "realistic aesthetic expectations", ["aesthetic before after expectations", "natural-looking results", "realistic outcomes injectables"], "informational", "neuromodulators"],
].map(([title, primaryKeyword, secondaryKeywords, intent, relatedServiceSlug]) => ({
  title: title as string,
  primaryKeyword: primaryKeyword as string,
  secondaryKeywords: secondaryKeywords as string[],
  intent: intent as Topic["intent"],
  relatedServiceSlug: relatedServiceSlug as string,
}));

// SEXUAL WELLNESS (15)
const SEXUAL: Topic[] = [
  ["The O-Shot: Mechanism and Patient Selection", "O-Shot mechanism candidates", ["female sexual wellness PRP", "O-Shot results", "vaginal PRP"], "informational", "o-shot"],
  ["The P-Shot for Men: Indications and Evidence", "P-Shot men indications", ["male PRP injection", "P-Shot ED", "Priapus shot"], "informational", "erectile-dysfunction"],
  ["PRP for Sexual Wellness: A Clinical Overview", "PRP sexual wellness", ["platelet rich plasma sexual", "PRP intimate wellness", "regenerative sexual medicine"], "informational", "o-shot"],
  ["Female Sexual Dysfunction: A Clinical Framework", "female sexual dysfunction", ["FSD treatment", "female sexual problems", "women sexual health"], "informational", "o-shot"],
  ["Male Sexual Dysfunction Beyond ED Pills", "male sexual dysfunction beyond pills", ["holistic ED treatment", "non-medication ED", "sexual function men"], "informational", "erectile-dysfunction"],
  ["Vaginal Atrophy: Hormonal vs Non-Hormonal Treatments", "vaginal atrophy treatment options", ["GSM treatment", "genitourinary syndrome menopause", "vaginal dryness"], "informational", "hormone-therapy-women"],
  ["Painful Intercourse: A Clinical Investigation Path", "painful intercourse causes", ["dyspareunia investigation", "painful sex women", "intercourse discomfort"], "informational", "o-shot"],
  ["Libido and Hormones: The Connection", "libido hormones connection", ["low libido hormonal causes", "sex drive hormones", "libido hormone testing"], "informational", "hormone-therapy-women"],
  ["ED in Your 40s: When to Seek Help", "ED in 40s when to seek help", ["early ED men", "ED warning signs", "young man ED"], "informational", "erectile-dysfunction"],
  ["Testosterone Optimization for Sexual Function", "testosterone sexual function", ["TRT libido", "testosterone for ED", "sexual performance testosterone"], "informational", "hormone-therapy-men"],
  ["Pelvic Floor Health: An Often-Overlooked Factor", "pelvic floor health sexual", ["pelvic floor dysfunction", "Kegel exercises", "pelvic floor physical therapy"], "informational", "o-shot"],
  ["Reclaiming Intimacy in Mid-Life", "reclaim intimacy mid-life", ["mid-life sexual rebuild", "intimacy after 40", "couple sexual wellness"], "informational", "o-shot"],
  ["Cardiovascular Health and Sexual Function", "cardiovascular health sexual function", ["heart health and ED", "vascular sexual wellness", "blood flow sexual"], "informational", "erectile-dysfunction"],
  ["Sexual Side Effects of Common Medications", "medication sexual side effects", ["SSRI sexual dysfunction", "antidepressant libido", "drug-induced ED"], "informational", "erectile-dysfunction"],
  ["Communication: The Underrated Aspect of Sexual Wellness", "communication sexual wellness", ["sexual communication couples", "talking about sexual health", "intimate communication"], "informational", "o-shot"],
].map(([title, primaryKeyword, secondaryKeywords, intent, relatedServiceSlug]) => ({
  title: title as string,
  primaryKeyword: primaryKeyword as string,
  secondaryKeywords: secondaryKeywords as string[],
  intent: intent as Topic["intent"],
  relatedServiceSlug: relatedServiceSlug as string,
}));

// IV HYDRATION / WELLNESS (15)
const IV: Topic[] = [
  ["Myers Cocktail: What's In It and Who Benefits", "Myers cocktail IV", ["Myers IV ingredients", "vitamin IV therapy", "Myers IV uses"], "informational", "iv-hydration"],
  ["NAD+ for Cognitive Function: Realistic Expectations", "NAD plus cognitive function", ["NAD IV brain", "NAD+ mental clarity", "NAD cognitive benefits"], "informational", "iv-hydration"],
  ["High-Dose Vitamin C IV: Use Cases and Caveats", "high dose vitamin C IV", ["IV vitamin C immune", "vitamin C therapy", "IVC clinical uses"], "informational", "iv-hydration"],
  ["Glutathione: The Master Antioxidant", "glutathione IV", ["GSH IV therapy", "glutathione benefits", "antioxidant IV"], "informational", "iv-hydration"],
  ["IV Therapy for Athletic Recovery", "IV therapy athletic recovery", ["athlete IV hydration", "post-workout IV", "performance IV therapy"], "informational", "iv-hydration"],
  ["Hangover Recovery IV: When It's Appropriate", "hangover recovery IV", ["hangover IV drip", "alcohol recovery IV", "morning after IV"], "informational", "iv-hydration"],
  ["Pre-Wedding IV Therapy: A Clinical Take", "pre-wedding IV therapy", ["bridal IV", "wedding day prep IV", "pre-event hydration"], "informational", "iv-hydration"],
  ["IV Therapy During Illness: A Cautious View", "IV therapy during illness", ["sick IV drip", "cold IV therapy", "flu IV hydration"], "informational", "iv-hydration"],
  ["Magnesium IV for Migraines and Cramping", "magnesium IV migraines", ["IV magnesium headache", "magnesium drip", "magnesium therapy"], "informational", "iv-hydration"],
  ["Vitamin D Optimization: When IV Isn't Always Best", "vitamin D optimization IV", ["vitamin D injection vs oral", "vitamin D therapy", "vitamin D dosing"], "informational", "iv-hydration"],
  ["B12 Injections vs Sublingual: Bioavailability", "B12 injection vs sublingual", ["methylcobalamin injection", "B12 absorption", "B12 IM"], "informational", "iv-hydration"],
  ["Choosing an IV Therapy Provider Safely", "choosing IV therapy provider safely", ["IV provider credentials", "safe IV clinic", "IV therapy regulation"], "commercial", "iv-hydration"],
  ["IV Therapy for Long COVID Symptoms", "IV therapy long COVID", ["long covid IV protocol", "post-covid IV", "long haul covid wellness"], "informational", "iv-hydration"],
  ["The Difference Between IV Push and IV Drip", "IV push vs IV drip", ["IV administration methods", "fast IV vs slow", "IV technique"], "informational", "iv-hydration"],
  ["Frequency of IV Therapy: Evidence-Based Guidance", "frequency IV therapy", ["how often IV therapy", "IV schedule frequency", "monthly IV therapy"], "informational", "iv-hydration"],
].map(([title, primaryKeyword, secondaryKeywords, intent, relatedServiceSlug]) => ({
  title: title as string,
  primaryKeyword: primaryKeyword as string,
  secondaryKeywords: secondaryKeywords as string[],
  intent: intent as Topic["intent"],
  relatedServiceSlug: relatedServiceSlug as string,
}));

// HAIR RESTORATION (10)
const HAIR: Topic[] = [
  ["The DE|RIVE Hair Restoration Protocol Explained", "DE RIVE hair restoration protocol", ["EXO|E hair therapy", "exosome hair treatment", "DE|RIVE results"], "informational", "derive-hair-restoration"],
  ["EXO|E Exosome Therapy for Hair: An Overview", "EXO E exosome therapy hair", ["exosome scalp therapy", "exosome hair growth", "regenerative hair therapy"], "informational", "derive-hair-restoration"],
  ["PRP for Hair Restoration vs Surgical Transplant", "PRP hair vs surgical transplant", ["PRP hair injection", "non-surgical hair restoration", "FUE vs PRP"], "informational", "derive-hair-restoration"],
  ["Female Pattern Hair Loss: A Clinical Approach", "female pattern hair loss", ["women's hair loss treatment", "FPHL", "androgenetic alopecia women"], "informational", "derive-hair-restoration"],
  ["Postpartum Hair Loss: When to Worry", "postpartum hair loss", ["telogen effluvium pregnancy", "postpartum shedding", "hair loss after baby"], "informational", "derive-hair-restoration"],
  ["Telogen Effluvium: Stress-Related Hair Shedding", "telogen effluvium stress hair shedding", ["temporary hair loss", "stress-induced shedding", "hair shed after illness"], "informational", "derive-hair-restoration"],
  ["Iron, Ferritin, and Hair Loss", "ferritin hair loss", ["iron deficiency hair loss", "ferritin levels for hair", "anemia hair shedding"], "informational", "derive-hair-restoration"],
  ["Thyroid and Hair Loss: A Two-Way Street", "thyroid hair loss", ["hypothyroid hair loss", "Hashimoto hair shedding", "TSH hair loss"], "informational", "derive-hair-restoration"],
  ["Finasteride Alternatives for Hair Loss", "finasteride alternatives hair loss", ["natural DHT blockers", "non-prescription hair treatments", "saw palmetto hair"], "informational", "derive-hair-restoration"],
  ["A Realistic Hair Restoration Timeline", "hair restoration timeline", ["hair regrowth timeline", "PRP hair results timeline", "DE|RIVE results timeline"], "informational", "derive-hair-restoration"],
].map(([title, primaryKeyword, secondaryKeywords, intent, relatedServiceSlug]) => ({
  title: title as string,
  primaryKeyword: primaryKeyword as string,
  secondaryKeywords: secondaryKeywords as string[],
  intent: intent as Topic["intent"],
  relatedServiceSlug: relatedServiceSlug as string,
}));

// LOCAL / GEO (25). Slot 1 is the AUBURN POST (override). The other 24 are interleaved.
const LOCAL: Topic[] = [
  // Slot 0 — AUBURN. Generator code overrides this slot's date assignment to be slot #1 of the schedule.
  ["Revitalize Is Now Serving Former Auburn Patients at Our Columbus and Warner Robins Locations", "Auburn patients Columbus Warner Robins", ["Auburn Alabama medical clinic", "Auburn closure transition", "Auburn aesthetic patients"], "local", "hormone-therapy-women", ["columbus-ga", "warner-robins-ga"]],
  ["Hormone Therapy in Phenix City, Alabama", "hormone therapy Phenix City Alabama", ["BHRT Phenix City", "Phenix City hormone clinic", "hormone replacement Phenix City"], "local", "hormone-therapy-women", ["columbus-ga"]],
  ["Medical Weight Loss in Bonaire, Georgia", "medical weight loss Bonaire Georgia", ["Bonaire weight loss clinic", "Bonaire GLP-1", "weight loss Houston County"], "local", "medical-weight-loss", ["warner-robins-ga"]],
  ["Aesthetic Treatments Near Fort Benning, Georgia", "aesthetic treatments Fort Benning Georgia", ["Fort Benning med spa", "military aesthetic care", "Fort Benning botox"], "local", "neuromodulators", ["columbus-ga"]],
  ["Botox Provider in Bonaire and Warner Robins, GA", "botox provider Bonaire Warner Robins GA", ["Bonaire botox", "Warner Robins botox provider", "Houston County botox"], "local", "neuromodulators", ["warner-robins-ga"]],
  ["IV Hydration in Phenix City, Alabama", "IV hydration Phenix City Alabama", ["IV therapy Phenix City", "Phenix City wellness IV", "IV drip Phenix City"], "local", "iv-hydration", ["columbus-ga"]],
  ["PRP Hair Restoration in Houston County, Georgia", "PRP hair restoration Houston County Georgia", ["Houston County hair restoration", "Warner Robins PRP hair", "Bonaire hair restoration"], "local", "derive-hair-restoration", ["warner-robins-ga"]],
  ["Sexual Wellness Care for Active Duty Military Near Fort Benning", "sexual wellness Fort Benning military", ["military O-Shot Fort Benning", "active duty sexual wellness", "service member intimate care"], "local", "o-shot", ["columbus-ga"]],
  ["Hormone Therapy for Veterans in Columbus and Warner Robins", "hormone therapy veterans Columbus Warner Robins", ["veteran TRT", "VA hormone therapy", "veteran BHRT Georgia"], "local", "hormone-therapy-men", ["columbus-ga", "warner-robins-ga"]],
  ["Medical Weight Loss for Military Spouses Near Fort Benning", "medical weight loss military spouses Fort Benning", ["military spouse weight loss", "military family GLP-1", "Fort Benning spouse wellness"], "local", "medical-weight-loss", ["columbus-ga"]],
  ["PTSD and Hormone Therapy: A Resource for Veterans", "PTSD hormone therapy veterans", ["veteran cortisol", "PTSD adrenal", "veteran hormone optimization"], "local", "hormone-therapy-men", ["columbus-ga"]],
  ["Concierge Aesthetic Care in Columbus, Georgia", "concierge aesthetic care Columbus Georgia", ["VIP aesthetic Columbus", "boutique med spa Columbus", "private aesthetic clinic"], "local", "neuromodulators", ["columbus-ga"]],
  ["Concierge Hormone Care in Warner Robins, Georgia", "concierge hormone care Warner Robins Georgia", ["VIP BHRT Warner Robins", "private hormone clinic", "Warner Robins concierge medicine"], "local", "hormone-therapy-women", ["warner-robins-ga"]],
  ["Booking Your Consultation in Columbus, Georgia: A Patient's Guide", "booking consultation Columbus Georgia", ["Columbus GA medical consultation", "Revitalize Columbus booking", "Columbus first appointment"], "local", "hormone-therapy-women", ["columbus-ga"]],
  ["Booking Your Consultation in Warner Robins: What to Expect", "booking consultation Warner Robins Georgia", ["Warner Robins consultation", "Warner Robins booking guide", "Revitalize Warner Robins first visit"], "local", "hormone-therapy-women", ["warner-robins-ga"]],
  ["The Best Botox in Columbus, GA: A Clinician's Honest Guide", "best botox Columbus GA", ["top Columbus botox provider", "Columbus botox quality", "best neuromodulators Columbus"], "local", "neuromodulators", ["columbus-ga"]],
  ["The Best BHRT Provider in Warner Robins, Georgia", "best BHRT provider Warner Robins Georgia", ["top hormone clinic Warner Robins", "Warner Robins bioidentical hormones", "best HRT Warner Robins"], "local", "hormone-therapy-women", ["warner-robins-ga"]],
  ["The Best GLP-1 Provider in Columbus, Georgia", "best GLP-1 provider Columbus Georgia", ["top semaglutide Columbus", "best weight loss clinic Columbus", "Columbus tirzepatide"], "local", "medical-weight-loss", ["columbus-ga"]],
  ["The Best Med Spa in Bonaire, Georgia", "best med spa Bonaire Georgia", ["Bonaire aesthetic clinic", "top Bonaire spa", "Houston County med spa"], "local", "neuromodulators", ["warner-robins-ga"]],
  ["The Difference Between Spa Botox and Clinical Botox", "spa botox vs clinical botox", ["med spa vs clinical botox", "clinician botox", "RN botox vs MD"], "local", "neuromodulators", ["columbus-ga"]],
  ["Travis Woodley: A Clinician's Path to Functional Medicine", "Travis Woodley functional medicine", ["Travis Woodley NP", "Revitalize founder bio", "functional medicine Columbus GA"], "local", "hormone-therapy-women", ["columbus-ga"]],
  ["Why Patients Travel for Hormone Care: Reach of the Practice", "hormone care travel patients", ["regional BHRT clinic", "Georgia hormone destination", "BHRT travel clinic"], "local", "hormone-therapy-women", ["columbus-ga", "warner-robins-ga"]],
  ["Patient Stories: Mid-Life Transformation in Columbus and Warner Robins", "patient stories mid-life transformation", ["BHRT testimonials", "weight loss patient stories", "hormone optimization stories"], "local", "hormone-therapy-women", ["columbus-ga", "warner-robins-ga"]],
  ["Local Wellness Resources in Columbus, GA", "wellness resources Columbus GA", ["Columbus wellness directory", "Columbus health resources", "Columbus functional medicine network"], "local", "hormone-therapy-women", ["columbus-ga"]],
  ["Local Wellness Resources in Warner Robins, GA", "wellness resources Warner Robins GA", ["Warner Robins wellness directory", "Warner Robins health resources", "Houston County wellness network"], "local", "hormone-therapy-women", ["warner-robins-ga"]],
].map(([title, primaryKeyword, secondaryKeywords, intent, relatedServiceSlug, relatedCities]) => ({
  title: title as string,
  primaryKeyword: primaryKeyword as string,
  secondaryKeywords: secondaryKeywords as string[],
  intent: intent as Topic["intent"],
  relatedServiceSlug: relatedServiceSlug as string,
  relatedCities: relatedCities as string[] | undefined,
}));

// SYMPTOMS (15)
const SYMPTOMS: Topic[] = [
  ["Chronic Joint Pain: When to Investigate Hormones", "joint pain hormones investigation", ["joint pain perimenopause", "estrogen joint pain", "musculoskeletal hormones"], "informational", "hormone-therapy-women"],
  ["Anxiety in Mid-Life: Hormonal Drivers", "anxiety mid-life hormonal", ["perimenopausal anxiety", "anxiety hormone connection", "andropause anxiety"], "informational", "hormone-therapy-women"],
  ["Depression and Hormones: The Underexplored Connection", "depression hormones connection", ["hormonal depression", "menopausal depression", "low T depression"], "informational", "hormone-therapy-women"],
  ["Memory Issues in Mid-Life: When It's More Than Aging", "memory issues mid-life", ["cognitive decline 40s", "menopausal memory", "memory loss workup"], "informational", "hormone-therapy-women"],
  ["Lack of Motivation in Your 40s: Clinical Investigation", "lack of motivation 40s", ["anhedonia 40s", "motivation hormones", "drive testosterone"], "informational", "hormone-therapy-men"],
  ["Muscle Loss in Mid-Life: Sarcopenia and Hormones", "muscle loss mid-life sarcopenia", ["muscle wasting after 40", "sarcopenia treatment", "muscle preservation hormones"], "informational", "hormone-therapy-men"],
  ["Frequent Night Urination: Hormonal Causes", "night urination hormones", ["nocturia causes", "frequent urination at night", "BPH nocturia"], "informational", "hormone-therapy-men"],
  ["Persistent Bloating in Mid-Life: Beyond Diet", "persistent bloating mid-life", ["bloating perimenopause", "menopausal bloating", "hormonal bloating"], "informational", "hormone-therapy-women"],
  ["Dry Skin in Mid-Life: Hormonal Origins", "dry skin mid-life hormones", ["menopausal dry skin", "estrogen and skin moisture", "dry skin causes hormonal"], "informational", "hormone-therapy-women"],
  ["Hair Thinning in Women: A Differential Diagnosis", "hair thinning women differential", ["women hair shedding causes", "hair thinning workup", "telogen effluvium causes"], "informational", "derive-hair-restoration"],
  ["Loss of Morning Erections: A Clinical Marker", "loss morning erections", ["nocturnal erections", "morning wood loss", "morning erection vascular marker"], "informational", "erectile-dysfunction"],
  ["Increased Belly Fat: Why It Won't Budge", "increased belly fat won't budge", ["stubborn belly fat", "visceral adipose hormonal", "perimenopausal belly fat"], "informational", "medical-weight-loss"],
  ["Persistent Fatigue Beyond Sleep", "persistent fatigue beyond sleep", ["chronic fatigue investigation", "tired despite sleep", "fatigue hormonal causes"], "informational", "hormone-therapy-women"],
  ["Heat Intolerance in Mid-Life", "heat intolerance mid-life", ["heat sensitivity perimenopause", "thyroid heat intolerance", "perimenopausal heat"], "informational", "hormone-therapy-women"],
  ["Cold Intolerance: A Thyroid Investigation Starter", "cold intolerance thyroid investigation", ["always cold thyroid", "cold hands feet thyroid", "hypothyroid cold"], "informational", "hormone-therapy-women"],
].map(([title, primaryKeyword, secondaryKeywords, intent, relatedServiceSlug]) => ({
  title: title as string,
  primaryKeyword: primaryKeyword as string,
  secondaryKeywords: secondaryKeywords as string[],
  intent: intent as Topic["intent"],
  relatedServiceSlug: relatedServiceSlug as string,
}));

// CONDITION × DEMOGRAPHIC (8)
const DEMOGRAPHIC: Topic[] = [
  ["Weight Loss for Women Over 50: A Clinical Approach", "weight loss women over 50", ["postmenopausal weight loss", "older women GLP-1", "fifties weight loss"], "informational", "medical-weight-loss"],
  ["Hormone Therapy for Men Under 40: When It's Appropriate", "hormone therapy men under 40", ["young men TRT", "early hormone therapy men", "low T 30s"], "informational", "hormone-therapy-men"],
  ["Aesthetic Treatments for Men: Subtle Strategies", "aesthetic treatments men subtle", ["male botox subtle", "men's aesthetic preferences", "natural look men aesthetics"], "informational", "neuromodulators"],
  ["Testosterone for Active and Athletic Men", "testosterone active athletic men", ["TRT for athletes", "active man testosterone", "performance testosterone"], "informational", "hormone-therapy-men"],
  ["Perimenopause in Your Late 30s: Earlier Than You Think", "perimenopause late 30s", ["early perimenopause", "perimenopause 38 39", "perimenopause young"], "informational", "hormone-therapy-women"],
  ["GLP-1 After Menopause: A Specialized Approach", "GLP-1 after menopause", ["postmenopausal GLP-1", "menopausal weight loss medication", "menopause semaglutide"], "informational", "medical-weight-loss"],
  ["Hormone Therapy with a Cancer History: Careful Framing", "hormone therapy cancer history", ["BHRT after cancer", "hormone therapy survivor", "cancer history HRT decision"], "informational", "hormone-therapy-women"],
  ["Sexual Wellness After 60: Clinical Pathways", "sexual wellness after 60", ["sexual health older adults", "intimacy after 60", "older couples sexual wellness"], "informational", "o-shot"],
].map(([title, primaryKeyword, secondaryKeywords, intent, relatedServiceSlug]) => ({
  title: title as string,
  primaryKeyword: primaryKeyword as string,
  secondaryKeywords: secondaryKeywords as string[],
  intent: intent as Topic["intent"],
  relatedServiceSlug: relatedServiceSlug as string,
}));

// ─── Slug derivation + collision check ─────────────────────────────────────
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function loadExistingSlugs(): Set<string> {
  const slugs = new Set<string>();
  for (const f of readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))) {
    const { data } = matter(readFileSync(join(BLOG_DIR, f), "utf8"));
    slugs.add((data as { slug: string }).slug);
  }
  return slugs;
}

// ─── Schedule assembly ─────────────────────────────────────────────────────
type CategoryKey = "Hormone Therapy" | "Weight Loss" | "Aesthetics" | "Sexual Wellness" | "Wellness" | "Hair Restoration" | "Local" | "Symptoms" | "Demographic";

const POOLS: Record<CategoryKey, Topic[]> = {
  "Hormone Therapy": HORMONE,
  "Weight Loss": WEIGHT,
  "Aesthetics": AESTHETICS,
  "Sexual Wellness": SEXUAL,
  "Wellness": IV,
  "Hair Restoration": HAIR,
  "Local": LOCAL,
  "Symptoms": SYMPTOMS,
  "Demographic": DEMOGRAPHIC,
};

const TARGETS: Record<CategoryKey, number> = {
  "Hormone Therapy": 45,
  "Weight Loss": 40,
  "Aesthetics": 35,
  "Sexual Wellness": 15,
  "Wellness": 15,
  "Hair Restoration": 10,
  "Local": 25,
  "Symptoms": 15,
  "Demographic": 8,
};

interface ScheduleEntry {
  postNumber: number;
  publishedDate: string;
  dayOfWeek: "Tue" | "Thu";
  title: string;
  slug: string;
  category: CategoryKey;
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetIntent: Topic["intent"];
  relatedServiceSlug: string;
  relatedCities?: string[];
}

function build(): ScheduleEntry[] {
  const dates = buildDates();
  const existing = loadExistingSlugs();
  const out: ScheduleEntry[] = [];

  // Pre-compute slot indices for Local posts: ~1 every ~4 weeks → spacing 8 slots.
  // First slot (#1) = Auburn override. Remaining 24 local posts evenly distributed.
  const localSlots = new Set<number>([0]);
  const remainingLocals = TARGETS.Local - 1;
  const step = Math.floor((TOTAL - 1) / remainingLocals);
  for (let i = 0; i < remainingLocals; i++) {
    const slot = 1 + i * step + Math.floor(step / 2);
    localSlots.add(Math.min(slot, TOTAL - 1));
  }

  // Build a round-robin queue for the non-local categories, weighted by target.
  const nonLocalQueue: CategoryKey[] = [];
  const nonLocalTargets: [CategoryKey, number][] = [
    ["Hormone Therapy", TARGETS["Hormone Therapy"]],
    ["Weight Loss", TARGETS["Weight Loss"]],
    ["Aesthetics", TARGETS["Aesthetics"]],
    ["Sexual Wellness", TARGETS["Sexual Wellness"]],
    ["Wellness", TARGETS["Wellness"]],
    ["Hair Restoration", TARGETS["Hair Restoration"]],
    ["Symptoms", TARGETS["Symptoms"]],
    ["Demographic", TARGETS["Demographic"]],
  ];
  // Distribute non-local cats with deterministic interleaving: weighted round-robin.
  const remaining: Record<string, number> = {};
  for (const [c, n] of nonLocalTargets) remaining[c] = n;
  const nonLocalSlots = TOTAL - localSlots.size;
  for (let i = 0; i < nonLocalSlots; i++) {
    let pickCat: CategoryKey | null = null;
    let pickRatio = -1;
    for (const [c] of nonLocalTargets) {
      if (remaining[c] <= 0) continue;
      const ratio = remaining[c] / TARGETS[c];
      if (ratio > pickRatio) { pickRatio = ratio; pickCat = c; }
    }
    if (pickCat) {
      nonLocalQueue.push(pickCat);
      remaining[pickCat]--;
    }
  }

  // Pool consumption pointers
  const pointers: Record<CategoryKey, number> = {
    "Hormone Therapy": 0, "Weight Loss": 0, "Aesthetics": 0, "Sexual Wellness": 0,
    "Wellness": 0, "Hair Restoration": 0, "Local": 1, // 0 reserved for Auburn (consumed at slot 0)
    "Symptoms": 0, "Demographic": 0,
  };

  let nlIdx = 0;
  for (let slot = 0; slot < TOTAL; slot++) {
    const { date, day } = dates[slot];
    let cat: CategoryKey;
    let topic: Topic;

    if (localSlots.has(slot)) {
      cat = "Local";
      if (slot === 0) {
        topic = LOCAL[0]; // Auburn override
      } else {
        topic = LOCAL[pointers.Local];
        pointers.Local++;
      }
    } else {
      cat = nonLocalQueue[nlIdx++];
      const pool = POOLS[cat];
      topic = pool[pointers[cat]];
      pointers[cat]++;
    }

    let slug = slugify(topic.title);
    // Auburn post — user-specified slug override
    if (slot === 0) slug = "auburn-patients-columbus-warner-robins";
    // Collision guard against existing 53 slugs
    if (existing.has(slug)) {
      slug = `${slug}-2026`;
    }
    if (out.some((e) => e.slug === slug)) {
      let n = 2;
      while (out.some((e) => e.slug === `${slug}-${n}`)) n++;
      slug = `${slug}-${n}`;
    }

    out.push({
      postNumber: slot + 1,
      publishedDate: date,
      dayOfWeek: day,
      title: topic.title,
      slug,
      category: cat,
      primaryKeyword: topic.primaryKeyword,
      secondaryKeywords: topic.secondaryKeywords,
      targetIntent: topic.intent,
      relatedServiceSlug: topic.relatedServiceSlug,
      relatedCities: topic.relatedCities,
    });
  }

  return out;
}

// ─── Run ────────────────────────────────────────────────────────────────────
const schedule = build();

// Sanity counts
const counts: Record<string, number> = {};
schedule.forEach((e) => { counts[e.category] = (counts[e.category] ?? 0) + 1; });

mkdirSync(DOCS_DIR, { recursive: true });
writeFileSync(OUT_FILE, JSON.stringify(schedule, null, 2));

console.log(`Generated ${schedule.length} entries → ${OUT_FILE}`);
console.log(`Date range: ${schedule[0].publishedDate} → ${schedule[schedule.length - 1].publishedDate}`);
console.log(`Slot 1: ${schedule[0].title}`);
console.log("");
console.log("Category distribution (target → actual):");
for (const c of Object.keys(TARGETS) as CategoryKey[]) {
  const t = TARGETS[c];
  const a = counts[c] ?? 0;
  const ok = t === a ? "✓" : "✗";
  console.log(`  ${ok} ${c.padEnd(20)} ${t} → ${a}`);
}

// Confirm zero duplicates with existing 53
const existingSet = loadExistingSlugs();
const dups = schedule.filter((e) => existingSet.has(e.slug));
console.log("");
console.log(`Slug collisions with existing 53: ${dups.length}`);
if (dups.length > 0) {
  for (const d of dups) console.log(`  ✗ ${d.slug}`);
  process.exit(1);
}

// Confirm zero duplicates within new schedule
const slugSet = new Set(schedule.map((e) => e.slug));
if (slugSet.size !== schedule.length) {
  console.error(`✗ Duplicate slugs within schedule: ${schedule.length - slugSet.size}`);
  process.exit(1);
}
console.log(`Internal slug uniqueness: ✓`);
