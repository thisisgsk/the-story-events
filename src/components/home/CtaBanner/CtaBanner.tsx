import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

export default function CtaBanner() {
  return (
    <section className="relative py-32 text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/home-custom/img4.jpg" alt="Begin planning your dream wedding" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 z-[1] bg-[rgba(42,24,18,0.62)]" />
      </div>
      <div className="relative z-[2] px-6 md:px-8 lg:px-12 xl:px-16 max-w-[700px] mx-auto">
        <AnimatedSection>
          <span className="inline-block font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Your Story Awaits</span>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold text-white leading-[1.1] mb-5">Your Wedding Deserves to Be Extraordinary</h2>
          <p className="text-lg text-white/70 leading-[1.75] mb-10">One conversation. A lifetime of memories. Let&apos;s begin planning together.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-primary">Start Planning</Link>
            <Link href="/weddings" className="btn btn-secondary">See Our Work</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
