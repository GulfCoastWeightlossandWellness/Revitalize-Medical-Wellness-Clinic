/**
 * /api/contact — accepts UniversalContactForm submissions and forwards via
 * Resend to Travis. Validates required fields server-side (defense in depth;
 * the client form also validates).
 */

import { sendEmail } from "@/lib/email";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  preferredLocation?: string;
  interests?: string[];
  hearAbout?: string;
  message?: string;
}

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
  return `<tr><td style="padding:8px 16px;background:#f5f1ea;font-weight:600;color:#0E3D4D;vertical-align:top;width:160px;">${escapeHtml(label)}</td><td style="padding:8px 16px;color:#1A2B30;">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: Request) {
  // Fail fast with a clear message if the env var is missing — this is the
  // most common local-dev failure mode (RESEND_API_KEY lives in Vercel
  // production env but isn't in .env.local).
  if (!process.env.RESEND_API_KEY) {
    console.error(
      "[/api/contact] RESEND_API_KEY not configured — set it in .env.local for local dev or in Vercel env for production",
    );
    return Response.json(
      { error: "RESEND_API_KEY not configured" },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch (e) {
    console.error("[/api/contact] JSON parse error:", e);
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  if (!name || !email) {
    return Response.json(
      { error: "Name and email are required" },
      { status: 400 },
    );
  }
  // Basic email shape check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email address" }, { status: 400 });
  }

  const interestsList = (body.interests ?? []).join(", ");
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "short",
  });

  const html = `<!doctype html>
<html><body style="font-family:Inter,Arial,sans-serif;background:#F8F6F3;margin:0;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #D8D2CA;">
    <div style="background:#0E3D4D;padding:24px;color:#fff;">
      <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#C9A86C;font-weight:600;margin-bottom:8px;">Revitalize Website</div>
      <h1 style="margin:0;font-size:20px;font-weight:400;font-family:Georgia,serif;">New Consultation Request</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
      ${row("Name", name)}
      ${row("Email", email)}
      ${row("Phone", body.phone)}
      ${row("Preferred Location", body.preferredLocation)}
      ${row("Interested In", interestsList)}
      ${row("Heard About Us Via", body.hearAbout)}
      ${body.message ? `<tr><td colspan="2" style="padding:16px;border-top:1px solid #EDE9E4;"><div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#0E3D4D;font-weight:600;margin-bottom:8px;">Message</div><div style="white-space:pre-wrap;color:#1A2B30;">${escapeHtml(body.message)}</div></td></tr>` : ""}
      ${row("Submitted", submittedAt)}
    </table>
    <div style="padding:16px 24px;background:#EDE9E4;font-size:11px;color:#5A7A82;">
      Reply directly to this email to respond to ${escapeHtml(name)}.
    </div>
  </div>
</body></html>`;

  try {
    const result = await sendEmail({
      subject: "New Consultation Request — Revitalize",
      html,
    });
    console.log("[/api/contact] Resend send OK:", {
      to: "travis@rebuildmetabolichealth.com",
      from: name,
      fromEmail: email,
      resendId: result?.data?.id,
    });
    return Response.json({ success: true });
  } catch (e) {
    // Full error dump — helpful when debugging Resend SDK responses, network
    // failures, malformed HTML, or rate limits.
    console.error("[/api/contact] Resend send FAILED");
    console.error("  error:", e);
    if (e instanceof Error) {
      console.error("  name:", e.name);
      console.error("  message:", e.message);
      console.error("  stack:", e.stack);
    }
    const message = e instanceof Error ? e.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
