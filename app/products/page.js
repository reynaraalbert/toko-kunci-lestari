import ProductGrid from '../../components/ProductGrid';
import { PRODUCTS } from '../../data/products';
import styles from './ProductsPage.module.css';

export default function ProductsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h4 className={styles.subtitle}>KOLEKSI LENGKAP</h4>
        <h1 className={styles.title}>Katalog Masterpiece</h1>
        <p className={styles.desc}>
          Telusuri koleksi sistem keamanan dan aksesori pintu premium kami yang dirancang untuk estetika dan ketahanan maksimal.
        </p>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.container}>
          <div className={styles.filterBar}>
            <span className={styles.filterLabel}>Kategori:</span>
            <div className={styles.filterList}>
              <button className={`${styles.filterItem} ${styles.active}`}>Semua</button>
              <button className={styles.filterItem}>Digital</button>
              <button className={styles.filterItem}>Eksklusif</button>
              <button className={styles.filterItem}>Minimalis</button>
            </div>
            <span className={styles.count}>{PRODUCTS.length} Produk Ditemukan</span>
          </div>

          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
