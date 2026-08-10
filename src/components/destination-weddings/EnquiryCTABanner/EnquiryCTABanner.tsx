import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

export default function EnquiryCTABanner() {
  return (
    <section className="relative py-32 text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1800&q=80" alt="Begin planning your destination wedding" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 z-[1] bg-[rgba(42,24,18,0.6)]" />
      </div>
      <div className="relative z-[2] px-6 md:px-8 lg:px-12 xl:px-16 max-w-[700px] mx-auto">
        <AnimatedSection>
          <span className="inline-block font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Your Story Begins Here</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.12] mb-5">Ready to Begin Planning Your Destination Wedding?</h2>
          <p className="text-lg text-white/70 leading-[1.75] mb-10">Let&apos;s have an honest conversation about your vision. No pressure — just genuine guidance from people who love what they do.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
            <a href="tel:+919820000000" className="btn btn-secondary">Call Us</a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
