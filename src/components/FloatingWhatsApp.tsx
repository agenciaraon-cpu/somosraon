import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5575988644742"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
