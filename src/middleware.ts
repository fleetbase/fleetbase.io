import { type NextRequest, NextResponse } from 'next/server';

// Tracking parameters that identify where a visit came from but never change
// what the page renders. Links from the old blog subdomain append
// ?ref=blog.fleetbase.io, which gave crawlers a second, indexable copy of every
// high-value marketing page. Canonical tags already point at the clean path, so
// this is belt-and-braces: redirect the parameter away before a crawler can
// treat the URL as a page in its own right.
//
// The HTTP Referer header still carries the referral, so analytics attribution
// is unaffected.
const STRIPPED_QUERY_PARAMS = ['ref'];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const stripped = STRIPPED_QUERY_PARAMS.filter((param) =>
    url.searchParams.has(param),
  );

  if (stripped.length === 0) {
    return NextResponse.next();
  }

  for (const param of stripped) {
    url.searchParams.delete(param);
  }

  // 308 rather than 302: the clean path is the permanent home of the content,
  // and it preserves the request method.
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip API routes, Next internals and static assets — none of them are
  // indexable, and keeping them out avoids paying middleware latency on every
  // asset request.
  matcher: [
    '/((?!api/|ingest/|gtm/|g/collect|_next/static|_next/image|images/|favicon).*)',
  ],
};
