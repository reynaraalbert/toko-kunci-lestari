'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled || pathname !== '/' ? styles.scrolled : ''} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.brand}>BERKAH</span>
            <span className={styles.subBrand}>LESTARI</span>
          </Link>
        </div>
        
        <div className={styles.links}>
          <Link href="/products" className={`${styles.link} ${pathname === '/products' ? styles.active : ''}`}>
            Produk
          </Link>
          <Link href="/exclusive" className={`${styles.link} ${pathname === '/exclusive' ? styles.active : ''}`}>
            Koleksi Eksklusif
          </Link>
          <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>
            Tentang Kami
          </Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.cartBtn}>
            🛒 <span className={styles.cartCount}>0</span>
          </button>
          <button className={styles.themeToggle}>
            🌙
          </button>
        </div>
      </div>
    </nav>
  );
}
