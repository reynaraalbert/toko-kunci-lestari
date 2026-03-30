import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        {/* Placeholder for real video file */}
        {/* If the user has a video, they can put it in public/profile.mp4 */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.video}
          poster="/hero-video-fallback.png"
        >
          <source src="/profile.mp4" type="video/mp4" />
          {/* Fallback image is always visible if no video is found */}
        </video>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <h4 className={styles.pretitle}>PROFILE COMPANY</h4>
        <h1 className={styles.title}>KOLEKSI LENGKAP <br /> — ANDA</h1>
        
        <div className={styles.actions}>
          <Link href="/products" className={styles.mainBtn}>
            Jelajahi Katalog
          </Link>
          <Link href="/about" className={styles.secondaryBtn}>
            Tentang Kami
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
