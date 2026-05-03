import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboard from "@/assets/dashboard.png";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_60%)]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 mb-8 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Trusted by 120+ teams worldwide
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Building digital products that move businesses forward.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Custom software, AI, cloud infrastructure, and apps —
            engineered by 4sight Digital for ambitious enterprises.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 h-11 px-6" asChild>
              <a href="#contact">
                Get free consultation <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border h-11 px-6" asChild>
              <a href="#work">
                <Play className="mr-1 h-4 w-4" /> View our work
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-muted-foreground">
            {["ISO 27001", "SOC 2 Type II", "GDPR Ready", "99.99% Uptime"].map((b) => (
              <span key={b} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" /> {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-16 md:mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
            <img
              src={dashboard}
              alt="4sight platform dashboard"
              width={1280}
              height={896}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
