import { profile, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="mt-auto scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-route">
            establish connection
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            I&apos;m looking for my first role in tech and open to
            collaborations. Email is the quickest way to reach me.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 font-mono text-sm text-surface transition-transform hover:-translate-y-0.5"
          >
            <span>→</span>
            {profile.email}
          </a>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-route"
              >
                {s.label.toLowerCase()} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Mestre · Venice, IT</p>
        </div>
      </div>
    </footer>
  );
}
