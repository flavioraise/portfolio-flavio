// Portfolio content — edit your personal data here.

export const profile = {
  name: "Flavio Raise",
  role: "Junior Software Developer · Systems & Networks",
  location: "Mestre, Italy",
  email: "flavio.raise07@gmail.com",
  available: true,
  intro:
    "Recent IT graduate from Venice. I build web applications and enjoy working across software, systems and networks.",
  // Portrait shown in the hero. Drop your photo in /public and point this at it
  // (e.g. "/portrait.jpg"). A placeholder ships at /portrait.svg.
  photo: "/portrait.png",
  // Nodes shown in the hero topology graph
  focus: ["Web", "Systems", "Networks", "Databases"],
  stack: [
    "Java",
    "Python",
    "JavaScript",
    "SQL",
    "React",
    "Next.js",
    "Docker",
    "Networking",
  ],
  resumeUrl: "", // e.g. "/cv.pdf" — leave empty to hide the button
};

export type Social = {
  label: string;
  href: string;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/flavioraise" },
  { label: "Email", href: "mailto:flavio.raise07@gmail.com" },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Claude Code Ladder",
    description:
      "A skill for Claude Code that turns a big feature request into a ladder of small, dependency-ordered rungs — each with its own done condition. It plans the ladder, pauses for approval, then climbs rung by rung, verifying each step and persisting progress so long builds can resume across sessions.",
    tech: ["Claude Code", "Bash", "PowerShell", "Git", "Automation"],
    repo: "https://github.com/flavioraise/claude-code-ladder",
  },
  {
    title: "Bike Maps",
    description:
      "A self-hosted routing engine that finds the most fun ride instead of the fastest — scoring roads by curviness, mountain passes and scenery while penalizing motorways and city traffic. Built on GraphHopper with a custom fun-score baked into the routing graph.",
    tech: ["React", "TypeScript", "MapLibre", "GraphHopper", "Python", "Docker"],
    repo: "https://github.com/flavioraise/bike-maps",
    demo: "https://bike-map.flavioraise.com/",
  },
];

export type TimelineItem = {
  kind: "Work" | "Education";
  period: string;
  role: string;
  org: string;
  location: string;
  summary: string;
};

export const timeline: TimelineItem[] = [
  {
    kind: "Work",
    period: "May – Jun 2025",
    role: "Intern — Programming & Databases",
    org: "Data4Prime",
    location: "Mestre, Venice",
    summary:
      "Data management and analytics with Qlik: dataset preparation, loading logic and building dashboards & reports.",
  },
  {
    kind: "Work",
    period: "Nov 2024 – Present",
    role: "Waiter",
    org: "Pizzeria Da Pino",
    location: "Mestre, Venice",
    summary:
      "Front-of-house service in a fast-paced environment — teamwork, reliability and daily English with international guests.",
  },
  {
    kind: "Education",
    period: "2021 – 2026",
    role: "Diploma in Computer Science, Systems & Networks",
    org: 'I.T.I.S. "Carlo Zuccante"',
    location: "Mestre",
    summary:
      "Final grade 92/100. Databases, local LLMs with Ollama, TCP/IP & subnetting, Cisco CCNA1.",
  },
];
