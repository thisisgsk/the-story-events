import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero/PageHero';
import BrandTimeline from '@/components/about/BrandTimeline/BrandTimeline';
import FounderNote from '@/components/about/FounderNote/FounderNote';
import TeamGrid from '@/components/about/TeamGrid/TeamGrid';
import TrustMarkers from '@/components/about/TrustMarkers/TrustMarkers';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us | Meet the Team Behind The Story Events',
  description:
    'Learn about The Story Events — our journey, our founder Nisha Kapoor, our team, and the philosophy that has guided 100+ extraordinary weddings across India.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Our Story, Our Promise"
        subtitle="Meet the team that transforms wedding dreams into extraordinary, lived realities."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80"
        height="lg"
      />
      <BrandTimeline />
      <FounderNote />
      <TeamGrid />
      <TrustMarkers />

      {/* Mini CTA */}
      <section className={styles.miniCta}>
        <div className="container">
          <AnimatedSection>
            <h2 className={styles.ctaTitle}>Ready to Meet Us?</h2>
            <p className={styles.ctaSubtitle}>We love getting to know the people behind the wedding. Let&apos;s have a conversation.</p>
            <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
