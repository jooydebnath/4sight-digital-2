import { motion } from "framer-motion";
import {
  Code2, LayoutDashboard, Brain, ArrowUpRight, Smartphone, Palette, Cloud, Database,
} from "lucide-react";
import { TiltCard } from "./TiltCard";

const services = [
  { icon: Code2, title: "Custom Software", desc: "Bespoke platforms engineered for your operating model and scale." },
  { icon: LayoutDashboard, title: "SaaS Platforms", desc: "Multi-tenant architectures, billing, and dashboards built to ship." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and React Native apps with delightful, accessible UX." },
  { icon: Brain, title: "AI Integration", desc: "LLMs, RAG, agents, and computer vision wired into your stack." },
  { icon: Palette, title: "UI / UX Design", desc: "Research-driven product design and scalable design systems." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, GCP, Azure infra-as-code, CI/CD, and observability." },
  { icon: Database, title: "ERP & CRM", desc: "Tailored back-office systems integrated end-to-end." },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">What we do</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            A full-stack partner for{" "}
            <span className="text-gradient">digital transformation</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From product strategy to launch and scale — one team, one accountable outcome.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="group relative rounded-2xl glass-card p-8 hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-500 cursor-default overflow-hidden h-full">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5" />

                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10 grid place-items-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center justify-between">
                    {s.title}
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
