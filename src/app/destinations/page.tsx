import type { Metadata } from 'next';
import ComingSoon from '@/components/ui/ComingSoon/ComingSoon';

export const metadata: Metadata = {
  title: 'Destinations | The Story Events',
  description: 'Coming soon — Explore our luxury wedding destinations.',
};

export default function DestinationsPage() {
  return <ComingSoon title="Destinations" />;
}
