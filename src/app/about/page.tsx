import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero/PageHero';
import BrandTimeline from '@/components/about/BrandTimeline/BrandTimeline';
import FounderNote from '@/components/about/FounderNote/FounderNote';
import PhilosophyPillar from '@/components/philosophy/PhilosophyPillar/PhilosophyPillar';
import WhatMakesUsDifferent from '@/components/about/WhatMakesUsDifferent/WhatMakesUsDifferent';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './about.module.css';

const pillars = [
  {
    number: '01',
    title: 'Planning Philosophy',
    tagline: 'Calm, Organised, Transparent',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=80',
    paragraphs: [
      'We believe stress is not a necessary part of wedding planning. It is a sign that something has not been communicated clearly enough, thought through carefully enough, or handed to the right person. At The Story Events, we eliminate the source of stress before it ever reaches you.',
      'From the first week, we establish a shared planning document — a living, breathing roadmap that evolves as your wedding takes shape. Every decision, every confirmation, every pending item is tracked in real time. You always know exactly where things stand. There are no surprises, no missed deadlines, no frantic last-minute calls.',
      'We maintain weekly check-ins and are reachable whenever you need clarity. We ask the difficult questions early — about family dynamics, budget buffers, alternate vendors — so that you never have to make a critical decision under pressure. Planning is a gift you give yourself. Let us help you unwrap it calmly.',
    ],
  },
  {
    number: '02',
    title: 'Décor Philosophy',
    tagline: 'Artful, Bespoke, Experiential',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80',
    paragraphs: [
      'We have never designed the same wedding twice. We refuse to. Every couple has a unique colour story, a unique mood, a unique way of experiencing beauty — and our décor must reflect that. We begin every design process with deep listening before we ever pick up a pencil.',
      'Our mood boards are not Pinterest collections — they are carefully considered visual narratives. We think about how the light will fall at sunset, how the floral arrangements will look as guests walk in for the first time, how the mandap will feel from twenty feet away and from two inches. We think about the moment, not just the photograph.',
      'And we never repeat. Not a centrepiece arrangement, not a colour combination, not a lighting concept. You are not borrowing someone else\'s wedding aesthetic. You are commissioning your own, from scratch, every time.',
    ],
  },
];

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
      
      {/* Planning Philosophy merged from old route */}
      <section style={{ paddingTop: 'var(--space-20)' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <AnimatedSection>
            <span className="section-label">Our Philosophy</span>
            <h2 className="section-title">The Foundation of Our Work</h2>
          </AnimatedSection>
        </div>
        {pillars.map((pillar, index) => (
          <PhilosophyPillar
            key={pillar.number}
            number={pillar.number}
            title={pillar.title}
            tagline={pillar.tagline}
            paragraphs={pillar.paragraphs}
            image={pillar.image}
            reversed={index % 2 !== 0}
          />
        ))}
      </section>

      <WhatMakesUsDifferent />

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
