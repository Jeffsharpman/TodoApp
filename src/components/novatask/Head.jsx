import React, { useContext } from "react";
import { motion } from "framer-motion";
import { PageContext } from "../lib/PageContext";
import { fadeInUp } from "../lib/animations";

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
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        aria-label="Task overview"
        className="showcase-card"
      >
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
                <p className="font-mono text-[9px] text-muted tracking-[2px] mt-3">
                  Built by{" "}
                  <a
                    href="https://sharpman.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Oyenuga Joshua
                  </a>{" "}
                  · Part of the Sharpman portfolio
                </p>
              </div>

              {/* Right Side - Stats + Progress */}
              <div className="flex items-end gap-12">
                {/* Total */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-ink font-mono tracking-tighter">
                    {totalTodos}
                  </div>
                  <div className="text-xs font-mono text-muted tracking-widest mt-1.5">
                    TOTAL
                  </div>
                </motion.div>

                {/* Completed */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-primary font-mono tracking-tighter">
                    {completedTodos}
                  </div>
                  <div className="text-xs font-mono text-muted tracking-widest mt-1.5">
                    DONE
                  </div>
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="w-52"
                >
                  <div className="flex justify-between text-xs font-mono mb-3 text-muted">
                    <span>PROGRESS</span>
                    <span className="text-primary">
                      {Math.round(percentCompleted)}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-line rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${percentCompleted}%` }}
                      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
      </motion.section>
    </>
  );
};

export default Head;
