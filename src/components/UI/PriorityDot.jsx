const PriorityDot = ({ color, className = "" }) => (
  <div
    className={`mt-2.5 w-3 h-3 rounded-full flex-shrink-0 ${className}`}
    style={{ background: color }}
  />
);

export default PriorityDot;
