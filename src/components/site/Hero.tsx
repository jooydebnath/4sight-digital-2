import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroDashboard } from "./HeroDashboard";
import { ParticleNetwork } from "./ParticleNetwork";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      {/* Interactive particle network */}
      <div className="absolute inset-0 z-[5] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]">
        <ParticleNetwork />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 mb-10 text-xs text-muted-foreground glow-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Trusted by 120+ enterprise teams worldwide
            <Sparkles className="h-3 w-3 text-accent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient">Building</span> digital
            <br />
            products that{" "}
            <span className="relative inline-block">
              <span className="text-gradient">move</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full origin-left"
              />
            </span>
            <br />
            businesses forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Custom software, AI, cloud infrastructure, and apps —
            engineered by 4sight Digital for ambitious enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="h-12 px-8 bg-gradient-to-r from-primary to-accent text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group text-base"
              asChild
            >
              <a href="#contact">
                Get free consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 border-border/60 hover:border-primary/40 hover:bg-white/[0.03] transition-all text-base"
              asChild
            >
              <a href="#work">View our work</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            {["ISO 27001", "SOC 2 Type II", "GDPR Ready", "99.99% Uptime"].map((b) => (
              <span key={b} className="flex items-center gap-2.5 glass px-3 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                {b}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Live interactive dashboard */}
        <HeroDashboard />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase font-mono">Scroll ↓</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
