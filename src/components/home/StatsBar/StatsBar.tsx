import { stats } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

export default function StatsBar() {
  return (
    <section className="bg-cream py-12" aria-label="Agency statistics">
      <div className="container">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-8 relative md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 relative">
                <strong className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-primary leading-none">{stat.value}</strong>
                <span className="font-label text-[0.65rem] tracking-[0.14em] uppercase text-primary">{stat.label}</span>
                {i < stats.length - 1 && (
                  <span
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-accent"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
