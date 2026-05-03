import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass-strong p-8 md:p-14 grid lg:grid-cols-2 gap-14 relative overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">Let&apos;s talk</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Ready to build something{" "}
              <span className="text-gradient">remarkable?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Tell us a bit about your project. We reply within one business day with next steps and a free 30-min consultation.
            </p>

            <div className="mt-12 space-y-5">
              {[
                { icon: Mail, text: "hello@4sight.digital" },
                { icon: Phone, text: "+44 20 4538 9921" },
                { icon: MapPin, text: "London · Lagos · Singapore" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10 grid place-items-center group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Thanks — we'll be in touch within one business day."); }}
            className="relative z-10 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input required placeholder="Full name" className="bg-background/50 border-border/60 h-12 rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-colors" />
              <Input required type="email" placeholder="Work email" className="bg-background/50 border-border/60 h-12 rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-colors" />
            </div>
            <Input placeholder="Company" className="bg-background/50 border-border/60 h-12 rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-colors" />
            <Input placeholder="Budget (e.g. $50k–$150k)" className="bg-background/50 border-border/60 h-12 rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-colors" />
            <Textarea required placeholder="Tell us about your project…" rows={5} className="bg-background/50 border-border/60 rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-colors resize-none" />
            <Button
              size="lg"
              className="w-full h-12 bg-gradient-to-r from-primary to-accent text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all group text-base"
            >
              <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              Request consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
