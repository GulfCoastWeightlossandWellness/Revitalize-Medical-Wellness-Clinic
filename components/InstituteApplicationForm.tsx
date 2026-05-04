"use client";

/**
 * Tier-aware application form. Used on /institute/core, /institute/elite, and
 * /institute/metabolic-year. Submits to /api/institute-apply, which forwards
 * to Travis with tier-color-coded styling and sends an auto-reply confirmation
 * to the applicant.
 *
 * Field depth scales with tier: Core asks the basics, Elite adds clinical
 * background, Metabolic Year adds longer-term context (12-month commitment).
 */

import { useState, type FormEvent } from "react";
import type { InstituteTierSlug } from "@/lib/constants";

const ORIGIN_OPTIONS = [
  "Current Revitalize patient",
  "Found the Institute online",
  "Read Travis's book",
  "Heard Travis on a podcast",
  "Referred by someone",
];

const TIMELINE_OPTIONS = [
  "Ready to start now",
  "Within 30 days",
  "Within 60–90 days",
  "Exploring — no specific timeline",
];

type Status = "idle" | "submitting" | "success" | "error";

export interface InstituteApplicationFormProps {
  tier: InstituteTierSlug;
  tierName: string;
  tierPrice: string;
}

export default function InstituteApplicationForm({
  tier,
  tierName,
  tierPrice,
}: InstituteApplicationFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = { tier };
    for (const [k, v] of fd.entries()) {
      payload[k] = String(v);
    }

    try {
      const res = await fetch("/api/institute-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? `Server returned ${res.status}`);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid var(--color-divider)",
          borderRadius: "8px",
          padding: "40px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          {tierName} application received
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.6rem",
            fontWeight: 400,
            color: "var(--color-ink)",
            marginBottom: "12px",
          }}
        >
          Thank you. Travis will be in touch.
        </h3>
        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.7,
            color: "var(--color-muted)",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          A confirmation has been sent to your email. Travis personally reviews
          every application — expect to hear back within five business days
          about fit and the next step.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "1px solid var(--color-divider)",
        borderRadius: "8px",
        padding: "clamp(28px, 4vw, 40px) clamp(24px, 4vw, 36px)",
      }}
    >
      <div
        style={{
          fontSize: "0.58rem",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "var(--color-gold)",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        Apply — {tierName} · {tierPrice}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.4rem, 2.4vw, 1.8rem)",
          fontWeight: 400,
          color: "var(--color-ink)",
          marginBottom: "8px",
          lineHeight: 1.2,
        }}
      >
        Apply for {tierName}
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          lineHeight: 1.7,
          color: "var(--color-muted)",
          marginBottom: "24px",
        }}
      >
        Travis reads every application himself. The more clearly you describe
        your situation, the better the first conversation goes.
      </p>

      <Field label="Full name *">
        <input name="name" type="text" required autoComplete="name" style={inputStyle} />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="iaf-row">
        <Field label="Email *">
          <input name="email" type="email" required autoComplete="email" style={inputStyle} />
        </Field>
        <Field label="Phone">
          <input name="phone" type="tel" autoComplete="tel" style={inputStyle} />
        </Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="iaf-row">
        <Field label="Age">
          <input name="age" type="number" min={18} max={99} style={inputStyle} />
        </Field>
        <Field label="State of residence">
          <input name="state" type="text" autoComplete="address-level1" style={inputStyle} />
        </Field>
      </div>

      <Field label="How did you find the Institute?">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
          {ORIGIN_OPTIONS.map((o) => (
            <label
              key={o}
              style={{
                fontSize: "0.85rem",
                color: "var(--color-muted)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              <input type="radio" name="origin" value={o} style={{ accentColor: "var(--color-teal)" }} />
              {o}
            </label>
          ))}
        </div>
      </Field>

      <Field label="What are you trying to solve? *">
        <textarea
          name="situation"
          required
          rows={5}
          placeholder="What you're experiencing, what you've tried, what hasn't worked, what you want to feel like."
          style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
        />
      </Field>

      {/* Tier-specific deeper questions */}
      {(tier === "elite" || tier === "metabolic-year") && (
        <>
          <Field label="Recent labs — what do you know about your numbers?">
            <textarea
              name="labContext"
              rows={3}
              placeholder="Approximate testosterone, thyroid panel, metabolic markers, fasting insulin — anything you've had measured. Or 'haven't had labs done in years.'"
              style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
            />
          </Field>
          <Field label="Current medications, supplements, or hormone therapy">
            <textarea
              name="meds"
              rows={3}
              placeholder="Anything you're taking — including OTC supplements and previous TRT, thyroid meds, GLP-1s, etc."
              style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
            />
          </Field>
        </>
      )}

      {tier === "metabolic-year" && (
        <Field label="What does success at 12 months look like to you?">
          <textarea
            name="successDefinition"
            rows={3}
            placeholder="The Metabolic Year is a year-long commitment. What needs to be true a year from now for you to call this a win?"
            style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
          />
        </Field>
      )}

      <Field label="Timeline">
        <select name="timeline" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Select…
          </option>
          {TIMELINE_OPTIONS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      {status === "error" && (
        <div
          style={{
            fontSize: "0.82rem",
            color: "#a83232",
            background: "#fdf3f3",
            border: "1px solid #f3c8c8",
            borderRadius: "6px",
            padding: "10px 14px",
            marginBottom: "14px",
          }}
        >
          Something went wrong sending your application: {errorMsg}. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          background: "var(--color-gold)",
          color: "#fff",
          padding: "14px 28px",
          borderRadius: "6px",
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          border: "none",
          cursor: status === "submitting" ? "wait" : "pointer",
          opacity: status === "submitting" ? 0.7 : 1,
          width: "100%",
        }}
      >
        {status === "submitting" ? "Sending…" : `Apply for ${tierName}`}
      </button>

      <p
        style={{
          fontSize: "0.72rem",
          lineHeight: 1.6,
          color: "var(--color-muted)",
          textAlign: "center",
          marginTop: "14px",
        }}
      >
        Submitting an application does not enroll you in the program. Travis
        will review and follow up to discuss whether {tierName} is the right
        fit.
      </p>

      <style>{`
        @media (max-width: 560px) {
          .iaf-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "block", marginBottom: "16px" }}>
      <div
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--color-ink)",
          fontWeight: 600,
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      {children}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid var(--color-divider)",
  borderRadius: "6px",
  fontSize: "0.9rem",
  fontFamily: "var(--font-body)",
  color: "var(--color-ink)",
  background: "#fff",
  boxSizing: "border-box",
};
