import { Sparkles, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2 mb-5">
              <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-semibold">4sight<span className="text-primary">.</span></span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm">
              4sight Digital Limited — engineering the digital backbone of ambitious companies.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-lg glass grid place-items-center hover:bg-gradient-primary hover:text-primary-foreground transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#work" className="hover:text-foreground">Work</a></li>
              <li><a href="#process" className="hover:text-foreground">Process</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#insights" className="hover:text-foreground">Insights</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50 text-xs text-muted-foreground">
          <span>© 2026 4sight Digital Limited. All rights reserved.</span>
          <span>Crafted with precision in London.</span>
        </div>
      </div>
    </footer>
  );
}
