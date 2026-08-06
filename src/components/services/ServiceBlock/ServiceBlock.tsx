import Image from 'next/image';
import Link from 'next/link';
import type { Service } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

interface ServiceBlockProps {
  service: Service;
  reversed?: boolean;
  index: number;
}

export default function ServiceBlock({
  service,
  reversed = false,
  index,
}: ServiceBlockProps) {
  const serviceNumber = String(index + 1).padStart(2, '0');

  return (
    <section className="py-24 bg-cream overflow-hidden" aria-labelledby={`service-title-${service.id}`}>
      <div
        className={`container grid grid-cols-1 gap-12 items-center min-[900px]:grid-cols-2 min-[900px]:gap-16 min-[1100px]:gap-[4%] ${
          reversed ? 'min-[1100px]:grid-cols-[44%_52%]' : 'min-[1100px]:grid-cols-[52%_44%]'
        }`}
      >
        {/* Image Panel */}
        <AnimatedSection
          animation={reversed ? 'slideRight' : 'slideLeft'}
          delay={100}
          className={`relative ${reversed ? 'min-[900px]:order-2' : ''}`}
        >
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl transition-all duration-slow ease-in-out hover:-translate-y-1.5 hover:scale-[1.012] hover:shadow-[0_24px_72px_rgba(42,24,18,0.22)]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 580px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Decorative number badge */}
            <div
              className="absolute -bottom-3 -right-3 w-16 h-16 text-2xl min-[900px]:-bottom-4 min-[900px]:-right-4 min-[900px]:w-20 min-[900px]:h-20 min-[900px]:text-3xl bg-primary text-cream font-display font-light flex items-center justify-center rounded-lg shadow-lg tracking-[-0.03em] z-[2]"
              aria-hidden="true"
            >
              {serviceNumber}
            </div>
          </div>
        </AnimatedSection>

        {/* Text Panel */}
        <AnimatedSection
          animation={reversed ? 'slideLeft' : 'slideRight'}
          delay={200}
          className={`relative flex flex-col group ${reversed ? 'min-[900px]:order-1' : ''}`}
        >
          {/* Large decorative icon */}
          <div
            className="text-[2.75rem] min-[900px]:text-[3.5rem] leading-none text-primary mb-5 opacity-65 transition-all duration-[250ms] ease-in-out block w-fit group-hover:opacity-90 group-hover:scale-110 group-hover:rotate-[8deg]"
            aria-hidden="true"
          >
            {service.icon}
          </div>

          <div className="flex flex-col">
            <span className="inline-block font-label text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">Service {serviceNumber}</span>

            <h2
              id={`service-title-${service.id}`}
              className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold text-primary leading-[1.1] tracking-[-0.02em] mb-3"
            >
              {service.title}
            </h2>

            <p className="font-display italic text-[clamp(1rem,1.6vw,1.25rem)] font-normal text-accent mb-5 leading-[1.4]">{service.tagline}</p>

            <p className="font-body text-base text-primary leading-[1.8] mb-8 max-w-[58ch]">{service.description}</p>

            {/* Features list */}
            <ul className="flex flex-col gap-3 mb-10" aria-label={`Features of ${service.title}`}>
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-primary leading-[1.55] group/feature">
                  <span
                    className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[0.6rem] font-bold mt-0.5 shadow-[0_2px_6px_rgba(184,120,90,0.3)] transition-all duration-150 ease-out group-hover/feature:scale-[1.15] group-hover/feature:shadow-[0_3px_10px_rgba(184,120,90,0.45)]"
                    style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn btn-outline self-start min-w-[240px] justify-center">
              Enquire About This Service
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
