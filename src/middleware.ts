import { clerkMiddleware } from '@clerk/nextjs/server';

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n, LanguageType } from "./i18n.config";

// -----------------------------------------------------------------------------------------------------
// 'localhost.3000' in url will give error so make it self direct path to 'localhost.3000/en' as 'en' here is the default language
// need to install 'npm i -D @types/negotiator' , 'npm i @formatjs/intl-localematcher'
function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: LanguageType[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  let locale = "";
  
  try {
    locale = matchLocale(languages, locales, i18n.defaultLocale);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (error: any) {
    locale = i18n.defaultLocale;
  }

  return locale;
}
// -----------------------------------------------------------------------------------------------------

export default clerkMiddleware(async (auth, request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
});

// -----------------------------------------------------------------------------------------------------
// default export provided above via clerkMiddleware callback

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};