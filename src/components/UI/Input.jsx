const Input = ({ label, type = "text", placeholder, required, className = "", ...props }) => (
  <div className={className}>
    {label && (
      <label className="mb-1 block text-[10px] font-mono tracking-widest text-muted">
        {label}
      </label>
    )}
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
      {...props}
    />
  </div>
);

export default Input;
