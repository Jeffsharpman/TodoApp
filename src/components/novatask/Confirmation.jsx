import { motion } from "framer-motion";
import Button from "../UI/Button";

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
        <Button
          variant="outline"
          onClick={onCancel}
          className="flex-1 !py-3 !px-6 !rounded-xl"
        >
          {cancelText}
        </Button>

        <Button
          variant={confirmVariant === "danger" ? "danger" : "primary"}
          onClick={onConfirm}
          className="flex-1 !py-3 !px-6 !rounded-xl"
        >
          {confirmText}
        </Button>
      </motion.div>
    </div>
  );
};

export default Confirmation;
