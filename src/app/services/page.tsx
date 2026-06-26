import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import ServicesHero from '@/components/services/ServicesHero/ServicesHero';
import ServiceBlock from '@/components/services/ServiceBlock/ServiceBlock';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './ServicesCta.module.css';

export const metadata: Metadata = {
  title: 'Wedding Planning Services | Décor, Coordination & Vendor Management | The Story Events',
  description:
    'Discover seven bespoke destination wedding services — full planning, décor design, venue shortlisting, guest experience, vendor management, and day-of execution. One seamless luxury experience for your perfect wedding.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {/* All service blocks — alternating layout */}
      {services.map((service, i) => (
        <ServiceBlock
          key={service.id}
          service={service}
          reversed={i % 2 !== 0}
          index={i}
        />
      ))}

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className={styles.cta} aria-label="Contact us">
        {/* Background image */}
        <div className={styles.imageBg}>
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=80"
            alt="Romantic destination wedding reception under the stars"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          />
        </div>

        {/* Overlay */}
        <div className={styles.overlay} aria-hidden="true" />

        {/* Decorative ring */}
        <div className={styles.ring} aria-hidden="true" />

        <div className={`container ${styles.inner}`}>
          <AnimatedSection animation="fadeIn" delay={0}>
            <span className={styles.label}>Begin Your Journey</span>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <h2 className={styles.title}>
              Your Perfect Wedding<br />
              <em>Starts with a Conversation</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <p className={styles.subtitle}>
              Tell us about your vision — the destination you dream of, the experience you want to create, the feeling you want your guests to carry home. We&apos;ll take it from there.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={280}>
            <div className={styles.divider} aria-hidden="true">
              <span className={styles.dividerLine} />
              <span className={styles.dividerIcon}>✦</span>
              <span className={styles.dividerLine} />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={360}>
            <div className={styles.buttons}>
              <Link href="/contact" className={styles.btnPrimary}>
                Start Planning Together
              </Link>
              <Link href="/weddings" className={styles.btnSecondary}>
                View Our Work
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={500}>
            <p className={styles.trustNote}>
              Trusted by 200+ couples across India &amp; the world
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
