const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go", "Rust",
  "PostgreSQL", "Kubernetes", "AWS", "GCP", "Azure", "Terraform",
  "OpenAI", "LangChain", "PyTorch", "Snowflake", "Kafka", "Stripe", "Figma",
];

export function Tech() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Technologies</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Best-in-class tools, mastered by senior engineers.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {stack.map((t) => (
            <span
              key={t}
              className="border border-border rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
