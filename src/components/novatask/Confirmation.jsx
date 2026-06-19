import React from "react";

const Confirmation = ({
  message = "Are you sure you want to proceed?",
  confirmText = "Delete",
  cancelText = "Cancel",
  confirmVariant = "danger", // "danger" | "primary"
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="space-y-6">
      <p className="text-muted text-[15px] leading-relaxed">{message}</p>

      <div className="flex gap-3 pt-2">
        <button
          onClick={onCancel}
          className="flex-1 py-3 px-6 rounded-xl border border-line text-muted hover:bg-white/5 transition-colors font-medium"
        >
          {cancelText}
        </button>

        <button
          onClick={onConfirm}
          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all active:scale-[0.985] ${
            confirmVariant === "danger"
              ? "bg-rose hover:brightness-110 text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
