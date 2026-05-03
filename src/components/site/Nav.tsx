import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#insights", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ${
        scrolled
          ? "glass-strong rounded-2xl shadow-elegant"
          : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: "var(--transition-smooth)" }}
    >
      <div className="px-5 py-3">
        <nav className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
              <Zap className="h-4 w-4 text-background" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              4sight<span className="text-gradient">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/[0.03] group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-primary to-accent group-hover:w-[60%] transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="#contact">Sign in</a>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-accent text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              asChild
            >
              <a href="#contact">Book a call</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-white/[0.03] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-3 pt-3 border-t border-border/50 flex flex-col gap-1 animate-fade-up">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-foreground/80 hover:text-foreground rounded-lg hover:bg-white/[0.03] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Button
              className="mt-2 bg-gradient-to-r from-primary to-accent text-background font-semibold"
              asChild
            >
              <a href="#contact" onClick={() => setOpen(false)}>Book a call</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
