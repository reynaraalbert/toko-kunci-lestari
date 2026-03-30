import styles from '../products/ProductsPage.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h4 className={styles.subtitle}>TENTANG BERKAH LESTARI</h4>
        <h1 className={styles.title}>Maison Berkah</h1>
        <p className={styles.desc}>
          Dedikasi kami untuk keamanan dan estetika hunian mewah Anda dimulai sejak tahun 1995. Kami menghadirkan solusi penguncian terbaik dengan standar internasional.
        </p>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '2', opacity: '0.8' }}>
            <p style={{ marginBottom: '2rem' }}>
              Berkah Lestari bukan sekadar toko kunci. Kami adalah kurator keamanan yang memahami bahwa setiap pintu adalah gerbang menuju kenyamanan pribadi Anda.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              Setiap produk yang kami pilih telah melalui proses seleksi ketat untuk memastikan bahwa mereka tidak hanya berfungsi dengan baik, tetapi juga melengkapi desain interior yang paling canggih sekalipun.
            </p>
            <p>
              Hubungi kami untuk konsultasi keamanan pribadi bagi hunian Anda. Persembahan kami, untuk ketenangan Anda.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
