import { motion } from "framer-motion";
import {
  Activity, Users, Zap, CheckCircle2, Loader2,
  Timer, BarChart3, Box, Shield, Globe, Database,
  Cpu, Code2
} from "lucide-react";

function AnimatedBar({ delay, height }: { delay: number; height: string }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-7 bg-gradient-to-t from-primary/40 to-primary/80 rounded-t-lg origin-bottom relative group"
      style={{ height }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export function HeroDashboard() {
  const bars = ["30%", "55%", "40%", "70%", "45%", "65%", "85%", "60%", "75%", "50%", "68%", "55%"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-20 md:mt-24 max-w-5xl mx-auto select-none"
    >
      {/* Outer glow frame */}
      <div className="absolute -inset-2 bg-gradient-to-b from-primary/15 via-accent/8 to-primary/5 rounded-[2rem] blur-xl opacity-60" />

      {/* Dashboard container */}
      <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-[#0c0c14]/90 backdrop-blur-xl shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="text-[10px] tracking-[0.2em] text-primary font-mono uppercase bg-primary/8 px-3 py-1 rounded-full border border-primary/15">
            SYS.CORE_V4
          </div>
        </div>

        {/* Main dashboard grid */}
        <div className="p-5 grid grid-cols-12 gap-4">
          {/* Stats cards row */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* System Load */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="rounded-xl bg-[#12121a] border border-border/30 p-5 group hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-9 w-9 rounded-lg bg-primary/8 border border-primary/10 grid place-items-center">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/8 px-2 py-0.5 rounded-full border border-emerald-400/15">
                  +24%
                </span>
              </div>
              <div className="text-xs text-muted-foreground mb-1">System Load</div>
              <div className="text-2xl font-bold text-foreground tracking-tight">42.5ms</div>
            </motion.div>

            {/* Active Users */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="rounded-xl bg-[#12121a] border border-border/30 p-5 group hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-9 w-9 rounded-lg bg-violet-500/8 border border-violet-500/10 grid place-items-center">
                  <Users className="h-4 w-4 text-violet-400" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/8 px-2 py-0.5 rounded-full border border-emerald-400/15">
                  +18%
                </span>
              </div>
              <div className="text-xs text-muted-foreground mb-1">Active Users</div>
              <div className="text-2xl font-bold text-foreground tracking-tight">124.5k</div>
            </motion.div>

            {/* AI Efficiency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="rounded-xl bg-gradient-to-br from-primary/80 to-[#0ea5e9]/80 p-5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="h-9 w-9 rounded-lg bg-white/15 border border-white/20 grid place-items-center backdrop-blur-sm">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="text-xs text-white/70 mb-1 relative z-10">AI Efficiency</div>
              <div className="text-2xl font-bold text-white tracking-tight relative z-10">99.8%</div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </div>

          {/* Chart + Status row */}
          <div className="col-span-12 md:col-span-8 rounded-xl bg-[#12121a] border border-border/30 p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-semibold text-foreground">Real-time Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-muted-foreground bg-white/[0.03] px-2.5 py-1 rounded-md border border-border/30">1H</span>
                <span className="text-[10px] font-mono text-primary bg-primary/8 px-2.5 py-1 rounded-md border border-primary/15">24H</span>
              </div>
            </div>
            <div className="flex items-end justify-between gap-1.5 h-32">
              {bars.map((h, i) => (
                <AnimatedBar key={i} delay={1.1 + i * 0.05} height={h} />
              ))}
            </div>
          </div>

          {/* Deployment Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="col-span-12 md:col-span-4 rounded-xl bg-[#12121a] border border-border/30 p-5"
          >
            <div className="text-sm font-semibold text-foreground mb-5">Deployment Status</div>
            <div className="space-y-4">
              {[
                { icon: Box, label: "Build Pipeline", time: "2m ago", status: "ok", color: "text-emerald-400" },
                { icon: Shield, label: "Security Scan", time: "1m ago", status: "ok", color: "text-emerald-400" },
                { icon: Database, label: "Container Push", time: "45s ago", status: "ok", color: "text-emerald-400" },
                { icon: Globe, label: "Global Sync", time: "In progress...", status: "spin", color: "text-primary" },
                { icon: Timer, label: "Cache Warmup", time: "Waiting", status: "wait", color: "text-muted-foreground" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-8 w-8 rounded-lg bg-white/[0.03] border border-border/30 grid place-items-center shrink-0">
                    {item.status === "spin" ? (
                      <Loader2 className={`h-3.5 w-3.5 ${item.color} animate-spin`} />
                    ) : item.status === "ok" ? (
                      <CheckCircle2 className={`h-3.5 w-3.5 ${item.color}`} />
                    ) : (
                      <item.icon className={`h-3.5 w-3.5 ${item.color}`} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-foreground/90 truncate">{item.label}</div>
                    <div className="text-[10px] text-muted-foreground">{item.time}</div>
                  </div>
                  {item.status === "ok" && (
                    <span className="text-[10px] font-mono text-emerald-400">OK</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating bottom cards */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6 px-2">
        <motion.div
          initial={{ opacity: 0, y: 20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 1.6 }}
          className="flex items-center gap-4 rounded-xl glass-card p-4 hover:bg-white/[0.04] hover:border-primary/15 transition-all group"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/15 to-violet-500/5 border border-violet-500/10 grid place-items-center group-hover:shadow-lg group-hover:shadow-violet-500/10 transition-shadow">
            <Cpu className="h-4 w-4 text-violet-400" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">AI Supercharged</div>
            <div className="text-xs text-muted-foreground">Intelligent automation</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 1.7 }}
          className="flex items-center gap-4 rounded-xl glass-card p-4 hover:bg-white/[0.04] hover:border-primary/15 transition-all group flex-1"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 grid place-items-center group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow">
            <Code2 className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Custom Engineering</div>
            <div className="text-xs text-muted-foreground">Scale without limits</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroDashboard;
