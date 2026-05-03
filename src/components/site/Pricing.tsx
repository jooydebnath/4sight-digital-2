import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "./TiltCard";

const tiers = [
  {
    name: "Launch",
    price: "$12k",
    period: "/ month",
    desc: "MVP and early-stage products that need to ship.",
    features: ["1 senior squad (2 eng + designer)", "2-week sprints", "Cloud infra setup", "Weekly demos"],
  },
  {
    name: "Scale",
    price: "$28k",
    period: "/ month",
    desc: "Product teams scaling to thousands of users.",
    features: ["Cross-functional squad of 5", "Dedicated TPM", "DevOps + observability", "AI integration ready", "24/7 support tier"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Mission-critical platforms and digital transformation.",
    features: ["Multiple parallel squads", "On-site discovery & strategy", "Compliance & audit", "Dedicated SRE", "Custom SLAs"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">Engagements</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Transparent partnerships,{" "}
            <span className="text-gradient">predictable</span> outcomes.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <TiltCard
                tiltAmount={6}
                className={`relative rounded-2xl p-8 flex flex-col group transition-all duration-500 h-full ${
                  t.featured
                    ? "gradient-border bg-gradient-to-b from-primary/[0.03] to-accent/[0.02] hover:from-primary/[0.06] hover:to-accent/[0.04]"
                    : "glass-card hover:bg-white/[0.04] hover:border-primary/15"
                }`}
              >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-background text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/20 flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" />
                  Most popular
                </div>
              )}

              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="text-sm text-muted-foreground mt-3 min-h-[40px] leading-relaxed">{t.desc}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className={`text-5xl font-bold tracking-tight ${t.featured ? "text-gradient" : ""}`}>
                  {t.price}
                </span>
                <span className="text-muted-foreground text-sm">{t.period}</span>
              </div>

              <ul className="mt-8 space-y-3.5 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <div className={`h-5 w-5 rounded-md grid place-items-center shrink-0 mt-0.5 ${t.featured ? "bg-primary/10" : "bg-white/[0.03]"}`}>
                      <Check className={`h-3.5 w-3.5 ${t.featured ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 h-11 text-base font-semibold transition-all duration-500 z-10 relative ${
                  t.featured
                    ? "bg-gradient-to-r from-primary to-accent text-background hover:opacity-90 shadow-lg shadow-primary/20 hover:shadow-primary/40"
                    : "border border-border/60 hover:border-primary/40 hover:bg-white/[0.03]"
                }`}
                variant={t.featured ? "default" : "outline"}
                asChild
              >
                <a href="#contact">{t.featured ? "Start with Scale" : "Talk to sales"}</a>
              </Button>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
