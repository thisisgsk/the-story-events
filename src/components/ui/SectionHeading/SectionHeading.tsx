import React from 'react';
import styles from './SectionHeading.module.css';

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
    <div
      className={[
        styles.wrapper,
        centered ? styles.centered : '',
        light ? styles.light : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.ornament}>
        <span className={styles.line} />
        <span className={styles.rose}>✦</span>
        <span className={styles.line} />
      </div>
    </div>
  );
}
