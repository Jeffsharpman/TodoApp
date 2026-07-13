import React, { useContext } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";
import { PageContext } from "../lib/PageContext";
import { Plus, Menu, User } from "lucide-react";
import { useTheme } from "../lib/ThemeContext";
import { slideDown } from "../lib/animations";

const ThemeToggle = ({ toggle, dark }) => (
  <button
    onClick={toggle}
    aria-label="Toggle theme"
    className="w-[30px] h-[30px] bg-secondary border border-line rounded-lg flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
  >
    {dark ? (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ) : (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    )}
  </button>
);

const Header = () => {
  const { setIsModalOpen } = useContext(PageContext);
  const { dark, toggle } = useTheme();

  return (
    <motion.header
      variants={slideDown}
      initial="hidden"
      animate="visible"
      aria-label="Main navigation"
      className="bg-canvas border-b border-line sticky top-0 z-50"
    >
      {/* Mobile Layout */}
      <div className="flex items-center justify-between px-4 py-3.5 md:hidden">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 flex-shrink-0 rounded-[10px] overflow-hidden bg-primary border border-line flex items-center justify-center">
            <img
              src={Logo}
              alt="Sharpman Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<span class="text-black font-mono text-xs font-medium">JS</span>`;
              }}
            />
          </div>
          <div>
            <span className="font-['Bebas_Neue'] text-[22px] tracking-[2px] text-ink leading-none">
              SHARP<span className="text-primary">MAN</span>
            </span>
            <p className="font-mono text-[9px] text-muted tracking-[2px] -mt-0.5">
              DESIGN. CODE. <span className="text-primary">ELEVATE</span>.
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-black font-mono text-[11px] font-medium px-3 py-1.5 rounded-md tracking-wide flex items-center gap-1 hover:brightness-110 transition-all"
          >
            <Plus size={16} strokeWidth={3} />
            TASK
          </motion.button>

          <ThemeToggle toggle={toggle} dark={dark} />

          <div className="w-[30px] h-[30px] bg-secondary border border-line rounded-lg flex items-center justify-center">
            <User size={16} className="text-primary" />
          </div>

          <button
            aria-label="Open menu"
            className="w-[30px] h-[30px] border border-line rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <Menu size={18} className="text-muted" />
          </button>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-line md:hidden">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="font-mono text-[9px] text-muted tracking-[3px]">
            NOVATASK
          </span>
        </div>
        <div className="flex gap-1.5">
          <button className="border border-line text-muted font-mono text-[9px] px-2 py-1 rounded-md tracking-wide hover:text-primary hover:border-primary transition-colors">
            DOCS
          </button>
          <button className="border border-line text-muted font-mono text-[9px] px-2 py-1 rounded-md tracking-wide hover:text-primary hover:border-primary transition-colors">
            GITHUB
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 flex-shrink-0 rounded-xl overflow-hidden bg-primary border border-line flex items-center justify-center">
            <img
              src={Logo}
              alt="Sharpman Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<span class="text-black font-mono text-sm font-medium">JS</span>`;
              }}
            />
          </div>

          <div>
            <span className="font-['Bebas_Neue'] text-[26px] tracking-[2px] text-ink leading-none">
              SHARP<span className="text-primary">MAN</span>
            </span>
            <p className="font-mono text-[9px] text-muted tracking-[2px] -mt-0.5">
              DESIGN. CODE. <span className="text-primary">ELEVATE</span>.
            </p>
          </div>

          <div className="w-px h-7 bg-line" />

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="font-mono text-[10px] text-muted tracking-[3px]">
              NOVATASK
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="border border-line text-muted hover:border-primary hover:text-primary font-mono text-[10px] px-4 py-2 rounded-lg tracking-widest transition-colors">
              DOCS
            </button>
            <button className="border border-line text-muted hover:border-primary hover:text-primary font-mono text-[10px] px-4 py-2 rounded-lg tracking-widest transition-colors">
              GITHUB
            </button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-black hover:brightness-110 font-mono text-[10px] font-medium px-5 py-2 rounded-lg tracking-widest transition-all flex items-center gap-1.5"
            >
              <Plus size={16} strokeWidth={3} />
              NEW TASK
            </motion.button>
          </div>

          <ThemeToggle toggle={toggle} dark={dark} />

          <div className="w-8 h-8 bg-secondary border border-line rounded-xl flex items-center justify-center">
            <User size={18} className="text-primary" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
