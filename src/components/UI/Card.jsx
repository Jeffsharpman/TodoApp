const Card = ({
  variant = "default",
  padding = "",
  rounded = "2xl",
  hover = false,
  className = "",
  style,
  children,
  ...props
}) => {
  const roundeds = {
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    "4xl": "rounded-[2rem]",
  };

  const variants = {
    default: "border border-line bg-card",
    elevated: "border border-line bg-card shadow-lg",
    glass: "bg-card/80 backdrop-blur-xl border border-line/50",
    accent: "border border-primary/30 bg-card",
    surface: "bg-surface2 border border-line",
  };

  const hov = hover
    ? "transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
    : "";

  return (
    <div
      className={`relative overflow-hidden ${roundeds[rounded]} ${variants[variant]} ${hov} ${padding} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
