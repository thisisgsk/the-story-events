import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

interface PhilosophyPillarProps {
  number: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  image: string;
  reversed?: boolean;
  alt?: string;
  bgAlt?: boolean;
}

export default function PhilosophyPillar({ number, title, tagline, paragraphs, image, reversed, alt = '', bgAlt }: PhilosophyPillarProps) {
  return (
    <section className={`section ${bgAlt ? 'bg-cream' : 'bg-white'}`}>
      <div className="container">
        <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 md:gap-16">
          <AnimatedSection
            animation={reversed ? 'slideRight' : 'slideLeft'}
            className={`h-full ${reversed ? 'md:order-2' : ''}`}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image src={image} alt={alt || title} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <div className="absolute inset-0 z-[1] bg-[rgba(42,24,18,0.12)]" />
              <div className="absolute bottom-4 right-5 z-[2] font-display text-[4rem] font-bold text-white/18 leading-none">{number}</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation={reversed ? 'slideLeft' : 'slideRight'} className={reversed ? 'md:order-1' : ''}>
            <span className="block font-label text-[0.65rem] tracking-[0.18em] uppercase text-accent mb-3">Pillar {number}</span>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-primary mb-3">{title}</h2>
            <p className="font-display italic text-xl text-primary mb-4">{tagline}</p>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-accent" />
              <span className="text-primary text-[0.7rem] opacity-70">✦</span>
              <span className="block w-10 h-px bg-accent" />
            </div>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-[1.9] text-primary mb-5">{p}</p>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
