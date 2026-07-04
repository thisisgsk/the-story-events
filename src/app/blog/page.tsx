import type { Metadata } from 'next';
import ComingSoon from '@/components/ui/ComingSoon/ComingSoon';

export const metadata: Metadata = {
  title: 'Blog | The Story Events',
  description: 'Coming soon — Insights and inspiration from The Story Events.',
};

export default function BlogPage() {
  return <ComingSoon title="The Journal & Blog" />;
}
