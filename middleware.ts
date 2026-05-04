import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * When GSC_LOCAL_MUTE=1 in .env.local, all localhost requests are rewritten to
 * the Google Search Console HTML verification file so you can confirm locally.
 * Production is unaffected unless that env var is set there (do not set it).
 */
export function middleware(request: NextRequest) {
  if (process.env.GSC_LOCAL_MUTE !== "1") {
    return NextResponse.next();
  }

  const host = request.headers.get("host") ?? "";
  const isLocal =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]");

  if (!isLocal) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  if (pathname === "/google6217edd756051041.html") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/google6217edd756051041.html";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
