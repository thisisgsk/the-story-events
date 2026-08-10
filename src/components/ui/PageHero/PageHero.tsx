import Image from 'next/image';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
  height?: 'md' | 'lg';
}

export default function PageHero({ label, title, subtitle, image, height = 'md' }: PageHeroProps) {
  return (
    <section className={`relative flex items-center justify-center overflow-hidden ${height === 'lg' ? 'min-h-[70vh]' : 'min-h-[58vh]'}`}>
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(42,24,18,0.22) 0%, rgba(42,24,18,0.58) 100%)' }}
        />
      </div>
      <div className="relative z-[2] text-center max-w-[800px] mx-auto pt-[140px] px-6 pb-16 md:px-8 lg:px-12 xl:px-16">
        <span className="inline-block font-label text-[0.68rem] tracking-[0.22em] uppercase text-accent mb-4">{label}</span>
        <h1 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-bold text-white leading-[1.08] tracking-[-0.01em] mb-5">{title}</h1>
        {subtitle && <p className="text-lg text-white/72 leading-[1.75] max-w-[52ch] mx-auto">{subtitle}</p>}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="block w-12 h-px bg-white/30" />
          <span className="text-accent text-[0.7rem] opacity-70">✦</span>
          <span className="block w-12 h-px bg-white/30" />
        </div>
      </div>
    </section>
  );
}
