import React, { useContext } from "react";
import { PageContext } from "../lib/PageContext";

const Footer = () => {
  const { totalTodos, completedTodos, activeTodos } = useContext(PageContext);

  return (
    <footer aria-label="Site footer">
      <div className="bg-canvas border border-line rounded-xl p-7">
        {/* Top row */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="font-mono text-[9px] text-muted tracking-[3px]">
              NOVATASK · STATS
            </span>
          </div>
          <span className="font-mono text-[9px] text-muted tracking-wide">
            SESSION #001
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-line mb-5" />

        {/* Stats */}
        <div className="flex">
          {[
            {
              label: "TOTAL",
              value: totalTodos,
              color: "var(--ink)",
              bar: "var(--line)",
              pct: 100,
            },
            {
              label: "ACTIVE",
              value: activeTodos,
              color: "var(--primary)",
              bar: "var(--primary)",
              pct: totalTodos ? (activeTodos / totalTodos) * 100 : 0,
            },
            {
              label: "DONE",
              value: completedTodos,
              color: "var(--muted)",
              bar: "var(--muted)",
              pct: totalTodos ? (completedTodos / totalTodos) * 100 : 0,
            },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className={`flex-1 min-w-[80px] px-6 ${i === 0 ? "pl-0" : ""} ${i < arr.length - 1 ? "border-r border-line" : ""}`}
            >
              <div
                className="font-['Bebas_Neue'] text-[52px] leading-none tracking-wide"
                style={{ color: item.color }}
              >
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="font-mono text-[9px] text-muted tracking-[3px] mt-1">
                {item.label}
              </div>
              <div className="h-[2px] bg-line rounded-full mt-2.5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.pct}%`, background: item.bar }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between flex-wrap gap-2 mt-5 pt-4 border-t border-line">
          <span className="font-mono text-[9px] text-muted tracking-wide">
            SHARP<span className="text-primary">MAN</span> · DESIGN. CODE. <span className="text-primary">ELEVATE</span>.
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="font-mono text-[9px] text-muted tracking-wide">
              ALL SYSTEMS GO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
