import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How quickly can we start?", a: "Most engagements kick off within 1–2 weeks. For urgent projects we can mobilize a squad in 72 hours." },
  { q: "Do you sign NDAs and IP transfer?", a: "Yes. We sign mutual NDAs upfront and all IP is transferred on payment of the relevant milestone." },
  { q: "Can you work with our internal team?", a: "Absolutely. ~70% of our engagements are co-delivery models embedded with the client's engineering org." },
  { q: "Which industries do you specialize in?", a: "FinTech, Healthcare, Logistics, Retail, and SaaS. We have repeatable accelerators in each vertical." },
  { q: "What about ongoing support?", a: "We offer 8/5 and 24/7 SRE retainers with defined SLAs once the platform is in production." },
];

export function FAQ() {
  return (
    <section id="insights" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">FAQ</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Questions,{" "}
              <span className="text-gradient">answered.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Don&apos;t see yours? Reach out and we&apos;ll respond within a business day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="divide-y divide-border/50">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-0"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-6 hover:text-primary transition-colors group">
                    <span className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground font-mono group-hover:text-primary transition-colors">0{i + 1}</span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-9 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
