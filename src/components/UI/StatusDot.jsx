const StatusDot = ({ label, className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
    <span className="font-mono text-[9px] text-muted tracking-[3px]">
      {label}
    </span>
  </div>
);

export default StatusDot;
