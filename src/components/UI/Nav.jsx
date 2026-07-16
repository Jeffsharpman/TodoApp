import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import NavLink from "./NavLink";
import NAV from "./NavItem";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "px-3 py-2 sm:px-4 lg:px-8"
          : "px-3 py-3 sm:px-4 lg:px-0 lg:py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 ${
          scrolled
            ? "border border-line bg-card/80 px-4 py-2 backdrop-blur-xl"
            : "px-2 sm:px-4 lg:px-8"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="shrink-0">
          <Logo className="origin-left scale-75 sm:scale-90 lg:scale-100" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-5 xl:gap-8 lg:flex">
          {NAV.map(([label, href]) => (
            <NavLink key={href} href={href} variant="desktop">
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button href="#contact" size="sm">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-2 bg-primary transition-all duration-300 ${
                  open ? "translate-y-0 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full bg-primary transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full translate-y-2 bg-primary transition-all duration-300 ${
                  open ? "translate-y-0 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mx-3 mt-3 rounded-3xl border border-line bg-card/90 p-6 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {NAV.map(([label, href]) => (
                <NavLink
                  key={href}
                  href={href}
                  variant="mobile"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              ))}

              <Button
                href="#contact"
                size="md"
                className="mt-2 w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Nav;
