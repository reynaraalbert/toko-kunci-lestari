import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '../../../data/products';
import styles from './ProductDetail.module.css';

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const waNumber = '628815634979';
  const waMessage = encodeURIComponent(`Halo Berkah Lestari, saya tertarik dengan produk ${product.title} (${product.price}). Bisa dibantu untuk pemesanannya?`);
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/">Beranda</Link>
          <span className={styles.separator}>/</span>
          <Link href="/products">Koleksi Produk</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{product.title}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image 
                src={product.imageUrl} 
                alt={product.title} 
                width={800}
                height={800}
                className={styles.image}
                priority
              />
            </div>
          </div>

          <div className={styles.infoSection}>
            <h4 className={styles.category}>{product.category}</h4>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.price}>{product.price}</p>
            
            <div className={styles.description}>
              <p>{product.description}</p>
            </div>

            <div className={styles.specSection}>
              <h3 className={styles.specTitle}>Spesifikasi Teknis</h3>
              <div className={styles.specGrid}>
                {product.specs.map((spec, index) => (
                  <div key={index} className={styles.specItem}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              Pesan via WhatsApp
            </a>

            <p className={styles.shippingNotice}>
              * Layanan instalasi profesional tersedia untuk seluruh wilayah JABODETABEK. Hubungi tim kami untuk jadwal pemasangan.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
