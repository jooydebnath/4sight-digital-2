import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Logos } from "@/components/site/Logos";
import { Services } from "@/components/site/Services";
import { CodeShowcase } from "@/components/site/CodeShowcase";
import { Stats } from "@/components/site/Stats";
import { Work } from "@/components/site/Work";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Tech } from "@/components/site/Tech";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ChatFAB } from "@/components/site/ChatFAB";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4sight Digital — Custom Software, AI & Cloud for Ambitious Teams" },
      { name: "description", content: "4sight Digital Limited builds custom software, AI platforms, mobile apps, and cloud infrastructure that move businesses forward." },
      { property: "og:title", content: "4sight Digital — Building Digital Products That Move Businesses Forward" },
      { property: "og:description", content: "Custom Software · AI Solutions · Cloud Infrastructure · Web & Mobile Apps." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased relative">
      {/* Subtle grain overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <CursorGlow />
      <Nav />
      <Hero />
      <Logos />
      <Services />
      <CodeShowcase />
      <Stats />
      <Work />
      <WhyUs />
      <Process />
      <Tech />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <ChatFAB />
      <Toaster />
    </main>
  );
}
