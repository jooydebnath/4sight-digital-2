import { Star } from "lucide-react";

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
    quote: "Best agency partnership we&apos;ve had in a decade. The design quality alone justified the engagement.",
    name: "Priya Anand", role: "Head of Product, Lumen",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Clients</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Loved by teams that <span className="text-gradient">don&apos;t settle.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure key={t.name} className="glass rounded-2xl p-7 flex flex-col gap-5">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-foreground/90" dangerouslySetInnerHTML={{ __html: t.quote }} />
              <figcaption className="flex items-center gap-3 mt-auto">
                <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-sm font-bold text-primary-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
