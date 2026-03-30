'use client';

import { useState } from 'react';
import ProductGrid from '../../components/ProductGrid';
import { PRODUCTS } from '../../data/products';
import styles from './ProductsPage.module.css';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Digital', 'Eksklusif', 'Minimalis'];
  
  const filteredCount = selectedCategory === 'Semua' 
    ? PRODUCTS.length 
    : PRODUCTS.filter(p => p.category === selectedCategory).length;

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h4 className={styles.subtitle}>KOLEKSI LENGKAP</h4>
        <h1 className={styles.title}>Katalog Masterpiece</h1>
        <p className={styles.desc}>
          Telusuri koleksi sistem keamanan dan aksesori pintu premium kami yang dirancang untuk estetika dan ketahanan maksimal bagi hunian Anda.
        </p>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.container}>
          <div className={styles.filterBar}>
            <span className={styles.filterLabel}>Kategori /</span>
            <div className={styles.filterList}>
              {categories.map((cat) => (
                <button 
                  key={cat}
                  className={`${styles.filterItem} ${selectedCategory === cat ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className={styles.count}>{filteredCount} Produk Ditemukan</span>
          </div>

          <ProductGrid category={selectedCategory} />
        </div>
      </section>
    </main>
  );
}
