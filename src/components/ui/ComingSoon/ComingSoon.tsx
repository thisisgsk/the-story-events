'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './ComingSoon.module.css';

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className={styles.container}>
      <div className={styles.bgWrapper}>
        <Image 
          src="/home-custom/img1.jpg" 
          alt="Coming Soon Background" 
          fill 
          sizes="100vw"
          style={{ objectFit: 'cover' }} 
          priority 
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image src="/logo-white.png" alt="The Story Events" width={220} height={70} style={{ objectFit: 'contain' }} />
        </div>
        
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.divider} />
        <p className={styles.subtitle}>
          We are currently crafting this section to bring you the finest luxury wedding planning experience.
        </p>
        
        <Link href="/" className="btn btn-outline" style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
