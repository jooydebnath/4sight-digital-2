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
    quote: "Best agency partnership we've had in a decade. The design quality alone justified the engagement.",
    name: "Priya Anand", role: "Head of Product, Lumen",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Clients</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Loved by teams that don&apos;t settle.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card/40 p-7 flex flex-col gap-5">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-foreground/90">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <div className="h-9 w-9 rounded-full border border-border grid place-items-center text-xs font-semibold">
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
