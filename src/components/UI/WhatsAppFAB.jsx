import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => {
  return (
    <motion.a
      href="https://wa.link/byhqkf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-black shadow-lg transition-all hover:brightness-110 sm:bottom-8 sm:right-8"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </motion.div>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppFAB;
