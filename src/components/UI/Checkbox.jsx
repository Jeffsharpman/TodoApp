const Checkbox = ({ checked, color, onClick, className = "" }) => (
  <div
    className={`mt-0.5 cursor-pointer transition-all flex items-center justify-center w-6 h-6 rounded-lg border-2 text-lg font-bold flex-shrink-0 ${
      checked
        ? "text-black"
        : "border-line group-hover:border-inksoft"
    } ${className}`}
    onClick={onClick}
    style={
      checked
        ? { backgroundColor: color, borderColor: color }
        : {}
    }
  >
    {checked && "\u2713"}
  </div>
);

export default Checkbox;
