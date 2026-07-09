"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// Full-screen dark curtain with a counting loader, then lifts to reveal the site.
export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [pct, setPct] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const total = reduce ? 300 : 1600;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / total, 1);
      // ease-out for a natural deceleration toward 100
      setPct(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setLoading(false);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  useEffect(() => {
    if (!loading) document.body.style.overflow = "";
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-bg px-6 py-8 sm:px-10 sm:py-10"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="glow-radial pointer-events-none absolute inset-x-0 top-0 h-1/2" />

          <div className="relative flex items-center gap-3 font-mono text-sm text-muted">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent/50 pulse-ring" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            flavio.raise
          </div>

          <div className="relative flex items-end justify-between gap-6">
            <motion.p
              className="max-w-md font-display text-2xl font-semibold leading-tight text-ink sm:text-4xl"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Software developer
              <br />
              <span className="text-muted">systems &amp; networks</span>
            </motion.p>
            <span className="font-mono text-4xl font-medium tabular-nums text-accent text-accent-glow sm:text-6xl">
              {pct}
            </span>
          </div>

          {/* progress line */}
          <div className="relative mt-6 h-px w-full overflow-hidden bg-line">
            <div
              className="h-full bg-accent transition-[width] duration-75 ease-linear"
              style={{ width: `${pct}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
