import { MessageCircle } from "lucide-react";

export function ChatFAB() {
  return (
    <a
      href="#contact"
      aria-label="Chat with us"
      className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-foreground text-background grid place-items-center shadow-elegant hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
