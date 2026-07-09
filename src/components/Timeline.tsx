"use client";

import { motion, useReducedMotion } from "motion/react";
import Section from "@/components/Section";
import { timeline } from "@/lib/data";

export default function Timeline() {
  const reduce = useReducedMotion();

  return (
    <Section id="experience" title="Experience" meta="2021 — present">
      <div className="flex flex-col">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group grid gap-4 border-b border-line py-8 transition-colors first:border-t last:border-b hover:bg-surface/40 md:grid-cols-[0.8fr_2fr] md:gap-10 md:px-4"
          >
            {/* left: period + kind */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-muted">{item.period}</span>
              <span
                className={
                  item.kind === "Work"
                    ? "rounded-full px-2 py-0.5 text-accent ring-1 ring-accent/30"
                    : "rounded-full px-2 py-0.5 text-muted ring-1 ring-line"
                }
              >
                {item.kind.toLowerCase()}
              </span>
            </div>

            {/* right: details */}
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink">
                {item.org}
                <span className="font-normal text-muted">
                  {" "}
                  · {item.location}
                </span>
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                {item.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
