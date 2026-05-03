import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-foreground grid place-items-center">
              <span className="text-background font-display text-sm font-bold">4</span>
            </div>
            <span className="font-display text-base font-semibold tracking-tight">
              4sight<span className="text-primary">.</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="#contact">Sign in</a>
            </Button>
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="#contact">Book a call</a>
            </Button>
          </div>
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden mb-3 border border-border rounded-xl bg-card p-5 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1.5 text-foreground/90">
                {l.label}
              </a>
            ))}
            <Button className="bg-foreground text-background mt-2" asChild>
              <a href="#contact">Book a call</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
