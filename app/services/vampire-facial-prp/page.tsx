import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Vampire Facial & PRP | Columbus & Warner Robins, GA",
  description:
    "PRP microneedling (Vampire Facial) in Columbus and Warner Robins, Georgia. Your own platelet-rich plasma combined with microneedling for enhanced skin texture, tone, and radiance.",
};

export default function VampireFacialPRP() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Skin Rejuvenation — Columbus & Warner Robins, GA",
        headline: "Vampire Facial<br /><em>&amp; PRP Therapy</em>",
        subheadline: "PRP microneedling uses your own platelet-rich plasma to enhance the skin's healing response after microneedling — resulting in more luminous, smoother, and longer-lasting results than microneedling alone.",
        heroKeyword: "Vampire Facial PRP Columbus GA",
      }}
      intro={{
        problem: "The body already knows how to repair and regenerate skin. What PRP does is amplify that signal. Platelet-rich plasma contains concentrated growth factors and bioactive proteins that coordinate the healing cascade. When applied to the skin immediately after microneedling — while the micro-channels are open — these growth factors penetrate deeper than any topical product could and accelerate the collagen remodeling process.",
        what: "The Vampire Facial combines two treatments: microneedling creates controlled micro-channels in the skin, and PRP (platelet-rich plasma) derived from your own blood is applied topically during and after the procedure. The PRP is prepared by drawing a small sample of your blood, spinning it in a centrifuge to concentrate the platelets, and collecting the resulting plasma. The result is a natural, autologous treatment — your own biology doing the work.",
        how: "Your blood is drawn at the start of the appointment and processed in the centrifuge while your skin is being numbed. Microneedling is performed with settings appropriate to your skin type and concerns. The PRP is then applied to the skin during and after the procedure, absorbing through the open channels. The treatment takes forty-five to seventy-five minutes. Downtime is similar to standard microneedling — one to three days of redness and mild skin sensitivity.",
      }}
      candidacy={{
        good: [
          "Adults seeking improved skin texture, tone, and radiance",
          "Those who want to amplify the results of a standard microneedling series",
          "Patients interested in a natural, autologous treatment with no synthetic additives",
          "Those with dull or uneven skin looking for a treatment with a meaningful results horizon",
          "Patients combining PRP facials with a broader skin rejuvenation plan",
        ],
        notFor: [
          "Active skin infections or lesions in the treatment area",
          "Bleeding disorders or patients on anticoagulation therapy that cannot be paused",
          "Pregnancy or breastfeeding",
          "Certain autoimmune conditions or medications that affect platelet function",
          "Those with unrealistic expectations — PRP facial results develop over weeks, not overnight",
        ],
      }}
      whatToExpect={[
        "Consultation: We discuss your skin concerns, assess your candidacy, and explain what the procedure involves and what results you can realistically expect.",
        "Blood draw: A small amount of blood is drawn and placed in the centrifuge. This takes approximately ten to fifteen minutes to process.",
        "Numbing: Topical numbing cream is applied and takes approximately thirty to forty-five minutes to take effect.",
        "Treatment: Microneedling is performed at appropriate settings. PRP is applied during and after the procedure.",
        "Immediately after: Your skin will be pink to red and feel warm. This resolves over twenty-four to forty-eight hours.",
        "Days two through seven: Skin may feel slightly tight. Mild flaking is possible. Strict sun protection is required.",
        "Weeks two through eight: Results develop progressively as the collagen remodeling process completes. Skin appears smoother, more radiant, and more even in tone.",
      ]}
      relatedServices={[
        { name: "Microneedling", href: "/services/microneedling" },
        { name: "Cellenis PRP Gel Filler", href: "/services/cellenis-prp-gel-filler" },
        { name: "VI Peel", href: "/services/vi-peel" },
        { name: "AquaFirme Facials", href: "/services/aquafirme-facials" },
      ]}
      relatedPosts={[
        { title: "What Is the Vampire Facial and Is It Worth It", href: "/blog/vampire-facial-worth-it" },
        { title: "Microneedling vs CO2 Laser — Which Is Right for You", href: "/blog/microneedling-vs-co2-laser" },
      ]}
      faqs={[
        {
          q: "Is the Vampire Facial actually worth it?",
          a: "For patients whose primary concern is skin texture, tone, and radiance — and who want a natural, no-synthetic treatment — PRP microneedling is one of the more effective options in that category. The results develop over several weeks and tend to be more luminous and longer-lasting than microneedling alone. Whether it is worth it for any specific patient depends on their goals, their skin, and whether their candidacy makes them a strong responder.",
        },
        {
          q: "Is PRP safe?",
          a: "Because PRP is derived from your own blood, allergic reactions are not a concern. The risks are primarily those of microneedling itself — redness, sensitivity, and the small infection risk inherent to any skin penetration procedure. We use sterile technique throughout.",
        },
        {
          q: "How many PRP facial sessions do I need?",
          a: "Most patients see meaningful results after a single session. For more pronounced improvement, a series of two to three sessions spaced four to six weeks apart is typically recommended. We discuss your goals and give you a realistic series recommendation at consultation.",
        },
        {
          q: "Can PRP be used for hair restoration as well?",
          a: "PRP is also used as a scalp treatment for hair loss, separate from the facial application. We offer both applications at Revitalize. For patients interested in hair restoration, we also offer the DE|RIVE hair restoration system.",
        },
        {
          q: "Do you offer PRP facial treatments at both locations?",
          a: "Yes. Vampire Facial and PRP microneedling are available at our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
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
              src="/images/generated/service-microneedling-prp-prep-consult-v1.png"
              alt="Microneedling and PRP facial consultation with pre-treatment discussion in a clinical setting"
              width={1024}
              height={576}
              quality={82}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 68vw, 760px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </FadeIn>
      }
      disclaimer="PRP microneedling is a cosmetic treatment. PRP for aesthetic use has not been evaluated by the FDA for this indication. Individual results vary. The term 'Vampire Facial' is a colloquial description of PRP microneedling. Information on this page is educational and does not constitute medical advice."
    />
  );
}
