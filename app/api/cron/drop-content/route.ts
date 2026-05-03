/**
 * Cron-triggered deploy hook.
 *
 * Vercel hits this route on the schedule defined in vercel.json
 * ("0 11 * * 2,4" = every Tuesday and Thursday at 11:00 UTC / 06:00 CT).
 * The handler validates the auto-injected Authorization header and POSTs
 * to a Vercel Deploy Hook URL, which kicks off a fresh production build.
 * On rebuild, getAllBlogPosts() re-evaluates isPublished() against the
 * new build-time clock — newly-due posts appear; the rest stay hidden.
 *
 * Required env vars (set in Vercel → Project → Settings → Environment Variables):
 *   - CRON_SECRET            (auto-injected when crons are defined)
 *   - VERCEL_DEPLOY_HOOK_URL (manually created at Settings → Git → Deploy Hooks)
 */

export const runtime = "edge";

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;
  if (!hookUrl) {
    console.error("[cron/drop-content] VERCEL_DEPLOY_HOOK_URL is not configured");
    return new Response("No deploy hook configured", { status: 500 });
  }

  const timestamp = new Date().toISOString();
  console.log(`[cron/drop-content] ${timestamp} — triggering deploy hook`);

  const result = await fetch(hookUrl, { method: "POST" });

  if (!result.ok) {
    console.error(`[cron/drop-content] deploy hook failed: ${result.status} ${result.statusText}`);
    return new Response("Deploy hook failed", { status: 500 });
  }

  return new Response(
    JSON.stringify({
      triggered: true,
      timestamp,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
