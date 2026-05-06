import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ServicePage from "@/components/ServicePage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Testosterone Injection Therapy Columbus GA | Cypionate & Enanthate | Revitalize",
  description:
    "Weekly testosterone injection therapy in Columbus and Warner Robins, GA. Cypionate and enanthate protocols, intramuscular or subcutaneous, self-injection training, lab-guided dosing, estradiol management. Travis Woodley, MSN, RN, CRNP — also a Certified Platinum Biote provider.",
  keywords: [
    "testosterone injection therapy Columbus GA",
    "testosterone injections Columbus GA",
    "testosterone injections Warner Robins",
    "testosterone injections Warner Robins GA",
    "testosterone cypionate Columbus",
    "testosterone cypionate Warner Robins",
    "testosterone enanthate Georgia",
    "TRT injection clinic Columbus",
    "TRT injections Warner Robins",
    "weekly testosterone injection protocol",
    "bi-weekly testosterone injection",
    "self-injection testosterone training",
    "subcutaneous testosterone injection Columbus",
    "intramuscular testosterone Warner Robins",
    "Travis Woodley TRT Columbus",
    "men's TRT clinic Georgia",
    "high SHBG TRT Columbus",
  ],
};

export default function TestosteroneInjectionTherapyPage() {
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Testosterone Injection Therapy",
    procedureType: "Therapeutic",
    bodyLocation: "Endocrine system",
    howPerformed:
      "Intramuscular or subcutaneous injection of testosterone cypionate or enanthate, delivered on a weekly or bi-weekly schedule, with self-injection training provided. Dose calibrated to lab values and patient response.",
    indication: {
      "@type": "MedicalIndication",
      name: "Lab-confirmed low testosterone with corresponding clinical symptoms in adult men",
    },
    preparation:
      "Comprehensive hormone panel including total and free testosterone, SHBG, estradiol, DHEA, PSA, CBC, and metabolic markers. Clinical consultation reviewing symptoms, history, and goals.",
    followup:
      "Follow-up labs at 8-12 weeks after initiation to assess response and titrate dose. Ongoing monitoring of testosterone levels, hematocrit, estradiol, and PSA at intervals appropriate to the protocol.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(procedureSchema),
        }}
      />
      <ServicePage
        hero={{
          eyebrow: "Men's Hormone Therapy — Columbus & Warner Robins, GA",
          headline:
            "Testosterone Injection<br /><em>Therapy</em>",
          subheadline:
            "Lab-guided testosterone replacement using injection-based delivery — cypionate or enanthate, weekly or bi-weekly, with self-injection training. For men who want the precision and dose flexibility that injections provide.",
          heroKeyword: "Testosterone Injection Therapy Columbus GA",
        }}
        intro={{
          problem:
            "Most men with low testosterone are told they have two options: do nothing, or jump on a generic protocol with no real follow-up. Neither one fits how I practice. Injection therapy works for a specific kind of patient — the one who wants tight dose control, fast titration, and the option to manage their own delivery between visits. Done right, it produces stable energy, recovery, and body composition without the swings men hear about. Done wrong, it produces the same swings, plus elevated hematocrit, suppressed natural production, and side effects nobody warned about. The difference is the protocol and the monitoring.",
          what: "Testosterone injection therapy uses bioidentical testosterone esters — cypionate or enanthate — administered intramuscularly or subcutaneously on a defined schedule. The two esters behave very similarly in most patients; the choice often comes down to availability, half-life nuance, and patient preference. Weekly dosing produces tighter levels and is what I typically recommend; bi-weekly is acceptable for some patients but produces a more pronounced peak-and-trough pattern. Self-injection training is part of the program. Once you understand the technique, the maintenance is fifteen seconds a week.",
          how: "We start the same way every TRT conversation should start: a comprehensive hormone panel and an honest clinical conversation. Total testosterone, free testosterone, SHBG, estradiol, DHEA, PSA, CBC, and a full metabolic panel. We talk through your symptoms, your history, your goals, and the specific tradeoffs between pellets and injections so you can make an informed choice. Once we initiate, the first follow-up labs run at 8-12 weeks. Dose is calibrated based on the data and how you actually feel — not based on what is convenient for the protocol.",
        }}
        candidacy={{
          good: [
            "Men with confirmed low testosterone on lab work plus corresponding symptoms",
            "Patients who want tight dose control and the ability to titrate quickly",
            "Men comfortable with self-injection (or willing to learn — the training is straightforward)",
            "Patients who have tried pellet therapy and want to try a different delivery method",
            "Men who travel frequently and want a portable, schedule-flexible protocol",
            "Patients with specific lab patterns (e.g., high SHBG) where injection dosing produces better free T",
          ],
          notFor: [
            "Men with active prostate cancer or unevaluated PSA elevation",
            "Patients with polycythemia (elevated hematocrit) without hematology coordination",
            "Untreated obstructive sleep apnea — should be evaluated before starting TRT",
            "Men actively trying to father children — injection TRT will suppress sperm production",
            "Patients unwilling to commit to follow-up labs (this is non-negotiable on injection therapy)",
            "Severe needle aversion that cannot be addressed with appropriate accommodation",
          ],
        }}
        whatToExpect={[
          "Comprehensive consultation: We review your symptoms, history, medications, and goals. We discuss pellet vs injection in detail so you can choose the delivery method that actually fits your situation.",
          "Lab work: Full hormone panel — total and free testosterone, SHBG, estradiol, DHEA, PSA, CBC, metabolic panel. We review every value with you, not just the testosterone number.",
          "Treatment plan: Specific ester (cypionate vs enanthate), specific dose, specific frequency. We discuss why each choice was made for your physiology.",
          "Self-injection training: In-office, hands-on. Most patients are comfortable doing it themselves by the end of the first visit. Subcutaneous and intramuscular techniques are both taught.",
          "8-12 week reassessment: Labs are repeated. Dose is calibrated based on the data and your symptom response. This is where the precision happens.",
          "Ongoing monitoring: Labs at intervals appropriate to your protocol. We track testosterone, hematocrit, estradiol, PSA. We adjust as needed. This is a long-term clinical relationship, not a prescription handoff.",
        ]}
        relatedServices={[
          { name: "Hormone Therapy — Men", href: "/services/hormone-therapy-men" },
          { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
          { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
          { name: "Erectile Dysfunction Treatment", href: "/services/erectile-dysfunction" },
          { name: "IV Hydration Therapy", href: "/services/iv-hydration" },
        ]}
        relatedPosts={[
          { title: "Testosterone Cypionate vs Enanthate — What's the Difference and Which Is Right for You", href: "/blog/testosterone-cypionate-vs-enanthate" },
          { title: "How to Self-Inject Testosterone — A Clinical Guide from Travis Woodley", href: "/blog/how-to-self-inject-testosterone" },
          { title: "Pellets vs Injections — How I Help Men Choose the Right Testosterone Delivery Method", href: "/blog/pellets-vs-injections-testosterone" },
          { title: "Free Testosterone vs Total Testosterone — Why Your Lab Results Matter", href: "/blog/free-testosterone-vs-total-testosterone-why-your-lab-results-matter" },
          { title: "SHBG and Hormone Bioavailability — A Clinical Explanation", href: "/blog/shbg-and-hormone-bioavailability-a-clinical-explanation" },
          { title: "Andropause — Male Hormonal Transition in Midlife", href: "/blog/andropause-male-hormonal-transition" },
          { title: "Symptom Guide: Persistent Fatigue", href: "/symptoms/low-energy" },
          { title: "Symptom Guide: Low Libido", href: "/symptoms/low-libido" },
        ]}
        faqs={[
          {
            q: "What is the difference between cypionate and enanthate?",
            a: "Both are testosterone esters with very similar half-lives (approximately 7-8 days). In clinical practice, most patients respond similarly to either. Cypionate is more commonly used in the US; enanthate is more available in some international contexts. The half-life difference is small enough that most weekly dosing protocols work with either. We discuss which is appropriate for your specific situation at the consultation.",
          },
          {
            q: "How often do I need to inject?",
            a: "For most patients, I recommend weekly dosing — it produces the most stable testosterone levels and the smoothest symptom profile. Bi-weekly (every two weeks) dosing is acceptable for some patients but produces more pronounced peak-and-trough swings, which some men feel as mood and energy fluctuations. The cadence is part of the conversation we have at your treatment-plan visit.",
          },
          {
            q: "Subcutaneous vs intramuscular — which is better?",
            a: "For weekly TRT dosing, subcutaneous and intramuscular both produce comparable testosterone levels in most patients. Subcutaneous (smaller, shorter needle into the abdomen or thigh) is technically easier to self-administer, less painful for most patients, and produces a slightly smoother release. Intramuscular (longer needle into the glute or thigh) is the historically standard route. We pick based on your anatomy, your dosing volume, and your preference. Many of Travis's injection patients run subcutaneous because the technique is simpler and the experience is meaningfully more comfortable.",
          },
          {
            q: "Will I have to learn to inject myself?",
            a: "Yes, in most cases. Self-injection is a fundamental part of long-term injection-based TRT. The training takes about 15-20 minutes, we walk through both intramuscular and subcutaneous technique, and you do your first injection in the office under supervision. Almost every patient is comfortable doing it independently by the end of the first visit. If you have specific concerns or accommodations needed, we work through those during the consultation.",
          },
          {
            q: "How does Travis manage estradiol on injections?",
            a: "Estradiol typically rises in proportion to your testosterone dose and your body composition (more aromatase activity in adipose tissue means more conversion). On injection therapy we monitor estradiol at every lab draw. For most men, weekly dosing with a sensible dose produces estradiol that lands inside the optimal range without intervention. For men whose estradiol runs high — uncomfortable nipple sensitivity, water retention, mood changes — we can lower the testosterone dose, adjust frequency, or in select cases use an aromatase inhibitor. We do not use AIs prophylactically; we use them when the labs and symptoms support it.",
          },
          {
            q: "What happens if I miss a weekly dose?",
            a: "One missed dose on weekly testosterone (cypionate or enanthate, half-life ~7-8 days) is not a clinical emergency — your levels drop a bit but stay within a workable range. Take the dose as soon as you remember and resume your normal schedule. Do not double up. If you've missed multiple consecutive doses, message us before resuming so we can confirm whether you need a brief reload or just to continue normally.",
          },
          {
            q: "How quickly will I notice changes?",
            a: "Most men notice improved energy and sleep within 2-4 weeks of starting injection therapy. Mood and libido often respond in the same window. Body composition changes — muscle gain, fat loss — develop over 3-6 months as testosterone levels stabilize and the metabolic effects accumulate. The first 8-12 weeks establish your response. The labs at that point tell us whether to adjust.",
          },
          {
            q: "Can I switch from pellets to injections (or back)?",
            a: "Yes — switching delivery methods is straightforward and not uncommon in Travis's practice. Most commonly, men start on pellets, get good results, and over time decide they want tighter dose control (often because of stubborn free T issues with high SHBG). Switching means: complete your current pellet cycle, draw labs at end-of-cycle, transition to injections at the next visit. We do not insert a new pellet on top of injection therapy. The reverse — injections to pellets — is equally straightforward when injection logistics become inconvenient.",
          },
          {
            q: "Why would I choose injections over pellets?",
            a: "The main advantages of injections are dose flexibility (we can adjust week-to-week if needed) and the ability to fine-tune protocols for patients with specific lab patterns like high SHBG. Pellets offer convenience (one procedure every 3-5 months) and steadier hormone levels with no compliance burden, but they cannot be adjusted mid-cycle. Some patients try one and switch to the other; that is fine. The right delivery method depends on your physiology, your preferences, and your lifestyle.",
          },
          {
            q: "Will testosterone therapy affect my fertility?",
            a: "Yes — exogenous testosterone suppresses the natural HPG axis signal that drives sperm production. If you are actively trying to father children, injection-based TRT is not appropriate without specific fertility-preservation protocols and reproductive endocrinology coordination. Please bring this up at the consultation. There are options for men who want both fertility preservation and hormone optimization, but they require a different approach.",
          },
          {
            q: "Do you offer testosterone injection therapy at both Columbus and Warner Robins?",
            a: `Yes. Injection-based TRT is available at both our Columbus, GA location — ${SITE.phone.columbus} — and our Warner Robins, GA location — ${SITE.phone.warnerRobins}. Travis sees patients at both clinics on a published rotating schedule.`,
          },
        ]}
        disclaimer="Testosterone replacement therapy requires comprehensive lab work, in-person clinical evaluation, and ongoing monitoring. Individual responses vary. Not all patients are candidates. Testosterone therapy is contraindicated in active prostate cancer and certain cardiovascular conditions; specific patient situations require specialist coordination. This page is educational and does not substitute for clinical evaluation."
        pageHref="/services/testosterone-injection-therapy"
        pageName="Testosterone Injection Therapy"
        assessmentCta={{ label: "Hormone Health Self-Assessment", href: "/tools" }}
      />

      {/* Weekly walkthrough — what a typical week actually looks like on
          weekly TRT injections. Educational depth that the standard
          ServicePage template doesn't cover. */}
      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>What a Typical Week Looks Like</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "24px" }}>
              The rhythm of weekly TRT injections — set up to be invisible.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "28px" }}>
              The biggest concern most men have about injection therapy is that it&apos;ll dominate their week. It doesn&apos;t. Once you&apos;re trained and your dose is dialed in, the protocol is a 15-second weekly task. Here&apos;s what the rhythm of a typical week actually looks like in Travis&apos;s practice:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              {[
                {
                  day: "Injection day",
                  body: "You pick the day that fits your schedule — many patients pick Sunday morning or Monday morning so the rhythm anchors to the week. The injection itself takes about 15 seconds: alcohol swab, draw the dose, inject (subcutaneous or intramuscular based on your protocol), discard. Done.",
                },
                {
                  day: "Days 1-3 post-injection",
                  body: "Testosterone level peaks in the 24-48 hour window after injection. Most men feel this as steady energy and good sleep — not a dramatic spike. The peak with weekly cypionate or enanthate at a sensible dose is well within the optimal range for most men.",
                },
                {
                  day: "Days 4-6",
                  body: "Levels gradually decline. With weekly dosing, the trough at day 7 is still in a clinically optimal range for most patients. Mid-week is typically when men feel their best — energy, recovery, training response, libido all running well.",
                },
                {
                  day: "End of week (day 6-7)",
                  body: "The 'trough' point — your level is at its lowest for the week. Most men don't notice this because the trough is still optimal. If you DO notice mid-week-trough symptoms (energy dip, mood dip, libido dip), that's clinical data we use at the next lab to either tighten the dose, switch to twice-weekly dosing, or address with another lever.",
                },
                {
                  day: "Lab cadence",
                  body: "First labs at 8-12 weeks after starting. Then every 6-12 months once you're stable, depending on the protocol. We track total T, free T, SHBG, estradiol, hematocrit, PSA. Every lab is reviewed with you and the protocol is calibrated based on what the data shows.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderLeft: "3px solid var(--color-teal)",
                    borderRadius: "6px",
                    padding: "18px 22px",
                  }}
                >
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, marginBottom: "6px" }}>
                    {step.day}
                  </div>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Common lab patterns — clinical depth on the cases where injections
          genuinely outperform pellets, and why. Targets the patient
          searching for nuanced TRT information. */}
      <section style={{ background: "var(--color-bg)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Lab Patterns We Adjust To</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "24px" }}>
              When the labs tell us injections are the better tool.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "28px" }}>
              Some lab patterns respond meaningfully better to injections than to pellets. This is part of why Travis runs both protocols — the lab pattern often points to which delivery method will produce a better result. Common patterns where injection therapy is the clear answer:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                {
                  pattern: "High SHBG with low free testosterone",
                  body: "Sex hormone binding globulin binds testosterone and renders it biologically inactive. A man with total T of 600 and SHBG of 70 has a free T problem even though his total looks fine on paper. Pellet dosing, which delivers a relatively fixed total dose, often can't push free T high enough to fix the symptoms. Weekly injection therapy gives us the room to titrate the dose up and pull free T into optimal range — this is the most common 'injections are better' scenario in our practice.",
                },
                {
                  pattern: "Estradiol that runs high on pellet therapy",
                  body: "Some patients aromatize testosterone aggressively. On pellets — which deliver a continuous, slightly higher peak-equivalent dose — estradiol can run uncomfortably high (water retention, nipple sensitivity, mood). Switching to weekly injections at a lower per-week dose often resolves the estradiol problem without losing testosterone benefit.",
                },
                {
                  pattern: "Hematocrit creep on TRT",
                  body: "Both pellets and injections can elevate hematocrit, but the dose-response is more predictable on injections — which means we can lower the dose precisely to stabilize hematocrit without going under-dosed on testosterone. Therapeutic phlebotomy is sometimes part of the picture; we coordinate when needed.",
                },
                {
                  pattern: "Recovery-focused or athletic patients",
                  body: "Men training seriously who want to optimize testosterone for body composition and recovery often prefer the dose-control granularity of weekly injections. The protocol can be tuned more precisely to the training cycle and to specific lab markers like free T and IGF-1.",
                },
                {
                  pattern: "Bi-weekly pellet patients reporting end-of-cycle drop-off",
                  body: "If you finished a pellet cycle and felt clearly worse in the last 4-6 weeks before the next insertion, that's data. Injections eliminate that drop-off pattern entirely because the dose is delivered weekly rather than over a 3-5 month curve.",
                },
              ].map((p, i) => (
                <FadeIn key={i}>
                  <div style={{ background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "8px", padding: "22px 26px" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)", marginBottom: "10px" }}>
                      {p.pattern}
                    </h3>
                    <p style={{ fontSize: "0.92rem", lineHeight: 1.78, color: "var(--color-muted)", margin: 0 }}>
                      {p.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Decision framework — concise self-identification matrix. Helps
          patients decide whether to start with injections or pellets BEFORE
          the consultation, which makes the consultation more efficient. */}
      <section style={{ background: "var(--color-stone)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Decision Framework</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "20px" }}>
              Injections or pellets — quick self-identification.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "32px", maxWidth: "780px" }}>
              The actual choice happens at the consultation with your labs in front of us. But if you want a quick sense of which delivery method probably fits you better before booking, here&apos;s the heuristic Travis uses:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="trt-decision-grid">
              <div style={{ background: "#fff", borderRadius: "8px", padding: "26px 28px", borderLeft: "3px solid var(--color-teal)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 500, color: "var(--color-ink)", marginBottom: "14px" }}>
                  Injections probably fit if…
                </h3>
                <ul style={{ paddingLeft: "18px", margin: 0 }}>
                  {[
                    "You have high SHBG (or have been told your free T is low despite normal total T)",
                    "You aromatize aggressively or have run high estradiol on prior TRT",
                    "You want tight dose control and are willing to do labs more frequently early on",
                    "You travel often and want a portable protocol",
                    "You're focused on training, body composition, or recovery and want fine-grained tuning",
                    "You don't mind a weekly 15-second self-injection task",
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: "0.88rem", lineHeight: 1.78, color: "var(--color-muted)", marginBottom: "8px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: "#fff", borderRadius: "8px", padding: "26px 28px", borderLeft: "3px solid var(--color-gold)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 500, color: "var(--color-ink)", marginBottom: "14px" }}>
                  Pellets probably fit if…
                </h3>
                <ul style={{ paddingLeft: "18px", margin: 0 }}>
                  {[
                    "You have a stable lab pattern with normal SHBG",
                    "You strongly prefer set-it-and-forget-it convenience",
                    "You don't want to manage a weekly injection task",
                    "You like the idea of a single in-office procedure every 3-5 months",
                    "You've researched both and the steady-release model appeals to you",
                    "You aren't pursuing fine-grained training/recovery optimization",
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: "0.88rem", lineHeight: 1.78, color: "var(--color-muted)", marginBottom: "8px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={{ marginTop: "32px", padding: "20px 24px", background: "var(--color-bg)", border: "1px solid var(--color-divider)", borderRadius: "8px", maxWidth: "780px" }}>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-muted)", margin: 0 }}>
                <strong style={{ color: "var(--color-ink)" }}>Not sure?</strong> That&apos;s normal — and it&apos;s exactly what the consultation is for. Travis will run your labs, walk through both options with the data in hand, and recommend the one that fits your physiology and life. If you start on one and want to switch later, that path is also straightforward.{" "}
                <Link href="/services/biote-pellet-therapy" style={{ color: "var(--color-teal)", textDecoration: "underline" }}>
                  Read about Biote pellet therapy here
                </Link>
                {" "}
                or{" "}
                <Link href="/services/hormone-therapy-men" style={{ color: "var(--color-teal)", textDecoration: "underline" }}>
                  see the men&apos;s hormone therapy overview
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        </div>
        <style>{`@media (max-width: 768px) { .trt-decision-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
