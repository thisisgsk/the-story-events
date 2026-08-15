import Image from 'next/image';

export default function PhilosophyHero() {
  return (
    <header className="relative h-[85vh] min-h-[580px] max-h-[820px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=1800&q=80"
          alt="Intimate wedding ceremony — The Story Events Philosophy"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundImage: 'linear-gradient(160deg, rgba(42,24,18,0.65) 0%, rgba(42,24,18,0.35) 50%, rgba(42,24,18,0.72) 100%)' }}
        />
      </div>
      <div className="relative z-[2] text-center px-6 max-w-[900px] mx-auto">
        <span className="inline-block font-label text-xs font-medium tracking-[0.2em] uppercase text-accent mb-5 px-5 py-2 border border-accent/50 rounded-full">
          The Story Events Way
        </span>
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold text-white leading-[1.08] tracking-[-0.01em] mb-6 [text-shadow:0_2px_24px_rgba(42,24,18,0.35)]">
          Five Pillars of Our Philosophy
        </h1>
        <p className="font-body text-[clamp(1rem,2vw,1.25rem)] text-white/88 leading-[1.75] max-w-[60ch] mx-auto mb-8">
          Every choice we make, every vendor we select, every timeline we build — is guided
          by these principles.
        </p>
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="block w-[60px] h-px bg-accent/70" />
          <span className="text-base text-accent opacity-90">✦</span>
          <span className="block w-[60px] h-px bg-accent/70" />
        </div>
        <div className="flex justify-center gap-6" aria-hidden="true">
          {['01', '02', '03', '04', '05'].map((n, i) => (
            <span
              key={n}
              className={`font-display text-2xl tracking-[0.05em] ${
                i === 2 ? 'text-white/90 font-semibold' : 'text-white/40 font-light'
              }`}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
