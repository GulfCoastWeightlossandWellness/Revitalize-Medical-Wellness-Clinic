import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Microneedling | RF Microneedling | Columbus & Warner Robins, GA",
  description:
    "Microneedling and RF microneedling in Columbus and Warner Robins, Georgia. Effective for skin texture, pore refinement, tone, and fine lines. Licensed clinical team. Consultation required.",
};

export default function Microneedling() {
  return (
    <ServicePage
      hero={{
        eyebrow: "Skin Rejuvenation — Columbus & Warner Robins, GA",
        headline: "Microneedling<br /><em>Skin Rejuvenation</em>",
        subheadline: "Controlled micro-channel creation to trigger the skin's natural repair cascade. Available with optional RF (radiofrequency) energy for enhanced collagen remodeling.",
        heroKeyword: "Microneedling Columbus GA",
      }}
      intro={{
        problem: "Skin texture changes — enlarged pores, uneven tone, fine lines, surface irregularity — develop gradually and are driven by reduced collagen turnover, accumulated environmental damage, and hormonal changes. Topical skincare can maintain and modestly improve these issues. But to meaningfully change the texture and density of the skin, you need to trigger a controlled injury-and-repair response. That is what microneedling does.",
        what: "Microneedling uses a sterile device with very fine needles to create controlled micro-channels in the skin. The body responds to these channels by increasing collagen and elastin production as it repairs. Over a series of sessions, this results in smoother, denser skin with refined pores, more even tone, and softened fine lines. We also offer RF (radiofrequency) microneedling, which adds thermal energy to the channels — stimulating deeper collagen remodeling and producing more significant lifting and tightening effects.",
        how: "A numbing cream is applied before the procedure. Once the skin is sufficiently numb — typically thirty to forty-five minutes — the device is passed over the treatment area. Needle depth, number of passes, and RF settings are customized to your skin type, concerns, and tolerance. The procedure takes thirty to sixty minutes depending on the areas treated. Your skin will appear pink to red afterward and may feel like a mild sunburn. This resolves within twenty-four to forty-eight hours for most patients.",
      }}
      candidacy={{
        good: [
          "Adults seeking improvement in skin texture, pore appearance, or tone",
          "Those with fine lines and early surface irregularity",
          "Patients looking for a treatment with no significant downtime",
          "Those interested in combining microneedling with PRP for enhanced results",
          "Patients who want to maintain skin quality between more intensive treatments",
        ],
        notFor: [
          "Active acne breakouts or skin infections in the treatment area",
          "Pregnancy or breastfeeding",
          "History of keloid scarring or abnormal wound healing",
          "Current use of isotretinoin (Accutane) — requires a waiting period",
          "Certain photosensitizing medications — requires review at consultation",
        ],
      }}
      whatToExpect={[
        "Consultation and skin assessment: We evaluate your skin, discuss your concerns, and determine whether standard microneedling or RF microneedling is more appropriate for your goals. Treatment depth and the number of sessions in your series are planned at this visit.",
        "Pre-treatment preparation: Arrive with clean skin. Numbing cream is applied in-office and takes approximately thirty to forty-five minutes to take effect.",
        "Treatment: The device is passed over the treatment area with customized settings. Most patients describe tolerable pressure and warmth. The treatment itself takes thirty to sixty minutes.",
        "Immediately after: Your skin will appear pink to red and may feel warm or tight. This is expected. You leave with a soothing serum applied.",
        "Days one through three: The redness resolves progressively. Skin may feel tight or slightly rough as it heals. Strict sun protection is required during this period.",
        "Weeks two through four: Skin begins to look smoother and more refined as collagen remodeling begins. Full results from a single session emerge over four to six weeks.",
        "Series completion: Most patients complete a series of three to six sessions spaced four weeks apart for optimal results. Maintenance sessions every three to six months sustain the outcome.",
      ]}
      relatedServices={[
        { name: "Vampire Facial & PRP", href: "/services/vampire-facial-prp" },
        { name: "PhantomClear CO2 Laser", href: "/services/fractional-co2-laser" },
        { name: "AquaFirme Facials", href: "/services/aquafirme-facials" },
        { name: "VI Peel", href: "/services/vi-peel" },
        { name: "Cellenis PRP Gel Filler", href: "/services/cellenis-prp-gel-filler" },
      ]}
      relatedPosts={[
        { title: "Microneedling vs CO2 Laser — Which Is Right for You", href: "/blog/microneedling-vs-co2-laser" },
        { title: "How to Choose a Medical Spa in Columbus GA", href: "/blog/how-to-choose-medical-spa-columbus-ga" },
      ]}
      faqs={[
        {
          q: "How many sessions do I need?",
          a: "Most patients see meaningful improvement after three sessions. For more significant texture concerns — scarring, deep pore enlargement, or pronounced fine lines — a series of four to six sessions produces better results. We discuss your specific goals at consultation and give you an honest assessment of what to expect from different treatment frequencies.",
        },
        {
          q: "What is the difference between standard microneedling and RF microneedling?",
          a: "Standard microneedling triggers collagen production through the micro-injury response alone. RF microneedling adds radiofrequency energy delivered through the needles at depth, which creates additional thermal stimulation of the deeper dermis. RF microneedling generally produces more significant skin tightening and lifting effects, and is particularly effective for skin laxity concerns. It also tends to require a longer recovery period and involves a higher investment per session.",
        },
        {
          q: "Can microneedling be combined with PRP?",
          a: "Yes — this is the Vampire Facial protocol, and it is one of the most popular combinations we offer. PRP is applied to the skin immediately after microneedling, allowing the growth factors in the plasma to penetrate through the micro-channels we have just created. The combination enhances the skin's healing response and typically produces more luminous, long-lasting results than microneedling alone.",
        },
        {
          q: "Is there downtime?",
          a: "Standard microneedling involves one to two days of visible redness and mild skin tightness. Most patients return to normal activities the following day with appropriate skincare. RF microneedling may involve three to five days of more pronounced redness and possible pinpoint bruising. Sun protection is mandatory in the days following any microneedling treatment.",
        },
        {
          q: "Do you offer microneedling at both locations?",
          a: "Yes. Microneedling is available at our Columbus, GA location — (762) 261-3880 — and our Warner Robins, GA location — (478) 366-1244.",
        },
      ]}
      disclaimer="Microneedling results vary by individual, skin type, and treatment series. This is a cosmetic treatment, not a medical one. Individual responses to microneedling differ. Results from a single session are less pronounced than results from a completed series. Information on this page is educational and does not constitute medical advice."
    />
  );
}
