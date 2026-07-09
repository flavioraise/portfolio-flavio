"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { profile, socials } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// One line of the big name, revealed by sliding up from behind a mask.
function NameLine({
  children,
  delay,
  reduce,
}: {
  children: string;
  delay: number;
  reduce: boolean;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion() ?? false;

  const fade = {
    hidden: reduce ? {} : { opacity: 0, y: 16 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.5 + i * 0.08, ease: EASE },
    }),
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-16 sm:pt-24 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-24">
        {/* Left: the pitch */}
        <div>
          <h1 className="font-display text-[clamp(3rem,11vw,7rem)] font-bold uppercase leading-[0.86] tracking-tight">
            <NameLine delay={0.15} reduce={reduce}>
              Flavio
            </NameLine>
            <NameLine delay={0.27} reduce={reduce}>
              Raise
            </NameLine>
          </h1>

          <motion.p
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 font-mono text-sm text-muted sm:text-base"
          >
            {profile.role}
          </motion.p>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md leading-relaxed text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            >
              View work
            </a>
            <Link
              href="/experience"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Experience
            </Link>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                {s.label.toLowerCase()} ↗
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          className="relative mx-auto w-full max-w-sm md:mx-0 md:ml-auto"
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        >
          <div className="group/photo relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-cover object-top grayscale contrast-[1.08] brightness-[0.8] transition-[filter] duration-700 ease-out group-hover/photo:grayscale-0 group-hover/photo:brightness-100"
            />
            {/* darken toward the canvas for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/15 to-bg/10" />
            {/* location chip */}
            <div className="absolute bottom-4 left-4 rounded-full border border-line bg-bg/70 px-3 py-1 font-mono text-xs text-ink backdrop-blur">
              {profile.location}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
