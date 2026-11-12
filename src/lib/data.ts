// Portfolio content — edit your personal data here.

export const profile = {
  name: "Flavio Raise",
  role: "IT Technician · Systems & Networks",
  location: "Mestre, Italy",
  email: "flavio.raise07@gmail.com",
  available: true,
  intro:
    "IT technician at Eyelink, a system integrator in Venice. I work on networks, security, virtualization and backup, keeping business infrastructure secure and running.",
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
    period: "Aug 2026 – Present",
    role: "IT Technician — Systems & Networks",
    org: "Eyelink S.r.l.",
    location: "Venice",
    summary:
      "System integrator focused on security, networking and business continuity. Working on network infrastructure, IT security, server virtualization and backup solutions with vendors like Microsoft, HPE Aruba, Clavister, VMware and Veeam.",
  },
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
    period: "Nov 2024 – Jul 2026",
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
