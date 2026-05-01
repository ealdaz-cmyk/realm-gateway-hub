type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="container-prose py-20 md:py-28">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mt-4 text-4xl md:text-6xl leading-[1.05] max-w-3xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}
