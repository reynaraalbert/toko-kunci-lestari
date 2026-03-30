import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import styles from './page.js'; // Wait, I'm using page.module.css

// Let's fix the import if I made a mistake
import pageStyles from './page.module.css';

export default function Home() {
  return (
    <main className={pageStyles.main}>
      <Navbar />
      <Hero />
      
      <section className={pageStyles.productSection}>
        <div className={pageStyles.container}>
          <div className={pageStyles.sectionHeader}>
            <h4 className={pageStyles.sectionSubtitle}>EKSKLUSIF</h4>
            <h2 className={pageStyles.sectionTitle}>Koleksi Pilihan</h2>
            <p className={pageStyles.sectionDesc}>
              Kurasi desain terbaik untuk menonjolkan estetika hunian mewah Anda.
            </p>
          </div>
          
          <ProductGrid />
        </div>
      </section>

      <footer className={pageStyles.footer}>
        <p>&copy; 2024 Toko Kunci Berkah Lestari. Seluruh Hak Cipta Dilindungi.</p>
      </footer>
    </main>
  );
}
