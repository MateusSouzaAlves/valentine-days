'use client';

import { useEffect, useState } from 'react';
import loveConfig from '@/config/loveConfig';
import styles from './Hero.module.css';

const petals = [
  { left: 7, delay: 0, duration: 17 },
  { left: 16, delay: 2, duration: 21 },
  { left: 24, delay: 5, duration: 18 },
  { left: 33, delay: 1, duration: 24 },
  { left: 44, delay: 4, duration: 20 },
  { left: 52, delay: 7, duration: 22 },
  { left: 63, delay: 3, duration: 19 },
  { left: 71, delay: 6, duration: 25 },
  { left: 82, delay: 2, duration: 18 },
  { left: 91, delay: 8, duration: 23 },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const parallaxOffset = Math.min(scrollY * 0.18, 90);

  return (
    <section className={styles.hero}>
      <div className={styles.petals}>
        {petals.map((petal, i) => (
          <div
            key={i}
            className={styles.petal}
            style={{
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
            }}
          >
            🌷
          </div>
        ))}
      </div>

      <div className={styles.content} style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <div className={styles.tulipIcon}>💐</div>
        <h1 className={styles.headline}>{loveConfig.heroHeadline}</h1>
        <p className={styles.subtext}>{loveConfig.heroSubtext}</p>

        <div className={styles.badges} aria-label="Detalhes do casal">
          {loveConfig.coupleHighlights.map((item) => (
            <div className={styles.badge} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <div className={styles.heartDivider}>
          <span>❤️</span>
        </div>
      </div>

      <button
        className={styles.scrollHint}
        onClick={scrollToContent}
        aria-label="Ir para o começo da história"
      >
        <span>Começar</span>
        <svg className={styles.chevron} width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
