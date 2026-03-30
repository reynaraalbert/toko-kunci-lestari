import ProductGrid from '../../components/ProductGrid';
import styles from '../products/ProductsPage.module.css';

export default function ExclusivePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h4 className={styles.subtitle}>EDISI TERBATAS</h4>
        <h1 className={styles.title}>Koleksi Eksklusif</h1>
        <p className={styles.desc}>
          Edisi terbatas yang hanya tersedia untuk pelanggan setia Berkah Lestari. Keamanan tingkat tinggi dengan desain yang tak tertandingi.
        </p>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.container}>
          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
