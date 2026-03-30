import Image from 'next/image';
import ProductGrid from '../../components/ProductGrid';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <h4 className={styles.pretitle}>WARISAN & DEDIKASI</h4>
        <h1 className={styles.title}>Maison Berkah <br /> Sejak 1995</h1>
        
        <div className={styles.heritageImage}>
          <Image 
            src="/about-bg.png" 
            alt="Atelier Berkah Lestari" 
            fill
            className={styles.image}
            priority
          />
        </div>
      </header>

      <article className={styles.content}>
        <div className={styles.story}>
          <p style={{ marginBottom: '3rem' }}>
            Perjalanan Berkah Lestari dimulai dari sebuah bengkel kecil di jantung kota, didorong oleh keyakinan sederhana bahwa setiap pintu adalah gerbang menuju ketenangan jiwa. Selama lebih dari dua dekade, kami telah mengabdikan diri untuk menguasai seni penguncian tingkat tinggi.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Kami percaya bahwa keamanan tidak harus mengorbankan estetika. Di Berkah Lestari, setiap mekanisme kunci dirancang dengan ketelitian jam tangan mewah, menggunakan material terbaik dari seluruh dunia—mulai dari obsidian murni hingga emas yang dipoles dengan tangan.
          </p>
        </div>

        <blockquote className={styles.quote}>
          "Keamanan adalah bentuk tertinggi dari kenyamanan, <br /> dan estetika adalah bahasa dari kemewahan."
        </blockquote>

        <div className={styles.story}>
          <p>
            Hari ini, Berkah Lestari hadir sebagai destinasi utama bagi mereka yang mencari kesempurnaan. Kami tidak hanya menjual kunci; kami menawarkan warisan keamanan yang akan menjaga hunian berharga Anda untuk generasi mendatang. Selamat datang di Maison Berkah.
          </p>
        </div>
      </article>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Koleksi Masterpiece Kami</h2>
          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
