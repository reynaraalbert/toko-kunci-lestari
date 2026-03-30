import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <h4 className={styles.pretitle}>L'ART DE LA SÉCURITÉ</h4>
        <h1 className={styles.title}>Koleksi <br /> Berkah Lestari</h1>
        <p className={styles.desc}>
          Estetika abadi untuk hunian yang luar biasa. Temukan perpaduan sempurna antara material premium dan keamanan tingkat tinggi.
        </p>
        
        <div className={styles.actions}>
          <Link href="/products" className={styles.mainBtn}>
            Jelajahi Koleksi
          </Link>
          <Link href="/exclusive" className={styles.secondaryBtn}>
            L'Atelier
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
