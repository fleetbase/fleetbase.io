import { getOnfleetAlternativePage, OnfleetAlternativeLanding } from '../onfleet-alternative-pages';

const page = getOnfleetAlternativePage('onfleet-tracking-notifications-alternative');

export const metadata = page.metadata;

export default function OnfleetTrackingNotificationsAlternativePage() {
  return <OnfleetAlternativeLanding page={page} />;
}
