import { getOnfleetAlternativePage, OnfleetAlternativeLanding } from '../onfleet-alternative-pages';

const page = getOnfleetAlternativePage('onfleet-route-optimization-alternative');

export const metadata = page.metadata;

export default function OnfleetRouteOptimizationAlternativePage() {
  return <OnfleetAlternativeLanding page={page} />;
}
