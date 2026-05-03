import { motion } from "framer-motion";

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go", "Rust",
  "PostgreSQL", "Kubernetes", "Docker", "AWS", "GCP", "Azure", "Terraform",
  "GraphQL", "tRPC", "Redis", "Kafka", "Elasticsearch", "Prometheus",
  "OpenAI", "LangChain", "PyTorch", "FastAPI", "Prisma", "Stripe",
];

export function Tech() {
  const row1 = [...stack, ...stack];
  const row2 = [...stack.slice().reverse(), ...stack.slice().reverse()];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">Technologies</span>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Best-in-class tools,{" "}
            <span className="text-gradient">mastered</span> by senior engineers.
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4 relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {row1.map((t, i) => (
            <span
              key={`r1-${i}`}
              className="shrink-0 mx-2 glass px-5 py-2.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex animate-marquee-reverse">
          {row2.map((t, i) => (
            <span
              key={`r2-${i}`}
              className="shrink-0 mx-2 glass px-5 py-2.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-300 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
