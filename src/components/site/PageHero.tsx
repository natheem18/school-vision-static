export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-accent/25 blur-3xl"
      />
      <div className="container-page relative py-20 sm:py-24">
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold tracking-[0.14em] uppercase text-accent-foreground">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
