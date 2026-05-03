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
    <section id="services" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What we do</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            A full-stack partner for digital transformation
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From product strategy to launch and scale — one team, one accountable outcome.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-border rounded-2xl overflow-hidden bg-card/30">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group p-8 border-b border-r border-border last:border-r-0 hover:bg-card/60 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg border border-border grid place-items-center mb-5">
                <s.icon className="h-4.5 w-4.5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                {s.title}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
