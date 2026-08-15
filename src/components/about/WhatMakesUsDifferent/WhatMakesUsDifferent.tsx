import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

const points = [
  {
    title: "We Are Selectively Boutique",
    desc: "We limit the number of weddings we take each year. You are never competing for our attention, because when we take on your wedding, we take on your vision completely."
  },
  {
    title: "Absolute Transparency",
    desc: "From vendor pricing to logistical challenges, we communicate everything. There are no hidden margins or last-minute surprises."
  },
  {
    title: "Design Meets Execution",
    desc: "We don't just design beautiful Pinterest-worthy boards. We have the technical and logistical expertise to actually build them, securely and beautifully, in any terrain."
  }
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-24 bg-cream">
      <div className="container">
        <AnimatedSection className="text-center max-w-[700px] mx-auto mb-16">
          <span className="section-label">Our Difference</span>
          <h2 className="section-title">What Makes Story Events Different</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <AnimatedSection
              key={index}
              animation="fadeUp"
              delay={index * 150}
              className="bg-cream p-8 rounded-lg shadow-md border border-accent/40 transition-all duration-[250ms] ease-in-out h-full hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-xl font-medium text-primary mb-4">{point.title}</h3>
              <p className="font-body text-sm leading-[1.6] text-primary">{point.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
