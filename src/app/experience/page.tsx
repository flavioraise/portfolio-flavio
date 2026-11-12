import Link from "next/link";
import type { Metadata } from "next";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Experience — Flavio Raise",
  description:
    "Work and education history of Flavio Raise — IT technician working on systems, networks and security.",
};

export default function ExperiencePage() {
  return (
    <>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-ink"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">
            ←
          </span>
          flavio.raise
        </Link>
      </header>

      <main className="flex-1">
        <Timeline />
      </main>
    </>
  );
}
