import React, { useContext } from "react";
import { PageContext } from "../context/PageContext";

const Head = () => {
  const { totalTodos, completedTodos, activeTodos, percentCompleted } = useContext(PageContext);

  const today = new Date();
  const formattedToday = today
    .toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
    })
    .toUpperCase()
    .replace(",", "");

  return (
    <>
      {/* 01 — AppHeader */}
      <section id="header">
        {/* <p className="comp-label">01 — APP HEADER</p> */}
        <div className="showcase-card">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="font-mono text-xs text-[#C8F135] tracking-widest">
                  {formattedToday}
                </p>
                <h1 className="font-['Bebas_Neue'] text-6xl tracking-tighter mt-2">
                  MY TASKS
                </h1>
                <p className="text-[#888880] mt-3">
                  You have{" "}
                  <span className="text-[#C8F135] font-semibold">
                    {activeTodos} tasks
                  </span>{" "}
                  remaining today.
                </p>
              </div>

              <div className="flex items-center gap-10">
                <div className="text-center">
                  <div className="text-5xl font-bold">{totalTodos}</div>
                  <div className="text-xs font-mono text-[#888880] mt-1">
                    TOTAL
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#C8F135]">
                    {completedTodos}
                  </div>
                  <div className="text-xs font-mono text-[#888880] mt-1">
                    DONE
                  </div>
                </div>
                <div className="w-48">
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span>PROGRESS</span>
                    <span>{Math.round(percentCompleted)}%</span>
                  </div>
                  <div className="h-2.5 bg-[#2C2C2C] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C8F135] rounded-full transition-all duration-300"
                      style={{ width: `${percentCompleted}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
