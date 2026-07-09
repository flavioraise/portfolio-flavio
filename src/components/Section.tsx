import Reveal from "@/components/Reveal";

type SectionProps = {
  id: string;
  title: string;
  index?: string;
  meta?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  index,
  meta,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 flex items-end justify-between gap-4 border-b border-line pb-5">
            <div className="flex items-baseline gap-4">
              {index && (
                <span className="font-mono text-sm text-accent">{index}</span>
              )}
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h2>
            </div>
            {meta && (
              <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
                {meta}
              </span>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
