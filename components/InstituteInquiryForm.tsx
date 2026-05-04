"use client";

/**
 * Institute inquiry form — used on /institute, all 5 institute matrix pages,
 * and /travis. Submits to /api/institute which forwards to Travis via Resend.
 */

import { useState, type FormEvent } from "react";

const ORIGIN_OPTIONS = [
  "Current Revitalize patient",
  "Found the Institute online",
  "Read Travis's book",
  "Heard Travis on a podcast",
  "Referred by someone",
];

const GOAL_OPTIONS = [
  "Hormone optimization",
  "Weight loss",
  "Metabolic health",
  "Men's health",
  "Women's health",
  "General wellness",
];

type Status = "idle" | "submitting" | "success" | "error";

export interface InstituteInquiryFormProps {
  heading?: string;
  subheading?: string;
}

export default function InstituteInquiryForm({
  heading = "Apply for Coaching",
  subheading = "Tell Travis a bit about your situation. He reviews every application personally and will follow up directly.",
}: InstituteInquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      origin: String(formData.get("origin") ?? ""),
      primaryGoal: String(formData.get("primaryGoal") ?? ""),
      situation: String(formData.get("situation") ?? ""),
    };

    try {
      const res = await fetch("/api/institute", {
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
          padding: "36px 32px",
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
          Application received
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
          Thank you. Travis will be in touch directly.
        </h3>
        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.7,
            color: "var(--color-muted)",
          }}
        >
          Travis personally reviews every application. You can expect to hear
          back within five business days about whether the program is a fit and
          what the next step looks like.
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
        Rebuild Metabolic Health Institute
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
        {heading}
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          lineHeight: 1.7,
          color: "var(--color-muted)",
          marginBottom: "24px",
        }}
      >
        {subheading}
      </p>

      <Field label="Full name *">
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          style={inputStyle}
        />
      </Field>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}
        className="iif-row"
      >
        <Field label="Email *">
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            style={inputStyle}
          />
        </Field>
        <Field label="Phone">
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            style={inputStyle}
          />
        </Field>
      </div>

      <Field label="What brings you to the Institute?">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "4px",
          }}
        >
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
              <input
                type="radio"
                name="origin"
                value={o}
                style={{ accentColor: "var(--color-teal)" }}
              />
              {o}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Primary health goal">
        <select name="primaryGoal" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Select…
          </option>
          {GOAL_OPTIONS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell Travis about your situation *">
        <textarea
          name="situation"
          required
          rows={5}
          placeholder="What you have tried, what is not working, what you want to feel like — anything that helps Travis understand the picture."
          style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
        />
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
          Something went wrong sending your application: {errorMsg}. Please try
          again.
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
        {status === "submitting" ? "Sending…" : "Apply for Coaching"}
      </button>

      <style>{`
        @media (max-width: 560px) {
          .iif-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
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
