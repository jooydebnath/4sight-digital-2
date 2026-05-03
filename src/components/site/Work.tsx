import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { tag: "FinTech · SaaS", title: "Helix Treasury", desc: "Real-time cash visibility for 200+ subsidiaries.", metric: "+38% efficiency", hue: "from-cyan-400/40 to-blue-600/30" },
  { tag: "AI · Retail", title: "Lumen Vision", desc: "Computer vision for shelf analytics across 1,200 stores.", metric: "9.4× ROI", hue: "from-violet-500/40 to-fuchsia-500/20" },
  { tag: "Healthcare · Mobile", title: "Vertex Care", desc: "HIPAA-grade patient experience platform.", metric: "4.9★ App Store", hue: "from-teal-400/40 to-cyan-600/20" },
  { tag: "Logistics · Cloud", title: "Northwind OS", desc: "Multi-region orchestration replacing legacy ERP.", metric: "−62% TCO", hue: "from-indigo-500/40 to-violet-600/20" },
];

export function Work() {
  return (
    <section id="work" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Selected work</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Outcomes, not just <span className="text-gradient">deliverables.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A glimpse of recent platforms we&apos;ve designed, built, and scaled with our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-strong p-8 md:p-10 min-h-[320px] flex flex-col justify-between hover:-translate-y-1 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.hue} opacity-60 group-hover:opacity-90 transition-opacity duration-700`} />
              <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-gradient-primary opacity-30 blur-3xl group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-foreground/70">{p.tag}</div>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold">{p.title}</h3>
                <p className="mt-3 text-foreground/80 max-w-sm">{p.desc}</p>
              </div>
              <div className="relative flex items-center justify-between mt-8">
                <span className="text-sm font-semibold glass rounded-full px-4 py-1.5">{p.metric}</span>
                <span className="h-11 w-11 rounded-full bg-foreground/10 grid place-items-center group-hover:bg-foreground group-hover:text-background transition-all">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
