import { Github, Linkedin, Twitter, Zap } from "lucide-react";

export function Footer() {
  const socials = [
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Github, label: "GitHub" },
  ];

  const links = {
    Company: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "Pricing", href: "#pricing" },
    ],
    Resources: [
      { label: "FAQ", href: "#insights" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border/50 pt-20 pb-10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2.5 mb-6 group">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center shadow-lg shadow-primary/15 group-hover:shadow-primary/30 transition-shadow">
                <Zap className="h-4 w-4 text-background" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight">
                4sight<span className="text-gradient">.</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              4sight Digital Limited — engineering the digital backbone of ambitious companies.
            </p>
            <div className="flex gap-3 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="h-10 w-10 rounded-xl glass grid place-items-center hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 hover:border-primary/20 transition-all duration-300 group"
                >
                  <s.icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-5 text-foreground/80">{title}</h4>
              <ul className="space-y-3 text-sm">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors relative group inline-block"
                    >
                      {item.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/30 text-xs text-muted-foreground">
          <span>© 2026 4sight Digital Limited. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Crafted with precision in{" "}
            <span className="text-gradient font-semibold">London</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
