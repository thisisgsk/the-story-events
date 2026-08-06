import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

export default function FounderNote() {
  return (
    <section className="section bg-cream">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-[380px_1fr] md:gap-16">
          <AnimatedSection animation="slideLeft">
            <div className="relative aspect-[3/4] rounded-[50%_50%_24px_24px] overflow-hidden shadow-xl max-w-[360px] mx-auto">
              <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" alt="Nisha Kapoor, Founder of The Story Events" fill sizes="(max-width:768px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideRight">
            <span className="block font-label text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-3">A Note from Our Founder</span>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-semibold text-primary mb-4">Why I Started The Story Events</h2>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-accent" />
              <span className="text-primary text-[0.72rem] opacity-70">✦</span>
              <span className="block w-10 h-px bg-accent" />
            </div>
            <p className="text-base leading-[1.9] text-primary mb-5">
              I planned my first wedding at twenty-four. I was terrified, exhilarated, and completely certain that this was the most important work I would ever do. That couple — Meera and Arjun — danced until midnight in a courtyard in Jodhpur. I still remember the exact moment the lanterns were lit. I knew then that I had found my calling.
            </p>
            <p className="text-base leading-[1.9] text-primary mb-5">
              Every couple that comes to us carries a dream — usually a beautifully complicated one. A beach ceremony with 300 guests. A palace breakfast for forty. A Himalayan elopement with six people and a drone. I believe that the size of the dream doesn&apos;t matter. What matters is that it is real, it is theirs, and it deserves to be executed with the same care that they brought in dreaming it up.
            </p>
            <p className="text-base leading-[1.9] text-primary mb-5">
              The Story Events was built on one promise: that on your wedding day, you feel nothing but joy. We will have already taken care of everything else. That promise has not changed in eight years. It never will.
            </p>
            <div className="mt-6 pt-6 border-t border-accent/40">
              <span className="block font-display text-2xl italic text-primary mb-1">Nisha Kapoor</span>
              <span className="block font-label text-[0.65rem] tracking-[0.12em] uppercase text-primary">Founder & Creative Director, The Story Events</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
