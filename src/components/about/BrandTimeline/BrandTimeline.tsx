import { brandTimeline } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function BrandTimeline() {
  return (
    <section className="section bg-white">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="Our Journey"
            title="The Story Events Story"
            subtitle="Eight years. One hundred weddings. One unwavering commitment to excellence."
            centered
          />
        </AnimatedSection>
        <div className="flex flex-col max-w-[860px] mx-auto relative">
          {brandTimeline.map((item, i) => (
            <AnimatedSection
              key={item.year}
              delay={i * 100}
              animation={i % 2 === 0 ? 'slideLeft' : 'slideRight'}
              className="grid grid-cols-[64px_32px_1fr] gap-3 items-start pb-8 sm:grid-cols-[80px_40px_1fr] sm:gap-4"
            >
              <div className="text-right pt-2.5">
                <span className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold text-accent leading-none">{item.year}</span>
              </div>
              <div className="flex flex-col items-center pt-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-accent border-[3px] border-cream shadow-[0_0_0_2px_var(--color-accent)] shrink-0" />
                {i < brandTimeline.length - 1 && (
                  <div
                    className="w-0.5 flex-1 min-h-10 mt-2"
                    style={{ backgroundImage: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
                  />
                )}
              </div>
              <div className="pt-1 pb-4">
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-primary leading-[1.75]">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
