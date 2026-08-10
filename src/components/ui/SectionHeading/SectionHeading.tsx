interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className="inline-block font-label text-[0.68rem] font-medium tracking-[0.18em] uppercase text-accent mb-3">
          {label}
        </span>
      )}
      <h2
        className={`font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.01em] mb-4 ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-[1.75] max-w-[58ch] ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/65' : 'text-primary'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`flex items-center gap-3 mt-5 ${centered ? 'justify-center' : ''}`}>
        <span
          className="block h-px w-10"
          style={{
            backgroundImage: light
              ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)'
              : 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
          }}
        />
        <span className={`text-[0.7rem] opacity-80 ${light ? 'text-accent' : 'text-primary'}`}>✦</span>
        <span
          className="block h-px w-10"
          style={{
            backgroundImage: light
              ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)'
              : 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
          }}
        />
      </div>
    </div>
  );
}
