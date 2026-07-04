import type { Metadata } from 'next';
import ComingSoon from '@/components/ui/ComingSoon/ComingSoon';

export const metadata: Metadata = {
  title: 'Portfolio | The Story Events',
  description: 'Coming soon — Our portfolio of luxury weddings.',
};

export default function PortfolioPage() {
  return <ComingSoon title="Our Portfolio" />;
}
