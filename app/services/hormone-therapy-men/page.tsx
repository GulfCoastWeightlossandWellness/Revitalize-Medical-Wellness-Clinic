import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ServicePage from "@/components/ServicePage";
import { getHubVideos } from "@/lib/contentHub";

export const metadata: Metadata = {
  title:
    "Hormone Therapy for Men | Testosterone Pellets & Injections | Columbus & Warner Robins, GA",
  description:
    "Men's hormone therapy at Revitalize in Columbus and Warner Robins, GA. Bioidentical testosterone pellet therapy AND testosterone injections — choose the delivery method that fits. Travis Woodley, MSN, RN, CRNP.",
  keywords: [
    "hormone therapy for men Columbus GA",
    "testosterone optimization Warner Robins",
    "testosterone pellets men Columbus",
    "testosterone injections Columbus GA",
    "TRT Columbus Georgia",
    "low T treatment Warner Robins",
    "men's hormone clinic Columbus",
    "Biote pellet provider men",
    "Travis Woodley TRT",
  ],
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
        { name: "Testosterone Injection Therapy", href: "/services/testosterone-injection-therapy" },
        { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Erectile Dysfunction Treatment", href: "/services/erectile-dysfunction" },
        { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
      ]}
      relatedPosts={[
        { title: "Andropause — Male Hormonal Transition in Midlife", href: "/blog/andropause-male-hormonal-transition" },
        { title: "Erectile Dysfunction and Hormones — The Clinical Connection", href: "/blog/erectile-dysfunction-hormones-connection" },
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

      {/* Two delivery methods: pellets vs injections */}
      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "40px", maxWidth: "740px" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Two delivery methods</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "20px" }}>
                Pellets and injections — both legitimate, neither one universally better.
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)" }}>
                Most online conversations about TRT treat the delivery method as a religious choice. In clinical practice, the answer is more boring: pellets work better for some patients, injections work better for others, and the right choice comes from the lab pattern, the lifestyle, and the individual&apos;s preference. I run both protocols.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="trt-compare-grid">
            {[
              {
                title: "Biote Pellets",
                href: "/services/biote-pellet-therapy",
                pros: [
                  "One in-office procedure every 3-5 months — no daily or weekly maintenance",
                  "Steady, physiologic hormone levels with minimal peak-and-trough swing",
                  "No injection technique to learn",
                  "Good fit for patients with stable lab patterns and low SHBG",
                ],
                cons: [
                  "Cannot adjust dose mid-cycle — once the pellet is in, it dissolves on its own schedule",
                  "Minor in-office procedure each cycle (about 15 minutes, well-tolerated)",
                  "Less responsive to short-term lab adjustments",
                ],
              },
              {
                title: "Injection Therapy",
                href: "/services/testosterone-injection-therapy",
                pros: [
                  "Tight dose control — adjust weekly if needed",
                  "Better lever for patients with high SHBG, where free T is the issue",
                  "Lower per-cycle cost in many cases",
                  "Portable — fits a travel-heavy lifestyle",
                ],
                cons: [
                  "Requires self-injection (15-second weekly task once trained)",
                  "More follow-up labs early on to dial in the dose",
                  "Bi-weekly dosing creates more noticeable peak-and-trough fluctuation",
                ],
              },
            ].map((m) => (
              <FadeIn key={m.title}>
                <div style={{ background: "#fff", borderRadius: "8px", padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "16px" }}>{m.title}</h3>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, marginBottom: "10px" }}>What works well</div>
                  <ul style={{ paddingLeft: "18px", marginBottom: "20px" }}>
                    {m.pros.map((p, i) => (
                      <li key={i} style={{ fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "6px" }}>{p}</li>
                    ))}
                  </ul>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "10px" }}>Honest tradeoffs</div>
                  <ul style={{ paddingLeft: "18px", marginBottom: "24px", flex: 1 }}>
                    {m.cons.map((c, i) => (
                      <li key={i} style={{ fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "6px" }}>{c}</li>
                    ))}
                  </ul>
                  <Link href={m.href} style={{ display: "inline-block", background: "var(--color-teal)", color: "#fff", padding: "11px 20px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
                    Full {m.title} Page →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-muted)", marginTop: "32px", maxWidth: "780px" }}>
              At your consultation we walk through both options with your labs and your situation in front of us. Some men try one, run it for a cycle, and switch. That is normal. The point is to land on the protocol that produces the result — not to defend a delivery method.
            </p>
          </FadeIn>
        </div>
        <style>{`@media (max-width: 768px) { .trt-compare-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

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
