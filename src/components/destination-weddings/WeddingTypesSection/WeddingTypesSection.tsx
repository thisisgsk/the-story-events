import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const types = [
  {
    slug: 'palace',
    name: 'Palace Weddings',
    desc: 'Step into history. Marry in a Rajasthani palace that has witnessed centuries of grandeur. Opulent ballrooms, courtyards lit by chandeliers, and royal ceremony — all arranged exclusively for you.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
  },
  {
    slug: 'beach',
    name: 'Beach Weddings',
    desc: 'With the Arabian Sea at your feet, soft sand beneath your toes, and a golden sunset painting the sky — a Goa or Kerala beach wedding is pure, effortless romance.',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
  },
  {
    slug: 'mountain',
    name: 'Mountain Weddings',
    desc: 'High altitude ceremonies in the Himalayas — crisp air, pine-scented breezes, and a stillness that makes every vow feel sacred. Perfect for intimate, adventurous couples.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
  },
  {
    slug: 'intimate',
    name: 'Intimate Weddings',
    desc: 'Fewer guests. Deeper moments. Every touch is personal, every detail considered, and every guest is family. Luxury is not about scale — it is about meaning.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
  },
  {
    slug: 'grand',
    name: 'Grand Celebrations',
    desc: 'A celebration that fills a heritage estate with hundreds of loved ones, multi-day ceremonies, and enough magic to last multiple lifetimes. When only the grandest will do.',
    image: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=800&q=80',
  },
];

export default function WeddingTypesSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Wedding Styles" title="What Kind of Wedding Are You Dreaming Of?" centered />
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {types.map((type, i) => (
            <AnimatedSection key={type.slug} delay={i * 80}>
              <div className="group rounded-lg overflow-hidden bg-primary shadow-md">
                <div className="relative aspect-[2/3] overflow-hidden cursor-default">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-slow ease-in-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 z-[2] bg-[rgba(42,24,18,0.78)] flex flex-col justify-end p-6 gap-3 opacity-0 transition-opacity duration-[250ms] ease-in-out group-hover:opacity-100">
                    <p className="text-[0.82rem] text-white/82 leading-[1.7]">{type.desc}</p>
                    <Link href="/contact" className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-accent no-underline transition-colors duration-150 ease-out hover:text-white">
                      Begin Planning →
                    </Link>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <h3 className="font-heading text-base font-semibold text-white">{type.name}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
