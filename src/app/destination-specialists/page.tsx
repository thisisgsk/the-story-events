import type { Metadata } from 'next';
import ComingSoon from '@/components/ui/ComingSoon/ComingSoon';

export const metadata: Metadata = {
  title: 'Destination Specialists | The Story Events',
  description: 'Coming soon — Destination wedding specialists.',
};

export default function DestinationSpecialistsPage() {
  return <ComingSoon title="Destination Specialists" />;
}
