import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ category = 'Semua' }) {
  const filteredProducts = category === 'Semua' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === category);

  return (
    <div className={styles.grid}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
