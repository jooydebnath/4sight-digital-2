import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="glow-orb h-[500px] w-[500px] bg-primary/30 -top-20 left-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-6 relative">
        <div className="glass-strong rounded-3xl p-8 md:p-14 grid lg:grid-cols-2 gap-12 shadow-elegant">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Let&apos;s talk</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Ready to build something <span className="text-gradient">remarkable?</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Tell us a bit about your project. We reply within one business day with next steps and a free 30-min consultation.
            </p>
            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> hello@4sight.digital</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +44 20 4538 9921</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> London · Lagos · Singapore</div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Thanks — we&apos;ll be in touch within one business day."); }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input required placeholder="Full name" className="glass border-border h-12" />
              <Input required type="email" placeholder="Work email" className="glass border-border h-12" />
            </div>
            <Input placeholder="Company" className="glass border-border h-12" />
            <Input placeholder="Budget (e.g. $50k–$150k)" className="glass border-border h-12" />
            <Textarea required placeholder="Tell us about your project…" rows={5} className="glass border-border" />
            <Button size="lg" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12">
              Request consultation <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
