import { useCallback, useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import MagneticButton from './hero/MagneticButton';
import HeroFloatingElements from './hero/HeroFloatingElements';
import HeroParticles from './hero/HeroParticles';

const SUBHEADINGS = [
  'Building Scalable Digital Experiences',
  'Full Stack Software Developer',
  'Crafting High-Performance Web Applications',
  'Developing Robust Backend Systems',
  'DevOps Engineer',
];

const revealContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.45 },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 36, filter: 'blur(14px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const [subIndex, setSubIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 55, damping: 22 });

  const bgX = useTransform(smoothX, [-0.5, 0.5], ['-2%', '2%']);
  const bgY = useTransform(smoothY, [-0.5, 0.5], ['-1.5%', '1.5%']);
  const bgScale = useTransform(smoothY, [-0.5, 0.5], [1.06, 1.1]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const id = setInterval(() => {
      setSubIndex((i) => (i + 1) % SUBHEADINGS.length);
    }, 4200);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const onPointerMove = useCallback((e) => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
  }, [mouseX, mouseY]);

  const onPointerLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
      onMouseMove={reducedMotion ? undefined : onPointerMove}
      onMouseLeave={reducedMotion ? undefined : onPointerLeave}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={reducedMotion ? undefined : { x: bgX, y: bgY, scale: bgScale }}
      >
        <motion.img
          src="/main.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center scale-105"
          initial={reducedMotion ? false : { scale: 1.12 }}
          animate={reducedMotion ? undefined : { scale: 1.05 }}
          transition={{ duration: 14, ease: 'easeOut' }}
          draggable={false}
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/55 to-dark/95"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_35%,rgba(250,204,21,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(251,191,36,0.08),transparent_50%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(rgba(250,204,21,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,204,21,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />

      <motion.div
        className="absolute -top-32 left-1/4 w-[420px] h-[420px] rounded-full bg-amber-500/20 blur-[120px] pointer-events-none"
        animate={reducedMotion ? undefined : { x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[360px] h-[360px] rounded-full bg-yellow-500/10 blur-[100px] pointer-events-none"
        animate={reducedMotion ? undefined : { x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        aria-hidden
      />

      <HeroParticles reduced={reducedMotion} />
      <HeroFloatingElements smoothX={smoothX} smoothY={smoothY} reduced={reducedMotion} />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-8 pt-20 pb-16 text-center">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          animate="show"
          className="flex max-w-4xl flex-col items-center"
        >


          <motion.h1
            variants={revealItem}
            className="font-display font-bold text-[clamp(2.75rem,10vw,6.5rem)] leading-[0.92] tracking-tight text-white"
          >
            <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(250,204,21,0.25)]">
              KARAN
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-amber-200 to-accent bg-clip-text text-transparent">
              PAL
            </span>
          </motion.h1>

          <motion.div variants={revealItem} className="mt-5 h-8 sm:h-9 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={subIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-lg md:text-2xl text-white/85 font-light tracking-wide"
              >
                {SUBHEADINGS[subIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={revealItem}
            className="mt-6 max-w-xl text-sm sm:text-base text-white/60 leading-relaxed font-light"
          >
            I architect and ship high-performance web platforms—from polished interfaces to
            distributed backends—built for scale, security, and production impact.
          </motion.p>

          <motion.div
            variants={revealItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <MagneticButton href="/#projects" variant="primary" className="group min-w-[160px]">
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </MagneticButton>
            <MagneticButton href="/#contact" variant="secondary" className="min-w-[140px]">
              Hire Me
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-accent transition-colors"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Scroll to projects"
      >


      </motion.a>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark to-transparent z-[5]"
        aria-hidden
      />
    </section>
  );
}
