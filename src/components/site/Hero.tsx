import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboard from "@/assets/dashboard.png";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="glow-orb h-[500px] w-[500px] bg-primary/30 -top-40 -left-40 animate-pulse-glow" />
      <div className="glow-orb h-[600px] w-[600px] bg-accent/30 top-20 -right-40 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Trusted by 120+ teams worldwide</span>
            <Zap className="h-3 w-3 text-primary" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Building digital products that{" "}
            <span className="text-gradient">move businesses forward.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom Software · AI Solutions · Cloud Infrastructure · Web & Mobile Apps —
            engineered by 4sight Digital for ambitious enterprises.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12 px-7 text-base" asChild>
              <a href="#contact">
                Get free consultation <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass border-border h-12 px-7 text-base" asChild>
              <a href="#work">
                <Play className="mr-1 h-4 w-4" /> View our work
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            {["ISO 27001", "SOC 2 Type II", "GDPR Ready", "99.99% Uptime"].map((b) => (
              <span key={b} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" /> {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-16 md:mt-20 max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative animate-float">
            <img
              src={dashboard}
              alt="4sight platform dashboard"
              width={1280}
              height={896}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Floating UI cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-2 md:-left-10 top-1/3 glass-strong rounded-2xl p-4 shadow-elegant hidden sm:block"
          >
            <div className="text-xs text-muted-foreground">Conversion uplift</div>
            <div className="text-2xl font-bold text-gradient">+248%</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -right-2 md:-right-10 bottom-1/4 glass-strong rounded-2xl p-4 shadow-elegant hidden sm:block"
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-primary grid place-items-center text-xs font-bold text-primary-foreground">AI</div>
              <div>
                <div className="text-xs text-muted-foreground">Models deployed</div>
                <div className="text-sm font-semibold">42 in production</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
