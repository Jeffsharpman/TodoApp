import { useContext } from "react";
import { motion } from "framer-motion";
import { PageContext } from "../lib/PageContext";
import { Plus, Menu, User } from "lucide-react";
import { slideDown } from "../lib/animations";
import Button from "../UI/Button";
import ThemeToggle from "../UI/ThemeToggle";
import Logo from "../UI/Logo";

const Nav = () => {
  const { setIsModalOpen } = useContext(PageContext);

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
        <Logo className="scale-75 origin-left" />

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsModalOpen(true)}
            className="!px-3 !py-1.5 !text-[11px] !font-mono !tracking-wide !rounded-md"
          >
            <Plus size={16} strokeWidth={3} />
            TASK
          </Button>

          <ThemeToggle />

          <Button variant="icon" size="icon" className="!w-[30px] !h-[30px] !rounded-lg">
            <User size={16} className="text-primary" />
          </Button>

          <Button variant="outline" size="icon" className="!w-[30px] !h-[30px] !rounded-lg">
            <Menu size={18} className="text-muted" />
          </Button>
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
          <Button variant="outline" size="sm" className="!text-[9px] !font-mono !px-2 !py-1 !tracking-wide !rounded-md">
            DOCS
          </Button>
          <Button variant="outline" size="sm" className="!text-[9px] !font-mono !px-2 !py-1 !tracking-wide !rounded-md">
            GITHUB
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <Logo className="scale-90 origin-left" />

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
            <Button variant="outline" size="sm" className="!text-[10px] !font-mono !px-4 !py-2 !tracking-widest !rounded-lg">
              DOCS
            </Button>
            <Button variant="outline" size="sm" className="!text-[10px] !font-mono !px-4 !py-2 !tracking-widest !rounded-lg">
              GITHUB
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsModalOpen(true)}
              className="!text-[10px] !font-mono !px-5 !py-2 !tracking-widest !rounded-lg"
            >
              <Plus size={16} strokeWidth={3} />
              NEW TASK
            </Button>
          </div>

          <ThemeToggle />

          <Button variant="icon" size="icon" className="!w-8 !h-8 !rounded-xl">
            <User size={18} className="text-primary" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Nav;
