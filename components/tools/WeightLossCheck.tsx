"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const SINGLE_QUESTIONS = [
  {
    id: 1,
    text: "What is your main goal?",
    options: [
      { label: "Lose 10–20 pounds", points: 1 },
      { label: "Lose 20–50 pounds", points: 2 },
      { label: "Lose 50+ pounds", points: 3 },
      { label: "Improve metabolic labs or insulin resistance", points: 2 },
      { label: "Maintain results after previous weight loss", points: 1 },
    ],
  },
  {
    id: 2,
    text: "What have you tried before?",
    options: [
      { label: "Nothing structured yet", points: 0 },
      { label: "Diet and exercise changes", points: 1 },
      { label: "Commercial weight loss program", points: 2 },
      { label: "Prescription weight loss medication", points: 2 },
      { label: "GLP-1 medication before", points: 3 },
    ],
  },
  {
    id: 4,
    text: "What is your biggest barrier?",
    options: [
      { label: "Hunger or cravings", points: 0 },
      { label: "Plateau despite effort", points: 0 },
      { label: "Low energy", points: 0 },
      { label: "Emotional or stress eating", points: 0 },
      { label: "Schedule consistency", points: 0 },
      { label: "Regaining weight after prior loss", points: 0 },
    ],
  },
  {
    id: 5,
    text: "Are you open to a medically supervised program with labs and follow-up?",
    options: [
      { label: "Yes", points: 2 },
      { label: "Maybe", points: 1 },
      { label: "Not sure yet", points: 0 },
    ],
  },
];

const CONDITIONS = [
  "PCOS",
  "Prediabetes or diabetes",
  "Thyroid concerns",
  "Menopause or perimenopause",
  "Low testosterone",
  "High blood pressure or cholesterol",
  "None or not sure",
];

// Question display order by ID: 1, 2, 3 (conditions), 4, 5
const DISPLAY_ORDER = [1, 2, 3, 4, 5];
const TOTAL_QUESTIONS = 5;

type ResultLevel = "strong" | "clarify" | "conversation";

type Result = { level: ResultLevel; title: string; body: string };

function getResult(score: number): Result {
  if (score >= 6) {
    return {
      level: "strong",
      title: "A structured medical weight loss consultation may be a strong fit.",
      body: "Your answers suggest you may benefit from a clinical conversation about metabolic health, labs, medication options when appropriate, and a supervised plan. This tool does not determine eligibility or prescribe treatment.",
    };
  }
  if (score >= 2) {
    return {
      level: "clarify",
      title: "A consultation may help clarify your options.",
      body: "Your answers suggest there may be several possible starting points, including nutrition structure, lab review, metabolic evaluation, or medication discussion if clinically appropriate.",
    };
  }
  return {
    level: "conversation",
    title: "Start with a clinical conversation.",
    body: "Your answers suggest the best next step is not a one-size-fits-all plan, but a consultation to review your history, goals, labs, and safety considerations.",
  };
}

const LEVEL_COLORS: Record<ResultLevel, string> = {
  strong: "var(--color-teal)",
  clarify: "#C9A86C",
  conversation: "#4A7C59",
};

export default function WeightLossCheck() {
  // singleAnswers stores option INDEX (not points) to avoid duplicate-value collisions
  const [singleAnswers, setSingleAnswers] = useState<Record<number, number>>({});
  const [conditions, setConditions] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const currentQId = DISPLAY_ORDER[current];
  const isConditionsQ = currentQId === 3;
  const singleQ = SINGLE_QUESTIONS.find((q) => q.id === currentQId);

  const conditionsAnswered = conditions.length > 0;
  const currentAnswered = isConditionsQ
    ? conditionsAnswered
    : singleAnswers[currentQId] !== undefined;

  const allAnswered =
    Object.keys(singleAnswers).length === SINGLE_QUESTIONS.length &&
    conditionsAnswered;

  const answeredCount =
    Object.keys(singleAnswers).length + (conditionsAnswered ? 1 : 0);

  function handleSingleSelect(qId: number, optionIdx: number) {
    setSingleAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    if (current < TOTAL_QUESTIONS - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 300);
    }
  }

  function handleConditionToggle(condition: string) {
    if (condition === "None or not sure") {
      setConditions(["None or not sure"]);
      return;
    }
    setConditions((prev) => {
      const without = prev.filter((c) => c !== "None or not sure");
      return without.includes(condition)
        ? without.filter((c) => c !== condition)
        : [...without, condition];
    });
  }

  function computeScore(): number {
    const singleScore = SINGLE_QUESTIONS.reduce((total, q) => {
      const idx = singleAnswers[q.id];
      return idx !== undefined ? total + q.options[idx].points : total;
    }, 0);
    const conditionScore = conditions.includes("None or not sure")
      ? 0
      : Math.min(conditions.length, 2);
    return singleScore + conditionScore;
  }

  if (submitted) {
    const result = getResult(computeScore());
    return (
      <div style={{ background: "#fff", borderRadius: "8px", padding: "48px clamp(24px, 5vw, 56px)" }}>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: LEVEL_COLORS[result.level], fontWeight: 600, marginBottom: "10px" }}>Your result</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "16px", lineHeight: 1.2 }}>{result.title}</h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-muted)", marginBottom: "24px" }}>{result.body}</p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "var(--color-gold)", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}
          >
            Book a Medical Weight Loss Consultation
          </a>
          <Link
            href="/services/medical-weight-loss"
            style={{ border: "1.5px solid var(--color-divider)", color: "var(--color-muted)", padding: "12px 24px", borderRadius: "6px", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}
          >
            Learn About Medical Weight Loss
          </Link>
        </div>

        <button
          onClick={() => { setSingleAnswers({}); setConditions([]); setSubmitted(false); setCurrent(0); }}
          style={{ border: "none", background: "none", color: "var(--color-muted-light)", fontSize: "0.7rem", cursor: "pointer", textDecoration: "underline", padding: 0 }}
        >
          Retake
        </button>

        <div style={{ marginTop: "28px", padding: "16px 20px", background: "var(--color-stone)", borderRadius: "6px", borderLeft: "3px solid var(--color-divider)" }}>
          <p style={{ fontSize: "0.7rem", color: "var(--color-muted)", lineHeight: 1.75, margin: 0 }}>
            <strong>Disclaimer:</strong> This tool is educational only. It does not diagnose, prescribe, determine medication eligibility, or replace a clinical consultation. Candidacy for any medication or treatment is determined by a licensed clinician after reviewing medical history, labs, contraindications, and goals.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", borderRadius: "8px", padding: "48px clamp(24px, 5vw, 56px)" }}>
      <div style={{ marginBottom: "32px" }}>
        <div className="eyebrow" style={{ marginBottom: "12px" }}>Weight Loss Readiness Check</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "var(--color-ink)", marginBottom: "8px" }}>5-Question Educational Assessment</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.7 }}>This tool helps you reflect on whether a medical weight loss consultation may be a useful next step. It does not diagnose or determine eligibility.</p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "0.65rem", color: "var(--color-muted-light)" }}>Question {current + 1} of {TOTAL_QUESTIONS}</span>
          <span style={{ fontSize: "0.65rem", color: "var(--color-teal)" }}>{answeredCount} answered</span>
        </div>
        <div style={{ height: "4px", background: "var(--color-stone)", borderRadius: "2px" }}>
          <div style={{ height: "4px", background: "var(--color-teal)", borderRadius: "2px", width: `${(answeredCount / TOTAL_QUESTIONS) * 100}%`, transition: "width 0.3s" }} />
        </div>
      </div>

      <div style={{ marginBottom: "28px" }}>
        {isConditionsQ ? (
          <>
            <p style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-ink)", lineHeight: 1.5, marginBottom: "6px" }}>Which of these apply to you?</p>
            <p style={{ fontSize: "0.78rem", color: "var(--color-muted-light)", marginBottom: "18px" }}>Select all that apply.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {CONDITIONS.map((condition) => {
                const selected = conditions.includes(condition);
                return (
                  <button
                    key={condition}
                    onClick={() => handleConditionToggle(condition)}
                    style={{ textAlign: "left", padding: "14px 18px", borderRadius: "6px", border: selected ? "2px solid var(--color-teal)" : "1.5px solid var(--color-divider)", background: selected ? "rgba(14,61,77,0.04)" : "#fff", color: "var(--color-ink)", fontSize: "0.88rem", cursor: "pointer", transition: "border-color 0.15s, background 0.15s", fontFamily: "var(--font-body)" }}
                  >
                    {condition}
                  </button>
                );
              })}
            </div>
          </>
        ) : singleQ ? (
          <>
            <p style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-ink)", lineHeight: 1.5, marginBottom: "20px" }}>{singleQ.text}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {singleQ.options.map((opt, i) => {
                const selected = singleAnswers[singleQ.id] === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleSingleSelect(singleQ.id, i)}
                    style={{ textAlign: "left", padding: "14px 18px", borderRadius: "6px", border: selected ? "2px solid var(--color-teal)" : "1.5px solid var(--color-divider)", background: selected ? "rgba(14,61,77,0.04)" : "#fff", color: "var(--color-ink)", fontSize: "0.88rem", cursor: "pointer", transition: "border-color 0.15s, background 0.15s", fontFamily: "var(--font-body)" }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </>
        ) : null}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        {current > 0 && (
          <button
            onClick={() => setCurrent((c) => c - 1)}
            style={{ border: "1.5px solid var(--color-divider)", background: "none", color: "var(--color-muted)", padding: "10px 20px", borderRadius: "6px", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}
          >
            Back
          </button>
        )}
        {current < TOTAL_QUESTIONS - 1 ? (
          <button
            onClick={() => setCurrent((c) => c + 1)}
            disabled={!currentAnswered}
            style={{ background: currentAnswered ? "var(--color-teal)" : "var(--color-stone)", color: currentAnswered ? "#fff" : "var(--color-muted-light)", padding: "10px 20px", borderRadius: "6px", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", cursor: currentAnswered ? "pointer" : "default", border: "none" }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            style={{ background: allAnswered ? "var(--color-gold)" : "var(--color-stone)", color: allAnswered ? "#fff" : "var(--color-muted-light)", padding: "12px 24px", borderRadius: "6px", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", cursor: allAnswered ? "pointer" : "default", border: "none" }}
          >
            View Results
          </button>
        )}
      </div>
    </div>
  );
}
