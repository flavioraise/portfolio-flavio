// Portfolio content — edit your personal data here.

export const profile = {
  name: "Flavio Raise",
  role: "Junior Software Developer · Systems & Networks",
  location: "Mestre, Italy",
  email: "flavio.raise07@gmail.com",
  available: true,
  intro:
    "Recent IT graduate from Venice. I build web applications and enjoy working across software, systems and networks — currently looking for my first role in tech.",
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
  { label: "GitHub", href: "https://github.com/Fl4ffo" },
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
    title: "Personal Portfolio",
    description:
      "This site — a single-page portfolio built with Next.js and Tailwind CSS, containerized with Docker for VPS deployment.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Docker"],
    repo: "https://github.com/simonesiega/portfolio-flavio",
  },
  {
    title: "AI Companion",
    description:
      "A conversational AI companion powered by local LLMs running with Ollama. Add a repo link and details here.",
    tech: ["Python", "Ollama", "LLMs"],
    repo: "#",
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
