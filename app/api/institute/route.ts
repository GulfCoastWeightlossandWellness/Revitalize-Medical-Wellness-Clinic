/**
 * /api/institute — accepts InstituteInquiryForm submissions and forwards via
 * Resend to Travis. Same validation pattern as /api/contact.
 */

import { sendEmail } from "@/lib/email";

interface InstitutePayload {
  name?: string;
  email?: string;
  phone?: string;
  origin?: string;
  primaryGoal?: string;
  situation?: string;
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
  return `<tr><td style="padding:8px 16px;background:#f5f1ea;font-weight:600;color:#0E3D4D;vertical-align:top;width:180px;">${escapeHtml(label)}</td><td style="padding:8px 16px;color:#1A2B30;">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: Request) {
  let body: InstitutePayload;
  try {
    body = (await request.json()) as InstitutePayload;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const situation = body.situation?.trim();
  if (!name || !email || !situation) {
    return Response.json(
      { error: "Name, email, and situation description are required" },
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

  const html = `<!doctype html>
<html><body style="font-family:Inter,Arial,sans-serif;background:#F8F6F3;margin:0;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #D8D2CA;">
    <div style="background:#0E3D4D;padding:24px;color:#fff;">
      <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#C9A86C;font-weight:600;margin-bottom:8px;">Rebuild Metabolic Health Institute</div>
      <h1 style="margin:0;font-size:20px;font-weight:400;font-family:Georgia,serif;">New Coaching Inquiry</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
      ${row("Name", name)}
      ${row("Email", email)}
      ${row("Phone", body.phone)}
      ${row("How They Found The Institute", body.origin)}
      ${row("Primary Health Goal", body.primaryGoal)}
      <tr><td colspan="2" style="padding:16px;border-top:1px solid #EDE9E4;"><div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#0E3D4D;font-weight:600;margin-bottom:8px;">Their Situation</div><div style="white-space:pre-wrap;color:#1A2B30;">${escapeHtml(situation)}</div></td></tr>
      ${row("Submitted", submittedAt)}
    </table>
    <div style="padding:16px 24px;background:#EDE9E4;font-size:11px;color:#5A7A82;">
      Reply directly to this email to respond to ${escapeHtml(name)}.
    </div>
  </div>
</body></html>`;

  try {
    await sendEmail({
      subject: "New Institute Inquiry — Rebuild Metabolic Health",
      html,
    });
    return Response.json({ success: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
