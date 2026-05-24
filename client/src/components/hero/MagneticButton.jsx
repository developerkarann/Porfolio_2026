import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({ href, children, variant = 'primary', className = '' }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.4 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold tracking-wide transition-[box-shadow,background] duration-300 overflow-hidden';
  const variants = {
    primary:
      'bg-accent text-dark shadow-[0_0_40px_rgba(250,204,21,0.35)] hover:shadow-[0_0_56px_rgba(250,204,21,0.55)] hover:bg-accent-hover',
    secondary:
      'border border-white/20 text-white bg-white/5 backdrop-blur-md hover:border-accent/60 hover:text-accent shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]',
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      className={`group ${base} ${variants[variant]} ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 pointer-events-none" />
      {children}
    </motion.a>
  );
}
