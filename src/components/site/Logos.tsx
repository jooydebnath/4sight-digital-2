const logos = ["NORTHWIND", "ACME CORP", "QUANTUM", "HELIX", "VERTEX", "OBSIDIAN", "LUMEN"];

export function Logos() {
  return (
    <section className="py-14 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 opacity-60">
          {logos.map((l) => (
            <span
              key={l}
              className="font-display text-sm md:text-base tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
