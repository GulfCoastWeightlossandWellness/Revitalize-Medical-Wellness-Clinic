import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePage from "@/components/ServicePage";
import FadeIn from "@/components/FadeIn";
import { getHubVideos } from "@/lib/contentHub";

export const metadata: Metadata = {
  title:
    "Women's Hormone Therapy Columbus GA | BHRT, Pellets, Creams, Injections | Revitalize",
  description:
    "Bioidentical hormone replacement therapy for women in Columbus and Warner Robins, GA — pellets, compounded testosterone/estrogen/progesterone creams, injections, oral progesterone, and vaginal hormone therapy. Lab-guided protocols by Travis Woodley, MSN, RN, CRNP.",
  keywords: [
    "women's hormone therapy Columbus GA",
    "BHRT Columbus GA",
    "BHRT Warner Robins",
    "bioidentical hormone replacement Columbus",
    "bioidentical hormone replacement Warner Robins",
    "compounded hormone therapy Columbus",
    "hormone pellets women Columbus",
    "hormone pellets Warner Robins women",
    "estrogen cream Columbus GA",
    "progesterone cream Columbus",
    "testosterone cream women Columbus",
    "compounded BHRT cream",
    "bioidentical estrogen Columbus GA",
    "oral progesterone Columbus",
    "vaginal estrogen therapy Columbus",
    "menopause treatment Columbus GA",
    "menopause treatment Warner Robins",
    "perimenopause treatment Columbus GA",
    "perimenopause treatment Warner Robins",
    "Travis Woodley BHRT",
    "women's hormone clinic Georgia",
  ],
};

export default function HormoneTherapyWomen() {
  const womenVideo = getHubVideos().find((video) =>
    /estrogen|menopause/i.test(video.title)
  );

  // Distinct MedicalProcedure schema describing the broader BHRT consultation
  // that branches into multiple delivery methods at the treatment-plan visit.
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Women's Bioidentical Hormone Replacement Therapy (BHRT)",
    procedureType: "Therapeutic",
    bodyLocation: "Endocrine system",
    howPerformed:
      "Lab-guided bioidentical hormone replacement therapy for women using one or more delivery methods: subcutaneous Biote pellets (in-office insertion every 3-5 months), compounded topical creams (testosterone-only, testosterone/estradiol, testosterone/estradiol/progesterone, or other combinations), weekly testosterone cypionate injections (select patients), oral micronized progesterone capsules, and localized vaginal estrogen or DHEA therapy. Combination plans are common — many women run a pellet plus oral progesterone, or a compounded cream plus vaginal estrogen. Delivery method is selected at the treatment-plan visit based on the patient's symptoms, lab pattern, lifestyle, and preference.",
    indication: {
      "@type": "MedicalIndication",
      name: "Symptoms of perimenopause and menopause including fatigue, weight gain, brain fog, mood changes, low libido, sleep disruption, hot flashes, night sweats, vaginal dryness, urinary symptoms, muscle loss, and quality-of-life decline related to hormonal shifts.",
    },
    preparation:
      "Comprehensive hormone panel including estradiol, progesterone, testosterone (total and free), SHBG, DHEA, FSH/LH where indicated, thyroid markers, and a metabolic panel. Clinical consultation reviewing symptoms, history, medications, and goals. Discussion of delivery-method options and individualized plan design.",
    followup:
      "Reassessment at 3-5 months for pellet patients, 6-12 weeks for cream and injection patients, with labs and clinical review. Dose calibration and route adjustments at each cycle based on objective markers and patient-reported outcomes.",
    performer: {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "MSN, RN, CRNP",
    },
  };

  // Pellet vs creams vs injections vs combinations — the primary decision
  // women face at consultation. Rendered in afterHero slot so it's the
  // first thing patients see after the hero.
  const deliveryComparison = (
    <section id="delivery-methods" style={{ background: "var(--color-stone)", padding: "72px clamp(24px, 6vw, 80px)", scrollMarginTop: "80px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "40px", maxWidth: "780px" }}>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Multiple delivery methods</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "20px" }}>
              BHRT for women — pellets, creams, injections, oral, vaginal. Often used in combination.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)" }}>
              Most clinics push one delivery method as the answer. Travis runs the full clinical toolkit — Biote pellets, compounded bioidentical creams (testosterone, estrogen, progesterone — alone or in combination), weekly testosterone injections in select patients, oral micronized progesterone, and localized vaginal estrogen or DHEA. Many women end up on a thoughtful combination — for example, pellets paired with oral progesterone, or a testosterone/estradiol cream paired with vaginal estrogen. The plan is built around your symptoms and lab pattern, not a default protocol.
            </p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {[
            {
              title: "Biote Pellet Therapy",
              tagline: "Steady, low-maintenance, 3-5 month cycles",
              body: "Hormone pellets are placed just beneath the skin during a brief in-office procedure. They release a continuous, physiologic dose of bioidentical hormones over 3-5 months. No daily compliance, very stable levels. Travis is a Certified Platinum Biote provider.",
              fitsIf: "You want set-it-and-forget-it convenience and your lab pattern is stable.",
            },
            {
              title: "Compounded Topical Creams",
              tagline: "Flexible dosing — testosterone, estrogen, progesterone",
              body: "Bioidentical hormone creams absorbed through the skin. Available as testosterone-only, testosterone + estradiol, testosterone + estradiol + progesterone, and other compounded combinations tailored to your situation. Allows for fine-grained dose adjustment between cycles.",
              fitsIf: "You want dose flexibility, prefer daily application, or need a customized hormone blend.",
            },
            {
              title: "Testosterone Injection Therapy",
              tagline: "Weekly cypionate, select patients",
              body: "Weekly testosterone cypionate injections (low-dose for women), intramuscular or subcutaneous, with self-injection training. Used in select female patients who want the dose precision injection therapy provides.",
              fitsIf: "You have specific testosterone-driven symptoms (libido, recovery, energy) and want tight dose control.",
            },
            {
              title: "Oral Micronized Progesterone",
              tagline: "Sleep, mood, uterine protection",
              body: "Bioidentical progesterone capsules taken at bedtime. Often layered with other delivery methods — particularly for women with intact uterus on estrogen therapy, women with sleep disturbance, or women with progesterone-deficiency symptoms.",
              fitsIf: "You need progesterone specifically — for sleep, mood, or uterine protection alongside estrogen.",
            },
            {
              title: "Vaginal Hormone Therapy",
              tagline: "Localized estrogen or DHEA",
              body: "Localized vaginal estrogen or DHEA preparations. Targets vaginal dryness, painful intercourse, urinary symptoms, and recurrent UTIs with minimal systemic absorption. Frequently added on top of systemic BHRT for women with genitourinary symptoms.",
              fitsIf: "You have vaginal dryness, painful sex, or urinary symptoms — with or without other BHRT.",
            },
          ].map((m) => (
            <FadeIn key={m.title}>
              <div style={{ background: "#fff", borderRadius: "8px", padding: "24px 24px", height: "100%", display: "flex", flexDirection: "column", borderTop: "3px solid var(--color-teal)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.18rem", fontWeight: 500, color: "var(--color-ink)", marginBottom: "6px", lineHeight: 1.3 }}>
                  {m.title}
                </h3>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.02em", color: "var(--color-teal)", fontWeight: 500, marginBottom: "12px", fontStyle: "italic" }}>
                  {m.tagline}
                </div>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.78, color: "var(--color-muted)", marginBottom: "14px", flex: 1 }}>
                  {m.body}
                </p>
                <div style={{ borderTop: "1px solid var(--color-divider)", paddingTop: "12px", marginTop: "auto" }}>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "4px" }}>
                    May fit if
                  </div>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "var(--color-ink)", margin: 0 }}>
                    {m.fitsIf}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-muted)", marginTop: "32px", maxWidth: "780px" }}>
            Most patients end up on a combination — for example, a pellet paired with oral progesterone, or a compounded testosterone/estradiol cream paired with vaginal estrogen. We design the protocol at consultation around your specific symptoms, your lab pattern, and your goals. There is no default plan.
          </p>
        </FadeIn>
      </div>
    </section>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <ServicePage
        hero={{
        eyebrow: "Women's Health — Columbus & Warner Robins, GA",
        headline: "Hormone Therapy<br /><em>for Women</em>",
        subheadline: "Bioidentical hormone replacement therapy (BHRT) for perimenopause, menopause, and mid-life imbalance — pellets, compounded creams (testosterone, estrogen, progesterone), injections, oral progesterone, and vaginal estrogen. Lab-guided protocols built around your symptoms and physiology, not a default program.",
        heroKeyword: "Hormone Therapy for Women Columbus GA",
      }}
      intro={{
        problem: "If you are sleeping poorly, gaining weight without explanation, losing your focus, feeling emotionally flat, or watching your libido fade — these are not signs of getting older. They are signs that your hormone levels have shifted, and that shift is measurable. Most women in their 40s and 50s have never had a hormone panel done with any clinical precision. They have been told their labs are 'normal' while they feel anything but.",
        what: "Bioidentical hormone replacement therapy (BHRT) at Revitalize uses hormones that are structurally identical to those your body produces — testosterone, estrogen, and progesterone — restored to optimal levels for how you actually want to feel. We offer the full clinical toolkit: Biote pellet therapy, compounded bioidentical creams (testosterone-only, testosterone/estradiol, testosterone/estradiol/progesterone, and other custom blends), weekly testosterone cypionate injections in select patients, oral micronized progesterone, and localized vaginal estrogen or DHEA. Many women end up on a combination — the right plan depends on your symptoms, your labs, and what you want your day-to-day life to look like.",
        how: "Every woman's treatment begins with a comprehensive consultation and selective lab work. We are not looking for 'normal ranges' — we are looking for optimal ranges relative to your symptoms and goals. We review your complete history, including medications, sleep patterns, stress load, and prior hormone-related concerns. From the labs and the conversation we design the BHRT protocol — which delivery methods, which hormones, which doses, what cadence. Most women are reassessed at 3-5 months on pellets, or 6-12 weeks on creams and injections.",
      }}
      candidacy={{
        good: [
          "Women in perimenopause or menopause experiencing fatigue, brain fog, hot flashes, or night sweats",
          "Those with unexplained weight gain, sleep disruption, or mood changes not explained by other conditions",
          "Women experiencing decreased libido or changes in sexual responsiveness",
          "Women with vaginal dryness, painful intercourse, or recurrent urinary symptoms",
          "Women with bone density concerns or muscle loss as part of mid-life hormonal shift",
          "Women who want a low-maintenance pellet protocol for steady hormone levels",
          "Women who want dose flexibility through compounded topical creams",
          "Women with progesterone-specific needs (sleep, mood, uterine protection on estrogen)",
          "Patients who have had prior hormone therapy and want a more individualized, multi-method approach",
        ],
        notFor: [
          "Current or recent diagnosis of hormone-sensitive cancers — requires physician coordination",
          "Active blood clots or history of thromboembolic disease without specialist clearance",
          "Pregnancy or those actively trying to conceive",
          "Certain liver conditions that affect hormone metabolism",
          "Women who have not had a clinical consultation and baseline labs",
        ],
      }}
      whatToExpect={[
        "Comprehensive consultation: We review your symptoms, health background, medications, and goals. We discuss the BHRT delivery options — pellets, compounded creams, oral progesterone, vaginal estrogen, injections — so you understand the full picture.",
        "Lab work: A baseline hormone panel — estradiol, progesterone, total and free testosterone, SHBG, DHEA, thyroid markers, and a metabolic panel. We review every value with you, not just the headline numbers.",
        "Treatment plan: We design a BHRT protocol around your specific picture. This may be a single delivery method (e.g., pellet only, or cream only) or a thoughtful combination (e.g., pellet plus oral progesterone, or compounded cream plus vaginal estrogen). We explain why each piece of the plan was chosen.",
        "Initiation: Pellet patients have a brief in-office insertion procedure (~15 minutes, well-tolerated, local numbing). Cream patients receive their compounded prescription with application guidance. Injection patients receive in-office self-injection training. Oral progesterone and vaginal preparations come with usage instructions.",
        "First weeks: Many women notice sleep and energy improvements within 2-4 weeks. Mood and libido often follow over 4-8 weeks. Vaginal symptoms typically respond within the first month for women on localized therapy.",
        "Reassessment: Pellet patients return at 3-5 months for labs and clinical review. Cream and injection patients reassess at 6-12 weeks. Dose is calibrated based on your response. Most women find their optimal protocol within 1-2 cycles.",
      ]}
      relatedServices={[
        { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
        { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
        { name: "O-Shot (Sexual Wellness)", href: "/services/o-shot" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
      ]}
      relatedPosts={[
        { title: "Perimenopause Symptom Checklist — What Is Common and What Is Treatable", href: "/blog/perimenopause-symptom-checklist" },
        { title: "Estrogen Dominance in Perimenopause — Clinical Context", href: "/blog/estrogen-dominance-perimenopause" },
        { title: "Night Sweats and Hot Flashes — A Clinical Explanation", href: "/blog/night-sweats-hot-flashes-clinical-explanation" },
        { title: "Signs Your Hormones Are Out of Balance", href: "/blog/signs-hormones-out-of-balance" },
        { title: "What to Expect at Your First Hormone Consultation", href: "/blog/first-hormone-consultation" },
        { title: "Why Your Energy Crashed in Your 40s and What to Do About It", href: "/blog/energy-crashed-40s" },
        { title: "What Is Biote Pellet Therapy and How Does It Work", href: "/blog/biote-pellet-therapy-explained" },
        { title: "Symptom Guide: Mood Changes in Mid-Life", href: "/symptoms/mood-changes" },
        { title: "Symptom Guide: Poor Sleep", href: "/symptoms/poor-sleep" },
        { title: "Symptom Guide: Low Libido", href: "/symptoms/low-libido" },
        { title: "Symptom Guide: Brain Fog", href: "/symptoms/brain-fog" },
      ]}
      faqs={[
        {
          q: "What delivery methods do you offer for women's BHRT?",
          a: "Five primary methods, often used in combination: (1) Biote subcutaneous pellet therapy, (2) compounded bioidentical topical creams — testosterone-only, testosterone/estradiol, testosterone/estradiol/progesterone, and other custom combinations, (3) weekly testosterone cypionate injections in select patients, (4) oral micronized progesterone capsules, and (5) localized vaginal estrogen or DHEA. The plan is designed around your specific symptoms, lab pattern, and lifestyle — most women end up on a thoughtful combination.",
        },
        {
          q: "What's the difference between pellets and topical creams?",
          a: "Pellets release hormones continuously over 3-5 months — very steady levels, no daily task, no compliance burden, but the dose can't be adjusted mid-cycle. Compounded creams are applied daily and allow fine-grained dose adjustment between cycles. Pellets fit women who want low-maintenance steady levels; creams fit women who want dose flexibility or a custom hormone blend (e.g., a specific testosterone/estradiol/progesterone ratio). Many women combine them — a pellet for the testosterone or estrogen base, with oral progesterone or a vaginal preparation layered on top.",
        },
        {
          q: "What hormones can be in the compounded cream?",
          a: "Travis offers a range of compounded bioidentical cream blends. The most common are testosterone-only, testosterone/estradiol, and testosterone/estradiol/progesterone. Other combinations are available based on your specific needs — for example, estradiol-only or progesterone-only preparations. The blend and ratio are individualized at the consultation based on your labs and symptoms.",
        },
        {
          q: "Do women take testosterone too?",
          a: "Yes. Testosterone is one of the three primary sex hormones in women, and it declines significantly in mid-life — often before estrogen and progesterone do. Low testosterone in women drives fatigue, low libido, brain fog, mood changes, decreased exercise tolerance, and reduced sense of well-being. Women's BHRT frequently includes a testosterone component, dosed appropriately for female physiology — much lower than men's TRT doses but no less important.",
        },
        {
          q: "How long before I feel a difference from BHRT?",
          a: "Most women begin noticing changes in sleep and energy within the first two to four weeks after starting therapy. Mood stabilization and libido improvement often follow over the next four to eight weeks. Vaginal symptoms typically respond within the first month for women on localized therapy. Full optimization — meaning the dose has been calibrated to your physiology — typically occurs after the first or second reassessment cycle. Every woman's timeline is different, and we set honest expectations at consultation.",
        },
        {
          q: "Do I need labs before starting hormone therapy?",
          a: "Yes. A baseline hormone panel is essential before any treatment recommendation. Without knowing where your levels are, dosing decisions would be guesses. Labs typically include estradiol, progesterone, total and free testosterone, SHBG, DHEA, thyroid markers (TSH, free T3, free T4, sometimes reverse T3 and antibodies), and a metabolic panel. We review every value with you in detail.",
        },
        {
          q: "Why might Travis prescribe oral progesterone alongside other BHRT?",
          a: "Oral micronized progesterone has three main uses in BHRT: (1) sleep and mood support — many women feel calmer and sleep better on bedtime progesterone, (2) uterine protection for women with intact uterus who are on estrogen therapy, and (3) addressing progesterone deficiency symptoms specifically. It's frequently added on top of pellets, creams, or as part of a layered BHRT plan.",
        },
        {
          q: "What is vaginal hormone therapy used for?",
          a: "Localized vaginal estrogen or DHEA addresses genitourinary symptoms of menopause — vaginal dryness, painful intercourse, urinary urgency, recurrent UTIs, and tissue thinning. It works locally with minimal systemic absorption, which is why it's often considered safe for women who can't or don't want systemic estrogen. Many women add vaginal preparations on top of systemic BHRT to specifically target genitourinary symptoms.",
        },
        {
          q: "Are there risks to bioidentical hormone therapy?",
          a: "As with any medical treatment, there are risks and contraindications, which is exactly why we conduct a thorough consultation and labs before making any recommendation. Bioidentical hormones carry a different risk profile than synthetic preparations, but they are not risk-free. We discuss your personal and family medical history carefully — including breast cancer history, blood clot history, cardiovascular history, and uterine/cervical history — to identify any concerns before proceeding. Individual results and safety profiles vary.",
        },
        {
          q: "Will hormone therapy help with weight loss?",
          a: "Hormonal imbalance is frequently a contributing factor to mid-life weight gain — particularly when estrogen and testosterone decline, which shifts body composition toward increased fat storage and reduced muscle mass. Optimizing hormone levels can make diet and exercise more effective. However, hormone therapy alone is not a weight loss treatment. For patients with significant metabolic concerns, we often coordinate hormone optimization with our medical weight loss program.",
        },
        {
          q: "Do you offer hormone therapy at both Columbus and Warner Robins locations?",
          a: "Yes. Women's BHRT — across all delivery methods — is available at our Columbus, GA location (762) 261-3880 and our Warner Robins, GA location (478) 366-1244. Travis sees patients at both clinics on a published rotating schedule.",
        },
      ]}
        earlyVisual={
          <FadeIn>
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--color-divider)",
                borderRadius: "10px",
                overflow: "hidden",
                maxWidth: "760px",
              }}
            >
              <Image
                src="/images/generated/womens-hormone-consult-v1.png"
                alt="Women's hormone consultation reviewing lab trends on a tablet"
                width={1024}
                height={576}
                quality={82}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 68vw, 760px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </FadeIn>
        }
        disclaimer="Medical information on this page is educational and does not constitute medical advice. Consultation and lab work are required to determine candidacy for hormone therapy. Individual results vary. Not all patients are appropriate candidates. Always consult with a licensed healthcare provider before beginning any hormone treatment."
        pageHref="/services/hormone-therapy-women"
        pageName="Hormone Therapy for Women"
        assessmentCta={{ label: "Hormone Health Self-Assessment", href: "/tools" }}
        afterHero={deliveryComparison}
      />

      {/* What BHRT may help with — symptom panel */}
      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>What BHRT may help with</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "20px" }}>
              The symptom picture we see most often.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "32px", maxWidth: "780px" }}>
              Women coming in for BHRT consultations describe some combination of the following. None of these in isolation guarantee a hormonal cause — but the pattern, together with labs, usually clarifies the picture quickly.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              {[
                "Fatigue and low energy",
                "Weight gain and slowed metabolism",
                "Brain fog and poor concentration",
                "Mood swings, anxiety, irritability",
                "Low libido and sexual wellness changes",
                "Sleep disturbances and insomnia",
                "Hot flashes and night sweats",
                "Vaginal dryness and urinary symptoms",
                "Muscle loss and decreased strength",
                "Bone density and healthy aging concerns",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-divider)",
                    borderLeft: "3px solid var(--color-teal)",
                    borderRadius: "6px",
                    padding: "14px 18px",
                    fontSize: "0.92rem",
                    lineHeight: 1.5,
                    color: "var(--color-ink)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-muted)", marginTop: "32px", maxWidth: "780px" }}>
              Every BHRT plan is customized based on your symptoms, lab work, medical history, and goals. The focus is restoring vitality, confidence, metabolic health, and quality of life — safely and with a protocol you understand.{" "}
              <Link href="/contact" style={{ color: "var(--color-teal)", textDecoration: "underline" }}>
                Book a consultation
              </Link>
              {" "}to discuss your specific picture.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "0 clamp(24px, 6vw, 80px) 80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "10px", padding: "30px 28px" }}>
              <div className="eyebrow" style={{ marginBottom: "12px" }}>Women's hormone education video</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", fontWeight: 400, color: "var(--color-ink)", marginBottom: "10px" }}>
                Menopause and estrogen-focused education
              </h2>
              <p style={{ fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-muted)", marginBottom: "16px" }}>
                This video is selected specifically for women evaluating hormone support around
                menopause and estrogen changes.
              </p>
            </div>
          </FadeIn>

          <div style={{ marginTop: "14px", display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}>
            {womenVideo ? (
              <FadeIn key={womenVideo.id}>
                <article style={{ background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "8px", overflow: "hidden" }}>
                  <iframe
                    src={womenVideo.embedUrl}
                    title={womenVideo.title}
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "16 / 9", border: "none", background: "#000" }}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: "14px 16px" }}>
                    <h3 style={{ fontSize: "0.88rem", lineHeight: 1.45, color: "var(--color-ink)", margin: 0 }}>{womenVideo.title}</h3>
                  </div>
                </article>
              </FadeIn>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
