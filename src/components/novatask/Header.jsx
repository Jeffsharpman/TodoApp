import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { PageContext } from "../context/PageContext";

const Header = () => {
  const { setIsModalOpen } = useContext(PageContext);

  return (
    <header className="bg-[#0E0E0E] border-b border-[#2C2C2C] sticky top-0 z-50">
      {/* ── Single row on mobile ── */}
      <div className="flex items-center justify-between px-4 py-3.5 md:hidden">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 flex-shrink-0 rounded-[10px] overflow-hidden bg-[#C8F135] border border-[#2C2C2C] flex items-center justify-center">
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
            <span className="font-['Bebas_Neue'] text-[22px] tracking-[2px] text-white leading-none">
              SHARP<span className="text-[#C8F135]">MAN</span>
            </span>
            <p className="font-mono text-[9px] text-[#555] tracking-[2px] -mt-0.5">
              DESIGN. CODE. <span className="text-[#C8F135]">ELEVATE</span>.
            </p>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#C8F135] text-black font-mono text-[11px] font-medium px-2.5 py-1.5 rounded-md tracking-wide"
          >
            + TASK
          </button>
          <div className="w-[30px] h-[30px] bg-[#1E1E1E] border border-[#2C2C2C] rounded-lg flex items-center justify-center">
            <span className="text-[#C8F135] font-mono text-[11px]">JS</span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            className="w-[30px] h-[30px] border border-[#2C2C2C] rounded-lg flex flex-col items-center justify-center gap-[4px]"
          >
            <span className="block w-3.5 h-px bg-[#888]" />
            <span className="block w-3.5 h-px bg-[#888]" />
            <span className="block w-3.5 h-px bg-[#888]" />
          </button>
        </div>
      </div>

      {/* ── Bottom bar on mobile — app name + nav ── */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-[#2C2C2C] md:hidden">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#C8F135] rounded-full" />
          <span className="font-mono text-[9px] text-[#666] tracking-[3px]">
            NOVATASK
          </span>
        </div>
        <div className="flex gap-1.5">
          <button className="border border-[#2C2C2C] text-[#666] font-mono text-[9px] px-2 py-1 rounded-md tracking-wide">
            DOCS
          </button>
          <button className="border border-[#2C2C2C] text-[#666] font-mono text-[9px] px-2 py-1 rounded-md tracking-wide">
            GITHUB
          </button>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 flex-shrink-0 rounded-xl overflow-hidden bg-[#C8F135] border border-[#2C2C2C] flex items-center justify-center">
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
            <span className="font-['Bebas_Neue'] text-[26px] tracking-[2px] text-white leading-none">
              SHARP<span className="text-[#C8F135]">MAN</span>
            </span>
            <p className="font-mono text-[9px] text-[#555] tracking-[2px] -mt-0.5">
              DESIGN. CODE. <span className="text-[#C8F135]">ELEVATE</span>.
            </p>
          </div>
          <div className="w-px h-7 bg-[#2C2C2C]" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#C8F135] rounded-full" />
            <span className="font-mono text-[10px] text-[#666] tracking-[3px]">
              NOVATASK
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="border border-[#2C2C2C] text-[#888] hover:border-[#C8F135] hover:text-[#C8F135] font-mono text-[10px] px-4 py-2 rounded-lg tracking-widest transition-colors">
              DOCS
            </button>
            <button className="border border-[#2C2C2C] text-[#888] hover:border-[#C8F135] hover:text-[#C8F135] font-mono text-[10px] px-4 py-2 rounded-lg tracking-widest transition-colors">
              GITHUB
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C8F135] text-black hover:bg-[#d4f54a] font-mono text-[10px] font-medium px-5 py-2 rounded-lg tracking-widest transition-colors"
            >
              + NEW TASK
            </button>
          </div>
          <div className="w-8 h-8 bg-[#1E1E1E] border border-[#2C2C2C] rounded-xl flex items-center justify-center">
            <span className="text-[#C8F135] font-mono text-sm font-medium">
              JS
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
