import type { Metadata } from "next";
import Image from "next/image";
import ServicePage from "@/components/ServicePage";
import FadeIn from "@/components/FadeIn";
import { getHubVideos } from "@/lib/contentHub";

export const metadata: Metadata = {
  title: "Hormone Therapy for Women | Biote Pellets | Columbus & Warner Robins, GA",
  description:
    "Women's hormone therapy at Revitalize in Columbus and Warner Robins, Georgia. Bioidentical Biote pellet therapy for perimenopause, menopause, fatigue, low libido, and brain fog. Led by Travis Woodley, CRNP.",
};

export default function HormoneTherapyWomen() {
  const womenVideo = getHubVideos().find((video) =>
    /estrogen|menopause/i.test(video.title)
  );
  return (
    <>
      <ServicePage
        hero={{
        eyebrow: "Women's Health — Columbus & Warner Robins, GA",
        headline: "Hormone Therapy<br /><em>for Women</em>",
        subheadline: "Bioidentical hormone optimization for perimenopause, menopause, and mid-life imbalance. Lab-guided, clinician-supervised, and delivered via the Biote pellet method at Revitalize in Columbus and Warner Robins, Georgia.",
        heroKeyword: "Hormone Therapy for Women Columbus GA",
      }}
      intro={{
        problem: "If you are sleeping poorly, gaining weight without explanation, losing your focus, feeling emotionally flat, or watching your libido fade — these are not signs of getting older. They are signs that your hormone levels have shifted, and that shift is measurable. Most women in their 40s and 50s have never had a hormone panel done with any clinical precision. They have been told their labs are 'normal' while they feel anything but.",
        what: "Bioidentical hormone therapy uses hormones that are structurally identical to those your body produces. At Revitalize, we use the Biote pellet method — tiny, rice-grain-sized pellets inserted subcutaneously that release hormones steadily over three to five months. There are no daily pills, no patches to forget, no peaks and crashes. The hormones dissolve completely. Nothing is left behind.",
        how: "Every woman's treatment begins with a comprehensive consultation and selective lab work. We are not looking for 'normal ranges' — we are looking for optimal ranges relative to your symptoms and goals. We review your complete history, including medications, sleep patterns, stress load, and prior hormone-related concerns. If pellet therapy is appropriate for you, we proceed with the insertion procedure — brief, performed under local numbing, and typically completed in under fifteen minutes. You leave with a wound care plan and a follow-up schedule. Most women are re-assessed every three to five months.",
      }}
      candidacy={{
        good: [
          "Women in perimenopause or menopause experiencing fatigue, brain fog, hot flashes, or night sweats",
          "Those with unexplained weight gain, sleep disruption, or mood changes not explained by other conditions",
          "Women experiencing decreased libido or changes in sexual responsiveness",
          "Those who prefer a low-maintenance delivery method over daily pills or patches",
          "Patients who have had prior hormone therapy and want a more consistent approach",
        ],
        notFor: [
          "Current or recent diagnosis of hormone-sensitive cancers — requires physician coordination",
          "Active blood clots or history of thromboembolic disease without specialist clearance",
          "Pregnancy or those actively trying to conceive",
          "Certain medical conditions that require evaluation before proceeding",
          "Those who have not had a clinical consultation and baseline labs",
        ],
      }}
      whatToExpect={[
        "Initial consultation: We review your symptom history, health background, and goals. You may have labs drawn at this visit or prior — we will review them together and explain what we are actually seeing.",
        "Candidacy review: If pellet therapy is appropriate, we walk through the procedure, the expected timeline for effects, and what your follow-up schedule will look like. No treatment is recommended before this conversation.",
        "Pellet insertion: A brief in-office procedure using local numbing. A small incision is made — typically in the upper buttock area — and the pellet is placed. The incision is closed with a small bandage. Most patients describe minor soreness for a day or two.",
        "Recovery: You will receive post-procedure instructions including activity modifications for the first week. No swimming, hot tubs, or heavy lower-body exercise for a specified period.",
        "Follow-up and re-assessment: Most women return for labs and clinical re-assessment at three to five months, depending on individual response. Dosing is adjusted at each cycle based on how you are feeling and what your labs show.",
      ]}
      relatedServices={[
        { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
        { name: "O-Shot (Sexual Wellness)", href: "/services/o-shot" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
      ]}
      relatedPosts={[
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
          q: "How long before I feel a difference from hormone pellet therapy?",
          a: "Most women begin noticing changes in sleep and energy within the first two to four weeks after pellet insertion. Mood stabilization and libido improvement often follow over the next four to eight weeks. Full optimization — meaning the dose has been calibrated to your biology — typically occurs after the second or third pellet cycle. Every woman's timeline is different, and we set honest expectations at your consultation.",
        },
        {
          q: "How is Biote different from hormone patches or pills?",
          a: "Biote pellets release a consistent, low-level dose of hormones around the clock, which more closely mimics what your ovaries produced when they were functioning optimally. Pills pass through the liver and can cause dose fluctuations. Patches require daily or twice-weekly attention and can fall off. Pellets require no daily compliance — they simply work in the background. For most women, this results in more stable mood and energy compared to other delivery methods.",
        },
        {
          q: "Do I need labs before starting hormone therapy?",
          a: "Yes. A baseline hormone panel is essential before we make any recommendations. Without knowing where your levels are, any dosing decision would be a guess. Labs typically include estradiol, testosterone, DHEA, SHBG, thyroid markers, and a metabolic panel, among others. We review these results with you in detail — not just a pass/fail, but an explanation of what each value means for how you are feeling.",
        },
        {
          q: "Are there risks to bioidentical hormone therapy?",
          a: "As with any medical treatment, there are risks and contraindications, which is exactly why we conduct a thorough consultation and labs before making any recommendation. Bioidentical hormones carry a different risk profile than synthetic hormone preparations, but they are not risk-free. We discuss your personal and family medical history carefully to identify any concerns before proceeding. Individual results and safety profiles vary.",
        },
        {
          q: "Can I continue my other medications while on hormone therapy?",
          a: "In most cases, yes — but this is a clinical question that requires a full medication review during your consultation. Certain medications interact with hormone metabolism and may affect dosing or candidacy. Please bring a complete medication list to your first appointment.",
        },
        {
          q: "Do you offer hormone therapy at both Columbus and Warner Robins locations?",
          a: "Yes. Women's hormone therapy and Biote pellet therapy are available at our Columbus, Georgia and Warner Robins, Georgia locations. Call (762) 261-3880 for Columbus or (478) 366-1244 for Warner Robins to schedule a consultation.",
        },
        {
          q: "Will hormone therapy help with weight loss?",
          a: "Hormonal imbalance is frequently a contributing factor to mid-life weight gain — particularly when estrogen and testosterone decline, which shifts body composition toward increased fat storage and reduced muscle mass. Optimizing hormone levels can make diet and exercise more effective. However, hormone therapy alone is not a weight loss treatment. For patients with significant metabolic concerns, we often coordinate hormone optimization with our medical weight loss program.",
        },
        {
          q: "What happens if the dose isn't right the first time?",
          a: "This is very common, particularly in the first pellet cycle. Your initial dose is calibrated to your labs and symptom severity, but every patient metabolizes hormones differently. If your follow-up labs or symptoms suggest the dose needs adjustment, we correct this at your next insertion. Getting the dose right is a process, and we set this expectation clearly upfront.",
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
      />

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
