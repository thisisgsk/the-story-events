import Link from 'next/link';
import { services } from '@/data/services';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function ServicesPreview() {
  const preview = services.slice(0, 3);
  return (
    <section className="section section-alt">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="What We Do"
            title="End-to-End Wedding Planning"
            subtitle="From the first call to the final farewell — we handle everything so you can live every moment."
            centered
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3 md:gap-8">
          {preview.map((svc, i) => (
            <AnimatedSection key={svc.id} delay={i * 120} className="h-full">
              <div className="bg-white border border-accent/40 rounded-xl p-8 h-full flex flex-col gap-3 transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:shadow-xl">
                <div className="text-[1.8rem] text-accent">{svc.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-primary">{svc.title}</h3>
                <p className="font-display italic text-base text-primary">{svc.tagline}</p>
                <p className="text-sm text-primary leading-[1.7] flex-1">{svc.description.slice(0, 130)}…</p>
                <Link href="/services" className="font-label text-[0.68rem] tracking-[0.12em] uppercase text-accent transition-colors duration-150 ease-out mt-auto">
                  Learn More →
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={400} className="text-center">
          <Link href="/services" className="btn btn-outline">Explore All Services</Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
