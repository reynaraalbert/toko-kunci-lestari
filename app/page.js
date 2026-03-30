import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      
      <section className={styles.productSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h4 className={styles.sectionSubtitle}>EKSKLUSIF</h4>
            <h2 className={styles.sectionTitle}>Koleksi Pilihan</h2>
            <p className={styles.sectionDesc}>
              Kurasi desain terbaik untuk menonjolkan estetika hunian mewah Anda.
            </p>
          </div>
          
          <ProductGrid />
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Toko Kunci Berkah Lestari. Seluruh Hak Cipta Dilindungi.</p>
      </footer>
    </main>
  );
}
