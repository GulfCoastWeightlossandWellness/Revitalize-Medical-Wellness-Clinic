"use client";

/**
 * Universal contact form used across the site (homepage, contact page, every
 * service page via ServicePage template, every location-service combo,
 * symptom + compare pages, book page).
 *
 * Submits to /api/contact which forwards to Travis via Resend.
 *
 * Props:
 *   defaultInterests — pre-selected checkbox values, e.g. when this form is
 *     embedded on a hormone service page, pass ["Hormone Therapy — Women"]
 *     so the patient does not have to re-tick it.
 *   heading / subheading — overrideable; defaults shown.
 *   compact — tighter padding/typography for sidebar/inline contexts.
 */

import { useState, type FormEvent } from "react";

export interface UniversalContactFormProps {
  defaultInterests?: string[];
  heading?: string;
  subheading?: string;
  compact?: boolean;
}

const INTEREST_OPTIONS = [
  "Hormone Therapy — Women",
  "Hormone Therapy — Men / Testosterone",
  "Testosterone Injections",
  "Medical Weight Loss / GLP-1",
  "Aesthetic Services",
  "IV Hydration",
  "Hair Restoration",
  "Sexual Wellness",
  "Rebuild Institute / Coaching",
  "Travis's Book",
  "General Question",
];

const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "Google Maps",
  "Referral",
  "Social Media",
  "Podcast",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function UniversalContactForm({
  defaultInterests = [],
  heading = "Request a Consultation",
  subheading = "Tell us a little about what brought you here. Travis or his team will follow up directly.",
  compact = false,
}: UniversalContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [interests, setInterests] = useState<string[]>(defaultInterests);

  const padX = compact ? "20px" : "clamp(24px, 4vw, 36px)";
  const padY = compact ? "24px" : "clamp(28px, 4vw, 40px)";
  const headingSize = compact ? "1.2rem" : "clamp(1.4rem, 2.4vw, 1.8rem)";

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value],
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      preferredLocation: String(formData.get("preferredLocation") ?? ""),
      interests,
      hearAbout: String(formData.get("hearAbout") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
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
          padding: padY + " " + padX,
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
          Message received
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: headingSize,
            fontWeight: 400,
            color: "var(--color-ink)",
            marginBottom: "12px",
          }}
        >
          Thank you. Your message is on the way to Travis.
        </h3>
        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.7,
            color: "var(--color-muted)",
          }}
        >
          We typically respond within one business day. For urgent scheduling,
          you can also call either location during business hours.
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
        padding: padY + " " + padX,
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
        Contact Travis
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: headingSize,
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
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "14px",
        }}
        className="ucf-row"
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

      <Field label="Preferred location">
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "4px" }}>
          {["Columbus", "Warner Robins", "Virtual / Online"].map((loc) => (
            <label
              key={loc}
              style={{
                fontSize: "0.85rem",
                color: "var(--color-muted)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                name="preferredLocation"
                value={loc}
                defaultChecked={loc === "Columbus"}
                style={{ accentColor: "var(--color-teal)" }}
              />
              {loc}
            </label>
          ))}
        </div>
      </Field>

      <Field label="I am interested in">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px 16px",
            marginTop: "4px",
          }}
          className="ucf-checkboxes"
        >
          {INTEREST_OPTIONS.map((opt) => (
            <label
              key={opt}
              style={{
                fontSize: "0.82rem",
                color: "var(--color-muted)",
                display: "flex",
                alignItems: "flex-start",
                gap: "6px",
                cursor: "pointer",
                lineHeight: 1.4,
              }}
            >
              <input
                type="checkbox"
                checked={interests.includes(opt)}
                onChange={() => toggleInterest(opt)}
                style={{ accentColor: "var(--color-teal)", marginTop: "3px" }}
              />
              {opt}
            </label>
          ))}
        </div>
      </Field>

      <Field label="How did you hear about us?">
        <select name="hearAbout" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Select…
          </option>
          {HEAR_ABOUT_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Anything you want to share?">
        <textarea
          name="message"
          rows={4}
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
          Something went wrong sending your message: {errorMsg}. Please try
          again, or call us directly.
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
        {status === "submitting" ? "Sending…" : "Request a Consultation"}
      </button>

      <style>{`
        @media (max-width: 560px) {
          .ucf-row { grid-template-columns: 1fr !important; }
          .ucf-checkboxes { grid-template-columns: 1fr !important; }
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
