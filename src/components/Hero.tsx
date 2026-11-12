"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/lib/data";

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
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Portrait as a full-bleed background, anchored right */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[62%]"
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          className="h-full w-full object-cover object-[70%_top] contrast-[1.05] md:object-top"
        />
        {/* shade fading in from the left so the text stays readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/10 md:via-bg/70 md:to-transparent" />
        {/* grounding fade at the bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
        {/* the pitch */}
        <div className="max-w-xl">
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
            <Link
              href="/experience"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
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
        </div>
      </div>
    </section>
  );
}
