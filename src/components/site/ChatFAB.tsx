import { MessageCircle } from "lucide-react";

export function ChatFAB() {
  return (
    <a
      href="#contact"
      aria-label="Chat with us"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
