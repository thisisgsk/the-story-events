import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero/PageHero';
import PhilosophyPillar from '@/components/philosophy/PhilosophyPillar/PhilosophyPillar';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './philosophy.module.css';

export const metadata: Metadata = {
  title: 'Our Philosophy | The Five Pillars of The Story Events',
  description:
    'Discover the five guiding principles behind The Story Events — Planning, Décor, Hospitality, Coordination, and Family Experience — and why they make every wedding extraordinary.',
};

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
  {
    number: '03',
    title: 'Hospitality Philosophy',
    tagline: 'Unmatched Warmth, White-Glove Treatment',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
    paragraphs: [
      'Your guests are your most important audience. They have travelled, taken time off, bought gifts, and shown up for you. The way they are received, cared for, and sent home matters deeply — not just to them, but to you. We take this seriously.',
      'Every guest receives a personalised welcome kit with local information, event schedules, and thoughtful touches that reflect your personalities as a couple. Transfers are seamless. Dietary needs are anticipated. Elderly guests have companions. Children have activities. No one is ever standing in a corner wondering what to do or where to go.',
      'The standard we set is simple: every guest should feel like a VIP. Not because they paid for it, but because they matter to you — and that is enough.',
    ],
  },
  {
    number: '04',
    title: 'Coordination Philosophy',
    tagline: 'Flawless Precision Behind the Curtain',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80',
    paragraphs: [
      'The best wedding coordination is invisible. When everything runs exactly as it should — when the florist arrives on time, when the photographer knows exactly where to stand, when the sound check happens without anyone noticing — guests never think about coordination at all. That is precisely the point.',
      'We operate with a minute-by-minute event timeline shared with every vendor. Our shadow team handles every issue before it becomes visible. We have contingency protocols for power outages, weather changes, vendor no-shows, and every other scenario that couples hope will never happen. Most of them never do. But we are always ready.',
      'On your wedding day, you will never hear us say "there is a problem." You will never know about the caterer who was fifteen minutes late or the microphone that needed a new battery. You will only know the version of your wedding that went perfectly. That is not an accident — it is our craft.',
    ],
  },
  {
    number: '05',
    title: 'Family Experience Philosophy',
    tagline: 'The Parents Deserve to Dance Too',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80',
    paragraphs: [
      'Parents of the couple carry perhaps the heaviest emotional weight on a wedding day. They have raised you, dreamed of this day, and usually contributed to making it possible. The last thing they should be doing on your wedding day is answering vendor calls, managing seating disputes, or chasing down the caterer.',
      'We run dedicated family briefings in the week before the wedding. Key family members receive specific roles and clear points of contact so they feel empowered but never overwhelmed. Each set of parents is assigned a dedicated family coordinator — a calm, experienced person whose only job is to ensure they are comfortable, informed, and completely present.',
      'We believe your parents should be in every photograph, on the dance floor, and in every moment. Not in the back office solving problems. That is our job. And we do it so that they can do theirs — which is simply to celebrate.',
    ],
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        label="The Story Events Way"
        title="Five Pillars of Our Philosophy"
        subtitle="Every choice we make, every vendor we select, every timeline we build — is guided by these principles."
        image="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=1800&q=80"
        height="lg"
      />
      {pillars.map((pillar, i) => (
        <PhilosophyPillar
          key={pillar.number}
          number={pillar.number}
          title={pillar.title}
          tagline={pillar.tagline}
          paragraphs={pillar.paragraphs}
          image={pillar.image}
          reversed={i % 2 !== 0}
          bgAlt={i % 2 !== 0}
        />
      ))}

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <AnimatedSection>
            <p className={styles.ctaLabel}>Our Values in Action</p>
            <h2 className={styles.ctaTitle}>Experience Our Philosophy First-Hand</h2>
            <p className={styles.ctaSub}>Read our couple stories and see how these five pillars shape every wedding we plan.</p>
            <div className={styles.ctaBtns}>
              <Link href="/weddings" className="btn btn-primary">View Our Weddings</Link>
              <Link href="/contact" className="btn btn-secondary">Enquire Now</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
