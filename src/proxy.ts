import { type NextRequest, NextResponse } from "next/server";
import { LOCALE_COOKIE, type Locale, isLocale } from "@/i18n/config";

function preferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;
  const accepted = request.headers.get("accept-language") ?? "";
  return /^fr|,\s*fr/i.test(accepted) && !/^en/i.test(accepted) ? "fr" : "en";
}

export function proxy(request: NextRequest): NextResponse {
  const { pathname, search } = request.nextUrl;
  const segment = pathname.split("/")[1];
  if (isLocale(segment)) return NextResponse.next();
  return NextResponse.redirect(new URL(`/${preferredLocale(request)}${pathname === "/" ? "" : pathname}${search}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next|data|generated|icon.svg|favicon.ico|.*\\..*).*)"],
};
