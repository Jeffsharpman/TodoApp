const StyledSelect = ({ options, defaultValue, onChange, className = "" }) => (
  <select
    defaultValue={defaultValue}
    onChange={onChange}
    className={`bg-card border border-line text-muted font-mono text-sm px-5 py-3 rounded-2xl focus:outline-none focus:border-primary cursor-pointer transition-colors ${className}`}
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default StyledSelect;
