const logos = ["NORTHWIND", "ACME CORP", "QUANTUM", "HELIX", "VERTEX", "OBSIDIAN", "LUMEN"];

export function Logos() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {logos.map((l) => (
            <span
              key={l}
              className="font-display text-lg md:text-xl tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
