import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import CountUpStat from './CountUpStat';

const stats = [
  { value: 6, suffix: '', label: 'Destinations Curated' },
  { value: 200, suffix: '+', label: 'Weddings Planned' },
  { value: 15, suffix: '+', label: 'Years On the Ground' },
];

export default function IntroSection() {
  return (
    <section className="section bg-white">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <SectionHeading
            label="Why a Specialist"
            title="Destination Wedding Planning, Done by People Who Live There"
            centered
          />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <p className="text-lg leading-[1.85] text-primary mb-5">
            A destination wedding is not a local wedding with extra travel — it is an entirely different kind of undertaking. Every venue needs a site visit before it earns your trust. Every vendor needs to be vetted in person. Every local regulation, every monsoon pattern, every quiet detail that could go wrong needs to already be known, not discovered on your wedding week.
          </p>
          <p className="text-lg leading-[1.85] text-primary">
            Our destination specialists are dedicated to the places we plan in — not generalists working from a spreadsheet, but people who have walked the palace courtyards of Jaipur, negotiated with the beach resorts of Goa, and scouted the shores of Phuket, long before your enquiry ever reaches us.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-3 gap-4 mt-14 pt-10 border-t border-accent/40 sm:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={200 + i * 120} animation="scaleIn">
              <CountUpStat value={stat.value} suffix={stat.suffix} label={stat.label} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
