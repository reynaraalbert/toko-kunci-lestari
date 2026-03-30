'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.brand}>BERKAH LESTARI</span>
            <span className={styles.tagline}>Spesialis Kunci Mewah</span>
          </Link>
        </div>
        
        {/* Desktop Links */}
        <div className={styles.links}>
          <Link href="/products" className={`${styles.link} ${pathname === '/products' ? styles.active : ''}`}>
            Koleksi Produk
          </Link>
          <Link href="/exclusive" className={`${styles.link} ${pathname === '/exclusive' ? styles.active : ''}`}>
            Edisi Terbatas
          </Link>
          <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>
            Tentang Kami
          </Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionBtn}>🔍</button>
          <button className={styles.actionBtn} onClick={toggleTheme} title="Ganti Mode">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          
          {/* Hamburger Button */}
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.overlayActive : ''}`}>
        <div className={styles.overlayLinks}>
          <Link href="/products" className={styles.overlayLink}>Koleksi Produk</Link>
          <Link href="/exclusive" className={styles.overlayLink}>Edisi Terbatas</Link>
          <Link href="/about" className={styles.overlayLink}>Tentang Kami</Link>
          
          <div className={styles.overlayFooter}>
            <p>Maison Berkah Lestari</p>
            <span>Est. 1995</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
