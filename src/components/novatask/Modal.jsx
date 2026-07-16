import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { backdropVariant, scaleIn } from "../lib/animations";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 h-dvh w-screen z-50 flex items-center justify-center bg-black/75 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md mx-4"
          >
            <Card
              variant="default"
              className="overflow-hidden shadow-2xl shadow-black/50"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-line">
                <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider text-ink">
                  {title}
                </h3>
                <Button variant="icon" size="icon" onClick={onClose}>
                  <X size={20} />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[calc(100dvh-120px)] overflow-y-auto text-muted">
                {children}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
