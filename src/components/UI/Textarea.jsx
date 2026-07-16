import { forwardRef } from "react";

const Textarea = forwardRef(({ label, placeholder, rows = 4, required, className = "", ...props }, ref) => (
  <div className={className}>
    {label && (
      <label className="mb-1 block text-[10px] font-mono tracking-widest text-muted">
        {label}
      </label>
    )}
    <textarea
      ref={ref}
      rows={rows}
      placeholder={placeholder}
      required={required}
      className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
      {...props}
    />
  </div>
));

export default Textarea;
