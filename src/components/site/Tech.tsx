const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go", "Rust",
  "PostgreSQL", "Kubernetes", "AWS", "GCP", "Azure", "Terraform",
  "OpenAI", "LangChain", "PyTorch", "Snowflake", "Kafka", "Stripe", "Figma",
];

export function Tech() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Technologies</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Best-in-class tools, mastered by senior engineers.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {stack.map((t) => (
            <span
              key={t}
              className="glass rounded-full px-5 py-2.5 text-sm font-medium hover:border-primary/50 hover:text-primary transition-all cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
