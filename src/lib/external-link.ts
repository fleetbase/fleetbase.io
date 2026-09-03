// Hosts we link to heavily but do not want to hand link equity to.
//
// The console is the single largest recipient of internal links on the site —
// /onboard alone takes 514 of them, because every "Get started" CTA points
// there. Those are app screens, not content: they carry no ranking value of
// their own, so the authority that flows into them is authority that never
// reaches the pages built to win buyers. The console is separately marked
// noindex; nofollow here stops the marketing site from feeding it in the first
// place.
const NO_EQUITY_HOSTS = ['console.fleetbase.io'];

function isNoEquityHref(href: string) {
  return NO_EQUITY_HOSTS.some(
    (host) => href.startsWith(`https://${host}`) || href.startsWith(`http://${host}`),
  );
}

/**
 * Build the `rel` value for an outbound link, preserving whatever the call site
 * already set and appending `nofollow` for hosts we deliberately do not pass
 * authority to. Returns `undefined` when there is nothing to set, so callers can
 * spread it onto an element without emitting an empty attribute.
 */
export function relForHref(href: string, existingRel?: string) {
  const tokens = new Set((existingRel ?? '').split(/\s+/).filter(Boolean));

  if (isNoEquityHref(href)) {
    tokens.add('nofollow');
  }

  return tokens.size > 0 ? Array.from(tokens).join(' ') : undefined;
}
