import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { tag: "FinTech · SaaS", title: "Helix Treasury", desc: "Real-time cash visibility for 200+ subsidiaries.", metric: "+38% efficiency" },
  { tag: "AI · Retail", title: "Lumen Vision", desc: "Computer vision for shelf analytics across 1,200 stores.", metric: "9.4× ROI" },
  { tag: "Healthcare · Mobile", title: "Vertex Care", desc: "HIPAA-grade patient experience platform.", metric: "4.9★ App Store" },
  { tag: "Logistics · Cloud", title: "Northwind OS", desc: "Multi-region orchestration replacing legacy ERP.", metric: "−62% TCO" },
];

export function Work() {
  return (
    <section id="work" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Outcomes, not just deliverables.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A glimpse of recent platforms we&apos;ve designed, built, and scaled with our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card/40 p-8 md:p-10 min-h-[260px] flex flex-col justify-between hover:bg-card/70 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</div>
                <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-muted-foreground max-w-sm">{p.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-sm font-medium border border-border rounded-full px-3 py-1">{p.metric}</span>
                <span className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:bg-foreground group-hover:text-background transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
