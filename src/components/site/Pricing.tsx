import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="pricing" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Engagements</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Transparent partnerships, <span className="text-gradient">predictable outcomes.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-8 flex flex-col ${
                t.featured
                  ? "glass-strong shadow-glow border-primary/40"
                  : "glass"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}
              <h3 className="text-2xl font-semibold">{t.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold font-display">{t.price}</span>
                <span className="text-muted-foreground">{t.period}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 ${t.featured ? "bg-gradient-primary text-primary-foreground shadow-glow" : ""}`}
                variant={t.featured ? "default" : "outline"}
                asChild
              >
                <a href="#contact">{t.featured ? "Start with Scale" : "Talk to sales"}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
