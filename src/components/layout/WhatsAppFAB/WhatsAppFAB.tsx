import styles from './WhatsAppFAB.module.css';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919820000000?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20planning%20my%20wedding."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat on WhatsApp"
    >
      <span className={styles.fabIcon}>💬</span>
      <span className={styles.fabLabel}>WhatsApp Us</span>
    </a>
  );
}
