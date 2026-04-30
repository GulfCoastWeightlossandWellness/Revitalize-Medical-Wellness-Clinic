import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ServicePage from "@/components/ServicePage";
import { getHubVideos } from "@/lib/contentHub";

export const metadata: Metadata = {
  title: "Hormone Therapy for Men | Testosterone Optimization | Columbus & Warner Robins, GA",
  description:
    "Men's hormone therapy at Revitalize in Columbus and Warner Robins, Georgia. Bioidentical testosterone pellet therapy for low energy, muscle loss, weight gain, and reduced libido. Travis Woodley, CRNP.",
};

export default function HormoneTherapyMen() {
  const menVideo = getHubVideos().find((video) =>
    /testosterone|bhrt/i.test(video.title)
  );
  return (
    <>
      <ServicePage
        hero={{
        eyebrow: "Men's Health — Columbus & Warner Robins, GA",
        headline: "Hormone Therapy<br /><em>for Men</em>",
        subheadline: "Lab-guided testosterone optimization using the Biote pellet method. If your energy, drive, or body composition has shifted in ways that feel beyond explanation, your hormones may be part of the answer.",
        heroKeyword: "Hormone Therapy for Men Columbus GA",
      }}
      intro={{
        problem: "Most men attribute the changes they feel in their 40s and 50s — the fatigue, the weight that won't budge, the low motivation, the loss of muscle, the declining sex drive — to 'getting older.' Some of that is true. A lot of it isn't. Low testosterone affects a significant number of men in mid-life, and the symptoms are often dismissed or misattributed. A simple blood panel can clarify what's actually driving the shift. Many men are surprised to learn how far their levels have fallen and how much that explains.",
        what: "Testosterone hormone therapy for men uses bioidentical hormones — identical in molecular structure to what your testes produce — to restore levels to an optimal range. At Revitalize, we use the Biote pellet method: a grain-of-rice-sized pellet is inserted subcutaneously and dissolves gradually over three to five months, releasing testosterone at a stable rate. No daily injections. No topical creams that can transfer to partners or children. No compliance issues.",
        how: "We begin with a clinical consultation and a comprehensive hormone panel that looks beyond just total testosterone — we evaluate free testosterone, SHBG, estradiol, DHEA, PSA, CBC, and metabolic markers. Your dose is calculated based on your labs, your symptom severity, and your body weight and composition. We perform the insertion procedure in-office — typically under fifteen minutes — and schedule your first re-assessment at three to five months. Dosing is adjusted at every cycle based on your response.",
      }}
      candidacy={{
        good: [
          "Men with confirmed low testosterone on lab work, with corresponding symptoms",
          "Those experiencing fatigue, reduced motivation, or difficulty with body composition despite consistent exercise",
          "Men with decreased libido or changes in sexual function not explained by other causes",
          "Those who prefer a low-maintenance delivery method over daily pills or frequent injections",
          "Men with mood changes, irritability, or difficulty with stress management",
        ],
        notFor: [
          "Men with active prostate cancer or elevated PSA requiring further evaluation",
          "Those with polycythemia (elevated red blood cell count) — requires hematology coordination",
          "Men with untreated sleep apnea — this should be addressed before starting TRT",
          "Those with specific cardiovascular conditions requiring specialist clearance",
          "Men who have not had a clinical consultation and baseline labs",
        ],
      }}
      whatToExpect={[
        "Comprehensive consultation: We review your symptoms, health history, medications, and goals. We discuss the realistic timeline for improvement and set accurate expectations — this is not a quick fix, but the results for appropriate candidates are significant.",
        "Lab review: We go through your hormone panel in detail. Not just whether your numbers fall within the 'normal range' — but whether they are optimal for how you want to feel and function.",
        "Pellet insertion: A brief in-office procedure under local anesthetic. Most men describe it as far less uncomfortable than anticipated. The pellet is placed in the upper buttock area and dissolves over three to five months.",
        "First two to four weeks: Testosterone levels begin rising. Some men notice improved sleep and energy early. Others take a full four to six weeks before noticing significant changes.",
        "Three to five month re-assessment: Labs are drawn and we review how you are feeling. Dosing is adjusted for the next cycle. Most men find their optimal dose within two or three cycles.",
      ]}
      relatedServices={[
        { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Erectile Dysfunction Treatment", href: "/services/erectile-dysfunction" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
      ]}
      relatedPosts={[
        { title: "Signs Your Hormones Are Out of Balance", href: "/blog/signs-hormones-out-of-balance" },
        { title: "Why Your Energy Crashed in Your 40s and What to Do About It", href: "/blog/energy-crashed-40s" },
        { title: "What Is Biote Pellet Therapy and How Does It Work", href: "/blog/biote-pellet-therapy-explained" },
        { title: "What to Expect at Your First Hormone Consultation", href: "/blog/first-hormone-consultation" },
        { title: "Symptom Guide: Persistent Fatigue", href: "/symptoms/low-energy" },
        { title: "Symptom Guide: Low Libido", href: "/symptoms/low-libido" },
        { title: "Symptom Guide: Brain Fog", href: "/symptoms/brain-fog" },
      ]}
      faqs={[
        {
          q: "How quickly does testosterone therapy work?",
          a: "Most men begin noticing improved sleep and energy within two to four weeks of pellet insertion. Libido and mood improvements often follow within four to six weeks. Body composition changes — more muscle, less fat — typically emerge after consistent optimization over two to three cycles. The first cycle establishes your baseline response. Subsequent cycles refine the dose.",
        },
        {
          q: "Is testosterone therapy safe?",
          a: "Testosterone therapy for confirmed low testosterone, properly monitored, has a well-established safety record. The key word is 'monitored' — we track PSA, CBC, estradiol, and other markers at every follow-up. We do not prescribe testosterone for men who do not have a clinical need, and we do not continue therapy in men whose labs suggest it is no longer appropriate. Individual risk profiles vary, which is why the consultation and ongoing monitoring are non-negotiable.",
        },
        {
          q: "Will testosterone therapy affect my fertility?",
          a: "Exogenous testosterone can suppress the natural hormonal signal that drives sperm production. If you are actively trying to father children, testosterone replacement therapy requires a different approach or a conversation with a reproductive specialist. Please bring this up during your consultation — it is important and manageable with the right coordination.",
        },
        {
          q: "What is the difference between Biote pellets and testosterone injections?",
          a: "Injections produce a peak-and-trough hormone pattern — levels spike after injection and fall before the next one. Many men experience mood and energy fluctuations as a result. Pellets provide a continuous, steady release that more closely mimics natural hormone secretion. They also require no compliance effort — no injection schedule to track. The tradeoff is that pellet dosing cannot be adjusted mid-cycle; with injections, the dose can be changed more quickly.",
        },
        {
          q: "Will my body stop making testosterone on its own?",
          a: "Exogenous testosterone will suppress your natural production while the pellet is active. For most men on a standard TRT protocol, this is expected and managed. If you decide to discontinue therapy, your natural production typically resumes, though it may take several months. This is something we discuss in detail at your consultation.",
        },
        {
          q: "Do you offer men's hormone therapy at both Columbus and Warner Robins?",
          a: "Yes. Testosterone pellet therapy and men's hormone optimization are available at both our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
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
                src="/images/generated/mens-hormone-consult-v1.png"
                alt="Men's hormone consultation reviewing testosterone and metabolic trends on a tablet"
                width={1024}
                height={576}
                quality={82}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 68vw, 760px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </FadeIn>
        }
        disclaimer="Medical information on this page is educational and does not constitute medical advice. Consultation and lab work are required to determine candidacy for testosterone therapy. Individual results vary. Not all patients are appropriate candidates for hormone therapy. Testosterone therapy is not appropriate for men with active hormone-sensitive cancers or certain cardiovascular conditions without specialist coordination."
        pageHref="/services/hormone-therapy-men"
        pageName="Hormone Therapy for Men"
        assessmentCta={{ label: "Hormone Health Self-Assessment", href: "/tools" }}
      />

      {menVideo ? (
        <section style={{ background: "var(--color-bg)", padding: "0 clamp(24px, 6vw, 80px) 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ padding: "18px 18px 0" }}>
                  <div className="eyebrow" style={{ marginBottom: "10px" }}>Men's hormone education video</div>
                </div>
                <iframe
                  src={menVideo.embedUrl}
                  title={menVideo.title}
                  loading="lazy"
                  style={{ width: "100%", aspectRatio: "16 / 9", border: "none", background: "#000" }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
                <div style={{ padding: "14px 16px 18px" }}>
                  <h3 style={{ fontSize: "0.88rem", lineHeight: 1.45, color: "var(--color-ink)", margin: 0 }}>
                    {menVideo.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ) : null}
    </>
  );
}
