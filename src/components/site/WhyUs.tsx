import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Users, Gauge } from "lucide-react";
import team from "@/assets/team.jpg";

const points = [
  { icon: Rocket, title: "Ship in weeks, not quarters", desc: "Senior squads delivering production code from week one." },
  { icon: ShieldCheck, title: "Enterprise-grade security", desc: "SOC 2, ISO 27001 and GDPR practices baked in by default." },
  { icon: Users, title: "Senior-only teams", desc: "No juniors hidden in the mix. Every engineer 6+ years deep." },
  { icon: Gauge, title: "Outcome-driven", desc: "We measure success in business KPIs, not story points." },
];

export function WhyUs() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with NPS card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border/30 bg-card">
              <img
                src={team}
                alt="4sight team"
                loading="lazy"
                width={1280}
                height={896}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* NPS floating card — bottom-left of image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute bottom-6 left-6 glass-strong rounded-2xl px-6 py-5 shadow-elegant backdrop-blur-xl border border-border/40"
            >
              <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">Avg. engagement NPS</div>
              <div className="text-5xl font-bold tracking-tight text-[#38bdf8] mt-1">72</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">Why 4sight</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.15] tracking-tight">
              The technical edge of a{" "}
              <span className="text-[#38bdf8]">startup</span>, the rigor of an{" "}
              <span className="text-[#f59e0b]">enterprise.</span>
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group flex gap-4"
                >
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10 grid place-items-center group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow">
                    <p.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground/90">{p.title}</h3>
                    <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
