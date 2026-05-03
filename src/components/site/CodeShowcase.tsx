import { motion } from "framer-motion";
import { Terminal, Cpu, Shield, Globe, Layers, CheckCircle } from "lucide-react";

const codeLines = [
  { text: "// Discovery & Architecture", color: "text-muted-foreground", delay: 0 },
  { text: "const workshop = await 4sight.discover({", color: "text-primary", delay: 0.4 },
  { text: "  stakeholders: ['cto', 'product', 'design'],", color: "text-amber-400", delay: 0.6 },
  { text: "  deliverable: 'technical_spec.md',", color: "text-amber-400", delay: 0.7 },
  { text: "});", color: "text-primary", delay: 0.8 },
  { text: "", color: "", delay: 0.9 },
  { text: "// Design & Prototype", color: "text-muted-foreground", delay: 1.0 },
  { text: "const prototype = await 4sight.design({", color: "text-primary", delay: 1.2 },
  { text: "  system: 'design_system_v2',", color: "text-amber-400", delay: 1.3 },
  { text: "  fidelity: 'interactive',", color: "text-amber-400", delay: 1.4 },
  { text: "  review: 'weekly_sprints',", color: "text-amber-400", delay: 1.5 },
  { text: "});", color: "text-primary", delay: 1.6 },
  { text: "", color: "", delay: 1.7 },
  { text: "// Build & Ship", color: "text-muted-foreground", delay: 1.9 },
  { text: "const product = await 4sight.build({", color: "text-primary", delay: 2.1 },
  { text: "  stack: 'react,node,postgres',", color: "text-amber-400", delay: 2.2 },
  { text: "  infra: 'aws,terraform,k8s',", color: "text-amber-400", delay: 2.3 },
  { text: "  sla: '99.99%',", color: "text-amber-400", delay: 2.4 },
  { text: "});", color: "text-primary", delay: 2.5 },
];

export function CodeShowcase() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">How We Work</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.15] tracking-tight">
              Engineering{" "}
              <span className="text-gradient">excellence</span>
              <br />
              by design.
            </h2>
            <p className="mt-6 text-[15px] text-muted-foreground leading-[1.7]">
              Our process is not a black box. Every sprint is observable, every decision is documented, and every deliverable is measurable.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { icon: Globe, label: "Global Teams", value: "4 time zones" },
                { icon: Shield, label: "Security", value: "SOC 2 · ISO 27001" },
                { icon: Cpu, label: "Performance", value: "99.99% uptime" },
                { icon: Layers, label: "Stack", value: "Modern & proven" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-xl bg-[#0a0a0f]/60 border border-white/[0.04] p-4 hover:bg-[#0a0a0f]/80 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="h-3.5 w-3.5 text-primary" />
                    <div className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
                  </div>
                  <div className="text-sm font-bold text-foreground">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            {/* Glow */}
            <div className="absolute -inset-3 bg-gradient-to-b from-primary/10 via-accent/5 to-primary/5 rounded-3xl blur-2xl opacity-50" />

            <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-[#0d0d12] backdrop-blur-xl shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/20 bg-[#12121a]/80">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="ml-3 text-[11px] text-muted-foreground font-mono flex items-center gap-1.5">
                    <Terminal className="h-3 w-3" />
                    4sight-methodology
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Verified
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[340px]">
                {/* Prompt line */}
                <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-primary">~</span>
                  <span className="opacity-50">4sight init-project</span>
                </div>

                {/* Code lines with typing animation */}
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: line.delay, duration: 0.3 }}
                    className="min-h-[20px]"
                  >
                    <span className={line.color}>{line.text}</span>
                  </motion.div>
                ))}

                {/* Success output */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 3 }}
                  className="mt-4 space-y-1"
                >
                  <div className="text-emerald-400 text-xs">✓ Workshop completed — 12 stakeholders aligned</div>
                  <div className="text-emerald-400 text-xs">✓ Design system approved — 47 components</div>
                  <div className="text-emerald-400 text-xs">✓ Production deployed — 2-week sprint</div>
                  <div className="text-emerald-400 text-xs">✓ Monitoring & observability live</div>
                  <div className="mt-3 text-primary font-semibold">→ Outcome: $2.4M operational savings in Year 1</div>
                  <div className="mt-1">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-primary ml-2">~</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                      className="ml-2 inline-block w-2 h-4 bg-primary align-middle rounded-sm"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 }}
              className="absolute -bottom-4 -right-4 md:right-8 glass-strong rounded-xl px-4 py-3 shadow-elegant flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Client NPS</div>
                <div className="text-xs font-mono text-foreground">72/100 · Top quartile</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
