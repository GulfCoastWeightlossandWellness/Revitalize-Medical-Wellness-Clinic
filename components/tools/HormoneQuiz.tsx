"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const QUESTIONS = [
  { id: 1, text: "How would you rate your energy levels on most days?", options: ["High — I feel alert and capable", "Moderate — manageable but not what it was", "Low — I struggle to get through the day", "Very low — I am exhausted most of the time"] },
  { id: 2, text: "How is your sleep quality?", options: ["Solid — I wake rested", "Variable — some nights are fine", "Poor — I wake frequently or unrefreshed", "Very poor — I have significant sleep disruption"] },
  { id: 3, text: "How is your ability to focus and recall information?", options: ["Sharp — no issues", "Some fog — occasional difficulty", "Noticeable decline — it affects my work", "Significant — brain fog is a daily problem"] },
  { id: 4, text: "How would you describe your mood and emotional stability?", options: ["Stable — I feel like myself", "Some irritability or low mood", "Frequent mood swings or persistent low mood", "Significant anxiety, depression, or emotional dysregulation"] },
  { id: 5, text: "How is your libido compared to a few years ago?", options: ["About the same", "Somewhat reduced", "Significantly reduced", "Very low or absent"] },
  { id: 6, text: "Has your weight changed despite no major changes in diet or exercise?", options: ["No change", "Small unexplained gain", "Noticeable gain, especially around the midsection", "Significant gain I cannot explain or reverse"] },
  { id: 7, text: "Do you experience hot flashes, night sweats, or temperature dysregulation?", options: ["Not at all", "Occasionally", "Regularly", "Frequently — it disrupts sleep or daily life"] },
  { id: 8, text: "How is your physical recovery after exercise or exertion?", options: ["Normal — I recover well", "Slower than it used to be", "Notably slow — soreness lingers", "I avoid exercise due to poor recovery"] },
  { id: 9, text: "How would you describe your overall sense of vitality — feeling like yourself?", options: ["Fully — I feel like me", "Mostly — but something is off", "Diminished — I miss how I used to feel", "Significantly diminished — I do not recognize myself"] },
  { id: 10, text: "Have you had a comprehensive hormone panel in the last 12 months?", options: ["Yes, and results were reviewed in detail", "Yes, but told everything was normal", "No — I have not been tested", "I have had partial testing but not a full panel"] },
];

const SCORES = [0, 1, 2, 3];

type Result = {
  level: "low" | "moderate" | "high";
  label: string;
  description: string;
  recommendation: string;
  services: { label: string; href: string }[];
};

function getResult(total: number): Result {
  if (total <= 8) {
    return {
      level: "low",
      label: "Low symptom burden",
      description: "Your responses suggest your hormone and metabolic function is relatively well-balanced at this time. Preventive baseline labs are still worthwhile — many patients function well until a threshold is crossed.",
      recommendation: "Consider a baseline consultation to establish your reference ranges before symptoms appear.",
      services: [{ label: "Hormone Therapy Overview", href: "/services/hormone-therapy-women" }, { label: "Nutritional Counseling", href: "/services/nutritional-counseling" }],
    };
  }
  if (total <= 18) {
    return {
      level: "moderate",
      label: "Moderate symptom burden",
      description: "Your responses suggest some hormonal or metabolic imbalance that warrants clinical evaluation. Several of your symptoms are consistent with early-to-mid hormone disruption — this is the optimal time to address them before they compound.",
      recommendation: "A comprehensive hormone panel and clinical consultation is the appropriate next step.",
      services: [{ label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" }, { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" }, { label: "Medical Weight Loss", href: "/services/medical-weight-loss" }],
    };
  }
  return {
    level: "high",
    label: "High symptom burden",
    description: "Your responses indicate a significant hormonal or metabolic imbalance. The pattern of symptoms you are describing — across energy, sleep, cognition, mood, and weight — is consistent with hormone deficiency and its downstream effects. This is treatable.",
    recommendation: "A comprehensive evaluation including a full hormone panel is strongly recommended. The sooner these are addressed, the faster resolution.",
    services: [{ label: "Biote Pellet Therapy", href: "/services/biote-pellet-therapy" }, { label: "Hormone Therapy for Women", href: "/services/hormone-therapy-women" }, { label: "Hormone Therapy for Men", href: "/services/hormone-therapy-men" }, { label: "Medical Weight Loss", href: "/services/medical-weight-loss" }],
  };
}

const LEVEL_COLORS = { low: "#4A7C59", moderate: "#C9A86C", high: "var(--color-teal)" };

export default function HormoneQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  const answered = Object.keys(answers).length;
  const allAnswered = answered === QUESTIONS.length;
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = submitted ? getResult(total) : null;

  function handleSelect(questionId: number, score: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    if (current < QUESTIONS.length - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 300);
    }
  }

  if (submitted && result) {
    return (
      <div style={{ background: "#fff", borderRadius: "8px", padding: "48px clamp(24px, 5vw, 56px)" }}>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: LEVEL_COLORS[result.level], fontWeight: 600, marginBottom: "10px" }}>Your result</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "16px" }}>{result.label}</h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "12px" }}>{result.description}</p>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--color-ink)", fontWeight: 500, marginBottom: "28px", background: "var(--color-stone)", padding: "16px 20px", borderRadius: "6px", borderLeft: `4px solid ${LEVEL_COLORS[result.level]}` }}>
            {result.recommendation}
          </p>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted-light)", marginBottom: "14px" }}>Relevant services</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {result.services.map((s) => (
              <Link key={s.href} href={s.href} style={{ background: "var(--color-teal)", color: "#fff", padding: "10px 18px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a href={SITE.booking} target="_blank" rel="noopener noreferrer" style={{ background: "var(--color-gold)", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Book a Consultation</a>
          <button onClick={() => { setAnswers({}); setSubmitted(false); setCurrent(0); }} style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", background: "none", padding: "12px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>Retake</button>
        </div>
        <p style={{ marginTop: "20px", fontSize: "0.7rem", color: "var(--color-muted-light)", lineHeight: 1.65 }}>This assessment does not constitute medical advice and is not a substitute for clinical evaluation. Results are educational only.</p>
      </div>
    );
  }

  const q = QUESTIONS[current];

  return (
    <div style={{ background: "#fff", borderRadius: "8px", padding: "48px clamp(24px, 5vw, 56px)" }}>
      <div style={{ marginBottom: "32px" }}>
        <div className="eyebrow" style={{ marginBottom: "12px" }}>Hormone Health Self-Assessment</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "8px" }}>10-Question Symptom Inventory</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.7 }}>Answer honestly. There are no wrong responses — this is about understanding your current baseline.</p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "0.65rem", color: "var(--color-muted-light)" }}>Question {current + 1} of {QUESTIONS.length}</span>
          <span style={{ fontSize: "0.65rem", color: "var(--color-teal)" }}>{answered} answered</span>
        </div>
        <div style={{ height: "4px", background: "var(--color-stone)", borderRadius: "2px" }}>
          <div style={{ height: "4px", background: "var(--color-teal)", borderRadius: "2px", width: `${(answered / QUESTIONS.length) * 100}%`, transition: "width 0.3s" }} />
        </div>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <p style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-ink)", lineHeight: 1.5, marginBottom: "20px" }}>{q.text}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {q.options.map((opt, i) => {
            const selected = answers[q.id] === SCORES[i];
            return (
              <button key={i} onClick={() => handleSelect(q.id, SCORES[i])} style={{ textAlign: "left", padding: "14px 18px", borderRadius: "6px", border: selected ? "2px solid var(--color-teal)" : "1.5px solid var(--color-divider)", background: selected ? "rgba(14,61,77,0.04)" : "#fff", color: "var(--color-ink)", fontSize: "0.88rem", cursor: "pointer", transition: "border-color 0.15s, background 0.15s", fontFamily: "var(--font-body)" }}>
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        {current > 0 && (
          <button onClick={() => setCurrent((c) => c - 1)} style={{ border: "1.5px solid var(--color-divider)", background: "none", color: "var(--color-muted)", padding: "10px 20px", borderRadius: "6px", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}>Back</button>
        )}
        {current < QUESTIONS.length - 1 ? (
          <button onClick={() => setCurrent((c) => c + 1)} disabled={answers[q.id] === undefined} style={{ background: answers[q.id] !== undefined ? "var(--color-teal)" : "var(--color-stone)", color: answers[q.id] !== undefined ? "#fff" : "var(--color-muted-light)", padding: "10px 20px", borderRadius: "6px", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", cursor: answers[q.id] !== undefined ? "pointer" : "default", border: "none" }}>Next</button>
        ) : (
          <button onClick={() => setSubmitted(true)} disabled={!allAnswered} style={{ background: allAnswered ? "var(--color-gold)" : "var(--color-stone)", color: allAnswered ? "#fff" : "var(--color-muted-light)", padding: "12px 24px", borderRadius: "6px", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", cursor: allAnswered ? "pointer" : "default", border: "none" }}>
            View Results
          </button>
        )}
      </div>
    </div>
  );
}
