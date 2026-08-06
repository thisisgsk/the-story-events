import Image from 'next/image';
import Link from 'next/link';
import { weddings } from '@/data/weddings';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function PortfolioPreview() {
  const featured = weddings.slice(0, 4);
  const customImages = [
    '/home-custom/img1.jpg',
    '/home-custom/img2.jpg',
    '/home-custom/img4.jpg',
    '/home-custom/img5.jpg'
  ];
  return (
    <section className="section bg-cream">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Our Portfolio" title="Featured Love Stories" subtitle="Real weddings planned with care, creativity, and complete dedication." centered />
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-4 mb-10 lg:grid-cols-4 lg:gap-6">
          {featured.map((w, i) => (
            <AnimatedSection key={w.slug} delay={i * 100} className="h-full">
              <Link
                href={`/weddings/${w.slug}`}
                className="group block no-underline rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={customImages[i % customImages.length]}
                    alt={`${w.coupleName} at ${w.location}`}
                    fill
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-slow ease-in-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 z-[2] flex items-center justify-center bg-[rgba(42,24,18,0)] transition-colors duration-[250ms] ease-in-out group-hover:bg-[rgba(42,24,18,0.52)]">
                    <span className="font-label text-[0.65rem] tracking-[0.14em] uppercase text-white border border-white/55 px-5 py-2 rounded-sm opacity-0 translate-y-2 bg-white/[0.08] transition-all duration-[250ms] ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                      View Story →
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 z-[3] font-label text-[0.58rem] tracking-[0.12em] uppercase bg-accent/88 text-white px-2.5 py-[3px] rounded-full backdrop-blur-[4px]">
                    {w.type}
                  </div>
                </div>
                <div className="px-5 py-4">
                  <h3 className="font-heading text-lg font-semibold text-primary mb-0.5">{w.coupleName}</h3>
                  <p className="font-label text-xs tracking-[0.06em] uppercase text-primary">{w.location} · {w.city}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={400} className="text-center">
          <Link href="/weddings" className="btn btn-outline">View All Weddings</Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
