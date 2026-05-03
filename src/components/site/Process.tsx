import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discover", d: "Workshops to align on outcomes, users, and constraints." },
  { n: "02", t: "Design", d: "Prototypes and design system that de-risk the build." },
  { n: "03", t: "Build", d: "Two-week sprints with production releases from day 14." },
  { n: "04", t: "Scale", d: "Observability, optimization, and a 24/7 SRE on call." },
];

export function Process() {
  return (
    <section id="process" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How we work</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            A delivery model that de-risks every release.
          </h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-border" />
          <div className="grid md:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center relative"
              >
                <div className="relative mx-auto h-16 w-16 rounded-full bg-background border border-border grid place-items-center mb-5">
                  <span className="text-sm font-semibold text-primary">{s.n}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
