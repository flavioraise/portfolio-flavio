import Link from "next/link";
import { profile, socials } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-auto scroll-mt-24 overflow-hidden"
    >
      <div className="glow-radial pointer-events-none absolute inset-x-0 top-0 h-full" />

      {/* oversized wordmark as a background watermark, flush to the page's right edge.
          Offset is a % of the footer (not vh) so it stays put on very tall phones. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex -translate-y-[38%] select-none flex-col items-end justify-center sm:translate-y-0"
      >
        <p className="text-right font-display text-[19vw] font-bold uppercase leading-[0.82] tracking-tighter text-ink/[0.08]">
          Flavio
          <br />
          Raise
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-48 sm:pt-56">
        <Reveal className="relative z-10 max-w-3xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
            establish connection
          </p>
          <h2 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
            Let&apos;s build
            <br />
            something.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            I&apos;m looking for my first role in tech and open to
            collaborations. Email is the quickest way to reach me.
          </p>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-sm text-bg shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span>→</span>
            {profile.email}
          </a>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <Link
              href="/experience"
              className="text-muted transition-colors hover:text-accent"
            >
              experience →
            </Link>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                {s.label.toLowerCase()} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
