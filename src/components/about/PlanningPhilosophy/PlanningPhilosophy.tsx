import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

export default function PlanningPhilosophy() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1800&q=80"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.16 }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(120deg, var(--color-cream) 0%, rgba(249,246,237,0.9) 55%, var(--color-cream) 100%)' }}
        />
      </div>

      <div className="container relative py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 items-center max-w-[1100px] mx-auto">
          <AnimatedSection animation="fadeIn">
            <p className="font-display italic text-[clamp(1.6rem,3.2vw,2.4rem)] leading-[1.35] text-primary">
              &ldquo;Stress is not a necessary part of wedding planning — it is a sign that something has not been
              thought through carefully enough.&rdquo;
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={150}>
            <span className="block font-label text-[0.65rem] tracking-[0.2em] uppercase text-accent mb-4">
              Our Planning Philosophy
            </span>
            <p className="text-base leading-[1.9] text-primary/85 mb-5">
              From the first week, we establish a shared planning document — a living roadmap that evolves as your
              wedding takes shape. Every decision, every confirmation, every pending item is tracked in real time,
              so you always know exactly where things stand.
            </p>
            <p className="text-base leading-[1.9] text-primary/85 mb-8">
              We maintain weekly check-ins and ask the difficult questions early, so you never have to make a
              critical decision under pressure. Planning is a gift you give yourself — let us help you unwrap it
              calmly.
            </p>
            <span className="block font-display text-lg italic text-primary text-right">The Story Events Way</span>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
