type SectionProps = {
  id: string;
  title: string;
  meta?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, meta, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4 border-b border-line pb-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {meta && (
            <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
              {meta}
            </span>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
