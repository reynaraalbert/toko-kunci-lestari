import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Link href={`/products/${product.id}`} className={styles.imageWrapper}>
        <div className={styles.badge}>{product.category}</div>
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className={styles.image}
        />
        <div className={styles.overlay}>
          <span className={styles.viewBtn}>Lihat Detail</span>
        </div>
      </Link>
      
      <div className={styles.info}>
        <h3 className={styles.name}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </h3>
        <p className={styles.price}>{product.price}</p>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
