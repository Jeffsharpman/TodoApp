const Badge = ({ variant = "default", className = "", style, onClick, children, ...props }) => {
  const variants = {
    default: "rounded-full border border-line text-muted",
    solid: "rounded-full bg-primary/10 text-primary border border-primary/30",
    danger: "rounded-full bg-rose/10 text-rose border border-rose/30",
    success: "rounded-full bg-lime/10 text-lime border border-lime/30",
    warning: "rounded-full bg-amber/10 text-amber border border-amber/30",
    info: "rounded-full bg-violet/10 text-violet border border-violet/30",
    glass: "rounded-full bg-card/80 backdrop-blur-sm border border-line/50",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium font-mono ${variants[variant]} ${className}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
