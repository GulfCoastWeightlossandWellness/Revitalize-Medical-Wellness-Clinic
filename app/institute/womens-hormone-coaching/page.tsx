import type { Metadata } from "next";
import InstituteMatrixPage from "@/components/InstituteMatrixPage";

export const metadata: Metadata = {
  title: "Women's Hormone Coaching | Rebuild Metabolic Health Institute",
  description:
    "Coaching for women navigating perimenopause, menopause, and post-reproductive hormonal optimization. Estrogen, progesterone, testosterone, thyroid. Led by Travis Woodley, MSN, RN, CRNP. Open to anyone.",
};

export default function WomensHormoneCoachingPage() {
  return (
    <InstituteMatrixPage
      slug="womens-hormone-coaching"
      title="Women's Hormone Coaching"
      eyebrow="Institute Track · Women's Hormones"
      hero={{
        h1: "Women's Hormone Coaching",
        subhead:
          "The Institute coaching track for women navigating perimenopause, menopause, and the metabolic changes that come with hormonal transition. Built on the clinical framework I use with patients at Revitalize, structured for sustained learning and decision support.",
      }}
      intro="The questions women bring me about perimenopause and menopause rarely get answered in a 15-minute appointment with their gynecologist. This track is the structured framework for those questions."
      bodyParagraphs={[
        "Most women I see in mid-life have spent years being told their symptoms are normal, their labs are fine, and their best option is to wait it out. None of those statements are necessarily wrong. None of them are the whole picture either. The symptoms are real. The labs in the conventional reference range are often suboptimal for how a woman wants to feel and function. And waiting is not the only option.",
        "The Women's Hormone Coaching track is built around the actual clinical reasoning behind hormone optimization in women. We cover what perimenopause looks like physiologically, why it often starts earlier than women are told, how to interpret a comprehensive hormone panel rather than just an FSH and estradiol, what bioidentical estrogen and progesterone actually do, why testosterone matters for women, and how the thyroid and adrenal systems intersect with the sex hormones.",
        "We also cover the parts that get less attention — body composition shifts during the menopausal transition, the metabolic changes that determine whether weight loss approaches will work, sleep architecture changes that drive much of the symptom burden, and the cardiovascular and bone health implications of long-term hormone decisions.",
        "The track is appropriate for current Revitalize patients who want sustained education alongside their clinical care, and for women evaluating hormone therapy for the first time who want to understand the framework before deciding to start.",
      ]}
      whatIncluded={[
        "The perimenopausal transition: what's happening physiologically, when it starts, why symptoms vary",
        "Bioidentical hormone framework: estradiol, progesterone, testosterone, DHEA — what each does and why",
        "Comprehensive hormone panel interpretation in women",
        "The vasomotor symptoms (hot flashes, night sweats), sleep, mood, cognition framework",
        "Body composition during the menopausal transition — what changes and why",
        "Sexual health and intimate wellness through the transition",
        "Bone density, cardiovascular health, and the long-term hormone therapy decision",
        "Thyroid and adrenal patterns that often compound hormonal symptoms",
      ]}
      whoFor="Women in late 30s through post-menopause navigating hormone-related symptoms or decisions. Patients evaluating bioidentical hormone therapy for the first time. Women on hormone therapy who want sustained education and decision support. Women whose conventional providers have dismissed their symptoms or offered only a narrow set of options."
      relatedServices={[
        { name: "Hormone Therapy — Women", href: "/services/hormone-therapy-women" },
        { name: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" },
        { name: "O-Shot", href: "/services/o-shot" },
        { name: "Medical Weight Loss", href: "/services/medical-weight-loss" },
        { name: "Nutritional Counseling", href: "/services/nutritional-counseling" },
      ]}
    />
  );
}
