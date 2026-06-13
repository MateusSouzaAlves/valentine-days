'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import loveConfig from '@/config/loveConfig';
import styles from './InviteCard.module.css';

interface InviteCardProps {
  onPlayAgain: () => void;
}

export default function InviteCard({ onPlayAgain }: InviteCardProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonEscaping, setIsNoButtonEscaping] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYesClick = () => {
    alert('Eu sabia! Feliz Dia dos Namorados, meu amor. Te amo! 💕');
  };

  const handleNoClick = () => {
    console.log('Tentou clicar em não...');
  };

  const moveNoButton = (cursorX: number, cursorY: number) => {
    if (!noButtonRef.current) return;

    const buttonRect = noButtonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const distance = Math.sqrt(Math.pow(cursorX - buttonCenterX, 2) + Math.pow(cursorY - buttonCenterY, 2));

    if (distance < 150) {
      if (!isNoButtonEscaping) {
        setIsNoButtonEscaping(true);
      }

      const angle = Math.atan2(buttonCenterY - cursorY, buttonCenterX - cursorX);
      const moveDistance = 360;
      let newX = buttonRect.left + Math.cos(angle) * moveDistance;
      let newY = buttonRect.top + Math.sin(angle) * moveDistance;

      const padding = 24;
      const maxX = window.innerWidth - buttonRect.width - padding;
      const maxY = window.innerHeight - buttonRect.height - padding;

      newX = Math.max(padding, Math.min(newX, maxX));
      newY = Math.max(padding, Math.min(newY, maxY));

      setNoButtonPosition({ x: newX, y: newY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    moveNoButton(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      moveNoButton(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <div className={styles.inviteContainer} ref={containerRef} onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
      <div className={styles.inviteCard}>
        <h2 className={styles.inviteTitle}>{loveConfig.inviteTitle}</h2>

        <div className={styles.invitePhotoContainer}>
          <Image
            src={loveConfig.invitePhoto}
            alt="Mateus e Juliana sorrindo juntos"
            width={420}
            height={520}
            className={styles.invitePhoto}
            priority
          />
        </div>

        <div className={styles.inviteDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📅</span>
            <div>
              <div className={styles.detailLabel}>Data</div>
              <div className={styles.detailValue}>{loveConfig.inviteDate}</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>🕐</span>
            <div>
              <div className={styles.detailLabel}>Hora</div>
              <div className={styles.detailValue}>{loveConfig.inviteTime}</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📍</span>
            <div>
              <div className={styles.detailLabel}>Lugar</div>
              <div className={styles.detailValue}>{loveConfig.inviteLocation}</div>
            </div>
          </div>
        </div>

        <p className={styles.inviteMessage}>{loveConfig.inviteMessage}</p>

        <div className={styles.actionButtons}>
          <button className={`btn-primary ${styles.yesButton}`} onClick={handleYesClick}>
            Sim, meu amor! 💕
          </button>

          <button
            ref={noButtonRef}
            className={`btn-secondary ${styles.noButton} ${isNoButtonEscaping ? styles.noButtonEscaping : ''}`}
            style={{
              position: isNoButtonEscaping ? 'fixed' : 'relative',
              left: isNoButtonEscaping ? `${noButtonPosition.x}px` : 'auto',
              top: isNoButtonEscaping ? `${noButtonPosition.y}px` : 'auto',
              transition: isNoButtonEscaping ? 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              zIndex: isNoButtonEscaping ? 1000 : 'auto',
            }}
            onClick={handleNoClick}
          >
            Não 😢
          </button>

        </div>

        <div className={styles.playAgainSection}>
          <button className={styles.playAgainButton} onClick={onPlayAgain}>
            🎮 Jogar de novo
          </button>
        </div>
      </div>
    </div>
  );
}
