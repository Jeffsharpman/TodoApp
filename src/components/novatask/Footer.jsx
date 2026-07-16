import { useContext } from "react";
import { motion } from "framer-motion";
import { PageContext } from "../lib/PageContext";
import { fadeInUp, staggerContainer } from "../lib/animations";
import Card from "../UI/Card";
import StatusDot from "../UI/StatusDot";
import Divider from "../UI/Divider";
import ProgressBar from "../UI/ProgressBar";

const Footer = () => {
  const { totalTodos, completedTodos, activeTodos } = useContext(PageContext);

  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      aria-label="Site footer"
    >
      <Card variant="default" padding="p-7">
        <motion.div
          variants={fadeInUp}
          className="mb-5 flex items-center justify-between gap-3 flex-wrap"
        >
          <StatusDot label="NOVATASK · STATS" />
          <span className="font-mono text-[9px] text-muted tracking-wide">
            SESSION #001
          </span>
        </motion.div>

        <Divider className="mb-5" />

        <motion.div variants={fadeInUp} className="flex">
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
              <div className="mt-1 font-mono text-[9px] text-muted tracking-[3px]">
                {item.label}
              </div>
              <ProgressBar
                percent={item.pct}
                color={item.bar}
                height="h-[2px]"
                animated={false}
                className="mt-2.5"
              />
            </div>
          ))}
        </motion.div>

        <Divider className="mt-5" />

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-between gap-2 pt-4 flex-wrap"
        >
          <span className="font-mono text-[9px] text-muted tracking-wide">
            Designed & Developed by{" "}
            <a
              href="https://sharpman.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Sharpman
            </a>
          </span>
          <StatusDot label="ALL SYSTEMS GO" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-3 flex items-center justify-between gap-2 pt-3 border-t border-line flex-wrap"
        >
          <span className="font-mono text-[9px] text-muted tracking-wide">
            NOVATASK · <span className="text-primary">SHARPMAN</span>
          </span>
          <a
            href="https://sharpman.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] text-muted tracking-wide hover:text-primary transition-colors"
          >
            VIEW SHARPMAN PORTFOLIO
          </a>
        </motion.div>
      </Card>
    </motion.footer>
  );
};

export default Footer;
