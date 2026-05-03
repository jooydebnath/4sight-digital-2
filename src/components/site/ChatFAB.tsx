import { MessageCircle } from "lucide-react";

export function ChatFAB() {
  return (
    <a
      href="#contact"
      aria-label="Chat with us"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-accent text-background grid place-items-center shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
