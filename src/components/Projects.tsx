"use client";

import { motion, useReducedMotion } from "motion/react";
import Section from "@/components/Section";
import { projects } from "@/lib/data";

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <Section id="work" title="Personal Projects" className="pb-10 sm:pb-14">
      <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-elevated hover:shadow-neon sm:p-8"
          >
            {/* links */}
            <div className="mb-6 flex items-center justify-end font-mono text-xs text-muted">
              <div className="flex gap-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    code ↗
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    demo ↗
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-display text-2xl font-semibold tracking-tight transition-all duration-300 group-hover:text-accent group-hover:text-accent-glow sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
