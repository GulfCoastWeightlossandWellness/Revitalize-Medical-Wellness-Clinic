import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Testosterone Injection Therapy Columbus GA | Revitalize",
  description:
    "Testosterone injection therapy in Columbus and Warner Robins, GA. Cypionate and enanthate protocols, self-injection training, weekly or bi-weekly dosing. Travis Woodley, MSN, RN, CRNP — Platinum Biote provider also offering injection-based TRT.",
  keywords: [
    "testosterone injection therapy Columbus GA",
    "testosterone injections Warner Robins",
    "testosterone cypionate Columbus",
    "testosterone enanthate Georgia",
    "TRT injection clinic Columbus",
    "self-injection testosterone training",
    "weekly testosterone injection protocol",
    "bi-weekly testosterone injection",
    "Travis Woodley TRT Columbus",
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
            q: "Will I have to learn to inject myself?",
            a: "Yes, in most cases. Self-injection is a fundamental part of long-term injection-based TRT. The training takes about 15-20 minutes, we walk through both intramuscular and subcutaneous technique, and you do your first injection in the office under supervision. Almost every patient is comfortable doing it independently by the end of the first visit. If you have specific concerns or accommodations needed, we work through those during the consultation.",
          },
          {
            q: "How quickly will I notice changes?",
            a: "Most men notice improved energy and sleep within 2-4 weeks of starting injection therapy. Mood and libido often respond in the same window. Body composition changes — muscle gain, fat loss — develop over 3-6 months as testosterone levels stabilize and the metabolic effects accumulate. The first 8-12 weeks establish your response. The labs at that point tell us whether to adjust.",
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
    </>
  );
}
