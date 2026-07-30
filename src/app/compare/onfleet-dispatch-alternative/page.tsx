import { getOnfleetAlternativePage, OnfleetAlternativeLanding } from '../onfleet-alternative-pages';

const page = getOnfleetAlternativePage('onfleet-dispatch-alternative');

export const metadata = page.metadata;

export default function OnfleetDispatchAlternativePage() {
  return <OnfleetAlternativeLanding page={page} />;
}
