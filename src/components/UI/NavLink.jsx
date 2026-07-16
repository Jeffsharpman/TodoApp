const NavLink = ({ href, onClick, active, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        active ? "text-primary" : "text-ink/80"
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;
