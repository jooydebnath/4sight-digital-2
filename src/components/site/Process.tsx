import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discover", d: "Workshops to align on outcomes, users, and constraints." },
  { n: "02", t: "Design", d: "Prototypes and design system that de-risk the build." },
  { n: "03", t: "Build", d: "Two-week sprints with production releases from day 14." },
  { n: "04", t: "Scale", d: "Observability, optimization, and a 24/7 SRE on call." },
];

export function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">How we work</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            A delivery model that{" "}
            <span className="text-gradient">de-risks</span> every release.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated connector line */}
          <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary origin-left"
              style={{ opacity: 0.4 }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center relative group"
              >
                <div className="relative mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/15 grid place-items-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-500">
                  <span className="text-sm font-bold text-gradient">{s.n}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
