import { motion } from "framer-motion";

const logos = ["NORTHWIND", "ACME CORP", "QUANTUM", "HELIX", "VERTEX", "OBSIDIAN", "LUMEN", "STRATOS", "MERIDIAN", "APEX"];

export function Logos() {
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 relative overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium"
        >
          Powering the next generation of software
        </motion.p>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {allLogos.map((l, i) => (
            <span
              key={`${l}-${i}`}
              className="font-display text-lg md:text-xl tracking-[0.2em] text-muted-foreground/40 hover:text-foreground/70 transition-colors px-12 shrink-0 whitespace-nowrap"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
