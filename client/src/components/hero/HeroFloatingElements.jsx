import { motion, useTransform } from 'framer-motion';

const glass =
  'rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]';

const float = (delay, duration = 6) => ({
  y: [0, -14, 0],
  transition: { duration, repeat: Infinity, ease: 'easeInOut', delay },
});

export default function HeroFloatingElements({ smoothX, smoothY, reduced }) {
  const codeX = useTransform(smoothX, (v) => v * 24);
  const codeY = useTransform(smoothY, (v) => v * 18);
  const termX = useTransform(smoothX, (v) => v * -20);
  const termY = useTransform(smoothY, (v) => v * 12);
  const badgeX = useTransform(smoothX, (v) => v * 16);
  const badgeY = useTransform(smoothY, (v) => v * -10);
  const metricX = useTransform(smoothX, (v) => v * -14);
  const metricY = useTransform(smoothY, (v) => v * -16);

  if (reduced) return null;

  return (
    <>
      <motion.div
        style={{ x: codeX, y: codeY }}
        animate={float(0)}
        className={`hidden lg:block absolute top-[22%] left-[4%] w-52 ${glass} p-3 font-mono text-[10px] leading-relaxed text-emerald-400/90 pointer-events-none`}
      >
        <div className="flex gap-1.5 mb-2">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-400/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
        </div>
        <p>
          <span className="text-violet-400">const</span> ship = <span className="text-amber-300">async</span> () =&gt; {'{'}
        </p>
        <p className="pl-2">
          <span className="text-sky-400">await</span> deploy(<span className="text-emerald-300">&quot;prod&quot;</span>);
        </p>
        <p>{'}'}</p>
      </motion.div>

      <motion.div
        style={{ x: termX, y: termY }}
        animate={float(1.2, 7)}
        className={`hidden md:block absolute top-[18%] right-[5%] w-44 ${glass} p-3 pointer-events-none`}
      >
        <p className="text-[10px] text-white/40 font-mono mb-2">~/portfolio</p>
        <p className="text-xs text-accent font-mono">$ npm run build</p>
        <p className="text-[10px] text-emerald-400/80 font-mono mt-1">✓ optimized in 1.2s</p>
      </motion.div>

      <motion.div
        style={{ x: badgeX, y: badgeY }}
        animate={float(0.6, 5.5)}
        className={`hidden xl:flex absolute bottom-[28%] left-[6%] gap-2 ${glass} px-3 py-2 pointer-events-none`}
      >
        {['React', 'Node', 'AWS'].map((t) => (
          <span key={t} className="text-[10px] uppercase tracking-wider text-white/70 px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20">
            {t}
          </span>
        ))}
      </motion.div>

      <motion.div
        style={{ x: metricX, y: metricY }}
        animate={float(2, 8)}
        className={`hidden lg:block absolute bottom-[32%] right-[7%] w-40 ${glass} p-3 pointer-events-none`}
      >
        <div className="flex items-center justify-between text-[10px] text-white/40 mb-2">
          <span>metrics</span>
          <span className="text-accent">live</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[92%] bg-gradient-to-r from-accent/60 to-accent rounded-full" />
          </div>
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[78%] bg-gradient-to-r from-amber-500/50 to-accent rounded-full" />
          </div>
        </div>
        <p className="text-[10px] text-white/50 mt-2 font-mono">99.9% uptime</p>
      </motion.div>
    </>
  );
}
