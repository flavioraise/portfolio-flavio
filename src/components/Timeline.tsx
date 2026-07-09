import Section from "@/components/Section";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <Section id="experience" title="Experience" meta="2021 — present">
      {/* A route through Flavio's history — each stop is a node */}
      <ol className="relative ml-3 border-l border-dashed border-route/40">
        {timeline.map((item, i) => (
          <li key={i} className="mb-12 ml-8 last:mb-0">
            {/* node marker */}
            <span className="absolute -left-[9px] mt-1 flex h-4 w-4 items-center justify-center">
              <span className="h-4 w-4 rounded-full border border-route bg-paper" />
              <span className="absolute h-1.5 w-1.5 rounded-full bg-route" />
            </span>

            <div className="mb-1 flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-muted">·</span>
              <span className="text-muted">{item.period}</span>
              <span
                className={
                  item.kind === "Work"
                    ? "rounded px-1.5 py-0.5 text-route ring-1 ring-route/30"
                    : "rounded px-1.5 py-0.5 text-muted ring-1 ring-line"
                }
              >
                {item.kind.toLowerCase()}
              </span>
            </div>

            <h3 className="font-display text-lg font-semibold sm:text-xl">
              {item.role}
            </h3>
            <p className="text-sm font-medium text-ink">
              {item.org}
              <span className="font-normal text-muted"> · {item.location}</span>
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {item.summary}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
