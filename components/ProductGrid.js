import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
  return (
    <div className={styles.grid}>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
