import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const PRODUCTS = [
  {
    id: 1,
    title: 'Gold & Obsidian Handle',
    price: 'Rp 2.499.000',
    category: 'Eksklusif',
    imageUrl: '/products/gold-handle.png'
  },
  {
    id: 2,
    title: 'Smart Digital Lock Pro',
    price: 'Rp 4.899.000',
    category: 'Digital',
    imageUrl: '/products/digital-lock.png'
  },
  {
    id: 3,
    title: 'Minimalist Silver Handle',
    price: 'Rp 1.199.000',
    category: 'Minimalis',
    imageUrl: '/products/silver-handle.png'
  }
];

export default function ProductGrid() {
  return (
    <div className={styles.grid}>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
