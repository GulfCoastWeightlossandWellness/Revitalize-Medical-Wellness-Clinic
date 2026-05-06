import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ServicePage from "@/components/ServicePage";
import { getHubVideos } from "@/lib/contentHub";

export const metadata: Metadata = {
  title:
    "Men's Hormone Therapy Columbus GA | Testosterone Injections & Pellets | Revitalize",
  description:
    "Men's testosterone replacement therapy in Columbus and Warner Robins, GA. Both delivery methods — weekly testosterone injections (cypionate or enanthate) and Biote pellets. Lab-guided protocols by Travis Woodley, MSN, RN, CRNP.",
  keywords: [
    "hormone therapy for men Columbus GA",
    "testosterone replacement therapy Columbus GA",
    "TRT Columbus Georgia",
    "TRT Warner Robins GA",
    "testosterone injections Columbus GA",
    "testosterone injections Warner Robins",
    "testosterone cypionate Columbus",
    "testosterone enanthate Georgia",
    "weekly TRT injection clinic",
    "testosterone pellets men Columbus",
    "Biote pellets men Warner Robins",
    "low T treatment Columbus",
    "low T treatment Warner Robins",
    "men's hormone clinic Columbus",
    "men's hormone clinic Warner Robins",
    "Biote pellet provider men",
    "Travis Woodley TRT",
  ],
};

export default function HormoneTherapyMen() {
  const menVideo = getHubVideos().find((video) =>
    /testosterone|bhrt/i.test(video.title)
  );

  // Hub-page MedicalProcedure schema. Distinct from the deeper-page schemas
  // on /services/testosterone-injection-therapy and /services/biote-pellet-therapy
  // — this one describes the broader TRT consultation that branches into
  // either delivery method at the treatment-plan visit.
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Men's Testosterone Replacement Therapy",
    procedureType: "Therapeutic",
    bodyLocation: "Endocrine system",
    howPerformed:
      "Lab-guided testosterone replacement therapy with two delivery options: weekly testosterone injections (cypionate or enanthate, intramuscular or subcutaneous, with self-injection training) or Biote subcutaneous pellet therapy (in-office insertion every 3-5 months). Delivery method is selected at the treatment-plan visit based on the patient's lab pattern (SHBG, free testosterone, estradiol), lifestyle, and preference.",
    indication: {
      "@type": "MedicalIndication",
      name: "Lab-confirmed low testosterone with corresponding clinical symptoms in adult men (low energy, low libido, body composition changes, mood disturbance, recovery deficits).",
    },
    preparation:
      "Comprehensive hormone panel including total testosterone, free testosterone, SHBG, estradiol, DHEA, PSA, CBC, and metabolic markers. Clinical consultation reviewing symptoms, history, medications, and goals. Discussion of pellet vs. injection delivery methods.",
    followup:
      "Follow-up labs at 8-12 weeks (injections) or 3-5 months (pellets) to assess response and titrate dose. Ongoing monitoring of testosterone, free testosterone, hematocrit, estradiol, and PSA at intervals appropriate to the chosen protocol.",
    performer: {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "MSN, RN, CRNP",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <ServicePage
        hero={{
        eyebrow: "Men's Health — Columbus & Warner Robins, GA",
        headline: "Hormone Therapy<br /><em>for Men</em>",
        subheadline: "Lab-guided testosterone replacement therapy — both weekly injections (cypionate or enanthate) and Biote pellets. Travis runs both protocols and matches the delivery method to your physiology, lifestyle, and goals. Not a one-size-fits-all program.",
        heroKeyword: "Hormone Therapy for Men Columbus GA",
      }}
      intro={{
        problem: "Most men attribute the changes they feel in their 40s and 50s — the fatigue, the weight that won't budge, the low motivation, the loss of muscle, the declining sex drive — to 'getting older.' Some of that is true. A lot of it isn't. Low testosterone affects a significant number of men in mid-life, and the symptoms are often dismissed or misattributed. A simple blood panel can clarify what's actually driving the shift. Many men are surprised to learn how far their levels have fallen and how much that explains.",
        what: "Testosterone replacement therapy uses bioidentical testosterone — identical in molecular structure to what your testes produce — to restore levels to an optimal range. At Revitalize, Travis offers two delivery methods, and they are equally legitimate options: weekly testosterone injections (cypionate or enanthate, intramuscular or subcutaneous, with self-injection training) and Biote pellet therapy (a grain-of-rice-sized pellet inserted subcutaneously every three to five months for steady release). About half our male TRT patients choose injections; about half choose pellets. The right answer depends on your labs, your lifestyle, your preference for dose flexibility, and how you want to manage the protocol week-to-week. We walk through both at the consultation.",
        how: "We start the same way every TRT conversation should start: a comprehensive hormone panel and an honest clinical conversation. Total testosterone, free testosterone, SHBG, estradiol, DHEA, PSA, CBC, and a full metabolic panel. From the labs we can see which delivery method actually fits your physiology — men with high SHBG, for example, often do better on weekly injections because the dose can be tuned to push free T higher. Men with stable lab patterns who prefer set-it-and-forget-it convenience often do better on pellets. We discuss the tradeoffs of each, you choose, and we calibrate dose at the first 8-12 week reassessment based on the data and how you feel.",
      }}
      candidacy={{
        good: [
          "Men with confirmed low testosterone on lab work, with corresponding symptoms",
          "Those experiencing fatigue, reduced motivation, or difficulty with body composition despite consistent exercise",
          "Men with decreased libido or changes in sexual function not explained by other causes",
          "Men with mood changes, irritability, or difficulty with stress management",
          "Men with high SHBG or unfavorable free-T patterns where weekly injections allow tighter titration of free T",
          "Men who travel frequently and want a portable, schedule-flexible injection protocol",
          "Men who prefer a set-it-and-forget-it pellet protocol with no weekly injection task",
          "Men who have tried one delivery method and want to try the other — switching is straightforward",
        ],
        notFor: [
          "Men with active prostate cancer or elevated PSA requiring further evaluation",
          "Those with polycythemia (elevated red blood cell count) — requires hematology coordination",
          "Men with untreated sleep apnea — this should be addressed before starting TRT",
          "Those with specific cardiovascular conditions requiring specialist clearance",
          "Men actively trying to father children — TRT (any form) suppresses sperm production; reproductive coordination required",
          "Men who have not had a clinical consultation and baseline labs",
        ],
      }}
      whatToExpect={[
        "Comprehensive consultation: We review your symptoms, health history, medications, and goals. We walk through both delivery methods — pellets and injections — in detail so you can make an informed choice. We also discuss the realistic timeline for improvement and set accurate expectations.",
        "Lab work: Full hormone panel — total and free testosterone, SHBG, estradiol, DHEA, PSA, CBC, metabolic markers. We review every value with you, not just the testosterone number. The lab pattern often points to which delivery method will work better for your physiology.",
        "Treatment plan: Together we choose pellet or injection therapy. For pellets: dose, insertion scheduling, expected cycle length. For injections: ester (cypionate or enanthate), specific dose, weekly or bi-weekly cadence, route (intramuscular or subcutaneous).",
        "Initiation visit: Pellet patients have a brief in-office insertion procedure (~15 minutes, well-tolerated). Injection patients receive in-office self-injection training (~15-20 minutes) and complete their first injection under supervision.",
        "First two to six weeks: Testosterone levels begin to optimize. Most men notice improved sleep and energy early. Mood and libido improvements often follow within four to six weeks.",
        "8-12 week reassessment (injections) or 3-5 month reassessment (pellets): Labs are repeated, dose is calibrated based on your response. This is where the precision happens. Most men find their optimal protocol within the first two cycles.",
        "Ongoing monitoring: Labs at intervals appropriate to your protocol. We track testosterone, hematocrit, estradiol, PSA. We adjust as needed. This is a long-term clinical relationship for both delivery methods, not a prescription handoff.",
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
          q: "Should I choose testosterone injections or pellets?",
          a: "Both are legitimate, both work well in the right patient — the right choice depends on your labs, your lifestyle, and your preference. Injections give you tight dose control, work especially well for men with high SHBG (where free T is the issue), and are portable for men who travel. Pellets are set-it-and-forget-it: one in-office insertion every 3-5 months, no weekly task, very steady levels. About half of Travis's male TRT patients pick injections; about half pick pellets. We walk through the tradeoffs with your labs in front of us at the consultation. If you start on one and want to switch, that is straightforward — many patients do.",
        },
        {
          q: "What is the difference between Biote pellets and testosterone injections in practice?",
          a: "Pellets release testosterone continuously over 3-5 months — very steady levels, mimics physiologic secretion, no weekly maintenance. The tradeoff is that the dose cannot be adjusted mid-cycle; once the pellet is in, it dissolves on its own schedule. Injections produce a more pronounced peak-and-trough pattern (smaller with weekly dosing, larger with bi-weekly), but the dose can be tuned week-to-week. Injections also let us push free T harder in patients with high SHBG, where pellets sometimes leave free T below optimal. The cost structures differ too — we discuss specifics at consultation.",
        },
        {
          q: "How quickly does testosterone therapy work?",
          a: "Most men begin noticing improved sleep and energy within two to four weeks of starting either injections or pellets. Libido and mood improvements often follow within four to six weeks. Body composition changes — more muscle, less fat — typically emerge after consistent optimization over 2-3 cycles. The first cycle (8-12 weeks for injections, 3-5 months for pellets) establishes your baseline response. Subsequent cycles refine the dose.",
        },
        {
          q: "Is testosterone therapy safe?",
          a: "Testosterone therapy for confirmed low testosterone, properly monitored, has a well-established safety record. The key word is 'monitored' — we track PSA, CBC, hematocrit, estradiol, and other markers at every follow-up regardless of which delivery method you're on. We do not prescribe testosterone for men who do not have a clinical need, and we do not continue therapy in men whose labs suggest it is no longer appropriate. Individual risk profiles vary, which is why the consultation and ongoing monitoring are non-negotiable.",
        },
        {
          q: "Will testosterone therapy affect my fertility?",
          a: "Yes — exogenous testosterone (any form, pellets or injections) suppresses the natural hormonal signal that drives sperm production. If you are actively trying to father children, TRT requires a different approach or coordination with a reproductive specialist. Please bring this up during your consultation — it is important and manageable with the right coordination, but it changes the protocol.",
        },
        {
          q: "Will my body stop making testosterone on its own?",
          a: "Exogenous testosterone will suppress your natural production while you're on therapy — true for both pellets and injections. For most men on a standard TRT protocol, this is expected and managed. If you decide to discontinue therapy, your natural production typically resumes over several months. This is something we discuss in detail at your consultation.",
        },
        {
          q: "Do you offer men's hormone therapy at both Columbus and Warner Robins?",
          a: "Yes. Both delivery methods — testosterone injections and Biote pellet therapy — are available at our Columbus, GA location (762) 261-3880 and our Warner Robins, GA location (478) 366-1244. Travis sees patients at both clinics on a published rotating schedule.",
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

      {/* Two delivery methods: pellets vs injections — side-by-side decision support */}
      <section id="choose-method" style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)", scrollMarginTop: "80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: "40px", maxWidth: "780px" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>Choose your delivery method</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "20px" }}>
                Testosterone injections vs. Biote pellets — both work, the right one depends on you.
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)" }}>
                Most online conversations about TRT treat the delivery method as a religious choice. In clinical practice, the answer is more boring: pellets work better for some patients, injections work better for others, and the right choice comes from the lab pattern, the lifestyle, and the individual&apos;s preference. Travis runs both protocols at roughly equal volume.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="trt-compare-grid">
            {[
              {
                title: "Testosterone Injections",
                href: "/services/testosterone-injection-therapy",
                pros: [
                  "Tight dose control — adjust weekly if needed",
                  "Better lever for patients with high SHBG, where free T is the issue",
                  "Lower per-cycle cost in many cases",
                  "Portable — fits a travel-heavy lifestyle",
                  "Cypionate or enanthate, intramuscular or subcutaneous — flexible to your physiology",
                ],
                cons: [
                  "Requires self-injection (15-second weekly task once trained)",
                  "More follow-up labs early on to dial in the dose",
                  "Bi-weekly dosing creates more noticeable peak-and-trough fluctuation than weekly",
                ],
              },
              {
                title: "Biote Pellet Therapy",
                href: "/services/biote-pellet-therapy",
                pros: [
                  "One in-office procedure every 3-5 months — no daily or weekly maintenance",
                  "Steady, physiologic hormone levels with minimal peak-and-trough swing",
                  "No injection technique to learn",
                  "Good fit for patients with stable lab patterns and low SHBG",
                  "Travis is a Certified Platinum Biote provider",
                ],
                cons: [
                  "Cannot adjust dose mid-cycle — once the pellet is in, it dissolves on its own schedule",
                  "Minor in-office procedure each cycle (about 15 minutes, well-tolerated)",
                  "Less responsive to short-term lab adjustments",
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
