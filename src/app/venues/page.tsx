import type { Metadata } from 'next';
import ComingSoon from '@/components/ui/ComingSoon/ComingSoon';

export const metadata: Metadata = {
  title: 'Venues | The Story Events',
  description: 'Coming soon — Discover exclusive wedding venues.',
};

export default function VenuesPage() {
  return <ComingSoon title="Venues" />;
}
