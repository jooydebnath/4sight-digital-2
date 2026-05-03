import { ShieldCheck, Rocket, Users, Gauge } from "lucide-react";
import team from "@/assets/team.jpg";

const points = [
  { icon: Rocket, title: "Ship in weeks, not quarters", desc: "Senior squads delivering production code from week one." },
  { icon: ShieldCheck, title: "Enterprise-grade security", desc: "SOC 2, ISO 27001 and GDPR practices baked in by default." },
  { icon: Users, title: "Senior-only teams", desc: "No juniors hidden in the mix. Every engineer 6+ years deep." },
  { icon: Gauge, title: "Outcome-driven", desc: "We measure success in business KPIs, not story points." },
];

export function WhyUs() {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden glass-strong">
              <img src={team} alt="4sight team" loading="lazy" width={1280} height={896} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-5 py-4 shadow-elegant">
              <div className="text-xs text-muted-foreground">Avg. engagement NPS</div>
              <div className="text-3xl font-bold text-gradient">72</div>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Why 4sight</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              The technical edge of a startup, the rigor of an{" "}
              <span className="text-gradient">enterprise.</span>
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                    <p.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
