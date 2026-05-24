import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function HeroParticles({ count = 48, reduced }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 17.3) % 100}%`,
        top: `${(i * 23.7) % 100}%`,
        size: 1 + (i % 3),
        duration: 4 + (i % 5),
        delay: (i % 7) * 0.4,
      })),
    [count]
  );

  if (reduced) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-accent/40"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 6px rgba(250,204,21,0.5)',
          }}
          animate={{
            opacity: [0.15, 0.7, 0.15],
            y: [0, -30 - p.id % 20, 0],
            x: [0, (p.id % 2 ? 8 : -8), 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
