import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-border bg-card/40 p-8 md:p-14 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Let&apos;s talk</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Ready to build something remarkable?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Tell us a bit about your project. We reply within one business day with next steps and a free 30-min consultation.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /><span>hello@4sight.digital</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /><span>+44 20 4538 9921</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /><span>London · Lagos · Singapore</span></div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Thanks — we'll be in touch within one business day."); }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input required placeholder="Full name" className="bg-background border-border h-11" />
              <Input required type="email" placeholder="Work email" className="bg-background border-border h-11" />
            </div>
            <Input placeholder="Company" className="bg-background border-border h-11" />
            <Input placeholder="Budget (e.g. $50k–$150k)" className="bg-background border-border h-11" />
            <Textarea required placeholder="Tell us about your project…" rows={5} className="bg-background border-border" />
            <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 h-11">
              Request consultation <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
