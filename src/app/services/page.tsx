import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import ServicesCover from '@/components/services/ServicesCover/ServicesCover';
import ServicesHeadline from '@/components/services/ServicesHeadline/ServicesHeadline';
import ServiceBlock from '@/components/services/ServiceBlock/ServiceBlock';
import OurProcessTimeline from '@/components/destination-weddings/OurProcessTimeline/OurProcessTimeline';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

export const metadata: Metadata = {
  title: 'Wedding Planning Services | Décor, Coordination & Vendor Management | The Story Events',
  description:
    'Discover seven bespoke destination wedding services — full planning, décor design, venue shortlisting, guest experience, vendor management, and day-of execution. One seamless luxury experience for your perfect wedding.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesCover />
      <ServicesHeadline />

      {/* All service blocks — alternating layout */}
      {services.map((service, i) => (
        <ServiceBlock
          key={service.id}
          service={service}
          reversed={i % 2 !== 0}
          index={i}
        />
      ))}

      <OurProcessTimeline />

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden isolate text-center" aria-label="Contact us">
        {/* Background image */}
        <div className="absolute inset-0 z-[-2]">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=80"
            alt="Romantic destination wedding reception under the stars"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(42,24,18,0.88) 0%, rgba(91,44,26,0.78) 50%, rgba(42,24,18,0.88) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Decorative ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] z-0 pointer-events-none before:content-[''] before:absolute before:inset-8 before:rounded-full before:border before:border-accent/[0.12]"
          style={{ width: 'min(700px, 90vw)', height: 'min(700px, 90vw)' }}
          aria-hidden="true"
        />

        <div className="container relative z-[1] flex flex-col items-center gap-6">
          <AnimatedSection animation="fadeIn" delay={0}>
            <span className="inline-block font-label text-xs font-medium tracking-[0.25em] uppercase text-accent opacity-85">Begin Your Journey</span>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <h2 className="font-display text-[clamp(1.875rem,5.5vw,3.75rem)] font-semibold text-cream leading-[1.1] tracking-[-0.015em] max-w-[18ch] mx-auto">
              Your Perfect Wedding<br />
              <em className="italic font-normal text-accent">Starts with a Conversation</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <p className="font-body text-[clamp(1rem,1.6vw,1.125rem)] font-light text-white/72 max-w-[55ch] mx-auto leading-[1.75]">
              Tell us about your vision — the destination you dream of, the experience you want to create, the feeling you want your guests to carry home. We&apos;ll take it from there.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={280}>
            <div className="flex items-center gap-4 w-[200px] my-2" aria-hidden="true">
              <span className="flex-1 h-px bg-white/20" />
              <span className="text-accent text-[0.9rem] opacity-70">✦</span>
              <span className="flex-1 h-px bg-white/20" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={360}>
            <div className="flex flex-wrap gap-4 justify-center mt-4 max-[640px]:flex-col max-[640px]:items-center">
              <Link
                href="/contact"
                className="bg-accent text-cream border-[1.5px] border-accent px-10 py-4 font-label text-xs font-medium tracking-[0.14em] uppercase rounded-sm min-h-[52px] inline-flex items-center gap-2 transition-all duration-[250ms] ease-in-out whitespace-nowrap hover:bg-primary hover:border-primary hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(196,149,106,0.4)] max-[640px]:w-full max-[640px]:max-w-[320px] max-[640px]:justify-center"
              >
                Start Planning Together
              </Link>
              <Link
                href="/weddings"
                className="bg-transparent text-cream border-[1.5px] border-white/55 px-10 py-4 font-label text-xs font-medium tracking-[0.14em] uppercase rounded-sm min-h-[52px] inline-flex items-center gap-2 transition-all duration-[250ms] ease-in-out whitespace-nowrap hover:bg-white/10 hover:border-white/90 hover:-translate-y-[3px] max-[640px]:w-full max-[640px]:max-w-[320px] max-[640px]:justify-center"
              >
                View Our Work
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={500}>
            <p className="flex items-center gap-3 mt-6 font-label text-xs tracking-[0.12em] uppercase text-white/42 before:content-[''] before:flex-1 before:max-w-[80px] before:h-px before:bg-white/15 after:content-[''] after:flex-1 after:max-w-[80px] after:h-px after:bg-white/15">
              Trusted by 200+ couples across India &amp; the world
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
