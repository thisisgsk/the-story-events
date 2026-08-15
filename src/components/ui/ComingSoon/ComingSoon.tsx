import Link from 'next/link';
import Image from 'next/image';

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center text-cream">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/home-custom/img1.jpg"
          alt="Coming Soon Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 z-[1] bg-[rgba(106,11,34,0.6)]" />
      </div>

      <div className="relative z-[2] max-w-[600px] p-8 flex flex-col items-center gap-6">
        <div className="mb-4">
          <Image src="/logo-white.png" alt="The Story Events" width={220} height={70} style={{ objectFit: 'contain' }} />
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-[0.05em]">{title}</h1>
        <div className="w-[60px] h-0.5 bg-accent" />
        <p className="font-body text-lg leading-[1.6] opacity-90 mb-4">
          We are currently crafting this section to bring you the finest luxury wedding planning experience.
        </p>

        <Link href="/" className="btn btn-outline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
