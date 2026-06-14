import React, { useContext } from "react";
import { PageContext } from "../context/PageContext";

const Footer = () => {
  const { totalTodos, completedTodos, activeTodos } = useContext(PageContext);

  return (
    <section id="footer">
      <div className="bg-[#0E0E0E] border border-[#2C2C2C] rounded-xl p-7">
        {/* Top row */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#C8F135] rounded-full" />
            <span className="font-mono text-[9px] text-[#444] tracking-[3px]">
              NOVATASK · STATS
            </span>
          </div>
          <span className="font-mono text-[9px] text-[#333] tracking-wide">
            SESSION #001
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2C2C2C] mb-5" />

        {/* Stats */}
        <div className="flex">
          {[
            {
              label: "TOTAL",
              value: totalTodos,
              color: "#F2F0EB",
              bar: "#2C2C2C",
              pct: 100,
            },
            {
              label: "ACTIVE",
              value: activeTodos,
              color: "#C8F135",
              bar: "#C8F135",
              pct: totalTodos ? (activeTodos / totalTodos) * 100 : 0,
            },
            {
              label: "DONE",
              value: completedTodos,
              color: "#444444",
              bar: "#444444",
              pct: totalTodos ? (completedTodos / totalTodos) * 100 : 0,
            },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className={`flex-1 min-w-[80px] px-6 ${i === 0 ? "pl-0" : ""} ${i < arr.length - 1 ? "border-r border-[#2C2C2C]" : ""}`}
            >
              <div
                className="font-['Bebas_Neue'] text-[52px] leading-none tracking-wide"
                style={{ color: item.color }}
              >
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="font-mono text-[9px] text-[#555] tracking-[3px] mt-1">
                {item.label}
              </div>
              <div className="h-[2px] bg-[#1a1a1a] rounded-full mt-2.5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.pct}%`, background: item.bar }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between flex-wrap gap-2 mt-5 pt-4 border-t border-[#2C2C2C]">
          <span className="font-mono text-[9px] text-[#333] tracking-wide">
            SHARPMAN · DESIGN. CODE. ELEVATE.
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-[#C8F135] rounded-full" />
            <span className="font-mono text-[9px] text-[#333] tracking-wide">
              ALL SYSTEMS GO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
