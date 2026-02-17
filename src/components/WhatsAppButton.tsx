import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/94779188020"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] shadow-lg transition-transform hover:scale-110"
    aria-label="Contact via WhatsApp"
  >
    <MessageCircle size={28} className="text-[hsl(0,0%,100%)]" />
  </a>
);

export default WhatsAppButton;
