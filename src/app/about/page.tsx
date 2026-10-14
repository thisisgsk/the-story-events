import type { Metadata } from 'next';
import AboutCoverHero from '@/components/about/AboutCoverHero/AboutCoverHero';
import AboutIntro from '@/components/about/AboutIntro/AboutIntro';
import BrandTimeline from '@/components/about/BrandTimeline/BrandTimeline';
import FounderNote from '@/components/about/FounderNote/FounderNote';
import PartnerLogos from '@/components/about/PartnerLogos/PartnerLogos';
import CtaBanner from '@/components/home/CtaBanner/CtaBanner';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about The Story Events — how we started in 2018 as a wedding consultancy and grew into planning, production, catering and styling, and destination weddings.',
};

export default function AboutPage() {
  return (
    <>
      <AboutCoverHero />
      <AboutIntro />
      <BrandTimeline />
      <FounderNote />
      <PartnerLogos />
      <CtaBanner />
    </>
  );
}
