import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const challenges = [
  'Coordinating travel, accommodation, and transport for out-of-town guests',
  'Navigating local vendor networks and legal marriage documentation requirements',
  'Managing multi-day itineraries across pre-wedding and post-wedding events',
  'Handling on-site logistics and contingency planning in unfamiliar locations',
];

export default function WhyDestinationSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 md:gap-16">
          <AnimatedSection animation="slideLeft" className="h-full">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80"
                alt="Destination wedding planning requires expert coordination"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideRight">
            <SectionHeading
              label="The Case for Expert Planning"
              title="Why Your Destination Wedding Needs a Specialist"
              subtitle="Destination weddings are breathtakingly beautiful — and extraordinarily complex. They require a level of planning expertise that goes far beyond what a local wedding demands."
            />
            <p className="text-base leading-[1.85] text-primary mb-5">
              When your wedding takes place away from home — in a palace in Udaipur, on a beach in Goa, or in the hills of Manali — every element multiplies in complexity. Guest logistics, vendor vetting across cities, marriage documentation, local permits, and multi-day event coordination all need to be managed simultaneously, with precision and calm.
            </p>
            <p className="text-base leading-[1.85] text-primary mb-5">
              Most couples only realise this depth of complexity once they begin planning. By that point, the stress has already begun. That is why we step in early — before the overwhelm, before the missteps, before the regrets.
            </p>
            <div className="mt-6 pt-6 border-t border-accent/40">
              <p className="font-label text-[0.65rem] tracking-[0.14em] uppercase text-primary mb-4">The challenges we solve for you:</p>
              {challenges.map((c, i) => (
                <div key={i} className="flex gap-3 items-start mb-3">
                  <span className="text-accent text-base font-bold shrink-0 mt-px">✓</span>
                  <p className="text-sm text-primary leading-[1.6]">{c}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
