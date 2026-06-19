import React, { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 h-dvh w-screen z-50 flex items-center justify-center bg-black/75 backdrop-blur-md">
      {/* Modal Container */}
      <div className="bg-card border border-line rounded-2xl w-full max-w-md mx-4 overflow-hidden shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider text-ink">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-muted hover:text-ink text-2xl leading-none transition-colors p-1 rounded-lg hover:bg-white/5"
          >
            <X />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(100dvh-120px)] overflow-y-auto text-muted">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
