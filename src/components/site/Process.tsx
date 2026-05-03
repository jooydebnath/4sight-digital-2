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
          <span className="text-xs uppercase tracking-[0.3em] text-primary">How we work</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            A delivery model that <span className="text-gradient">de-risks every release.</span>
          </h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative mx-auto h-20 w-20 rounded-2xl glass-strong grid place-items-center mb-5">
                  <span className="text-xl font-bold text-gradient">{s.n}</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 blur-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
