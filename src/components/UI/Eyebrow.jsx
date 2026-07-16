const Eyebrow = ({ as: Tag = "span", size = "md", color = "primary", className = "", children }) => {
  const sizes = {
    sm: "text-[9px] tracking-[0.3em]",
    md: "text-[10px] tracking-[0.4em]",
  };

  const colors = {
    primary: "text-(--primary)",
    muted: "text-(--primary)/60",
    light: "text-fg/50",
  };

  return (
    <Tag
      className={`font-ui uppercase ${sizes[size]} ${colors[color]} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Eyebrow;
