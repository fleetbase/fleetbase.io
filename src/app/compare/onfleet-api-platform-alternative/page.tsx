import { getOnfleetAlternativePage, OnfleetAlternativeLanding } from '../onfleet-alternative-pages';

const page = getOnfleetAlternativePage('onfleet-api-platform-alternative');

export const metadata = page.metadata;

export default function OnfleetApiPlatformAlternativePage() {
  return <OnfleetAlternativeLanding page={page} />;
}
