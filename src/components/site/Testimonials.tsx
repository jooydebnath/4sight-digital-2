import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TiltCard } from "./TiltCard";

const items = [
  {
    quote: "4sight delivered our AI platform in 14 weeks. It became the cornerstone of a $40M product line.",
    name: "Sarah Chen", role: "CTO, Helix Financial",
  },
  {
    quote: "The team operates as an extension of ours. Senior, sharp, and brutally honest about scope.",
    name: "Marcus Webb", role: "VP Engineering, Northwind",
  },
  {
    quote: "Best agency partnership we've had in a decade. The design quality alone justified the engagement.",
    name: "Priya Anand", role: "Head of Product, Lumen",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">Clients</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Loved by teams that{" "}
            <span className="text-gradient">don&apos;t settle.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <TiltCard className="group relative rounded-2xl glass-card p-8 flex flex-col gap-5 hover:bg-white/[0.04] hover:border-primary/15 transition-all duration-500 overflow-hidden h-full">
                <figure className="flex flex-col gap-5 h-full">
              {/* Decorative quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-primary text-primary drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]" />
                ))}
              </div>

              <blockquote className="text-base leading-relaxed text-foreground/90 mt-2">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 mt-auto pt-5 border-t border-border/50">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/10 grid place-items-center text-xs font-bold text-gradient">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                </figcaption>
              </figure>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
