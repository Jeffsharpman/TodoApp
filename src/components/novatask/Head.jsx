import React, { useContext } from "react";
import { PageContext } from "../lib/PageContext";

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
      <section aria-label="Task overview" className="showcase-card">
          <div className="p-8 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              {/* Left Side - Title & Info */}
              <div>
                <p className="font-mono text-xs text-primary tracking-[3px]">
                  {formattedToday}
                </p>

                <h1 className="font-['Bebas_Neue'] text-6xl md:text-7xl tracking-[-2px] text-ink mt-2 leading-none">
                  MY TASKS
                </h1>

                <p className="text-muted mt-4 text-lg">
                  You have{" "}
                  <span className="text-primary font-semibold">
                    {activeTodos} tasks
                  </span>{" "}
                  remaining today.
                </p>
              </div>

              {/* Right Side - Stats + Progress */}
              <div className="flex items-end gap-12">
                {/* Total */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-ink font-mono tracking-tighter">
                    {totalTodos}
                  </div>
                  <div className="text-xs font-mono text-muted tracking-widest mt-1.5">
                    TOTAL
                  </div>
                </div>

                {/* Completed */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary font-mono tracking-tighter">
                    {completedTodos}
                  </div>
                  <div className="text-xs font-mono text-muted tracking-widest mt-1.5">
                    DONE
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-52">
                  <div className="flex justify-between text-xs font-mono mb-3 text-muted">
                    <span>PROGRESS</span>
                    <span className="text-primary">
                      {Math.round(percentCompleted)}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-line rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${percentCompleted}%` }}
                    />
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
