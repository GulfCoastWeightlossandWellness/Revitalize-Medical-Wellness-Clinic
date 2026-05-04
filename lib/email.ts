/**
 * Isolated email send function. Currently wraps Resend; designed so that the
 * provider can be swapped (Cloudflare Email API, SES, anything else) by
 * changing only this file. Callers depend on the exported send signature,
 * not the underlying SDK.
 *
 * Required env: RESEND_API_KEY (set in Vercel production env).
 */

import { Resend } from "resend";

export const PRIMARY_EMAIL = "travis@rebuildmetabolichealth.com";
export const FROM_EMAIL = "noreply@revitalizemedicalclinic.com";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailArgs {
  subject: string;
  html: string;
}

/**
 * Send an email to the primary inbox (Travis). All site notifications route
 * here. Reply-to is also set to PRIMARY_EMAIL so replies go directly to Travis.
 *
 * Returns the Resend response on success and throws on failure — callers
 * should wrap in try/catch and surface a 500 to the client.
 */
export async function sendEmail({ subject, html }: SendEmailArgs) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  // ── Cloudflare Email API swap point ────────────────────────────────────
  // When migrating to Cloudflare Email Workers, replace the resend.emails.send
  // call below with the Cloudflare equivalent. The PRIMARY_EMAIL / FROM_EMAIL
  // constants and the SendEmailArgs signature do not need to change.
  const result = await resend.emails.send({
    from: `Revitalize Website <${FROM_EMAIL}>`,
    to: PRIMARY_EMAIL,
    replyTo: PRIMARY_EMAIL,
    subject,
    html,
  });

  if (result.error) {
    throw new Error(`Resend send failed: ${result.error.message}`);
  }

  return result;
}
