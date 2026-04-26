import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Dermal Fillers | Columbus & Warner Robins, GA | Juvederm | Radiesse",
  description:
    "Dermal filler treatments in Columbus and Warner Robins, Georgia. Hyaluronic acid and biostimulatory fillers for lips, cheeks, jawline, and more. Conservative approach by a licensed clinical team.",
};

export default function DermalFillers() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Aesthetics — Columbus & Warner Robins, GA",
        headline: "Dermal Fillers —<br /><em>Subtle, Structured, Believable</em>",
        subheadline: "Hyaluronic acid and biostimulatory fillers for volume restoration and facial contouring. Our philosophy is harmony from every angle, not an obviously treated appearance.",
        heroKeyword: "Dermal Fillers Columbus GA",
      }}
      intro={{
        problem: "Volume loss is one of the most significant drivers of facial aging, and it is also one of the most underappreciated. The loss of fat compartments in the cheeks, temples, and around the mouth creates hollowing, descent, and the deepening of lines — effects that neuromodulators alone cannot address. Dermal fillers restore the structural foundation that has shifted, and when placed correctly, they look like you simply look well rather than like you have had something done.",
        what: "Dermal fillers are injectable gels that add volume, contour, and support to targeted areas of the face and hands. We offer hyaluronic acid fillers — which are reversible and gradually metabolized by the body — as well as biostimulatory fillers that work by stimulating your own collagen production over time. Product selection depends on the area being treated, the depth of correction needed, and your goals. All of this is determined during your consultation.",
        how: "Every filler treatment begins with face mapping — a systematic assessment of your facial anatomy, proportions, and areas of volume loss or asymmetry. We discuss exactly what we plan to do, what the realistic result will look like, and what you should expect in terms of recovery. Filler is placed using either needles or cannulas depending on the area. We prefer cannulas for deeper areas because they reduce bruising and allow more precise placement. You will leave with a full aftercare protocol and instructions for follow-up.",
      }}
      candidacy={{
        good: [
          "Adults seeking volume restoration in cheeks, temples, or under-eye areas",
          "Those looking to enhance lip shape, size, or balance",
          "Patients with deepening nasolabial folds or marionette lines",
          "Those seeking jawline or chin definition without surgery",
          "Patients interested in non-surgical hand rejuvenation",
        ],
        notFor: [
          "Pregnant or breastfeeding patients",
          "Active skin infections, open lesions, or inflammatory conditions at intended injection sites",
          "History of severe allergic reactions to filler components",
          "Certain autoimmune conditions that affect healing — requires clinical evaluation",
          "Patients seeking permanent or surgical results",
        ],
      }}
      whatToExpect={[
        "Face mapping consultation: We assess your facial anatomy, identify areas of volume loss or asymmetry, and develop a treatment plan. We discuss the products being used, the expected result, and the realistic recovery.",
        "Treatment session: Depending on the areas being treated, a session typically takes thirty to sixty minutes. Topical numbing is applied before treatment. Most fillers contain lidocaine, which reduces discomfort during injection.",
        "Immediately after: Swelling is expected and normal. The treated areas will appear larger than the final result for two to fourteen days depending on the area and product. Bruising is possible, particularly with lip and under-eye treatments.",
        "Days two through seven: Swelling resolves progressively. Most patients feel comfortable returning to normal activities the day after treatment.",
        "Two to four weeks: Final results are visible once swelling has fully resolved. Some products — particularly biostimulatory fillers — continue to improve over the following weeks as collagen production increases.",
        "Maintenance: Hyaluronic acid fillers typically last six to eighteen months depending on the area and product. Biostimulatory fillers may last longer. We schedule maintenance consultations to assess your results and plan accordingly.",
      ]}
      relatedServices={[
        { name: "Neuromodulator Treatments", href: "/services/neuromodulators" },
        { name: "Cellenis PRP Gel Filler", href: "/services/cellenis-prp-gel-filler" },
        { name: "Microneedling", href: "/services/microneedling" },
        { name: "AquaFirme Facials", href: "/services/aquafirme-facials" },
      ]}
      relatedPosts={[
        { title: "The Difference Between Botox and Dermal Fillers", href: "/blog/botox-vs-dermal-fillers" },
        { title: "How to Choose a Medical Spa in Columbus GA", href: "/blog/how-to-choose-medical-spa-columbus-ga" },
      ]}
      faqs={[
        {
          q: "How long do dermal fillers last?",
          a: "It depends on the product, the area, and how your metabolism responds. Lip fillers typically last six to twelve months. Cheek and midface fillers often last twelve to eighteen months. Under-eye fillers can last twelve to twenty-four months. Biostimulatory products like Radiesse may provide results for two years or more. We give you realistic expectations at your consultation based on your specific treatment plan.",
        },
        {
          q: "Can filler be reversed?",
          a: "Hyaluronic acid fillers can be partially or fully dissolved using an enzyme called hyaluronidase. This is an important safety consideration — and one of the reasons we favor HA fillers for most patients, particularly those receiving filler for the first time. Biostimulatory fillers cannot be reversed. We discuss the reversibility of each product at consultation.",
        },
        {
          q: "Will filler make me look overdone?",
          a: "Only if that is what you ask for, or if it is placed without proper anatomy assessment. Our philosophy is conservative, structured, and believable. We would rather add volume incrementally over multiple visits than overcorrect in a single session.",
        },
        {
          q: "Can I combine fillers with Botox?",
          a: "Yes, and many patients benefit from both. Neuromodulators address movement lines; fillers address volume loss and structural changes. The two treatments work on different mechanisms and complement each other. When combining treatments, we sequence them appropriately and give the tissues time to settle between procedures when indicated.",
        },
        {
          q: "Is the procedure painful?",
          a: "Most patients find the procedure manageable. Topical numbing is applied before treatment, and most modern fillers contain lidocaine, which provides additional comfort during injection. Sensitive areas like the lips may be more uncomfortable — we discuss this and take appropriate steps to minimize it.",
        },
        {
          q: "Do you offer filler treatments at both Columbus and Warner Robins?",
          a: "Yes. Dermal filler treatments are available at both our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
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
              src="/images/generated/service-dermal-fillers-facial-balancing-v1.png"
              alt="Dermal filler consultation focused on anatomy-first facial balancing and conservative treatment planning"
              width={1024}
              height={576}
              quality={82}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 68vw, 760px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </FadeIn>
      }
      disclaimer="Dermal filler treatments are performed by licensed clinical providers. Results are temporary and vary by individual. Fillers are FDA-cleared devices; specific product selection is determined at consultation. Hyaluronic acid fillers are reversible; other filler types are not. Information on this page is educational and does not constitute medical advice."
      pageHref="/services/dermal-fillers"
      pageName="Dermal Fillers"
    />
  );
}
