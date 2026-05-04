/**
 * /api/institute-apply — accepts tier-specific applications from
 * /institute/{core,elite,metabolic-year}. Forwards to Travis with
 * tier-color-coded styling and sends an auto-reply confirmation
 * to the applicant.
 *
 * Validation mirrors /api/institute (server-side defense in depth).
 */

import { sendEmail, sendEmailTo, PRIMARY_EMAIL } from "@/lib/email";
import { INSTITUTE_PRICING, type InstituteTierSlug } from "@/lib/constants";

interface ApplyPayload {
  tier?: string;
  name?: string;
  email?: string;
  phone?: string;
  age?: string;
  state?: string;
  origin?: string;
  situation?: string;
  labContext?: string;
  meds?: string;
  successDefinition?: string;
  timeline?: string;
}

const TIER_ACCENTS: Record<InstituteTierSlug, { bg: string; label: string }> = {
  core: { bg: "#0E3D4D", label: "Core" },
  elite: { bg: "#103847", label: "Elite" },
  "metabolic-year": { bg: "#0a2a36", label: "Metabolic Year" },
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<tr><td style="padding:8px 16px;background:#f5f1ea;font-weight:600;color:#0E3D4D;vertical-align:top;width:200px;">${escapeHtml(label)}</td><td style="padding:8px 16px;color:#1A2B30;">${escapeHtml(value)}</td></tr>`;
}

function block(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<tr><td colspan="2" style="padding:16px;border-top:1px solid #EDE9E4;"><div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#0E3D4D;font-weight:600;margin-bottom:8px;">${escapeHtml(label)}</div><div style="white-space:pre-wrap;color:#1A2B30;line-height:1.6;">${escapeHtml(value)}</div></td></tr>`;
}

function isValidTier(t: string | undefined): t is InstituteTierSlug {
  return t === "core" || t === "elite" || t === "metabolic-year";
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error(
      "[/api/institute-apply] RESEND_API_KEY not configured — set it in .env.local for local dev or in Vercel env for production",
    );
    return Response.json(
      { error: "RESEND_API_KEY not configured" },
      { status: 500 },
    );
  }

  let body: ApplyPayload;
  try {
    body = (await request.json()) as ApplyPayload;
  } catch (e) {
    console.error("[/api/institute-apply] JSON parse error:", e);
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValidTier(body.tier)) {
    return Response.json(
      { error: "Invalid or missing tier" },
      { status: 400 },
    );
  }
  const tier = body.tier;
  const tierInfo = INSTITUTE_PRICING[tier];
  const accent = TIER_ACCENTS[tier];

  const name = body.name?.trim();
  const email = body.email?.trim();
  const situation = body.situation?.trim();
  if (!name || !email || !situation) {
    return Response.json(
      { error: "Name, email, and the situation field are required" },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email address" }, { status: 400 });
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "short",
  });

  // ── Travis-facing email ─────────────────────────────────────────────────
  const travisHtml = `<!doctype html>
<html><body style="font-family:Inter,Arial,sans-serif;background:#F8F6F3;margin:0;padding:24px;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #D8D2CA;">
    <div style="background:${accent.bg};padding:24px;color:#fff;">
      <div style="font-size:11px;letter-spacing:0.24em;text-transform:uppercase;color:#C9A86C;font-weight:600;margin-bottom:8px;">Rebuild Metabolic Health Institute · ${escapeHtml(accent.label)} · ${escapeHtml(tierInfo.price)}</div>
      <h1 style="margin:0;font-size:22px;font-weight:400;font-family:Georgia,serif;">New ${escapeHtml(accent.label)} Application</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
      ${row("Name", name)}
      ${row("Email", email)}
      ${row("Phone", body.phone)}
      ${row("Age", body.age)}
      ${row("State", body.state)}
      ${row("How They Found The Institute", body.origin)}
      ${row("Timeline", body.timeline)}
      ${block("What They Want To Solve", situation)}
      ${block("Lab Context", body.labContext)}
      ${block("Current Medications / Supplements", body.meds)}
      ${block("Their Definition Of Success (12-month)", body.successDefinition)}
      ${row("Submitted", submittedAt)}
    </table>
    <div style="padding:16px 24px;background:#EDE9E4;font-size:11px;color:#5A7A82;">
      Reply directly to this email to respond to ${escapeHtml(name)}.
    </div>
  </div>
</body></html>`;

  // ── Applicant auto-reply confirmation ──────────────────────────────────
  const applicantHtml = `<!doctype html>
<html><body style="font-family:Inter,Arial,sans-serif;background:#F8F6F3;margin:0;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #D8D2CA;">
    <div style="background:${accent.bg};padding:28px 24px;color:#fff;">
      <div style="font-size:11px;letter-spacing:0.24em;text-transform:uppercase;color:#C9A86C;font-weight:600;margin-bottom:10px;">Rebuild Metabolic Health Institute</div>
      <h1 style="margin:0;font-size:22px;font-weight:400;font-family:Georgia,serif;line-height:1.25;">We received your ${escapeHtml(accent.label)} application.</h1>
    </div>
    <div style="padding:28px 24px;color:#1A2B30;font-size:15px;line-height:1.7;">
      <p style="margin:0 0 16px;">Hi ${escapeHtml(name.split(" ")[0] ?? name)},</p>
      <p style="margin:0 0 16px;">Thanks for applying to the ${escapeHtml(accent.label)} program. I read every application personally — not a screener, not a chatbot.</p>
      <p style="margin:0 0 16px;">You'll hear back from me within five business days. I'll either confirm fit and walk you through the enrollment step, or — if I think a different tier or an entirely different path is right for you — I'll tell you that too.</p>
      <p style="margin:0 0 16px;">If anything urgent comes up in the meantime, you can reply directly to this email and it lands in my inbox.</p>
      <p style="margin:0 0 4px;">Travis Woodley, MSN, RN, CRNP</p>
      <p style="margin:0;color:#5A7A82;font-size:13px;">Founder, Rebuild Metabolic Health Institute</p>
    </div>
    <div style="padding:16px 24px;background:#EDE9E4;font-size:11px;color:#5A7A82;line-height:1.6;">
      The Rebuild Metabolic Health Institute is an education and coaching program. It is not a substitute for medical care. Clinical care happens at Revitalize Aesthetics &amp; Wellness.
    </div>
  </div>
</body></html>`;

  // Send Travis-facing email first; if that fails, return 500 (the
  // applicant won't get an auto-reply for an application that didn't
  // actually reach Travis). If Travis send succeeds but applicant
  // auto-reply fails, log it but still return success — Travis got the lead.
  try {
    const result = await sendEmail({
      subject: `New ${accent.label} Application — Rebuild Metabolic Health`,
      html: travisHtml,
    });
    console.log("[/api/institute-apply] Travis email OK:", {
      tier,
      to: PRIMARY_EMAIL,
      from: name,
      fromEmail: email,
      resendId: result?.data?.id,
    });
  } catch (e) {
    console.error("[/api/institute-apply] Travis email FAILED");
    console.error("  error:", e);
    if (e instanceof Error) {
      console.error("  message:", e.message);
      console.error("  stack:", e.stack);
    }
    const message = e instanceof Error ? e.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }

  try {
    const replyResult = await sendEmailTo({
      to: email,
      subject: `Application received — ${accent.label} (Rebuild Metabolic Health Institute)`,
      html: applicantHtml,
      fromName: "Travis Woodley · Rebuild Metabolic Health",
      replyTo: PRIMARY_EMAIL,
    });
    console.log("[/api/institute-apply] Applicant auto-reply OK:", {
      to: email,
      resendId: replyResult?.data?.id,
    });
  } catch (e) {
    // Auto-reply failure is non-fatal — the lead still reached Travis.
    console.error("[/api/institute-apply] Applicant auto-reply FAILED (non-fatal):", e);
  }

  return Response.json({ success: true });
}
