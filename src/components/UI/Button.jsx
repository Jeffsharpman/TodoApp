import { forwardRef } from "react";

const sizeMap = {
  sm: "px-4 py-2 text-xs tracking-wider",
  md: "px-5 py-3 text-sm tracking-wider",
  lg: "px-8 py-4 text-sm tracking-wider",
  icon: "p-2",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer select-none";

const variants = {
  primary: `${base} bg-primary text-black hover:brightness-110`,
  outline: `${base} border border-line text-muted hover:border-primary hover:text-primary`,
  ghost: `${base} text-muted hover:bg-line/50 hover:text-ink`,
  danger: `${base} bg-rose text-white hover:brightness-110`,
  icon: `${base} text-muted hover:text-ink hover:bg-line/50`,
};

const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    href,
    className = "",
    children,
    onClick,
    disabled,
    type,
    ...props
  },
  ref
) {
  const classes = `${variants[variant]} ${sizeMap[size]} ${className}`;

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
