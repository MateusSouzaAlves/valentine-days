'use client';

import { useEffect, useRef, useState } from 'react';
import InviteCard from './InviteCard';
import styles from './TulipCatcher.module.css';

interface Tulip {
  id: number;
  x: number;
  y: number;
  speed: number;
}

interface TulipCatcherProps {
  onComplete: () => void;
  gameCompleted: boolean;
}

const TARGET_SCORE = 8;
const celebrationSymbols = ['💕', '❤️', '🌷', '✨', '🎉'];

export default function TulipCatcher({ onComplete }: TulipCatcherProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [tulips, setTulips] = useState<Tulip[]>([]);
  const [showVictory, setShowVictory] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; symbol: string }>>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (gameStarted && score < TARGET_SCORE) {
      const spawnTulip = () => {
        const newTulip: Tulip = {
          id: nextIdRef.current++,
          x: Math.random() * 82 + 6,
          y: -10,
          speed: 0.34 + Math.random() * 0.62,
        };
        setTulips((prev) => [...prev, newTulip]);
      };

      const spawnInterval = setInterval(spawnTulip, 430);

      let lastTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const delta = now - lastTime;

        if (delta > 16) {
          setTulips((prev) =>
            prev
              .map((tulip) => ({ ...tulip, y: tulip.y + tulip.speed }))
              .filter((tulip) => tulip.y < 110),
          );
          lastTime = now;
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        clearInterval(spawnInterval);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [gameStarted, score]);

  useEffect(() => {
    if (score >= TARGET_SCORE && !showVictory) {
      setShowVictory(true);
      onComplete();
      setConfetti(
        Array.from({ length: 50 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          symbol: celebrationSymbols[i % celebrationSymbols.length],
        })),
      );
    }
  }, [score, showVictory, onComplete]);

  const handleTulipClick = (tulipId: number, e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTulips((prev) => prev.filter((t) => t.id !== tulipId));
    setScore((prev) => Math.min(prev + 1, TARGET_SCORE));

    if ('vibrate' in navigator) {
      navigator.vibrate(35);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTulips([]);
    setShowVictory(false);
  };

  const resetGame = () => {
    setGameStarted(false);
    setScore(0);
    setTulips([]);
    setShowVictory(false);
    setConfetti([]);
  };

  if (showVictory) {
    return (
      <section className={styles.gameSection}>
        <div className={styles.confettiContainer}>
          {confetti.map((c) => (
            <div
              key={c.id}
              className={styles.confetti}
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
                animationDelay: `${(c.id % 6) * 0.08}s`,
              }}
            >
              {c.symbol}
            </div>
          ))}
        </div>
        <InviteCard onPlayAgain={resetGame} />
      </section>
    );
  }

  return (
    <section className={styles.gameSection}>
      <div className={styles.container}>
        <div className={styles.gameHeader}>
          <h2>Um joguinho para a Juliana 🌷</h2>
          <p>Toque em {TARGET_SCORE} tulipas para abrir uma surpresa do Mateus.</p>
        </div>

        {!gameStarted ? (
          <div className={styles.startScreen}>
            <div className={styles.startCard}>
              <div className={styles.gameIcon}>🎮</div>
              <h3>Como jogar</h3>
              <ul className={styles.instructions}>
                <li>🌷 Toque nas tulipas antes que elas caiam.</li>
                <li>🎯 Pegue {TARGET_SCORE} tulipas para vencer.</li>
                <li>💌 A surpresa aparece no final.</li>
              </ul>
              <button className="btn-primary" onClick={startGame}>
                Começar jogo
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.scoreBoard}>
              <div className={styles.scoreBadge}>
                <span className={styles.scoreLabel}>Pontuação</span>
                <span className={styles.scoreValue}>
                  {score} / {TARGET_SCORE}
                </span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${(score / TARGET_SCORE) * 100}%` }}></div>
              </div>
            </div>

            <div className={styles.gameArea} ref={gameAreaRef}>
              {tulips.map((tulip) => (
                <button
                  key={tulip.id}
                  className={styles.tulip}
                  style={{
                    left: `${tulip.x}%`,
                    top: `${tulip.y}%`,
                  }}
                  onClick={(e) => handleTulipClick(tulip.id, e)}
                  onTouchStart={(e) => handleTulipClick(tulip.id, e)}
                  aria-label="Pegar tulipa"
                >
                  🌷
                </button>
              ))}

              {tulips.length === 0 && <div className={styles.waitingMessage}>Preparando as tulipas...</div>}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
