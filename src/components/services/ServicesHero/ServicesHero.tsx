import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[62vh] flex items-end pt-20 lg:pt-[100px] overflow-hidden" aria-label="Services hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1800&q=80"
          alt="Elegant wedding ceremony setup with lush floral arrangements"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundImage: 'linear-gradient(160deg, rgba(42,24,18,0.25) 0%, rgba(42,24,18,0.55) 50%, rgba(42,24,18,0.78) 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-[2] pb-16 pt-20 max-w-[1280px]">
        <span className="inline-block font-label text-xs font-medium tracking-[0.2em] uppercase text-accent mb-5 opacity-90">Our Services</span>

        <h1 className="font-display text-[clamp(2.25rem,7vw,4.5rem)] font-semibold text-cream leading-[1.08] tracking-[-0.01em] mb-6">
          Every Detail,<br />
          <em className="italic font-normal text-accent">Perfectly Handled</em>
        </h1>

        <p className="font-body text-[clamp(1rem,2vw,1.25rem)] font-light text-white/82 max-w-[52ch] leading-[1.65] mb-8 tracking-[0.015em]">
          Seven distinct services. One seamless experience. Your perfect wedding.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 max-w-[220px]" aria-hidden="true">
          <span className="flex-1 h-px bg-white/30" />
          <span className="text-[0.85rem] text-accent opacity-80">✦</span>
          <span className="flex-1 h-px bg-white/30" />
        </div>
      </div>
    </section>
  );
}
