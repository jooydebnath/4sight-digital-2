import { motion } from "framer-motion";
import {
  Code2, LayoutDashboard, Smartphone, Brain, Palette, Cloud, Database, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software", desc: "Bespoke platforms engineered for your operating model and scale." },
  { icon: LayoutDashboard, title: "SaaS Platforms", desc: "Multi-tenant architectures, billing, and dashboards built to ship." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and React Native apps with delightful, accessible UX." },
  { icon: Brain, title: "AI Integration", desc: "LLMs, RAG, agents, and computer vision wired into your stack." },
  { icon: Palette, title: "UI / UX Design", desc: "Research-driven product design and design systems." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, GCP, Azure infra-as-code, CI/CD, and observability." },
  { icon: Database, title: "ERP & CRM", desc: "Tailored back-office systems integrated end-to-end." },
];

export function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="glow-orb h-[400px] w-[400px] bg-accent/20 top-1/3 -left-40" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">What we do</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            A full-stack partner for <span className="text-gradient">digital transformation</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From product strategy to launch and scale — one team, one accountable outcome.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass rounded-2xl p-7 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl glass-strong grid place-items-center mb-5 group-hover:bg-gradient-primary transition-all duration-500">
                  <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                  {s.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
