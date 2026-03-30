import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ id, title, price, category, imageUrl }) {
  return (
    <Link href={`/products/${id}`} className={`${styles.card} glass premium-shadow animate-fade-up`}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          style={{ objectFit: 'cover' }}
          className={styles.image}
        />
        <div className={styles.category}>{category}</div>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
        <button className={styles.addBtn}>LIHAT DETAIL</button>
      </div>
    </Link>
  );
}
