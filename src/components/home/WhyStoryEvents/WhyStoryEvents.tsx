import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import Image from 'next/image';

const reasons = [
  {
    title: "Uncompromising Attention to Detail",
    description: "From the macro logistics of international guest arrivals to the micro details of table settings, we oversee every element with calm precision."
  },
  {
    title: "A Global Network of Partners",
    description: "We work exclusively with trusted, premium vendors across the globe, ensuring the quality of your celebration matches our exacting standards."
  },
  {
    title: "Transparent, Seamless Planning",
    description: "We remove the stress of destination planning through transparent communication, structured timelines, and an approach built on trust."
  },
];

export default function WhyStoryEvents() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-16">
          <AnimatedSection animation="slideRight" className="relative w-full">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/home-custom/img6.jpg"
                alt="Why The Story Events"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </AnimatedSection>

          <div className="flex flex-col">
            <AnimatedSection animation="fadeUp">
              <span className="section-label">Our Approach</span>
              <h2 className="section-title">Why Story Events</h2>

              <div className="mt-10 flex flex-col gap-8">
                {reasons.map((reason, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fadeUp"
                    delay={index * 150}
                    className="border-l-2 border-accent pl-6"
                  >
                    <h3 className="font-display text-xl font-medium text-primary mb-2">{reason.title}</h3>
                    <p className="font-body text-sm leading-[1.6] text-primary">{reason.description}</p>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
