import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { TiltCard } from "./TiltCard";

const projects = [
  { tag: "FinTech · SaaS", title: "Helix Treasury", desc: "Real-time cash visibility for 200+ subsidiaries.", metric: "+38% efficiency" },
  { tag: "AI · Retail", title: "Lumen Vision", desc: "Computer vision for shelf analytics across 1,200 stores.", metric: "9.4× ROI" },
  { tag: "Healthcare · Mobile", title: "Vertex Care", desc: "HIPAA-grade patient experience platform.", metric: "4.9★ App Store" },
  { tag: "Logistics · Cloud", title: "Northwind OS", desc: "Multi-region orchestration replacing legacy ERP.", metric: "−62% TCO" },
];

export function Work() {
  return (
    <section id="work" className="py-32 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">Selected work</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Outcomes, not just{" "}
              <span className="text-gradient">deliverables.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md text-lg"
          >
            A glimpse of recent platforms we&apos;ve designed, built, and scaled with our clients.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <TiltCard className="group relative rounded-2xl glass-card p-8 md:p-10 min-h-[280px] flex flex-col justify-between hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-500 overflow-hidden h-full">
                <a href="#contact" className="absolute inset-0 z-20" aria-label={`View ${p.title} project`} />

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {p.tag}
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-gradient transition-all duration-500">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground max-w-sm leading-relaxed">{p.desc}</p>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-8">
                  <span className="text-sm font-semibold glass px-4 py-1.5 rounded-full text-primary">
                    {p.metric}
                  </span>
                  <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10 grid place-items-center group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-background transition-all duration-500 shadow-lg shadow-primary/0 group-hover:shadow-primary/20">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
