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
    <main className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/">Beranda</Link> / <Link href="/products">Katalog</Link> / <span>{product.title}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={`${styles.imageWrapper} premium-shadow`}>
            <Image 
              src={product.imageUrl} 
              alt={product.title} 
              fill 
              style={{ objectFit: 'cover' }}
              className={styles.image}
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

          <div className={styles.specs}>
            <h3>Spesifikasi Eksklusif</h3>
            <ul>
              {product.specs.map((spec, index) => (
                <li key={index}>
                  <span className={styles.specLabel}>{spec.label}</span>
                  <span className={styles.specValue}>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href={waLink} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
            <span className={styles.waIcon}>💬</span> Pesan via WhatsApp
          </a>

          <p className={styles.shippingInfo}>
            * Layanan pemasangan profesional tersedia untuk wilayah JABODETABEK.
          </p>
        </div>
      </div>
    </main>
  );
}
