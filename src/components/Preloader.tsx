"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// The "FR" wordmark, drawn as light strokes on a 1600×900 (16:9) canvas so it
// can be centred and share a coordinate space with the incoming edge beams.
const CX = 800;
const CY = 450;

// Each stroke is drawn on with pathLength; order/delay staggers the reveal.
const LETTER_STROKES = [
  // F
  "M640 360 L640 540", // stem
  "M640 360 L735 360", // top bar
  "M640 450 L708 450", // middle bar
  // R
  "M800 540 L800 360", // stem (grows upward)
  "M800 360 L892 360", // top bar
  "M892 360 L892 442", // shoulder
  "M892 442 L800 442", // middle bar
  "M834 442 L916 540", // leg
];

// Beams originate off the four screen edges and point at the logo centre.
const EDGE_POINTS: [number, number][] = [
  [400, -40],
  [800, -40],
  [1200, -40],
  [400, 940],
  [800, 940],
  [1200, 940],
  [-40, 300],
  [-40, 600],
  [1640, 300],
  [1640, 600],
];

// Stop each beam just shy of the mark so it reads as feeding into the logo.
function beamPath([ex, ey]: [number, number]) {
  const dx = CX - ex;
  const dy = CY - ey;
  const len = Math.hypot(dx, dy);
  const stop = 150; // distance from centre where the beam terminates
  const tx = ex + (dx / len) * (len - stop);
  const ty = ey + (dy / len) * (len - stop);
  return `M${ex} ${ey} L${tx.toFixed(1)} ${ty.toFixed(1)}`;
}

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const reduce = useReducedMotion() ?? false;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const hold = reduce ? 500 : 2500;
    const t = setTimeout(() => setLoading(false), hold);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (!loading) document.body.style.overflow = "";
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-bg"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Bloom that swells as the letters resolve */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(42% 42% at 50% 50%, rgba(255,255,255,0.10), transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: reduce ? 0 : 0.6, ease: EASE }}
          />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <defs>
              <filter
                id="fr-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Beams sweeping in from the edges */}
            {!reduce && (
              <g
                stroke="white"
                strokeWidth={1.4}
                fill="none"
                vectorEffect="non-scaling-stroke"
              >
                {EDGE_POINTS.map((p, i) => (
                  <motion.path
                    key={i}
                    d={beamPath(p)}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: [0, 0.28, 0.05],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.05,
                      ease: EASE,
                    }}
                  />
                ))}
              </g>
            )}

            {/* The FR mark — nudged right so it reads optically centred */}
            <g
              stroke="var(--ink)"
              strokeWidth={11}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#fr-glow)"
              transform="translate(30 0)"
            >
              {LETTER_STROKES.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: {
                      duration: reduce ? 0.01 : 0.55,
                      delay: reduce ? 0 : 0.65 + i * 0.08,
                      ease: EASE,
                    },
                    opacity: {
                      duration: 0.2,
                      delay: reduce ? 0 : 0.65 + i * 0.08,
                    },
                  }}
                />
              ))}
            </g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
