import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Logos } from "@/components/site/Logos";
import { Services } from "@/components/site/Services";
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
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Logos />
      <Services />
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
