import React from "react";
import { motion } from "framer-motion";

const Confirmation = ({
  message = "Are you sure you want to proceed?",
  confirmText = "Delete",
  cancelText = "Cancel",
  confirmVariant = "danger",
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="space-y-6">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="text-muted text-[15px] leading-relaxed"
      >
        {message}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex gap-3 pt-2"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onCancel}
          className="flex-1 py-3 px-6 rounded-xl border border-line text-muted hover:bg-white/5 transition-colors font-medium"
        >
          {cancelText}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onConfirm}
          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
            confirmVariant === "danger"
              ? "bg-rose hover:brightness-110 text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {confirmText}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Confirmation;
