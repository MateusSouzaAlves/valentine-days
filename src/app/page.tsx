'use client';

import Hero from '@/components/Hero';
import ParallaxTimeline from '@/components/ParallaxTimeline';
import TimeCounter from '@/components/TimeCounter';
import TulipCatcher from '@/components/TulipCatcher';
import { useState } from 'react';

export default function Home() {
  const [gameCompleted, setGameCompleted] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero />
      <TimeCounter />
      <ParallaxTimeline />
      <TulipCatcher onComplete={() => setGameCompleted(true)} gameCompleted={gameCompleted} />
    </main>
  );
}
