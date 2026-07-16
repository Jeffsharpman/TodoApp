import { useContext } from "react";
import { motion } from "framer-motion";
import { PageContext } from "../lib/PageContext";
import { fadeInUp } from "../lib/animations";
import Card from "../UI/Card";
import StatBlock from "../UI/StatBlock";
import ProgressBar from "../UI/ProgressBar";

const Header = () => {
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
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      aria-label="Task overview"
    >
      <Card variant="surface" padding="p-8 md:p-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <p className="font-mono text-xs text-primary tracking-[3px]">
              {formattedToday}
            </p>
            <h1 className="font-['Bebas_Neue'] text-6xl md:text-7xl tracking-[-2px] text-ink mt-2 leading-none">
              MY TASKS
            </h1>
            <p className="mt-4 text-lg text-muted">
              You have{" "}
              <span className="font-semibold text-primary">
                {activeTodos} tasks
              </span>{" "}
              remaining today.
            </p>
            <p className="mt-3 font-mono text-[9px] text-muted tracking-[2px]">
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

          <div className="flex items-end gap-12">
            <StatBlock value={totalTodos} label="TOTAL" delay={0.3} />
            <StatBlock
              value={completedTodos}
              label="DONE"
              color="var(--primary)"
              delay={0.4}
            />
            <div className="w-52">
              <div className="mb-3 flex justify-between text-xs font-mono text-muted">
                <span>PROGRESS</span>
                <span className="text-primary">
                  {Math.round(percentCompleted)}%
                </span>
              </div>
              <ProgressBar percent={percentCompleted} />
            </div>
          </div>
        </div>
      </Card>
    </motion.section>
  );
};

export default Header;
