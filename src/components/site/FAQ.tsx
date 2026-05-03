import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How quickly can we start?", a: "Most engagements kick off within 1–2 weeks. For urgent projects we can mobilize a squad in 72 hours." },
  { q: "Do you sign NDAs and IP transfer?", a: "Yes. We sign mutual NDAs upfront and all IP is transferred on payment of the relevant milestone." },
  { q: "Can you work with our internal team?", a: "Absolutely. ~70% of our engagements are co-delivery models embedded with the client&apos;s engineering org." },
  { q: "Which industries do you specialize in?", a: "FinTech, Healthcare, Logistics, Retail, and SaaS. We have repeatable accelerators in each vertical." },
  { q: "What about ongoing support?", a: "We offer 8/5 and 24/7 SRE retainers with defined SLAs once the platform is in production." },
];

export function FAQ() {
  return (
    <section id="insights" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">FAQ</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">Questions, <span className="text-gradient">answered.</span></h2>
            <p className="mt-4 text-muted-foreground">Don&apos;t see yours? Reach out and we&apos;ll respond within a business day.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 border-0 data-[state=open]:border data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  <span dangerouslySetInnerHTML={{ __html: f.q }} />
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5" >
                  <span dangerouslySetInnerHTML={{ __html: f.a }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
