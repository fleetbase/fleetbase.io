import { getOnfleetAlternativePage, OnfleetAlternativeLanding } from '../onfleet-alternative-pages';

const page = getOnfleetAlternativePage('onfleet-driver-app-pod-alternative');

export const metadata = page.metadata;

export default function OnfleetDriverAppPodAlternativePage() {
  return <OnfleetAlternativeLanding page={page} />;
}
