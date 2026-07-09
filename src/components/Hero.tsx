import { profile, socials } from "@/lib/data";

// Fixed satellite coordinates for the topology graph (viewBox 440 x 400)
const NODES = [
  { x: 80, y: 82, labelY: 62, route: "route-1", node: "node-1" },
  { x: 372, y: 98, labelY: 78, route: "route-2", node: "node-2" },
  { x: 378, y: 300, labelY: 324, route: "route-3", node: "node-3" },
  { x: 86, y: 316, labelY: 340, route: "route-4", node: "node-4" },
];
const CENTER = { x: 220, y: 200 };

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 sm:py-24 md:grid-cols-[1fr_1fr] md:gap-6">
        {/* Left: the pitch */}
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-route/40 pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-route" />
            </span>
            available for work
          </p>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
            Flavio
            <br />
            Raise
          </h1>

          <p className="mt-4 font-mono text-sm text-route sm:text-base">
            {profile.role}
          </p>

          <p className="mt-6 max-w-md leading-relaxed text-muted">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-route px-5 py-2.5 text-sm font-medium text-surface transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-route hover:text-route"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
            <span>{profile.location}</span>
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
          </div>
        </div>

        {/* Right: the signature — a network topology of what Flavio does */}
        <div className="relative">
          <div className="blueprint-grid absolute inset-0" aria-hidden />
          <svg
            viewBox="0 0 440 400"
            className="relative w-full"
            role="img"
            aria-label="Network diagram: Flavio connected to Web, Systems, Networks and Databases."
          >
            {/* routes */}
            {NODES.map((n) => (
              <line
                key={n.route}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={n.x}
                y2={n.y}
                className={`route ${n.route} stroke-route`}
                strokeWidth={1.5}
                strokeOpacity={0.55}
              />
            ))}

            {/* satellite nodes */}
            {profile.focus.map((label, i) => {
              const n = NODES[i];
              return (
                <g key={label} className={`node-satellite ${n.node}`}>
                  <circle cx={n.x} cy={n.y} r={6} className="fill-route" />
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={11}
                    className="fill-none stroke-route"
                    strokeOpacity={0.3}
                  />
                  <text
                    x={n.x}
                    y={n.labelY}
                    textAnchor="middle"
                    fontSize={13}
                    className="fill-ink font-mono"
                  >
                    {label}
                  </text>
                </g>
              );
            })}

            {/* center node */}
            <circle
              cx={CENTER.x}
              cy={CENTER.y}
              r={34}
              className="fill-none stroke-route pulse-ring"
              strokeWidth={1.5}
            />
            <circle cx={CENTER.x} cy={CENTER.y} r={34} className="fill-ink" />
            <text
              x={CENTER.x}
              y={CENTER.y + 4}
              textAnchor="middle"
              fontSize={15}
              className="fill-surface font-mono"
            >
              flavio
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
