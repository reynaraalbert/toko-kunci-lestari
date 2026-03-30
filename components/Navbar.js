'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'light';
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${pathname === '/' ? styles.home : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.brand}>BERKAH LESTARI</span>
            <span className={styles.tagline}>Maison de Serrurerie</span>
          </Link>
        </div>
        
        <div className={styles.links}>
          <Link href="/products" className={`${styles.link} ${pathname === '/products' ? styles.active : ''}`}>
            Koleksi
          </Link>
          <Link href="/exclusive" className={`${styles.link} ${pathname === '/exclusive' ? styles.active : ''}`}>
            Eksklusif
          </Link>
          <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>
            L'Atelier
          </Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <span className={styles.icon}>🔍</span>
          </button>
          <button className={styles.actionBtn} onClick={toggleTheme} title="Toggle Mode">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
