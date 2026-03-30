import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h4 className={`${styles.subtitle} animate-fade-up`}>EST. 2024 — PREMIUM SECURITY SOLUTIONS</h4>
        <h1 className={`${styles.title} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
          Keamanan <span className={styles.accent}>Eksklusif</span> Untuk Kediaman <span className={styles.accent}>Mewah</span> Anda.
        </h1>
        <p className={`${styles.description} animate-fade-up`} style={{ animationDelay: '0.4s' }}>
          Toko Kunci Berkah Lestari menghadirkan koleksi pegangan pintu dan sistem keamanan digital dengan standar kualitas tertinggi bagi hunian idaman Anda.
        </p>
        <div className={`${styles.actions} animate-fade-up`} style={{ animationDelay: '0.6s' }}>
          <button className={styles.primaryBtn}>Lihat Koleksi</button>
          <button className={styles.secondaryBtn}>Hubungi Konsultan Kami</button>
        </div>
      </div>
      
      <div className={styles.statContainer}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>100+</span>
          <span className={styles.statLabel}>PRODUK EKSKLUSIF</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>5000+</span>
          <span className={styles.statLabel}>KLIEN PUAS</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>24/7</span>
          <span className={styles.statLabel}>LAYANAN DARURAT</span>
        </div>
      </div>
    </section>
  );
}
