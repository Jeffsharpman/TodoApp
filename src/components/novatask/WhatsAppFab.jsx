import { MessageCircle } from "lucide-react";
const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.link/byhqkf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[oklch(0.65_0.18_150)] px-5 py-3.5 text-sm font-semibold text-white shadow-elegant animate-float hover:scale-105 transition-transform sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppFab;
