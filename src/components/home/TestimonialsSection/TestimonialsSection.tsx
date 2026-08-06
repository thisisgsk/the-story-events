import { weddings } from '@/data/weddings';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function TestimonialsSection() {
  const testimonials = [weddings[0].testimonial, weddings[1].testimonial];
  return (
    <section className="section bg-white">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="What Our Couples Say" title="Stories of Joy" centered />
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 150} className="h-full">
              <div className="bg-cream border border-accent/40 rounded-xl p-8 h-full flex flex-col gap-4">
                <div className="font-display text-[4rem] text-accent leading-[0.6] opacity-30">&ldquo;</div>
                <blockquote className="font-display text-[clamp(1rem,1.8vw,1.2rem)] italic text-primary leading-[1.8] flex-1">{t.quote}</blockquote>
                <div className="text-accent text-base tracking-[3px]">★★★★★</div>
                <p className="font-heading text-base font-semibold text-primary">{t.coupleName}</p>
                <p className="font-label text-[0.62rem] tracking-[0.12em] uppercase text-primary">{t.date}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
