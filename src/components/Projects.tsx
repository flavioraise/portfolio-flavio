import Section from "@/components/Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      meta={`${projects.length} ${projects.length === 1 ? "repo" : "repos"}`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={i}
            className="group relative flex flex-col rounded-lg border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-route"
          >
            {/* schematic connection port */}
            <span
              aria-hidden
              className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-route opacity-0 transition-opacity group-hover:opacity-100"
            />

            <div className="mb-4 flex items-center justify-between font-mono text-xs">
              <span className="text-muted">{project.tech[0]}</span>
              <div className="flex gap-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-route"
                  >
                    code ↗
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-display text-xl font-semibold">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-5 flex items-end justify-between gap-4">
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-xs text-muted transition-colors hover:text-route"
                >
                  demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
